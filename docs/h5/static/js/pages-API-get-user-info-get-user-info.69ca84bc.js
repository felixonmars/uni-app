(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-user-info-get-user-info"],{"02fe":function(e,n,t){"use strict";var r=t("dea5"),i=t.n(r);i.a},"7f05":function(e,n,t){"use strict";t.r(n);var r=t("b46c"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=i.a},b46c:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("2f62");function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{}}},computed:i({},(0,r.mapState)({loginProvider:function(e){return e.loginProvider}})),methods:{getUserInfo:function(){var e=this;uni.getUserInfo({provider:this.loginProvider,success:function(n){console.log("getUserInfo success",n),e.hasUserInfo=!0,e.userInfo=n.userInfo},fail:function(e){console.log("getUserInfo fail",e);var n=e.errMsg;~n.indexOf("uni.login")&&(n="请在登录页面完成登录操作"),uni.showModal({title:"获取用户信息失败",content:"错误原因"+n,showCancel:!1})}})},mpGetUserInfo:function(e){console.log("mpGetUserInfo",e),"getUserInfo:ok"===e.detail.errMsg?(this.hasUserInfo=!0,this.userInfo=e.detail.userInfo):uni.showModal({title:"获取用户信息失败",content:"错误原因"+e.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}}};n.default=a},cc83:function(e,n,t){"use strict";t.r(n);var r=t("fe72"),i=t("7f05");for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);t("02fe");var a=t("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"0dac3ce6",null);n["default"]=s.exports},dea5:function(e,n,t){var r=t("f835");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=t("4f06").default;i("b75d96e6",r,!0,{sourceMap:!1,shadowMode:!1})},f835:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,".userinfo-avatar[data-v-0dac3ce6]{border-radius:%?128?%;width:%?128?%;height:%?128?%}",""])},fe72:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-view",{staticStyle:{background:"#FFF",padding:"40upx"}},[!1===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t("v-uni-text",[e._v("请点击下方按钮获取用户头像及昵称")])],1)]:e._e(),!0===e.hasUserInfo?[t("v-uni-view",{staticClass:"uni-h4 uni-center uni-common-mt"},[e._v(e._s(e.userInfo.nickName))]),t("v-uni-view",{staticStyle:{padding:"30upx 0","text-align":"center"}},[t("v-uni-image",{staticClass:"userinfo-avatar",attrs:{src:e.userInfo.avatarUrl}})],1)]:e._e()],2),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{on:{click:function(n){n=e.$handleEvent(n),e.clear(n)}}},[e._v("清空")])],1)],1)],1)},i=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i})}}]);