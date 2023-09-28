# Validators and Checkers

One of the greatest challenges of educators is the evaluation of submissions from learners.
They require an extensive amount of time, directly proportional with the number of learners.
Automating the evaluation process frees evaluators to work on more creative aspects and also gives the learner a templated, quick way of assessing their skills and knowledge.
As such, by using tools to validate and check submissions, we are able to scale the evaluation to a large number of learners.
Also, evaluators can now focus on content development and improvement.

For this, Open Education Hub provides [`vmchecker`](https://github.com/open-education-hub/vmchecker-next), an open source software solution for assignment evaluation.
`vmchecker` uses integrations with other tools such as Moodle user interaction, and [GitLab](https://about.gitlab.com/) for running the code in a containerized [Docker](https://www.docker.com/)-based safe environment.

Currently `vmchecker` is targeted and has been used for Computer Science topics.
It can be expanded to other technical topics and potentially, with specific tools for validation, to other topics as well.

## Goals

`vmchecker` is built to satisfy the goals of the Open Education Hub project.
They are the same goals as the ones set [`oer-builder`](../../processing/reading/read/md), but tailored for submission checking.

`vmchecker` is **easy to use and setup** by both infrastructure managers, educators and learners.
This can be done through automation, providing setup scripts to allow for automatic setup.
Containers are used in modern software development to use a one button solution for software deployment.
We aim to use containers to allow infrastructure administrators to start the infrastructure with needing a special environment.
Containers also allow local checking using scripts to automate the setup.

As resource usage increases, and demand is increased, `vmchecker` is able to **scale the amount of submissions that it checks in parallel**.
A parallel approach means learners don't have to wait in long queues for assignment checking.

`vmchecker` is **open source software** and is compatible with the [Open Educational Resources requirements](https://oercommons.org/).
Using open source solutions allows us to quickly discover issues and make updates.

Many education institutions use e-learning platforms to manage classrooms.
These tools allow users to upload materials, evaluate learners, and grade assignments using a single application.
`vmchecker` is integrated with existing educational platforms (such as Moodle).
This makes it more appealing to integrate for institutions that already rely on these systems.
Educational institutions need a seamless process from assignment submission to grading in a shared grade book.

## Architecture

`vmchecker` has been built with a modular architecture, so that it fits the diverse needs of educational institutions.
The figure below displays the minimal components needed in order to have a working `vmchecker` service.

![`vmchecker` Architecture](../media/vmchecker-arch.png)

The three components in the figure are:

- **frontend**: receives assignments from students, uploads them to the `vmchecker` middleware and receives the assignment run information after it has finished;
- **item middleware**: receives requests from the frontend and uploads the submission to the checking infrastructure;
  the infrastructure runs the submission, waits for the result, and then uploads it to the frontend;
- **submission runner**: receives submission checking requests from the middleware service, runs the submission using a specific recipe.

[GitLab](https://about.gitlab.com/) was chosen as a hosting platform for Git repositories, as it is a Free and Open Source Solution that can be used as an open online platform, or it can be installed at an institution.
A workflow advantage for GitLab is that learners can include educators to a private repository.
This makes it easier for learners and educators to debug faulty code together.
Because the API is open, the operation of granting educators access can be automated using scripts.

## User Scenarios

`vmchecker` has been built with scenarios for the user roles:

* Infrastructure managers handle the `vmchecker` installation and ensure a service level agreement, especially during high load situations, such as submission deadlines.
* Educators configure repositories for submissions, and integrate them with `vmchecker`.
* Learners make use of the submission repositories and the `vmchecker` installation to validate submissions and receive grading.

Each role interacts with `vmchecker` through a user-friendly interface.
This is the motivation for using GitLab that already provides the interface adapted for `vmchecker` scenarios.

## Infrastructure Manager

The infrastructure manager first needs to set up the `vmchecker` frontend and middleware.
The [`vmchecker` Moodle plugin](https://github.com/open-education-hub/vmchecker-next-ui) is used as a frontend that can be copied and installed on the Moodle instance.
The middleware is to be set up with all its required services using the Docker containers provided in the [`vmchecker` repository](https://github.com/open-education-hub/vmchecker-next).

`vmchecker` doesn't have to be set up with an institutional GitLab instance, it can also use the [official public GitLab instance](https://about.gitlab.com/).
It does not require any specific features that cannot be accessed by regular users using the GitLab REST API.
An institution may want to use their own GitLab instance in order to manage per user limits, or to give users access to more resources, and connect to institutional user management.

Detailed instructions for infrastructure managers are part of the [official `vmchecker` Moodle Admin Handbook](https://github.com/open-education-hub/vmchecker-next/wiki/Moodle-Admin-Handbook).

## Educator

Educators need only interact with the frontend and GitLab to create a submission repository.
The teacher must create a repository based on [the template provided by the `vmchecker` team](https://github.com/open-education-hub/vmchecker-next-assignment).
The cloned Git repository will contain a GitLab CI/CD workflow file which defines the container which will run the submission and the script to run the assignment.
The assignment repository must also contain a `src/` directory, which defines the directory in which students will write code.
The Git repository must be private, otherwise students would be able to view the code amongst themselves.

If using Moodle, the educator must create an `Assignment` instance and a `vmchecker` assignment block, which will attach to the `vmchecker` backend.
The assignment block must be configured with the project ID of the aforementioned repository, and an access token so the middleware has permissions to work with the repositories.

Detailed instructions for educators are part of the [official `vmchecker` Student Handbook](https://github.com/open-education-hub/vmchecker-next/wiki/Teaching-Assistant-Handbook).

## Learner

Learners interact with `vmchecker` in two ways:

- a Moodle-based workflow: upload the work directly through Moodle, that sends it the GitLab backend
- a Git-based workflow: upload work through Git to GitLab, and trigger the validation

In order to work on a submission, students must download the submission template code.
As part of the template, a script (named `local.sh`) runs the submission checker inside of the container infrastructure, mirroring the checking environment in GitLab.
The checker script can also be called locally outside of the container.

A learner can upload their source code as part of an archive inside the Moodle assignment activity, and it will launch the checking request.
The Git-based checking flow requires learners to push changes directly to GitLab, where the changes committed trigger the GitLab CI/CD workflow.

Detailed instructions for learners are part of the [official `vmchecker` Student Handbook](https://github.com/open-education-hub/vmchecker-next/wiki/Student-Handbook).

## Container Infrastructure

The issue with using the same assignment checking script for many students is that they can have different libraries and applications installed on their systems.
Different environments may lead to certain optimization inconsistencies.
To mitigate this, we recommend teachers setup the checking infrastructure in `vmchecker` so that the scripts run inside of a container.
The `vmchecker` team provides a minimal template that can be expanded based on individual class needs.

The container infrastructure presents an easier approach than the one seen in current solutions, which either require an internet connection for remote checking, or a virtual machine, which uses more resources.
Using containers allows for easier patches to the environment, for example installing a new library, because the changes will be sent incrementally, the student not needing to download a whole new image.

## Example `vmchecker` Deployments

`vmchecker` has been used extensively for the Operating Systems class at the [National University of Science and Technology POLITEHNICA of Bucharest (UNSTPB)](https://upb.ro/), using the contents of [the `operating-systems` repository](https://github.com/open-education-hub/operating-systems).
The repositories used for the five assignments, plus a template repository, plus a tutorial assignment can be used as examples of repositories for `vmchecker` deployment:

- [`Assignment: Template`](https://gitlab.cs.pub.ro/operating-systems/assignment-template)
- [`Assignment: Tutorial`](https://gitlab.cs.pub.ro/operating-systems/assignment-tutorial)
- [`Assignment: Mini Libc`](https://gitlab.cs.pub.ro/operating-systems/assignment-mini-libc)
- [`Assignment: Memory Allocator`](https://gitlab.cs.pub.ro/operating-systems/assignment-memory-allocator)
- [`Assignment: Parallel Graph`](https://gitlab.cs.pub.ro/operating-systems/assignment-parallel-graph)
- [`Assignment: Mini Shell`](https://gitlab.cs.pub.ro/operating-systems/assignment-mini-shell)
- [`Assignment: Async Web Server`](https://gitlab.cs.pub.ro/operating-systems/assignment-async-web-server)
