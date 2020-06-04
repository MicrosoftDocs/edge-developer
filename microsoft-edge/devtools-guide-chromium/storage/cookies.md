---
title: View, Edit, And Delete Cookies With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/30/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# View, Edit, And Delete Cookies With Microsoft Edge DevTools   

  

[HTTP Cookies][MDNHTTPCookies] are mainly used to manage user sessions, store user personalization preferences, and track user behavior.  They are also the cause of all of those annoying "this page uses cookies" consent forms that you see across the web.  This guide teaches you how to view, edit, and delete the HTTP cookies for a page with [Microsoft Edge DevTools][MicrosoftEdgeDevTools].  

## Open the Cookies pane   

1.  [Open DevTools][DevToolsOpen].  
1.  Select the **Application** tab to open the **Application** panel.  The **Manifest** pane should open.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifest]  

1.  Under **Storage** expand **Cookies**, then select an origin.  
    
    > ##### Figure 2  
    > The Cookies pane  
    > ![The Cookies pane][ImageCookies]  

## Fields   

The **Cookies** table contains the following fields:  

[scope]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Scope_of_cookies
[permanent]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Permanent_cookies
[session]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Session_cookies
[secure]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies
[samesite]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies
[priority]: https://bugs.chromium.org/p/chromium/issues/detail?id=232693

* **Name**. The cookie's name.
* **Value**. The cookie's value.
* **Domain**. The hosts that are allowed to receive the cookie. See [Scope of cookies][scope].
* **Path**. The URL that must exist in the requested URL in order to send the `Cookie` header.
  See [Scope of cookies][scope].
* **Expires / Max-Age**. The cookie's expiration date or maximum age. See
  [Permanent cookies][permanent]
  this value is always `Session`.
* **Size**. The cookie's size, in bytes.
* **HTTP**. If true, this field indicates that the cookie should only be used over HTTP, and
  JavaScript modification is not allowed. See [HttpOnly cookies][secure].
* **Secure**. If true, this field indicates that the cookie can only be sent to the server
  over a secure, HTTPS connection. See [Secure cookies][secure].
* **SameSite**. Contains `strict` or `lax` if the cookie is using the experimental
  [SameSite][samesite] attribute.
* **Priority**. Contains `low`, `medium` (default), or `high` if using depreciated [cookie Priority](https://bugs.chromium.org/p/chromium/issues/detail?id=232693) attribute.  

## Filter cookies   

Use the **Filter** text box to filter cookies by **Name** or **Value**.  Filtering by other fields is not supported.  

> ##### Figure 3  
> Filtering out any cookies that do not contain the text `ID`  
> ![Filtering out any cookies that do not contain the text ID][ImageCookiesFilter]  

## Edit a cookie   

The **Name**, **Value**, **Domain**, **Path**, and **Expires / Max-Age** fields are editable.  
Double-click a field to edit it.  

> ##### Figure 4  
> Setting the name of a cookie to `DEVTOOLS!`  
> ![Setting the name of a cookie to DEVTOOLS!][ImageEditCookie]  

## Delete cookies   

Select a cookie and then click **Delete Selected** ![Delete Selected][ImageDeleteIcon]  to delete that one cookie.  

> ##### Figure 5  
> Deleting a specific cookie  
> ![Deleting a specific cookie][ImageDeleteCookie]  

Select **Clear All** ![Clear All][ImageClearIcon]  to delete all cookies.  

> ##### Figure 6  
> Clearing all cookies  
> ![Clearing all cookies][ImageClearAllCookies]  

<!--    -->  

  

<!-- image links -->  

[ImageClearIcon]: /microsoft-edge/devtools-guide-chromium/media/clear-icon.msft.png  
[ImageDeleteIcon]: /microsoft-edge/devtools-guide-chromium/media/delete-icon.msft.png  

[ImageManifest]: /microsoft-edge/devtools-guide-chromium/media/storage-application-manifest-empty.msft.png "Figure 1: The Manifest pane"  
[ImageCookies]: /microsoft-edge/devtools-guide-chromium/media/storage-application-storage-cookies-selected.msft.png "Figure 2: The Cookies pane"  
[ImageCookiesFilter]: /microsoft-edge/devtools-guide-chromium/media/storage-application-storage-cookies-filter-id.msft.png "Figure 3: Filtering out any cookies that do not contain the text ID"  
[ImageEditCookie]: /microsoft-edge/devtools-guide-chromium/media/storage-application-storage-cookies-rename.msft.png "Figure 4: Setting the name of a cookie to DEVTOOLS!"  
[ImageDeleteCookie]: /microsoft-edge/devtools-guide-chromium/media/storage-application-storage-cookies-delete-selected.msft.png "Figure 5: Deleting a specific cookie"  
[ImageClearAllCookies]: /microsoft-edge/devtools-guide-chromium/media/storage-application-storage-cookies-clear-all.msft.png "Figure 6: Clearing all cookies"  

<!-- links -->  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[DevToolsOpen]: /microsoft-edge/devtools-guide-chromium/open "Open Microsoft Edge DevTools"  

[MDNHTTPCookies]: https://developer.mozilla.org/docs/Web/HTTP/Cookies "HTTP cookies | MDN"  
[MDNHTTPCookiesPermanent]: https://developer.mozilla.org/docs/Web/HTTP/Cookies#Permanent_cookies "HTTP cookies - Permanent cookies | MDN"  
[MDNHTTPCookiesSamesite]: https://developer.mozilla.org/docs/Web/HTTP/Cookies#SameSite_cookies "HTTP cookies - SameSite cookies | MDN"  
[MDNHTTPCookiesScope]: https://developer.mozilla.org/docs/Web/HTTP/Cookies#Scope_of_cookies "HTTP cookies - Scope of cookies | MDN"  
[MDNHTTPCookiesSecure]: https://developer.mozilla.org/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies "HTTP cookies - Secure and HttpOnly cookies | MDN"  
[MDNHTTPCookiesSession]: https://developer.mozilla.org/docs/Web/HTTP/Cookies#Session_cookies "HTTP cookies - Session cookies | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/cookies) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
