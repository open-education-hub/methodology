# Building Blocks

The top-level approach for building materials for a subject involves four key components:

- **The content repository**

  This is a public repository that serves as a storing point for educational materials.
  It follows the structure outlined in the ["Developing and Organizing Content" section](../../../develop-organize/overview/reading/read.md) and does not place restrictions on how information is presented.

- **The solutions repository**

  This is a private repository that holds reference solutions for items such as [tasks](../../../develop-organize/drills/reading/tasks.md) and [projects](../../../develop-organize/projects/reading/read.md).
  The reference solutions are kept private because they are used exclusively in the grading process.
  Over time, some items from this repository may transition to the **content repository**.
  They will serve as examples or proof of concepts for tasks, particularly when they are no longer needed for grading purposes.

- **The delivery repository**

  This repository is a fork of **the content repository**.
  It is meant to structure and customize content for delivery, according to the educator preference and to learner group specifics.
  It follows the guidelines in the ["Developing and Organizing Content" section](../../../develop-organize/overview/reading/read.md).

  Optionally, a deliver solution repository, as a fork of the solution repository, may also be created.

- **The infrastructure repositories**

  Contains a set of tools designed to manage tasks such as content validation, publishing, and submission.
  These tools are instrumental in simplifying the overall process of creating, developing, and delivering content.

  The infrastructure components are integrated throughout this repository and are accessible in various forms, including [linters](../../../infrastructure/linters/reading/read.md) and [automated validators or checkers](../../../infrastructure/checkers/reading/read.md).

  For a more detailed exploration of these tools, you can refer to the comprehensive information provided in the ["Support Infrastructure" section](../../../infrastructure/overview/reading/read.md).

In order to effectively manage these repositories, we strongly recommend establishing clear roles at the organizational level.
In our view, the main roles to consider are:

- **content developer** - maintains and updates the content from the content and solutions repositories.
- **content curator** - evaluates suggestions from learners or contributors, provides feedback on those suggestions, and then incorporates the accepted ideas into the educational materials.
- **infrastructure manager** - maintains and develops the infrastructure repository.
- **educator** - focuses exclusively on the delivery repository and is dedicated to making sure information is presented in the best way for students to learn effectively.
- **learner** - uses the delivery repository as a consumer of educational content.
  He can also become a **contributor** by providing feedback and suggestions based on his learning experiences.
- **contributor** - suggests improvements for any of the public repositories.
  It is distinct from the **learner role** because contributors do not necessarily participate in the educational activities, and it differs from **content developer** because its suggestions require approval from the **content curators**.

For an in-depth description of each of these roles and the specific workflows in which they engage, you can refer to the ["Roles" section](../../../roles/overview/reading/read.md).

For more details on the topic of content management, we suggest checking the guidelines for maintaining content, presented in the ["Curating and Maintaining Content" section](../../../curate-maintain/overview/reading/read.md), and the guidelines for developing content, presented in the ["Developing and Organizing Content" section](../../../develop-organize/overview/reading/read.md).

Conventions used in this methodology are detailed in the ["Conventions" section](../../conventions/reading/read.md).
