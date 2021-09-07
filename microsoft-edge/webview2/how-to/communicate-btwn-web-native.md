---
description: Embed web content into native applications using WebView2 
title: Embed web content into native applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/7/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview, 
---
# Embed web content into native applications  

The Microsoft Edge WebView2 control lets you embed web content into native applications. You can use WebView2 in different ways, depending on what you need to accomplish. This article describes how to communicate using simple messages, JavaScript code, and native objects.

Some common use cases include:
* Update the native host window title after navigating to a different website.
* Send a native camera object and use its methods from a web app.

## Before you begin

Download and run the WebView2 sample application. 


## Simple Messages

WebView2 controls let you exchange simple messages between web-based applications and natively hosted application. The messages can be text or data.

You can use most common data types such as 'JSON' or 'String' to send messages between the host application and WebView2.

### Sending Messages from the host app to WebView2

This example changes the color of text based on message. Host app is telling webview2 to change color.

Start by setting up a button on the native side to send a web message. Then add the sample code provided to post the web message with blue text.

1. Use C++ to create a Windows button that calls `SendJsonWebMessage()` when selected.

    For more information about creating a button in C++, navigate to the [How to Create a Button - Win32 apps][CreateButtonWin32].

1. Add this code to be called when the button is selected.

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

1. Create a JavaScript listener on the web.

    > [!NOTE] 
    > The rest of this tutorial uses the HTML file from the WebView2 sample. Compare your HTML file as you work or copy and paste the content from [ScenarioWebMessage.html][ScenarioWebMessageHTML].

	1. In Visual Studio, start a new JavaScript project named `SampleApp`.
    1. Create a file named `ScenarioWebMessage.html`.
    1. Add the following JavaScript to the header of the HTML file:

    ```JavaScript
    window.chrome.webview.addEventListener('message', arg => {
        if ("SetColor" in arg.data) {
            document.getElementById("colorable").style.color = arg.data.SetColor;
        }
    });
    ```

    Add the following content to the HTML file.

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

1. Save and run the project to view the results in Microsoft Edge WebView2.

### Receiving message strings via postMessage

This WebView2 example transmits a message from the web page to the native application using `window.chrome.webview.postMessage`.

Working in the previously created SampleApp project, create a text box and button on a web page to send a message to the host app.

1. Select **File** > **New** > **File...** and choose **HTML page**.

    ```html
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        <asp:TextBox runat="server"></asp:TextBox>
        <asp:Button runat="server" Text="Button"></asp:Button>
    </body>
    </html>
    ```

	1. Example Code: (SampleApp ScenarioWebMessage.html)
		1. ?
	1. Set up a handler in host app (ScenarioWebMessage.cpp)
		1. ? 
### Round trip messages:
1. Start with web: (SampleApp ScenarioWebMessage.html)
	1. ? 
1. Then host app: (Sample App: ScriptComponent.cpp line 31)

## JavaScript Code

SCENARIO 2: JAVASCIRPT CODE:  allow host app to run JavaScript on the web side, 
The host app is dictating/ passing the code that is being run. 


1. Sending JavaScript code to execute on web side via ExecuteScriptAsync

	If you want to send JavaScript information to the page using WebView2, use the `ExecuteScriptAsync` function, which returns the JavaScript result back to the `ExecuteScript` caller. 
	
	This method is often used to send code that executes on the web.
	
	For more information about navigate to: [Use JavaScript in WebView2 apps][UseJavaScriptInWebView2Apps].


## Native Objects


SCENARIO 3: NATIVE OBJECTS: Method calls/ functions: 
Pass the native object/ reference to the web. Then call the object's functions/methods from the web.

**Allow web to access native objects**

AddHostObjectToScript

1. If you are trying to use messages to represent method calls, you should use the AddHostObjectToScript API. This API at a high level lets you expose native (host) objects into the web side and act as a proxy. You may access these objects using window.chrome.webview.hostObjects.{name}.
1. Full tutorial TBD






Congratulations.  You've successfully embedded web content into native applications.  



## See also  

* ???.
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  
[CreateButtonWin32]: ../../../../windows/win32/controls/create-a-button "How to Create a Button - Win32 apps | Microsoft Docs"  

[ScenarioWebMessageHTML]: https://github.com/MicrosoftEdge/WebView2Samples/blob/a12bfcc2bc8a1155529c35c7bd4645036f492ca0/SampleApps/WebView2APISample/assets/ScenarioWebMessage.html "ScenarioWebMessage HTML | GitHub Microsoft Edge WebView2 Samples"


[UseJavaScriptInWebView2Apps]: /javascript "Use JavaScript in WebView2 apps - Microsoft Edge Development | Microsoft Docs"