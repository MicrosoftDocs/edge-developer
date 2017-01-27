---
description: See how the blob constructor allows you to easily create and manipulate a blob (typically equivalent to a file) directly on the client.
title: Dev guide: Blob - Microsoft Edge Development
author: abbycar
---

# Blob

The [`Blob`](https://msdn.microsoft.com/library/hh772298) constructor allows you to easily create and manipulate a blob (typically equivalent to a file) directly on the client.
You can construct a blob directly as seen in the code snippet below:
```
var blob = new Blob(["1234"], {type: 'text/plain'})
```
The **Blob** constructor can also take an `ArrayBufferView` directly rather than constructing a blob with `ArrayBuffer`

## Examples

The following examples show blobs in action.

### Saving a file 

You can locally save files (of arbitrary size) using the [`Blob`](https://msdn.microsoft.com/library/hh772298) constructor along with the ` window.navigator.msSaveBlob` and ` window.navigator.msSaveOrOpenBlob` methods.
Microsoft Edge's [`msSaveBlob`](https://msdn.microsoft.com/library/hh441122) and [`msSaveOrOpenBlob`](https://msdn.microsoft.com/library/hh772332) methods allow a user to save the file on the client as if the file had been downloaded from the Internet (which is why such files are saved to the Downloads folder).

In Microsoft Edge, both methods have the same behavior, starting the download automatically with options upon completion to either open the file, open the folder, or view the downloads folder.

To help understand how the `Blob` constructor and `msSaveBlob`/`msSaveOrOpenBlob` can be used to save an altered file on the client, consider the following example:

```javascript
<!DOCTYPE html>
<html>

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>

<body>
  <h1>Download a blob</h1>
  <script>
    var blobObject = new Blob(["I scream. You scream. We all scream for ice cream."]); 
    
    window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.txt');
    alert('The file was saved using msSaveBlob() - note "Open" "Open folder" and "View downloads" options');
  </script>
</body>

</html>
```

Using the `Blob` constructor, we first create a blob object whose parameter is an array containing the desired file content:

```javascript
var blobObject = new Blob(["I scream. You scream. We all scream for ice cream."]);
```

We next copy the content from `blobObject` and save it to a text file (which is saved within the Downloads folder):

```javascript
window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.txt');`
```

> [!NOTE]
> In Microsoft Edge, the download is started automatically.


### `Blob` feature detection

Here's how to test for [`Blob`](https://msdn.microsoft.com/library/hh772298) support in the browser:

```javascript
<!DOCTYPE html>
<html>

<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>

<body>
  <h1>Blob feature detection</h1>
  <script>
    function requiredFeaturesSupported() {
      return ( BlobConstructor() && msSaveOrOpenBlobSupported() );
    }
    
    function BlobConstructor() {
      if (!window.Blob) {
        document.getElementsByTagName('body')[0].innerHTML = "<h1>The Blob constructor is not supported - upgrade your browser and try again.</h1>";
        return false;
      } // if
      
      return true;
    } // BlobConstructor
    
    function msSaveOrOpenBlobSupported() {
      if (!window.navigator.msSaveOrOpenBlob) { // If msSaveOrOpenBlob() is supported, then so is msSaveBlob().
        document.getElementsByTagName('body')[0].innerHTML = "<h1>The msSaveOrOpenBlob API is not supported - try upgrading your browser to the latest version.</h1>";            
        return false;
      } // if
      
      return true;
    } // msSaveOrOpenBlobSupported
        
    if (requiredFeaturesSupported()) {
      var blobObject = new Blob(["I scream. You scream. We all scream for ice cream."]);
      
      window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.txt');
      alert('The file was saved using msSaveBlob() - note "Open" "Open folder" and "View downloads" options');
    }
  </script>
</body>

</html>
```

### Loading saved files

After a file has been saved to the client, the next step is to retrieve data from the saved file. The following example allows you to create a simple [`canvas`](https://msdn.microsoft.com/library/ff975062)-based drawing, save it to a local file, and load such a saved drawing.


<div class="codepen-wrap"><p data-height="475" data-theme-id="23761" data-slug-hash="NNNLoN" data-default-tab="result" data-user="MicrosoftEdgeDocumentation" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MicrosoftEdgeDocumentation">Microsoft Edge Docs</a> on <a href="https://codepen.io/MicrosoftEdgeDocumentation/pen/NNNLoN">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Here we use `canvas.msToBlob()` instead of `canvas.toDataURL()`. If we were to use `canvas.toDataURL()`, we'd preclude the possibility of easily using another application to view a saved drawing. Saving the drawing as a [PNG file](http://go.microsoft.com/fwlink/p/?LinkId=248923) has the benefit of allowing a number of standard applications, including the browser, to display the drawing. By using `canvas.msToBlob()`, we can save the file directly to PNG format as highlighted in this excerpt:

```javascript
function saveCanvas() {
  var drawingFileName = "canvas" + Math.round( (new Date()).getTime() / 1000 ) + ".png"; // Produces a unique file name every second.
  
  window.navigator.msSaveBlob(globals.canvas.msToBlob(), drawingFileName); // Save the user's drawing to a file.
  document.getElementById('filePickerWrapper').style.display = 'none'; // Remove the file picker dialog from the screen since we just saved the user's file.
} // saveCanvas
```



## Specification
[File API](https://w3c.github.io/FileAPI/#dfn-Blob)



