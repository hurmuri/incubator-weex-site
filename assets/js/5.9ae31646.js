(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,e,a){"use strict";e.a={weex:{desc:"Weex 是一个可以使用现代化的 Web 技术开发高性能原生应用的框架。",getStartedBtn:"快速开始",startText:"开始构建你的 weex 应用",charc1Title:"高性能",charc1Content:"Weex 使用原生组件和原生模块，来最大化利用原生渲染的性能优势以及平台能力，所有的组件和模块都是可插拔、可扩展的。",charc2Title:"跨平台",charc2Content:"你可以使用同一份代码编译成不同目标文件分别在 Web、Android 和 iOS 平台上运行。原生的组件和模块在不同平台中有不同的实现，但是它们都提供了相同的接口。",charc3Title:"贴近前端生态",charc3Content:"Weex 拥抱已有的 Web 生态，你可以使用现代化的前端技术开发移动应用。 Weex 支持了最常用 CSS 样式以及最流行的前端框架，如 Vue 和 Rax，在未来或许还可以支持更多。",charc4Title:"被大规模的使用",charc4Content:"Weex 已经在许多超级 App 中大规模使用，一共服务了数亿用户。Weex 还衍生出了各种工程化的产品和平台，以供 工业生产使用。"},info:{solutionTitle:"干货集中营-解决方案",demoTitle:"干货集中营-代码案例",searchTag:"标签筛选",hotTags:"热门标签",searchBtn:"筛选",palceholder:"请选择标签或者输入关键词后回车",solutionFavoriteNone:"你还没有收藏解决方案，赶快点击按钮开始收藏你的第一个解决方案吧~",solutionWorksNone:"你还没有编写解决方案，赶快去编写你的第一个解决方案吧~",demoFavoriteNone:"你还没有收藏代码案例，赶快点击按钮开始收藏你的第一个代码案例吧~",demoWorksNone:"你还没有编写代码案例，赶快去编写你的第一个代码案例吧~",startWriting:"GO-编写去",noData:"暂无数据~",pv:"浏览",favor:"收藏"}}},177:function(t,e,a){"use strict";e.a={weex:{desc:"Weex is a framework for building performant mobile apps with modern web technology.",getStartedBtn:"Get Started",startText:"Start building your weex app",charc1Title:"High Performance",charc1Content:"Weex is using native components and native modules to take advantage of native rendering performance and platform capabilities. Both components and modules are pluggable and extendable.",charc2Title:"Cross Platforms",charc2Content:"You can use a single codebase to generate different bundle files to running on both Webs, Android and iOS platforms. Native components and modules have a different implementation on each platform, but they all exposed the same API.",charc3Title:"Front-end Friendly",charc3Content:"Weex embraces the existing Web ecosystem, you can use modern front-end technology to develop your mobile apps. Weex supports most commonly used CSS properties and most popular front-end frameworks, such as Vue and Rax, maybe more in the future.",charc4Title:"Large-scale Used in Production",charc4Content:"Weex has been large-scale used in many super apps for a long time, served almost billions of people in total. Weex also derived many engineering products and platforms for industry development."},info:{solutionTitle:"Solutions",demoTitle:"Demos",searchTag:"searchTags",hotTags:"hotTags",searchBtn:"Search",placeholder:"select tags or input tags then press the Enter key",solutionFavoriteNone:"You don't have any favorite solution. Start collecting the first one now!",solutionWorksNone:"You don't write any solution. Start writing one now!",demoFavoriteNone:"You don't have any favorite demo. Start collecting the first one now!",demoWorksNone:"You don't write any demo. Start writing one now!",startWriting:"startWriting",noData:"No Data",pv:"pv",favor:"favor"}}},179:function(t,e,a){},186:function(t,e,a){"use strict";var n=a(179);a.n(n).a},188:function(t,e,a){},219:function(t,e,a){"use strict";var n={props:["lang"],data:function(){return{index:0}},methods:{select:function(t){this.index=t,this.$emit("onChange",t)}}},s=(a(186),a(1)),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs"},[a("div",{class:["tab",0===t.index?"active":null],on:{click:function(e){return t.select(0)}}},[t._v(t._s("en-US"===t.lang?"latest":"最新"))]),a("div",{class:["tab",1===t.index?"active":null],on:{click:function(e){return t.select(1)}}},[t._v(t._s("en-US"===t.lang?"topper":"热门"))]),a("div",{class:["tab",2===t.index?"active":null],on:{click:function(e){return t.select(2)}}},[t._v(t._s("en-US"===t.lang?"my favorite":"我的收藏"))]),a("div",{class:["tab",3===t.index?"active":null],on:{click:function(e){return t.select(3)}}},[t._v(t._s("en-US"===t.lang?"my works":"我的发布"))])])},[],!1,null,"5078a1bf",null);e.a=i.exports},230:function(t,e,a){"use strict";var n=a(188);a.n(n).a},304:function(t,e,a){"use strict";a.r(e);a(220),a(52),a(221),a(222),a(178);var n=a(15),s=a.n(n),i=a(180),o=a.n(i),l=a(53),c=a.n(l),r=a(223),d=a.n(r),u=a(184),h=a.n(u),g=a(219),p=a(176),m=a(177),f=["","hot","mycollect","mypublish"],v={props:["lang"],components:{VueTagsInput:d.a,Tab:g.a,Paginate:h.a},data:function(){return{tabIndex:0,tag:"",tags:[],addOnKey:[13,32],articles:[],hotLabels:[],pageCount:0,selectedPageNum:1,loading:!0,texts:"en-US"===this.lang?m.a.info:p.a.info}},created:function(){var t=this;this.handleSearch(!0),s.a.get("".concat(this.API_PREFIX,"/api/project/getHotLabels?format=article")).then(function(e){(e=e.data).success&&(t.hotLabels=e.model&&e.model.split(",")||[])}).catch(function(t){return console.log(t)})},methods:{handleTabChange:function(t){t!==this.tabIndex&&(this.tabIndex=t,this.tags=[],this.selectedPageNum=1,this.loading=!0,this.search("",f[t]))},collect:function(t){var e=this;s.a.post("".concat(this.API_PREFIX,"/api/project/handleCollect"),c.a.stringify({id:t,token:window.localStorage.getItem("token")})).then(function(a){if((a=a.data).success){var n=o.a.findIndex(e.articles,{id:t});2===e.tabIndex?e.handleSearch(!0):(e.articles[n].isCollect?e.$set(e.articles[n],"star",e.articles[n].star-1):e.$set(e.articles[n],"star",e.articles[n].star+1),e.$set(e.articles[n],"isCollect",!e.articles[n].isCollect))}else a.success||"not login"!==a.message||(location.href="".concat(e.API_PREFIX,"/api/github/login"))}).catch(function(t){return console.log(t)})},handleSearch:function(t){if(t||0!==this.tags.length){var e=o.a.map(this.tags,function(t){return t.text}).join(","),a=f[this.tabIndex];this.search(e,a)}},search:function(t,e){var a=this;s.a.post("".concat(this.API_PREFIX,"/api/project/getProjectList"),c.a.stringify({token:window.localStorage.getItem("token"),labels:t,type:e,pageSize:10,pageNumber:this.selectedPageNum,format:"article"})).then(function(t){(t=t.data).success?(a.articles=t.model.map(function(t){return t.labels=t.labels&&t.labels.split(",")||[],t}),a.pageCount=Math.ceil(t.totleCount/10),a.loading=!1):t.success||"not login"!==t.message||(location.href="".concat(a.API_PREFIX,"/api/github/login"))}).catch(function(t){return console.log(t)})},handleLabelClick:function(t){void 0===o.a.find(this.tags,{text:t})&&this.tags.push({text:t}),this.selectedPageNum=1,this.handleSearch(!0)},handlePageChange:function(t){console.log(t),this.selectedPageNum=t,this.handleSearch(!0)},substrDescription:function(t){return t?t.length>80?t.substr(0,80)+"...":t:""},handleDeleteTag:function(t){t.deleteTag(),this.selectedPageNum=1,this.handleSearch(!0)}}},b=(a(230),a(1)),x=Object(b.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"title"},[t._v(t._s(t.texts.solutionTitle))]),a("div",{staticClass:"cont"},[a("Tab",{attrs:{lang:t.lang},on:{onChange:t.handleTabChange}}),a("div",{staticClass:"tag-area"},[a("div",{staticClass:"tag-item"},[a("span",{staticClass:"label-text"},[t._v(t._s(t.texts.searchTag)+"：")]),a("vue-tags-input",{attrs:{tags:t.tags,addOnKey:t.addOnKey,addOnBlur:!1,placeholder:t.texts.placeholder},on:{"tags-changed":function(e){return t.tags=e},"before-deleting-tag":function(e){return t.handleDeleteTag(e)}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}),a("span",{staticClass:"serach-btn",on:{click:t.handleSearch}},[t._v(t._s(t.texts.searchBtn))])],1),a("div",{staticClass:"tag-item"},[a("span",{staticClass:"label-text"},[t._v(t._s(t.texts.hotTags)+"：")]),a("div",t._l(t.hotLabels,function(e){return a("span",{staticClass:"tag-label",on:{click:function(a){return t.handleLabelClick(e)}}},[t._v(t._s(e))])}),0)])]),a("div",{staticClass:"articles"},[t.loading||2!==t.tabIndex||0!==t.articles.length?t.loading||3!==t.tabIndex||0!==t.articles.length?t.loading||0!==t.tabIndex&&1!==t.tabIndex||0!==t.articles.length?t._l(t.articles,function(e){return a("div",{key:e.id,class:e.imgoss?"article":"article noImg"},[a("a",{staticClass:"link",attrs:{href:"en-US"===t.lang?"/solution-detail/detail.html?id="+e.id:"/zh/solution-detail/detail.html?id="+e.id,target:"_blank"}},[a("h4",{staticClass:"a-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"a-summary"},[t._v(t._s(t.substrDescription(e.description)))])]),a("div",t._l(e.labels,function(e){return a("span",{staticClass:"tag-label",on:{click:function(a){return t.handleLabelClick(e)}}},[t._v(t._s(e))])}),0),a("div",{staticClass:"info"},[a("a",{staticClass:"user-github",attrs:{href:"https://github.com/"+e.login,target:"_blank"}},[a("img",{staticClass:"avatar",attrs:{src:e.photo,width:"20",height:"20"}}),a("span",{staticClass:"user-name"},[t._v(t._s(e.login))])]),a("span",[t._v(t._s(e.createdAt))]),a("span",{staticClass:"icon-wrap"},[a("img",{attrs:{src:"/community-eye.svg",width:"16"}}),a("span",{staticClass:"num"},[t._v(t._s(e.pv))]),t._v(t._s(t.texts.pv))]),a("span",{staticClass:"icon-wrap"},[a("img",{staticClass:"star",attrs:{src:e.isCollect?"/community-collect-blue.svg":"/community-collect.svg",width:"14"},on:{click:function(a){return t.collect(e.id)}}}),a("span",{staticClass:"num"},[t._v(t._s(e.star))]),t._v(t._s(t.texts.favor))])]),e.imgoss?a("img",{staticClass:"thumb",attrs:{src:e.imgoss,width:"160",height:"160"}}):t._e()])}):a("div",{staticClass:"no-data"},[t._v("\n        "+t._s(t.texts.noData)+"\n      ")]):a("div",{staticClass:"no-data"},[t._v("\n        "+t._s(t.texts.solutionWorksNone)+"\n        "),a("a",{staticClass:"go-write",attrs:{href:"http://editor.weex.io",target:"_blank"}},[t._v(t._s(t.texts.startWriting))])]):a("div",{staticClass:"no-data"},[t._v("\n        "+t._s(t.texts.solutionFavoriteNone)+"\n        "),a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1rxKOumzqK1RjSZFpXXakSXXa-1017-188.png",width:"100%"}})])],2),t.pageCount>1?a("div",{staticClass:"pagination-wrap"},[a("paginate",{attrs:{"page-count":t.pageCount,"click-handler":t.handlePageChange,"prev-text":"上一页","next-text":"下一页","container-class":"pagination"},model:{value:t.selectedPageNum,callback:function(e){t.selectedPageNum=e},expression:"selectedPageNum"}})],1):t._e()],1)])},[],!1,null,"bfc31a26",null);e.default=x.exports}}]);