(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-button-nav-button"],{3417:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("uni-icon",{attrs:{size:"16",type:"info"}}),t._v("说明 :")],1),e("v-uni-view",{staticClass:"uni-helllo-text"},[e("v-uni-view",[t._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听buttons的点击事件。")]),e("v-uni-view",[t._v("在小程序端，不支持配置buttons，故按钮不见了。")])],1)],1)],1)},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"6d49":function(t,n,e){"use strict";e.r(n);var i=e("3417"),u=e("c1b9");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var o=e("2877"),r=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,"723a9341",null);n["default"]=r.exports},b464:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("0c56"));function u(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{title:"nav-button"}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"你点了分享按钮":"你点了收藏按钮",icon:"none"})},components:{uniIcon:i.default}};n.default=a},c1b9:function(t,n,e){"use strict";e.r(n);var i=e("b464"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=u.a}}]);