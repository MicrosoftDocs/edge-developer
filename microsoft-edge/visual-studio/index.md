---
description: Microsoft Edge (Chromium) and Visual Studio
title: Visual Studio
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/28/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs, visual studio, debugger
---
# Visual Studio  

Microsoft [Visual Studio][MicrosoftVisualstudioVs] is an integrated development environment \(IDE\) that helps you edit, debug, build, and publish your web apps.  Visual Studio is a feature-rich program that is used for many aspects of your web development.  More than the standard editor and debugger in most IDEs, Visual Studio includes the following features to help you develop.  

*   compilers  
*   code completion tools  
*   graphical designers  
*   and many more  

To install Visual Studio \(if not already installed\), navigate to [Download Visual Studio][MicrosoftVisualstudioDownloads].  

Currently, Visual Studio 2019 supports debugging JavaScript in Microsoft Edge for your ASP\.NET Framework and ASP\.NET Core apps.  To debug Microsoft Edge from Visual Studio, complete the following steps.  

## Launch Microsoft Edge  

All with a single action, use Visual Studio to complete the following actions.  

1.  Build your ASP.NET and ASP.NET Core app.  
1.  Start your web server.  
1.  Launch Microsoft Edge.  
1.  Connect the Visual Studio debugger.  
    
Launch from Microsoft Edge to debug JavaScript running in Microsoft Edge directly from your IDE.  

### Create a new ASP.NET Core web app  

Open Visual Studio 2019 and choose **Create a new project**.  On the next screen, choose **ASP.NET Core Web Application** > **Next**.  

:::image type="complex" source="./media/create-new-project.png" alt-text="Create a new ASP.NET Core Web Application" lightbox="./media/create-new-project.png":::
   Create a new ASP.NET Core Web App  
:::image-end:::  

Provide a **Project name** for your new project and choose **Create**.  For example, choose **React.js** as the template > **Create**.  The React.js template helps you integrate React.js with an ASP.NET Core app.  

### Launch Microsoft Edge from Visual Studio  

After your project is created, open **ClientApp/src/components/Counter.js**.  To tell Visual Studio to debug JavaScript, choose the dropdown next to the green **Play** button and **IIS Express**.  

:::image type="complex" source="./media/vs-dropdown.png" alt-text="The dropdown next to the green Play button and IIS Express" lightbox="./media/vs-dropdown.png":::
   The dropdown next to the green **Play** button and **IIS Express**  
:::image-end:::  

Choose **Script Debugging** > **Enabled**.  

:::image type="complex" source="./media/enable-script-debugging.png" alt-text="Enable script debugging in Visual Studio" lightbox="./media/enable-script-debugging.png":::
   Enable script debugging in Visual Studio  
:::image-end:::  

In the same dropdown menu, choose **Web Browser** and choose the Microsoft Edge Insider channel that you want Visual Studio to launch:  Microsoft Edge Canary, Dev, or Beta.  To install a Microsoft Edge Insider channel \(if not already installed\), navigate to [Download Microsoft Edge Insider Channels][MicrosoftedgeinsiderDownload].  

:::image type="complex" source="./media/set-web-browser.png" alt-text="In Visual Studio, choose the Microsoft Edge Insider channel to launch" lightbox="./media/set-web-browser.png":::
   In Visual Studio, choose the Microsoft Edge Insider channel to launch  
:::image-end:::  

> [!NOTE]
> If you choose Microsoft Edge \(EdgeHTML\), Visual Studio launches it instead of Microsoft Edge \(Chromium\).  [Install the preview channels of Microsoft Edge][MicrosoftedgeinsiderDownload] and choose each or ensure that the version of Microsoft Edge installed on your machine is Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  

Now that Visual Studio is correctly configured, choose the green **Play** button.  Visual Studio builds your app, start the web server, launch Microsoft Edge, and navigate to `https://localhost:44362/` or whatever port is specified in `launchSettings.json`.  

:::image type="complex" source="./media/edge-launch.png" alt-text="Microsoft Edge launched from Visual Studio" lightbox="./media/edge-launch.png":::
   Microsoft Edge launched from Visual Studio  
:::image-end:::  

### Debug JavaScript running in Microsoft Edge  

Switch back to Visual Studio.  In `Counter.js`, to set a breakpoint on Line 13, choose the gutter next to the line.  

