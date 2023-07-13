"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,d=function(e,t){if(null==e)return{};var a,r,d={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),_=d,u=c["".concat(i,".").concat(_)]||c[_]||f[_]||l;return a?r.createElement(u,n(n({ref:t},s),{},{components:a})):r.createElement(u,n({ref:t},s))}));function u(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,n=new Array(l);n[0]=_;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:d,n[1]=o;for(var m=2;m<l;m++)n[m]=a[m];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}_.displayName="MDXCreateElement"},55166:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>c,assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>_});var r=a(87462),d=a(67294),l=a(3905);const n={id:"evm-dextrade-fields-fee",title:"EVM_DEXTrade_Fields_Fee",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql-reference/objects/evm-dextrade-fields-fee",id:"graphql-reference/objects/evm-dextrade-fields-fee",title:"EVM_DEXTrade_Fields_Fee",description:"Fee fields",source:"@site/docs/graphql-reference/objects/evm-dextrade-fields-fee.mdx",sourceDirName:"graphql-reference/objects",slug:"/graphql-reference/objects/evm-dextrade-fields-fee",permalink:"/docs/graphql-reference/objects/evm-dextrade-fields-fee",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/objects/evm-dextrade-fields-fee.mdx",tags:[],version:"current",frontMatter:{id:"evm-dextrade-fields-fee",title:"EVM_DEXTrade_Fields_Fee",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_DEXTrade_Fields_Call",permalink:"/docs/graphql-reference/objects/evm-dextrade-fields-call"},next:{title:"EVM_DEXTrade_Fields_Log_Signature",permalink:"/docs/graphql-reference/objects/evm-dextrade-fields-log-signature"}},m={},s=()=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(d.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),_=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>Burnt</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebburntbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.Burnt.<b>if</b></code><Bullet /><code>EVM_DEXTrade_Filter</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeburntbifbcodeevm_dextrade_filter-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.Burnt.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeburntbmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>EffectiveGasPrice</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebeffectivegaspricebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.EffectiveGasPrice.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeeffectivegaspricebmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.EffectiveGasPrice.<b>minimum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeeffectivegaspricebminimumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>GasRefund</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebgasrefundbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.GasRefund.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feegasrefundbmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.GasRefund.<b>minimum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feegasrefundbminimumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>MinerReward</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebminerrewardbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.MinerReward.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeminerrewardbmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.MinerReward.<b>minimum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feeminerrewardbminimumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>PriorityFeePerGas</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebpriorityfeepergasbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.PriorityFeePerGas.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feepriorityfeepergasbmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.PriorityFeePerGas.<b>minimum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feepriorityfeepergasbminimumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>Savings</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebsavingsbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.Savings.<b>if</b></code><Bullet /><code>EVM_DEXTrade_Filter</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feesavingsbifbcodeevm_dextrade_filter-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.Savings.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feesavingsbmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.<b>SenderFee</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feebsenderfeebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.SenderFee.<b>maximum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feesenderfeebmaximumbcodeevm_dextrade_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTrade_Fields_Fee.SenderFee.<b>minimum</b></code><Bullet /><code>EVM_DEXTrade_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_dextrade_fields_feesenderfeebminimumbcodeevm_dextrade_comparefields-",level:5},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:o=!1}=e;const[i,m]=(0,d.useState)(o);return(0,l.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&n)},p={Bullet:s,SpecifiedBy:c,Badge:f,toc:_,Details:u},k="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Fee fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type EVM_DEXTrade_Fields_Fee {\n  Burnt(\n    minimum: EVM_DEXTrade_CompareFields\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n  ): String\n  EffectiveGasPrice(\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n    minimum: EVM_DEXTrade_CompareFields\n  ): String\n  GasRefund(\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n    minimum: EVM_DEXTrade_CompareFields\n  ): String\n  MinerReward(\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n    minimum: EVM_DEXTrade_CompareFields\n  ): String\n  PriorityFeePerGas(\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n    minimum: EVM_DEXTrade_CompareFields\n  ): String\n  Savings(\n    minimum: EVM_DEXTrade_CompareFields\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n  ): String\n  SenderFee(\n    if: EVM_DEXTrade_Filter\n    maximum: EVM_DEXTrade_CompareFields\n    minimum: EVM_DEXTrade_CompareFields\n  ): String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebburntbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"Burnt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Burnt value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feeburntbminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Burnt.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeburntbifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Burnt.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeburntbmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Burnt.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebeffectivegaspricebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"EffectiveGasPrice"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"EffectiveGasPrice value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feeeffectivegaspricebifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.EffectiveGasPrice.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeeffectivegaspricebmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.EffectiveGasPrice.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeeffectivegaspricebminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.EffectiveGasPrice.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebgasrefundbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"GasRefund"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GasRefund value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feegasrefundbifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.GasRefund.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feegasrefundbmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.GasRefund.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feegasrefundbminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.GasRefund.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebminerrewardbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"MinerReward"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MinerReward value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feeminerrewardbifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.MinerReward.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeminerrewardbmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.MinerReward.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feeminerrewardbminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.MinerReward.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebpriorityfeepergasbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"PriorityFeePerGas"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"PriorityFeePerGas value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feepriorityfeepergasbifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.PriorityFeePerGas.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feepriorityfeepergasbmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.PriorityFeePerGas.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feepriorityfeepergasbminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.PriorityFeePerGas.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebsavingsbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"Savings"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Savings value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feesavingsbminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Savings.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feesavingsbifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Savings.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feesavingsbmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.Savings.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-evm_dextrade_fields_feebsenderfeebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.",(0,l.kt)("b",null,"SenderFee"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SenderFee value"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_dextrade_fields_feesenderfeebifbcodeevm_dextrade_filter-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.SenderFee.",(0,l.kt)("b",null,"if"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-dextrade-filter"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Filter"))," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feesenderfeebmaximumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.SenderFee.",(0,l.kt)("b",null,"maximum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-evm_dextrade_fields_feesenderfeebminimumbcodeevm_dextrade_comparefields-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTrade_Fields_Fee.SenderFee.",(0,l.kt)("b",null,"minimum"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-dextrade-compare-fields"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_CompareFields"))," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql-reference/objects/evm-dextrade-cube"},(0,l.kt)("inlineCode",{parentName:"a"},"EVM_DEXTrade_Cube")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);