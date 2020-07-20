---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.430 - WebView2 Win32 C++ ICoreWebView2Host
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.9.430 - interface ICoreWebView2Host 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2Host
  : public IUnknown
```

This interface is the owner of the CoreWebView2 object, and provides support for resizing, showing and hiding, focusing, and other functionality related to windowing and composition.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsVisible](#get_isvisible) | The IsVisible property determines whether to show or hide the webview.
[put_IsVisible](#put_isvisible) | Set the IsVisible property.
[get_Bounds](#get_bounds) | The webview bounds.
[put_Bounds](#put_bounds) | Set the Bounds property.
[get_ZoomFactor](#get_zoomfactor) | The zoom factor for the WebView.
[put_ZoomFactor](#put_zoomfactor) | Set the ZoomFactor property.
[add_ZoomFactorChanged](#add_zoomfactorchanged) | Add an event handler for the ZoomFactorChanged event.
[remove_ZoomFactorChanged](#remove_zoomfactorchanged) | Remove an event handler previously added with add_ZoomFactorChanged.
[SetBoundsAndZoomFactor](#setboundsandzoomfactor) | Update Bounds and ZoomFactor properties at the same time.
[MoveFocus](#movefocus) | Move focus into WebView.
[add_MoveFocusRequested](#add_movefocusrequested) | Add an event handler for the MoveFocusRequested event.
[remove_MoveFocusRequested](#remove_movefocusrequested) | Remove an event handler previously added with add_MoveFocusRequested.
[add_GotFocus](#add_gotfocus) | Add an event handler for the GotFocus event.
[remove_GotFocus](#remove_gotfocus) | Remove an event handler previously added with add_GotFocus.
[add_LostFocus](#add_lostfocus) | Add an event handler for the LostFocus event.
[remove_LostFocus](#remove_lostfocus) | Remove an event handler previously added with add_LostFocus.
[add_AcceleratorKeyPressed](#add_acceleratorkeypressed) | Add an event handler for the AcceleratorKeyPressed event.
[remove_AcceleratorKeyPressed](#remove_acceleratorkeypressed) | Remove an event handler previously added with add_AcceleratorKeyPressed.
[get_ParentWindow](#get_parentwindow) | The parent window provided by the app that this WebView is using to render content.
[put_ParentWindow](#put_parentwindow) | Set the parent window for the WebView.
[NotifyParentWindowPositionChanged](#notifyparentwindowpositionchanged) | This is a notification separate from put_Bounds that tells WebView its parent (or any ancestor) HWND moved.
[Close](#close) | Closes the WebView and cleans up the underlying browser instance.
[get_CoreWebView2](#get_corewebview2) | Gets the CoreWebView2 associated with this CoreWebView2Host.
[CORE_WEBVIEW2_MOVE_FOCUS_REASON](#core_webview2_move_focus_reason) | Reason for moving focus.
[CORE_WEBVIEW2_KEY_EVENT_KIND](#core_webview2_key_event_kind) | The type of key event that triggered an AcceleratorKeyPressed event.
[CORE_WEBVIEW2_PHYSICAL_KEY_STATUS](#core_webview2_physical_key_status) | A structure representing the information packed into the LPARAM given to a Win32 key event.

The CoreWebView2Host owns the CoreWebView2, and if all references to the CoreWebView2Host go away, the WebView will be closed.

## Members

#### get_IsVisible 

The IsVisible property determines whether to show or hide the webview.

> public HRESULT [get_IsVisible](#get_isvisible)(BOOL * isVisible)

If IsVisible is set to false, the webview will be transparent and will not be rendered. However, this will not affect the window containing the webview (the HWND parameter that was passed to CreateCoreWebView2Host). If you want that window to disappear too, call ShowWindow on it directly in addition to modifying the IsVisible property. WebView as a child window won't get window messages when the top window is minimized or restored. For performance reason, developer should set IsVisible property of the WebView to false when the app window is minimized and back to true when app window is restored. App window can do this by handling SC_MINIMIZE and SC_RESTORE command upon receiving WM_SYSCOMMAND message.

```cpp
void ViewComponent::ToggleVisibility()
{
    BOOL visible;
    m_host->get_IsVisible(&visible);
    m_isVisible = !visible;
    m_host->put_IsVisible(m_isVisible);
}
```

#### put_IsVisible 

Set the IsVisible property.

> public HRESULT [put_IsVisible](#put_isvisible)(BOOL isVisible)

```cpp
    if (message == WM_SYSCOMMAND)
    {
        if (wParam == SC_MINIMIZE)
        {
            // Hide the webview when the app window is minimized.
            m_host->put_IsVisible(FALSE);
        }
        else if (wParam == SC_RESTORE)
        {
            // When the app window is restored, show the webview
            // (unless the user has toggle visibility off).
            if (m_isVisible)
            {
                m_host->put_IsVisible(TRUE);
            }
        }
    }
