(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){},,,,function(e,t,n){"use strict";var i=n(0);n.n(i).a},,function(e,t){!function(e,t){var n,i=e.document,r=i.documentElement,o=i.querySelector('meta[name="viewport"]'),a=i.querySelector('meta[name="flexible"]'),d=0,s=0,l=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var c=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(s=parseFloat(c[1]),d=parseInt(1/s))}else if(a){var u=a.getAttribute("content");if(u){var p=u.match(/initial\-dpr=([\d\.]+)/),f=u.match(/maximum\-dpr=([\d\.]+)/);p&&(d=parseFloat(p[1]),s=parseFloat((1/d).toFixed(2))),f&&(d=parseFloat(f[1]),s=parseFloat((1/d).toFixed(2)))}}if(!d&&!s){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),b=e.devicePixelRatio;s=1/(d=m?b>=3&&(!d||d>=3)?3:b>=2&&(!d||d>=2)?2:1:1)}if(r.setAttribute("data-dpr",d),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var h=i.createElement("div");h.appendChild(o),i.write(h.innerHTML)}function w(){var t=r.getBoundingClientRect().width;t/d>540&&(t=540*d);var n=t/10;r.style.fontSize=n+"px",l.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(w,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(w,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*d+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*d+"px"}),!1),w(),l.dpr=e.dpr=d,l.refreshRem=w,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},,,,function(e,t,n){"use strict";n.r(t);var i=n(3);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}var a={name:"award",data:function(){return{msg:"这是arard页面",uid:null,ticket:null}},created:function(){this.init()},mounted:function(){},methods:{init:function(){console.log("初始化操作，如获取用户id")},propsData:function(){var e=this;return new Promise((function(t,n){e.uid=function(){var e=o(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getUid.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":r(androidJsObj))&&(t=parseInt(window.androidJsObj.getUid())),t}(),e.kicket=function(){var e=o(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getTicket.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":r(androidJsObj))&&(t=window.androidJsObj.getTicket()),t}()}))}}},d=(n(4),n(2)),s=Object(d.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"page-bd"},[t("p",[this._v(this._s(this.msg))])])])}),[],!1,null,null,null).exports;n(5),n(6);new i.a({render:function(e){return e(s)}}).$mount("#root")}],[[10,1,2]]]);