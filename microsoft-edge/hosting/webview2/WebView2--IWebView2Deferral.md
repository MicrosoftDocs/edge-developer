# interface `WebView2::IWebView2Deferral` {#interface_web_view2_1_1_i_web_view2_deferral}

```
interface WebView2::IWebView2Deferral
  : public IUnknown
```  

This interface is used to complete deferrals on event args that support getting deferrals via their GetDeferral method.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public HRESULT `[`Complete`](#interface_web_view2_1_1_i_web_view2_deferral_1a30c36ef05419bafa91855f10b0107a11)`()` | Completes the associated deferred event.

## Members

#### `public HRESULT `[`Complete`](#interface_web_view2_1_1_i_web_view2_deferral_1a30c36ef05419bafa91855f10b0107a11)`()` {#interface_web_view2_1_1_i_web_view2_deferral_1a30c36ef05419bafa91855f10b0107a11}

Completes the associated deferred event.

Complete should only be called once for each deferral taken.

