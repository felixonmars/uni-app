(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-request"],{"12cd":function(t,n,e){"use strict";e.r(n);var r=e("3baa"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=a.a},"1af6":function(t,n,e){var r=e("63b6");r(r.S,"Array",{isArray:e("9003")})},"2f55":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-hello-text"},[t._v("请点击按钮向服务器发起请求")]),e("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[e("v-uni-textarea",{attrs:{value:t.res}})],1),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(n){n=t.$handleEvent(n),t.sendRequest(n)}}},[t._v("发起请求（Callback）")]),e("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(n){n=t.$handleEvent(n),t.sendRequest("promise")}}},[t._v("发起请求（Promise）")]),e("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(n){n=t.$handleEvent(n),t.sendRequest("await")}}},[t._v("发起请求（Async/Await）")])],1)],1)],1)},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},"3baa":function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("768b"));e("96cf");var i=r(e("3b8d")),s="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",o=2e3,u={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(t){switch(this.loading=!0,t){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;uni.request({url:s,dataType:"text",data:{noncestr:Date.now()},success:function(n){console.log("request success",n),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),t.res="请求结果 : "+JSON.stringify(n)},fail:function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;uni.request({url:s,dataType:"text",data:{noncestr:Date.now()}}).then(function(n){console.log("request success",n[1]),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),t.res="请求结果 : "+JSON.stringify(n[1]),t.loading=!1}).catch(function(n){console.log("request fail",n),uni.showModal({content:n.errMsg,showCancel:!1}),t.loading=!1})},_requestAwait:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var n,e,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.request({url:s,dataType:"text",data:{noncestr:Date.now()}});case 2:n=t.sent,e=(0,a.default)(n,2),r=e[0],i=e[1],r?(console.log("request fail",r),uni.showModal({content:r.errMsg,showCancel:!1})):(console.log("request success",i),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),this.res="请求结果 : "+JSON.stringify(i)),this.loading=!1;case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=u},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"5d73":function(t,n,e){t.exports=e("469f")},"768b":function(t,n,e){"use strict";e.r(n);var r=e("a745"),a=e.n(r);function i(t){if(a()(t))return t}var s=e("5d73"),o=e.n(s);function u(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var s,u=o()(t);!(r=(s=u.next()).done);r=!0)if(e.push(s.value),n&&e.length===n)break}catch(c){a=!0,i=c}finally{try{r||null==u["return"]||u["return"]()}finally{if(a)throw i}}return e}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,n){return i(t)||u(t,n)||c()}e.d(n,"default",function(){return l})},"7d7b":function(t,n,e){var r=e("e4ae"),a=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=a(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},a45f:function(t,n,e){"use strict";e.r(n);var r=e("2f55"),a=e("12cd");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var s=e("2877"),o=Object(s["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports},a745:function(t,n,e){t.exports=e("f410")},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);