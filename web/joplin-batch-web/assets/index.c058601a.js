var e,t,n,r,o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>i(e,s(t));import{i as h,C as m,e as f,u as g,a as v,b as x,c as y,d as b,f as k,g as w,h as E,F as j,j as A,I as _,B as R,m as I,k as N,l as S,n as O,o as T,S as L,L as F,p as C,q as W,r as P,w as $,s as D,T as M,t as U,v as q,x as B,y as J,M as V,z,A as H,D as K,H as Z,R as Q,E as G}from"./vendor.a7508524.js";var X="_app_18eob_1",Y="_logo_18eob_9",ee="_sider_18eob_21",te="_main_18eob_23",ne="_header_18eob_41";const re=new h;var oe="_home_nvat1_1";function ie(e){return{[f.En]:"/en-US/",[f.ZhCN]:"/zh-CN/","/zh-CN/":f.ZhCN,"/en-US/":f.En}[e]}function se(){const e=g(),t=v();return m.exports.useMemo((()=>{const n=/(\/.+?\/)/.exec(e.pathname);return n?ie(n[0]):(t.push(ie(f.En)),f.En)}),[t,e.pathname])}const ae=new x,ce=()=>{const e=se();return m.exports.createElement(y,null,m.exports.createElement("div",{className:oe,dangerouslySetInnerHTML:{__html:ae.render(e===f.En?"# joplin-batch-web\r\n\r\n## Overview\r\n\r\nHandles some batch operations that are not supported by Joplin itself, and presents them as a visual interface.\r\n\r\n- [x] Check for unreferenced attachment resources\r\n      Some unused attachment resources are not cleaned up in time\r\n- [x] Check for referenced attachment resources that do not exist\r\n      Some attachments that are being used may not exist for various reasons\r\n- [x] Convert external links to internal note references\r\n      Would like to be able to convert previous blog links to internal `:/id` links to ensure they never expire\r\n- [x] Check for notes that don't have a parent directory (usually an error)\r\n\r\n### Getting Started\r\n\r\n1. open joplin desktop version\r\n2. Enable the web clipper\r\n3. Fill out the configuration in the [Settings](https://joplin-utils.rxliuli.com/joplin-batch-web/#/settings) page\r\n4. Navigate to the relevant function page\r\n\r\n![guide](https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif)\r\n\r\n> If you want to participate in the development or run locally, you can refer to [Participate in the project](./docs/dev.md)\r\n\r\n## FAQ\r\n\r\n### Why not use the cli form\r\n\r\nThe cli form is not very suitable for this scenario, e.g. when you need to preview unusual attachments or notes, which is more troublesome at the command line.\r\n\r\n### Will it record my note data\r\n\r\nThe website works locally, there is no back-end server, if you are still worried, you can check the source code [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web)\r\n":"# joplin-batch-web\r\n\r\n处理一些 Joplin 本身不支持的批量操作，以可视化界面的形式展现出来。\r\n\r\n- [x] 检查是否存在没有引用的附件资源\r\n      一些没有使用的附件资源没有被及时清理\r\n- [x] 检查引用的附件资源不存在的情况\r\n      一些正在使用的附件可能由于各种原因不存在了\r\n- [x] 转换外部链接为内部笔记引用\r\n      希望能够将之前的 blog 链接转换为内部的 `:/id` 链接以保证永不过期\r\n- [x] 检查是否存在没有父级目录的笔记（一般是错误）\r\n\r\n### 开始\r\n\r\n1. 打开 joplin 桌面版\r\n2. 启用网页剪辑器\r\n3. 在 [设置](https://joplin-utils.rxliuli.com/joplin-batch-web/#/settings) 页面填写配置\r\n4. 导航到相关功能页面\r\n\r\n![guide](https://github.com/rxliuli/joplin-utils/raw/master/apps/joplin-batch-web/docs/images/guide.gif)\r\n\r\n> 如果您希望参与开发或在本地运行，可以参考 [参与项目](./docs/zh/dev.md)\r\n\r\n## FAQ\r\n\r\n### 为什么不使用 cli 的形式\r\n\r\ncli 的形式不太适合这种场景，例如需要预览异常的附件或笔记，在命令行下比较麻烦。\r\n\r\n### 它会记录我的笔记数据么\r\n\r\n网站是全本地工作的，没有后端服务器，如果你仍然担忧，可以检查源代码 [joplin-batch-web](https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-batch-web)\r\n")}}))};let le;const ue={},de=function(e,t){if(!t||0===t.length)return e();if(void 0===le){const e=document.createElement("link").relList;le=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in ue)return;ue[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":le,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function he(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}class me{static pageToAllList(e,t){return he(this,void 0,void 0,(function*(){const n=[];for(let r=1,o=!0;o;r++){const i=yield e(Object.assign(Object.assign({},t),{page:r,limit:this.MaxLimit}));o=i.has_more,n.push(...i.items)}return n}))}}me.MaxLimit=100;class fe{constructor(e){this.ajax=e}list(e){return he(this,void 0,void 0,(function*(){return this.ajax.get("/notes",e)}))}get(e,t){return he(this,void 0,void 0,(function*(){return this.ajax.get(`/notes/${e}`,{fields:t})}))}create(e){return he(this,void 0,void 0,(function*(){return this.ajax.post("/notes",e)}))}update(e){return he(this,void 0,void 0,(function*(){const{id:t}=e,n=pe(e,["id"]);return yield this.ajax.put(`/notes/${t}`,n)}))}remove(e){return he(this,void 0,void 0,(function*(){return this.ajax.delete(`/notes/${e}`)}))}tagsById(e){return me.pageToAllList((e=>{var{id:t}=e,n=pe(e,["id"]);return this.ajax.get(`/notes/${t}/tags`,Object.assign({},n))}),{id:e})}resourcesById(e,t=["id","title"]){return he(this,void 0,void 0,(function*(){return me.pageToAllList((e=>{var{id:n}=e,r=pe(e,["id"]);return this.ajax.get(`/notes/${n}/resources`,Object.assign({fields:t},r))}),{id:e})}))}}class ge{constructor(e){this.ajax=e}list(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.get("/tags",e)}))}get(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.get(`/tags/${e}`)}))}create(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.post("/tags",e)}))}update(e){return he(this,void 0,void 0,(function*(){const{id:t}=e,n=pe(e,["id"]);return yield this.ajax.post(`/tags/${t}`,n)}))}remove(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/tags/${e}`)}))}notesByTagId(e){var{id:t}=e,n=pe(e,["id"]);return he(this,void 0,void 0,(function*(){return yield this.ajax.get(`/tags/${t}/notes`,n)}))}addTagByNoteId(e,t){return he(this,void 0,void 0,(function*(){return yield this.ajax.post(`/tags/${e}/notes/`,{id:t})}))}removeTagByNoteId(e,t){return he(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/tags/${e}/notes/${t}`)}))}}var ve,xe;(xe=ve||(ve={}))[xe.Note=1]="Note",xe[xe.Folder=2]="Folder",xe[xe.Setting=3]="Setting",xe[xe.Resource=4]="Resource",xe[xe.Tag=5]="Tag",xe[xe.NoteTag=6]="NoteTag",xe[xe.Search=7]="Search",xe[xe.Alarm=8]="Alarm",xe[xe.MasterKey=9]="MasterKey",xe[xe.ItemChange=10]="ItemChange",xe[xe.NoteResource=11]="NoteResource",xe[xe.ResourceLocalState=12]="ResourceLocalState",xe[xe.Revision=13]="Revision",xe[xe.Migration=14]="Migration",xe[xe.SmartFilter=15]="SmartFilter";class ye{constructor(e){this.ajax=e}search(e){return he(this,void 0,void 0,(function*(){ye.TypeEnumMap[8]="";const{type:t}=e,n=pe(e,["type"]);return this.ajax.get("/search",Object.assign(Object.assign({},n),{type:ye.TypeEnumMap[t]}))}))}}ye.TypeEnumMap={[ve.Note]:"note",[ve.Folder]:"folder",[ve.Setting]:"setting",[ve.Resource]:"resource",[ve.Tag]:"tag",[ve.NoteTag]:"note_tag",[ve.Search]:"search",[ve.Alarm]:"alarm",[ve.MasterKey]:"master_key",[ve.ItemChange]:"item_change",[ve.NoteResource]:"note_resource",[ve.ResourceLocalState]:"resource_local_state",[ve.Revision]:"revision",[ve.Migration]:"migration",[ve.SmartFilter]:"smart_filter"};class be{constructor(e){this.ajax=e}pingPort(e){return he(this,void 0,void 0,(function*(){return"JoplinClipperServer"===(yield this.ajax.request({url:`http://localhost:${e}/ping`,method:"get",responseType:"text"}))}))}static range(e,t){const n=[];for(let r=e;r<t;r++)n.push(r);return n}scan(){return he(this,void 0,void 0,(function*(){const e=yield Promise.all(be.range(41184,41195).filter((e=>he(this,void 0,void 0,(function*(){try{return yield this.pingPort(e)}catch(t){return!1}})))));if(0===e.length)throw new Error("Joplin's port is not scanned");return e[0]}))}ping(){return he(this,void 0,void 0,(function*(){return this.pingPort(this.ajax.config.port)}))}}class ke{constructor(e){this.ajax=e}list(e){return he(this,void 0,void 0,(function*(){return this.ajax.get("/folders",e)}))}listAll(){return he(this,void 0,void 0,(function*(){return this.ajax.get("/folders",{as_tree:1})}))}get(e){return he(this,void 0,void 0,(function*(){return this.ajax.get(`/folders/${e}`)}))}create(e){return he(this,void 0,void 0,(function*(){return this.ajax.post("/folders",e)}))}update(e){return he(this,void 0,void 0,(function*(){const{id:t}=e,n=pe(e,["id"]);return this.ajax.put(`/folders/${t}`,n)}))}remove(e){return he(this,void 0,void 0,(function*(){return this.ajax.delete(`/folders/${e}`)}))}notesByFolderId(e,t){return he(this,void 0,void 0,(function*(){return yield me.pageToAllList((e=>{var{id:t}=e,n=pe(e,["id"]);return this.ajax.get(`/folders/${t}/notes`,n)}),{id:e,fields:t})}))}}const we="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||{};class Ee{constructor(e){this.ajax=e}list(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.get("/resources",e)}))}get(e,t){return he(this,void 0,void 0,(function*(){return yield this.ajax.get(`/resources/${e}`,{fields:t})}))}create(e){return he(this,void 0,void 0,(function*(){"undefined"==typeof FormData&&Reflect.set(we,"FormData",(yield de((()=>import("./browser.53cd8f92.js").then((function(e){return e.b}))),[])).default);const t=new FormData;return t.append("props",JSON.stringify({title:e.title})),t.append("data",e.data),yield this.ajax.postFormData("/resources",{props:JSON.stringify({title:e.title}),data:e.data})}))}update(e){return he(this,void 0,void 0,(function*(){const{id:t}=e,n=pe(e,["id"]);return yield this.ajax.put(`/resources/${t}`,n)}))}remove(e){return he(this,void 0,void 0,(function*(){return yield this.ajax.delete(`/resources/${e}`)}))}fileByResourceId(e){return he(this,void 0,void 0,(function*(){const t=yield this.ajax.get(`/resources/${e}/file`,{},{responseType:"arraybuffer"});return Buffer.from(t,"binary")}))}}var je,Ae;!function(e){e.OpenAndWatch="openAndWatch",e.StopWatching="stopWatching",e.NoteIsWatched="noteIsWatched"}(je||(je={}));class _e{constructor(e){this.ajax=e}openAndWatch(e){return this.baseAction(je.OpenAndWatch,e)}stopWatching(e){return this.baseAction(je.StopWatching,e)}noteIsWatched(e){return he(this,void 0,void 0,(function*(){return this.isWatch(e)}))}isWatch(e){return he(this,void 0,void 0,(function*(){return this.baseAction(je.NoteIsWatched,e)}))}baseAction(e,t){return he(this,void 0,void 0,(function*(){return this.ajax.post("/services/externalEditWatcher",{action:e,noteId:t})}))}}!function(e){e.OpenAndWatch="openAndWatch",e.Watch="watch",e.StopWatching="stopWatching",e.NoteIsWatched="isWatched"}(Ae||(Ae={}));class Re{constructor(e){this.ajax=e}openAndWatch(e){return this.baseAction(Ae.OpenAndWatch,e)}watch(e){return this.baseAction(Ae.Watch,e)}stopWatching(e){return this.baseAction(Ae.StopWatching,e)}noteIsWatched(e){return he(this,void 0,void 0,(function*(){return this.baseAction(Ae.NoteIsWatched,e)}))}baseAction(e,t){return he(this,void 0,void 0,(function*(){return this.ajax.post("/services/resourceEditWatcher",{action:e,resourceId:t})}))}}class Ie{constructor(e){this.ajax=e,this.noteApi=new fe(this.ajax)}rename(e,t){return this.noteApi.update({id:e,title:t})}move(e,t){return this.noteApi.update({id:e,parent_id:t})}toggleTodo(e,t){return he(this,void 0,void 0,(function*(){const n=yield this.noteApi.get(e,["id","is_todo","todo_completed"]);n.is_todo&&(yield this.noteApi.update({id:n.id,todo_completed:t||(0===n.todo_completed?1:0)}))}))}}class Ne{constructor(e){this.ajax=e,this.folderApi=new ke(this.ajax)}rename(e,t){return this.folderApi.update({id:e,title:t})}path(e){return he(this,void 0,void 0,(function*(){if(!e)return[];const t=yield this.folderApi.get(e);return t.parent_id?(yield this.path(t.parent_id)).concat([t]):[t]}))}move(e,t){return he(this,void 0,void 0,(function*(){if(e!==t){if((yield this.path(t)).some((t=>e===t.id)))throw new Error("Cannot move directory to subdirectory");yield this.folderApi.update({id:e,parent_id:t})}}))}}class Se{constructor(){this.port=41184,this.token=""}}const Oe={method:"get",data:void 0,headers:{},responseType:"json"};class Te{constructor(e){this.config=e}request(e){return he(this,void 0,void 0,(function*(){return"undefined"==typeof fetch&&Reflect.set(we,"fetch",(yield de((()=>import("./index.5f8174e7.js")),["assets/index.5f8174e7.js","assets/vendor.a7508524.js","assets/vendor.e21f4386.css"])).default),"undefined"==typeof FormData&&Reflect.set(we,"FormData",(yield de((()=>import("./browser.53cd8f92.js").then((function(e){return e.b}))),[])).default),(yield k.request(Object.assign(Object.assign({},Oe),e))).data}))}baseUrl(e,t){const n=w.stringify(Object.assign(Object.assign({},t),this.config),{arrayFormat:"comma"});return`http://localhost:${this.config.port}${e}?${n}`}get(e,t,n){return this.request(Object.assign(Object.assign({url:this.baseUrl(e,t)},n),{method:"get"}))}post(e,t,n){return this.request(Object.assign(Object.assign({url:this.baseUrl(e),data:t},n),{method:"post"}))}put(e,t,n){return this.request(Object.assign(Object.assign({url:this.baseUrl(e),data:t},n),{method:"put"}))}delete(e,t,n){return this.request(Object.assign(Object.assign({url:this.baseUrl(e),data:t},n),{method:"delete"}))}postFormData(e,t){return he(this,void 0,void 0,(function*(){"undefined"==typeof fetch&&Reflect.set(we,"fetch",(yield de((()=>import("./index.5f8174e7.js")),["assets/index.5f8174e7.js","assets/vendor.a7508524.js","assets/vendor.e21f4386.css"])).default),"undefined"==typeof FormData&&Reflect.set(we,"FormData",(yield de((()=>import("./browser.53cd8f92.js").then((function(e){return e.b}))),[])).default);const n=new FormData;Object.entries(t).forEach((([e,t])=>n.append(e,t)));const r=yield fetch(this.baseUrl(e),{method:"post",body:n});return yield r.json()}))}}class Le{constructor(){this.config=new Se,this.ajax=new Te(this.config),this.folderApi=new ke(this.ajax),this.folderExtApi=new Ne(this.ajax),this.joplinApi=new be(this.ajax),this.noteActionApi=new _e(this.ajax),this.noteApi=new fe(this.ajax),this.noteExtApi=new Ie(this.ajax),this.resourceActionApi=new Re(this.ajax),this.resourceApi=new Ee(this.ajax),this.searchApi=new ye(this.ajax),this.tagApi=new ge(this.ajax)}set token(e){this.config.token=e}set port(e){this.config.port=e}}const Fe=new Le;Object.entries(Fe).forEach((([e,t])=>{Reflect.set(Fe,e,b.bindMethodThis(t))}));const Ce=new Le,We=E(localStorage);Ce.token=null!=(t=null==(e=We.settings)?void 0:e.token)?t:"",Ce.port=null!=(r=null==(n=We.settings)?void 0:n.port)?r:41184;const Pe=()=>{var e;const[t]=j.useForm();const[n,r]=A("settings");return m.exports.createElement(y,null,m.exports.createElement("h2",null,re.t("settings.title")),m.exports.createElement(j,{form:t,onFinish:async function(){if(!(await t.validateFields()))return;const e=t.getFieldsValue();console.log("onFinish: ",e);try{Ce.token=e.token,Ce.port=e.port,await Ce.noteApi.list({limit:1}),r(e),I.success(re.t("settings.msg.success"))}catch(n){console.error(n),I.error(re.t("settings.msg.error"))}},initialValues:{token:null==n?void 0:n.token,port:null!=(e=null==n?void 0:n.port)?e:41184}},m.exports.createElement(j.Item,{name:"token",label:re.t("settings.form.token"),rules:[{required:!0}]},m.exports.createElement(_,{type:"password"})),m.exports.createElement(j.Item,{name:"port",label:re.t("settings.form.port"),rules:[{required:!0}]},m.exports.createElement(_,{type:"number"})),m.exports.createElement(j.Item,null,m.exports.createElement(R,{type:"primary",htmlType:"submit"},re.t("settings.action.submit")))))};class $e{static warpOnEvent(e){const t={},n=N(0).then((()=>new Promise(((n,r)=>{try{n(e(t))}catch(o){r(o)}}))));return Reflect.set(n,"on",((e,r)=>(t[e]=r,n))),n}}const De=new class{constructor(e){this.config=e}getUnusedResource(){return $e.warpOnEvent((async e=>{const t=await me.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let n=0;return await S.filter(t,O((async r=>{const o=!(await this.checkUsed(r.id));return e.process({title:r.title,all:t.length,rate:n++}),o}),10))}))}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}(Ce);const Me=function(e){const t=e();return e=>`http://localhost:${null==t?void 0:t.port}/resources/${e}/file?token=${null==t?void 0:t.token}`}((()=>E(localStorage).settings)),Ue=()=>{const[e,t]=m.exports.useState([]),[n,r]=m.exports.useState(""),[o,i]=T((async()=>{try{const e=await De.getUnusedResource().on("process",(e=>{r(re.t("unusedResource.msg.process",e))}));console.log("list: ",e),t(e)}catch(e){I.error(re.t("unusedResource.msg.error"))}}));const[s,a]=T((async()=>{await S.forEach(e,(async e=>{await Ce.resourceApi.remove(e.id)})),t([])}),[e]);return m.exports.createElement(y,{title:re.t("unusedResource.title"),extra:m.exports.createElement(L,null,m.exports.createElement(R,{onClick:i},re.t("unusedResource.action.check")),m.exports.createElement(R,{disabled:0===e.length,danger:!0,loading:s.loading,onClick:a},re.t("unusedResource.action.removeAll")))},m.exports.createElement(F,{dataSource:e,locale:{emptyText:re.t("unusedResource.listEmptyText")},renderItem:e=>m.exports.createElement(F.Item,{key:e.id,actions:[m.exports.createElement(R,{onClick:()=>async function(e){t(W((t=>t.filter((t=>t.id!==e))))),await Ce.resourceApi.remove(e)}(e.id)},re.t("unusedResource.action.remove")),m.exports.createElement(R,{onClick:()=>async function(e){await P(Me(e))}(e.id)},re.t("unusedResource.action.download"))],extra:e.mime.startsWith("image/")&&m.exports.createElement(C,{src:Me(e.id),width:300})},m.exports.createElement(F.Item.Meta,{title:e.title})),loading:{spinning:o.loading,tip:n}}))};function qe(){return new Worker("./assets/parseInternalLink.81e817aa.js",{type:"module"})}var Be="_subList_1op68_1";const Je=new class{constructor(e){this.config=e,this.parseInternalLinkWorker=$(new qe)}check(){return $e.warpOnEvent((async e=>{e.load("开始加载所有附件资源");const t=new Set((await this.getAllResourceIdList()).map((e=>e.id)));e.load("开始加载所有笔记");const n=await me.pageToAllList(this.config.noteApi.list.bind(this.config.noteApi),{fields:["id","title","body","user_updated_time"]}),r=n.reduce(((e,t)=>e.add(t.id)),new Set);e.load("开始解析所有笔记");let o=0;return(await S.map(n,(async t=>{const r=p(d({},t),{resources:await this.parseInternalLinkWorker(t.body)});return o++,e.parse({rate:o,all:n.length,title:t.title||"未知文件名"}),r}))).filter((e=>(e.resources=e.resources.filter((e=>!t.has(e.id)&&!r.has(e.id))),0!==e.resources.length))).map((e=>{var t=e,{body:n}=t;return((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(t,["body"])}))}))}async getAllResourceIdList(){return await me.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]})}}(Ce),Ve=()=>{const[e,t]=m.exports.useState([]),[n,r]=m.exports.useState(""),[o,i]=T((async()=>{const e=await Je.check().on("load",(e=>r(e))).on("parse",(e=>{r(`[${e.rate}/${e.all}] ${e.title}`)}));console.log("list: ",e),t(e)}));return m.exports.createElement(y,{title:re.t("notFoundResource.title"),extra:m.exports.createElement(R,{onClick:i},re.t("notFoundResource.action.check"))},m.exports.createElement(F,{dataSource:e,locale:{emptyText:re.t("notFoundResource.listEmptyText")},renderItem:e=>m.exports.createElement(F.Item,{key:e.id,actions:[m.exports.createElement(R,{onClick:()=>async function(e){await Ce.noteActionApi.openAndWatch(e)}(e.id)},re.t("notFoundResource.action.open"))]},m.exports.createElement(F.Item.Meta,{title:e.title,description:m.exports.createElement(F,{className:Be,dataSource:e.resources,renderItem:e=>m.exports.createElement(F.Item,{key:e.id},m.exports.createElement(F.Item.Meta,{title:e.title||re.t("notFoundResource.unknownFileName",e)}))})})),loading:{spinning:o.loading,tip:n}}))};function ze(){return new Worker("./assets/MarkdownLinkUtil.5ee19235.js",{type:"module"})}class He{constructor(){this.markdownLinkUtilWorker=$(new ze)}async search(e){const t=await me.pageToAllList(Ce.searchApi.search.bind(Ce.searchApi),{query:`body:"${e}"`,fields:["id","title","body","user_updated_time"],order_by:"user_updated_time",order_dir:"DESC"});return await S.map(t,(async t=>{const n=await this.markdownLinkUtilWorker.parseLink(t.body);return Reflect.deleteProperty(t,"body"),p(d({},t),{urls:await He.mapContentLinks(n,e)})}))}static mapContentLinks(e,t){return S.map(e.filter((e=>e.url.startsWith(t))),(async e=>{if(!e.title)return e;const t=(await Ce.searchApi.search({query:`title:"${e.title}"`,limit:3,fields:["id","title"]})).items;return p(d({},e),{matchNotes:t})}))}async convert(e,t){const n=await Ce.noteApi.get(e,["id","body"]),r=await this.markdownLinkUtilWorker.convertLink(n.body,t);await Ce.noteApi.update({id:n.id,body:r,user_updated_time:Date.now()})}}var Ke="_sub1_sym9i_9",Ze="_sub2_sym9i_15";class Qe{static addMeta(e,t){return"---\n"+D.stringify(t)+"---\n\n"+e}static trimTitle(e){return(e.startsWith("#")?e.substr(1).trimLeft():e).replace(new RegExp("[\r\n]"),"")}}const Ge=new He,Xe=e=>{const[t,n]=T(e.onConvertNote);return m.exports.createElement(F,{dataSource:e.url.matchNotes,className:Ze,loading:t.loading,renderItem:e=>m.exports.createElement(F.Item,{key:e.id},m.exports.createElement(L,null,m.exports.createElement(M.Text,null,e.title),m.exports.createElement(R,{onClick:()=>n(e)},re.t("convertExternalLink.action.convert"))))})},Ye=e=>0!==e.urls.length,et=()=>{const[e,t]=m.exports.useState([]),[n,r]=T((async function(e){if(""===e)return void t([]);const n=await Ge.search(e);console.log("onSearch: ",n),t(n.filter(Ye))}));return m.exports.createElement(y,{title:re.t("convertExternalLink.title")},m.exports.createElement(_.Search,{onSearch:r,allowClear:!0,loading:n.loading}),m.exports.createElement(F,{dataSource:e,itemLayout:"vertical",loading:n.loading,renderItem:(e,n)=>m.exports.createElement(F.Item,{key:e.id,extra:[m.exports.createElement(R,{onClick:()=>async function(e){await Ce.noteActionApi.openAndWatch(e)}(e.id)},re.t("convertExternalLink.action.open"))]},m.exports.createElement(M.Title,{level:4},e.title),m.exports.createElement(F,{dataSource:e.urls,className:Ke,itemLayout:"vertical",renderItem:(r,o)=>m.exports.createElement(F.Item,{key:o},m.exports.createElement(M.Title,{level:5},r.title),m.exports.createElement(M.Link,null,r.url),r.matchNotes&&0!==r.matchNotes.length&&m.exports.createElement(Xe,{url:r,onConvertNote:i=>async function(e){console.log("onConvertNote: ",e),await Ge.convert(e.noteId,{[e.url]:{title:Qe.trimTitle(e.linkNoteTitle),url:`:/${e.linkNoteId}`}}),t(W((t=>{console.log("remove: ",e.noteIndex,e.urlIndex),t[e.noteIndex].urls.splice(e.urlIndex,1),t.filter((e=>0!==e.urls.length))}))),t((e=>e.filter(Ye))),I.success(re.t("convertExternalLink.msg.success"))}({noteId:e.id,url:r.url,linkNoteId:i.id,linkNoteTitle:i.title,noteIndex:n,urlIndex:o})}))}))}))};const tt=new class{async check(){const e=new Set(U(await Ce.folderApi.listAll(),{id:"id",path:"path",children:"children"}).map((e=>e.id)));return(await me.pageToAllList(Ce.noteApi.list.bind(Ce.noteApi),{fields:["id","title","parent_id"],order_by:"user_updated_time",order_dir:"DESC"})).filter((t=>!e.has(t.parent_id)))}},nt=()=>{const[e,t]=m.exports.useState([]),[n,r]=T((async()=>{const e=await tt.check();console.log("list: ",e),t(e)}));return m.exports.createElement(y,{title:re.t("checkParentNotebook.title"),extra:m.exports.createElement(R,{loading:n.loading,onClick:r},re.t("checkParentNotebook.action.check"))},m.exports.createElement(F,{dataSource:e,locale:{emptyText:re.t("checkParentNotebook.listEmptyText")},renderItem:e=>m.exports.createElement(F.Item,{id:e.id,extra:m.exports.createElement(R,{onClick:()=>async function(e){await Ce.noteApi.remove(e),t((t=>t.filter((t=>t.id!==e))))}(e.id)},re.t("checkParentNotebook.action.remove"))},m.exports.createElement(M.Text,null,e.title))}))};var rt={"home.title":"Home","settings.title":"Security Settings","settings.form.token":"Authorization token","settings.form.port":"Port","settings.action.submit":"Submit","settings.msg.success":"Setup was successful","settings.msg.error":"Unable to access joplin web clipper api","unusedResource.title":"Check for unused resources","unusedResource.listEmptyText":"No unused attachment resources were found","unusedResource.action.removeAll":"Delete all","unusedResource.action.check":"Check","unusedResource.action.remove":"Remove","unusedResource.action.download":"Download","unusedResource.msg.process":"[{{rate}}/{{all}}] is checking for resources {{title}}","unusedResource.msg.error":"Please check joplin token/port configuration","notFoundResource.title":"Check notes for references to a failed resource","notFoundResource.listEmptyText":"No reference to a failed resource was found","notFoundResource.unknownFileName":"Unknown file name {{id}}","notFoundResource.action.check":"Check","notFoundResource.action.open":"Open","convertExternalLink.title":"Convert External Link to Internal Reference Notes","convertExternalLink.action.convert":"Convert","convertExternalLink.action.open":"Open","convertExternalLink.msg.success":"Conversion complete","checkParentNotebook.title":"Check notes without parent directory","checkParentNotebook.listEmptyText":"No abnormal notes found in the parent directory","checkParentNotebook.action.check":"Check","checkParentNotebook.action.open":"Open"},ot={"home.title":"首页","settings.title":"安全设置","settings.form.token":"授权令牌","settings.form.port":"端口","settings.action.submit":"提交","settings.msg.success":"设置成功","settings.msg.error":"无法访问 joplin web clipper api","unusedResource.title":"检查未使用的资源","unusedResource.listEmptyText":"没有找到任何未使用的附件资源","unusedResource.action.removeAll":"删除全部","unusedResource.action.check":"检查","unusedResource.action.remove":"删除","unusedResource.action.download":"下载","unusedResource.msg.process":"[{{rate}}/{{all}}] 正在检查资源 {{title}}","unusedResource.msg.error":"请检查 joplin token/port 配置","notFoundResource.title":"检查笔记中引用失效的资源","notFoundResource.listEmptyText":"没有找到任何引用失效的资源","notFoundResource.unknownFileName":"未知文件名 {{id}}","notFoundResource.action.check":"检查","notFoundResource.action.open":"打开","convertExternalLink.title":"转换外部链接为内部引用笔记","convertExternalLink.action.convert":"转换","convertExternalLink.action.open":"打开","convertExternalLink.msg.success":"转换完成","checkParentNotebook.title":"检查没有父级目录的笔记","checkParentNotebook.listEmptyText":"没有检查到父目录异常的笔记","checkParentNotebook.action.check":"检查","checkParentNotebook.action.remove":"删除"};const it=()=>{const e=se(),[{value:t},n]=T((async e=>{console.log("language: ",e),await re.init({en:rt,zhCN:ot},e);const t=ie(e);return[{path:"/",component:ce,exact:!0,title:re.t("home.title")},{path:"/settings",component:Pe,title:re.t("settings.title")},{path:"/unusedResource",component:Ue,title:re.t("unusedResource.title")},{path:"/notFoundResource",component:Ve,title:re.t("notFoundResource.title")},{path:"/convertExternalLink",component:et,title:re.t("convertExternalLink.title")},{path:"/checkParentNotebook",component:nt,title:re.t("checkParentNotebook.title")}].map((e=>p(d({},e),{path:q.join(t,e.path)})))}),[e]);B((()=>n(e)));const r=g(),o=v();return m.exports.createElement(J,{className:X},m.exports.createElement(J.Sider,{className:ee,width:"max-content"},m.exports.createElement("h2",{className:Y},"Joplin Batch"),m.exports.createElement(V,null,t&&t.map((e=>m.exports.createElement(V.Item,{key:e.path},m.exports.createElement(z,{to:e.path},e.title)))))),m.exports.createElement(J,null,m.exports.createElement(J.Header,{className:ne},m.exports.createElement(H,{options:[{label:"English",value:f.En},{label:"中文",value:f.ZhCN}],value:e,onChange:async function(t){const i=r.pathname.replace(ie(e),ie(t));console.log("path: ",e,t,i),await n(t),o.push(i)}})),m.exports.createElement(J.Content,{className:te},m.exports.createElement(m.exports.Suspense,{fallback:"loading..."},K(t)))))},st=()=>m.exports.createElement(Z,null,m.exports.createElement(it,null));Q.render(G.createElement(G.StrictMode,null,G.createElement(st,null)),document.getElementById("root"));