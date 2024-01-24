---
title: Developer policies for the Microsoft Edge Add-ons store
description: Developer policies for submitting extensions via Partner Center to be published at the Microsoft Edge Add-ons store website.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/15/2023
---
# Developer policies for the Microsoft Edge Add-ons store

To develop an extension to be published through the Microsoft Edge Add-ons store, follow these policies.  These policies apply to submitting extensions through [Partner Center](https://partner.microsoft.com/dashboard/home) and publishing the extensions at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) store.

The _Microsoft Edge Add-ons store_<!--36--> is also called the _Edge Add-ons store_,<!--12--> the _Microsoft Edge Add-ons website_,<!--89--> or the _Edge Add-ons website_.<!--5-->


<!-- ====================================================================== -->
## Principles

The following principles are reflected in these developer policies:

* Offer unique and distinct value within your extension for Microsoft Edge.  Provide a compelling reason to download your extension from the Microsoft Edge Add-ons store.

* Do not mislead users about what your extension does, who is offering it, and so on.

* Do not attempt to cheat users, the system, or the ecosystem.  There is no place in Microsoft Edge Add-ons for any kind of fraud; be it ratings and review manipulation, credit card fraud, or other fraudulent activity.

Adhering to these policies for the Microsoft Edge Add-ons store helps you make choices that enhance the appeal and audience of your extension.


<!-- ====================================================================== -->
## Building quality products

Microsoft is committed to delivering quality products to its customers.  Therefore, extensions which don't follow the quality guidelines aren't allowed, such as:

* Content deemed not family-friendly.

* Bots: Any extension that automatically generates spam-like or unsolicited messages on the user's behalf, or that performs automated actions to manipulate a platform's features, such as artificially inflating engagement metrics.

* Cryptocurrency: Crypto mining and any other illegitimate activities that involve crypto wallets and currency.

* Non-production builds: For example, an extension that's still in an experimental stage, that's prone to crashes or instability, or that's designed for internal testing purposes only and not intended for public release.

* Prohibited products: An extension that promotes or facilitates the sale of illegal drugs, firearms, or counterfeit goods would be considered a prohibited product, and any extension that violates intellectual property rights, such as offering pirated software or copyrighted content without authorization, would be restricted.

* Gambling content.


<!-- ====================================================================== -->
## 1. Product policies


<!-- ------------------------------ -->
#### 1.1 Distinct function and value; accurate representation

Your extension and associated metadata must accurately and clearly reflect the source, functionality, and features that you describe.


###### 1.1.1 Extensions must have a single purpose

Your extension must have a single purpose with narrow functionality.  For example, your extension cannot function as a simple calculator and as a code remote scanner simultaneously.


###### 1.1.2 Describe your extension

All aspects of your extension should accurately describe the functions, features and any important limitations of your extension, including required or supported input devices.  The value proposition of your extension must be clear during the first run experience.  Your extension may not use a name or icon similar to that of other extensions, must not reference other browsers, and must not claim to represent a company, government body, or other entity if you don't have permission to make that representation.

If screenshots are provided, they must:
- Be clear and informative.
- Render properly; for example, must not be stretched or blurry.

All functionality of an extension should be clearly disclosed to the user.  Any extension that attempts to deceive or mislead users will be removed from the store.


###### 1.1.3 Functionality

Your extension must be fully functional, as in, there should not be any blockers, including but not limited to, broken URLs or blocked webpage links.


###### 1.1.4 Search and discovery

Search terms may not exceed seven unique terms, and should be relevant to your extension.


###### 1.1.5 Provide appropriate details

There should be distinct and informative details about your extension and its functionality in the listing (metadata) for your extension.


###### 1.1.6 Stability and performance

You must ensure that your extension is stable and does not cause the browser to freeze or crash.

In general, the extension cannot interfere with the normal functioning of the browser or operating system.


###### 1.1.7 Obfuscation

Extensions with obfuscated code aren't allowed.  This includes code within your extension package, as well as any external code or resource fetched from the web.  You may be asked to refactor parts of your code, if it is not reviewable.


###### 1.1.8 Altering browser settings

Your extension must not, without appropriate user consent, alter, or appear to alter, browser functionality or settings including, but not limited to: the address bar search provider and suggestions, the start or home page, the new tab page, and adding or removing favorites.

Any changes made to the device settings must be done with the user's knowledge and consent, and must be easily reversible by the user.

Any alteration of browser settings, such as new tabs and search engines, should be mentioned in the listing or description, and such alterations should use standard APIs to achieve that functionality.  They must not override default settings without user permission.


<!-- ------------------------------ -->
#### 1.2 Security

Extensions must declare all permissions that are required for their functionality in the manifest.  Your extension must only request those permissions that are essential for functioning.

Any `declarativeNetRequest` rules must be clearly declared within the extension, and should not be imported remotely unless necessary for functionality.

Extensions must not collect or track sensitive user information without clear consent, and must clearly state any user data handling in their privacy policy.  User-sensitive data must be encrypted by using proper mechanisms such as SSL, and must not be transported via insecure channels.

Extensions must not promote deceptive installation of other extensions.

Bulk submissions of extensions with the same functionality and code are not allowed.

Extensions should not exploit security vulnerabilities of other extensions or applications, and must keep authentication information secure.

Extensions that function as crypto wallets can only be published by verified company accounts.

In general, your extension must not jeopardize or compromise user security, or the security or functionality of the device, system, or related systems.


###### 1.2.1 Content security policies

If you make any changes to your extension beyond the described functionality, any changes to code must be compliant with the Content Security Policy for Microsoft Edge extensions; see [Content Security Policy (CSP)](./csp.md).  For example, your extension should not download a remote script and subsequently run that script in a manner that is not consistent with the described functionality.


###### 1.2.2 Unwanted and malicious software

Your extension must not contain or enable malware that may harm the operation of the network, servers, and infrastructure of Microsoft or any third parties.  Spyware, malicious scripts, and phishing scams are also prohibited.

Your extension must comply with the Microsoft criteria for unwanted and malicious software, listed in [How Microsoft identifies malware and potentially unwanted applications](/windows/security/threat-protection/intelligence/criteria).


###### 1.2.3 Dependency on other software

Your extension may depend on non-integrated software (such as another product, module, or service) to deliver the primary functionality.  However, this information should be clearly disclosed in the description.


###### 1.2.4 Extension updates

Unless otherwise permitted by Microsoft, your extension must be updated only through Partner Center and the Edge Add-ons store.


<!-- ------------------------------ -->
#### 1.3 Product is testable

Your extension must be fully testable, and all the steps required for testing the product must be provided at the time of submission.


###### 1.3.1 User credentials

If your extension requires login credentials, then provide a test account and credentials or provide a clear and reasonable explanation as to why test credentials cannot be provided for the extension in the `Submission Options > Notes for certification`.


###### 1.3.2 Availability of services

If your extension requires access to a server, the server must be functional, to verify that the extension works correctly.


<!-- ------------------------------ -->
#### 1.4 Usability

Your extension must meet Microsoft Edge Add-ons store standards for usability, including, but not limited to, those listed in the subsections below.


###### 1.4.1 Compatibility across platforms

Your extension should be compatible with Microsoft Edge on all the devices and platforms on which it may be downloaded.  If an extension is downloaded on a device with which it is not compatible, it should detect that at launch, and display a message to the user detailing the requirements that devices must meet in order to be compatible with the extension.


###### 1.4.2 User experience

Your extension must start up promptly, and must stay responsive to user input.  It must also shut down gracefully, and not close unexpectedly.


<!-- ------------------------------ -->
#### 1.5 Personal information

The following requirements apply to extensions that access personal information.   _Personal information_ includes all information or data that identifies or could be used to identify a person, or that is associated with such information or data.


###### 1.5.1 Collect personal information only when necessary

Your extension may collect, access, use, or transmit personal information (including web browsing activity) only if required by and only for use in a prominently disclosed, user-facing feature.

You must clearly state the data handling practices of your extension at the time of installation, including any transfer or use of user data.

You must obtain explicit prior consent from the user before any merger, acquisition, or sale of your assets that may involve the transfer of user data.

You must obtain explicit prior consent from the user and have a clear policy before accessing and providing the user with re-access information when the user has lost their password for the product or service.

You must have a clear and comprehensive privacy policy that outlines your data handling practices, including the use of any third-party services.


###### 1.5.2 Maintain a privacy policy

Your privacy policy must describe the controls that users have over the use and sharing of their information, how they access their information, and it must comply with applicable laws and regulations.  Your privacy policy must be kept up-to-date as you add new features and functionality to your extension.

The privacy policy provided should be relevant to the product and should not use the Microsoft privacy statement unless the extension is an official Microsoft extension.  Additionally, the privacy policy should primarily refer to the Microsoft Edge browser and not other browsers.  Any data that's collected should be aggregated and anonymized, and must used in accordance with applicable privacy and other jurisdictional legal requirements.

If you provide Microsoft with your privacy policy, then you agree to permit Microsoft to share such privacy policy with users of your extension.


###### 1.5.3 Sharing data with third parties

You may publish the personal information of users of your extension to an outside service or third-party through your extension or associated metadata only after obtaining opt-in consent from those users.  Opt-in consent means the users give their express permission in the user interface of your extension for the requested activity, after you:

* Describe to your users how the information is accessed, used or shared and indicate the types of parties to whom it is disclosed.

* Provide your users a mechanism in your extension user interface through which they have the option to later rescind the permission and opt-out.


###### 1.5.4 Sharing information of non-users

If you publish a person's personal information to an outside service or third-party through your extension or the metadata, but the person whose information is being shared is not a user of your extension:

1. You must obtain express written consent to publish that personal information.

1. You must permit the person whose information is shared to withdraw that consent at any time.

1. Your privacy policy must clearly disclose that you may collect personal information in this manner.

1. If required by applicable law you must delete the personal information of any individual upon request, including individuals whose information you collect in this manner.

1. If your extension provides users with access to another person's personal information, this requirement also applies.


###### 1.5.5 Transmit information securely

Your extension must only use modern and secure cryptography methods to collect, store, or transmit personal information.

You must not publicly disclose any financial or payment information related to your extension or its users.

You must not publicly disclose any authentication information related to your extension or its users.

In the event of a security breach involving financial or payment information or authentication information, you must immediately inform affected users and entities, including applicable authorities, and must also take necessary steps to address the breach.


###### 1.5.6 Highly sensitive information

Your extension must not collect, store, or transmit highly sensitive personal information, such as health or financial data, unless the information is related to the functionality of your extension.  Your extension must also obtain express user consent before collecting, storing, or transmitting such information.


<!-- ------------------------------ -->
#### 1.6 Permissions

Your extension must only request those permissions that are necessary for functioning and may not request permission for functionalities that go beyond the capabilities required to perform and function as declared.

Requesting permissions or features solely for the purpose of "future proofing" is not allowed.


<!-- ------------------------------ -->
#### 1.7 Localization

You should localize your extension for all languages that your extension claims to support.  The text of the description of your extension should be localized in each language that you declare.

If your extension is localized such that some features aren't available in a localized version, you must clearly state or display the limits of localization in your extension description.  The experience provided by an Extension must be reasonably similar in all languages that it supports.


<!-- ------------------------------ -->
#### 1.8 Financial transactions

If your product includes in-product purchase, subscriptions, virtual currency, billing functionality, or captures financial information; the requirements in the following sections apply.


###### 1.8.1 Paid features

You must use a secure third-party purchase API for purchases of physical goods or services.

You must use a secure third-party purchase API for payments made in connection with any other services including real-world gambling or charitable contributions.  However, you must comply with any applicable laws or regulations regarding your services.

You must clearly and honestly describe the type of products you sell and clearly and honestly post the terms of sale.

If your extension is used to facilitate or collect charitable contributions or to conduct promotional sweepstakes or contests, then you must do so in compliance with any applicable laws and regulations.

You must also state clearly and prominently that Microsoft is not the fundraiser or sponsor of the promotion.

In-product offerings sold in your extension must not be converted to any legally valid currency (such as USD, Euro, and so on) or any physical goods or services.


###### 1.8.2 Disclosing paid features

Your extension and associated metadata must clearly provide information about the types of in-product purchases offered and the range of prices.  You must not mislead users and must be clear about the nature of your in-product promotions and offerings including the scope and terms of any trial experiences.

If your extension restricts access to user-created content during or after a trial, then you must notify users in every step of the process.

In addition, your extension must make it clear to users that they are initiating a purchase option in your extension.


<!-- ------------------------------ -->
#### 1.9 Notifications

Your extension must respect system settings for notifications.  Any presentation of ads and notifications to users must be consistent with user preferences, regardless of whether the notifications are provided by the Microsoft Push Notification Service (MPNS), Windows Push Notification Service (WNS), or any other service.

If the user disables notifications, either on a product-specific or system-wide basis, then your extension must adhere to the user's notification settings and remain functional even though notifications may be disabled.

Also, you'll be receiving notifications related to your accounts, including but not limited to, login attempts, account changes, and security alerts.  To ensure the security of your accounts and the add-ons you submit, verify your accounts through a secure and approved method.


###### 1.9.1 General guidance

Notifications provided through WNS or MPNS are considered product content, and are subject to all developer policies for the Microsoft Edge Add-ons store.


###### 1.9.2 Ownership of notifications

You must not obscure or try to disguise the source of any notification initiated from your extension.


###### 1.9.3 No confidential or sensitive information

You must not include in a notification any information users may reasonably consider confidential or sensitive.


###### 1.9.4 Purpose of notifications

Notifications sent from your extension must relate to that extension or to other extensions you publish in the Microsoft Edge Add-ons store, and must not include promotional messages of any kind that aren't related to your extension.


<!-- ------------------------------ -->
#### 1.10 Advertising conduct and content

For all advertising related activities, the following requirements apply:


###### 1.10.1 Purpose

The primary content of your extension must not be advertising, and your extension should not bundle other extension offers within the same flow.

Users should not be misled to click on advertisements to fully use the extension.


###### 1.10.2 Policies and agreements

Any ad content that's displayed by your extension must conform to the following:
* The [Microsoft Advertising Network policies](https://about.ads.microsoft.com/policies/home).
* The advertising requirements of the [App Developer Agreement](/legal/windows/agreements/app-developer-agreement).
* The advertising requirements of the developer policies for the Microsoft Edge Add-ons store.


###### 1.10.3 Quality of advertising

* The primary purpose of your extension must not be to get users to click ads.

* Your extension must not do anything that interferes with or diminishes the visibility, value, or quality of any ads that it does display.


###### 1.10.4 Promotions

If you purchase or create promotional ad campaigns to promote your extension through the ad campaign functionality in Partner Center, all ad materials you provide to Microsoft, including any associated landing pages, must comply with [Microsoft Creative Specifications Policy](https://about.ads.microsoft.com/policies/creative-specs) and [Microsoft Advertising Network policies](https://about.ads.microsoft.com/policies/home).


###### 1.10.5 Notifying users of opt-out for interest-based advertising

Your privacy statement or terms of use must let users know you plan to send personal information to the ad service provider and must tell users how they may opt-out of interest-based advertising.


###### 1.10.6 Other guidelines

If your extension is directed at children under the age of 13, as defined in the [Children's Online Privacy Protection Act](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy); you must notify Microsoft of this fact in Partner Center and ensure that all ad content displayed in your extension is appropriate for children under the age of 13.


<!-- ====================================================================== -->
## 2. Content policies

The following policies apply to content and metadata offered for distribution in [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home).

_Content_ means the images, sounds, videos, and text contained in your extension; the tiles, notifications, error messages, or ads exposed through your extension; and anything delivered from a server, or anything to which your extension connects.

_Metadata_ includes publisher name, extension name, extension icon, extension description, extension screenshots, extension trailers and trailer thumbnails, and any other extension metadata.

Because extensions and Microsoft Edge Add-ons are used around the world, these requirements are interpreted and applied in the context of regional and cultural norms.


<!-- ------------------------------ -->
#### 2.1 Content requirements

For your extension to be listed in the Microsoft Edge Add-ons store, your extension and metadata you submit should not contain mature, explicit, or otherwise inappropriate content.

This includes content that is:
* Discriminatory, hateful, or offensive.
* Harmful or dangerous.
* Misleading or fraudulent.
* Spam or malware.

Examples of specific types of content that would be considered inappropriate for Edge Add-ons include:
* Pornography or nudity.
* Hate speech or symbols.
* Violence or gore.
* Drugs or alcohol.
* Gambling.
* Illegal activities.
* Misleading or fraudulent claims.
* Spam or malware.

The above list of inappropriate content is not exhaustive.  The Microsoft Edge Add-ons store may reject or remove any extension that they deem to be inappropriate, even if it does not violate any specific policy.

An extension that doesn't meet the requirements for Microsoft Edge Add-ons store listings may be rejected or promptly removed.


<!-- ------------------------------ -->
#### 2.2 Content including names, logos, and original and third-party content

All content in your extension and associated metadata must be originally created by you or appropriately licensed from a rights holder and must be used only as permitted by the rights holder or as otherwise permitted by law.

The content must reference Microsoft trademarks only to the extent necessary, and should not modify or alter the trademarks in any way.

If not created or appropriately licensed, a disclaimer should be added stating the same.


<!-- ------------------------------ -->
#### 2.3 Risk of harm


###### 2.3.1 Requirements

Your extension must not contain any content that facilitates or glamorizes the following real world activities: (a) extreme or gratuitous violence; (b) human rights violations; (c) the creation of illegal weapons; or (d) the use of weapons against a person, animal, or real or personal property.


###### 2.3.2 Responsibility

Your extension must not: (a) pose a safety risk to, nor result in discomfort, injury or any other harm to end users or to any other person or animal; or (b) pose a risk of or result in damage to real or personal property.  You are solely responsible for all extension safety testing, certificate acquisition, and implementation of any appropriate feature safeguards.

You must not disable any platform safety or comfort features and you must include all applicable legally required and industry-standard warnings, notices, and disclaimers in your extension.


<!-- ------------------------------ -->
#### 2.4 Defamatory, libelous, slanderous, or threatening

Your extension must not contain content that is defamatory, libellous, slanderous, threatening, or that promotes extremism such as the use of violence.


<!-- ------------------------------ -->
#### 2.5 Offensive content

Your extension and associated metadata must not contain potentially sensitive or offensive content.

Content may be considered sensitive or offensive in certain countries/regions because of local laws, regulations, or cultural norms.

In addition, your extension and associated metadata must not contain content that advocates discrimination, hatred, or violence based on sensitive circumstances, such considerations of race, ethnicity, national origin, language, gender, age, disability, religion, sexual orientation, status as a veteran, or membership in any other social group.


<!-- ------------------------------ -->
#### 2.6 Alcohol, tobacco, and drugs

Your extension and associated data must not contain any content that facilitates or glamorizes excessive or irresponsible use of alcohol or tobacco products or drugs.


<!-- ------------------------------ -->
#### 2.7 Adult content

Your extension and associated data must not contain or display content that a reasonable person would consider pornographic or sexually explicit.

For example, content is not allowed that contains nudity, graphic sex acts, or sexually explicit material, or that drives traffic to a pornography site.


<!-- ------------------------------ -->
#### 2.8 Prohibited content, services, and activity

Your extension must adhere to the following conditions:

* Your extension must not contain content or provide services that facilitate online gambling.

* Online gambling includes but is not limited to online casinos, sports betting, lotteries, or games of skill that offer prizes of cash or other value.

* Your extension must not provide unauthorized access to website content, such as by circumventing paywalls or login restrictions.

* Your extension must not provide, encourage, or enable the unauthorized access, download, or streaming of copyrighted content or media.

* Your extension must not mine cryptocurrency.

Extensions manipulating, cheating, or exploiting Microsoft systems, causing revenue loss, or extensions engaging in fraudulent activities, are strictly prohibited.

This prohibition applies to all developers, partners, and third parties.  Non-compliance may result in extension removal and account suspension or termination.

Your extension must adhere to applicable laws and regulations, Microsoft's terms of service, and applicable privacy policies.  Microsoft reserves the right to review extensions for compliance and to promptly remove any noncompliant extension.


<!-- ------------------------------ -->
#### 2.9 Illegal activity

Your extension and the associated data must not contain content or functionality that encourages, facilitates, or glamorizes illegal activity in the real world.


<!-- ------------------------------ -->
#### 2.10 Excessive profanity and inappropriate content

* Your extension must not contain excessive or gratuitous profanity.

* Your extension must not contain or display content that a reasonable person considers obscene.


<!-- ------------------------------ -->
#### 2.11 Country- or region-specific requirements

Content that is offensive in any country or region to which your extension is targeted is not allowed.  Content may be considered offensive in certain countries or regions because of local laws or cultural norms.  Examples of potentially offensive content in certain countries or regions include the following:

**China**

* Prohibited sexual content.
* Disputed territory or region references.
* Providing or enabling access to content or services that are illegal under applicable local law.


<!-- ------------------------------ -->
#### 2.12 Age ratings


###### 2.12.1 Mature content

When you submit your extension to Partner Center, you must indicate whether your extension displays content that should be marked "Mature".  When determining the rating for your extension, consider all the content in your app, including user generated content and ads, and to the content that your extension links.  If you indicate that your extension doesn't contain any "Mature" content, you are responsible for maintaining the accuracy of this rating.

Regardless of the rating given to your extension, it must still adhere to all the content requirements of the Microsoft Edge Add-ons store developer policies.


###### 2.12.2 Ratings change

If your extension provides content (such as user-generated, retail, or other web-based content) that might be appropriate for a higher age rating than the assigned rating, you must require users to opt into receiving such content by using a content filter or by signing in with a pre-existing account.


<!-- ------------------------------ -->
#### 2.13 Videos

If you submit a promotional video in the listing, it should strictly adhere to these [content policies](/microsoft-edge/extensions-chromium/store-policies/developer-policies#2-content-policies).


<!-- ====================================================================== -->
## Complaint and appeal process for Microsoft Edge Add-ons certification 

All extensions must adhere to the store policies listed above.  If your extension failed in the review process, review the store policies to understand the reason for failure.  After submitting your extension using Partner Center, to ask a question about the review or certification status of it, go to [New Support Request](https://support.microsoft.com/supportrequestform/e7a381be-9c9a-fafb-ed76-262bc93fd9e4) and complete the form.


<!-- ------------------------------ -->
#### Appeal statistics for Microsoft Edge Add-ons for FY2022

| Statistic                                                             | Count     |
|-----------------------------------------------------------------------|-----------|
| App and/or account enforcement action appeals                         |        34 |
| Complaints about technological issues                                 |         0 |
| Regulatory compliance complaints                                      |         0 |
| Questions about certification, policy, submission, and technical help |       131 |
| Miscellaneous                                                         |         5 |
| Total issues                                                          |       175 |
| Overturned decisions                                                  |        28 |
| Average processing time                                               | 6.58 days |

These numbers were reported on July 1, 2023.
