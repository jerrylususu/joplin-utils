import{r as e,o as n,c as a,a as s,b as r,F as o,e as t,d as l}from"./app.8cd2cc77.js";const i={},p=t('<h1 id="常问问题" tabindex="-1"><a class="header-anchor" href="#常问问题" aria-hidden="true">#</a> 常问问题</h1><h2 id="显示错误信息-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1"><a class="header-anchor" href="#显示错误信息-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-hidden="true">#</a> 显示错误信息 <strong>Joplin’s token/port is set incorrectly, unable to access Joplin service!</strong></h2><p>请尝试在 CMD/Bash 执行以下命令，如果没有问题，它应该返回 <strong>JoplinClipperServer</strong>，否则你需要向 Joplin 官方提 issue。</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>curl http://127.0.0.1:41184/ping\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="点击后在其他编辑器中打开" tabindex="-1"><a class="header-anchor" href="#点击后在其他编辑器中打开" aria-hidden="true">#</a> 点击后在其他编辑器中打开</h2>',5),c=l("请参考官方的默认外部编辑器设置："),d={href:"https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor",target:"_blank",rel:"noopener noreferrer"},h=l("How can I edit my note in an external text editor?"),u=t('<h2 id="如何列出-vscode-打开的-joplin-笔记" tabindex="-1"><a class="header-anchor" href="#如何列出-vscode-打开的-joplin-笔记" aria-hidden="true">#</a> 如何列出 VSCode 打开的 joplin 笔记</h2><p>虽然没有正式的支持，但你可以使用快捷键 <code>c+j c+o</code> 来列出最后修改的 20 个 joplin 笔记做到类似的事情。</p><blockquote><p>之所以没有正式支持，可能就是因为两者的功能重叠，另外，vscode 的最近打开的文件也不仅仅是当前编辑器正在打开的文件，而是包括已经关闭的。</p></blockquote><h2 id="插件没有显示列表" tabindex="-1"><a class="header-anchor" href="#插件没有显示列表" aria-hidden="true">#</a> 插件没有显示列表</h2><p>请检查完 joplin 的配置项之后，重新启动 VSCode。</p><h2 id="在侧边栏中点击无法打开笔记" tabindex="-1"><a class="header-anchor" href="#在侧边栏中点击无法打开笔记" aria-hidden="true">#</a> 在侧边栏中点击无法打开笔记</h2><p>这个问题可能有多个原因</p>',7),b=l("请使用版本 v1.4 或更高，因为它包含了必须的 "),g={href:"https://discourse.joplinapp.org/t/hope-that-the-web-api-adds-the-following-features-to-support-the-development-of-third-party-extensions/9277/11?u=rxliuli",target:"_blank",rel:"noopener noreferrer"},m=l("action api"),f=l("，例如在 VSCode 中根据 noteId 打开笔记"),w=l("当前版本是 Joplin Desktop，该插件并不支持 CLI，因为它并不包含上述的 action api，参考: "),v={href:"https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735",target:"_blank",rel:"noopener noreferrer"},k=l("https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735"),x=t('<li><p>检查下面命令是否能够正常执行，如果仍然无法在编辑器中打开，可能要询问 @laurent22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --location --request POST <span class="token string">&#39;http://localhost:27584/services/externalEditWatcher?token=***&#39;</span> <span class="token punctuation">\\</span>\n--header <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>\n--data-raw <span class="token string">&#39;{\n &quot;action&quot;: &quot;openAndWatch&quot;,\n &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;\n}&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>',1),j=t('<h2 id="windows-10-无法上传剪切版图片" tabindex="-1"><a class="header-anchor" href="#windows-10-无法上传剪切版图片" aria-hidden="true">#</a> Windows 10 无法上传剪切版图片</h2><p>可能是没有安装 powershell，在 CMD 中输入 powershell 检查</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>powershell\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p>',4),q=l("如果提示 "),C=s("code",null,"spawn powershell ENOENT",-1),y=l(" 则需要安装 powershell，参考："),S={href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},J=l("在 Windows 上安装 PowerShell");i.render=function(t,l){const i=e("OutboundLink");return n(),a(o,null,[p,s("p",null,[c,s("a",d,[h,r(i)])]),u,s("ol",null,[s("li",null,[s("p",null,[b,s("a",g,[m,r(i)]),f])]),s("li",null,[s("p",null,[w,s("a",v,[k,r(i)])])]),x]),j,s("p",null,[q,C,y,s("a",S,[J,r(i)])])],64)};export{i as default};
