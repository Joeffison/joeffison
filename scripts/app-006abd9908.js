"use strict";function routesConfig(n,e,o,a){cov_1zo7oja1ey.f[0]++,cov_1zo7oja1ey.s[1]++,o.html5Mode(!0).hashPrefix("!"),cov_1zo7oja1ey.s[2]++,e.otherwise("/"),cov_1zo7oja1ey.s[3]++,e.rule(function(n,e){cov_1zo7oja1ey.f[1]++;var o=(cov_1zo7oja1ey.s[4]++,e.path());if(cov_1zo7oja1ey.s[5]++,"/"===o[o.length-1])return cov_1zo7oja1ey.b[0][0]++,cov_1zo7oja1ey.s[6]++,o.substr(0,o.length-1);cov_1zo7oja1ey.b[0][1]++}),cov_1zo7oja1ey.s[7]++,n.state("home",{url:"/",templateUrl:"app/controllers/home/home.html",controller:"HomeController",controllerAs:"vm"}),cov_1zo7oja1ey.s[8]++,n.state("petitcode",{url:"/work/petitcode",templateUrl:"app/controllers/petitcode/petitCode.html",controller:"PetitCodeController",controllerAs:"vm"}),cov_1zo7oja1ey.s[9]++,n.state("virtus",{url:"/work/virtus",templateUrl:"app/controllers/virtus/virtus.html",controller:"VirtusController",controllerAs:"vm"}),cov_1zo7oja1ey.s[10]++,n.state("contact",{url:"/contact",templateUrl:"app/controllers/contact/contact.html",controller:"ContactController",controllerAs:"vm"}),cov_1zo7oja1ey.s[11]++,n.state("credits",{url:"/credits",templateUrl:"app/controllers/credits/credits.html",controller:"CreditsController",controllerAs:"vm"})}function ContactController(){cov_gooq24sgc.f[0]++;cov_gooq24sgc.s[0]++}function CreditsController(){cov_4burct8e3.f[0]++;cov_4burct8e3.s[0]++}function HomeController(){cov_xlmqfd247.f[0]++;cov_xlmqfd247.s[0]++}function PetitCodeController(){cov_1lao1a742w.f[0]++;cov_1lao1a742w.s[0]++}function VirtusController(){cov_16ffj4i95.f[0]++;cov_16ffj4i95.s[0]++}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider","$transitionsProvider"];var cov_ukz88a4nk=function(){var n="/home/joeffison/workspace/joeffison/src/index.js",e="c3c7bfdc4e41f9f1836c2d56cf993d3afffdf7a1",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/index.js",statementMap:{0:{start:{line:1,column:0},end:{line:2,column:32}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_ukz88a4nk.s[0]++,angular.module("app",["ui.router"]);var cov_1zo7oja1ey=function(){var n="/home/joeffison/workspace/joeffison/src/routes.js",e="6e0b24e8771689ae9a4a0b67e706a55c06a1106d",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/routes.js",statementMap:{0:{start:{line:1,column:0},end:{line:3,column:24}},1:{start:{line:7,column:2},end:{line:7,column:52}},2:{start:{line:8,column:2},end:{line:8,column:36}},3:{start:{line:10,column:2},end:{line:17,column:5}},4:{start:{line:11,column:17},end:{line:11,column:33}},5:{start:{line:13,column:4},end:{line:16,column:5}},6:{start:{line:15,column:6},end:{line:15,column:45}},7:{start:{line:19,column:2},end:{line:25,column:7}},8:{start:{line:27,column:2},end:{line:33,column:7}},9:{start:{line:35,column:2},end:{line:41,column:7}},10:{start:{line:43,column:2},end:{line:49,column:7}},11:{start:{line:51,column:2},end:{line:57,column:7}}},fnMap:{0:{name:"routesConfig",decl:{start:{line:6,column:9},end:{line:6,column:21}},loc:{start:{line:6,column:99},end:{line:58,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:10,column:26},end:{line:10,column:27}},loc:{start:{line:10,column:52},end:{line:17,column:3}},line:10}},branchMap:{0:{loc:{start:{line:13,column:4},end:{line:16,column:5}},type:"if",locations:[{start:{line:13,column:4},end:{line:16,column:5}},{start:{line:13,column:4},end:{line:16,column:5}}],line:13}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0},b:{0:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_1zo7oja1ey.s[0]++,angular.module("app").config(routesConfig),angular.module("app").run(["$templateCache",function(n){n.put("app/components/art-reference/art-reference.html",'<a class="art-reference" href="{{$ctrl.artistPage}}" target="_blank" rel="noopener noreferrer" title="Taken by {{$ctrl.artist}}">\n\n  <span>\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n      <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">\n      </path>\n    </svg>\n  </span>\n\n  <span class="artist-name">\n    {{$ctrl.artist}}\n  </span>\n</a>\n'),n.put("app/components/footer/footer.html",'<footer>\n  <div class="container">\n    <div class="row">\n      <div class="col l6 s12">\n        <h5>Joeffison S. de Andrade</h5>\n        <p class="text-lighten-4">\n          Brazilian Engineer passionate about Python, Java and Angular.\n        </p>\n      </div>\n      <div class="col l3 s12">\n        <h5>Join our Team</h5>\n        <ul>\n          <li>\n            <a class="mdi mdi-github-face" target="_blank" href="https://github.com/Joeffison/InstagramUtility">\n              Instagram Utility\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="col l3 s12">\n        <h5 class="">Connect</h5>\n        <ul>\n          <li><a class="mdi mdi-linkedin-box" target="_blank" href="https://www.linkedin.com/in/joeffison-silvério-de-andrade-3b1716a6/">\n            Linkendin\n          </a></li>\n          <li><a class="mdi mdi-github-circle" target="_blank" href="https://github.com/Joeffison">\n            Github\n          </a></li>\n          <li><a class="mdi mdi-gmail" target="_top" href="mailto:joeffison@gmail.com?Subject=ML%20Builder">\n            Email\n          </a></li>\n          <li><a class="mdi mdi-book-open-page-variant" target="_blank" href="https://www.goodreads.com/user/show/70059834-joeffison-andrade">\n            GoodReads\n          </a></li>\n          <li><a class="mdi mdi-instagram" target="_blank" href="https://www.instagram.com/anjosilverio/">\n            Instagram\n          </a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class="footer-copyright">\n    <div class="container">\n      <a class="text-lighten-4" href="https://github.com/Joeffison/InstagramUtility">\n        © 2018 Joeffison Andrade\n      </a>\n    </div>\n  </div>\n</footer>\n'),n.put("app/components/header/header.html",'<main-nav></main-nav>\n<header class="header">\n  <div class="container">\n    <span class="brand">Joeffison</span>\n  </div>\n</header>\n<div class="profile-picture"></div>\n'),n.put("app/components/main-nav/main-nav.html",'<nav class="main-nav" role="navigation"><ul>\n  <li><a ui-sref-active="active" ui-sref="home">Home</a></li>\n  <li><a ui-sref-active="active" ui-sref="virtus">Work @Virtus</a></li>\n  <li><a ui-sref-active="active" ui-sref="petitcode">Work @PetitCode</a></li>\n  <li><a ui-sref-active="active" ui-sref="contact">Contact</a></li>\n  \x3c!--li class="right"><a ui-sref-active="active" ui-sref="about">About</a></li--\x3e\n</ul></nav>\n'),n.put("app/components/post-it/post-it.html",'<div class="post-it-paper">\n  <p>\n    {{$ctrl.text1}}\n  </p>\n  <p ng-if="$ctrl.text2">\n    {{$ctrl.text2}}\n  </p>\n</div>\n'),n.put("app/controllers/contact/contact.html",'<article><div class="layout">\n  <div class="social">\n    You can find me in all of these:\n\n    <ul>\n      <li>\n        <div class="icon">\n          <i class="fab fa-skype"></i>\n        </div>\n        Skype: <small>joeffison@hotmail.com</small>\n      </li>\n\n      <li>\n        <a target="_top" href="mailto:joeffison@gmail.com?Subject=[homepage]%20I%20want%20to%20">\n          <div class="icon">\n            <i class="fas fa-envelope"></i>\n          </div>\n          Email: <small>joeffison@gmail.com</small>\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://www.linkedin.com/in/joeffison-silvério-de-andrade-3b1716a6/">\n          <div class="icon">\n            <i class="fab fa-linkedin"></i>\n          </div>\n          Linkedin\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison">\n          <div class="icon">\n            <i class="fab fa-github"></i>\n          </div>\n          GitHub\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://www.goodreads.com/user/show/70059834-joeffison-andrade">\n          <div class="icon">\n            <i class="fab fa-goodreads"></i>\n          </div>\n          GoodReads\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison/coding_challenges/tree/master/challenges">\n          <div class="icon">\n            <i class="fab fa-github-alt"></i>\n          </div>\n          Coding Challenges\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div>\n    You might also be interested to check my projects on GitHub:\n\n    <ul>\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison/coding_challenges/tree/master/challenges">\n          <div class="icon">\n            <i class="fab fa-github-alt"></i>\n          </div>\n          Coding Challenges (Python)\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison/MachineLearningBuilder/#machine-learning-builder">\n          <div class="icon">\n            <i class="fab fa-github-alt"></i>\n          </div>\n          Machine Learning Builder (Scikit-Learn + Django/Python + AngularJs)\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison/InstagramUtility">\n          <div class="icon">\n            <i class="fab fa-github-alt"></i>\n          </div>\n          Instagram Utility (InstagramAPI + Django/Python + AngularJs)\n        </a>\n      </li>\n\n      <li>\n        <a target="_blank" href="https://github.com/Joeffison/joeffison">\n          <div class="icon">\n            <i class="fab fa-github-alt"></i>\n          </div>\n          This website (AngularJs + Sass + Html: no external components were used to better showcase what I can do <b>without</b> Bootstrap, Materialize, etc)\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div>\n    Download my latest CV and recommendation letters below:\n\n    <ul>\n      <li class="soft-card">\n        <a target="_self" href="../assets/download/cv/AndradeJoeffison_cv_sd_20180221.docx" download>\n          <div class="icon"><i class="far fa-file-pdf"></i></div><br>\n          custom CV\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_self" href="../assets/download/recommendation_letter/recommendation_letter from Dr Frederico Moreira Bublitz.pdf" download>\n          <div class="icon"><i class="far fa-file-pdf"></i></div><br>\n          Recommendation (Virtus)\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_self" href="../assets/download/recommendation_letter/recommendation_letter from PD Dr Dr Horst Lazarek.pdf" download>\n          <div class="icon"><i class="far fa-file-pdf"></i></div><br>\n          Recommendation (TU Dresden)\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_etlf" href="../../assets/download/cv/CV-ESP-Europass-20180307-SilvérioDeAndrade-EN.pdf" download>\n          <div class="icon"><i class="fas fa-file-pdf"></i></div><br>\n          Europass PDF\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_self" href="../assets/download/cv/CV-ESP-Europass-20180307-SilvérioDeAndrade-EN.xml" download>\n          <div class="icon"><i class="fas fa-file-code"></i></div><br>\n          Europass XML\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_self" href="assets/download/cv/CV-ESP-Europass-20180307-SilvérioDeAndrade-EN.odt" download>\n          <div class="icon"><i class="fas fa-file-alt"></i></div><br>\n          Europass ODT\n        </a>\n      </li>\n\n      <li class="soft-card">\n        <a target="_self" href="../assets/download/cv/CV-ESP-Europass-20180307-SilvérioDeAndrade-EN.doc" download>\n          <div class="icon"><i class="fas fa-file-word"></i></div><br>\n          Europass DOC\n        </a>\n      </li>\n    </ul>\n  </div>\n</div></article>\n'),n.put("app/controllers/credits/credits.html",'\x3c!--ul class="credits">\n  <li>\n    <div class="header"></div>\n\n    <art-reference artist="\'Alexandre Debiève\'"\n                 artist-page="\'https://unsplash.com/@alexkixa?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\'">\n    </art-reference>\n  </li>\n</ul--\x3e\n'),n.put("app/controllers/home/home.html",'<post-it text1="\'I am passionate about development in Python\'"></post-it>\n\n<post-it text1="\'I loved to be a team lead at Virtus and work with such diverse backgrounds.\'"></post-it>\n\n<post-it text1="\'I am in love with Germany since my exchange in Dresden, Saxony.\'" text2="\'PS: I &hearts; Spekulatius\'">\n</post-it>\n\n<article class="biography">\n  <div class="layout">\n    <h1>Biography</h1>\n    <p>\n      The achievement I am proudest of is certainly the speed I grew in my past job. I soon became of the Senior developers and started leading teams (one at a time) with very different backgrounds. Don\'t take me wrong: I love coding (check out my github), but I am passionate about leading and connecting. Today, my boldness and confidence on my capabilities/ethics are my main strengths. I am not afraid of starting on a very initial level at an ambitious company (if I think they have a good service), because I am confident that I will grow my career there (respecting hierarchy and being truthful to my colleagues). As soon as I finished my 3-year contract I went back to Germany to find my next professional challenge.\n    </p>\n\n    <p>\n      I have a bachelor in Computer Science, I joined research projects in Brazil and Germany and I read books on innovation, leadership and biographies on IT personalities (such as Alan Turing, Steve Jobs and Bill Gates), so I am looking for a work I can be proud of. I don\'t want to merely build software, I want to invent the future.\n    </p>\n\n    <p>\n      My profile is aligned to 3 main categories (in order of preference): Data Science, Backend/API and Frontend. I am passionate about two technologies and have wide experience with them: Python (for Data Science and Backend) and SQL/NoSQL, but I worked with many, many others (e.g, Java, R, ASP.Net, so forth) and I am always excited to learn new frameworks/technologies.\n    </p>\n\n    <p>\n      Prefered industries: IT, Financial and Environmental.\n    </p>\n  </div>\n</article>\n\n<ul class="lined">\n  <li id="work-petitcode">\n    <div class="centered"><div class="flag-de"></div></div>\n    <article class="experience">\n      <h1>Python Developer at Petit Code</h1>\n      <p>\n        Temporary job as Python Developer.<br>\n        Local: Betahaus\n      </p>\n    </article>\n  </li>\n\n  <li id="work-virtus">\n    <div class="centered"><div class="flag-br"></div></div>\n    <article class="experience">\n      <h1>Software Engineer at Virtus</h1>\n      <p>\n        Full-Time Contract: 3 years.<br>\n        Local: Campina Grande\n      </p>\n    </article>\n  </li>\n\n  <li id="bachelor-ufcg">\n    <div class="centered"><div class="flag-br"></div></div>\n    <article class="experience">\n      <h1>Bachelor in Computer Science</h1>\n      <p>\n        2010 ~ 2015<br>\n        Local: Universidade Federal de Campina Grande\n      </p>\n    </article>\n  </li>\n\n  <li id="research-tud">\n    <div class="centered"><div class="flag-de"></div></div>\n    <article class="experience">\n      <h1>Research Project on Smart Grids</h1>\n      <p>\n        2013 ~ 2014<br>\n        Local: Technische Universität Dresden\n      </p>\n    </article>\n  </li>\n\n  <li id="research-lsd">\n    <div class="centered"><div class="flag-br"></div></div>\n    <article class="experience">\n      <h1>Research Project on Smart Grids</h1>\n      <p>\n        2012 ~ 2013<br>\n        Local: Universidade Federal de Campina Grande\n      </p>\n    </article>\n  </li>\n\n  <li id="research-splab">\n    <div class="centered"><div class="flag-br"></div></div>\n    <article class="experience">\n      <h1>Research Project on Software Testing</h1>\n      <p>\n        2011 ~ 2012<br>\n        Local: Universidade Federal de Campina Grande\n      </p>\n    </article>\n  </li>\n</ul>\n'),n.put("app/controllers/petitcode/petitCode.html",'<article class="work-experience" id="work-petitcode"><div class="container">\n  <h1 class="workplace">PetitCode (freelancer)</h1>\n  <section class="workplace-intro">\n    <p>\n      PetitCode is a freelancer-based German startup with 8 employees.\n      We deliver IT services to other companies here in Berlin and around Germany.\n    </p>\n    <p>\n      PetitCode is my only experience with freelancer projects.\n      Most of our clients contract us to build their new website for a beautiful online presence.\n    </p>\n  </section>\n  <section class="work-position">\n    <p>\n      I was contracted as the house\'s Python and Angular Developer, but in my job at PetitCode I love to help less experienced engineers to build and manage their solution on AWS (e.g, <a href="https://app.findsomebuddy.de/reactapp/" target="_blank">Alex\'s FindSomebuddy</a>) and with any questions on git, GitLab, GitHub Pages, Jenkins, etc. Technologies: NGINX and Apache, Linux, Django.\n    </p>\n  </section>\n  <div class="team-picture"></div>\n  <section>\n    <h2>Key Responsibilities: </h2>\n    <ul>\n      <li>\n        Build or give consultation on Django solutions already in production;\n      </li>\n      <li>\n        Deployment to production AWS servers (setup with NGINX).\n      </li>\n    </ul>\n  </section>\n</div></article>\n'),n.put("app/controllers/virtus/virtus.html",'<article class="work-experience" id="work-virtus"><div class="container">\n  <h1 class="workplace">Virtus (3-year full-time contract): jan/2015 - dec/2017</h1>\n  <section class="workplace-intro">\n    <p>\n      Virtus is a project-based Brazilian company almost reaching the 200 employees mark.\n      We are proudly delivering products to big IT companies.\n    </p>\n    <p>\n      I worked in two very different projects/realities: Asus Brazil (2 years) and HP US/Brazil (1 year), so I have\n      the experience to talk to big contributors to the world\'s IT development (such as John Landry and Cael Filho).\n    </p>\n  </section>\n  <section class="work-position">\n    <p>\n      My first project was pure web development, but the services provided on the RESTful API side of the product was\n      also consumed by ASUS games and apps created in Brazil. Technologies: Django/Python & AngularJs, NGINX, Linux, SQL, git, Jenkins, Tuleap.\n    </p>\n    <p>\n      My second project was a data science focused project and I was responsible for the data analysis/visualization\n      team which also created a web tool, but was focused in technologies such as:\n      R, Spark, Python & NoSQL, Tableau and Databricks.\n    </p>\n  </section>\n  <div class="team-picture"></div>\n  <section>\n    <h2>Key Responsibilities: </h2>\n    <ul>\n      <li>\n        I lead different teams (one at a time) of 5 to 9 engineers with age ranging from 22 to 50,\n        including an Italian Master student;\n      </li>\n      <li>\n        Scrum Master tasks (Sprint Planning, Sprint Review, Sprint Retrospective, etc);\n      </li>\n      <li>\n        Deliver Results to client on Skype Call;\n      </li>\n      <li>\n        Present Databricks on HP\'s Spark Day 2017 at HP office;\n      </li>\n      <li>\n        Training of on-site and remote interns;\n      </li>\n      <li>\n        Code Review (on our Git repository and the related tests on Jenkins).\n      </li>\n      <li>\n        Code on Backend, Frontend or ETL depending on demand and allocated resources;\n      </li>\n      <li>\n        Deploy on test, stagging and production servers (AWS) and manage Databricks clusters (AWS resources);\n      </li>\n      <li>\n        Planning of Working hours and holidays of my team.\n      </li>\n    </ul>\n  </section>\n</div></article>\n')}]);var cov_1anlpbg5dq=function(){var n="/home/joeffison/workspace/joeffison/src/app/components/art-reference/art-reference.js",e="4643cade1a27ded8f2f56f1823c5db8617ec735a",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/components/art-reference/art-reference.js",statementMap:{0:{start:{line:1,column:0},end:{line:9,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_1anlpbg5dq.s[0]++,angular.module("app").component("artReference",{templateUrl:"app/components/art-reference/art-reference.html",bindings:{artist:"<",artistPage:"<"}});var cov_njm32a582=function(){var n="/home/joeffison/workspace/joeffison/src/app/components/footer/footer.js",e="1d7796a45d939ec6144218bf8f78b4fde9ddfd8b",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/components/footer/footer.js",statementMap:{0:{start:{line:1,column:0},end:{line:5,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_njm32a582.s[0]++,angular.module("app").component("mainFooter",{templateUrl:"app/components/footer/footer.html"});var cov_1pana2tb90=function(){var n="/home/joeffison/workspace/joeffison/src/app/components/header/header.js",e="fde42b6c74d03ea0cdd429e7ceacdf7b7df5e6b8",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/components/header/header.js",statementMap:{0:{start:{line:1,column:0},end:{line:5,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_1pana2tb90.s[0]++,angular.module("app").component("mainHeader",{templateUrl:"app/components/header/header.html"});var cov_yqph6mhif=function(){var n="/home/joeffison/workspace/joeffison/src/app/components/main-nav/main-nav.js",e="e4742308a7289f22db03671102f5fcb60e09a06a",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/components/main-nav/main-nav.js",statementMap:{0:{start:{line:1,column:0},end:{line:5,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_yqph6mhif.s[0]++,angular.module("app").component("mainNav",{templateUrl:"app/components/main-nav/main-nav.html"});var cov_1yq7t2ox6=function(){var n="/home/joeffison/workspace/joeffison/src/app/components/post-it/post-it.js",e="a58ce3281d488d97598163f2b9f460455ecf403d",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/components/post-it/post-it.js",statementMap:{0:{start:{line:1,column:0},end:{line:9,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_1yq7t2ox6.s[0]++,angular.module("app").component("postIt",{templateUrl:"app/components/post-it/post-it.html",bindings:{text1:"<",text2:"<?"}});var cov_gooq24sgc=function(){var n="/home/joeffison/workspace/joeffison/src/app/controllers/contact/contactController.js",e="d42f90ab492206348edb02f9a2c6b178e2c19493",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/controllers/contact/contactController.js",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:17}},1:{start:{line:5,column:0},end:{line:7,column:24}}},fnMap:{0:{name:"ContactController",decl:{start:{line:1,column:9},end:{line:1,column:26}},loc:{start:{line:1,column:29},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_gooq24sgc.s[1]++,angular.module("app").controller("ContactController",[ContactController]);var cov_4burct8e3=function(){var n="/home/joeffison/workspace/joeffison/src/app/controllers/credits/creditsController.js",e="23c694274e5796ddd65ae5777cf554c6f22949af",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/controllers/credits/creditsController.js",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:17}},1:{start:{line:5,column:0},end:{line:7,column:24}}},fnMap:{0:{name:"CreditsController",decl:{start:{line:1,column:9},end:{line:1,column:26}},loc:{start:{line:1,column:29},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_4burct8e3.s[1]++,angular.module("app").controller("CreditsController",[CreditsController]);var cov_xlmqfd247=function(){var n="/home/joeffison/workspace/joeffison/src/app/controllers/home/homeController.js",e="5f3c12b02358c9128dd0dbfbb47400614ea5a962",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/controllers/home/homeController.js",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:17}},1:{start:{line:5,column:0},end:{line:7,column:21}}},fnMap:{0:{name:"HomeController",decl:{start:{line:1,column:9},end:{line:1,column:23}},loc:{start:{line:1,column:26},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_xlmqfd247.s[1]++,angular.module("app").controller("HomeController",[HomeController]);var cov_1lao1a742w=function(){var n="/home/joeffison/workspace/joeffison/src/app/controllers/petitcode/petitCodeController.js",e="ec84a1236637ccd00fac5f666e64ce40e7d09e33",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/controllers/petitcode/petitCodeController.js",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:17}},1:{start:{line:5,column:0},end:{line:7,column:26}}},fnMap:{0:{name:"PetitCodeController",decl:{start:{line:1,column:9},end:{line:1,column:28}},loc:{start:{line:1,column:31},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_1lao1a742w.s[1]++,angular.module("app").controller("PetitCodeController",[PetitCodeController]);var cov_16ffj4i95=function(){var n="/home/joeffison/workspace/joeffison/src/app/controllers/virtus/virtusController.js",e="e55a5453045789df196f484466d23fb718a4ca6a",o=function(){}.constructor,a=new o("return this")(),t="__coverage__",i={path:"/home/joeffison/workspace/joeffison/src/app/controllers/virtus/virtusController.js",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:17}},1:{start:{line:5,column:0},end:{line:7,column:23}}},fnMap:{0:{name:"VirtusController",decl:{start:{line:1,column:9},end:{line:1,column:25}},loc:{start:{line:1,column:28},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=a[t]||(a[t]={});return r[n]&&r[n].hash===e?r[n]:(i.hash=e,r[n]=i)}();cov_16ffj4i95.s[1]++,angular.module("app").controller("VirtusController",[VirtusController]);
//# sourceMappingURL=../maps/scripts/app-006abd9908.js.map
