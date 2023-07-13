"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),s=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(n),h=a,m=k["".concat(i,".").concat(h)]||k[h]||p[h]||r;return n?l.createElement(m,c(c({ref:t},u),{},{components:n})):l.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4},c="Uncle Blocks",o={unversionedId:"evm/uncles",id:"evm/uncles",title:"Uncle Blocks",description:"What are Uncle Blocks?",source:"@site/docs/evm/uncles.md",sourceDirName:"evm",slug:"/evm/uncles",permalink:"/docs/evm/uncles",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/evm/uncles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Miner Rewards",permalink:"/docs/evm/miners"},next:{title:"Transactions",permalink:"/docs/evm/transactions"}},i={},s=[{value:"What are Uncle Blocks?",id:"what-are-uncle-blocks",level:3},{value:"Why do Uncle Blocks occur?",id:"why-do-uncle-blocks-occur",level:3},{value:"What is the significance of Uncle Blocks?",id:"what-is-the-significance-of-uncle-blocks",level:3},{value:"How can I access Uncle Blocks data?",id:"how-can-i-access-uncle-blocks-data",level:3}],u={toc:s},k="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uncle-blocks"},"Uncle Blocks"),(0,a.kt)("h3",{id:"what-are-uncle-blocks"},"What are Uncle Blocks?"),(0,a.kt)("p",null,'Uncle blocks, also known as "orphan blocks", are blocks on the blockchain that are not included in the main blockchain. Uncle blocks are still valid blocks, but they were not selected to be included in the main blockchain by the network consensus algorithm.'),(0,a.kt)("p",null,"Please note that after the September 2022 merge of PoS Ethereum, validators will be pre-selected to validate the blocks. Hence, there will be no uncle blocks created. "),(0,a.kt)("h3",{id:"why-do-uncle-blocks-occur"},"Why do Uncle Blocks occur?"),(0,a.kt)("p",null,"Uncle blocks occur due to network latency issues or network forks that can cause two or more miners to solve a block at the same time. Only one of these blocks can be included in the main blockchain, while the others become uncle blocks."),(0,a.kt)("h3",{id:"what-is-the-significance-of-uncle-blocks"},"What is the significance of Uncle Blocks?"),(0,a.kt)("p",null,"Uncle blocks are significant because they can have an impact on the security and efficiency of the Ethereum blockchain. When uncle blocks are created, they reduce the rewards that miners receive for their work, and can also reduce the overall efficiency of the blockchain."),(0,a.kt)("h3",{id:"how-can-i-access-uncle-blocks-data"},"How can I access Uncle Blocks data?"),(0,a.kt)("p",null,"You can access Uncle Blocks data using our API. Here's an example GraphQL query to retrieve Uncle Blocks data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  EVM(dataset: archive, network: eth) {\n    Uncles(limit: {count: 10}, orderBy: {descending: Uncle_Block_Time}) {\n      Block {\n        Time\n      }\n      Uncle {\n        Index\n        Block {\n          TxHash\n          Time\n          Number\n          ParentHash\n          Bloom\n          Date\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Block"),": Returns the details of the block that included the uncle block."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Time"),": Returns the time that the block was created."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Uncle"),": Returns the details of the uncle block."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Index"),": Returns the index of the uncle block.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Block"),": Returns the details of the uncle block itself."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TxHash"),": Returns the hash of the uncle block's transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Time"),": Returns the time that the uncle block was created."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Number"),": Returns the number of the uncle block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParentHash"),": Returns the hash of the uncle block's parent block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bloom"),": Returns the bloom filter of the uncle block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": Returns the date that the uncle block was created.")))))))}p.isMDXComponent=!0}}]);