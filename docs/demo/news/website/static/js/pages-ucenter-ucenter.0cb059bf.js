(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-ucenter"],{"07e4":function(A,t,e){"use strict";(function(A){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{login:!1,avatarUrl:"/static/logo.png",uerInfo:{}}},methods:{goLogin:function(){this.login||A.log("点击前往登录")}}};t.default=e}).call(this,e("5a52")["default"])},3733:function(A,t,e){var i=e("b041");t=A.exports=e("2350")(!1),t.push([A.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@font-face{font-family:texticons;font-weight:400;font-style:normal;src:url("+i(e("8c2e"))+') format("truetype")}uni-page-body[data-v-c4b9ddfe]{background-color:#f8f8f8}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.center[data-v-c4b9ddfe]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f8f8f8}.logo[data-v-c4b9ddfe]{width:%?750?%;height:%?240?%;padding:%?20?%;background-color:#2f85fc;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.logo-hover[data-v-c4b9ddfe]{opacity:.8}.logo-img[data-v-c4b9ddfe]{width:%?150?%;height:%?150?%;border-radius:%?150?%}.logo-title[data-v-c4b9ddfe]{height:%?150?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:%?20?%}.uer-name[data-v-c4b9ddfe]{height:%?60?%;line-height:%?60?%;font-size:%?38?%;color:#fff}.go-login-navigat-arrow[data-v-c4b9ddfe]{font-size:%?38?%;color:#fff}.login-title[data-v-c4b9ddfe]{height:%?150?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:%?20?%}.center-list[data-v-c4b9ddfe]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;margin-top:%?20?%;width:%?750?%}.center-list-item[data-v-c4b9ddfe]{height:%?90?%;width:%?750?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?0?% %?20?%}.border-bottom[data-v-c4b9ddfe]{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon[data-v-c4b9ddfe]{width:%?40?%;height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#2f85fc;text-align:center;font-family:texticons;margin-right:%?20?%}.list-text[data-v-c4b9ddfe]{height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#555;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.navigat-arrow[data-v-c4b9ddfe]{height:%?90?%;width:%?40?%;line-height:%?90?%;font-size:%?34?%;color:#555;text-align:right;font-family:texticons}body.?%PAGE?%[data-v-c4b9ddfe]{background-color:#f8f8f8}',""])},"4a19":function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"center"},[e("v-uni-view",{staticClass:"logo",attrs:{"hover-class":A.login?"":"logo-hover"},on:{click:function(t){t=A.$handleEvent(t),A.goLogin(t)}}},[e("v-uni-image",{staticClass:"logo-img",attrs:{src:A.login?A.uerInfo.avatarUrl:A.avatarUrl}}),e("v-uni-view",{staticClass:"logo-title"},[e("v-uni-text",{staticClass:"uer-name"},[A._v("Hi，"+A._s(A.login?A.uerInfo.name:"您未登录"))]),A.login?A._e():e("v-uni-text",{staticClass:"go-login-navigat-arrow navigat-arrow"},[A._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom"},[e("v-uni-text",{staticClass:"list-icon"},[A._v("")]),e("v-uni-text",{staticClass:"list-text"},[A._v("账号管理")]),e("v-uni-text",{staticClass:"navigat-arrow"},[A._v("")])],1),e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[A._v("")]),e("v-uni-text",{staticClass:"list-text"},[A._v("新消息通知")]),e("v-uni-text",{staticClass:"navigat-arrow"},[A._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom"},[e("v-uni-text",{staticClass:"list-icon"},[A._v("")]),e("v-uni-text",{staticClass:"list-text"},[A._v("帮助与反馈")]),e("v-uni-text",{staticClass:"navigat-arrow"},[A._v("")])],1),e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[A._v("")]),e("v-uni-text",{staticClass:"list-text"},[A._v("服务条款及隐私")]),e("v-uni-text",{staticClass:"navigat-arrow"},[A._v("")])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item"},[e("v-uni-text",{staticClass:"list-icon"},[A._v("")]),e("v-uni-text",{staticClass:"list-text"},[A._v("关于应用")]),e("v-uni-text",{staticClass:"navigat-arrow"},[A._v("")])],1)],1)],1)},n=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return n})},"563f":function(A,t,e){"use strict";e.r(t);var i=e("07e4"),n=e.n(i);for(var o in i)"default"!==o&&function(A){e.d(t,A,function(){return i[A]})}(o);t["default"]=n.a},7358:function(A,t,e){"use strict";e.r(t);var i=e("4a19"),n=e("563f");for(var o in n)"default"!==o&&function(A){e.d(t,A,function(){return n[A]})}(o);e("7e9c");var c=e("2877"),a=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"c4b9ddfe",null);t["default"]=a.exports},"7e9c":function(A,t,e){"use strict";var i=e("f755"),n=e.n(i);n.a},"8c2e":function(A,t){A.exports="data:font/ttf;base64,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"},b041:function(A,t){A.exports=function(A){return"string"!==typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},f755:function(A,t,e){var i=e("3733");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("49215a68",i,!0,{sourceMap:!1,shadowMode:!1})}}]);