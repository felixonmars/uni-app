(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-nav-bar-nav-bar"],{1328:function(t,e,n){"use strict";n.r(e);var i=n("42fe"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"1cf5":function(t,e,n){"use strict";n.r(e);var i=n("8886"),a=n("d043");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("de63");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"3674ba48",null);e["default"]=l.exports},3595:function(t,e,n){"use strict";var i=n("dc86"),a=n.n(i);a.a},"42fe":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};e.default=a},5491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("b59f")),a=o(n("0c56"));function o(t){return t&&t.__esModule?t:{default:t}}var r={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcon:a.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=r},"6efb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-49ec0637]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-49ec0637]{font-size:%?28?%;line-height:inherit}.example[data-v-49ec0637]{padding:0 %?30?% %?30?%}.example-title[data-v-49ec0637]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-49ec0637]{margin:%?40?% 0}.example-body[data-v-49ec0637]{padding:0 %?40?%}uni-page-body[data-v-49ec0637]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-49ec0637]{font-size:%?28?%;line-height:inherit}.example[data-v-49ec0637]{padding:0 %?30?% %?30?%}.example-title[data-v-49ec0637]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-49ec0637]{margin:%?40?% 0}.example-body[data-v-49ec0637]{padding:0 %?40?%}.uni-common-mt[data-v-49ec0637]{color:#7a7e83;font-size:%?28?%;padding:%?30?%}.title[data-v-49ec0637]{font-size:15px;line-height:20px;color:#333;padding:15px}.city[data-v-49ec0637]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-left:8px;white-space:nowrap}.input-view[data-v-49ec0637]{width:92%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#e7e7e7;height:30px;-webkit-border-radius:15px;border-radius:15px;padding:0 4%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-view .uni-icon[data-v-49ec0637]{line-height:30px!important}.input-view .input[data-v-49ec0637]{height:30px;line-height:30px;width:94%;padding:0 3%}body.?%PAGE?%[data-v-49ec0637]{background-color:#fff;background-color:#fff}",""])},7045:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-3674ba48]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden}.uni-navbar__content .uni-navbar__content_view[data-v-3674ba48]{line-height:44px}.uni-navbar__header[data-v-3674ba48]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-3674ba48]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?120?%;padding:0 %?12?%}.uni-navbar__header-btns[data-v-3674ba48]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-3674ba48]:last-child{width:%?60?%}.uni-navbar__header-container[data-v-3674ba48]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-3674ba48]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-3674ba48]{height:44px}.uni-navbar--fixed[data-v-3674ba48]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-3674ba48]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-3674ba48]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},7973:function(t,e,n){var i=n("6efb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("edbc2a1a",i,!0,{sourceMap:!1,shadowMode:!1})},"7fde":function(t,e,n){"use strict";var i=n("7973"),a=n.n(i);a.a},8297:function(t,e,n){var i=n("7045");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1a480f7c",i,!0,{sourceMap:!1,shadowMode:!1})},8886:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a8a1:function(t,e,n){"use strict";n.r(e);var i=n("fabb"),a=n("fd95");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7fde");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"49ec0637",null);e["default"]=l.exports},aff1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-33d69eb3]{display:block;width:100%;height:20px;height:0}",""])},b585:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},b59f:function(t,e,n){"use strict";n.r(e);var i=n("b585"),a=n("1328");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("3595");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"33d69eb3",null);e["default"]=l.exports},d043:function(t,e,n){"use strict";n.r(e);var i=n("5491"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},dc86:function(t,e,n){var i=n("aff1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5fa0e4b7",i,!0,{sourceMap:!1,shadowMode:!1})},de63:function(t,e,n){"use strict";var i=n("8297"),a=n.n(i);a.a},e84a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("1cf5")),a=o(n("0c56"));function o(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniNavBar:i.default,uniIcon:a.default},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout(function(){uni.stopPullDownRefresh(),console.log("stopPullDownRefresh")},1e3)}};e.default=r},fabb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{"left-icon":"back","left-text":"返回",title:"标题",statusBar:!0},on:{"click-left":function(e){e=t.$handleEvent(e),t.back(e)}}}),n("v-uni-view",{staticClass:"uni-common-mt"},[t._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考"),n("u-link",{attrs:{href:"https://ask.dcloud.net.cn/article/34921",text:"https://ask.dcloud.net.cn/article/34921",inWhiteList:!0}})],1),n("v-uni-view",{staticClass:"example-title"},[t._v("基本用法")]),n("uni-nav-bar",{attrs:{"left-icon":"back",title:"标题"},on:{"click-left":function(e){e=t.$handleEvent(e),t.back(e)}}}),n("v-uni-view",{staticClass:"example-title"},[t._v("左右显示文字")]),n("uni-nav-bar",{attrs:{"left-icon":"back","right-text":"菜单","left-text":"返回",title:"标题"},on:{"click-left":function(e){e=t.$handleEvent(e),t.back(e)}}}),n("v-uni-view",{staticClass:"example-title"},[t._v("插入slot")]),n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan"},on:{"click-left":function(e){e=t.$handleEvent(e),t.showCity(e)},"click-right":function(e){e=t.$handleEvent(e),t.scan(e)}}},[n("template",{attrs:{slot:"left"},slot:"left"},[n("v-uni-view",{staticClass:"city"},[n("v-uni-view",[t._v(t._s(t.city))]),n("uni-icon",{attrs:{type:"arrowdown",color:"#333333",size:"22"}})],1)],1),n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}}})],1)],2)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},fd95:function(t,e,n){"use strict";n.r(e);var i=n("e84a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}}]);