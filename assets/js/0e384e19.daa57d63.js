"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:1,title:"Contributor Guide"},i=void 0,l={unversionedId:"intro",id:"intro",title:"Contributor Guide",description:"We \u2665\ufe0f Contributions!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/awesome-azd/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Contributor Guide"},sidebar:"docs",next:{title:'What is "azd"?',permalink:"/awesome-azd/docs/faq/azd"}},s={},u=[{value:"We \u2665\ufe0f Contributions!",id:"we-\ufe0f-contributions",level:2},{value:"Submit a PR",id:"submit-a-pr",level:2},{value:"Contribute a New Template",id:"contribute-a-new-template",level:3},{value:"Submit a Resource",id:"submit-a-resource",level:3},{value:"Other Ways To Help",id:"other-ways-to-help",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"we-\ufe0f-contributions"},"We \u2665\ufe0f Contributions!"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"awesome-azd")," is a community-friendly resource to help developer discover, create, and share, open-source ",(0,n.kt)("inlineCode",{parentName:"p"},"azd")," templates and supporting resources for streamlining your application development and CI/CD pipelines."),(0,n.kt)("h2",{id:"submit-a-pr"},"Submit a PR"),(0,n.kt)("h3",{id:"contribute-a-new-template"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Azure/awesome-azd/compare"},"Contribute a New Template")),(0,n.kt)("p",null,"Our template gallery will be at its best when our community is involved in creating and contributing new templates. "),(0,n.kt)("p",null,"We welcome contributions of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure/awesome-azd/issues?q=is%3Aopen+is%3Aissue+label%3Arequested-contribution"},"requested templates")," as well as any others, subject to review. "),(0,n.kt)("p",null,"To submit a template:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add an entry to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/blob/main/website/static/templates.json"},"website/static/templates.json")," that includes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Template title"),' - A short title that reflects the local application stack that someone could use to get their application on Azure (e.g. "Containerized React Web App with Java API and MongoDB")'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description")," - 1-2 sentence description of the architecture (e.g. Azure services) or solution that is defined by the template."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Architecture Diagram or Application Screenshot")," - Used as display image for gallery card. The architecture should include all services and their connections (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/todo-csharp-sql/blob/main/assets/resources.png"},"example"),"). You should add the image to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/tree/main/website/static/templates/images"},"website/static/templates/images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Link to Author's GitHub or other relevant website")," - Used for attribution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Author's Name")," - Name to credit on the gallery card"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Link to template source")," - Link to the template GitHub repo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tags")," - One or more ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/blob/main/website/src/data/tags.tsx"},"tags")," representing the template. Provide at least 1 tag for programming language used and at least 1 tag for Azure services integrated. Also tag the IaC provider (Bicep or Terraform). If you don't see a relevant tag for your template? Feel free to add one!"))),(0,n.kt)("li",{parentName:"ol"},"Open a PR!"),(0,n.kt)("li",{parentName:"ol"},"If possible, add a link to the PR in your repo where you made your app ",(0,n.kt)("inlineCode",{parentName:"li"},"azd")," compatible to the PR description. This will help us provide feedback on your template and speed up the review process. ")),(0,n.kt)("p",null,"If you would like to contribute a template but are not sure where to start, ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/make-azd-compatible"},"making an existing project azd compatible")," is a great first step. Doing so consists of three main steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set up a new environment (with ",(0,n.kt)("inlineCode",{parentName:"li"},"azd init"),")"),(0,n.kt)("li",{parentName:"ol"},"Add Bicep files"),(0,n.kt)("li",{parentName:"ol"},"Update azure.yaml ")),(0,n.kt)("h3",{id:"submit-a-resource"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Azure/awesome-azd/compare"},"Submit a Resource")),(0,n.kt)("p",null,"Did you write or find an article that helped you get started with ",(0,n.kt)("inlineCode",{parentName:"p"},"azd"),"? Or maybe you created or found a video that showed you how to create an azd template? Whatever the resource might be, we would love for you to share it with our community! Submit content you think should be included in ",(0,n.kt)("inlineCode",{parentName:"p"},"awesome-azd/README.md")),(0,n.kt)("h2",{id:"other-ways-to-help"},"Other Ways To Help"),(0,n.kt)("p",null,"Other than these, we always welcome feedback through a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/issues/new?assignees=gkulin&labels=requested-contribution&template=%F0%9F%A4%94-submit-a-template-request.md&title=%5BIdea%5D+%3Cyour-template-name%3E"},(0,n.kt)("strong",{parentName:"a"},"request a template")),": if you cannot find a template with architecture that works for you-- you can submit a request for that template",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Keep in mind, templates are made to be flexible and extensible. You can use a template's architecture and swap out the source code. For example, if you want to create a grocery list making application using Azure SQL and Azure App service, you can use the React Web App with C# API and SQL Database on Azure template and swap out the source code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/issues/new?assignees=&labels=&template=bug_report.md&title="},(0,n.kt)("strong",{parentName:"a"},"bug report")),": let us know if something is broken"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/awesome-azd/issues/new?assignees=&labels=&template=feature_request.md&title="},(0,n.kt)("strong",{parentName:"a"},"feature request")),": for improvements to our awesome-azd site")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit our ",(0,n.kt)("a",{parentName:"li",href:"/awesome-azd/docs/faq/azd"},"FAQ"))))}c.isMDXComponent=!0}}]);