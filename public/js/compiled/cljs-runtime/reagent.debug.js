goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27393__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27394__i = 0, G__27394__a = new Array(arguments.length -  0);
while (G__27394__i < G__27394__a.length) {G__27394__a[G__27394__i] = arguments[G__27394__i + 0]; ++G__27394__i;}
  args = new cljs.core.IndexedSeq(G__27394__a,0,null);
} 
return G__27393__delegate.call(this,args);};
G__27393.cljs$lang$maxFixedArity = 0;
G__27393.cljs$lang$applyTo = (function (arglist__27395){
var args = cljs.core.seq(arglist__27395);
return G__27393__delegate(args);
});
G__27393.cljs$core$IFn$_invoke$arity$variadic = G__27393__delegate;
return G__27393;
})()
);

(o.error = (function() { 
var G__27396__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27397__i = 0, G__27397__a = new Array(arguments.length -  0);
while (G__27397__i < G__27397__a.length) {G__27397__a[G__27397__i] = arguments[G__27397__i + 0]; ++G__27397__i;}
  args = new cljs.core.IndexedSeq(G__27397__a,0,null);
} 
return G__27396__delegate.call(this,args);};
G__27396.cljs$lang$maxFixedArity = 0;
G__27396.cljs$lang$applyTo = (function (arglist__27398){
var args = cljs.core.seq(arglist__27398);
return G__27396__delegate(args);
});
G__27396.cljs$core$IFn$_invoke$arity$variadic = G__27396__delegate;
return G__27396;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