```

#### get_Bounds 

The webview bounds.

> public HRESULT [get_Bounds](#get_bounds)(RECT * bounds)

Bounds are relative to the parent HWND. The app has two ways it can position a WebView:

1. Create a child HWND that is the WebView parent HWND. Position this window where the WebView should be. In this case, use (0, 0) for the WebView's Bound's top left corner (the offset).

1. Use the app's top most window as the WebView parent HWND. Set the WebView's Bound's top left corner so that the WebView is positioned correctly in the app. The Bound's values are in the host's coordinate space.

#### put_Bounds 

Set the Bounds property.

> public HRESULT [put_Bounds](#put_bounds)(RECT bounds)

```cpp
// Update the bounds of the WebView window to fit available space.
void ViewComponent::ResizeWebView()
{
    SIZE webViewSize = {
            LONG((m_webViewBounds.right - m_webViewBounds.left) * m_webViewRatio * m_webViewScale),
            LONG((m_webViewBounds.bottom - m_webViewBounds.top) * m_webViewRatio * m_webViewScale) };

    RECT desiredBounds = m_webViewBounds;
    desiredBounds.bottom = LONG(
        webViewSize.cy + m_webViewBounds.top);
    desiredBounds.right = LONG(
        webViewSize.cx + m_webViewBounds.left);

    m_host->put_Bounds(desiredBounds);
}
```

#### get_ZoomFactor 

The zoom factor for the WebView.

> public HRESULT [get_ZoomFactor](#get_zoomfactor)(double * zoomFactor)

Note that changing zoom factor could cause `window.innerWidth/innerHeight` and page layout to change. A zoom factor that is applied by the host by calling put_ZoomFactor becomes the new default zoom for the WebView. This zoom factor applies across navigations and is the zoom factor WebView is returned to when the user presses ctrl+0. When the zoom factor is changed by the user (resulting in the app receiving ZoomFactorChanged), that zoom applies only for the current page. Any user applied zoom is only for the current page and is reset on a navigation. Specifying a zoomFactor less than or equal to 0 is not allowed. WebView also has an internal supported zoom factor range. When a specified zoom factor is out of that range, it will be normalized to be within the range, and a ZoomFactorChanged event will be fired for the real applied zoom factor. When this range normalization happens, the ZoomFactor property will report the zoom factor specified during the previous modification of the ZoomFactor property until the ZoomFactorChanged event is received after webview applies the normalized zoom factor.

#### put_ZoomFactor 

Set the ZoomFactor property.

> public HRESULT [put_ZoomFactor](#put_zoomfactor)(double zoomFactor)

#### add_ZoomFactorChanged 

Add an event handler for the ZoomFactorChanged event.

> public HRESULT [add_ZoomFactorChanged](#add_zoomfactorchanged)([ICoreWebView2ZoomFactorChangedEventHandler](ICoreWebView2ZoomFactorChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

The event fires when the ZoomFactor property of the WebView changes. The event could fire because the caller modified the ZoomFactor property, or due to the user manually modifying the zoom. When it is modified by the caller via the ZoomFactor property, the internal zoom factor is updated immediately and there will be no ZoomFactorChanged event. WebView associates the last used zoom factor for each site. Therefore, it is possible for the zoom factor to change when navigating to a different page. When the zoom factor changes due to this, the ZoomFactorChanged event fires right after the ContentLoading event.

```cpp
    // Register a handler for the ZoomFactorChanged event.
    // This handler just announces the new level of zoom on the window's title bar.
    CHECK_FAILURE(m_host->add_ZoomFactorChanged(
        Callback<ICoreWebView2ZoomFactorChangedEventHandler>(
            [this](ICoreWebView2Host* sender, IUnknown* args) -> HRESULT {
                double zoomFactor;
                CHECK_FAILURE(sender->get_ZoomFactor(&zoomFactor));

                std::wstring message = L"WebView2APISample (Zoom: " +
                                       std::to_wstring(int(zoomFactor * 100)) + L"%)";
                SetWindowText(m_appWindow->GetMainWindow(), message.c_str());
                return S_OK;
            })
            .Get(),
        &m_zoomFactorChangedToken));
