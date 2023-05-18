"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6186],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3509:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>_,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=a(67294),o=a(3905);const l={id:"olap-metric-calculation-method-exact",title:"OLAP_Metric_Calculation_Method_Exact",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql-reference/enums/olap-metric-calculation-method-exact",id:"graphql-reference/enums/olap-metric-calculation-method-exact",title:"OLAP_Metric_Calculation_Method_Exact",description:"Method used to calculate",source:"@site/docs/graphql-reference/enums/olap-metric-calculation-method-exact.mdx",sourceDirName:"graphql-reference/enums",slug:"/graphql-reference/enums/olap-metric-calculation-method-exact",permalink:"/docs/graphql-reference/enums/olap-metric-calculation-method-exact",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql-reference/enums/olap-metric-calculation-method-exact.mdx",tags:[],version:"current",frontMatter:{id:"olap-metric-calculation-method-exact",title:"OLAP_Metric_Calculation_Method_Exact",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EVM_WasOnBranch_NumFields",permalink:"/docs/graphql-reference/enums/evm-was-on-branch-num-fields"},next:{title:"EVM_Amount_With_Decimals",permalink:"/docs/graphql-reference/inputs/evm-amount-with-decimals"}},u={},m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OLAP_Metric_Calculation_Method_Exact.<b>exact</b></code>",id:"code-style-fontweight-normal-olap_metric_calculation_method_exactbexactbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OLAP_Metric_Calculation_Method_Exact.<b>approximate</b></code>",id:"code-style-fontweight-normal-olap_metric_calculation_method_exactbapproximatebcode",level:4}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[i,u]=(0,n.useState)(c);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},h={Bullet:m,SpecifiedBy:p,Badge:s,toc:d,Details:f},b="wrapper";function _(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Method used to calculate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OLAP_Metric_Calculation_Method_Exact {\n  exact\n  approximate\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-olap_metric_calculation_method_exactbexactbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Metric_Calculation_Method_Exact.",(0,o.kt)("b",null,"exact")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Calculates the exact metric")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-olap_metric_calculation_method_exactbapproximatebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OLAP_Metric_Calculation_Method_Exact.",(0,o.kt)("b",null,"approximate")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Calculates the approximate metric")))}_.isMDXComponent=!0}}]);