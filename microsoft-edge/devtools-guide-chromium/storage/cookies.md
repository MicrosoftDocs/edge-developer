---
description: Learn how to view, edit, and delete the HTTP cookies for a page using Microsoft Edge DevTools.
title: View, edit, and delete cookies with Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# View, edit, and delete cookies with Microsoft Edge DevTools

[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) are mainly used to manage user sessions, store user personalization preferences, and track user behavior.  Cookies are also the cause of all of the annoying **this page uses cookies** consent forms that are found across the web.  The following guide teaches you how to view, edit, and delete the HTTP cookies for a webpage with [Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium).


<!-- ====================================================================== -->
## Open the Cookies pane

1.  [Open DevTools](/microsoft-edge/devtools-guide-chromium/open).
1.  Choose the **Application** tab to open the **Application** panel.  The **Manifest** pane should open.

    :::image type="complex" source="../media/storage-application-manifest-empty.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest-empty.msft.png":::
       Figure 1:  The Manifest pane
    :::image-end:::

1.  Under **Storage** expand **Cookies**, then select an origin.

    :::image type="complex" source="../media/storage-application-storage-cookies-selected.msft.png" alt-text="The Cookies pane" lightbox="../media/storage-application-storage-cookies-selected.msft.png":::
       Figure 2:  The Cookies pane
    :::image-end:::


<!-- ====================================================================== -->
## Fields

The **Cookies** table contains the following fields.

*   **Name**.  The name of the cookie.
*   **Value**.  The value of the cookie.
*   **Domain**.  The hosts that are allowed to receive the cookie.  Navigate to [Scope of cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Scope_of_cookies).
*   **Path**.  The URL that must exist in the requested URL in order to send the `Cookie` header.  Navigate to [Scope of cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Scope_of_cookies).
*   **Expires / Max-Age**.  The expiration date or maximum age of the cookie.  Navigate to [Permanent cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Permanent_cookies).  For [session cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Session_cookies) this value is always `Session`.
*   **Size**.  The size, in bytes, of the cookie.
*   **HTTP**.  If true, this field indicates that the cookie should only be used over HTTP and JavaScript modification is not allowed.  Navigate to [HttpOnly cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies).
*   **Secure**.  If true, this field indicates that the cookie must be sent to the server only over a secure, HTTPS connection.  Navigate to [Secure cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies).
*   **SameSite**.  Contains `strict` or `lax` if the cookie is using the experimental [Samesite](https://developer.mozilla.org/docs/Web/HTTP/Cookies#SameSite_cookies) attribute.
*   **Priority**.  Contains `low`, `medium` (default), or `high` if the cookie is using the deprecated [cookie Priority](https://bugs.chromium.org/p/chromium/issues/detail?id=232693) attribute.


<!-- ====================================================================== -->
## Filter cookies

Use the **Filter** text box to filter cookies by **Name** or **Value**.  Filtering by other fields is not supported.

:::image type="complex" source="../media/storage-application-storage-cookies-filter-id.msft.png" alt-text="Filtering out any cookies that do not contain the text ID" lightbox="../media/storage-application-storage-cookies-filter-id.msft.png":::
   Figure 3:  Filtering out any cookies that do not contain the text `ID`
:::image-end:::


<!-- ====================================================================== -->
## Edit a cookie

The **Name**, **Value**, **Domain**, **Path**, and **Expires / Max-Age** fields are editable.
Double-click a field to edit it.

:::image type="complex" source="../media/storage-application-storage-cookies-rename.msft.png" alt-text="Setting the name of a cookie to DEVTOOLS!" lightbox="../media/storage-application-storage-cookies-rename.msft.png":::
   Figure 4:  Setting the name of a cookie to `DEVTOOLS!`
:::image-end:::


<!-- ====================================================================== -->
## Delete cookies

Choose a cookie and choose **Delete Selected** (![Delete Selected](../media/delete-icon.msft.png)) to delete the specific cookie.

:::image type="complex" source="../media/storage-application-storage-cookies-delete-selected.msft.png" alt-text="Deleting a specific cookie" lightbox="../media/storage-application-storage-cookies-delete-selected.msft.png":::
   Figure 5:  Deleting a specific cookie
:::image-end:::

Choose **Clear All** (![Clear All](../media/clear-icon.msft.png)) to delete all cookies.

:::image type="complex" source="../media/storage-application-storage-cookies-clear-all.msft.png" alt-text="Clearing all cookies" lightbox="../media/storage-application-storage-cookies-clear-all.msft.png":::
   Figure 6:  Clearing all cookies
:::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/cookies) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
