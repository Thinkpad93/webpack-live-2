(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(4);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,qq:" qq"==e.match(/\sQQ/i),app:"mengshengApp"==e.match("mengshengApp")}}function r(){var e=a(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getUid.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":o(androidJsObj))&&(t=parseInt(window.androidJsObj.getUid())),t}function s(){var e=a(),t=null;if(e.app)return e.ios&&window.webkit.messageHandlers.getTicket.postMessage(null),e.android&&androidJsObj&&"object"===("undefined"==typeof androidJsObj?"undefined":o(androidJsObj))&&(t=window.androidJsObj.getTicket()),t}var d={name:"award",data:function(){return{msg:"这是arard页面",uid:r(),ticket:s()}},created:function(){this.init(),this.postMessage()},mounted:function(){console.log(this)},methods:{init:function(){console.log("初始化操作，如获取用户id")},getUidfn:function(){console.log("getUidfn"),console.log(info)},postMessage:function(){console.log("info============================"),console.log(info)},propsData:function(){return new Promise((function(e,t){}))}}},c=(n(5),n(2)),l=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"page-bd"},[n("p",[e._v(e._s(e.msg))]),e._v(" "),n("p",{},[n("button",{staticClass:"btn",on:{click:e.Getticket}},[e._v("获取ticket")])]),e._v(" "),n("p",{},[n("button",{staticClass:"btn",on:{click:e.getUidfn}},[e._v("获取uid")])])])])}),[],!1,null,null,null).exports,u=(n(6),n(7),n(3)),f=n.n(u);window.info={},window.getMessage=function(e,t){info[e]=t};new f.a;new i.a({render:function(e){return e(l)}}).$mount("#root")},5:function(e,t,n){"use strict";var i=n(0);n.n(i).a},7:function(e,t){!function(e,t){var n,i=e.document,o=i.documentElement,a=i.querySelector('meta[name="viewport"]'),r=i.querySelector('meta[name="flexible"]'),s=0,d=0,c=t.flexible||(t.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var l=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(d=parseFloat(l[1]),s=parseInt(1/d))}else if(r){var u=r.getAttribute("content");if(u){var f=u.match(/initial\-dpr=([\d\.]+)/),p=u.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),d=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),d=parseFloat((1/s).toFixed(2)))}}if(!s&&!d){e.navigator.appVersion.match(/android/gi);var m=e.navigator.appVersion.match(/iphone/gi),b=e.devicePixelRatio;d=1/(s=m?b>=3&&(!s||s>=3)?3:b>=2&&(!s||s>=2)?2:1:1)}if(o.setAttribute("data-dpr",s),!a)if((a=i.createElement("meta")).setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(a);else{var g=i.createElement("div");g.appendChild(a),i.write(g.innerHTML)}function w(){var t=o.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;o.style.fontSize=n+"px",c.rem=e.rem=n}e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(w,300)}),!1),e.addEventListener("pageshow",(function(e){e.persisted&&(clearTimeout(n),n=setTimeout(w,300))}),!1),"complete"===i.readyState?i.body.style.fontSize=12*s+"px":i.addEventListener("DOMContentLoaded",(function(e){i.body.style.fontSize=12*s+"px"}),!1),w(),c.dpr=e.dpr=s,c.refreshRem=w,c.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},c.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))}},[[12,1,2]]]);