```

#### remove_ZoomFactorChanged 

Remove an event handler previously added with add_ZoomFactorChanged.

> public HRESULT [remove_ZoomFactorChanged](#remove_zoomfactorchanged)(EventRegistrationToken token)

#### SetBoundsAndZoomFactor 

Update Bounds and ZoomFactor properties at the same time.

> public HRESULT [SetBoundsAndZoomFactor](#setboundsandzoomfactor)(RECT bounds,double zoomFactor)

This operation is atomic from the host's perspecive. After returning from this function, the Bounds and ZoomFactor properties will have both been updated if the function is successful, or neither will be updated if the function fails. If Bounds and ZoomFactor are both updated by the same scale (i.e. Bounds and ZoomFactor are both doubled), then the page will not see a change in window.innerWidth/innerHeight and the WebView will render the content at the new size and zoom without intermediate renderings. This function can also be used to update just one of ZoomFactor or Bounds by passing in the new value for one and the current value for the other.

```cpp
void ViewComponent::SetScale(float scale)
{
    RECT bounds;
    CHECK_FAILURE(m_host->get_Bounds(&bounds));
    double scaleChange = scale / m_webViewScale;

    bounds.bottom = LONG(
        (bounds.bottom - bounds.top) * scaleChange + bounds.top);
    bounds.right = LONG(
        (bounds.right - bounds.left) * scaleChange + bounds.left);

    m_webViewScale = scale;
    m_host->SetBoundsAndZoomFactor(bounds, scale);
}
```

#### MoveFocus 

Move focus into WebView.

> public HRESULT [MoveFocus](#movefocus)([CORE_WEBVIEW2_MOVE_FOCUS_REASON](#core_webview2_move_focus_reason) reason)

WebView will get focus and focus will be set to correspondent element in the page hosted in the WebView. For Programmatic reason, focus is set to previously focused element or the default element if there is no previously focused element. For Next reason, focus is set to the first element. For Previous reason, focus is set to the last element. WebView can also got focus through user interaction like clicking into WebView or Tab into it. For tabbing, the app can call MoveFocus with Next or Previous to align with tab and shift+tab respectively when it decides the WebView is the next tabbable element. Or, the app can call IsDialogMessage as part of its message loop to allow the platform to auto handle tabbing. The platform will rotate through all windows with WS_TABSTOP. When the WebView gets focus from IsDialogMessage, it will internally put the focus on the first or last element for tab and shift+tab respectively.

```cpp
    while (GetMessage(&msg, nullptr, 0, 0))
    {
        if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
        {
            // Calling IsDialogMessage handles Tab traversal automatically. If the
            // app wants the platform to auto handle tab, then call IsDialogMessage
            // before calling TranslateMessage/DispatchMessage. If the app wants to
            // handle tabbing itself, then skip calling IsDialogMessage and call
            // TranslateMessage/DispatchMessage directly.
            if (!g_autoTabHandle || !IsDialogMessage(GetAncestor(msg.hwnd, GA_ROOT), &msg))
            {
                TranslateMessage(&msg);
                DispatchMessage(&msg);
            }
        }
    }
```

```cpp
        if (wParam == VK_TAB)
        {
            // Find out if the window is one we've customized for tab handling
            for (int i = 0; i < m_tabbableWindows.size(); i++)
            {
                if (m_tabbableWindows[i].first == hWnd)
                {
                    if (GetKeyState(VK_SHIFT) < 0)
                    {
                        TabBackwards(i);
                    }
                    else
                    {
                        TabForwards(i);
                    }
                    return true;
                }
            }
        }
