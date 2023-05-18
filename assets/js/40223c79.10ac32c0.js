"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:6},o="Calculations",l={unversionedId:"graphql/calculations",id:"graphql/calculations",title:"Calculations",description:"Attributes `maximum` `minimum` `where` can be appended to an element in query.",source:"@site/docs/graphql/calculations.md",sourceDirName:"graphql",slug:"/graphql/calculations",permalink:"/docs/graphql/calculations",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql/calculations.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Statistics",permalink:"/docs/graphql/metrics/statistics"},next:{title:"Subscriptions",permalink:"/docs/category/subscriptions"}},m={},p=[{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calculations"},"Calculations"),(0,a.kt)("p",null,"Attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"maximum")," ",(0,a.kt)("inlineCode",{parentName:"p"},"minimum")," ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," can be appended to an element in query.\nThey convert the value to the metric, calculated by the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"maximum")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"minimum")," is added, then the value of the element corresponds to max / min of the provided argument"),(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"where")," attribute is defined, then the value of element is taken with the provided condition"),(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"where")," attribute is used with any of ",(0,a.kt)("inlineCode",{parentName:"li"},"maximum")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"minimum"),", then max / min taken conditionally")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Maximum block number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Number(maximum: Block_Number)\n")),(0,a.kt)("p",null,"Number of the block with the maximum gas used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Number(maximum: Block_GasUsed)\n")),(0,a.kt)("p",null,"Number of the block with the given root hash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Number(where: {Block: {Root: {is: "..."}}})\n')),(0,a.kt)("p",null,"Number of the block with the maximum gas used in specific date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Number(maximum: Block_GasUsed where: {Block: {Date:{is: "2022-01-01"}}})\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," with some always-true condition (say, ChainId equal 1) to get ",(0,a.kt)("strong",{parentName:"p"},"any")," value of element")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/metrics/alias"},"Aliases")," to name the elements if needed")))}s.isMDXComponent=!0}}]);