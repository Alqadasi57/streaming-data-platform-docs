"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||p;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71138:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=n(67294),p=n(3905);const l={id:"olap-integer",title:"OLAP_Integer",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql-reference/inputs/olap-integer",id:"graphql-reference/inputs/olap-integer",title:"OLAP_Integer",description:"Integer 32-bit signed",source:"@site/docs/graphql-reference/inputs/olap-integer.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/olap-integer",permalink:"/docs/graphql-reference/inputs/olap-integer",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/olap-integer.mdx",tags:[],version:"current",frontMatter:{id:"olap-integer",title:"OLAP_Integer",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"OLAP_Float",permalink:"/docs/graphql-reference/inputs/olap-float"},next:{title:"OLAP_String",permalink:"/docs/graphql-reference/inputs/olap-string"}},c={},d=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>in</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbinbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>notIn</b></code><Bullet /><code>[Int]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbnotinbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>ge</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbgebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>le</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerblebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>gt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbgtbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>lt</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbltbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>eq</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbeqbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Integer.<b>ne</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_integerbnebcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[i,c]=(0,r.useState)(o);return(0,p.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},k={Bullet:d,SpecifiedBy:s,Badge:u,toc:m,Details:y},g="wrapper";function f(e){let{components:t,...n}=e;return(0,p.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Integer 32-bit signed"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input OLAP_Integer {\n  in: [Int]\n  notIn: [Int]\n  ge: Int\n  le: Int\n  gt: Int\n  lt: Int\n  eq: Int\n  ne: Int\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbinbcodeint--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"in"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,p.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Number in the provided list")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbnotinbcodeint--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"notIn"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"[Int]"))," ",(0,p.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Number is not in the provided list")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbgebcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"ge"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Greater than the value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerblebcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"le"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Less than the value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbgtbcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"gt"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Greater or equal the value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbltbcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"lt"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Less or equal the value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbeqbcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"eq"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Equal to value")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-olap_integerbnebcodeint-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Integer.",(0,p.kt)("b",null,"ne"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Not equal to value")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-input-call-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Call_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-input-currency-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Currency_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-input-log-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Log_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-input-uncle-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Uncle_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-block-input-block-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Block_Input_Block_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-call-input-call-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Call_Input_Call_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-call-input-call-opcode-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Call_Input_Call_Opcode_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-call-input-receipt-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Call_Input_Receipt_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-call-input-transaction-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Call_Input_Transaction_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-call-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Call_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-log-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Log_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-log-signature-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Log_Signature_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-receipt-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Receipt_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-trade-buy-currency-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Trade_Buy_Currency_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-trade-dex-pair-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Trade_Dex_Pair_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-trade-sell-currency-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Trade_Sell_Currency_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-transaction-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Transaction_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-input-call-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Event_Input_Call_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-input-log-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Event_Input_Log_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-input-receipt-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Event_Input_Receipt_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-input-transaction-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Event_Input_Transaction_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-miner-reward-input-block-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_MinerReward_Input_Block_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-miner-reward-input-uncle-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_MinerReward_Input_Uncle_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-input-receipt-contract-address-code-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Input_Receipt_ContractAddressCode_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-input-receipt-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Input_Receipt_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-input-transaction-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Input_Transaction_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-input-transaction-to-code-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Input_Transaction_ToCode_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-call-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Call_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-log-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Log_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-log-signature-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Log_Signature_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-receipt-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Receipt_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-transaction-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Transaction_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-transfer-currency-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Transfer_Currency_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-was-on-branch-input-block-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_WasOnBranch_Input_Block_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-was-on-branch-input-uncle-input-type"},(0,p.kt)("inlineCode",{parentName:"a"},"EVM_WasOnBranch_Input_Uncle_InputType")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);