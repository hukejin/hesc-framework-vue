(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1099a605"],{"0625":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactbooks"},[n("div",[t._v("树形组件--\x3e通讯录应用")]),n("tree",{attrs:{nodes:t.node.children,label:t.node.name,depth:0},on:{contact_click:t.showcontact}})],1)},i=[],c=n("2bed"),a={name:"contactbooks",data:function(){return{msg:"hello"}},mounted:function(){},computed:{},watch:{},components:{tree:c["a"]},created:function(){this.node={id:"1",name:"杭州市",contactBookList:[],children:[{id:"10",name:"西湖区",children:[{id:"100",name:"三墩镇"},{id:"101",name:"留下镇"}],contactBookList:[{name:"张宝",phone:"123456"},{name:"张角",phone:"654987"},{name:"张飞",phone:"9998888"}]},{id:"11",name:"拱墅区",children:[{id:"110",name:"龙游镇",contactBookList:[{name:"李宝",phone:"444"},{name:"李角",phone:"555"},{name:"李飞",phone:"77"}]},{id:"111",name:"侠客镇"}]},{id:"12",name:"余杭区",children:[{id:"120",name:"良渚镇"},{id:"121",name:"余杭镇",contactBookList:[{name:"余杭李宝",phone:"463565"},{name:"余杭李角",phone:"u6u56i7"},{name:"余杭李飞",phone:"23t34y5u"}]},{id:"122",name:"临安镇"}]},{id:"13",name:"江干区",children:[{id:"130",name:"半山镇"},{id:"131",name:"临平"},{id:"132",name:"下沙镇"}]}]}},methods:{showcontact:function(t){console.log("contactbooks",JSON.stringify(t))}}},r=a,s=n("2877"),d=Object(s["a"])(r,o,i,!1,null,"5a6a3351",null);e["default"]=d.exports},"2bed":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tree-menu"},[n("van-icon",{style:t.indent,attrs:{name:t.showChildren?"close":"add-o"}}),n("div",{staticClass:"label",style:t.indent,on:{click:t.toggleChildren}},[t._v(t._s(t.label))]),t.showChildren?n("div",t._l(t.contactBookList,(function(e,o){return n("van-cell",{key:o,style:t.indent_index(o),attrs:{title:e.name,value:e.phone,icon:"user-o"},on:{click:function(n){return t.click(e)}}})})),1):t._e(),t.showChildren?n("div",t._l(t.nodelist,(function(e){return n("tree",{key:e.id,attrs:{nodes:void 0===e.children?[]:e.children,label:e.name,depth:t.depth+1,nodeId:e.id,contactBookList:void 0===e.contactBookList?[]:e.contactBookList},on:{key_click:t.showkey,contact_click:t.showcontact}})})),1):t._e()],1)},i=[],c=(n("a9e3"),{name:"tree",data:function(){return{showChildren:!1,show:!1,checkitem:{},nodelist:this.nodes,elementNodeId:this.nodeId}},mounted:function(){this.showChildren=this.showIcon()},computed:{indent:function(){return{transform:"translate(".concat(20*this.depth,"px)")}}},watch:{},components:{tree:d},methods:{toggleChildren:function(){this.showIcon()?this.$emit("key_click",this.elementNodeId):this.showChildren=!this.showChildren},click:function(t){this.show=!0,this.checkitem=t,this.$emit("contact_click",t)},showIcon:function(){return(void 0===this.nodelist||0===this.nodelist.length)&&(void 0===this.contactBookList||0===this.contactBookList.length)},indent_index:function(t){return{transform:"translate(".concat(10*this.depth,"px)"),background:"".concat(t%2===0?"#F5F5DC":"#FFF","!important")}},showkey:function(t){this.$emit("key_click",t)},showcontact:function(t){this.$emit("contact_click",t)}},props:{label:{type:String,required:!0},nodeId:{type:String},nodes:{type:Array,required:!0},depth:{type:Number,required:!0},contactBookList:{type:Array}}}),a=c,r=(n("8dd1"),n("2877")),s=Object(r["a"])(a,o,i,!1,null,"d41fb8fe",null),d=e["a"]=s.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),i=n("5899"),c="["+i+"]",a=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),s=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var o=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var c,a;return i&&"function"==typeof(c=e.constructor)&&c!==n&&o(a=c.prototype)&&a!==n.prototype&&i(t,a),t}},"8dd1":function(t,e,n){"use strict";var o=n("e6f9"),i=n.n(o);i.a},a9e3:function(t,e,n){"use strict";var o=n("83ab"),i=n("da84"),c=n("94ca"),a=n("6eeb"),r=n("5135"),s=n("c6b6"),d=n("7156"),h=n("c04e"),l=n("d039"),u=n("7c73"),f=n("241c").f,p=n("06cf").f,m=n("9bf2").f,k=n("58a8").trim,v="Number",w=i[v],_=w.prototype,b=s(u(_))==v,I=function(t){var e,n,o,i,c,a,r,s,d=h(t,!1);if("string"==typeof d&&d.length>2)if(d=k(d),e=d.charCodeAt(0),43===e||45===e){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+d}for(c=d.slice(2),a=c.length,r=0;r<a;r++)if(s=c.charCodeAt(r),s<48||s>i)return NaN;return parseInt(c,o)}return+d};if(c(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var y,g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(b?l((function(){_.valueOf.call(n)})):s(n)!=v)?d(new w(I(e)),n,g):I(e)},N=o?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;N.length>C;C++)r(w,y=N[C])&&!r(g,y)&&m(g,y,p(w,y));g.prototype=_,_.constructor=g,a(i,v,g)}},e6f9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1099a605.e69d58b2.js.map