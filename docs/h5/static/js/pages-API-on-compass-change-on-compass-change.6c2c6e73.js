(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-compass-change-on-compass-change"],{"07be":function(t,e,i){"use strict";i.r(e);var n=i("1e0a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"1e0a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"onCompassChange",direction:0}},onReady:function(){var t=this;uni.onCompassChange(function(e){t.direction=parseInt(e.direction)})},onUnload:function(){uni.startCompass(),this.direction=0}};e.default=n},6754:function(t,e,i){"use strict";i.r(e);var n=i("c96f"),a=i("07be");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("d335");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"7fc8f4b1",null);e["default"]=c.exports},"94af":function(t,e,i){var n=i("f6ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09d70ba4",n,!0,{sourceMap:!1,shadowMode:!1})},c96f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"padding-bottom":"50upx"}},[t._v("旋转手机即可获取方位信息")]),i("v-uni-view",{staticClass:"direction"},[i("v-uni-view",{staticClass:"bg-compass-line"}),i("v-uni-image",{staticClass:"bg-compass",style:"transform: rotate("+t.direction+"deg)",attrs:{src:"../../../static/compass.png"}}),i("v-uni-view",{staticClass:"direction-value"},[i("v-uni-text",[t._v(t._s(t.direction))]),i("v-uni-text",{staticClass:"direction-degree"},[t._v("o")])],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d335:function(t,e,i){"use strict";var n=i("94af"),a=i.n(n);a.a},f6ee:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".direction[data-v-7fc8f4b1]{position:relative;margin-top:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?540?%;height:%?540?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto}.direction-value[data-v-7fc8f4b1]{position:relative;font-size:%?200?%;color:#353535;line-height:1;z-index:1}.direction-degree[data-v-7fc8f4b1]{position:absolute;top:0;right:%?-40?%;font-size:%?60?%}.bg-compass[data-v-7fc8f4b1]{position:absolute;top:0;left:0;width:%?540?%;height:%?540?%;-webkit-transition:.1s;-o-transition:.1s;transition:.1s}.bg-compass-line[data-v-7fc8f4b1]{position:absolute;left:%?267?%;top:%?-10?%;width:%?6?%;height:%?56?%;background-color:#1aad19;border-radius:%?999?%;z-index:1}",""])}}]);