import{o as l,c as n,F as d,a as t,d as u}from"./app.549b6a16.js";import{_ as e}from"./copy-link.ec037a5e.js";const a={},r=t("h1",{id:"其他功能",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#其他功能","aria-hidden":"true"},"#"),u(" 其他功能")],-1),o=t("h2",{id:"配置表",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置表","aria-hidden":"true"},"#"),u(" 配置表")],-1),c=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字段"),t("th",null,"默认值"),t("th",null,"可选值"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"token")]),t("td"),t("td",null,[t("code",null,"string")]),t("td",null,"joplin web 服务的 token")]),t("tr",null,[t("td",null,[t("code",null,"programProfilePath")]),t("td"),t("td",null,[t("code",null,"string")]),t("td",null,"joplin 程序的个人目录")]),t("tr",null,[t("td",null,[t("code",null,"port")]),t("td",null,[t("code",null,"41184")]),t("td",null,[t("code",null,"number")]),t("td",null,"joplin web 服务的端口号")]),t("tr",null,[t("td",null,[t("code",null,"deleteConfirm")]),t("td",null,[t("code",null,"true")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"删除时是否提醒")]),t("tr",null,[t("td",null,[t("code",null,"sortNotes")]),t("td",null,[t("code",null,"false")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"是否对笔记进行排序")]),t("tr",null,[t("td",null,[t("code",null,"sortNotesType")]),t("td",null,[t("code",null,"alphabetical")]),t("td"),t("td",null,"笔记排序的类型")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"alphabetical")]),t("td",null,"按照标题的字母顺序排序")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"default")]),t("td",null,"Joplin 默认的排序")]),t("tr",null,[t("td",null,[t("code",null,"sortOrder")]),t("td",null,[t("code",null,"asc")]),t("td"),t("td",null,"笔记排序的顺序（升序或降序）")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"asc")]),t("td",null,"升序")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"desc")]),t("td",null,"降序")]),t("tr",null,[t("td",null,[t("code",null,"language")]),t("td",null,[t("code",null,"english")]),t("td"),t("td",null,"插件显示的语言，跟随 VSCode")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"en")]),t("td",null,"英语")]),t("tr",null,[t("td"),t("td"),t("td",null,[t("code",null,"zh")]),t("td",null,"简体中文")])])],-1),i=t("h2",{id:"快捷键",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#快捷键","aria-hidden":"true"},"#"),u(" 快捷键")],-1),h=t("ul",null,[t("li",null,[t("code",null,"f2"),u(": 重命名笔记或目录")]),t("li",null,[t("code",null,"delete"),u(": 删除笔记或目录")]),t("li",null,[t("code",null,"ctrl+alt+u"),u(": 从剪切板上传图片")]),t("li",null,[t("code",null,"ctrl+alt+e"),u(": 从文件选择器上传图片")]),t("li",null,[t("code",null,"ctrl+alt+shift+e"),u(": 从文件选择器添加附件")]),t("li",null,[t("code",null,"ctrl+j ctrl+o"),u(": 搜索笔记")]),t("li",null,[t("code",null,"ctrl+j ctrl+i"),u(": 创建附件")]),t("li",null,[t("code",null,"ctrl+j ctrl+m"),u(": 管理标签")])],-1),s=t("h2",{id:"粘贴图片",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#粘贴图片","aria-hidden":"true"},"#"),u(" 粘贴图片")],-1),p=t("p",null,[t("code",null,"v0.1.7"),u(" 之后新增了图片粘贴功能，可以通过右键菜单、命令或快捷键将图片上传到 Joplin 并粘贴链接到 VSCode 中。")],-1),f=t("ol",null,[t("li",null,[t("code",null,"ctrl+alt+u"),u(" 粘贴剪切板的图片")]),t("li",null,[t("code",null,"ctrl+alt+e"),u(" 使用文件管理器选择图片粘贴")])],-1),b=t("h2",{id:"添加附件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#添加附件","aria-hidden":"true"},"#"),u(" 添加附件")],-1),g=t("p",null,[t("code",null,"v0.1.10"),u(" 之后新增了添加附件的功能，可以通过命令或快捷键将文件作为附件资源添加到 Joplin 笔记中。")],-1),m=t("ol",null,[t("li",null,[t("code",null,"ctrl+alt+shift+e"),u(" 选择要添加为附件的文件")])],-1),x=t("h2",{id:"创建附件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#创建附件","aria-hidden":"true"},"#"),u(" 创建附件")],-1),j=t("p",null,[u("在 "),t("code",null,"v0.3.0"),u(" 之后实现了右键创建附件资源的功能，主要用于快速创建并添加一个思维导图（由百度脑图提供支持）或流程图（由 draw.io 提供支持）。")],-1),v=t("h2",{id:"管理标签",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#管理标签","aria-hidden":"true"},"#"),u(" 管理标签")],-1),C=t("p",null,[u("在 "),t("code",null,"v0.3.0"),u(" 之后支持管理标签，命令是 "),t("code",null,"> Joplin: Manage tags"),u("，默认快捷键为 "),t("code",null,"ctrl+j ctrl+m"),u(" 即可弹出复选框。")],-1),J=t("h2",{id:"创建标签",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#创建标签","aria-hidden":"true"},"#"),u(" 创建标签")],-1),k=t("p",null,[u("在 "),t("code",null,"v0.3.0"),u(" 之后支持创建标签，命令是 "),t("code",null,"> Joplin: Create tag"),u("。")],-1),w=t("h2",{id:"链接笔记",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#链接笔记","aria-hidden":"true"},"#"),u(" 链接笔记")],-1),y=t("p",null,[u("在笔记上右键菜单可以看到 "),t("strong",null,"复制链接"),u("，点击即复制到剪切板。")],-1),N=t("p",null,[t("img",{src:e,alt:"Link notes"})],-1),P=t("p",null,[u("使用 "),t("code",null,"Ctrl+单击"),u(" 打开到其他笔记中。")],-1);a.render=function(t,u){return l(),n(d,null,[r,o,c,i,h,s,p,f,b,g,m,x,j,v,C,J,k,w,y,N,P],64)};export{a as default};
