goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38351){
var map__38352 = p__38351;
var map__38352__$1 = (((((!((map__38352 == null))))?(((((map__38352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38352):map__38352);
var m = map__38352__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38352__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38354_38566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38355_38567 = null;
var count__38356_38568 = (0);
var i__38357_38569 = (0);
while(true){
if((i__38357_38569 < count__38356_38568)){
var f_38570 = chunk__38355_38567.cljs$core$IIndexed$_nth$arity$2(null,i__38357_38569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38570], 0));


var G__38572 = seq__38354_38566;
var G__38573 = chunk__38355_38567;
var G__38574 = count__38356_38568;
var G__38575 = (i__38357_38569 + (1));
seq__38354_38566 = G__38572;
chunk__38355_38567 = G__38573;
count__38356_38568 = G__38574;
i__38357_38569 = G__38575;
continue;
} else {
var temp__5735__auto___38576 = cljs.core.seq(seq__38354_38566);
if(temp__5735__auto___38576){
var seq__38354_38577__$1 = temp__5735__auto___38576;
if(cljs.core.chunked_seq_QMARK_(seq__38354_38577__$1)){
var c__4556__auto___38578 = cljs.core.chunk_first(seq__38354_38577__$1);
var G__38579 = cljs.core.chunk_rest(seq__38354_38577__$1);
var G__38580 = c__4556__auto___38578;
var G__38581 = cljs.core.count(c__4556__auto___38578);
var G__38582 = (0);
seq__38354_38566 = G__38579;
chunk__38355_38567 = G__38580;
count__38356_38568 = G__38581;
i__38357_38569 = G__38582;
continue;
} else {
var f_38583 = cljs.core.first(seq__38354_38577__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38583], 0));


var G__38584 = cljs.core.next(seq__38354_38577__$1);
var G__38585 = null;
var G__38586 = (0);
var G__38587 = (0);
seq__38354_38566 = G__38584;
chunk__38355_38567 = G__38585;
count__38356_38568 = G__38586;
i__38357_38569 = G__38587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38588], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38588)))?cljs.core.second(arglists_38588):arglists_38588)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38361_38589 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38362_38590 = null;
var count__38363_38591 = (0);
var i__38364_38592 = (0);
while(true){
if((i__38364_38592 < count__38363_38591)){
var vec__38378_38593 = chunk__38362_38590.cljs$core$IIndexed$_nth$arity$2(null,i__38364_38592);
var name_38594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378_38593,(0),null);
var map__38381_38595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378_38593,(1),null);
var map__38381_38596__$1 = (((((!((map__38381_38595 == null))))?(((((map__38381_38595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38381_38595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38381_38595):map__38381_38595);
var doc_38597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381_38596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381_38596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38594], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38598], 0));

if(cljs.core.truth_(doc_38597)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38597], 0));
} else {
}


var G__38600 = seq__38361_38589;
var G__38601 = chunk__38362_38590;
var G__38602 = count__38363_38591;
var G__38603 = (i__38364_38592 + (1));
seq__38361_38589 = G__38600;
chunk__38362_38590 = G__38601;
count__38363_38591 = G__38602;
i__38364_38592 = G__38603;
continue;
} else {
var temp__5735__auto___38604 = cljs.core.seq(seq__38361_38589);
if(temp__5735__auto___38604){
var seq__38361_38605__$1 = temp__5735__auto___38604;
if(cljs.core.chunked_seq_QMARK_(seq__38361_38605__$1)){
var c__4556__auto___38606 = cljs.core.chunk_first(seq__38361_38605__$1);
var G__38607 = cljs.core.chunk_rest(seq__38361_38605__$1);
var G__38608 = c__4556__auto___38606;
var G__38609 = cljs.core.count(c__4556__auto___38606);
var G__38610 = (0);
seq__38361_38589 = G__38607;
chunk__38362_38590 = G__38608;
count__38363_38591 = G__38609;
i__38364_38592 = G__38610;
continue;
} else {
var vec__38384_38611 = cljs.core.first(seq__38361_38605__$1);
var name_38612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38384_38611,(0),null);
var map__38387_38613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38384_38611,(1),null);
var map__38387_38614__$1 = (((((!((map__38387_38613 == null))))?(((((map__38387_38613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38387_38613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38387_38613):map__38387_38613);
var doc_38615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38387_38614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38387_38614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38612], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38616], 0));

if(cljs.core.truth_(doc_38615)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38615], 0));
} else {
}


var G__38617 = cljs.core.next(seq__38361_38605__$1);
var G__38618 = null;
var G__38619 = (0);
var G__38620 = (0);
seq__38361_38589 = G__38617;
chunk__38362_38590 = G__38618;
count__38363_38591 = G__38619;
i__38364_38592 = G__38620;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38389 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38390 = null;
var count__38391 = (0);
var i__38392 = (0);
while(true){
if((i__38392 < count__38391)){
var role = chunk__38390.cljs$core$IIndexed$_nth$arity$2(null,i__38392);
var temp__5735__auto___38621__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38621__$1)){
var spec_38622 = temp__5735__auto___38621__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38622)], 0));
} else {
}


