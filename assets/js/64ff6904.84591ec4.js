"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19574:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),i=n(67294),a=n(3905);const l={id:"evm-event-limit",title:"EVM_Event_Limit",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql-reference/inputs/evm-event-limit",id:"graphql-reference/inputs/evm-event-limit",title:"EVM_Event_Limit",description:"Limit definition",source:"@site/docs/graphql-reference/inputs/evm-event-limit.mdx",sourceDirName:"graphql-reference/inputs",slug:"/graphql-reference/inputs/evm-event-limit",permalink:"/docs/graphql-reference/inputs/evm-event-limit",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/inputs/evm-event-limit.mdx",tags:[],version:"current",frontMatter:{id:"evm-event-limit",title:"EVM_Event_Limit",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_Event_LimitBy",permalink:"/docs/graphql-reference/inputs/evm-event-limit-by"},next:{title:"EVM_Event_Ordering",permalink:"/docs/graphql-reference/inputs/evm-event-ordering"}},s={},m=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Limit.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_event_limitboffsetbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EVM_Event_Limit.<b>count</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-evm_event_limitbcountbcodeint-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[c,s]=(0,i.useState)(o);return(0,a.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},v={Bullet:m,SpecifiedBy:p,Badge:d,toc:u,Details:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Limit definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input EVM_Event_Limit {\n  offset: Int\n  count: Int\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_event_limitboffsetbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Limit.",(0,a.kt)("b",null,"offset"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Offset of results")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-evm_event_limitbcountbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"EVM_Event_Limit.",(0,a.kt)("b",null,"count"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Max count in results")))}g.isMDXComponent=!0}}]);