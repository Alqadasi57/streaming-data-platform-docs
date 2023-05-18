"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13754:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const l={id:"evm",title:"EVM",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql-reference/subscriptions/evm",id:"graphql-reference/subscriptions/evm",title:"EVM",description:"Arguments",source:"@site/docs/graphql-reference/subscriptions/evm.mdx",sourceDirName:"graphql-reference/subscriptions",slug:"/graphql-reference/subscriptions/evm",permalink:"/docs/graphql-reference/subscriptions/evm",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/subscriptions/evm.mdx",tags:[],version:"current",frontMatter:{id:"evm",title:"EVM",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"String",permalink:"/docs/graphql-reference/scalars/string"},next:{title:"EVM_ABI_Value_Union",permalink:"/docs/graphql-reference/unions/evm-abi-value-union"}},s={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM.<b>network</b></code><Bullet /><code>evm_network</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evmbnetworkbcodeevm_network-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM.<b>trigger_on</b></code><Bullet /><code>blocks_update_arg_enum</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evmbtrigger_onbcodeblocks_update_arg_enum-",level:4},{value:"Type",id:"type",level:3},{value:'<code>EVM</code> <Badge class="secondary" text="object"/>',id:"evm-",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:c=!1}=e;const[i,s]=(0,a.useState)(c);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&l)},g={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:f},b="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"EVM(\n  network: evm_network\n  trigger_on: blocks_update_arg_enum\n): EVM\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evmbnetworkbcodeevm_network-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM.",(0,o.kt)("b",null,"network"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/enums/evm-network"},(0,o.kt)("inlineCode",{parentName:"a"},"evm_network"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evmbtrigger_onbcodeblocks_update_arg_enum-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM.",(0,o.kt)("b",null,"trigger_on"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/enums/blocks-update-arg-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"blocks_update_arg_enum"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Controls which blocks are included into update of the subscription data")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"evm-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/objects/evm"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"EVM type blockchain schema")))}k.isMDXComponent=!0}}]);