(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0704":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{login:function(t){console.log("得到账号:"+t.detail.value.nameValue+";得到密码:"+t.detail.value.passwordValue)},register:function(){console.log("前往注册页面")}}};e.default=a},"40b4":function(t,e,n){"use strict";n.r(e);var a=n("d626"),i=n("fc46");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var u=n("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"0cbccda3",null);e["default"]=l.exports},d626:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-form",{staticClass:"loginView",on:{submit:function(e){e=t.$handleEvent(e),t.login(e)}}},[n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("账号")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名",name:"nameValue"}})],1),n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("密码")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",name:"passwordValue"}})],1),n("v-uni-view",{staticClass:"button-view"},[n("v-uni-button",{staticClass:"login",attrs:{type:"default","hover-class":"hover",formType:"submit"}},[t._v("登录")]),n("v-uni-button",{staticClass:"register",attrs:{type:"default","hover-class":"hover"},on:{click:function(e){e=t.$handleEvent(e),t.register(e)}}},[t._v("免费注册")])],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},fc46:function(t,e,n){"use strict";n.r(e);var a=n("0704"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}}]);