:::image type="complex" source="./media/set-breakpoint.png" alt-text="In Visual Studio, set a breakpoint next to Line 13 in Counter.js" lightbox="./media/set-breakpoint.png":::
   In Visual Studio, set a breakpoint next to Line 13 in `Counter.js`  
:::image-end:::  

Now switch back to the instance of Microsoft Edge that Visual Studio launched.  In the NavMenu on the left of the page, Choose **Counter** > **Increment**.  

:::image type="complex" source="./media/edge-counter.png" alt-text="The Counter page in your ASP.NET Core web app" lightbox="./media/edge-counter.png":::
   The Counter page in your ASP.NET Core web app  
:::image-end:::  

The JavaScript debugger in Visual Studio is going to hit the breakpoint you set in `Counter.js`.  Visual Studio has now paused running of the JavaScript running in Microsoft Edge and you may step through the script line-by-line.  

:::image type="complex" source="./media/hit-breakpoint.png" alt-text="Visual Studio pauses JavaScript running in Microsoft Edge" lightbox="./media/hit-breakpoint.png":::
   Visual Studio pauses JavaScript running in Microsoft Edge  
:::image-end:::  

The previous example demonstrated the functionality available in Visual Studio.  To learn more about all the capabilities of Visual Studio 2019, navigate to [Visual Studio documentation][VisualstudioWindowsViewVs2019PreserveViewTrue].  

## Attach to Microsoft Edge  

The previous workflow required you to launch Microsoft Edge using Visual Studio.  Use the following new workflow to attach the Visual Studio debugger to an already running instance of Microsoft Edge.  

First, ensure that there are no running instances of Microsoft Edge.  Now, from your command line, run the following command.  

```console
start msedge –remote-debugging-port=9222
```  

From Visual Studio, choose the **Debug** menu > **Attach to Process** or select `Ctrl`+`Alt`+`P`.  

:::image type="complex" source="./media/attach-to-process.png" alt-text="Choose Attach to Process in Visual Studio" lightbox="./media/attach-to-process.png":::
   Choose **Attach to Process** in Visual Studio  
:::image-end:::  

From the **Attach to Process** dialog, set **Connection type** to **Chrome devtools protocol websocket (no authentication)**.  In the **Connecting target** textbox, type `http://localhost:9222/` and select `Enter`.  The **Attach to Process** dialog should display the list of open tabs open in Microsoft Edge.  

:::image type="complex" source="./media/attach-to-process-dialog.png" alt-text="Configure the Attach to Process dialog in Visual Studio" lightbox="./media/attach-to-process-dialog.png":::
   Configure the **Attach to Process** dialog in Visual Studio  
:::image-end:::  

Choose **Select…** > the **JavaScript (Microsoft Edge – Chromium)** checkbox.  To add tabs, navigate to new tabs, and close tabs and display the changes reflected in the **Attach to Process** dialog, choose the **Refresh** button.  Choose the tab you want to debug > **Attach**.  

The Visual Studio debugger is now attached to Microsoft Edge.  You may pause running of JavaScript, set breakpoints, and display the `console.log()` statements directly in the Debug Output window in Visual Studio.  

## Getting in touch with the Microsoft Visual Studio team  

The Microsoft Visual Studio team are eager to learn more about how you work with JavaScript in Visual Studio.  To send your feedback, choose the **Feedback** icon in Visual Studio or tweet [@VisualStudio and @EdgeDevTools][TwitterIntentTweetTextVisualStudioEdgeDevTools].  

:::image type="complex" source="./media/feedback-icon.png" alt-text="The Feedback icon in Visual Studio" lightbox="./media/feedback-icon.png":::
   The **Feedback** icon in Visual Studio  
:::image-end:::  

<!-- links -->  

[MicrosoftVisualstudioVs]: https://visualstudio.microsoft.com/vs "Visual Studio 2019"  

[MicrosoftVisualstudioDownloads]: https://visualstudio.microsoft.com/downloads "Download Visual Studio 2019"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[VisualstudioWindowsViewVs2019PreserveViewTrue]: /visualstudio/windows/?view=vs-2019&preserve-view=true "Visual Studio documentation | Microsoft Docs"  

[TwitterIntentTweetTextVisualStudioEdgeDevTools]: https://twitter.com/intent/tweet?text=@VisualStudio+@EdgeDevTools "@VisualStudio+@EdgeDevTools | Twitter"  
