(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{"15a2":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("page-head",{attrs:{title:n.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[n._v("设置step")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(e){e=n.$handleEvent(e),n.sliderChange(e)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("显示当前value")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50","show-value":""},on:{change:function(e){e=n.$handleEvent(e),n.sliderChange(e)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("设置最小/最大值")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":""},on:{change:function(e){e=n.$handleEvent(e),n.sliderChange(e)}}})],1),t("v-uni-view",{staticClass:"uni-title"},[n._v("不同颜色和大小的滑块")]),t("v-uni-view",[t("v-uni-slider",{attrs:{value:"50",activeColor:"#FFCC33",backgroundColor:"#000000","block-color":"#8A6DE9","block-size":"20"},on:{change:function(e){e=n.$handleEvent(e),n.sliderChange(e)}}})],1)],1)],1)},a=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})},7521:function(n,e,t){"use strict";t.r(e);var i=t("85a4"),a=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);e["default"]=a.a},"82c3":function(n,e,t){"use strict";t.r(e);var i=t("15a2"),a=t("7521");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);var l=t("2877"),s=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"85a4":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"slider 滑块"}},methods:{sliderChange:function(n){console.log("value 发生变化："+n.detail.value)}}};e.default=i}}]);