---
description: See the WebDriver API commands that Microsoft Edge currently supports.
title: Webdriver commands - Microsoft Edge Development
author: erikadoyle
---

The WebDriver API is a platform and language-neutral interface and wire protocol allowing programs or scripts to control the behavior of a web browser. The Microsoft Edge implementation of WebDriver supports commands from both the W3C WebDriver Specification and the JSON Wire Protocol. Here's how to [get started with WebDriver for Microsoft Edge](./dev-guide/tools/webdriver.md).

# WebDriver Server Command Line Flags
List of command line flags for the WebDriver server.

Name|Description|Available Release
:----------------| :-------------| :------------
host|Host IP to use for the WebDriver server (default: localhost)|14393|
port|Port to use for the WebDriver server (default: 17556)|14393|
package|ApplicationUserModelId (AUMID) for the application to be launched by the WebDriver server|14393|
verbose|Outputs requests received and responses sent by the WebDriver server|14393|
silent|Outputs nothing|Insiders|

# [W3C WebDriver Specification Support](https://w3c.github.io/webdriver/webdriver-spec.html)
The support on a per command basis for the W3C WebDriver Specification.

Locator Strategies| Status|Available Release
:---------------| :----------- | :--------------
[CSS selector](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-css-selector)|Supported|10240|
[Link text selector](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-link-text)|Supported|10240|
[Partial link text selector](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-partial-link-text)|Supported|10240|
[XPath selector](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-xpath-selector)|Supported|10586|

Method|URI Template|Command|Status|Available Release/Priority
:---------------| :------------ | :----------- | :----------- | :--------------
POST|/session|[New Session](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-new-session)|Supported|10240|
DELETE|/session/{session id}|[Delete Session](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-session)|Supported|10240|
GET|/status|[Status](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-status)|Supported|10240|
GET|/session/{session id}/timeouts|[Get Timeouts](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-timeout)|Not Supported|Priority 3|
POST|/session/{session id}/timeouts|[Set Timeouts](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-set-timeouts)|Supported|10240|
POST|/session/{session id}/url|[Go](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-go)|Supported|10240|
GET|/session/{session id}/url|[Get Current URL](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-current-url)|Supported|10240|
POST|/session/{session id}/back|[Back](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-back)|Supported|10240|
POST|/session/{session id}/forward|[Forward](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-forward)|Supported|10240|
POST|/session/{session id}/refresh|[Refresh](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-refresh)|Supported|10240|
GET|/session/{session id}/title|[Get Title](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-title)|Supported|10240|
GET|/session/{session id}/window|[Get Window Handle](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-handle)|Supported|Insiders|
DELETE|/session/{session id}/window|[Close Window](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-close-window)|Supported|10586|
POST|/session/{session id}/window|[Switch to Window](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-switch-to-window)|Supported|10586|
GET|/session/{session id}/window/handles|[Get Window Handles](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-handles)|Supported|Insiders|
POST|/session/{session id}/frame|[Switch To Frame](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-switch-to-frame)|Supported|10586|
POST|/session/{session id}/frame/parent|[Switch to Parent Frame](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-switch-to-parent-frame)|Supported|10586|
GET|/session/{session id}/window/rect|[Get Window Rect](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-window-rect)|Not&nbsp;Supported|Priority 3|
POST|/session/{session id}/window/rect|[Set Window Rect](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-set-window-rect)|Not&nbsp;Supported|Priority 3|
POST|/session/{session id}/window/maximize|[Maximize Window](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-maximize-window)|Not&nbsp;Supported|Priority 3|
POST|/session/{session id}/window/minimize|[Minimize Window](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-minimize-window)|Not&nbsp;Supported|Priority 3|
POST|/session/{session id}/window/fullscreen|[Fullscreen Window](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-fullscreen-window)|Not&nbsp;Supported|Priority 4|
GET|/session/{session id}/element/active|[Get Active Element](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-active-element)|Supported|10586|
POST|/session/{session id}/element|[Find Element](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-find-element)|Supported|10586|
POST|/session/{session id}/elements|[Find Elements](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-find-elements)|Supported|10586|
POST|/session/{session id}/element/{element id}/element|[Find Element From Element](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-find-element-from-element)|Supported|10586|
POST|/session/{session id}/element/{element id}/elements|[Find Elements From Element](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-find-elements-from-element)|Supported|10586|
GET|/session/{session id}/element/{element id}/selected|[Is Element Selected](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-is-element-selected)|Supported|10240|
GET|/session/{session id}/element/{element id}/attribute/{name}|[Get Element Attribute](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-attribute)|Supported|10240|
GET|/session/{session id}/element/{element id}/property/{name}|[Get Element Property](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-property)|Not&nbsp;Supported|Priority 2|
GET|/session/{session id}/element/{element id}/css/{property name}|[Get Element CSS Value](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-css-value)|Supported|10240|
GET|/session/{session id}/element/{element id}/text|[Get Element Text](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-text)|Supported|10240|
GET|/session/{session id}/element/{element id}/name|[Get Element Tag Name](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-tag-name)|Supported|10240|
GET|/session/{session id}/element/{element id}/rect|[Get Element Rect](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-rect)|Supported|10586|
GET|/session/{session id}/element/{element id}/enabled|[Is Element Enabled](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-is-element-enabled)|Supported|10240|
POST|/session/{session id}/element/{element id}/click|[Element Click](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-click)|Supported|10240|
POST|/session/{session id}/element/{element id}/clear|[Element Clear](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-clear)|Supported|10240|
POST|/session/{session id}/element/{element id}/sendKeys|[Element Send Keys](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-send-keys)|Not&nbsp;Supported|Priority 2|
GET|/session/{session id}/source|[Get Page Source](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-page-source)|Supported|10586|
POST|/session/{session id}/execute/sync|[Execute Script](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-script)|Supported|Insiders|
POST|/session/{session id}/execute/async|[Execute Async Script](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-execute-async-script)|Supported|Insiders|
GET|/session/{session id}/cookie|[Get All Cookies](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-all-cookies)|Supported|10240|
GET|/session/{session id}/cookie/{name}|[Get Named Cookie](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-cookie)|Supported|10240|
POST|/session/{session id}/cookie|[Add Cookie](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-add-cookie)|Supported|10240|
DELETE|/session/{session id}/cookie/{name}|[Delete Cookie](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-cookie)|Supported|10240|
DELETE|/session/{session id}/cookie|[Delete All Cookies](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-delete-all-cookies)|Supported|10586|
POST|/session/{session id}/actions|[Perform Actions](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-perform-actions)|Not&nbsp;Supported|Priority 3|
DELETE|/session/{session id}/actions|[Release Actions](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-release-actions)|Not&nbsp;Supported|Priority 3|
POST|/session/{session id}/alert/dismiss|[Dismiss Alert](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-dismiss-alert)|Supported|Insiders|
POST|/session/{session id}/alert/accept|[Accept Alert](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-accept-alert)|Supported|Insiders|
GET|/session/{session id}/alert/text|[Get Alert Text](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-alert-text)|Supported|Insiders|
POST|/session/{session id}/alert/text|[Send Alert Text](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-send-alert-text)|Supported|Insiders|
GET|/session/{session id}/screenshot|[Take Screenshot](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-take-screenshot)|Supported|10240|
GET|/session/{session id}/element/{element id}/screenshot|[Take Element Screenshot](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-take-element-screenshot)|Supported|10240|

