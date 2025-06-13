---
title: REST API Reference for updating an extension at Microsoft Edge Add-ons
description: The Add-ons API Reference, for REST endpoints to automate updating an extension that's at Microsoft Edge Add-ons.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 09/05/2024
---
# REST API Reference for updating an extension at Microsoft Edge Add-ons

This article is the REST endpoint reference for the Microsoft Edge Add-ons API.  This API automates publishing updates to an extension that's at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).

For an overview, see [Use the REST API to update an extension at Microsoft Edge Add-ons](./using-addons-api.md).


<!-- ------------------------------ -->
#### Versions of the Update REST API

As of September 6, 2024, both v1.1 and v1 of this Update REST API are supported.  Support for v1 will end on December 31, 2024.


<!-- ====================================================================== -->
## Upload a package to update an existing submission
<!-- endpoint 1: POST /submissions/draft/package -->

Uploads a package to update an existing draft submission of an extension.

See also [Uploading a package to update an existing submission](./using-addons-api.md#uploading-a-package-to-update-an-existing-submission) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ------------------------------ -->
#### Request

| Method | Request URI |
|---|---|
| `POST` | `/products/$productID/submissions/draft/package` |


<!-- ---------- -->
###### URI parameters

| URI parameter | Description |
|---|---|
| `$productID` | Required.  The product ID of the product to which the package must be uploaded. |


<!-- ---------- -->
###### Request headers

The following request headers are required:

##### [v1.1](#tab/v1-1)

* `Authorization: ApiKey $ApiKey`
* `X-ClientID: $ClientID`
* `Content-Type: application/zip`

##### [v1](#tab/v1)

* `Authorization: Bearer $TOKEN`
* `Content-Type: application/zip`

---


<!-- ---------- -->
###### Request body

* `<Zip package>`


<!-- ------------------------------ -->
#### Response


<!-- ---------- -->
###### Response headers

* Location: `{operationID}`

The response includes an operation ID, to send to other endpoints.


<!-- ---------- -->
###### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 202 | The request is accepted for processing, but the processing isn't complete. |
| 4XX | See [Error codes](#error-codes), below. |
| 5XX | See [Error codes](#error-codes), below. |


See also:
* [Uploading a package to update an existing submission](./using-addons-api.md#uploading-a-package-to-update-an-existing-submission) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Check the status of a package upload
<!-- endpoint 2: GET submissions/draft/package/operations/$operationID -->

Gets the status of the package upload.

See also [Checking the status of a package upload](./using-addons-api.md#checking-the-status-of-a-package-upload) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ------------------------------ -->
#### Request

| Method | Request URI |
|---|---|
| `GET` | `/products/$productID/submissions/draft/package/operations/$operationID` |


<!-- ---------- -->
###### URI parameters

| URI parameter | Description |
|---|---|
| `$operationID` | Required.  The operation ID of the upload request submitted in the previous step.  This information is available in the response header. |


<!-- ---------- -->
###### Request headers

The following request headers are required:

##### [v1.1](#tab/v1-1)

* `Authorization: ApiKey $ApiKey`
* `X-ClientID: $ClientID`

##### [v1](#tab/v1)

* `Authorization: Bearer $TOKEN`

---


<!-- ---------- -->
###### Request body

None.


<!-- ------------------------------ -->
#### Response

There are several responses, for different scenarios.


<!-- ---------- -->
###### Response when the operation is still in progress

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": "Date Time",
    "status": "InProgress",
    "message": null,
    "errorCode": null,
    "errors": null
}
```


<!-- ---------- -->
###### Response when the operation succeeds

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": "Date Time",
    "status": "Succeeded",
    "message": "Successfully updated package to {fileName}.zip",
    "errorCode": "",
    "errors": null
}
```


<!-- ---------- -->
###### Response when the operation fails with errors

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": "Date Time",
    "status": "Failed",
    "message": "Error Message.",
    "errorCode": "Error Code",
    "errors": ["list of errors"]
}
```


<!-- ---------- -->
###### Response headers

None.


<!-- ---------- -->
###### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 200 | The request is OK. |
| 4XX | See [Error codes](#error-codes), below. |
| 5XX | See [Error codes](#error-codes), below. |


See also:
* [Checking the status of a package upload](./using-addons-api.md#checking-the-status-of-a-package-upload) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Publish the product draft submission
<!-- endpoint 3: POST /submissions -->

Publishes the current draft of the product at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/).

See also [Publishing the submission](./using-addons-api.md#publishing-the-submission) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ------------------------------ -->
#### Request

| Method | Request URI |
|---|---|
| `POST` | `/products/$productID/submissions` |


<!-- ---------- -->
###### URI parameters

| URI parameter | Description |
|---|---|
| `$productID` | Required.  The product ID of the product whose draft must be published. |


<!-- ---------- -->
###### Request headers

The following request headers are required:

##### [v1.1](#tab/v1-1)

* `Authorization: ApiKey $ApiKey`
* `X-ClientID: $ClientID`

##### [v1](#tab/v1)

* `Authorization: Bearer $TOKEN`

---


<!-- ---------- -->
###### Request body

`<Notes for certification>`, in plain text format.


<!-- ------------------------------ -->
#### Response


<!-- ---------- -->
###### Response headers

* Location: `{operationID}`

The response includes an operation ID, to send to other endpoints.


<!-- ---------- -->
###### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 202 | The request is accepted for processing, but the processing isn't complete. |
| 4XX | See [Error codes](#error-codes), below. |
| 5XX | See [Error codes](#error-codes), below. |


See also:
* [Publishing the submission](./using-addons-api.md#publishing-the-submission) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Check the publishing status
<!-- endpoint 4: GET /submissions/operations/$operationID -->

Checks the status of the publish operation.

See also [Checking the publishing status](using-addons-api.md#checking-the-publishing-status) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ------------------------------ -->
#### Request

| Method | Request URI |
|---|---|
| `GET` | `/products/$productID/submissions/operations/$operationID` |


<!-- ---------- -->
###### URI parameters

None.


<!-- ---------- -->
###### Request headers

The following request headers are required:

##### [v1.1](#tab/v1-1)

* `Authorization: ApiKey $ApiKey`
* `X-ClientID: $ClientID`

##### [v1](#tab/v1)

* `Authorization: Bearer $TOKEN`

---


<!-- ---------- -->
###### Request body

None.


<!-- ------------------------------ -->
#### Response

A `GET` operation status API can be called in the following scenarios.  In all valid scenarios, `200 OK` is returned, with different status messages.

The response includes an operation ID, to send to other endpoints.


<!-- ---------- -->
###### Response when a new product is published

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Can't create new extension.",
    "errorCode": "CreateNotAllowed",
    "errors": null
}
```


<!-- ---------- -->
###### Response when there's nothing new to be published

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Can't publish extension since there are no updates, please try again after updating the package.",
    "errorCode": "NoModulesUpdated",
    "errors": null
}
```


<!-- ---------- -->
###### Response when there's an in-review submission for the same product

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Can't publish extension as your extension submission is in progress. Please try again later.",
    "errorCode": "InProgressSubmission",
    "errors": null    
}
```


<!-- ---------- -->
###### Response when there's an ongoing unpublished submission for the same product

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Can't publish extension as your extension is being unpublished. Please try after you've unpublished.",
    "errorCode": "UnpublishInProgress",
    "errors": null    
}
```


<!-- ---------- -->
###### Response where any of the modules are invalid

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Can't publish extension as your extension has modules that are not valid. Fix the modules with errors and try to publish again.",
    "errorCode": "ModuleStateUnPublishable",
    "errors": [
        {
            "message": "Invalid module : <Modules>"
        }
    ]
}
```


<!-- ---------- -->
###### Response when there are validation errors in submission

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "Extension can't be published as there are submission validation failures. Fix these errors and try again later.",
    "errorCode": "SubmissionValidationError",
    "errors": ["{list of errors}"]
}
```


<!-- ---------- -->
###### Response when the publish call succeeds

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": "Date Time",
    "status": "Succeeded",
    "message": "Successfully created submission with ID {submission.Id}",
    "errorCode": "",
    "errors": null
}
```


