---
title: Share with other apps
description: Learn how to share content from your PWA with other apps and accept shared content from other apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/27/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, share
---
# Share with other apps

Sharing content between apps was made popular by mobile devices where manipulating files or copying content is less intuitive than on desktop operating systems. On mobile, it is common to share an image with a friend using a text message for example.

But sharing content isn't reserved to mobile devices anymore, and it is possible to share between apps on Windows too.

There are two sides to sharing content, and both can be used by PWAs.

*   Sharing content: when a PWA generates content (text, link, or files) and hands it off to the operating system to let the user decide which app they want to use to receive that content.
*   Receiving shared content: when a PWA acts as a content target, registered at the operating system level.

PWAs that register as share targets feel more natively integrated into the OS and more engaging to users.


<!-- ====================================================================== -->
## Sharing content

PWAs can use the [Web Share API](https://developer.mozilla.org/docs/Web/API/Web_Share_API) to trigger the operating system share dialog.

> [!NOTE]
> Web sharing only works on sites served over HTTPS (which is the case for PWAs), and can only be invoked in response to a user action.

To share content such as links, text, or files, use the `navigator.share` function. The function accepts an object that should have at least one of the following properties:

*   `title`: a short title for the shared content.
*   `text`: a longer description for the shared content.
*   `url`: the address of a resource to be shared.
*   `files`: an array of files to be shared.

```javascript
function shareSomeContent(title, text, url) {
  if (!navigator.share) {
    return;
  }

  navigator.share({title, text, url}).then(() => {
    console.log('The content was shared successfully');
  }).catch(error => {
    console.error('Error sharing the content', error);
  });
}
```

In the above code snippet, we first check if the browser supports Web sharing by testing if `navigator.share` is defined. The `navigator.share` function returns a promise that resolves when sharing was successful and rejects when an error occurred.

Because a promise is used here, it is possible to use an `async` function to rewrite this code.

```javascript
async function shareSomeContent(title, text, url) {
  if (!navigator.share) {
    return;
  }

  try {
    await navigator.share({title, text, url});
    console.log('The content was shared successfully');
  } catch (e) {
    console.error('Error sharing the content', e);
  }
}
```

On Windows, the above code will trigger the share dialog, allowing the user to pick an app to receive the shared content.

:::image type="content" source="../media/windows-share-dialog.png" alt-text="The share dialog on Windows." lightbox="../media/windows-share-dialog.png":::

Once the user has chosen an app to receive the shared content, it is up to this app to handle it any way it chooses. An email app might use the `title` as the email subject and the `text` as the body, for example.

### Sharing files

The `navigator.share` function also accepts a `files` array to share files with other apps.

It is important to test whether sharing files is supported by the browser before sharing them. To check that sharing files is supported, use the `navigator.canShare` function.

```javascript
function shareSomeFiles(files) {
  if (navigator.canShare && navigator.canShare({files})) {
    console.log('Sharing files is supported');
  } else {
    console.error('Sharing files is not supported');
  }
}
```

The `files` sharing object member must be an array of `File` objects. Learn more about the [File interface](https://developer.mozilla.org/docs/Web/API/File).

One way to construct `File` objects is by using the `fetch` API to request a resource, and then creating a new `File` using the returned response as shown below.

```javascript
async function getImageFileFromURL(imageURL, title) {
  const response = await fetch(imageURL);
  const blob = await response.blob();
  return new File([blob], title, {type: blob.type});
}
```

In the above code snippet, the `getImageFileFromURL` function fetches an image using its URL, and then uses the `response.blob()` function to convert it into a Blob object, which can be used to create a `File` object.

### Demo

[DevTools Tips](https://devtoolstips.org/) is a PWA that uses the `navigator.share` function to share text and links.

To test the feature:

*  Go to [DevTools Tips](https://devtoolstips.org/).
*  Choose any of the tips displayed on the home page.
*  Select **Share tip**.

:::image type="content" source="../media/devtools-tips-share.png" alt-text="The Windows share dialog allows users to pick an app to share the content with." lightbox="../media/devtools-tips-share.png":::

You can find the [source code on GitHub](https://github.com/captainbrosset/devtools-tips/). In particular, the app uses the Web Share API in the [share.js](https://github.com/captainbrosset/devtools-tips/blob/main/src/assets/share.js#L38) source file.


<!-- ====================================================================== -->
## Receiving shared content

Using the Web Share Target API, PWAs can also register to be displayed as apps in the system share dialog, and handle shared content coming from other apps. You can learn more about the Web Share Target API at the [Web Share Target API W3C specification draft](https://w3c.github.io/web-share-target/level-2/).

> [!NOTE]
> Only installed PWAs can register as share targets.

### Register as a target

The first thing to do is register your PWA as a share target. To register, use the `share_target` manifest member. Upon installation of your app, the operating system will use the `share_target` member to include your app in the system share dialog and will know what to do when your app is picked by the user.

The `share_target` member must contain the necessary information for the system to pass the shared content to your app. Consider the following manifest code.

```json
{
    "share_target": {
        "action": "/handle-shared-content/",
        "method": "GET",
        "params": {
            "title": "title",
            "text": "text",
            "url": "url",
        }
    }
}
```

When your app is picked by the user as the target for shared content, the PWA is launched and a `GET` HTTP request is made to the URL specified by the `action` property, with the shared data passed as `title`, `text`, and `url` query parameters. In practice, the following request is made: `/handle-shared-content/?title=shared title&text=shared text&url=shared url`.

You can map the default `title`, `text`, and `url` query parameters to other names if you already have existing code that uses these other names.

```json
{
    "share_target": {
        "action": "/handle-shared-content/",
        "method": "GET",
        "params": {
            "title": "subject",
            "text": "body",
            "url": "address",
        }
    }
}
```

### Handle GET shared data

To handle the data shared over the GET request in your PWA code, use the `URL` constructor to extract the query parameters.

```javascript
window.addEventListener('DOMContentLoaded', () => {
    console url = new URL(window.location);

    const sharedTitle = url.searchParams.get('title');
    const sharedText = url.searchParams.get('text');
    const sharedUrl = url.searchParams.get('url');
});
```

### Handle POST shared data

If the shared data is meant to change your app in any way, for example by updating some of the content stored in the app, you must use the `POST` method and define an encoding type with `enctype`.

```json
{
    "share_target": {
        "action": "/post-shared-content",
        "method": "POST",
        "enctype": "multipart/form-data",
        "params": {
            "title": "title",
            "text": "text",
            "url": "url",
        }
    }
}
```

The `POST` HTTP request will contain the shared data encoded as `multipart/form-data`. You can access this data on your HTTP server, with server-side code, but this won't work when the user is offline. To provide a better experience, you can access the data in the service worker, using a `fetch` event listener.

```javascript
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (event.request.method === 'POST' && url.pathname === '/post-shared-content') {
        event.respondWith((async () => {
            const data = await event.request.formData();

            const title = data.get('title');
            const text = data.get('text');
            const url = data.get('url');

            // Do something with the shared data here.

            return Response.redirect('/content-shared-success', 303);
        })());
    }
});
```

In the above code snippet, the service worker intercepts the `POST` request, uses the data in some way (like storing the content locally for example), and redirects the user to a success page. This way, the app can work even if the network is down. It can choose to only store the content locally, or send it to the server later when connectivity is back (for example using [Background Sync](./background-syncs.md)).

### Handle files

Apps can also handle shared files. To handle files in your PWA, you must use the `POST` method and the `multipart/form-data` encoding type. Additionally, you must declare the types of files that your app can handle.

```json
{
    "share_target": {
        "action": "/store-code-snippet",
        "method": "POST",
        "enctype": "multipart/form-data",
        "params": {
            "title": "title",
            "files": [
                {
                    "name": "textFile",
                    "accept": ["text/plain", "text/html", "text/css", "text/javascript"]
                }
            ]
        }
    }
}
```

The above manifest code tells the system that your app can accept text files with various mime types. File extensions can also be passed in the `accept` array like `.txt` for example.

To access the shared file, use the request `formData` like before and use a `FileReader` to read the content.

```javascript
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (event.request.method === 'POST' && url.pathname === '/store-code-snippet') {
        event.respondWith((async () => {
            const data = await event.request.formData();

            const filename = data.get('title');
            const file = data.get('textFile');

            const reader = new FileReader();
            reader.onload = function(e) {
                const textContent = e.target.result;

                // Do something with the textContent here.

            };
            reader.readAsText(file);

            return Response.redirect('/snippet-stored-success', 303);
        })());
    }
});
```


<!-- ====================================================================== -->
## See also

*  [Integrate with the OS sharing UI with the Web Share API](https://web.dev/web-share/)
*  [Receiving shared data with the Web Share Target API](https://web.dev/web-share-target/)
