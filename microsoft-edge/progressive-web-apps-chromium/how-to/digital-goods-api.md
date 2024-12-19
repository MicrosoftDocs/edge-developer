---
title: Provide in-app purchases with the Digital Goods API
description: How to provide in-app purchases in a Progressive Web App by using the Digital Goods API and the Payment Request API.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 12/19/2024
---
# Provide in-app purchases with the Digital Goods API

If your Progressive Web App (PWA) is listed in the Microsoft Store, you can provide in-app products and subscriptions by using the Digital Goods API and the Payment Request API.


<!-- ====================================================================== -->
## Digital Goods API

The Digital Goods API is an interface between your PWA app and the Microsoft Store.  The Digital Goods API supports:
* Querying the details of a digital item from the Microsoft Store backend, such as the item's name, description, and regional price.
* Consuming or acknowledging purchases.
* Checking the digital items that are currently owned by the user.
* Checking the purchase history of the user.

See:
* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)
* [Digital Goods API specification](https://wicg.github.io/digital-goods/)


<!-- ====================================================================== -->
## Payment Request API

The Payment Request API⁠⁠ handles the actual payment transaction when a purchase is made by a user.  The Payment Request API uses the item details that the Digital Goods API provides, to make the in-app purchase by using whichever billing payment method the user has set up at the Microsoft Store.

See:
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API) at MDN.


<!-- ====================================================================== -->
## Enable the Digital Goods API