<!-- ---------- -->
###### Response when the publish call fails with an irrecoverable failure

```json
{
    "id": "{operationID}",
    "createdTime": "Date Time",
    "lastUpdatedTime": " Date Time ",
    "status": "Failed",
    "message": "An error occurred while performing the operation",
    "errorCode": null,
    "errors": null
}
```


<!-- ---------- -->
###### Response when the publish call fails with an unexpected failure

```json
{
    "id": "{operationID}",
    "message": "An error occurred while processing the request. Please contact support Correlation ID: {operationID} Timestamp: {timeStamp}",
}
```


<!-- ---------- -->
###### Response headers

None.


<!-- ---------- -->
###### Status codes

This API has the following expected status codes.

| HTTP status code | Description |
|---|---|
| 200 | The request is OK. |
| 4XX | See [Error codes](#error-codes), below. |
| 5XX | See [Error codes](#error-codes), below. |


See also:
* [Checking the publishing status](using-addons-api.md#checking-the-publishing-status) in _Use the REST API to update an extension at Microsoft Edge Add-ons_.


<!-- ====================================================================== -->
## Error codes

Here's a list of common error codes and possible reasons.  For a full list, see [Partner Center REST error codes](/partner-center/develop/error-codes) or [List of HTTP status codes](https://wikipedia.org/wiki/List_of_HTTP_status_codes).


<!-- ------------------------------ -->
#### 4xx: Client error

| Message | Description | Example scenario |
|---|---|---|
| 400 Bad Request | The server didn't understand the request. | There's no package (zip file) in the body.  Or, `Content-Type` header is missing or its value is incorrect. |
| 401 Unauthorized | The request page needs an authorization. | The auth token is missing, expired, or not valid. |
| 404 Not Found | The server can't find the requested page. | The specified product ID or operation ID doesn't have a valid GUID, isn't valid, or doesn't belong to the developer who is making the request. |
| 408 Request Timeout | The request took longer than the server was prepared to wait. | There was a timeout while uploading a package. |
| 429 Too many requests | Too many requests were sent by the user. | Too many requests were sent and they got throttled. |


<!-- ------------------------------ -->
#### 5xx: Server error

| Message  | Description  | Example scenario |
|---|---|---|
| 500 Internal Server Error | The request wasn't completed. | The server met an unexpected condition. |


<!-- ====================================================================== -->
## See also

<!-- all article-level links in article body: -->
* [Use the REST API to update an extension at Microsoft Edge Add-ons](./using-addons-api.md)
* [Partner Center REST error codes](/partner-center/develop/error-codes) in Partner Center docs.
* [List of HTTP status codes](https://wikipedia.org/wiki/List_of_HTTP_status_codes) at Wikipedia.
