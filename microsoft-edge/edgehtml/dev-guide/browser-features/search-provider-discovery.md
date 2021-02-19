---
ms.assetid: f74760f5-061c-494d-b096-9fb6ecb71a16
description: If you are a search provider, see how to ensure that Microsoft Edge supports your service.
title: Search provider discovery - Dev guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Search provider discovery  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Rich search integration is built into the Microsoft Edge address bar, including search suggestions, results from the web, your browsing history, and favorites.  Microsoft Edge follows the [OpenSearch 1.1](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md) specification to discover and use web search providers.  If you are a search provider, here's how to ensure that Microsoft Edge supports your service.  

> [!IMPORTANT]
> For user security and privacy, Microsoft Edge requires all searches be conducted over SSL.  

The following resources must be specified as `https` URLs to enable Microsoft Edge integration of your search engine:  

*   The site that contains the reference to the description document  
*   The URL to the description document itself  
*   The search query template  
    
1.  Provide an OpenSearch description file, which contains the name of the search provider, and the template to use to construct the search.  Here is an example document:  
    
    ```html
    <?xml version="1.0" encoding="UTF-8"?> 
    <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
        <ShortName>Contoso Search</ShortName>
        <Url type="text/html" template="https://www.contoso.com/?query={searchTerms}"/> 
    </OpenSearchDescription>
    ```  
    
1.  Include a reference to your OpenSearch description file in the header section of your pages (typically this would include your site home page and search result pages), for example:  
    
    ```html
    <html>
        <head>
            <link rel="search" 
                type="application/opensearchdescription+xml"  
                href="https://contoso.com/content-search.xml" 
                title="Contoso search" /> 
        </head> 
        <body> 
        ...
    ```  
    
When a user browses to your search service, your OpenSearch description will be automatically picked up and saved for later use.  The user will then be able to go to Microsoft Edge settings and choose to add your search service to his or her list of search providers for the Microsoft Edge address bar.  

See the [OpenSearch 1.1](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md) specification for further details on creating your OpenSearch description document.  
