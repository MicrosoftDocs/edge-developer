---
description: Embed web content into native applications using WebView2 
title: Embed web content into native applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview, WebView2 messages, WebView2 JavaScript, WebView2 native objects
---
# Embed web content into native applications  

The Microsoft Edge WebView2 control lets you embed web content into native applications. You can use WebView2 in different ways, depending on what you need to accomplish. This article describes how to communicate using simple messages, JavaScript code, and native objects.

Some common use cases include:
* Update the native host window title after navigating to a different website.
* Send a native camera object and use its methods from a web app.

## Before you begin

In this tutorial we will walk through code in the Sample App to demonstrate some of the communication capabilties in WebView2. Clone the [WebView2 Samples App][WebView2Samples], build, and run to follow along. 

## Scenario: Simple Messaging

WebView2 controls let you exchange simple messages between web and native sides of an application. You can use data types such as `JSON` or `String` to send messages between the host application and WebView2.

### Sending Messages from the host app to WebView2

This example shows how the sample app changes the color of text in the front end based on a message from the host app.

To demo this functionality run the sample app, click on the Scenario tab, and click on the Web Messaging option. You should see a screen like below:
  
:::image type="complex" source="./media/ScenarioWebMessaging.png" alt-text="Web Messaging Demo" lightbox="./media/ScenarioWebMessaging.png":::
    Web Messaging Demo
:::image-end:::      

Notice the first section titled Posting Messages. Lets follow this instruction by clicking Script -> Post Message JSON. And clicking OK in the popup that comes up. You'll notice that the message turns blue. 

:::image type="complex" source="./media/postmessagejson.png" alt-text="Post Message JSON Demo" lightbox="./media/postmessagejson.png":::
    Post Message JSON Demo
:::image-end:::      

Let's dive deeper into how we were able to accomplish this. The sample starts by creating a button on the native side to send a web message. Then it adds the code (provided below) to post the web message to change the color of the web text to blue.

1. The example includes C++ code to create a Windows button that calls `SendJsonWebMessage()` when selected.

    For more information about creating a button in C++, navigate to the [How to Create a Button](/windows/win32/controls/create-a-button).

1. When the button is selected, it calls the following code from the [ScriptComponent.cpp][ScriptComponentCPP] file.

    ```cpp
    // Prompt the user for some JSON and then post it as a web message.
    void ScriptComponent::SendJsonWebMessage()
    {
        TextInputDialog dialog(
            m_appWindow->GetMainWindow(),
            L"Post Web Message JSON",
            L"Web message JSON:",
            L"Enter the web message as JSON.",
            L"{\"SetColor\":\"blue\"}");
        if (dialog.confirmed)
        {
            m_webView->PostWebMessageAsJson(dialog.input.c_str());
        }
    }
    ```

    > [!NOTE] 
    > The rest of this tutorial uses the HTML file from the WebView2 sample. Compare your HTML file as you work or copy and paste the content from [ScenarioWebMessage.html][ScenarioWebMessageHTML].

    The example uses a JavaScript event listener on the web.

1. The [ScenarioWebMessage.html][ScenarioWebMessageHTML] file includes the following JavaScript in the header.

    ```JavaScript
    window.chrome.webview.addEventListener('message', arg => {
        if ("SetColor" in arg.data) {
            document.getElementById("colorable").style.color = arg.data.SetColor;
        }
    });
    ```

    The event listener *listens* for a message event and makes the message text colorable.

    The content of the HTML file describes the messaging exercise.

    ```html
    <h1>WebMessage sample page</h1>
    <p>This page demonstrates basic interaction between the host app and the webview by
    means of Web Messages.</p>

    <h2>Posting Messages</h2>
    <p id="colorable">Messages can be posted from the host app to the webview using the
    functions <code>ICoreWebView2::PostWebMessageAsJson</code> and
    <code>ICoreWebView2::PostWebMessageAsString</code>. Try using the menu item
    "Script-&gt;Post Message JSON" to send the message <code>{"SetColor":"blue"}</code>.
    It should change the text color of this paragraph.</p>
    ```

    <!-- Not sure if this step is accurate or how it works -->
