"use strict";(self["webpackChunkcv"]=self["webpackChunkcv"]||[]).push([[420],{4420:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var r=s(3396),i=s(7139);const n={class:"typewriter-text"},_={class:"typewriter-cursor",ref:"cursor"};function T(t,e,s,T,l,h){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",n,(0,i.zw)(l.text),1),(0,r._)("div",_,null,512)],64)}var l={data(){return{_PART:0,_PART_INDEX:0,_INTERVAL_VAL:null,_CONTENT:["Programmer","Back-end Developer","Front-end Developer","Freelancer"],text:""}},mounted(){this._INTERVAL_VAL=setInterval(this.TypeInit,100)},methods:{TypeInit(){var t=this,e=this._CONTENT[this._PART].substring(0,this._PART_INDEX+1);this.text=e,this._PART_INDEX++,e===this._CONTENT[this._PART]&&(this.$refs.cursor.style.display="none",clearInterval(this._INTERVAL_VAL),setTimeout((function(){t._INTERVAL_VAL=setInterval(t.TypeDelete,50)}),1e3))},TypeDelete(){var t=this,e=this._CONTENT[this._PART].substring(0,this._PART_INDEX-1);this.text=e,this._PART_INDEX--,""===e&&(clearInterval(this._INTERVAL_VAL),this._PART==this._CONTENT.length-1?this._PART=0:this._PART++,this._PART_INDEX=0,setTimeout((function(){t.$refs.cursor.style.display="inline-block",t._INTERVAL_VAL=setInterval(t.TypeInit,100)}),200))}}},h=s(89);const u=(0,h.Z)(l,[["render",T]]);var A=u}}]);
//# sourceMappingURL=420.2ece3294.js.map