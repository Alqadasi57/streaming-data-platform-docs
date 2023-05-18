"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="Overview",s={unversionedId:"intro",id:"intro",title:"Overview",description:"Bitquery 's infrastructure provides you access to historical and real-time blockchain data through various interfaces such as GraphQL APIs.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/category/quick-start"}},l={},p=[{value:"GraphQL Query API",id:"graphql-query-api",level:2},{value:"Integrated Development Environment (IDE)",id:"integrated-development-environment-ide",level:2},{value:"GraphQL Subscription (WebSocket) API",id:"graphql-subscription-websocket-api",level:2},{value:"Cloud Data Storage",id:"cloud-data-storage",level:2},{value:"SQL Like Interface",id:"sql-like-interface",level:2},{value:"Bitquery Support Channels",id:"bitquery-support-channels",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Bitquery 's infrastructure provides you access to historical and real-time blockchain data through various interfaces such as GraphQL APIs."),(0,a.kt)("h2",{id:"graphql-query-api"},"GraphQL Query API"),(0,a.kt)("p",null,"Get started with our APIs in a minute by building ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/start/first-query"},"your first query")),"."),(0,a.kt)("p",null,"You can query ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/dataset/archive"},"archive"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/dataset/realtime"},"real-time")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/dataset/combined"},"combined")," dataset based on your requirements."),(0,a.kt)("p",null,"After the query is built you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/ide/private"},"save")," it and embed it in your application using ",(0,a.kt)("a",{parentName:"p",href:"/docs/ide/code"},"pre-cooked code snippet")," in any popular programming language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  EVM(dataset: archive network: bsc) {\n    Transactions {\n      Block {\n        Date\n      }\n      count\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"integrated-development-environment-ide"},"Integrated Development Environment (IDE)"),(0,a.kt)("p",null,"Integrated Development Environment (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://graphql.bitquery.io/ide?endpoint=https://streaming.bitquery.io/graphql"},"IDE")),") helps you to manage your query,\nshare them with other developers and generate a code to use the queries in your applications."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IDE screen",src:r(27882).Z,width:"1920",height:"966"})),(0,a.kt)("h2",{id:"graphql-subscription-websocket-api"},"GraphQL Subscription (WebSocket) API"),(0,a.kt)("p",null,"Subscription (WebSocket) is an extension of GraphQL API. It allows to subscribe on the updates\nin the data in real-time and receive the new data changes using WebSocket protocol."),(0,a.kt)("p",null,"Protocols subscriptions-transport-ws and graphql-transport-ws are supported."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"subscription {\n  EVM(trigger_on: head) {\n    Transactions {\n      Block {\n        Hash\n        Number\n        Date\n      }\n      count\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"cloud-data-storage"},"Cloud Data Storage"),(0,a.kt)("p",null,"If you build your applications in cloud or you need raw data for deep investigations or even\nmachine learning algorithms, use the cloud data storage."),(0,a.kt)("p",null,"It contains optimized data for applications on different levels - from the raw data from blockchain nodes\nto the parsed protocols as DEX (decentralized exchanges) or NFT (non-fungible tokens)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS S3 bucket",src:r(25218).Z,width:"2172",height:"1270"})),(0,a.kt)("h2",{id:"sql-like-interface"},"SQL Like Interface"),(0,a.kt)("p",null,"We also provide SQL like interface on our Enterprise plan, if you want to explore that, please send us email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@bitquery.io"},"hello@bitquery.io")),(0,a.kt)("h2",{id:"bitquery-support-channels"},"Bitquery Support Channels"),(0,a.kt)("p",null,"We highly encourage you to dig into our docs first; however, you can contact us on the following platforms if you still have any queries."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/bloxy_info"},"Telegram")," & ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/EEBVTQnb2E"},"Discord")," - For quick questions and doubts"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://community.bitquery.io/"},"Community Forum")," - For how to questions, features requests that can also help wider community"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://support.bitquery.io/hc/en-us/requests/new"},"Support Desk")," - For data problems, bugs")))}d.isMDXComponent=!0},25218:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/s3_bucket-8bf5bdeb64a3ad08a3e930f7d53a6664.png"},27882:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ide_screen-ddfbf9853446204a7aa570f484b61177.png"}}]);