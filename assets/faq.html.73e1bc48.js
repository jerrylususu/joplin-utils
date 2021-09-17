import{r as e,o as n,c as s,a,b as o,F as t,e as i,d as r}from"./app.e3f6bc7c.js";const l={},p=i('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" tabindex="-1"><a class="header-anchor" href="#show-error-message-joplin-s-token-port-is-set-incorrectly-unable-to-access-joplin-service" aria-hidden="true">#</a> Show error message <strong>Joplin&#39;s token/port is set incorrectly, unable to access Joplin service!</strong></h2><p>Please try to execute the following command in CMD/Bash, if there is no problem, it should return <strong>JoplinClipperServer</strong>, otherwise you need File an issue with Joplin.</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>curl http://127.0.0.1:41184/ping\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>On Linux make sure your <code>/etc/hosts</code> contains the following entry</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token number">127.0</span><span class="token operator">.</span><span class="token number">0.1</span>  localhost\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="not-opened-in-vscode-after-clicking" tabindex="-1"><a class="header-anchor" href="#not-opened-in-vscode-after-clicking" aria-hidden="true">#</a> Not opened in VSCode after clicking</h2>',7),c=r("Please refer to the official default external editor settings: "),d={href:"https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor",target:"_blank",rel:"noopener noreferrer"},h=r("How can I edit my note in an external text editor?"),u=i('<h2 id="how-to-list-joplin-notes-opened-by-vscode" tabindex="-1"><a class="header-anchor" href="#how-to-list-joplin-notes-opened-by-vscode" aria-hidden="true">#</a> How to list joplin notes opened by VSCode</h2><p>Although there is no official support, you can use the shortcut key <code>c+j c+o</code> to list the last modified 20 joplin notes to do similar things.</p><h2 id="no-list-displayed-in-the-sidebar" tabindex="-1"><a class="header-anchor" href="#no-list-displayed-in-the-sidebar" aria-hidden="true">#</a> No list displayed in the sidebar</h2><p>After checking joplin configuration items, restart VSCode.</p><h2 id="clicking-on-the-sidebar-fails-to-open-the-note" tabindex="-1"><a class="header-anchor" href="#clicking-on-the-sidebar-fails-to-open-the-note" aria-hidden="true">#</a> Clicking on the sidebar fails to open the note</h2><p>There may be multiple reasons for this problem</p>',6),b=r("Please use version v1.4 or higher, because it contains the necessary "),m={href:"https://discourse.joplinapp.org/t/hope-that-the-web-api-adds-the-following-features-to-support-the-development-of-third-party-extensions/9277/11?u=rxliuli",target:"_blank",rel:"noopener noreferrer"},g=r("action api"),f=r(" , For example, open notes based on noteId in VSCode"),w=r("The current version is Joplin Desktop. The plug-in does not support CLI, because it does not include the above action api. Reference: "),v={href:"https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735",target:"_blank",rel:"noopener noreferrer"},k=r("https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735"),y=i('<li><p>Check whether the following command can be executed normally, if it still cannot be opened in the editor, you may want to ask @laurent22</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --location --request POST <span class="token string">&#39;http://localhost:27584/services/externalEditWatcher?token=***&#39;</span> <span class="token punctuation">\\</span>\n--header <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>\n--data-raw <span class="token string">&#39;{\n &quot;action&quot;: &quot;openAndWatch&quot;,\n &quot;noteId&quot;: &quot;257f6a9dacc1409580ee526d50ac4d49&quot;\n}&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>',1),x=i('<h2 id="windows-10-cannot-upload-a-cut-version-of-the-picture" tabindex="-1"><a class="header-anchor" href="#windows-10-cannot-upload-a-cut-version-of-the-picture" aria-hidden="true">#</a> Windows 10 cannot upload a cut version of the picture</h2><p>Powershell may not be installed, enter powershell in CMD to check</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>powershell\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png" alt="powershell"></p>',4),j=r("If you are prompted to "),q=a("code",null,"spawn powershell ENOENT",-1),C=r(", you need to install powershell, refer to: "),S={href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},I=r("Install PowerShell on Windows");l.render=function(i,r){const l=e("OutboundLink");return n(),s(t,null,[p,a("p",null,[c,a("a",d,[h,o(l)])]),u,a("ol",null,[a("li",null,[a("p",null,[b,a("a",m,[g,o(l)]),f])]),a("li",null,[a("p",null,[w,a("a",v,[k,o(l)])])]),y]),x,a("p",null,[j,q,C,a("a",S,[I,o(l)])])],64)};export{l as default};
