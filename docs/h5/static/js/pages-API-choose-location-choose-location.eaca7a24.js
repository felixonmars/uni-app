(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-choose-location-choose-location"],{"2a46":function(t,n,i){"use strict";var e=i("3d2b"),o=i.n(e);o.a},"325c":function(t,n,i){"use strict";function e(t){if("number"!==typeof t||t<0)return t;var n=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var e=t;return[n,i,e].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function o(t,n){return"string"===typeof t&&"string"===typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}i("28a5"),i("6b54"),i("87b3");var a={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var n="";for(var i in this.UNITS)if(t>=this.UNITS[i]){n=Math.floor(t/this.UNITS[i])+i+"前";break}return n||"刚刚"},format:function(t){var n=this.parse(t),i=Date.now()-n.getTime();if(i<this.UNITS["天"])return this.humanize(i);var e=function(t){return t<10?"0"+t:t};return n.getFullYear()+"/"+e(n.getMonth()+1)+"/"+e(n.getDay())+"-"+e(n.getHours())+":"+e(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}};t.exports={formatTime:e,formatLocation:o,dateUtils:a}},"343d":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[i("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置信息")]),!1===t.hasLocation?[i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未选择位置")])]:t._e(),!0===t.hasLocation?[i("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.locationAddress))]),i("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[i("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),i("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){n=t.$handleEvent(n),t.chooseLocation(n)}}},[t._v("选择位置")]),i("v-uni-button",{on:{click:function(n){n=t.$handleEvent(n),t.clear(n)}}},[t._v("清空")])],1)],1)],1)},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},"3d2b":function(t,n,i){var e=i("60df");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("35ea322c",e,!0,{sourceMap:!1,shadowMode:!1})},"60df":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".page-body-info[data-v-20ed4ba9]{padding-bottom:0;height:%?440?%}",""])},"62ad":function(t,n,i){"use strict";i.r(n);var e=i("6e68"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},"6e68":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("325c"),o=e.formatLocation,a={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var t=this;uni.chooseLocation({success:function(n){t.hasLocation=!0,t.location=o(n.longitude,n.latitude),t.locationAddress=n.address}})},clear:function(){this.hasLocation=!1}}};n.default=a},9654:function(t,n,i){"use strict";i.r(n);var e=i("343d"),o=i("62ad");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("2a46");var r=i("2877"),u=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"20ed4ba9",null);n["default"]=u.exports}}]);