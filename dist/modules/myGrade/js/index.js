!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('{"code":200,"message":"success","data":[{"name":"A001"},{"name":"B001"},{"name":"C001"},{"name":"D001"},{"name":"E001"},{"name":"F001"},{"name":"G001"}]}')},function(e,t,n){e.exports=n(4)(12)},function(e,t){e.exports=main_1ec1e95d7989b35a888e},function(e,t,n){e.exports=n.p+"images/logo.png"},function(e,t,n){"use strict";var i=n(0);n.n(i).a},function(e,t,n){"use strict";var i=n(1);n.n(i).a},function(e,t){!function(e,t){var n,i=e.document,r=i.documentElement,o=i.querySelector('meta[name="viewport"]'),a=i.querySelector('meta[name="flexible"]'),s=0,l=0,c=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),s=parseInt(1/l))}else if(a){var u=a.getAttribute("content");if(u){var f=u.match(/initial\-dpr=([\d\.]+)/),p=u.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),l=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),l=parseFloat((1/s).toFixed(2)))}}if(!s&&!l){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;l=1/(s=m?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(r.setAttribute("data-dpr",s),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var h=i.createElement("div");h.appendChild(o),i.write(h.innerHTML)}function g(){var t=r.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;r.style.fontSize=n+"px",c.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(g,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(g,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),g(),c.dpr=e.dpr=s,c.refreshRem=g,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(3),r=n(2);function o(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}var a={name:"share",props:{title:String,desc:String},data:function(){return{href:"",isApp:!1}},created:function(){console.log("created"),console.log(this.$props.title)},mounted:function(){var e,t,n=o();this.isApp=(n.app,!0),(e="award",t="award",new Promise((function(n,i){var r={promotion_name:"",type:"live",channel:e,tags:t};linkedme.init("934e2ee702a248ba59025e330bf36f93",{type:"live"},null),linkedme.link(r,(function(e,t){e?(i(e),console.log("err:",e)):n(t)}),!1)}))).then((function(e){if(e.url){var t=document.getElementById("open_header");t.addEventListener("click",(function(){linkedme.trigger_deeplink(e.url)})),t.setAttribute("href",e.url)}}))}};n(6);function s(e,t,n,i,r,o,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var l={name:"",components:{Share:s(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isApp?i("div",{staticClass:"share"},[i("div",{staticClass:"share-bd"},[i("img",{staticClass:"logo",attrs:{src:n(5),alt:"",width:"40",height:"40"}}),e._v(" "),i("div",{staticClass:"descr"},[i("p",[e._v(e._s(e.title))]),e._v(" "),i("small",[e._v(e._s(e.desc))])])]),e._v(" "),e._m(0)]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"share-ft"},[t("a",{staticClass:"btn",attrs:{id:"open_header",href:""}},[this._v("打开")])])}],!1,null,null,null).exports},props:{value:{type:String,default:"is"}},data:function(){return{msg:"",list:[]}},created:function(){this.init()},mounted:function(){console.log(r),this.list=r.data||[]},methods:{init:function(){window.webkit.messageHandlers.getTicket.postMessage(null)},consoleTicket:function(){this.$nextTick((function(){console.log(info),console.log("info=============")}))}}},c=(n(7),s(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Share",{attrs:{title:"哎呀语音",desc:"哎呀，你也在这里～"}}),e._v(" "),n("div",{staticClass:"max"}),e._v(" "),n("ul",e._l(e.list,(function(t){return n("li",[e._v(e._s(t.name))])})),0),e._v(" "),n("button",{staticClass:"btn"},[e._v("这是一个按钮")])],1)}),[],!1,null,null,null).exports);n(8),n(9);window.info={},window.getMessage=function(e,t){console.log("".concat(e,"=").concat(t)),info[e]=t},new i.default({render:function(e){return e(c)}}).$mount("#root")}]);