```

```cpp
void ControlComponent::TabForwards(int currentIndex)
{
    // Find first enabled window after the active one
    for (int i = currentIndex + 1; i < m_tabbableWindows.size(); i++)
    {
        HWND hwnd = m_tabbableWindows.at(i).first;
        if (IsWindowEnabled(hwnd))
        {
            SetFocus(hwnd);
            return;
        }
    }
    // If this is the last enabled window, tab forwards into the WebView.
    m_host->MoveFocus(CORE_WEBVIEW2_MOVE_FOCUS_REASON_NEXT);
}

void ControlComponent::TabBackwards(int currentIndex)
{
    // Find first enabled window before the active one
    for (int i = currentIndex - 1; i >= 0; i--)
    {
        HWND hwnd = m_tabbableWindows.at(i).first;
        if (IsWindowEnabled(hwnd))
        {
            SetFocus(hwnd);
            return;
        }
    }
    // If this is the last enabled window, tab forwards into the WebView.
    CHECK_FAILURE(m_host->MoveFocus(CORE_WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS));
}
```

#### add_MoveFocusRequested 

Add an event handler for the MoveFocusRequested event.

> public HRESULT [add_MoveFocusRequested](#add_movefocusrequested)([ICoreWebView2MoveFocusRequestedEventHandler](ICoreWebView2MoveFocusRequestedEventHandler.md) * eventHandler,EventRegistrationToken * token)

MoveFocusRequested fires when user tries to tab out of the WebView. The WebView's focus has not changed when this event is fired.

```cpp
    // Register a handler for the MoveFocusRequested event.
    // This event will be fired when the user tabs out of the webview.
    // The handler will focus another window in the app, depending on which
    // direction the focus is being shifted.
    CHECK_FAILURE(m_host->add_MoveFocusRequested(
        Callback<ICoreWebView2MoveFocusRequestedEventHandler>(
            [this](
                ICoreWebView2Host* sender,
                ICoreWebView2MoveFocusRequestedEventArgs* args) -> HRESULT {
                if (!g_autoTabHandle)
                {
                    CORE_WEBVIEW2_MOVE_FOCUS_REASON reason;
                    CHECK_FAILURE(args->get_Reason(&reason));

                    if (reason == CORE_WEBVIEW2_MOVE_FOCUS_REASON_NEXT)
                    {
                        TabForwards(-1);
                    }
                    else if (reason == CORE_WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS)
                    {
                        TabBackwards(int(m_tabbableWindows.size()));
                    }
                    CHECK_FAILURE(args->put_Handled(TRUE));
                }
                return S_OK;
            })
            .Get(),
        &m_moveFocusRequestedToken));
