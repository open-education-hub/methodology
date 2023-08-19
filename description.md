# Methodology

The Open Education Hub methodology contains all of the guidelines for creating high quality, open source educational materials.
The methodology describes the types of content, how the content is used in the various stages of teaching and the required infrastructure.
All the educational content is open source and all of the used tools are either open source or free to use.

## Types of Content

This chapter describes the various forms that the educational content may take form.
Each section details how a specific type of content is to be developed, stored and used.

### Reading

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

### Quizzes

### Drills

### Tutorials

### Demos

### Projects

## Teaching Stages

This chapter describes how each teaching activity is mapped to different types of content.
Put differently, it shows how each content type is to be used in the various teaching stages.

### Lectures

### Practical Sessions

### Exams

### Assignments

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
