goog.provide('bilbo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
var module$node_modules$markdown_it$index=shadow.js.require("module$node_modules$markdown_it$index", {});
bilbo.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Goodbye world!",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008),"Sun 31/05/20",new cljs.core.Keyword(null,"text","text",-1790561697),"This is note 1"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008),"Sat 30/05/20",new cljs.core.Keyword(null,"text","text",-1790561697),"This is note 2"], null)], null)], null));
bilbo.core.note_component = (function bilbo$core$note_component(p__34188){
var map__34189 = p__34188;
var map__34189__$1 = (((((!((map__34189 == null))))?(((((map__34189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34189):map__34189);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34189__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var creation_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34189__$1,new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008));
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(text);
var md = (new module$node_modules$markdown_it$index());
return (function (){
var row_count = cljs.core.count(cljs.core.re_seq(/\n/,cljs.core.deref(val)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow p-3 mb-5 bg-white rounded"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),creation_ts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"rows","rows",850049680),(((row_count < (5)))?(5):row_count),new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34187_SHARP_){
return cljs.core.reset_BANG_(val,p1__34187_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),md.render(cljs.core.deref(val))], null)], null)], null)], null);
});
});
bilbo.core.container = (function bilbo$core$container(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bilbo.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Edit this and see it change!"], null),(function (){var iter__4529__auto__ = (function bilbo$core$container_$_iter__34191(s__34192){
return (new cljs.core.LazySeq(null,(function (){
var s__34192__$1 = s__34192;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34192__$1);
if(temp__5735__auto__){
var s__34192__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34192__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34192__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34194 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34193 = (0);
while(true){
if((i__34193 < size__4528__auto__)){
var note = cljs.core._nth(c__4527__auto__,i__34193);
cljs.core.chunk_append(b__34194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.note_component,note], null));

var G__34196 = (i__34193 + (1));
i__34193 = G__34196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34194),bilbo$core$container_$_iter__34191(cljs.core.chunk_rest(s__34192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34194),null);
}
} else {
var note = cljs.core.first(s__34192__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.note_component,note], null),bilbo$core$container_$_iter__34191(cljs.core.rest(s__34192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var fexpr__34195 = cljs.core.deref(bilbo.core.app_state);
return (fexpr__34195.cljs$core$IFn$_invoke$arity$1 ? fexpr__34195.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notes","notes",-1039600523)) : fexpr__34195.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523)));
})());
})()], null);
});
bilbo.core.start = (function bilbo$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.container], null),document.getElementById("app"));
});
bilbo.core.init = (function bilbo$core$init(){
return bilbo.core.start();
});
goog.exportSymbol('bilbo.core.init', bilbo.core.init);
bilbo.core.stop = (function bilbo$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=bilbo.core.js.map