```

#### remove_MoveFocusRequested 

Remove an event handler previously added with add_MoveFocusRequested.

> public HRESULT [remove_MoveFocusRequested](#remove_movefocusrequested)(EventRegistrationToken token)

#### add_GotFocus 

Add an event handler for the GotFocus event.

> public HRESULT [add_GotFocus](#add_gotfocus)([ICoreWebView2FocusChangedEventHandler](ICoreWebView2FocusChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

GotFocus fires when WebView got focus.

#### remove_GotFocus 

Remove an event handler previously added with add_GotFocus.

> public HRESULT [remove_GotFocus](#remove_gotfocus)(EventRegistrationToken token)

#### add_LostFocus 

Add an event handler for the LostFocus event.

> public HRESULT [add_LostFocus](#add_lostfocus)([ICoreWebView2FocusChangedEventHandler](ICoreWebView2FocusChangedEventHandler.md) * eventHandler,EventRegistrationToken * token)

LostFocus fires when WebView lost focus. In the case where MoveFocusRequested event is fired, the focus is still on WebView when MoveFocusRequested event fires. Lost focus only fires afterwards when app's code or default action of MoveFocusRequested event set focus away from WebView.

#### remove_LostFocus 

Remove an event handler previously added with add_LostFocus.

> public HRESULT [remove_LostFocus](#remove_lostfocus)(EventRegistrationToken token)

#### add_AcceleratorKeyPressed 

Add an event handler for the AcceleratorKeyPressed event.

> public HRESULT [add_AcceleratorKeyPressed](#add_acceleratorkeypressed)([ICoreWebView2AcceleratorKeyPressedEventHandler](ICoreWebView2AcceleratorKeyPressedEventHandler.md) * eventHandler,EventRegistrationToken * token)

AcceleratorKeyPressed fires when an accelerator key or key combo is pressed or released while the WebView is focused. A key is considered an accelerator if either:

1. Ctrl or Alt is currently being held, or

1. the pressed key does not map to a character. A few specific keys are never considered accelerators, such as Shift. The Escape key is always considered an accelerator.

Autorepeated key events caused by holding the key down will also fire this event. You can filter these out by checking the event args' KeyEventLParam or PhysicalKeyStatus.

In windowed mode, this event handler is called synchronously. Until you call Handle() on the event args or the event handler returns, the browser process will be blocked and outgoing cross-process COM calls will fail with RPC_E_CANTCALLOUT_ININPUTSYNCCALL. All CoreWebView2 API methods will work, however.

In windowless mode, the event handler is called asynchronously. Further input will not reach the browser until the event handler returns or Handle() is called, but the browser process itself will not be blocked, and outgoing COM calls will work normally.

It is recommended to call Handle(TRUE) as early as you can know that you want to handle the accelerator key.

```cpp
    // Register a handler for the AcceleratorKeyPressed event.
    CHECK_FAILURE(m_host->add_AcceleratorKeyPressed(
        Callback<ICoreWebView2AcceleratorKeyPressedEventHandler>(
            [this](
                ICoreWebView2Host* sender,
                ICoreWebView2AcceleratorKeyPressedEventArgs* args) -> HRESULT {
                CORE_WEBVIEW2_KEY_EVENT_KIND kind;
                CHECK_FAILURE(args->get_KeyEventKind(&kind));
                // We only care about key down events.
                if (kind == CORE_WEBVIEW2_KEY_EVENT_KIND_KEY_DOWN ||
                    kind == CORE_WEBVIEW2_KEY_EVENT_KIND_SYSTEM_KEY_DOWN)
                {
                    UINT key;
                    CHECK_FAILURE(args->get_VirtualKey(&key));
                    // Check if the key is one we want to handle.
                    if (std::function<void()> action =
                            m_appWindow->GetAcceleratorKeyFunction(key))
                    {
                        // Keep the browser from handling this key, whether it's autorepeated or
                        // not.
                        CHECK_FAILURE(args->put_Handled(TRUE));

                        // Filter out autorepeated keys.
                        CORE_WEBVIEW2_PHYSICAL_KEY_STATUS status;
                        CHECK_FAILURE(args->get_PhysicalKeyStatus(&status));
                        if (!status.WasKeyDown)
                        {
                            // Perform the action asynchronously to avoid blocking the
                            // browser process's event queue.
                            m_appWindow->RunAsync(action);
                        }
                    }
                }
                return S_OK;
            })
            .Get(),
        &m_acceleratorKeyPressedToken));
```

#### remove_AcceleratorKeyPressed 

Remove an event handler previously added with add_AcceleratorKeyPressed.

> public HRESULT [remove_AcceleratorKeyPressed](#remove_acceleratorkeypressed)(EventRegistrationToken token)

#### get_ParentWindow 

The parent window provided by the app that this WebView is using to render content.

> public HRESULT [get_ParentWindow](#get_parentwindow)(HWND * topLevelWindow)

This API initially returns the window passed into CreateCoreWebView2Host.

#### put_ParentWindow 

Set the parent window for the WebView.

> public HRESULT [put_ParentWindow](#put_parentwindow)(HWND topLevelWindow)

This will cause the WebView to reparent its window to the newly provided window.

#### NotifyParentWindowPositionChanged 

This is a notification separate from put_Bounds that tells WebView its parent (or any ancestor) HWND moved.

> public HRESULT [NotifyParentWindowPositionChanged](#notifyparentwindowpositionchanged)()

This is needed for accessibility and certain dialogs in WebView to work correctly. 

```cpp
    if (message == WM_MOVE || message == WM_MOVING)
    {
        m_host->NotifyParentWindowPositionChanged();
        return true;
    }
