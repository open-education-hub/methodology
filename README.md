# `OpenEdu` Methodology Repository

[![copying.md](https://img.shields.io/static/v1?label=license&message=CCBY-SA4.0&color=%23385177)](https://github.com/open-education-hub/methodology/blob/master/COPYING.md)
[![copying.md](https://img.shields.io/static/v1?label=license&message=BSD-3-clause&color=%23385177)](https://github.com/open-education-hub/methodology/blob/master/COPYING.md)
[![discord](https://img.shields.io/badge/users-93-7589D0?logo=discord)](www.bit.ly/OpenEduHub)
[![contributors](https://img.shields.io/github/contributors/open-education-hub/methodology)](https://github.com/open-education-hub/methodology/graphs/contributors)
[![reddit](https://img.shields.io/reddit/subreddit-subscribers/OpenEducationHub?style=social)](https://www.reddit.com/r/OpenEducationHub/)
[![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FOpenEduHub)](https://twitter.com/OpenEduHub)
[![youtube](https://img.shields.io/youtube/channel/views/UCumS6d-kaVXreY46eZLtEvA?style=social)](https://www.youtube.com/@OpenEduHub/)

The Open Education Hub methodology presents the resources and guides to developing, using and maintaining digital educational content repositories.
The methodology is anchored in the use of the open source development model and in developing open educational resources (OER).
These are open educational resources ([OER](https://en.wikipedia.org/wiki/Open_educational_resources)).

## Using the Content

The methodology is structured following the methodology itself.
Meaning the content is organized according to its own description.

Content is located in the `chapters/` directory.
Each chapter has its own directory:

- [Building Blocks](chapters/building-blocks/overview/reading/README.md)
- [Roles](chapters/roles/overview/reading/README.md)
- [Support Infrastructure](chapters/infrastructure/overview/reading/README.md)
- [Developing and Organizing Content](chapters/develop-organize/overview/reading/README.md)
- [Using and Delivering Content](chapters/use-deliver/overview/reading/README.md)
- [Curating and Maintaining Content](chapters/curate-maintain/overview/reading/README.md)

### Chapter Contents

Chapters consists of sections, each presenting a given topic.
Each chapter has a directory, with a subdirectory for each section.
Content types are stored for each section.
The methodology, given it specific use (to be read and followed by educators and content developers), consists of `reading` and `media` content types.

Content is written in [GitHub Markdown](https://guides.github.com/features/mastering-markdown/).

### Contributing

Contributions are welcome.
See the [contribution guide](CONTRIBUTING.md) on how you could report or fix issues and on how you can improve the content.

Reviewers are requested to follow the [reviewing guide](REVIEWING.md).

## Publishing the Content

In order to publish the content of this repository, we use a GitHub workflow located in `.github/workflows/deployment.yml`.
This workflow will build the site using [Docusaurus](https://docusaurus.io/) and publish the contents to <https://open-education-hub.github.io/methodology/>.

### Running Locally

When testing locally, you will have to build the container that will run the builder based on the [`Dockerfile`](Dockerfile).
For this, the simplest way is the use the [`Makefile`](Makefile).

To generate the web contents locally, run:

```console
make
```

To view the local contents, start a web server by running the command:

```console
make serve
```

As the output of the command tells, point your browser to `http://localhost:8080/methodology`.
