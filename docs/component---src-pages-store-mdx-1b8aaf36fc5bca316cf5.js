(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{k7Aj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a("Fcif"),r=a("+I+c"),o=(a("mXGw"),a("/FXl")),s=a("BIGe"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/store.mdx"}});var b={_frontmatter:c},l=s.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"store"},"Store"),Object(o.b)("p",null,"Simple observable store that can also be used inside React using Hooks. This observable is accompanied by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/value"}),"@corets/value")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/list"}),"@corets/list"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/store\n")),Object(o.b)("h2",{id:"react"},"React"),Object(o.b)("p",null,"You can use stores inside React using this hooks based integration ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/use-store"}),"@corets/use-store"),"."),Object(o.b)("h2",{id:"localstorage"},"LocalStorage"),Object(o.b)("p",null,"There is also a version of this library that syncs its state to the localStorage: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/local-storage-store"}),"@corets/local-storage-store")),Object(o.b)("h2",{id:"createstore"},Object(o.b)("inlineCode",{parentName:"h2"},"createStore")),Object(o.b)("p",null,"Creates a new instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Store"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createStore } from "@corets/store"\n\nconst store = createStore({ some: "data" })\n')),Object(o.b)("p",null,"Create a new instance without the factory function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { Store } from "@corets/store"\n\nconst store = new Store({ some: "data" })\n')),Object(o.b)("p",null,"Create a new instance with a custom differ:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createStore } from "@corets/store"\n\nconst differ = (oldValue, newValue) => true\nconst store = createStore({ some: "data" }, { differ })\n')),Object(o.b)("h2",{id:"storeget"},Object(o.b)("inlineCode",{parentName:"h2"},"Store.get")),Object(o.b)("p",null,"Retrieve value from store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"store.get()\n")),Object(o.b)("h2",{id:"storeset"},Object(o.b)("inlineCode",{parentName:"h2"},"Store.set")),Object(o.b)("p",null,"Replace value in store:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'store.set({ foo: "bar" })\n')),Object(o.b)("h2",{id:"storeput"},Object(o.b)("inlineCode",{parentName:"h2"},"Store.put")),Object(o.b)("p",null,"Add some values without replacing the initial state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'store.put({ some: "data" })\n')),Object(o.b)("h2",{id:"storelisten"},Object(o.b)("inlineCode",{parentName:"h2"},"Store.listen")),Object(o.b)("p",null,"Listen to any changes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"store.listen((value) => console.log(value))\n")),Object(o.b)("p",null,"Listen with a custom differ:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const differ = (oldValue, newValue) => true\n\nstore.listen((value) => console.log(value), { differ })\n")),Object(o.b)("p",null,"Listen to a subset of data, using a custom mapper:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const mapper = {value} => ({ /* re-map parts of the store */ })\n\nstore.listen((value) => console.log(value), { mapper })\n")),Object(o.b)("h2",{id:"storeuse"},Object(o.b)("inlineCode",{parentName:"h2"},"Store.use")),Object(o.b)("p",null,"Returns value, and a setter function to update the store. This is a convenience method for people used to React's ",Object(o.b)("inlineCode",{parentName:"p"},"useState")," syntax."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createStore } from "@corets/store"\n\nconst [store, setStore] = createStore({ foo: "bar" }).use()\n')))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/store.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-store-mdx-1b8aaf36fc5bca316cf5.js.map