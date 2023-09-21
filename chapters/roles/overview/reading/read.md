# Roles

The present methodology is constructed around different actions with education content: creation, delivery, curation, consumption.
Different actions are mapped to different user roles.
These roles have been highlighted in [the "Building Blocks" chapter](../../../building-blocks/overview/reading/read.md).
They are detailed below.
Note that terms for the different repositories are used, also detailed in [the "Building Blocks" chapter](../../../building-blocks/overview/reading/read.md).

## Content Developer

Content developers maintain and update content in the content and solutions repositories.
They follow the general instructions laid out in [the "Developing and Organizing Content" chapter](../../../building-blocks/overview/reading/read.md).
As part of their work, content developers work on all types of content: text, slides, media, support.

The goal of content developers is to **provide high-quality easy to use and to reuse educational content repositories**.
Typically, for a course / topic, content developers provide a content repository and a solution repository.
The content repositories are to be then used by educators and learners.

Typical content developer actions are:

1. Create content repository, typically from the [`oer-template` template repository](https://github.com/open-education-hub/oer-template).
1. Create companion solutions repository as a private repository, typically from the [`oer-internal-template` template repository](https://github.com/open-education-hub/oer-internal-template/).
1. Create initial structure of repositories.
   Configure repositories for publishing content.
   Push configuration and initial structure to trigger deployment.
1. Fill contents.
   Add content, review content, improve content.

The figure below presents an overview of the typical actions of content developers.

![Content Developer](../media/content-developer.svg)

## Educator

Educators focus exclusively on the delivery repository and are dedicated in ensuring information is presented best for learners to grasp knowledge effectively.
Educators are **users** of content developed by content developers.
They follow the general instructions laid out in [the "Using and Delivering Content" chapter](../../../use-deliver/overview/reading/read.md).
Educators configure the content and select and order topics according to their preference, curriculum and learner group specifics.
Based on configuration, educators trigger the deployment of content.

Generally, educators work on the delivery repository, a fork of the content repository.
Optionally, a solutions delivery repository may be used, a fork of the solution repository.

The goal of educators is to **structure, prepare and present the content for learners with minimal effort according to their preference and specifics**.

Typical educator actions are:

1. Create fork of content repository as delivery repository.
1. (Optionally) Create fork of solutions repository as solutions delivery repository.
1. Create configuration (typically by editing the `config.yaml` file) to select and order content according to preference and specifics.
1. Push configuration update to trigger deployment.
   Validate deployment.
1. Use content during educational activities with learners.

The figure below presents an overview of the typical actions of educators.

![Educator](../media/educator.svg)

## Deploying Content

Content is deployed automatically, triggered by updates from content developers and educators.
Content deployment rests on default or custom configuration of [infrastructure components](../../../infrastructure/overview/reading/read.md), such as GitHub, SmileyCoin node, GitLab & [`vmchecker`](../../../infrastructure/checkers/reading/read.md) and others.

Educators and content developers should not be concerned about these.
Deployment should work out of the box.

It is the responsibility of infrastructure managers to ensure proper functioning of deployment infrastructure.

The figure below presents an overview of the deployment steps.

![Educator](../media/deploying-content.svg)

## Learner

Learners are the actual beneficiaries / consumers of the educational content being deployed from the delivery repositories.
Learners are the target group of the content being created by content developers and being customized by educators.

Learners use the content by themselves and are delivered the content by educators during educational activities.

The goal of learners is to **consume high quality educational content according to their own needs, pace and goals**.

Learners can also become **contributors** by providing feedback and suggestions based on his learning experiences.

Typical learner actions are:

1. Consume content without assistance, at their own pace and in an environment and circumstance of choice.
1. Take part in educational activities and consume content as delivered / provided by educators.

The figure below presents an overview of the typical actions of learners.

![Learner](../media/learner.svg)

## Contributor

Contributors are people that don't own the content, but share an interest in improving it.
Contributors suggests improvements for public repositories, via the interface provided by GitHub and other collaborative tools.
Contributor motivation is explained by themselves wanting to use the content, or as a way to give back or as participants in an [open community around the project](../../../curate-maintain/community/reading/read.md).

Contributors may be **learners**.
However, these roles are distinct because contributors do not necessarily participate in the educational activities.
Contributors also differ from **content developer** because they are not content owners, and their suggestions require approval from the **content curators**.

The goal of contributors is to **create valuable contributions that result in an improved content and public recognition**.

Typical contributor actions are:

1. Submit an issue related to a piece of content.
1. Submit an update to improve or add content.
1. Take part in discussions related to contributions, possibly taking an active role in reviewing the content.

The figure below presents an overview of the typical actions of contributors.

![Contributor](../media/contributor.svg)

## Content Curator

Content curators are the actual content owners.
They handle the important task of keeping the content repository up-to-date and with an active community around it.
They follow the general instructions laid out in [the "Curating and Maintaining Content" chapter](../../../curate-maintain/overview/reading/read.md).

Content curators evaluate suggestions from contributors, provide feedback on those suggestions, and then incorporate the accepted ideas into the educational materials.
Generally, content developers of a repository advance to content curator, in the limits of time and effort required.
A content curator may manage, if times allows it, more than one educational content repository.

The goal of contributors is to **constantly improve the content repository and build a healthy community around it**.

Typical content curator actions are:

1. Take part in the review process of contributions.
   Assign community members to review & approve contributions.
1. Advertise the repository to be used by educators throughout the world.
1. Monitor and collect updates from delivery repositories.
   Work on getting the updates upstream in the content repository.
1. Take part in discussions related to the topic of the repository.
1. Build and manage a [community](../../../curate-maintain/community/reading/read.md) around the repository.

The figure below presents an overview of the typical actions of contributors.

![Contributor](../media/contributor.svg)

## Infrastructure Manager

Infrastructure managers maintain and develop the infrastructure repositories.
These repositories are across all content repositories.

While Open Education Hub provides the team of core infrastructure managers, each educational organization should provide their own infrastructure managers for local chores.
Infrastructure managers are directly responsible to ensure the deployment, publication and automation activities work smoothly.

The goal of contributors is to **ensure a flawless functioning of the underlying infrastructure required by content and delivery repositories**.

Typical infrastructure manager actions are:

1. Improve infrastructure components in the infrastructure repositories.
   Add features, fix bugs, improve performance and resource use, improve scalability.
1. Configure infrastructure for education organization for the repositories requiring it.
1. Work diligently to solve any infrastructure issue.
   Assign community members to review & approve contributions.
1. Actively monitor infrastructure.
1. Provide support and assistance to educators, content developers and content curators that make use of the infrastructure.

The figure below presents an overview of the typical actions of infrastructure managers.

![Infrastructure Manager](../media/infrastructure-manager.svg)

## Overall

The figure below is an aggregate of different workflows and roles of presented as part of the methodology.

![Roles: Overall](../media/roles-overall.svg)
