---
description: Host a site on a development machine web server, and then access the content from an Android device.
title: Access local servers
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2021
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
# Access local servers

Host a site on a development machine web server, then access the content from an Android device.

With a USB cable and Microsoft Edge DevTools, run a site from a development machine and then view the site on an Android device.

### Summary

*   Port forwarding enables you to view content hosted by the web server running in your development machine on your Android device.
*   If your web server is using a custom domain, set up your Android device to access the content at that domain with custom domain mapping.


<!-- ====================================================================== -->
## Set up port forwarding

Port forwarding enables your Android device to access content that is being hosted on the web server running in your development machine.  Port forwarding works by creating a listening TCP port on your Android device that maps to a TCP port on your development machine.  Traffic between the ports travel through the USB connection between your Android device and development machine, so the connection does not depend on your network configuration.

To enable port forwarding:

1.  Set up [remote debugging](./index.md) between your development machine and your Android device.  When you are finished, your Android device should be displayed in the left-hand menu of the **Inspect Devices** dialog and a **Connected** status indicator.
1.  In the **Inspect Devices** dialog in DevTools, enable **Port forwarding**.
1.  Choose **Add rule**.

    :::image type="complex" source="../media/remote-debugging-remote-devices-devices-port-forwarding-add-rule.msft.png" alt-text="Adding a port forwarding rule" lightbox="../media/remote-debugging-remote-devices-devices-port-forwarding-add-rule.msft.png":::
       Adding a port forwarding rule
    :::image-end:::

1.  In the **Device port** textbox on the left, enter the `localhost` port number from which you want to be able to access the site on your Android device.  For example, if you wanted to access the site from `localhost:5000` enter `5000`.
1.  In the **Local address** textbox on the right, enter the IP address or hostname on which your site is hosted on the web server running in your development machine, followed by the port number.  For example, if your site is running on `localhost:7331` enter `localhost:7331`.
1.  Choose **Add**.

Port forwarding is now set up.  Review the status indicator for the port forward on the tab on your device within the **Inspect Devices** dialog.

:::image type="complex" source="../media/remote-debugging-remote-devices-devices-port-forwarding-5000-edge-user-agent.msft.png" alt-text="Port forwarding status" lightbox="../media/remote-debugging-remote-devices-devices-port-forwarding-5000-edge-user-agent.msft.png":::
   Port forwarding status
:::image-end:::

To view the content, open up Microsoft Edge on your Android device and go to the `localhost` port that you specified in the **Device port** field.  For example, if you entered `5000` in the field, visit `localhost:5000`.


<!-- ====================================================================== -->
## Map to custom local domains

Custom domain mapping enables you to view content on an Android device from a web server on your development machine that is using a custom domain.

For example, suppose that your site uses a third-party JavaScript library that only works on the domain `microsoft-edge.devtools`.  So, you create an entry in your `hosts` file on your development machine to map this domain to `localhost` (for example, `127.0.0.1 microsoft-edge.devtools`).  After setting up custom domain mapping and port forwarding, view the site on your Android device at the URL `microsoft-edge.devtools`.

### Set up port forwarding to proxy server

To map a custom domain you must run a proxy server on your development machine.  Examples of proxy servers are [Charles](https://www.charlesproxy.com), [Squid](https://wiki.squid-cache.org), and [Fiddler](https://www.telerik.com/fiddler).

To set up port forwarding to a proxy:

1.  Run the proxy server and record the port that it is using.

    > [!NOTE]
    > The proxy server and your web server must run on different ports.

1.  Set up [port forwarding](#set-up-port-forwarding) to your Android device.  For the **local address** field, enter `localhost:` followed by the port that your proxy server is running on.  For example, if it is running on port `8000`, navigate to `localhost:8000`.  In the **device port** field enter the number that you want your Android device to listen on, such as `3333`.

### Configure proxy settings on your device

Next, you need to configure your Android device to communicate with the proxy server.

1.  On your Android device, navigate to **Settings** > **Wi-Fi**.
1.  Long-press the name of the network to which you are currently connected.

    > [!NOTE]
    > Proxy settings apply per network.

1.  Choose **Modify network**.
1.  Choose **Advanced options**.  The proxy settings display.
1.  Choose the **Proxy** menu and choose **Manual**.
1.  For the **Proxy hostname** field, enter `localhost`.
1.  For the **Proxy port** field, enter the port number that you entered for **device port** in the previous section.
1.  Choose **Save**.

With these settings, your device forwards all of its requests to the proxy on your development machine.  The proxy makes requests on behalf of your device, so requests to your customized local domain are properly resolved.

Now access custom domains on your Android device just like on the development machine.

If your web server is running off of a non-standard port, remember to specify the port when requesting the content from your Android device.  For example, if your web server is using the custom domain `microsoft-edge.devtools` on port `7331`, when you view the site from your Android device you should be using the URL `microsoft-edge.devtools:7331`.

> [!TIP]
> To resume normal browsing, remember to revert the proxy settings on your Android device after you disconnect from the development machine.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse) and [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
