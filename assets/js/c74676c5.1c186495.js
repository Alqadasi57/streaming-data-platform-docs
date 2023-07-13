"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99412:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(67294),i=n(3905);const o={id:"evm-transaction-limit",title:"EVM_Transaction_Limit",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql-reference/inputs/evm-transaction-limit",id:"graphql-reference/inputs/evm-transaction-limit",title:"EVM_Transaction_Limit",description:"Limit definition",source:"@site/docs/graphql-reference/inputs/evm-transaction-limit.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-transaction-limit",permalink:"/docs/graphql-reference/inputs/evm-transaction-limit",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-transaction-limit.mdx",tags:[],version:"current",frontMatter:{id:"evm-transaction-limit",title:"EVM_Transaction_Limit",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Transaction_LimitBy",permalink:"/docs/graphql-reference/inputs/evm-transaction-limit-by"},next:{title:"EVM_Transaction_Ordering",permalink:"/docs/graphql-reference/inputs/evm-transaction-ordering"}},s={},m=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transaction_Limit.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_transaction_limitboffsetbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transaction_Limit.<b>count</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_transaction_limitbcountbcodeint-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,s]=(0,a.useState)(l);return(0,i.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},y={Bullet:m,SpecifiedBy:p,Badge:d,toc:u,Details:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Limit definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Transaction_Limit {\n  offset: Int\n  count: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_transaction_limitboffsetbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transaction_Limit.",(0,i.kt)("b",null,"offset"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Offset of results")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_transaction_limitbcountbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transaction_Limit.",(0,i.kt)("b",null,"count"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Max count in results")))}b.isMDXComponent=!0}}]);