---
description: Microsoft Edge Addons Catalog Developer Policies.
title: Microsoft Edge Addons Catalog Developer Policies
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/16/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Microsoft Edge Addons Catalog Developer Policies  

## Introduction and Objective of this document  

Thank you for your interest in developing Extensions for the Microsoft Edge Addons catalog.  The Microsoft Edge Addons Catalog Developer Policies \(Addons Catalog Developer Policies\) apply to your Extensions, including your submission of Extensions through [Partner Center][MicrosoftPartnerCenter] and the provision of such Extensions through the Microsoft Edge Addons.  

## Principles  

A few principles to get you started:  

*   You should offer unique and distinct value within your Extensions for Microsoft Edge.  Provide a compelling reason to download your Extensions from the Microsoft Edge Addons catalog \(Microsoft Edge Addons\).  
*   You must not mislead our joint users about what your Extension does, who is offering it, and so on.  
*   You must not attempt to cheat users, the system or the ecosystem.  There is no place in our Microsoft Edge Addons for any kind of fraud; be it ratings and review manipulation, credit card fraud or other fraudulent activity.  

Adhering to these Addons Catalog Developer Policies should help you make choices that enhance the appeal and audience of your Extension.  

Your Extensions are crucial to the experience of hundreds of millions of users.  We look forward to experiencing what you create and are thrilled to help deliver your Extensions to the world.  

## 1. Product Policies  

### 1.1 Distinct Function & Value; Accurate Representation  

Your Extension and associated metadata must accurately and clearly reflect the source, functionality, and features that you describe.  

#### 1.1.1 Extensions must have a single purpose  

Your Extension must have a single purpose with narrow functionality.  

#### 1.1.2 Describe your Extension  

All aspects of your Extension should accurately describe the functions, features and any important limitations of your Extension, including required or supported input devices.  The value proposition of your Extension must be clear during the first run experience.  Your Extension may not use a name or icon similar to that of other Extensions, and must not claim to represent a company, government body, or other entity if you do not have permission to make that representation.  

#### 1.1.3 Functionality  

Your Extension must be fully functional.  

#### 1.1.4 Search and Discovery  

Search terms may not exceed seven unique terms and should be relevant to your Extension.  

#### 1.1.5 Provide appropriate details  

You must provide distinct and informative details about your Extension and the functionality in listing \(metadata\) for your Extension.  Your Extension must provide a valuable and quality user experience.  Your Extension must also have an active presence in Microsoft Edge Addons.  

#### 1.1.6 Stability and Performance  

Your Extension must not negatively impact the performance or stability of Microsoft Edge.  

#### 1.1.7 Obfuscation  

Extensions with obfuscated code are not allowed.  This includes code within the Extension package as well as any external code or resource fetched from the web.  You may be asked to refactor parts of your code if it is not reviewable.  

#### 1.1.8 Altering Browser Settings  

Your Extension must **not, without appropriate user consent**, alter, or appear to alter, browser functionality or settings including, but not limited to: the address bar search provider and suggestions, the start or home page, the new tab page, and adding or removing favourite.  

Any alteration to the browser settings should be explicitly documented in the description of the Extension.  

Your Extension may only revise key settings to replace a Microsoft webpage or service with that of a third-party \(such as require use of a third-party search engine or set the home page to a third-party web property\) if you are employed by or otherwise associated with such third-party.  

### 1.2 Security  

Your Extension must not jeopardize or compromise user security, or the security or functionality of the device, system or related systems.  

#### 1.2.1 Content Security Policies  

> [!NOTE]
> If you make any changes to your Extension beyond the described functionality, any changes to code must be compliant with the [Microsoft Edge content security policy][MicrosoftEdgeContentSecurityPolicyRemoteScript].  Example: Your Extension should not download a remote script and subsequently run that script in a manner that is not consistent with the described functionality.  

#### 1.2.2 Unwanted and Malicious Software  

Your Extension must not contain or enable malware as defined by the Microsoft criteria for [Unwanted and Malicious Software][MicrosoftIdentifiesMalwareUnwantedApplications].  

