(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swipe-action-swipe-action"],{"20eb":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"example-title"},[t._v("基本用法")]),e("uni-swipe-action",{attrs:{options:t.options2},on:{click:function(i){i=t.$handleEvent(i),t.bindClick(i)}}},[e("v-uni-view",{staticClass:"cont"},[t._v("SwipeAction 基础使用场景")])],1),e("v-uni-view",{staticClass:"example-title"},[t._v("禁止滑动")]),e("uni-swipe-action",{attrs:{disabled:!0}},[e("v-uni-view",{staticClass:"cont"},[t._v("SwipeAction 禁止滑动展示")])],1),e("v-uni-view",{staticClass:"example-title"},[t._v("使用变量控制开关")]),e("v-uni-view",{staticClass:"button-view"},[e("v-uni-view",{staticClass:"button",on:{click:function(i){i=t.$handleEvent(i),t.setOpened(i)}}},[t._v("当前状态："+t._s(t.isOpened?"开":"关"))])],1),e("uni-swipe-action",{attrs:{options:t.options2,"is-opened":t.isOpened,"auto-close":!0},on:{opened:function(i){i=t.$handleEvent(i),t.bindOpened(i)},closed:function(i){i=t.$handleEvent(i),t.bindClosed(i)}}},[e("v-uni-view",{staticClass:"cont"},[t._v("使用变量控制SwipeAction的开启状态")])],1),e("v-uni-view",{staticClass:"example-title"},[t._v("与 List 组件一起使用")]),e("uni-list",[e("uni-swipe-action",{attrs:{options:t.options1}},[e("uni-list-item",{attrs:{"show-arrow":!1,title:"item1"}})],1),e("uni-swipe-action",{attrs:{options:t.options2}},[e("uni-list-item",{attrs:{"show-arrow":!1,title:"item2"}})],1),e("uni-swipe-action",{attrs:{options:t.options3}},[e("uni-list-item",{attrs:{"show-arrow":!1,title:"item3"}})],1)],1)],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"2bb3":function(t,i,e){"use strict";var n=e("8d53"),o=e.n(n);o.a},"4e38":function(t,i,e){"use strict";e.r(i);var n=e("a356"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},"69c0":function(t,i,e){var n=e("9aa3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("6317d800",n,!0,{sourceMap:!1,shadowMode:!1})},"7c6e":function(t,i,e){"use strict";e.r(i);var n=e("20eb"),o=e("4e38");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("8877");var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"297aca7f",null);i["default"]=r.exports},8877:function(t,i,e){"use strict";var n=e("69c0"),o=e.n(n);o.a},"8c20":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-swipe-action[data-v-3f24ace2]{width:100%;overflow:hidden}.uni-swipe-action__container[data-v-3f24ace2]{position:relative;background-color:#fff;width:200%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1);-o-transition:transform .35s cubic-bezier(.165,.84,.44,1);transition:transform .35s cubic-bezier(.165,.84,.44,1);transition:transform .35s cubic-bezier(.165,.84,.44,1),-webkit-transform .35s cubic-bezier(.165,.84,.44,1)}.uni-swipe-action__content[data-v-3f24ace2]{width:50%}.uni-swipe-action__btn-group[data-v-3f24ace2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-swipe-action--show[data-v-3f24ace2]{position:relative;z-index:1000}.uni-swipe-action--btn[data-v-3f24ace2]{padding:0 %?32?%;color:#fff;background-color:#c7c6cd;font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;text-align:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-swipe-action__mask[data-v-3f24ace2]{display:block;opacity:0;position:fixed;z-index:999;top:0;left:0;width:100%;height:100%}",""])},"8d53":function(t,i,e){var n=e("8c20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("dc68374a",n,!0,{sourceMap:!1,shadowMode:!1})},"8f48":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-swipe-action"},[e("v-uni-view",{staticClass:"uni-swipe-action__container",class:{"uni-swipe-action--show":t.isShowBtn},style:{transform:t.transformX,"-webkit-transform":t.transformX},on:{touchstart:function(i){i=t.$handleEvent(i),t.touchStart(i)},touchmove:function(i){i=t.$handleEvent(i),t.touchMove(i)},touchend:function(i){i=t.$handleEvent(i),t.touchEnd(i)},touchcancel:function(i){i=t.$handleEvent(i),t.touchEnd(i)},click:function(i){i=t.$handleEvent(i),t.bindClickCont(i)}}},[e("v-uni-view",{staticClass:"uni-swipe-action__content"},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-swipe-action__btn-group",attrs:{id:t.elId}},t._l(t.options,function(i,n){return e("div",{key:n,staticClass:"uni-swipe-action--btn",style:{backgroundColor:i.style&&i.style.backgroundColor?i.style.backgroundColor:"#C7C6CD",color:i.style&&i.style.color?i.style.color:"#FFFFFF",fontSize:i.style&&i.style.fontSize?i.style.fontSize:"28upx"},on:{click:function(e){e=t.$handleEvent(e),t.bindClickBtn(i,n)}}},[t._v(t._s(i.text))])}),0)],1),t.isShowBtn?e("v-uni-view",{staticClass:"uni-swipe-action__mask",on:{click:function(i){i=t.$handleEvent(i),t.close(i)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),i=t.$handleEvent(i),t.close(i)}}}):t._e()],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"9aa3":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'uni-page-body[data-v-297aca7f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-297aca7f]{font-size:%?28?%;line-height:inherit}.example[data-v-297aca7f]{padding:0 %?30?% %?30?%}.example-title[data-v-297aca7f]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-297aca7f]{margin:%?40?% 0}.example-body[data-v-297aca7f]{padding:0 %?40?%}.cont[data-v-297aca7f]{height:%?90?%;line-height:%?90?%;padding:0 %?30?%;position:relative}.cont[data-v-297aca7f]:before{position:absolute;z-index:3;left:0;right:0;top:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.cont[data-v-297aca7f]:after{position:absolute;z-index:3;left:0;right:0;bottom:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.button-view[data-v-297aca7f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?20?% 0}.button[data-v-297aca7f]{border:1px solid #e7e7e7;padding:%?8?% %?16?%;-webkit-border-radius:%?8?%;border-radius:%?8?%}body.?%PAGE?%[data-v-297aca7f]{background-color:#fff}',""])},a30a:function(t,i,e){"use strict";e.r(i);var n=e("b9ef"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},a356:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e("b8bc")),o=s(e("3752")),a=s(e("04c2"));function s(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniSwipeAction:n.default,uniList:o.default,uniListItem:a.default},data:function(){return{isOpened:!1,options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],options3:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}]}},methods:{bindClick:function(t){uni.showToast({title:"点击了".concat(t.text,"按钮"),icon:"none"})},setOpened:function(){this.isOpened=!this.isOpened},bindOpened:function(){this.isOpened=!0},bindClosed:function(){this.isOpened=!1}}};i.default=r},b8bc:function(t,i,e){"use strict";e.r(i);var n=e("8f48"),o=e("a30a");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("2bb3");var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"3f24ace2",null);i["default"]=r.exports},b9ef:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniSwipeAction",props:{isDrag:{type:Boolean,default:!1},isOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},options:{type:Array,default:function(){return[]}}},data:function(){var t=this.__call_hook?"uni_swipe_action":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,isShowBtn:!1,transformX:"translateX(0px)"}},watch:{isOpened:function(t,i){this.isShowBtn=!!t,this.endMove()}},created:function(){this.direction="",this.startX=0,this.startY=0,this.btnGroupWidth=0,this.isMoving=!1,this.startTime=0},mounted:function(){this.getSize()},methods:{getSize:function(){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(i){t.btnGroupWidth=i[0].width}),this.isOpened&&(this.isShowBtn=!0,this.endMove())},bindClickBtn:function(t,i){this.$emit("click",{text:t.text,style:t.style,index:i})},bindClickCont:function(t){this.isShowBtn&&this.autoClose&&(this.isShowBtn=!1,this.endMove())},touchStart:function(t){this.startTime=t.timeStamp,this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY},touchMove:function(t){if("Y"!==this.direction&&!this.disabled){var i=t.touches[0].pageY-this.startY,e=t.touches[0].pageX-this.startX;if(!this.isMoving&&Math.abs(i)>Math.abs(e))this.direction="Y";else if(this.direction=e>0?"right":"left",this.isMoving=!0,this.isDrag){var n=this.isShowBtn?-this.btnGroupWidth:0;if(n+e>=0)return void(this.transformX="translateX(0px)");if(-n-e>=this.btnGroupWidth)return void(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"));n-e>0?this.transformX="translateX(".concat(e,"px)"):e>=-this.btnGroupWidth&&(this.transformX="translateX(".concat(e-this.btnGroupWidth,"px)"))}}},touchEnd:function(t){if(this.isMoving=!1,"right"===this.direction||"left"===this.direction){if(this.isDrag){var i=Math.abs(Number(this.transformX.slice(11,-3))),e=t.timeStamp-this.startTime;this.isShowBtn=i>=this.btnGroupWidth/2,e>50&&e<300&&i>20&&("right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0)}else"right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0;this.endMove()}else this.direction=""},endMove:function(){"Y"===this.direction||this.disabled?this.direction="":(this.isShowBtn?(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"),this.$emit("opened")):(this.transformX="translateX(0px)",this.$emit("closed")),this.direction="")},close:function(){this.isShowBtn=!1,this.endMove()}}};i.default=n}}]);