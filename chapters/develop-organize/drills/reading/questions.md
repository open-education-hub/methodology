#### Questions

Owner: Teo Duțu
Reviewer: Gabi Mocanu

Questions are types of drills that require an answer.
This is opposition to [tasks](tasks.md) that require a solution.

Questions verify specific information and must be verifiable automatically. - RD: not necessarily automatically
Therefore, this section covers multiple-choice or simple answer questions, such as a word or a number.
On the other hand, open-ended tasks such as essays, that are difficult to verify automatically, are considered drills.

Questions may be a form of live checks (as part of lectures or labs), self-study or formal examination.
They provide a means to evaluate learner understanding.
This creates a positive feedback loop between trainers and trainees whereby both can track the learners' progress in real time.

Furthermore, questions serve as practice items for learners to solve at their own pace, in conjunction with drills.
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

- [SmileyTutor (formerly called TutorWeb)](https://tutor-web.net/) is another free learning platform whose highlight is that it was built around the [SmileyCoin cryptocurrency](https://smileyco.in/) as a reward for completing drills and questions.
  See more in [the "Digital Rewards" section](../../../infrastructure/digital-rewards/reading/README.md).

- [`tech.io`](https://tech.io/) is another platform for presenting questions as quizzes.
  More simplistic than Moodle or SmileyTutor, it allows educators to easily create _playgrounds_, which are learning environments designed around specific subjects, made up of reading material, followed by practical exercises and questions.

- [`Kahoot!`](https://kahoot.it/) is another platform for hosting multiple-choice quizzes.
  These quizzes are called games and can be created either from scratch, or by using `Kahoot!`'s existing question bank.
  Creating `Kahoot!` quizzes from scratch is difficult to automate because the platform requires submitting questions individually into a web page.

Each of these platforms supports a different syntax for uploading questions.
To make our questions comply with educational platforms easily, we need to store them in a generic format that is easily presentable and automatically convertible to other required formats.
For this reason and for the sake of consistency, we are storing questions in the same Markdown format as all of our written material.

We are developing a modular and easily extendable converter that ports questions from Markdown to other formats.
The format that we use to store questions is easily convertible to other formats.
Therefore, we do not implement converters for all the existing formats.
Instead, we do provide a program that is easily extendable to support any kind of format.

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

The converter may also be run by the builder if the educator desires to integrate questions within their published course and not use a third-party hosting site, such as those outlined [in the" Deployment" section](#deployment).
If this integration is desired, it is up to the educator to configure the builder accordingly.