#### 1.2.3 Dependency on other software  

Your Extension may depend on non-integrated software \(such as another product, module, or service\) to deliver the primary functionality, provided you disclose the dependency in the description  

#### 1.2.4 Extensions Update  

Unless otherwise permitted by Microsoft, your Extensions must be updated only through Microsoft Edge Addons.  

### 1.3 Product is Testable  
The Extension must be testable.  If it is not possible to test your Extension for any reason, including, but not limited to, the items below, your Extension may fail this requirement.  

#### 1.3.1 User Credentials  
If your Extension requires login credentials, provide a working demo account using the **Notes for certification** field.  

#### 1.3.2 Availability of services  

If your Extension requires access to a server, the server must be functional to verify that it works correctly.  

### 1.4 Usability  

Your Extension must meet Extension Store standards for usability, including, but not limited to, those listed in the subsections below.  

#### 1.4.1 Compatibility across platforms  

Extensions should be compatible with Microsoft Edge on all the devices and platforms on which they may be downloaded.  If an Extension is downloaded on a device with which it is not compatible, it should detect that at launch and display a message to the user detailing the requirements that devices must meet in order to be compatible with your Extension.  

#### 1.4.2 User Experience  

The Extension must start up promptly and must stay responsive to user input.  Extensions must continue to run and remain responsive to user input.  Extensions must shut down gracefully and not close unexpectedly.  The Extension should handle exceptions and remain responsive to user input after the exception is handled.  

### 1.5 Personal Information  

The following requirements apply to Extensions that access Personal Information.  Personal Information includes all information or data that identifies or could be used to identify a person, or that is associated with such information or data.  

#### 1.5.1 Collect Personal Information only when necessary  

Your Extension may collect, access, use, or transmit Personal Information \(including web browsing activity\); only if required by and only for use in a prominently disclosed, user-facing feature.  

#### 1.5.2 Maintain a privacy policy  

Regardless of whether your Extension accesses, collects, or transmits Personal Information; you must provide prominent notice of and comply with your privacy policy if required by law.  Your privacy policy must inform users of the Personal Information accessed, collected, or transmitted by your Extension, how that information is used, stored, and secured, and indicate the types of parties to whom it is disclosed.  Your privacy policy must describe the controls that users have over the use and sharing of their information, how they access their information, and it must comply with applicable laws and regulations.  Your privacy policy must be kept up-to-date as you add new features and functionality to your Extension.  

If you provide Microsoft with your privacy policy, you agree to permit Microsoft to share such privacy policy with users of your Extension.  

#### 1.5.3 Sharing data with third parties  

You may publish the Personal Information of users of your Extension to an outside service or third-party through your Extension or associated metadata only after obtaining opt-in consent from those users.  Opt-in consent means the users give their express permission in the user interface of your Extension for the requested activity, after you:  

*   Describe to your users how the information is accessed, used or shared and indicate the types of parties to whom it is disclosed, and  
*   Provide your users a mechanism in the Extension user interface through which they have the option to later rescind the permission and opt-out.  

#### 1.5.4 Sharing information of non-Users  

If you publish a person’s Personal Information to an outside service or third-party through your Extension or the metadata, but the person whose information is being shared is not a user of your Extension;  

1.  You must obtain express written consent to publish that Personal Information.  
1.  You must permit the person whose information is shared to withdraw that consent at any time.  
1.  Your privacy policy must clearly disclose that you may collect personal information in this manner.  
1.  If required by applicable law you must delete the Personal Information of any individual upon request, including individuals whose information you collect in this manner.  
1.  If your Extension provides users with access to another person’s Personal Information, this requirement also applies.  

#### 1.5.5 Transmit information securely  

If your Extension collects, stores, or transmits Personal Information; it must do so securely by using modern cryptography methods.  

#### 1.5.6 Highly sensitive information  

Your Extension must not collect, store, or transmit highly sensitive personal information, such as health or financial data, unless the information is related to the functionality of your Extension.  Your Extension must also obtain express user consent before collecting, storing, or transmitting such information.  

### 1.6 Permissions  

