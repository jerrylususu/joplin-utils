import{r as n,o as s,c as a,a as e,b as t,w as o,F as p,d as l,e as i}from"./app.9c6ca24b.js";const r={},u=e("h1",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),l(" Documentation")],-1),c=l("Required Dependencies"),d=e("h2",{id:"setting-up-the-local-environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-up-the-local-environment","aria-hidden":"true"},"#"),l(" Setting up the local environment")],-1),b=l("To start you need to fork the project on GitHub, see: "),m={href:"https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},g=l("Fork a repo"),k=i('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone the repo locally</span>\n<span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>YOUR GITHUB NAME<span class="token operator">&gt;</span>/joplin-utils.git\n<span class="token comment"># Navigate to documentation folder</span>\n<span class="token builtin class-name">cd</span> website/\n<span class="token comment"># Install required dependencies</span>\n<span class="token function">yarn</span>\n<span class="token comment"># Start the local development environment</span>\n<span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',1),h=l("You should be able to see a preview of the local documentation at "),v={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},q=l("http://localhost:8080/"),f=e("h2",{id:"adding-document-translations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-document-translations","aria-hidden":"true"},"#"),l(" Adding document translations")],-1),j=l("Check the existing "),y={href:"https://github.com/rxliuli/joplin-utils/issues/9",target:"_blank",rel:"noopener noreferrer"},x=l("documentation optimization"),w=l(" list. Select a task and reply to the specific line in the issue"),_=l("As we are using "),A={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},F=l("vuepress2"),G=l(" you need to understand the basic configuration i.e. how to modify the navigation bar and sidebar as well as how to add new documents"),R=e("li",null,[l("Add new documents to "),e("em",null,"docs/"),l(" then modify "),e("em",null,"docs/.vuepress/config.js"),l(" to add them to the website")],-1),S=i('<p>You will notice that the configuration for the navigation bar is basically a nested array, the sidebar configuration is set via a link within the navigation bar. For example, this is an existing configuration for the joplin-vscode-plugin documentation</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;navbar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;joplin-vscode-plugin/&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>We can then configure <code>&quot;/joplin-vscode-plugin/&quot;</code> in the corresponding sidebar list</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;sidebar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;/zh/joplin-vscode-plugin/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guide&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token string">&quot;/joplin-vscode-plugin/&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/joplin-vscode-plugin/guide/faq&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/joplin-vscode-plugin/guide/feature&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/joplin-vscode-plugin/guide/recommended-extension&quot;</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;/joplin-vscode-plugin/guide/limitations&quot;</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',4);r.render=function(l,i){const r=n("RouterLink"),Y=n("OutboundLink");return s(),a(p,null,[u,e("blockquote",null,[e("p",null,[t(r,{to:"/dev/require.html"},{default:o((()=>[c])),_:1})])]),d,e("p",null,[b,e("a",m,[g,t(Y)])]),k,e("p",null,[h,e("a",v,[q,t(Y)])]),f,e("ol",null,[e("li",null,[j,e("a",y,[x,t(Y)]),w]),e("li",null,[_,e("a",A,[F,t(Y)]),G]),R]),S],64)};export{r as default};
