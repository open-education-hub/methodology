# Collaboration

Created around the values and approaches of open source development, Open Education Hub projects are imbued with the idea of collaboration.
Every component that is tied to Open Education Hub has a form of collaboration attached to it.
Collaboration generally manifests itself in the context of a community built around each project: content repository, infrastructure project, or anything else.
The general principles and best practices of organizing a community are presented in [the "Community" section](../../../curate-maintain/community/reading/read.md).

Collaboration is support by collaborative tools that generally fall in two categories:

- tools for content contributions
- tools for communication

## Tools for Content Contributions

Tools for content contributions facilitate collaborative work among members of the community, called contributors.
The aim of these tools is to quickly get high quality content to be part of repositories.
To that end, they offer the mechanisms to:

- Submit contributions
- Review submissions
- Engage in discussions
- Approve changes
- Publish updates

[Git](https://git-scm.com/) and [GitHub](https://github.com) are the essential components for content contributions.
Git allows decentralized and versioned work.
GitHub enables "social coding": the ability to discuss an agree on the contents and the value of a contribution.

There are three [roles](../../../building-blocks/roles/reading/read.md) involved in collaborative content contribution activities: content developers, contributors and content curators.
Contributions follow the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).

Contributors make submissions with proposed changes to content.
These changes may be fixes, improvements or completely new content.
Contributors create their own work as Git commits in GitHub branches / forks and then submit it to the repository.
The are submitted as [GitHub pull requests](https://docs.github.com/en/pull-requests) to be reviewed.

Contributors can also submit [GitHub issues](https://docs.github.com/en/issues) that can trigger content contributions.
These are to be discussed and, at some point, assigned to a contributor.

Content developers are usually the original creators of the repository.
They provide the initial content repository and, ideally, they will be actively part of the community.
Content developers most often fill the role of reviewer of submissions as part of GitHub pull request discussions;
they vet the submission, provide feedback and assist in getting the submission to a high quality state.

Content curators oversee the general quality of the repository and ensure there is a stable community around it, with constant contributors and a healthy review process from content developers.
Content curators may take an active role in reviewing (and contributing).
But, primarily, they would ensure that submissions are reviewed in a timely manner.
Moreover, they are concerned with the building of a community with good interaction between members, as presented in [the "Curating and Maintain Content" chapter](../../../curate-maintain/overview/reading/read.md).

Contributions happen both in the content repository (hosted by Open Education Hub) and the delivery repository (the forked version used by educators).
The workflow is similar.
For the delivery repository, educators act as content developers / reviewers.
It is the responsibility of the content curator to ensure that content in delivery repositories makes its way to corresponding content repositories.

Guidelines are in place for each repository to assist the contribution workflow.
The template repositories ([`oer-template`](https://github.com/open-education-hub/oer-template) and [`oer-internal-template`](https://github.com/open-education-hub/oer-internal-template/)) feature [contributing guidelines](https://github.com/open-education-hub/oer-template/blob/main/CONTRIBUTING.md) and [reviewing guidelines](https://github.com/open-education-hub/oer-template/blob/main/REVIEWING.md).
Also templates for pull requests and issues are part of the template [GitHub Actions workflows](https://github.com/open-education-hub/oer-template/tree/main/.github).

Consistency of contributions is ensured by the use of [linters](../../linters/reading/read.md).
Linters are part of the template [GitHub Actions workflow](https://github.com/open-education-hub/oer-template/blob/main/.github/workflows/actions.yml) and do a first automated step in quality and compliance checking of contributions.

While most activity is aimed to happen as part of the public content repository, the same ideas apply to the solution repository.
With the main difference being that the solution repository is only made available to content developers, content curators and educators, so it has a reduced pool of contributors.

## Tools for Communication

Tools for communication facilitate active discussions among community members.
The aim of these tools is to rapidly reach a decision and to foster creative development of content and tools.
To that end, they offer the mechanisms to:

- Engage in live discussions: text, video, audio.
- Have a written down conversion and summary related to a particular topic.
- Signal new ideas.
- Welcome new members in the community.
- Provide support and quick answers to users.

We differentiate between tree types of communication scenarios:

- Public communication related to content
- Internal communication for stakeholder and those with decision making power: educators, content developers, content managers
- Institutional discussions as part of an actual content delivery, taking part between educators and learners

Institutional discussions aren't of concern to the Open Education Hub methodology.
They are to be handled by each institution according to their specifics.
For example, at the [National University of Science and Technology `POLITEHNICA` of Bucharest (`UNSTPB`)](https://upb.ro/), institutional discussions happen via [Moodle](https://moodle.org/) and [Microsoft Teams](https://teams.microsoft.com).
Other institutions may use their own tools.

For the public communication and internal communication scenarios, we strongly advise the use of the [Open Education Hub Discord server](https://bit.ly/OpenEduHub).
Among different general purpose channels, each content repository will be featured a public communication channel and an internal (private) communication channel.
Specific roles are assigned for those who are stakeholders for that repository (educators, content developer, content curators).
Moreover, upon request, institutional channels may be created around a specific delivery repository.

Communication related to a content repository, including the corresponding Discord channels, is handled by the content curator, as shown in [the "Communication" section](../../../curate-maintain/communication/reading/read.md)
