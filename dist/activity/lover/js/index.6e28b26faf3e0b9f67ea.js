!function(t){function e(e){for(var r,n,i=e[0],a=e[1],c=0,s=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&s.push(o[n][0]),o[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(u&&u(e);s.length;)s.shift()()}var r={},n={1:0},o={1:0};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];n[t]?e.push(n[t]):0!==n[t]&&{0:1}[t]&&e.push(n[t]=new Promise((function(e,r){for(var o="css/"+({0:"article",2:"list"}[t]||t)+"."+{0:"d3ea34e742dfb8e0e63d",2:"31d6cfe0d16ae931b73c"}[t]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=(f=c[s]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(u===o||u===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){var f;if((u=(f=p[s]).getAttribute("data-href"))===o||u===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[t],h.parentNode.removeChild(h),r(i)},h.href=a,document.getElementsByTagName("head")[0].appendChild(h)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+"js/"+({0:"article",2:"list"}[t]||t)+"."+{0:"f603d29c529046a5cc8c",2:"dfe1be72df0f39b2dc16"}[t]+".js"}(t);var u=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=c;i(i.s=6)}([function(t,e,r){},function(t,e){t.exports=Vue},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var p=u.render;u.render=function(t,e){return s.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";var n=r(0);r.n(n).a},function(t,e){!function(t,e){var r,n=t.document,o=n.documentElement,i=n.querySelector('meta[name="viewport"]'),a=n.querySelector('meta[name="flexible"]'),c=0,s=0,u=e.flexible||(e.flexible={});if(i){console.warn("将根据已有的meta标签来设置缩放比例");var p=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(s=parseFloat(p[1]),c=parseInt(1/s))}else if(a){var f=a.getAttribute("content");if(f){var h=f.match(/initial\-dpr=([\d\.]+)/),l=f.match(/maximum\-dpr=([\d\.]+)/);h&&(c=parseFloat(h[1]),s=parseFloat((1/c).toFixed(2))),l&&(c=parseFloat(l[1]),s=parseFloat((1/c).toFixed(2)))}}if(!c&&!s){t.navigator.appVersion.match(/android/gi);var d=t.navigator.appVersion.match(/iphone/gi),v=t.devicePixelRatio;s=1/(c=d?v>=3&&(!c||c>=3)?3:v>=2&&(!c||c>=2)?2:1:1)}if(o.setAttribute("data-dpr",c),!i)if((i=n.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(i);else{var y=n.createElement("div");y.appendChild(i),n.write(y.innerHTML)}function m(){var e=o.getBoundingClientRect().width;e/c>540&&(e=540*c);var r=e/10;o.style.fontSize=r+"px",u.rem=t.rem=r}t.addEventListener("resize",(function(){clearTimeout(r),r=setTimeout(m,300)}),!1),t.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(r),r=setTimeout(m,300))}),!1),"complete"===n.readyState?n.body.style.fontSize=12*c+"px":n.addEventListener("DOMContentLoaded",(function(t){n.body.style.fontSize=12*c+"px"}),!1),m(),u.dpr=t.dpr=c,u.refreshRem=m,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),i={name:"App"},a=(r(3),r(2)),c=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-bd"},[e("router-view")],1)])}),[],!1,null,null,null).exports;function s(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function u(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function p(t,e){for(var r in e)t[r]=e[r];return t}var f={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$createElement,c=r.name,s=o.$route,u=o._routerViewCache||(o._routerViewCache={}),f=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&f++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(i.routerViewDepth=f,l){var v=u[c],y=v&&v.component;return y?(v.configProps&&h(y,i,v.route,v.configProps),a(y,i,n)):a()}var m=s.matched[f],g=m&&m.components[c];if(!m||!g)return u[c]=null,a();u[c]={component:g},i.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var b=m.props&&m.props[c];return b&&(p(u[c],{route:s,configProps:b}),h(g,i,s,b)),a(g,i,n)}};function h(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,n);if(o){o=e.props=p({},o);var i=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(i[a]=o[a],delete o[a])}}var l=/[!'()*]/g,d=function(t){return"%"+t.charCodeAt(0).toString(16)},v=/%2C/g,y=function(t){return encodeURIComponent(t).replace(l,d).replace(v,",")},m=decodeURIComponent;function g(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=m(r.shift()),o=r.length>0?m(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function b(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return y(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(y(e)):n.push(y(e)+"="+y(t)))})),n.join("&")}return y(e)+"="+y(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var w=/\/?$/;function x(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=_(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:R(e,o),matched:t?k(t):[]};return r&&(a.redirectedFrom=R(r,o)),Object.freeze(a)}function _(t){if(Array.isArray(t))return t.map(_);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=_(t[r]);return e}return t}var E=x(null,{path:"/"});function k(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function R(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||b)(n)+o}function C(t,e){return e===E?t===e:!!e&&(t.path&&e.path?t.path.replace(w,"")===e.path.replace(w,"")&&t.hash===e.hash&&O(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&O(t.query,e.query)&&O(t.params,e.params)))}function O(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?O(n,o):String(n)===String(o)}))}function A(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var c=i[a];".."===c?o.pop():"."!==c&&o.push(c)}return""!==o[0]&&o.unshift(""),o.join("/")}function j(t){return t.replace(/\/\//g,"/")}var S=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=D,$=I,P=function(t,e){return F(I(t,e))},L=F,q=H,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t,e){for(var r,n=[],o=0,i=0,a="",c=e&&e.delimiter||"/";null!=(r=U.exec(t));){var s=r[0],u=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,u)a+=u[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||c,_=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:_?B(_):m?".*":"[^"+V(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?M:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var u,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(S(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(u=a(p[f]),!e[c].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?s.prefix:s.delimiter)+u}}else{if(u=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!e[c].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+u+'"');o+=s.prefix+u}}else o+=s}return o}}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function N(t,e){return t.keys=e,t}function z(t){return t.sensitive?"":"i"}function H(t,e,r){S(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=V(c);else{var s=V(c.prefix),u="(?:"+c.pattern+")";e.push(c),c.repeat&&(u+="(?:"+s+u+")*"),i+=u=c.optional?c.partial?s+"("+u+")?":"(?:"+s+"("+u+"))?":s+"("+u+")"}}var p=V(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",N(new RegExp("^"+i,z(r)),e)}function D(t,e,r){return S(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return N(t,e)}(t,e):S(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(D(t[o],e,r).source);return N(new RegExp("(?:"+n.join("|")+")",z(r)),e)}(t,e,r):function(t,e,r){return H(I(t,r),e,r)}(t,e,r)}T.parse=$,T.compile=P,T.tokensToFunction=L,T.tokensToRegExp=q;var K=Object.create(null);function J(t,e,r){e=e||{};try{var n=K[t]||(K[t]=T.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function X(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var i=(o=p({},t)).params;return i&&"object"==typeof i&&(o.params=p({},i)),o}if(!o.path&&o.params&&e){(o=p({},o))._normalized=!0;var a=p(p({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=J(c,a,e.path)}else 0;return o}var s=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),u=e&&e.path||"/",f=s.path?A(s.path,u,r||o.append):u,h=function(t,e,r){void 0===e&&(e={});var n,o=r||g;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(s.query,o.query,n&&n.options.parseQuery),l=o.hash||s.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}var Q,Y=function(){},W={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,c=o.href,s={},u=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==u?"router-link-active":u,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,y=a.redirectedFrom?x(null,X(a.redirectedFrom),null,r):a;s[v]=C(n,y),s[d]=this.exact?s[v]:function(t,e){return 0===t.path.replace(w,"/").indexOf(e.path.replace(w,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,y);var m=function(t){G(t)&&(e.replace?r.replace(i,Y):r.push(i,Y))},g={click:G};Array.isArray(this.event)?this.event.forEach((function(t){g[t]=m})):g[this.event]=m;var b={class:s},_=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:m,isActive:s[d],isExactActive:s[v]});if(_){if(1===_.length)return _[0];if(_.length>1||!_.length)return 0===_.length?t():t("span",{},_)}if("a"===this.tag)b.on=g,b.attrs={href:c};else{var E=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(E){E.isStatic=!1;var k=E.data=p({},E.data);for(var R in k.on=k.on||{},k.on){var O=k.on[R];R in g&&(k.on[R]=Array.isArray(O)?O:[O])}for(var A in g)A in k.on?k.on[A].push(g[A]):k.on[A]=m;(E.data.attrs=p({},E.data.attrs)).href=c}else b.on=g}return t(this.tag,b,this.$slots.default)}};function G(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var Z="undefined"!=typeof window;function tt(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var c=o.path,s=o.name;0;var u=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return j(e.path+"/"+t)}(c,i,u.strict);"boolean"==typeof o.caseSensitive&&(u.sensitive=o.caseSensitive);var f={path:p,regex:et(p,u),components:o.components||{default:o.component},instances:{},name:s,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?j(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}s&&(n[s]||(n[s]=f))}(o,i,a,t)}));for(var c=0,s=o.length;c<s;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),s--,c--);return{pathList:o,pathMap:i,nameMap:a}}function et(t,e){return T(t,[],e)}function rt(t,e){var r=tt(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var c=X(t,r,!1,e),u=c.name;if(u){var p=i[u];if(!p)return s(null,c);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof c.params&&(c.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in c.params)&&f.indexOf(h)>-1&&(c.params[h]=r.params[h]);return c.path=J(p.path,c.params),s(p,c,a)}if(c.path){c.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(nt(v.regex,c.path,c.params))return s(v,c,a)}}return s(null,c)}function c(t,r){var n=t.redirect,o="function"==typeof n?n(x(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var c=o,u=c.name,p=c.path,f=r.query,h=r.hash,l=r.params;if(f=c.hasOwnProperty("query")?c.query:f,h=c.hasOwnProperty("hash")?c.hash:h,l=c.hasOwnProperty("params")?c.params:l,u){i[u];return a({_normalized:!0,name:u,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return A(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:J(d,l),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?c(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:J(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):x(t,r,n,e)}return{match:a,addRoutes:function(t){tt(t,n,o,i)}}}function nt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],c="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=c)}return!0}var ot=Z&&window.performance&&window.performance.now?window.performance:Date;function it(){return ot.now().toFixed(3)}var at=it();function ct(){return at}function st(t){return at=t}var ut=Object.create(null);function pt(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=p({},window.history.state);r.key=ct(),window.history.replaceState(r,"",e),window.addEventListener("popstate",(function(t){ht(),t.state&&t.state.key&&st(t.state.key)}))}function ft(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=ct();if(t)return ut[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){mt(t,i)})).catch((function(t){0})):mt(a,i))}))}}function ht(){var t=ct();t&&(ut[t]={x:window.pageXOffset,y:window.pageYOffset})}function lt(t){return vt(t.x)||vt(t.y)}function dt(t){return{x:vt(t.x)?t.x:window.pageXOffset,y:vt(t.y)?t.y:window.pageYOffset}}function vt(t){return"number"==typeof t}var yt=/^#\d/;function mt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=yt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:vt((r=i).x)?r.x:0,y:vt(r.y)?r.y:0})}else lt(t)&&(e=dt(t))}else n&&lt(t)&&(e=dt(t));e&&window.scrollTo(e.x,e.y)}var gt,bt=Z&&((-1===(gt=window.navigator.userAgent).indexOf("Android 2.")&&-1===gt.indexOf("Android 4.0")||-1===gt.indexOf("Mobile Safari")||-1!==gt.indexOf("Chrome")||-1!==gt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history);function wt(t,e){ht();var r=window.history;try{if(e){var n=p({},r.state);n.key=ct(),r.replaceState(n,"",t)}else r.pushState({key:st(it())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function xt(t){wt(t,!0)}function _t(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function Et(t){return function(e,r,n){var o=!1,i=0,a=null;kt(t,(function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u,p=Ot((function(e){var o;((o=e).__esModule||Ct&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:Q.extend(e),r.components[c]=e,--i<=0&&n()})),f=Ot((function(t){var e="Failed to resolve async component "+c+": "+t;a||(a=s(t)?t:new Error(e),n(a))}));try{u=t(p,f)}catch(t){f(t)}if(u)if("function"==typeof u.then)u.then(p,f);else{var h=u.component;h&&"function"==typeof h.then&&h.then(p,f)}}})),o||n()}}function kt(t,e){return Rt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Rt(t){return Array.prototype.concat.apply([],t)}var Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Ot(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var At=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);At._name="NavigationDuplicated";var jt=function(t,e){this.router=t,this.base=function(t){if(!t)if(Z){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=E,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function St(t,e,r,n){var o=kt(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=Q.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Rt(n?o.reverse():o)}function Tt(t,e){if(e)return function(){return t.apply(e,arguments)}}jt.prototype.listen=function(t){this.cb=t},jt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},jt.prototype.onError=function(t){this.errorCbs.push(t)},jt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},jt.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current,i=function(t){!u(At,t)&&s(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)};if(C(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),i(new At(t));var a=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),c=a.updated,p=a.deactivated,f=a.activated,h=[].concat(function(t){return St(t,"beforeRouteLeave",Tt,!0)}(p),this.router.beforeHooks,function(t){return St(t,"beforeRouteUpdate",Tt)}(c),f.map((function(t){return t.beforeEnter})),Et(f));this.pending=t;var l=function(e,r){if(n.pending!==t)return i();try{e(t,o,(function(t){!1===t||s(t)?(n.ensureURL(!0),i(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(i(),"object"==typeof t&&t.replace?n.replace(t):n.push(t)):r(t)}))}catch(t){i(t)}};_t(h,l,(function(){var r=[];_t(function(t,e,r){return St(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,c){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),c(t)}))}}(t,o,i,e,r)}))}(f,r,(function(){return n.current===t})).concat(n.router.resolveHooks),l,(function(){if(n.pending!==t)return i();n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},jt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(r){r&&r(t,e)}))};var $t=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior,i=bt&&o;i&&pt();var a=Pt(this.base);window.addEventListener("popstate",(function(t){var r=n.current,o=Pt(n.base);n.current===E&&o===a||n.transitionTo(o,(function(t){i&&ft(e,t,r,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){wt(j(n.base+t.fullPath)),ft(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){xt(j(n.base+t.fullPath)),ft(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Pt(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?wt(e):xt(e)}},e.prototype.getCurrentLocation=function(){return Pt(this.base)},e}(jt);function Pt(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Lt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Pt(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}(this.base)||qt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=bt&&e;r&&pt(),window.addEventListener(bt?"popstate":"hashchange",(function(){var e=t.current;qt()&&t.transitionTo(Ut(),(function(n){r&&ft(t.router,n,e,!0),bt||Ft(n.fullPath)}))}))},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Mt(t.fullPath),ft(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ft(t.fullPath),ft(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ut()!==e&&(t?Mt(e):Ft(e))},e.prototype.getCurrentLocation=function(){return Ut()},e}(jt);function qt(){var t=Ut();return"/"===t.charAt(0)||(Ft("/"+t),!1)}function Ut(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function It(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Mt(t){bt?wt(It(t)):window.location.hash=t}function Ft(t){bt?xt(It(t)):window.location.replace(It(t))}var Vt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){u(At,t)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(jt),Bt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=rt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!bt&&!1!==t.fallback,this.fallback&&(e="hash"),Z||(e="abstract"),this.mode=e,e){case"history":this.history=new $t(this,t.base);break;case"hash":this.history=new Lt(this,t.base,this.fallback);break;case"abstract":this.history=new Vt(this,t.base);break;default:0}},Nt={currentRoute:{configurable:!0}};function zt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Bt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Nt.currentRoute.get=function(){return this.history&&this.history.current},Bt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var r=this.history;if(r instanceof $t)r.transitionTo(r.getCurrentLocation());else if(r instanceof Lt){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Bt.prototype.beforeEach=function(t){return zt(this.beforeHooks,t)},Bt.prototype.beforeResolve=function(t){return zt(this.resolveHooks,t)},Bt.prototype.afterEach=function(t){return zt(this.afterHooks,t)},Bt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Bt.prototype.onError=function(t){this.history.onError(t)},Bt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Bt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Bt.prototype.go=function(t){this.history.go(t)},Bt.prototype.back=function(){this.go(-1)},Bt.prototype.forward=function(){this.go(1)},Bt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Bt.prototype.resolve=function(t,e,r){var n=X(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?j(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Bt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==E&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Bt.prototype,Nt),Bt.install=function t(e){if(!t.installed||Q!==e){t.installed=!0,Q=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",f),e.component("RouterLink",W);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Bt.version="3.1.6",Z&&window.Vue&&window.Vue.use(Bt);var Ht=Bt;o.a.use(Ht);var Dt=new Ht({routes:[{path:"/",redirect:"/list"},{path:"/list",component:function(){return r.e(2).then(r.bind(null,9))},meta:{title:"列表页"}},{path:"/article",component:function(){return r.e(0).then(r.bind(null,10))},meta:{title:"文章页"}}]});r(4),r(5);Dt.beforeEach((function(t,e,r){t.meta.title&&(document.title=t.meta.title),r()})),new o.a({router:Dt,render:function(t){return t(c)}}).$mount("#root")}]);