(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-image-image"],{"08bb":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("a34a")),s=a(i("2eed"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,i,n,s,a,o){try{var u=e[a](o),r=u.value}catch(c){return void i(c)}u.done?t(r):Promise.resolve(r).then(n,s)}function u(e){return function(){var t=this,i=arguments;return new Promise(function(n,s){var a=e.apply(t,i);function u(e){o(a,n,s,u,r,"next",e)}function r(e){o(a,n,s,u,r,"throw",e)}u(void 0)})}}var r=[["camera"],["album"],["camera","album"]],c=[["compressed"],["original"],["compressed","original"]],l={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var e=u(n.default.mark(function e(){var t,i=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(t=e.sent,console.log("是否继续?",t),t){e.next=7;break}return e.abrupt("return");case 7:uni.chooseImage({sourceType:r[this.sourceTypeIndex],sizeType:c[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){i.imageList=i.imageList.concat(e.tempFilePaths)},fail:function(e){}});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),isFullImg:function(){var e=this;return new Promise(function(t){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})})},previewImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:this.imageList})},checkPermission:function(){var e=u(n.default.mark(function e(t){var i,a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=t?t-1:this.sourceTypeIndex,!s.default.isIOS){e.next=7;break}return e.next=4,s.default.requestIOS(r[i]);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,s.default.requestAndroid(0===i?"android.permission.CAMERA":"android.permission.READ_EXTERNAL_STORAGE");case 9:e.t0=e.sent;case 10:return a=e.t0,null===a||1===a?a=1:uni.showModal({content:"没有开启权限",confirmText:"设置",success:function(e){e.confirm&&s.default.gotoAppSetting()}}),e.abrupt("return",a);case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};t.default=l},"1c26":function(e,t,i){"use strict";var n=i("2372"),s=i.n(n);s.a},2372:function(e,t,i){var n=i("48f9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("69dcb440",n,!0,{sourceMap:!1,shadowMode:!1})},"2eed":function(e,t,i){"use strict";var n="iOS"==plus.os.name;function s(){var e=0,t=plus.ios.import("PHPhotoLibrary"),i=t.authorizationStatus();return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function a(){var e=0,t=plus.ios.import("AVCaptureDevice"),i=t.authorizationStatusForMediaType("vide");return e=0===i?null:3==i?1:0,plus.ios.deleteObject(t),e}function o(){var e=0,t=plus.ios.import("CLLocationManager"),i=t.locationServicesEnabled(),n=t.authorizationStatus();return e=i?0===n?null:3===n||4===n?1:0:2,plus.ios.deleteObject(t),e}function u(){var e=0,t=plus.ios.import("UIApplication"),i=t.sharedApplication(),n=0;if(i.currentUserNotificationSettings){var s=i.currentUserNotificationSettings();n=s.plusGetAttribute("types"),0==n?(e=0,console.log("推送权限没有开启")):(e=1,console.log("已经开启推送功能!")),plus.ios.deleteObject(s)}else n=i.enabledRemoteNotificationTypes(),0==n?(e=3,console.log("推送权限没有开启!")):(e=4,console.log("已经开启推送功能!"));return plus.ios.deleteObject(i),plus.ios.deleteObject(t),e}function r(){var e=0,t=plus.ios.import("CNContactStore");t.authorizationStatusForEntityType(0);return e=0===authStatus?null:3==authStatus?1:0,plus.ios.deleteObject(t),e}function c(){var e=null,t=plus.ios.import("AVAudioSession"),i=t.sharedInstance(),n=i.recordPermission();return console.log("permissionStatus:"+n),e=1970168948===n?null:1735552628===n?1:0,plus.ios.deleteObject(t),e}function l(){var e=null,t=plus.ios.import("EKEventStore"),i=t.authorizationStatusForEntityType(0);return 3==i?(e=1,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(t),e}function p(){var e=null,t=plus.ios.import("EKEventStore"),i=t.authorizationStatusForEntityType(1);return 3==i?(e=1,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(t),e}function d(e){return new Promise(function(t,i){switch(e){case"push":t(u());break;case"location":t(o());break;case"record":t(c());break;case"camera":t(a());break;case"album":t(s());break;case"contact":t(r());break;case"calendar":t(l());break;case"memo":t(p());break;default:t(0);break}})}function v(e){return new Promise(function(t,i){plus.android.requestPermissions([e],function(e){for(var i=0,n=0;n<e.granted.length;n++){var s=e.granted[n];console.log("已获取的权限："+s),i=1}for(n=0;n<e.deniedPresent.length;n++){var a=e.deniedPresent[n];console.log("拒绝本次申请的权限："+a),i=0}for(n=0;n<e.deniedAlways.length;n++){var o=e.deniedAlways[n];console.log("永久拒绝申请的权限："+o),i=-1}t(i)},function(e){t({code:e.code,message:e.message})})})}function f(){if(n){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),i=plus.ios.import("NSURL"),s=i.URLWithString("app-settings:");t.openURL(s),plus.ios.deleteObject(s),plus.ios.deleteObject(i),plus.ios.deleteObject(t)}else{var a=plus.android.importClass("android.content.Intent"),o=plus.android.importClass("android.provider.Settings"),u=plus.android.importClass("android.net.Uri"),r=plus.android.runtimeMainActivity(),c=new a;c.setAction(o.ACTION_APPLICATION_DETAILS_SETTINGS);var l=u.fromParts("package",r.getPackageName(),null);c.setData(l),r.startActivity(c)}}function h(){var e=plus.ios.import("UIApplication"),t=e.sharedApplication(),i=plus.ios.import("NSURL"),n=i.URLWithString("App-prefs:root=General");t.openURL(n),plus.ios.deleteObject(n),plus.ios.deleteObject(i),plus.ios.deleteObject(t)}e.exports={isIOS:n,requestIOS:d,requestAndroid:v,gotoAppSetting:f,gotoiOSSetting:h}},"48f9":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".cell-pd[data-v-7035e64c]{padding:%?22?% %?30?%}.list-pd[data-v-7035e64c]{margin-top:%?50?%}",""])},"4e5f":function(e,t,i){"use strict";i.r(t);var n=i("f50c"),s=i("c0aa");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("1c26");var o=i("2877"),u=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"7035e64c",null);t["default"]=u.exports},c0aa:function(e,t,i){"use strict";i.r(t);var n=i("08bb"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},f50c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-form",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片来源")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector"},on:{change:function(t){t=e.$handleEvent(t),e.sourceTypeChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("图片质量")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector"},on:{change:function(t){t=e.$handleEvent(t),e.sizeTypeChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-left"},[i("v-uni-view",{staticClass:"uni-label"},[e._v("数量限制")])],1),i("v-uni-view",{staticClass:"uni-list-cell-right"},[i("v-uni-picker",{attrs:{range:e.count,mode:"selector"},on:{change:function(t){t=e.$handleEvent(t),e.countChange(t)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"uni-list list-pd"},[i("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t},on:{click:function(t){t=e.$handleEvent(t),e.previewImage(t)}}})],1)]}),i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){t=e.$handleEvent(t),e.chooseImage(t)}}})],1)],2)],1)],1)],1)],1)],1)],1)],1)},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})}}]);