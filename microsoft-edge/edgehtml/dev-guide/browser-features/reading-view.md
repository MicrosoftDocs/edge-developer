---
ms.assetid: 2bc29371-4f2e-4b59-a588-30b107d751f6
description: See how Microsoft Edge provides a reading view for webpages to enable add-free reading.
title: Reading view - Dev guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Reading view  

[!INCLUDE [deprecation-note](../../includes/legacy-edge-note.md)]  

Microsoft Edge provides a reading view for a more streamlined, book-like reading experience of webpages without the distraction of unrelated or other secondary content on the page.  Reading view can be toggled on or off from the **Reading view** \(book icon\) button on the address bar or with `Ctrl`+`Shift`+`R`.  Reading view extracts the following metadata from a page:  

*   Title
*   Author
*   Date
*   Publisher
*   Dominant image\(s\)
*   Captions of dominant image\(s\)
*   Secondary images
*   Main text content of the page
*   Copyright

Users can then adjust the page contrast and font size from the Microsoft Edge **Settings** panel.  

## Metadata extraction  

Here are details of the page metadata rendered by reading view.  

### Title  

To ensure Reading view renders your article's title:  

*   Include a `title` element in your header  
*   Include a meta tag with `name="title"`  
*   Match the title text in your article body with the content string of your meta tag.  Pipes \(`|`\) in your content string prevent the reader view from becoming active, try using hyphens \(`-`\) instead.  

### Author  

Reading View will look for an element with `class = "byline-name"`.  Best practice is to place the author name after the title and before the article body.  

```html
<div class="byline-name">Author name</div>
```  

### Date  

Reading view will render the publisher and date information together on the same line, with additional styling to highlight this information.  The article's publishing date will render exactly as it appears in the string.  Reading view does not convert to a specific date format.  

If you have a date in your article body and would like Reading view to render it, assign the element containing the date with the class `'dateline'`:  

```html
<div class="dateline"> Wednesday, September 18, 2013 7:38 AM </div>
```  

If you don't have a date in the article body but would like Reading view to render the date, use the meta tag `name='displaydate'`:  

```html
<meta name="displaydate" content=" Wednesday, September 18, 2013 7:38 AM ">
```  

### Publisher  

Reading view will look for the Open Graph protocol `"og:site_name"` to render the publisher information.  It also looks for `source_organization` and `publisher` attributes in any html tag as a secondary indicator of publisher information on the page.  The publisher text will be hyperlinked to the URL of page using the Reading view page hyperlink style.  

```html
<meta content="Name of organization source" property="og:site_name">
```  

### Images  

Reading view captures most raw images with width >= 400px and aspect ratio >= 1/3 and =< 3.0.  Images that do not meet these dimensions may still be extracted, such as images that are smaller than 400px in width but have captions.  The first eligible image becomes the dominant image of the article.  The dominant image is rendered as the first piece of content and given full column width.  All following images are rendered as inline images within the article.  

### Captions  

Best practice is to place images in [figure](https://developer.mozilla.org/docs/Web/HTML/Element/figure) tags with no more than two nested [figcaption](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) tags.  

### Body  

To ensure that all the body text of your page is captured by Reading view, it helps to keep most of the article text the same font size and DOM depth.  The reading view algorithm allows for some deviation from this rule so publishers can have the freedom to add emphasis to lines or words.  

### Copyright  

Reading view extracts and displays copyright information denoted by meta tags with `name = "copyright"`, or if no meta tag information exists, a text node that contains the copyright \(`©`\) symbol.  Reading view displays copyright information at the end of the article main body, styled using a smaller font size than the main body text.  

```html
<meta name="copyright" content="Your copyright information">
```  

## Opting out of Reading View  

If you feel your content is not a good fit for Reading view, you can use the following meta tag to opt out of this feature:  

```html
<meta name="IE_RM_OFF" content="true">
```  

With this tag, the **Reading view** button will not appear in the address bar when your users view your page.  
