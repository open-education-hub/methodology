# Methodology

The Open Education Hub methodology contains all of the guidelines for creating high quality, open source educational materials.
The methodology describes the types of content, how the content is used in the various stages of teaching and the required infrastructure.
All the educational content is open source and all of the used tools are either open source or free to use.

## Types of Content

This chapter describes the various forms that the educational content may take form.
Each section details how a specific type of content is to be developed, stored and used.

### Reading

The reading content type is the most common form of storing educational material (or information, in general).
As the name suggests the content is developed to be read, therefore it comes in the form of text.

To develop reading content we use the [Markdown syntax](https://www.markdownguide.org/basic-syntax) and the following guidelines:

- the heading level of a title is given by the number of `#`s that precede it.
For example, the title of a document is preceded by a single `#`, whereas the chapters are preceded by two.
- each sentence is written on a new line.
- paragraphs are separated by an empty line.
- links should be used as hyperlinks by using the `[]()` syntax as in [this example](https://theuselessweb.com/).

To enforce the guidelines we use [automated linter checks](https://github.com/super-linter/super-linter#readme).
Besides the mentioned guidelines, the linter implements checks for other minor style conventions (such as how to define lists, where should new lines be placed and others).
However, for the majority of cases, the above should be sufficient.

When developing such materials we recommend that:

- the reading material be concise, following the "less is more" principle.
- the first sentence of each section describe what is the intended purpose of the section.
- if the reading material can be expressed in a more visual manner, the latter is preferred.

### Media

### Slides

Slides are the main support material for live activities, such as lectures.
They can also be used during practical sessions or talks (such as conferences).
The main role of slides is to provide the visual support material for presenting information and engaging participants in discussions.
Slides are a sequence of pages to be shown live on projector screen, each presenting a given idea.
The lecturer typically walks through slides and presents information by expanding ideas on the slides, and by engaging in discussions based on those ideas.

Slides should ideally have the following properties:

- be visually appealing
- be relevant to the presenter and to the audience
- be ergonomic, easy to observe and to understand
- be dynamic, digestible, show visual information being constructed
- be easy to create by content developers
- as with other Open Education Hub content types, allow easy improvements and contributions

#### reveal-md

Our choice of engine for storing and rendering slides is [reveal-md](https://github.com/webpro/reveal-md).
reveal-md is based on [reveal.js](https://revealjs.com/) and allows the development of web-rendered sleek slides.
Moreover, as with other content types used at Open Education Hub, it uses Markdown format.
reveal-md fits well with the properties above and, because it uses Markdown, it can be stored in a Git / GitHub repository and, thus, allows easy improvements and contributions.

TODO: features of reveal-md
links to documentation, syntax items

To have modular contents for slides, we use [markdown-pp](https://github.com/amyreese/markdown-pp) (for Markdown Preprocessor).
With markdown-pp we have an index file for slides;
the index file includes actual Markdown files representing sections.

TODO: features of markdown-pp
links to documentation

potential items for the future, potential replacement of markdown-pp

#### Slide Directories

structure slides in directories as slide decks, following a structure / narative for the section / chapter

typical structure of slide directory:

- slides.mdpp: actual slides
- slides/: per section reveal-md Markdown files
- Makefile: generate output files (HTML, PDF)
- media/: media files, as discussed in [`Media` section](#media)

output files are:

- slides.md: intermediary aggregated output file (after markdown-pp processing)
- slides.pdf: PDF output file;
  to be viewed with PDF reader
- `_site/`: HTML output;
  open `_site/index.html`;
  to be viewed with web browser

#### Presenting Slides

2D view of slides for `markdown-pp`

keyboard shortcuts

#### Slide Contents

index slide

slide types:

- section title slides
- media slides

horizontal and vertical slides

slide titles

content types: text, bullets, code, tables

animations, highlights;
wherever possible, text should be replaced with images and animations

### Questions

Questions verify specific information and must be verifiable automatically.
Therefore, this section covers multiple-choice or simple answer questions, such as a word or a number.
On the other hand, open-ended tasks such as essays, that are difficult to verify automatically, are considered [drills](#drills) instead.

Questions may be a form of live checks (as part of lectures or labs), self-study or formal examination.
They provide a means to evaluate learner understanding.
This creates a positive feedback loop between trainers and trainees whereby both can track the learners' progress in real time.

Furthermore, questions serve as practice items for learners to solve at their own pace, in conjunction with [drills](#drills).
They may also be used for evaluation items that contribute to the learners' overall grade.

Another desired aspect is that questions be easily extractable and convertible between formats, as described [below](#deployment), and repurposed by other trainers.

Despite all of their strengths, questions also come with a few shortcomings.
One such downside is the binary nature of the feedback loop.
Because question grading is automated, it is harder for the feedback that learners receive to pin-point the exact step that they got wrong and focus on that.
Said feedback may be however detailed enough for learners to figure this out themselves.
In addition, non-technical fields of study may find little benefit in questions as they rely more on arguments essays rather than concrete, technical information.

Even after accounting for these downsides, questions are an easy and automated way to provide quick feedback regarding learner knowledge, both to educators and to learners themselves.

#### Steps to Develop a Question

To create a new question from scratch, a educator should:

1. Brainstorm the question.

1. Write it down using the Open Education Hub format proposed in this document.

1. Push it to the repository.

1. Convert it to the required publisher format.

1. Publish and deploy it to the desired platform.

#### Deployment

Each trainer uses a specific teaching rendering platform.
Most platforms support questions in various formats, such as whether they are graded or ungraded, whether the answers are multiple choice or text boxes, etc.
Out of the existing teaching platforms, a few highlights are:

- [Moodle](https://moodle.org/) is a free open-source learning platform dedicated to course management.
  It supports graded assignments, quizzes, storing teaching materials and many other educational activities.

- [SmileyTutor (formerly called TutorWeb)]((https://tutor-web.net/)) is another free learning platform whose highlight is that it was built around the [SmyleyCoin cryptocurrency](#cryptocurrency-rewards) as a reward for completing drills and questions.

- [tech.io](https://tech.io/) is another platform for presenting questions as quizzes.
  More simplistic than Moodle or SmileyTutor, it allows educators to easily create _playgrounds_, which are learning environments designed around specific subjects, made up of reading material, followed by practical exercises and questions.

- [Kahoot!](https://kahoot.it/) is another platform for hosting multiple-choice quizzes.
  These quizzes are called games and can be created either from scratch, or by using Kahoot's existing question bank.
  Creating Kahoots from scratch is difficult to automate because the platform requires submitting questions individually into a webpage.

Each of these platforms supports a different syntax for uploading questions.
To make our questions comply with educational platforms easily, we need to store them in a generic format that is easily representable and automatically convertible to other required formats.
For this reason and for the sake of consistency, we are storing questions in the same Markdown format as all of our written material.

We are developing a modular and easily extendible converter that ports questions from Markdown to other formats.
The format that we use to store questions is easily convertible to other formats.
Therefore, we do not implement converters for all the existing formats.
Instead, we do provide a program that is easily extendible to support any kind of format.

The converter becomes a collection of processors whose job is to change the layout of a given file between formats.
Either their input or their output is a dictionary JSON representation.
In addition, each converter is bi-directional, being capable of converting either from a format to JSON or vice-versa.
The image below displays how a file is converted from Markdown to Moodle XML.
Any other format follows a similar route: `file in format A -> format A converter -> JSON -> format B converter -> file in format B`.

![Converter Architecture](./media/converter_architecture.svg)

#### Storage Format

We are using Markdown as a generic storage format for questions because it is a text-based format, so it is suitable for written questions.
Unlike more complex formats like LaTeX, Markdown offers a much simpler syntax which makes questions easier to contribute to by educators and learners alike.

The format we propose relies on headers to represent categories such as difficulty, topics, question text, feedback.
Each question has a title written on the first line as a level 1 header (`#`).
Each category is specified as a level 2 header (`##`).
The contents of the category consist of the text beneath the header.
For multiple-choice questions, correct answers are marked as list entries starting with `+`, while incorrect ones are marked with `-`.

Every question will be stored in a separate Markdown file.
See the example below:

```text
# Sample Question Name

##  Difficulty

easy

## Tags

- topic-1

- topic-2

## Question Text

Is this a sample question?

## Question Answers

+ Yes

- No

- Maybe

## Feedback

The question is self-reflecting and its title is "Sample Question Name", so it is a sample question.
```

Note that correct answers are marked as list entries starting with `+`, while incorrect ones are marked with `-`.
There may be multiple correct answers.
In addition, the headings starting with `##` are just keys for different sections of the question.
Therefore, none of them are mandatory given our format and the developer is free to add or remove any of them.

A typical question is to be stored in a separate directory within the repository, with the following components:

- `question.md`: the Markdown file containing all question-related information, formatted as specified above
- `media/`: optional media files (images, videos, etc.) required by the question

Therefore, the directory structure of a typical question is a follows:

```text
sample-question/
├── question.md
└── media/
    ├── image.svg
    ├── ...
    └── video.mp4
```

#### Converter

Given the format above, we are providing a converter that can reformat questions from one format to another.
It is bidirectional, so it can translate between any two formats, such as Markdown, [Moodle XML](https://docs.moodle.org/402/en/Moodle_XML_format), etc.
If a new question format is desired, the converter may be easily extendable to accommodate it and convert between it and any other format.

The converter achieves this level of flexibility by internally representing each question as a dictionary (a list of key-value pairs), from which any other format can be derived.
The keys of this dictionary are the `##` headings and the value of each key is the text beneath the heading.
This also allows the converter to support a [JSON format](https://blog.hubspot.com/website/json-files) for free, as it is directly mapped to the converter's internal representation.
For example, the sample question above will be represented as a JSON as follows:

```json
"Sample Question Name": {
    "Difficulty": "easy",
    "Tags": ["topic-1", "topic-2"],
    "Question Text": "Is this a sample question?",
    "Question Answers": ["Yes", "No", "Maybe"],
    "Correct Answer": "Yes",
    "Feedback": "The question is self-reflecting and its title is \"Sample Question Name\", so it is a sample question."
}
```

#### Usage

To use this converter, a person is required to run the command below.
The script will infer the fact that the input format is Markdown and the output is Moodle XML from the extensions of the input files (`.md` and `.mxml`).

```console
python3 question_converter.py convert -i input_file.md -o output_file.mxml
```

The converter may also be run by the builder if the educator desires to integrate questions within their published course and not use a third party hosting website, such as those outlined [in the Deployment section](#deployment).
If this integration is desired, it is up to the educator to configure the builder accordingly.

### Drills

### Guides

Guides are pieces of content consisting of detailed steps that are commonly used in practice.

Guides are to be used by learners as tutorials, part of the learning process.
They can be used as tutorial during practical session, with assistance provided to further explaining certain items, or as unassisted self-study.

Guides can also by educators when demonstrating a topic or showcasing a real-world scenario to a live audience.
These demos are typically good ways to capture the attention of learners due to their real-world nature.

Guides consist of:

- text: created by following the guidelines in the ["Reading" section](#reading)
- media: created by following the guidelines in the ["Media" section](#section)
- support files: source code, skeleton files, application support files, fill-in-the blanks, templates

A learner would read the text, view media files and use (hands-on) practice files to get replicate a practical result present by the guide.
When used by an educator as a demo, support files are used for the live delivery;
text and media are used by the educator to prepare before delivery.

TODO: sample guides

#### Guide Directory Structure

- `contents.md`
- `media/`
- `support/` - source code, skeleton files, application support files, fill-in-the blanks, templates

#### Guide Contents

Expected contents

Best practices

Start with the goals, present the expected outcome first

Present the resources

Do it step by step, make it digestable

Clear and complete instructions

Highlight the relevance of the result

### Projects

## Teaching Stages

This chapter describes how each teaching activity is mapped to different types of content.
Put differently, it shows how each content type is to be used in the various teaching stages.

### Lectures

### Practical Sessions

Practical sessions are represented by hands-on activities that learners perform in order to acquire experience.
These activities are typically supervised by an educator who proposes the practical exercises and evaluates the learner's performance.
The purpose of the evaluation is mainly to provide feedback as opposed to grading the learner.

Instances of practical sessions are represented by lab sessions, seminars, or workshops.
The format of a practical session may include:

- theoretical explanations and practical examples offered by the educator
- practical activities performed by the learners
- debates and discussions between learners and educator or between learners themselves regarding specific topics
- feedback from the educator or peers

Teacher preference, institutional recommendations and implementation specifics dictate:

- which types of practical sessions are used
- length of a practical session instance
- format of a practical session

As such, the educational materials used as support for the practical sessions should offer the flexibility of being tailored depending on the educator's needs.
At the same time, they should be usable in the absence of a educator as standalone learning materials for self-taught individuals that want to learn by themselves.

A practical session comprises of a series of topics that the learner must assimilate.
A topic must contain:

- a brief theoretical description (which may contain links to broader explanations) by using [reading content](#reading), [media](#media), and, potentially, [slide](#slides) materials
- one or more practical exemplifications of the described topic by using [demos](#demos)
- one or more [tutorials](#tutorials) where the learner makes the first steps in applying the described topic
- one or more [quizzes](#quizzes) regarding some aspects of what has been presented so far
- one or more [drills](#drills) where the learner applies the presented topic

There is no enforcement on the order in which the above content types should appear in the topic layout because that depends on the nature of the presented topic.
However, we do recommend that the content types are mingled together so that the learner's attention is kept alive.
For example, having a large theoretical description or a large demo may bore some learners.
To avoid that, quizzes, drills and tutorials may be sprinkled throught the topic layout to ensure more engagement.

Ideally, each practical activity (quiz, tutorial, drill) would be automatically evaluated and feedback would be instantly generated.
For example, in Computer Programming courses, drills and tutorials typically require the learner to write programs.
Checkers should accompany these activities to ensure automated verification.
Quizzes, if employed, are automatically checked for correctness.
Therefore, for humanitarian fields of study such as history or philosophy, we recommend using quizzes instead of drills as a form of practical activity.

The number of topics and the ordering in which the topics are presented in a practical session is highly dependent on the nature of the field of study and the preference of the educator.
As a consequence, we do not have any recommendations regarding this aspect.
However, if the content creator develops materials that have dependencies between them, this should be specified.

### Exams

Exams are assessments designed to evaluate learners' understanding and application of the course material.
Exams aim to measure comprehension, critical thinking, and problem-solving skills.

Examinations can take various forms, including:

* **Written Exams** consist of short answers, essays, or problems to solve.
  They are versatile and are fit various subjects.
  Written exams build on what you've learned earlier.
  Written exams build upon previous learning, but they aren't adaptive and don't personalize the experience for each learner.
  Additionally, they might not be the best choice for assessing complex situations, often leaning towards straightforward questions.

* **Multiple-Choice Exams** involve choosing the correct answer from a set of options, essentially being a compilation of [quizzes](#quizzes).
  You can consider creating two sets of quizzes: one accessible to all for learning purposes, and another separate set reserved for assessment.
  However, this approach is only a short-term solution, as questions may eventually become accessible through leaks.
  Our recommendation leans toward making all quizzes publicly available and concentrating on producing a substantial number of them.
  In this scenario, the question bank saturates the curricula and that even trying to memorise all questions is akin to learning the subject.

* **Oral / Live Exams**: Learners respond verbally to questions from the educator to demonstrate understanding.
  Or they provide a live demonstration to the educator: writing on paper, demonstrating at the whiteboard, demonstrating an experiment.
  This type of exam is highly interactive with constant monitoring and interviewing from the educator.
  This method suits topics that focus on concept comprehension and the cultivation of critical thinking over practical skills.
  However, organizing oral / live exams can be complex as they require multiple examiners and intervals for examination.
  The subjectivity of this format and the involvement of various examiners might raise concerns about impartiality.

* **Practical Exams** revolve around real-world problem-solving and skill demonstration.
  They are most suitable for disciplines that emphasize hands-on learning and seek quantifiable outcomes.
  In comparison to multiple-choice exams which extend from quizzes, practical exams build upon the idea of [tutorials](#tutorials).
  Their purpose is to handle various tasks, whether demonstrated earlier, similar in nature, or involving combinations, all without guidance.
  This exams require dedicated equipment for the learner (laptops, lab equipment, substances etc.).

### Assignments

Assignments are unassisted practical activities that learners undertake individually or in teams over a longer timespan.
Their primary objective is to provide learners the flexibility to work through tasks at their desired speed, allowing them to address gaps in their understanding as they progress.

#### Launching Assignments

The initial phase of launching an assignment involves several essential steps: publishing the assignment details and files, establishing channels for assistance, and ensuring smooth submission procedures. 
All of these steps are arranged beforehand, with the latter two falling under the broader scope of the subject's infrastructure.

In the initial stages of the assignment, most queries pertain to administrative and workflow-related aspects.
Students often seek clarifications about assignment details, including deadlines, the impact on grading, submission process, troubleshooting procedures, and how to ask for help.
An effective strategy is to create a student's guide for assignments that covers general aspects.

Another aspect that my rise questions is the assignment as a whole and its desired goal.
Typically, these questions are broad and not specific to individual tasks; they revolve around starting points and best practices.
Having a clearly defined assignment structure with references can help students recognize the connection between the overall project and the topics explored.

By keeping discussions organized at the start, the assignment's introduction becomes smoother.
It's helpful to prepare documents with answers upfront to tackle anticipated questions.
This approach works best when these resources are easily accessible and referred to in responses.
This practice encourages students to look for solutions themselves in the official information, reducing the need for personal clarifications.

If the preparations made beforehand don't address all questions or if the initial response is emotionally charged, arranging an open Q&A session can be beneficial.
This helps alleviate initial confusion, enhances the student's learning journey, and sets the stage for future support provisions.

#### Providing Support

Assignments are typically designed for individual work, but they often require support from trainers to clarify requirements and prevent students from getting stuck on tasks.
This goal can be accomplished by utilizing platforms to create dedicated channels for assignments:

- Live Chats

  Live chats are spaces for general questions and ideas, not tied to specific tasks.
  They encourage open discussions, helping learners and educators better grasp assignments through interactive conversations.

  Good examples of live chats are [MS Teams](https://www.microsoft.com/microsoft-teams/), [Discord](https://discord.com/), which also provide video calls features.
  This enables educators to privately assist learners with technical or assignment-related issues through brief video calls.

- Forums ([Moodle](https://moodle.org/))

  Forums offer an organized setting that supports in-depth discussions.
  Through separate threads for each task, information can be retrieved easily without getting lost in the chatter.
  They enhance the community built around the assignment by letting everyone share insights from their experience and offer suggestions.

  Unlike live chats, forums require some oversight from educators to ensure discussions stay on track.

- Q&A Websites ([StackExchange](https://stackexchange.com/))

  Q&A platforms provide focused spaces for asking questions and receiving well-structured answers.
  Users can leverage concise solutions to particular queries, while the voting system highlights the most helpful answers.
  These platforms facilitate efficient knowledge-sharing and problem-solving within specialized communities.

- Mailing Lists

  Mailing lists facilitate focused communication by sending emails to a group of recipients, utilizing the familiarity of email for distribution.
  Its main advantage is that it only requires an email address, negating the necessity for an account on a specific platform.
  However, while accessible, they can be considered outdated due to limitations in interactivity and modern communication tools.

#### Grading Assignments

TODO

- Using the automated checker (locally and remotely)

- Soft and hard deadlines

- Antiplagiarism check

- Assignments without an automated checkery

### Self-Study

## Infrastructure

This chapter describes the various technologies used to develop, store, deploy and publish the educational content.

### Open Source Collaborative Model

#### Student Contributions

#### Teacher Contributions

#### Outsider Contributions

### Third Party (Open) Tools Employed

### Cryptocurrency Rewards

## Student Engagement

Not sure whether this chapter should be included - we'll see.

### Interactivity

### Q&A
