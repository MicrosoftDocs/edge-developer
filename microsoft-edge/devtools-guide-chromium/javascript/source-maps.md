---
title: Map Preprocessed Code to Source Code
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Meggin Kearney and Paul Bakaus

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# Map Preprocessed Code to Source Code   




Keep your client-side code readable and debuggable even after you combine, minify, or compile it.  Use source maps to map your source code to your compiled code.  

### Summary  

*   Use Source Maps to map minified code to source code. You are then able to read and debug compiled code in the original source.  
*   Only use preprocessors capable of producing Source Maps.  
*   Verify that your web server is able to serve Source Maps.  

<!--todo: add link to preprocessors capable of producing Source Maps when section is available -->  
<!--[]: /web/tools/setup/setup-preprocessors?#supported_preprocessors ""  -->  

## Get started with preprocessors  

This article explains how to interact with JavaScript Source Maps in the DevTools Sources Panel.  <!--For a first overview of what preprocessors are, how each may help, and how Source Maps work; see Set Up CSS & JS Preprocessors.  -->  

<!--todo: add link to Set Up CSS & JS Preprocessors when section is available -->  
<!--[]: /web/tools/setup/setup-preprocessors#debugging-and-editing-preprocessed-content ""  -->  

## Use a supported preprocessor  

You need to use a minifier that is capable of creating source maps.  <!--For the most popular options, see the preprocessor support section.  -->  For an extended view, see the [Source maps: languages, tools and other info][GitHubWikiSourceMapsLanguagesTools] wiki page.  

<!--todo: add link to see the preprocessor support section when section is available -->  
<!--[]: /web/tools/setup/setup-preprocessors?#supported_preprocessors ""  -->  

The following types of preprocessors are commonly used in combination with Source Maps:  

*   Transpilers \([Babel][BabelJS], [Traceur][GitHubWikiGoogleTraceurCompiler]\)  
*   Compilers \([Closure Compiler][GitHubGoogleClosureCompiler], [TypeScript][TypeScriptMain], [CoffeeScript][CoffeeScriptMain], [Dart][DartMain]\)  
*   Minifiers \([UglifyJS][GitHubMishooUglifyJS]\)  

## Source Maps in DevTools Sources panel  

Source Maps from preprocessors cause DevTools to load your original files in addition to your minified ones.  You then use the originals to set breakpoints and step through code.  Meanwhile, Microsoft Edge is actually running your minified code. This gives you the illusion of running a development site in production.  

When running Source Maps in DevTools, you should notice that the JavaScript is not compiled and you are able to see all the individual JavaScript files it references.  This is using source mapping, but behind the scenes actually runs the compiled code.  Any errors, logs, and breakpoints map to the dev code for awesome debugging!  So in effect it gives you the illusion that you are running a dev site in production.  

### Enable Source Maps in settings  

Source Maps are enabled by default <!--\(as of Microsoft Edge 39\)-->, but if you want to double-check or enable them; first open DevTools, click the **Customize and control DevTools** `...` button, and select **Settings**.  On the **Preferences** pane, under **Sources**, check **Enable JavaScript Source Maps**.  You may also check **Enable CSS Source Maps**.  

![Enable Source Maps][ImageSourceMaps]  

### Debugging with Source Maps  

When debugging your code and Source Maps enabled, Source Maps show in two places:  

1.  In the console \(the link to source should be the original file, not the generated one\)  
1.  When stepping through code \(the links in the call stack should open the original source file\)  

<!--todo: add link to debugging your code when section is available -->  
<!--[DebugBreakpointsStepCode]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/debug/breakpoints/step-code ""  -->  

## @sourceURL and displayName  

While not part of the Source Map spec, the `@sourceURL` allows you to make development much easier when working with evals.  This helper looks very similar to the `//# sourceMappingURL` property and is actually mentioned in the Source Map V3 specifications.  

By including the following special comment in your code, which is be evaled, you are able to name evals and inline scripts and styles so each appears as more logical names in your DevTools.  

```javascript
//# sourceURL=source.coffee
```  

Navigate to the following page.  

*   [demo][CssNinjaDemoSourceMapping]

Follow these steps.  

1.  Open the DevTools and go to the **Sources** panel.  
1.  Enter in a filename into the **_Name your code:_** input field.  
1.  Click on the **compile** button.  
1.  An alert appears with the evaluated sum from the CoffeeScript source.  

If you expand the **_Sources_** sub-panel you now see a new file with the custom filename you entered earlier.  If you double-click to view this file it contains the compiled JavaScript for the original source.  On the last line, however, is a `// @sourceURL` comment indicating the original source file.  This may help you with debugging while working with language abstractions.  

![Working with sourceURL][ImageCoffeeScript]  

<!--## Feedback   -->  



<!-- image links -->  

[ImageSourceMaps]: images/settings-preferences-sources-enable-javascript-source-maps.msft.png "Enable Source Maps"  
[ImageCoffeeScript]: images/sources-page-coffeeeeeeee.msft.png "Working with sourceURL"  

<!-- links -->  

[BabelJS]: https://babeljs.io "Babel is a JavaScript compiler"  
[CoffeeScriptMain]: https://coffeescript.org "CoffeeScript"  
[CssNinjaDemoSourceMapping]: https://www.thecssninja.com/demo/source_mapping/compile.html "A simple example of //# sourceURL eval naming"  
[DartMain]: https://www.dartlang.org "Dart programming language"  
[GitHubGoogleClosureCompiler]: https://github.com/google/closure-compiler "google/closure-compiler | GitHub"  
[GitHubMishooUglifyJS]: https://github.com/mishoo/UglifyJS "mishoo/UglifyJS | GitHub"  
[GitHubWikiSourceMapsLanguagesTools]: https://github.com/ryanseddon/source-map/wiki/Source-maps:-languages,-tools-and-other-info "Source maps: languages, tools and other info | GitHub wiki"  
[GitHubWikiGoogleTraceurCompiler]: https://github.com/google/traceur-compiler/wiki/Getting-Started "Getting Started - google/traceur-compiler | GitHub wiki"  
[TypeScriptMain]: https://www.typescriptlang.org "TypeScript"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) and is authored by [Meggin Kearney][MegginKearney] \(Tech Writer\) and [Paul Bakaus][PaulBakaus] \(Open Web Developer Advocate, Google: Tools, Performance, Animation, and UX\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  
[PaulBakaus]: https://developers.google.com/web/resources/contributors/pbakaus  
