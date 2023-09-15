# Slides

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

## `reveal-md`

Our choice of engine for storing and rendering slides is [`reveal-md`](https://github.com/webpro/reveal-md).
`reveal-md` is based on [`reveal.js`](https://revealjs.com/) and allows the development of web-rendered sleek slides.
Moreover, as with other content types used at Open Education Hub, it uses Markdown format.
`reveal-md` fits well with the properties above and, because it uses Markdown, it can be stored in a Git / GitHub repository and, thus, allows easy improvements and contributions.

Apart from using Markdown, `reveal-md` provides many useful features for designing high-quality visually-appealing slides, derived from its integration of `reveal-js`:

- Output is by default a static web page.
  This makes slides easy to be embedded in websites.
- Output can also be PDF, for offline viewing or printing.
- The use of configuration files to define themes and customize aspect.
- Easy integration of LaTeX.
- Controlling navigation via a JavaScript API.
- Slide animations.
- Speaker notes.

Find more about the features and the slide syntax of `reveal-md` / `reveal.js` on the [`reveal.js` website](https://revealjs.com/).
It takes some time to get a hang of it, but, after getting accustomed, you will be able to quickly create beautiful slides that can then be customized and contributed to.

## `markdown-pp`

To have modular contents for slides, we use [`markdown-pp`](https://github.com/amyreese/markdown-pp) (for Markdown Preprocessor).
With `markdown-pp` we have an index file for slides;
the index file includes actual Markdown files representing sections.

Below is a sequence of a slide deck for [the `operating-systems` repository](https://github.com/open-education-hub/operating-systems/blob/main/content/compute/lecture/slides.mdpp):

```text
!INCLUDE "slides/intro.md"

!INCLUDE "slides/processes.md"

!INCLUDE "slides/threads.md"

!INCLUDE "slides/process-attributes.md"
```

This is a `markdown-pp` feature that includes other Markdown files.
They are then preprocessed in a final Markdown file.

Unfortunately, `markdown-pp` is no longer in active development.
We are looking for alternatives for slide preprocessing.
It may be the case that, in the near future, we will replace `markdown-pp` with another solution.

## Storing Slides

Slides are typically stored in the `slides/` subdirectory of a given topic in a chapter of a repository.
Slides contents are written down in Markdown files, following the storyline of the corresponding topic.
Contents include formatted text (simple, bold, bullets, aligned, animations), media files (audio, video), code snippets.
The expected layout of a slides directory is:

```text
|-- Makefile
|-- media/
|-- slides/
`-- slides.mdpp
```

where:

- `slides.mdpp`: actual slides
- `slides/`: per section `reveal-md` Markdown files
- `Makefile`: generate output files (HTML, PDF)
- `media/`: media files, as discussed in [the "Media" section](../../media/reading/read.md)

If a slide deck is created from slides from multiple topics, then the `Makefile` and `slides.mdpp` will be placed in the chapter directory.
As an example, see the contents for the [`operating-systems` repository](https://github.com/open-education-hub/operating-systems/tree/main/content/software-stack):

```text
|-- Makefile
|-- overview/
|   |-- media/
|   `-- slides/
|-- software-types/
|   |-- media/
|   `-- slides/
|-- operating-system/
|   |-- media/
|   `-- slides/
|-- operating-system-types/
|   |-- media/
|   `-- slides/
|-- modern-software-stacks/
|   |-- media/
|   `-- slides/
`-- slides.mdpp
```

with `slides.mdpp` referencing the actual Markdown contents:

```text
---
title: "OS: Software Stack"
revealOptions:
  background-color: 'aquamarine'
  transition: 'none'
  slideNumber: true
  autoAnimateDuration: 0.0
---

# Software Stack

1. [The Software Stack](#software-stack)
1. [Types of Software](#types-of-software)
1. [The Operating System](#operating-systems)
1. [Types of Operating Systems](#types-of-operating-systems)
1. [The Software Stack in Modern Systems](#modern-software-stacks)

!INCLUDE "overview/slides/software-stack.md"
!INCLUDE "software-types/slides/types-of-software.md"
!INCLUDE "operating-system/slides/operating-system.md"
!INCLUDE "operating-system-types/slides/os-types.md"
!INCLUDE "modern-software-stacks/slides/modern-software-stacks.md"
```

## Slide Contents

Actual slide contents are located in Markdown files for each topic.
A specialized index file, such as the `slides.mdpp` file above, references actual slide contents for the desired structure.
Typically, educators would be required to only alter the `slides.mdpp` file to select and order slides according to their needs and preferences.

An index file, as above, would consist of:

- references to slide sections, as in the line `[The Software Stack](#software-stack)`
- inclusion of actual slide contents files, as in the line `!INCLUDE "overview/slides/software-stack.md"`

Each actual content slide Markdown file will contain information related to the topic, using the features and syntax of `reveal-md` / `reveal.js`.
There are some common types of content that can be featured on slides, either as the sole type of content, or combined:

- text: consisting only / mostly of text items, that may be structured as bullets
- title: consisting of a title, or one line, to introduce a new topic
- code snippets: consisting of sequence of code to demonstrate a concept
- media: consisting of images, videos or audio items embedded in the slide
- table: consisting of a table or a comparison of ideas

When creating contents, note that `reveal-md` / `reveal.js` uses a two dimensional slide layout, apparent when using web output.
A column of slides typically corresponds to an idea that is gradually developed in consecutive slides.
A new idea is introduced in a new column.
So, a vertical slide transition means there is a new slide pertaining to the same idea.
A horizontal slide transition means the introduction of a new idea.

As good practices for creating high-quality visually-appealing slides, consider the following recommendations:

- Whenever possible, text should be replaced with images.
- As much as possible, text should be animated.
  Large quantities of text are difficult to grasp.
- Use highlighting, text formatting and other effects to increase the readability of slides.
- Keep slides simple and readable.
  Consider splitting an idea in multiple slides to make it easier to be consumed.

## Generating Slides

Slides are generated to be made available to learners and to be used in educational activities.
The content developer would also build the generate the slides and check out the web output before committing the updates.

Slide generation typically consists of three steps:

1. preprocess slides
1. generate HTML output
1. generate PDF output

These steps are generally encoded in the `Makefile`.

To preprocess slides, we use `markdownpp`.
The typical command for doing this is:

```console
markdownpp slides.mdpp -o slides.md
```

This processes the `slides.mdpp` file and generates the `slides.md` file.

To generate a static HTML output, use `reveal-md`:

```console
reveal-md slides.md --static _site/
```

The `_site/` directory stores the HTML output.
The index file `_site/index.html` can be opened in a web browser.

A web page can also be opened directly, without generating static contents:

```console
reveal-md slides.md
```

This opens up a web page as advertised by its output:

```text
Reveal-server started at http://localhost:1948
The slides are at http://localhost:1948/slides.md
```

This is required for generating a PDF output.
We use [`decktape`](https://github.com/astefanutti/decktape) to generate PDF slides;
`decktape` is reliant on the web page being available with the above step.
The command used is:

```console
docker run --rm -t --net=host -v $(pwd):/slides astefanutti/decktape --size='2048x1536' http://localhost:1948/slides.md#/ slides.pdf
```

This ends up generating a PDF file from the web page above:

```text
Loading page http://localhost:1948/slides.md#/ ...
Loading page finished with status: 200
Reveal JS plugin activated
Printing slide #/15/7   (69/69) ...
Printed 69 slides
```

The `slides.pdf` file stores the output in PDF format.

## Delivering Slides

Once slides are generated and published they are ready for delivery during educational activities.
And to be used by learners as part of [self-study activities](../../../use-deliver/self-study/reading/read.md).

Note that, when using HTML output (the most likely case), slides are presented in the two dimensional format.
This means that the use of left arrow or right arrow keys will only traverse the slides horizontally.

To properly traverse the slides, consider the "legend" in the bottom right corner of the resulting HTML page.
And use all arrow keys to navigate.
Alternatively, you can use the other `n` and `p` keys for _next_ and _previous_ slide.
