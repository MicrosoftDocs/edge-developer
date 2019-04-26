# interface `WebView2::IWebView2Settings` {#interface_web_view2_1_1_i_web_view2_settings}

```
interface WebView2::IWebView2Settings
  : public IUnknown
```  

Defines properties that enable, disable, or modify WebView features.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} BOOL `[`IsScriptEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1a578bc2091824cca0cdd40aa9fa7d6ce2) | Controls if JavaScript execution is enabled in all future navigations in the WebView.
`{property} BOOL `[`IsWebMessageEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1a8f67f7292d0f50fcefb3675e447470a1) | The IsWebMessageEnabled property is used when loading a new HTML document.
`{property} BOOL `[`AreDefaultScriptDialogsEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1afd5520d1b26b15b052c532c9d477437c) | AreDefaultScriptDialogsEnabled is used when loading a new HTML document.
`{property} BOOL `[`IsFullscreenAllowed`](#interface_web_view2_1_1_i_web_view2_settings_1ab5e5c82138983743cd960043023259a9) | Controls if fullscreen is allowed for the WebView.

## Members

#### `{property} BOOL `[`IsScriptEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1a578bc2091824cca0cdd40aa9fa7d6ce2) {#interface_web_view2_1_1_i_web_view2_settings_1a578bc2091824cca0cdd40aa9fa7d6ce2}

Controls if JavaScript execution is enabled in all future navigations in the WebView.

It is true by default.

```cpp
HRESULT ScenarioScript::NavigationStartingEventHandler(
    IWebView2WebView* sender, IWebView2NavigationStartingEventArgs* args) {
  // In this sample we disable JavaScript execution if we see that we ever
  // navigate to somewhere other than https://example.com
  PWSTR uri = nullptr;
  HRESULT hr = args->get_Uri(&uri);

  if (SUCCEEDED(hr)) {
    ComPtr<IWebView2Settings> settings;
    hr = m_webview->get_Settings(&settings);

    if (SUCCEEDED(hr) && !DoesUriMatchDomain(uri, L"example.com")) {
      // By default JavaScript is enabled so we don't need to set it to
      // TRUE.
      // Changes to IsScriptEnabled apply to future navigations including
      // the navigation that occurs after a NavigationStarting event.
      hr = settings->put_IsScriptEnabled(FALSE);
    }
  }

  return hr;
}
```

#### `{property} BOOL `[`IsWebMessageEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1a8f67f7292d0f50fcefb3675e447470a1) {#interface_web_view2_1_1_i_web_view2_settings_1a8f67f7292d0f50fcefb3675e447470a1}

The IsWebMessageEnabled property is used when loading a new HTML document.

If set, then communication from the host to the webview's top level HTML document is allowed via PostWebMessageAsJson, PostWebMessageAsString, and the window.chrome.webview's message event (see PostWebMessageAsJson documentation for details) and from the webview's top level HTML document to the host via window.chrome.webview's postMessage function and the SetWebMessageReceivedEventHandler method (see the SetWebMessageReceivedEventHandler documentation for details). If not set, then communication is disallowed. PostWebMessageAsJson and PostWebMessageAsString will fail with E_ACCESSDENIED and window.chrome.webview.postMessage will fail by throwing an instance of an Error object. It is true by default.

```cpp
  ComPtr<IWebView2Settings> settings;
  HRESULT hr = m_webview->get_Settings(&settings);

  if (SUCCEEDED(hr)) {
    hr = settings->put_IsWebMessageEnabled(TRUE);

    if (SUCCEEDED(hr)) {  
      // Setup the web message received event handler before navigating to
      // ensure we don't miss any messages.
      m_webview->add_WebMessageReceived(
          Microsoft::WRL::Callback<IWebView2WebMessageReceivedEventHandler>(
              this, &::ScenarioWebMessage::WebMessageReceivedEventHandler)
              .Get(), &m_webMessageReceivedToken);

      // Changes to IWebView2Settings::IsWebMessageEnabled apply to the next document
      // to which we navigate.
      m_webview->Navigate(s_exampleUri);
    }
  }
```

#### `{property} BOOL `[`AreDefaultScriptDialogsEnabled`](#interface_web_view2_1_1_i_web_view2_settings_1afd5520d1b26b15b052c532c9d477437c) {#interface_web_view2_1_1_i_web_view2_settings_1afd5520d1b26b15b052c532c9d477437c}

AreDefaultScriptDialogsEnabled is used when loading a new HTML document.

If set to false, then we won't render the default javascript dialog box (Specifically those shown by the javascript alert, confirm, and prompt functions). Instead, if an event handler is set by SetScriptDialogOpeningEventHandler, we will send an event that will contain all of the information for the dialog and allow the host app to show its own custom UI.

#### `{property} BOOL `[`IsFullscreenAllowed`](#interface_web_view2_1_1_i_web_view2_settings_1ab5e5c82138983743cd960043023259a9) {#interface_web_view2_1_1_i_web_view2_settings_1ab5e5c82138983743cd960043023259a9}

Controls if fullscreen is allowed for the WebView.

When it is allowed, web content such as a video element in the WebView is allowed to be displayed full screen. When it is not allowed, such element will fill the WebView bounds when the element requests full screen. It is true by default.