# [JSON Wire Protocol Support](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)
The support on a per command basis for the JSON Wire Protocol.

HTTP Method|Path|Status|Available Release/Priority
:---------------| :------------ | :----------- | :--------------
GET|[/status](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#status)|Supported|10240|
POST|[/session](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#session-1)|Supported|10240|
GET|[/sessions](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessions)|Supported|10240|
GET|[/session/:sessionId](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionid)|Supported|10240|
DELETE|[/session/:sessionId](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionid)|Supported|10240|
POST|[/session/:sessionId/timeouts](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeouts)|Supported|10240|
POST|[/session/:sessionId/timeouts/async_script](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsasync_script)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/timeouts/implicit_wait](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsimplicit_wait)|Supported|10586|
GET|[/session/:sessionId/window_handle](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handle)|Supported|10586|
GET|[/session/:sessionId/window_handles](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow_handles)|Supported|10586|
GET|[/session/:sessionId/url](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidurl)|Supported|10240|
POST|[/session/:sessionId/url](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidurl)|Supported|10240|
POST|[/session/:sessionId/forward](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidforward)|Supported|10240|
POST|[/session/:sessionId/back](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidback)|Supported|10240|
POST|[/session/:sessionId/refresh](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidrefresh)|Supported|10240|
POST|[/session/:sessionId/execute](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute)|Supported|10240|
POST|[/session/:sessionId/execute_async](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidexecute_async)|Supported|10586|
GET|[/session/:sessionId/screenshot](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidscreenshot)|Supported|10240|
GET|[/session/:sessionId/ime/available_engines](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeavailable_engines)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/ime/active_engine](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactive_engine)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/ime/activated](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivated)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/ime/deactivate](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimedeactivate)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/ime/activate](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidimeactivate)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/frame](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframe)|Supported|10586|
POST|[/session/:sessionId/frame/parent](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidframeparent)|Supported|10586|
POST|[/session/:sessionId/window](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow)|Supported|10586|
DELETE|[/session/:sessionId/window](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow)|Supported|10586|
POST|[/session/:sessionId/window/:windowHandle/size](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandlesize)|Supported|10586|
GET|[/session/:sessionId/window/:windowHandle/size](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandlesize)|Supported|10586|
POST|[/session/:sessionId/window/:windowHandle/position](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandleposition)|Supported|10586|
GET|[/session/:sessionId/window/:windowHandle/position](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandleposition)|Supported|10586|
GET|[/session/:sessionId/window/:windowHandle/maximize](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindowwindowhandlemaximize)|Supported|10586|
GET|[/session/:sessionId/cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidcookie)|Supported|10586|
POST|[/session/:sessionId/cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidcookie)|Supported|10240|
DELETE|[/session/:sessionId/cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidcookie)|Supported|10586|
DELETE|[/session/:sessionId/cookie/:name](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidcookiename)|Supported|10240|
GET|[/session/:sessionId/source](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsource)|Supported|10586|
GET|[/session/:sessionId}/title](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtitle)|Supported|10240|
POST|[/session/:sessionId/element](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelement)|Supported|10586|
POST|[/session/:sessionId/elements](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelements)|Supported|10586|
POST|[/session/:sessionId/element/active](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementactive)|Supported|10586|
GET|[/session/:sessionId/element/:id](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementid)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/element/:id/element](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelement)|Supported|10586|
POST|[/session/:sessionId/element/:id/elements](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidelements)|Supported|10586|
POST|[/session/:sessionId/element/:id/click](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclick)|Supported|10240|
POST|[/session/:sessionId/element/:id/submit](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsubmit)|Supported|10586|
GET|[/session/:sessionId/element/:id/text](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidtext)|Supported|10240|
POST|[/session/:sessionId/element/:id/value](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidvalue)|Supported|10240|
POST|[/session/:sessionId/keys](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidkeys)|Supported|10586|
GET|[/session/:sessionId/element/:id/name](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidname)|Supported|10240|
POST|[/session/:sessionId/element/:id/clear](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclear)|Supported|10240|
GET|[/session/:sessionId/element/:id/selected](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidselected)|Supported|10240|
GET|[/session/:sessionId/element/:id/enabled](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidenabled)|Supported|10240|
GET|[/session/:sessionId/element/:id/attribute/:name](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidattribute/:name)|Supported|10240|
GET|[/session/:sessionId/element/:id/equals/:other](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidequals/:other)|Supported|10586|
GET|[/session/:sessionId/element/:id/displayed](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementiddisplayed)|Supported|10240|
GET|[/session/:sessionId/element/:id/location](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation)|Supported|10586|
GET|[/session/:sessionId/element/:id/location_in_view](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation_in_view)|Supported|10586|
GET|[/session/:sessionId/element/:id/size](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidsize)|Supported|10586|
GET|[/session/:sessionId/element/:id/css/:propertyName](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidcss/:propertyName)|Supported|10240|
GET|[/session/:sessionId/orientation](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidorientation)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/orientation](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidorientation)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/alert_text](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidalert_text)|Supported|10240|
POST|[/session/:sessionId/alert_text](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidalert_text)|Supported|10586|
POST|[/session/:sessionId/accept_alert](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidaccept_alert)|Supported|10240|
POST|[/session/:sessionId/dismiss_alert](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddismiss_alert)|Supported|10240|
POST|[/session/:sessionId/moveto](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidmoveto)|Supported|10586|
POST|[/session/:sessionId/click](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidclick)|Supported|10240|
POST|[/session/:sessionId/buttondown](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttondown)|Supported|10586|
POST|[/session/:sessionId/buttonup](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttonup)|Supported|10586|
POST|[/session/:sessionId/doubleclick](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessioniddoubleclick)|Supported|10586|
POST|[/session/:sessionId/touch/click](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchclick)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/down](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdown)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/up](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchup)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/move](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchmove)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/scroll](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchscroll)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/scroll](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchscroll-1)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/doubleclick](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchdoubleclick)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/longclick](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchlongclick)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/flick](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchflick)|Not&nbsp;Supported|Priority 3|
POST|[/session/:sessionId/touch/flick](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtouchflick-1)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/location](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocation)|Supported|10586|
POST|[/session/:sessionId/location](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocation)|Supported|10586|
GET|[/session/:sessionId/local_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storage)|Supported|10586|
POST|[/session/:sessionId/local_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storage)|Supported|10586|
DELETE|[/session/:sessionId/local_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storage)|Supported|10586|
GET|[/session/:sessionId/local_storage/key/:key](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagekeykey)|Supported|10586|
DELETE|[/session/:sessionId/local_storage/key/:key](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagekeykey)|Supported|10586|
GET|[/session/:sessionId/local_storage/size](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlocal_storagesize)|Supported|10586|
GET|[/session/:sessionId/session_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storage)|Supported|10586|
POST|[/session/:sessionId/session_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storage)|Supported|10586|
DELETE|[/session/:sessionId/session_storage](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storage)|Supported|10586|
GET|[/session/:sessionId/session_storage/key/:key](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagekeykey)|Supported|10586|
DELETE|[/session/:sessionId/session_storage/key/:key](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagekeykey)|Supported|10586|
GET|[/session/:sessionId/session_storage/size](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidsession_storagesize)|Supported|10586|
GET|[/session/:sessionId/log](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlog)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/log/types](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidlogtypes)|Not&nbsp;Supported|Priority 3|
GET|[/session/:sessionId/application_cache/status](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidapplication_cachestatus)|Supported|10586|
