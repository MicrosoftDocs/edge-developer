---
description: Microsoft Edge (Chromium) and Visual Studio
title: Visual Studio
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/18/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs, visual studio, debugger
---
# Visual Studio  

Microsoft [Visual Studio][MicrosoftVisualstudioVs] is an integrated development environment \(IDE\).   Use it to edit, debug, build, and publish your web apps.  It is a feature-rich program that may be used for many aspects of your web development.  Over and above the standard editor and debugger that most IDEs provide, Visual Studio includes the following features to ease your development process.  

*   compilers  
*   code completion tools  
*   graphical designers  
*   many more  
    
If you are not already using Visual Studio, navigate to [Download Visual Studio][MicrosoftVisualstudioDownloads] to download it.  

Currently, Visual Studio 2019 supports debugging JavaScript in Microsoft Edge for your ASP.NET Framework and ASP.NET Core apps.  Complete the following steps to use Visual Studio to debug Microsoft Edge.  

## Launch Microsoft Edge  

Visual Studio completes the following workflow using a single button.  

1.  Builds your ASP.NET and ASP.NET Core app.  
1.  Starts your web server.  
1.  Launches Microsoft Edge.  
1.  Connects the Visual Studio debugger.  
    
The simplified workflow allows you to debug JavaScript that run in Microsoft Edge directly from your IDE.  

### Create a new ASP.NET Core web app  

Open Visual Studio 2019 and choose **Create a new project**.  On the next screen, choose **ASP.NET Core Web app** > **Next**.  

:::image type="complex" source="./media/create-new-project.png" alt-text="Create a new ASP.NET Core Web app" lightbox="./media/create-new-project.png":::
   Create a new ASP.NET Core Web app  
:::image-end:::  

Provide a **Project name** for your new project and choose **Create**.  For the purposes of the example, choose **React.js** as the template, and choose **Create**.  The **React.js** template specifies how to integrate React.js with an ASP.NET Core app.  

### Launch Microsoft Edge from Visual Studio  

After you create your project, open `ClientApp/src/components/Counter.js`.  Now, to use Visual Studio to debug JavaScript, choose the dropdown next to the green **Play** button and **IIS Express**.  

:::image type="complex" source="./media/vs-dropdown.png" alt-text="The dropdown next to the green Play button and IIS Express" lightbox="./media/vs-dropdown.png":::
   The dropdown next to the green **Play** button and **IIS Express**  
:::image-end:::  

Choose **Script Debugging** > **Enabled**.  

:::image type="complex" source="./media/enable-script-debugging.png" alt-text="Turn on script debugging in Visual Studio" lightbox="./media/enable-script-debugging.png":::
   Turn on script debugging in Visual Studio  
:::image-end:::  

In the same dropdown, choose **Web Browser** > the preview channel of Microsoft Edge that you want Visual Studio to launch, such as Microsoft Edge Canary, Dev, or Beta.  If you are not already using one of the Microsoft Edge preview channels, navigate to [Download Microsoft Edge Insider Channels][MicrosoftedgeinsiderDownload] to download one.  

:::image type="complex" source="./media/set-web-browser.png" alt-text="Choose the preview channel of Microsoft Edge that you want Visual Studio to launch" lightbox="./media/set-web-browser.png":::
   Choose the preview channel of Microsoft Edge that you want Visual Studio to launch  
:::image-end:::  

> [!NOTE]
> If you choose Microsoft Edge \(EdgeHTML\), Visual Studio launches it instead of Microsoft Edge \(Chromium\).  [Install the one of the preview channels of Microsoft Edge][MicrosoftedgeinsiderDownload] or ensure that the version of Microsoft Edge installed on your machine is Microsoft Edge \(Chromium\) and not Microsoft Edge \(EdgeHTML\).  

Now that Visual Studio is correctly configured, choose the green **Play** button.  Visual Studio builds your app, start the web server, launch Microsoft Edge, and navigate to `https://localhost:44362/` or whatever port is specified in `launchSettings.json`.  

:::image type="complex" source="./media/edge-launch.png" alt-text="Microsoft Edge launches from Visual Studio" lightbox="./media/edge-launch.png":::
   Microsoft Edge launches from Visual Studio  
:::image-end:::  

### Debug JavaScript running in Microsoft Edge  

Switch back to Visual Studio.  In `Counter.js`, to set a breakpoint on Line 13, choose the gutter next to the line.  

