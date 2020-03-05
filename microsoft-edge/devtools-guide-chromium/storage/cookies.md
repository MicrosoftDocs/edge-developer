---
title: View, Edit, And Delete Cookies With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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

  

[HTTP Cookies][MDNHTTPCookies]  are mainly used to manage user sessions, store user personalization preferences, and track user behavior.  They are also the cause of all of those annoying "this page uses cookies" consent forms that you see across the web.  This guide teaches you how to view, edit, and delete the HTTP cookies for a page with [Microsoft Edge DevTools][MicrosoftEdgeDevTools].  

## Open the Cookies pane   

1.  [Open DevTools][DevToolsOpen].  
1.  Click the **Application** tab to open the **Application** panel.  The **Manifest** pane should open.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifest]  

1.  Under **Storage** expand **Cookies**, then select an origin.  
    
    > ##### Figure 2  
    > The Cookies pane  
    > ![The Cookies pane][ImageCookies]  

## Fields   

The **Cookies** table contains the following fields:  

*   **Name**.  The name of the cookie.  
*   **Value**.  The value of the cookie.  
*   **Domain**.  The hosts that are allowed to receive the cookie.  See [Scope of cookies][MDNHTTPCookiesScope] .  
*   **Path**.  The URL that must exist in the requested URL in order to send the `Cookie` header.  See [Scope of cookies][MDNHTTPCookiesScope] .  
*   **Expires / Max-Age**.  The expiration date or maximum age of the cookie.  See [Permanent cookies][MDNHTTPCookiesPermanent]  this value is always `Session`.  
*   **Size**.  The size, in bytes, of the cookie.  
*   **HTTP**.  If true, this field indicates that the cookie should only be used over HTTP and JavaScript modification is not allowed.  See [HttpOnly cookies][MDNHTTPCookiesSecure] .  
*   **Secure**.  If true, this field indicates that the cookie must be sent to the server only over a secure, HTTPS connection.  See [Secure cookies][MDNHTTPCookiesSecure] .  
*   **SameSite**.  Contains `strict` or `lax` if the cookie is using the experimental [Samesite][MDNHTTPCookiesSamesite]  attribute.  

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

Click **Clear All** ![Clear All][ImageClearIcon]  to delete all cookies.  

> ##### Figure 6  
> Clearing all cookies  
> ![Clearing all cookies][ImageClearAllCookies]  

   

  

<!-- image links -->  

[ImageClearIcon]: images/clear-icon.msft.png  
[ImageDeleteIcon]: images/delete-icon.msft.png  

[ImageClearAllCookies]: images/application-storage-cookies-clear-all.msft.png "Figure 6: Clearing all cookies"  
[ImageCookies]: images/application-storage-cookies-selected.msft.png "Figure 2: The Cookies pane"  
[ImageCookiesFilter]: images/application-storage-cookies-filter-id.msft.png "Figure 3: Filtering out any cookies that do not contain the text ID"  
[ImageDeleteCookie]: images/application-storage-cookies-delete-selected.msft.png "Figure 5: Deleting a specific cookie"  
[ImageEditCookie]: images/application-storage-cookies-rename.msft.png "Figure 4: Setting the name of a cookie to DEVTOOLS!"  
[ImageManifest]: images/application-manifest-empty.msft.png "Figure 1: The Manifest pane"  

<!-- links -->  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

[DevToolsOpen]: ../open.md "Open Microsoft Edge DevTools"  

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
