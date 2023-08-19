### Projects

Projects represent unassisted work that learners engage in, over the course of several weeks or months, to enhance their knowledge and comprehension of specific subjects.

Projects share similarities to [drills](#drills), but provide more comprehensive challenges that create a unified scenario.
This environment encourages the application of studied subjects, but also allows exploring beyond them to achieve an authentic learning experience.
This fosters self-directed learning and enables learners to accumulate knowledge at their own pace.

#### Storing Projects

The project directory comprises of:

- **Statement**

  Serving as the central component of a project, the statement provides a comprehensive description for each task.
  It can include an introduction, details about the evaluation process, and additional references.
  Typically, this content is stored in Markdown or PDF format to accommodate media files.

- **Skeleton Files**

  These act as the initial foundation for the project, establishing a consistent framework for all solutions.
  The project's skeleton may range from fill-in-the-blanks outlines and templates to straightforward guidelines.
  While the provision of skeleton files isn't feasible for every case, particularly open-ended assignments, when possible, it lays the groundwork for automation.

- **Utility Files**

  These files have no direct impact on solving the assignment.
  Typically, they address peripheral aspects of the project, such as grammar checks, line/word counts, directory organization etc.
  They consist of automated scripts or configuration files intended to assisting the learner or the educator in setting up and evaluating the project.

- **Automated Evaluation Program**

  As the name suggests, this script is designed to partially or fully assess the correctness of a learner's solution.
  While it aligns conceptually with utility files, it is more specialized and not always feasible – assignments involving open-ended tasks, proofs, or creativity might not inherently support automated verification.
  A valuable indicator of the viability of an automated checker is the presence of skeleton files.

A general structure for the project directory is:

```bash
|-- Statement.md
|-- media
|   |-- img1.png
|   `-- img2.png
|── utility
|   |-- spellcheck.sh
|   |-- linter.sh
|   `-- linter.yml
|-- skeleton
|   `-- template
`-- checker.py
```

#### Automated Scripts

Typically kept in a separate directory, named `utility/` in our case, these files do not directly influence solution development.
Instead, they handle the meta aspects of the solution, focusing on consistency.
This includes tasks like line or word counts, grammar checks, and maintaining the structure of write-ups.

These programs have a broad scope and are often readily accessible online as [third-party tools](#third-party-open-tools-employed).
These tools are crafted for easy deployment without intricate configurations.
However, for tailored use-cases, they provide a "control panel" in the form of a configuration file, usually in formats such as `.yml` or `.json`.

To establish a strong groundwork for frontend checks in a project, using an all-in-one bundle is recommended.
In our specific context, the foundation for linting relies on [`super-linter`](https://github.com/super-linter/super-linter), and spellchecking is facilitated through [`spellcheck` GitHub action](https://github.com/rojopolis/spellcheck-github-actions), both having minimal setup.

On the opposite side of generality, we encounter the assignment checker.
Unlike online tools, this script needs insight on the underlying aspects of the project to perform its task effectively.
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
  Do not hesitate to create skeleton files to enhance the automated checker's ability to interpret solutions accurately.

- **Limitations**: In many instances, the automated checker consists of guidelines and it should not supersede the educator's judgment.
  Striking a balance between automated assistance and human expertise ensures a thorough evaluation of assignments.
