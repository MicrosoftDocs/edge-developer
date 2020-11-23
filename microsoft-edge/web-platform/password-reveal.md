---
description: This page provides guidance on controlling the display of the password reveal button
title: Customizing the password reveal button
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/17/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, compatibility, web platform, password reveal, eye icon
---
# Customizing the password reveal button

The `password` input type in Microsoft Edge includes a “password reveal” button. This control enables users to verify they entered their password correctly in the password field. Once the user has entered text in the field, they may tap/click the button or press `Alt+F8` to toggle visibility of their input:

![A password field with dots hiding entered characters. An icon shaped like an eye is displayed within the right-hand side of the field.](../media/web-platform/password-reveal/password-eye.png)

_The password reveal button appears upon text entry._

![The eye icon in the same password field now has a stroke through it, and the characters are revealed.](../media/web-platform/password-reveal/password-toggled.png)

_Invoking the button turns the obfuscated dots into whatever the user typed into the field._

By default, the password reveal button is inserted into the Shadow DOM of all HTML inputs of `type="password"`. As of Microsoft Edge v87, users or [enterprises](https://docs.microsoft.com/deployedge/microsoft-edge-policies#passwordrevealenabled) may disable this feature globally. Web designers and developers should expect most Microsoft Edge users to have the default experience.

## Removing the browser’s password reveal control

Web developers can completely remove the browser’s password reveal control (e.g. in favor of their own) by targetting the `::-ms-reveal` pseudo element:

```
::-ms-reveal {
  display: none;
}
```

However, we recommend that most websites take advantage of the browser’s password reveal button, as the control’s behavior has important [security measures](#visibility-of-the-control) built in.

## Customizing control styling

Web developers can instead tweak the button’s styling so it better matches the website’s visual language. For example:

```
::-ms-reveal {
  border: 1px solid transparent;
  border-radius: 50%;
  box-shadow: 0 0 3px currentColor;
}
```

The following list describes some things to keep in mind when styling the password reveal button:

* The browser’s “eye” iconography is implemented as a background image. To add a background color to the button, use the CSS `background-color` property instead of the `background` shorthand property.
* Web developers may adjust the size and scale of the password reveal button, but the button will be clipped by the bounds of the password input control (if applicable).
* There are currently no state selectors available to style the toggled state of the button.


## Visibility of the control

While trying out the password reveal button, it may be helpful to understand when the button is displayed. The password reveal control is not available until the user enters text into the password field. Also, for added security:


* The button is removed if focus moves away from the password field.

* The button is removed if scripts modify the password field.
* If the button is removed at any point, the entire contents of the password field must be deleted before the button is displayed again. This feature prevents someone from making a minor adjustment in order to view the password.


The password reveal button is not available in fields which have been autofilled via the browser’s password manager.
