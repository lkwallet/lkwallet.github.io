(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2d3b":function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"查询",prop:"keyword"}},[o("el-input",{attrs:{placeholder:"请输入钱包地址或者交易hash"},model:{value:e.form.keyword,callback:function(r){e.$set(e.form,"keyword",r)},expression:"form.keyword"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1)],1)],1)],1)},l=[],a={data:function(){return{form:{keyword:""},formRules:{keyword:[{required:!0,message:"请输入转帐金额",trigger:"blur"},{validator:this.$helper.validateSearchKeyword,trigger:"blur"}]}}},methods:{search:function(){var e=this;this.$refs.form.validate(function(r){if(!r)return!1;e.$helper.isAddress(e.form.keyword)?window.open("https://explorer.lianxiangcloud.com/#/address/"+e.form.keyword,"_blank"):e.$helper.isTransaction(e.form.keyword)&&window.open("https://explorer.lianxiangcloud.com/#/trade/detail/"+e.form.keyword,"_blank")})}}},n=a,s=o("2877"),i=Object(s["a"])(n,t,l,!1,null,null,null);r["default"]=i.exports}}]);
//# sourceMappingURL=about.e379e87e.js.map