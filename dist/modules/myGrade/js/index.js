!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=main_1ec1e95d7989b35a888e},function(e,t,n){e.exports=n(3)(12)},function(e,t,n){e.exports=n(3)(16)},function(e){e.exports=JSON.parse('{"code":200,"message":"success","data":[{"name":"A001"},{"name":"B001"},{"name":"C001"},{"name":"D001"},{"name":"E001"},{"name":"F001"},{"name":"G001"}]}')},function(e,t,n){e.exports=n.p+"images/logo.png"},function(e,t,n){"use strict";var i=n(1);n.n(i).a},function(e,t,n){"use strict";var i=n(2);n.n(i).a},function(e,t){!function(e,t){var n,i=e.document,r=i.documentElement,o=i.querySelector('meta[name="viewport"]'),a=i.querySelector('meta[name="flexible"]'),s=0,c=0,l=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(c=parseFloat(u[1]),s=parseInt(1/c))}else if(a){var d=a.getAttribute("content");if(d){var f=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;c=1/(s=m?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(r.setAttribute("data-dpr",s),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var g=i.createElement("div");g.appendChild(o),i.write(g.innerHTML)}function h(){var t=r.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;r.style.fontSize=n+"px",l.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(h,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(h,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),h(),l.dpr=e.dpr=s,l.refreshRem=h,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(4),r=n(5),o=n.n(r).a.create({baseURL:"https://api-user.uyess.com/v2",timeout:2e4,withCredentials:!0});o.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)}));var a=o,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.get("/userLevel/getUserExper",{params:e}).then((function(e){return e.data}))},c=n(6),l=n(0),u=n.n(l);function d(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}function f(){var e=d(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getUid.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":u()(androidJsObj))&&(t=parseInt(window.androidJsObj.getUid())),t}var p={name:"share",props:{title:String,desc:String},data:function(){return{href:"",isApp:!1}},created:function(){console.log("created"),console.log(this.$props.title)},mounted:function(){var e,t,n=d();this.isApp=(n.app,!0),(e="award",t="award",new Promise((function(n,i){var r={promotion_name:"",type:"live",channel:e,tags:t};linkedme.init("934e2ee702a248ba59025e330bf36f93",{type:"live"},null),linkedme.link(r,(function(e,t){e?(i(e),console.log("err:",e)):n(t)}),!1)}))).then((function(e){if(e.url){var t=document.getElementById("open_header");t.addEventListener("click",(function(){linkedme.trigger_deeplink(e.url)})),t.setAttribute("href",e.url)}}))}};n(8);function m(e,t,n,i,r,o,a,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}var v=m(p,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isApp?i("div",{staticClass:"share"},[i("div",{staticClass:"share-bd"},[i("img",{staticClass:"logo",attrs:{src:n(7),alt:"",width:"40",height:"40"}}),e._v(" "),i("div",{staticClass:"descr"},[i("p",[e._v(e._s(e.title))]),e._v(" "),i("small",[e._v(e._s(e.desc))])])]),e._v(" "),e._m(0)]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"share-ft"},[t("a",{staticClass:"btn",attrs:{id:"open_header",href:""}},[this._v("打开")])])}],!1,null,null,null).exports,g={set:function(e,t,n){var i=new Date,r=n;i.setTime(i.getTime()+24*r*3600*1e3),document.cookie=e+"="+t+";expires="+i.toGMTString()},get:function(e){for(var t,n=document.cookie.replace(/[ ]/g,"").split(";"),i=0;i<n.length;i++){var r=n[i].split("=");if(e===r[0]){t=r[1];break}}return t},delete:function(e){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie=e+"=v; expires ="+t.toGMTString()}},h={name:"",components:{Share:v},data:function(){return{msg:"",list:[],info:{uid:f()||g.get("uid")}}},created:function(){this.init()},mounted:function(){this.list=c.data||[],this.getUserExper()},methods:{init:function(){var e=this;window.getMessage=function(t,n){console.log("".concat(t,"-").concat(n)),e.info[t]=n,(e.info.ticket||e.info.uid)&&(console.log("都有值了"),e.getUserExper())}},getUserExper:function(){s(this.info).then((function(e){console.log("res")}))}}},b=(n(9),m(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Share",{attrs:{title:"哎呀语音",desc:"哎呀，你也在这里～"}}),e._v(" "),n("div",{staticClass:"max"}),e._v(" "),n("ul",e._l(e.list,(function(t){return n("li",[e._v(e._s(t.name))])})),0)],1)}),[],!1,null,null,null).exports);n(10),n(11);new VConsole,new i.default({render:function(e){return e(b)}}).$mount("#root")}]);