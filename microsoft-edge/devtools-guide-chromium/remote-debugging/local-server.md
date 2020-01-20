---
title: Access Local Servers
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2020
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





# Access Local Servers   




Host a site on a development machine web server, then access the content from an Android device.  

With a USB cable and Microsoft Edge DevTools, run a site from a development machine and then view the site on an Android device.  

### Summary  

*   Port forwarding enables you to view content hosted by the web server running in your development machine on your Android device.  
*   If your web server is using a custom domain, set up your Android device to access the content at that domain with custom domain mapping.  

## Set up port forwarding   

Port forwarding enables your Android device to access content that is being hosted on the web server running in your development machine.  Port forwarding works by creating a listening TCP port on your Android device that maps to a TCP port on your development machine.  Traffic between the ports travel through the USB connection between your Android device and development machine, so the connection does not depend on your network configuration.  

To enable port forwarding:  

1.  Set up [remote debugging][RemoteDebuggingGettingStarted] between your development machine and your Android device.  When you are finished, you should see your Android device in the left-hand menu of the **Inspect Devices** dialog and a **Connected** status indicator.  
1.  In the **Inspect Devices** dialog in DevTools, enable **Port forwarding**.  
1.  Click **Add rule**.  
    
    > ##### Figure 1  
    > Adding a port forwarding rule  
    > ![Adding a port forwarding rule][ImageAddRule]  

1.  In the **Device port** textbox on the left, enter the `localhost` port number from which you want to be able to access the site on your Android device.  For example, if you wanted to access the site from `localhost:5000` enter `5000`.  
1.  In the **Local address** textbox on the right, enter the IP address or hostname on which your site is hosted on the web server running in your development machine, followed by the port number.  For example, if your site is running on `localhost:7331` enter `localhost:7331`.  
1.  Click **Add**.  

Port forwarding is now set up.  See the status indicator for the port forward on the tab on your device within the **Inspect Devices** dialog.  

> ##### Figure 2  
> Port forwarding status  
> ![Port forwarding status][ImagePortForwardingStatus]  

To view the content, open up Microsoft Edge on your Android device and go to the `localhost` port that you specified in the **Device port** field.  For example, if you entered `5000` in the field, visit `localhost:5000`.  

## Map to custom local domains   

Custom domain mapping enables you to view content on an Android device from a web server on your development machine that is using a custom domain.  

For example, suppose that your site uses a third-party JavaScript library that only works on the domain `microsoft-edge.devtools`.  So, you create an entry in your `hosts` file on your development machine to map this domain to `localhost` (for example, `127.0.0.1 microsoft-edge.devtools`).  After setting up custom domain mapping and port forwarding, view the site on your Android device at the URL `microsoft-edge.devtools`.  

### Set up port forwarding to proxy server  

To map a custom domain you must run a proxy server on your development machine.  Examples of proxy servers are [Charles][CharlesWebDebuggingProxy], [Squid][SquidOptimisingWebDelivery], and [Fiddler][FiddlerWebDebuggingProxy].  

To set up port forwarding to a proxy:  

1.  Run the proxy server and record the port that it is using.  
    
    > [!NOTE]
    > The proxy server and your web server must run on different ports.  

1.  Set up [port forwarding](#set-up-port-forwarding) to your Android device.  For the **local address** field, enter `localhost:` followed by the port that your proxy server is running on.  For example, if it is running on port `8000`, visit `localhost:8000`.  In the **device port** field enter the number that you want your Android device to listen on, such as `3333`.  

### Configure proxy settings on your device  

Next, you need to configure your Android device to communicate with the proxy server.  

1.  On your Android device go to **Settings** > **Wi-Fi**.  
1.  Long-press the name of the network that you are currently connected to.  
    
    > [!NOTE]
    > Proxy settings apply per network.  
    
3.  Tap **Modify network**.  
4.  Tap **Advanced options**.  The proxy settings display.  
5.  Tap the **Proxy** menu and select **Manual**.  
6.  For the **Proxy hostname** field, enter `localhost`.  
7.  For the **Proxy port** field, enter the port number that you entered for **device port** in the previous section.  
8.  Tap **Save**.  

With these settings, your device forwards all of its requests to the proxy on your development machine.  The proxy makes requests on behalf of your device, so requests to your customized local domain are properly resolved.  

Now access custom domains on your Android device just like on the development machine.  

If your web server is running off of a non-standard port, remember to specify the port when requesting the content from your Android device.  For example, if your web server is using the custom domain `microsoft-edge.devtools` on port `7331`, when you view the site from your Android device you should be using the URL `microsoft-edge.devtools:7331`.  

> [!TIP]
> To resume normal browsing, remember to revert the proxy settings on your Android device after you disconnect from the development machine.  

 



<!-- image links -->  
[ImageAddRule]: images/remote-devices-devices-port-forwarding-add-rule.msft.png "Figure 1: Adding a port forwarding rule"  
[ImagePortForwardingStatus]: images/remote-devices-devices-port-forwarding-5000-edge-user-agent.msft.png "Figure 2: Port forwarding status"  

<!-- links -->  

[RemoteDebuggingGettingStarted]: index.md "Get Started with Remote Debugging Android Devices"  

[CharlesWebDebuggingProxy]: https://www.charlesproxy.com "Charles Web Debugging Proxy"  
[SquidOptimisingWebDelivery]: https://www.squid-cache.org "squid : Optimising Web Delivery"  
[FiddlerWebDebuggingProxy]: https://www.telerik.com/fiddler "Fiddler - Free Web Debugging Proxy"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\) and [Meggin Kearney][MegginKearney] \(Tech Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  