Your Extension must only request those permissions that are necessary for functioning.  You must provide a description of how your Extension works.  Your Extension must only perform as described.  Your Extension may not request permission for capabilities that go beyond the capabilities required to perform and function as declared.  

### 1.7 Localization  

You should localize your Extension for all languages that the Extension claims to support.  The text of the description of your Extension should be localized in each language that you declare.  
If your Extension is localized such that some features are not available in a localized version, you must clearly state or display the limits of localization in the Extension description. The experience provided by an Extension must be reasonably similar in all languages that it supports.  

### 1.8 Financial Transactions  

If your product includes in-product purchase, subscriptions, virtual currency, billing functionality, or captures financial information; the requirements in the following sections apply.  

#### 1.8.1 Paid Features  

Your Extension may enable users to consume digital content or services purchased through a third-party purchase mechanism or API.  

You must use a secure third-party purchase API for purchases of physical goods or services.  You must use a secure third-party purchase API for payments made in connection with any other services including real world gambling or charitable contributions.  

*   If your Extension is used to facilitate or collect charitable contributions or to conduct a promotional sweepstakes or contest, you must do so in compliance with applicable law.  
*   You must also state clearly that Microsoft is not the fundraiser or sponsor of the promotion.  
*   In-product offerings sold in your Extension must not be converted to any legally valid currency \(such as USD, Euro, and so on\) or any physical goods or services.  

The following requirements apply to your use of a secure third-party purchase API:  

*   At the time of the transaction or when you collect any payment or financial information from the user; your Extension must identify the commerce transaction provider, authenticate the user, and obtain user confirmation for the transaction.  A commerce transaction provider maintains a secure platform for financial exchanges.  
*   Your Extension may offer users the ability to save this authentication, but users must have the ability to either require an authentication on every transaction or to turn off in-product transactions.  
*   If your Extension collects credit card information or uses a third-party payment processor that collects credit card information, the payment processing must meet the current PCI Data Security Standard \(PCI DSS\).  

#### 1.8.2 Disclosing paid features  

Your Extension and associated metadata must provide information about the types of in-product purchases offered and the range of prices.  You must not mislead users and must be clear about the nature of your in-product promotions and offerings including the scope and terms of any trial experiences.  If your Extension restricts access to user-created content during or after a trial, you must notify users in advance.  In addition, your Extension must make it clear to users that they are initiating a purchase option in the Extension.  

### 1.9 Notifications  

Your Extension must respect system settings for notifications.  This means any presentation of ads and notifications to users must be consistent with user preferences, regardless of whether the notifications are provided by the Microsoft Push Notification Service \(MPNS\), Windows Push Notification Service \(WNS\), or any other service.  If the user disables notifications, either on a product-specific or system-wide basis, your Extension must remain functional.  

If your product uses MPNS or WNS to transmit notifications, it must comply with the following requirements:  

#### 1.9.1 General Guidance  

Notifications provided through WNS or MPNS are considered product content and are subject to all Addons Catalog Developer Policies.  

#### 1.9.2 Ownership of notifications  

You must not obscure or try to disguise the source of any notification initiated from your Extension.  

#### 1.9.3 No Confidential or Sensitive Information  

You must not include in a notification any information users may reasonably consider confidential or sensitive.  

#### 1.9.4 Purpose of notifications  

Notifications sent from your Extension must relate to that Extension or to other Extensions you publish in Microsoft Edge Addons catalog and must not include promotional messages of any kind that are not related to your Extensions.  

### 1.10 Advertising Conduct and Content  

For all advertising related activities, the following requirements apply:  

#### 1.10.1 Purpose  

The primary content of your Extension must not be advertising, and advertising must be clearly distinguishable from other content in your Extension.  

#### 1.10.2 Policies and Agreements  

Any advertising content your Extension displays must adhere to [Microsoft Creative Acceptance Policy][MicrosoftAdvertisingCreativeAcceptancePolicies].  
If your Extension displays ads, all content displayed must conform to the advertising requirements of the [App Developer Agreement][MicrosoftAppDeveloperAgreement] and this Policy.  

#### 1.10.3 Quality of advertising  

