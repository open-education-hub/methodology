### Slides

Slides are the main support material for live activities, such as lectures.
They can also be used during practical sessions or talks (such as conferences).
The main role of slides is to provide the visual support material for presenting information and engaging participants in discussions.
Slides are a sequence of pages to be shown live on projector screen, each presenting a given idea.
The lecturer typically walks through slides and presents information by expanding ideas on the slides, and by engaging in discussions based on those ideas.

Slides should ideally have the following properties:

- be visually appealing
- be relevant to the presenter and to the audience
- be ergonomic, easy to observe and to understand
- be dynamic, digestible, show visual information being constructed
- be easy to create by content developers
- as with other Open Education Hub content types, allow easy improvements and contributions

#### `reveal-md`

Our choice of engine for storing and rendering slides is [`reveal-md`](https://github.com/webpro/reveal-md).
`reveal-md` is based on [`reveal.js`](https://revealjs.com/) and allows the development of web-rendered sleek slides.
Moreover, as with other content types used at Open Education Hub, it uses Markdown format.
`reveal-md` fits well with the properties above and, because it uses Markdown, it can be stored in a Git / GitHub repository and, thus, allows easy improvements and contributions.

TODO: features of `reveal-md`
links to documentation, syntax items

To have modular contents for slides, we use [`markdown-pp`](https://github.com/amyreese/markdown-pp) (for Markdown Preprocessor).
With `markdown-pp` we have an index file for slides;
the index file includes actual Markdown files representing sections.

TODO: features of `markdown-pp`
links to documentation

potential items for the future, potential replacement of `markdown-pp`

#### Slide Directories

structure slides in directories as slide decks, following a structure / narrative for the section / chapter

typical structure of slide directory:

- `slides.mdpp`: actual slides
- `slides/`: per section `reveal-md` Markdown files
- `Makefile`: generate output files (HTML, PDF)
- `media/`: media files, as discussed in ["Media" section](#media)

output files are:

- `slides.md`: intermediary aggregated output file (after `markdown-pp` processing)
- `slides.pdf`: PDF output file
  to be viewed with PDF reader
- `_site/`: HTML output
  open `_site/index.html`
  to be viewed with web browser

#### Presenting Slides

2D view of slides for `markdown-pp`

keyboard shortcuts

#### Slide Contents

index slide

slide types:

- section title slides
- media slides

horizontal and vertical slides

slide titles

content types: text, bullets, code, tables

animations, highlights;
wherever possible, text should be replaced with images and animations

