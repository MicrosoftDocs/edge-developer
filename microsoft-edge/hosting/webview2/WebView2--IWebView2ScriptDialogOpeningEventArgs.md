# interface `WebView2::IWebView2ScriptDialogOpeningEventArgs` {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args}

```
interface WebView2::IWebView2ScriptDialogOpeningEventArgs
  : public IUnknown
```  

Event args for the JavaScriptDialogOpening event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1ac77e34dba4138de557e8c3e121729b05) | The URI of the page that requested the dialog box.
`{property} `[`WEBVIEW2_SCRIPT_DIALOG_KIND`](WebView2.md#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8)` `[`Kind`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1afd0e6bb54fb9b6f30a00c6b2392645cc) | The kind of JavaScript dialog box.
`{property} PWSTR `[`Message`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a0eb38a3fa7042ad6d49c3ed11348b921) | The message of the dialog box.
`{property} PWSTR `[`DefaultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a4373b0dbde52b008f36fde4895770913) | The second parameter passed to the JavaScript prompt dialog.
`{property} PWSTR `[`ResultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a72e79b90886eeace719a99238fa593a4) | The return value from the JavaScript prompt function if Accept is called.
`{property} PCWSTR `[`ResultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1abed3b40e9aae1ebfbfe36a1c32adfa36) | 
`public HRESULT `[`Accept`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a16c9b260defab3039466e7422edf6c4d)`()` | The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.
`public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1aa0fbee695a3e680ea4d54abb7948fc4d)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` | GetDeferral can be called to return an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object.

## Members

#### `{property} PWSTR `[`Uri`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1ac77e34dba4138de557e8c3e121729b05) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1ac77e34dba4138de557e8c3e121729b05}

The URI of the page that requested the dialog box.

#### `{property} `[`WEBVIEW2_SCRIPT_DIALOG_KIND`](WebView2.md#namespace_web_view2_1a1ab09f6743a36d1c809d10567a8a3dc8)` `[`Kind`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1afd0e6bb54fb9b6f30a00c6b2392645cc) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1afd0e6bb54fb9b6f30a00c6b2392645cc}

The kind of JavaScript dialog box.

#### `{property} PWSTR `[`Message`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a0eb38a3fa7042ad6d49c3ed11348b921) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a0eb38a3fa7042ad6d49c3ed11348b921}

The message of the dialog box.

From JavaScript this is the first parameter passed to alert, confirm, and prompt.

#### `{property} PWSTR `[`DefaultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a4373b0dbde52b008f36fde4895770913) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a4373b0dbde52b008f36fde4895770913}

The second parameter passed to the JavaScript prompt dialog.

This is the the default value to use for the result of the prompt JavaScript function.

#### `{property} PWSTR `[`ResultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a72e79b90886eeace719a99238fa593a4) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a72e79b90886eeace719a99238fa593a4}

The return value from the JavaScript prompt function if Accept is called.

This is ignored for dialog kinds other than prompt. If Accept is not called this value is ignored and false is returned from prompt.

#### `{property} PCWSTR `[`ResultText`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1abed3b40e9aae1ebfbfe36a1c32adfa36) {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1abed3b40e9aae1ebfbfe36a1c32adfa36}

#### `public HRESULT `[`Accept`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a16c9b260defab3039466e7422edf6c4d)`()` {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1a16c9b260defab3039466e7422edf6c4d}

The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.

From JavaScript this means that the confirm function returns true if Accept is called. And for the prompt function it returns null if Accept is not called and returns the value of ResultText otherwise.

#### `public HRESULT `[`GetDeferral`](#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1aa0fbee695a3e680ea4d54abb7948fc4d)`(`[`IWebView2Deferral`](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral)` ** deferral)` {#interface_web_view2_1_1_i_web_view2_script_dialog_opening_event_args_1aa0fbee695a3e680ea4d54abb7948fc4d}

GetDeferral can be called to return an [IWebView2Deferral](WebView2--IWebView2Deferral.md#interface_web_view2_1_1_i_web_view2_deferral) object.

You can use this to complete the event at a later time.

