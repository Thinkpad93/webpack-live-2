!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n(5)(12)},function(e){e.exports=JSON.parse('{"code":200,"message":"success","data":[{"name":"A001"},{"name":"B001"},{"name":"C001"},{"name":"D001"},{"name":"E001"},{"name":"F001"},{"name":"G001"}]}')},function(e,t){e.exports=main_1ec1e95d7989b35a888e},function(e,t,n){e.exports=n.p+"images/logo.png"},function(e,t,n){"use strict";var i=n(1);n.n(i).a},function(e,t,n){"use strict";var i=n(2);n.n(i).a},function(e,t){!function(e,t){var n,i=e.document,o=i.documentElement,r=i.querySelector('meta[name="viewport"]'),a=i.querySelector('meta[name="flexible"]'),s=0,l=0,c=t.flexible||(t.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),s=parseInt(1/l))}else if(a){var u=a.getAttribute("content");if(u){var f=u.match(/initial\-dpr=([\d\.]+)/),p=u.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),l=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),l=parseFloat((1/s).toFixed(2)))}}if(!s&&!l){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;l=1/(s=m?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(o.setAttribute("data-dpr",s),!r)if((r=i.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(r);else{var g=i.createElement("div");g.appendChild(r),i.write(g.innerHTML)}function h(){var t=o.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;o.style.fontSize=n+"px",c.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(h,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(h,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),h(),c.dpr=e.dpr=s,c.refreshRem=h,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(3),o=n(4),r=n(0),a=n.n(r);function s(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}function l(){var e=s(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getUid.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":a()(androidJsObj))&&(t=parseInt(window.androidJsObj.getUid())),t}var c={name:"share",props:{title:String,desc:String},data:function(){return{href:"",isApp:!1}},created:function(){console.log("created"),console.log(this.$props.title)},mounted:function(){var e,t,n=s();this.isApp=(n.app,!0),(e="award",t="award",new Promise((function(n,i){var o={promotion_name:"",type:"live",channel:e,tags:t};linkedme.init("934e2ee702a248ba59025e330bf36f93",{type:"live"},null),linkedme.link(o,(function(e,t){e?(i(e),console.log("err:",e)):n(t)}),!1)}))).then((function(e){if(e.url){var t=document.getElementById("open_header");t.addEventListener("click",(function(){linkedme.trigger_deeplink(e.url)})),t.setAttribute("href",e.url)}}))}};n(7);function d(e,t,n,i,o,r,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var u=d(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isApp?i("div",{staticClass:"share"},[i("div",{staticClass:"share-bd"},[i("img",{staticClass:"logo",attrs:{src:n(6),alt:"",width:"40",height:"40"}}),e._v(" "),i("div",{staticClass:"descr"},[i("p",[e._v(e._s(e.title))]),e._v(" "),i("small",[e._v(e._s(e.desc))])])]),e._v(" "),e._m(0)]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"share-ft"},[t("a",{staticClass:"btn",attrs:{id:"open_header",href:""}},[this._v("打开")])])}],!1,null,null,null).exports,f={set:function(e,t,n){var i=new Date,o=n;i.setTime(i.getTime()+24*o*3600*1e3),document.cookie=e+"="+t+";expires="+i.toGMTString()},get:function(e){for(var t,n=document.cookie.replace(/[ ]/g,"").split(";"),i=0;i<n.length;i++){var o=n[i].split("=");if(e===o[0]){t=o[1];break}}return t},delete:function(e){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie=e+"=v; expires ="+t.toGMTString()}},p={name:"",components:{Share:u},data:function(){return{msg:"",list:[],info:{uid:l()||f.get("uid"),ticket:null}}},created:function(){this.init()},mounted:function(){this.list=o.data||[]},methods:{init:function(){var e=this;!function(){var e=s(),t=null;if(e.app)e.ios&&window.webkit.messageHandlers.getTicket.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":a()(androidJsObj))&&(t=window.androidJsObj.getTicket())}(),window.getMessage=function(t,n){e.info[t]=n,e.info.ticket&&(console.log("都有值了"),e.consoleTicket())}},consoleTicket:function(){console.log(this.info),console.log(this.info.ticket),console.log("info=============")}}},m=(n(8),d(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Share",{attrs:{title:"哎呀语音",desc:"哎呀，你也在这里～"}}),e._v(" "),n("div",{staticClass:"max"}),e._v(" "),n("ul",e._l(e.list,(function(t){return n("li",[e._v(e._s(t.name))])})),0)],1)}),[],!1,null,null,null).exports);n(9),n(10);new VConsole,new i.default({render:function(e){return e(m)}}).$mount("#root")}]);