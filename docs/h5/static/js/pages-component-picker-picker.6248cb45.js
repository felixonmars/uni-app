(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-picker-picker"],{"0de4":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("普通选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:t.index,range:t.array,"range-key":"name"},on:{change:function(i){i=t.$handleEvent(i),t.bindPickerChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("多列选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray},on:{columnchange:function(i){i=t.$handleEvent(i),t.bindMultiPickerColumnChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("时间选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01"},on:{change:function(i){i=t.$handleEvent(i),t.bindTimeChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.time))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("日期选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(i){i=t.$handleEvent(i),t.bindDateChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1)],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"0fce":function(t,i,e){"use strict";e.r(i);var n=e("0de4"),a=e("9d94");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);var l=e("2877"),u=Object(l["a"])(a["default"],n["a"],n["b"],!1,null,"192c2980",null);i["default"]=u.exports},"9d94":function(t,i,e){"use strict";e.r(i);var n=e("aa34"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},aa34:function(t,i,e){"use strict";function n(t){var i=new Date,e=i.getFullYear(),n=i.getMonth()+1,a=i.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(e,"-").concat(n,"-").concat(a)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:n({format:!0}),startDate:n("start"),endDate:n("end"),time:"12:01"}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为："+t.target.value),this.index=t.target.value},bindMultiPickerColumnChange:function(t){switch(console.log("修改的列为："+t.detail.column+"，值为："+t.detail.value),this.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value}}};i.default=a}}]);