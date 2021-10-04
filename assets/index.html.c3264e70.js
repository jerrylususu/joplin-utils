import{r as n,o as l,c as s,a,b as e,F as i,d as r}from"./app.d133915c.js";const u={},o=a("h1",{id:"joplin-plugin-cli",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#joplin-plugin-cli","aria-hidden":"true"},"#"),r(" joplin-plugin-cli")],-1),c=a("h2",{id:"简介",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),r(" 简介")],-1),p=a("p",null,[r("一个 joplin 插件的 cli，支持创建与打包插件，核心使用 esbuild，它非常"),a("strong",null,"快"),r("。")],-1),t=a("h2",{id:"使用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),r(" 使用")],-1),d=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),r(" i -g joplin-plugin-cli "),a("span",{class:"token comment"},"# 安装"),r("\njpl generate --name test-plugin "),a("span",{class:"token comment"},"# 生成项目"),r("\n"),a("span",{class:"token builtin class-name"},"cd"),r(" test-plugin\n"),a("span",{class:"token function"},"yarn"),r(" build "),a("span",{class:"token comment"},"# 打包"),r("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br")])],-1),b=a("h2",{id:"faq",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),r(" FAQ")],-1),h=a("h3",{id:"动机",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#动机","aria-hidden":"true"},"#"),r(" 动机")],-1),m=a("p",null,"为什么不使用官方的插件模板项目？",-1),g=a("p",null,"最近前端打包工具发生了很大的变化，主要是 esbuild 和 swc 引发的性能革命（这样说一点都不为过），vue 作者放弃 webpack 而基于 esbuild 和 rollup 构建了新的跨框架工具 vite，所以我也更喜欢基于 esbuild 构建更快的工具。",-1),k=a("blockquote",null,[a("p",null,[r("官方插件模板项目使用 webpack 构建大约需要 3.87s，而这个 cli 基于 esbuild 只需要 0.17s。 "),a("img",{src:"/images/diff.png",alt:"diff"})])],-1),f=a("h2",{id:"如何迁移现有插件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#如何迁移现有插件","aria-hidden":"true"},"#"),r(" 如何迁移现有插件？")],-1),j=a("ol",null,[a("li",null,[a("p",null,"安装依赖"),a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),r(),a("span",{class:"token function"},"add"),r(" -D joplin-plugin-api joplin-plugin-cli\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])]),a("li",null,[a("p",null,[r("删除 "),a("em",null,"package.json"),r(" 中的 "),a("code",null,"dist/prepare/update"),r(" 命令，并添加 "),a("code",null,"dev/build"),r(" 命令")]),a("div",{class:"language-json ext-json line-numbers-mode"},[a("pre",{class:"language-json"},[a("code",null,[a("span",{class:"token punctuation"},"{"),r("\n  "),a("span",{class:"token property"},'"scripts"'),a("span",{class:"token operator"},":"),r(),a("span",{class:"token punctuation"},"{"),r("\n    "),a("span",{class:"token property"},'"build"'),a("span",{class:"token operator"},":"),r(),a("span",{class:"token string"},'"jpl build"'),a("span",{class:"token punctuation"},","),r("\n    "),a("span",{class:"token property"},'"dev"'),a("span",{class:"token operator"},":"),r(),a("span",{class:"token string"},'"jpl build -w"'),r("\n  "),a("span",{class:"token punctuation"},"}"),r("\n"),a("span",{class:"token punctuation"},"}"),r("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])])]),a("li",null,[a("p",null,"运行构建命令"),a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),r(" build\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])])]),a("li",null,[a("p",null,[r("替换代码中所有的 "),a("code",null,"import joplin from 'api'"),r(" 为 "),a("code",null,"import joplin from 'joplin-plugin-api'")])]),a("li",null,[a("p",null,[r("删除 "),a("code",null,"api"),r(" 目录、"),a("code",null,"webpack.config.js")])])],-1),v=a("h2",{id:"参考",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),r(" 参考")],-1),x={href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},w=r("打包工具性能对比"),y={href:"https://code.visualstudio.com/api/working-with-extensions/bundling-extension",target:"_blank",rel:"noopener noreferrer"},q=r("vscode 官方推荐使用 esbuild 打包插件");u.render=function(r,u){const F=n("OutboundLink");return l(),s(i,null,[o,c,p,t,d,b,h,m,g,k,f,j,v,a("ul",null,[a("li",null,[a("a",x,[w,e(F)])]),a("li",null,[a("a",y,[q,e(F)])])])],64)};export{u as default};
