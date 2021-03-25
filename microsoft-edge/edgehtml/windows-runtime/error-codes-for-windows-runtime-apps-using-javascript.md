---
description: Error codes for Windows Runtime apps using JavaScript
title: "Error codes for Windows Runtime apps using JavaScript"
ms.custom: ""
ms.date: 11/03/2020
ms.prod: microsoft-edge
ms.technology: "windows-integration"
ms.topic: "article"
f1_keywords:
  - "JavaScript, Windows Runtime error codes"
  - "VS.WebClient.Help.APPHOST9601"
  - "VS.WebClient.Help.APPHOST9602"
  - "VS.WebClient.Help.APPHOST9603"
  - "VS.WebClient.Help.APPHOST9604"
  - "VS.WebClient.Help.APPHOST9605"
  - "VS.WebClient.Help.APPHOST9606"
  - "VS.WebClient.Help.APPHOST9607"
  - "VS.WebClient.Help.APPHOST9608"
  - "VS.WebClient.Help.APPHOST9610"
  - "VS.WebClient.Help.APPHOST9611"
  - "VS.WebClient.Help.APPHOST9613"
  - "VS.WebClient.Help.APPHOST9614"
  - "VS.WebClient.Help.APPHOST9615"
  - "VS.WebClient.Help.APPHOST9616"
  - "VS.WebClient.Help.APPHOST9617"
  - "VS.WebClient.Help.APPHOST9618"
  - "VS.WebClient.Help.APPHOST9619"
  - "VS.WebClient.Help.APPHOST9620"
  - "VS.WebClient.Help.APPHOST9623"
  - "VS.WebClient.Help.APPHOST9624"
  - "VS.WebClient.Help.APPHOST9626"
ms.assetid: 4c6d4e90-602a-4b56-ae74-3458929da442
caps.latest.revision: 1
author: MSEdgeTeam
ms.author: msedgedevrel
ROBOTS: NOINDEX,NOFOLLOW
---
# Error codes for Windows Runtime apps using JavaScript  

[!INCLUDE [deprecation-note](../includes/legacy-edge-note.md)]  

Here are the error codes displayed by the Microsoft Visual Studio console when developing Windows Runtime apps using JavaScript.  

| Error | Remarks |  
|:--- |:--- |  
| APPHOST9601: "Can`t load *remoteURI*.  An app can't load remote web content in the local context." | For more info about what's allowed in the web context, see [Features and restrictions by context][PreviousVersionsWindowsAppsHh465373].  |  
| APPHOST9602: "'javascript:' is an invalid attribute value and will be ignored.  Don't use 'javascript:' URIs in the local context." | For security reasons, you can't use 'javascript:' URIs in the local context.  For more info about what's allowed in the local context, see [Features and restrictions by context][PreviousVersionsWindowsAppsHh465373].  |  
| APPHOST9603: "Can't load the ActiveX plug-in that has the class ID *classID*.  Apps can't load ActiveX controls." | Windows Runtime apps using JavaScript  don't support custom Microsoft ActiveXcontrols.  If you need a UI control, use a standard web control, a controls library, or create your own custom control.  If you need to perform custom logic, create a custom Windows Runtime object instead.  For info about other HTML, CSS, and JavaScript differences, see [HTML, CSS, and JavaScript features and differences][PreviousVersionsWindowsAppsHh465380].  |  
| APPHOST9604: "Can't navigate to *uri* because it uses an invalid character encoding.  An app can navigate only to UTF8-encoded files." | All HTML, JavaScript, and CSS accessed by a Windows Runtime must be encoded as 8-bit Unicode Transformation Format (UTF-8).  For info about other HTML, CSS, and JavaScript differences, see [HTML, CSS, and JavaScript features and differences][PreviousVersionsWindowsAppsHh465380].  |  
| APPHOST9605: "Can't navigate to *targetURI* from *sourceURI* because the destination URI is in a higher security zone.  You can't navigate from a zone with lower security to a zone with higher security unless you're navigating to a local context URI from a web context URI and you've registered the local context URI with the MSApp.addPublicLocalApplicationUri method." | For more info, see [MSApp.addPublicLocalApplicationUri][PreviousVersionsHh771917].  |  
| APPHOST9606: "Can't load *uri* because it uses an HTTP connection and the ms-https-connections-only meta element is present.  Only HTTPS connections are allowed when you use the ms-https-connections-only meta element.  Use an HTTPS connection or, if you don't need a secure connection, remove the meta element." | For more info, see [How to require an HTTPS connection][PreviousVersionsWindowsAppsHh452771].  |  
| APPHOST9607: "The app can't launch the URI at *uri* because of this error: *failureCode*." | A missing resource or an invalid file are common causes of this error.  |  
| APPHOST9608: "The app couldn't navigate to the about:blank page because of this error: *errorCode*." |  |  