1. The `Post Message JSON` menu item is in the Microsoft Visual C++ generated resource script file [WebView2APISample.rc][WebView2APISampleRC].

    ```xml
    MENUITEM "Post Message JSON",           IDM_POST_WEB_MESSAGE_JSON
    ```
 
1. The script file in turn calls the case `IDM_POST_WEB_MESSAGE_JSON` in the C++ file [ScriptComponent.cpp][ScriptComponentCPP].

    ```cpp
    case IDM_POST_WEB_MESSAGE_JSON:
        SendJsonWebMessage();
        return true;
    ```
Done! That is how WebView2 communicates through simple messages.

### Receiving message strings via postMessage

This example follows the 'Recieving Messages section' to change the text of the title bar. The host app receives a message from WebView2 with the new title bar text.

The C++ file handles the title text and communicates it to the host app as a string.

1. When the button is selected, WebView2 transmits a message from the web page to the native application using `window.chrome.webview.postMessage` in [ScenarioWebMessage.html][ScenarioWebMessageHTML].

    ```html
    function SetTitleText() {
        let titleText = document.getElementById("title-text");
        window.chrome.webview.postMessage(`SetTitleText ${titleText.value}`);
    }
    ```

    The HTML file includes a text box and button to send a message to the host app.

    ```html
    <h2>Receiving Messages</h2>
    <p>The host app can receive messages by registering an event handler with
    <code>ICoreWebView2::add_WebMessageReceived</code>. If you enter text and click
    "Send", this page will send a message to the host app which will change the text of
    the title bar.</p>
    <input type="text" id="title-text"/>
    <button onclick="SetTitleText()">Send</button>
    ```

1. The event handler in the [ScenarioWebMessage C++ file][ScenarioWebMessageCPP] processes the new title text string and communicates it to the host app as a string.
    <!-- Is this accurate?  And complete? -->

    ```CPP
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<ICoreWebView2WebMessageReceivedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->TryGetWebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
    ```

### Round-trip messages:

This example follows the section in the WebMessage sample page titled 'Round Trip' and shows a round-trip message from WebView2 to the host app, and back. The host app receives a request from WebView2 and returns the bounds of the active window.

When requested by the host app, the C++ file gets the window bounds and sends the data to WebView2 as a JSON web message.

1. When the button is selected, WebView2 transmits a message from the web page to the native application using `window.chrome.webview.postMessage` in [ScenarioWebMessage.html][ScenarioWebMessageHTML].

    ```html
    function GetWindowBounds() {
        window.chrome.webview.postMessage("GetWindowBounds");
    }
    ```

    The HTML file includes a button to get window bounds from the host app.

    ```html
    <h2>Round trip</h2>
    <p>The host app can send messages back in response to received messages. If you click
    "Get window bounds", the host app will report back the bounds of its window, which will
    appear in the text box.</p>
    <button onclick="GetWindowBounds()">Get window bounds</button><br>
    <textarea id="window-bounds" rows="4" readonly></textarea>
    ```

1. The event handler in the [ScenarioWebMessage C++ file][ScenarioWebMessageCPP] gets the window bounds and sends the data to the host app using web message as string.
    <!-- Not sure web message as string is accurate -->

     ```CPP
    // Setup the web message received event handler before navigating to
    // ensure we don't miss any messages.
    CHECK_FAILURE(m_webView->add_WebMessageReceived(
        Microsoft::WRL::Callback<ICoreWebView2WebMessageReceivedEventHandler>(
            [this](ICoreWebView2* sender, ICoreWebView2WebMessageReceivedEventArgs* args)
    {
        wil::unique_cotaskmem_string uri;
        CHECK_FAILURE(args->get_Source(&uri));

        // Always validate that the origin of the message is what you expect.
        if (uri.get() != m_sampleUri)
        {
            return S_OK;
        }
        wil::unique_cotaskmem_string messageRaw;
        CHECK_FAILURE(args->TryGetWebMessageAsString(&messageRaw));
        std::wstring message = messageRaw.get();

        if (message.compare(0, 13, L"SetTitleText ") == 0)
        {
            m_appWindow->SetTitleText(message.substr(13).c_str());
        }
        else if (message.compare(L"GetWindowBounds") == 0)
        {
            RECT bounds = m_appWindow->GetWindowBounds();
            std::wstring reply =
                L"{\"WindowBounds\":\"Left:" + std::to_wstring(bounds.left)
                + L"\\nTop:" + std::to_wstring(bounds.top)
                + L"\\nRight:" + std::to_wstring(bounds.right)
                + L"\\nBottom:" + std::to_wstring(bounds.bottom)
                + L"\"}";
            CHECK_FAILURE(sender->PostWebMessageAsJson(reply.c_str()));
        }
        return S_OK;
    }).Get(), &m_webMessageReceivedToken));
    ```

    <!-- Not sure if this step is accurate or how it works -->
