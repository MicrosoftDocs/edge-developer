---
description: Learn about the various design aspects and UI behavior to consider when creating Microsoft Edge extensions.
title: Extensions - Design
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, javascript, design, icons, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Design Guidelines For Microsoft Edge Extensions  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

The following page contains various design aspects and UI behavior to consider when creating Microsoft Edge extensions.  

## Icons  

You should make the icons of your extension using a vector graphic.  You must create a few different sizes of your icon for your extension, and three additional sizes if you want to package your extension.  Microsoft Edge extensions do not support .svg icons.  

Before you create your extension icons, you should review the [accessibility][ExtensionsGuidesAccessibility] guide to ensure that your icons have high enough contrast and are visible in both the light and dark themes of Microsoft Edge.  

While any webkit image format is supported, .png icons are recommended for transparency support.  

### Icons for your extension  

For your extension, you must create one icon size for the browser action or page action, and one icon size for the **Extensions** pane.  More than one size for each may be provided to support high resolution displays.  

An extension should have a browser action or page action icon.  The browser action and page action icons may be changed at runtime using the [browserAction.setIcon][MSDApiBrowseractionSeticon] method or [pageAction.setIcon][MDNApiPageactionSeticon] method.  

#### Browser action  

The preferred sizes for browser action and page action icons are `20px`, `25px`, `30px`, and `40px`.  Other supported sizes include `19px`, `35px`, and `38px`.  

The following [manifest.json][ExtensionsApisupportManifestkeys] file snippet shows a standard and high definition browser action icon being specified using the [browser_action][MDNManifestjsonBrowserAction] key.  The same syntax applies for the [page_action][MDNManifestjsonPageAction] key.  

```json
"browser_action": {
    "default_icon": {
        "20": "images/icon_20.png",
        "40": "images/icon_40.png"
    },
    "default_title": "Fetch page info",
    "default_popup": "popup.html"
}
```  

If the browser action has been set by the extension, it appears either in the Actions menu after selecting **More(...)**,  or to the right of the address bar if **Show button next to the address bar** has been toggled on by the user.  

:::row:::
   :::column span="1":::
      :::image type="complex" source="../media/actionmenu-browseraction.png" alt-text="Browser action in action menu":::
         Browser action in action menu
      :::image-end:::
      
      <!--![browser action in action menu][ImageActionmenuBrowseraction]  -->  
   :::column-end:::
   :::column span="1":::
      :::image type="complex" source="../media/browseractionicon.png" alt-text="Browser action":::
         Browser action
      :::image-end:::
      
      <!--![browser action][ImageBrowserActionIcon]  -->  
   :::column-end:::
:::row-end:::

#### Page action  

The [page_action][MDNManifestjsonPageAction] key has the same JSON manifest syntax as the [browser_action][MDNManifestjsonBrowserAction] key.  Page action also has the same icon size requirements as browser action.  

If page action is specified in the [manifest.json][ExtensionsApisupportManifestkeys] file, it appears within the address bar whenever the [pageAction.show][MDNApiPageactionShow] method is used.  

:::image type="complex" source="../media/pageaction.png" alt-text="Page action":::
   Page action
:::image-end:::

<!--![page action][ImagePageaction]  -->  

##### Management UI  

When users navigate to the extensions pane by going to the **More(...)** menu and selecting **Extensions**, an icon is displayed next to the name of the extension.  

You should specify the following icon sizes.  

| Key | Details |  
|:--- |:--- |  
| `48px` | Icon for standard resolution displays. |  
| `128px` | Icon for high resolution displays. |  
| `176px` | Icon for even higher resolution displays. |  


```json
"icons": {
    "48": "images/icon_48.png",
    "128": "images/icon_128.png",
    "176": "images/icon_176.png"
},
```  

:::image type="complex" source="../media/management-ui.png" alt-text="Management UI":::
   Management UI
:::image-end:::

<!--![management UI][ImageManagementUi]  -->  

### Icons for packaging  

Once your extension is ready for packaging, you must have three additional icon sizes ready.  

