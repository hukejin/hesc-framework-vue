(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c607ed34"],{"2bed":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-menu"},[n("van-icon",{style:e.indent,attrs:{name:e.showChildren?"close":"add-o"}}),n("div",{staticClass:"label",style:e.indent,on:{click:e.toggleChildren}},[e._v(e._s(e.label))]),e.showChildren?n("div",e._l(e.contactBookList,(function(t,i){return n("van-cell",{key:i,style:e.indent_index(i),attrs:{title:t.name,value:t.phone,icon:"user-o"},on:{click:function(n){return e.click(t)}}})})),1):e._e(),e.showChildren?n("div",e._l(e.nodelist,(function(t){return n("tree",{key:t.id,attrs:{nodes:void 0===t.children?[]:t.children,label:t.name,depth:e.depth+1,nodeId:t.id,contactBookList:void 0===t.contactBookList?[]:t.contactBookList},on:{key_click:e.showkey,contact_click:e.showcontact}})})),1):e._e()],1)},o=[],c=(n("a9e3"),{name:"tree",data:function(){return{showChildren:!1,show:!1,checkitem:{},nodelist:this.nodes,elementNodeId:this.nodeId}},mounted:function(){this.showChildren=this.showIcon()},computed:{indent:function(){return{transform:"translate(".concat(20*this.depth,"px)")}}},watch:{},components:{tree:s},methods:{toggleChildren:function(){this.showIcon()?this.$emit("key_click",this.elementNodeId):this.showChildren=!this.showChildren},click:function(e){this.show=!0,this.checkitem=e,this.$emit("contact_click",e)},showIcon:function(){return(void 0===this.nodelist||0===this.nodelist.length)&&(void 0===this.contactBookList||0===this.contactBookList.length)},indent_index:function(e){return{transform:"translate(".concat(10*this.depth,"px)"),background:"".concat(e%2===0?"#F5F5DC":"#FFF","!important")}},showkey:function(e){this.$emit("key_click",e)},showcontact:function(e){this.$emit("contact_click",e)}},props:{label:{type:String,required:!0},nodeId:{type:String},nodes:{type:Array,required:!0},depth:{type:Number,required:!0},contactBookList:{type:Array}}}),r=c,a=(n("8dd1"),n("2877")),d=Object(a["a"])(r,i,o,!1,null,"d41fb8fe",null),s=t["a"]=d.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),o=n("5899"),c="["+o+"]",r=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),d=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(r,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,n){var i=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var c,r;return o&&"function"==typeof(c=t.constructor)&&c!==n&&i(r=c.prototype)&&r!==n.prototype&&o(e,r),e}},"8dd1":function(e,t,n){"use strict";var i=n("e6f9"),o=n.n(i);o.a},"9d85":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"treemodule"},[n("div",[e._v("演示基本树形组件")]),n("tree",{key:e.node.id,attrs:{nodes:e.node.children,label:e.node.name,depth:0,nodeId:e.node.id},on:{key_click:e.showkey}})],1)},o=[],c=n("2bed"),r={name:"treemodule",data:function(){return{node:{}}},mounted:function(){},computed:{},watch:{},components:{tree:c["a"]},created:function(){this.node={id:"1",name:"杭州市",contactBookList:[],children:[{id:"10",name:"西湖区",children:[{id:"100",name:"三墩镇"},{id:"101",name:"留下镇"}]},{id:"11",name:"拱墅区",children:[{id:"110",name:"龙游镇"},{id:"111",name:"侠客镇"}]},{id:"12",name:"余杭区",children:[{id:"120",name:"良渚镇"},{id:"121",name:"余杭镇"},{id:"122",name:"临安镇"}]},{id:"13",name:"江干区",children:[{id:"130",name:"半山镇"},{id:"131",name:"临平"},{id:"132",name:"下沙镇"}]}]}},methods:{showkey:function(e){console.log("treemodule-key",e)}}},a=r,d=n("2877"),s=Object(d["a"])(a,i,o,!1,null,"f36c7ff6",null);t["default"]=s.exports},a9e3:function(e,t,n){"use strict";var i=n("83ab"),o=n("da84"),c=n("94ca"),r=n("6eeb"),a=n("5135"),d=n("c6b6"),s=n("7156"),l=n("c04e"),u=n("d039"),h=n("7c73"),f=n("241c").f,m=n("06cf").f,p=n("9bf2").f,k=n("58a8").trim,v="Number",w=o[v],y=w.prototype,I=d(h(y))==v,_=function(e){var t,n,i,o,c,r,a,d,s=l(e,!1);if("string"==typeof s&&s.length>2)if(s=k(s),t=s.charCodeAt(0),43===t||45===t){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+s}for(c=s.slice(2),r=c.length,a=0;a<r;a++)if(d=c.charCodeAt(a),d<48||d>o)return NaN;return parseInt(c,i)}return+s};if(c(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var b,N=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof N&&(I?u((function(){y.valueOf.call(n)})):d(n)!=v)?s(new w(_(t)),n,N):_(t)},g=i?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;g.length>C;C++)a(w,b=g[C])&&!a(N,b)&&p(N,b,m(w,b));N.prototype=y,y.constructor=N,r(o,v,N)}},e6f9:function(e,t,n){}}]);
//# sourceMappingURL=chunk-c607ed34.9465bb73.js.map