(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{a8ii:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("Fcif"),r=a("+I+c"),u=(a("mXGw"),a("/FXl")),o=a("BIGe"),c=(a("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-query.mdx"}});var b={_frontmatter:c},l=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(u.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"use-query"},"Use Query"),Object(u.b)("p",null,"Convenient hooks for url query segments, built for ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactrouter.com/web/guides/quick-start"}),Object(u.b)("inlineCode",{parentName:"a"},"react-router")),". Working with queries is now as easy as using ",Object(u.b)("inlineCode",{parentName:"p"},"useState"),"."),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-query\n")),Object(u.b)("h2",{id:"quick-start"},"Quick Start"),Object(u.b)("p",null,"Hook into URL query and update it easily from withing your component:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { useQuery } from "@corets/use-query"\n\nconst Example = () => {\n  const query = useQuery({\n    page: 1,\n    order: "asc"\n  })\n\n  // update page and also reset order to the initial value "asc"\n  const handleGoToNextPage = () => query.set({ page: query.page + 1 })\n  // update order, but keep page as is\n  const handleToggleSort = () => query.put({ order: query.order === "asc" ? "desc" : "asc" })\n\n  return (\n    <div>\n      <div>Page: {query.get().page}</div>\n      <div>Order: {query.get().order}</div>\n      <button onClick={handleGoToNextPage}>Go to next page</button>\n      <button onClick={handleToggleSort}>Change sorting order</button>\n    </div>\n  )\n}\n')),Object(u.b)("h2",{id:"usequery"},Object(u.b)("inlineCode",{parentName:"h2"},"useQuery")),Object(u.b)("p",null,"Create a query object to control all the query parameters, returns an instance of ",Object(u.b)("a",Object(n.a)({parentName:"p"},{href:"#queryget"}),Object(u.b)("inlineCode",{parentName:"a"},"Query")),":"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'const query = useQuery({ some: "value" })\n')),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Note:")," It accepts an object with initial values."),Object(u.b)("p",null,"By default, parameters like ",Object(u.b)("inlineCode",{parentName:"p"},'""'),", ",Object(u.b)("inlineCode",{parentName:"p"},"null"),", ",Object(u.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(u.b)("inlineCode",{parentName:"p"},"0")," and ",Object(u.b)("inlineCode",{parentName:"p"},'"0"')," are stripped, the default value will be used instead. Updating query with one of those values won't change anything. You can alter this behaviour by providing a second argument, overriding values that should be stripped away:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const query = useQuery({ some: "value" }, ["", null, undefined])\n')),Object(u.b)("h2",{id:"queryget"},Object(u.b)("inlineCode",{parentName:"h2"},"Query.get")),Object(u.b)("p",null,"Returns all query parameters:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"query.get()\n")),Object(u.b)("h2",{id:"queryset"},Object(u.b)("inlineCode",{parentName:"h2"},"Query.set")),Object(u.b)("p",null,"Replace all query parameters with the new ones:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'query.set({ some: "value" })\n')),Object(u.b)("h2",{id:"queryput"},Object(u.b)("inlineCode",{parentName:"h2"},"Query.put")),Object(u.b)("p",null,"Override some query parameters, without replacing all of them:"),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'query.put({ some: "value" })\n')))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-query.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-query-mdx-34d10b4feed8635777c2.js.map