| Size | Details |  
|:--- |:--- |  
| 44px | Used in the Windows UI \(**App List**, **Settings** \> **System** \> **Apps & features**\). |  
| 50px | Packaging requirement \(not visible anywhere\). |  
| 150px | Used as the icon for the Microsoft Store. |  


See either the [manual packaging guide][ExtensionsGuidesPackagingCreatingTestingPackagesAssetsFolder] or the [ManifoldJS packaging guide][ExtensionsGuidesPackagingUsingManifoldjsPackagePackagingManifoldjs] to determine where these icons is placed.  This depends upon which packaging method you choose.  

#### Microsoft Store icon  

If the 150px icon for the Microsoft Store has a transparent background, the accent color of the user's device appears as the background color of the icon.  

For example, if a user has selected pink as the accent color, the transparent background of your store icon is displayed as pink.  

:::row:::
   :::column span="1":::
       :::image type="complex" source="../media/windows-accent-color.png" alt-text="Windows accent color":::
          Windows accent color
       :::image-end:::
       
       <!--![Windows accent color][ImageWindowsAccentColor]  -->  
   :::column-end:::
   :::column span="1":::
      :::image type="complex" source="../media/store-icon-with-transparent-background.png" alt-text="Background color auto selected":::
         Background color auto selected
      :::image-end:::
      
      <!--![Background color auto selected][ImageStoreIconTransparencyBackground]  -->  
   :::column-end:::
:::row-end:::

If you want to pick your own background color for your Microsoft Store, you must make the background opaque.  

> [!NOTE]
> Submitting a Microsoft Edge extension to the Microsoft Store is currently a restricted capability.  [Contact us][AkaExtensionRequest] with your requests for the Microsoft Store, and your request is considered for a future update.  

<!-- image links -->  

<!--[ImageActionmenuBrowseraction]: ../media/actionmenu-browseraction.png "browser action in action menu"  -->  
<!--[ImageBrowserActionIcon]: ../media/browseractionicon.png "browser action"  -->  
<!--[ImagePageaction]: ../media/pageaction.png "page action"  -->  
<!--[ImageManagementUi]: ../media/management-ui.png "management UI"  -->  
<!--[ImageWindowsAccentColor]: ../media/windows-accent-color.png "Windows accent color"  -->  
<!--[ImageStoreIconTransparencyBackground]: ../media/store-icon-with-transparent-background.png "Background color auto selected"  -->  

<!-- links -->  

[ExtensionsGuidesAccessibility]: ./accessibility.md "Accessibility | Microsoft Docs"  
[ExtensionsGuidesPackagingCreatingTestingPackagesAssetsFolder]: ./packaging/creating-and-testing-extension-packages.md#assets-folder "Assets folder - Creating And Testing A Microsoft Edge Extension AppX Package | Microsoft Docs"  
[ExtensionsGuidesPackagingUsingManifoldjsPackagePackagingManifoldjs]: ./packaging/using-manifoldjs-to-package-extensions.md#packaging-with-manifoldjs "Packaging with ManifoldJS - Using ManifoldJS To Create Extension AppX Packages | Microsoft Docs"  

[ExtensionsApisupportManifestkeys]: ../API-support/supported-manifest-keys.md "Supported Manifest Keys | Microsoft Docs"  

[AkaExtensionRequest]: https://aka.ms/extension-request "Reach out to us"  

[MSDApiBrowseractionSeticon]: https://developer.mozilla.org/Add-ons/WebExtensions/API/browserAction/setIcon "browserAction.setIcon() - API | MDN"  
[MDNApiPageactionSeticon]: https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction/setIcon "pageAction.setIcon() - API | MDN"  
[MDNApiPageactionShow]: https://developer.mozilla.org/Add-ons/WebExtensions/API/pageAction/show "pageAction.show() - API | MDN"  
[MDNManifestjsonBrowserAction]: https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action "browser_action - manifest.json | MDN"  
[MDNManifestjsonPageAction]: https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action "page_action - manifest.json | MDN"  