1. The host app uses the `Inject Script` menu item is in the Microsoft Visual C++ generated resource script file [WebView2APISample.rc][WebView2APISampleRC] to send the window bounds back to the web page.

    ```xml
        MENUITEM "Inject Script",               IDM_INJECT_SCRIPT
    ```
 
1. The script file in turn calls the case `IDM_INJECT_SCRIPT` in the C++ file [ScriptComponent.cpp][ScriptComponentCPP].

    ```cpp
        case IDM_INJECT_SCRIPT:
            InjectScript();
            return true;
    ```

1. The window bounds display on the web page.

## Scenario: Sending JavaScript Code

Set up the host app run JavaScript on the web side. The host app specifies the code to run and passes it to the WebView control. 

1. Send JavaScript code to execute on web side using `ExecuteScriptAsync`.

    If you want to send JavaScript information to the page using WebView2, use the `ExecuteScriptAsync` function, which returns the JavaScript result back to the `ExecuteScript` caller. 

    This method is often used to send code that executes on the web.

    For more information navigate to: [Use JavaScript in WebView2 apps][UseJavaScriptInWebView2Apps].


## Scenario: Sending Native Objects

Pass the native object to the web. Then call the object's methods from the web.

<!-- "Allow web to access native objects" note from Jason -->

`AddHostObjectToScript`

To use messages that represent method calls, use the `AddHostObjectToScript` API. At a high level, this API lets you expose native (host) objects into the web side and act as a proxy. You may access these objects using `window.chrome.webview.hostObjects.{name}`.

1. Full tutorial TBD

Congratulations.  You've successfully embedded web content into native applications.  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  
<!-- [CreateButtonWin32]: ../../../../windows/win32/controls/create-a-button "How to Create a Button - Win32 apps | Microsoft Docs"   -->

[ScenarioWebMessageHTML]: https://github.com/MicrosoftEdge/WebView2Samples/blob/a12bfcc2bc8a1155529c35c7bd4645036f492ca0/SampleApps/WebView2APISample/assets/ScenarioWebMessage.html "ScenarioWebMessage HTML | GitHub Microsoft Edge WebView2 Samples"

[UseJavaScriptInWebView2Apps]: /javascript "Use JavaScript in WebView2 apps - Microsoft Edge Development | Microsoft Docs"

[WebView2inWin32apps]: ../get-started/win32.md "Get Started with WebView2 in Win32 apps | Microsoft Edge Development"

[WebView2APISampleRC]: https://github.com/MicrosoftEdge/WebView2Samples/blob/c7d7c75184dec0c46634f27a8f4beba320b04618/SampleApps/WebView2APISample/WebView2APISample.rc "WebView2APISample RC | GitHub Microsoft Edge WebView2 Samples"

[ScriptComponentCPP]: https://github.com/MicrosoftEdge/WebView2Samples/blob/c7d7c75184dec0c46634f27a8f4beba320b04618/SampleApps/WebView2APISample/ScriptComponent.cpp "ScriptComponent C++ | GitHub Microsoft Edge WebView2 Samples"

[ScenarioWebMessageCPP]: https://github.com/MicrosoftEdge/WebView2Samples/blob/a12bfcc2bc8a1155529c35c7bd4645036f492ca0/SampleApps/WebView2APISample/ScenarioWebMessage.cpp "ScenarioWebMessage C++ | GitHub Microsoft Edge WebView2 Samples"

[WebView2Samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - Microsoft Edge | GitHub Repo"