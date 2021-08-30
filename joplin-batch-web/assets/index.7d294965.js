import{C as e,b as t,m as s,h as r,k as o,B as n,l as a,n as i}from"./vendor.bc4cc7a8.js";import{f as c,n as l}from"./index.esm.84052b48.js";import{n as u,j as m,a as d,i as p}from"./joplinApiGenerator.4a91a44e.js";import{P as g}from"./PromiseUtil.6ae62114.js";import{p as f}from"./immer.esm.4aedb65c.js";import{i as h}from"./index.f077882a.js";const x=new class{constructor(e){this.config=e}getUnusedResource(){return g.warpOnEvent((async e=>{const t=await u.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let s=0;return await c.filter(t,l((async r=>{const o=!(await this.checkUsed(r.id));return e.process({title:r.title,all:t.length,rate:s++}),o}),10))}))}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}(m);const w=function(e){const t=e();return e=>`http://localhost:${null==t?void 0:t.port}/resources/${e}/file?token=${null==t?void 0:t.token}`}((()=>d(localStorage).settings)),y=()=>{const[l,u]=e.exports.useState([]),[d,g]=e.exports.useState(""),[y,E]=t((async()=>{try{const e=await x.getUnusedResource().on("process",(e=>{g(h.t("unusedResource.msg.process",e))}));console.log("list: ",e),u(e)}catch(e){s.error(h.t("unusedResource.msg.error"))}}));const[k,R]=t((async()=>{await c.forEach(l,(async e=>{await m.resourceApi.remove(e.id)})),u([])}),[l]);return e.exports.createElement(r,{title:h.t("unusedResource.title"),extra:e.exports.createElement(o,null,e.exports.createElement(n,{onClick:E},h.t("unusedResource.action.check")),e.exports.createElement(n,{disabled:0===l.length,danger:!0,loading:k.loading,onClick:R},h.t("unusedResource.action.removeAll")))},e.exports.createElement(a,{dataSource:l,locale:{emptyText:h.t("unusedResource.listEmptyText")},renderItem:t=>e.exports.createElement(a.Item,{key:t.id,actions:[e.exports.createElement(n,{onClick:()=>async function(e){u(f((t=>t.filter((t=>t.id!==e))))),await m.resourceApi.remove(e)}(t.id)},h.t("unusedResource.action.remove")),e.exports.createElement(n,{onClick:()=>async function(e){await p(w(e))}(t.id)},h.t("unusedResource.action.download"))],extra:t.mime.startsWith("image/")&&e.exports.createElement(i,{src:w(t.id),width:300})},e.exports.createElement(a.Item.Meta,{title:t.title})),loading:{spinning:y.loading,tip:d}}))};export{y as default};
