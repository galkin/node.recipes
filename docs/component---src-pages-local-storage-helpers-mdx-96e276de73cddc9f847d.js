(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5ZKG":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return i}));var o=t("Fcif"),n=t("+I+c"),r=(t("mXGw"),t("/FXl")),l=t("TjRS"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/local-storage-helpers.mdx"}});var s={_frontmatter:c},b=l.a;function i(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(b,Object(o.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"localstorage-helpers"},"LocalStorage Helpers"),Object(r.b)("p",null,"Various helpers related to ",Object(r.b)("inlineCode",{parentName:"p"},"localStorage")," specific functionality."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/local-storage-helpers\n")),Object(r.b)("h2",{id:"readlocalstorage"},Object(r.b)("inlineCode",{parentName:"h2"},"readLocalStorage")),Object(r.b)("p",null,"Reads a value from ",Object(r.b)("inlineCode",{parentName:"p"},"localStorage"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import { readLocalStorage } from "@corets/local-storage-helpers"\n\ntype AuthData = { token?: string }\n\nconst defaultData: AuthData = { token: undefined }\n\nconst data = readLocalStorage<AuthData>("auth", defaultData)\n')),Object(r.b)("h2",{id:"writelocalstorage"},Object(r.b)("inlineCode",{parentName:"h2"},"writeLocalStorage")),Object(r.b)("p",null,"Writes a value to ",Object(r.b)("inlineCode",{parentName:"p"},"localStorage"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import { writeLocalStorage } from "@corets/local-storage-helpers"\n\nconst data = { token: "foo" }\n\nwriteLocalStorage("auth", data)\n')))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/local-storage-helpers.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-local-storage-helpers-mdx-96e276de73cddc9f847d.js.map