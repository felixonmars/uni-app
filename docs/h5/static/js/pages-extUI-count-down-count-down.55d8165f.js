(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-count-down-count-down"],{"0c0a":function(t,e,o){var n=o("789d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("97cef482",n,!0,{sourceMap:!1,shadowMode:!1})},"1cd4":function(t,e,o){"use strict";var n=o("20b8"),i=o.n(n);i.a},"20b8":function(t,e,o){var n=o("3194");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("13d0cd09",n,!0,{sourceMap:!1,shadowMode:!1})},3194:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'uni-page-body[data-v-40537b74]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-40537b74]{font-size:%?28?%;line-height:inherit}.example[data-v-40537b74]{padding:0 %?30?% %?30?%}.example-title[data-v-40537b74]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd}.example-title__after[data-v-40537b74]{position:relative;color:#031e3c}.example-title[data-v-40537b74]:after{content:"";position:absolute;left:0;margin:auto;top:0;bottom:0;width:%?10?%;height:%?40?%;border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;background-color:#031e3c}.example .example-title[data-v-40537b74]{margin:%?40?% 0}.example-body[data-v-40537b74]{border-top:1px #f5f5f5 solid;padding:%?30?%;background:#fff}.example-info[data-v-40537b74]{padding:%?30?%;color:#3b4144;background:#fff}.title[data-v-40537b74]{margin:%?80?% 0 %?20?% 0}body.?%PAGE?%[data-v-40537b74]{background-color:#efeff4}',""])},"31f5":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c5f6");var n={name:"UniCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,o,n){return 60*t*60*24+60*e*60+60*o+n},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,o=0,n=0,i=0;t>0?(e=Math.floor(t/86400),o=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*o,i=Math.floor(t)-24*e*60*60-60*o*60-60*n):this.timeUp(),e<10&&(e="0"+e),o<10&&(o="0"+o),n<10&&(n="0"+n),i<10&&(i="0"+i),this.d=e,this.h=o,this.i=n,this.s=i}}};e.default=n},"3d49":function(t,e,o){"use strict";o.r(e);var n=o("31f5"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"489a":function(t,e,o){"use strict";var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("7fcc")),a={components:{uniCountDown:i.default},data:function(){return{}},methods:{timeup:function(){uni.showToast({title:"时间到"})}}};e.default=a},4952:function(t,e,o){"use strict";var n=o("0c0a"),i=o.n(n);i.a},"4b03":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},5091:function(t,e,o){"use strict";o.r(e);var n=o("a672"),i=o("630a");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("1cd4");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"40537b74",null);e["default"]=s.exports},"630a":function(t,e,o){"use strict";o.r(e);var n=o("489a"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"789d":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".uni-countdown[data-v-033b3fa4]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown__splitor[data-v-033b3fa4]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-033b3fa4]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}",""])},"7fcc":function(t,e,o){"use strict";o.r(e);var n=o("4b03"),i=o("3d49");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("4952");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"033b3fa4",null);e["default"]=s.exports},a672:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"example-info"},[t._v("倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")]),o("v-uni-view",{staticClass:"example-title"},[t._v("一般用法")]),o("v-uni-view",{staticClass:"example-body"},[o("uni-count-down",{attrs:{day:1,hour:1,minute:12,second:40}})],1),o("v-uni-view",{staticClass:"example-title"},[t._v("不显示天数")]),o("v-uni-view",{staticClass:"example-body"},[o("uni-count-down",{attrs:{"show-day":!1,hour:12,minute:12,second:12}})],1),o("v-uni-view",{staticClass:"example-title"},[t._v("文字分隔符")]),o("v-uni-view",{staticClass:"example-body"},[o("uni-count-down",{attrs:{minute:30,second:0,"show-colon":!1}})],1),o("v-uni-view",{staticClass:"example-title"},[t._v("修改颜色")]),o("v-uni-view",{staticClass:"example-body"},[o("uni-count-down",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#00B26A","border-color":"#00B26A"}})],1),o("v-uni-view",{staticClass:"example-title"},[t._v("倒计时回调事件")]),o("v-uni-view",{staticClass:"example-body"},[o("uni-count-down",{attrs:{"show-day":!1,second:10},on:{timeup:function(e){e=t.$handleEvent(e),t.timeup(e)}}})],1)],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})}}]);