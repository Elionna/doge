(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["history"],{"65b8":function(e,t,a){},e4bb:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"history"},[a("b-alert",{attrs:{show:""}},[a("b-container",[a("b-row",[a("b-col",{staticClass:"last-check",attrs:{md:""}},[a("span",{staticClass:"last-check-label clickable",class:e.showFiles?"bold":"",on:{click:function(t){e.showFiles=!e.showFiles}}},[e._v("\n            Files Scanned Last:\n          ")]),a("i",[e._v(e._s(e._f("formatDateTime")(e.lastFileScan)))]),a("span",{staticClass:"clickable",on:{click:function(t){e.deleteHistory({type:"files"})}}},[a("delete-icon",{attrs:{title:"Delete all but latest entry"}})],1)]),a("b-col",{staticClass:"last-check",attrs:{md:""}},[a("span",{staticClass:"last-check-label clickable",class:e.showDB?"bold":"",on:{click:function(t){e.showDB=!e.showDB}}},[e._v("\n            DB Refreshed Last:\n          ")]),a("i",[e._v(e._s(e._f("formatDateTime")(e.lastUpdateDB)))]),a("span",{staticClass:"clickable",on:{click:function(t){e.deleteHistory({type:"db"})}}},[a("delete-icon",{attrs:{title:"Delete all but latest entry"}})],1)])],1)],1)],1),e._l(e.historyFiltered,function(t){return a("b-card",{key:t.datetime,staticStyle:{margin:"10px"},attrs:{"sub-title":e._f("formatDateTime")(t.datetime),title:"files"===t.type?"Files Found":"db"===t.type?"DBs Updated":""}},[a("div",[a("ul",{staticStyle:{"text-align":"left"}},e._l(t.games,function(t){return a("li",{staticClass:"clickable",attrs:{title:t.id}},[a("GameModalLink",{attrs:{"game-id":t.id}},[e._v("\n            "+e._s(t.name||t.fileNameTitle||t.id)+"\n            "),t.wasNew?a("b-badge",{attrs:{variant:"success"}},[e._v("New")]):e._e(),t.wasUnlocked?a("b-badge",{attrs:{variant:"dark"}},[e._v("Unlocked")]):e._e(),t.wasKeyFound?a("b-badge",{attrs:{variant:"dark"}},[e._v("Key")]):e._e(),t.wasKeyChanged?a("b-badge",{attrs:{variant:"warning"}},[e._v("Key Changed")]):e._e(),t.wasKeyRemoved?a("b-badge",{attrs:{variant:"warning"}},[e._v("Key Removed")]):e._e(),t.wasUpdated?a("b-badge",{attrs:{variant:"primary",title:t.wasUpdated}},[e._v("Updated v"+e._s(e._f("humanizeVer")(t.wasUpdated)))]):e._e(),a("ul",e._l(t.dlcs,function(t){return a("li",{attrs:{title:t.id}},[e._v("\n                "+e._s(t.name||t.fileNameTitle||t.id)+"\n                "),t.wasNew?a("b-badge",{attrs:{variant:"success"}},[e._v("New")]):e._e(),t.wasUnlocked?a("b-badge",{attrs:{variant:"dark"}},[e._v("Unlocked")]):e._e(),t.wasKeyFound?a("b-badge",{attrs:{variant:"dark"}},[e._v("Key")]):e._e(),t.wasKeyChanged?a("b-badge",{attrs:{variant:"warning"}},[e._v("Key Changed")]):e._e(),t.wasKeyRemoved?a("b-badge",{attrs:{variant:"warning"}},[e._v("Key Removed")]):e._e(),t.wasUpdated?a("b-badge",{attrs:{variant:"primary",title:t.wasUpdated}},[e._v("Updated v"+e._s(e._f("humanizeVer")(t.wasUpdated)))]):e._e()],1)}))],1)],1)}))])])})],2)},i=[],l=a("c93e"),n=(a("cadf"),a("551c"),a("097d"),a("2f62")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"material-design-icon delete-icon",attrs:{"aria-hidden":e.decorative,"aria-label":e.title,role:"img"}},[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:"24",height:"24",viewBox:"0 0 24 24"}},[a("title",[e._v(e._s(e.title))]),a("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z"}})])])},c=[],d={name:"DeleteIcon",props:{title:{type:String,default:"Delete icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"}}},o=d,b=a("2877"),v=Object(b["a"])(o,r,c,!1,null,null,null);v.options.__file="Delete.vue";var u=v.exports,h=a("d100"),f={name:"history",components:{GameModalLink:h["a"],DeleteIcon:u},data:function(){return{showDB:!0,showFiles:!0}},created:function(){this.$store.dispatch("fetchHistory"),this.$store.dispatch("fetchGamesData")},computed:Object(l["a"])({},Object(n["e"])(["history","lastFileScan","lastUpdateDB"]),{historyFiltered:function(){var e=this.history;return this.showDB||(e=_.reject(e,{type:"db"})),this.showFiles||(e=_.reject(e,{type:"files"})),e}}),methods:Object(l["a"])({},Object(n["b"])(["deleteHistory"]))},p=f,w=(a("e778"),Object(b["a"])(p,s,i,!1,null,"3e5d9001",null));w.options.__file="History.vue";t["default"]=w.exports},e778:function(e,t,a){"use strict";var s=a("65b8"),i=a.n(s);i.a}}]);
//# sourceMappingURL=history.a4ebbe62.js.map