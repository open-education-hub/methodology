# Reading

The reading content type is the most common form of storing educational material (or information, in general).
As the name suggests the content is developed to be read, therefore it comes in the form of text.

The reading content type is typically used standalone or in conjunction with other types of content to explain topics.
When delivering content, reading is used in conjunction with [media](../../media/reading/read.md) for offline self-study support as part of [lectures](../../../use-deliver/lectures/reading/read.md) or combined with [media](../../media/reading/read.md), [guides](../../guides/reading/read.md) and [drills](../../drills/reading/read.md) as part of [practical-sessions](../../../use-deliver/practical-sessions/reading/read.md).

To develop reading content we use the [Markdown syntax](https://www.markdownguide.org/basic-syntax) and the following guidelines:

- the heading level of a title is given by the number of `#`s that precede it.
For example, the title of a document is preceded by a single `#`, whereas the chapters are preceded by two.
- each sentence is written on a new line.
- paragraphs are separated by an empty line.
- links should be used as hyperlinks by using the `[]()` syntax as in [this example](https://theuselessweb.com/).

To enforce the guidelines we use [automated linter checks](https://github.com/super-linter/super-linter#readme).
Besides the mentioned guidelines, the linter implements checks for other minor style conventions (such as how to define lists, where should new lines be placed and others).
However, for the majority of cases, the above should be sufficient.

The reading content type is stored as a directory named `reading` in the course repository.
Each topic should contain a `reading` directory that includes one or multiple Markdown files, depending on how the topic may be broken down into independent reading parts.

When developing such materials we recommend that:

- the reading material be concise, following the "less is more" principle.
- the first sentence of each section describes what is the intended purpose of the section.
- if the reading material can be expressed in a more visual manner, the latter is preferred.
- the first person plural is used for explanations: "we derive x", "we download the application" etc.
