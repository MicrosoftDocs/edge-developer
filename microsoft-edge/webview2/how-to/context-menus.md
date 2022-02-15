---
title: Add a custom right-click menu to a WebView2 app
description: How to add a right-click menu (context menu) to a WebView2 app.  Add and remove items from the default WebView2 context menus.  Create your own context-menu UI by using data that's passed from the WebView2 control to your app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/14/2022
---
# Add a custom right-click menu to a WebView2 app

Use the **ContextMenuRequested** API to customize the context-menu (right-click menu) experience.  Using this API, you can:

*  Add and remove items from the default WebView2 context menus.

*  Create your own context-menu UI by using data that's passed from the WebView2 control to your app.

If you don't use this API, your options are limited to enabling or disabling the default WebView2 context menu.

<!-- Supports C++/Win32 and C#/.NET/WinRT. -->


<!-- ====================================================================== -->
## Event model

This API includes two events:

*  `CoreWebView2ContextMenuRequested` allows your app to listen to context menus being requested by the end user in the WebView2.  The `CoreWebView2ContextMenuRequested` event will only be raised if the current webpage allows the context menu to appear.

*  `CoreWebView2CustomItemSelected` notifies your app that one of its inserted context menu items was selected.

If the WebView2 `AreDefaultContextMenusEnabled` setting is set to `False`, this event will not be raised.

When your app indicates to WebView2 that a user selected a menuitem on a context menu, WebView2 sends the following items to your app:

*  An ordered list of `ContextMenuItem` objects to populate the context menu.  The ordered list includes the following:
   *  Name
   *  Label
   *  Kind
   *  Shortcut Desc
   *  other properties

*  The coordinates where the context menu was requested in relation to the upper left corner of the webview bounds.

*  A selection object that will include the kind of context selected, and the appropriate context menu parameter data.


Your app then can do a combination of the following:

*  Add or remove entries to the default context menu that's provided by the WebView2 control.

*  Use your own UI to display your custom context menu.  You can either handle the user-selected menuitem on your own, or return the menuitem to the WebView2 control.


If the user selects one of the menuitems that you inserted, the `CustomMenuItemSelected` event is raised on the context menu item object that was selected, in these cases:

*  The app adds custom menu items, but defers the context menu UI to the WebView platform.

*  The app adds custom menu items, shows custom UI, and sets the `SelectedCommandId` property to the ID of the custom menu item.


<!-- ====================================================================== -->
## Adding or removing menuitems on the default context menu

Adding and removing menu items

API for adding menuitems to (the default?) context menu:

confirm:
ContextMenuRequested(id, position, list of ContextMenuItems).<!--for custom?-->

# [C++](#tab/cpp)

```cpp
C++ method simplified signature
event
```

# [C#](#tab/csharp)

```csharp
C# method simplified signature
event
```

---

<!-- ====================================================================== -->
## Example: Add or remove entries from the default WebView2 menu

You can add or remove entries to the default WebView context menu.  For this case, you specify `Handled` to be false.  You can add or remove items from the collection of context menu items.


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
            }
            // Adding a custom context menu item for the page that will display the page's URI.
            else if (context_kind == COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_PAGE)
            {
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
            }
            return S_OK;
        })
        .Get(),
    &m_contextMenuRequestedToken);
```

Key APIs used in this example:

* [ICoreWebView2ContextMenuItem::add_CustomItemSelected](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#add_customitemselected)
<!-- = https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#add_customitemselected -->

* `add_ContextMenuRequested`
* `add_CustomItemSelected`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
* `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND`
* `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_IMAGE`
* `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_PAGE`
* `CreateContextMenuItem`
* `get_ContextMenuTarget`
* `get_Count`
* `get_Kind`
* `get_MenuItems`
* `get_Name`
* `get_PageUri`
* `GetMainWindow`
* `GetValueAtIndex`
* `GetWebViewEnvironment`
* `ICoreWebView`
* `ICoreWebView2`
* `ICoreWebView2_4`
* `ICoreWebView2ContextMenuItem`
* `ICoreWebView2ContextMenuItemCollection`
* `ICoreWebView2ContextMenuRequestedEventArgs`
* `ICoreWebView2ContextMenuRequestedEventHandler`
* `ICoreWebView2ContextMenuTarget`
* `ICoreWebView2CustomItemSelectedEventHandler`
* `ICoreWebView2Environment5`
* `InsertValueAtIndex`
* `RemoveValueAtIndex`
* `try_query`
 

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
    else if (context == CoreWebView2ContextMenuTargetKind.Page)
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
    }
};
``` 

Key APIs used in this example:

* `CoreWebView2.ContextMenuRequested`
* `CoreWebView2`
* `ContextMenuRequested`
* `CoreWebView2ContextMenuRequestedEventArgs`
* `CoreWebView2ContextMenuItem`
* `CoreWebView2ContextMenuTargetKind`
* `CoreWebView2ContextMenuTargetKind`
* `RemoveAt`
* `CoreWebView2ContextMenuTargetKind`
* `CoreWebView2ContextMenuItem`
* `CoreWebView2`
* `CreateContextMenuItem`
* `CoreWebView2ContextMenuItemKind`
* `CustomItemSelected`
* `ContextMenuTarget`
* `Insert`

---

<!-- ====================================================================== -->
## Drawing a custom context menu

To add a custom right-click menu to a WebView2 app, containing menuitems or commands, use the XYZ API.

In a custom context menu, your WebView2 app tells the WebView2 control when user selected a menuitem, so WebView2 can execute the Cut (eg) command.

Context menus use menuitem IDs, so Office can pass the user selection to WebView2:
API: (ContextMenuResult id, ContextMenuItem selection). -->


# [C++](#tab/cpp)

