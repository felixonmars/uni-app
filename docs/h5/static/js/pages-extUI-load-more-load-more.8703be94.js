(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-load-more-load-more"],{"09c2":function(t,e,a){"use strict";a.r(e);var i=a("6813"),o=a("ba86");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("d17b6");var r=a("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"237263ce",null);e["default"]=l.exports},"0aa0":function(t,e,a){var i=a("6e8b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("06a9aaa6",i,!0,{sourceMap:!1,shadowMode:!1})},2718:function(t,e,a){var i=a("9ada");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("2b535da6",i,!0,{sourceMap:!1,shadowMode:!1})},"5e46":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"example-info"},[t._v("加载更多组件用于页面加载更多数据时，页面底部显示内容等场景。")]),a("v-uni-view",{staticClass:"example-title"},[t._v("基本用法")]),a("v-uni-view",{staticClass:"example-body"},[a("uni-load-more",{attrs:{status:t.status}})],1),a("v-uni-view",{staticClass:"example-title"},[t._v("修改默认颜色及文字")]),a("v-uni-view",{staticClass:"example-body"},[a("uni-load-more",{attrs:{status:t.status,"content-text":t.contentText,color:"#007aff"}})],1),a("v-uni-view",{staticClass:"example-title"},[t._v("改变组件状态")]),a("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){e=t.$handleEvent(e),t.onChange(e)}}},t._l(t.statusTypes,function(e,i){return a("v-uni-label",{key:i,staticClass:"uni-list-item"},[a("v-uni-view",{staticClass:"uni-list-item__container"},[a("v-uni-view",{staticClass:"uni-list-item__content"},[a("v-uni-view",{staticClass:"uni-list-item__content-title"},[t._v(t._s(e.text))])],1),a("v-uni-view",{staticClass:"uni-list-item__extra"},[a("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)],1)}),1)],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},6524:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},6813:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return o})},"6e8b":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'uni-page-body[data-v-2585df1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-2585df1f]{font-size:%?28?%;line-height:inherit}.example[data-v-2585df1f]{padding:0 %?30?% %?30?%}.example-title[data-v-2585df1f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd}.example-title__after[data-v-2585df1f]{position:relative;color:#031e3c}.example-title[data-v-2585df1f]:after{content:"";position:absolute;left:0;margin:auto;top:0;bottom:0;width:%?10?%;height:%?40?%;border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;background-color:#031e3c}.example .example-title[data-v-2585df1f]{margin:%?40?% 0}.example-body[data-v-2585df1f]{border-top:1px #f5f5f5 solid;padding:%?30?%;background:#fff}.example-info[data-v-2585df1f]{padding:%?30?%;color:#3b4144;background:#fff}uni-radio-group uni-label[data-v-2585df1f]{padding:0}.uni-list[data-v-2585df1f]{background:#fff}.example-body[data-v-2585df1f]{padding:%?10?% %?30?%}.uni-list-item__container[data-v-2585df1f]{padding:%?24?% %?30?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-list-item__container[data-v-2585df1f]:after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}body.?%PAGE?%[data-v-2585df1f]{background-color:#efeff4}',""])},7196:function(t,e,a){"use strict";var i=a("0aa0"),o=a.n(i);o.a},"91c8":function(t,e,a){"use strict";a.r(e);var i=a("d1ba"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},"9ada":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-load-more[data-v-237263ce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-237263ce]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-237263ce]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-237263ce]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-237263ce]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-237263ce 1.56s ease infinite;animation:load-data-v-237263ce 1.56s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-237263ce]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-237263ce]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-237263ce]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-237263ce]:nth-child(4){top:11px;left:0}.load1[data-v-237263ce],.load2[data-v-237263ce],.load3[data-v-237263ce]{height:24px;width:24px}.load2[data-v-237263ce]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-237263ce]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-237263ce]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-237263ce]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 .uni-load-view_wrapper[data-v-237263ce]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 .uni-load-view_wrapper[data-v-237263ce]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 .uni-load-view_wrapper[data-v-237263ce]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 .uni-load-view_wrapper[data-v-237263ce]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 .uni-load-view_wrapper[data-v-237263ce]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 .uni-load-view_wrapper[data-v-237263ce]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 .uni-load-view_wrapper[data-v-237263ce]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 .uni-load-view_wrapper[data-v-237263ce]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 .uni-load-view_wrapper[data-v-237263ce]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 .uni-load-view_wrapper[data-v-237263ce]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-237263ce{0%{opacity:1}to{opacity:.2}}",""])},ba86:function(t,e,a){"use strict";a.r(e);var i=a("6524"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},d17b6:function(t,e,a){"use strict";var i=a("2718"),o=a.n(i);o.a},d1ba:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("09c2")),n={components:{uniLoadMore:o.default},data:function(){return{status:"more",statusTypes:[{value:"more",text:"加载前",checked:!0},{value:"loading",text:"加载中",checked:!1},{value:"noMore",text:"没有更多",checked:!1}],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},methods:{onChange:function(t){this.status=t.detail.value}}};e.default=n},f21f:function(t,e,a){"use strict";a.r(e);var i=a("5e46"),o=a("91c8");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("7196");var r=a("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"2585df1f",null);e["default"]=l.exports}}]);