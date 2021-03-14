(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{rr50:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t("Fcif"),o=t("+I+c"),i=(t("mXGw"),t("/FXl")),a=t("BIGe"),c=(t("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-form-binder.mdx"}});var b={_frontmatter:c},m=a.a;function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"use-form-binder"},"Use Form Binder"),Object(i.b)("p",null,"Input binders for vanilla HTML input element for the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/form"}),"@corets/form")," package."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-form-binder\n")),Object(i.b)("h2",{id:"useformbinder"},Object(i.b)("inlineCode",{parentName:"h2"},"useFormBinder")),Object(i.b)("p",null,"Create an input binder for vanilla HTML input elements:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createForm } from "@corets/form"\nimport { useForm } from "@corets/use-form"\nimport { useFormBinder } from "@corets/use-form-binder"\n\nconst Example = () => {\n  const form = useForm(() => createForm({\n    input: "text",\n    checkbox: true,\n    radio: "second",\n    select: "second",\n  }))\n\n  const bind = useFormBinder(form)\n\n  return (\n    <form { ...bind.form() }>\n      <input type="text" { ...bind.input("input") } />\n\n      <input type="checkbox" { ...bind.checkbox("checkbox") } />\n\n      <input type="radio" { ...bind.radio("radio", "first") } />\n      <input type="radio" { ...bind.radio("radio", "second") } />\n\n      <select { ...bind.select("select") }>\n        <option value="first">Option 1</option>\n        <option value="second">Option 2</option>\n        <option value="third">Option 3</option>\n      </select>\n\n      <button { ...bind.submit() }>Submit</button>\n    </form>\n  )\n}\n')))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-form-binder.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-form-binder-mdx-ae43047b12f63841064d.js.map