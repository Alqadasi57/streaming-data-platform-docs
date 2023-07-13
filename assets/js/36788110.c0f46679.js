"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66563],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:e},p),{},{components:n})):a.createElement(y,i({ref:e},p))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84628:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>d,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const i={id:"evm-transaction-input-transaction-status-input-type",title:"EVM_Transaction_Input_TransactionStatus_InputType",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql-reference/inputs/evm-transaction-input-transaction-status-input-type",id:"graphql-reference/inputs/evm-transaction-input-transaction-status-input-type",title:"EVM_Transaction_Input_TransactionStatus_InputType",description:"Select by TransactionStatus",source:"@site/docs/graphql-reference/inputs/evm-transaction-input-transaction-status-input-type.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-transaction-input-transaction-status-input-type",permalink:"/docs/graphql-reference/inputs/evm-transaction-input-transaction-status-input-type",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-transaction-input-transaction-status-input-type.mdx",tags:[],version:"current",frontMatter:{id:"evm-transaction-input-transaction-status-input-type",title:"EVM_Transaction_Input_TransactionStatus_InputType",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Transaction_Input_Transaction_InputType",permalink:"/docs/graphql-reference/inputs/evm-transaction-input-transaction-input-type"},next:{title:"EVM_Transaction_Input_Transaction_ToCode_InputType",permalink:"/docs/graphql-reference/inputs/evm-transaction-input-transaction-to-code-input-type"}},l={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),d=t=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+t.class},t.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transaction_Input_TransactionStatus_InputType.<b>Success</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebsuccessbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transaction_Input_TransactionStatus_InputType.<b>FaultError</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebfaulterrorbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transaction_Input_TransactionStatus_InputType.<b>EndError</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebenderrorbcodeolap_string-",level:4},{value:"Member of",id:"member-of",level:3}],y=t=>{let{dataOpen:e,dataClose:n,children:i,startOpen:s=!1}=t;const[c,l]=(0,r.useState)(s);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:t=>{t.preventDefault(),l((t=>!t))},style:{listStyle:"none"}},c?e:n),c&&i)},f={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:y},_="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(_,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Select by TransactionStatus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Transaction_Input_TransactionStatus_InputType {\n  Success: Boolean\n  FaultError: OLAP_String\n  EndError: OLAP_String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebsuccessbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transaction_Input_TransactionStatus_InputType.",(0,o.kt)("b",null,"Success"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebfaulterrorbcodeolap_string-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transaction_Input_TransactionStatus_InputType.",(0,o.kt)("b",null,"FaultError"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,o.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_transaction_input_transactionstatus_inputtypebenderrorbcodeolap_string-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transaction_Input_TransactionStatus_InputType.",(0,o.kt)("b",null,"EndError"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,o.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transaction-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_Transaction_Filter")),"  ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);