---
title: Set up your Dev environment for WebView2
description: Set up your Dev environment for WebView2 development.  Set up git, Visual Studio, and a preview channel of Microsoft Edge, and clone the WebView2Samples repo.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/18/2022
---
# Set up your Dev environment for WebView2

This article covers general-purpose setup of your development environment for WebView2 development.  Specific steps for specific Get Started tutorials and samples and platforms are in the Getting Started guide, for after you do these general-purpose, platform-neutral setup steps.  Some Get Started tutorials point here for preliminary setup steps.


<!-- ====================================================================== -->
## Install git, Visual Studio, and a preview channel of Microsoft Edge

The platform-specific Get Started guides contain some platform-specific setup steps to set up your dev environment.  The present section is general-purpose.

To open the WebView2 samples and run them in debug mode, install the following development software.

1. If you want to clone the `WebView2Samples` repo (instead of downloading it), and if git isn't not already installed, [Download git](https://git-scm.com/downloads) and install it.  git will be used during cloning the `WebView2Samples` repo from GitHub, below.


<!-- ====================================================================== -->
## Install Visual Studio

1. Install [Visual Studio](https://visualstudio.microsoft.com) 2015 or later, such as Visual Studio Professional 2022.

   The WebView2 samples are designed for Microsoft **Visual Studio**, not Microsoft **Visual Studio Code**.

   If you are installing Visual Studio 2022, you can accept the defaults for now; you can click **Install**, and decline installing the Workloads at this time.

   Initial setup of Visual Studio is done.  It's likely that additional Visual Studio setup dialogs will open later in this tutorial.

Platform-specific Get Started guides contain more information about dev machine setup; for example, the Win32 tutorial tells how to install workloads if prompted to, upon opening a partiular sample.  For example, see [Install the "Desktop development with C++" workload](get-started/win32.md#install-the-desktop-development-with-c-workload) in _Get started with WebView2 in Win32 apps_.


<!-- ====================================================================== -->
## Install a preview channel of Microsoft Edge

1. Install any [Microsoft Edge Insider (preview) Channel](https://www.microsoftedgeinsider.com/download) (Beta, Dev, or Canary) on a supported operating system (OS):
   *  Windows 7
   *  Windows 8.1
   *  Windows 10
   *  Windows 11

   We recommend using the Canary channel.  The minimum required version is 82.0.488.0.


<!-- ====================================================================== -->
## Install the WebView2 Runtime (optional)

1. Optionally, install the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2).

   If unsure, skip this step; you can use the Microsoft Edge preview channel from the previous step instead.

   If you want more information about this decision now, in a new window or tab, see [Understand WebView2 SDK versions](concepts/versioning.md).


<!-- The h3 section [Clone or download the WebView2Samples repo](get-started/win32.md#clone-or-download-the-webview2samples-repo) in _Get started with WebView2 in Win32 apps_ links to here -->
<!-- ====================================================================== -->
## Clone or download the WebView2Samples repo

To clone the repo, you must first install git, per the previous section.  You can download the repo as a `.zip` file instead of cloning the repo.

*  If you clone the repo, you can update your local copy using git commands or features of various Dev apps.

*  If you download the repo as a `.zip` file, you get a snapshot copy of the repo.  You can then download another, updated copy of the repo later.

![Cloning or downloading the WebView2Samples repo.](../media/cloning-the-webview2-samples-repo-samples-article.png)


### Downloading the WebView2Samples repo

If you want to download the repo (as a `.zip` file):

1. Open the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) in a new window or tab.

1. Click the green **Code** button in the upper right of the GitHub repo, and then click **Download ZIP**.

   ![Cloning the WebView2Samples repo.](../media/cloning-the-webview2-samples-repo-samples-article.png)

   The **Download** pop-up appears in Microsoft Edge:

   ![The 'Settings and more' icon in the toolbar of Microsoft Edge.](../media/settings-and-more-edge-icon.png)

   In Microsoft Edge, if the **Download** pop-up isn't visible, click **Settings and more** (...) and then click **Downloads**.

1. In the **Downloads** pop-up window, hover to the right of `WebView2Samples-master.zip` and then click the **Show in folder** (folder) icon.

   It is recommended that you don't click the **Open file** link, because that immediately unzips the file in your Downloads area, which could make it harder (and slower) to move to your desired location.

1. Copy or cut the `WebView2Samples-master.zip` file from your Downloads directory to a regular directory, such as `Documents`.

1. Unzip the .`WebView2Samples-master.zip` file and note the location of the unzipped files.

   ![The downloaded, unzipped WebView2Samples repo.](../media/downloaded-samples-repo-unzipped.png)

1. Study the breakout of main directories.  `-master` is the name of the repo branch that this downloaded directory snapshot represents.


### Obtain the URL for cloning the WebView2Samples repo

If you are cloning instead of downloading the repo:

1. Open the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) in a new window or tab.

1. Click the green **Code** button in the upper right of the GitHub repo, select **Clone**, and then click the **Copy** icon (or, select the HTTPS URL string in the text box and copy it).

   ![Cloning the WebView2Samples repo.](../media/cloning-the-webview2-samples-repo-samples-article.png)

1. Decide which tool you want to use to locally clone the repo:
   *  Visual Studio
   *  GitHub Desktop
   *  Git Bash shell or command prompt


Next, clone the GitHub repo to your local drive.  To do that, follow the appropriate steps below, for the tool you want to use.


### Cloning the repo by using Visual Studio

If you want to use Visual Studio to clone the GitHub repo to your local drive:

1. In Visual Studio, select **File** > **Clone repository**.

1. Enter the URL that you copied from the GitHub repo.

1. From within the same dialog box, or in a file explorer utility, you can create a general-purpose root `git` or `GitHub` folder in a writeable location, then select that directory, so that the repo will be cloned there, as a new directory.

   For example, you could create the repo in the parent folder: `C:\Users\myUserName\Documents\GitHub\`, so that the cloning operation will create the new directory `C:\Users\myUserName\Documents\GitHub\WebView2Samples`.

You've cloned the repo to your local drive.  Skip to the next major section below.


### Cloning the repo by using GitHub Desktop

If you want to use GitHub Desktop to clone the GitHub repo to your local drive:

1. Install [GitHub Desktop](https://desktop.github.com).

1. In GitHub Desktop, select **File** > **Clone repository**.

1. In Visual Studio or GitHub Desktop, enter the URL that you copied from the GitHub repo.

1. From within the same dialog box, or in a file explorer utility, you can create a general-purpose root `git` or `GitHub` folder in a writeable location, then select that directory, so that the repo will be cloned there, as a new directory.

   For example, you could create the repo in the parent folder: `C:\Users\myUserName\Documents\GitHub\`, so that the cloning operation will create the new directory `C:\Users\myUserName\Documents\GitHub\WebView2Samples`.

You've cloned the repo to your local drive.  Skip to the next major section below.


### Cloning the repo by using Git Bash shell or a command prompt

If you instead want to clone the repo by using a Git Bash shell or command prompt:

1. Clone the repo to your local drive, entering the URL string that you copied from the GitHub repo:

   ```Shell
   # example location where the repo directory will be added:
   cd c:/users/myusername/documents/github/
   git clone https://github.com/MicrosoftEdge/WebView2Samples.git
   ```

   ![Using the Git Bash shell to enter the git clone command in your desired local target git or GitHub repo directory.](../media/git-bash-git-clone-url-command.png)

   The directory is created on your local drive, in the path you specified, such as in the following figure:

   ![File Explorer showing the directory for the cloned WebView2Samples repo.](../media/file-explorer-cloned-webview2-samples-repo.png)

   You've cloned the repo to your local drive.

1. In your resulting, local copy of the repo directory structure, find all `*.sln` files.

1. Open a `.sln` file in Visual Studio.  For example, open your local copy of [WebView2Samples.sln](https://github.com/MicrosoftEdge/WebView2Samples/blob/master/SampleApps/WebView2Samples.sln).  This repo's solution files require Visual Studio, not Visual Studio Code.
