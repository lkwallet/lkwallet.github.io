(function(e){function t(t){for(var n,s,l=t[0],i=t[1],u=t[2],c=0,p=[];c<l.length;c++)s=l[c],o[s]&&p.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e379e87e"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e),a=function(t){i.onerror=i.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.$route.path,mode:"horizontal",router:!0}},[r("el-menu-item",[e._v("LK WALLET")]),r("el-menu-item",{attrs:{index:"/"}},[e._v("打开钱包")]),r("el-menu-item",{attrs:{index:"/send"}},[e._v("转帐")]),r("el-menu-item",{attrs:{index:"/search"}},[e._v("区块查询")])],1)],1)],1),r("div",{staticClass:"line"}),r("router-view")],1)},a=[],s={name:"app",data:function(){return{}}},l=s,i=(r("034f"),r("2877")),u=Object(i["a"])(l,o,a,!1,null,null,null),c=u.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-alert",{attrs:{type:"warning",closable:!1,"show-ico":"",center:""}},[r("h1",{attrs:{slot:"title"},slot:"title"},[e._v("重要提醒")]),r("h3",[e._v("本工具为可在浏览器运行的客户端界面，类似于以太坊的MyEtherWallet,并不会将你的钱包发送至服务器,钱包安全由您自行负责！")]),r("h3",[e._v("特别感谢币合区块链提供的链克节点："),r("a",{attrs:{href:"http://www.bihe.one"}},[e._v("www.bihe.one")])]),r("h3",[e._v("如果你觉得本工具好用，可以赞助几个鸡蛋，赞助钱包：0x47631e4465f753e3931ae2c6945c6a6bd35ed710")])])],1),r("el-col",{staticClass:"line",attrs:{span:24,offset:9}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.openDialogVisible=!0}}},[e._v("打开包钱")]),e._v("or\n    "),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.showCreateDialog()}}},[e._v("创建钱包")])],1),r("el-dialog",{attrs:{title:"打开包钱",visible:e.openDialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.openDialogVisible=t}}},[r("el-form",{attrs:{model:e.openForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"钱包文件"}},[r("el-upload",{attrs:{"auto-upload":!1,multiple:!1,"show-file-list":!1,action:"","on-change":e.selectFile},model:{value:e.openForm.file,callback:function(t){e.$set(e.openForm,"file",t)},expression:"openForm.file"}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"default"},slot:"trigger"},[e._v("选取文件")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.openForm.file_name))])],1)],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.openForm.password,callback:function(t){e.$set(e.openForm,"password",t)},expression:"openForm.password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.openDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.openButtonLoading},on:{click:e.openWallet}},[e._v("打开")])],1)],1),r("el-dialog",{attrs:{title:"创建钱包",visible:e.createDialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.createDialogVisible=t}}},[r("el-form",{ref:"createForm",attrs:{model:e.createForm,rules:e.createFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.createForm.password,callback:function(t){e.$set(e.createForm,"password",t)},expression:"createForm.password"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"confirm_password"}},[r("el-input",{attrs:{"show-password":""},model:{value:e.createForm.confirm_password,callback:function(t){e.$set(e.createForm,"confirm_password",t)},expression:"createForm.confirm_password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.createDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.createButtonLoading},on:{click:function(t){return e.createWallet()}}},[e._v("创建")])],1)],1)],1)},f=[],m=(r("96cf"),r("3b8d")),h=(r("7f7f"),r("decd")),v=r.n(h),b={name:"home",data:function(){var e=this,t=function(t,r,n){r!==e.createForm.password?n(new Error("两次输入密码不一致!")):n()};return{openForm:{file:"",file_name:"",password:""},createForm:{password:"",confirm_password:""},createFormRules:{password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirm_password:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:t,trigger:"blur"}]},openDialogVisible:!1,createDialogVisible:!1,walletJson:"",openButtonLoading:!1,createButtonLoading:!1}},methods:{selectFile:function(e){var t=this;this.openForm.file_name=e.name;var r=new FileReader;r.onload=function(e){t.walletJson=e.target.result},r.readAsText(e.raw)},openWallet:function(){var e=this;e.openButtonLoading=!0,function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.walletJson.length>0)){e.next=13;break}return e.prev=1,e.next=4,v.a.fromV3(t.walletJson,t.openForm.password);case 4:t.$root.wallet=e.sent,t.$router.push("/send"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),"SyntaxError"==e.t0.name?t.$helper.warning("该文件不是一个正确的钱包文件"):"Error"==e.t0.name?t.$helper.warning("密码错误"):(console.log(e.t0.name),console.log(e.t0.message),t.$helper.warning(e.t0.message));case 11:e.next=14;break;case 13:t.$helper.warning("请选择钱包文件");case 14:t.openButtonLoading=!1;case 15:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()(e)},showCreateDialog:function(){this.createDialogVisible=!0,this.$nextTick(function(){this.$refs.createForm.resetFields()})},createWallet:function(){var e=this;this.$refs.createForm.validate(function(t){if(!t)return!1;e.$wallet=v.a.generate();var r=e.$wallet.toV3String(e.createForm.password);e.$helper.exportFile(r,e.$wallet.getV3Filename())})}}},g=b,w=Object(i["a"])(g,p,f,!1,null,null,null),_=w.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form",{ref:"sendForm",attrs:{model:e.sendForm,rules:e.sendFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"钱包地址"}},[e._v(e._s(e.sendForm.from))]),r("el-form-item",{attrs:{label:"钱包余额"}},[e._v("\n        "+e._s(e.sendForm.balance)+"\n        ")]),r("el-form-item",{attrs:{label:"接收地址",prop:"to"}},[r("el-input",{model:{value:e.sendForm.to,callback:function(t){e.$set(e.sendForm,"to",t)},expression:"sendForm.to"}})],1),r("el-form-item",{attrs:{label:"转帐金额",prop:"value"}},[r("el-input",{model:{value:e.sendForm.value,callback:function(t){e.$set(e.sendForm,"value",t)},expression:"sendForm.value"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v("立即转帐")])],1)],1)],1),r("el-col",{attrs:{span:24}},[e.err?r("el-alert",{attrs:{title:"出错拉",type:"error",closable:!1}},[r("p",[e._v(e._s(e.err))])]):e._e(),e.hash?r("el-alert",{attrs:{title:"发送成功",type:"success",closable:!1}},[r("p",[e._v("\n        发送成功，稍候可查询HASH:\n        "),r("a",{attrs:{href:"https://explorer.lianxiangcloud.com/#/trade/detail/"+e.hash,target:"_blank"}},[e._v(e._s(e.hash))])])]):e._e()],1)],1)},$=[],x=(r("6b54"),r("dbd9")),y=r.n(x),k={created:function(){var e=this;null!==this.$root.wallet?(this.sendForm.from=this.$root.wallet.getAddressString(),this.$root.web3.eth.getBalance(this.sendForm.from,function(t,r){t?e.$helper.warning(t):e.sendForm.balance=e.$root.web3.utils.fromWei(r)})):this.$router.push("/")},data:function(){return{sendForm:{from:"",balance:0,to:"",value:""},sendFormRules:{to:[{required:!0,message:"请输入接收地址",trigger:"blur"},{validator:this.$helper.validateAddress,trigger:"blur"}],value:[{required:!0,message:"请输入转帐金额",trigger:"blur"},{validator:this.$helper.validateFloat,trigger:"blur"}]},hash:null,err:null}},methods:{send:function(){var e=this,t=this;this.$refs.sendForm.validate(function(r){if(!r)return!1;t.err=null,t.hash=null;var n=e.sendForm.from+"nonce",o=e.$store.get(n)||0,a={from:e.sendForm.from,to:e.sendForm.to,gasLimit:e.$root.web3.utils.toHex("100000"),value:e.$root.web3.utils.toHex(e.$root.web3.utils.toWei(e.sendForm.value)),gasPrice:"0x174876e800",nonce:e.$root.web3.utils.toHex(o)},s=new y.a(a);s.sign(e.$root.wallet.getPrivateKey());var l=s.serialize(),i="0x"+l.toString("hex");e.$root.web3.eth.sendSignedTransaction(i,function(e,r){e?e.message.indexOf("nonce too low")>0?(o++,t.err="网络连接失败，请重试"):e.message.indexOf("nonce too high")>0?(o--,t.err="网络连接失败，请重试"):t.err=e:t.hash=r,t.$store.set(n,o)})})}}},O=k,j=Object(i["a"])(O,F,$,!1,null,null,null),E=j.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}})],1)},A=[],D={created:function(){var e=this;console.log(e.$route.params.hash)},data:function(){return{}},methods:{}},S=D,L=Object(i["a"])(S,V,A,!1,null,null,null),T=L.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("p",[e._v("钱包地址："+e._s(e.address))]),r("p",[e._v("钱包余额："+e._s(e.balance))])]),r("el-col",{attrs:{span:24}})],1)},C=[],W={created:function(){var e=this;e.address=e.$route.params.address,e.$helper.isAddress(e.address)||e.$router.push("/search"),e.$root.web3.eth.getBalance(e.address,function(t,r){t?e.$helper.warning(t):e.balance=e.$root.web3.utils.fromWei(r)})},data:function(){return{address:"",balance:0}},methods:{}},B=W,R=Object(i["a"])(B,P,C,!1,null,null,null),J=R.exports;n["default"].use(d["a"]);var q=new d["a"]({routes:[{path:"/",name:"home",component:_},{path:"/send",name:"send",component:E},{path:"/search",name:"search",component:function(){return r.e("about").then(r.bind(null,"2d3b"))}},{path:"/transaction/:hash",name:"transaction",component:T},{path:"/address/:address",name:"address",component:J}]}),H=q,M=r("e573"),N=r.n(M),z=r("5c96"),K=r.n(z),I=(r("0fae"),r("d780")),G=r.n(I),Q=r("21a6"),U=r.n(Q),X={warning:function(e){n["default"].prototype.$notify({title:"警告",message:e,type:"warning"})},exportFile:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var r=new G.a([e]);U.a.saveAs(r,t)},validateAddress:function(e,t,r){X.isAddress(t)?r():r(new Error("请输入正确的地址"))},validateSearchKeyword:function(e,t,r){X.isAddress(t)||X.isTransaction(t)?r():r(new Error("请输入正确的钱包地址或者交易hash"))},isAddress:function(e){if(42!==e.length)return!1;if(e.indexOf("0x")<0)return!1;var t=parseInt(e);return!isNaN(t)},isTransaction:function(e){if(e.indexOf("0x")<0)return!1;var t=parseInt(e);return!isNaN(t)},validateFloat:function(e,t,r){X.isFloat(t)?r():r(new Error("请输入正确的数字"))},isFloat:function(e){return parseFloat(e)>0}},Y=r("bc3a"),Z=r.n(Y),ee=r("8ded"),te=r.n(ee);n["default"].config.productionTip=!1,n["default"].use(K.a),n["default"].prototype.$helper=X,n["default"].prototype.$http=Z.a,n["default"].prototype.$store=te.a,new n["default"]({router:H,data:function(){return{wallet:null,web3:new N.a("https://linktoken.bihe.wrbug.cn")}},render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.4c339b92.js.map