*   The primary purpose of your Extension must not be to get users to click ads.  
*   Your Extension must not do anything that interferes with or diminishes the visibility, value, or quality of any ads that it does display.  

#### 1.10.4 Promotions  

If you purchase or create promotional ad campaigns to promote your Extensions through the ad campaign functionality in [Partner Center][MicrosoftPartnerCenter], all ad materials you provide to Microsoft, including any associated landing pages, must comply with [Microsoft Creative Specifications Policy][MicrosoftAdvertisingCreativeSpecifications] and [Microsoft Creative Acceptance Policy][MicrosoftAdvertisingCreativeAcceptancePolicies].  

#### 1.10.5 Notifying Users of Opt-Out for Interest-Based Advertising  

Your privacy statement or terms of use must let users know you plan to send Personal Information to the ad service provider and must tell users how they may opt-out of interest-based advertising.  

#### 1.10.6 Other guidelines  

If your Extension is directed at children under the age of 13, as defined in the [Children’s Online Privacy Protection Act][FTCChildrensPrivacy]; you must notify Microsoft of this fact in [Partner Center][MicrosoftPartnerCenter] and ensure that all ad content displayed in your Extension is appropriate for children under the age of 13.  

## 2 Content Policies  

The following policies apply to content and metadata \(including publisher name, Extension name, Extension icon, Extension description, Extension screenshots, Extension trailers and trailer thumbnails, and any other Extension metadata\) offered for distribution in Microsoft Edge Addons.  Content means the images, sounds, videos and text contained in the Extension, the tiles, notifications, error messages or ads exposed through your Extension, and anything delivered from a server or to which the Extension connects.  Because Extensions and Microsoft Edge Addons are used around the world, these requirements are interpreted and applied in the context of regional and cultural norms.  

### 2.1 Content Requirements for Microsoft Edge Addon Catalog Listing  

Metadata and other content you submit to accompany your Extension may not contain mature content.  
Submissions that do not meet Extension Store listings requirements are rejected or promptly removed.  

### 2.2 Content Including Names, Logos, Original, and Third-party  

All content in your Extension and associated metadata must be either originally created by the you or appropriately licensed from a third-party rights holder and must be used only as permitted by the rights holder or as otherwise permitted by law.  

### 2.3 Risk of Harm  

#### 2.3.1 Requirements  

Your Extension must not contain any content that facilitates or glamorizes the following real world activities: \(a\) extreme or gratuitous violence; \(b\) human rights violations; \(c\) the creation of illegal weapons; or \(d\) the use of weapons against a person, animal, or real or personal property.  

#### 2.3.2 Responsibility  

Your Extension must not: \(a\) pose a safety risk to, nor result in discomfort, injury or any other harm to end users or to any other person or animal; or \(b\) pose a risk of or result in damage to real or personal property.  You are solely responsible for all Extension safety testing, certificate acquisition, and implementation of any appropriate feature safeguards.  You must not disable any platform safety or comfort features and you must include all applicable legally required and industry-standard warnings, notices, and disclaimers in your Extension.  

### 2.4 Defamatory, Libelous, Slanderous, and Threatening  

Your Extension must not contain any content that is defamatory, libelous, slanderous, or threatening.  

### 2.5 Offensive Content  

Your Extension and associated metadata must not contain potentially sensitive or offensive content.  Content may be considered sensitive or offensive in certain countries/regions because of local laws or cultural norms.  In addition, your Extension and associated metadata must not contain content that advocates discrimination, hatred, or violence based on considerations of race, ethnicity, national origin, language, gender, age, disability, religion, sexual orientation, status as a veteran, or membership in any other social group.  

### 2.6 Alcohol, Tobacco, and Drugs  

Your Extension must not contain any content that facilitates or glamorizes excessive or irresponsible use of alcohol or tobacco products or drugs.  

### 2.7 Adult Content  

Your Extension must not contain or display content that a reasonable person would consider pornographic or sexually explicit.  

### 2.8 Prohibited Content, Services, and Activity  

Your Extension must adhere to the following conditions.  

