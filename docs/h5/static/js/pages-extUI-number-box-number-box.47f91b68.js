(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-number-box-number-box"],{"0de5":function(e,t,i){"use strict";var n=i("af76"),a=i.n(n);a.a},1411:function(e,t,i){"use strict";i.r(t);var n=i("64ad"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},2540:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-numbox[data-v-407f22a9]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:%?70?%;position:relative}.uni-numbox[data-v-407f22a9]:after{content:"";position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-407f22a9],.uni-numbox__plus[data-v-407f22a9]{margin:0;background-color:#f8f8f8;width:%?70?%;font-size:%?40?%;height:100%;line-height:%?70?%;text-align:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;position:relative}.uni-numbox__value[data-v-407f22a9]{position:relative;background-color:#fff;width:%?80?%;height:100%;text-align:center;padding:0}.uni-numbox__value[data-v-407f22a9]:after{content:"";position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-style:solid;border-color:#c8c7cc;border-left-width:1px;border-right-width:1px;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-407f22a9]{color:silver}',""])},2740:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"example-info"},[e._v("数字输入框组件多用于购物车加减商品等场景")]),i("v-uni-view",{staticClass:"example-title"},[e._v("基本用法")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-number-box")],1),i("v-uni-view",{staticClass:"example-title"},[e._v("设置最小值和最大值")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-number-box",{attrs:{min:2,max:9,value:5}})],1),i("v-uni-view",{staticClass:"example-title"},[e._v("设置步长（步长0.1）")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-number-box",{attrs:{step:.1}})],1),i("v-uni-view",{staticClass:"example-title"},[e._v("禁用状态")]),i("v-uni-view",{staticClass:"example-body"},[i("uni-number-box",{attrs:{disabled:!0}})],1),i("v-uni-view",{staticClass:"example-title"},[e._v("获取输入的值 : "+e._s(e.numberValue))]),i("v-uni-view",{staticClass:"example-body"},[i("uni-number-box",{attrs:{value:e.numberValue},on:{change:function(t){t=e.$handleEvent(t),e.change(t)}}})],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"2f49":function(e,t,i){"use strict";var n=i("723f"),a=i.n(n);a.a},3926:function(e,t,i){"use strict";i.r(t);var n=i("2740"),a=i("6963");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("0de5");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"17025f34",null);t["default"]=l.exports},"64ad":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(e){this.inputValue=+e},inputValue:function(e,t){+e!==+t&&this.$emit("change",e)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(e){if(!this.disabled){var t=this._getDecimalScale(),i=this.inputValue*t,n=this.step*t;"minus"===e?i-=n:"plus"===e&&(i+=n),i<this.min||i>this.max||(this.inputValue=i/t)}},_getDecimalScale:function(){var e=1;return~~this.step!==this.step&&(e=Math.pow(10,(this.step+"").split(".")[1].length)),e},_onBlur:function(e){var t=e.detail.value;t?(t=+t,t>this.max?t=this.max:t<this.min&&(t=this.min),this.inputValue=t):this.inputValue=0}}};t.default=n},6963:function(e,t,i){"use strict";i.r(t);var n=i("df7f"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"723f":function(e,t,i){var n=i("2540");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("8e65f048",n,!0,{sourceMap:!1,shadowMode:!1})},"8a90":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'uni-page-body[data-v-17025f34]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-17025f34]{font-size:%?28?%;line-height:inherit}.example[data-v-17025f34]{padding:0 %?30?% %?30?%}.example-title[data-v-17025f34]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd}.example-title__after[data-v-17025f34]{position:relative;color:#031e3c}.example-title[data-v-17025f34]:after{content:"";position:absolute;left:0;margin:auto;top:0;bottom:0;width:%?10?%;height:%?40?%;border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;background-color:#031e3c}.example .example-title[data-v-17025f34]{margin:%?40?% 0}.example-body[data-v-17025f34]{border-top:1px #f5f5f5 solid;padding:%?30?%;background:#fff}.example-info[data-v-17025f34]{padding:%?30?%;color:#3b4144;background:#fff}body.?%PAGE?%[data-v-17025f34]{background-color:#efeff4}',""])},a7f3:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-numbox"},[i("v-uni-view",{staticClass:"uni-numbox__minus",class:{"uni-numbox--disabled":e.inputValue<=e.min||e.disabled},on:{click:function(t){t=e.$handleEvent(t),e._calcValue("minus")}}},[e._v("-")]),i("v-uni-input",{staticClass:"uni-numbox__value",attrs:{disabled:e.disabled,type:"number"},on:{blur:function(t){t=e.$handleEvent(t),e._onBlur(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),i("v-uni-view",{staticClass:"uni-numbox__plus",class:{"uni-numbox--disabled":e.inputValue>=e.max||e.disabled},on:{click:function(t){t=e.$handleEvent(t),e._calcValue("plus")}}},[e._v("+")])],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},af76:function(e,t,i){var n=i("8a90");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3718d002",n,!0,{sourceMap:!1,shadowMode:!1})},d3c7:function(e,t,i){"use strict";i.r(t);var n=i("a7f3"),a=i("1411");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("2f49");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"407f22a9",null);t["default"]=l.exports},df7f:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("d3c7"));function a(e){return e&&e.__esModule?e:{default:e}}var o={components:{uniNumberBox:n.default},data:function(){return{numberValue:0}},methods:{change:function(e){this.numberValue=e}}};t.default=o}}]);