---
title: Transfer ownership of an extension
description: How to transfer ownership of a Microsoft Edge Extension.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 11/14/2025
---
# Transfer ownership of an extension

As an extension developer, you can seamlessly transfer ownership of your Microsoft Edge extension to another party.  Transferring ownership of an extension can be essential for various reasons, such as organizational changes, project handovers, or streamlining management processes.  Your Microsoft Edge extension can continue to thrive under new ownership without any disruptions.

<!-- email is only used for this task/article -->


<!-- ====================================================================== -->
## Initiate the ownership transfer request

The current owner of the extension must send an email, as follows:

1. Start composing an email to [ext_dev_support@microsoft.com](mailto:ext_dev_support@microsoft.com), with **Subject** line:

   [Reparenting Request]: \<CRX ID of the extension to be transferred\>

   Transferring ownership of an extension is sometimes called _reparenting_ an extension.

   The CRX ID is a unique 32-character code which is the letters that are present at the end of your extension's URL.

1. In the email body, include the following information:
   * The reason for transferring ownership.
   * The name of the product (the extension).
   * The **StoreID**, which is found on the **Extensions Overview** page in Partner Center.
   * The source publisher's seller ID and name (the current owner).
   * The target publisher's seller ID and name (the new owner).
   * The MSA email address for the source publisher extension owner (the current owner).
   * The MSA email address for the target publisher extension owner (the new owner).
 
1. Send the email.


<!-- ====================================================================== -->
## Processing of the ownership transfer request

The Microsoft Edge extensions team will review the request and, to ensure legal compliance, will initiate an explicit confirmation process with both the source and target publishers before proceeding with the original request.


<!-- ------------------------------ -->
#### Updates and communication

The Microsoft Edge extensions team will keep you informed of progress or any additional requirements.


<!-- ------------------------------ -->
#### Timeline

This process typically takes approximately three weeks to complete, depending on the response times from all parties involved.

For questions about this process, contact [ext_dev_support@microsoft.com](mailto:ext_dev_support@microsoft.com).


<!-- ====================================================================== -->
## Update the extension after ownership transfer

After the ownership transfer, the new owner should publish an update of the extension promptly, to ensure that accurate and up-to-date information is displayed.

Changes to the following fields of the extension's listing don't automatically appear in the Microsoft Edge Add-ons site when the ownership is transferred:
* Description.
* Screenshots.
* Privacy policy URL.
* Owner name.
* Website link.

These updates are reflected after the new owner publishes an extension update.  Until the extension is updated, the previous owner's information remains visible to users.

After the ownership of an extension has been successfully transferred, the new owner gains full control over the extension's listing and updates.