The Digital Goods API is currently available for testing in Microsoft Edge.  To test the API, use either of the following ways:
* To test your code locally: [Use a supported preview channel of Microsoft Edge on your dev machine](#use-a-supported-preview-channel-of-microsoft-edge-on-your-dev-machine).
* To test your code in your Microsoft Store PWA: [Register for the origin trial, then use your token at your website](#register-for-the-origin-trial-then-use-your-token-at-your-website).

Details are below.


<!-- ------------------------------ -->
#### Use a supported preview channel of Microsoft Edge on your dev machine

To test the Digital Goods API locally, before deploying your app to production, run Edge Dev or Edge Canary.  These preview versions of Edge have the API enabled, as part of a running experiment.

To download a preview (insider) channel of Microsoft Edge, see [Become a Microsoft Edge Insider](https://aka.ms/microsoftedge).


<!-- ------------------------------ -->
#### Register for the origin trial, then use your token at your website

To test the Digital Goods API in production, with your users, use an origin trial token.  With this approach, when your users download your PWA from the Microsoft Store, they will have the API enabled.

See: 
* [Use origin trials in Microsoft Edge](../../origin-trials/index.md)
* [Digital Goods API](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4b4a9ead-d912-4349-87b3-25e5e50b4f13) at _Origin Trials_.


<!-- ====================================================================== -->
## Checking whether the Digital Goods API is available

To detect whether you've correctly enabled the API on your website by using your origin trial token, check whether the `getDigitalGoodsService` method exists on the `window` object:

```javascript
if ('getDigitalGoodsService' in window) {
  // The Digital Goods API is supported.
} else {
  console.log('DigitalGoodsService is not available.');
  // Use another payment method.
}
```

See also:
* [getDigitalGoodsService() method](https://wicg.github.io/digital-goods/#getdigitalgoodsservice-method) on the `Window` interface.


<!-- ====================================================================== -->
## Connecting to the Microsoft Store Billing service (`window.getDigitalGoodsService` method)

Use the `getDigitalGoodsService` method of the `window` object to connect to the Microsoft Store Billing service.  A [DigitalGoodsService interface](https://wicg.github.io/digital-goods/#digitalgoodsservice) is returned.

The Digital Goods API was designed to be compatible with various browsers and digital stores, similar to how the Payment Request API is browser-agnostic and can be used with different payment providers.  To retrieve an instance of the service for Microsoft Store Billing, pass the string `"https://store.microsoft.com/billing"` as the payment method to the `getDigitalGoodsService` method.

If the method throws an error, the Microsoft Store Billing payment method is not available (such as when the user is accessing your PWA through the browser).  Alternatively, consider providing a different payment method for transactions.

```javascript
if (window.getDigitalGoodsService === undefined) {
  // The Digital Goods API isn't supported in this context.
  return;
}
try {
  const digitalGoodsService = await window.getDigitalGoodsService("https://store.microsoft.com/billing");
  // Use the service here.
  ...
} catch (error) {
  // The preferred service provider is not available.
  // Use a web-based payment flow instead.
  return;
}
```

This payment method `getDigitalGoodsService("https://store.microsoft.com/billing")` is available only for a PWA that's installed from the Microsoft Store, on Windows.  No other settings are needed.

See also:
* [getDigitalGoodsService() method](https://wicg.github.io/digital-goods/#getdigitalgoodsservice-method) on the `Window` interface.
* [DigitalGoodsService interface](https://wicg.github.io/digital-goods/#digitalgoodsservice)


<!-- ====================================================================== -->
## Querying item details (`getDetails` method)

Use the `getDetails` method of the `DigitalGoodsService` interface to query item details.

After connecting the Digital Goods service to Microsoft Store, you can use the API to access product and purchase information.  The `getDetails` method lets you get information about the items you’ve set up in the Partner Center.  Display information such as the product title, description, and price in your app UI, so the user knows what's available for purchase.

The `getDetails` method takes a list of item IDs, which correspond to the product IDs of the in-app products and subscriptions you created in the Partner Center.

```javascript
const itemDetails = await digitalGoodsService.getDetails(['shiny_sword', 'gem', 'monthly_subscription']);

for (item of itemDetails) {
  const priceStr = new Intl.NumberFormat(
      locale,
      {style: 'currency', currency: item.price.currency}
    ).format(item.price.value);

  // Do something with the item's data, such as displaying it in the PWA's UI.
  displayProductItem(item.itemId, item.title, priceStr, item.description);
}
```

The returned `itemDetails` sequence may be in any order, and might not include an item if the item doesn't exist on the server (that is, if there's not a 1:1 correspondence between the input list and output list).

The item ID is a string that represents the primary key of the items.  In the Microsoft Store, the item ID is `InAppOfferToken`.  There is no function to get a list of item IDs; item IDs should be hardcoded in the client code or fetched from your own server (the developer's server).

The item's `price` is a `PaymentCurrencyAmount` that contains the current price of the item in the user's current region and currency.  The `price` is designed to be formatted for the user's current locale by using `Intl.NumberFormat`, as shown above.


<!-- ------------------------------ -->
#### See also

Digital Goods API specification
* [getDetails() method](https://wicg.github.io/digital-goods/#getDetails-method)

Windows App Development:
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)

W3C:
* [PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount)

MDN:
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)


<!-- ====================================================================== -->
## Purchasing an item (`PaymentRequest.show` method)

Use the `show` method of the `PaymentRequest` interface to purchase an item, after you construct a request that contains the item details.

Once your products and details are displayed to the user, you can implement the purchase flow by using the Payment Request API.  When combined with the Digital Goods API, the only required input parameter is `methodData`.

In the `PaymentRequest` constructor's `methodData`⁠⁠ parameter:
* Use the `supportedMethods` member to identify Microsoft Store Billing as the payment method with the string `"https://store.microsoft.com/billing"`.
* In the `data` member, pass along the item ID as the `sku`:

<!-- todo: in PaymentRequest ctor, the 2nd param (details) is missing, per ctor docs: https://developer.mozilla.org/docs/Web/API/PaymentRequest/PaymentRequest - the 3rd param, "options", says "optional" next to it, unlike "details" param - is that page missing a 1-param overload?  new PaymentRequest(methodData)
-->

```javascript
const details = await digitalGoodsService.getDetails(['monthly_subscription']);
const item = details[0];

const request = new PaymentRequest([
  {
    supportedMethods: 'https://store.microsoft.com/billing',
    data: { sku: item.itemId }
  }
]);
```

Then call the `show` method to start the payment flow:

```javascript
const response = await request.show();
```

This will display the Store purchase UI to the user, where the user can view details about the product that they're trying to purchase.  During this process, the current browser session is temporarily disabled until the purchase flow is complete.  The user can either cancel the transaction, or proceed with the payment:

* If the user cancels the payment, the Promise that's returned by the `show` method will be rejected with an error.

* If the user successfully pays and completes the purchase, the Promise will resolve with a `PaymentResponse`.

In the `details` property of the payment response, a purchase token is returned.

See also:
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API)
   * [PaymentRequest: PaymentRequest() constructor](https://developer.mozilla.org/docs/Web/API/PaymentRequest/PaymentRequest)
   * [PaymentRequest: show() method](https://developer.mozilla.org/docs/Web/API/PaymentRequest/show)


<!-- ====================================================================== -->
## Consuming a purchase (`consume` method)

Use the `consume` method of the `DigitalGoodsService` interface to consume a purchase.

A _consumable purchase_ is a purchase that's designed to be purchased multiple times.  A consumable purchase usually needs to be marked as "consumed" before the purchase can be purchased again by the user.  An example of a consumable purchase is an in-game powerup that makes the player stronger for a short period of time.

To mark a purchase as "consumed", use the `consume` method:

```javascript
digitalGoodsService.consume(purchaseToken);
```

See also:
* [consume() method](https://wicg.github.io/digital-goods/#consume-method) of the `DigitalGoodsService` interface.


<!-- ====================================================================== -->
## Checking existing purchases (`listPurchases` method)

Use the `listPurchases` method of the `DigitalGoodsService` interface to check existing purchases.  This method returns information about the user's existing purchases.  This method allows a client to get a list of items that are currently owned or purchased by the user.  This may be necessary, to do either of the following:

* Check for entitlements, such as whether a subscription, promotional code, or permanent upgrade is active.

* Recover from network interruptions during a purchase, such as when the item is purchased but not yet acknowledged.

The `listPurchases` method returns item IDs and purchase tokens.  Before you grant an entitlement, you should verify the returned item ID or the returned purchase token, by using a direct developer-to-provider API, as shown below:

```javascript
const purchaseList = await digitalGoodsService.listPurchases();

for (const purchase of purchaseList) {
  // Handle the purchase data in your PWA.
  verifyAndGrantEntitlement(purchase.itemId, purchase.purchaseToken);
}
```

The `listPurchases` method doesn't return consumed products or expired subscriptions.

See also:
* [listPurchases() method](https://wicg.github.io/digital-goods/#listPurchases-method) of the `DigitalGoodsService` interface.


<!-- ====================================================================== -->
## Getting the purchase history (`listPurchaseHistory` method)

Use the `listPurchaseHistory` method of the `DigitalGoodsService` interface to get the purchase history.  This method returns a list that shows the most recent purchase made by the user for each item, regardless of whether the purchase is expired, canceled, or consumed.  This method returns a list of `PurchaseDetails` containing the `itemId` and `purchaseToken` for each purchase.

```javascript
const purchaseList = await digitalGoodsService.listPurchaseHistory();

for (const purchase of purchaseList) {
  // Handle the expired purchase data in your PWA.
  verifyAndCheckExpiredEntitlement(purchase.itemId, purchase.purchaseToken);
}
```

See also:
* [listPurchaseHistory() method](https://wicg.github.io/digital-goods/#listPurchaseHistory-method) of the `DigitalGoodsService` interface.
* [PurchaseDetails dictionary](https://wicg.github.io/digital-goods/#purchaseDetails-dictionary)


<!-- ====================================================================== -->
## See also
<!-- all links in article: -->

Origin trials:
* [Use origin trials in Microsoft Edge](../../origin-trials/index.md)
* [Digital Goods API](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4b4a9ead-d912-4349-87b3-25e5e50b4f13) at _Origin Trials_.

Windows App Development:
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)

GitHub:
* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)
* [Digital Goods API specification](https://wicg.github.io/digital-goods/)
   * [getDigitalGoodsService() method](https://wicg.github.io/digital-goods/#getdigitalgoodsservice-method) on the `Window` interface.
   * [DigitalGoodsService interface](https://wicg.github.io/digital-goods/#digitalgoodsservice)
      * [getDetails() method](https://wicg.github.io/digital-goods/#getDetails-method)
      * [listPurchases() method](https://wicg.github.io/digital-goods/#listPurchases-method)
      * [listPurchaseHistory() method](https://wicg.github.io/digital-goods/#listPurchaseHistory-method)
      * [consume() method](https://wicg.github.io/digital-goods/#consume-method)
   * [PurchaseDetails dictionary](https://wicg.github.io/digital-goods/#purchaseDetails-dictionary)

MDN:
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API)
   * [PaymentRequest: PaymentRequest() constructor](https://developer.mozilla.org/docs/Web/API/PaymentRequest/PaymentRequest)
   * [PaymentRequest: show() method](https://developer.mozilla.org/docs/Web/API/PaymentRequest/show)
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

W3C:
* [PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount)
