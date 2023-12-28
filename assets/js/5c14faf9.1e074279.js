"use strict";(self.webpackChunkopen_edu_methodology=self.webpackChunkopen_edu_methodology||[]).push([[6760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={},a="Content",s={unversionedId:"Curating and Maintaining Content/Content/read",id:"Curating and Maintaining Content/Content/read",title:"Content",description:"The content maintainer is responsible for overseeing different aspects of the open educational resource, like content management, accepting and reviewing contributions, or community building.",source:"@site/docs/Curating and Maintaining Content/Content/read.md",sourceDirName:"Curating and Maintaining Content/Content",slug:"/Curating and Maintaining Content/Content/read",permalink:"/methodology/Curating and Maintaining Content/Content/read",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Content",permalink:"/methodology/Curating and Maintaining Content/Content/"},next:{title:"Communication",permalink:"/methodology/Curating and Maintaining Content/Communication/"}},l={},c=[{value:"Contributions",id:"contributions",level:2},{value:"Creating a Repository",id:"creating-a-repository",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"content"},"Content"),(0,o.kt)("p",null,"The content maintainer is responsible for overseeing different aspects of the open educational resource, like content management, accepting and reviewing contributions, or community building."),(0,o.kt)("p",null,"It is important for such a resource to clearly identify who the maintainer is, for the purpose of transparency and good communication."),(0,o.kt)("p",null,"The content is typically organized in a versioned system control repository such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Git"),", which has a series of advantages like version control, branching, history, etc.\nIt is also recommended using a managed development platform like ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"GitLab"),", which is built on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"Git"),", while also providing additional useful features, like code review, issues, pull requests, integrations, and others."),(0,o.kt)("p",null,"The content should be published under a license.\nAt ",(0,o.kt)("inlineCode",{parentName:"p"},"Open Education Hub")," we employ the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Creative_Commons_license"},(0,o.kt)("inlineCode",{parentName:"a"},"Creative Commons"))," license ourselves and strongly recommend its usage."),(0,o.kt)("h2",{id:"contributions"},"Contributions"),(0,o.kt)("p",null,"The content maintainer should foster a welcoming environment for outside contributions.\nThis can be achieved by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establishing clear contribution guidelines (for example in a ",(0,o.kt)("inlineCode",{parentName:"li"},"CONTRIBUTING.md")," file)."),(0,o.kt)("li",{parentName:"ul"},"Labeling issues with tags such as ",(0,o.kt)("inlineCode",{parentName:"li"},"help wanted")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"good first issue"),", to help newcomers find tasks to contribute."),(0,o.kt)("li",{parentName:"ul"},"Acknowledging the work of contributors (for example in the repository ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," file or in any other suitable place).")),(0,o.kt)("p",null,"There should also be an established process for handling contributions whenever they arrive.\nSome steps that the maintainer should take are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Review the contribution as soon as possible."),(0,o.kt)("p",{parentName:"li"},"Depending on the team size, this can be done by the maintainer, or it could be delegated to other members of the content development team.\nTools like ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," have features that can help with this: an issue can have a person designated as assignee, while a pull request can have one or multiple reviewers and assignees.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Engage in a constructive discussion with the contributor to clarify any questions or concerns.\nProvide feedback and guidance for improvement if the contribution needs changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure that the contribution follows the guidelines.\nThis can be partially automated using linters and automated checkers, together with features like ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub Actions"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If applicable, test the contribution to ensure it works as intended.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Thank the contributor for their effort."))),(0,o.kt)("p",null,"The maintainer should make sure that a decision for a contribution is taken in a reasonable time frame (approve, reject, request more changes, etc), so that the repository does not accumulate a large amount of lingering pull requests."),(0,o.kt)("h2",{id:"creating-a-repository"},"Creating a Repository"),(0,o.kt)("p",null,"If a new content repository needs to be created from scratch, a good starting point is to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-education-hub/oer-template"},(0,o.kt)("inlineCode",{parentName:"a"},"oer-template"))," repository.\nThis repository contains the basic directory structure for a course, including some tools and other files that should typically be present, on top of which any kind of content can be added."))}d.isMDXComponent=!0}}]);