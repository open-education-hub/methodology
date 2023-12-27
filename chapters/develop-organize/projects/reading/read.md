# Projects

Projects are practice items that are larger in scope and require extensive time, effort and resources to complete.
The main goal of projects is to present intense challenges to learners, and, therefore, increase their skills and knowledge.
When compared to [drills](../../drills/reading/read.md), projects aim to present a comprehensive narrative that can be divided into smaller, coherent steps.
Projects are mainly used as content for [assignments](../../../use-deliver/assignments/reading/read.md).

Typically, a project consists of a statement, support files and, where possible, validators / checkers.
The statement presents the context, goals, resources, and useful references.
Support files are pieces of digital information (source code, templates, application support files) that form a starting point for the project.
Validators / checkers are applications that automate the verification and grading of solutions.

Developing a solution in advance is strongly advised.
It provides valuable insights into the completeness of the assignment statement and accompanying support files.
Additionally, it facilitates the setup of an automated checker for closed-end assignments, guaranteeing that the submission infrastructure is properly configured to meet the requirements.
The reference solution is initially stored in a private repository during the assignment's publication period.
In certain situations, it may later become accessible to the public, serving as a point of reference for other learners.

## Storing Projects

Projects are stored in the `projects/` directory of a given topic.
Each project directory includes:

- **Statement**

  The project statement is the core element of any project, offering a thorough description of its requirements.
  Typically, it includes an overview of goals and requirements, details about the evaluation process, and additional references.
  The structure of the project statement sets the tone for the entire project.
  Choosing to divide the requirements into tasks that serve as checkpoints for tracking progress can enhance readability and improve the overall learning experience.
  This content is stored in Markdown format with media files.

- **Support Files**

  These act as the initial foundation for the project, establishing a consistent framework for all solutions.
  The project's skeleton may range from fill-in-the-blanks outlines and templates to straightforward guidelines.
  While the provision of skeleton files isn't feasible for every case, particularly open-ended assignments, when possible, it lays the groundwork for automation.

- **Utility Files**

  These files have no direct impact on solving the assignment.
  Typically, they address peripheral aspects of the project, such as grammar checks, line/word counts, directory organization etc.
  They consist of automated programs or configuration files intended to assisting the learner or the educator in setting up and evaluating the project.

- **Automated Validators**

  As the name suggests, these programs are designed to partially or fully assess the correctness of a learner's solution.
  While it aligns conceptually with utility files, it is more specialized and not always feasible – assignments involving open-ended tasks, proofs, or creativity might not inherently support automated verification.
  A valuable indicator of the viability of an automated validator is the presence of skeleton files.

A general structure for the project directory is:

```bash
|-- README.md
|-- media
|   |-- img1.png
|   `-- img2.png
|-- utility
|   |-- spellcheck.sh
|   |-- linter.sh
|   `-- linter.yml
|-- skeleton
|   `-- template
`-- checker
    `-- checker.py
```

## Automated Validators

Typically kept in a separate directory, named `utility/` in our case, these files do not directly influence solution development.
Instead, they handle the meta aspects of the solution, focusing on consistency.
This includes tasks like line or word counts, grammar checks, and maintaining the structure of write-ups.

These programs have a broad scope and are often readily accessible online as third-party tools, as presented in the ["Support Infrastructure" section](../../../infrastructure/overview/reading/read.md).
These tools are crafted for easy deployment without intricate configurations.
However, for tailored use-cases, they provide a "control panel" in the form of a configuration file, usually in formats such as `.yml` or `.json`.

To establish a strong groundwork for frontend checks in a project, using an all-in-one bundle is recommended.
In our specific context, the foundation for linting relies on [`super-linter`](https://github.com/super-linter/super-linter), and spellchecking is facilitated through [`spellcheck` GitHub action](https://github.com/rojopolis/spellcheck-github-actions), both having minimal setup.

On the opposite side of generality, we encounter the assignment checker.
Unlike online tools, this program requires insight on the underlying aspects of the project to perform its task effectively.
As previously mentioned, the scenarios where such a checker is applicable remain restricted.
Thus, we offer a few guiding principles for designing a checker:

- **Programming Language**: Opt for a widely-used scripting language to leverage available online packages rather than building from scratch.
  [Python](https://www.python.org/) is a prime example due to its extensive library ecosystem.

- **Interacting with Solutions**: Tailor the assessment method to suit the assignment type.
  For computer science assignments, executing the program against inputs is effective.
  Open-ended tasks benefit from natural language processing tools to measure coherence and structure,
  While this is not enough decide the final grade, it can be employed to compare against established norms, thereby mitigating potential subjectivity.
  For mathematics consider having students input equations in `LaTeX` format and utilize specialized libraries for validation, such as [`SymPy`](https://www.sympy.org/).

- **Input Formats**: Opt for text-based input whenever applicable, as it accommodates various assignment types.
  In cases requiring mathematical expressions or formulae, embrace `LaTeX` format for clarity and accuracy.
  It also has the advantage of being supported by `Github Markdown`.
  Do not hesitate to create skeleton files to enhance the automated checker's ability to interpret solutions accurately.

- **Limitations**: In many instances, the automated checker consists of guidelines and it should not supersede the educator's judgment.
  Striking a balance between automated assistance and human expertise ensures a thorough evaluation of assignments.
