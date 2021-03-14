(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{iP1V:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("Fcif"),o=a("+I+c"),r=(a("mXGw"),a("/FXl")),c=a("TjRS"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/local-storage-list.mdx"}});var l={_frontmatter:s},i=c.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(i,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"local-storage-list"},"Local Storage List"),Object(r.b)("p",null,"Built on top of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/list"}),"@corets/list")," package and provides an integration with ",Object(r.b)("inlineCode",{parentName:"p"},"localStorage"),". Can be used as a drop in replacement for lists from the other package."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/local-storage-list\n")),Object(r.b)("h2",{id:"react"},"React"),Object(r.b)("p",null,"Example of how to use lists in React:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createLocalStorageList } from "@corets/local-storage-list"\nimport { useList } from "@corets/use-list"\n\nconst Example = () => {\n  const list = useList(() => createLocalStorageList("storageKey", ["apple", "banana"]))\n\n  const addFruit = () => list.add("pineapple")\n\n  return (\n    <div>\n      Fruits: {list.get().join(",")}\n      <button onClick={addFruit}>Add fruit</button>\n    </div>\n  )\n}\n')),Object(r.b)("h2",{id:"createlocalstoragelist"},Object(r.b)("inlineCode",{parentName:"h2"},"createLocalStorageList")),Object(r.b)("p",null,"Create a new list:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createLocalStorageList } from "@corets/local-storage-list"\n\nconst list = createLocalStorageList("storageKey", ["some", "data"])\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/local-storage-list.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-local-storage-list-mdx-f74c18853c8c333d967b.js.map