var G__38623 = seq__38389;
var G__38624 = chunk__38390;
var G__38625 = count__38391;
var G__38626 = (i__38392 + (1));
seq__38389 = G__38623;
chunk__38390 = G__38624;
count__38391 = G__38625;
i__38392 = G__38626;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38389);
if(temp__5735__auto____$1){
var seq__38389__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38389__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38389__$1);
var G__38627 = cljs.core.chunk_rest(seq__38389__$1);
var G__38628 = c__4556__auto__;
var G__38629 = cljs.core.count(c__4556__auto__);
var G__38630 = (0);
seq__38389 = G__38627;
chunk__38390 = G__38628;
count__38391 = G__38629;
i__38392 = G__38630;
continue;
} else {
var role = cljs.core.first(seq__38389__$1);
var temp__5735__auto___38631__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38631__$2)){
var spec_38632 = temp__5735__auto___38631__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38632)], 0));
} else {
}


var G__38633 = cljs.core.next(seq__38389__$1);
var G__38634 = null;
var G__38635 = (0);
var G__38636 = (0);
seq__38389 = G__38633;
chunk__38390 = G__38634;
count__38391 = G__38635;
i__38392 = G__38636;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38637 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38638 = cljs.core.ex_cause(t);
via = G__38637;
t = G__38638;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38400 = datafied_throwable;
var map__38400__$1 = (((((!((map__38400 == null))))?(((((map__38400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38400):map__38400);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38400__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38401 = cljs.core.last(via);
var map__38401__$1 = (((((!((map__38401 == null))))?(((((map__38401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38401):map__38401);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38402 = data;
var map__38402__$1 = (((((!((map__38402 == null))))?(((((map__38402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38402):map__38402);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38402__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38403 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38403__$1 = (((((!((map__38403 == null))))?(((((map__38403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38403):map__38403);
var top_data = map__38403__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38425 = phase;
var G__38425__$1 = (((G__38425 instanceof cljs.core.Keyword))?G__38425.fqn:null);
switch (G__38425__$1) {
case "read-source":
var map__38426 = data;
var map__38426__$1 = (((((!((map__38426 == null))))?(((((map__38426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38426):map__38426);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38426__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38426__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38428 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38428__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38428,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38428);
var G__38428__$2 = (cljs.core.truth_((function (){var fexpr__38436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38436.cljs$core$IFn$_invoke$arity$1 ? fexpr__38436.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38436.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38428__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38428__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38428__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38428__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38437 = top_data;
var G__38437__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38437,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38437);
var G__38437__$2 = (cljs.core.truth_((function (){var fexpr__38438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38438.cljs$core$IFn$_invoke$arity$1 ? fexpr__38438.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38438.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38437__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38437__$1);
var G__38437__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38437__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38437__$2);
var G__38437__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38437__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38437__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38437__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38437__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38439 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(3),null);
var G__38447 = top_data;
var G__38447__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38447);
var G__38447__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38447__$1);
var G__38447__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38447__$2);
var G__38447__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38447__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38447__$4;
}

break;
case "execution":
var vec__38457 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38399_SHARP_){
var or__4126__auto__ = (p1__38399_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38469.cljs$core$IFn$_invoke$arity$1 ? fexpr__38469.cljs$core$IFn$_invoke$arity$1(p1__38399_SHARP_) : fexpr__38469.call(null,p1__38399_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38472__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38472,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38472);
var G__38472__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38472__$1);
var G__38472__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38472__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38472__$2);
var G__38472__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38472__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38472__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38472__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38472__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38425__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38500){
var map__38503 = p__38500;
var map__38503__$1 = (((((!((map__38503 == null))))?(((((map__38503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38503):map__38503);
var triage_data = map__38503__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38525 = phase;
var G__38525__$1 = (((G__38525 instanceof cljs.core.Keyword))?G__38525.fqn:null);
switch (G__38525__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38528 = loc;
var G__38529 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38530_38650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38531_38651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38532_38652 = true;
var _STAR_print_fn_STAR__temp_val__38533_38653 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38532_38652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38533_38653);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38494_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38531_38651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38530_38650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38526,G__38527,G__38528,G__38529) : format.call(null,G__38526,G__38527,G__38528,G__38529));

break;
case "macroexpansion":
var G__38535 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38536 = cause_type;
var G__38537 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38538 = loc;
var G__38539 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38535,G__38536,G__38537,G__38538,G__38539) : format.call(null,G__38535,G__38536,G__38537,G__38538,G__38539));

break;
case "compile-syntax-check":
var G__38540 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38541 = cause_type;
var G__38542 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38543 = loc;
var G__38544 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38540,G__38541,G__38542,G__38543,G__38544) : format.call(null,G__38540,G__38541,G__38542,G__38543,G__38544));

break;
case "compilation":
var G__38546 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38547 = cause_type;
var G__38548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38549 = loc;
var G__38550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38546,G__38547,G__38548,G__38549,G__38550) : format.call(null,G__38546,G__38547,G__38548,G__38549,G__38550));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38551 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38552 = symbol;
var G__38553 = loc;
var G__38554 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38555_38654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38556_38655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38557_38656 = true;
var _STAR_print_fn_STAR__temp_val__38558_38657 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38557_38656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38558_38657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38495_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38495_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38556_38655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38555_38654);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38551,G__38552,G__38553,G__38554) : format.call(null,G__38551,G__38552,G__38553,G__38554));
} else {
var G__38559 = "Execution error%s at %s(%s).\n%s\n";
var G__38560 = cause_type;
var G__38561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38562 = loc;
var G__38563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38559,G__38560,G__38561,G__38562,G__38563) : format.call(null,G__38559,G__38560,G__38561,G__38562,G__38563));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38525__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
