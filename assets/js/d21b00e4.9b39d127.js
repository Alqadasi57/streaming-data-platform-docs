"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,k=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39169:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>k,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905);const o={id:"olap-date",title:"OLAP_Date",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql-reference/inputs/olap-date",id:"graphql-reference/inputs/olap-date",title:"OLAP_Date",description:"Date represention YYYY-MM-DD format",source:"@site/docs/graphql-reference/inputs/olap-date.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/olap-date",permalink:"/docs/graphql-reference/inputs/olap-date",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/olap-date.mdx",tags:[],version:"current",frontMatter:{id:"olap-date",title:"OLAP_Date",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"OLAP_DateTime",permalink:"/docs/graphql-reference/inputs/olap-date-time"},next:{title:"OLAP_Float",permalink:"/docs/graphql-reference/inputs/olap-float"}},p={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>notIn</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebnotinbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>till</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebtillbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>since</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebsincebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>is</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebisbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>not</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebnotbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OLAP_Date.<b>in</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-olap_datebinbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[i,p]=(0,r.useState)(c);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},g={Bullet:d,SpecifiedBy:s,Badge:u,toc:m,Details:k},y="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Date represention YYYY-MM-DD format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input OLAP_Date {\n  notIn: [String]\n  before: String\n  after: String\n  till: String\n  since: String\n  is: String\n  not: String\n  in: [String]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebnotinbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"notIn"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date is not in the provided list")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebbeforebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"before"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Strictly before this date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebafterbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"after"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Strictly after this date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebtillbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"till"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Before this date and including it")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebsincebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"since"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After this date and including it")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebisbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"is"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Exact match the date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebnotbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"not"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Not this date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-olap_datebinbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Date.",(0,l.kt)("b",null,"in"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date in the provided list")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-balance-update-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-block-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Block_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-call-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Call_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-dextrade-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Event_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-miner-reward-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_MinerReward_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-miner-reward-input-uncle-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_MinerReward_Input_Uncle_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-was-on-branch-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_WasOnBranch_Input_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-was-on-branch-input-uncle-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_WasOnBranch_Input_Uncle_Block_InputType")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);