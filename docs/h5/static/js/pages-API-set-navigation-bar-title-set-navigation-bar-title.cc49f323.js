(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-set-navigation-bar-title-set-navigation-bar-title"],{5419:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,uni.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg:function(){this.hasSetBg=!this.hasSetBg,uni.setNavigationBarColor({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}};e.default=i},"6c7f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-helllo-text"},[t._v("本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。")]),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.setText(e)}}},[t._v("改变标题栏文字")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.setBg(e)}}},[t._v("改变标题栏颜色")])],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d3c5:function(t,e,n){"use strict";n.r(e);var i=n("6c7f"),a=n("f1b1");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var u=n("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"20440346",null);e["default"]=r.exports},f1b1:function(t,e,n){"use strict";n.r(e);var i=n("5419"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a}}]);