(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"00fb":function(t,i,s){"use strict";s.r(i);var a=s("2fbc"),n=s("dab8");for(var e in n)"default"!==e&&function(t){s.d(i,t,function(){return n[t]})}(e);var l=s("2877"),v=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"60424bde",null);i["default"]=v.exports},"2fbc":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"center"},[s("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover"},on:{click:function(i){i=t.$handleEvent(i),t.goLogin(i)}}},[s("v-uni-image",{staticClass:"logo-img",attrs:{src:t.login?t.uerInfo.avatarUrl:t.avatarUrl}}),s("v-uni-view",{staticClass:"logo-title"},[s("v-uni-text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.login?t.uerInfo.name:"您未登录"))]),t.login?t._e():s("v-uni-text",{staticClass:"go-login navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("收藏图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("收藏图集")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("管理图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("上传图片")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),s("v-uni-view",{staticClass:"center-list"},[s("v-uni-view",{staticClass:"center-list-item border-bottom",on:{click:function(i){i=t.$handleEvent(i),t.goAbout(i)}}},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("关于")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),s("v-uni-view",{staticClass:"center-list-item"},[s("v-uni-text",{staticClass:"list-icon"},[t._v("")]),s("v-uni-text",{staticClass:"list-text"},[t._v("账号管理")]),s("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)],1)},n=[];s.d(i,"a",function(){return a}),s.d(i,"b",function(){return n})},"37ff":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{login:!1,avatarUrl:"/static/logo.png",uerInfo:{}}},methods:{goLogin:function(){this.login||uni.navigateTo({url:"/pages/login/login"})},goAbout:function(){uni.navigateTo({url:"/pages/about/about"})}}};i.default=a},dab8:function(t,i,s){"use strict";s.r(i);var a=s("37ff"),n=s.n(a);for(var e in a)"default"!==e&&function(t){s.d(i,t,function(){return a[t]})}(e);i["default"]=n.a}}]);