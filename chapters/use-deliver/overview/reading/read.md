# Using and Delivering Content

With content being developed and available in the content repositories, educators can configure it, deploy it and use it for their educational activities.
Content can also be used by learners during self-study activities.
When educators use content, they both deliver it live, during educational activities, and make it available publicly for self-study activities.

As presented in [the "Building Blocks" section](../../../building-blocks/overview/reading/read.md), educators fork the content repository into a delivery repository.
They configure the content according to their own needs, preferences or specifics of the learner group.
They then use the deployment and publishing infrastructure to make the content available to learners, both during and outside educational activities.
Optionally, educators may also fork solution repositories into a solution delivery repositories.

Educators organize content for the different educational activities they employ.
The mapping between educational activities and types of content is presented in the [Introduction](../../../landing-page/read.md).
The topics presented in this chapter are dedicated to each educational activity:

- [Lectures](../../lectures/reading/read.md)
- [Practical Sessions](../../practical-sessions/reading/read.md)
- [Assignments](../../assignments/reading/read.md)
- [Tests](../../tests/reading/read.md)
- [Self-Study](../../self-study/reading/read.md)

In the ideal case, an educator is only required to update the `config.yaml` file in the delivery repository.
The rest of the content is left unaltered and is thus in perfect sync with the original content repository.

If changes to content are required, the educator is recommended to push the changes to the upstream content repository (hosted under the [`open-education-hub` GitHub organization](https://github.com/open-education-hub)).
The educator takes the role of contributor to the content repository.

Learners who want to contribute to content will do so in the delivery repository.
Eventually, the educator will push the contributions to the content repository.

It is recommended the educator be in active contact with the content developer / curator of the content repository for quick integration of contributions.
And for upstream updates to the delivery repository.

Note that each educator should adapt the use and delivery of content to their specifics.
The current methodology aims to leave as much freedom to the educator to customize the content and configuration.
It provides guides, best practices and recommendations.
Still, educators know best how to structure the content, how to select and blend existing topics for delivery.
Moreover, the methodology, being content-centric, makes no recommendations on the actual delivery methods and approaches used by educators during educational activities.
