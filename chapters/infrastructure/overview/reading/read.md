# Support Infrastructure

All actions part of the methodology rest on the support infrastructure.
The support infrastructure is a loosely-knit set of tools and components that enable, improve or automate various actions related to educational content: development, contributions, publishing, evaluation, delivery, use.
Components are either preexisting (such as [GitHub](https://github.com) or [`reveal-md`](https://github.com/webpro/reveal-md)) or developed as part of the Open Education Hub initiative (such as [`openedu-builder`](https://github.com/open-education-hub/openedu-builder) or [`vmchecker`](https://github.com/open-education-hub/vmchecker-next)).

The current infrastructure components are listed below, together with roles and actions related to them:

- [Git](https://git-scm.com/) is being used as the source code management tool.
  This is used for versioned storage of content, mostly text (Markdown) and snippets (code).
  Git is used for content development and content management.

- Git is used as part of the [GitHub](https://github.com/) platform, the de-facto collaborative environment for open source / content development.
  GitHub is essential for collaborative work, allowing submissions of contributions via pull requests, issue tracking, discussions, workflow automation.
  Content is stored as GitHub repositories.
  It is used for content contribution and content management.

- [GitHub Actions](https://github.com/features/actions) are a feature of GitHub that allows workflow automation.
  This is used as part of linting, checking, and deployment workflows.
  It is used in content development and content delivery actions.

- [`reveal-md`](https://github.com/webpro/reveal-md), [`markdownpp`](https://github.com/amyreese/markdown-pp), [`ffmpeg`](https://ffmpeg.org/) are open source tools used to generate content in the corresponding format.
  [`quiz-manager`](https://github.com/systems-cs-pub-ro/quiz-manager) is a tool developed part of Open Education Hub to convert questions in appropriate formats.
  The initial content is generally text / ASCII or SVG.
  The output content is HTML, PDF, XML or image / video files to be presented to the user.
  The aforementioned tools are used during content development, to validate content, and in content publishing and delivery.

- Linters are used to validate content and ensure it obeys the best practices and that it is consistent throughout the repository.
  While primarily used for source code, linters are also used for Markdown, configuration files, commits and as spellcheckers.
  Linters are typically integrated in automated GitHub Actions workflows.
  They are used during content development and for contributions.

- [`openedu-builder`](https://github.com/open-education-hub/openedu-builder) is a component developed part of Open Education Hub to automate the publishing of a repository content as a website.
  Generally, `openedu-builder` is invoked automatically as the publishing workflow part of GitHub Actions.
  It can, however, be used manually, to test changes.
  It is the prime tool used during content publishing.
  Published content is then used and consumed directly by educators and learners.

- [`vmchecker`](https://github.com/open-education-hub/vmchecker-next) is a component developed part of Open Education Hub to automate the evaluation of drills, projects and assignments.
  It relieves educators from the repetitive task of verification, leaving them with tasks of creating content and the checkers for drills.
  `vmchecker` is used as part of evaluation actions and for self-study.

- [`Moodle`](https://moodle.org/) and [`SmileyTutor`](https://tutor-web.net/) are tools and platforms that can host evaluation items such as quizzes.
  Content is deployed on these platforms by educators and then they are accessed by learners.
  They are used as part of evaluation actions and for self-study.

- Digital rewards, in the form of the [SmileyCoin cryptocurrency](https://smileyco.in/), are used to incentivize learners to take part in educational activities and to contribute.
  While their fiat worth is reduced, SmileyCoin cryptocurrency can be used as a way to gain educational benefits or as a portfolio of achievements.
  Digital rewards are used part of evaluation actions and for contributions.

- Communication channels to discuss issues or proposals are essential in creating a community around a repository.
  Any type of communication channel can be used.
  What we recommend, given our experience at Open Education Hub, are the use of a [Discord](https://discord.com/) server, the use of [GitHub discussions](https://github.com/features/discussions), or any collabortive chat, forum or mailing list software.
  They are used as part of content development, content management and contributions.

The above components are detailed in the corresponding sections:

- [Collaboration](../../collaboration/reading/read.md) details Git, GitHub, communication channels
- [Processing](../../processing/reading/read.md) details `openedu-builder` and the corresponding GitHub Actions workflows
- [Validators and Checkers](../../checkers/reading/read.md) details `vmchecker`
- [Linters](../../linters/reading/read.md) details linters and the corresponding GitHub Actions workflows
- [Digital Rewards](../../digital-rewards/reading/read.md) details SmileyCoin / digital rewards
