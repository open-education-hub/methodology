# Guides

Guides are pieces of content consisting of detailed steps that are commonly used in practice.

Guides are to be used by learners as **tutorials**, part of the learning process.
They can be used as tutorials during ["Practical Sessions"](../../../use-deliver/practical-sessions/reading/read.md), either as unassisted self-study, or with assistance provided for better understanding.

Educators can also use guides as **demos** when demonstrating a topic or showcasing a real-world scenario to a live audience.
These demos are typically good ways to capture the attention of learners due to their real-world nature.

Guides consist of:

- **description and walkthrough**:
  These are the rationale & goals of the guide (how it would help the learner) and the detailed set of steps that the learner must undertake to reach the goal.
  They are created in Markdown format by following the guidelines in [the "Reading" section](../../reading/reading/read.md)
- **media**:
  These form the visual support, assisting the learner while walking through the guide.
  They are created by following the guidelines in [the "Media" section](../../media/reading/read.md)
- **support files**:
  These refer to any support files that the learner or educator use in reaching the goal of said guide.
  They may be source code, skeleton files, application support files, fill-in-the blanks, templates.

## Guide Directory Structure

Each guide is to be stored in a dedicated directory in the `guides/` directory of a topic.
A guide directory would typically look like:

```text
|-- README.md
|-- media/
`-- support/
```

The contents are:

- `README.md`:
  Written in Markdown format, it stores the description and walkthrough.
- `media/`:
  This directory stores the visual support files.
- `support/`:
  This directory stores the support files (source code, skeleton files, application support files, fill-in-the blanks, templates) used by the learner / educator while working on the guide.

## Guidelines for Guide Contents

The contents in `README.md` should follow the guidelines in [the "Reading" section](../../reading/reading/read.md).
Similarly, the visual support files in the `media/` directory should follow the guidelines in [the "Media" section](../../media/reading/read.md).
Support files will pass through linter checks, as detailed in [the "Linters" section](../../../infrastructure/linters/reading/read.md).

A guide should have a clear objective, that is stated at the beginning.
The learner or educator must be well aware of what they will gain from using the guide.

After the goal, the guide should present the resources required, such as prerequisite setup and the support files used.

The guide should be comprehensive.
Each step should be carefully crafted, in an orderly manner.
Ensure that steps are granularly presented, and that content itself is digestible.
Instructions should be clear and complete.

Any novel item, expected not be known at the time of the guide, must be explained.

At the end of the guide, summarize the initial goal.
Highlight the relevance of the result and, ideally, its applicability in a real-world situation.
