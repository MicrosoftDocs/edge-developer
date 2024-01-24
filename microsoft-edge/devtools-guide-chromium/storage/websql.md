---
title: View Web SQL data
description: How to view Web SQL data from the Application panel of Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
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
# View Web SQL data

This article shows how to use DevTools to inspect Web SQL data.

> [!WARNING]
> The Web SQL specification is [not being maintained](https://w3.org/TR/webdatabase/#status-of-this-document).


<!-- ====================================================================== -->
## View Web SQL Data

1. In DevTools, open the **Application** tool.  The **Manifest** pane usually opens by default.

   ![The Manifest pane](./websql-images/storage-application-manifest.png)

1. Expand the **Web SQL** section to view databases and tables.  In the following figure, below **html5meetup** is a database and **rooms** is a table.

   ![The Web SQL pane](./websql-images/storage-application-storage-web-sql.png)

1. Click a table to view the data for that table.

![View the data of a Web SQL table](./websql-images/storage-application-storage-web-sql-html5meetup-rooms-1.png)


<!-- ====================================================================== -->
## Edit Web SQL data

You can't edit Web SQL data when viewing a Web SQL table, such as in the previous figure.  But you can run statements from the Web SQL Console that edit or delete tables.  See [Run Web SQL queries](#run-web-sql-queries).


<!-- ====================================================================== -->
## Run Web SQL queries

1. Click a database to open a console for that database.

1. Type a Web SQL statement, then press **Enter** to run it.

![Use the Web SQL Console to delete a row from a table](./websql-images/storage-application-storage-web-sql-html5meetup-commands.png)


<!-- ====================================================================== -->
## Refresh a Web SQL table

DevTools doesn't update tables in real-time.  To update the data in a table:

1. [View the data in a Web SQL table](#view-web-sql-data).

1. Click **Refresh** (![Refresh](./websql-images/refresh-icon.png)).


<!-- ====================================================================== -->
## Filter out columns in a Web SQL table

1. [View the data in a Web SQL table](#view-web-sql-data).

1. Use the **Visible columns** text box to specify what columns you want to show.  Provide the column names as a CSV list.

   ![Use the Visible Columns text box to reduce the number of columns shown](./websql-images/storage-application-storage-web-sql-html5meetup-rooms-2.png)


<!-- ====================================================================== -->
## Delete all Web SQL data

1. Open the **Clear Storage** pane.

1. Make sure that the **Web SQL** checkbox is turned on.

   ![The Web SQL checkbox](./websql-images/storage-application-clear-storage-web-sql.png)

1. Click **Clear site data**.

   ![The Clear Site Data button](./websql-images/storage-application-clear-storage-clear-site-data-button.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/storage/websql/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