```

#### Close 

Closes the WebView and cleans up the underlying browser instance.

> public HRESULT [Close](#close)()

Cleaning up the browser instace will release the resources powering the WebView. The browser instance will be shut down if there are no other WebViews using it.

After calling Close, all method calls will fail and event handlers will stop firing. Specifically, the WebView will release its references to its event handlers when Close is called.

Close is implicitly called when the CoreWebView2Host loses its final reference and is destructed. But it is best practice to explicitly call Close to avoid any accidental cycle of references between the WebView and the app code. Specifically, if you capture a reference to the WebView in an event handler you will create a reference cycle between the WebView and the event handler. Calling Close will break this cycle by releasing all event handlers. But to avoid this situation it is best practice both to explicitly call Close on the WebView and to not capture a reference to the WebView to ensure the WebView can be cleaned up correctly.

```cpp
// Close the WebView and deinitialize related state. This doesn't close the app window.
void AppWindow::CloseWebView(bool cleanupUserDataFolder)
{
    DeleteAllComponents();
    if (m_host)
    {
        m_host->Close();
        m_host = nullptr;
        m_webView = nullptr;
    }
    m_webViewEnvironment = nullptr;
    if (cleanupUserDataFolder)
    {
        // For non-UWP apps, the default user data folder {Executable File Name}.WebView2
        // is in the same directory next to the app executable. If end
        // developers specify userDataFolder during WebView environment
        // creation, they would need to pass in that explicit value here.
        // For more information about userDataFolder:
        // https://docs.microsoft.com/microsoft-edge/hosting/webview2/reference/win32/0-9-488/webview2.idl#createwebview2environmentwithdetails
        WCHAR userDataFolder[MAX_PATH] = L"";
        // Obtain the absolute path for relative paths that include "./" or "../"
        _wfullpath(
            userDataFolder, GetLocalPath(L"WebView2APISample.exe.WebView2").c_str(), MAX_PATH);
        std::wstring userDataFolderPath(userDataFolder);

        std::wstring message = L"Are you sure you want to clean up the user data folder at\n";
        message += userDataFolderPath;
        message += L"\n?\nWarning: This action is not reversible.\n\n";
        message += L"Click No if there are other open WebView instnaces.\n";

        if (MessageBox(m_mainWindow, message.c_str(), L"Cleanup User Data Folder", MB_YESNO) ==
            IDYES)
        {
            CHECK_FAILURE(DeleteFileRecursive(userDataFolderPath));
        }
    }
}
```

#### get_CoreWebView2 

Gets the CoreWebView2 associated with this CoreWebView2Host.

> public HRESULT [get_CoreWebView2](#get_corewebview2)([ICoreWebView2](ICoreWebView2.md) ** coreWebView2)

#### CORE_WEBVIEW2_MOVE_FOCUS_REASON 

Reason for moving focus.

> enum [CORE_WEBVIEW2_MOVE_FOCUS_REASON](#core_webview2_move_focus_reason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
CORE_WEBVIEW2_MOVE_FOCUS_REASON_PROGRAMMATIC            | Code setting focus into WebView.
CORE_WEBVIEW2_MOVE_FOCUS_REASON_NEXT            | Moving focus due to Tab traversal forward.
CORE_WEBVIEW2_MOVE_FOCUS_REASON_PREVIOUS            | Moving focus due to Tab traversal backward.

#### CORE_WEBVIEW2_KEY_EVENT_KIND 

The type of key event that triggered an AcceleratorKeyPressed event.

> enum [CORE_WEBVIEW2_KEY_EVENT_KIND](#core_webview2_key_event_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
CORE_WEBVIEW2_KEY_EVENT_KIND_KEY_DOWN            | Correspond to window message WM_KEYDOWN.
CORE_WEBVIEW2_KEY_EVENT_KIND_KEY_UP            | Correspond to window message WM_KEYUP.
CORE_WEBVIEW2_KEY_EVENT_KIND_SYSTEM_KEY_DOWN            | Correspond to window message WM_SYSKEYDOWN.
CORE_WEBVIEW2_KEY_EVENT_KIND_SYSTEM_KEY_UP            | Correspond to window message WM_SYSKEYUP.

#### CORE_WEBVIEW2_PHYSICAL_KEY_STATUS 

A structure representing the information packed into the LPARAM given to a Win32 key event.

> typedef [CORE_WEBVIEW2_PHYSICAL_KEY_STATUS](#core_webview2_physical_key_status)

See the documentation for WM_KEYDOWN for details at [https://docs.microsoft.com/windows/win32/inputdev/wm-keydown](https://docs.microsoft.com/windows/win32/inputdev/wm-keydown)

