(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-add-phone-contact-add-phone-contact"],{b228:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){uni.addPhoneContact({firstName:this.name,mobilePhoneNumber:this.phone,success:function(){uni.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){uni.showModal({content:"添加联系人失败！",showCancel:!1})}})}}};t.default=i},d908:function(n,t,e){"use strict";e.r(t);var i=e("b228"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=a.a},ea9c:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("名称")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人名称",name:"name",value:n.name},on:{input:function(t){t=n.$handleEvent(t),n.nameChange(t)}}})],1)],1),e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[e("v-uni-view",{staticClass:"uni-label"},[n._v("手机号")])],1),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人手机号",name:"phone",value:n.phone},on:{input:function(t){t=n.$handleEvent(t),n.phoneChange(t)}}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(t){t=n.$handleEvent(t),n.add(t)}}},[n._v("添加联系人")])],1)],1)],1)],1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},f390:function(n,t,e){"use strict";e.r(t);var i=e("ea9c"),a=e("d908");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);var s=e("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"6f451d5f",null);t["default"]=l.exports}}]);