(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Notifikation = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
function noop(){}var inserted=exports.cache={};exports.insert=function(e){if(inserted[e])return noop;inserted[e]=!0;var t=document.createElement("style");return t.setAttribute("type","text/css"),"textContent"in t?t.textContent=e:t.styleSheet.cssText=e,document.getElementsByTagName("head")[0].appendChild(t),function(){document.getElementsByTagName("head")[0].removeChild(t),inserted[e]=!1}};
},{}],2:[function(_dereq_,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var NotifikationComponent=_dereq_("./notifikation.vue"),Notifikation={};Notifikation.install=function(t,o){var e=t.extend(NotifikationComponent),i=void 0;t.prototype.$show=function(t){var o=void 0,r=void 0,n=void 0,s=void 0;document.querySelector("body");if(s="error"===t.level?"rgb(214, 38, 36)":"success"===t.level?"rgb(134, 193, 73)":"rgb(148, 144, 152)",!i){var a=t.selector||"#notifikation";if(!document.querySelector(a)){var c=document.createElement("div");c.setAttribute("id","notifikation"),document.querySelector("body").appendChild(c)}i=new e({data:{items:[]}}).$mount(a)}r=i.$data.items,n=r.length,o={message:t.message||"Notified!",style:{width:(t.width||200)+"px",height:(t.height||50)+"px",backgroundColor:t.backgroundColor||s,color:t.color||"rgb(255, 255, 255)",right:(t.right||10)+"px",top:function(t){var o=t.height||50,e=t.top||10;return(n>0?n*o+n*e+e:e)+"px"}(t)}},r.push(o),setTimeout(function(){r.shift(),r.forEach(function(t){t.style.top=parseInt(t.style.top,10)-60+"px"})},t.duration||3e3)},t.prototype.$info=function(t){this.$show(t)},t.prototype.$error=function(t){this.$show(Object.assign(t,{level:"error"}))},t.prototype.$success=function(t){this.$show(Object.assign(t,{level:"success"}))}},exports.default=Notifikation;

},{"./notifikation.vue":3}],3:[function(_dereq_,module,exports){
var __vueify_style_dispose__=_dereq_("vueify/lib/insert-css").insert(".notification__item[data-v-76390ca4]{display:flex;align-items:center;justify-content:center;position:absolute;border-radius:4px;box-shadow:1px 1px 10px rgba(0,0,0,.4)}.notification__item.fade-enter-active[data-v-76390ca4],.notification__item.fade-leave-active[data-v-76390ca4]{transition:opacity .5s}.notification__item.fade-enter[data-v-76390ca4],.notification__item.fade-leave-to[data-v-76390ca4]{opacity:0}");!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"Notifikation",props:["items"]}}(),module.exports.__esModule&&(module.exports=module.exports.default);var __vue__options__="function"==typeof module.exports?module.exports.options:module.exports;__vue__options__.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notifikation"},[i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.items,function(e,o){return i("div",{key:o,staticClass:"notification__item",style:e.style},[t._v(t._s(e.message))])}))],1)},__vue__options__.staticRenderFns=[],__vue__options__._scopeId="data-v-76390ca4";
},{"vueify/lib/insert-css":1}]},{},[2])(2)
});