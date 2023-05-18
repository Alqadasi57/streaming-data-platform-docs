"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2776],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>f});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),o=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=o(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?t.createElement(f,l(l({ref:a},d),{},{components:n})):t.createElement(f,l({ref:a},d))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52749:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},l="BalanceUpdates API",s={unversionedId:"examples/balances/balance-api",id:"examples/balances/balance-api",title:"BalanceUpdates API",description:"The BalanceUpdates API provides information on the balance updates of a specific address for a particular token on a supported blockchain. This API enables developers to retrieve a list of balance updates for a particular token and address, as well as additional information about each balance update.",source:"@site/docs/examples/balances/balance-api.md",sourceDirName:"examples/balances",slug:"/examples/balances/balance-api",permalink:"/docs/examples/balances/balance-api",draft:!1,editUrl:"https://github.com/bitquery/streaming-data-platform-docs/tree/main/docs/examples/balances/balance-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Balances",permalink:"/docs/category/balances"},next:{title:"Token Holders API",permalink:"/docs/examples/balances/tokenHolders-api"}},c={},o=[{value:"Balance of an address",id:"balance-of-an-address",level:2},{value:"Balance for an address for a specific currency",id:"balance-for-an-address-for-a-specific-currency",level:2},{value:"Balance updates of an address",id:"balance-updates-of-an-address",level:2}],d={toc:o},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"balanceupdates-api"},"BalanceUpdates API"),(0,r.kt)("p",null,"The BalanceUpdates API provides information on the balance updates of a specific address for a particular token on a supported blockchain. This API enables developers to retrieve a list of balance updates for a particular token and address, as well as additional information about each balance update."),(0,r.kt)("p",null,"You can use BalanceUpdates API to get latest balance for an address."),(0,r.kt)("h2",{id:"balance-of-an-address"},"Balance of an address"),(0,r.kt)("p",null,"Open the query on GraphQL IDE using this ",(0,r.kt)("a",{parentName:"p",href:"https://ide.bitquery.io/balance-of-a-wallet_1"},"link"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query MyQuery {\n  EVM(dataset: combined, network: eth) {\n    BalanceUpdates(\n      where: {BalanceUpdate: {Address: {is: "0xcf1DC766Fc2c62bef0b67A8De666c8e67aCf35f6"}}}\n      orderBy: {descendingByField: "balance"}\n    ) {\n      Currency {\n        Name\n      }\n      balance: sum(of: BalanceUpdate_Amount, selectWhere: {gt: "0"})\n      BalanceUpdate {\n        Address\n      }\n    }\n  }\n}\n\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataset: combined"),": This parameter specifies that the ",(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/dataset/combined"},"combined")," dataset is being used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network: eth"),": This parameter specifies that the Ethereum network is being queried."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'where: {BalanceUpdate: {Address: {is: "0xcf1DC766Fc2c62bef0b67A8De666c8e67aCf35f6"}}}'),': This parameter filters the results of the query based on the Ethereum address "0xcf1DC766Fc2c62bef0b67A8De666c8e67aCf35f6".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned Data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Currency { Name }"),": This field specifies the currency in which the balance is expressed. In this case, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")," of the currency is retrieved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balance: sum(of: BalanceUpdate_Amount)"),": This field retrieves the total balance of the specified Ethereum address, broken down by currency. The ",(0,r.kt)("inlineCode",{parentName:"li"},"sum")," function is used to calculate the total amount, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"of")," parameter specifies the field to sum, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"BalanceUpdate_Amount"),". The alias ",(0,r.kt)("inlineCode",{parentName:"li"},"balance")," is used to rename the field to ",(0,r.kt)("inlineCode",{parentName:"li"},"balance")," for readability.")),(0,r.kt)("h2",{id:"balance-for-an-address-for-a-specific-currency"},"Balance for an address for a specific currency"),(0,r.kt)("p",null,"You can also get a balance for a specific currency for a given address just by adding Currency Filer. As you know, names on blockchains are not unique; however, addresses are. Therefore, while mentioning currencies, always use their currency address. Open the query on GraphQL IDE using this ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.bitquery.io/ide/Balance-for-an-address-for-an-specific-currency_1"},"link"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query MyQuery {\n  EVM(dataset: combined, network: eth) {\n    BalanceUpdates(\n      where: {BalanceUpdate: {Address: {is: "0x3416cf6c708da44db2624d63ea0aaef7113527c6"}}, Currency: {SmartContract: {is: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"}}}\n    ) {\n      Currency {\n        Name\n        SmartContract\n      }\n      balance: sum(of: BalanceUpdate_Amount)\n    }\n  }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataset: combined"),": This parameter specifies that the ",(0,r.kt)("a",{parentName:"li",href:"/docs/graphql/dataset/combined"},"combined")," dataset is being used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network: eth"),": This parameter specifies that the Ethereum network is being queried."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'where: {BalanceUpdate: {Address: {is: "0x3416cf6c708da44db2624d63ea0aaef7113527c6"}}, Currency: {SmartContract: {is: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"}}}'),': This parameter filters the results of the query based on the Ethereum address "0x3416cf6c708da44db2624d63ea0aaef7113527c6" and the smart contract address "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48". The ',(0,r.kt)("inlineCode",{parentName:"li"},"Currency")," field specifies the currency to filter by, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"SmartContract")," field specifies the smart contract address to filter by.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned Data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Currency { Name, SmartContract }"),": This field specifies the currency in which the balance is expressed. In this case, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SmartContract")," of the currency are retrieved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balance: sum(of: BalanceUpdate_Amount)"),": This field retrieves the total balance of the specified Ethereum address, broken down by currency. The ",(0,r.kt)("inlineCode",{parentName:"li"},"sum")," function is used to calculate the total amount, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"of")," parameter specifies the field to sum, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"BalanceUpdate_Amount"),". The alias ",(0,r.kt)("inlineCode",{parentName:"li"},"balance")," is used to rename the field to ",(0,r.kt)("inlineCode",{parentName:"li"},"balance")," for readability")),(0,r.kt)("h2",{id:"balance-updates-of-an-address"},"Balance updates of an address"),(0,r.kt)("p",null,"Here's the query to retrieve the balance updates for a particular address for a specific token on the Ethereum Mainnet blockchain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query MyQuery {\n  EVM(dataset: combined, network: eth) {\n    BalanceUpdates(\n      where: {BalanceUpdate: {Address: {is: "0x3416cf6c708da44db2624d63ea0aaef7113527c6"}}, Block: {Date: {after: "2023-02-15"}}}\n      orderBy: {descending: BalanceUpdate_Amount}\n    ) {\n      Currency {\n        Name\n      }\n      Block {\n        Date\n      }\n      BalanceUpdate {\n        Amount\n        Type\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"In this query, replace 0x3416cf6c708da44db2624d63ea0aaef7113527c6 with the address for which you want to retrieve balance updates, and adjust the date and other parameters to fit your specific needs. The GraphQL link is ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.bitquery.io/ide/Balance-Update-in-a-wallet"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"),": The name of the token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": The timestamp of the update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Amount"),": The amount of the token involved in the balance update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type"),": The type of the balance update ")),(0,r.kt)("p",null,"Here's an example response for the query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"BalanceUpdates": [\n      {\n        "BalanceUpdate": {\n          "Amount": "9901.287338",\n          "Type": "transfer"\n        },\n        "Block": {\n          "Date": "2023-02-27"\n        },\n        "Currency": {\n          "Name": "Tether USD"\n        }\n      },\n      {\n        "BalanceUpdate": {\n          "Amount": "989.010990",\n          "Type": "transfer"\n        },\n        "Block": {\n          "Date": "2023-02-27"\n        },\n        "Currency": {\n          "Name": "Tether USD"\n        }\n      },\n\n')))}u.isMDXComponent=!0}}]);