(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-upload-file-upload-file"],{1142:function(e,t,a){"use strict";a.r(t);var n=a("30dc"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},"2e80":function(e,t,a){"use strict";var n=a("872e"),i=a.n(n);i.a},"30dc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var a=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=a},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};t.default=n},"4f3b":function(e,t,a){"use strict";a.r(t);var n=a("7014"),i=a("1142");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("2e80");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"7e8512f8",null);t["default"]=c.exports},7014:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"demo"},[e.imageSrc?[a("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}},[e._v("+ 选择图片")])]],2)],1)],1)},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"7c28":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".image[data-v-7e8512f8]{width:100%}.demo[data-v-7e8512f8]{background:#fff;padding:%?50?%}",""])},"872e":function(e,t,a){var n=a("7c28");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("216dc9b5",n,!0,{sourceMap:!1,shadowMode:!1})}}]);