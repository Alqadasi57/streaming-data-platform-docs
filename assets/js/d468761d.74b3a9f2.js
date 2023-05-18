"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},53595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:2},o="Trigger",s={unversionedId:"graphql/subscription/trigger",id:"graphql/subscription/trigger",title:"Trigger",description:"The new data pushed to subscription on receiving the new block in the real time database assuming that the criteria,",source:"@site/docs/graphql/subscription/trigger.md",sourceDirName:"graphql/subscription",slug:"/graphql/subscription/trigger",permalink:"/docs/graphql/subscription/trigger",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql/subscription/trigger.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Subscription",permalink:"/docs/graphql/subscription/subsciption"},next:{title:"Web Sockets",permalink:"/docs/graphql/subscription/websockets"}},l={},p=[{value:"trigger_on",id:"trigger_on",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trigger"},"Trigger"),(0,i.kt)("p",null,"The new data pushed to subscription on receiving the new block in the real time database assuming that the criteria,\ndefined in the query are met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trigger_on")," attribute matches the block"),(0,i.kt)("li",{parentName:"ul"},"conditions defined in the query matches this block"),(0,i.kt)("li",{parentName:"ul"},"data filtered by all provided conditions, are not empty")),(0,i.kt)("h2",{id:"trigger_on"},"trigger_on"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"trigger_on")," attribute controls on which blocks the update of data is triggered for the subscription.\nIt has the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"head")," - (default) ",(0,i.kt)("strong",{parentName:"li"},"new")," blocks on the trunk (with the highest tip) triggers data update"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all")," - ",(0,i.kt)("strong",{parentName:"li"},"any")," block triggers data update"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"head_updates")," - ",(0,i.kt)("strong",{parentName:"li"},"any")," blocks on the trunk (with the highest tip) triggers data update"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branches_updates")," - ",(0,i.kt)("strong",{parentName:"li"},"any")," blocks on the branch (not with the highest tip) triggers data update")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/dataset/select_blocks"},"Blockchain Reorg Tree")," describes how the tree is represented in the databases."),(0,i.kt)("p",null,"In most cases you just not specify this attribute, assuming head option is what you need. Other options are suitable\nfor event-driven applications:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"head_updates")," together with ",(0,i.kt)("inlineCode",{parentName:"p"},"branches_updates")," when you need to accumulate all branches and the trunk")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," if you need to handle re-orgs of the tree in your application")))}d.isMDXComponent=!0}}]);