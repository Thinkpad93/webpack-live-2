!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t){e.exports=axios},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t){!function(e,t){var n,r=e.document,o=r.documentElement,i=r.querySelector('meta[name="viewport"]'),a=r.querySelector('meta[name="flexible"]'),s=0,u=0,c=t.flexible||(t.flexible={});if(i){console.warn("将根据已有的meta标签来设置缩放比例");var l=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(u=parseFloat(l[1]),s=parseInt(1/u))}else if(a){var d=a.getAttribute("content");if(d){var f=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),u=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),u=parseFloat((1/s).toFixed(2)))}}if(!s&&!u){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),v=e.devicePixelRatio;u=1/(s=m?v>=3&&(!s||s>=3)?3:v>=2&&(!s||s>=2)?2:1:1)}if(o.setAttribute("data-dpr",s),!i)if((i=r.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(i);else{var h=r.createElement("div");h.appendChild(i),r.write(h.innerHTML)}function b(){var t=o.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;o.style.fontSize=n+"px",c.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(b,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(b,300))}),!1),"complete"===r.readyState?r.body.style.fontSize=12*s+"px":r.addEventListener("DOMContentLoaded",(function(e){r.body.style.fontSize=12*s+"px"}),!1),b(),c.dpr=e.dpr=s,c.refreshRem=b,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r).a.create({timeout:2e4});o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data&&e.data.code,e.data}),(function(e){return Promise.reject(e)}));var i=o;var a={name:"appUpdate",data:function(){return{isClick:!1,isShowText:!1,query:{password:"",location_href:"https://www.jikeqi.com/6VRz"}}},mounted:function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.get("https://www.jikeqi.com/jsonFormat/6VRz",{params:e})})(this.query).then((function(e){if(200==e.code){var t=e.data.info,n=decodeURIComponent(t.downurl);document.querySelector(".update").setAttribute("href",n)}}))},methods:{handle:function(e){var t=this;console.log(e);var n=document.querySelector(".install"),r=document.querySelector(".update");e.target.disabled=!0,n.style.width="40px";setTimeout((function(){n.classList.add("download"),r.click()}),300),setTimeout((function(){t.isShowText=!0}),4e3)}}};n(2);var s=function(e,t,n,r,o,i,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"page-bd"},[n("div",{staticClass:"update-box"},[n("a",{staticClass:"update",staticStyle:{display:"none"},attrs:{href:""}}),e._v(" "),e.isShowText?e._e():n("button",{staticClass:"install",class:{download:e.isClick},attrs:{type:"button"},on:{click:function(t){return e.handle(t)}}},[e._v("\n        下载安装\n      ")]),e._v(" "),e.isShowText?n("p",[e._v("正在安装，请按 Home 键在桌面查看")]):e._e()])])])}),[],!1,null,null,null).exports;n(3),n(4);new VConsole,new Vue({render:function(e){return e(s)}}).$mount("#root")}]);