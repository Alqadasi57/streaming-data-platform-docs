"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=l,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(y,p(p({ref:t},i),{},{components:n})):a.createElement(y,p({ref:t},i))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:l,p[1]=c;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23456:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(87462),l=n(67294),r=n(3905);const p={id:"evm-balance-update-input-uncle-input-type",title:"EVM_BalanceUpdate_Input_Uncle_InputType",hide_table_of_contents:!1},c=void 0,u={unversionedId:"graphql-reference/inputs/evm-balance-update-input-uncle-input-type",id:"graphql-reference/inputs/evm-balance-update-input-uncle-input-type",title:"EVM_BalanceUpdate_Input_Uncle_InputType",description:"Select by Uncle",source:"@site/docs/graphql-reference/inputs/evm-balance-update-input-uncle-input-type.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-balance-update-input-uncle-input-type",permalink:"/docs/graphql-reference/inputs/evm-balance-update-input-uncle-input-type",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-balance-update-input-uncle-input-type.mdx",tags:[],version:"current",frontMatter:{id:"evm-balance-update-input-uncle-input-type",title:"EVM_BalanceUpdate_Input_Uncle_InputType",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_BalanceUpdate_Input_Uncle_Block_InputType",permalink:"/docs/graphql-reference/inputs/evm-balance-update-input-uncle-block-input-type"},next:{title:"EVM_BalanceUpdate_LimitBy",permalink:"/docs/graphql-reference/inputs/evm-balance-update-limit-by"}},o={},i=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Input_Uncle_InputType.<b>Index</b></code><Bullet /><code>OLAP_Integer</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_balanceupdate_input_uncle_inputtypebindexbcodeolap_integer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Input_Uncle_InputType.<b>Block</b></code><Bullet /><code>EVM_BalanceUpdate_Input_Uncle_Block_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_balanceupdate_input_uncle_inputtypebblockbcodeevm_balanceupdate_input_uncle_block_inputtype-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:p,startOpen:c=!1}=e;const[u,o]=(0,l.useState)(c);return(0,r.kt)("details",(0,a.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&p)},_={Bullet:i,SpecifiedBy:d,Badge:s,toc:m,Details:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Select by Uncle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_BalanceUpdate_Input_Uncle_InputType {\n  Index: OLAP_Integer\n  Block: EVM_BalanceUpdate_Input_Uncle_Block_InputType\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_input_uncle_inputtypebindexbcodeolap_integer-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Input_Uncle_InputType.",(0,r.kt)("b",null,"Index"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-integer"},(0,r.kt)("inlineCode",{parentName:"a"},"OLAP_Integer"))," ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_input_uncle_inputtypebblockbcodeevm_balanceupdate_input_uncle_block_inputtype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Input_Uncle_InputType.",(0,r.kt)("b",null,"Block"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-balance-update-input-uncle-block-input-type"},(0,r.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Uncle_Block_InputType"))," ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,r.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter")),"  ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);