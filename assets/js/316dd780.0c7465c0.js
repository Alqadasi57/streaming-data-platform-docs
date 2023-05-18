"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3631],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>_});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=l.createContext({}),m=function(e){var a=l.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},i=function(e){var a=m(e.components);return l.createElement(r.Provider,{value:a},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=m(t),u=n,_=s["".concat(r,".").concat(u)]||s[u]||p[u]||o;return t?l.createElement(_,c(c({ref:a},i),{},{components:t})):l.createElement(_,c({ref:a},i))}));function _(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var d={};for(var r in a)hasOwnProperty.call(a,r)&&(d[r]=a[r]);d.originalType=e,d[s]="string"==typeof e?e:n,c[1]=d;for(var m=2;m<o;m++)c[m]=t[m];return l.createElement.apply(null,c)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61997:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>_,SpecifiedBy:()=>s,assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var l=t(87462),n=t(67294),o=t(3905);const c={id:"evm-balance-update-fields-block",title:"EVM_BalanceUpdate_Fields_Block",hide_table_of_contents:!1},d=void 0,r={unversionedId:"graphql-reference/objects/evm-balance-update-fields-block",id:"graphql-reference/objects/evm-balance-update-fields-block",title:"EVM_BalanceUpdate_Fields_Block",description:"Block fields",source:"@site/docs/graphql-reference/objects/evm-balance-update-fields-block.mdx",sourceDirName:"graphql-reference/objects",slug:"/graphql-reference/objects/evm-balance-update-fields-block",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-block",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/objects/evm-balance-update-fields-block.mdx",tags:[],version:"current",frontMatter:{id:"evm-balance-update-fields-block",title:"EVM_BalanceUpdate_Fields_Block",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_BalanceUpdate_Fields_BalanceUpdate",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-balance-update"},next:{title:"EVM_BalanceUpdate_Fields_Call",permalink:"/docs/graphql-reference/objects/evm-balance-update-fields-call"}},m={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.<b>Date</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbdatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Date.<b>maximum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockdatebmaximumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Date.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockdatebminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.<b>Hash</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbhashbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Hash.<b>maximum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockhashbmaximumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Hash.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockhashbminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.<b>Number</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Number.<b>maximum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocknumberbmaximumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Number.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocknumberbminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.<b>ParentHash</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbparenthashbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.ParentHash.<b>maximum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockparenthashbmaximumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.ParentHash.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockparenthashbminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.<b>Time</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbtimebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Time.<b>maximum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocktimebmaximumbcodeevm_balanceupdate_comparefields-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_BalanceUpdate_Fields_Block.Time.<b>minimum</b></code><Bullet /><code>EVM_BalanceUpdate_CompareFields</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocktimebminimumbcodeevm_balanceupdate_comparefields-",level:5},{value:"Member of",id:"member-of",level:3}],_=e=>{let{dataOpen:a,dataClose:t,children:c,startOpen:d=!1}=e;const[r,m]=(0,n.useState)(d);return(0,o.kt)("details",(0,l.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},r?a:t),r&&c)},b={Bullet:i,SpecifiedBy:s,Badge:p,toc:u,Details:_},k="wrapper";function f(e){let{components:a,...t}=e;return(0,o.kt)(k,(0,l.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Block fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type EVM_BalanceUpdate_Fields_Block {\n  Date(\n    if: EVM_BalanceUpdate_Filter\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n  ): String\n  Hash(\n    if: EVM_BalanceUpdate_Filter\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n  ): String\n  Number(\n    if: EVM_BalanceUpdate_Filter\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n  ): String\n  ParentHash(\n    if: EVM_BalanceUpdate_Filter\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n  ): String\n  Time(\n    if: EVM_BalanceUpdate_Filter\n    maximum: EVM_BalanceUpdate_CompareFields\n    minimum: EVM_BalanceUpdate_CompareFields\n  ): DateTime\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbdatebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.",(0,o.kt)("b",null,"Date"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockdatebifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Date.",(0,o.kt)("b",null,"if"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockdatebmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Date.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockdatebminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Date.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbhashbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.",(0,o.kt)("b",null,"Hash"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hash value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockhashbifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Hash.",(0,o.kt)("b",null,"if"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockhashbmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Hash.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockhashbminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Hash.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbnumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.",(0,o.kt)("b",null,"Number"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Number value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocknumberbifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Number.",(0,o.kt)("b",null,"if"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocknumberbmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Number.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocknumberbminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Number.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbparenthashbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.",(0,o.kt)("b",null,"ParentHash"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ParentHash value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockparenthashbifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.ParentHash.",(0,o.kt)("b",null,"if"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockparenthashbmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.ParentHash.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockparenthashbminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.ParentHash.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blockbtimebcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.",(0,o.kt)("b",null,"Time"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Time value"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocktimebifbcodeevm_balanceupdate_filter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Time.",(0,o.kt)("b",null,"if"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/inputs/evm-balance-update-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Filter"))," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Apply a condition to a metric calculation")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocktimebmaximumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Time.",(0,o.kt)("b",null,"maximum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is maximum")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-evm_balanceupdate_fields_blocktimebminimumbcodeevm_balanceupdate_comparefields-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_BalanceUpdate_Fields_Block.Time.",(0,o.kt)("b",null,"minimum"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql-reference/enums/evm-balance-update-compare-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_CompareFields"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return value when the argument is minimum")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql-reference/objects/evm-balance-update-cube"},(0,o.kt)("inlineCode",{parentName:"a"},"EVM_BalanceUpdate_Cube")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);