---
title: Get Microsoft Store billing service using Digital Goods API
description: Use the Digital Goods API to
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
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

## Purchase an item
Once your products and details are displayed to the user, you can implement the purchase flow using the Payment Request API. When combined with the Digital Goods API, the only required input parameter is `methodData`.

Use the supportedMethods member of the `methodData`⁠⁠ parameter in the `PaymentRequest` to identify Microsoft Store Billing as the payment method with the string `"https://store.microsoft.com/billing"`. Then in the `data` member, pass along the item ID as the `sku`.

```javascript
const details = await digitalGoodsService.getDetails(['monthly_subscription']);
const item = details[0];
const request = new PaymentRequest(
  [{supportedMethods: 'https://store.microsoft.com/billing',
    data: {sku: item.itemId}}
  ]
);

```


Then call the `show()` method to start the payment flow.

```javascript
const response = await request.show();
```
This will display the Store purchase UI to the user, where they’ll see the details about the product they’re trying to purchase. During this process, the current browser session will be temporarily disabled until the purchase flow is complete. They can either abandon the transaction or proceed with the payment. If the user cancels the payment, the promise returned by `show()` will be rejected with an error. If they successfully pay and complete the purchase, the promise will resolve with a `PaymentResponse`. In the details property of the payment response, a purchase token is returned.

## Acknowledging a purchase

The payment response will return a "purchase token" string, which can be used for direct communication between the developer's server and the service provider beyond the Digital Goods API. Such communication can allow the developer to independently verify information about the purchase before granting entitlements. Some stores might require that the developer acknowledges a purchase once it has succeeded, to confirm that it has been recorded.


## Consuming a purchase
Purchases that are designed to be purchased multiple times usually need to be marked as "consumed" before they can be purchased again by the user. An example of a consumable purchase is an in-game powerup that makes the player stronger for a short period of time. This can be done with the `consume` method:

```javascript
digitalGoodsService.consume(purchaseToken);
```

## Checking existing purchases

The `listPurchases` method allows a client to get a list of items that are currently owned or purchased by the user. This may be necessary to check for entitlements (e.g. whether a subscription, promotional code, or permanent upgrade is active) or to recover from network interruptions during a purchase (e.g. item is purchased but not yet acknowledged). The method returns item IDs and purchase tokens, which should be verified using a direct developer-to-provider API before granting entitlements.

```javascript
purchases = await digitalGoodsService.listPurchases();
for (p of purchases) {
  VerifyAndGrantEntitlement(p.itemId, p.purchaseToken);
}
```
>Note: `listPurchases` method will not return any consumed product or expired subscription.

## Purchase history
While `listPurchases` will return information about the user’s existing purchases, the `listPurchaseHistory()` method will return the most recent purchase made by the user for each item, regardless of whether the purchase is expired, canceled, or consumed. The `listPurchaseHistory()` method returns a list of `PurchaseDetails` containing the `itemId` and `purchaseToken` for each purchase.

```javascript
purchases = await digitalGoodsService.listPurchaseHistory();
for (p of purchases) {
  VerifyAndCheckExpiredEntitlement(p.itemId, p.purchaseToken);
}
```

<!-- ====================================================================== -->
## See also

* [Digital Goods API]([https://developer.mozilla.org/docs/Web/Manifest/display_override](https://wicg.github.io/digital-goods/)) at WICG.
