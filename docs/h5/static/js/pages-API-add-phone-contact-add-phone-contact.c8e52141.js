(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-add-phone-contact-add-phone-contact"],{"3b0f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("名称")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人名称",name:"name",value:t.name},on:{input:function(e){e=t.$handleEvent(e),t.nameChange(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("手机号")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入联系人手机号",name:"phone",value:t.phone},on:{input:function(e){e=t.$handleEvent(e),t.phoneChange(e)}}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-setstorage",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.add(e)}}},[t._v("添加联系人")])],1)],1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b228:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("c437"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(t){this.name=t.detail.value},phoneChange:function(t){this.phone=t.detail.value},add:function(){uni.addPhoneContact({firstName:this.name,mobilePhoneNumber:this.phone,success:function(){uni.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){uni.showModal({content:"添加联系人失败！",showCancel:!1})}})}}};e.default=o},c437:function(t,e,n){"use strict";var i="iOS"==plus.os.name;function o(){var t=0,e=plus.ios.import("PHPhotoLibrary"),n=e.authorizationStatus();return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function s(){var t=0,e=plus.ios.import("AVCaptureDevice"),n=e.authorizationStatusForMediaType("vide");return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function a(){var t=0,e=plus.ios.import("CLLocationManager"),n=e.locationServicesEnabled(),i=e.authorizationStatus();return t=n?0===i?null:3===i?1:0:2,plus.ios.deleteObject(e),t}function l(){var t=0,e=plus.ios.import("UIApplication"),n=e.sharedApplication(),i=0;if(n.currentUserNotificationSettings){var o=n.currentUserNotificationSettings();i=o.plusGetAttribute("types"),0==i?(t=0,console.log("推送权限没有开启")):(t=1,console.log("已经开启推送功能!")),plus.ios.deleteObject(o)}else i=n.enabledRemoteNotificationTypes(),0==i?(t=3,console.log("推送权限没有开启!")):(t=4,console.log("已经开启推送功能!"));return plus.ios.deleteObject(n),plus.ios.deleteObject(e),t}function u(){var t=0,e=plus.ios.import("CNContactStore");e.authorizationStatusForEntityType(0);return t=0===authStatus?null:3==authStatus?1:0,plus.ios.deleteObject(e),t}function r(){var t=null,e=plus.ios.import("AVAudioSession"),n=e.sharedInstance(),i=n.recordPermission();return console.log("permissionStatus:"+i),t=1970168948===i?null:1735552628===i?1:0,plus.ios.deleteObject(e),t}function c(){var t=null,e=plus.ios.import("EKEventStore"),n=e.authorizationStatusForEntityType(0);return 3==n?(t=1,console.log("日历权限已经开启")):console.log("日历权限没有开启"),plus.ios.deleteObject(e),t}function p(){var t=null,e=plus.ios.import("EKEventStore"),n=e.authorizationStatusForEntityType(1);return 3==n?(t=1,console.log("备忘录权限已经开启")):console.log("备忘录权限没有开启"),plus.ios.deleteObject(e),t}function d(t){return new Promise(function(e,n){switch(t){case"push":e(l());break;case"location":e(a());break;case"record":e(r());break;case"camera":e(s());break;case"album":e(o());break;case"contact":e(u());break;case"calendar":e(c());break;case"memo":e(p());break;default:e(0);break}})}function v(t){return new Promise(function(e,n){plus.android.requestPermissions([t],function(t){for(var n=0,i=0;i<t.granted.length;i++){var o=t.granted[i];console.log("已获取的权限："+o),n=1}for(i=0;i<t.deniedPresent.length;i++){var s=t.deniedPresent[i];console.log("拒绝本次申请的权限："+s),n=0}for(i=0;i<t.deniedAlways.length;i++){var a=t.deniedAlways[i];console.log("永久拒绝申请的权限："+a),n=-1}e(n)},function(t){e({code:t.code,message:t.message})})})}function f(){if(i){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),n=plus.ios.import("NSURL"),o=n.URLWithString("app-settings:");e.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(n),plus.ios.deleteObject(e)}else{var s=plus.android.importClass("android.content.Intent"),a=plus.android.importClass("android.provider.Settings"),l=plus.android.importClass("android.net.Uri"),u=plus.android.runtimeMainActivity(),r=new s;r.setAction(a.ACTION_APPLICATION_DETAILS_SETTINGS);var c=l.fromParts("package",u.getPackageName(),null);r.setData(c),u.startActivity(r)}}function h(){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),n=plus.ios.import("NSURL"),i=n.URLWithString("App-prefs:root=General");e.openURL(i),plus.ios.deleteObject(i),plus.ios.deleteObject(n),plus.ios.deleteObject(e)}t.exports={isIOS:i,requestIOS:d,requestAndroid:v,gotoAppSetting:f,gotoiOSSetting:h}},d908:function(t,e,n){"use strict";n.r(e);var i=n("b228"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},f390:function(t,e,n){"use strict";n.r(e);var i=n("3b0f"),o=n("d908");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=n("2877"),l=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"5dc8a45a",null);e["default"]=l.exports}}]);