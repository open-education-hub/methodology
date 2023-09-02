# Self-Study

Self-study is the process of independently learning outside of structural classroom settings or formal instruction.

There are multiple reasons learners find self-studying hard:

- **Lack of structure**: Learning without a structure can lead to potential confusion and inefficiency.
- **Access to resources**: Even if there are a lot of resources on the internet, they are not always easy to find.
- **Lack of feedback**: Without regular feedback from the educator, learners tend to lose motivation, potentially leading to gaps in knowledge.
- **Need for help**: Without help from the educator, learners may not be able to solve the problems on their own and this can lead to frustration.
- **Difficulty**: The subjects must have an adequate difficulty in order not to demotivate learners.

In order to overcome these problems, we can improve the following:

## Organize Resources

The material is to be organized into chapters.
Each chapter will encompass one or more subjects.
Within each chapter, there will be an `overview` section that summarizes the different subjects included and requirements / prerequisites for using the chapter.
This `overview` will highlight the main topics of the chapter and the key information that readers should grasp before moving on to the next chapter.
A general example of the following structure is shown below or can be found [here](https://github.com/open-education-hub/oer-template).

```text
`-- chapters/
    `-- chapter-1/
    |   |-- overview.md
    |   |-- topic-1
    |   `-- topic-2
    `-- chapter-2/
        |-- overview.md
        |-- topic-1
        `-- topic-2
```

## Drills

To improve the learning experience and for the learners to have a method to test their knowledge, [drills](../../../develop-organize/drills/reading/README.md) can be used.
The best way is to use both types of drills and reference them in each subject.
In this way, the learner will know in which order he should go through the material.
Their difficulty should be in an appropriate way, starting from easy exercises and reaching the hard ones.
At the end, some open-ended questions can be used to test the learner's knowledge and their understanding of the subject.

## Quick Feedback

After reading and solving drills, the learner should be able to get a quick feedback about their understanding of the subject.
Getting a quick feedback keep the learner motivated and engaged.
This is an essential part of the learning process and should be integrated in the learning material.
Every drill should have a feedback section with the correct answers and an explanation of the answers.
Reading the explanation will help the learner understand better even if they did the correct answer.
For drills, it's important to have a possibility to check what the learner did.
In computer science field this can be done using an automated checker or using unit tests for the drill.
In other fields, this might not be possible.
For example, in mathematics, even if the learner did the correct answer, it is possible that he got the correct answer using wrong or ineffective methods.
This is hard to detect automatically, but one solution for this is to organize a cross-check review between learners.
