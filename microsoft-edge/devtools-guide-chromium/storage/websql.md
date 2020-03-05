---
title: View Web SQL Data With Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/14/2019
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





# View Web SQL Data With Microsoft Edge DevTools   



> [!WARNING]
> The Web SQL specification is [not being maintained][W3CWebSQLStatus].  

This guide shows you how to use [Microsoft Edge DevTools][MicrosoftEdgeDevTools] to inspect Web SQL data.  

## View Web SQL Data   

1.  Click the **Sources** tab to open the **Sources** panel.  The **Manifest** pane usually opens by default.  
    
    > ##### Figure 1  
    > The Manifest pane  
    > ![The Manifest pane][ImageManifestPane]  
    
1.  Expand the **Web SQL** section to view databases and tables.  In [Figure 2](#figure-2) below **html5meetup** is a database and **rooms** is a table.  
    
    > ##### Figure 2  
    > The Web SQL pane  
    > ![The Web SQL pane][ImageWebSQLPane]  

1.  Click a table to view the data for that table.  
    
    > ##### Figure 3  
    > Viewing the data of the **rooms** Web SQL table  
    > ![Viewing the data of a Web SQL table][ImageWebSQLTable]  

## Edit Web SQL data   

You are not able to edit Web SQL data when viewing a Web SQL table, such as in **Figure 3** above.  But you may run statements from the Web SQL Console that edit or delete tables.  See [Run Web SQL queries](#run-web-sql-queries).  

## Run Web SQL queries   

1.  Click a database to open a console for that database.  

1.  Type a Web SQL statement, then press `Enter` to run it.  
    
    > ##### Figure 4  
    > Using the Web SQL Console to delete a row from the **rooms** table  
    > ![Using the Web SQL Console to delete a row from a table][ImageWebSQLEdit]  

## Refresh a Web SQL table   

DevTools does not update tables in real-time.  To update the data in a table:  

1.  [View the data in a Web SQL table](#view-web-sql-data).  
1.  Click **Refresh** ![Refresh][ImageReloadIcon].  

## Filter out columns in a Web SQL table   

1.  [View the data in a Web SQL table](#view-web-sql-data).  
1.  Use the **Visible columns** text box to specify what columns you want to show.  Provide the column names as a CSV list.  
    
    > ##### Figure 5  
    > Using the **Visible Columns** text box to only show the `room_name` and `last_updated` columns  
    > ![Using the Visible Columns text box to reduce the number of columns shown][ImageWebSQLFilter]  

## Delete all Web SQL data   

1.  Open the **Clear Storage** pane.  
1.  Make sure that the **Web SQL** checkbox is enabled.  
    
    > ##### Figure 6  
    > The **Web SQL** checkbox  
    > ![The Web SQL checkbox][ImageWebSQLCheckbox]  

1.  Click **Clear site data**.  
    
    > ##### Figure 7  
    > The **Clear Site Data** button  
    > ![The Clear Site Data button][ImageClearWebSQL]  

 



<!-- image links -->  

[ImageReloadIcon]: images/reload-icon.msft.png  

[ImageManifestPane]: images/application-manifest.msft.png "Figure 1: The Manifest pane"  
[ImageWebSQLPane]: images/application-storage-web-sql.msft.png "Figure 2: The Web SQL pane"  
[ImageWebSQLTable]: images/application-storage-web-sql-html5meetup-rooms-1.msft.png "Figure 3: Viewing the data of a Web SQL table"  
[ImageWebSQLEdit]: images/application-storage-web-sql-html5meetup-commands.msft.png "Figure 4: Using the Web SQL Console to delete a row from a table"  
[ImageWebSQLFilter]: images/application-storage-web-sql-html5meetup-rooms-2.msft.png "Figure 5: Using the Visible Columns text box to reduce the number of columns shown"  
[ImageWebSQLCheckbox]: images/application-clear-storage-web-sql.msft.png "Figure 6: The Web SQL checkbox"  
[ImageClearWebSQL]: images/application-clear-storage-clear-site-data-button.msft.png "Figure 7: The Clear Site Data button"  

<!-- links -->  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  

[W3CWebSQLStatus]: https://www.w3.org/TR/webdatabase/#status-of-this-document "Web SQL database | W3C"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/storage/websql) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
