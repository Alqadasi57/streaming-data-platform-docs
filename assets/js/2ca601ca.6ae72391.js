"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:8},o="Statistics",s={unversionedId:"graphql/metrics/statistics",id:"graphql/metrics/statistics",title:"Statistics",description:"Over One Variable",source:"@site/docs/graphql/metrics/statistics.md",sourceDirName:"graphql/metrics",slug:"/graphql/metrics/statistics",permalink:"/docs/graphql/metrics/statistics",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/graphql/metrics/statistics.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Sum",permalink:"/docs/graphql/metrics/sum"},next:{title:"Calculations",permalink:"/docs/graphql/calculations"}},l={},c=[{value:"Over One Variable",id:"over-one-variable",level:2},{value:"Over Two Variables",id:"over-two-variables",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statistics"},"Statistics"),(0,i.kt)("h2",{id:"over-one-variable"},"Over One Variable"),(0,i.kt)("p",null,"Elements that calculate different statistics with the self-descriptive names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"average")," calculates the arithmetic mean."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"standard_deviation")," square root of dispersion for a set of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dispersion")," dispersion for a set of values (\u03a3((x - x\u0305)^2) / n), , where n is the sample size and x\u0305 is the average value of x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"median")," median of a numeric data sample"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entropy")," calculates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Entropy_(information_theory)"},"Shannon entropy")," of a set of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skew")," ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Skewness"},"skewness")," of a set of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kurtosis")," ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Kurtosis"},"kurtosis")," of a set of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quantile"),"approximate ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence (have ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," argument from 0 to 1, 0.5 is median)")),(0,i.kt)("p",null,"For example to calculate average reward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"average(of: Reward_Total)\n")),(0,i.kt)("h2",{id:"over-two-variables"},"Over Two Variables"),(0,i.kt)("p",null,"Some statistics require 2 variables.\nOne variable is specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"of")," attribute, the other in ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," attribute, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"correlation(of: Reward_Total with: Block_GasUsed)\n")),(0,i.kt)("p",null,"Elements that calculate different statistics with the self-descriptive names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"covariance")," value of \u03a3((x - x\u0305)(y - y\u0305)) / n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"correlation")," pearson correlation coefficient: \u03a3((x - x\u0305)(y - y\u0305)) / sqrt(\u03a3((x - x\u0305)^2) * \u03a3((y - y\u0305)^2))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contingency")," calculates the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Contingency_table#Cram%C3%A9r's_V_and_the_contingency_coefficient_C"},"contingency coefficient"),", a value that measures the association between two columns in a table. The computation is similar to the cramersV function but with a different denominator in the square root"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rank_correlation")," rank correlation coefficient of the ranks of x and y. The value of the correlation coefficient ranges from -1 to +1. If less than two arguments are passed, the function will return an exception. The value close to +1 denotes a high linear relationship, and with an increase of one random variable, the second random variable also increases. The value close to -1 denotes a high linear relationship, and with an increase of one random variable, the second random variable decreases. The value close or equal to 0 denotes no relationship between the two random variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cramers")," ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_V"},"Cram\xe9r's V")," (sometimes referred to as Cram\xe9r's phi) is a measure of association between two columns in a table. The result of the cramers function ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. It may be viewed as the association between two variables as a percentage of their maximum possible variation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cramers_bias_corrected")," Cram\xe9r's V is a measure of association between two columns in a table. The result of the cramersV function ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. The function can be heavily biased, so this version of Cram\xe9r's V uses the bias correction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"theils")," calculates the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Contingency_table#Uncertainty_coefficient"},"Theil's U uncertainty coefficient"),", a value that measures the association between two columns in a table. Its values range from \u22121.0 (100% negative association, or perfect inversion) to +1.0 (100% positive association, or perfect agreement). A value of 0.0 indicates the absence of association.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/metrics/if"},"condition")," to any of these metrics")))}u.isMDXComponent=!0}}]);