```cpp
C++ method simplified signature
event
```

# [C#](#tab/csharp)

```csharp
C# method simplified signature
event
```

---

<!-- Enumerating menu item IDs and text - not needed? -->

### Defining where to show the context menu, by using relative window position

# [C++](#tab/cpp)

```cpp
C++ method simplified signature
event
```

# [C#](#tab/csharp)

```csharp
C# method simplified signature
event
```

---

### Reporting the selected context menu menuitem to WebView2

# [C++](#tab/cpp)

```cpp
C++ method simplified signature
event
```

# [C#](#tab/csharp)

```csharp
C# method simplified signature
event
```

---


<!-- ====================================================================== -->
## Example: Use data to display a custom context menu

You can use the data provided in the Event arguments to display a custom context menu with entries of your choice.  For this case, you specify `Handled` to be `true` and request a deferral. 

Deferral of this event should be completed when the user selects a context menu item (either your app handles this case, or the app can return the selected option to the WebView2 control) or when the end user dismisses the context menu, such as by clicking outside of the context menu.


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

Key APIs used in this example:

<!-- shorten then link -->

* `add_ContextMenuRequested`
* `AppendMenu`
* `ContextMenu`
* `ConvertToScreenCoordinates`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
* `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`
* `CreateMenu`
* `CreatePopupMenu()`
* `get_Children`
* `get_CommandId`
* `get_Count`
* `get_IsChecked(&isChecked));`
* `get_IsEnabled`
* `get_Kind`
* `get_Label(&label));`
* `get_Location`
* `get_MenuItems`
* `get_ParentWindow`
* `get_ShortcutKeyDescription`
* `GetDeferral`
* `GetValueAtIndex`
* `ICoreWebView2`
* `ICoreWebView2_4`
* `ICoreWebView2ContextMenuItem`
* `ICoreWebView2ContextMenuItemCollection`
* `ICoreWebView2ContextMenuRequestedEventArgs`
* `ICoreWebView2ContextMenuRequestedEventHandler`
* `ICoreWebView2Deferral`
* `put_Handled`
* `put_SelectedCommandId`
* `showMenu();`
* `TPM_TOPALIGN | TPM_LEFTALIGN | TPM_RETURNCMD,`
* `TrackPopupMenu(`
* `try_query`
* `webview2_4`


<!-- ------------------------------- -->
# [C#](#tab/csharp)

```c#
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

Key APIs used in this example:

* `Add`
* `ContextMenu`
* `ContextMenuRequested`
* `CoreWebView2`
* `CoreWebView2ContextMenuItem`
* `CoreWebView2ContextMenuItemKind`
* `CoreWebView2ContextMenuRequestedEventArgs`
* `CoreWebView2Deferral`
* `GetDeferral`
* `Handled`
* `ItemsControl`
* `MenuItem`
* `PopulateContextMenu`
* `Separator`

---


<!-- ====================================================================== -->
## Disabling the WebView2 context menu

# [C++](#tab/cpp)

```cpp
C++ method simplified signature
event
```

# [C#](#tab/csharp)

```csharp
C# method simplified signature
event
```

---


<!-- ====================================================================== -->
## Example: Disabling the WebView2 context menu

# [C++](#tab/cpp)

<!-- todo: copy sample from API Ref -->

Key APIs used in this example:

# [C#](#tab/csharp)

<!-- todo: copy sample from API Ref -->

Key APIs used in this example:

---


<!-- ====================================================================== -->
## API Reference Links


# [C++](#tab/cpp)

Interfaces:

For custom context menus:
* [ICoreWebView2ContextMenuRequestedEventArgs::put_SelectedCommandId(INT32 value)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#put_selectedcommandid)
<!-- = https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs#put_selectedcommandid -->

For disabling the context menu:
* [ICoreWebView2Settings::get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)
<!-- = https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled -->

* [ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs)
<!-- * [ICoreWebView2ContextMenuRequestedEventArgs](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventargs) -->

* [ICoreWebView2ContextMenuRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventhandler)
<!-- * [ICoreWebView2ContextMenuRequestedEventHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenurequestedeventhandler) -->

* [ICoreWebView2ContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem)
<!-- * [ICoreWebView2ContextMenuItem](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem) -->

* [ICoreWebView2ContextMenuItemCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection)
<!-- * [ICoreWebView2ContextMenuItemCollection](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitemcollection) -->

Methods:

* [ICoreWebView2ContextMenuItem::add_CustomItemSelected](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#add_customitemselected)
<!-- * [ICoreWebView2ContextMenuItem::add_CustomItemSelected](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem#add_customitemselected) -->


# [C#](#tab/csharp)

Classes:

* [CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem -->

* [CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs -->

WinRT, needed?
* [CoreWebView2ContextMenuRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenurequestedeventargs)
<!-- = https://docs.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenurequestedeventargs -->

* [CoreWebView2ContextMenuTarget Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget -->

Methods:

<!-- extract from examples -->

For custom context menus:

* [CoreWebView2ContextMenuRequestedEventArgs.SelectedCommandId property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid -->

For disabling the context menu:

* [CoreWebView2Settings.AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled -->

Enums:

* [CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind -->

Events:

* [CoreWebView2.ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested -->

* [CoreWebView2ContextMenuItem.CustomItemSelected Event](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.customitemselected)
<!-- = https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.customitemselected -->

WinRT:
* [CoreWebView2ContextMenuItem.CustomItemSelected event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenuitem#customitemselected)
<!-- = https://docs.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2contextmenuitem#customitemselected -->

---

<!-- ====================================================================== -->
## See also

* [Spec](https://github.com/MicrosoftEdge/WebView2Feedback/blob/master/specs/ContextMenuRequested.md)
