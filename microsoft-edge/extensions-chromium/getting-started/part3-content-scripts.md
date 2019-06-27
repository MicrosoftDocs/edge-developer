---
description: Extensions Getting Started Part 1
title: Dynamically Insert NASA Picture Below the page body tag using content scripts
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Dynamically insert NASA picture below the page body tag

* Extension technologies covered in this part 3.
  * Injection JavaScript libraries into extension
  * Including content pages in existing chrome tabs
  * Having content pages listen for messages from popups and respond
  
In this part 3 we will update our pop up menu to not show the static stars image we had before, but to replace that image with a title and a standard HTML button. That button will pass that stars image location(URL), to the active tab page, and then append to that tab page's an image element that references the stars img for display.

First, let's update our `popup.html` file with some straight forward markup that displays a title and a button that we will program shortly but for now, let's just include a reference to an empty JavaScript file `popup.js`. Here is are update HTML.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        width: 500px;
      }
      button {
        background-color: #336dab; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>Show the NASA Picture of the Day</h1>
    <h2>(click on the image to remove)</h2>
    <button id="sendmessageid">Display</button>
    <script src="popup.js"></script>
  </body>
</html>
```

Then, update our extension as shown in the previous part and then clicking on our extension icon, gives us a nice modal display with our button (which does nothing yet).

![popup.html display after pressing the extension icon](media/part3-popupdialog.png)

Remem


