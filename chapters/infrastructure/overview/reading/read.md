# Support Infrastructure

Owner: Sergiu Weisz
Reviewer: Vlad Năstase

Present infrastructure components:

- Using GitHub for collaborative editing
- Tools for generating content (media, slides, post-processing)
- Component (OpenEdu builder) for building and publishing content
- Component (`vmchecker`) for automatic submission checking
- Components to create and present quizzes
- Using linters to validate content (Markdown, code, configuration files)
- Integrating linters and deployment / publishing rules in GitHub (as GitHub workflows)
- Digital rewards
- Communication specific to the content (Discord channel, GitHub discussions, mailing list)

This chapter describes the various technologies used to develop, store, deploy and publish the educational content.

## Third-Party (Open) Tools Employed

As part of content development, delivery and consumption, third-party tools will be used to enhance the educator or learner experience.

Common examples for tools that projects integrate into their workflows:

- file converters
- file generators
- content compilers
- content deployment workflows

## When Should You use a Third-Party Tool?

- you need to automate a process
- you need external functionality that has already been implemented
- you need to scale out a class use case that can only be done with mature tools

## What to Look for in an Open Source Project

When choosing a tool to be employed during any phase of the class lifecycle, one has to mind the following factors:

- community involvement in product development
- development history
- adoption from other parties or institutions
- success stories with regards to use cases that are compatible with yours

Open source projects depend on the community to move forward the design and development and goals, based on a stated common use case.
The more community support a project has, the better the odds that it will be a long lived, well rounded solution.

Open source projects can be easily tracked using issue trackers, and versioning systems to determine the maturity of the code base.
Sporadic work on a project or a small person development team mean that the tool will be slow to integrate new features or to do bug fixing work.

Institutional support for a software solution makes it so there is financial interest in developing the software.
If a company or institution's financial outcome depends on a project, there will be more development or funding interest from this company.
For example, when Meta has chosen to use a certain file deployment solution, it was likely for more bugs to be reported and fixed.

Sections:

- [Collaboration](../../collaboration/reading/read.md)
- [Processing](../../processing/reading/read.md)
- [Validators and Checkers](../../checkers/reading/read.md)
- [Linters](../../linters/reading/read.md)
- [Digital Rewards](../../digital-rewards/reading/read.md)
