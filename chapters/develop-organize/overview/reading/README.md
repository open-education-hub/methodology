## Developing and Organizing Content

Developing educational content is an effort consuming activity.
However, typically, formal education institutions from similar fields have similar curricula.
It often requires educators surveying existing content, selecting and adapting topics of interest, polishing them to their needs.
As such, it would be much more time effective to share the educational materials used for one course rather than build them from scratch.
To facilitate this, we propose this methodology (dubbed `OpenEdu` Methodology) for developing and organizing the educational materials such that the content is easy to distribute, customize, contribute to and publish.
Ideally, once content has been created for a particular course or field of study, it will be usable both by institutions to teach the course or by self-taught individuals for self-study.
In this chapter, we will present the main types of content that may be created to be used in educational activities.
We discuss the strengths and weaknesses for each of them, and present guidelines and best practices which can be used for their creation.
Finally, we present what are the best technological tools to create, present and maintain such resources.

The topics presented in this chapter are:

- [Reading](../../reading/reading/README.md)
- [Media](../../media/reading/README.md)
- [Slides](../../slides/reading/README.md)
- [Guides](../../guides/reading/README.md)
- [Drills](../../drills/reading/README.md)
- [Projects](../../projects/reading/README.md)

To be compliant with the vision of the `OpenEdu` Methodology, and with the [5R characteristics](https://oercommons.org/) of `OER` (_Open Educational Resources_) (_retain, reuse, revise, remix, redistribute_), content will have the following properties:

- Have a history of changes.
  This makes it easy to do snapshots, to have ownership information and to locate past issues.
- Be publicly available.
  Anyone anywhere must be able to access the content.
- Is customizable.
  Anyone can tailor the content to their own learning or teaching needs.
- Allow contributions.
  Content users can make fixes, provide suggestion, add and improve content.
- Automate as many actions as possible.
  Where actions can be handled automatically, they would relieve educators from effort in developing, deploying and maintaining content.
- Is easy to write and update.
  Formats used for content development must be simple and easy to understand, to write and to edit.

In order for educational content to be available, we use a version control system (namely, [Git](https://git-scm.com/)) which makes it easy to store, use and propose changes to existing content.
Version control systems work with repositories where all of the resources regarding a project are stored.
Therefore, a course is going to be represented by a repository.
The repository needs to respect a specific directory structure to adhere to the `OpenEdu` Methodology.
For that, it is necessary that the course is split into chapters, each chapter containing a series of topics.
Each topic stores all (or a part, depending on the field of study) of the content types that refer to that specific topic.

In conjunction with Git, we make use of [GitHub](https://github.com) as the de-facto open source collaboration platform, one that makes it easy to make contributions, report issues and do reviews.
Content is aggregated in repositories on GitHub.

Most content is written using [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), a very simple, text-like format.
This includes text, questions for drills, even slides.

The general organization of a repository is the following:

```text
|-- chapter1/
|   |-- topic1/
|   |-- topic2/
|   |   |-- reading/
|   |   |-- media/
|   |   |-- slides/
|   |   |-- guides/
|   |   |-- drills/
|   |   `-- projects/
|-- chapter2/
|-- chapter3/
   ...
`-- chapterN/
```

Note that each content type directory (`reading/`, `media/` etc.) may require a specific directory structure.
This is structure is covered in the section associated with the content type.

For real-life use cases, visit the existing educational content repositories:

- the [`operating-systems` repository](https://github.com/open-education-hub/operating-systems), rendered [here](https://open-education-hub.github.io/operating-systems/)
- the [`ccas` repository](https://github.com/open-education-hub/ccas), rendered [here](https://open-education-hub.github.io/ccas/)
- the [`binary-security` repository](https://github.com/open-education-hub/binary-security), rendered [here](https://open-education-hub.github.io/binary-security/)

For a mapping between the content types and teaching activities visit the [Introduction](../../../landing-page/README.md) page.
