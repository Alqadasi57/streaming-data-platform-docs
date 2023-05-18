"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),b=n,f=c["".concat(s,".").concat(b)]||c[b]||u[b]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},67494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:4},i="EVM Streams",l={unversionedId:"cloud/protobuf/evm",id:"cloud/protobuf/evm",title:"EVM Streams",description:"The mapping between EVM streams of messages and protobuf schemas:",source:"@site/docs/cloud/protobuf/evm.md",sourceDirName:"cloud/protobuf",slug:"/cloud/protobuf/evm",permalink:"/docs/cloud/protobuf/evm",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/cloud/protobuf/evm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Protobuf Format",permalink:"/docs/cloud/protobuf/"},next:{title:"Solana Streams",permalink:"/docs/cloud/protobuf/solana"}},s={},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"evm-streams"},"EVM Streams"),(0,n.kt)("p",null,"The mapping between EVM streams of messages and protobuf schemas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN.blocks.s3")," -> ",(0,n.kt)("strong",{parentName:"li"},"BlockMessage")," of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitquery/streaming_protobuf/blob/main/evm/block_message.proto"},"block_message.proto")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN.dextrades.s3")," -> ",(0,n.kt)("strong",{parentName:"li"},"DexBlockMessage")," of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitquery/streaming_protobuf/blob/main/evm/dex_block_message.proto"},"dex_block_message.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN.transactions.s3")," -> ",(0,n.kt)("strong",{parentName:"li"},"ParsedAbiBlockMessage")," of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitquery/streaming_protobuf/blob/main/evm/parsed_abi_block_message.proto"},"parsed_abi_block_message.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BLOCKCHAIN.tokens.s3")," -> ",(0,n.kt)("strong",{parentName:"li"},"TokenBlockMessage")," of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitquery/streaming_protobuf/blob/main/evm/token_block_message.proto"},"token_block_message.proto"))),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOCKCHAIN")," stands for the short blockchain name:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"eth")," for Ethereum Mainnet"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bsc")," for Binance Smart Chain Mainnet")),(0,n.kt)("p",null,"(more chains may be added in the future)"))}u.isMDXComponent=!0}}]);