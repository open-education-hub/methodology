# Drills

Drills are educational activities designed to reinforce learning through repetitive practice.
The primary goal of drills is to promote mastery and internalization of skills or knowledge.
By repeating tasks or exercises, learners can reinforce their understanding and enhance their ability to apply learned concepts effectively.
Drills share similarities with [projects](../../projects/reading/README.md).
The difference is that while drills are repetitive, simple, and focused on a single skill or concept, projects are more complex, broader in scope and with a larger variety of solutions.

Some key considerations when designing drills include:

- **Skill acquisition**: By providing repetitive practice, drills help learners develop accuracy and speed.
- **Reinforcement**: Drills should be used to reinforce skills and knowledge that have already been taught.
- **Building foundations**: By practicing fundamental skills and concepts repeatedly, learners can develop a solid base of knowledge, which can support their learning in more complex areas.
- **Confidence**: Drills can boost learner confidence as they see their progress through repeated practice.
- **Engagement**: Start with simple drills and gradually increase the difficulty level to prevent learners from becoming overwhelmed.

To overcome this limitation, items to consider are:

- **Variety**: Drills should be varied to prevent monotony and keep learners engaged.
- **Feedback**: learners should receive feedback on their performance to help them identify areas for improvement.
- **Critical thinking**: Some open-ended questions can be included in drills to encourage learners to think critically about the material.

There are several ways to organize these drills:

- **Individual drills**: learners complete drills individually, either in class or at home.
- **Group drills**: learners work in groups to complete drills.
- **Competitive drills**: learners compete against each other to complete drills.
- **Timed drills**: learners complete drills within a specified time limit.

Any sort of repetitive learning item is a drill.
There can be questions with a simple answer, such as multiple choice, fill in the blanks, matching questions;
these questions are easy to grade automatically.
There can be questions with a clear, short answer, that is not easy to be grade automatically.
There can be essays / open-ended questions that require a personal take on a topic.
There can be problems with a statement and a solution that's required to be written down by the learner.
There can be practice items that require the learner to construct a solution as a digital application, a solution that ca be passed through an automated checking and grading system, as presented in [the "Validators and Checkers" section](../../../infrastructure/checkers/reading/README.md).

## Validation and Grading

We heavily emphasize that validating answers submitted to drills be automated to as large of an extent as possible.
This brings the following advantages:

1. It frees up the educators' time to invest in the more stimulating aspects of education, such as improving their content, engaging in discussions, answering learners' questions and many more.

1. It provides instantaneous feedback to the learners.
The shorter feedback loop makes learners more engaged in learning as they don't have to "disconnect" from a drill following its completion while waiting for human feedback.
This promotes incremental progress regarding the drill's subject.

1. It aids learners when studying independently.
Connected to the previous item, the short feedback loop may introduce a gamification aspect to drills whereby learners feel rewarded (sometimes using [educational cryptocurrencies](../../../infrastructure/digital-rewards/reading/README.md)) for a good portion of their individual activities.

### Subcategories

While we place great importance on automated grading, we are aware that some types of drills are ill-suited for this approach.
Therefore, we split drills into 2 categories based on the potential to automate their grading:

1. [Questions](./questions.md) are drills that ask learners / trainees to provide an **answer** and not a full solution.
These answers must be predictable to the extent that this allows verifying them to be automated.
Examples of such answers multiple-choice questions, predefined words, numbers, etc.
Questions are the best candidates for automatic grading due to the predictability of their answers.

1. [Tasks](./tasks.md) on the other hand require learners / trainees to provide a **solution**, such as a proof, the steps how they reached the answer or an essay.
While difficult to automate with regards to grading, tasks are a more profound type of drill that specifically targets the learners' reasoning.
This is why grading them should be done by humans (most of the time).

The descriptions of the two types of drills outlined above are not exhaustive.
There are in fact countless types of drills that may be used.
For a more in-depth look, you may consult the various quiz deployment platforms in existence.
In our opinion, two strong starting points are [Blackboard](https://help.blackboard.com/Learn/Instructor/Ultra/Tests_Pools_Surveys/Question_Types) and [Moodle](https://docs.moodle.org/402/en/Question_types)

## Storage

We propose that each drill be stored in a separate folder together with all supporting files, such as images, solutions, code, etc.
This allows great flexibility when importing, exporting or extracting drills, as all files related to a particular one are grouped.

For a more detailed analysis of the contents of each drill type's folders, check the corresponding sections regarding [Questions](./questions.md#storage) and [Tasks](./tasks.md#storage).

## Use Cases

Drills may become part of any teaching stage:

- During lectures, **questions** may be used for quick quizzes to keep the audience engaged.

- During labs **questions** may once again be grouped into quizzes while **tasks** make up the exercises for learners to solve.

- Assignments can sometimes consist of one or more drills.
This applies to both **questions** that can be employed as quizzes and **tasks**, such as essays or reports.

- For exams, drills are useful for practical exams while questions are for quiz exams.

As mentioned in the [section above](#use-cases), drills used in lectures and labs are more suited as learning / practice items.
In particular, during labs and sometimes assignments, questions may be a tool for learners to evaluate themselves, without intervention from the educator, while exams may use drills (both questions and tasks) for grading.
