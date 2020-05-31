goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37237 = arguments.length;
var i__4737__auto___37238 = (0);
while(true){
if((i__4737__auto___37238 < len__4736__auto___37237)){
args__4742__auto__.push((arguments[i__4737__auto___37238]));

var G__37239 = (i__4737__auto___37238 + (1));
i__4737__auto___37238 = G__37239;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36960){
var G__36962 = cljs.core.first(seq36960);
var seq36960__$1 = cljs.core.next(seq36960);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36962,seq36960__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36981 = cljs.core.seq(sources);
var chunk__36982 = null;
var count__36983 = (0);
var i__36984 = (0);
while(true){
if((i__36984 < count__36983)){
var map__36993 = chunk__36982.cljs$core$IIndexed$_nth$arity$2(null,i__36984);
var map__36993__$1 = (((((!((map__36993 == null))))?(((((map__36993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36993):map__36993);
var src = map__36993__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36995){var e_37245 = e36995;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37245);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37245.message)].join('')));
}

var G__37246 = seq__36981;
var G__37247 = chunk__36982;
var G__37248 = count__36983;
var G__37249 = (i__36984 + (1));
seq__36981 = G__37246;
chunk__36982 = G__37247;
count__36983 = G__37248;
i__36984 = G__37249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36981);
if(temp__5735__auto__){
var seq__36981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36981__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36981__$1);
var G__37250 = cljs.core.chunk_rest(seq__36981__$1);
var G__37251 = c__4556__auto__;
var G__37252 = cljs.core.count(c__4556__auto__);
var G__37253 = (0);
seq__36981 = G__37250;
chunk__36982 = G__37251;
count__36983 = G__37252;
i__36984 = G__37253;
continue;
} else {
var map__36998 = cljs.core.first(seq__36981__$1);
var map__36998__$1 = (((((!((map__36998 == null))))?(((((map__36998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36998):map__36998);
var src = map__36998__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37005){var e_37254 = e37005;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37254);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37254.message)].join('')));
}

var G__37255 = cljs.core.next(seq__36981__$1);
var G__37256 = null;
var G__37257 = (0);
var G__37258 = (0);
seq__36981 = G__37255;
chunk__36982 = G__37256;
count__36983 = G__37257;
i__36984 = G__37258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37007 = cljs.core.seq(js_requires);
var chunk__37008 = null;
var count__37009 = (0);
var i__37010 = (0);
while(true){
if((i__37010 < count__37009)){
var js_ns = chunk__37008.cljs$core$IIndexed$_nth$arity$2(null,i__37010);
var require_str_37262 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37262);


var G__37263 = seq__37007;
var G__37264 = chunk__37008;
var G__37265 = count__37009;
var G__37266 = (i__37010 + (1));
seq__37007 = G__37263;
chunk__37008 = G__37264;
count__37009 = G__37265;
i__37010 = G__37266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37007);
if(temp__5735__auto__){
var seq__37007__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37007__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37007__$1);
var G__37267 = cljs.core.chunk_rest(seq__37007__$1);
var G__37268 = c__4556__auto__;
var G__37269 = cljs.core.count(c__4556__auto__);
var G__37270 = (0);
seq__37007 = G__37267;
chunk__37008 = G__37268;
count__37009 = G__37269;
i__37010 = G__37270;
continue;
} else {
var js_ns = cljs.core.first(seq__37007__$1);
var require_str_37271 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37271);


var G__37272 = cljs.core.next(seq__37007__$1);
var G__37273 = null;
var G__37274 = (0);
var G__37275 = (0);
seq__37007 = G__37272;
chunk__37008 = G__37273;
count__37009 = G__37274;
i__37010 = G__37275;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37015 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37015) : callback.call(null,G__37015));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37017){
var map__37018 = p__37017;
var map__37018__$1 = (((((!((map__37018 == null))))?(((((map__37018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37018):map__37018);
var msg = map__37018__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37020(s__37021){
return (new cljs.core.LazySeq(null,(function (){
var s__37021__$1 = s__37021;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37021__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37026 = cljs.core.first(xs__6292__auto__);
var map__37026__$1 = (((((!((map__37026 == null))))?(((((map__37026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37026):map__37026);
var src = map__37026__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37026__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37021__$1,map__37026,map__37026__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37018,map__37018__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37020_$_iter__37022(s__37023){
return (new cljs.core.LazySeq(null,((function (s__37021__$1,map__37026,map__37026__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37018,map__37018__$1,msg,info,reload_info){
return (function (){
var s__37023__$1 = s__37023;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37023__$1);
if(temp__5735__auto____$1){
var s__37023__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37023__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37023__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37025 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37024 = (0);
while(true){
if((i__37024 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37024);
cljs.core.chunk_append(b__37025,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37279 = (i__37024 + (1));
i__37024 = G__37279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37025),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37020_$_iter__37022(cljs.core.chunk_rest(s__37023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37025),null);
}
} else {
var warning = cljs.core.first(s__37023__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37020_$_iter__37022(cljs.core.rest(s__37023__$2)));
}
} else {
return null;
}
break;
}
});})(s__37021__$1,map__37026,map__37026__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37018,map__37018__$1,msg,info,reload_info))
,null,null));
});})(s__37021__$1,map__37026,map__37026__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37018,map__37018__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37020(cljs.core.rest(s__37021__$1)));
} else {
var G__37280 = cljs.core.rest(s__37021__$1);
s__37021__$1 = G__37280;
continue;
}
} else {
var G__37281 = cljs.core.rest(s__37021__$1);
s__37021__$1 = G__37281;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__37030_37282 = cljs.core.seq(warnings);
var chunk__37031_37283 = null;
var count__37032_37284 = (0);
var i__37033_37285 = (0);
while(true){
if((i__37033_37285 < count__37032_37284)){
var map__37038_37286 = chunk__37031_37283.cljs$core$IIndexed$_nth$arity$2(null,i__37033_37285);
var map__37038_37287__$1 = (((((!((map__37038_37286 == null))))?(((((map__37038_37286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038_37286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37038_37286):map__37038_37286);
var w_37288 = map__37038_37287__$1;
var msg_37289__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37287__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37287__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37287__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37038_37287__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37292)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37290),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37291),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37289__$1)].join(''));


var G__37293 = seq__37030_37282;
var G__37294 = chunk__37031_37283;
var G__37295 = count__37032_37284;
var G__37296 = (i__37033_37285 + (1));
seq__37030_37282 = G__37293;
chunk__37031_37283 = G__37294;
count__37032_37284 = G__37295;
i__37033_37285 = G__37296;
continue;
} else {
var temp__5735__auto___37297 = cljs.core.seq(seq__37030_37282);
if(temp__5735__auto___37297){
var seq__37030_37298__$1 = temp__5735__auto___37297;
if(cljs.core.chunked_seq_QMARK_(seq__37030_37298__$1)){
var c__4556__auto___37299 = cljs.core.chunk_first(seq__37030_37298__$1);
var G__37300 = cljs.core.chunk_rest(seq__37030_37298__$1);
var G__37301 = c__4556__auto___37299;
var G__37302 = cljs.core.count(c__4556__auto___37299);
var G__37303 = (0);
seq__37030_37282 = G__37300;
chunk__37031_37283 = G__37301;
count__37032_37284 = G__37302;
i__37033_37285 = G__37303;
continue;
} else {
var map__37041_37304 = cljs.core.first(seq__37030_37298__$1);
var map__37041_37305__$1 = (((((!((map__37041_37304 == null))))?(((((map__37041_37304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37041_37304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37041_37304):map__37041_37304);
var w_37306 = map__37041_37305__$1;
var msg_37307__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041_37305__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041_37305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041_37305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041_37305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37310)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37308),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37309),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37307__$1)].join(''));


var G__37311 = cljs.core.next(seq__37030_37298__$1);
var G__37312 = null;
var G__37313 = (0);
var G__37314 = (0);
seq__37030_37282 = G__37311;
chunk__37031_37283 = G__37312;
count__37032_37284 = G__37313;
i__37033_37285 = G__37314;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__37016_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37016_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37051){
var map__37052 = p__37051;
var map__37052__$1 = (((((!((map__37052 == null))))?(((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37052):map__37052);
var msg = map__37052__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37054 = cljs.core.seq(updates);
var chunk__37056 = null;
var count__37057 = (0);
var i__37058 = (0);
while(true){
if((i__37058 < count__37057)){
var path = chunk__37056.cljs$core$IIndexed$_nth$arity$2(null,i__37058);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37102_37318 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37105_37319 = null;
var count__37106_37320 = (0);
var i__37107_37321 = (0);
while(true){
if((i__37107_37321 < count__37106_37320)){
var node_37324 = chunk__37105_37319.cljs$core$IIndexed$_nth$arity$2(null,i__37107_37321);
var path_match_37326 = shadow.cljs.devtools.client.browser.match_paths(node_37324.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37326)){
var new_link_37327 = (function (){var G__37113 = node_37324.cloneNode(true);
G__37113.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37113;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37326], 0));

goog.dom.insertSiblingAfter(new_link_37327,node_37324);

goog.dom.removeNode(node_37324);


var G__37328 = seq__37102_37318;
var G__37329 = chunk__37105_37319;
var G__37330 = count__37106_37320;
var G__37331 = (i__37107_37321 + (1));
seq__37102_37318 = G__37328;
chunk__37105_37319 = G__37329;
count__37106_37320 = G__37330;
i__37107_37321 = G__37331;
continue;
} else {
var G__37332 = seq__37102_37318;
var G__37333 = chunk__37105_37319;
var G__37334 = count__37106_37320;
var G__37335 = (i__37107_37321 + (1));
seq__37102_37318 = G__37332;
chunk__37105_37319 = G__37333;
count__37106_37320 = G__37334;
i__37107_37321 = G__37335;
continue;
}
} else {
var temp__5735__auto___37336 = cljs.core.seq(seq__37102_37318);
if(temp__5735__auto___37336){
var seq__37102_37337__$1 = temp__5735__auto___37336;
if(cljs.core.chunked_seq_QMARK_(seq__37102_37337__$1)){
var c__4556__auto___37338 = cljs.core.chunk_first(seq__37102_37337__$1);
var G__37339 = cljs.core.chunk_rest(seq__37102_37337__$1);
var G__37340 = c__4556__auto___37338;
var G__37341 = cljs.core.count(c__4556__auto___37338);
var G__37342 = (0);
seq__37102_37318 = G__37339;
chunk__37105_37319 = G__37340;
count__37106_37320 = G__37341;
i__37107_37321 = G__37342;
continue;
} else {
var node_37343 = cljs.core.first(seq__37102_37337__$1);
var path_match_37344 = shadow.cljs.devtools.client.browser.match_paths(node_37343.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37344)){
var new_link_37345 = (function (){var G__37114 = node_37343.cloneNode(true);
G__37114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37344),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37114;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37344], 0));

goog.dom.insertSiblingAfter(new_link_37345,node_37343);

goog.dom.removeNode(node_37343);


var G__37346 = cljs.core.next(seq__37102_37337__$1);
var G__37347 = null;
var G__37348 = (0);
var G__37349 = (0);
seq__37102_37318 = G__37346;
chunk__37105_37319 = G__37347;
count__37106_37320 = G__37348;
i__37107_37321 = G__37349;
continue;
} else {
var G__37350 = cljs.core.next(seq__37102_37337__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37102_37318 = G__37350;
chunk__37105_37319 = G__37351;
count__37106_37320 = G__37352;
i__37107_37321 = G__37353;
continue;
}
}
} else {
}
}
break;
}


var G__37354 = seq__37054;
var G__37355 = chunk__37056;
var G__37356 = count__37057;
var G__37357 = (i__37058 + (1));
seq__37054 = G__37354;
chunk__37056 = G__37355;
count__37057 = G__37356;
i__37058 = G__37357;
continue;
} else {
var G__37359 = seq__37054;
var G__37360 = chunk__37056;
var G__37361 = count__37057;
var G__37362 = (i__37058 + (1));
seq__37054 = G__37359;
chunk__37056 = G__37360;
count__37057 = G__37361;
i__37058 = G__37362;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37054);
if(temp__5735__auto__){
var seq__37054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37054__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37054__$1);
var G__37363 = cljs.core.chunk_rest(seq__37054__$1);
var G__37364 = c__4556__auto__;
var G__37365 = cljs.core.count(c__4556__auto__);
var G__37366 = (0);
seq__37054 = G__37363;
chunk__37056 = G__37364;
count__37057 = G__37365;
i__37058 = G__37366;
continue;
} else {
var path = cljs.core.first(seq__37054__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37116_37367 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37119_37368 = null;
var count__37120_37369 = (0);
var i__37121_37370 = (0);
while(true){
if((i__37121_37370 < count__37120_37369)){
var node_37371 = chunk__37119_37368.cljs$core$IIndexed$_nth$arity$2(null,i__37121_37370);
var path_match_37372 = shadow.cljs.devtools.client.browser.match_paths(node_37371.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37372)){
var new_link_37373 = (function (){var G__37129 = node_37371.cloneNode(true);
G__37129.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37372),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37129;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37372], 0));

goog.dom.insertSiblingAfter(new_link_37373,node_37371);

goog.dom.removeNode(node_37371);


var G__37374 = seq__37116_37367;
var G__37375 = chunk__37119_37368;
var G__37376 = count__37120_37369;
var G__37377 = (i__37121_37370 + (1));
seq__37116_37367 = G__37374;
chunk__37119_37368 = G__37375;
count__37120_37369 = G__37376;
i__37121_37370 = G__37377;
continue;
} else {
var G__37379 = seq__37116_37367;
var G__37380 = chunk__37119_37368;
var G__37381 = count__37120_37369;
var G__37382 = (i__37121_37370 + (1));
seq__37116_37367 = G__37379;
chunk__37119_37368 = G__37380;
count__37120_37369 = G__37381;
i__37121_37370 = G__37382;
continue;
}
} else {
var temp__5735__auto___37383__$1 = cljs.core.seq(seq__37116_37367);
if(temp__5735__auto___37383__$1){
var seq__37116_37384__$1 = temp__5735__auto___37383__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37116_37384__$1)){
var c__4556__auto___37385 = cljs.core.chunk_first(seq__37116_37384__$1);
var G__37386 = cljs.core.chunk_rest(seq__37116_37384__$1);
var G__37387 = c__4556__auto___37385;
var G__37388 = cljs.core.count(c__4556__auto___37385);
var G__37389 = (0);
seq__37116_37367 = G__37386;
chunk__37119_37368 = G__37387;
count__37120_37369 = G__37388;
i__37121_37370 = G__37389;
continue;
} else {
var node_37390 = cljs.core.first(seq__37116_37384__$1);
var path_match_37391 = shadow.cljs.devtools.client.browser.match_paths(node_37390.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37391)){
var new_link_37392 = (function (){var G__37134 = node_37390.cloneNode(true);
G__37134.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37391),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37134;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37391], 0));

goog.dom.insertSiblingAfter(new_link_37392,node_37390);

goog.dom.removeNode(node_37390);


var G__37393 = cljs.core.next(seq__37116_37384__$1);
var G__37394 = null;
var G__37395 = (0);
var G__37396 = (0);
seq__37116_37367 = G__37393;
chunk__37119_37368 = G__37394;
count__37120_37369 = G__37395;
i__37121_37370 = G__37396;
continue;
} else {
var G__37397 = cljs.core.next(seq__37116_37384__$1);
var G__37398 = null;
var G__37399 = (0);
var G__37400 = (0);
seq__37116_37367 = G__37397;
chunk__37119_37368 = G__37398;
count__37120_37369 = G__37399;
i__37121_37370 = G__37400;
continue;
}
}
} else {
}
}
break;
}


var G__37401 = cljs.core.next(seq__37054__$1);
var G__37402 = null;
var G__37403 = (0);
var G__37404 = (0);
seq__37054 = G__37401;
chunk__37056 = G__37402;
count__37057 = G__37403;
i__37058 = G__37404;
continue;
} else {
var G__37405 = cljs.core.next(seq__37054__$1);
var G__37406 = null;
var G__37407 = (0);
var G__37408 = (0);
seq__37054 = G__37405;
chunk__37056 = G__37406;
count__37057 = G__37407;
i__37058 = G__37408;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37166){
var map__37167 = p__37166;
var map__37167__$1 = (((((!((map__37167 == null))))?(((((map__37167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37167):map__37167);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37167__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37170,done){
var map__37175 = p__37170;
var map__37175__$1 = (((((!((map__37175 == null))))?(((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37175):map__37175);
var msg = map__37175__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37191){
var map__37192 = p__37191;
var map__37192__$1 = (((((!((map__37192 == null))))?(((((map__37192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37192):map__37192);
var src = map__37192__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37202){var e = e37202;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37207,done){
var map__37208 = p__37207;
var map__37208__$1 = (((((!((map__37208 == null))))?(((((map__37208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37208):map__37208);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37208__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37212){
var map__37213 = p__37212;
var map__37213__$1 = (((((!((map__37213 == null))))?(((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37213):map__37213);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37219,done){
var map__37220 = p__37219;
var map__37220__$1 = (((((!((map__37220 == null))))?(((((map__37220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37220):map__37220);
var msg = map__37220__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37224_37413 = type;
var G__37224_37414__$1 = (((G__37224_37413 instanceof cljs.core.Keyword))?G__37224_37413.fqn:null);
switch (G__37224_37414__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__37228 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__37228.cljs$core$IFn$_invoke$arity$1 ? fexpr__37228.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__37228.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

shadow.cljs.devtools.client.env.patch_goog_BANG_();

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e37229){var e = e37229;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37425 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37425)){
var s_37426 = temp__5735__auto___37425;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_37426.onclose = (function (e){
return null;
}));

s_37426.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
