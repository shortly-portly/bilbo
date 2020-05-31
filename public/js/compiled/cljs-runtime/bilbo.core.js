goog.provide('bilbo.core');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof bilbo !== 'undefined') && (typeof bilbo.core !== 'undefined') && (typeof bilbo.core.app_state !== 'undefined')){
} else {
bilbo.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
bilbo.core.hello_world = (function bilbo$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bilbo.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and really it change!"], null)], null);
});
bilbo.core.start = (function bilbo$core$start(){
var G__38708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bilbo.core.hello_world], null);
var G__38709 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__38708,G__38709) : reagent.core.render_component.call(null,G__38708,G__38709));
});
bilbo.core.init = (function bilbo$core$init(){
return bilbo.core.start();
});
goog.exportSymbol('bilbo.core.init', bilbo.core.init);
bilbo.core.stop = (function bilbo$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=bilbo.core.js.map
