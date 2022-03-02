---
title: Customize context menus in WebView2
description: How to add a right-click menu (context menu) to a WebView2 app.  Add and remove items from the default WebView2 context menus.  Create your own context-menu UI by using data that's passed from the WebView2 control to your app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 03/01/2022
---
# Customize context menus in WebView2

Use the **ContextMenuRequested** API to customize the context-menus (right-click menus) of a WebView2 app.

The WebView2 control provides a default context menu.

<!-- 
h2s/h3s are finalized.
todo:
*  fill in h2/h3 sections, including mention of 1 API item (C++ & C#)

*  In section "Example: Adding custom menu items to a default context menu", remove the C++ code that removes menu items.
*  In section "Example: Adding custom menu items to a default context menu", remove the C# code that removes menu items.

*  In section "Example: Removing menu items from a default context menu", remove the C++ code that adds menu items.
*  In section "Example: Removing menu items from a default context menu", remove the C# code that adds menu items.

*  Add C# code listing in section "Example: Disabling all context menus".

To pass review, this page must:
*  List the tasks (as h2's) that the API is used for.
*  List the key API items to use for each task (at least 1 API per h2|listing).
*  Provide a sample code listing for some of the tasks.
*  List the main API Ref type links & member links.
*  API links must include the summary sentence copied from API Ref.

[PR 1740: Added article "Add context menus to a WebView2 app"](https://github.com/MicrosoftDocs/edge-developer/pull/1740)
-->


<!-- ====================================================================== -->
## Adding a custom context menu

To add a custom right-click menu to a WebView2 app, containing menu items or commands, use the __ API.

In a custom context menu, your WebView2 app tells the WebView2 control when user selected a menu item, so WebView2 can execute the menu item command, such as **Cut** command.

Context menus use menu item IDs, so the host can pass the user selection to WebView2:

Define where to display the context menu, by using relative window position.

You can use the data provided in the Event arguments of `ContextMenuRequested` to display a custom context menu with entries of your choice.  For this case, you handle the event and request a deferral.

This deferred event should be completed at one of two possible times:

*  When the user selects a context menu item.  Either your app handles this case, or the app can return the selected option to the WebView2 control.

*  When the end user dismisses the context menu, such as by clicking outside of the context menu.


<!-- ------------------------------- -->
# [C++](#tab/cpp)

You can use the data provided in the Event arguments of [add_ContextMenuRequested](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental6#add_contextmenurequested) (C++) to display a custom context menu with entries of your choice.  For this case, you specify `Handled` to be `true` and request a deferral. 

* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_context_menu_item_kind) -  Specifies the menu item kind for the `ICoreWebView2ExperimentalContextMenuItem::get_Kind` method.  <!--probably like c#: Represents the active element that caused the context menu request.  For example, if there is a selection with multiple images, audio, and text, the element that the end user right-clicks within the selection will be the option represented by this enum. -->
   
* [COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND enum](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_context_menu_target_kind) - Kinds of context for which the context menu was created for the `ICoreWebView2ContextMenuTarget::get_Kind` method.

<!-- ------------------------------- -->
# [C#](#tab/csharp)

You can use the data provided in the Event arguments of  `CoreWebView2.ContextMenuRequested` (C#) to display a custom context menu with entries of your choice.  For this case, you specify `Handled` to be `true` and request a deferral. 

* **[CoreWebView2ContextMenuRequestedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)** - Event args for the `ContextMenuRequested` event.
   * [ContextMenuTarget Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget) - Gets the [CoreWebView2ContextMenuTarget Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget) instance that contains target information associated with the requested context menu, which includes the context selected and the appropriate data for the actions of a context menu.
   * [GetDeferral Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.getdeferral) - Returns a `CoreWebView2Deferral` object.
   * [SelectedCommandId Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid) - Gets or sets the selected command for the WebView to execute.  The value is obtained via the  [CoreWebView2ContextMenuItem.CommandId Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.commandid).

* **[CoreWebView2ContextMenuItemKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)** - Kinds of menu items for the Kind property.

* **[CoreWebView2ContextMenuTargetKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutargetkind)** - Kinds of context for which the context menu was created for the Kind property.  Represents the active element that caused the context menu request.  For example, if there is a selection with multiple images, audio, and text, the element that the end user right-clicks within the selection will be the option represented by this enum.

---


<!-- ====================================================================== -->
## Example: Adding a custom context menu

The following sample presents the WebView2 context menu in the Win32/WPF context menu format.



<!-- ------------------------------- -->
# [C++](#tab/cpp)



```cpp
m_webView2_4 = m_webView.try_query<ICoreWebView2_4>();
webview2_4->add_ContextMenuRequested(
    Callback<ICoreWebView2ContextMenuRequestedEventHandler>(
        [this](
            ICoreWebView2* sender,
            ICoreWebView2ContextMenuRequestedEventArgs* args)
        {
            auto showMenu = [this, args = 
            wil::com_ptr<ICoreWebView2ContextMenuRequestedEventArgs>(args)]
            {
                wil::com_ptr<ICoreWebView2ContextMenuItemCollection> items;
                CHECK_FAILURE(args->get_MenuItems(&items));
                CHECK_FAILURE(args->put_Handled(true));
                HMENU hPopupMenu = CHECK_POINTER(CreatePopupMenu());
                AddMenuItems(hPopupMenu, items);
                HWND hWnd;
                m_controller->get_ParentWindow(&hWnd);
                POINT locationInControlCoordinates;
                POINT locationInScreenCoordinates;
                CHECK_FAILURE(args->get_Location(&locationInControlCoordinates));
                // get_Location returns coordinates in relation to upper left Bounds
                // of the WebView2.Controller. Will need to convert to Screen 
                // coordinates to display the popup menu in the correct location.
                ConvertToScreenCoordinates(locationInControlCoordinates, 
                                           locationInScreenCoordinates);
                UINT32 selectedCommandId = TrackPopupMenu(
                                       hPopupMenu, 
                                       TPM_TOPALIGN | TPM_LEFTALIGN | TPM_RETURNCMD,
                                       locationInScreenCoordinates.x, 
                                       locationInScreenCoordinates.y, 
                                       0, 
                                       hWnd, 
                                       NULL);
                if (selectedCommandId != 0) {
                    CHECK_FAILURE(args->put_SelectedCommandId(selectedCommandId));
                }
            };
            wil::com_ptr<ICoreWebView2Deferral> deferral;
            CHECK_FAILURE(args->GetDeferral(&deferral));
            m_sampleWindow->RunAsync([deferral, showMenu]() {
                showMenu();
                CHECK_FAILURE(deferral->Complete());
            });
            return S_OK;
        }).Get(),
    &m_contextMenuRequestedToken);

void ContextMenu::AddMenuItems(
    HMENU hPopupMenu, wil::com_ptr<ICoreWebView2ContextMenuItemCollection> items)
    {
        wil::com_ptr<ICoreWebView2ContextMenuItem> current;
        UINT32 itemsCount;

        CHECK_FAILURE(items->get_Count(&itemsCount));
        for (UINT32 i = 0; i < itemsCount; i++)
        {
            CHECK_FAILURE(items->GetValueAtIndex(i, &current));
            COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND kind;
            CHECK_FAILURE(current->get_Kind(&kind));
            wil::unique_cotaskmem_string label;
            CHECK_FAILURE(current->get_Label(&label));
            std::wstring labelString = label.get();
            wil::unique_cotaskmem_string shortcut;
            CHECK_FAILURE(current->get_ShortcutKeyDescription(&shortcut));
            std::wstring shortcutString = shortcut.get();
            if (!shortcutString.empty())
            {
                labelString = labelString + L"\t" + shortcutString;
            }
            BOOL isEnabled;
            CHECK_FAILURE(current->get_IsEnabled(&isEnabled));
            BOOL isChecked;
            CHECK_FAILURE(current->get_IsChecked(&isChecked));
            INT32 commandId;
            CHECK_FAILURE(current->get_CommandId(&commandId));
            if (kind == COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR)
            {
                CHECK_BOOL(AppendMenu(hPopupMenu, MF_SEPARATOR, 0, nullptr));
            }
            else if (kind == COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU)
            {
                HMENU newMenu = CHECK_POINTER(CreateMenu());
                wil::com_ptr<ICoreWebView2ContextMenuItemCollection> submenuItems;
                CHECK_FAILURE(current->get_Children(&submenuItems));
                BOOL isEnabled;
                CHECK_FAILURE(current->get_IsEnabled(&isEnabled));
                if (isEnabled)
                {
                    AddMenuItems(newMenu, submenuItems);
                    CHECK_BOOL(AppendMenu(hPopupMenu,
                                          MF_POPUP, 
                                          (UINT_PTR)newMenu, 
                                          labelString.c_str()));
                }
                else
                {
                    CHECK_BOOL(AppendMenu(hPopupMenu, 
                                          MF_POPUP | MF_GRAYED, 
                                          (UINT_PTR)newMenu, 
                                          labelString.c_str()));
                }
            }
            else if (
                kind == COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX ||
                kind == COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO)
            {
                if (isEnabled)
                {
                    if (isChecked)
                    {
                        CHECK_BOOL(AppendMenu(hPopupMenu, 
                                              MF_CHECKED | MF_STRING, 
                                              commandId, 
                                              labelString.c_str()));
                    }
                    else
                    {
                        CHECK_BOOL(AppendMenu(hPopupMenu, 
                                              MF_BYPOSITION | MF_STRING,
                                              commandId, 
                                              labelString.c_str()));
                    }
                }
                else
                {
                    if (isChecked)
                    {
                        CHECK_BOOL(AppendMenu(hPopupMenu, 
                                              MF_CHECKED | MF_GRAYED | MF_STRING, 
                                              commandId, 
                                              labelString.c_str()));
                    }
                    else
                    {
                        CHECK_BOOL(AppendMenu(hPopupMenu, 
                                              MF_GRAYED | MF_STRING, 
                                              commandId, 
                                              labelString.c_str()));
                    }
                }
            }
            else if (kind == COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND)
            {
                if (isEnabled)
                {
                    CHECK_BOOL(AppendMenu(hPopupMenu,
                                          MF_BYPOSITION | MF_STRING, 
                                          commandId, 
                                          labelString.c_str()));
                }
                else
                {
                    CHECK_BOOL(AppendMenu(hPopupMenu, 
                                          MF_GRAYED | MF_STRING, 
                                          commandId, 
                                          labelString.c_str()));
                }
            }
        }
    }
```


<!-- ------------------------------- -->
# [C#](#tab/csharp)

```csharp
webView.CoreWebView2.ContextMenuRequested += delegate (object sender, 
                                    CoreWebView2ContextMenuRequestedEventArgs args)
{
    IList<CoreWebView2ContextMenuItem> menuList = args.MenuItems;
    CoreWebView2Deferral deferral = args.GetDeferral();
    args.Handled = true;
    ContextMenu cm = new ContextMenu();
    cm.Closed += (s, ex) => deferral.Complete();
    PopulateContextMenu(args, menuList, cm);
    cm.IsOpen = true;
};
void PopulateContextMenu(CoreWebView2ContextMenuRequestedEventArgs args, 
IList<CoreWebView2ContextMenuItem> menuList, ItemsControl cm)
{
    for (int i = 0; i < menuList.Count; i++)
    {
        CoreWebView2ContextMenuItem current = menuList[i];
        if (current.Kind == CoreWebView2ContextMenuItemKind.Separator)
        {
            Separator sep = new Separator();
            cm.Items.Add(sep);
            continue;
        }
        MenuItem newItem = new MenuItem();
        // The accessibility key is the key after the & in the label
        // Replace with '_' so it is underlined in the label
        newItem.Header = current.Label.Replace('&', '_');
        newItem.InputGestureText = current.ShortcutKeyDescription;
        newItem.IsEnabled = current.IsEnabled;
        if (current.Kind == CoreWebView2ContextMenuItemKind.Submenu)
        {
            PopulateContextMenu(args, current.Children, newItem);
        }
        else
        {
            if (current.Kind == CoreWebView2ContextMenuItemKind.CheckBox
            || current.Kind == CoreWebView2ContextMenuItemKind.Radio)
            {
                newItem.IsCheckable = true;
                newItem.IsChecked = current.IsChecked;
            }

            newItem.Click += (s, ex) =>
            {
                args.SelectedCommandId = current.CommandId;
            };
        }
        cm.Items.Add(newItem);
    }
}
```

---


<!-- ====================================================================== -->
## Adding menu items to a context menu


<!-- -------------------------------------------------- -->
### Adding default menu items to a custom context menu

Each menu item is of a specific kind:


<!-- ------------------------------- -->
# [C++](#tab/cpp)

* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_context_menu_item_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`


<!-- ------------------------------- -->
# [C#](#tab/csharp)

1. On a `CoreWebView2.ContextMenuRequested` event, add an event listener that has a `CoreWebView2ContextMenuRequestedEventArgs`.


Iterate through an IList of `CoreWebView2ContextMenuItem` items, adding a `CoreWebView2ContextMenuItem` for each menu item.  Test the `.KIND of each menu item (separator, )

* [CoreWebView2ContextMenuItemKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)
   * `CoreWebView2ContextMenuItemKind.CheckBox`
   * `CoreWebView2ContextMenuItemKind.Command`
   * `CoreWebView2ContextMenuItemKind.Radio`
   * `CoreWebView2ContextMenuItemKind.Separator`
   * `CoreWebView2ContextMenuItemKind.Submenu`

---


<!-- -------------------------------------------------- -->
### Adding custom menu items to a default context menu

You can add custom menu items to the default context menu.

<!-- cpp or cs? -->
* For C++: `ContextMenuRequested(id, position, list of ContextMenuItems)` method

* For C#: `CoreWebView2.ContextMenuRequested` event


<!-- ====================================================================== -->
## Example: Adding custom menu items to a default context menu


<!-- ------------------------------- -->
# [C++](#tab/cpp)

```cpp
m_webView2_4 = m_webView.try_query<ICoreWebView2_4>();
webview2_4->add_ContextMenuRequested(
    Callback<ICoreWebView2ContextMenuRequestedEventHandler>(
        [this](
            ICoreWebView2* sender,
            ICoreWebView2ContextMenuRequestedEventArgs* args)
        {
            wil::com_ptr<ICoreWebView2ContextMenuItemCollection> items;
            CHECK_FAILURE(args->get_MenuItems(&items));
            UINT32 itemsCount;
            CHECK_FAILURE(items->get_Count(&itemsCount));
            // Adding a custom context menu item for the page that will display the page's URI.
            wil::com_ptr<ICoreWebView2Environment5> webviewEnvironment;
            CHECK_FAILURE(m_appWindow->GetWebViewEnvironment()->QueryInterface(
                IID_PPV_ARGS(&webviewEnvironment)));
            wil::com_ptr<ICoreWebView2ContextMenuItem> newMenuItem;
            CHECK_FAILURE(webviewEnvironment->CreateContextMenuItem(
                    L"Display page Uri", 
                    nullptr, 
                    COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND, &newMenuItem));
            newMenuItem->add_CustomItemSelected(
                        Callback<ICoreWebView2CustomItemSelectedEventHandler>(
                [this, info](
                    ICoreWebView2* sender,
                    IUnknown* args)
                    {
                        wil::unique_cotaskmem_string pageUri;
                        CHECK_FAILURE(info->get_PageUri(&pageUri));
                        std::wstring pageString = pageUri.get();
                        m_appWindow->RunAsync([this, pageString]()
                        {
                            MessageBox(
                                m_appWindow->GetMainWindow(), pageString.c_str(),
                                L"Display Page Uri", MB_OK);
                        });
                        return S_OK;
                    })
                    .Get(),
                nullptr);
            CHECK_FAILURE(items->InsertValueAtIndex(itemsCount, newMenuItem.get()));
            return S_OK;
        })
        .Get(),
    &m_contextMenuRequestedToken);
```


<!-- ------------------------------- -->
# [C#](#tab/csharp)

```csharp
webView.CoreWebView2.ContextMenuRequested += delegate (object sender, 
                                    CoreWebView2ContextMenuRequestedEventArgs args)
{
    // add new item to end of collection
    CoreWebView2ContextMenuItem newItem = 
                        webView.CoreWebView2.Environment.CreateContextMenuItem(
        "Display Page Uri", null, CoreWebView2ContextMenuItemKind.Command);
        newItem.CustomItemSelected += delegate (object send, Object ex)
        {
            string pageUri = args.ContextMenuTarget.PageUri;
            System.Threading.SynchronizationContext.Current.Post((_) =>
            {
                MessageBox.Show(pageUri, "Page Uri", MessageBoxButton.OK);
            }, null);
        }
    menuList.Insert(menuList.Count, newItem);
};
``` 

---


<!-- ====================================================================== -->
## Removing menu items from a default context menu

You can remove default or custom menu items from the default context menu.


<!-- ====================================================================== -->
## Example: Removing menu items from a default context menu


You can add or remove entries to the default WebView context menu.  For this case, you specify `Handled` to be false.  You can add or remove items from the collection of context menu items.

<!-- 
evidently can do these scenarios - which are covered here?
(Add default menu items on the default context menu) (wording makes sense?)  ("menu items" might better reflect the API usage than "a menu item")
Add custom menu items on the default context menu
Remove default menu items from the default context menu
Remove custom menu items from the default context menu
-->

<!-- ------------------------------- -->
# [C++](#tab/cpp)

```cpp
m_webView2_4 = m_webView.try_query<ICoreWebView2_4>();
webview2_4->add_ContextMenuRequested(
    Callback<ICoreWebView2ContextMenuRequestedEventHandler>(
        [this](
            ICoreWebView2* sender,
            ICoreWebView2ContextMenuRequestedEventArgs* args)
        {
            wil::com_ptr<ICoreWebView2ContextMenuItemCollection> items;
            CHECK_FAILURE(args->get_MenuItems(&items));
            wil::com_ptr<ICoreWebView2ContextMenuTarget> target;
            CHECK_FAILURE(args->get_ContextMenuTarget(&target));
            COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND context_kind;
            CHECK_FAILURE(target->get_Kind(&context_kind));
            UINT32 itemsCount;
            CHECK_FAILURE(items->get_Count(&itemsCount));
            // Removing the 'Save image as' context menu item for image context selections.
            if (context_kind == COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_IMAGE)
            {
                wil::com_ptr<ICoreWebView2ContextMenuItem> current;
                for(UINT32 i = 0; i < itemsCount; i++) 
                {
                    CHECK_FAILURE(items->GetValueAtIndex(i, &current));
                    wil::unique_cotaskmem_string name;
                    CHECK_FAILURE(current->get_Name(&name));
                    if (wcsmp(name.get(), L"saveImageAs") == 0)
                    {
                        CHECK_FAILURE(items->RemoveValueAtIndex(i));
                        break;
                    }
                }
            return S_OK;
        })
        .Get(),
    &m_contextMenuRequestedToken);
```


<!-- ------------------------------- -->
# [C#](#tab/csharp)

```csharp
webView.CoreWebView2.ContextMenuRequested += delegate (object sender, 
                                    CoreWebView2ContextMenuRequestedEventArgs args)
{
    IList<CoreWebView2ContextMenuItem> menuList = args.MenuItems;
    CoreWebView2ContextMenuTargetKind context = args.ContextMenuTarget.Kind;
    if (context == CoreWebView2ContextMenuTargetKind.Image)
    {
        for (int index = 0; index < menuList.Count; index++)
        {
            if (menuList[index].Name == "saveImageAs")
            {
                menuList.RemoveAt(index);
                break;
            }
        }
    }
};
``` 

---


<!-- ====================================================================== -->
## Detecting when the user requests a context menu

This section explains how to detect when the user requests opening a context menu.

<!-- applies to custom & default -->

When a user requests opening a context menu (such as by right-clicking), your app needs to listen for the [CoreWebView2.ContextMenuRequested](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested) event.

When you detect this event, do some combination of the following:

*  Add custom menu items to the default context menu.

*  Remove custom menu items from the default context menu.

*  Open a custom context menu.

The `CoreWebView2.ContextMenuRequested` event indicates that the user requested opening a context menu.

The WebView2 control raises this event to indicate that the user requested opening a context menu in the WebView2 control, such as by right-clicking.

The WebView2 control only raises the `CoreWebView2.ContextMenuRequested` event if the current webpage allows the context menu to appear; that is, if the `AreDefaultContextMenusEnabled` property is `true`.


* [CoreWebView2.ContextMenuRequested Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)



The following information is sent when the user selects a custom menu item on a context menu.

When your app indicates to WebView2 that a user selected a menu item on a context menu, WebView2 sends the following items to your app:

*  An ordered **list of `ContextMenuItem` objects** to populate the custom context menu.  The ordered list includes the following:
   *  The internal **name** of the menu item.
   *  The UI **label** of the menu item, displayed to the user in the UI.
   *  The **kind** of menu item.
   *  A keyboard **shortcut Description**, if any, such as **Alt+C**.
   *  Any other properties of the custom menu item.

*  The **coordinates** where the context menu was requested, so your app can detect what UI item the user right-clicked.  The coordinates are defined in relation to the upper left corner of the WebView2 control.  <!-- control bounds. -->

*  A **selection object** that will include the kind of context selected, (such as?,) and the appropriate context menu parameter data.  (what sort of param data - which piece of info that's sent, tells which menu item, from the ordered list of menu items, the user selected?)


<!-- ====================================================================== -->
## Detecting when the user selects a custom menu item

Your app can handle the user-selected menu item, or your app can return the menu item to the WebView2 control to handle the user-selected menu item.

Enumerate the menu item IDs and text.  (for what task?  check example code)

Raised when the user selects a custom menu item on a default or custom context menu.

The WebView2 control raises this event to indicate that the user selected a custom menu item that your app added to a context menu.

Listen for the `CoreWebView2CustomItemSelected` event.

If the user selects a custom menu item, the `CustomMenuItemSelected` event is raised on the context menu item object that was selected, in these cases:

*  The app adds custom menu items, but defers the context menu UI to the WebView platform.

*  The app adds custom menu items, shows custom UI, and sets the `SelectedCommandId` property to the ID of the custom menu item.


<!-- ====================================================================== -->
## Reporting a selected command menu item to WebView2

When the user selects a webvierw2 context menu command, the host app can optionall report that selection to WebView2 for handling.

A menu item could be a submenu or command or checkbox (see enum).


<!-- -------------------------------------------------- -->
### Custom menuitems

If your <!--host WebView2--> app reports a custom menu item as the selected command, then the `CustomMenuItemSelected` event will be fired for the custom menu item.
<!-- "app" implies the dev's host app. -->

<!-- 
HTTP server
WebView2 control instance
host app
-->


<!-- ====================================================================== -->
## Enabling the default context menu

You can use this API or the earlier API.


<!-- ====================================================================== -->
## Disabling all context menus


The `AreDefaultContextMenusEnabled` property controls whether any context menu can be opened.

To read the `AreDefaultContextMenusEnabled` property, call:


To set 

If the WebView2 `AreDefaultContextMenusEnabled` setting is set to `False`, that disables the default context menu, and the `CoreWebView2ContextMenuRequested` event won't be raised, such as when the user right-clicks.

* [ICoreWebView2Settings::get_AreDefaultContextMenusEnabled method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled) - disable default context menus
* [ICoreWebView2Settings::put_AreDefaultContextMenusEnabled method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)



You can use API for that, or you can use previous baseline API (it was just a property directly on WebView2.)
<!-- isn't this what the example demonstrates? -->


<!-- ====================================================================== -->
## Example: Disabling all context menus

<!-- sample copied from API Ref https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled -->

<!-- ------------------------------- -->
# [C++](#tab/cpp)

```cpp
BOOL allowContextMenus;
CHECK_FAILURE(m_settings->get_AreDefaultContextMenusEnabled(&allowContextMenus));
if (allowContextMenus)
{
    CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(FALSE));
    MessageBox(
        nullptr, L"Context menus will be disabled after the next navigation.",
        L"Settings change", MB_OK);
}
else
{
    CHECK_FAILURE(m_settings->put_AreDefaultContextMenusEnabled(TRUE));
    MessageBox(
        nullptr, L"Context menus will be enabled after the next navigation.",
        L"Settings change", MB_OK);
}
```


<!-- ------------------------------- -->
# [C#](#tab/csharp)

<!-- todo: copy sample from API Ref -->

The [sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/SampleApps/WebView2WpfBrowser) has similar code.  It's based on a setting property.
<!-- is it * [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled) -->

```csharp
// place code here
```

---


<!-- ====================================================================== -->
## API Reference overview


<!-- ------------------------------- -->
# [C++](#tab/cpp)

* **[ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)** - WebView2 enables you to host web content using the latest Microsoft Edge browser and web technology.
* **[ICoreWebView2_4](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4)** - A continuation of the ICoreWebView2_3 interface to support FrameCreated and DownloadStarting events.
* **[ICoreWebView2Experimental6](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental6)** - This interface is an extension of ICoreWebView2 that supports ContextMenuRequested event.
   * [add_ContextMenuRequested](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental6#add_contextmenurequested) - Add an event handler for the `ContextMenuRequested` event.
   * [remove_ContextMenuRequested](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental6#remove_contextmenurequested) - Remove an event handler previously added with add_ContextMenuRequested.

* **[ICoreWebView2ExperimentalContextMenuItem](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem)** - A context menu item of a context menu displayed by WebView.
   * [add_CustomItemSelected](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#add_customitemselected) - Add an event handler for the `CustomItemSelected` event.
   * [get_Children](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_children) - Gets the list of children menu items through a `ContextMenuItemCollection` if the kind is Submenu.
   * [get_CommandId](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_commandid) - Gets the Command ID for the `ContextMenuItem`.
   * [get_Icon](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_icon) - Gets the Icon for the `ContextMenuItem` in PNG, Bitmap or SVG formats in the form of an `IStream`.
   * [get_IsChecked](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_ischecked) - Gets the checked property of the `ContextMenuItem`, used if the kind is Check box or Radio.
   * [get_IsEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_isenabled) - Gets the enabled property of the `ContextMenuItem`.
   * [get_Kind](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_kind) - Gets the `ContextMenuItem` kind.
   * [get_Label](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_label) - Gets the localized label for the `ContextMenuItem`.
   * [get_Name](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_name) - Gets the unlocalized name for the `ContextMenuItem`.
   * [get_ShortcutKeyDescription](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#get_shortcutkeydescription) - Gets the localized keyboard shortcut for this `ContextMenuItem`.
   * [put_IsChecked](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#put_ischecked) - Sets the checked property of the `ContextMenuItem`.
   * [put_IsEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#put_isenabled) - Sets the enabled property of the `ContextMenuItem`.
   * [remove_CustomItemSelected](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#remove_customitemselected) - Remove an event handler previously added with `add_CustomItemSelected`.
   
* **[ICoreWebView2ExperimentalContextMenuItemCollection](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection)** - A collection of `ContextMenuItem` objects.
   * [get_Count](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection#get_count) - Gets the number of `ContextMenuItem` objects contained in the `ContextMenuItemCollection`.
   * [GetValueAtIndex](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection#getvalueatindex) - Gets the `ContextMenuItem` at the specified index.
   * [InsertValueAtIndex](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection#insertvalueatindex) - Inserts the `ContextMenuItem` at the specified index.
   * [RemoveValueAtIndex](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection#removevalueatindex) - Removes the `ContextMenuItem` at the specified index.
   
* **[ICoreWebView2ExperimentalContextMenuRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs)** - Event args for the `ContextMenuRequested` event.
   * [get_Handled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#get_handled) - Gets whether the `ContextMenuRequested` event is handled by host.
   * [get_Location](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#get_location) - Gets the coordinates where the context menu request occurred in relation to the upper left corner of the WebView bound.
   * [get_MenuItems](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#get_menuitems) - Gets the collection of `ContextMenuItem` objects.
   * [get_SelectedCommandId](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#get_selectedcommandid) - Gets the selected `CommandId`.
   * [get_ContextMenuTarget](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#get_contextmenutarget) - Gets the target information associated with the requested context menu.
   * [GetDeferral](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#getdeferral) - Returns an `ICoreWebView2Deferral` object.
   * [put_Handled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#put_handled) - Sets whether the `ContextMenuRequested` event is handled by host after the event handler completes or if there is a deferral then after the deferral is completed.
   * [put_SelectedCommandId](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#put_selectedcommandid) - Sets the selected command for the WebView to execute.
   
* **[ICoreWebView2ExperimentalContextMenuRequestedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventhandler)** - Receives `ContextMenuRequested` events.
   * [Invoke](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventhandler#invoke) - Called to provide the event args when a context menu is requested on a WebView element.

* **[ICoreWebView2ExperimentalContextMenuTarget](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenutarget)** - Information about the context menu target.
   * [get_kind](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenutarget#get_kind) - Gets the kind of context that the user selected.

* **[ICoreWebView2ExperimentalCustomItemSelectedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcustomitemselectedeventhandler)** - Raised to notify the host that the end user selected a custom `ContextMenuItem`.

* **[ICoreWebView2Deferral](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2deferral)** - Used to complete deferrals on event args that support getting deferrals using the `GetDeferral` method.
   * [Complete](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2deferral#complete) - Completes the associated deferred event.

* **[ICoreWebView2Environment](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment)** - Represents the WebView2 Environment.
   * [CreateContextMenuItem](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment6#createcontextmenuitem) - Creates a `ContextMenuItem` object to insert into the WebView context menu.

* **[ICoreWebView2Settings](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings)** - Defines properties that enable, disable, or modify WebView features.
   * [get_AreDefaultContextMenusEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)** - Gets the `AreDefaultContextMenusEnabled` property, which is used to prevent default context menus from being shown to user in WebView.
   * [put_AreDefaultContextMenusEnabled](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled) - Sets the `AreDefaultContextMenusEnabled` property.
   
* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_context_menu_item_kind) -  Specifies the menu item kind for the `ICoreWebView2ExperimentalContextMenuItem::get_Kind` method.  <!--probably like c#: Represents the active element that caused the context menu request.  For example, if there is a selection with multiple images, audio, and text, the element that the end user right-clicks within the selection will be the option represented by this enum. -->
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`
   
* [COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND enum](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller4#corewebview2_context_menu_target_kind) - Kinds of context for which the context menu was created for the `ICoreWebView2ContextMenuTarget::get_Kind` method.
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_IMAGE`
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_PAGE`


<!-- ------------------------------- -->
# [C#](#tab/csharp)

* **[WebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.webview2)** - A control to embed web content in a WPF application.
   * [ContextMenu Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.webview2.contextmenu) - A context menu on a WebView2 instance.

* **[CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)** - Hosts web content using Microsoft Edge browser and web technology.
   * [ContextMenuRequested Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested) - Raised when a context menu is requested by the user and the content inside WebView hasn't disabled context menus.

* **[CoreWebView2ContextMenuItem Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)** - A context menu item of a context menu.
   * [CommandId Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.commandid) - Gets the Command ID for the `CoreWebView2ContextMenuItem`.
   * [CustomItemSelected Event](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.customitemselected) - Raised when the user selects this `CoreWebView2ContextMenuItem`.
   * [Kind Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.kind) - Gets the kind of `CoreWebView2ContextMenuItem` as `CoreWebView2ContextMenuItemKind`.

* **[CoreWebView2ContextMenuItemKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)** - Kinds of menu items for the Kind property.
   * `CheckBox`
   * `Command`
   * `Radio`
   * `Separator`
   * `Submenu`

* **[CoreWebView2ContextMenuRequestedEventArgs Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)** - Event args for the `ContextMenuRequested` event.
   * [ContextMenuTarget Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget) - Gets the [CoreWebView2ContextMenuTarget Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget) instance that contains target information associated with the requested context menu, which includes the context selected and the appropriate data for the actions of a context menu.
   * [GetDeferral Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.getdeferral) - Returns a `CoreWebView2Deferral` object.
   * [SelectedCommandId Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid) - Gets or sets the selected command for the WebView to execute.  The value is obtained via the  [CoreWebView2ContextMenuItem.CommandId Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.commandid).

* **[CoreWebView2ContextMenuTargetKind Enum](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutargetkind)** - Kinds of context for which the context menu was created for the Kind property.  Represents the active element that caused the context menu request.  For example, if there is a selection with multiple images, audio, and text, the element that the end user right-clicks within the selection will be the option represented by this enum.
   * `Image`
   * `Page`

* **[CoreWebView2Deferral Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2deferral)** - Used to complete deferrals on event args that support getting deferrals using the GetDeferral method.  Implements `IDisposable`.

* **[CoreWebView2Environment Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment)** - The WebView2 Environment.
   * [CreateContextMenuItem Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcontextmenuitem) - Creates a `CoreWebView2ContextMenuItem` object to insert into the WebView context menu.

* **[CoreWebView2Settings Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings)** - Properties that enable, disable, or modify WebView features.
   * [AreDefaultContextMenusEnabled Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled) - Determines whether the default context menus are shown to the user in WebView.


---


<!-- ====================================================================== -->
## See also

* [Spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ContextMenuRequested.md)

<!-- tab headings: 
# [C++](#tab/cpp)
# [C#](#tab/csharp)
---
-->
