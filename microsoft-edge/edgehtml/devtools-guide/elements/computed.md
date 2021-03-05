---
description: Use the Computed pane to understand how your CSS cascades and computes on page elements
title: DevTools - Elements - Computed
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, elements, css, computed value, box model
ms.custom: seodec18
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# Computed

See a box model diagram (width, padding, border, margin and offset values) of the selected element. If you turn on the **Element highlighting** tool (`Ctrl+Shift+L`), the same colored regions in the diagram (for width, padding, etc.) that will overlay the rendered element when you select it on the page. You can edit any value in the diagram by clicking it. 

Below the box model diagram is a filterable and editable list of computed style properties. Turning off a currently active property activates the next property in the cascade, if one exists. You can view your changes in the [**Changes**](./changes.md) pane.

The **Display user styles only** button is on by default. Depressing the button will include styles from the *default stylesheet* of Microsoft Edge in the computed styles list.

![Computed pane](../media/elements_computed.png)
