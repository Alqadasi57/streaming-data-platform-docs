"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),_=a,f=u["".concat(i,".").concat(_)]||u[_]||d[_]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=_;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},79170:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>_});var r=n(87462),a=n(67294),l=n(3905);const o={id:"evm-transfer-input-block-input-type",title:"EVM_Transfer_Input_Block_InputType",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql-reference/inputs/evm-transfer-input-block-input-type",id:"graphql-reference/inputs/evm-transfer-input-block-input-type",title:"EVM_Transfer_Input_Block_InputType",description:"Select by Block",source:"@site/docs/graphql-reference/inputs/evm-transfer-input-block-input-type.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-transfer-input-block-input-type",permalink:"/docs/graphql-reference/inputs/evm-transfer-input-block-input-type",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-transfer-input-block-input-type.mdx",tags:[],version:"current",frontMatter:{id:"evm-transfer-input-block-input-type",title:"EVM_Transfer_Input_Block_InputType",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Transfer_Filter",permalink:"/docs/graphql-reference/inputs/evm-transfer-filter"},next:{title:"EVM_Transfer_Input_Block_L1_InputType",permalink:"/docs/graphql-reference/inputs/evm-transfer-input-block-l1-input-type"}},c={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),_=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Date</b></code><Bullet /><code>OLAP_Date</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebdatebcodeolap_date-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>L1</b></code><Bullet /><code>EVM_Transfer_Input_Block_L1_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebl1bcodeevm_transfer_input_block_l1_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>GasLimit</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebgaslimitbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Coinbase</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebcoinbasebcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Number</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebnumberbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>ParentHash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebparenthashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>BaseFee</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebbasefeebcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>GasUsed</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebgasusedbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Time</b></code><Bullet /><code>OLAP_DateTime</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebtimebcodeolap_datetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Hash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebhashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Nonce</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebnoncebcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Transfer_Input_Block_InputType.<b>Difficulty</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebdifficultybcodeolap_biginteger-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:p=!1}=e;const[i,c]=(0,a.useState)(p);return(0,l.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},m={Bullet:s,SpecifiedBy:u,Badge:d,toc:_,Details:f},g="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Select by Block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Transfer_Input_Block_InputType {\n  Date: OLAP_Date\n  L1: EVM_Transfer_Input_Block_L1_InputType\n  GasLimit: OLAP_BigInteger\n  Coinbase: OLAP_String\n  Number: OLAP_BigInteger\n  ParentHash: OLAP_String\n  BaseFee: OLAP_BigInteger\n  GasUsed: OLAP_BigInteger\n  Time: OLAP_DateTime\n  Hash: OLAP_String\n  Nonce: OLAP_BigInteger\n  Difficulty: OLAP_BigInteger\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebdatebcodeolap_date-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Date"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-date"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_Date"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebl1bcodeevm_transfer_input_block_l1_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"L1"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-transfer-input-block-l1-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Input_Block_L1_InputType"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebgaslimitbcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"GasLimit"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebcoinbasebcodeolap_string-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Coinbase"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebnumberbcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Number"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebparenthashbcodeolap_string-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"ParentHash"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebbasefeebcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"BaseFee"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebgasusedbcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"GasUsed"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebtimebcodeolap_datetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Time"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_DateTime"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebhashbcodeolap_string-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Hash"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebnoncebcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Nonce"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_transfer_input_block_inputtypebdifficultybcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_Transfer_Input_Block_InputType.",(0,l.kt)("b",null,"Difficulty"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-transfer-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_Transfer_Filter")),"  ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);