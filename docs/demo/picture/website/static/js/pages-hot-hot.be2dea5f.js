(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hot-hot"],{"0c15":function(t,e,i){"use strict";i.r(e);var n=i("b404"),s=i("f23d");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"9a52c8de",null);e["default"]=o.exports},"71ab":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=0,s={data:function(){return{refreshing:!1,lists:[],fetchPageNum:1}},onLoad:function(){var t=this;this.getData(),uni.getProvider({service:"share",success:function(e){for(var i=[],n=0;n<e.provider.length;n++)switch(e.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(t){console.log("获取登录通道失败",t)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){this.getData()},methods:{getData:function(){var t=this;uni.request({url:this.$serverUrl+"/api/picture/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=10",success:function(e){if(200!==e.statusCode)console.log("请求失败:",e);else{if(t.refreshing&&e.data[0].id===t.lists[0].data[0].id)return uni.showToast({title:"已经最新",icon:"none"}),t.refreshing=!1,void uni.stopPullDownRefresh();for(var i={id:"",data:[]},s=[],a=e.data,r=0,o=a.length;r<o;r++){Math.floor(r/2);i.id="list"+n,a[r].keys=n++,i.data.push(a[r]),r%2==1&&(s.push(i),i={id:"",data:[]})}console.log("得到lists",s),t.refreshing?(t.refreshing=!1,uni.stopPullDownRefresh(),t.lists=s,t.fetchPageNum=2):(t.lists=t.lists.concat(s),t.fetchPageNum+=1)}}})},goDetail:function(t){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(t))})},share:function(t){var e=this;if(0!==this.providerList.length){var i=this.providerList.map(function(t){return t.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:e.providerList[i.tapIndex].id,scene:e.providerList[i.tapIndex].type&&"WXSenceTimeline"===e.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};e.default=s},b404:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[t._l(t.lists,function(e){return[i("v-uni-view",{key:e.id+"_0",staticClass:"row"},t._l(e.data,function(e){return i("v-uni-view",{key:e.keys,staticClass:"card card-list2",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-image",{staticClass:"card-img card-list2-img",attrs:{src:e.img_src}}),i("v-uni-text",{staticClass:"card-num-view card-list2-num-view"},[t._v(t._s(e.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.share(e)}}})],1)],1)}),1)]}),i("v-uni-text",{staticClass:"loadMore"},[t._v("加载中...")])],2)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},f23d:function(t,e,i){"use strict";i.r(e);var n=i("71ab"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}}]);