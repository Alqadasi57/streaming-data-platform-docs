"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},c="Smart Contract Events and Logs",s={unversionedId:"evm/events",id:"evm/events",title:"Smart Contract Events and Logs",description:"Smart contract events and logs are an important feature of Ethereum smart contracts that allow developers to track and record specific actions or data on the blockchain.",source:"@site/docs/evm/events.md",sourceDirName:"evm",slug:"/evm/events",permalink:"/docs/evm/events",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/evm/events.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Arguments and Returns",permalink:"/docs/evm/arguments"},next:{title:"Token and Currency Transfers",permalink:"/docs/evm/transfers"}},i={},l=[],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-contract-events-and-logs"},"Smart Contract Events and Logs"),(0,a.kt)("p",null,"Smart contract events and logs are an important feature of Ethereum smart contracts that allow developers to track and record specific actions or data on the blockchain.\nYou can retrieve data on blockchain calls and logs from the blockchain network. You can find more examples ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/events/events_api"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query MyQuery {\n  EVM(dataset: combined, network: bsc) {\n    Events(\n      limit: {count: 10}\n      orderBy: {descending: Block_Time}\n      where: {Block: {Date: {is: "2023-03-06"}}}\n    ) {\n      Call {\n        CallPath\n        From\n        GasUsed\n        To\n        Signature {\n          Name\n          Signature\n        }\n      }\n      Log {\n        EnterIndex\n        ExitIndex\n        Index\n        LogAfterCallIndex\n        SmartContract\n        Signature {\n          Name\n          Signature\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The query includes the Call and Log objects, which are parts of the events. The Call object contains information about the function calls made in the event, including the path, sender address, gas used, receiver address, and the name and signature of the function. The Log object contains information about the event logs, including the enter and exit indexes, log index, log after call index, the smart contract address, and the name and signature of the event."),(0,a.kt)("p",null,"Events contain the arguments as array, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/evm/arguments"},"arguments")))}m.isMDXComponent=!0}}]);