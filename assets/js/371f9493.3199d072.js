"use strict";(self.webpackChunkopen_edu_methodology=self.webpackChunkopen_edu_methodology||[]).push([[3463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Questions",s={unversionedId:"Developing and Organizing Content/Drills/questions",id:"Developing and Organizing Content/Drills/questions",title:"Questions",description:"Questions are types of drills that require a simple answer.",source:"@site/docs/Developing and Organizing Content/Drills/questions.md",sourceDirName:"Developing and Organizing Content/Drills",slug:"/Developing and Organizing Content/Drills/questions",permalink:"/methodology/Developing and Organizing Content/Drills/questions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Drills",permalink:"/methodology/Developing and Organizing Content/Drills/read"},next:{title:"Tasks",permalink:"/methodology/Developing and Organizing Content/Drills/tasks"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Steps to Develop a Question",id:"steps-to-develop-a-question",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Storage Format",id:"storage-format",level:2},{value:"Question File Format",id:"question-file-format",level:3},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Converter",id:"converter",level:2},{value:"Usage",id:"usage",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"questions"},"Questions"),(0,r.kt)("p",null,"Questions are types of drills that require a ",(0,r.kt)("strong",{parentName:"p"},"simple answer"),".\nThis is opposition to ",(0,r.kt)("a",{parentName:"p",href:"/methodology/Developing%20and%20Organizing%20Content/Drills/tasks"},"tasks")," that require a ",(0,r.kt)("strong",{parentName:"p"},"detailed solution"),"."),(0,r.kt)("p",null,"Questions verify specific information and must be verifiable automatically.\nTherefore, this section covers multiple-choice or simple answer questions, such as a word or a number.\nOn the other hand, open-ended tasks such as essays, that are difficult to verify automatically, are considered drills."),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Questions may be a form of live checks (as part of lectures or labs), self-study or formal examination.\nThey provide a means to evaluate learner understanding.\nThis creates a positive feedback loop between trainers and trainees whereby both can track the learners' progress in real time."),(0,r.kt)("p",null,"Furthermore, questions serve as practice items for learners to solve at their own pace, in conjunction with tasks.\nThey may also be used for evaluation items that contribute to the learners' overall grade."),(0,r.kt)("p",null,"Another desired aspect is that questions be easily extractable and convertible between formats, as described in the ",(0,r.kt)("a",{parentName:"p",href:"#deployment"},'"Deployment"')," section, and repurposed by other trainers."),(0,r.kt)("p",null,"Despite all of their strengths, questions also come with a few shortcomings.\nOne such downside is the binary nature of the feedback loop.\nBecause question grading is automated, it is harder for the feedback that learners receive to pin-point the exact step that they got wrong and focus on that.\nSaid feedback may be however detailed enough for learners to figure this out themselves.\nIn addition, non-technical fields of study may find little benefit in questions as they rely more on arguments essays rather than concrete, technical information."),(0,r.kt)("p",null,"Even after accounting for these downsides, questions are an easy and automated way to provide quick feedback regarding learner knowledge, both to educators and to learners themselves."),(0,r.kt)("h2",{id:"steps-to-develop-a-question"},"Steps to Develop a Question"),(0,r.kt)("p",null,"To create a new question from scratch, a educator should:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Brainstorm the question.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write it down using the Open Education Hub format proposed in this document.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Push it to the repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Convert it to the required publisher format.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish and deploy it to the desired platform."))),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Each trainer uses a specific teaching rendering platform.\nMost platforms support questions in various formats, such as whether they are graded or ungraded, whether the answers are multiple choice or text boxes, etc.\nOut of the existing teaching platforms, a few highlights are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://moodle.org/"},"Moodle")," is a free open-source learning platform dedicated to course management.\nIt supports graded assignments, quizzes, storing teaching materials and many other educational activities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://tutor-web.net/"},"SmileyTutor (formerly called TutorWeb)")," is another free learning platform whose highlight is that it was built around the ",(0,r.kt)("a",{parentName:"p",href:"https://smileyco.in/"},"SmileyCoin cryptocurrency")," as a reward for completing drills and questions.\nSee more in ",(0,r.kt)("a",{parentName:"p",href:"../../Support%20Infrastructure/Digital%20Rewards/read"},'the "Digital Rewards" section'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://tech.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"tech.io"))," is another platform for presenting questions as quizzes.\nMore simplistic than Moodle or SmileyTutor, it allows educators to easily create ",(0,r.kt)("em",{parentName:"p"},"playgrounds"),", which are learning environments designed around specific subjects, made up of reading material, followed by practical exercises and questions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kahoot.it/"},(0,r.kt)("inlineCode",{parentName:"a"},"Kahoot!"))," is another platform for hosting multiple-choice quizzes.\nThese quizzes are called games and can be created either from scratch, or by using ",(0,r.kt)("inlineCode",{parentName:"p"},"Kahoot!"),"'s existing question bank.\nCreating ",(0,r.kt)("inlineCode",{parentName:"p"},"Kahoot!")," quizzes from scratch is difficult to automate because the platform requires submitting questions individually into a web page."))),(0,r.kt)("p",null,"Each of these platforms supports a different syntax for uploading questions.\nTo make our questions comply with educational platforms easily, we need to store them in a generic format that is easily presentable and automatically convertible to other required formats.\nFor this reason and for the sake of consistency, we are storing questions in the same Markdown format as all of our written material."),(0,r.kt)("p",null,"We are developing a modular and easily extendable converter that ports questions from Markdown to other formats.\nThe format that we use to store questions is easily convertible to other formats.\nTherefore, we do not implement converters for all the existing formats.\nInstead, we do provide a program that is easily extendable to support any kind of format."),(0,r.kt)("p",null,"The converter becomes a collection of processors whose job is to change the layout of a given file between formats.\nEither their input or their output is a dictionary JSON representation.\nIn addition, each converter is bi-directional, being capable of converting either from a format to JSON or vice-versa.\nThe image below displays how a file is converted from Markdown to Moodle XML.\nAny other format follows a similar route: ",(0,r.kt)("inlineCode",{parentName:"p"},"file in format A -> format A converter -> JSON -> format B converter -> file in format B"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Converter Architecture",src:n(1104).Z})),(0,r.kt)("h2",{id:"storage-format"},"Storage Format"),(0,r.kt)("p",null,"We are using Markdown as a generic storage format for questions because it is a text-based format, so it is suitable for written questions.\nUnlike more complex formats like LaTeX, Markdown offers a much simpler syntax which makes questions easier to contribute to by educators and learners alike."),(0,r.kt)("p",null,"The format we propose relies on headers to represent categories such as difficulty, topics, question text, feedback.\nEach question has a title written on the first line as a level 1 header (",(0,r.kt)("inlineCode",{parentName:"p"},"#"),").\nEach category is specified as a level 2 header (",(0,r.kt)("inlineCode",{parentName:"p"},"##"),").\nThe contents of the category consist of the text beneath the header.\nFor multiple-choice questions, correct answers are marked as list entries starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", while incorrect ones are marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,r.kt)("h3",{id:"question-file-format"},"Question File Format"),(0,r.kt)("p",null,"Every question will be stored in a separate Markdown file.\nSee the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# Sample Question Name\n\n##  Difficulty\n\neasy\n\n## Tags\n\n- topic-1\n\n- topic-2\n\n## Question Text\n\nIs this a sample question?\n\n## Question Answers\n\n+ Yes\n\n- No\n\n- Maybe\n\n## Feedback\n\nThe question is self-reflecting and its title is "Sample Question Name", so it is a sample question.\n')),(0,r.kt)("p",null,"Questions must respect the following rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List items, such as the one under the ",(0,r.kt)("inlineCode",{parentName:"p"},"## Tags")," heading, are preceded by ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),".\nWe recommend that you leave a blank line between list items.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Correct answers are marked as list entries starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", while incorrect ones are marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),".\nThere may be multiple correct answers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The headings starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"##")," are keys for different sections of the question.\nNone of them are mandatory given our format and the developer is free to add or remove any of them."))),(0,r.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,r.kt)("p",null,"A typical question is to be stored in a separate directory within the repository, with the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"question.md"),": the Markdown file containing all question-related information, formatted as specified above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"media/"),": optional media files (images, videos, etc.) required by the question")),(0,r.kt)("p",null,"Therefore, the directory structure of a typical question is a follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"sample-question/\n\u251c\u2500\u2500 question.md\n\u2514\u2500\u2500 media/\n    \u251c\u2500\u2500 image.svg\n    \u251c\u2500\u2500 ...\n    \u2514\u2500\u2500 video.mp4\n")),(0,r.kt)("h2",{id:"converter"},"Converter"),(0,r.kt)("p",null,"Given the format above, we are providing a converter that can reformat questions from one format to another.\nIt is bidirectional, so it can translate between any two formats, such as Markdown, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/402/en/Moodle_XML_format"},"Moodle XML"),", etc.\nIf a new question format is desired, the converter may be easily extendable to accommodate it and convert between it and any other format."),(0,r.kt)("p",null,"The converter achieves this level of flexibility by internally representing each question as a dictionary (a list of key-value pairs), from which any other format can be derived.\nThe keys of this dictionary are the ",(0,r.kt)("inlineCode",{parentName:"p"},"##")," headings and the value of each key is the text beneath the heading.\nThis also allows the converter to support a ",(0,r.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/website/json-files"},"JSON format")," for free, as it is directly mapped to the converter's internal representation.\nFor example, the sample question above will be represented as a JSON as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Sample Question Name": {\n    "Difficulty": "easy",\n    "Tags": ["topic-1", "topic-2"],\n    "Question Text": "Is this a sample question?",\n    "Question Answers": ["Yes", "No", "Maybe"],\n    "Correct Answer": "Yes",\n    "Feedback": "The question is self-reflecting and its title is \\"Sample Question Name\\", so it is a sample question."\n}\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use this converter, a person is required to run the command below.\nThe script will infer the fact that the input format is Markdown and the output is Moodle XML from the extensions of the input files (",(0,r.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".mxml"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"python3 question_converter.py convert -i input_file.md -o output_file.mxml\n")),(0,r.kt)("p",null,"The converter may also be run by the builder if the educator desires to integrate questions within their published course and not use a third-party hosting site, such as those outlined ",(0,r.kt)("a",{parentName:"p",href:"#deployment"},'in the" Deployment" section'),".\nIf this integration is desired, it is up to the educator to configure the builder accordingly."))}d.isMDXComponent=!0},1104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/converter_architecture-903f42bc40b5024109a5646e1a5276d6.svg"}}]);