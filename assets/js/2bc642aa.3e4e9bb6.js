"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Buckets",s={unversionedId:"cloud/s3/buckets",id:"cloud/s3/buckets",title:"Buckets",description:"S3 buckets are named after the blockchain name with `streaming-` prefix:",source:"@site/docs/cloud/s3/buckets.md",sourceDirName:"cloud/s3",slug:"/cloud/s3/buckets",permalink:"/docs/cloud/s3/buckets",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/cloud/s3/buckets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"S3 data storage",permalink:"/docs/category/s3-data-storage"},next:{title:"Messages",permalink:"/docs/cloud/s3/messages"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buckets"},"Buckets"),(0,a.kt)("p",null,"S3 buckets are named after the blockchain name with ",(0,a.kt)("inlineCode",{parentName:"p"},"streaming-")," prefix:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streaming-eth")," for Ethereum Mainnet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streaming-bsc")," for Binance Smart Chain Mainnet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streaming-solana")," for Solana Mainnet")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For public access the ",(0,a.kt)("a",{parentName:"p",href:"/docs/cloud/s3/demo"},"Demo buckets")," are available.")),(0,a.kt)("p",null,"The bucket contain the top level folder by the name of the data stream.\nThe stream is a sequence of ",(0,a.kt)("a",{parentName:"p",href:"/docs/cloud/s3/messages"},"messages")," with the same data schema."),(0,a.kt)("p",null,"This is example of the stream folders in the ",(0,a.kt)("inlineCode",{parentName:"p"},"streaming-eth")," bucket:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS S3 bucket",src:n(25218).Z,width:"2172",height:"1270"})),(0,a.kt)("p",null,"Mapping between the stream and protobuf data format defined in the data schema."))}m.isMDXComponent=!0},25218:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_bucket-8bf5bdeb64a3ad08a3e930f7d53a6664.png"}}]);