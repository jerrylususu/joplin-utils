import{e as t,c as r}from"./vendor.a6a3bb3d.js";import{m as e}from"./mdParser.630f12ce.js";t((function(t){const i=[];return r(e.parse(t),(t=>{var r;if("link"!==t.type&&"image"!==t.type)return;const e=t;e.url.startsWith(":/")&&i.push({id:e.url.slice(2),title:"link"===e.type?null!=(r=e.title)?r:e.children[0].value:e.alt})})),i}));