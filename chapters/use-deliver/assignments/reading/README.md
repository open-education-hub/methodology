# Assignments

Assignments are unassisted practical activities that learners undertake individually or in teams over a longer timespan.
Their primary objective is to provide learners the flexibility to work through tasks at their preferred speed, allowing them to address gaps in their understanding as they progress.

Delivering an assignment typically follows a given set of steps:

- [Preparing Assignment Contents](#preparing-an-assignment)
- [Launching Assignments](#launching-assignments)
- [Providing Support](#providing-support)
- [Grading Assignments](#grading-assignments)

## Preparing Assignment Contents

The initial phase in crafting an assignment involves determining its overall structure.
Viable options include a combination of [tasks](../../../develop-organize/drills/reading/tasks.md) and [questions](../../../develop-organize/drills/reading/questions.md), or a [project](../../../develop-organize/projects/reading/README.md).
When opting for drills and questions, the procedure is relatively straightforward;
reference them in the assignment statement and proceed directly to setting up the validation infrastructure.

However, if you decide to use a project, there are several fundamental components to ensure, such as the assignment statement, support files, and the reference solution.
These steps are detailed in the ["projects" section](../../../develop-organize/projects/reading/README.md).

The last steps involve setting up the validation infrastructure, which involves creating a submission form, and establishing channels for assistance.
Detailed information about the support channels can be found in the ["Providing Support" section](#providing-support).
Regarding the infrastructure setup, you can access guidelines by referring to the ["linters" section](../../../infrastructure/linters/reading/README.md), and ["checkers" section](../../../infrastructure/checkers/reading/README.md).

## Launching Assignments

The initial phase of launching an assignment involves making sure everything is properly set (assignment files, submission forms, assistance channels) and announcing it.
In this phase, most queries pertain to administrative and workflow-related aspects.
Students often seek clarifications about assignment details, including deadlines, the impact on grading, submission process, troubleshooting procedures, and how to ask for help.
An effective strategy is to create a learner's guide for assignments that covers general aspects.

Another aspect that may rise questions is the assignment as a whole and its desired goal.
Typically, these questions are broad and not specific to individual tasks;
they revolve around starting points and best practices.
Having a clearly defined assignment structure with references can help learners recognize the connection between the overall project and the topics explored.

By keeping discussions organized at the start, the assignment's introduction becomes smoother.
It is helpful to prepare documents with answers upfront to tackle anticipated questions.
This approach works best when these resources are easily accessible and referred to in responses.
This practice encourages learners to look for solutions themselves in the official information, reducing the need for personal clarifications.

If the preparations made beforehand do not address all questions or if the initial response is emotionally charged, arranging an open Q&A session can be beneficial.
This helps alleviate initial confusion, enhances the learner's learning journey, and sets the stage for future support provisions.

## Providing Support

Assignments are typically designed for individual work, but they often require support from trainers to clarify requirements and prevent learners from getting stuck on tasks.
This goal can be accomplished by utilizing platforms to create dedicated channels for assignments:

- Live Chats

  Live chats are spaces for general questions and ideas, not tied to specific tasks.
  They encourage open discussions, helping learners and educators better grasp assignments through interactive conversations.

  Good examples of live chats are [`MS Teams`](https://www.microsoft.com/microsoft-teams/), [`Discord`](https://discord.com/), which also provide video calls features.
  This enables educators to privately assist learners with technical or assignment-related issues through brief video calls.

- Forums ([`Moodle`](https://moodle.org/))

  Forums offer an organized setting that supports in-depth discussions.
  Through separate threads for each task, information can be retrieved easily without getting lost in the chatter.
  They enhance the community built around the assignment by letting everyone share insights from their experience and offer suggestions.

  Unlike live chats, forums require some oversight from educators to ensure discussions stay on track.

- Q&A Sites ([`StackExchange`](https://stackexchange.com/))

  Q&A platforms provide focused spaces for asking questions and receiving well-structured answers.
  Users can leverage concise solutions to particular queries, while the voting system highlights the most helpful answers.
  These platforms facilitate efficient knowledge-sharing and problem-solving within specialized communities.

- Mailing Lists

  Mailing lists facilitate focused communication by sending emails to a group of recipients, utilizing the familiarity of email for distribution.
  Its main advantage is that it only requires an email address, negating the necessity for an account on a specific platform.
  However, while accessible, they can be considered outdated due to limitations in interactivity and modern communication tools.

## Grading Assignments

The grading of assignments occurs once the hard deadline for submission has passed, meaning that no further submissions are accepted beyond that point.
The existence of this hard deadline encourages students to manage their time and prioritize tasks.
Introducing a soft deadline serves a similar purpose by introducing an early checkpoint and a chance for students to receive feedback before the final revision.

In the optimistic scenario where automated checking is possible for an assignment, the grading process entails rerunning solutions in a controlled environment.
This can be done either collectively after all submissions are uploaded or, for a more effective approach, by setting up a submission system that evaluates each submission as it is uploaded.
In the latter scenario, the grade for the assignment is the grade of the last submission.
Putting this solution into practice involves utilizing external platforms like [`GitLab`](https://gitlab.com/), which enable the execution of actions based on specific events—such as submissions in our case.
This prompt evaluation guarantees that students remain on the right track while tackling the assignment and that their solutions progressively improve.
Moreover, the automated checker transforms homework assignments into valuable [self-study](../../self-study/reading/README.md) resources, given that the feedback is not dependent on human intervention.

However, the more typical scenario involves assignments that cannot be entirely automated.
In such situations, one approach is to motivate students to submit their work ahead of time, granting more time for thorough grading of submissions.
This encouragement can take an artificial form, such as offering bonus points, or a more organic one by providing timely feedback and allowing multiple submission attempts.
Yet, the latter approach could potentially lead to a significantly heavier workload, especially if solutions are not built incrementally.

To address this concern, the utilization of tools like [`Google Docs`](https://www.google.com/docs/about/) proves invaluable.
These tools offer version history and the ability to highlight changes made between different revisions, significantly enhancing the overall quality and efficiency of the grading process.

The last step of the grading phase is the plagiarism check.
This important step prevents students from copying solutions from each other or external sources to ensure a fair academic environment.
To ensure objectivity, this step should incorporate an automated check.

To address this concern, available public anti-plagiarism tools can be used.
Whenever feasible, it's advisable to opt for specialized tools, such as [`MOSS`](https://theory.stanford.edu/~aiken/moss/) or [`JPlag`](https://github.com/jplag/JPlag) for code-centric assignments.
However, there are instances when this isn't viable due to factors like the assignment's topic, open-ended nature, or the subject matter.
In these cases, relying on text-similarity programs like [`Turnitin`](https://www.turnitin.com/) or [`Grammarly`](https://app.grammarly.com/) is a dependable strategy.
Additionally, storing solutions of assignments that are used repeatedly improves the quality of the plagiarism check.
