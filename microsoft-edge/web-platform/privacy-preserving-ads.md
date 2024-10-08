---
title: Provide privacy-preserving ads, by using the Ad Selection API
description: Use the Ad Selection API to provide user-relevant ads on your site without using third-party cookies.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 10/08/2024
---
# Provide privacy-preserving ads, by using the Ad Selection API

Deploy the Ad Selection API services as follows.  First, [Sign up for the Ad Selection API](./ad-selection-api.md).

The Ad Selection API uses a trusted execution environment (TEE) to provide a level of assurance for data integrity, data confidentiality, and code integrity; see [Confidential Computing: Hardware-Based Trusted Execution for Applications and Data](https://confidentialcomputing.io/wp-content/uploads/sites/85/2021/03/confidentialcomputing_outreach_whitepaper-8-5x11-1.pdf).  Services provided by the Ad Selection API must run in a TEE to secure the data used by these services.

Ad Selection Services running in a TEE should be deployed on a cloud platform that supports the necessary security features.  Initially, services can be deployed in Azure using [Confidential ACI containers](/azure/container-instances/container-instances-confidential-overview).

The Ad Selection API provides different services that need to be deployed by sellers or buyers.


<!-- ------------------------------ -->
#### Images for deploying services

Add your User-Defined Functions within the provided images of services.  The User-Defined Functions can run custom business logic.  The User-Defined Functions run in private containers within the deployed services.

Each image defines one service.  Some images don't contain UDFs, and consist entirely of predefined code.  Some images contain UDFs, as functions with an empty body or starter code, that are the relevant User-Defined Functions for that service.  Fill in the bodies of the User-Defined Functions in these images with your own custom code.

Microsoft provides an image for each service, which can be deployed on a cloud provider.  These are the public images that must be used for deployment.  Only official images from Microsoft are able to run private auctions.

Images for seller services:
* [SellerFrontEnd service](https://mcr.microsoft.com/product/ad-selection/azure/seller-frontend-service)
* [Auction service](https://mcr.microsoft.com/product/ad-selection/azure/auction-service)

Images for buyer services:
* [BuyerFrontEnd service](https://mcr.microsoft.com/product/ad-selection/azure/buyer-frontend-service)
* [Bidding service](https://mcr.microsoft.com/product/ad-selection/azure/bidding-service)
* [K-Anonymity service](https://mcr.microsoft.com/product/ad-selection/azure/k-anonymity-service)


<!-- ------------------------------ -->
#### Services for sellers

| Service | Description |
| --- | --- |
| **SellerFrontEnd** | Provides a `/SelectAd` HTTPS endpoint, which receives requests from the seller's untrusted ad service to initiate the Protected Audience auction flow. |
| **Auction** | Provides a `/ScoreAds` endpoint, which receives requests from the **SellerFrontEnd** service, containing bids that are participating in the auction.  Responds with a score value that the **SellerFrontEnd** service uses to choose the winner. |
| **Key/Value** | Receives requests from the **SellerFrontEnd** service, which contain lookup keys from buyers' bids (such as `ad_render_urls`).  Returns real-time scoring signals that are required for the auction.  Runs in Bring Your Own Service (BYOS) mode, so the seller does not need to deploy this service in a trusted execution environment (TEE), and can instead use the image that's provided by Microsoft. |


<!-- ------------------------------ -->
#### Services for buyers

| Service | Description |
| --- | --- |
| **BuyerFrontEnd** | Provides a `/GetBids` endpoint, which receives requests from the **SellerFrontEnd** service to initiate the bidding flow. |
| **Bidding** | Provides a `/GenerateBids` endpoint, which receives requests from the **BuyerFrontEnd** service to handle the bidding and generate a bid.  Generates a bid, chooses the winner, and selects the banner to be rendered. |
| **Key/Value** | Receives requests from the **BuyerFrontEnd** service and returns real-time buyer data required for bidding, corresponding to lookup keys from Interest Groups.  Such a request happens once per workflow.  Runs in Bring Your Own Service (BYOS) mode. |
| **Bidding Selection & Key/Value** | Receives requests from the **Bidding** service to select and return additional ad banners (candidates) that can participate in bidding.  The **Bidding Selection & Key/Value** service can also return additional signals that are needed for bidding.  The **Bidding** service may send multiple requests to the **Bidding Selection & Key/Value** service, or may choose not to send any requests, because the **Bidding Selection & Key/Value** service is optional.  The **Bidding Selection & Key/Value** service must be deployed in a trusted execution environment (TEE). |
| **K-Anonymity** | Collects k-anonymity counters and checks that the winning ad creative passes the k-anonymity check. |


<!-- ------------------------------ -->
#### User-Defined Functions

Sellers and buyers need to provide their own custom code as User-Defined Functions (UDFs) that run in private containers within the deployed services.  These User-Defined Functions can execute custom business logic.

Each buyer or seller can deploy multiple instances of a given service, such as:
* **SellerFrontEnd** and **Auction**.
* **BuyerFrontend**, **Bidding**, and **K-Anonymity**.

Some of these services take an input which is a JavaScript worklet that defines User-Defined Functions.


<!-- ---------- -->
###### User-Defined Functions for sellers

| UDF | Service in which the UDF runs | Description |
| --- | --- | --- |
| `scoreAd()` | **Auction** | Generates a score for each buyer's bid, or rejects the bid.  This score is then used by the **SellerFrontEnd** service, to choose a winner from among all buyers. |
| `reportResult()` | **SellerFrontEnd** | For event-level reporting.  Runs in the **SellerFrontEnd** service after the final winner has been chosen.  Notifies the seller about the winning bidder, and provides the bid value. |


<!-- ---------- -->
###### User-Defined Functions for buyers

| UDF | Service in which the UDF runs | Description |
| --- | --- | --- |
| `generateBids()` | **Bidding** | Generates a bid, and chooses the banner that will be shown. |
| `reportWin()` | **SellerFrontEnd** | For event-level reporting.  Runs in the **SellerFrontEnd** service, if the buyer's bid wins the auction.  Notifies the buyer that they have won the auction, and generates notification URLs that will be triggered later, such as during banner rendering or other client events. |
| `getValues()` | **Bidding Selection & Key/Value** | Runs in the **Bidding Selection & Key/Value** service, if the buyer uses that service.  Allows for custom code execution for data lookup and selection. |


<!-- ------------------------------ -->
#### Deployment guide

To deploy the Ad Selection API service to Azure:

1. Create an Azure account and create a subscription at [Microsoft Azure](https://azure.microsoft.com).

1. Choose the **Confidential ACO containers** option.

1. Download the Terraform [deployment scripts and guide](https://go.microsoft.com/fwlink/?linkid=2290115).  **Note:** Make sure the hash of the image you downloaded matches the hash in the script you download.

1. The Terraform scripts already include links to public images that are provided by Microsoft.  Choose the required services and deploy them by following the steps in the included `readme.md`.

   1. Set any specific flags for your environment, including auction worklet locations.

   1. Configure all prerequisites and prepare all tools for deployment.

   1. Create Azure Resources and run the Terraform script that finishes deployment.

1. Develop worklets including `user-defined-function` (UDF) and start Ad Selection API services.


<!-- ====================================================================== -->
## Use the Ad Selection API on your website

To start using the Ad Selection API, sellers and buyers need to modify their websites' JavaScript code that's run when the browser is Microsoft Edge.

* Sellers: To run private auctions, fetch interest groups, and do reporting, update your code on publishers' websites.

* Buyers: To create interest groups and store them in the browser, update the code on your advertising partners' websites.  You can use the delegation mechanism to restrict and allow Interest Group creation on third-party domains.

To learn more about which API methods are available and to view example code, see [Ad Selection API details](https://github.com/WICG/privacy-preserving-ads/blob/main/API%20Details.md).


<!-- ====================================================================== -->
## See also
<!-- all links in both articles, except Origin Trial -->

Design and technical documents:
* [Ad Selection API Proposal](https://github.com/WICG/privacy-preserving-ads?tab=readme-ov-file#ad-selection-api-proposal)
* [Ad Selection Overview](https://github.com/WICG/privacy-preserving-ads/blob/main/Ad%20Selection%20Overview.md)
* [Ad Selection API details](https://github.com/WICG/privacy-preserving-ads/blob/main/API%20Details.md)

Images for deployment:
* Sellers
   * [SellerFrontEnd service](https://mcr.microsoft.com/product/ad-selection/azure/seller-frontend-service)
   * [Auction service](https://mcr.microsoft.com/product/ad-selection/azure/auction-service)
* Buyers
   * [BuyerFrontEnd service](https://mcr.microsoft.com/product/ad-selection/azure/buyer-frontend-service)
   * [Bidding service](https://mcr.microsoft.com/product/ad-selection/azure/bidding-service)
   * [K-Anonymity service](https://mcr.microsoft.com/product/ad-selection/azure/k-anonymity-service)

Trusted execution environment (TEE):
* [Confidential Computing: Hardware-Based Trusted Execution for Applications and Data](https://confidentialcomputing.io/wp-content/uploads/sites/85/2021/03/confidentialcomputing_outreach_whitepaper-8-5x11-1.pdf)

Azure:
* [Microsoft Azure](https://azure.microsoft.com)
* [Confidential ACI containers](/azure/container-instances/container-instances-confidential-overview)

Terraform:
* [Terraform deployment scripts and guide](https://go.microsoft.com/fwlink/?linkid=2290115)
