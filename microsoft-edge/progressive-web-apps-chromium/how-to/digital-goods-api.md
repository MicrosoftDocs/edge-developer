---
title: Provide in-app purchases with the Digital Goods API
description: How to provide in-app purchases in a Progressive Web App by using the Digital Goods API and the Payment Request API.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 12/02/2024
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
* [Digital Goods API: Draft Community Group Report](https://wicg.github.io/digital-goods/)


<!-- ====================================================================== -->
## Payment Request API

The Payment Request API⁠⁠ handles the actual payment transaction when a purchase is made by a user.  The Payment Request API uses the item details that the Digital Goods API provides, to make the in-app purchase by using whichever billing payment method the user has set up at the Microsoft Store.

See:
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API) at MDN.


<!-- ====================================================================== -->
## Enable the Digital Goods API

The Digital Goods API is currently available in pre-release versions of Microsoft Edge.  To use the API, do any of the following:
* [Use a supported preview channel of Microsoft Edge on your dev machine](#use-a-supported-preview-channel-of-microsoft-edge-on-your-dev-machine).
* [Start Beta or Stable Edge with command-line arguments on your dev machine](#start-beta-or-stable-edge-with-command-line-arguments-on-your-dev-machine).
* [Register for the origin trial, then use your token at your website](#register-for-the-origin-trial-then-use-your-token-at-your-website).

Details are below.


<!-- ------------------------------ -->
#### Use a supported preview channel of Microsoft Edge on your dev machine

Approach 1: Run Edge Dev or Edge Canary version 115.0.1860.0 or later.  With this approach, you use the Digital Goods API on your developer machine only, for testing.

That version of Edge has the `msWebAppDigitalGoods`, `AppStoreBilling` and `DigitalGoodsApi` flags enabled, as part of a running experiment.  These flags will be enabled by default when the Digital Goods API reaches Edge Stable release.

To download a preview (insider) channel of Microsoft Edge, see [Become a Microsoft Edge Insider](https://aka.ms/microsoftedge).


<!-- ------------------------------ -->
#### Start Beta or Stable Edge with command-line arguments on your dev machine

Approach 2: Start Edge Stable or Edge Beta with command-line arguments.  With this approach, you use the Digital Goods API on your developer machine only, for testing.

Start Edge Stable or Edge Beta (prior to version 115.0.1860.0) at the command line, using the following command-line argument to enable the set of three flags:

`--enable-features=msWebAppDigitalGoods, AppStoreBilling, DigitalGoodsApi`


<!-- ------------------------------ -->
#### Register for the origin trial, then use your token at your website

Approach 3: Use an origin trial token.  With this approach, you and your users can use Edge Stable, to test the Digital Goods API in production.  You register in the origin trial for the Digital Goods API, and then use your origin trial token at your website.

See: 
* [Use origin trials in Microsoft Edge](../../origin-trials/index.md)
* [Digital Goods API](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4b4a9ead-d912-4349-87b3-25e5e50b4f13) at _Microsoft Edge Developer_ > _Origin Trials_.


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

<!-- todo: 
See also:
* [getDigitalGoodsService in window object]()
-->


<!-- ====================================================================== -->
## Connecting to the Microsoft Store Billing service (`window.getDigitalGoodsService` method)

<!-- todo: what type is returned by window.getDigitalGoodsService("https://store.microsoft.com/billing") ? -->

Use the `getDigitalGoodsService` method of the `window` object to connect to the Microsoft Store Billing service.

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

<!-- todo: 
See also:
* [window.getDigitalGoodsService]()
-->


<!-- ====================================================================== -->
## Querying item details (`getDetails` method)

<!-- todo: what type is the getDetails method on? -->

Use the `getDetails` method to query item details.

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

See also:
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)
* [PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount) in _Payment Request API: Candidate Recommendation Draft_ at W3C.
* [Value (about PaymentCurrencyAmount object)](https://developer.mozilla.org/docs/Web/API/PaymentRequestEvent/total#value) in _PaymentRequestEvent: total property_ at MDN > References > Web APIs > PaymentRequestEvent, in Payment Handler API (experimental).<!-- todo: link to PaymentCurrencyAmount page or anchor if/when avail -->
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) at MDN.
<!-- todo:
* [digitalGoodsService.getDetails method]()
-->


<!-- ====================================================================== -->
## Purchasing an item (`PaymentRequest.show` method)

Use the `show` method of `PaymentRequest` to purchase an item, after you construct a request that contains the item details.

Once your products and details are displayed to the user, you can implement the purchase flow by using the Payment Request API.  When combined with the Digital Goods API, the only required input parameter is `methodData`.

Use the `supportedMethods` member of the `methodData`⁠⁠ parameter in the `PaymentRequest` interface to identify Microsoft Store Billing as the payment method with the string `"https://store.microsoft.com/billing"`.  Then in the `data` member, pass along the item ID as the `sku`.

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
* [PaymentRequest](https://developer.mozilla.org/docs/Web/API/PaymentRequest) at MDN > References > Web APIs > PaymentRequest > Payment Request API.
   * [PaymentRequest: show() method](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/show) at MDN > References > Web APIs > PaymentRequest > Payment Request API.
* [PaymentRequest interface](https://www.w3.org/TR/payment-request/#dom-paymentrequest) in _Payment Request API: Candidate Recommendation Draft_ at W3C.
   * [show() method](https://www.w3.org/TR/payment-request/#dom-paymentrequest-show) in _Payment Request API: Candidate Recommendation Draft_ at W3C.


<!-- ====================================================================== -->
## Acknowledging a purchase

The payment response returns a _purchase token_ string, which can be used for direct communication between your server and the service provider beyond the Digital Goods API.  Such communication can allow you to independently verify information about the purchase before granting entitlements.

Some stores might require that you (the developer) acknowledge a purchase after the purchase has succeeded, to confirm that the purchase has been recorded.


<!-- ====================================================================== -->
## Consuming a purchase (`consume` method)

<!-- todo: what type is the consume method on? -->

Use the `consume` method to consume a purchase.

A _consumable purchase_ is a purchase that's designed to be purchased multiple times.  A consumable purchase usually needs to be marked as "consumed" before the purchase can be purchased again by the user.  An example of a consumable purchase is an in-game powerup that makes the player stronger for a short period of time.

To mark a purchase as "consumed", use the `consume` method:

```javascript
digitalGoodsService.consume(purchaseToken);
```
<!-- todo:
* [digitalGoodsService.consume method]()
-->


<!-- ====================================================================== -->
## Checking existing purchases (`listPurchases` method)

<!-- todo: what type is the `listPurchases` method on? -->

Use the `listPurchases` method to check existing purchases.  This method returns information about the user's existing purchases.  This method allows a client to get a list of items that are currently owned or purchased by the user.  This may be necessary, to do either of the following:

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


<!-- ====================================================================== -->
## Getting the purchase history (`listPurchaseHistory` method)

Use the `listPurchaseHistory` method to get the purchase history.  This method returns a list that shows the most recent purchase made by the user for each item, regardless of whether the purchase is expired, canceled, or consumed.  This method returns a list of `PurchaseDetails` containing the `itemId` and `purchaseToken` for each purchase.

```javascript
const purchaseList = await digitalGoodsService.listPurchaseHistory();

for (const purchase of purchaseList) {
  // Handle the expired purchase data in your PWA.
  verifyAndCheckExpiredEntitlement(purchase.itemId, purchase.purchaseToken);
}
```


<!-- ====================================================================== -->
## See also
<!-- all links in article: -->

Local:
* [Use origin trials in Microsoft Edge](../../origin-trials/index.md)

Other docsets:
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)

Origin trials:
* [Digital Goods API](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/4b4a9ead-d912-4349-87b3-25e5e50b4f13) at _Microsoft Edge Developer_ > _Origin Trials_.

GitHub:
* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)
* [Digital Goods API: Draft Community Group Report](https://wicg.github.io/digital-goods/) at GitHub.

MDN:
* [Payment Request API](https://developer.mozilla.org/docs/Web/API/Payment_Request_API) at MDN > References > Web APIs.
   * [PaymentRequest](https://developer.mozilla.org/docs/Web/API/PaymentRequest) at MDN > References > Web APIs > PaymentRequest > Payment Request API.
   * [Value (about PaymentCurrencyAmount object)](https://developer.mozilla.org/docs/Web/API/PaymentRequestEvent/total#value) in _PaymentRequestEvent: total property_ at MDN > References > Web APIs > PaymentRequestEvent, in Payment Handler API (experimental).<!-- todo: link to PaymentCurrencyAmount page or anchor if/when avail -->
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) at MDN.

W3C:
* [Payment Request API: Candidate Recommendation Draft](https://www.w3.org/TR/payment-request/) at W3C.
   * [PaymentRequest interface](https://www.w3.org/TR/payment-request/#dom-paymentrequest) in _Payment Request API: Candidate Recommendation Draft_ at W3C.
      * [show() method](https://www.w3.org/TR/payment-request/#dom-paymentrequest-show) in _Payment Request API: Candidate Recommendation Draft_ at W3C.
   * [PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount) in _Payment Request API: Candidate Recommendation Draft_ at W3C.
