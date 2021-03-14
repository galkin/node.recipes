(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2J9X":function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t("Fcif"),o=t("+I+c"),a=(t("mXGw"),t("/FXl")),s=t("TjRS"),i=t("SxAF"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/promise-helpers.mdx"}});var p={_frontmatter:c},m=s.a;function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(m,Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)(i.a,{repository:"promise-helpers",mdxType:"Header"}),Object(a.b)("h1",{id:"promise-helpers"},"Promise Helpers"),Object(a.b)("p",null,"Various helpers related to promise specific functionality."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/promise-helpers\n")),Object(a.b)("h2",{id:"createtimeout"},Object(a.b)("inlineCode",{parentName:"h2"},"createTimeout")),Object(a.b)("p",null,"A promisified version of the ",Object(a.b)("inlineCode",{parentName:"p"},"setTimeout")," function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createTimeout } from "@corets/promise-helpers"\n\nawait createTimeout(2000)\n')),Object(a.b)("h2",{id:"createpromise"},Object(a.b)("inlineCode",{parentName:"h2"},"createPromise")),Object(a.b)("p",null,"Create a promise that you can pass around without specifying the resolve function upfront:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createPromise } from "@corets/promise-helpers"\n\nconst runWhenResolved = async (promise: Promise<any>) => {\n  try {\n    const result =  await promise\n\n    console.log("promise resolved with:", result)\n  } catch (err) {\n    console.error("an error was thrown from promise:", err)\n  }\n}\n\nconst promise = createPromise()\n\n// pass promise to another function\nrunWhenResolved(promise)\n\npromise.resolve("some data")\n// or\npromise.reject("reason...")\n')))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/promise-helpers.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-promise-helpers-mdx-83d9f9897037b5a90f73.js.map