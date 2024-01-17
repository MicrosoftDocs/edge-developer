---
title: Customize context menus in WebView2
description: How to add a right-click menu (context menu) to a WebView2 app.  Add and remove items from the default WebView2 context menus.  Create your own context-menu UI by using data that's passed from the WebView2 control to your app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/27/2022
---
# Customize context menus in WebView2

The WebView2 control provides a default context menu, and you can create your own context menu when using a WebView2 control.  Use the **ContextMenuRequested** API to customize the context-menus (right-click menus) of a WebView2 app.  For example, you can do any of the following:

*  Add a custom context menu.

   Instead of using the default context menu, your host app can draw its own context menu by using the information that's sent from the WebView2 context menu.  Your app handles the `ContextMenuRequested` event.  You can use the data provided in the Event arguments of `ContextMenuRequested` to display a custom context menu with entries of your choice.  For this case, you handle the event and request a deferral.

   You can add default menu items and/or custom menu items to a custom context menu.

*  Add default menu items to a custom context menu.

*  Add custom menu items to a default context menu.

*  Remove default or custom menu items from the default context menu.

*  Disable context menus.


**Terminology:**

| Term | Definition |
|---|---|
| _menu item_ | A broad term.  Includes checkbox, command, radio button, separator, and submenu. |
| _command_ | A narrow term.  One of five types of menu item. |
| _context menu_ | Either a default context menu (right-click menu) belonging to the WebView2 control, or a custom context menu (right-click menu) belonging to your host app. |


<!-- ====================================================================== -->
## Adding a custom context menu

Instead of using the default context menu, your host app can draw its own context menu by using the information that's sent from the WebView2 context menu.  Your app handles the `ContextMenuRequested` event.  You can use the data provided in the Event arguments of `ContextMenuRequested` to display a custom context menu with entries of your choice.  For this case, you handle the event and request a deferral.

When the user selects a command from your custom context menu, your app needs to tell the WebView2 control which command the user selected, by using the `SelectedCommandId` property.

You can add default menu items and/or custom menu items to a custom context menu.


# [C#](#tab/csharp)

To display a custom context menu that contains your desired menu items, use the data provided in the `CoreWebView2ContextMenuRequestedEventArgs` of the `CoreWebView2` [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested).  For this case, you specify `Handled` to be `true`, and request a deferral. 

On a `CoreWebView2.ContextMenuRequested` event, add an event listener that has a `CoreWebView2ContextMenuRequestedEventArgs`.

The `MenuItems` property of `CoreWebView2ContextMenuRequestedEventArgs` provides the tree of the WebView2's context menu items for the right-clicked context.  To include WebView2 context menu items in your app's context menu, iterate through the `IList<CoreWebView2ContextMenuItem>`, adding a `CoreWebView2ContextMenuItem` for each menu item.  Test the `.Kind` of each menu item, such as `Command` or `Separator`.

