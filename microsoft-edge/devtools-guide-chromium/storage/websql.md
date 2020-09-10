---
description: How to view Web SQL data from the Application panel of Microsoft Edge DevTools.
title: View Web SQL Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
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





# View Web SQL data with Microsoft Edge DevTools   



> [!WARNING]
> The Web SQL specification is [not being maintained][W3CWebSQLStatus].  

This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to inspect Web SQL data.  

## View Web SQL Data   

1.  Select the **Sources** tab to open the **Sources** panel.  The **Manifest** pane usually opens by default.  
    
    :::image type="complex" source="../media/storage-application-manifest.msft.png" alt-text="The Manifest pane" lightbox="../media/storage-application-manifest.msft.png":::
       The **Manifest** pane  
    :::image-end:::  
    
1.  Expand the **Web SQL** section to view databases and tables.  In the following figure, below **html5meetup** is a database and **rooms** is a table.  
    
    :::image type="complex" source="../media/storage-application-storage-web-sql.msft.png" alt-text="The Web SQL pane" lightbox="../media/storage-application-storage-web-sql.msft.png":::
       The **Web SQL** pane  
    :::image-end:::  
    
1.  Select a table to view the data for that table.  
    
    :::image type="complex" source="../media/storage-application-storage-web-sql-html5meetup-rooms-1.msft.png" alt-text="View the data of a Web SQL table" lightbox="../media/storage-application-storage-web-sql-html5meetup-rooms-1.msft.png":::
       View the data of a Web SQL table  
    :::image-end:::  
    
## Edit Web SQL data   

You are not able to edit Web SQL data when viewing a Web SQL table, such as in **Figure 3** above.  But you may run statements from the Web SQL Console that edit or delete tables.  See [Run Web SQL queries](#run-web-sql-queries).  

## Run Web SQL queries   

1.  Select a database to open a console for that database.  
1.  Type a Web SQL statement, then press `Enter` to run it.  
    
    :::image type="complex" source="../media/storage-application-storage-web-sql-html5meetup-commands.msft.png" alt-text="Use the Web SQL Console to delete a row from a table" lightbox="../media/storage-application-storage-web-sql-html5meetup-commands.msft.png":::
       Use the Web SQL Console to delete a row from a table  
    :::image-end:::  
    
## Refresh a Web SQL table   

DevTools does not update tables in real-time.  To update the data in a table:  

1.  [View the data in a Web SQL table](#view-web-sql-data).  
1.  Select **Refresh** \(![Refresh][ImageRefreshIcon]\).  
    
## Filter out columns in a Web SQL table   

1.  [View the data in a Web SQL table](#view-web-sql-data).  
1.  Use the **Visible columns** text box to specify what columns you want to show.  Provide the column names as a CSV list.  
    
    :::image type="complex" source="../media/storage-application-storage-web-sql-html5meetup-rooms-2.msft.png" alt-text="Use the Visible Columns text box to reduce the number of columns shown" lightbox="../media/storage-application-storage-web-sql-html5meetup-rooms-2.msft.png":::
       Use the **Visible Columns** text box to reduce the number of columns shown  
    :::image-end:::  
    
## Delete all Web SQL data   

1.  Open the **Clear Storage** pane.  
1.  Make sure that the **Web SQL** checkbox is enabled.  
    
    :::image type="complex" source="../media/storage-application-clear-storage-web-sql.msft.png" alt-text="The Web SQL checkbox" lightbox="../media/storage-application-clear-storage-web-sql.msft.png":::
       The **Web SQL** checkbox  
    :::image-end:::  
    
1.  Select **Clear site data**.  
    
    :::image type="complex" source="../media/storage-application-clear-storage-clear-site-data-button.msft.png" alt-text="The Clear Site Data button" lightbox="../media/storage-application-clear-storage-clear-site-data-button.msft.png":::
       The **Clear Site Data** button  
    :::image-end:::  
    
<!--  
 


-->  

<!-- image links -->  

[ImageRefreshIcon]: ../media/refresh-icon.msft.png  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  

[W3CWebSQLStatus]: https://w3.org/TR/webdatabase/#status-of-this-document "Web SQL database | W3C"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/websql) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
