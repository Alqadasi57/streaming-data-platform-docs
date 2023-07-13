"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||_[d]||i;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98718:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>_,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(67294),i=n(3905);const r={id:"evm-event-input-transaction-input-type",title:"EVM_Event_Input_Transaction_InputType",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql-reference/inputs/evm-event-input-transaction-input-type",id:"graphql-reference/inputs/evm-event-input-transaction-input-type",title:"EVM_Event_Input_Transaction_InputType",description:"Select by Transaction",source:"@site/docs/graphql-reference/inputs/evm-event-input-transaction-input-type.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-event-input-transaction-input-type",permalink:"/docs/graphql-reference/inputs/evm-event-input-transaction-input-type",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-event-input-transaction-input-type.mdx",tags:[],version:"current",frontMatter:{id:"evm-event-input-transaction-input-type",title:"EVM_Event_Input_Transaction_InputType",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Event_Input_Topics_Input_Topics",permalink:"/docs/graphql-reference/inputs/evm-event-input-topics-input-topics"},next:{title:"EVM_Event_Input_TransactionStatus_InputType",permalink:"/docs/graphql-reference/inputs/evm-event-input-transaction-status-input-type"}},c={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),_=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Gas</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgasbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Cost</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebcostbcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Value</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebvaluebcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Hash</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebhashbcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>GasFeeCap</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgasfeecapbcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Nonce</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebnoncebcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Index</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebindexbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>To</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebtobcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>GasTipCap</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgastipcapbcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>GasPrice</b></code><Bullet /><code>EVM_Amount_With_Decimals</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgaspricebcodeevm_amount_with_decimals-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>From</b></code><Bullet /><code>OLAP_String</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebfrombcodeolap_string-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Type</b></code><Bullet /><code>OLAP_Integer</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebtypebcodeolap_integer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Input_Transaction_InputType.<b>Protected</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebprotectedbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[p,c]=(0,o.useState)(l);return(0,i.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&r)},y={Bullet:s,SpecifiedBy:u,Badge:_,toc:d,Details:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Select by Transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Event_Input_Transaction_InputType {\n  Gas: OLAP_BigInteger\n  Cost: EVM_Amount_With_Decimals\n  Value: EVM_Amount_With_Decimals\n  Hash: OLAP_String\n  GasFeeCap: EVM_Amount_With_Decimals\n  Nonce: OLAP_BigInteger\n  Index: OLAP_BigInteger\n  To: OLAP_String\n  GasTipCap: EVM_Amount_With_Decimals\n  GasPrice: EVM_Amount_With_Decimals\n  From: OLAP_String\n  Type: OLAP_Integer\n  Protected: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgasbcodeolap_biginteger-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Gas"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebcostbcodeevm_amount_with_decimals-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Cost"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebvaluebcodeevm_amount_with_decimals-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Value"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebhashbcodeolap_string-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Hash"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgasfeecapbcodeevm_amount_with_decimals-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"GasFeeCap"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebnoncebcodeolap_biginteger-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Nonce"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebindexbcodeolap_biginteger-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Index"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebtobcodeolap_string-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"To"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgastipcapbcodeevm_amount_with_decimals-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"GasTipCap"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebgaspricebcodeevm_amount_with_decimals-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"GasPrice"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-amount-with-decimals"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Amount_With_Decimals"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebfrombcodeolap_string-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"From"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-string"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_String"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebtypebcodeolap_integer-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Type"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-integer"},(0,i.kt)("inlineCode",{parentName:"a"},"OLAP_Integer"))," ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-evm_event_input_transaction_inputtypebprotectedbcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Input_Transaction_InputType.",(0,i.kt)("b",null,"Protected"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(_,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql-reference/inputs/evm-event-filter"},(0,i.kt)("inlineCode",{parentName:"a"},"EVM_Event_Filter")),"  ",(0,i.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);