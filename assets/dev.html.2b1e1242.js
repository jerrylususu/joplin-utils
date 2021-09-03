import{e}from"./app.3fb7dd1e.js";const i={},l=e('<h1 id="参与项目" tabindex="-1"><a class="header-anchor" href="#参与项目" aria-hidden="true">#</a> 参与项目</h1><h2 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h2><p>主要分为两方面</p><ul><li>开发 <ul><li>实现未完成的功能</li><li>提出新的 idea 并实现</li></ul></li><li>非开发 <ul><li>帮助翻译文档、国际化的配置文件</li><li>编写参与开发的文档</li><li>发现问题并在 issue 中提出</li></ul></li></ul><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><ul><li>nodejs &gt;= v14</li><li>joplin &gt;= v1.4</li><li>yarn</li></ul><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><ol><li>在项目根目录运行 <code>yarn setup</code> 命令</li><li>导航到 <em>cd apps/joplin-batch-web</em></li><li>运行 <code>yarn dev</code> 命令启动本地开发环境</li></ol><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><ul><li><code>docs</code>: 一些文档</li><li><code>src</code>: 源代码 <ul><li><code>@types</code>: 扩展类型定义</li><li><code>common</code>: 通用工具代码</li><li><code>constants</code>: 项目中的常量</li><li><code>i18n</code>: 国际化的配置文件</li><li><code>pages</code>: 页面组件 <ul><li><code>*</code><ul><li><code>index.ts</code>: 路由页面入口</li><li><code>*Page.tsx</code>: 页面级组件</li><li><code>service</code>: 一些可以抽离出来的逻辑代码</li></ul></li></ul></li></ul></li></ul>',10);i.render=function(e,i){return l};export{i as default};
