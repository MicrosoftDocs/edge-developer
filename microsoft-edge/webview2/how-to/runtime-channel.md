---
description: How to specify a WebView2 Runtime channel for your app, to test experimental APIs in a prerelease package.
title: Specify a WebView2 Runtime channel for your app
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2021
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Specify a WebView2 Runtime channel for your app

<!-- is the phrase "runtime channel" correct?  It doesn't appear in the docs repo.  "WebView2 Runtime" appears 102/14, and "Microsoft Edge channel" appears 13/5. -->

To develop a WebView2 application, you need the WebView2 SDK and a WebView2 Runtime.  The WebView2 SDK contains API signatures, which allow you to write code using WebView2 APIs in your app.  But to see your WebView2 code build and run, you need a runtime channel,<!--change to "Microsoft Edge channel"? --> which contains the Microsoft Edge binaries that are needed to render your app.

By default, a WebView2 app automatically tries to find and use the WebView2 Evergreen Runtime.  The WebView2 Evergreen Runtime allows you to easily develop code by using the stable-release WebView2 SDK.  However, when you test a prerelease SDK package (which contains experimental APIs), you will often need to direct your application to use the Canary or Dev channel of Microsoft Edge, instead of using the WebView2 Evergreen Runtime.  This article explains how to make your application use the Canary or Dev channel of Microsoft Edge.

There are several ways to make your application use the Canary or Dev channel of Microsoft Edge, rather than the WebView2 Evergreen Runtime:
*  By using code.
*  By using a group policy.
*  By using a registry override.
*  By using an environment variable.

These approaches are described below.


<!--========================================================================-->
## Using code

To use code to make your application use the Canary or Dev channel of Microsoft Edge:

As a Prerequisite, on your development machine, find the path containing the Dev or Canary channel of Microsoft Edge.<!--or: "of the WebView2 Runtime"?-->  For example, the `C:\\Users\\myname\\AppData\\Local\\Microsoft\\Edge SxS\\Application\\93.0.929.0` directory.


### Win32\/C++

<!-- is it possible to clone just 1 app from the repo?  don't you have to clone the entire repo? -->
1.  Clone the following Win32 Sample app: [WebView2APISample, in the WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2APISample).  We'll use this sample app to demonstrate this procedure.

1.  Open the **WebView2APISample** project, and then in **Source Files**, open the `AppWindow.cpp` file.

1.  Find where [CreateCoreWebView2EnvironmentWithOptions][Webview2RefWin32GlobalsCreateCoreWebView2EnvironmentWithOptions] is called.  For example:

    ```cpp
    HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
        subFolder, m_userDataFolder.c_str(), options.Get(),
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            this, &AppWindow::OnCreateEnvironmentCompleted)
            .Get());
    ```

1.  Replace the `subFolder` variable by the folder path for the Microsoft Edge Canary <!--or Dev?--> channel.  For example:

    ```cpp
    HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
        L"C:\\Users\\myname\\AppData\\Local\\Microsoft\\Edge SxS\\Application\\93.0.929.0", m_userDataFolder.c_str(), options.Get(),
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            this, &AppWindow::OnCreateEnvironmentCompleted)
            .Get());
    ```

### WinForms

WinForms uses an approach similar to the Win32/C++ approach described above.

1.  Set `CreationProperties.BrowserExecutableFolder` to point to the path that contains the Microsoft Edge Canary or Dev channel.  To do this, in the **WebView2Samples** solution, in the **WebView2WpfBrowser** project, open the file `MainWindow.xaml.cs`.

1.  Find `CreationProperties.BrowserExecutableFolder`.  For example:

    ```csharp
    WebView2 GetReplacementControl(bool useNewEnvironment)
    {
        WebView2 replacementControl = new WebView2();
        ((System.ComponentModel.ISupportInitialize)(replacementControl)).BeginInit();
        // Setup properties and bindings.
        if (useNewEnvironment)
        {
            // Create a new CoreWebView2CreationProperties instance so the environment
            // is made anew.
            replacementControl.CreationProperties = new CoreWebView2CreationProperties();
            replacementControl.CreationProperties.BrowserExecutableFolder = webView.CreationProperties.BrowserExecutableFolder;
            replacementControl.CreationProperties.Language = webView.CreationProperties.Language;
            replacementControl.CreationProperties.UserDataFolder = webView.CreationProperties.UserDataFolder;
            shouldAttachEnvironmentEventHandlers = true;
        }
    ```

### WPF

WPF uses an approach similar to the Win32/C++ approach described above.

