---
title: Globals
description: DualEngine Win32 Globals
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: windows-integration
ms.date: 03/04/2024
keywords: dual engine, dualengine, iemode, win32 apps, win32, edge, ie mode, edge html
topic_type: 
- APIRef
api_name:
- DualEngineInitialize
- DualEngineReady
api_type:
- DllExport
api_loction:
- ieframe.dll
---

# Globals

> [!IMPORTANT]
> The DualEngine API is part of a Limited Access Feature (see [LimitedAccessFeatures class](/uwp/api/windows.applicationmodel.limitedaccessfeatures)). For more information or 
> to request an unlock token, contact [Microsoft Support](https://support.serviceshub.microsoft.com/supportforbusiness/create?sapId=d15d3aa2-0512-7cb8-1df9-86221f5cbfde).

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[ACCELERATOREVENTTYPE](#acceleratoreventtype) | Specifies the type of accelerator event.
[ACCELERATORFLAGS](#acceleratorflags) | Specifies the virtual key modifiers present in the accelerator keystroke.
[ATTENTIONSTATE](#attentionstate) | Represents the reason attention is being requested.
[BROWSERVISIBILITY](#browservisibility) | Represents a browser visibility state.
[CERTERRORFLAG](#certerrorflag) | Represents a certificate error.
[DUALENGINE_FOCUSDIRECTION](#dualengine_focusdirection) | Represents the direction of a focus change.
[DualEngineConfigurableSitesFlags](#dualengineconfigurablesitesflags) | Flags to control special engine switching headers and behaviors for configurable sites.
[DUALENGINECONFIGURATION](#dualengineconfiguration) | Configuration options to define desired behavior for the hosted browser window.
[DualEngineCookieIntegrity](#dualenginecookieintegrity) | Represents the Process Integrity Context Level of a cookie.
[DualEngineWindowOpenDisposition](#dualenginewindowopendisposition) | Represents the disposition of a new window.
[EngineSwitchingPolicyFlags](#engineswitchingpolicyflags) | Represents the engine switching policy This policy along with the site list determines when navigations are handled by the browser and when they are sent to the host to handle.
[EXIT_REGION_TYPE](#exit_region_type) | Represents the reason a region exit is occurring.
[FULLSCREENACTION](#fullscreenaction) | Represents a change in full screen state.
[KEYACTION](#keyaction) | Represents a type of key event.
[MOUSEACTION](#mouseaction) | Represents a type of mouse event.
[NAVIGATION_COMMAND](#navigation_command) | Represents a type of Navigation command.
[NAVIGATIONFAILEDREASON](#navigationfailedreason) | Represents a reason that a navigation failed.
[NAVIGATIONFLAGS](#navigationflags) | Flags that indicate the type of navigation that occurred.
[SECURELOCKICON](#securelockicon) | Represents the current page content's security state.
[SITE_PERMISSION_FEATURE_MODE](#site_permission_feature_mode) | Represents the state of a site permission request.
[SITE_PERMISSION_KIND](#site_permission_kind) | Represents the type of site permission being requested.
[SITE_PERMISSION_RESPONSE](#site_permission_response) | Represents a user's response to a site permission request.
[VisibleEntryUpdateOperation](#visibleentryupdateoperation) | Indicates the type of operation of the [VisibleListUpdateEntry](visiblelistupdateentry.md).
[DualEngineInitialize](#dualengineinitialize) | Initializes the DualEngine.
[DualEngineReady](#dualengineready) | Called after Internet Explorer has finished all of its initial setup and the API is ready to use.

## Members

#### ACCELERATOREVENTTYPE

Specifies the type of accelerator event.

> enum [ACCELERATOREVENTTYPE](#acceleratoreventtype)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
ACCELERATOREVENTTYPE_KEYDOWN            | The keydown event.
ACCELERATOREVENTTYPE_CHAR            | The char event.
ACCELERATOREVENTTYPE_KEYUP            | The key up event.

#### ACCELERATORFLAGS

Specifies the virtual key modifiers present in the accelerator keystroke.

> enum [ACCELERATORFLAGS](#acceleratorflags)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
ACCELERATORFLAGS_NONE            | No virtual key modifier.
ACCELERATORFLAGS_CTRL            | The Ctrl virtual key.
ACCELERATORFLAGS_ALT            | The Alt virtual key.
ACCELERATORFLAGS_SHIFT            | The Shift virtual key.

#### ATTENTIONSTATE

Represents the reason attention is being requested.

> enum [ATTENTIONSTATE](#attentionstate)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
ATTENTIONSTATE_DIALOG            | Attention is being requested because of a modal dialog.
ATTENTIONSTATE_FRAMETARGET            | Attention is being requested because the browser was navigated by frame targeting.

#### BROWSERVISIBILITY

Represents a browser visibility state.

> enum [BROWSERVISIBILITY](#browservisibility)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
VISIBILITY_INACTIVE            | The Browser is inactive.
VISIBILITY_MINIMIZED            | The Browser is minimized.
VISIBILITY_VISIBLE            | The Browser is visible.

#### CERTERRORFLAG

Represents a certificate error.

> enum [CERTERRORFLAG](#certerrorflag)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
CERTERRORFLAG_NONE            | No certificate error.
CERTERRORFLAG_INVALID_CA            | Certificate authority is invalid.
CERTERRORFLAG_SEC_CERT_CN_INVALID            | Common name does not match the URL of the page.
CERTERRORFLAG_SEC_CERT_DATE_INVALID            | Date is invalid.
CERTERRORFLAG_WEAK_SIGNATURE            | Signed by a weak digital signature.
CERTERRORFLAG_INSECURE_FALLBACK            | The connection has been downgraded to a less secure protocol.
CERTERRORFLAG_SEC_CERT_REV_FAILED            | The revocation check for the certificate has failed.

#### DUALENGINE_FOCUSDIRECTION

Represents the direction of a focus change.

> enum [DUALENGINE_FOCUSDIRECTION](#dualengine_focusdirection)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
FOCUSDIRECTION_NONE            | The constant for specifying no focus direction.
FOCUSDIRECTION_FORWARD            | The constant for specifying the forward focus direction.
FOCUSDIRECTION_BACKWARD            | The constant for specifying the back focus direction.

#### DualEngineConfigurableSitesFlags

Flags to control special engine switching headers and behaviors for configurable sites.

> enum [DualEngineConfigurableSitesFlags](#dualengineconfigurablesitesflags)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
DualEngineConfigurableSitesFlags_Disabled            | Disables the configurable sites feature.
DualEngineConfigurableSitesFlags_EnableConfigurableSuccessResponse            | Allow configurable site switching on a successful navigation.
DualEngineConfigurableSitesFlags_EnableConfigurableRedirectResponse            | Allow configurable site switching on a redirected navigation.
DualEngineConfigurableSitesFlags_IntranetIsConfigurable            | Treat all Intranet sites as configurable by default.
DualEngineConfigurableSitesFlags_AllowConfigurableRedirectToImplicitNeutral            | Allow configurable site switching when redirecting to neutral sites regardless of site list if the navigation is sticky.

#### DUALENGINECONFIGURATION

Configuration options to define desired behavior for the hosted browser window.

> enum [DUALENGINECONFIGURATION](#dualengineconfiguration)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
DUALENGINECONFIGURATION_NORMAL            | The default behavior of a hosted browser.
DUALENGINECONFIGURATION_DISABLE_ENGINE_SWITCHING            | Disables the engine switching behavior.
DUALENGINECONFIGURATION_POPUP_WINDOW            | Indicates that the hosted window should be treated as a pop-up window.
DUALENGINECONFIGURATION_HYBRID_ENTERPRISE_MODE            | Indicates that the browser is running in Hybrid Enterprise mode.
DUALENGINECONFIGURATION_ALWAYS_WAIT_FOR_UNLOAD            | Indicates that the browser should defer signaling that it closed until it is about to unload.

#### DualEngineCookieIntegrity

Represents the Process Integrity Context Level of a cookie.

> enum [DualEngineCookieIntegrity](#dualenginecookieintegrity)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
DualEngineCookieIntegrity_Auto            | Automatically determine integrity level based on the cookie's domain.
DualEngineCookieIntegrity_Low            | Cookie is Low IL.
DualEngineCookieIntegrity_Medium            | Cookie is Medium IL.
DualEngineCookieIntegrity_Both            | Cookie is both Medium and Low IL.

#### DualEngineWindowOpenDisposition

Represents the disposition of a new window.

> enum [DualEngineWindowOpenDisposition](#dualenginewindowopendisposition)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
DualEngineWindowOpenDisposition_NewForegroundTab            | Window is a new foreground tab.
DualEngineWindowOpenDisposition_NewBackgroundTab            | Window is a new background tab.
DualEngineWindowOpenDisposition_NewPopup            | Window is a new popup window.
DualEngineWindowOpenDisposition_NewWindow            | Window is a new window.

#### EngineSwitchingPolicyFlags

Represents the engine switching policy This policy along with the site list determines when navigations are handled by the browser and when they are sent to the host to handle.

> enum [EngineSwitchingPolicyFlags](#engineswitchingpolicyflags)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
EngineSwitchingPolicyFlags_None            | Default Edge Switching Policy.
EngineSwitchingPolicyFlags_ServerRedirectsSticky            | Server redirects to sites not in the site list stay in the browser.
EngineSwitchingPolicyFlags_ClientRedirectsSticky            | Client redirects to sites not in the site list stay in the browser.
EngineSwitchingPolicyFlags_FormSubmitsSticky            | Form submissions to sites not in the site list stay in the browser.
EngineSwitchingPolicyFlags_UserInitiatedHyperlinkClicksSticky            | User initiated hyperlink navigations to sites not in the site list stay in the browser.
EngineSwitchingPolicyFlags_OtherNavigationsSticky            | All other types of navigation to sites not in the site list stay in the browser.
EngineSwitchingPolicyFlags_RespectAllowRedirectAttribute            | Whether the navigation stays in the browser is respective of the site list entry's `allow-redirect` attribute.
EngineSwitchingPolicyFlags_Max            | For internal use only; do not use.
EngineSwitchingPolicyFlags_Mask            | For internal use only; do not use.

#### EXIT_REGION_TYPE

Represents the reason a region exit is occurring.

> enum [EXIT_REGION_TYPE](#exit_region_type)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
EXIT_REGION_TYPE_NONE            | For internal use only; do not use.
EXIT_REGION_TYPE_FOR_CLOSE            | The region is exiting due to the browser closing.
EXIT_REGION_TYPE_FOR_HISTORY_NAVIGATION            | The region is exiting due to a history navigation.
EXIT_REGION_TYPE_FOR_NEW_NAVIGATION            | The region is exiting due to a new navigation.

#### FULLSCREENACTION

Represents a change in full screen state.

> enum [FULLSCREENACTION](#fullscreenaction)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
ENTER_FULLSCREEN            | Represents media entering full screen.
EXIT_FULLSCREEN            | Represents media exiting full screen.
ENTER_THEATER_FULLSCREEN            | Represents entering theater mode full screen.
EXIT_THEATER_FULLSCREEN            | Represents exiting theater mode full screen.

#### KEYACTION

Represents a type of key event.

> enum [KEYACTION](#keyaction)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
KEYACTION_NONE            | The constant for specifying no key event.
KEYACTION_DOWN            | The constant for specifying a key down event.
KEYACTION_UP            | The constant for specifying a key up event.

#### MOUSEACTION

Represents a type of mouse event.

> enum [MOUSEACTION](#mouseaction)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
MOUSEACTION_NONE            | The constant for specifying no mouse event.
MOUSEACTION_LEFT_CLICK            | The constant for specifying a left click mouse event.

#### NAVIGATION_COMMAND

Represents a type of Navigation command.

> enum [NAVIGATION_COMMAND](#navigation_command)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
NAVIGATION_COMMAND_NONE            | The constant for specifying no navigation command.
NAVIGATION_COMMAND_GO_BACK            | The constant for specifying a go back navigation command.
NAVIGATION_COMMAND_GO_FORWARD            | The constant for specifying a go forward navigation command.
NAVIGATION_COMMAND_RELOAD            | The constant for specifying a reload navigation command, may use a copy of the page that has been cached.
NAVIGATION_COMMAND_RELOAD_COMPLETELY            | The constant for specifying a reload navigation command, requests the latest version of the current page.
NAVIGATION_COMMAND_STOP            | The constant for specifying a stop navigation command.

#### NAVIGATIONFAILEDREASON

Represents a reason that a navigation failed.

> enum [NAVIGATIONFAILEDREASON](#navigationfailedreason)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
NAVIGATIONFAILEDREASON_DEFAULT            | Navigation was aborted, may not necessarily be for a failure.
NAVIGATIONFAILEDREASON_BAD_NETPATH            | Navigation failed because the path could not be found.
NAVIGATIONFAILEDREASON_FAILED            | Navigation failed for some other unspecified reason.

#### NAVIGATIONFLAGS

Flags that indicate the type of navigation that occurred.

> enum [NAVIGATIONFLAGS](#navigationflags)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
NAVIGATIONFLAGS_NONE            | 
NAVIGATIONFLAGS_MAINFRAME            | Indicates that the top level page navigated, e.g.
NAVIGATIONFLAGS_SAMEDOCUMENT            | Indicates that the navigation is within the same document, e.g. local anchor navigations.
NAVIGATIONFLAGS_NEWPAGE            | Indicates that the navigation was to a new page, e.g.
NAVIGATIONFLAGS_LOCATIONREPLACE            | Indicates that the current page navigated because of location.replace.
NAVIGATIONFLAGS_ERRORPAGE            | Indicates that the page navigated to was an internal error page.

#### SECURELOCKICON

Represents the current page content's security state.

> enum [SECURELOCKICON](#securelockicon)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
SECURELOCKICON_UNSECURE            | The current page is not secure.
SECURELOCKICON_MIXED            | The current page is displaying mixed content.
SECURELOCKICON_SECURE            | The current page is secure.

#### SITE_PERMISSION_FEATURE_MODE

Represents the state of a site permission request.

> enum [SITE_PERMISSION_FEATURE_MODE](#site_permission_feature_mode)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
SITE_PERMISSION_FEATURE_MODE_BLOCKED            | Access to the feature was blocked.
SITE_PERMISSION_FEATURE_MODE_ALLOWED            | Access to the feature was allowed.

#### SITE_PERMISSION_KIND

Represents the type of site permission being requested.

> enum [SITE_PERMISSION_KIND](#site_permission_kind)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
SITE_PERMISSION_KIND_POPUP_BLOCKER            | Requesting to set popup blocker permissions.
SITE_PERMISSION_KIND_GEOLOCATION            | Requesting to set geolocation permissions.

#### SITE_PERMISSION_RESPONSE

Represents a user's response to a site permission request.

> enum [SITE_PERMISSION_RESPONSE](#site_permission_response)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
SITE_PERMISSION_REQUEST_DENIED            | Request for the permission was denied.
SITE_PERMISSION_REQUEST_ALLOWED            | Request for the permission was granted.
SITE_PERMISSION_REQUEST_DISMISSED            | Request for the permission was dismissed without a response.

#### VisibleEntryUpdateOperation

Indicates the type of operation of the [VisibleListUpdateEntry](visiblelistupdateentry.md).

> enum [VisibleEntryUpdateOperation](#visibleentryupdateoperation)

 Values                         | Descriptions
--------------------------------|---------------------------------------------
VisibleEntry_Add            | The entry is an addition.
VisibleEntry_Delete            | The entry has been deleted.
VisibleEntry_Update            | The entry has been updated.
VisibleEntry_Done            | For internal use only; do not use.

#### DualEngineInitialize

Initializes the DualEngine.

> public HRESULT APIENTRY [DualEngineInitialize](#dualengineinitialize)(const [DualEngineSessionFactory](dualenginesessionfactory.md) * pSessionFactory, PCWSTR pipeName)

A function that you export. This function is called immediately after Internet Explorer successfully loads the DLL. This is your first chance to set up anything necessary for your application. See [DualEngineInitialize](../concepts/adapter-dll.md#dualengineinitialize) in _Creating a DualEngine adapter plugin DLL_.
#### DualEngineReady

Called after Internet Explorer has finished all of its initial setup and the API is ready to use.

> public HRESULT APIENTRY [DualEngineReady](#dualengineready)()

A function that you export. At this point, it's now possible to call `GetVersionedBrowserSession` and get the Session object, assuming a successful call to `TryUnlockFeature` has been made. See [DualEngineReady](../concepts/adapter-dll.md#dualengineready) in _Creating a DualEngine adapter plugin DLL_.

