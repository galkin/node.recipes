(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{IXfP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var s=n("Fcif"),a=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("BIGe"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-list.mdx"}});var r={_frontmatter:c},l=o.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(s.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"use-list"},"Use List"),Object(i.b)("p",null,"This package provides a React integration for ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"/list"}),"@corets/list"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-list\n")),Object(i.b)("h2",{id:"uselist"},Object(i.b)("inlineCode",{parentName:"h2"},"useList")),Object(i.b)("p",null,"Use observable lists inside React components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createList } from "@corets/list"\nimport { useList } from "@corets/use-list"\n\nconst globalList = createList(["apple", "oranges"])\n\nconst Example = () => {\n  const list1 = useList(["apples", "oranges"])\n  const list2 = useList(() => createList(["apples", "oranges"]))\n  const list3 = useList(globalList)\n\n  const addItem = () => list1.add("tomatoes")\n\n  return (\n    <div>\n      <button onClick={addItem}>Items: {list1.get().join(",")}</button>\n    </div>\n  )\n}\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-list.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-list-mdx-ef91e034a80c542c30a8.js.map