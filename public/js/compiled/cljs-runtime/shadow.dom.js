goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35471 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35471(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35475 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35475(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34849 = coll;
var G__34850 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34849,G__34850) : shadow.dom.lazy_native_coll_seq.call(null,G__34849,G__34850));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34881 = arguments.length;
switch (G__34881) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34898 = arguments.length;
switch (G__34898) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34903 = arguments.length;
switch (G__34903) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34912 = arguments.length;
switch (G__34912) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34922 = arguments.length;
switch (G__34922) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34930){if((e34930 instanceof Object)){
var e = e34930;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34930;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34937 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34938 = null;
var count__34939 = (0);
var i__34940 = (0);
while(true){
if((i__34940 < count__34939)){
var el = chunk__34938.cljs$core$IIndexed$_nth$arity$2(null,i__34940);
var handler_35501__$1 = ((function (seq__34937,chunk__34938,count__34939,i__34940,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34937,chunk__34938,count__34939,i__34940,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35501__$1);


var G__35503 = seq__34937;
var G__35504 = chunk__34938;
var G__35505 = count__34939;
var G__35506 = (i__34940 + (1));
seq__34937 = G__35503;
chunk__34938 = G__35504;
count__34939 = G__35505;
i__34940 = G__35506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34937);
if(temp__5735__auto__){
var seq__34937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34937__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34937__$1);
var G__35508 = cljs.core.chunk_rest(seq__34937__$1);
var G__35509 = c__4556__auto__;
var G__35510 = cljs.core.count(c__4556__auto__);
var G__35511 = (0);
seq__34937 = G__35508;
chunk__34938 = G__35509;
count__34939 = G__35510;
i__34940 = G__35511;
continue;
} else {
var el = cljs.core.first(seq__34937__$1);
var handler_35512__$1 = ((function (seq__34937,chunk__34938,count__34939,i__34940,el,seq__34937__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34937,chunk__34938,count__34939,i__34940,el,seq__34937__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35512__$1);


var G__35514 = cljs.core.next(seq__34937__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__34937 = G__35514;
chunk__34938 = G__35515;
count__34939 = G__35516;
i__34940 = G__35517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34951 = arguments.length;
switch (G__34951) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34953 = cljs.core.seq(events);
var chunk__34954 = null;
var count__34955 = (0);
var i__34956 = (0);
while(true){
if((i__34956 < count__34955)){
var vec__34969 = chunk__34954.cljs$core$IIndexed$_nth$arity$2(null,i__34956);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35520 = seq__34953;
var G__35521 = chunk__34954;
var G__35522 = count__34955;
var G__35523 = (i__34956 + (1));
seq__34953 = G__35520;
chunk__34954 = G__35521;
count__34955 = G__35522;
i__34956 = G__35523;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34953);
if(temp__5735__auto__){
var seq__34953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34953__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34953__$1);
var G__35524 = cljs.core.chunk_rest(seq__34953__$1);
var G__35525 = c__4556__auto__;
var G__35526 = cljs.core.count(c__4556__auto__);
var G__35527 = (0);
seq__34953 = G__35524;
chunk__34954 = G__35525;
count__34955 = G__35526;
i__34956 = G__35527;
continue;
} else {
var vec__34975 = cljs.core.first(seq__34953__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35529 = cljs.core.next(seq__34953__$1);
var G__35530 = null;
var G__35531 = (0);
var G__35532 = (0);
seq__34953 = G__35529;
chunk__34954 = G__35530;
count__34955 = G__35531;
i__34956 = G__35532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34979 = cljs.core.seq(styles);
var chunk__34980 = null;
var count__34981 = (0);
var i__34982 = (0);
while(true){
if((i__34982 < count__34981)){
var vec__34997 = chunk__34980.cljs$core$IIndexed$_nth$arity$2(null,i__34982);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35534 = seq__34979;
var G__35535 = chunk__34980;
var G__35536 = count__34981;
var G__35537 = (i__34982 + (1));
seq__34979 = G__35534;
chunk__34980 = G__35535;
count__34981 = G__35536;
i__34982 = G__35537;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34979);
if(temp__5735__auto__){
var seq__34979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34979__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34979__$1);
var G__35539 = cljs.core.chunk_rest(seq__34979__$1);
var G__35540 = c__4556__auto__;
var G__35541 = cljs.core.count(c__4556__auto__);
var G__35542 = (0);
seq__34979 = G__35539;
chunk__34980 = G__35540;
count__34981 = G__35541;
i__34982 = G__35542;
continue;
} else {
var vec__35001 = cljs.core.first(seq__34979__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35546 = cljs.core.next(seq__34979__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__34979 = G__35546;
chunk__34980 = G__35547;
count__34981 = G__35548;
i__34982 = G__35549;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35007_35552 = key;
var G__35007_35553__$1 = (((G__35007_35552 instanceof cljs.core.Keyword))?G__35007_35552.fqn:null);
switch (G__35007_35553__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35557 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35557,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35557,"aria-");
}
})())){
el.setAttribute(ks_35557,value);
} else {
(el[ks_35557] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35021){
var map__35023 = p__35021;
var map__35023__$1 = (((((!((map__35023 == null))))?(((((map__35023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35023):map__35023);
var props = map__35023__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35026 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35029 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35029,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35029;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35035 = arguments.length;
switch (G__35035) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35044){
var vec__35045 = p__35044;
var seq__35046 = cljs.core.seq(vec__35045);
var first__35047 = cljs.core.first(seq__35046);
var seq__35046__$1 = cljs.core.next(seq__35046);
var nn = first__35047;
var first__35047__$1 = cljs.core.first(seq__35046__$1);
var seq__35046__$2 = cljs.core.next(seq__35046__$1);
var np = first__35047__$1;
var nc = seq__35046__$2;
var node = vec__35045;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35051 = nn;
var G__35052 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35051,G__35052) : create_fn.call(null,G__35051,G__35052));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35053 = nn;
var G__35054 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35053,G__35054) : create_fn.call(null,G__35053,G__35054));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35056 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(1),null);
var seq__35060_35577 = cljs.core.seq(node_children);
var chunk__35061_35578 = null;
var count__35062_35579 = (0);
var i__35063_35580 = (0);
while(true){
if((i__35063_35580 < count__35062_35579)){
var child_struct_35582 = chunk__35061_35578.cljs$core$IIndexed$_nth$arity$2(null,i__35063_35580);
var children_35583 = shadow.dom.dom_node(child_struct_35582);
if(cljs.core.seq_QMARK_(children_35583)){
var seq__35083_35584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35583));
var chunk__35085_35585 = null;
var count__35086_35586 = (0);
var i__35087_35587 = (0);
while(true){
if((i__35087_35587 < count__35086_35586)){
var child_35590 = chunk__35085_35585.cljs$core$IIndexed$_nth$arity$2(null,i__35087_35587);
if(cljs.core.truth_(child_35590)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35590);


var G__35591 = seq__35083_35584;
var G__35592 = chunk__35085_35585;
var G__35593 = count__35086_35586;
var G__35594 = (i__35087_35587 + (1));
seq__35083_35584 = G__35591;
chunk__35085_35585 = G__35592;
count__35086_35586 = G__35593;
i__35087_35587 = G__35594;
continue;
} else {
var G__35596 = seq__35083_35584;
var G__35597 = chunk__35085_35585;
var G__35598 = count__35086_35586;
var G__35599 = (i__35087_35587 + (1));
seq__35083_35584 = G__35596;
chunk__35085_35585 = G__35597;
count__35086_35586 = G__35598;
i__35087_35587 = G__35599;
continue;
}
} else {
var temp__5735__auto___35600 = cljs.core.seq(seq__35083_35584);
if(temp__5735__auto___35600){
var seq__35083_35601__$1 = temp__5735__auto___35600;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35601__$1)){
var c__4556__auto___35602 = cljs.core.chunk_first(seq__35083_35601__$1);
var G__35603 = cljs.core.chunk_rest(seq__35083_35601__$1);
var G__35604 = c__4556__auto___35602;
var G__35605 = cljs.core.count(c__4556__auto___35602);
var G__35606 = (0);
seq__35083_35584 = G__35603;
chunk__35085_35585 = G__35604;
count__35086_35586 = G__35605;
i__35087_35587 = G__35606;
continue;
} else {
var child_35607 = cljs.core.first(seq__35083_35601__$1);
if(cljs.core.truth_(child_35607)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35607);


var G__35609 = cljs.core.next(seq__35083_35601__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__35083_35584 = G__35609;
chunk__35085_35585 = G__35610;
count__35086_35586 = G__35611;
i__35087_35587 = G__35612;
continue;
} else {
var G__35613 = cljs.core.next(seq__35083_35601__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__35083_35584 = G__35613;
chunk__35085_35585 = G__35614;
count__35086_35586 = G__35615;
i__35087_35587 = G__35616;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35583);
}


var G__35617 = seq__35060_35577;
var G__35618 = chunk__35061_35578;
var G__35619 = count__35062_35579;
var G__35620 = (i__35063_35580 + (1));
seq__35060_35577 = G__35617;
chunk__35061_35578 = G__35618;
count__35062_35579 = G__35619;
i__35063_35580 = G__35620;
continue;
} else {
var temp__5735__auto___35622 = cljs.core.seq(seq__35060_35577);
if(temp__5735__auto___35622){
var seq__35060_35624__$1 = temp__5735__auto___35622;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35624__$1)){
var c__4556__auto___35625 = cljs.core.chunk_first(seq__35060_35624__$1);
var G__35627 = cljs.core.chunk_rest(seq__35060_35624__$1);
var G__35628 = c__4556__auto___35625;
var G__35629 = cljs.core.count(c__4556__auto___35625);
var G__35630 = (0);
seq__35060_35577 = G__35627;
chunk__35061_35578 = G__35628;
count__35062_35579 = G__35629;
i__35063_35580 = G__35630;
continue;
} else {
var child_struct_35632 = cljs.core.first(seq__35060_35624__$1);
var children_35633 = shadow.dom.dom_node(child_struct_35632);
if(cljs.core.seq_QMARK_(children_35633)){
var seq__35099_35635 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35633));
var chunk__35101_35636 = null;
var count__35102_35637 = (0);
var i__35103_35638 = (0);
while(true){
if((i__35103_35638 < count__35102_35637)){
var child_35640 = chunk__35101_35636.cljs$core$IIndexed$_nth$arity$2(null,i__35103_35638);
if(cljs.core.truth_(child_35640)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35640);


var G__35641 = seq__35099_35635;
var G__35642 = chunk__35101_35636;
var G__35643 = count__35102_35637;
var G__35644 = (i__35103_35638 + (1));
seq__35099_35635 = G__35641;
chunk__35101_35636 = G__35642;
count__35102_35637 = G__35643;
i__35103_35638 = G__35644;
continue;
} else {
var G__35645 = seq__35099_35635;
var G__35646 = chunk__35101_35636;
var G__35647 = count__35102_35637;
var G__35648 = (i__35103_35638 + (1));
seq__35099_35635 = G__35645;
chunk__35101_35636 = G__35646;
count__35102_35637 = G__35647;
i__35103_35638 = G__35648;
continue;
}
} else {
var temp__5735__auto___35650__$1 = cljs.core.seq(seq__35099_35635);
if(temp__5735__auto___35650__$1){
var seq__35099_35651__$1 = temp__5735__auto___35650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35099_35651__$1)){
var c__4556__auto___35653 = cljs.core.chunk_first(seq__35099_35651__$1);
var G__35654 = cljs.core.chunk_rest(seq__35099_35651__$1);
var G__35655 = c__4556__auto___35653;
var G__35656 = cljs.core.count(c__4556__auto___35653);
var G__35657 = (0);
seq__35099_35635 = G__35654;
chunk__35101_35636 = G__35655;
count__35102_35637 = G__35656;
i__35103_35638 = G__35657;
continue;
} else {
var child_35658 = cljs.core.first(seq__35099_35651__$1);
if(cljs.core.truth_(child_35658)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35658);


var G__35659 = cljs.core.next(seq__35099_35651__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35099_35635 = G__35659;
chunk__35101_35636 = G__35660;
count__35102_35637 = G__35661;
i__35103_35638 = G__35662;
continue;
} else {
var G__35663 = cljs.core.next(seq__35099_35651__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35099_35635 = G__35663;
chunk__35101_35636 = G__35664;
count__35102_35637 = G__35665;
i__35103_35638 = G__35666;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35633);
}


var G__35668 = cljs.core.next(seq__35060_35624__$1);
var G__35669 = null;
var G__35670 = (0);
var G__35671 = (0);
seq__35060_35577 = G__35668;
chunk__35061_35578 = G__35669;
count__35062_35579 = G__35670;
i__35063_35580 = G__35671;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35124 = cljs.core.seq(node);
var chunk__35125 = null;
var count__35126 = (0);
var i__35127 = (0);
while(true){
if((i__35127 < count__35126)){
var n = chunk__35125.cljs$core$IIndexed$_nth$arity$2(null,i__35127);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35682 = seq__35124;
var G__35683 = chunk__35125;
var G__35684 = count__35126;
var G__35685 = (i__35127 + (1));
seq__35124 = G__35682;
chunk__35125 = G__35683;
count__35126 = G__35684;
i__35127 = G__35685;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35124);
if(temp__5735__auto__){
var seq__35124__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35124__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35124__$1);
var G__35687 = cljs.core.chunk_rest(seq__35124__$1);
var G__35688 = c__4556__auto__;
var G__35689 = cljs.core.count(c__4556__auto__);
var G__35690 = (0);
seq__35124 = G__35687;
chunk__35125 = G__35688;
count__35126 = G__35689;
i__35127 = G__35690;
continue;
} else {
var n = cljs.core.first(seq__35124__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35692 = cljs.core.next(seq__35124__$1);
var G__35693 = null;
var G__35694 = (0);
var G__35695 = (0);
seq__35124 = G__35692;
chunk__35125 = G__35693;
count__35126 = G__35694;
i__35127 = G__35695;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35139 = arguments.length;
switch (G__35139) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35150 = arguments.length;
switch (G__35150) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35715 = arguments.length;
var i__4737__auto___35716 = (0);
while(true){
if((i__4737__auto___35716 < len__4736__auto___35715)){
args__4742__auto__.push((arguments[i__4737__auto___35716]));

var G__35717 = (i__4737__auto___35716 + (1));
i__4737__auto___35716 = G__35717;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35171_35720 = cljs.core.seq(nodes);
var chunk__35172_35721 = null;
var count__35173_35722 = (0);
var i__35174_35723 = (0);
while(true){
if((i__35174_35723 < count__35173_35722)){
var node_35724 = chunk__35172_35721.cljs$core$IIndexed$_nth$arity$2(null,i__35174_35723);
fragment.appendChild(shadow.dom._to_dom(node_35724));


var G__35725 = seq__35171_35720;
var G__35726 = chunk__35172_35721;
var G__35727 = count__35173_35722;
var G__35728 = (i__35174_35723 + (1));
seq__35171_35720 = G__35725;
chunk__35172_35721 = G__35726;
count__35173_35722 = G__35727;
i__35174_35723 = G__35728;
continue;
} else {
var temp__5735__auto___35730 = cljs.core.seq(seq__35171_35720);
if(temp__5735__auto___35730){
var seq__35171_35731__$1 = temp__5735__auto___35730;
if(cljs.core.chunked_seq_QMARK_(seq__35171_35731__$1)){
var c__4556__auto___35732 = cljs.core.chunk_first(seq__35171_35731__$1);
var G__35733 = cljs.core.chunk_rest(seq__35171_35731__$1);
var G__35734 = c__4556__auto___35732;
var G__35735 = cljs.core.count(c__4556__auto___35732);
var G__35736 = (0);
seq__35171_35720 = G__35733;
chunk__35172_35721 = G__35734;
count__35173_35722 = G__35735;
i__35174_35723 = G__35736;
continue;
} else {
var node_35737 = cljs.core.first(seq__35171_35731__$1);
fragment.appendChild(shadow.dom._to_dom(node_35737));


var G__35738 = cljs.core.next(seq__35171_35731__$1);
var G__35739 = null;
var G__35740 = (0);
var G__35741 = (0);
seq__35171_35720 = G__35738;
chunk__35172_35721 = G__35739;
count__35173_35722 = G__35740;
i__35174_35723 = G__35741;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35169));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35177_35744 = cljs.core.seq(scripts);
var chunk__35178_35745 = null;
var count__35179_35746 = (0);
var i__35180_35747 = (0);
while(true){
if((i__35180_35747 < count__35179_35746)){
var vec__35187_35753 = chunk__35178_35745.cljs$core$IIndexed$_nth$arity$2(null,i__35180_35747);
var script_tag_35754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35187_35753,(0),null);
var script_body_35755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35187_35753,(1),null);
eval(script_body_35755);


var G__35756 = seq__35177_35744;
var G__35757 = chunk__35178_35745;
var G__35758 = count__35179_35746;
var G__35759 = (i__35180_35747 + (1));
seq__35177_35744 = G__35756;
chunk__35178_35745 = G__35757;
count__35179_35746 = G__35758;
i__35180_35747 = G__35759;
continue;
} else {
var temp__5735__auto___35760 = cljs.core.seq(seq__35177_35744);
if(temp__5735__auto___35760){
var seq__35177_35763__$1 = temp__5735__auto___35760;
if(cljs.core.chunked_seq_QMARK_(seq__35177_35763__$1)){
var c__4556__auto___35764 = cljs.core.chunk_first(seq__35177_35763__$1);
var G__35765 = cljs.core.chunk_rest(seq__35177_35763__$1);
var G__35766 = c__4556__auto___35764;
var G__35767 = cljs.core.count(c__4556__auto___35764);
var G__35768 = (0);
seq__35177_35744 = G__35765;
chunk__35178_35745 = G__35766;
count__35179_35746 = G__35767;
i__35180_35747 = G__35768;
continue;
} else {
var vec__35190_35769 = cljs.core.first(seq__35177_35763__$1);
var script_tag_35770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35190_35769,(0),null);
var script_body_35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35190_35769,(1),null);
eval(script_body_35771);


var G__35774 = cljs.core.next(seq__35177_35763__$1);
var G__35775 = null;
var G__35776 = (0);
var G__35777 = (0);
seq__35177_35744 = G__35774;
chunk__35178_35745 = G__35775;
count__35179_35746 = G__35776;
i__35180_35747 = G__35777;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35193){
var vec__35194 = p__35193;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35194,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35194,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35206 = arguments.length;
switch (G__35206) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35228 = cljs.core.seq(style_keys);
var chunk__35229 = null;
var count__35230 = (0);
var i__35231 = (0);
while(true){
if((i__35231 < count__35230)){
var it = chunk__35229.cljs$core$IIndexed$_nth$arity$2(null,i__35231);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35791 = seq__35228;
var G__35792 = chunk__35229;
var G__35793 = count__35230;
var G__35794 = (i__35231 + (1));
seq__35228 = G__35791;
chunk__35229 = G__35792;
count__35230 = G__35793;
i__35231 = G__35794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35228);
if(temp__5735__auto__){
var seq__35228__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35228__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35228__$1);
var G__35797 = cljs.core.chunk_rest(seq__35228__$1);
var G__35798 = c__4556__auto__;
var G__35799 = cljs.core.count(c__4556__auto__);
var G__35800 = (0);
seq__35228 = G__35797;
chunk__35229 = G__35798;
count__35230 = G__35799;
i__35231 = G__35800;
continue;
} else {
var it = cljs.core.first(seq__35228__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35801 = cljs.core.next(seq__35228__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35228 = G__35801;
chunk__35229 = G__35802;
count__35230 = G__35803;
i__35231 = G__35804;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35244,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35251 = k35244;
var G__35251__$1 = (((G__35251 instanceof cljs.core.Keyword))?G__35251.fqn:null);
switch (G__35251__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35244,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35253){
var vec__35255 = p__35253;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35255,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35243){
var self__ = this;
var G__35243__$1 = this;
return (new cljs.core.RecordIter((0),G__35243__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35245,other35246){
var self__ = this;
var this35245__$1 = this;
return (((!((other35246 == null)))) && ((this35245__$1.constructor === other35246.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35245__$1.x,other35246.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35245__$1.y,other35246.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35245__$1.__extmap,other35246.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35243){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35268 = cljs.core.keyword_identical_QMARK_;
var expr__35269 = k__4388__auto__;
if(cljs.core.truth_((pred__35268.cljs$core$IFn$_invoke$arity$2 ? pred__35268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35269) : pred__35268.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35269)))){
return (new shadow.dom.Coordinate(G__35243,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35268.cljs$core$IFn$_invoke$arity$2 ? pred__35268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35269) : pred__35268.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35269)))){
return (new shadow.dom.Coordinate(self__.x,G__35243,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35243),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35243){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35243,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35248){
var extmap__4419__auto__ = (function (){var G__35275 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35248,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35248)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35275);
} else {
return G__35275;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35248),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35248),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35290,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35297 = k35290;
var G__35297__$1 = (((G__35297 instanceof cljs.core.Keyword))?G__35297.fqn:null);
switch (G__35297__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35290,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35299){
var vec__35301 = p__35299;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35301,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35301,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35289){
var self__ = this;
var G__35289__$1 = this;
return (new cljs.core.RecordIter((0),G__35289__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35291,other35292){
var self__ = this;
var this35291__$1 = this;
return (((!((other35292 == null)))) && ((this35291__$1.constructor === other35292.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35291__$1.w,other35292.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35291__$1.h,other35292.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35291__$1.__extmap,other35292.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35289){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35310 = cljs.core.keyword_identical_QMARK_;
var expr__35311 = k__4388__auto__;
if(cljs.core.truth_((pred__35310.cljs$core$IFn$_invoke$arity$2 ? pred__35310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35311) : pred__35310.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35311)))){
return (new shadow.dom.Size(G__35289,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35310.cljs$core$IFn$_invoke$arity$2 ? pred__35310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35311) : pred__35310.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35311)))){
return (new shadow.dom.Size(self__.w,G__35289,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35289),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35289){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35289,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35293){
var extmap__4419__auto__ = (function (){var G__35319 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35293,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35293)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35319);
} else {
return G__35319;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35293),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35293),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35887 = (i + (1));
var G__35888 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35887;
ret = G__35888;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35331){
var vec__35332 = p__35331;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35339 = arguments.length;
switch (G__35339) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35908 = ps;
var G__35909 = (i + (1));
el__$1 = G__35908;
i = G__35909;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35354,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35358_35912 = cljs.core.seq(props);
var chunk__35359_35913 = null;
var count__35360_35914 = (0);
var i__35361_35915 = (0);
while(true){
if((i__35361_35915 < count__35360_35914)){
var vec__35373_35916 = chunk__35359_35913.cljs$core$IIndexed$_nth$arity$2(null,i__35361_35915);
var k_35917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35373_35916,(0),null);
var v_35918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35373_35916,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35917);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35917),v_35918);


var G__35919 = seq__35358_35912;
var G__35920 = chunk__35359_35913;
var G__35921 = count__35360_35914;
var G__35922 = (i__35361_35915 + (1));
seq__35358_35912 = G__35919;
chunk__35359_35913 = G__35920;
count__35360_35914 = G__35921;
i__35361_35915 = G__35922;
continue;
} else {
var temp__5735__auto___35923 = cljs.core.seq(seq__35358_35912);
if(temp__5735__auto___35923){
var seq__35358_35924__$1 = temp__5735__auto___35923;
if(cljs.core.chunked_seq_QMARK_(seq__35358_35924__$1)){
var c__4556__auto___35925 = cljs.core.chunk_first(seq__35358_35924__$1);
var G__35926 = cljs.core.chunk_rest(seq__35358_35924__$1);
var G__35927 = c__4556__auto___35925;
var G__35928 = cljs.core.count(c__4556__auto___35925);
var G__35929 = (0);
seq__35358_35912 = G__35926;
chunk__35359_35913 = G__35927;
count__35360_35914 = G__35928;
i__35361_35915 = G__35929;
continue;
} else {
var vec__35378_35930 = cljs.core.first(seq__35358_35924__$1);
var k_35931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378_35930,(0),null);
var v_35932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378_35930,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35931);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35931),v_35932);


var G__35935 = cljs.core.next(seq__35358_35924__$1);
var G__35936 = null;
var G__35937 = (0);
var G__35938 = (0);
seq__35358_35912 = G__35935;
chunk__35359_35913 = G__35936;
count__35360_35914 = G__35937;
i__35361_35915 = G__35938;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35388 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(1),null);
var seq__35391_35944 = cljs.core.seq(node_children);
var chunk__35393_35945 = null;
var count__35394_35946 = (0);
var i__35395_35947 = (0);
while(true){
if((i__35395_35947 < count__35394_35946)){
var child_struct_35948 = chunk__35393_35945.cljs$core$IIndexed$_nth$arity$2(null,i__35395_35947);
if((!((child_struct_35948 == null)))){
if(typeof child_struct_35948 === 'string'){
var text_35949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35949),child_struct_35948].join(''));
} else {
var children_35950 = shadow.dom.svg_node(child_struct_35948);
if(cljs.core.seq_QMARK_(children_35950)){
var seq__35424_35951 = cljs.core.seq(children_35950);
var chunk__35426_35952 = null;
var count__35427_35953 = (0);
var i__35428_35954 = (0);
while(true){
if((i__35428_35954 < count__35427_35953)){
var child_35955 = chunk__35426_35952.cljs$core$IIndexed$_nth$arity$2(null,i__35428_35954);
if(cljs.core.truth_(child_35955)){
node.appendChild(child_35955);


var G__35956 = seq__35424_35951;
var G__35957 = chunk__35426_35952;
var G__35958 = count__35427_35953;
var G__35959 = (i__35428_35954 + (1));
seq__35424_35951 = G__35956;
chunk__35426_35952 = G__35957;
count__35427_35953 = G__35958;
i__35428_35954 = G__35959;
continue;
} else {
var G__35960 = seq__35424_35951;
var G__35961 = chunk__35426_35952;
var G__35962 = count__35427_35953;
var G__35963 = (i__35428_35954 + (1));
seq__35424_35951 = G__35960;
chunk__35426_35952 = G__35961;
count__35427_35953 = G__35962;
i__35428_35954 = G__35963;
continue;
}
} else {
var temp__5735__auto___35964 = cljs.core.seq(seq__35424_35951);
if(temp__5735__auto___35964){
var seq__35424_35965__$1 = temp__5735__auto___35964;
if(cljs.core.chunked_seq_QMARK_(seq__35424_35965__$1)){
var c__4556__auto___35966 = cljs.core.chunk_first(seq__35424_35965__$1);
var G__35967 = cljs.core.chunk_rest(seq__35424_35965__$1);
var G__35968 = c__4556__auto___35966;
var G__35969 = cljs.core.count(c__4556__auto___35966);
var G__35970 = (0);
seq__35424_35951 = G__35967;
chunk__35426_35952 = G__35968;
count__35427_35953 = G__35969;
i__35428_35954 = G__35970;
continue;
} else {
var child_35971 = cljs.core.first(seq__35424_35965__$1);
if(cljs.core.truth_(child_35971)){
node.appendChild(child_35971);


var G__35972 = cljs.core.next(seq__35424_35965__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__35424_35951 = G__35972;
chunk__35426_35952 = G__35973;
count__35427_35953 = G__35974;
i__35428_35954 = G__35975;
continue;
} else {
var G__35976 = cljs.core.next(seq__35424_35965__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35424_35951 = G__35976;
chunk__35426_35952 = G__35977;
count__35427_35953 = G__35978;
i__35428_35954 = G__35979;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35950);
}
}


var G__35980 = seq__35391_35944;
var G__35981 = chunk__35393_35945;
var G__35982 = count__35394_35946;
var G__35983 = (i__35395_35947 + (1));
seq__35391_35944 = G__35980;
chunk__35393_35945 = G__35981;
count__35394_35946 = G__35982;
i__35395_35947 = G__35983;
continue;
} else {
var G__35984 = seq__35391_35944;
var G__35985 = chunk__35393_35945;
var G__35986 = count__35394_35946;
var G__35987 = (i__35395_35947 + (1));
seq__35391_35944 = G__35984;
chunk__35393_35945 = G__35985;
count__35394_35946 = G__35986;
i__35395_35947 = G__35987;
continue;
}
} else {
var temp__5735__auto___35989 = cljs.core.seq(seq__35391_35944);
if(temp__5735__auto___35989){
var seq__35391_35991__$1 = temp__5735__auto___35989;
if(cljs.core.chunked_seq_QMARK_(seq__35391_35991__$1)){
var c__4556__auto___35992 = cljs.core.chunk_first(seq__35391_35991__$1);
var G__35993 = cljs.core.chunk_rest(seq__35391_35991__$1);
var G__35994 = c__4556__auto___35992;
var G__35995 = cljs.core.count(c__4556__auto___35992);
var G__35996 = (0);
seq__35391_35944 = G__35993;
chunk__35393_35945 = G__35994;
count__35394_35946 = G__35995;
i__35395_35947 = G__35996;
continue;
} else {
var child_struct_35997 = cljs.core.first(seq__35391_35991__$1);
if((!((child_struct_35997 == null)))){
if(typeof child_struct_35997 === 'string'){
var text_35998 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35998),child_struct_35997].join(''));
} else {
var children_35999 = shadow.dom.svg_node(child_struct_35997);
if(cljs.core.seq_QMARK_(children_35999)){
var seq__35430_36000 = cljs.core.seq(children_35999);
var chunk__35432_36001 = null;
var count__35433_36002 = (0);
var i__35434_36003 = (0);
while(true){
if((i__35434_36003 < count__35433_36002)){
var child_36004 = chunk__35432_36001.cljs$core$IIndexed$_nth$arity$2(null,i__35434_36003);
if(cljs.core.truth_(child_36004)){
node.appendChild(child_36004);


var G__36005 = seq__35430_36000;
var G__36006 = chunk__35432_36001;
var G__36007 = count__35433_36002;
var G__36008 = (i__35434_36003 + (1));
seq__35430_36000 = G__36005;
chunk__35432_36001 = G__36006;
count__35433_36002 = G__36007;
i__35434_36003 = G__36008;
continue;
} else {
var G__36010 = seq__35430_36000;
var G__36011 = chunk__35432_36001;
var G__36012 = count__35433_36002;
var G__36013 = (i__35434_36003 + (1));
seq__35430_36000 = G__36010;
chunk__35432_36001 = G__36011;
count__35433_36002 = G__36012;
i__35434_36003 = G__36013;
continue;
}
} else {
var temp__5735__auto___36014__$1 = cljs.core.seq(seq__35430_36000);
if(temp__5735__auto___36014__$1){
var seq__35430_36015__$1 = temp__5735__auto___36014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35430_36015__$1)){
var c__4556__auto___36016 = cljs.core.chunk_first(seq__35430_36015__$1);
var G__36017 = cljs.core.chunk_rest(seq__35430_36015__$1);
var G__36018 = c__4556__auto___36016;
var G__36019 = cljs.core.count(c__4556__auto___36016);
var G__36020 = (0);
seq__35430_36000 = G__36017;
chunk__35432_36001 = G__36018;
count__35433_36002 = G__36019;
i__35434_36003 = G__36020;
continue;
} else {
var child_36021 = cljs.core.first(seq__35430_36015__$1);
if(cljs.core.truth_(child_36021)){
node.appendChild(child_36021);


var G__36022 = cljs.core.next(seq__35430_36015__$1);
var G__36023 = null;
var G__36024 = (0);
var G__36025 = (0);
seq__35430_36000 = G__36022;
chunk__35432_36001 = G__36023;
count__35433_36002 = G__36024;
i__35434_36003 = G__36025;
continue;
} else {
var G__36030 = cljs.core.next(seq__35430_36015__$1);
var G__36031 = null;
var G__36032 = (0);
var G__36033 = (0);
seq__35430_36000 = G__36030;
chunk__35432_36001 = G__36031;
count__35433_36002 = G__36032;
i__35434_36003 = G__36033;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35999);
}
}


var G__36034 = cljs.core.next(seq__35391_35991__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35391_35944 = G__36034;
chunk__35393_35945 = G__36035;
count__35394_35946 = G__36036;
i__35395_35947 = G__36037;
continue;
} else {
var G__36039 = cljs.core.next(seq__35391_35991__$1);
var G__36040 = null;
var G__36041 = (0);
var G__36042 = (0);
seq__35391_35944 = G__36039;
chunk__35393_35945 = G__36040;
count__35394_35946 = G__36041;
i__35395_35947 = G__36042;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36044 = arguments.length;
var i__4737__auto___36045 = (0);
while(true){
if((i__4737__auto___36045 < len__4736__auto___36044)){
args__4742__auto__.push((arguments[i__4737__auto___36045]));

var G__36046 = (i__4737__auto___36045 + (1));
i__4737__auto___36045 = G__36046;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35436){
var G__35437 = cljs.core.first(seq35436);
var seq35436__$1 = cljs.core.next(seq35436);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35437,seq35436__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35439 = arguments.length;
switch (G__35439) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33210__auto___36052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_35456){
var state_val_35457 = (state_35456[(1)]);
if((state_val_35457 === (1))){
var state_35456__$1 = state_35456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35456__$1,(2),once_or_cleanup);
} else {
if((state_val_35457 === (2))){
var inst_35452 = (state_35456[(2)]);
var inst_35454 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35456__$1 = (function (){var statearr_35458 = state_35456;
(statearr_35458[(7)] = inst_35452);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35456__$1,inst_35454);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33175__auto__ = null;
var shadow$dom$state_machine__33175__auto____0 = (function (){
var statearr_35461 = [null,null,null,null,null,null,null,null];
(statearr_35461[(0)] = shadow$dom$state_machine__33175__auto__);

(statearr_35461[(1)] = (1));

return statearr_35461;
});
var shadow$dom$state_machine__33175__auto____1 = (function (state_35456){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_35456);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e35463){var ex__33178__auto__ = e35463;
var statearr_35464_36053 = state_35456;
(statearr_35464_36053[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_35456[(4)]))){
var statearr_35465_36054 = state_35456;
(statearr_35465_36054[(1)] = cljs.core.first((state_35456[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_35456;
state_35456 = G__36055;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
shadow$dom$state_machine__33175__auto__ = function(state_35456){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33175__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33175__auto____1.call(this,state_35456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33175__auto____0;
shadow$dom$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33175__auto____1;
return shadow$dom$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_35467 = f__33211__auto__();
(statearr_35467[(6)] = c__33210__auto___36052);

return statearr_35467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
