(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-component-component"],{2487:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{lists:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","video","audio"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"web-view",name:"网页",open:!1,pages:["web-view"]}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(e){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(e){if(this.lists[e].pages)for(var t=0;t<this.lists.length;++t)this.lists[t].open=e===t&&!this.lists[e].open;else this.goDetailPage(this.lists[e].url)},goDetailPage:function(e){"string"===typeof e?uni.navigateTo({url:"/pages/component/"+e+"/"+e}):uni.navigateTo({url:e.url})}}};t.default=n},"4f52":function(e,t,i){"use strict";i.r(t);var n=i("fb88"),a=i("5ae8");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("de25");var o=i("2877"),u=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"32ed0930",null);t["default"]=u.exports},"5ae8":function(e,t,i){"use strict";i.r(t);var n=i("2487"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},"6b1a":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-32ed0930]{height:auto;min-height:100%}.uni-card[data-v-32ed0930]{-webkit-box-shadow:none;box-shadow:none}.uni-list[data-v-32ed0930]:after{height:0}.uni-list[data-v-32ed0930]:before{height:0}",""])},"7ade":function(e,t,i){var n=i("6b1a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7f033d6a",n,!0,{sourceMap:!1,shadowMode:!1})},de25:function(e,t,i){"use strict";var n=i("7ade"),a=i.n(n);a.a},fb88:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-pb"},[i("v-uni-view",{staticClass:"uni-header-logo"},[i("v-uni-image",{attrs:{src:"/static/componentIndex.png"}})],1),i("v-uni-view",{staticClass:"uni-hello-text uni-common-pb"},[e._v("uni-app内置组件，展示样式仅供参考，文档详见"),i("u-link",{attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),e._l(e.lists,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-card"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell uni-collapse"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:t.open?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(t){t=e.$handleEvent(t),e.triggerCollapse(n)}}},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"uni-list uni-collapse",class:t.open?"uni-active":""},e._l(t.pages,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"},on:{click:function(i){i=e.$handleEvent(i),e.goDetailPage(t)}}},[i("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(e._s(t.name?t.name:t))])],1)}),1)],1)],1)],1)})],2)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);