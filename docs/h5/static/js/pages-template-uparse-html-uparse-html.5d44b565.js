(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-uparse-html-uparse-html"],{"1cb5":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=f(t("3af0"));function f(a){return a&&a.__esModule?a:{default:a}}var n='\n<p>很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 html 为符合 uni-app 规范的富文本界面。下文为示例：</p>\n<p>HBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。</p>\n<p>markdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：</p>\n<h1>标题1</h1>\n<h2>标题2</h2>\n<h3>标题3</h3>\n<h4>标题4</h4>\n<h5>标题5</h5>\n<p>HBuilderX标题编辑技巧：</p>\n<ol>\n<li>Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效</li>\n<li>智能双击：双击#号可选中整个标题段落</li>\n<li>智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#</li>\n<li>回车后再次按Tab可递进一层标题，再按Tab切换列表符</li>\n<li>在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以</li>\n</ol>\n<ul>\n<li>折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）</li>\n<li>折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=</li>\n</ul>\n<p><strong>加粗</strong> 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】</p>\n<p><em>倾斜</em>【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+是在选区两侧添加光标，可以继续输入_】</p>\n<p><del>删除线</del>【前后包围：选中文字按Ctrl+是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】</p>\n<blockquote>\n<p>引用</p>\n</blockquote>\n<p><a href="https://dcloud.io">超链接</a></p>\n<p><img src="https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png" alt="logo"></p>\n<p>=======================</p>\n<pre><code class="language-javascript">    var a = document; //代码</code></pre>\n    ',r={components:{uParse:i.default},data:function(){return{article:n}},methods:{preview:function(a,e){console.log("src: "+a)},navigate:function(a,e){console.log("href: "+a),uni.showModal({content:"点击链接为："+a,showCancel:!1})}}};e.default=r},"26a7":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("uParse",{attrs:{content:a.article},on:{preview:function(e){e=a.$handleEvent(e),a.preview(e)},navigate:function(e){e=a.$handleEvent(e),a.navigate(e)}}})],1)},f=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return f})},"3de3":function(a,e,t){var i=t("99e4");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var f=t("4f06").default;f("77067697",i,!0,{sourceMap:!1,shadowMode:!1})},"43a7":function(a,e,t){"use strict";var i=t("3de3"),f=t.n(i);f.a},5335:function(a,e,t){"use strict";t.r(e);var i=t("26a7"),f=t("977a");for(var n in f)"default"!==n&&function(a){t.d(e,a,function(){return f[a]})}(n);t("43a7");var r=t("2877"),l=Object(r["a"])(f["default"],i["a"],i["b"],!1,null,"b1f0f9c6",null);e["default"]=l.exports},"977a":function(a,e,t){"use strict";t.r(e);var i=t("1cb5"),f=t.n(i);for(var n in i)"default"!==n&&function(a){t.d(e,a,function(){return i[a]})}(n);e["default"]=f.a},"99e4":function(a,e,t){e=a.exports=t("2350")(!1),e.push([a.i,"/**\n * author: Di (微信小程序开发工程师)\n * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)\n *         垂直微信小程序开发交流社区\n *\n * github地址: https://github.com/icindy/wxParse\n *\n * for: 微信小程序富文本解析\n * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184\n */.wxParse[data-v-b1f0f9c6]{width:100%;font-family:Helvetica,sans-serif;font-size:%?30?%;color:#666;line-height:1.8}.wxParse uni-view[data-v-b1f0f9c6]{word-break:hyphenate}.wxParse .inline[data-v-b1f0f9c6]{display:inline;margin:0;padding:0}.wxParse .div[data-v-b1f0f9c6]{margin:0;padding:0}.wxParse .h1 .text[data-v-b1f0f9c6]{font-size:2em;margin:.67em 0}.wxParse .h2 .text[data-v-b1f0f9c6]{font-size:1.5em;margin:.83em 0}.wxParse .h3 .text[data-v-b1f0f9c6]{font-size:1.17em;margin:1em 0}.wxParse .h4 .text[data-v-b1f0f9c6]{margin:1.33em 0}.wxParse .h5 .text[data-v-b1f0f9c6]{font-size:.83em;margin:1.67em 0}.wxParse .h6 .text[data-v-b1f0f9c6]{font-size:.67em;margin:2.33em 0}.wxParse .b[data-v-b1f0f9c6],.wxParse .h1 .text[data-v-b1f0f9c6],.wxParse .h2 .text[data-v-b1f0f9c6],.wxParse .h3 .text[data-v-b1f0f9c6],.wxParse .h4 .text[data-v-b1f0f9c6],.wxParse .h5 .text[data-v-b1f0f9c6],.wxParse .h6 .text[data-v-b1f0f9c6],.wxParse .strong[data-v-b1f0f9c6]{font-weight:bolder}.wxParse .p[data-v-b1f0f9c6]{margin:1em 0}.wxParse .address[data-v-b1f0f9c6],.wxParse .cite[data-v-b1f0f9c6],.wxParse .em[data-v-b1f0f9c6],.wxParse .i[data-v-b1f0f9c6],.wxParse .var[data-v-b1f0f9c6]{font-style:italic}.wxParse .code[data-v-b1f0f9c6],.wxParse .kbd[data-v-b1f0f9c6],.wxParse .pre[data-v-b1f0f9c6],.wxParse .samp[data-v-b1f0f9c6],.wxParse .tt[data-v-b1f0f9c6]{font-family:monospace}.wxParse .pre[data-v-b1f0f9c6]{overflow:auto;background:#f5f5f5;padding:%?16?%;white-space:pre;margin:1em %?0?%}.wxParse .code[data-v-b1f0f9c6]{display:inline;background:#f5f5f5}.wxParse .big[data-v-b1f0f9c6]{font-size:1.17em}.wxParse .small[data-v-b1f0f9c6],.wxParse .sub[data-v-b1f0f9c6],.wxParse .sup[data-v-b1f0f9c6]{font-size:.83em}.wxParse .sub[data-v-b1f0f9c6]{vertical-align:sub}.wxParse .sup[data-v-b1f0f9c6]{vertical-align:super}.wxParse .del[data-v-b1f0f9c6],.wxParse .s[data-v-b1f0f9c6],.wxParse .strike[data-v-b1f0f9c6]{text-decoration:line-through}.wxParse .s[data-v-b1f0f9c6],.wxParse .strong[data-v-b1f0f9c6]{display:inline}.wxParse .a[data-v-b1f0f9c6]{color:#00bfff}.wxParse .video[data-v-b1f0f9c6]{text-align:center;margin:%?22?% 0}.wxParse .video-video[data-v-b1f0f9c6]{width:100%}.wxParse .img[data-v-b1f0f9c6]{display:inline-block;width:0;height:0;max-width:100%;overflow:hidden}.wxParse .blockquote[data-v-b1f0f9c6]{margin:%?10?% 0;padding:%?22?% 0 %?22?% %?22?%;font-family:Courier,Calibri,宋体;background:#f5f5f5;border-left:%?6?% solid #dbdbdb}.wxParse .blockquote .p[data-v-b1f0f9c6]{margin:0}.wxParse .ol[data-v-b1f0f9c6],.wxParse .ul[data-v-b1f0f9c6]{display:block;margin:1em 0;padding-left:%?33?%}.wxParse .ol[data-v-b1f0f9c6]{list-style-type:disc}.wxParse .ol[data-v-b1f0f9c6]{list-style-type:decimal}.wxParse .ol>weixin-parse-template[data-v-b1f0f9c6],.wxParse .ul>weixin-parse-template[data-v-b1f0f9c6]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol>.li[data-v-b1f0f9c6],.wxParse .ul>.li[data-v-b1f0f9c6]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol .ul[data-v-b1f0f9c6],.wxParse .ul .ul[data-v-b1f0f9c6]{list-style-type:circle}.wxParse .ol .ol .ul[data-v-b1f0f9c6],.wxParse .ol .ul .ul[data-v-b1f0f9c6],.wxParse .ul .ol .ul[data-v-b1f0f9c6],.wxParse .ul .ul .ul[data-v-b1f0f9c6]{list-style-type:square}.wxParse .u[data-v-b1f0f9c6]{text-decoration:underline}.wxParse .hide[data-v-b1f0f9c6]{display:none}.wxParse .del[data-v-b1f0f9c6]{display:inline}.wxParse .figure[data-v-b1f0f9c6]{overflow:hidden}.wxParse .table[data-v-b1f0f9c6]{width:100%}.wxParse .tfoot[data-v-b1f0f9c6],.wxParse .thead[data-v-b1f0f9c6],.wxParse .tr[data-v-b1f0f9c6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.wxParse .tr[data-v-b1f0f9c6]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-right:%?2?% solid #e0e0e0;border-bottom:%?2?% solid #e0e0e0}.wxParse .td[data-v-b1f0f9c6],.wxParse .th[data-v-b1f0f9c6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?1276?%;overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:%?11?%;border-left:%?2?% solid #e0e0e0}.wxParse .td[data-v-b1f0f9c6]:last{border-top:%?2?% solid #e0e0e0}.wxParse .th[data-v-b1f0f9c6]{background:#f0f0f0;border-top:%?2?% solid #e0e0e0}",""])}}]);