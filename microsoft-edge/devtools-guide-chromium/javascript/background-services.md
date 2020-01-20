---
title: Debug Background Services With Microsoft Edge DevTools
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





# Debug Background Services With Microsoft Edge DevTools   



The **Background Services** section of Microsoft Edge DevTools is a collection of tools for the JavaScript APIs that enables your website to send and receive updates even when a user does not have your website open.  
A background service is functionally similar to a [background process][WikiBackgroundProcess].  
Microsoft Edge DevTools considers each of the following APIs to be a background service:  

*   [Background Fetch](#background-fetch)  
*   [Background Sync](#background-sync)  
*   [Notifications](#notifications)  
*   [Push Messages](#push-messages)  

Microsoft Edge DevTools can log background service events for 3 days, even when DevTools is not open.  
This can help you make sure that events are being sent and received as expected.  You can also inspect the details of each event.  

> ##### Figure 1  
> Viewing the details of an event in the Push Messaging pane  
> ![Viewing the details of an event in the Push Messaging pane][PushDetails]  

## Background Fetch   

The *Background Fetch API** enables a **service worker** to reliably download large resources, like movies or podcasts, as a background service.  To log Background Fetch event for 3 days, even when DevTools is not open:  

<!--Todo: add background fetch api section when available -->  

1.  [Open DevTools][OpenDevTools].  
1.  Open the **Application** panel.  
1.  Open the **Background Fetch** pane.  
    
    > ##### Figure 2  
    > The Background Fetch pane  
    > ![The Background Fetch pane][FetchEmpty]  
    
1.  Click **Record** ![Record][ImageRecordIcon].  
   After triggering some Background Fetch activity, DevTools logs the events to the table.  
    
    > ##### Figure 3  
    > A log of events in the Background Fetch pane  
    > ![A log of events in the Background Fetch pane][FetchLog]  
    
1.  Click an event to view its details in the space below the table.  
    
    > ##### Figure 4  
    > Viewing the details of an event in the Background Fetch pane  
    > ![Viewing the details of an event in the Background Fetch pane][FetchDetails]  

## Background Sync   

The **Background Sync API** enables an offline **service worker** to send data to a server once it has re-established a reliable internet connection.  To log Background Sync events for 3 days, even when DevTools is not open:  

<!--Todo: add background sync api section when available -->  

1.  [Open DevTools][OpenDevTools].  
1.  Open the **Application** panel.  
1.  Open the **Background Sync** pane.  
    
    > ##### Figure 5  
    > The Background Sync pane  
    > ![The Background Sync pane][SyncEmpty]  
    
1.  Click **Record** ![Record][ImageRecordIcon].  
   After triggering some Background Sync activity, DevTools logs the events to the table.  
    
    > ##### Figure 6  
    > A log of events in the Background Sync pane  
    > ![A log of events in the Background Sync pane][SyncLog]  
    
1.  Click an event to view its details in the space below the table.  
    
    > ##### Figure 7  
    > Viewing the details of an event in the Background Sync pane  
    > ![Viewing the details of an event in the Background Sync pane][SyncDetails]  
    
## Notifications 

After a **service worker** has received a [Push Message][MDNPush] from a server, the service worker uses the [Notifications API][MDNNotifications] to display the data to a user.  To log Notifications for 3 days, even when DevTools is not open:  

1.  [Open DevTools][OpenDevTools].  
1.  Open the **Application** panel.  
1.  Open the **Notifications** pane.  
    
    > ##### Figure 8  
    > The Notifications pane  
    > ![The Notifications pane][NotificationsEmpty]  
    
1.  Click **Record** ![Record][ImageRecordIcon].  
   After triggering some Notifications activity, DevTools logs the events to the table.  
    
    > ##### Figure 9  
    > A log of events in the Notifications pane  
    > ![A log of events in the Notifications pane][NotificationsLog]  
    
1.  Click an event to view its details in the space below the table.  
    
    > ##### Figure 10  
    > Viewing the details of an event in the Notifications pane  
    > ![Viewing the details of an event in the Notifications pane][NotificationsDetails]  
    
## Push Messages 

To display a push notification to a user, a **service worker** must first use the [Push Message API][MDNPush] to receive data from a server.  When the service worker is ready to display the notification, it uses the [Notifications API][MDNNotifications].  To log Push Messages for 3 days, even when DevTools is not open:  

1.  [Open DevTools][OpenDevTools].  
1.  Open the **Application** panel.  
1.  Open the **Push Messaging** pane.  
    
    > ##### Figure 11  
    > The Push Messaging pane  
    > ![The Push Messaging pane][PushEmpty]  

1.  Click **Record** ![Record][ImageRecordIcon].  
    After triggering some Push Message activity, DevTools logs the events to the table.  
    
    > ##### Figure 12  
    > A log of events in the Push Messaging pane  
    > ![A log of events in the Push Messaging pane][PushLog]  

1.  Click an event to view its details in the space below the table.  
    
    > ##### Figure 13  
    > Viewing the details of an event in the Push Messaging pane  
    > ![Viewing the details of an event in the Push Messaging pane][PushDetails2]  
    
 



<!-- image links -->  

[ImageRecordIcon]: images/record-icon.msft.png  

[FetchDetails]: images/application-background-services-background-fetch-details.msft.png "Figure 4: Viewing the details of an event in the Background Fetch pane"  
[FetchEmpty]: images/application-background-services-background-fetch-empty.msft.png "Figure 2: The Background Fetch pane"  
[FetchLog]: images/application-background-services-background-fetch.msft.png "Figure 3: A log of events in the Background Fetch pane"  
[NotificationsDetails]: images/application-background-services-notifications-details.msft.png "Figure 10: Viewing the details of an event in the Notifications pane"  
[NotificationsEmpty]: images/application-background-services-notifications-empty.msft.png "Figure 8: The Notifications pane"  
[NotificationsLog]: images/application-background-services-notifications.msft.png "Figure 9: A log of events in the Notifications pane"  
[PushDetails]: images/application-background-services-push-messaging.msft.png "Figure 1: Viewing the details of an event in the Push Messaging pane"  
[PushDetails2]: images/application-background-services-push-messaging-details.msft.png "Figure 13: Viewing the details of an event in the Push Messaging pane"  
[PushEmpty]: images/application-background-services-push-messaging-empty.msft.png "Figure 11: The Push Messaging pane"  
[PushLog]: images/application-background-services-push-messaging.msft.png "Figure 12: A log of events in the Push Messaging pane"  
[SyncDetails]: images/application-background-services-background-sync-details.msft.png "Figure 7: Viewing the details of an event in the Background Sync pane"  
[SyncEmpty]: images/application-background-services-background-sync-empty.msft.png "Figure 5: The Background Sync pane"  
[SyncLog]: images/application-background-services-background-sync.msft.png "Figure 6: A log of events in the Background Sync pane"  

<!-- links -->  

<!--[BackgroundFetchAPI]: ../../../microsoft-edge/devtools-guide-chromium/whats-new/2018/12/background-fetch.md "Background Fetch API"  -->  
<!--[BackgroundSyncAPI]: ../../../microsoft-edge/devtools-guide-chromium/whats-new/2015/12/background-sync.md  "Background Sync API"  -->

[OpenDevTools]: ../open.md "Open Microsoft Edge (Chromium) Developer Tools"  

[MDNNotifications]: https://developer.mozilla.org/docs/Web/API/Notifications_API "Notifications API | MDN"  
[MDNPush]: https://developer.mozilla.org/docs/Web/API/Push_API "Push API | MDN"  
<!--[ServiceWorkerCacheStorage]: https://alphabet.dev/service-workers-cache-storage "Service workers and the Cache Storage API | alphabet.dev"  -->
[WikiBackgroundProcess]: https://en.wikipedia.org/wiki/Background_process "Background process - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/background-services) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  
[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
