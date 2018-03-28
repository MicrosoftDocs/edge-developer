---
ms.assetid: b57400b2-9e01-4b7c-9d7d-6e0cc52617a7
description: Learn how the HTML5 track element enables you to add timed text tracks, such as closed captioning, translations, or text commentary, to HTML5 video elements.
title: Dev guide - Timed text tracks
author: libbymc
ms.author: libbymc
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Timed Text Tracks

The HTML5 [`track`](https://msdn.microsoft.com/library/hh772556(v=vs.85).aspx) element enables you to add timed text tracks, such as closed captioning, translations, or text commentary, to HTML5 [`video`](https://msdn.microsoft.com/library/ff975073.aspx) elements.

## The track element

The [`track`](https://msdn.microsoft.com/library/hh772556(v=vs.85).aspx) element represents a timed text file to provide users with multiple languages or commentary for videos. You can use multiple tracks, and set one as default to be used when the video starts. The text is displayed in the lower portion of the video player.

The following example shows how to use the `track` element:

``` html 
<video id="mainvideo" controls autoplay loop>
  <track src="en_track.vtt" srclang="en" label="English" kind="caption" default>
</video>

```

## Track file formats 

Text tracks use a simplified version of the Web Video Text Track (WebVTT) or Timed Text Markup Language (TTML) timed text file formats. Microsoft Edge now supports in-band closed captioning based on the [mandate by the FCC](http://go.microsoft.com/fwlink/p/?LinkId=524313). For more information on how to map the in-band 608/708 CC to Text Track cues, see [Conversion of 608/708 captions to WebVTT](http://go.microsoft.com/fwlink/p/?LinkId=524314). 

| Track file to serve  | Extension setting | Mime type setting 
| ------------ | ------------ | ------------ |
TTML | .ttml | application/ttml+xml
WebVTT | .vtt | text/vtt

### TTML 

The Timed Text Markup Language files look like the following:

```
<?xml version='1.0' encoding='UTF-8'?>
<tt xmlns='http://www.w3.org/ns/ttml' xml:lang='en' >
<body>
<div>

<p begin="00:00:01.878" end="00:00:05.334" >Good day everyone, my name is John Smith</p>
<p begin="00:00:08.608" end="00:00:15.296" >This video will teach you how to <br/>
build a sand castle on any beach</p>
</div>

</body>
</tt>
```

The TTML file uses a namespace declaration and the language attribute in the root element (`tt`). This is followed by the `body` and a `div` element. Within the `div` element are the timing cues. The actual times are set as attributes (`begin`, `end`) of the opening paragraph tag (`<p>`) and the text is delineated by the closing `</p>` tag. Blank lines and white space are ignored. If there are multiple lines, they are separated by `<br/>` tags. 

The MIME type for TTML files is "application/ttml+xml", or "text/xml". See the [Timed Text Markup Language 1 (TTML1)](https://www.w3.org/TR/ttml1/) for more information.

### WebVTT
WebVTT files are 8-bit Unicode Transformation Format (UTF-8) format text files that look like the following:

```
WEBVTT
00:00:01.878 --> 00:00:05.334
Good day everyone, my name is John Smith

00:00:08.608 --> 00:00:15.296
This video will teach you how to 
build a sand castle on any beach
```

The file starts with the tag `WEBVTT` on the first line, followed by a line feed. The timing cues are in the format HH:MM:SS.sss. The Start and End cues are separated by a space, two hyphens and a greater-than sign ( --> ), and another space. The timing cues are on a line by themselves with a line feed. Immediately following the cue is the caption text. Text captions can be one or more lines. The only restriction is that there must be no blank lines between lines of text. The MIME type for WebVTT files is "text/vtt". 

The MIME type for WebVTT files is "text/vtt". 

## Using multiple track files 

More than one timed text file can be used — for instance, to provide your users with multiple languages or alternate commentary. If you're using multiple tracks, you set one as default to be used if your page doesn't specify or the user hasn't picked a language. Within the video player, the user can choose alternate tracks through a built-in user interface. 

The following example shows a video element with three track elements. 

``` html
<video id="mainvideo" controls autoplay loop>
  <source src="video.mp4" type="video/mp4">
  <track id="enTrack" src="engtrack.vtt" label="English" kind="subtitles" srclang="en" default>
  <track id="esTrack" src="spntrack.vtt" label="Spanish" kind="subtitles" srclang="es">
  <track id="deTrack" src="grmtrack.vtt" label="German" kind="subtitles" srclang="de">
</video>

```

In this example, the [`source`](https://msdn.microsoft.com/library/ff975070.aspx) element is used to define the video file, and the [`track`](https://msdn.microsoft.com/library/hh772556(v=vs.85).aspx) elements each specify a text translation. The `track` elements are children of the video element. The `track` element accepts the following attributes. 

| Attribute  | Description | 
| ------------ | --------------------- |
[`kind`](https://msdn.microsoft.com/library/hh772542) | Defines the type of text content. Possible values are: `subtitles`, `captions`, `descriptions`, `chapters`, `metadata`.
[`src`](https://msdn.microsoft.com/library/ff974762) | URL of the timed text file.
[`srclang`](https://msdn.microsoft.com/library/hh772550) | The language of the timed text file. For information purposes; not used in the player.
[`label`](https://msdn.microsoft.com/library/hh772546) | Provides a label that can be used to identify the timed text. Each track must have a unique label.
[`default`](https://msdn.microsoft.com/library/hh772539) | Specifies the default `track`. If not specified, no track is displayed. 

## JavaScript and the track element

Like most elements, the [`track`](https://msdn.microsoft.com/library/hh772556(v=vs.85).aspx) element can be manipulated through JavaScript. The following objects, methods, and properties are available to manage track content and cues. A track is a collection of cues that provides times and text content related to a video.

### `textTrack` and `textTrackList` objects

The [`textTrackList`](https://msdn.microsoft.com/library/hh772696(v=vs.85).aspx) is an object associated with the [`video`](https://msdn.microsoft.com/library/ff975073.aspx) element that contains a list of the [`textTrack`](https://msdn.microsoft.com/library/hh772673(v=vs.85).aspx) objects. To get a list of tracks used with a certain video (if any), the `video` object provides the `textTracks` property. 

``` javascript
var myVideo = document.getElementById("videoElement");
// Get the textTrackList 
var ttlist = myVideo.textTracks;  
// Get the first text track on the video object 
var videoTrack = ttlist[0];   	    
var videoTrack.track
```

### `textTrackCueList` and `textTrackCue` objects
The `textTrack.cues` property returns an array of [`textTrackCue`](https://msdn.microsoft.com/library/hh772674(v=vs.85).aspx) objects. A `textTrackCue` object, or *cue*, includes an identifier, a start and end time, and other data.

The [`textTrackCueList`](https://msdn.microsoft.com/library/hh772675(v=vs.85).aspx) and `textTrackCue` objects expose the following properties: 

| Property  | Description | 
| ------------ | --------------------- |
textTrackCueList.[`item`](https://msdn.microsoft.com/library/hh772677) | Returns the text track cue that corresponds to a given index.
textTrackCueList.[`length`](https://msdn.microsoft.com/library/hh772697) | Returns the number of text track cues in the list.
textTrack.[`cues`](https://msdn.microsoft.com/library/hh772699) | Returns a textTrackCueList object.
textTrack.[`activeCues`](https://msdn.microsoft.com/library/hh772698) | Returns the cues from the text track list of cues that are currently active, as a textTrackCueList object.
textTrackCue.[`startTime`](https://msdn.microsoft.com/library/hh772690) | Returns the starting time of a timed text cue.
textTrackCue.[`endTime`](https://msdn.microsoft.com/library/hh772678) | Returns the ending time of a timed text cue.
textTrackCue.[`id`](https://msdn.microsoft.com/library/hh772686) | Returns a unique identifier for an individual cue 
textTrackCue.[`pauseOnExit`](https://msdn.microsoft.com/library/hh772688) | Indicates whether the video should stop when it reaches the endTime specified. 
textTrackCue.[`text`](https://msdn.microsoft.com/library/hh968258) | Returns the text value of a TextTrackCue.
textTrackCue.[`track`](https://msdn.microsoft.com/library/hh781507) | Returns the text track object to which the textTrackCue belongs, or "null" otherwise. 
 
The following methods are also available:

| Method  | Description | 
| ------------ | --------------------- |
textTrackCueList.[`getCueById()`](https://msdn.microsoft.com/library/hh772676) | Gets a cue from the textTrackCueList by the ID.
textTrackCue.[`getCueAsHTML()`](https://msdn.microsoft.com/library/hh772681) | Returns the text tract cue text as a document fragment that consists of HTML elements and other Document Object Model (DOM) nodes.
 
The `textTrackCue` object also has two events: 

| Event  | Description | 
| ------------ | --------------------- |
Exit | Fires when a cue is done.
Enter | Fires when a cue is active.
 
## Working with cues

Using the [`cues`](https://msdn.microsoft.com/library/hh772699(v=vs.85).aspx) property on the [`track`](https://msdn.microsoft.com/library/hh772556(v=vs.85).aspx) element, you can get an array or list of all the cues on that track. The `textTrack.cues` property returns an array of [`textTrackCue`](https://msdn.microsoft.com/library/hh772674(v=vs.85).aspx) objects. The `textTrackCue` object, or `cue`, includes an ID, the start and end time, and text.


In contrast to the `cues` property, which gets all cues associated with a track, the [`activeCues`](https://msdn.microsoft.com/library/hh772698(v=vs.85).aspx) property gets you just the ones that are currently being displayed. The following example displays the [`startTime`](https://msdn.microsoft.com/library/hh772690(v=vs.85).aspx) and [`endTime`](https://msdn.microsoft.com/library/hh772678(v=vs.85).aspx) of the subtitle being displayed. 

``` javascript 
  // after elements are loaded, hook the cuechange event on the track element
      window.addEventListener("load", function () {
          eID("track").addEventListener("cuechange", function (e) {
              var myTrack = e.target.track;  // the target property is the track element
              var myCues = myTrack.activeCues;   // activeCues is an array of current cues.
              //  display the start and end times
              eID("display").innerHTML = myCues[0].startTime + " --> " + myCues[0].endTime;
          }, false);

      }, false);
     

```



## API Reference
[HTML5 Audio and Video](https://msdn.microsoft.com/library/hh772500(v=vs.85).aspx)

## Specification
[HTML5](http://go.microsoft.com/fwlink/p/?LinkId=279050)

 
 