:::image type="complex" source="./media/set-breakpoint.png" alt-text="Choose the gutter next to Line 13 in Counter.js to set a breakpoint in Visual Studio" lightbox="./media/set-breakpoint.png":::
   Choose the gutter next to Line 13 in `Counter.js` to set a breakpoint in Visual Studio  
:::image-end:::  

Now switch back to the instance of Microsoft Edge that Visual Studio launched.  Choose on **Counter** in the NavMenu on the left of the webpage.  Now choose **Increment**.  

:::image type="complex" source="./media/edge-counter.png" alt-text="The Counter page in our ASP.NET Core web app" lightbox="./media/edge-counter.png":::
   The Counter page in our ASP.NET Core web app  
:::image-end:::  

The JavaScript debugger in Visual Studio hits the breakpoint you set in `Counter.js`.  Visual Studio now pauses the runtime of the JavaScript running in Microsoft Edge and you may step through the script line-by-line.  

:::image type="complex" source="./media/hit-breakpoint.png" alt-text="Visual Studio pauses JavaScript running in Microsoft Edge" lightbox="./media/hit-breakpoint.png":::
   Visual Studio pauses JavaScript running in Microsoft Edge  
:::image-end:::  

The example was just a minor demonstration of the functionality available in Visual Studio.  For more information about the functionality in Visual Studio 2019, navigate to [Visual Studio documentation][VisualStudioWindowsIndex].  

## Attach to Microsoft Edge  

Previously, you had to launch Microsoft Edge from Visual Studio.  Now, you are able to attach the Visual Studio debugger to an already running instance of Microsoft Edge.  

First, ensure that there are no running instances of Microsoft Edge.  Now, from your command line, run the following command.  

```console
start msedge –remote-debugging-port=9222
```  

From Visual Studio, open the **Debug** menu and choose **Attach to Process** or select `Ctrl`+`Alt`+`P`.  

:::image type="complex" source="./media/attach-to-process.png" alt-text="Choose Attach to Process in Visual Studio" lightbox="./media/attach-to-process.png":::
   Choose **Attach to Process** in Visual Studio  
:::image-end:::  

From the **Attach to Process** dialog, set **Connection type** to **Chrome devtools protocol websocket (no authentication)**.  In the **Connecting target** textbox, type `http://localhost:9222/` and select `Enter`.  Review the list of open tabs you have in Microsoft Edge listed out in the **Attach to Process** dialog.  

:::image type="complex" source="./media/attach-to-process-dialog.png" alt-text="Configure the Attach to Process dialog in Visual Studio" lightbox="./media/attach-to-process-dialog.png":::
   Configure the **Attach to Process** dialog in Visual Studio  
:::image-end:::  

Choose **Select...** > the checkbox next to **JavaScript (Microsoft Edge – Chromium)**.  To add tabs, navigate to new tabs, and close tabs and display the changes reflected in the **Attach to Process** dialog, choose the **Refresh** button.  Choose the tab you want to debug and choose **Attach**.  

The Visual Studio debugger is now attached to Microsoft Edge.  You may pause the running of JavaScript, set breakpoints, and review `console.log()` statements directly in the Debug Output window in Visual Studio.  

## Getting in touch with the Microsoft Visual Studio team  

The Microsoft Visual Studio and Microsoft Edge teams wants to learn more about how you work with JavaScript in Visual Studio.  To send your feedback, choose the **Send Feedback** icon in Visual Studio or tweet [@VisualStudio and @EdgeDevTools][TwitterIntentTweetViualstudioEdgdevtools].  

:::image type="complex" source="./media/feedback-icon.png" alt-text="The Send Feedback icon in Visual Studio" lightbox="./media/feedback-icon.png":::
   The **Send Feedback** icon in Visual Studio  
:::image-end:::  

<!-- links -->  

[VisualStudioWindowsIndex]: /visualstudio/windows/index "Visual Studio documentation | Microsoft Docs"  

[MicrosoftVisualstudioDownloads]: https://visualstudio.microsoft.com/downloads "Download Visual Studio"  
[MicrosoftVisualstudioVs]: https://visualstudio.microsoft.com/vs "Visual Studio IDE"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[TwitterIntentTweetViualstudioEdgdevtools]: https://twitter.com/intent/tweet?text=@VisualStudio+@EdgeDevTools "Tweet to @VisualStudio and @EdgeDevTools | Twitter"  
