!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){},function(e,t,n){},function(e,t){e.exports=main_1ec1e95d7989b35a888e},function(e,t,n){e.exports=n(2)(12)},function(e,t,n){e.exports=n(2)(16)},function(e,t,n){e.exports=n.p+"images/logo.png"},function(e,t,n){"use strict";var i=n(0);n.n(i).a},function(e,t,n){"use strict";var i=n(1);n.n(i).a},function(e,t){!function(e,t){var n,i=e.document,r=i.documentElement,o=i.querySelector('meta[name="viewport"]'),a=i.querySelector('meta[name="flexible"]'),s=0,c=0,l=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(c=parseFloat(u[1]),s=parseInt(1/c))}else if(a){var d=a.getAttribute("content");if(d){var f=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;c=1/(s=m?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(r.setAttribute("data-dpr",s),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var h=i.createElement("div");h.appendChild(o),i.write(h.innerHTML)}function g(){var t=r.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;r.style.fontSize=n+"px",l.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(g,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(g,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),g(),l.dpr=e.dpr=s,l.refreshRem=g,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(3);var r=n(4),o=n.n(r).a.create({baseURL:"https://api-user.uyess.com/v2",timeout:2e4,withCredentials:!0});o.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)}));var a=o,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.get("/home/hot?city_id=1987&qd_no=uyes_gzh",{params:e}).then((function(e){return e.data}))};function c(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}var l={name:"share",props:{title:String,desc:String},data:function(){return{href:"",isApp:!1}},mounted:function(){var e,t,n=c();this.isApp=(n.app,!0),(e="award",t="award",new Promise((function(n,i){var r={promotion_name:"",type:"live",channel:e,tags:t};linkedme.init("934e2ee702a248ba59025e330bf36f93",{type:"live"},null),linkedme.link(r,(function(e,t){e?(i(e),console.log("err:",e)):n(t)}),!1)}))).then((function(e){if(e.url){var t=document.getElementById("open_header");t.addEventListener("click",(function(){linkedme.trigger_deeplink(e.url)})),t.setAttribute("href",e.url)}}))}};n(6);function u(e,t,n,i,r,o,a,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}var d={name:"award",components:{Share:u(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isApp?i("div",{staticClass:"share"},[i("div",{staticClass:"share-bd"},[i("img",{staticClass:"logo",attrs:{src:n(5),alt:"",width:"40",height:"40"}}),e._v(" "),i("div",{staticClass:"descr"},[i("p",[e._v(e._s(e.title))]),e._v(" "),i("small",[e._v(e._s(e.desc))])])]),e._v(" "),e._m(0)]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"share-ft"},[t("a",{staticClass:"btn",attrs:{id:"open_header",href:""}},[this._v("打开")])])}],!1,null,null,null).exports},data:function(){return{msg:"这是arard页面",uid:null,ticket:null,query:{uid:"90293691",type:2,subType:1}}},created:function(){this.init();!function(){var e=location.search,t=new Object;if(-1!=e.indexOf("?")){var n=e.substr(1).split("&");for(var i in n)t[n[i].split("=")[0]]=decodeURI(n[i].split("=")[1])}}()},mounted:function(){console.log(this),this.list()},methods:{init:function(){console.log("初始化操作，如获取用户id")},Getticket:function(){},getUidfn:function(){console.log("getUidfn"),console.log(info),console.log(info.uid)},postMessage:function(){},propsData:function(){return new Promise((function(e,t){}))},list:function(){s({}).then((function(e){console.log(e)}))}}},f=(n(7),u(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Share",{attrs:{title:"哎呀语音",desc:"哎呀，你也在这里～"}}),e._v(" "),n("div",{staticClass:"page-bd"},[n("p",[e._v(e._s(e.msg))]),e._v(" "),n("p",{},[n("button",{staticClass:"btn",on:{click:e.Getticket}},[e._v("获取ticket")])]),e._v(" "),n("p",{},[n("button",{staticClass:"btn",on:{click:e.getUidfn}},[e._v("获取uid")])])])],1)}),[],!1,null,null,null).exports);n(8),n(9);window.info={},window.getMessage=function(e,t){console.log("".concat(e,"=").concat(t)),info[e]=t},new i.default({render:function(e){return e(f)}}).$mount("#root")}]);