"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),r=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=r(e.components);return l.createElement(i.Provider,{value:t},e.children)},_="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),_=r(n),s=o,k=_["".concat(i,".").concat(s)]||_[s]||d[s]||a;return n?l.createElement(k,c(c({ref:t},u),{},{components:n})):l.createElement(k,c({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[_]="string"==typeof e?e:o,c[1]=p;for(var r=2;r<a;r++)c[r]=n[r];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7043:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>k,SpecifiedBy:()=>_,assets:()=>r,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var l=n(87462),o=n(67294),a=n(3905);const c={id:"evm-block-input-block-input-type",title:"EVM_Block_Input_Block_InputType",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql-reference/inputs/evm-block-input-block-input-type",id:"graphql-reference/inputs/evm-block-input-block-input-type",title:"EVM_Block_Input_Block_InputType",description:"Select by Block",source:"@site/docs/graphql-reference/inputs/evm-block-input-block-input-type.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-block-input-block-input-type",permalink:"/docs/graphql-reference/inputs/evm-block-input-block-input-type",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-block-input-block-input-type.mdx",tags:[],version:"current",frontMatter:{id:"evm-block-input-block-input-type",title:"EVM_Block_Input_Block_InputType",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Block_Filter",permalink:"/docs/graphql-reference/inputs/evm-block-filter"},next:{title:"EVM_Block_Input_Block_Result_InputType",permalink:"/docs/graphql-reference/inputs/evm-block-input-block-result-input-type"}},r={},u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),_=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>ParentHash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebparenthashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Number</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebnumberbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Nonce</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebnoncebcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>TxHash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtxhashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Hash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebhashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Time</b></code><Bullet /><code>OLAP_DateTime</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtimebcodeolap_datetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>UncleHash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebunclehashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Date</b></code><Bullet /><code>OLAP_Date</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebdatebcodeolap_date-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Extra</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebextrabcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>MixDigest</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebmixdigestbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Difficulty</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebdifficultybcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Coinbase</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebcoinbasebcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Result</b></code><Bullet /><code>EVM_Block_Input_Block_Result_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebresultbcodeevm_block_input_block_result_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>ReceiptHash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebreceipthashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Root</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebrootbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>GasLimit</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebgaslimitbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>BaseFee</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebbasefeebcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>TxCount</b></code><Bullet /><code>OLAP_Integer</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtxcountbcodeolap_integer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>UnclesCount</b></code><Bullet /><code>OLAP_Integer</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebunclescountbcodeolap_integer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>Bloom</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebbloombcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Block_Input_Block_InputType.<b>GasUsed</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_block_input_block_inputtypebgasusedbcodeolap_biginteger-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:p=!1}=e;const[i,r]=(0,o.useState)(p);return(0,a.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},b={Bullet:u,SpecifiedBy:_,Badge:d,toc:s,Details:k},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Select by Block"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Block_Input_Block_InputType {\n  ParentHash: OLAP_String\n  Number: OLAP_BigInteger\n  Nonce: OLAP_BigInteger\n  TxHash: OLAP_String\n  Hash: OLAP_String\n  Time: OLAP_DateTime\n  UncleHash: OLAP_String\n  Date: OLAP_Date\n  Extra: OLAP_String\n  MixDigest: OLAP_String\n  Difficulty: OLAP_BigInteger\n  Coinbase: OLAP_String\n  Result: EVM_Block_Input_Block_Result_InputType\n  ReceiptHash: OLAP_String\n  Root: OLAP_String\n  GasLimit: OLAP_BigInteger\n  BaseFee: EVM_Amount_With_Decimals\n  TxCount: OLAP_Integer\n  UnclesCount: OLAP_Integer\n  Bloom: OLAP_String\n  GasUsed: OLAP_BigInteger\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebparenthashbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"ParentHash"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebnumberbcodeolap_biginteger-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Number"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebnoncebcodeolap_biginteger-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Nonce"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtxhashbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"TxHash"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebhashbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Hash"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtimebcodeolap_datetime-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Time"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_DateTime"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebunclehashbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"UncleHash"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebdatebcodeolap_date-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Date"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-date"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_Date"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebextrabcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Extra"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebmixdigestbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"MixDigest"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebdifficultybcodeolap_biginteger-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Difficulty"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebcoinbasebcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Coinbase"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebresultbcodeevm_block_input_block_result_inputtype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Result"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-block-input-block-result-input-type"},(0,a.kt)("inlineCode",{parentName:"a"},"EVM_Block_Input_Block_Result_InputType"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebreceipthashbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"ReceiptHash"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebrootbcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Root"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebgaslimitbcodeolap_biginteger-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"GasLimit"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebbasefeebcodeevm_amount_with_decimals-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"BaseFee"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,a.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebtxcountbcodeolap_integer-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"TxCount"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_Integer"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebunclescountbcodeolap_integer-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"UnclesCount"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_Integer"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebbloombcodeolap_string-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"Bloom"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_block_input_block_inputtypebgasusedbcodeolap_biginteger-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Block_Input_Block_InputType.",(0,a.kt)("b",null,"GasUsed"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,a.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-block-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"EVM_Block_Filter")),"  ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);