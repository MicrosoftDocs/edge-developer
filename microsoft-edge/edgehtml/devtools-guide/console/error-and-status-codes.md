---
ms.assetid: 961ca575-6b93-4367-a72b-f3f02e5b9568
description: Reference to common Console codes and suggested fixes
title: DevTools - Console error and status codes
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, console codes
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Console error and status codes  

This reference helps you interpret error and status messages from the  DevTools [Console](../console.md).  Use the following table to look up codes by their prefix \(where "x" represents a 0&ndash;9 digit number\):

| Code prefix | Area | Description |  
|:--- | :--- |:--- |  
| [CSP143xx](#csp-codes) | Content Security Policy | Resources blocked by the use of a `Content-Security-Policy` HTTP header.  |  
| [CSS31xx](#css-codes) | Stylesheets | Errors related to *Web Open Font Format* \(WOFF\) and *Embedded OpenType* \(EOT\) font source and host server problems.  |  
| [HTML1112-1300](#html-codes) | HTML | Most of these are legacy codes specific to Microsoft Internet Explorer concepts such as *Document Mode* and *Compatibility View*.  |  
| [HTML1400-1532](#html5-parser-warnings) | HTML5 parsing | Validation warnings thrown by the HTML5 parser.  |  
| [HTTP](#http-codes) | Server errors and status | Codes returned from remote servers in response to HTTP requests.  |  
| [SCRIPT10xx](#javascript-syntax-errors) | JavaScript syntax errors | Occurs when the structure of one of your JavaScript statements violates one or more of the syntactic rules.  |  
| [SCRIPT50xx](#javascript-run-time-errors) | JavaScript runtime errors | Occurs when your script tries to perform an action that the system can't execute.  |  
| [SEC71xx](#security-codes) | Security | Reflects security conditions that Microsoft Edge enforces, such as *Mixed Content* and *Tracking Protection*.  |  
| [SVG560x](#svg-codes) | Scalable Vector Graphics |  Extensive SVG debugging not currently supported, but some console messages are provided for debugging purposes.  |  
| WebGL11_xxx | WebGL | Error messages from the WebGL context.  See also [GLSL errors](https://msdn.microsoft.com/library/dn611835.aspx).  |  
| [XML5xxx](#xml-codes) | XML | Errors in XML parsing and validation.  |  

## CSP codes  

Resources blocked by the use of a `Content-Security-Policy` HTTP header are reported through the  DevTools Console and optionally as a report back to the server.

| Code | Message | Description | Suggested fix |
|:--- |:--- |:--- |:--- |
| CSP14301 | "Failed parsing the \[policy type\] because \<the reason for canceling the operation\> -- policy will be ignored." | The security policy type specified \(for example, script-src, base-uri\) failed for the reason identified and will be ignored.  | Make sure you list all required resources of a specific type in a single directive.  For example, in `script-src https://host1.com; script-src https://host2.com`, the second directive will be ignored.  The following correctly specifies both origins as valid: `script-src https://host1.com https://host2.com`.  |
| CSP14302 | "Failed parsing source in \[policy type\] for directive \[directive type\] at \[source URL\] -- source will be ignored."                                                         | Most CSP directives require one or more content sources \(indicating a URL that content can be loaded from\).  This error points out a policy with a directive that contains a source URL that failed when parsing was tried.  | Check the content source \(most often a URL\) that's defined in the specified directive, which you can find in the specified policy type.  Correct or replace the source URL or remove the directive.  <br /> *\*Your policy should include a default-src policy directive, which is a fallback for other resource types when they don't have policies of their own.* |
| CSP14303 | "[Policy type] policy was empty." | The policy type \(for example, Content-Security-Policy in the HTTP header\) is empty.  | A quick reference for setting up a Content Security Policy can be found at [http://content-security-policy.com](http://content-security-policy.com).  |
| CSP14304 | "Unknown source \[source URL\] for directive \[directive type\] in \[policy type\] source will be ignored." | The sources for approved \(safe\) content in the directive identified are unknown and will be ignored.  | Check the content source identified \(often this is a URL\) to make sure it's correct.  |
| CSP14305 | "Unsupported source \[source URL\] for directive[directive type] in \[policy type\] source will be ignored." | The source \(URL, keyword, or data) listed in this directive is not supported and will be ignored.  | The source site's address may include an optional leading wildcard \(the asterisk character, `*`\).  For example, http://`*`.foo.com or mail.foo.com:*.  The hosts are space-delimited.  Sources may also be keywords \(none, self, unsafe-inline, and unsafe-eval are all supported\) or data \(data:URIs, mediastream:URIs\).  |
| CSP14306 | "No sources given for directive \[directive type\] for \[policy type\] -- this is equivalent to using 'none' and will prevent the downloading of all resources of this type." | Giving a directive and not listing any sources for safe content to access is the same as not allowing any resources of the type specified in the directive to be downloaded.  | A source can be one or more internet host names or IP addresses, as well as an optional URL scheme and/or port number.  |
| CSP14307 | "Source [source URL]was already provided for directive \[directive type\] for \[policy type\]." | A duplicate source \(URL, Keyword, or Data\) has been listed in this directive and will be ignored.  | Remove the duplicate source identified.  |
| CSP14308 | "Failed parsing directive in \[policy type\] at [directive name]." | The directive identified failed.  For guidance about how to write supported directives, see [http://content-security-policy.com](http://content-security-policy.com/).  | Directives must be separated by semicolons.  For example, if you have an application that loads all of its resources from a content delivery network \(for example, `https://cdn.example.net`\), and you know that you don't need framed content or any plug-ins,  your policy might look like: `Content-Security-Policy: default-src https://cdn.example.net; child-src 'none'; object-src 'none'.` *\*While directives are separated with semicolons, sources within a directive should only be separated with a space.* |
| CSP14309 | "Unknown directive in \[directive name\] in \[policy type\] -- directive will be ignored." | The directive set in the CSP policy is unknown and will be ignored.  | For a list of supported directives, see [http://content-security-policy.com](http://content-security-policy.com/).  |
| CSP14310 | "Unsupported directive [directive name] in \[policy type] -- directive will be ignored." | A directive was found during parsing in the policy type \(for example, the `Content-Security-policy-Report-Only` header field\) that's not supported and will be ignored.  For supported directives, see [http://content-security-policy.com](http://content-security-policy.com/).  | Remove the unsupported directive.  **NOTE**: Some directives are not supported in the \<meta\> element or in the `Content-Security-policy-Report-Only` header field.  |
| CSP14311 | "Directive \[directive name\] was already provided in \[policy type\] -- duplicate directive will be ignored." | A duplicate directive was found during parsing, the second directive and its source-expressions will be ignored.  | Remove the duplicate script.  |
| CSP14312 | "Resource violated directive[directive name] in [policy type]: [target uri].  Resource will be blocked." | In this example: "Resource violated directive 'script-src ms-appx: data: 'unsafe-eval' in Host Defined Policy: inline script.  Resource will be blocked." | An inline script \(target uri\) was blocked due to the directive `'script-src ms-appx: data: 'unsafe-eval'` in the 'host defined' policy.  <br /> Authors need to move all inline script and style out-of-line because the user agent can't determine whether an inline script was injected by an attacker.  Remove inline script and place it in an external file.  |
| CSP14313 | "Resource violated directive[directive name] in [policy type]: [target uri].  Resource will not be blocked due to policy being report-only." | A resource was identified that violates the directive specified in the `Content-Security-policy-Report-Only` header field.  Because it is in a `Report-Only` policy type, the resource will not be blocked.  | Move the directive into a Content-Security-policy header field if this resource should be blocked in order to protect your site.  |
| CSP14314 | "Failed to send policy violation report to [target destination uri] because [reason for canceling the operation]." | There was a problem with reporting a policy violation, the target destination where the report is designated to be sent and the reason for not sending it should be identified.  | The `report-uri` directive specifies a URL where a browser will send reports when a content security policy is violated.  *\*It can't be used in \<meta\> tags.* |
| CSP14315 | "Failed to enforce sandbox directive in [policy type] because [reason for canceling the operation]." | The sandbox directive failed for the reasons specified.  This directive places restrictions on actions the page can take instead of on resources that the page can load.  If the sandbox directive is present, the page is treated as though it was loaded inside an iframe.  It can prevent pop-ups and plug-ins and block script execution.  | Keep the sandbox value empty to keep all restrictions in place, or add values: `allow-forms`, `allow-same-origin`, `allow-scripts`, and `allow-top-navigation`.  *\*The sandbox directive is not supported in the \<meta\> element or in the `Content-Security-policy-Report-Only` header field.* |
| CSP14316 | "Script eval being allowed due to host override." | When either the `script-src` or `default-src` directive is included, inline script and `eval()` are disabled unless you specify `unsafe-inline` and `unsafe-eval`, respectively.  | `'unsafe-eval'` allows the use of `eval()` and similar methods for creating code from strings.  You must include the single quotes.  ***NOTE**: This is unsafe and can open your website to cross-site scripting vulnerabilities.* |
| CSP14317 | "Frame [source name] being allowed due to host override." | The source frame identified has been allowed because of an override set in the host CSP policy.  | A policy might contain a nonce-source expression, meaning that the source can be used on only one occasion and the server must generate a fresh value for the directive each time it transmits a policy.  Nonces override the restrictions in the directive in which they're present.  |

> [!NOTE]
> For websites in a user's trusted security zone, Microsoft Edge doesn't check the MIME type of a style sheet.  

## CSS codes  

These errors are in the CSS31xx format and are related to *Web Open Font Format* \(WOFF\) and *Embedded OpenType* \(EOT\) font source and host server problems.  

| Code | Message | Description | Suggested fix |
|:--- |:--- |:--- |:--- |
| CSS3111 | "@font-face encountered unknown error" | An unknown problem was encountered with the "Web Open Font Format \(WOFF\)", and "Embedded OpenType font \(EOT\)" of the Cascading Style Sheets \(CSS\) font.  | Check source of WOFF fonts.  Try alternate font face or source to see if you can reproduce the problem.  |
| CSS3112 | "@font-face failed WOFF integrity check" | The Web Open Font Format \(WOFF\) font might be corrupted, incomplete, or not the correct format.  | Check source of the fonts.  Try a known good font face or source to see if you can reproduce the problem.  |
| CSS3113 | "@font-face mismatch between document origin and EOT root string" | The font can't be used because the URL\(rootstring\) in the Embedded OpenType \(EOT\) font doesn't match the domain of the document using the font.  | The URL checksum in the EOT rootstring might be incorrect, indicating a corrupted or altered URL for the font.  Make sure the font is licensed or has permissions for the website where it's being used.  |
| CSS3114 | "@font-face failed OpenType embedding permission check.  Permission must be Installable." | The font-face doesn't have permissions to install with the current web page.  | Get the correct permission or licenses for embedding the font.  |
| CSS3115 | "@font-face unable to load invalid OpenType font." | The font-face is not valid for this use.  | Get the permission or licenses for the current and valid font-face.  |
| CSS3116 | "@font-face failed cross-origin request.  No Access-Control-Allow-Origin header." | The font might not be configured for cross-domain access.  | The font isn't served from the same origin as the document.  Make sure that the host serving the font allows the use of this font by using the "Access-Control-Allow-Origin" HTTP header.                        |
| CSS3117 | "@font-face failed cross-origin request.  Resource access is restricted." | The "Access-Control-Allow-Origin" header might not be configured correctly, or the font host might not allow this font to be used by your page.  | Make sure the resource has the correct permissions and a correctly configured HTTP response header that has cross-domain access origin on the host serving the fonts.  |
| CSS3118 | "Failed to create new stylesheet.  There are more than \[maximum\] stylesheets in the document." | Microsoft Edge has created more than 4095 stylesheet objects during the process of rendering your page.  | This might be an out-of-control JavaScript process or a build system error.  Reduce the number of stylesheet objects being generated.  |
| CSS3119 | "The media query -ms-view-state has been deprecated.  -ms-view-state media queries may be altered or unavailable for releases after Windows 8.1.  Instead, use max-width and min-width queries." | Your CSS contains an `-ms-view-state` media query.  | Use max-width and min-width.  |

## HTML codes

These codes are in the HTML1xxx format, such as HTML1115.  Many of these are legacy codes specific to Internet Explorer concepts such as *Document Mode* and *Compatibility View*  

| Code | Message | Description | Suggested fix |  
| :--- |:--- |:--- |:--- |  
| HTML1112 | "Codepage restart from \[encoding\] to  \[encoding\]" | A codepage was specified that differs from the server's codepage.  | Use the same codepage as the server to avoid this error.  |  
| HTML1113 | "Document mode restart from \[mode\] to \[mode\]" | The webpage requires a different document mode than the browser is currently set to.  | This message can occur when the user browses from another page, making it out of the developer's control.  |  
| HTML1114 | "Codepage \[encoding\] from \[domain\] overrides conflicting codepage \[encoding\] from \[domain\]" | The codepages specified in the HTTP \(from server\) and HTML \(in-page\) headers differ from each other.  | Change one so that they match.  |  
| HTML1115 | "X-UA-Compatible META tag \(`[META tag]`\) ignored because document mode is already finalized" | Typically the META tag was placed after a "Script" or "Style" declaration, which fixed the document mode for the page.  | Move the X-UA-Compatible META tag to as early in the header as possible.  It's a good practice to put it immediately after the \<title\> and charset value.  |  
| HTML1116 | "X-UA-Compatible META tag \(`[META tag]`\) ignored because of earlier X-UA-Compatible META tag \(`[META tag]`\)" | There is more than one "X-UA-Compatible" "META" tag in the \<head\> section of the source code.  | Remove all but one "X-UA-Compatible META" tag, and ensure it is as early in the header as possible.  A good practice is to put it immediately after the \<title\> and charset value.  |  
| HTML1121 | "Codepage \[encoding\] is not allowed, only codepage \[encoding\] is allowed." | Content in the webpage invoked a character encoding that's not allowed in this context.  | Make sure all content uses the allowed encoding that's specified in the message.  |  
| HTML1122 | "Internet Explorer is running in Enterprise Mode emulating IE8" | The page is currently being rendered in Enterprise Mode, which is an emulation of Windows Internet Explorer 8.  | This mode is configured by IT Management for specific sites.  If an individual user needs to turn it off on a web page, clear the Enterprise Mode option on the Tools menu.  For more about management of Enterprise Mode, see the [IT documentation](https://technet.microsoft.com/library/dn640687.aspx).  |  
| HTML1201 | "`[domain]` is a website you've added to Compatibility View." | The user has selected the **Compatibility View** button for the current website or added it through the **Compatibility View settings**.  | User-initiated.  |  
| HTML1202 | "`[domain]` is running in Compatibility View because "Display intranet sites in Compatibility View" is checked." | The user has selected the **Display intranet sites in Compatibility View** check box in **Compatibility View settings**.  | User needs to press Alt+T, select **Compatibility View settings**, and then clear the **Display intranet sites in Compatibility View** check box.  |  
| HTML1203 | "`[domain]` has been configured to run in Compatibility View through Group Policy." | The network administrator has specified that the webpage be run in Compatibility View.  | You need to contact the network administrator.  |  
| HTML1204 | "`[domain]` is running in Compatibility View because "Display all websites in Compatibility View" is checked." | The user has selected the **Display all websites in Compatibility View** check box in the **Compatibility View settings**.  | User needs to press Alt+T, select **Compatibility View settings**, and then clear the **Display all websites in Compatibility View** check box.  |  
| HTML1300 | "Navigation occurred" | A new page was navigated to, or the current page was refreshed.  | This is an informational message, not an error.  |  

## HTML5 parser warnings  

The following warnings can occur as part of the validation performed during HTML parsing.  These warnings don't necessarily mean a page is broken but that the provided HTML is invalid per the HTML5 standard.  Content created in compliance with earlier versions of the HTML or XHTML specifications might not be valid in HTML5, particularly with respect to the use of DOCTYPEs.

These warnings commonly indicate missing or additional characters and mismatched tags.  When you resolve these warnings, compatibility with older browsers and a web page's compliance with the HTML5 standard should improve.  To help identify the source of a warning, it includes line and character offset information, along with a link pointing to the location where the problem was found.

| Code     | Message |  
| :--- |:--- |  
| HTML1400 | "Unexpected character at start of numeric character reference.  Expected [0-9]." |  
| HTML1401 | "Unexpected character at start of hexadecimal numeric character reference.  Expect ed [0-9], [a-f], or [A-F]." |  
| HTML1402 | "Character reference is missing an ending semicolon ";"." |  
| HTML1403 | "Numeric character reference does not resolve to a valid character." |  
| HTML1404 | "Unrecognized named character reference." |  
| HTML1405 | "Invalid character: U+0000 NULL.  Null characters should not be used." |  
| HTML1406 | "Invalid tag start: \<\?.  Question marks should not start tags." |  
| HTML1407 | "Invalid tag name.  First character should match [a-zA-Z]." |  
| HTML1408 | "Invalid end tag \</\>.  End tags should not be empty." |  
| HTML1409 | "Invalid attribute name character.  Attribute names should not contain \(\"\), \(\'\), \(\<\), or \(=\)." |  
| HTML1410 | "Invalid unquoted attribute value.  Unquoted attribute values should not contain \(\"\), \(\'\), \(\<\), \(=\), or \(\`\)." |  
| HTML1411 | "Unexpected end of file." |  
| HTML1412 | "Malformed comment.  Comments should start with \<\!-- \>." |  
| HTML1413 | "Unexpected character: U+003E GREATER-THAN SIGN \(\>\)" |  
| HTML1414 | "Unexpected character: U+0021 EXCLAMATION MARK \(\!\)" |  
| HTML1415 | "Unexpected character: U+002D HYPHEN-MINUS \(-\)" |  
| HTML1416 | "Unexpected character in comment end.  Expected "--\>"." |  
| HTML1417 | "Empty DOCTYPE.  The shortest valid doctype is \<\!DOCTYPE html\>." |  
| HTML1418 | "Unexpected character in DOCTYPE." |  
| HTML1419 | "Unexpected keyword in DOCTYPE.  Expected "PUBLIC" or "SYSTEM"." |  
| HTML1420 | "Unexpected quote after "PUBLIC" or "SYSTEM" keyword.  Expected whitespace." |  
| HTML1421 | "Malformed end tag.  End tags should not contain attributes." |  
| HTML1422 | "Malformed start tag.  A self-closing slash should be followed by a U+003E GREATER-THAN SIGN \(\>\)." |  
| HTML1423 | "Malformed start tag.  Attributes should be separated by whitespace." |  
| HTML1424 | "Invalid character   " |  
| HTML1500 | "Tag cannot be self-closing.  Use an explicit closing tag." |  
| HTML1501 | "Unexpected end of file." |  
| HTML1502 | "Unexpected DOCTYPE.  Only one DOCTYPE is allowed and it must occur before any elements." |  
| HTML1503 | "Unexpected start tag." |  
| HTML1504 | "Unexpected end tag." |  
| HTML1505 | "Unexpected character token." |  
| HTML1506 | "Unexpected token." |  
| HTML1507 | "Unexpected character: U+0000 NULL.  Null characters should not be used." |  
| HTML1508 | "Unmatched end tag." |  
| HTML1509 | "Unmatched end tag." |  
| HTML1510 | "Required nodes not in scope." |  
| HTML1511 | "Unexpected head-level element encountered outside of \<head\>." |  
| HTML1512 | "Unmatched end tag." |  
| HTML1513 | "Extra \<html\> tag fond.  Only one \<html\> tag should exist per document." |  
| HTML1514 | "Extra \<body\> tag found.  Only one \<body\> tag should exist per document." |  
| HTML1515 | "Found \<frameset\> too far down in the document.  This tag should occur before a \<body\> is created." |  
| HTML1516 | "Invalid nesting.  A header tag such as \<h1\> or \<h2\> should not be placed within another header tag." |  
| HTML1517 | "Invalid nesting.  A \<form\> tag should not be placed within another \<form\>." |  
| HTML1518 | "Invalid nesting.  A \<button\> tag should not be placed within another \<button\>." |  
| HTML1519 | "Invalid nesting.  An \<a\> tag should not be placed within another \<a\>." |  
| HTML1520 | "Unexpected start tag: The \<isindex\> element is deprecated and should not be used." |  
| HTML1521 | "Unexpected \</body\> or end of file.  All open elements should be closed before the end of the document." |  
| HTML1522 | "Invalid end tag: \</br\>.  Use \<br\> or \<br /\> instead." |  
| HTML1523 | "Overlapping end tag.  Tags should be structured like \<b\>\<i\>\</i\>\</b\> instead of \<b\>\<i\>\</b\>\</i\>." |  
| HTML1524 | "Invalid DOCTYPE.  The shortest valid doctype is \<\!DOCTYPE html\>." |  
| HTML1525 | "Unexpected HTML tag found inside foreign content \(MathML/SVG\)." |  
| HTML1526 | "Invalid nesting.  A \<nobr\> tag should not be placed within another \<nobr\>." |  
| HTML1527 | "DOCTYPE expected.  The shortest valid doctype is \<\!DOCTYPE html\>." |  
| HTML1528 | "Unexpected \<image\> in HTML content.  Use \<img\> instead." |  
| HTML1529 | "Invalid xmlns:xlink attribute value.  The value must be "\<https://w3.org/1999/xlink\>"." |  
| HTML1530 | "Text found within a structural table element.  Table text may only be placed inside \<caption\>, \<td\>, or \<th\> elements." |  
| HTML1531 | "Invalid xmlns attribute value.  For SVG elements the value must be "\<https://w3.org/2000/svg/\>"." |  
| HTML1532 | "Invalid xmlns attribute value.  For MathML elements the value must be "\<https://w3.org/1998/Math/MathML/\>".  |  

## HTTP codes  

HTTP error codes are returned from remote servers in response to requests.  Probably the most familiar is HTTP404, which is returned whenever the server can't find the page or document specified in the Uniform Resource Identifier \(URI\).

| Code | Message | Description |  
| :--- |:--- |:--- |  
| HTTP400 | BAD REQUEST | The request couldn't be processed by the server because of invalid syntax.  |  
| HTTP401 | DENIED | The requested resource requires user authentication.  |  
| HTTP402 | PAYMENT REQUIRED | Not currently implemented in the HTTP protocol.  |  
| HTTP403 | FORBIDDEN | The server understood the request but is refusing to fulfill it.  |  
| HTTP404 | NOT FOUND | The server has not found anything matching the requested URI.  |  
| HTTP405 | BAD METHOD | The HTTP verb used is not allowed.  |  
| HTTP406 | NONE ACCEPTABLE | No responses acceptable to the client were found.  |  
| HTTP407 | PROXY AUTHENTICATION REQUIRED | Proxy authentication required.  |  
| HTTP408 | REQUEST TIMEOUT | The server timed out waiting for the request.  |  
| HTTP409 | CONFLICT | The request couldn't be completed because of a conflict with the current state of the resource.  |  
| HTTP410 | GONE | The requested resource is no longer available at the server, and no forwarding address is known.  |  
| HTTP411 | LENGTH REQUIRED | The server refuses to accept the request without a defined content length.  |  
| HTTP412 | PRECONDITION FAILED | The precondition given in one or more of the request header fields evaluated to false when it was tested on the server.  |  
| HTTP413 | PAYLOAD TOO LARGE | The server is refusing to process a request because the request entity is larger than the server is willing or able to process.  |  
| HTTP414 | URI TOO LONG | The server is refusing to service the request because the request URI is longer than the server is willing to interpret.  |  
| HTTP415 | UNSUPPORTED MEDIA TYPE | The server is refusing to service the request because the entity of the request is in a format that's unsupported by the requested resource for the requested method.  |  
| HTTP416 | REQUESTED RANGE NOT SATISFIABLE | The server can't provide the portion of the file the client has requested.  The portion may extend beyond the end of the file.  |  
| HTTP417 | EXPECTATION FAILED | The server can't meet the requirements of the Expect request-header field.  |  
| HTTP418 | IM A TEAPOT | The server is a teapot; it can't brew coffee.  |  
| HTTP419 | AUTHENTICATION TIMEOUT | The previously valid authentication has expired.  |  
| HTTP422 | UNPROCESSABLE ENTITY | The request was well-formed but could not be processed because of semantic errors.  |  
| HTTP423 | LOCKED | The resource being accessed is locked.  |  
| HTTP424 | FAILED DEPENDENCY | The request failed because of the failure of a previous request.  |  
| HTTP426 | UPGRADE REQUIRED | The client must switch to a different protocol.  |  
| HTTP428 | PRECONDITION REQUIRED | The origin server requires the request to be conditional.  |  
| HTTP429 | TOO MANY REQUESTS | The server is refusing to service the request because too many requests have been submitted by the client.  |  
| HTTP431 | REQUEST HEADER FIELDS TOO LARGE | The server is refusing to service the request because a header field, or all header fields collectively, are larger than the server is willing or able to process.  |  
| HTTP449 | RETRY WITH | The request should be retried after taking the appropriate action.  |  
| HTTP500 | SERVER ERROR | The server encountered an unexpected condition that prevented it from fulfilling the request.  |  
| HTTP501 | NOT SUPPORTED | The server doesn't support the functionality required to fulfill the request.  |  
| HTTP502 | BAD GATEWAY | The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in trying to fulfill the request.  |  
| HTTP503 | SERVICE UNAVAILABLE | The service is temporarily overloaded.  |  
| HTTP504 | GATEWAY TIMEOUT | The request timed out while waiting for a gateway.  |  
| HTTP505 | VERSION NOT SUPPORTED | The server doesn't support, or refuses to support, the HTTP protocol version that was used in the request message.  |  
| HTTP506 | VARIANT ALSO NEGOTIATES | Transparent content negotiation for the request resulted in circular references.  |  
| HTTP507 | INSUFFICIENT STORAGE | The server cannot store the representation needed to complete the request.  |  
| HTTP508 | LOOP DETECTED | The server detected an infinite loop while servicing the request.  |  
| HTTP510 | NOT EXTENDED | Further extensions to the request are required for the server to fulfill it.  |  
| HTTP511 | NETWORK AUTHENTICATION REQUIRED | The client must authenticate to gain network access.  |  

## JavaScript syntax errors  

JavaScript syntax errors occur when the structure of one of your statements violates one or more of the syntactic rules.  

| Error number | Description |  
| --- | --- |  
| 1019 | [Can't have 'break' outside of loop](/scripting/javascript/misc/can-t-have-break-outside-of-loop) |  
| 1020 | [Can't have 'continue' outside of loop](/scripting/javascript/misc/can-t-have-continue-outside-of-loop) |  
| 1030 | [Conditional compilation is turned off](/scripting/javascript/misc/conditional-compilation-is-turned-off) |  
| 1027 | ['default' can only appear once in a 'switch' statement](/scripting/javascript/misc/default-can-only-appear-once-in-a-switch-statement) |  
| 1005 | [Expected '\('](/scripting/javascript/misc/expected-left-parenthesis-javascript) |  
| 1006 | [Expected '\)'](/scripting/javascript/misc/expected-right-parenthesis-javascript) |  
| 1012 | [Expected '/'](/scripting/javascript/misc/expected-minus) |  
| 1003 | [Expected ':'](/scripting/javascript/misc/expected-colon) |  
| 1004 | [Expected ';'](/scripting/javascript/misc/expected-semicolon) |  
| 1032 | [Expected '@'](/scripting/javascript/misc/expected-at) |  
| 1029 | [Expected '@end'](/scripting/javascript/misc/expected-at-end) |  
| 1007 | [Expected '\]'](/scripting/javascript/misc/expected-right-square-bracket) |  
| 1008 | [Expected '{'](/scripting/javascript/misc/expected-left-curly-brace) |  
| 1009 | [Expected '}'](/scripting/javascript/misc/expected-right-curly-brace) |  
| 1011 | [Expected '='](/scripting/javascript/misc/expected-equal-javascript) |  
| 1033 | [Expected 'catch'](/scripting/javascript/misc/expected-catch) |  
| 1031 | [Expected constant](/scripting/javascript/misc/expected-constant) |  
| 1023 | [Expected hexadecimal digit](/scripting/javascript/misc/expected-hexadecimal-digit) |  
| 1010 | [Expected identifier](/scripting/javascript/misc/expected-identifier-javascript) |  
| 1028 | [Expected identifier, string or number](/scripting/javascript/misc/expected-identifier-string-or-number) |  
| 1024 | [Expected 'while'](/scripting/javascript/misc/expected-while) |  
| 1014 | [Invalid character](/scripting/javascript/misc/invalid-character-javascript) |  
| 1026 | [Label not found](/scripting/javascript/misc/label-not-found) |  
| 1025 | [Label redefined](/scripting/javascript/misc/label-redefined) |  
| 1018 | ['return' statement outside of function](/scripting/javascript/misc/return-statement-outside-of-function) |  
| 1002 | [Syntax error](/scripting/javascript/misc/syntax-error-javascript) |  
| 1035 | [Throw must be followed by an expression on the same source line](/scripting/javascript/misc/throw-must-be-followed-by-an-expression-on-the-same-source-line) |  
| 1016 | [Unterminated comment](/scripting/javascript/misc/unterminated-comment) |  
| 1015 | [Unterminated string constant](/scripting/javascript/misc/unterminated-string-constant-javascript) |  
  
### Script host errors  

The following errors pertain to the script host, but you may see them occasionally:  
  
| Error | HRESULT | Description |  
| ---| --- | --- |  
| SCRIPT_E_RECORDED | 0x86664004 | An error has been recorded and passed between script engine and host.  The host needs to pass the error code to the caller.  |  
| SCRIPT_E_REPORTED | 0x80020101 | Script engine has reported an unhandled exception to the host through IActiveScriptSite::OnScriptError.  The host can ignore this error.  |  
| SCRIPT_E_PROPAGATE | 0x8002010 | A script error that's being propagated to the caller might be in a different thread.  The host should pass the error code to the caller.  |  

## JavaScript run-time errors

JavaScript run-time errors occur when your script tries to perform an action that the system can't execute.  You might see run-time errors when variable expressions are being evaluated or when memory is being allocated.

| Error Number | Description |  
| --- | --- |  
| 5 | [Access is denied](/scripting/javascript/misc/access-is-denied) |  
| 438 | [Object doesn't support this property or method](/scripting/javascript/misc/object-doesn-t-support-this-property-or-method) |  
| 1001 | Out of memory |  

### Windows Runtime errors  

 If you're using Windows Runtime \(WinRT\) APIs, you might see JavaScript errors that have been converted from Windows Runtime HRESULTs.  Windows Runtime HRESULTs in the range of over 0x80070000 are converted to JavaScript errors by taking the hexadecimal value of the low bits and converting it to a decimal.  For example, the HRESULT 0x80070032 is converted to the decimal value 50, and the JavaScript error is SCRIPT50.  The HRESULT 0x80074005 is converted to the decimal value 16389, and the JavaScript error is SCRIPT16389.

| Error number | Description |  
| --- | --- |  
| 5029 | [Array length must be a finite positive integer](/scripting/javascript/misc/array-length-must-be-a-finite-positive-integer) |  
| 5030 | [Array length must be assigned a finite positive number](/scripting/javascript/misc/array-length-must-be-assigned-a-finite-positive-number) |  
| 5028 | [Array or arguments object expected](/scripting/javascript/misc/array-or-arguments-object-expected) |  
| 5010 | [Boolean expected](/scripting/javascript/misc/boolean-expected) |  
| 5003 | [Cannot assign to a function result](/scripting/javascript/misc/cannot-assign-to-a-function-result) |  
| 5000 | [Cannot assign to 'this'](/scripting/javascript/misc/cannot-assign-to-this) |  
| 5034 | [Circular reference in value argument not supported](/scripting/javascript/misc/circular-reference-in-value-argument-not-supported) |  
| 5006 | [Date object expected](/scripting/javascript/misc/date-object-expected) |  
| 5015 | [Enumerator object expected](/scripting/javascript/misc/enumerator-object-expected) |  
| 5022 | [Exception thrown and not caught](/scripting/javascript/misc/exception-thrown-and-not-caught) |  
| 5020 | [Expected ')' in regular expression](/scripting/javascript/misc/expected-right-parenthesis-in-regular-expression-javascript) |  
| 5019 | [Expected '&#93;' in regular expression](/scripting/javascript/misc/expected-right-square-bracket-in-regular-expression-javascript) |  
| 5023 | [Function does not have a valid prototype object](/scripting/javascript/misc/function-does-not-have-a-valid-prototype-object) |  
| 5002 | [Function expected](/scripting/javascript/misc/function-expected) |  
| 5008 | [Illegal assignment](/scripting/javascript/misc/illegal-assignment-javascript) |  
| 5021 | [Invalid range in character set](/scripting/javascript/misc/invalid-range-in-character-set-javascript) |  
| 5035 | [Invalid replacer argument](/scripting/javascript/misc/invalid-replacer-argument) |  
| 5014 | [JavaScript object expected](/scripting/javascript/misc/javascript-object-expected) |  
| 5001 | [Number expected](/scripting/javascript/misc/number-expected) |  
| 5007 | [Object expected](/scripting/javascript/misc/object-expected) |  
| 5012 | [Object member expected](/scripting/javascript/misc/object-member-expected) |  
| 5016 | [Regular Expression object expected](/scripting/javascript/misc/regular-expression-object-expected) |  
| 5005 | [String expected](/scripting/javascript/misc/string-expected) |  
| 5017 | [Syntax error in regular expression](/scripting/javascript/misc/syntax-error-in-regular-expression-javascript) |  
| 5026 | [The number of fractional digits is out of range](/scripting/javascript/misc/the-number-of-fractional-digits-is-out-of-range) |  
| 5027 | [The precision is out of range](/scripting/javascript/misc/the-precision-is-out-of-range) |  
| 5025 | [The URI to be decoded is not a valid encoding](/scripting/javascript/misc/the-uri-to-be-decoded-is-not-a-valid-encoding) |  
| 5024 | [The URI to be encoded contains an invalid character](/scripting/javascript/misc/the-uri-to-be-encoded-contains-an-invalid-character) |  
| 5009 | [Undefined identifier](/scripting/javascript/misc/undefined-identifier) |  
| 5018 | [Unexpected quantifier](/scripting/javascript/misc/unexpected-quantifier-javascript) |  
| 5013 | [VBArray expected](/scripting/javascript/misc/vbarray-expected) |  

## Security codes

Security error codes are in the `SEC7xxx` format, such as `SEC7113`.  These errors reflect security conditions that Microsoft Edge enforces, such as mixed content and tracking protection.

| Code | Message | Description | Suggested fix |  
| :--- |:--- |:--- |:--- |  
| SEC7111 | "HTTPS security is compromised by [name of resource]" | A Secure Hypertext Transfer Protocol \(HTTPS\) page has content from a non-secure source.  | Make sure all content in the page, including scripts, stylesheet objects, and images, are from HTTPS sources.  |  
| SEC7112 | "Script from [URL] was blocked due to mime type mismatch" | The HTTP response header for the JavaScript file specified by the URL has an "X-Content-Type-Options: nosniff" header, and doesn't have a recognized content type declaration.  | Update the server to send the correct content type for the JavaScript file \(such as text/javascript, application/javascript", for example\) in the HTTP response header.  For more info and a full list of content types, see [MIME-Handling changes in Internet Explorer](https://blogs.msdn.microsoft.com/ie/2010/10/26/mime-handling-changes-in-internet-explorer/).  |  
| SEC7113 | "CSS was ignored due to mime type mismatch" | An imported style sheet wasn't used because the wrong MIME type was in the HTTP header.  | Make sure the style sheet file is delivered with the correct HTTP response header, which includes a content type of text/css.  For more info, see [MIME-Handling changes in Internet Explorer](https://blogs.msdn.microsoft.com/ie/2010/10/26/mime-handling-changes-in-internet-explorer/).  |  
| SEC7114 | "A download in this page was blocked by Tracking Protection.[URL provided here]" | The user blocked a script or content by using tracking protection.  | None - user initiated.  |  
| SEC7115 | ":visited and :link styles can only differ by color.  Some styles were not applied to :visited." | More than one attribute, such as font or size, were changed by using the visited and link styles.  | Change only the color attribute.  |  
| SEC7116 | "Access Denied.  Failed to revoke cross-origin URL: [URL]." | A script that has a different site of origin than the blob tried to revoke a blob URL.  Because of blob origin policies, the attempt failed.  | Make sure that all blob URLs are revoked by using scripts from the same site of origin as the document that created the blob URL.  |  
| SEC7120 | "Origin [domain] not found in Access-Control-Allow-Origin header." | In the response to your XMLHttpRequest, the Access-Control-Allow-Origin header was returned with a value that doesn't contain or match your site's origin value.  | The resource is returning the right type of header codes but isn't allowing your site.  Contact the developer in charge of the resource and ask them to update their Access-Control-Allow-Origin header so that your site is allowed.  You can point them to [CORS for XHR in IE10](https://blogs.msdn.microsoft.com/ie/2012/02/09/cors-for-xhr-in-ie10/) for more info about CORS in response headers.  |  
| SEC7121 | "Wildcard in Access-Control-Allow-Origin not allowed when credentials flag is set to true." | The server is returning "Access-Control-Allow-Origin: *" in the headers, but this is not allowed when the `withCredentials` flag is set to **true** in the XMLHttpRequest.  | The server-side handler must be modified to return an Access-Control-Allow-Origin header that specifically allows your origin point on this type of request.  If you don't control the server-side handler, you'll have to talk to the developer who does.  |  
| SEC7122 | "Credentials flag was set to true, but Access-Control-Allow-Credentials was not present or was not set to "true." | An XMLHttpRequest was made using the `withCredentials` flag.  Either an Access-Control-Allow-Credentials header was not returned or it was returned with a value other than **true**.  | There might be an issue with your credentials or the server's response.  See the [XMLHttpRequest Level 2 specification](https://w3.org/TR/XMLHttpRequest2/) for info about credentialed requests.  |  
| SEC7123 | "Request header [header] was not present in the Access-Control-Allow-Headers list." | A custom header type was included in the request, but the response's Access-Control-Allow-Headers list didn't include it.  | Make sure the server allows custom headers and specifically allows the one being sent in the request.  |  
| SEC7124 | "Request method [method] was not present in the Access-Control-Allow-Methods list." | A request method, such as POST was used in the XMLHttpRequest, but the response returned an Access-Control-Allow-Methods header that didn't include it.  | Make sure the server allows this type of request method and that you're correctly using `withCredentials` if that method has restricted access.  |  
| SEC7125 | "XMLHttpRequest for [URL] caused a response headers parsing failure." | The response headers from the server couldn't be parsed, so the request failed.  | Use the [Network tool](https://msdn.microsoft.com/library/dn255004.aspx) to capture and inspect the response headers to make sure they meet [CORS specifications](https://w3.org/TR/cors/).  |  
| SEC7126 | "Redirects are not allowed for CORS preflight requests." | A redirect has been detected in the Origin header, and the User Agent won't follow redirects during a preflight.  | Use the [Network tool](https://msdn.microsoft.com/library/dn255004.aspx) to capture and inspect the request headers and make sure there's a single direct Origin.  |  
| SEC7127 | "Redirect was blocked for CORS request." | The path to the CORS resource contained a redirect that violated security rules.  | Make sure you have the most direct path to the CORS resource in your XMLHttpRequest.  |  
| SEC7128 | "Multiple Access-Control-Allow-Origin headers are not allowed for CORS response." | The response header contained multiple Access-Control-Allow-Origin headers.  | This is a server-side error.  The server should return a single Access-Control-Allow-Origin header.  Report this error to the developer in charge of the server-side resource.
| SEC7129 | "Multiple Access-Control-Allow-Credentials headers are not allowed for CORS response." | The response header contained multiple Access-Control-Allow-Credentials headers.  | This is a server-side error.  The server should return a single Access-Control-Allow-Credentials header.  Report this error to the developer in charge of the server-side resource.  |  
| SEC7130 | "Potential cross-site scripting detected in [URL].  The content has been modified by the XSS Filter." | The [XSS filter](https://msdn.microsoft.com/library/dd565647.aspx) detected potentially malicious content in the response from the resource and removed the offending content.  | Find out more about the [XSS filter](https://msdn.microsoft.com/library/dd565647.aspx).  |  
| SEC7131 | "Security of a sandboxed iframe is potentially compromised by allowing script and same origin access." | If the content in a sandboxed iframe comes from an untrusted or unsecured source, it could escape the sandbox when script and same origin access are both allowed.  | This is an informational warning message and should not affect functionality.  We recommended that you avoid combining these permissions unless you're sure of what will be run in the iframe.  |  
| SEC7132 | "The certificate protecting this web site uses weak cryptography" | The TLS security certificate used by this website uses weak cryptography | Update the server's TLS certificate |  

> [!NOTE]
> For websites in a user's trusted security zone, Microsoft Edge doesn't check the MIME type of a style sheet.

## SVG codes  

DevTools doesn't currently support extensive Scalable Vector Graphics \(SVG\) debugging, but some console messages are provided to help with debugging.

| Code | Message | Description | Suggested fix |  
| :--- |:--- |:--- |:--- |  
| SVG5601 | "SVG Path data has incorrect format and could not be completely parsed." | The SVG [Path](https://msdn.microsoft.com/library/ff972086.aspx) string isn't formatted correctly, or contains unrecognized commands.  | Check the format of the commands.  |  
| SVG5602 | "SVG Point list has incorrect format and could not be completely parsed." | The list of points used for an element, such as a [polyline](https://msdn.microsoft.com/library/ff972113.aspx), is formatted incorrectly.  | Make sure that points are complete and correctly formatted for the users coordinate system.  |  

## XML codes  

XML codes are in the form of XML5xxx, such as XML5603.  

| Code | Message |  
|:--- |:--- |  
| XML5001 | "Applying Integrated XSLT Handling." |  
| XML5601 | "MX_E_MX" |  
| XML5602 | "Unexpected end of input." |  
| XML5603 | "Unrecognized encoding." |  
| XML5604 | "Unable to switch the encoding." |  
| XML5605 | "Unrecognized input encoding signature." |  
| XML5606 | "WC_E_WC" |  
| XML5607 | "Whitespace expected." |  
| XML5608 | "Semicolon expected." |  
| XML5609 | "Expected ">"." |  
| XML5610 | "Quote character expected." |  
| XML5611 | "Expected "="." |  
| XML5612 | "The < character is not allowed in attributes values." |  
| XML5613 | "Hexadecimal digit expected." |  
| XML5614 | "Decimal digit expected." |  
| XML5615 | "Expected "["." |  
| XML5616 | "Expected "("." |  
| XML5617 | "Illegal XML character." |  
| XML5618 | "Illegal name character." |  
| XML5619 | "Incorrect document syntax." |  
| XML5620 | "Incorrect CDATA section syntax." |  
| XML5621 | "Incorrect comment syntax." |  
| XML5622 | "Incorrect conditional section syntax." |  
| XML5623 | "Incorrect ATTLIST declaration syntax." |  
| XML5624 | "Incorrect DOCTYPE declaration syntax." |  
| XML5625 | "Incorrect ELEMENT declaration syntax." |  
| XML5626 | "Incorrect ENTITY declaration syntax." |  
| XML5627 | "Incorrect NOTATION declaration syntax." |  
| XML5628 | "Expected "NDATA"." |  
| XML5629 | "Expected "PUBLIC"." |  
| XML5630 | "Expected "SYSTEM"." |  
| XML5631 | "Invalid name." |  
| XML5632 | "Only one root element is allowed." |  
| XML5633 | "End-tag name does not match the corresponding start-tag name." |  
| XML5634 | "An attribute with the same name already exists on this element." |  
| XML5635 | "An XML declaration is only allowed at the beginning of the file." |  
| XML5636 | "Leading "xml"." |  
| XML5637 | "Incorrect text declaration syntax." |  
| XML5638 | "Incorrect XML declaration syntax." |  
| XML5639 | "Incorrect encoding name syntax." |  
| XML5640 | "Incorrect public identifier syntax." |  
| XML5641 | "Parameter entity references are not allowed within markup declarations in an internal DTD subset." |  
| XML5642 | "The replacement text for parameter entity references used between markup declarations must itself contain a series of complete markup declarations." |  
| XML5643 | "A parsed entity must not contain a direct or indirect reference to itself." |  
| XML5644 | "The content of the specified entity is not well-formed." |  
| XML5645 | "The specified entity has not been declared." |  
| XML5646 | "Entity reference cannot contain the name of an unparsed entity." |  
| XML5647 | "Attribute values must not contain direct or indirect references to external entities." |  
| XML5648 | "Incorrect processing instruction syntax." |  
| XML5649 | "Incorrect system identifier syntax." |  
| XML5650 | "Expected a question mark \(\?\)." |  
| XML5651 | "The CDATA-section-close delimiter "]]>" must not be used in element content." |  
| XML5652 | "Not all chunks of data have been read." |  
| XML5653 | "DTD was found but is prohibited." |  
| XML5654 | "Found xml:space attribute with invalid value.  Valid values are "preserve" or "default"." |  
| XML5655 | "NC_E_NC" |  
| XML5656 | "Illegal qualified name character." |  
| XML5657 | "Multiple colons ":" must not occur in a qualified name." |  
| XML5658 | "A colon ":" must not occur in a name." |  
| XML5659 | "Declared prefix." |  
| XML5660 | "The specified prefix has not been declared." |  
| XML5661 | "Non-default namespace declarations must not have an empty URI." |  
| XML5662 | "The "xml" prefix is reserved and must have the URI "<https://w3.org/XML/1998/namespace/>"." |  
| XML5663 | "The "xmlns" prefix is reserved for use by XML." |  
| XML5664 | "The xml namespace URI \(\<https://w3.org/XML/1998/namespace/\>\) must only be assigned to the prefix "xml"." |  
| XML5665 | "The xmlns namespace URI \(\<https://w3.org/2000/xmlns/\>\) is reserved and must not be used." |  
| XML5666 | "SC_E_SC" |  
| XML5667 | "Exceeded maximum depth of nested elements." |  
| XML5668 | "Exceeded maximum number of entity expansions." |  
| XML5669 | "WR_E_WR" |  
| XML5670 | "WR_E_NONWHITESPACE: writer: specified string is not whitespace." |  
| XML5671 | "WR_E_NSPREFIXDECLARED: writer: namespace prefix is already declared with a different namespace." |  
| XML5672 | "WR_E_NSPREFIXWITHEMPTYNSURI: writer: cannot use prefix with empty namespace URI." |  
| XML5673 | "WR_E_DUPLICATEATTRIBUTE: writer: duplicate attribute." |  
| XML5674 | "WR_E_XMLNSPREFIXDECLARATION: writer: can not redefine the xmlns prefix." |  
| XML5675 | "WR_E_XMLPREFIXDECLARATION: writer: xml prefix must have the \<https://w3.org/XML/1998/namespace/\> URI." |  
| XML5676 | "WR_E_XMLURIDECLARATION: writer: xml namespace URI \(\<https://w3.org/XML/1998/namespace/\>\) must be assigned only to prefix "xml"." |  
| XML5677 | "WR_E_XMLNSURIDECLARATION: writer: xmlns namespace URI \(\<https://w3.org/2000/xmlns/\>\) is reserved and must not be used." |  
| XML5678 | "WR_E_NAMESPACEUNDECLARED: writer: namespace is not declared." |  
| XML5679 | "WR_E_INVALIDXMLSPACE: writer: invalid value of xml:space attribute \(allowed values are "default" and "preserve"\)." |  
| XML5680 | "WR_E_INVALIDACTION: writer: performing the requested action would result in invalid XML document." |  
| XML5681 | "WR_E_INVALIDSURROGATEPAIR: writer: input contains invalid or incomplete surrogate pair." |  
| XML5682 | "Unexpected character in character entity.  Expected a decimal digit." |  
| XML5683 | "Unexpected character in character entity.  Expected a hexadecimal digit." |  
| XML5684 | "The Unicode value of the specified character entity is invalid." |  
| XML5685 | "Invalid encoding." |  
| XML5686 | "Unspecified XML error." |  
