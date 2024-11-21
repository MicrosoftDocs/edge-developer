---
title: Get a Microsoft Store billing service by using the Digital Goods API
description: Use the Digital Goods API to get a Microsoft Store billing service.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: pwa
ms.date: 11/21/2024
---
# Get a Microsoft Store billing service by using the Digital Goods API
<!-- todo: improve title (in 3+ spots) -->
<!-- todo: improve the description: field above; sync w/ Sentence 1; develop clear wording for both spots -->

If your Progressive Web App (PWA) is listed in the Microsoft Store, you can provide in-app products and subscriptions by using the Digital Goods API and the Payment Request API.

See also:
* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)
* [Payment Request API](https://www.w3.org/TR/payment-request/) at W3C.


<!-- ====================================================================== -->
## Digital Goods API

The Digital Goods API is an interface between your PWA app and Microsoft Store.  The Digital Goods API supports:
* Querying the details of a digital item from the Microsoft Store backend, such as the item's name, description, and regional price.
* Consuming or acknowledging purchases.
* Checking the digital items that are currently owned by the user.
* Checking the purchase history of the user.

Before making the Digital Goods API available in your app, make sure that - _todo: finish sentence_

See also:
* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)


<!-- ====================================================================== -->
## Payment Request API

The Payment Request API⁠⁠ handles the actual payment transaction when a purchase is made by user.  The Payment Request API uses the item details that the Digital Goods API provides, to make the in-app purchase by using whichever billing payment method the user has set up at the Microsoft Store.

See also:
* [Payment Request API](https://www.w3.org/TR/payment-request/) at W3C.


<!-- ====================================================================== -->
## Checking whether the Digital Goods API is available

To detect whether you've correctly enabled the API on your website, check for the `getDigitalGoodsService` method in the window object:

```javascript
if ('getDigitalGoodsService' in window) {
  // Digital Goods API is supported!
} else {
  console.log('DigitalGoodsService is not available.');
  // Use other payment method
}
```


<!-- ====================================================================== -->
## Connecting to the Microsoft Store Billing service (getDigitalGoodsService)

The Digital Goods API was designed to be compatible with various browsers and digital stores, similar to how the Payment Request API is browser-agnostic and can be used with different payment providers.  To retrieve an instance of the service for Microsoft Store Billing, pass the string `"https://store.microsoft.com/billing"` as the payment method to `getDigitalGoodsService()`.

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


<!-- ====================================================================== -->
## Querying item details (getDetails)

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

The item ID is a string that represents the primary key of the items.  As in Microsoft Store, the item ID is `InAppOfferToken`.  There is no function to get a list of item IDs; those should be hard-coded in the client code or fetched from your own server (the developer's server).

The item's `price` is a `PaymentCurrencyAmount` that contains the current price of the item in the user's current region and currency.  The `price` is designed to be formatted for the user's current locale by using `Intl.NumberFormat`, as shown above.

See also:
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)
* [5. PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount) in _Payment Request API_ at W3C.
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) at MDN.


<!-- ====================================================================== -->
## Purchasing an item (show)

Once your products and details are displayed to the user, you can implement the purchase flow by using the Payment Request API.  When combined with the Digital Goods API, the only required input parameter is `methodData`.

Use the `supportedMethods` member of the `methodData`⁠⁠ parameter in the `PaymentRequest` to identify Microsoft Store Billing as the payment method with the string `"https://store.microsoft.com/billing"`.  Then in the `data` member, pass along the item ID as the `sku`.

```javascript
const details = await digitalGoodsService.getDetails(['monthly_subscription']);
const item = details[0];
const request = new PaymentRequest(
  [{supportedMethods: 'https://store.microsoft.com/billing',
    data: {sku: item.itemId}}
  ]
);

```

Then call the `show()` method to start the payment flow:

```javascript
const response = await request.show();
```

This will display the Store purchase UI to the user, where the user can view details about the product that they're trying to purchase.  During this process, the current browser session is temporarily disabled until the purchase flow is complete.  The user can either cancel the transaction, or proceed with the payment:

* If the user cancels the payment, the Promise that's returned by `show()` will be rejected with an error.

* If the user successfully pays and completes the purchase, the Promise will resolve with a `PaymentResponse`.

In the `details` property of the payment response, a purchase token is returned.


<!-- ====================================================================== -->
## Acknowledging a purchase

The payment response returns a "purchase token" string, which can be used for direct communication between the developer's server and the service provider beyond the Digital Goods API.  Such communication can allow you (the developer) to independently verify information about the purchase before granting entitlements.

Some stores might require that you (the developer) acknowledge a purchase after the purchase has succeeded, to confirm that the purchase has been recorded.


<!-- ====================================================================== -->
## Consuming a purchase (consume)

A _consumable purchase_ is a purchase that's designed to be purchased multiple times.  A consumable purchase usually needs to be marked as "consumed" before the purchase can be purchased again by the user.  An example of a consumable purchase is an in-game powerup that makes the player stronger for a short period of time.

To mark a purchase as "consumed", use the `consume` method:

```javascript
digitalGoodsService.consume(purchaseToken);
```


<!-- ====================================================================== -->
## Checking existing purchases (listPurchases)

The `listPurchases` method returns information about the user's existing purchases.  This method allows a client to get a list of items that are currently owned or purchased by the user.  This may be necessary, to do either of the following:

* Check for entitlements, such as whether a subscription, promotional code, or permanent upgrade is active.

* Recover from network interruptions during a purchase, such as when the item is purchased but not yet acknowledged.

The `listPurchases` method returns item IDs and purchase tokens.  Before you grant an entitlement, you should verify the returned item ID or the returned purchase token, by using a direct developer-to-provider API, as shown below:

```javascript
purchases = await digitalGoodsService.listPurchases();
for (p of purchases) {
  VerifyAndGrantEntitlement(p.itemId, p.purchaseToken);
}
```

The `listPurchases` method doesn't return consumed products or expired subscriptions.


<!-- ====================================================================== -->
## Getting the purchase history (listPurchaseHistory)

The `listPurchaseHistory()` method returns a list that shows the most recent purchase made by the user for each item, regardless of whether the purchase is expired, canceled, or consumed.  This method returns a list of `PurchaseDetails` containing the `itemId` and `purchaseToken` for each purchase.

```javascript
purchases = await digitalGoodsService.listPurchaseHistory();
for (p of purchases) {
  VerifyAndCheckExpiredEntitlement(p.itemId, p.purchaseToken);
}
```


<!-- ====================================================================== -->
## See also

* [Digital Goods API For Microsoft Store PWA Explainer](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/PwaDigitalGoods/explainer.md)
* [StoreProduct.InAppOfferToken Property](/uwp/api/windows.services.store.storeproduct.inappoffertoken)

W3C:
* [Digital Goods API: Draft Community Group Report](https://wicg.github.io/digital-goods/)
* [Payment Request API](https://www.w3.org/TR/payment-request/)
* [5. PaymentCurrencyAmount dictionary](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount) in _Payment Request API_.

MDN:
* [Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
* [display_override](https://developer.mozilla.org/docs/Web/Manifest/display_override)<!-- todo: delete link? "override" not in article body   -->
