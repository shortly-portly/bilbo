goog.provide('bilbo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
bilbo.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Goodbye world!",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008),"Sun 31/05/20",new cljs.core.Keyword(null,"text","text",-1790561697),"This is note 1"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008),"Sat 30/05/20",new cljs.core.Keyword(null,"text","text",-1790561697),"This is note 2"], null)], null)], null));
bilbo.core.note_component = (function bilbo$core$note_component(p__36913){
var map__36914 = p__36913;
var map__36914__$1 = (((((!((map__36914 == null))))?(((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36914):map__36914);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var creation_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"creation-ts","creation-ts",691122008));
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(text);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow p-3 mb-5 bg-white rounded"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),creation_ts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36912_SHARP_){
return cljs.core.reset_BANG_(val,p1__36912_SHARP_.target.value);
})], null)], null)], null)], null);
});
});
bilbo.core.container = (function bilbo$core$container(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bilbo.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Edit this and see it change!"], null),(function (){var iter__4529__auto__ = (function bilbo$core$container_$_iter__36916(s__36917){
return (new cljs.core.LazySeq(null,(function (){
var s__36917__$1 = s__36917;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36917__$1);
if(temp__5735__auto__){
var s__36917__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36917__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36917__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36919 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36918 = (0);
while(true){
if((i__36918 < size__4528__auto__)){
var note = cljs.core._nth(c__4527__auto__,i__36918);
cljs.core.chunk_append(b__36919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.note_component,note], null));

var G__36921 = (i__36918 + (1));
i__36918 = G__36921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36919),bilbo$core$container_$_iter__36916(cljs.core.chunk_rest(s__36917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36919),null);
}
} else {
var note = cljs.core.first(s__36917__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.note_component,note], null),bilbo$core$container_$_iter__36916(cljs.core.rest(s__36917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var fexpr__36920 = cljs.core.deref(bilbo.core.app_state);
return (fexpr__36920.cljs$core$IFn$_invoke$arity$1 ? fexpr__36920.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"notes","notes",-1039600523)) : fexpr__36920.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523)));
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
