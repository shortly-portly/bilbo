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
var G__35933__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35939__i = 0, G__35939__a = new Array(arguments.length -  0);
while (G__35939__i < G__35939__a.length) {G__35939__a[G__35939__i] = arguments[G__35939__i + 0]; ++G__35939__i;}
  args = new cljs.core.IndexedSeq(G__35939__a,0,null);
} 
return G__35933__delegate.call(this,args);};
G__35933.cljs$lang$maxFixedArity = 0;
G__35933.cljs$lang$applyTo = (function (arglist__35940){
var args = cljs.core.seq(arglist__35940);
return G__35933__delegate(args);
});
G__35933.cljs$core$IFn$_invoke$arity$variadic = G__35933__delegate;
return G__35933;
})()
);

(o.error = (function() { 
var G__35941__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35942__i = 0, G__35942__a = new Array(arguments.length -  0);
while (G__35942__i < G__35942__a.length) {G__35942__a[G__35942__i] = arguments[G__35942__i + 0]; ++G__35942__i;}
  args = new cljs.core.IndexedSeq(G__35942__a,0,null);
} 
return G__35941__delegate.call(this,args);};
G__35941.cljs$lang$maxFixedArity = 0;
G__35941.cljs$lang$applyTo = (function (arglist__35943){
var args = cljs.core.seq(arglist__35943);
return G__35941__delegate(args);
});
G__35941.cljs$core$IFn$_invoke$arity$variadic = G__35941__delegate;
return G__35941;
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
