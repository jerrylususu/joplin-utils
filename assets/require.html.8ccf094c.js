import{r as e,o as n,c as a,a as s,b as l,F as i,d as t,e as r}from"./app.549b6a16.js";const o={},c=s("h1",{id:"required-dependencies",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#required-dependencies","aria-hidden":"true"},"#"),t(" Required dependencies")],-1),u=s("ul",null,[s("li",null,"nodejs >= v14"),s("li",null,"yarn"),s("li",null,"git"),s("li",null,"github")],-1),d=s("h2",{id:"install-nodejs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-nodejs","aria-hidden":"true"},"#"),t(" Install nodejs")],-1),h=t("From the "),p={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},b=t("nodejs official website"),g=t(" download and install the latest version then use the following commands to check whether the installation was successful"),m=r('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node -v\n<span class="token function">npm</span> -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="install-yarn" tabindex="-1"><a class="header-anchor" href="#install-yarn" aria-hidden="true">#</a> Install yarn</h2><p>Once you have installed nodejs, install yarn with the following command</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g <span class="token function">yarn</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Check whether the yarn installation was successful</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="register-on-github" tabindex="-1"><a class="header-anchor" href="#register-on-github" aria-hidden="true">#</a> Register on GitHub</h2>',7),f=t("Go to the "),v={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},k=t("GitHub website"),w=t(", click 'sign up' and follow the instructions to create an account"),x=s("h2",{id:"install-git",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-git","aria-hidden":"true"},"#"),t(" Install git")],-1),y=t("Download and install from the "),q={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},j=t("official git website"),_=t(". If you are using linux or macOS then it may be pre-installed."),F=s("br",null,null,-1),G=t(" Run the following to check if installation was successful"),I=r('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Finally set your local username and commit email address</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;FIRST_NAME LAST_NAME&quot;</span>\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;MY_NAME@example.com&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),A=t("For further details on how to use git together with GitHub, please refer to the "),H={href:"https://docs.github.com/en/get-started/quickstart/set-up-git",target:"_blank",rel:"noopener noreferrer"},M=t("official GitHub documentation");o.render=function(t,r){const o=e("OutboundLink");return n(),a(i,null,[c,u,d,s("p",null,[h,s("a",p,[b,l(o)]),g]),m,s("p",null,[f,s("a",v,[k,l(o)]),w]),x,s("p",null,[y,s("a",q,[j,l(o)]),_,F,G]),I,s("blockquote",null,[s("p",null,[A,s("a",H,[M,l(o)])])])],64)};export{o as default};
