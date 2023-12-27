# Content Processing

Educational content organized in a Version Control System like `git`, and published to a `GitHub` repository is suitable for collaborative development.
However, it might be a challenging medium for learners to interact with directly.
As a consequence, the content should be presented in a much more friendly and interactive manner.
To that end, the content is processed so that it is deliverable to a publisher (website) in a more approachable way.

The types of content that need to be processed vary with course requirements and require different actions in order to be rendered.
The various types of content are defined and explained in the [Developing and Organizing Content](../../../develop-organize/overview/reading/read.md) chapter.

The rendered output that we recommend is a website generated using a static website generator.
The usage of [`Docusaurus`](https://docusaurus.io/) is also recommended, but other static website generators ([`Hugo`](https://gohugo.io/), [`Docsy`](https://www.docsy.dev/), [`Sphinx`](https://www.sphinx-doc.org/en/master/)) can be used.
The rendered website can embed materials such as slides and quizzes, and can also refer the end user/learner to the `GitHub` repository from which the content is generated (or to an auxiliary repository) for practical content, such as drills.

Most static website generators have a documented structure that needs to be followed for the website to render.
This can be incompatible with the way content is organized for easier collaboration.

To facilitate content processing with the scope of being published, we have developed the [`Open Education Builder`](https://open-education-hub.github.io/openedu-builder/).

## Open Education Builder

The Open Education Builder is an application that helps organize, transform, and present content.
It is built with a modular architecture in mind, the smallest building block being the `plugin`.
A `plugin` represents a simple script that transforms the original content possibly by performing some substitution, moving files or invoking a command.
A few examples of such plugins are the ones developed for the technologies recommended in our methodology:

- [`RevealMD`](https://open-education-hub.github.io/openedu-builder/plugins/revealmd) - builds multiple slides that are based on `reveal-md`;
- [`Docusaurus`](https://open-education-hub.github.io/openedu-builder/plugins/docusaurus) - translates the content so that the structure matches the input expectations of `Docusaurus`.

The plugins are configured through a central configuration file (`config.yaml`), present at the root of the content repository.

The main way to use the Open Education Builder is by customizing the default actions and configuration present in the [`oer-template`](https://github.com/open-education-hub/oer-template) repository.

For configuration options, advanced usage and contributions, please refer to the [documentation](https://open-education-hub.github.io/openedu-builder/) and the [Open Education Builder repository](https://github.com/open-education-hub/openedu-builder)

## Usage examples

The recommended usage of the Open Education Builder is through the provided Docker container.

In this sense, one would extend the provided container by creating a new Dockerfile and using the following line at the beginning:

```Dockerfile
FROM ghcr.io/open-education-hub/openedu-builder:0.5.1
```

Following, any additional dependencies (e.g. `Docusaurus`, `reveal-md`) need to be installed.

```Dockerfile
# Install node LTS (16)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get update && \
    apt-get install -yqq nodejs

# Install reveal-md using npm.
RUN npm install -g reveal-md

# Install Docusaurus.
RUN npm install create-docusaurus@2.1.0
```

A [sample Dockerfile](https://github.com/open-education-hub/oer-template/blob/main/Dockerfile) that installs the technologies we recommend is provided in the [`oer-template`](https://github.com/open-education-hub/oer-template) repository.

Additionally, we also provide a GitHub Action that rebuilds and runs the Docker container and publishes the resulting website whenever content is modified, [here](https://github.com/open-education-hub/oer-template/blob/main/.github/workflows/deployment.yml).

The behavior of the Open Education Builder is controlled through a configuration file that has to be named `config.yaml` and placed at the root of your repository.

Based on the steps defined in the configuration file, the builder will construct plugins and run them in the order specified.
Each step has an associated input directory and output directory.
By default, the input directory is the root of the project and the output directory is a directory with the same name under the build directory.
In the snippet below, there are 3 steps that will run the `command`, `reveal_embed` and `docusaurus` plugins, in that order, with their respective default input and output directories.

```yaml
stages:
  - make_assets
  - embed_reveal
  - docusaurus

build_dir: /build
output_dir: /output

make_assets:
  plugin: command
# [...]

embed_reveal:
  plugin: reveal_embed
# [...]

docusaurus:
  plugin: docusaurus
# [...]
```

Using content that was built/generated in a previous step can be done by using the full path to that content.
In the example below, we are using content generated in the `make_assets` step as an argument to the `static_assets` option of the `docusaurus` plugin.

```yaml
make_assets:
  plugin: command
  options:
    command: make
    locations:
      - content/chapters/data/lecture
      - content/chapters/io/lecture
      # [...]
    args:
      - all

# [...]

docusaurus:
  plugin: docusaurus
  options:
# [...]
    static_assets:
      - slides/Data: /build/make_assets/content/chapters/data/lecture/_site
      - slides/IO: /build/make_assets/content/chapters/io/lecture/_site
# [...]

```

## Docusaurus

Docusaurus requires a directory structure similar to this:

```text
docs/
`-- Labs/
    `-- Compute/
        |-- media/
        |-- quiz/
        |-- overview.md
        |-- processes.md
        `-- threads.md
```

This is different from the structure proposed in the [Developing and Organizing Content](../../../develop-organize/overview/reading/read.md) chapter.
We have developed the `Docusaurus` plugin for the `Open Education Builder` in order to facilitate this reorganization.

The most important option of this plugin is the `structure` option, which defines the order of the chapters and their sections and subsections, together with the source of the content.
A simplified example, taken from the [Operating Systems](https://github.com/open-education-hub/operating-systems) repository, that maps to the directory structure above can be seen below.

```yaml
# [...]
    structure:
      - Lab:
        - Compute:
            path: content/chapters/compute/lab/content
            extra:
              - ../media
              - ../quiz
            subsections:
              - Overview: overview.md
              - Processes: processes.md
              - Threads: threads.md
# [...]
```

A section (such as `Lab` or `Compute` above) can either be followed by a list of subsections (as is the case for `Lab`) or by a few options.
In the case of the `Compute` section, it has 3 options: `path`, `extra` and `subsections`.

- The `subsections` option specifies the subsections of the current section.
  These can be pages that will be rendered (as in this example) or other sections.
- The `extra` option specifies other files that you want to copy, such as media files.
- The `path` option specifies a source path that will be prepended to any other path that follows in the tree.

In this case, it is used to avoid repetition when specifying the location of the subsections.

For more advanced usage examples and other options for the `Docusaurus` plugin, you can check the [documentation](https://open-education-hub.github.io/openedu-builder/plugins/docusaurus) of the Open Education Builder.
And the more effective `config.yaml` files used in existing repositories:

- [`operating-systems`](https://github.com/open-education-hub/operating-systems/blob/main/config.yaml)
- [`ccas`](https://github.com/open-education-hub/ccas/blob/main/config.yaml)
- [`binary-security`](https://github.com/open-education-hub/binary-security/blob/main/config.yaml)