*   Your Extension must not contain content or provide services that facilitate online gambling.  Online gambling includes but is not limited to online casinos, sports betting, lotteries, or games of skill that offer prizes of cash or other value.  
*   Your Extension must not provide unauthorized access to website content, such as by circumventing paywalls or login restrictions.  
*   Your Extension must not provide, encourage, or enable the unauthorized access, download, or streaming of copyrighted content or media.  
*   Your Extension must not mine cryptocurrency.  

### 2.9 Illegal Activity  

Your Extension must not contain content or functionality that encourages, facilitates or glamorizes illegal activity in the real world.  

### 2.10 Excessive Profanity and Inappropriate Content  

*   Your Extension must not contain excessive or gratuitous profanity.  
*   Your Extension must not contain or display content that a reasonable person considers obscene.  

### 2.11 Country/Region Specific Requirements  

Content that is offensive in any country/region to which your Extension is targeted is not allowed.  Content may be considered offensive in certain countries/regions because of local laws or cultural norms.  Examples of potentially offensive content in certain countries/regions include the following:  

**China**  

*   Prohibited sexual content  
*   Disputed territory or region references  
*   Providing or enabling access to content or services that are illegal under applicable local law  

### 2.12 Age Ratings  

#### 2.12.1 Mature Content  

When you submit your Extension to [Partner Center][MicrosoftPartnerCenter], you must indicate whether your Extension displays content that should be marked "Mature".  When determining the rating for your Extension, consider all the content in your app, including user generated content and ads, and to the content that your Extension links.  If you indicate that your Extension does not contain any "Mature" content, you are responsible for maintaining the accuracy of this rating.  Regardless of the rating given to your Extension, it must still adhere to all the content requirements of Microsoft Edge Addons Developer policies  

#### 2.12.2 Ratings Change  

If your Extension provides content \(such as user-generated, retail, or other web-based content\) that might be appropriate for a higher age rating than the assigned rating, you must require users to opt into receiving such content by using a content filter or by signing in with a pre-existing account.  

### 2.13 Videos  

If you submit a promotional video in the listing, it should follow all the content guidelines mentioned in this policy.  If you choose to provide a YouTube link, you must ensure that advertisements are disabled for the specific videos that you want to embed.  For more information about how ads are enabled and disabled on YouTube, see [https://support.google.com/youtube/answer/2531367?ref_topic=7072227][GoogleYoutubeAnswer2531367Topic7072227] and [https://support.google.com/youtube/answer/132596][GoogleYoutubeAnswer132596].  

<!-- image links -->  

<!-- links -->  

[MicrosoftEdgeContentSecurityPolicyRemoteScript]: csp.md#relaxing-the-default-policy "Relaxing the default policy - Content Security Policy \(CSP\) "  

[MicrosoftAppDeveloperAgreement]: /legal/windows/agreements/app-developer-agreement "App Developer Agreement | Microsoft Docs"  
[MicrosoftIdentifiesMalwareUnwantedApplications]: /windows/security/threat-protection/intelligence/criteria "How Microsoft identifies malware and potentially unwanted applications | Microsoft Docs"  

[GoogleYoutubeAnswer2531367Topic7072227]: https://support.google.com/youtube/answer/2531367?ref_topic=7072227 "Set your default ad formats - YouTube Help"  
[GoogleYoutubeAnswer132596]: https://support.google.com/youtube/answer/132596 "Ads on embedded videos - YouTube Help"  
[FTCChildrensPrivacy]: https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy "Children's Privacy - Federal Trade Commission"  

[MicrosoftAdvertisingCreativeAcceptancePolicies]: https://about.ads.microsoft.com/en-us/solutions/ad-products/display-advertising/creative-acceptance-policies "Creative acceptance policies - Microsoft Advertising"  
[MicrosoftAdvertisingCreativeSpecifications]: https://about.ads.microsoft.com/en-us/solutions/ad-products/display-advertising/creative-specs "Creative Specifications - Microsoft Advertising"  

[MicrosoftPartnerCenter]: https://partner.microsoft.com/dashboard/microsoftedge/public/login "Partner Center"  