See [CoreWebView2CreationProperties.BrowserExecutableFolder Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.corewebview2creationproperties.browserexecutablefolder?view=webview2-dotnet-1.0.864.35#Microsoft_Web_WebView2_Wpf_CoreWebView2CreationProperties_BrowserExecutableFolder).


<!--========================================================================-->
## Using a group policy

To make your application use the Canary or Dev channel of Microsoft Edge by using a group policy, you copy ADMX and ADML files to PolicyDefinitions, as follows.

1.  Get the policy files.  To do this, download policy files from [Download and deploy Microsoft Edge for business](https://www.microsoft.com/edge/business/download).  Or, find generated policy files in `out\debug_x64\gen\chrome\app\policy\windows\admx` after running `autoninja edge_webview2_policy_templates`.

1.  Copy the ADMX file into a Policy Definitions template folder, such as `C:\Windows\PolicyDefinitions`.

1.  Copy the ADML file into a matching locale folder within the `Policy Definitions` folder, such as a `C:\Windows\PolicyDefinitions\en-us` folder.

1.  Configure policies using the **Local Group Policy Editor** or by using command-line tools (see below).<!--below, where?-->

    The registry location is: `{HKLM/HKCU}\Software\Policies\Microsoft\Edge\WebView2\{override name}`

For more information, see [Configure Microsoft Edge policy settings](https://docs.microsoft.com/DeployEdge/configure-microsoft-edge).

<!-- link to Enterprise docs re: Group Policy? -->


<!--========================================================================-->
## Using a registry override

To make your application use the Canary or Dev channel of Microsoft Edge by using a registry override:

1.  Open a Powershell command prompt.

1.  Run the following command:

    `REG ADD HKLM\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /v * /t REG_SZ /d "C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0"`

1.  Replace `C:\Users\myname\AppData\Local\Microsoft\Edge SxS\Application\88.0.680.0` by the path to the desired Runtime channel.<!--should this instead be "Microsoft Edge channel"?-->


### Resuming using the default, WebView2 Evergreen Runtime

To undo the above setting, run the following command:

`REG DELETE HKLM\Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder /f`


<!--========================================================================-->
## Using an environment variable

If you use the environment-variable approach, you cannot specify a specific runtime path, but rather, you reverse the search order for the Runtime channel.<!-- "runtime channel" terminology ok?  "WebView2 Runtime or Microsoft Edge channel"?-->

The default channel-search order when using the above, registry-override approach is:
1.  The WebView2 Runtime.
1.  The Beta channel of Microsoft Edge.
1.  The Dev channel of Microsoft Edge.
1.  The Canary channel of Microsoft Edge.

If you instead use the environment-variable approach, that order is reversed.  So the channel-search order when using this environment-variable approach is:
1.  The Canary channel of Microsoft Edge.
1.  The Dev channel of Microsoft Edge.
1.  The Beta channel of Microsoft Edge.
1.  The WebView2 Runtime.

<!-- how does the above info connect to the below info? -->

To make your application use the Canary or Dev channel of Microsoft Edge by using an environment variable:

1.  In the Windows search bar, enter "environment", and then select **Edit the system environment variables**.

    :::image type="complex" source="./media/search-bar-edit-sys-env-vars.png" alt-text="Using the Windows search bar to find where to edit environment variables" lightbox="./media/search-bar-edit-sys-env-vars.png":::
       Using the Windows search bar to find where to edit environment variables
    :::image-end:::  

1.  In the **System Properties** dialog box, select the **Advanced** tab, and then select the **Environment Variables** button.

    :::image type="complex" source="./media/system-properties-env-vars.png" alt-text="The Environment Variables button in the System Properties dialog box" lightbox="./media/system-properties-env-vars.png":::
       The **Environment Variables** button in the **System Properties** dialog box
    :::image-end:::  

1.  In the **User variables** section of the **Environment Variables** dialog box, select **New**.

1.  In the **New User Variable** dialog box, set the **Variable name** to `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE`, and set the **Variable value** to `1`.  Then select **OK** to close the dialog boxes.

    :::image type="complex" source="./media/env-vars-new-user-variable.png" alt-text="Adding a new environment variable, as a user variable" lightbox="./media/env-vars-new-user-variable.png":::
       Adding a new environment variable, as a user variable
    :::image-end:::  


<!--========================================================================-->
## Getting in touch with the Microsoft Edge WebView team

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]


<!-- links -->
<!-- external links -->
[Webview2RefWin32GlobalsCreateCoreWebView2EnvironmentWithOptions]: /microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.864.35#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs"
