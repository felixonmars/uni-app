(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"2cfb":function(t,e,i){"use strict";i.r(e);var n=i("6d7d"),s=i("8664");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"19ea3c09",null);e["default"]=o.exports},"5b80":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{refreshing:!1,loadMoreText:"加载中...",lists:[],id:0,fetchPageNum:0}},onLoad:function(t){var e=this;uni.setNavigationBarTitle({title:"专题："+t.type}),this.id=t.id,setTimeout(function(){e.getData()},300),uni.getProvider({service:"share",success:function(t){for(var i=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}e.providerList=i},fail:function(t){console.log("获取分享通道失败",t)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){console.log("上拉加载刷新"),this.fetchPageNum>4?this.loadMoreText="没有更多了":this.getData()},methods:{getData:function(t){var e=this;uni.request({url:this.$serverUrl+"/api/picture/list.php?type="+this.id,success:function(t){if(200!==t.statusCode)console.log("请求失败",t);else{if(e.refreshing&&t.data.data[0].id===e.lists[0][0].id)return uni.showToast({title:"已经最新",icon:"none"}),e.refreshing=!1,void uni.stopPullDownRefresh();for(var i={id:"",data:[]},n=[],s=t.data.data,a=0,r=s.length;a<r;a++){Math.floor(a/2);i.id="list"+a,i.data.push(s[a]),a%2==1&&(n.push(i),i.data=[])}console.log("list页面得到lists",n),e.refreshing?(e.refreshing=!1,uni.stopPullDownRefresh(),e.lists=n,e.fetchPageNum=2):(e.lists=e.lists.concat(n),e.fetchPageNum+=1),e.fetchPageNum+=1}}})},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?data="+encodeURIComponent(JSON.stringify(t))})},share:function(t){var e=this;if(0!==this.providerList.length){var i=this.providerList.map(function(t){return t.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:e.providerList[i.tapIndex].id,scene:e.providerList[i.tapIndex].type&&"WXSenceTimeline"===e.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};e.default=n},"6d7d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[t._l(t.lists,function(e){return[i("v-uni-view",{key:e.id+"_0",staticClass:"row"},t._l(e.data,function(e){return i("v-uni-view",{key:e.img_src,staticClass:"card card-list2",on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-image",{staticClass:"card-img card-list2-img",attrs:{src:e.img_src}}),i("v-uni-text",{staticClass:"card-num-view card-list2-num-view"},[t._v(t._s(e.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.share(e)}}})],1)],1)}),1)]}),i("v-uni-text",{staticClass:"loadMore"},[t._v(t._s(t.loadMoreText))])],2)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},8664:function(t,e,i){"use strict";i.r(e);var n=i("5b80"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}}]);