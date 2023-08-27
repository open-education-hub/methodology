# Tasks

Tasks are types of drills that require a **detailed solution**.
This is opposition to [questions](questions.md) that require a **simple answer**.

Tasks verify a wider range of information than quizzes and have the potential to go into more depth regarding a particular subject.
A task may come in the form of an essay, a report, a formal proof, a source code file, etc.
This comes with the disadvantage that grading some of these tasks is not easily automated.

While a code snippet may be easily graded automatically via tests, it is impossible to do so for an essay for example.

## Purpose

Tasks are intended to be forms of self-study or formal examination.
They provide a means to evaluate learner understanding.
This creates a positive feedback loop between trainers and trainees whereby both can track the learners' progress in real time.

Furthermore, tasks serve as practice items for learners to solve at their own pace, in conjunction with questions.
They may also be used for evaluation items that contribute to the learners' overall grade.

Another desired aspect is that tasks be easily extractable and convertible between formats, as described in the ["Deployment"](#deployment) section, and repurposed by other trainers.

## Steps to Develop a Task

To create a new task from scratch, a educator should:

1. Brainstorm the question.

1. Write it down using the Open Education Hub guidelines proposed in this methodology.

1. Upload it to the repository.

## Deployment

Tasks whose grading / verification cannot be automated, such as essays need no special deployment.
A educator should only upload them to their repository, make sure they are rendered properly and all supporting files are in place.

Those tasks that do support automation, such as coding exercises, first require a script or tool to validate the solution to be present in the repository.
Then this script may be run either locally by each learner, or in a unified manner via a CI/CD pipeline set up in the repository.

Lastly, a sample solution to each task or for those that do not support this approach, at least a set of guides on how to solve it must also be present in the repository, in the task's folder.

## Storage Format

We are using Markdown as a generic storage format for tasks because it is a text-based format, so it is suitable for this type of drill.
Unlike more complex formats like LaTeX, Markdown offers a much simpler syntax which makes tasks easier to contribute to by educators and learners alike.

Unlike questions, we do not propose a certain format for the statement of each task.
Since tasks cover a wider range of drills than questions, it is up to the content developer to come up with the best format for their own tasks.

### Directory Structure

A typical task is to be stored in a separate directory within the repository, with the following components:

- `statement.md`: the Markdown file containing all task-related information
- `solution/`: the full solution or guidelines on how to solve the task
- `support/`: optional supporting files, such as starter code, text to be analyzed, etc.
- `media/`: optional media files (images, videos, etc.) required by the question

Therefore, the directory structure of a typical task may look as follows:

```text
sample-task/
├── statement.md
├── support/
|   ├── file.c
|   ├── checker.sh
|   └── ...
├── solution/
|   ├── file.c
|   └── ...
└── media/
    ├── image.svg
    ├── ...
    └── video.mp4
```

Note that the `support/` folder also contains the script to verify the correctness of the provided solution: `checker.sh`.

For tasks focused on writing, or practical work (in this example singing), the directory hierarchy will be slightly altered:

```text
sample-task/
├── statement.md
├── support/
|   └── music_sheet
├── solution/
|   └── README.md
└── media/
    ├── image.svg
    ├── ...
    └── video.mp4
```

Note that the `support/` folder may also be missing and that the `solution/` folder now only contains guidelines on how to perform the song.
