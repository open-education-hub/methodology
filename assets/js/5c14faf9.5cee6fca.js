"use strict";(self.webpackChunkopen_edu_methodology=self.webpackChunkopen_edu_methodology||[]).push([[6760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="Content",s={unversionedId:"Curating and Maintaining Content/Content/read",id:"Curating and Maintaining Content/Content/read",title:"Content",description:"The content curator is responsible for overseeing different aspects of the open educational resource, like content management, accepting and reviewing contributions, or community building.",source:"@site/docs/Curating and Maintaining Content/Content/read.md",sourceDirName:"Curating and Maintaining Content/Content",slug:"/Curating and Maintaining Content/Content/read",permalink:"/methodology/Curating and Maintaining Content/Content/read",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Content",permalink:"/methodology/Curating and Maintaining Content/Content/"},next:{title:"Communication",permalink:"/methodology/Curating and Maintaining Content/Communication/"}},l={},c=[{value:"Contributions",id:"contributions",level:2},{value:"Creating a Repository",id:"creating-a-repository",level:2},{value:"Repository Network",id:"repository-network",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"content"},"Content"),(0,r.kt)("p",null,"The content curator is responsible for overseeing different aspects of the open educational resource, like content management, accepting and reviewing contributions, or community building."),(0,r.kt)("p",null,"It is important for such a resource to clearly identify who the curator is, for the purpose of transparency and good communication."),(0,r.kt)("p",null,"The content is typically organized in a versioned system control repository such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Git"),", which has a series of advantages like version control, branching, history, etc.\nIt is also recommended using a managed development platform like ",(0,r.kt)("inlineCode",{parentName:"p"},"GitHub")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab"),", which are built on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"Git"),", while also providing additional useful features, like code review, issues, pull requests, workflows, and others."),(0,r.kt)("p",null,"The content should be published under a license.\nAt ",(0,r.kt)("inlineCode",{parentName:"p"},"Open Education Hub")," we employ the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Creative_Commons_license"},(0,r.kt)("inlineCode",{parentName:"a"},"Creative Commons"))," license ourselves and strongly recommend its usage."),(0,r.kt)("h2",{id:"contributions"},"Contributions"),(0,r.kt)("p",null,"The content curator should foster a welcoming environment for outside contributions.\nThis can be achieved by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Establishing clear contribution guidelines (for example in a ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRIBUTING.md")," file)."),(0,r.kt)("li",{parentName:"ul"},"Labeling issues with tags such as ",(0,r.kt)("inlineCode",{parentName:"li"},"help wanted")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue"),", to help newcomers find tasks to contribute."),(0,r.kt)("li",{parentName:"ul"},"Acknowledging the work of contributors (for example in the repository ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," file or in any other suitable place).")),(0,r.kt)("p",null,"There should also be an established process for handling contributions whenever they arrive.\nSome steps that the content curator should take are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review the contribution as soon as possible.\nDepending on the team size, this can be done by the content curator, or it could be delegated to other members of the content development team.\nTools like ",(0,r.kt)("inlineCode",{parentName:"li"},"GitHub")," have features that can help with this: an issue can have a person designated as assignee, while a pull request can have one or multiple reviewers and assignees."),(0,r.kt)("li",{parentName:"ul"},"Engage in a constructive discussion with the contributor to clarify any questions or concerns.\nProvide feedback and guidance for improvement if the contribution needs changes."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the contribution follows the guidelines.\nThis can be partially automated using linters and automated checkers, together with features like ",(0,r.kt)("inlineCode",{parentName:"li"},"GitHub Actions"),"."),(0,r.kt)("li",{parentName:"ul"},"If applicable, test the contribution to ensure it works as intended."),(0,r.kt)("li",{parentName:"ul"},"Thank the contributor for their effort.")),(0,r.kt)("p",null,"The content curator should make sure that a decision for a contribution is taken in a reasonable time frame (approve, reject, request more changes, etc), so that the repository does not accumulate a large amount of lingering pull requests."),(0,r.kt)("h2",{id:"creating-a-repository"},"Creating a Repository"),(0,r.kt)("p",null,"If a new content repository needs to be created from scratch, a good starting point is to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-education-hub/oer-template"},(0,r.kt)("inlineCode",{parentName:"a"},"oer-template"))," repository.\nThis repository contains the basic directory structure for a course, including some tools and other files that should typically be present, on top of which any kind of content can be added."),(0,r.kt)("p",null,"Similarly to the content repository, a solution repository can be created starting from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-education-hub/oer-internal-template"},(0,r.kt)("inlineCode",{parentName:"a"},"oer-internal-template"))," repository.\nThis will generally consist of private items, such as test / exam questions, reference solutions or access credentials."),(0,r.kt)("h2",{id:"repository-network"},"Repository Network"),(0,r.kt)("p",null,"The content curator must keep a list of delivery repositories, forked from the core / origin repositories.\nThis is also for accounting the use of content, for maintaining a community of users / educators and for monitoring updates to these repositories.\nRelevant updates are to be pulled to the origin repositories, via contributions."),(0,r.kt)("p",null,"It is expected that a larger part of updates to the origin repositories will come from forked delivery repositories, that are actually being used for education activities."))}d.isMDXComponent=!0}}]);