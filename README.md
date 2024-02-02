# Microsoft Edge Developer documentation
test

<!-- ====================================================================== -->
## Microsoft Open Source Code of Conduct

See [Microsoft Open Source Code of Conduct](CODE_OF_CONDUCT.md).


<!-- ====================================================================== -->
## Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode) (see [LICENSE](LICENSE)), and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT) (see [LICENSE-CODE](LICENSE-CODE)).

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.  The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.  Microsoft general trademark guidelines can be found at [Microsoft Trademark and Brand Guidelines](https://go.microsoft.com/fwlink/?LinkID=254653).

Privacy information can be found at [https://privacy.microsoft.com](https://privacy.microsoft.com).

Microsoft and any contributors reserve all others rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel or otherwise.


<!-- ====================================================================== -->
## Contributing

This repo, `edge-developer`, is the repository for the source Markdown files for the Microsoft Edge Developer documentation.  The resulting rendered documentation is hosted at [Microsoft Edge documentation](https://learn.microsoft.com/microsoft-edge/developer/).  This repo also includes the hub page for the Microsoft Edge Enterprise documentation and the Microsoft Edge Developer documentation.  The source files for the Microsoft Edge Enterprise documentation aren't in this repo, but are in the [Edge-Enterprise](https://github.com/MicrosoftDocs/Edge-Enterprise) repo.

If you want to include new coverage or have feedback, consider [contributing](CONTRIBUTING.md).  You can edit the existing content, add new content, or report new [issues](https://github.com/MicrosoftDocs/edge-developer/issues).  The Microsoft Edge team reviews a look at your suggestions and works to incorporate the suggestions into the docs.

For the latest implementation status and future plans for web platform features in Microsoft Edge, see [Microsoft Edge Platform Status](https://developer.microsoft.com/microsoft-edge/status). For the data that's used to populate the above status site, see [https://github.com/MicrosoftEdge/Status](https://github.com/MicrosoftEdge/Status).


### File names and directories

*  When adding a webpage (an article implemented as a .md file), you must add an entry for the new webpage in [toc.yml](microsoft-edge/toc.yml), for the article to appear in the Table of Contents.

*  A directory can contain more directories or `readme.md` files.

*  Folder/directory names are dash-separated (for example, `f12-tools`) and lowercase.  Directories are used in URLs on the `learn.microsoft.com` site.  Avoid using underscores, PascalCase, or camelCase.


<!-- ====================================================================== -->
## Markdown tagging

* [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - GitHub Flavored Markdown, in _GitHub Docs_.
* [Docs Markdown reference](https://learn.microsoft.com/contribute/markdown-reference) - in _Docs Contributor Guide_.


### Images

```md
![Alt text](articlefilename-images/image-file-name.png)
```

This repo uses Markdown image tagging.  See [Images](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).
