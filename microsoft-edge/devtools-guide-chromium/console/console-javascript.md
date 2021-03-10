

This page explains how the Microsoft Edge DevTools Console makes it easier to develop web pages.  The **Console** has 2 main uses: [viewing logged messages](#viewing-logged-messages) and [running JavaScript](#running-javascript).  

## Viewing logged messages  

Web developers often log messages to the Console to make sure that their JavaScript is working as expected.  To log a message, you insert an expression like `console.log('Hello, Console!')` into your JavaScript.  When the browser runs your JavaScript and processes an expression like it, the browser logs the message to the **Console**.  

:::row:::
   :::column span="":::
      The HTML and JavaScript for the page.  
      
      ```html
      <!doctype html>
      <html>
          <head>
              <title>Console Demo</title>
          </head>
          <body>
              <h1>Hello, World!</h1>
              <script>
                  console.log('Loading!');
                  const h1 = document.querySelector('h1');
                  console.log(h1.textContent);
                  console.assert(document.querySelector('h2'), 'h2 not found!');
                  const artists = [
                      { first: 'René', last: 'Magritte' },
                      { first: 'Chaim', last: 'Soutine' },
                        
                  ];
                  console.table(artists);
                  setTimeout(() => {
                      h1.textContent = 'Hello, Console!';
                      console.log(h1.textContent);
                  }, 3000);
              </script>
          </body>
      </html>
      ```  
   :::column-end:::
   :::column span="":::
      In the following figure, the **Console** displays the results of loading the page and waiting 3 seconds.  
      
      :::image type="complex" source="../media/console-console-demo.msft.png" alt-text="The Console panel" lightbox="../media/console-console-demo.msft.png":::
         The **Console** tool  
      :::image-end:::  
      
      Try to determine which lines of code caused the browser to log the messages.  
   :::column-end:::
:::row-end:::  

Web developers log messages for the following 2 general reasons.  

*   Making sure that code is running in the right order.  
*   Inspecting the values of variables at a certain moment in time.  

To get hands-on experience with logging, navigate to [Get Started With Logging Messages][DevtoolsConsoleLoggingMessages].  To browse the full list of `console` methods, navigate to the [Console API Reference][DevToolsConsoleAPI].  The main difference between the methods is how the data being logged is displayed.  

## Running JavaScript  

The **Console** is also a [REPL][WikiREPLoop].  You may run JavaScript in the **Console** to interact with the page being inspected.   

:::row:::
   :::column span="":::
      In the following figure, the **Console** is shown next to the DevTools homepage.  
      
      :::image type="complex" source="../media/devtools-console-empty.msft.png" alt-text="The Co nlee tool open int eh upper pane with Issues open in the lower one" lightbox="../media/devtools-console-empty.msft.png":::
         The **Console** tool nextz to the DevTools homepage  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      In the following figure, the same page is shown after using the **Console** to change the top heading of the page.
      
      :::image type="complex" source="../media/devtools-console-h1-changed.msft.png" alt-text="Use the Console to change the top heading of the page" lightbox="../media/devtools-console-h1-changed.msft.png":::
         Use the **Console** to change the top heading of the page  
      :::image-end:::  
   :::column-end:::
:::row-end:::

Modifying the page from the **Console** is possible because the **Console** has full access to the [window][MDNWindow] of the page.  DevTools has a few convenience functions that make it easier to inspect a page.  For example, suppose that your JavaScript contains a function called `hideModal`.  Running `debug(hideModal)` pauses your code on the first line of `hideModal` the next time that you run it.  For more information about the full list of utility functions, navigate to [Console Utilities API Reference][DevtoolsConsoleUtilitiesDebug].  

When you run JavaScript you do not have to interact with the page.  You may use the **Console** to try out new code unrelated to the page.  For example, suppose you just learned about the built-in JavaScript Array [map()][MDNMap] method, and you want to experiment with it.  trying my best to un
The **Console** is a good place to try out the function.  

For more hands-on experience with running JavaScript in the **Console**, navigate to [Get Started With Running JavaScript][DevtoolsConsoleRunningJavascript].  