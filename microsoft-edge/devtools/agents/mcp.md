---
title: Using Microsoft Edge and WebView2 with Chrome DevTools MCP
description: Using Microsoft Edge and WebView2 with Chrome DevTools MCP.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/27/2026
---
# Using Microsoft Edge and WebView2 with Chrome DevTools MCP

The [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) server supports connecting to any Chromium-based browser, including Microsoft Edge and WebView2.  Because the server is built for Chrome, you need to provide extra configuration to point the server at Microsoft Edge or a WebView2 instance.

This guide covers three scenarios:

1. [Launching Edge](#1-launching-edge) — the MCP server starts Edge for you.
1. [Auto-connecting to a running Edge instance](#2-auto-connecting-to-a-running-edge-instance) — you start Edge yourself and the MCP server connects to it.
1. [Auto-connecting to WebView2](#3-auto-connecting-to-webview2) — the MCP server connects to a running WebView2 host app.

**Detailed contents:**
* [Prerequisites](#prerequisites)
* [1. Launching Edge](#1-launching-edge)
* [Additional flags](#additional-flags)
* [Edge executable paths for other channels](#edge-executable-paths-for-other-channels)
* [2. Auto-connecting to a running Edge instance](#2-auto-connecting-to-a-running-edge-instance)
   * [Step 1: Enable remote debugging in Edge](#step-1-enable-remote-debugging-in-edge)
   * [Step 2: Configure the MCP server](#step-2-configure-the-mcp-server)
   * [Step 3: Test your setup](#step-3-test-your-setup)
   * [Edge user data directories for other channels](#edge-user-data-directories-for-other-channels)
* [3. Auto-connecting to WebView2](#3-auto-connecting-to-webview2)
   * [Step 1: Enable remote debugging for WebView2](#step-1-enable-remote-debugging-for-webview2)
   * [Step 2: Find the WebView2 user data directory](#step-2-find-the-webview2-user-data-directory)
   * [Step 3: Configure the MCP server](#step-3-configure-the-mcp-server)
   * [Step 4: Test your setup](#step-4-test-your-setup)
* [How it works](#how-it-works)
* [Configuring other MCP clients](#configuring-other-mcp-clients)
   * [Copilot CLI](#copilot-cli)
   * [Other MCP clients (Claude Code, Cursor, Gemini CLI, etc.)](#other-mcp-clients-claude-code-cursor-gemini-cli-etc)
* [Troubleshooting](#troubleshooting)
   * ["Could not connect to Chrome" error with auto-connect](#could-not-connect-to-chrome-error-with-auto-connect)
   * [Edge not found at executablePath](#edge-not-found-at-executablepath)
   * [WebView2 won't connect](#webview2-wont-connect)
* [Further reading](#further-reading)


<!-- ====================================================================== -->
## Prerequisites

* [Node.js](https://nodejs.org) LTS version
* [npm](https://www.npmjs.com)
* Microsoft Edge installed (any channel: Stable, Beta, Dev, or Canary)
* An MCP client such as VS Code (with GitHub Copilot), Copilot CLI, Claude Code, Cursor, etc.

> [!NOTE]
> The examples in this guide use the VS Code `mcp.json` format.  If you're using a different MCP client, see [Configuring other MCP clients](#configuring-other-mcp-clients) at the end of this guide.

todo: a test link not within a Note: [Configuring other MCP clients](#configuring-other-mcp-clients)


<!-- ====================================================================== -->
## 1. Launching Edge

In this mode, the MCP server launches Edge directly using the `--executablePath` flag pointed at your Edge binary.

Copy and paste the configuration snippet for your platform into your VS Code `mcp.json`.  These examples use Edge Stable.

##### [Windows](#tab/windows/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--executablePath=%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe"
      ]
    }
  }
}
```

##### [macOS](#tab/macos/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--executablePath=/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
      ]
    }
  }
}
```

##### [Linux](#tab/linux/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--executablePath=/usr/bin/microsoft-edge"
      ]
    }
  }
}
```

---


<!-- ====================================================================== -->
## Additional flags

You can combine `--executablePath` with other flags:

* `--headless` — run without a visible browser window
* `--isolated` — use a temporary profile directory (cleaned up on close)
* `--viewport=1280x720` — set initial viewport size

Example with headless and isolated (Windows):

```json
"args": [
  "-y",
  "chrome-devtools-mcp@latest",
  "--executablePath=%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe",
  "--headless",
  "--isolated"
]
```


<!-- ====================================================================== -->
## Edge executable paths for other channels

If you're not using Edge Stable, replace the `--executablePath` value with the appropriate path for your channel.

##### [Windows](#tab/windows/)

| Channel | Default Path |
|---|---|
| Stable | `%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe` |
| Beta | `%ProgramFiles(x86)%\Microsoft\Edge Beta\Application\msedge.exe` |
| Dev | `%ProgramFiles(x86)%\Microsoft\Edge Dev\Application\msedge.exe` |
| Canary | `%LOCALAPPDATA%\Microsoft\Edge SxS\Application\msedge.exe` |

##### [macOS](#tab/macos/)
   
| Channel | Default Path |
|---|---|
| Stable | `/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge` |
| Beta | `/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge` |
| Dev | `/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge` |
| Canary | `/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge` |

##### [Linux](#tab/linux/)

| Channel | Default Path |
|---|---|
| Stable | `/usr/bin/microsoft-edge` |
| Beta | `/usr/bin/microsoft-edge-beta` |
| Dev | `/usr/bin/microsoft-edge-dev` |

---

> [!NOTE]
> These are default install locations.  Paths may vary based on user configuration, version, or group policies.  Linux does not have a Canary channel.


<!-- ====================================================================== -->
## 2. Auto-connecting to a running Edge instance

In this mode, you start Edge yourself (or it's already running), and the MCP server connects to it.  This is useful when:

* You want to maintain browser state between manual testing and agent-driven testing.
* You need to be signed into a website that blocks automated browser launches.
* You want to inspect an existing session.

> [!WARNING]
> When using auto-connect, your agent inherits your active session, including logged-in accounts, cookies, and other data surfaced through JavaScript APIs.  This may expose Personally Identifiable Information (PII) to the agent.  Only use this mode with agents you trust and be careful with your prompts.


<!-- ------------------------------ -->
#### Step 1: Enable remote debugging in Edge

You have two options:

**Option A:** Start Edge with the remote debugging flag:

`msedge.exe --remote-debugging-port=9222`

**Option B:** In a running Edge instance, navigate to `edge://inspect/#remote-debugging` and enable remote debugging from that page.


<!-- ------------------------------ -->
#### Step 2: Configure the MCP server

Use `--autoConnect` combined with `--user-data-dir` pointing to your Edge user data directory.  These examples use Edge Stable.

##### [Windows](#tab/windows/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--autoConnect",
        "--user-data-dir=%LocalAppData%\\Microsoft\\Edge\\User Data"
      ]
    }
  }
}
```

##### [macOS](#tab/macos/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--autoConnect",
        "--user-data-dir=~/Library/Application Support/Microsoft Edge"
      ]
    }
  }
}
```

##### [Linux](#tab/linux/)

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--autoConnect",
        "--user-data-dir=~/.config/microsoft-edge"
      ]
    }
  }
}
```

---


<!-- ------------------------------ -->
#### Step 3: Test your setup

Make sure Edge is running, then enter the following prompt in your MCP client:

`Navigate to https://example.com and take a screenshot`

The MCP server should connect to your running Edge instance and execute the command.


<!-- ------------------------------ -->
#### Edge user data directories for other channels

If you're not using Edge Stable, replace the `--user-data-dir` value with the appropriate path for your channel.

##### [Windows](#tab/windows/)

| Channel | Default Path |
|---|---|
| Stable | `%LOCALAPPDATA%\Microsoft\Edge\User Data` |
| Beta | `%LOCALAPPDATA%\Microsoft\Edge Beta\User Data` |
| Dev | `%LOCALAPPDATA%\Microsoft\Edge Dev\User Data` |
| Canary | `%LOCALAPPDATA%\Microsoft\Edge SxS\User Data` |

##### [macOS](#tab/macos/)

| Channel | Default Path |
|---|---|
| Stable | `~/Library/Application Support/Microsoft Edge` |
| Beta | `~/Library/Application Support/Microsoft Edge Beta` |
| Dev | `~/Library/Application Support/Microsoft Edge Dev` |
| Canary | `~/Library/Application Support/Microsoft Edge Canary` |

##### [Linux](#tab/linux/)

| Channel | Default Path |
|---|---|
| Stable | `~/.config/microsoft-edge` |
| Beta | `~/.config/microsoft-edge-beta` |
| Dev | `~/.config/microsoft-edge-dev` |

---

> [!NOTE]
> These are default locations.  Paths may vary based on user configuration, version, or group policies.  Linux does not have a Canary channel.


<!-- ====================================================================== -->
## 3. Auto-connecting to WebView2

WebView2 doesn't have a "launch" scenario — the host application creates the WebView2 instance.  The MCP server connects to it via auto-connect, similar to the Edge scenario above.


<!-- ------------------------------ -->
#### Step 1: Enable remote debugging for WebView2

You need to configure the WebView2 runtime to start with `--remote-debugging-port=0`.  There are two ways to do this:

**Option A: Using WebView2Utilities**

Use WebView2Utilities and follow the How to: Auto open DevTools guide.  Instead of checking the "Auto open DevTools" checkbox, type `--remote-debugging-port=0` in the Arguments textbox.

**Option B: Via the Windows Registry**

Create a registry value to set `AdditionalBrowserArguments`.  Replace `appname.exe` with the name of your WebView2 host executable:

```
[HKEY_CURRENT_USER\Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments]
"appname.exe"="--remote-debugging-port=0"
```


<!-- ------------------------------ -->
#### Step 2: Find the WebView2 user data directory

You need to discover the user data directory of the host app.  The path should end with `EBWebView` — this suffix is automatically added by the WebView2 runtime.

You can find this path using WebView2Utilities: go to the **Host Apps** tab, select your running host app, and look at the **User data folder** row.

> [!NOTE]
> If you're copying the user data path from source code, you may need to append `\EBWebView` yourself since the runtime adds this automatically at runtime.


<!-- ------------------------------ -->
#### Step 3: Configure the MCP server

```json
{
  "servers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--autoConnect",
        "--user-data-dir=%LocalAppData%\\Packages\\<APP_PACKAGE>\\LocalState\\EBWebView"
      ]
    }
  }
}
```

Replace `<APP_PACKAGE>` with the package name of your host app.


<!-- ------------------------------ -->
#### Step 4: Test your setup

Launch your WebView2 host app, then use your MCP client to interact with it:

`Take a snapshot of the current page`


<!-- ====================================================================== -->
## How it works

Under the hood, the Chrome DevTools MCP server uses [Puppeteer](https://github.com/puppeteer/puppeteer) to control the browser.  When you provide `--executablePath`, Puppeteer launches that binary directly instead of searching for Chrome.  When you provide `--autoConnect` with `--user-data-dir`, the server reads the `DevToolsActivePort` file from that directory to discover the WebSocket endpoint of the running browser and connects to it.

Since Edge and WebView2 are Chromium-based, the DevTools Protocol is compatible and the MCP tools work as expected.


<!-- ====================================================================== -->
## Configuring other MCP clients

The examples above use the VS Code `mcp.json` format.  Here's how to adapt them for other clients:


<!-- ------------------------------ -->
#### Copilot CLI

Copilot CLI stores its config in `~/.copilot/mcp-config.json`.  The format uses `mcpServers` (instead of `servers`) and `"type": "local"` (instead of `"type": "stdio"`):

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "type": "local",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--executablePath=%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe"
      ]
    }
  }
}
```

You can also add an MCP server interactively by running `copilot` and then `/mcp add`.


<!-- ------------------------------ -->
#### Other MCP clients (Claude Code, Cursor, Gemini CLI, etc.)

Most MCP clients use the generic mcpServers format without a `type` field:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--executablePath=%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe"
      ]
    }
  }
}
```

The `args` array is the same across all clients — only the wrapper format differs.  Refer to your MCP client's documentation for the exact config file location and format.


<!-- ====================================================================== -->
## Troubleshooting


<!-- ------------------------------ -->
#### "Could not connect to Chrome" error with auto-connect

* Ensure Edge is running and remote debugging is enabled.
* Verify the `--user-data-dir` path is correct for your Edge channel.
* Check that DevToolsActivePort exists in the user data directory (it's created when remote debugging is active).


<!-- ------------------------------ -->
#### Edge not found at executablePath

* Verify the path exists on disk.  Edge Canary on Windows installs per-user under `%LOCALAPPDATA%`, not in `Program Files`.
* On Windows, use double backslashes (`\\`) in JSON strings.


<!-- ------------------------------ -->
#### WebView2 won't connect

* Confirm the registry key matches your host app's executable name exactly.
* Restart the host app after adding the registry key — the argument is only read at WebView2 creation time.
* Ensure the `--user-data-dir` path ends with `EBWebView`.


<!-- ====================================================================== -->
## Further reading

* [Chrome DevTools MCP README](https://github.com/ChromeDevTools/chrome-devtools-mcp)
* [Edge and WebView2 in Chrome DevTools MCP](https://deletethis.net/dave/2026-03/edge-and-webview2-in-chrome-devtools-mcp/) — original blog post by David Risney
* [WebView2Utilities](https://github.com/david-risney/WebView2Utilities) — tool for managing WebView2 debugging
* [Chrome DevTools remote debugging documentation](https://developer.chrome.com/docs/devtools/remote-debugging/)
