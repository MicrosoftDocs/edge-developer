---
description: Here's the info you need to develop on Microsoft Edge.
title: Microsoft Edge documentation
author: erikadoyle
---

# Microsoft Edge documentation

This is the repository for Microsoft Edge **documentation** hosted at [https://dev.windows.com/en-us/microsoft-edge/platform/documentation/](https://dev.windows.com/en-us/microsoft-edge/platform/documentation/).

Over the coming months, we will add new sections and content to enhance the documentation experience. If you would like to see new coverage or have feedback, please consider [**contributing**](/CONTRIBUTING.md).  You can edit the existing content, add new content, or simply create new [issues](https://github.com/MicrosoftEdge/MicrosoftEdge-Documentation/issues). We’ll take a look at your suggestions and will work together to incorporate them into the docs.

Find the data for the [`Status`](https://dev.windows.com/en-us/microsoft-edge/platform/status/) page at: https://github.com/MicrosoftEdge/Status. The `Status` page provides the latest implementation status and future plans for web platform features in Microsoft Edge.

# Conventions

  - Docs are grouped by folders (the structure parallels the information architecture (IA) on the site)
  - A folder can contain more folders or a `readme.md`
  - One `.md` file per folder
  - Folder/directory names are dash-separated (e.g., `f12-tools`) and lowercase. They are used in URLs on the Microsoft Edge Dev site. Don't use underscores or PascalCase/camelCase.
  - Relative links are formatted with only the folder name of the referenced readme doc. E.g.,   `../performance/`  (not `../performance/readme.md`)
  - Section headers require a space after hashes, formatted as  `## Section Heading` *(not `##Section Heading`)*. Otherwise, the markdown doesn't parse correctly into the site.

# Styling

The following sections provide an overview of common element styles used in the developer portal site.

## Header elements

Only the `h3` and the `h4` elements have a faint separator line underneath them. `h1` (use for main title only) and `h2` are simply larger text.

### Subsection header

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### An h4 tag provides better visual hierarchy than bold text.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### Also a small header

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Other text elements

These other text elements have styling available:

* Unordered lists
* Have regular bullets
   * You can also nest bullets
   * Bullets lists should have more than one entry.
* Pretty standard

1. Ordered lists
2. Use regular ol' western-style numbering.
3. Should be used only when a list truly has order.

_________________________

Horizontal rules are available. We suggest using them sparingly to reduce clutter.
Do not combine  horizontal rules with heading tags; some already used line styles for visual hierarchy.

## Displaying code

You can use inline `code` Markdown syntax (with the backticks).

Or you can display blocks of code like so:

```css
body {
	background: #fff;
}
```

## Tables

| You can     | use headers | on tables    |
|-------------|-------------|-------------:|
| Left-aligned| Unless a #  | 456          |
| Text value  | More text   | $0.00        |

## Notes

Use notes sparingly. They are brightly colored blocks designed to highlight "don't-miss-it" information.

We have three different versions of notes currently styled:

* `>note` (default styling)
* `>note.warning`
* `>note.error`

Respectively, those look like:

![Note patterns](media/notes.png)

### How they work

You precede a single line of Markdown with the `>note.*` syntax. No closing tag is needed. See example below.

```
> [!WARNING]
> Hello.  Yes.  I am a warning note that has been automagically created. My text may wrap to more than one line when the Markdown is parsed, but I must include all my information within a single (sometimes very long line) in the Markdown itself.```

For multi-line blockquote notes, use a > in front of each line of the notes as seen in the example below.

```
>note(.warning/.error) sometext
>next line of the note
>one more line for the note
```

But how do the titles ("Note", "Warning", "Error") get inserted into the note output? The custom Markdown tag actually does a lot
more than you might think. By using `>note.warning`, you are creating a `div` with class `.note--warning`, and adding to that `div` a
title `"Warning"`.

If you were to do `>note.pineapple`, you would get a `div` with class `.note--pineapple`, and a title of "Pineapple". Because we have not explicitly styled `.note--pineapple`, the styling would simply match the default note styling.

File an issue if you really need a custom note class to be styled to not look "default". For the most part, though, you should
be using the types provided so that the documentation doesn't turn into a smorgasbord of color.

## Images

Images (like the one above) are styled to be fluid; that is, they  scale proportionally and never display larger
than the element containing the documentation article. Currently, that containing element spans up to 875px wide at its
largest, so that should probably be the largest image size you use.

P.S. If your computer automatically inserts "smart quotes" into content, consider disabling this feature when writing markup or code samples.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
