"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2},o="Aliases",s={unversionedId:"graphql/metrics/alias",id:"graphql/metrics/alias",title:"Aliases",description:"Aliases is a part of the GraphQL standard",source:"@site/docs/graphql/metrics/alias.md",sourceDirName:"graphql/metrics",slug:"/graphql/metrics/alias",permalink:"/docs/graphql/metrics/alias",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql/metrics/alias.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Use Metrics",permalink:"/docs/graphql/metrics/"},next:{title:"Conditional Metrics",permalink:"/docs/graphql/metrics/if"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,"Aliases is a part of the GraphQL ",(0,a.kt)("a",{parentName:"p",href:"https://spec.graphql.org/draft/#sec-Field-Alias"},"standard"),"\nThey become useful when you have the need to have two fields in the query ",(0,a.kt)("strong",{parentName:"p"},"with the same name"),"."),(0,a.kt)("p",null,"Most probable you will come to the following problem with metrics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      count(distinct: Block_GasUsed)\n      count(distinct: Block_Date)\n")),(0,a.kt)("p",null,"This query is not valid for GraphQL and will not execute."),(0,a.kt)("p",null,"Use aliases to make the query valid and also more readable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      uniqueGasValues: count(distinct: Block_GasUsed)\n      uniqueDates: count(distinct: Block_Date)\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Aliases can also be used in ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/sorting"},"sorting"))))}d.isMDXComponent=!0}}]);