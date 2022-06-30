---
title: View, edit, and delete cookies
description: In Microsoft Edge DevTools, use the Cookies pane of the Application tool to view, edit, and delete the HTTP cookies for a webpage.  HTTP cookies are used to manage user sessions, store user personalization preferences, and track user behavior.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
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
# View, edit, and delete cookies

_HTTP cookies_ are used to manage user sessions, store user personalization preferences, and track user behavior.  Use the **Cookies** pane of the **Application** tool to view, edit, and delete the HTTP cookies for a webpage.

See [Using HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies).


<!-- ====================================================================== -->
## Open the Cookies pane

1. [Open DevTools](/microsoft-edge/devtools-guide-chromium/open).

1. Click the **Application** tab to open the **Application** panel.  The **Manifest** pane opens:

   ![The Manifest pane.](../media/storage-application-manifest-empty.msft.png)

1. Under **Storage**, expand **Cookies**, then select an origin:

   ![The Cookies pane.](../media/storage-application-storage-cookies-selected.msft.png)


<!-- ====================================================================== -->
## Fields

The **Cookies** table contains the following fields:

*  **Name**.  The name of the cookie.

*  **Value**.  The value of the cookie.

*  **Domain**.  The hosts that are allowed to receive the cookie.  See [Scope of cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Scope_of_cookies).

*  **Path**.  The URL that must exist in the requested URL in order to send the `Cookie` header.  See [Scope of cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Scope_of_cookies).

*  **Expires / Max-Age**.  The expiration date or maximum age of the cookie.  See [Permanent cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Permanent_cookies).  For [session cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Session_cookies) this value is always `Session`.

*  **Size**.  The size, in bytes, of the cookie.

*  **HTTP**.  If true, this field indicates that the cookie should only be used over HTTP, and JavaScript modification isn't allowed.  See [HttpOnly cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies).

*  **Secure**.  If true, this field indicates that the cookie must be sent to the server only over a secure, HTTPS connection.  See [Secure cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies).

*  **SameSite**.  Contains `strict` or `lax` if the cookie is using the experimental [Samesite](https://developer.mozilla.org/docs/Web/HTTP/Cookies#SameSite_cookies) attribute.

*  **Priority**.  Contains `low`, `medium` (default), or `high` if the cookie is using the deprecated [cookie Priority](https://bugs.chromium.org/p/chromium/issues/detail?id=232693) attribute.


<!-- ====================================================================== -->
## Filter cookies

To filter cookies by **Name** or **Value**, use the **Filter** text box:

![Filtering out any cookies that don't contain the text ID.](../media/storage-application-storage-cookies-filter-id.msft.png)

Filtering by other fields isn't supported.


<!-- ====================================================================== -->
## Edit a cookie

The **Name**, **Value**, **Domain**, **Path**, and **Expires / Max-Age** fields are editable.  Double-click a field to edit it:

![Setting the name of a cookie to 'DEVTOOLS!'](../media/storage-application-storage-cookies-rename.msft.png)


<!-- ====================================================================== -->
## Delete cookies

To delete a specific cookie, click a cookie and then click **Delete Selected** (![Delete Selected.](../media/delete-icon.msft.png)):

![Deleting a specific cookie.](../media/storage-application-storage-cookies-delete-selected.msft.png)

To delete all cookies, click **Clear All** (![Clear All.](../media/clear-icon.msft.png)):

![Clearing all cookies.](../media/storage-application-storage-cookies-clear-all.msft.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/storage/cookies/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License.](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