* **[CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)**
   * [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* **[CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)**
   * [Children Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.children)
   * [CommandId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.commandid)
   * [IsChecked Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.ischecked)
   * [IsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.isenabled)
   * [Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.kind)
   * [Label Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.label)
   * [ShortcutKeyDescription Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.shortcutkeydescription)

* **[CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)**
   * [ContextMenuTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget)
   * [Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.handled)
   * [MenuItems Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.menuitems)
   * [SelectedCommandId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid)
   * [GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.getdeferral)

* **[CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)**
   * `CoreWebView2ContextMenuItemKind.Command`
   * `CoreWebView2ContextMenuItemKind.Separator`

* **[CoreWebView2ContextMenuTargetKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutargetkind)**

* **[CoreWebView2Deferral Class](/dotnet/api/microsoft.web.webview2.core.corewebview2deferral)**
   * [Complete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2deferral.complete)

* **[CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)**
   * `CheckBox`
   * `Radio`
   * `Separator`
   * `Submenu`


# [C++](#tab/cpp)

To display a custom context menu that contains your desired menu items, use the data provided in [ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs).  For this case, you specify `Handled` to be `true`, and request a deferral. 

On a `ContextMenuRequested` event, add an event listener that has an `ICoreWebView2ContextMenuRequestedEventArgs`.

Iterate through a list of `ICoreWebView2ContextMenuItem` items, adding an `ICoreWebView2ContextMenuItem` for each menu item.  Test the `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND` of each menu item, such as `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR` or `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`.

* **[ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)**
   * [add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)
   * [remove_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)

* **[ICoreWebView2ContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)**
   * [get_Children](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_children)
   * [get_CommandId](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_commandid)
   * [get_IsChecked](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_ischecked)
   * [get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_isenabled)
   * [get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_kind)
   * [get_Label](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_label)
   * [get_ShortcutKeyDescription](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_shortcutkeydescription)

* **[ICoreWebView2ContextMenuItemCollection](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)**
   * [get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#get_count)
   * [GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#getvalueatindex)

* **[ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)**
   * [get_MenuItems](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_menuitems)
   * [get_Location](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_location)
   * [GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#getdeferral)
   * [put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#put_handled)
   * [put_SelectedCommandId](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#put_selectedcommandid)

* **[ICoreWebView2ContextMenuRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventhandler)**

* **[ICoreWebView2Deferral](/microsoft-edge/webview2/reference/win32/icorewebview2deferral)**

* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_item_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`
   
* [COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_target_kind)

---


<!-- ====================================================================== -->
## Example: Adding a custom context menu

The following sample presents the WebView2 context menu in the Win32/WPF context menu format.


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

---


<!-- ====================================================================== -->
## Adding menu items to a context menu

You can:

*  Add default menu items to a custom context menu, as shown above in "Adding a custom context menu".

*  Add custom menu items to a default context menu, as shown below in "Adding custom menu items to a default context menu".


### Adding custom menu items to a default context menu

To add custom menu items to the default context menu, use the following API items.


# [C#](#tab/csharp)

* **[CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)**
   * [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* **[CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)**
   * [CustomItemSelected Event](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.customitemselected)

* **[CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)**
   * `Command`

* **[CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)**
   * [ContextMenuTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget)
   * `ContextMenuTarget.PageUri`

* **[CoreWebView2ContextMenuTarget Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget)**
   * [CoreWebView2ContextMenuTarget.PageUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget.pageuri)

* **[CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)**
   * [CreateContextMenuItem Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcontextmenuitem)


# [C++](#tab/cpp)

* **[ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)**
   * [add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)

* **[ICoreWebView2ContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)**
   * [add_CustomItemSelected](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#add_customitemselected)

* **[ICoreWebView2ContextMenuItemCollection](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)**

* **[ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)**
   * [get_MenuItems](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_menuitems)

* **[ICoreWebView2ContextMenuRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventhandler)**

* **[ICoreWebView2CustomItemSelectedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2customitemselectedeventhandler)**

* **[ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)**
   * [CreateContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2environment9#createcontextmenuitem)

* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_item_kind)
   * COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND

---

<!-- ====================================================================== -->
## Example: Adding custom menu items to a default context menu

The following example adds a **Display Page Uri** command to the WebView2 context menu.


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
        };
    menuList.Insert(menuList.Count, newItem);
};
``` 


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

---


<!-- ====================================================================== -->
## Removing menu items from a default context menu

You can remove default or custom menu items from the default context menu.


# [C#](#tab/csharp)

* **[CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)**
   * [Name Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.name)

* [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* **[CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)**
   * [ContextMenuTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget)
   * [MenuItems Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.menuitems)

* **[CoreWebView2ContextMenuTargetKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutargetkind)**
   * `Image`


# [C++](#tab/cpp)

* [COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_target_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_IMAGE`

* **[ICoreWebView2_4](/microsoft-edge/webview2/reference/win32/icorewebview2_4)**

* **[ICoreWebView2ContextMenuRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventhandler)**

* **[ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)**
   * [get_MenuItems](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_menuitems)
   * [get_ContextMenuTarget](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_contextmenutarget)

* **[ICoreWebView2ContextMenuItemCollection](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)**
   * [get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#get_count)
   * [GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#getvalueatindex)
   * [InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#insertvalueatindex)
   * [RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#removevalueatindex)

* **[ICoreWebView2ContextMenuTarget](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget)**
   * [get_kind](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget#get_kind)

* **[ICoreWebView2ContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)**
   * [get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_name)

---


<!-- ====================================================================== -->
## Example: Removing menu items from a default context menu

The following example removes the **Save image as** command from the WebView2 context menu.


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

---

<!-- ====================================================================== -->
## Detecting when the user requests a context menu

This section explains how to detect when the user requests opening a context menu.  It's the same for custom or default context menus.

When a user requests opening a context menu (such as by right-clicking), your app needs to listen for the `ContextMenuRequested` event.

When your app detects this event, your app should do some combination of the following:
*  Add custom menu items to the default context menu.
*  Remove custom menu items from the default context menu.
*  Open a custom context menu.

The `ContextMenuRequested` event indicates that the user requested opening a context menu.

The WebView2 control raises this event to indicate that the user requested opening a context menu in the WebView2 control, such as by right-clicking.

The WebView2 control only raises the `ContextMenuRequested` event if the current webpage allows the context menu to appear; that is, if the `AreDefaultContextMenusEnabled` property is `true`.

The [CoreWebView2ContextMenuRequestedEventArgs](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs) contains the following information: 

*  An ordered list of `ContextMenuItem` objects to populate the custom context menu.  The ordered list includes the following:
   *  The internal name of the menu item.
   *  The UI label of the menu item, displayed to the user in the UI.
   *  The kind of menu item.
   *  A keyboard shortcut Description, if any, such as **Alt+C**.
   *  Any other properties of the custom menu item.

*  The coordinates where the context menu was requested, so your app can detect which UI item the user right-clicked.  The coordinates are defined in relation to the upper left corner of the WebView2 control.

*  A selection object that will include the kind of context selected<!--such as?--> and the appropriate context menu parameter data.<!--what sort of param data - which piece of info that's sent, tells which menu item, from the ordered list of menu items, the user selected?-->

When the user selects a custom menu item on a context menu, the WebView2 control fires a `CustomItemSelected` event.

When your host app indicates to WebView2 that a user selected a menu item on a context menu, WebView2 then runs the selected command.


# [C#](#tab/csharp)

* **[CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)**
   * [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* **[CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)**
   * [AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)


# [C++](#tab/cpp)

* **[ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)**
   * [add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)
   * [remove_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)

* **[ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)**
   * [get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)
   * [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)

---


<!-- ====================================================================== -->
## Detecting when the user selects a custom menu item

Your host app can handle the user-selected menu item, or your app can return the menu item to the WebView2 control to handle the user-selected menu item.

Your host app should listen for the `CustomItemSelected` event, which is raised when the user selects a custom menu item on a default or custom context menu.

The WebView2 control raises this event to indicate that the user selected a custom menu item that your app added to a context menu.

If the user selects a custom menu item, the `CustomMenuItemSelected` event is raised on the context menu item object that was selected, in these cases:

*  The app adds custom menu items, but defers the context menu UI to the WebView2 platform.

*  The app adds custom menu items, shows custom UI, and sets the `SelectedCommandId` property to the ID of the custom menu item.


<!-- ====================================================================== -->
## Reporting a selected command menu item to WebView2

When the user selects a WebView2 context menu command (a default menu item that's in a custom context menu), the host app can optionally report that selection to WebView2 so that WebView2 will invoke the command.


# [C#](#tab/csharp)

* **[CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)**
   * `CheckBox`
   * `Command`
   * `Radio`
   * `Separator`
   * `Submenu`


# [C++](#tab/cpp)

* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_item_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`

---

<!-- -------------------------------------------------- -->
### Custom menu items

If your host app reports a custom menu item as the selected menu item, then the `CustomMenuItemSelected` event will be fired for the custom menu item.


<!-- ====================================================================== -->
## Disabling context menus

The `AreDefaultContextMenusEnabled` property controls whether any context menu can be opened.  If the WebView2 `AreDefaultContextMenusEnabled` setting is set to `False`, that disables context menus, and the `ContextMenuRequested` event won't be raised, such as when the user right-clicks.


# [C#](#tab/csharp)

* **[CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)**
   * [AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)


# [C++](#tab/cpp)

* **[ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)**
   * [get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)
   * [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)

---


<!-- ====================================================================== -->
## API Reference overview


<!-- C# API Ref -->

# [C#](#tab/csharp)

* **[WebView2 Class](/dotnet/api/microsoft.web.webview2.wpf.webview2)**
   * [ContextMenu Property](/dotnet/api/microsoft.web.webview2.wpf.webview2.contextmenu)

* **[CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)**
   * [ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested)

* **[CoreWebView2ContextMenuItem Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem)**
   * [Children Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.children)
   * [CommandId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.commandid)
   * [Icon Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.icon)
   * [IsChecked Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.ischecked)
   * [IsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.isenabled)
   * [Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.kind)
   * [Label Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.label)
   * [Name Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.name)
   * [ShortcutKeyDescription Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.shortcutkeydescription)
   * [CustomItemSelected Event](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitem.customitemselected)

* **[CoreWebView2ContextMenuItemKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenuitemkind)**
   * `CheckBox`
   * `Command`
   * `Radio`
   * `Separator`
   * `Submenu`

* **[CoreWebView2ContextMenuRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs)**
   * [ContextMenuTarget Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.contextmenutarget)
   * [Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.handled)
   * [Location Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.location)
   * [MenuItems Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.menuitems)
   * [SelectedCommandId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.selectedcommandid)
   * [GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenurequestedeventargs.getdeferral)

* **[CoreWebView2ContextMenuTarget Class](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget)**
   * [CoreWebView2ContextMenuTarget.PageUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutarget.pageuri)
   <!--13 properties-->

* **[CoreWebView2ContextMenuTargetKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2contextmenutargetkind)**
   * `Audio`
   * `Image`
   * `Page`
   * `SelectedText`
   * `Video`

* **[CoreWebView2Deferral Class](/dotnet/api/microsoft.web.webview2.core.corewebview2deferral)**
   * [Complete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2deferral.complete)

* **[CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)**
   * [CreateContextMenuItem Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcontextmenuitem)

* **[CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings)**
   * [AreDefaultContextMenusEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.aredefaultcontextmenusenabled)


<!-- ---------------------------------------------------------------------- -->
<!-- C++ API Ref -->

# [C++](#tab/cpp)

* **[ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)**
* **[ICoreWebView2_4](/microsoft-edge/webview2/reference/win32/icorewebview2_4)**
* **[ICoreWebView2_11](/microsoft-edge/webview2/reference/win32/icorewebview2_11)**
   * [add_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#add_contextmenurequested)
   * [remove_ContextMenuRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_11#remove_contextmenurequested)

* **[ICoreWebView2ContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem)**
   * [add_CustomItemSelected](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#add_customitemselected)
   * [get_Children](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_children)
   * [get_CommandId](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_commandid)
   * [get_Icon](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_icon)
   * [get_IsChecked](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_ischecked)
   * [get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_isenabled)
   * [get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_kind)
   * [get_Label](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_label)
   * [get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_name)
   * [get_ShortcutKeyDescription](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#get_shortcutkeydescription)
   * [put_IsChecked](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#put_ischecked)
   * [put_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#put_isenabled)
   * [remove_CustomItemSelected](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitem#remove_customitemselected)
   
* **[ICoreWebView2ContextMenuItemCollection](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection)**
   * [get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#get_count)
   * [GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#getvalueatindex)
   * [InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#insertvalueatindex)
   * [RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenuitemcollection#removevalueatindex)

* **[ICoreWebView2ContextMenuRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs)**
   * [get_ContextMenuTarget](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_contextmenutarget)
   * [get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_handled)
   * [get_Location](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_location)
   * [get_MenuItems](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_menuitems)
   * [get_SelectedCommandId](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#get_selectedcommandid)
   * [GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#getdeferral)
   * [put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#put_handled)
   * [put_SelectedCommandId](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventargs#put_selectedcommandid)

* **[ICoreWebView2ContextMenuRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventhandler)**
   * [Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenurequestedeventhandler#invoke)

* **[ICoreWebView2ContextMenuTarget](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget)**
   * [get_kind](/microsoft-edge/webview2/reference/win32/icorewebview2contextmenutarget#get_kind)

* **[ICoreWebView2CustomItemSelectedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2customitemselectedeventhandler)**

* **[ICoreWebView2Deferral](/microsoft-edge/webview2/reference/win32/icorewebview2deferral)**
   * [Complete](/microsoft-edge/webview2/reference/win32/icorewebview2deferral#complete)

* **[ICoreWebView2Environment9](/microsoft-edge/webview2/reference/win32/icorewebview2environment9)**
   * [CreateContextMenuItem](/microsoft-edge/webview2/reference/win32/icorewebview2environment9#createcontextmenuitem)

* **[ICoreWebView2Settings](/microsoft-edge/webview2/reference/win32/icorewebview2settings)**
   * [get_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#get_aredefaultcontextmenusenabled)
   * [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings#put_aredefaultcontextmenusenabled)
   
* [COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_item_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_COMMAND`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_CHECK_BOX`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_RADIO`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SEPARATOR`
   * `COREWEBVIEW2_CONTEXT_MENU_ITEM_KIND_SUBMENU`

* [COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_context_menu_target_kind)
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_PAGE`
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_IMAGE`
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_SELECTED_TEXT`
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_AUDIO`
   * `COREWEBVIEW2_CONTEXT_MENU_TARGET_KIND_VIDEO`

---


<!-- ====================================================================== -->
## See also

* [Context menus](../concepts/overview-features-apis.md#context-menus) in _Overview of WebView2 features and APIs_.
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples)

<!-- spec: https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/ContextMenuRequested.md -->
