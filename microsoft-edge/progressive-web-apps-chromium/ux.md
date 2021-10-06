---
description: This guide gives you an overview of the user experience of PWAs on Microsoft Edge and Windows.
title: The user experience of PWAs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2021
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: progressive web apps, PWA, Edge, Windows, desktop, installation, integration, microsoft store, ux
---
# The user experience of PWAs

On Windows, PWAs are first-class app citizens.  Any device running Microsoft Edge gets full access to the technologies and characteristics of Progressive Web Apps.


<!-- ====================================================================== -->
## Installing a PWA

When Microsoft Edge determines that a website is an installable PWA, the **App available** button is displayed in the address bar.

1.  Select the **App available** button to install the PWA.
1.  Select **Install** to complete the installation and run the PWA in Windows.

:::image type="content" source="./media/edge-app-install-flyout.png" alt-text="The installation prompt in Microsoft Edge." lightbox="./media/edge-app-install-flyout.png":::

Many PWAs are also present on the Microsoft Store and can be installed directly from there without even opening Microsoft Edge.

To install a PWA from the Microsoft Store, select **Get** on the app page.

:::image type="content" source="./media/install-twitter-microsoft-store.png" alt-text="Installing an app from the Microsoft Store." lightbox="./media/install-twitter-microsoft-store.png":::


<!-- ====================================================================== -->
## Managing PWAs

To find the list of installed PWAs in Microsoft Edge, go to `edge://apps`.  On this page, you can select any app to launch it.  To uninstall an app, select the **Delete** (![Uninstall app.](./media/uninstall-app-button.png)) icon.

:::image type="content" source="./media/edge-apps-listing.png" alt-text="The list of installed apps in edge://apps." lightbox="./media/edge-apps-listing.png":::

You can also manage PWAs in the **Apps & features** system setting, like other Windows apps.

1.  In Windows, select **Start** > **Settings**.
1.  Type "apps" in the **Find a setting** search field, and then select **Add or remove programs**.
1.  Find the PWA you want to manage in the list of apps and select it to find more information or remove it.

:::image type="content" source="./media/pwa-in-apps-and-features-settings.png" alt-text="The list of installed apps on Windows also display PWAs." lightbox="./media/pwa-in-apps-and-features-settings.png":::


<!-- ====================================================================== -->
## Windows integration

PWAs are displayed like native apps on Windows. They appear in the Taskbar (where they can be pinned), in the Start Menu, or when switching between apps with `Alt`+`Tab`.

:::image type="content" source="./media/pwas-in-the-taskbar.png" alt-text="PWAs and native apps side-by-side in the Taskbar.":::

:::image type="content" source="./media/pwas-in-alttab.png" alt-text="PWAs and native apps are displayed when switching between windows with Alt+Tab.":::

PWAs can also expose common tasks to users as shortcuts that appear in the app's icon context menu (right-click). Learn more about [defining shortcuts](./how-to/shortcuts.md).

:::image type="content" source="./media/pwa-shortcuts-in-taskbar.png" alt-text="Common tasks are listed in the Taskbar context menu." lightbox="./media/pwa-shortcuts-in-taskbar.png":::

PWAs can also display notifications in the operating system's own notification service. This helps users re-engage with your app. Learn more about [using notifications, push messages, and badges](./how-to/notifications-badges.md).

### Starting PWAs when the user logs in

PWAs can launch automatically when the user logs in on Windows, so they can immediately engage with the app.

To turn this feature on for an installed PWA:

1.  Open Microsoft Edge.
1.  Go to `edge://apps`.
1.  Open the context menu (right-click) on the app in the list of installed app.
1.  Select **Start app when you sign in**.

:::image type="content" source="./media/turn-on-run-on-os-login-flag.png" alt-text="Use the context menu to turn on the 'Start app when you sign in' feature in Microsoft Edge." lightbox="./media/turn-on-run-on-os-login-flag.png":::

After installing an app, users are also given a chance to turn on the feature, in the post-installation dialog.

:::image type="content" source="./media/post-install-run-on-os-login.png" alt-text="The post-installation dialog automatically opens after an app is installed." lightbox="./media/post-install-run-on-os-login.png":::


<!-- ====================================================================== -->
## App info menu

When a user selects the ellipses (**...**) button in the app's title bar, the **App info** menu is displayed. This menu contains useful information about the app, such as:

*  The app icon, name, and publisher.
*  The various app permissions that have been granted.
*  Privacy information such as the number of cookies used.
*  Lists of extensions and tools that can be used in the app.

:::image type="content" source="./media/app-info-menu.png" alt-text="The App info menu." lightbox="./media/app-info-menu.png":::
