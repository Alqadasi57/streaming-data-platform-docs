"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83621:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(67294),o=n(3905);const i={id:"evm-dextrade-by-token-limit",title:"EVM_DEXTradeByToken_Limit",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql-reference/inputs/evm-dextrade-by-token-limit",id:"graphql-reference/inputs/evm-dextrade-by-token-limit",title:"EVM_DEXTradeByToken_Limit",description:"Limit definition",source:"@site/docs/graphql-reference/inputs/evm-dextrade-by-token-limit.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-dextrade-by-token-limit",permalink:"/docs/graphql-reference/inputs/evm-dextrade-by-token-limit",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-dextrade-by-token-limit.mdx",tags:[],version:"current",frontMatter:{id:"evm-dextrade-by-token-limit",title:"EVM_DEXTradeByToken_Limit",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_DEXTradeByToken_LimitBy",permalink:"/docs/graphql-reference/inputs/evm-dextrade-by-token-limit-by"},next:{title:"EVM_DEXTradeByToken_Ordering",permalink:"/docs/graphql-reference/inputs/evm-dextrade-by-token-ordering"}},d={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTradeByToken_Limit.<b>count</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextradebytoken_limitbcountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_DEXTradeByToken_Limit.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_dextradebytoken_limitboffsetbcodeint-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,d]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},y={Bullet:s,SpecifiedBy:m,Badge:p,toc:u,Details:f},k="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Limit definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_DEXTradeByToken_Limit {\n  count: Int\n  offset: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_dextradebytoken_limitbcountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTradeByToken_Limit.",(0,o.kt)("b",null,"count"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Max count in results")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-evm_dextradebytoken_limitboffsetbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EVM_DEXTradeByToken_Limit.",(0,o.kt)("b",null,"offset"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Offset of results")))}b.isMDXComponent=!0}}]);