| Error | Remarks |  
|:--- |:--- |  
| APPHOST9610: "The app found an error while preparing to navigate to a custom error page: *errorCode*." |  |  
| APPHOST9611: "The app couldn't navigate to a custom error page because of this error: *errorCode*." |  |  
| APPHOST9613: "The app couldn't navigate to *uri*  because of this error: *errorCode*." |  |  
| APPHOST9614: "A document within an iframe requested the *requestedDocMode* doc mode, but the system enforces the *currentDocMode* doc mode.  The iframe will use the *currentDocMode* doc mode." | For more info about displaying remote web content, see [How to link to external web pages][PreviousVersionsWindowsAppsHh780594].  |  
| APPHOST9615: "The app can't download the file at *uri* because it was invoked programmatically outside of the local context." | Occurs when content in the web context tries to programmatically download a file.  |  
| APPHOST9616: "This URI can't use geolocation APIs.  Geolocation APIs can be invoked only from a URI that is part of the package or is included in the ApplicationContentUris element of the manifest." | For more info about what's allowed in the web context, see [Features and restrictions by context][PreviousVersionsWindowsAppsHh465373].  |  
| APPHOST9617: "This URI can't use clipboard APIs.  The clipboard APIs can be invoked only from a URI that is part of the package or is included in the ApplicationContentUris element of the manifest." | For more info about what's allowed in the web context, see [Features and restrictions by context][PreviousVersionsWindowsAppsHh465373].  |  
| APPHOST9618: "This URI can't use window.close.  The window.close method can be invoked only from packaged content that was loaded with an ms-appx URI scheme." | For more info about what's allowed in the web context, see [Features and restrictions by context][PreviousVersionsWindowsAppsHh465373].  |  
| APPHOST9619: "The app can't navigate to *uri* because a page in the web context can't be the app's top level document.  Load the page in an iframe instead." | You can't navigate your top-level page to a remote web page, but your app can display a web page in an [iframe][MDNIframe].  For more info about displaying remote web content, see [How to link to external web pages][PreviousVersionsWindowsAppsHh780594].  |  

| Error | Remarks |  
|:--- |:--- |  
| APPHOST9620: "This app was closed because it used an HTTP connection and the ms-https-connections-only meta element is present.  Only HTTPS connections are allowed when you use the ms-https-connections-only meta element.  Use an HTTPS connection or, if you don't require a secure connection, remove the meta element." | For more info, see [How to require an HTTPS connection][PreviousVersionsWindowsAppsHh452771].  |  
| APPHOST9623: "The app couldn't resolve *url* because of this error: *errorCode*." | A common cause of this error is a missing file.  |  
| APPHOST9624: "The app can't use script to load the *url* url because the url launches another app.  Only direct user interaction can launch another app." | Apps can't launch other apps directly.  Other apps can be launched by the  user when the app implements certain contracts.  For more info, see [App contracts and extensions][PreviousVersionsWindowsAppsHh464906].  |  
| APPHOST9626: "A direct reference to resource file `ms-appx://1d33240b-0b00-40e4-a416-a4750c48787f/ja-jp\images\logo.scale-140.png` was detected.  This reference causes failures when used outside of the debugging environment." | Due to the file path of `logo.scale-140.png`, this PNG file is treated as a localized resource, causing the error in that localized resources cannot be referenced directly.  See [Globalizing your app (HTML)][PreviousVersionsWindowsAppsHh465006] if you intend to use this file as a language resource.  Otherwise, try renaming the problematic directory.  |  

## See also  

[Using the Windows Runtime in JavaScript][WindowsRuntimeJavascript]  

<!-- links -->  

[WindowsRuntimeJavascript]: ./using-the-windows-runtime-in-javascript.md "Using the Windows Runtime in JavaScript | Microsoft Docs"  

[UwpWindowsGeolocationGeolocatorDevicesPositionChanged]: /uwp/api/Windows.Devices.Geolocation.Geolocator#Windows_Devices_Geolocation_Geolocator_PositionChanged "Geolocator Class | Microsoft Docs"  

[PreviousVersionsHh771917]: /previous-versions/hh771917(v=vs.85) "addPublicLocalApplicationUri method | Microsoft Docs"  

[PreviousVersionsWindowsAppsHh452771]: /previous-versions/windows/apps/hh452771(v=win.10) "How to require an HTTPS connection (HTML) | Microsoft Docs"  
[PreviousVersionsWindowsAppsHh464906]: /previous-versions/windows/apps/hh464906(v=win.10) "App contracts and extensions (Windows Runtime apps) | Microsoft Docs"  
[PreviousVersionsWindowsAppsHh465006]: /previous-versions/windows/apps/hh465006(v=win.10) "Globalizing your app (HTML) | Microsoft Docs"  
[PreviousVersionsWindowsAppsHh465373]: /previous-versions/windows/apps/hh465373(v=win.10) "Features and restrictions by context (HTML) | Microsoft Docs"  
[PreviousVersionsWindowsAppsHh465380]: /previous-versions/windows/apps/hh465380(v=win.10) "HTML, CSS, and JavaScript features and differences (HTML) | Microsoft Docs"  
[PreviousVersionsWindowsAppsHh780594]: /previous-versions/windows/apps/hh780594(v=win.10) "How to link to external web pages (HTML) | Microsoft Docs"  

[MDNIframe]: https://developer.mozilla.org/docs/Web/HTML/Element/iframe "<iframe>: The Inline Frame element | MDN"  
