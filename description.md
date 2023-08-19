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

The media content type refers to audio, visual or audiovisual educational materials.
Images, videos, audio files, educational video games represent examples of such content.

The media content type represents an easily digestible format for presenting information.
As such, media is typically embedded within the text that is destined reading, slides, demos, practice items and projects.

When developing media items, it is important to follow the guidelines below:

- use an open source or free development tool.
- store both the output (the actual image, video etc.) and the editable building blocks.

#### Images

For the creation of images and diagrams we use [draw.io](httpts://draw.io).
`draw.io` is a free, easy to use tool that offers a variety of useful icons and building blocks.
Additionally, it is available in the browser, which makes it accessible on the majority of today's devices.
The resulting images can be exported in different formats, such as PDF, PNG or SVG.
When storing images, it is important that both the source file (with the extension `drawio` or `svg`) and the immutable output (PDF, PNG, JPG) are stored.
By doing so, the potential users of the content can either use the image as is or modify it according to their needs.
Note that other tools for the generation of images may be used as long as they are free and provide the source file.

One particular type of image is a screenshot.
Screenshots are not editable and need to be retaken if a modification is necessary.

#### Audio-video Recordings

Audio or video content is by its nature hard to modify.
Typically, if a video/audio recording requires alterations, it is re-recorded.
As such, the video/audio recording is stored as is and if modifications are required, it needs to be recreated.
In terms of the tools that can be used to create such recordings, given the variety of options, we do not give any specific recommendations.
Any device that can record at a decent quality is fine.

There is a particular type of video that can be created without using a camera.
By putting multiple similar images in a slideshow and automating the presentation, the video effect can be achieved.
This sort of video is useful for educational material that presents processes or phenomenons step by step.
To create such videos, we need to first create the images and then bundle them up using [ffmpeg](https://ffmpeg.org/).
In this situation the image source files, the actual images and the video need to be stored in the content repository.

#### Interactive Applications

Some educational scenarios involve the learner to interact with a specific application.
The application can be a video game, a web page or even a simple computer program that simulates a given context.
For such situations, the code of the application should be stored alongside the information regarding the tools that are necessary to build the application.
Since this type of content involves a broad range of tools that could be employed, we simply recommend using free and open technologies.

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

### Quizzes

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

Lectures are teaching activities that typically take place with a larger audience and are asymmetrical: a lecturer mostly talks while the audience mostly listens.
Interactivity is important but is limited by the larger audience: not all participants will be able to actively engage in conversations;
however, items that don't require conversation, such as quizzes, are a good way to engage all participants, as we discuss below.
Practical sessions, on the other hand, put participants in the position where they work on concrete items, and get involved in smaller groups discussions, with a more symmetrical interaction.

Lectures benefit from content materials that can be used by educators as preparation and / or during the actual delivery.
In the following sections, we detail steps in preparing and (re)using lecture materials in Open Education Hub.

#### Lecture Materials

We organize lecture materials according to lecture-specific activities.
We reference them as presented in the ["Types of Content" section](#types-of-content).

- **Visual support materials** are used as support material for giving talks and engaging participants in discussions.
  They consist of:

  - [**Slides**](#slides) are the typical structured and simplified format for organizing ideas.
    The lecturer walks through slides and presents information by expanding ideas on the slides, and by engaging in discussions based on those ideas.

  - [**Media files**](#media) are generally images or videos that represent a concept in an easier to grasp format.
    Diagrams, photos, recordings of actions / processes, recorded simulations fall under this category.
    They can be used either stand-alone or embedded into slides.

- **Practical support materials** are used to demonstrate actual real-world applications of presented concepts.
  The lecturer is the one who uses the practical support materials to do live demonstrations and highlight concrete use cases.
  This may not be possible for certain topics, either because they are highly theoretical or because it is difficult to have a live setup.
  Where a live demonstration is not possible, a video recording (as a visual support material) may be used.
  They consist of [**Guides**](#guides) used for demos.

- **Assessment materials** are used to evaluate the knowledge and skills of participants, and to provide feedback on spots they need to focus more on.
  Typically they are to be used live during lectures, with their results providing immediate feedback and triggering discussions.
  They consist of [**Quizzes**](#quizzes).

- **Offline self-study materials** are to be used by participants outside lectures.
  They are detailed in the ["Self-Study" section](#self-study).

As other types of content, lecture materials are publicly available, and also open to contributions.
Lecture materials are meant to be used live by educators during lectures and then offline by learners, to improve gained knowledge and skills.
Visual support materials are directly available on the course website;
the other materials are available either as downloadable archives or directly in the course repository.

#### Lecture Content Structure

Educators have individual styles and preferences.
Hence, they would define their preferred order of presenting topics and decide on the weight of each topic.

Even so, it is recommended that the types of materials shown above be intertwined during an actual lecture.
Slides are good for presenting general topics, but tend to become tern and difficult to follow.
As such, spreading demos and quizzes between slides is great to engage the audience and also provide a practical overview of items and an insight into topics that deserve continued attention.

One possibility is to have lectures focused primarily on demos and on quizzes and slides to be used sparingly, only as topic highlights.

In the ideal case, each topic in a lecture will feature a balanced mix of demos, quizzes, slides and media files.
Some items may be left out altogether, such as having a lecture consisting of demos and quizzes only, without using slides.
The dedicated educator will be careful to adjust the types of content to the topic being presented and to the audience.

#### Evaluating Lecture Content

It is difficult to evaluate lecture content without including the educator delivery method itself.
A charismatic educator will likely get good learner feedback even with low-quality lecture content.

Even so, there are several metrics that we recommend to be considered:

* Good quiz grades (during lectures) are generally a sign that the respective topics are well presented.

* Good assignment grades and fewer technical assignment clarifications requested by learners mean that the topics for assignments were well covered during lectures.

* Website accesses for particular materials signal the topic is deemed well presented by learners (and others - as it is public content).

* Good exam grades for corresponding topics mean materials are well structured.

* Learner feedback that is specifically directed at content (i.e. excluding educator delivery methods) is used to highlight general quality of the content and a comparison among different topics.

* A rating system (stars) can be added to materials to get quick input from learners.

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
