import{e}from"./app.d133915c.js";const i={},l=e('<h1 id="参与项目" tabindex="-1"><a class="header-anchor" href="#参与项目" aria-hidden="true">#</a> 参与项目</h1><h2 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h2><p>主要分为两方面</p><ul><li>开发 <ul><li>实现未完成的功能</li><li>提出新的 idea 并实现</li></ul></li><li>非开发 <ul><li>帮助翻译文档、国际化的配置文件</li><li>编写 vscode 与 joplin 的结合文档</li><li>编写参与开发的文档</li></ul></li></ul><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><ul><li>nodejs &gt;= v12</li><li>joplin &gt;= v1.4</li><li>yarn</li></ul><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><ol><li>使用 vscode 打开项目</li><li><code>cp .vscode/_launch.json .vscode/launch.json</code></li><li>修改 <em>.vscode/launch.json</em> 配置，修改以下配置项 <blockquote><p>个人建议同时启动 joplin electron 项目，避免在真实的个人笔记上进行测试，插件可能错误的破坏真实笔记。</p></blockquote><ul><li><code>configurations/env</code><ul><li><code>JOPLIN_TOKEN</code>: web clipper 的验证令牌</li><li><code>JOPLIN_PORT</code>: 端口，开发环境一般是 <code>27584</code></li><li><code>JOPLIN_PROFILE_PATH</code>: 个人配置目录，开发环境应该是 <code>~/.config/joplin-desktop</code>，但注意需要使用完全路径</li></ul></li></ul></li><li>使用 <code>yarn watch</code> 启动 tsc 监视模式</li><li>使用 <code>F5</code> 运行调试模式</li></ol><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><ul><li><code>docs</code>: joplin 在线文档</li><li><code>resources</code>: 图标资源</li><li><code>src</code>: 源代码 <ul><li><code>api</code>: 一些 <code>joplin-api</code> 中目前不存在的功能增强</li><li><code>config</code>: 插件配置相关处理</li><li><code>model</code>: 提供 view 的 <code>NodePrivider</code> 实现类</li><li><code>service</code>: 一些其他的服务实现</li><li><code>util</code>: 通用工具代码</li></ul></li><li><code>package.nls*.json</code>: 国际化配置文件</li></ul>',10);i.render=function(e,i){return l};export{i as default};
