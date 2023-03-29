---
title: Power User FAQ
description: Answers to some frequently asked questions about WebView2 from non-developers who want to learn more about it.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 03/29/2023
---
# WebView2 Power User FAQ
Most of our documentation is intended for developers who want to use WebView2 in their applications. This FAQ is intended for a normal person looking to understand what this `msedgewebview2.exe` application is on your computer. If we don't have your question here, feel free to hit "Feedback" in the top-right corner, or open a specific issue [on our GitHub](https://github.com/MicrosoftDocs/edge-developer/issues) and we'll see if we can add it.

## What is WebView2?
WebView2 is a way for any Windows app developer to embed web content in their application. This can let them write code for a website or web app, then re-use it in their Windows application, saving time and effort.

## Why are there so many WebView2 processes running?
WebView2 follows Microsoft Edge and [Chromium's process model](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md). Having functionality broken up into multiple processes help reliability, security, and performance - Each process performs a certain responsibility, and can do that uninterrupted, even if one of the others hits a problem. There are normally a few processes - WebView2 manager, a GPU process, some utility processes (one for network, audio, etc. depending on the content), and some "renderer" processes. You'll have one set of processes per app using WebView2, and roughly one renderer process per WebView2 in the app, similar to how you have one renderer process per tab in a browser. See our [process model documentation]( https://learn.microsoft.com/microsoft-edge/webview2/concepts/process-model) for more details.


## Why is WebView2 using so much memory, CPU, etc.?
In most cases this is related to how WebView2 is being used, not WebView2 itself. If the application is rendering poorly optimized web content, then it may consume more resources. Task Manager will normally show the processes parented, but can be incorrect at times or if you sort by a column other than "Name". You can also use Microsoft’s [Process Explorer](https://learn.microsoft.com/sysinternals/downloads/process-explorer) tool. If there's an app consistently causing heavy resource usage you can follow up with the support for that app.

## Is WebView2 a virus?
WebView2 is not a virus. It is a Microsoft product that is updated automatically to ensure that your applications have the latest security fixes. Most people will see it used by Widgets, Teams, Office, Outlook, Weather, and many more applications. Any application can *use* WebView2 though, so it's possible for a malicious application to use WebView2, just like it can use any other Windows API or feature.

## Will uninstalling Edge break WebView2?
No, Edge can be uninstalled without causing a problem for WebView2's evergreen distribution method. When both Edge and WebView2 are installed, Edge's installer will link the applications together so that one doesn't use extra disk space.

## I uninstalled WebView2, why is it back again?
WebView2 is pre-installed on Windows 11 and optimistically installed on most Windows 10 devices ([details here](https://blogs.windows.com/msedgedev/2022/06/27/delivering-the-microsoft-edge-webview2-runtime-to-windows-10-consumers/)). Many apps built on WebView2 also perform checks to re-install WebView2 when being installed or launched. Enterprises may also push WebView2 to devices they manage.


