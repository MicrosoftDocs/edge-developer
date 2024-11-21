---
title: Get Microsoft Store billing service using Digital Goods API
description: Use the Digital Goods API to
author: MSEdgeTeam
ms.author: 
ms.topic: 
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/21/2024
---
# Get Microsoft Store billing service using Digital Goods API

If your Progressive Web App (PWA) is listed in the Microsoft Store, you can provide in-app products and subscriptions through the [Digital Goods API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md) and the [Payment Request API](https://www.w3.org/TR/payment-request/).

## Digital Goods API
The [Digital Goods API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md) is an interface between your PWA app and Microsoft Store. It supports:
* Querying the details (e.g., name, description, regional price) of digital items from the Microsoft Store backend.
* Consuming or acknowledging purchases.
* Checking the digital items currently owned by the user.
* Checking the purchase history of the user.
Before making the Digital Goods API available in your app, please make sure that 


## Payment Request API
The [Payment Request API](https://www.w3.org/TR/payment-request/)⁠⁠ handles the actual payment transaction when a purchase is made by user. It uses the item details that the Digital Goods API provides to make the in-app purchase using the Microsoft Store Billing payment method.

## Check if the Digital Goods API is available
You can detect if you’ve correctly enabled the API on your website by checking for the getDigitalGoodsService method in the window object. 
```javascript
if ('getDigitalGoodsService' in window) {
  // Digital Goods API is supported!
} else {
  console.log('DigitalGoodsService is not available.');
  // Use other payment method
}
```

## Connect to the Microsoft Store Billing service
The Digital Goods API was designed to be compatible with various browsers and digital stores, similar to how the Payment Request API is browser-agnostic and can be used with different payment providers. To retrieve an instance of the service for Microsoft Store Billing, pass the string `"https://store.microsoft.com/billing"` as the payment method to `getDigitalGoodsService()`.

If the method throws an error, the Microsoft Store Billing payment method is not available (e.g. the user is accessing your PWA through the browser). Alternatively, consider providing a different payment method for transactions.
```javascript
if (window.getDigitalGoodsService === undefined) {
  // Digital Goods API is not supported in this context.
  return;
}
try {
  const digitalGoodsService = await window.getDigitalGoodsService("https://store.microsoft.com/billing");
  // Use the service here.
  ...
} catch (error) {
  // Our preferred service provider is not available.
  // Use a normal web-based payment flow.
  return;
}
```

## Querying item details

After connecting the Digital Goods service to Microsoft Store, you can use the API to access product and purchase information.

The `getDetails()` method lets you get information about the items you’ve set up in the Partner Center. Information like the product title, description, and price should be displayed to the user in your app UI so they know what is available for purchase.

The `getDetails()` method will need a list of item IDs which correspond to the product IDs of the in-app products and subscriptions you created in the Partner Center.

```javascript
details = await digitalGoodsService.getDetails(['shiny_sword', 'gem', 'monthly_subscription']);
for (item of details) {
  const priceStr = new Intl.NumberFormat(
      locale,
      {style: 'currency', currency: item.price.currency}
    ).format(item.price.value);
  AddShopMenuItem(item.itemId, item.title, priceStr, item.description);
}
```

The returned `itemDetails` sequence may be in any order and may not include an item if it doesn't exist on the server (i.e. there is not a 1:1 correspondence between the input list and output).

The item ID is a string representing the primary key of the items, as in Microsoft Store it is [InAppOfferToken](https://learn.microsoft.com/en-us/uwp/api/windows.services.store.storeproduct.inappoffertoken?view=winrt-22621#windows-services-store-storeproduct-inappoffertoken). There is no function to get a list of item IDs; those should be hard-coded in the client code or fetched from the developer’s own server.

The item’s `price` is a <code>[PaymentCurrencyAmount](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount)</code> containing the current price of the item in the user’s current region and currency. It is designed to be formatted for the user’s current locale using <code>[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)</code>, as shown above.








<!-- ====================================================================== -->
## See also

* [Simulate the Window Controls Overlay API without installing your PWA](../../devtools-guide-chromium/progressive-web-apps/simulate-window-controls-overlay.md) - DevTools feature.
* [Window Controls Overlay video tutorial](https://www.youtube.com/watch?v=NvClp35dFVI)
* [Customize the window controls overlay of your PWA's title bar](https://web.dev/window-controls-overlay/)
* [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
* [display_override](https://developer.mozilla.org/docs/Web/Manifest/display_override) at MDN.
