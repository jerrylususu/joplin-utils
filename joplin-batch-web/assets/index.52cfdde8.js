import{C as e,L as t,M as r,a as n,r as o,R as s,b as a,H as l}from"./vendor.a6a3bb3d.js";let p;const m={},c=function(e,t){if(!t)return e();if(void 0===p){const e=document.createElement("link").relList;p=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":p,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},i=[{path:"/",component:e.exports.lazy((()=>c((()=>import("./index.c916da67.js")),["./assets/index.c916da67.js","./assets/vendor.a6a3bb3d.js"]))),exact:!0,title:"首页"},{path:"/settings",component:e.exports.lazy((()=>c((()=>import("./index.89f75305.js")),["./assets/index.89f75305.js","./assets/vendor.a6a3bb3d.js","./assets/joplinApiGenerator.53394404.js"]))),title:"设置"},{path:"/unusedResource",component:e.exports.lazy((()=>c((()=>import("./index.4a63df85.js")),["./assets/index.4a63df85.js","./assets/vendor.a6a3bb3d.js","./assets/index.esm.13361365.js","./assets/joplinApiGenerator.53394404.js","./assets/PromiseUtil.44f15fd4.js","./assets/immer.esm.6f40434d.js"]))),title:"检查未使用的附件资源"},{path:"/notFoundResource",component:e.exports.lazy((()=>c((()=>import("./index.5c628a4e.js")),["./assets/index.5c628a4e.js","./assets/index.f01a236b.css","./assets/vendor.a6a3bb3d.js","./assets/joplinApiGenerator.53394404.js","./assets/index.esm.13361365.js","./assets/PromiseUtil.44f15fd4.js"]))),title:"检查笔记中失效的资源引用"},{path:"/convertExternalLink",component:e.exports.lazy((()=>c((()=>import("./index.4955341f.js")),["./assets/index.4955341f.js","./assets/index.d60ec32e.css","./assets/vendor.a6a3bb3d.js","./assets/joplinApiGenerator.53394404.js","./assets/index.esm.13361365.js","./assets/immer.esm.6f40434d.js"]))),title:"转换外部链接为内部引用笔记"}];var d="_app_bmerb_1",_="_logo_bmerb_9",E="_sider_bmerb_21",u="_main_bmerb_23";const x=()=>e.exports.createElement(t,{className:d},e.exports.createElement(t.Sider,{className:E},e.exports.createElement("h2",{className:_},"Joplin Batch Web"),e.exports.createElement(r,null,i.map((t=>e.exports.createElement(r.Item,{key:t.path},e.exports.createElement(n,{to:t.path},t.title)))))),e.exports.createElement(t.Content,{className:u},e.exports.createElement(e.exports.Suspense,{fallback:"loading..."},o(i))));s.render(a.createElement(a.StrictMode,null,a.createElement(l,null,a.createElement(x,null))),document.getElementById("root"));export{c as _};
