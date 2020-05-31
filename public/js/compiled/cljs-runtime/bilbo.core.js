goog.provide('bilbo.core');
goog.require('cljs.core');
goog.require('reagent.core');
bilbo.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Goodbye world!"], null));
bilbo.core.hello_world = (function bilbo$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bilbo.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Edit this and see it change!"], null)], null);
});
bilbo.core.start = (function bilbo$core$start(){
var G__31902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.hello_world], null);
var G__31903 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__31902,G__31903) : reagent.core.render_component.call(null,G__31902,G__31903));
});
bilbo.core.init = (function bilbo$core$init(){
return bilbo.core.start();
});
goog.exportSymbol('bilbo.core.init', bilbo.core.init);
bilbo.core.stop = (function bilbo$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=bilbo.core.js.map
