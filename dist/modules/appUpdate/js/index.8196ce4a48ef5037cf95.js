!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=Vue},function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}var i=["attrs","props","domProps"],r=["class","style","directives"],a=["on","nativeOn"],s=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==i.indexOf(n))t[n]=o({},t[n],e[n]);else if(-1!==r.indexOf(n)){var l=t[n]instanceof Array?t[n]:[t[n]],c=e[n]instanceof Array?e[n]:[e[n]];t[n]=l.concat(c)}else if(-1!==a.indexOf(n))for(var u in e[n])if(t[n][u]){var d=t[n][u]instanceof Array?t[n][u]:[t[n][u]],f=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=d.concat(f)}else t[n][u]=e[n][u];else if("hook"==n)for(var p in e[n])t[n][p]=t[n][p]?s(t[n][p],e[n][p]):e[n][p];else t[n]=e[n];else t[n]=e[n];return t}),{})}},function(t,e,n){},function(t,e){t.exports=axios},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e){!function(t,e){var n,o=t.document,i=o.documentElement,r=o.querySelector('meta[name="viewport"]'),a=o.querySelector('meta[name="flexible"]'),s=0,l=0,c=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var u=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(l=parseFloat(u[1]),s=parseInt(1/l))}else if(a){var d=a.getAttribute("content");if(d){var f=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);f&&(s=parseFloat(f[1]),l=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),l=parseFloat((1/s).toFixed(2)))}}if(!s&&!l){t.navigator.appVersion.match(/android/gi);var v=t.navigator.appVersion.match(/iphone/gi),h=t.devicePixelRatio;l=1/(s=v?h>=3&&(!s||s>=3)?3:h>=2&&(!s||s>=2)?2:1:1)}if(i.setAttribute("data-dpr",s),!r)if((r=o.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(r);else{var m=o.createElement("div");m.appendChild(r),o.write(m.innerHTML)}function y(){var e=i.getBoundingClientRect().width;e/s>540&&(e=540*s);var n=e/10;i.style.fontSize=n+"px",c.rem=t.rem=n}t.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(y,300)}),!1),t.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(n),n=setTimeout(y,300))}),!1),"complete"===o.readyState?o.body.style.fontSize=12*s+"px":o.addEventListener("DOMContentLoaded",(function(t){o.body.style.fontSize=12*s+"px"}),!1),y(),c.dpr=t.dpr=s,c.refreshRem=y,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(4),n(5),n(6),n(7),n(8),n(9),n(10);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var i=n(0),r=n.n(i);function a(t,e,n){return e?t+n+e:t}function s(t,e){if("string"==typeof e)return a(t,e,"--");if(Array.isArray(e))return e.map((function(e){return s(t,e)}));var n={};return e&&Object.keys(e).forEach((function(o){n[t+"--"+o]=e[o]})),n}function l(t){return function(e,n){return e&&"string"!=typeof e&&(n=e,e=""),e=a(t,e,"__"),n?[e,s(e,n)]:e}}var c=r.a.prototype.$isServer;function u(t){return null!=t}function d(t){return"function"==typeof t}function f(t){return null!==t&&"object"==typeof t}function p(t,e){var n=e.split("."),o=t;return n.forEach((function(t){o=u(o[t])?o[t]:""})),o}var v=/-(\w)/g;function h(t){return t.replace(v,(function(t,e){return e.toUpperCase()}))}var m=r.a.extend({methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,o=this.$scopedSlots[t];return o?o(e):n[t]}}});function y(t){var e=this.name;t.component(e,this),t.component(h("-"+e),this)}function g(t){return{functional:!0,props:t.props,model:t.model,render:function(e,n){return t(e,n.props,function(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}(n),n)}}}function b(t){return function(e){return d(e)&&(e=g(e)),e.functional||(e.mixins=e.mixins||[],e.mixins.push(m)),e.name=t,e.install=y,e}}Object.prototype.hasOwnProperty;var x=r.a.prototype,S=r.a.util.defineReactive;S(x,"$vantLang","zh-CN"),S(x,"$vantMessages",{"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,e){return t+"年"+e+"月"},rangePrompt:function(t){return"选择天数不能超过 "+t+" 天"}},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}});var C=function(){return x.$vantMessages[x.$vantLang]};function w(t){var e=h(t)+".";return function(t){for(var n=C(),o=p(n,e+t)||p(n,t),i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return d(o)?o.apply(void 0,r):o}}function O(t){return[b(t="van-"+t),l(t),w(t)]}var k=0;var _={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},$=n(1),T=n.n($),E=["ref","style","class","attrs","nativeOn","directives","staticClass","staticStyle"],P={nativeOn:"on"};function z(t,e){var n=E.reduce((function(e,n){return t.data[n]&&(e[P[n]||n]=t.data[n]),e}),{});return e&&(n.on=n.on||{},o(n.on,t.data.on)),n}var N=!1;if(!c)try{var I={};Object.defineProperty(I,"passive",{get:function(){N=!0}}),window.addEventListener("test-passive",null,I)}catch(t){}function j(t,e,n,o){void 0===o&&(o=!1),c||t.addEventListener(e,n,!!N&&{capture:!1,passive:o})}function L(t,e,n){c||t.removeEventListener(e,n)}function M(t,e){("boolean"!=typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&function(t){t.stopPropagation()}(t)}var A=O("overlay"),R=A[0],B=A[1];function Y(t){M(t,!0)}function F(t,e,n,i){var r=o({zIndex:e.zIndex},e.customStyle);return u(e.duration)&&(r.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",T()([{directives:[{name:"show",value:e.show}],style:r,class:[B(),e.className],on:{touchmove:Y}},z(i,!0)]),[n.default&&n.default()])])}F.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object};var X,q=R(F),D={className:"",customStyle:{}};function V(){if(_.top){var t=_.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function H(){var t,e,n;t=q,e={on:{click:V}},n=new r.a({el:document.createElement("div"),props:t.props,render:function(n){return n(t,o({props:this.$props},e))}}),document.body.appendChild(n.$el),X=n}function U(){if(X||H(),_.top){var t=_.top,e=t.vm,n=t.config,i=e.$el;i&&i.parentNode?i.parentNode.insertBefore(X.$el,i):document.body.appendChild(X.$el),o(X,D,n,{show:!0})}else X.show=!1}function Z(t){var e=_.stack;e.length&&(_.top.vm===t?(e.pop(),U()):_.stack=e.filter((function(e){return e.vm!==t})))}function J(t){var e=t.parentNode;e&&e.removeChild(t)}var G=/scroll|auto/i;var K=r.a.extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e,n,o=t.touches[0];this.deltaX=o.clientX-this.startX,this.deltaY=o.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(e=this.offsetX,n=this.offsetY,e>n&&e>10?"horizontal":n>e&&n>10?"vertical":"")},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this.onTouchStart,n=this.onTouchMove,o=this.onTouchEnd;j(t,"touchstart",e),j(t,"touchmove",n),o&&(j(t,"touchend",o),j(t,"touchcancel",o))}}});function Q(t){var e=t.ref,n=t.afterPortal;return r.a.extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,o,i=this.getContainer,r=e?this.$refs[e]:this.$el;i?t="string"==typeof(o=i)?document.querySelector(o):o():this.$parent&&(t=this.$parent.$el),t&&t!==r.parentNode&&t.appendChild(r),n&&n.call(this)}}})}var W={mixins:[function(t){function e(){this.binded||(t.call(this,j,!0),this.binded=!0)}function n(){this.binded&&(t.call(this,L,!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:n,beforeDestroy:n}}((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){var e=this;this.$isServer||this.bindStatus!==t&&(this.bindStatus=t,(t?j:L)(window,"popstate",(function(){e.close(),e.shouldReopen=!1})))}}},tt={value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function et(t){if(u(t))return t=String(t),/^\d+(\.\d+)?$/.test(t)?t+"px":t}var nt=O("info"),ot=nt[0],it=nt[1];function rt(t,e,n,o){var i=e.dot,r=e.info,a=u(r)&&""!==r;if(i||a)return t("div",T()([{class:it({dot:i})},z(o,!0)]),[i?"":e.info])}rt.props={dot:Boolean,info:[Number,String]};var at=ot(rt),st=O("icon"),lt=st[0],ct=st[1];var ut={medel:"medal","medel-o":"medal-o"};function dt(t,e,n,o){var i=function(t){return t&&ut[t]||t}(e.name),r=function(t){return!!t&&-1!==t.indexOf("/")}(i);return t(e.tag,T()([{class:[e.classPrefix,r?"":e.classPrefix+"-"+i],style:{color:e.color,fontSize:et(e.size)}},z(o,!0)]),[n.default&&n.default(),r&&t("img",{class:ct("image"),attrs:{src:i}}),t(at,{attrs:{dot:e.dot,info:e.info}})])}dt.props={dot:Boolean,name:String,size:[Number,String],info:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:ct()}};var ft=lt(dt),pt=O("loading"),vt=pt[0],ht=pt[1];function mt(t,e){if("spinner"===e.type){for(var n=[],o=0;o<12;o++)n.push(t("i"));return n}return t("svg",{class:ht("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function yt(t,e,n){if(n.default){var o=e.textSize&&{fontSize:et(e.textSize)};return t("span",{class:ht("text"),style:o},[n.default()])}}function gt(t,e,n,o){var i=e.color,r=e.size,a=e.type,s={color:i};if(r){var l=et(r);s.width=l,s.height=l}return t("div",T()([{class:ht([a,{vertical:e.vertical}])},z(o,!0)]),[t("span",{class:ht("spinner",a),style:s},[mt(t,e)]),yt(t,e,n)])}gt.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}};var bt,xt=vt(gt),St=O("toast"),Ct=St[0],wt=St[1],Ot=Ct({mixins:[(void 0===bt&&(bt={}),{mixins:[K,W,Q({afterPortal:function(){this.overlay&&U()}})],props:tt,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),bt.skipToggleEvent||this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){this.close(),this.getContainer&&J(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(_.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(j(document,"touchstart",this.touchStart),j(document,"touchmove",this.onTouchMove),_.lockCount||document.body.classList.add("van-overflow-hidden"),_.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(_.lockCount--,L(document,"touchstart",this.touchStart),L(document,"touchmove",this.onTouchMove),_.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,Z(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=function(t,e){void 0===e&&(e=window);for(var n=t;n&&"HTML"!==n.tagName&&1===n.nodeType&&n!==e;){var o=window.getComputedStyle(n).overflowY;if(G.test(o)){if("BODY"!==n.tagName)return n;var i=window.getComputedStyle(n.parentNode).overflowY;if(G.test(i))return n}n=n.parentNode}return e}(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,r=n.scrollTop,a="11";0===r?a=i>=o?"00":"01":r+i>=o&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||M(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){var e,n;t.updateZIndex(t.overlay?1:0),t.overlay?(e=t,n={zIndex:_.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle},_.stack.some((function(t){return t.vm===e}))||(_.stack.push({vm:e,config:n}),U())):Z(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++_.zIndex+t}}})],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,t?(k||document.body.classList.add("van-toast--unclickable"),k++):--k||document.body.classList.remove("van-toast--unclickable"))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,o=this.iconPrefix,i=this.loadingType;return e||"success"===n||"fail"===n?t(ft,{class:wt("icon"),attrs:{classPrefix:o,name:e||n}}):"loading"===n?t(xt,{class:wt("loading"),attrs:{type:i}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(u(n)&&""!==n)return"html"===e?t("div",{class:wt("text"),domProps:{innerHTML:n}}):t("div",{class:wt("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[wt([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),kt={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},_t={},$t=[],Tt=!1,Et=o({},kt);function Pt(t){return f(t)?t:{message:t}}function zt(t){void 0===t&&(t={});var e=function(){if(c)return{};if(!$t.length||Tt){var t=new(r.a.extend(Ot))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),$t.push(t)}return $t[$t.length-1]}();return e.value&&e.updateZIndex(),t=Pt(t),(t=o({},Et,{},_t[t.type||Et.type],{},t)).clear=function(){e.value=!1,t.onClose&&t.onClose(),Tt&&!c&&e.$on("closed",(function(){clearTimeout(e.timer),$t=$t.filter((function(t){return t!==e})),J(e.$el),e.$destroy()}))},o(e,function(t){return o({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}["loading","success","fail"].forEach((function(t){var e;zt[t]=(e=t,function(t){return zt(o({type:e},Pt(t)))})})),zt.clear=function(t){$t.length&&(t?($t.forEach((function(t){t.clear()})),$t=[]):Tt?$t.shift().clear():$t[0].clear())},zt.setDefaultOptions=function(t,e){"string"==typeof t?_t[t]=e:o(Et,t)},zt.resetDefaultOptions=function(t){"string"==typeof t?_t[t]=null:(Et=o({},kt),_t={})},zt.allowMultiple=function(t){void 0===t&&(t=!0),Tt=t},zt.install=function(){r.a.use(Ot)},r.a.prototype.$toast=zt;var Nt=zt,It=n(3),jt=n.n(It);var Lt,Mt,At={message:"加载中...",forbidClick:!0,overlay:!0,duration:0},Rt=null,Bt=(Lt=window.sessionStorage,Mt="_page_",JSON.parse(Lt.getItem(Mt))),Yt=jt.a.create({timeout:2e4});Yt.interceptors.request.use((function(t){return null==Bt&&(!function(t,e,n){t.setItem(e,JSON.stringify(n))}(window.sessionStorage,"_page_",{showLoading:!0}),Rt=Nt.loading(At)),t}),(function(t){return Promise.reject(t)})),Yt.interceptors.response.use((function(t){return t.data&&200===t.data.code&&null==Bt&&Rt.clear(),t.data}),(function(t){return Promise.reject(t)}));var Ft=Yt;var Xt={name:"appUpdate",data:function(){return{isShowText:!1,info:{},query:{password:"",location_href:"https://www.jikeqi.com/6VRz"}}},mounted:function(){var t=this;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ft.get("https://www.jikeqi.com/jsonFormat/6VRz",{params:t})})(this.query).then((function(e){if(200==e.code){t.info=e.data.info;var n=decodeURIComponent(t.info.downurl);document.querySelector(".update").setAttribute("href",n)}}))},methods:{handle:function(t){var e=this;console.log(t);var n=document.querySelector(".update");t.target.disabled=!0,t.target.innerHTML="",t.target.style.width="40px";setTimeout((function(){t.target.classList.add("download"),n.click()}),300),setTimeout((function(){e.isShowText=!0}),5e3)}}};n(11);var qt=function(t,e,n,o,i,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}(Xt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"page-bd"},[t._m(0),t._v(" "),n("div",{staticClass:"update-box"},[n("a",{staticClass:"update",staticStyle:{display:"none"},attrs:{href:""}}),t._v(" "),t.isShowText?t._e():n("button",{staticClass:"install",attrs:{type:"button"},on:{click:function(e){return t.handle(e)}}},[t._v("\n        下载安装\n      ")]),t._v(" "),t.isShowText?n("p",[t._v("正在安装，请按 Home 键在桌面查看")]):t._e(),t._v(" "),n("ul",{},[n("li",[t._v("版本 "+t._s(t.info.version))]),t._v(" "),n("li",[t._v("大小 "+t._s(t.info.app_size))]),t._v(" "),n("li",[t._v("更新时间 "+t._s(t.info.published_at))])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"",alt:""}})])}],!1,null,null,null).exports;n(12),n(13);var Dt=function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?")){var n=t.substr(1).split("&");for(var o in n)e[n[o].split("=")[0]]=decodeURI(n[o].split("=")[1])}return e}();if(location.href.indexOf("beta")>-1){console.log("开发环境");try{new VConsole}catch(t){console.log(t)}}else Object.keys(Dt).length&&"debug"in Dt&&new VConsole;new Vue({render:function(t){return t(qt)}}).$mount("#root")}]);