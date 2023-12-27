# Linters

Linters are tools for checking consistency and quality of code, but they can be used on every type of content.
They enforce a consistent style for writing content, making it easier for content creators to read and maintain.
There are different types of linters, depending on the type of content.
For example, a linting tool for code is different from a linting tool for text.

## Examples

- [`Super-Linter`](https://github.com/super-linter/super-linter) is a combination of various linters that can be used locally or in CI/CD pipelines.
- [`markdownlint`](https://github.com/igorshubovych/markdownlint-cli) is a linter for Markdown files.
- [`spellcheck`](https://github.com/marketplace/actions/github-spellcheck-action) is a linter for text for check spelling.

All of these linters are available in the [actions](https://github.com/open-education-hub/actions) repository.

## Rules

Every linter has a set of default rules that it uses to check the content.
Some rules can be configured to ignore some errors that are not relevant to the project.
For example, `markdownlint` can ignore some errors that are not relevant to Markdown files using [custom rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md).
We are currently using some custom rules for Markdown files that can be found in the [actions](https://github.com/open-education-hub/actions/tree/22a266d68c3c97dd9989f7afb5c4095a0e3dbc85/super-linter/rules) repository.

## Usage

### Locally

There are multiples ways to run linters locally.

`Super-Linter` can be run locally inside a Docker container using this [script](https://gist.github.com/gabrielmocanu/9606cfd789e07b0a1650d0b349fd15f2).
The script expects two arguments, the path to the codebase and the path to the linting rules.
Linting rules are used because sometimes the linter might be too strict.
Configuring these rules can ignore some errors that are not relevant for the project.
The linting rules that we are currently using and recommending are inside the [actions](https://github.com/open-education-hub/actions/tree/main/super-linter/rules) repository.

Another way of using linters locally is to check [supported linters](https://github.com/super-linter/super-linter#supported-linters) by `super-linter` and try to run them locally.
[`markdownlint`](https://github.com/igorshubovych/markdownlint-cli) is a good example.
It's the linter used by `super-linter` for Markdown files.

Of course, for some linters you can find a web solution that can run the linter without installing it locally.
For example, on this [website](https://dlaa.me/markdownlint/) you can use `markdownlint` by copy-pasting the content of the file you want to check.

### Continuous Integration and Continuous Delivery

The most common way to use linters is in [CI/CD pipelines](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/).
By default, our [template repository](https://github.com/open-education-hub/oer-template) is already configured to use `super-linter` for linting on every pull request.
By forking it, you will already have this configuration.

Otherwise, if you want to use it without forking or if you want to modify it, you should be aware of the [actions](https://github.com/open-education-hub/actions) repository.
In this repository we store the configuration files for multiple linters used by `super-linter`.
