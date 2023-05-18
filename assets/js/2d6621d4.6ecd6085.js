"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||_[s]||l;return n?r.createElement(m,d(d({ref:t},c),{},{components:n})):r.createElement(m,d({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,d[1]=o;for(var p=2;p<l;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51922:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>_,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var r=n(87462),a=n(67294),l=n(3905);const d={id:"evm-dextrade-filter",title:"EVM_DEXTrade_Filter",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql-reference/inputs/evm-dextrade-filter",id:"graphql-reference/inputs/evm-dextrade-filter",title:"EVM_DEXTrade_Filter",description:"Fields",source:"@site/docs/graphql-reference/inputs/evm-dextrade-filter.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-dextrade-filter",permalink:"/docs/graphql-reference/inputs/evm-dextrade-filter",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-dextrade-filter.mdx",tags:[],version:"current",frontMatter:{id:"evm-dextrade-filter",title:"EVM_DEXTrade_Filter",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Call_Ordering",permalink:"/docs/graphql-reference/inputs/evm-call-ordering"},next:{title:"EVM_DEXTrade_Input_Block_InputType",permalink:"/docs/graphql-reference/inputs/evm-dextrade-input-block-input-type"}},p={},c=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),_=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Block</b></code><Bullet /><code>EVM_DEXTrade_Input_Block_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbblockbcodeevm_dextrade_input_block_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Log</b></code><Bullet /><code>EVM_DEXTrade_Input_Log_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterblogbcodeevm_dextrade_input_log_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>TransactionStatus</b></code><Bullet /><code>EVM_DEXTrade_Input_TransactionStatus_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbtransactionstatusbcodeevm_dextrade_input_transactionstatus_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Call</b></code><Bullet /><code>EVM_DEXTrade_Input_Call_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbcallbcodeevm_dextrade_input_call_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>ChainId</b></code><Bullet /><code>OLAP_BigInteger</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbchainidbcodeolap_biginteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Trade</b></code><Bullet /><code>EVM_DEXTrade_Input_Trade_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbtradebcodeevm_dextrade_input_trade_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Receipt</b></code><Bullet /><code>EVM_DEXTrade_Input_Receipt_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbreceiptbcodeevm_dextrade_input_receipt_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Fee</b></code><Bullet /><code>EVM_DEXTrade_Input_Fee_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbfeebcodeevm_dextrade_input_fee_inputtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Filter.<b>Transaction</b></code><Bullet /><code>EVM_DEXTrade_Input_Transaction_InputType</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_filterbtransactionbcodeevm_dextrade_input_transaction_inputtype-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:o=!1}=e;const[i,p]=(0,a.useState)(o);return(0,l.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&d)},y={Bullet:c,SpecifiedBy:u,Badge:_,toc:s,Details:m},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_DEXTrade_Filter {\n  Block: EVM_DEXTrade_Input_Block_InputType\n  Log: EVM_DEXTrade_Input_Log_InputType\n  TransactionStatus: EVM_DEXTrade_Input_TransactionStatus_InputType\n  Call: EVM_DEXTrade_Input_Call_InputType\n  ChainId: OLAP_BigInteger\n  Trade: EVM_DEXTrade_Input_Trade_InputType\n  Receipt: EVM_DEXTrade_Input_Receipt_InputType\n  Fee: EVM_DEXTrade_Input_Fee_InputType\n  Transaction: EVM_DEXTrade_Input_Transaction_InputType\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbblockbcodeevm_dextrade_input_block_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Block"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-block-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Block_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Block")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterblogbcodeevm_dextrade_input_log_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Log"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-log-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Log_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbtransactionstatusbcodeevm_dextrade_input_transactionstatus_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"TransactionStatus"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-transaction-status-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_TransactionStatus_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by TransactionStatus")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbcallbcodeevm_dextrade_input_call_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Call"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-call-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Call_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Call")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbchainidbcodeolap_biginteger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"ChainId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/olap-big-integer"},(0,l.kt)("inlineCode",{parentName:"a"},"OLAP_BigInteger"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Big Integer ( more than 32 bits precision), including negative numbers")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbtradebcodeevm_dextrade_input_trade_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Trade"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-trade-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Trade_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Trade")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbreceiptbcodeevm_dextrade_input_receipt_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Receipt"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-receipt-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Receipt_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Receipt")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbfeebcodeevm_dextrade_input_fee_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Fee"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-fee-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Fee_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Fee")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_filterbtransactionbcodeevm_dextrade_input_transaction_inputtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Filter.",(0,l.kt)("b",null,"Transaction"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/inputs/evm-dextrade-input-transaction-input-type"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Input_Transaction_InputType"))," ",(0,l.kt)(_,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Select by Transaction")))}k.isMDXComponent=!0}}]);