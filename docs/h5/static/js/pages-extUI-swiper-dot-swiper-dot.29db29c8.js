(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swiper-dot-swiper-dot"],{"0e9d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(e){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(e){"indexes"===e?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};t.default=o},2788:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'uni-page-body[data-v-3a78957c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#efeff4}uni-view[data-v-3a78957c]{font-size:%?28?%;line-height:inherit}.example[data-v-3a78957c]{padding:0 %?30?% %?30?%}.example-title[data-v-3a78957c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?32?%;color:#464e52;padding:%?30?%;margin-top:%?20?%;position:relative;background-color:#fdfdfd}.example-title__after[data-v-3a78957c]{position:relative;color:#031e3c}.example-title[data-v-3a78957c]:after{content:"";position:absolute;left:0;margin:auto;top:0;bottom:0;width:%?10?%;height:%?40?%;border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;background-color:#031e3c}.example .example-title[data-v-3a78957c]{margin:%?40?% 0}.example-body[data-v-3a78957c]{border-top:1px #f5f5f5 solid;padding:%?30?%;background:#fff}.example-info[data-v-3a78957c]{padding:%?30?%;color:#3b4144;background:#fff}.swiper-box[data-v-3a78957c]{height:%?400?%}.swiper-item[data-v-3a78957c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;background:#eee;color:#fff}.swiper-item uni-image[data-v-3a78957c]{width:100%;height:100%}.uni-bg-red[data-v-3a78957c]{background:#ff5a5f}.uni-bg-green[data-v-3a78957c]{background:#09bb07}.uni-bg-blue[data-v-3a78957c]{background:#007aff}.example-body[data-v-3a78957c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?%}.example-body-item[data-v-3a78957c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:%?15?%;height:%?60?%;width:100%;font-size:%?28?%;color:#333;border:1px #eee solid;border-radius:%?10?%}.example-body-dots[data-v-3a78957c]{width:%?16?%;height:%?16?%;border-radius:50%;background:#333;margin-left:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box}.example-body-dots[data-v-3a78957c]:first-child{margin:0}.active[data-v-3a78957c]{border:1px #000 solid}body.?%PAGE?%[data-v-3a78957c]{background-color:#efeff4}',""])},"68f4":function(e,t,i){"use strict";i.r(t);var o=i("d331"),n=i("9cad");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("a99a");var a=i("2877"),r=Object(a["a"])(n["default"],o["a"],o["b"],!1,null,"614b06c3",null);t["default"]=r.exports},"8b7a":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-swiper__warp[data-v-614b06c3]{position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.uni-swiper__dots-box[data-v-614b06c3]{position:absolute;bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:box-sizing;box-sizing:box-sizing;width:100%}.uni-swiper__dots-item[data-v-614b06c3]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?16?%;border-radius:50%;margin-left:%?12?%;background:rgba(0,0,0,.3);-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.uni-swiper__dots-item[data-v-614b06c3]:first-child{margin:0}.uni-swiper__dots-default[data-v-614b06c3]{border-radius:50%}.uni-swiper__dots-long[data-v-614b06c3]{border-radius:%?100?%}.uni-swiper__dots-nav[data-v-614b06c3]{bottom:0;height:%?80?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:rgba(0,0,0,.2);-webkit-box-sizing:box-sizing;box-sizing:box-sizing;overflow:hidden}.uni-swiper__dots-nav-item[data-v-614b06c3]{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#fff;-webkit-box-sizing:box-sizing;box-sizing:box-sizing;margin:0 %?30?%}.uni-swiper__dots-indexes[data-v-614b06c3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:%?24?%}",""])},"8e50":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("68f4"));function n(e){return e&&e.__esModule?e:{default:e}}var s={components:{uniSwiperDot:o.default},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(e){this.current=e.detail.current},selectStyle:function(e){this.dotsStyles=this.dotStyle[e],this.styleIndex=e},selectMode:function(e,t){this.mode=e,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};t.default=s},94087:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("uni-swiper-dot",{attrs:{info:e.info,current:e.current,mode:e.mode,"dots-styles":e.dotsStyles,field:"content"}},[i("v-uni-swiper",{staticClass:"swiper-box",on:{change:function(t){t=e.$handleEvent(t),e.change(t)}}},e._l(e.info,function(e,t){return i("v-uni-swiper-item",{key:t},[i("v-uni-view",{staticClass:"swiper-item",class:e.colorClass},[i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}})],1)],1)}),1)],1),i("v-uni-view",{staticClass:"example-title"},[e._v("模式选择")]),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"example-body-item",class:{active:0===e.modeIndex},on:{click:function(t){t=e.$handleEvent(t),e.selectMode("default",0)}}},[e._v("default")]),i("v-uni-view",{staticClass:"example-body-item",class:{active:1===e.modeIndex},on:{click:function(t){t=e.$handleEvent(t),e.selectMode("long",1)}}},[e._v("long")]),i("v-uni-view",{staticClass:"example-body-item",class:{active:2===e.modeIndex},on:{click:function(t){t=e.$handleEvent(t),e.selectMode("nav",2)}}},[e._v("nav")]),i("v-uni-view",{staticClass:"example-body-item",class:{active:3===e.modeIndex},on:{click:function(t){t=e.$handleEvent(t),e.selectMode("indexes",3)}}},[e._v("indexes")])],1),i("v-uni-view",{staticClass:"example-title"},[e._v("颜色样式选择")]),i("v-uni-view",{staticClass:"example-body"},["nav"!==e.mode?e._l(e.dotStyle,function(t,o){return i("v-uni-view",{key:o,staticClass:"example-body-item",class:{active:e.styleIndex===o},on:{click:function(t){t=e.$handleEvent(t),e.selectStyle(o)}}},[i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.selectedBackgroundColor,border:t.selectedBorder}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.backgroundColor,border:t.border}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":t.backgroundColor,border:t.border}})],1)}):e._e(),"nav"===e.mode?e._l(e.dotStyle,function(t,o){return i("v-uni-view",{key:o,staticClass:"example-body-item",class:{active:e.styleIndex===o},style:{"background-color":t.selectedBackgroundColor},on:{click:function(t){t=e.$handleEvent(t),e.selectStyle(o)}}},[i("v-uni-text",{style:{color:t.color}},[e._v("内容")])],1)}):e._e()],2)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},"97cb":function(e,t,i){"use strict";i.r(t);var o=i("8e50"),n=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);t["default"]=n.a},"9cad":function(e,t,i){"use strict";i.r(t);var o=i("0e9d"),n=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);t["default"]=n.a},a99a:function(e,t,i){"use strict";var o=i("fdbd"),n=i.n(o);n.a},d331:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[e._t("default"),"default"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item",style:{width:e.dots.width+"px",height:e.dots.height+"px","background-color":o!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:o!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"long"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item ",class:[o===e.current&&"uni-swiper__dots-long"],style:{width:(o===e.current?3*e.dots.width:e.dots.width)+"px",height:e.dots.height+"px","background-color":o!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:o!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"nav"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":e.dotsStyles.backgroundColor}},[i("v-uni-view",{staticClass:"uni-swiper__dots-nav-item",style:{color:e.dotsStyles.color}},[e._v(e._s(e.current+1+"/"+e.info.length)+"\n\t\t\t\t"+e._s(e.info[e.current][e.field]))])],1):e._e(),"indexes"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:e.dots.width+"px",height:e.dots.height+"px",color:o===e.current?e.dots.selectedColor:e.dots.color,"background-color":o!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:o!==e.current?e.dots.border:e.dots.selectedBorder}},[e._v(e._s(o+1))])}),1):e._e()],2)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},d728:function(e,t,i){var o=i("2788");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("de0a989c",o,!0,{sourceMap:!1,shadowMode:!1})},e9e4:function(e,t,i){"use strict";var o=i("d728"),n=i.n(o);n.a},ea53a:function(e,t,i){"use strict";i.r(t);var o=i("94087"),n=i("97cb");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("e9e4");var a=i("2877"),r=Object(a["a"])(n["default"],o["a"],o["b"],!1,null,"3a78957c",null);t["default"]=r.exports},fdbd:function(e,t,i){var o=i("8b7a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("496e58cb",o,!0,{sourceMap:!1,shadowMode:!1})}}]);