# interface `WebView2::IWebView2WebMessageReceivedEventArgs` {#interface_web_view2_1_1_i_web_view2_web_message_received_event_args}

```
interface WebView2::IWebView2WebMessageReceivedEventArgs
  : public IUnknown
```  

Event args for the WebMessageReceived event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} PWSTR `[`Source`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a5b18111d48ada89e5bd2887bc01f753c) | The URI of the document that sent this web message.
`{property} PWSTR `[`WebMessageAsJson`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a446db5e3af67d29034f6de18996a509a) | The message posted from the webview content to the host converted to a JSON string.
`{property} PWSTR `[`WebMessageAsString`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a79999cc9a664c2cbc03ecf01795f89e7) | If the message posted from the webview content to the host is a string type, this method will return the value of that string.

## Members

#### `{property} PWSTR `[`Source`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a5b18111d48ada89e5bd2887bc01f753c) {#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a5b18111d48ada89e5bd2887bc01f753c}

The URI of the document that sent this web message.

#### `{property} PWSTR `[`WebMessageAsJson`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a446db5e3af67d29034f6de18996a509a) {#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a446db5e3af67d29034f6de18996a509a}

The message posted from the webview content to the host converted to a JSON string.

Use this to communicate via JavaScript objects.

For example the following postMessage calls result in the following WebMessageAsJson values:

```cpp
postMessage({'a': 'b'})      L"{'a': 'b'}"
postMessage(1.2)             L"1.2"
postMessage('example')       L"'example'"
```

#### `{property} PWSTR `[`WebMessageAsString`](#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a79999cc9a664c2cbc03ecf01795f89e7) {#interface_web_view2_1_1_i_web_view2_web_message_received_event_args_1a79999cc9a664c2cbc03ecf01795f89e7}

If the message posted from the webview content to the host is a string type, this method will return the value of that string.

If the message posted is some other kind of JavaScript type this method will fail with E_INVALIDARG. Use this to communicate via simple strings.

For example the following postMessage calls result in the following WebMessageAsString values:

```cpp
postMessage({'a': 'b'})      E_INVALIDARG
postMessage(1.2)             E_INVALIDARG
postMessage('example')       L"example"
```

