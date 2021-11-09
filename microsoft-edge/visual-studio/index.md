---
description: Microsoft Edge and Visual Studio web development.
title: Visual Studio for web development
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/27/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, vs, visual studio, debugger
---
# Visual Studio for web development

Microsoft [Visual Studio](https://visualstudio.microsoft.com/vs) is an integrated development environment (IDE).   Use it to edit, debug, build, and publish your web apps.  It is a feature-rich program that can be used for many aspects of your web development.  Over and above the standard editor and debugger that most IDEs provide, Visual Studio includes the following features to ease your development process.

*   Compilers
*   Code completion tools
*   Graphical designers
*   Many more

If you are not already using Visual Studio, navigate to [Download Visual Studio](https://visualstudio.microsoft.com/downloads) to download it.

Currently, Visual Studio 2019 supports debugging JavaScript in Microsoft Edge for your ASP.NET Framework and ASP.NET Core apps.  Complete the following steps to use Visual Studio to debug Microsoft Edge.


<!-- ====================================================================== -->
## Launch Microsoft Edge

Visual Studio can build your ASP.NET and ASP.NET Core app, start a web server, launch Microsoft Edge, and connect the Visual Studio debugger with a single button.

The simplified workflow allows you to debug JavaScript that runs in Microsoft Edge directly from your IDE.

### Create a new ASP.NET Core web app

1.  Open Visual Studio 2019 and select **Create a new project**.

1.  In the search box on the next screen, enter **react**.

1.  Select **ASP.NET Core with React.js** from the list of templates and then **Next**.

:::image type="complex" source="./media/create-new-project.png" alt-text="Create a new ASP.NET Core Web app with React.js" lightbox="./media/create-new-project.png":::
   Create a new ASP.NET Core Web app with React.js
:::image-end:::

This **React.js** template specifies how to integrate React.js with an ASP.NET Core app.

### Launch Microsoft Edge from Visual Studio

With the project created, use Visual Studio to debug JavaScript.

1.  Open `ClientApp/src/components/Counter.js`.

1.  Select the dropdown next to the green **Play** button and **IIS Express**.

    :::image type="complex" source="./media/vs-dropdown.png" alt-text="The dropdown next to the green Play button and IIS Express" lightbox="./media/vs-dropdown.png":::
       The dropdown next to the green **Play** button and **IIS Express**
    :::image-end:::

1.  Select **Script Debugging** > **Enabled**.

    :::image type="complex" source="./media/enable-script-debugging.png" alt-text="Turn on script debugging in Visual Studio" lightbox="./media/enable-script-debugging.png":::
       Turn on script debugging in Visual Studio
    :::image-end:::

1.  In the same dropdown, select **Web Browser** > the preview channel of Microsoft Edge that you want Visual Studio to launch, such as Microsoft Edge Canary, Dev, or Beta.  If you are not already using one of the Microsoft Edge preview channels, navigate to [Download Microsoft Edge Insider Channels](https://www.microsoftedgeinsider.com/download) to download one.

    :::image type="complex" source="./media/set-web-browser.png" alt-text="Select the preview channel of Microsoft Edge that you want Visual Studio to launch" lightbox="./media/set-web-browser.png":::
       Select the preview channel of Microsoft Edge that you want Visual Studio to launch
    :::image-end:::

1.  Select the green **Play** button.  Visual Studio builds your app, starts the web server, launches Microsoft Edge, and navigates to `https://localhost:44362/` or whatever port is specified in `launchSettings.json`.

    :::image type="complex" source="./media/edge-launch.png" alt-text="Microsoft Edge launches from Visual Studio" lightbox="./media/edge-launch.png":::
       Microsoft Edge launches from Visual Studio
    :::image-end:::

### Debug JavaScript running in Microsoft Edge

Switch back to Visual Studio to set a breakpoint.

1.  In `Counter.js`, set a breakpoint on Line 13 by selecting the gutter next to the line.

    :::image type="complex" source="./media/set-breakpoint.png" alt-text="Select the gutter next to Line 13 in Counter.js to set a breakpoint in Visual Studio" lightbox="./media/set-breakpoint.png":::
       Select the gutter next to Line 13 in `Counter.js` to set a breakpoint in Visual Studio
    :::image-end:::

1.  Switch back to the instance of Microsoft Edge that Visual Studio launched.

1.  Select **Counter** in the navigation menu at the top of the webpage and then select **Increment**.

    :::image type="complex" source="./media/edge-counter.png" alt-text="The Counter page in our ASP.NET Core web app" lightbox="./media/edge-counter.png":::
       The Counter page in our ASP.NET Core web app
    :::image-end:::

1.  The JavaScript debugger in Visual Studio hits the breakpoint you set in `Counter.js`.  Visual Studio now pauses the runtime of the JavaScript running in Microsoft Edge and you can step through the script line-by-line.

    :::image type="complex" source="./media/hit-breakpoint.png" alt-text="Visual Studio pauses JavaScript running in Microsoft Edge" lightbox="./media/hit-breakpoint.png":::
       Visual Studio pauses JavaScript running in Microsoft Edge
    :::image-end:::

The example was just a minor demonstration of the functionality available in Visual Studio.  For more information about the functionality in Visual Studio 2019, navigate to [Visual Studio documentation](/visualstudio/windows/index).


<!-- ====================================================================== -->
## Attach to Microsoft Edge

Previously, you launched Microsoft Edge from Visual Studio.  Alternatively, you can attach the Visual Studio debugger to an instance of Microsoft Edge that's already running, as follows.

1.  First, ensure that there are no running instances of Microsoft Edge.

1.  From your command line, run the following command.

    ```console
    start msedge --remote-debugging-port=9222
    ```

1.  In Visual Studio, select **Debug** > **Attach to Process** or `Ctrl`+`Alt`+`P`.

    :::image type="complex" source="./media/attach-to-process.png" alt-text="Select Attach to Process in Visual Studio" lightbox="./media/attach-to-process.png":::
       Select **Attach to Process** in Visual Studio
    :::image-end:::

1.  In the **Attach to Process** dialog, set **Connection type** to **Chrome devtools protocol websocket (no authentication)**.

1.  In the **Connecting target** textbox, type `http://localhost:9222/` and select `Enter`.

1.  Review the list of open tabs you have in Microsoft Edge listed out in the **Available processes** section.

    :::image type="complex" source="./media/attach-to-process-dialog.png" alt-text="Configure the Attach to Process dialog in Visual Studio" lightbox="./media/attach-to-process-dialog.png":::
       Configure the **Attach to Process** dialog in Visual Studio
    :::image-end:::

1.  Choose the tab you want to debug from the list, and then select **Attach**.

1.  In the **Select Code Type** dialog, select **JavaScript (Microsoft Edge - Chromium)** and select **OK**.

The Visual Studio debugger is now attached to Microsoft Edge.  You can pause the running of JavaScript, set breakpoints, and view `console.log()` statements directly in the **Debug Output** window in Visual Studio.


<!-- ====================================================================== -->
## Getting in touch with the Microsoft Visual Studio team

The Microsoft Visual Studio and Microsoft Edge teams wants to learn more about how you work with JavaScript in Visual Studio.  To send your feedback, select the **Send Feedback** icon in Visual Studio, or tweet [@VisualStudio and @EdgeDevTools](https://twitter.com/intent/tweet?text=@VisualStudio+@EdgeDevTools).

:::image type="content" source="./media/feedback-icon.png" alt-text="The Send Feedback icon in Visual Studio" lightbox="./media/feedback-icon.png":::
