goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33268 = arguments.length;
switch (G__33268) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33269 = (function (f,blockable,meta33270){
this.f = f;
this.blockable = blockable;
this.meta33270 = meta33270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33271,meta33270__$1){
var self__ = this;
var _33271__$1 = this;
return (new cljs.core.async.t_cljs$core$async33269(self__.f,self__.blockable,meta33270__$1));
}));

(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33271){
var self__ = this;
var _33271__$1 = this;
return self__.meta33270;
}));

(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33270","meta33270",-79596268,null)], null);
}));

(cljs.core.async.t_cljs$core$async33269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33269");

(cljs.core.async.t_cljs$core$async33269.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33269.
 */
cljs.core.async.__GT_t_cljs$core$async33269 = (function cljs$core$async$__GT_t_cljs$core$async33269(f__$1,blockable__$1,meta33270){
return (new cljs.core.async.t_cljs$core$async33269(f__$1,blockable__$1,meta33270));
});

}

return (new cljs.core.async.t_cljs$core$async33269(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33276 = arguments.length;
switch (G__33276) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33278 = arguments.length;
switch (G__33278) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34764 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34764) : fn1.call(null,val_34764));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34764) : fn1.call(null,val_34764));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33280 = arguments.length;
switch (G__33280) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34777 = n;
var x_34778 = (0);
while(true){
if((x_34778 < n__4613__auto___34777)){
(a[x_34778] = x_34778);

var G__34779 = (x_34778 + (1));
x_34778 = G__34779;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33281 = (function (flag,meta33282){
this.flag = flag;
this.meta33282 = meta33282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33283,meta33282__$1){
var self__ = this;
var _33283__$1 = this;
return (new cljs.core.async.t_cljs$core$async33281(self__.flag,meta33282__$1));
}));

(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33283){
var self__ = this;
var _33283__$1 = this;
return self__.meta33282;
}));

(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33282","meta33282",1038774972,null)], null);
}));

(cljs.core.async.t_cljs$core$async33281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33281");

(cljs.core.async.t_cljs$core$async33281.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33281.
 */
cljs.core.async.__GT_t_cljs$core$async33281 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33281(flag__$1,meta33282){
return (new cljs.core.async.t_cljs$core$async33281(flag__$1,meta33282));
});

}

return (new cljs.core.async.t_cljs$core$async33281(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33284 = (function (flag,cb,meta33285){
this.flag = flag;
this.cb = cb;
this.meta33285 = meta33285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33286,meta33285__$1){
var self__ = this;
var _33286__$1 = this;
return (new cljs.core.async.t_cljs$core$async33284(self__.flag,self__.cb,meta33285__$1));
}));

(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33286){
var self__ = this;
var _33286__$1 = this;
return self__.meta33285;
}));

(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33285","meta33285",-1040744685,null)], null);
}));

(cljs.core.async.t_cljs$core$async33284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33284");

(cljs.core.async.t_cljs$core$async33284.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33284.
 */
cljs.core.async.__GT_t_cljs$core$async33284 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33284(flag__$1,cb__$1,meta33285){
return (new cljs.core.async.t_cljs$core$async33284(flag__$1,cb__$1,meta33285));
});

}

return (new cljs.core.async.t_cljs$core$async33284(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33287_SHARP_){
var G__33289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33287_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33289) : fret.call(null,G__33289));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33288_SHARP_){
var G__33290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33288_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33290) : fret.call(null,G__33290));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34798 = (i + (1));
i = G__34798;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34813 = arguments.length;
var i__4737__auto___34814 = (0);
while(true){
if((i__4737__auto___34814 < len__4736__auto___34813)){
args__4742__auto__.push((arguments[i__4737__auto___34814]));

var G__34816 = (i__4737__auto___34814 + (1));
i__4737__auto___34814 = G__34816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33293){
var map__33294 = p__33293;
var map__33294__$1 = (((((!((map__33294 == null))))?(((((map__33294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33294):map__33294);
var opts = map__33294__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33291){
var G__33292 = cljs.core.first(seq33291);
var seq33291__$1 = cljs.core.next(seq33291);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33292,seq33291__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33297 = arguments.length;
switch (G__33297) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33210__auto___34833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33321){
var state_val_33322 = (state_33321[(1)]);
if((state_val_33322 === (7))){
var inst_33317 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33323_34834 = state_33321__$1;
(statearr_33323_34834[(2)] = inst_33317);

(statearr_33323_34834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (1))){
var state_33321__$1 = state_33321;
var statearr_33324_34835 = state_33321__$1;
(statearr_33324_34835[(2)] = null);

(statearr_33324_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (4))){
var inst_33300 = (state_33321[(7)]);
var inst_33300__$1 = (state_33321[(2)]);
var inst_33301 = (inst_33300__$1 == null);
var state_33321__$1 = (function (){var statearr_33325 = state_33321;
(statearr_33325[(7)] = inst_33300__$1);

return statearr_33325;
})();
if(cljs.core.truth_(inst_33301)){
var statearr_33326_34836 = state_33321__$1;
(statearr_33326_34836[(1)] = (5));

} else {
var statearr_33327_34837 = state_33321__$1;
(statearr_33327_34837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (13))){
var state_33321__$1 = state_33321;
var statearr_33328_34838 = state_33321__$1;
(statearr_33328_34838[(2)] = null);

(statearr_33328_34838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (6))){
var inst_33300 = (state_33321[(7)]);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33321__$1,(11),to,inst_33300);
} else {
if((state_val_33322 === (3))){
var inst_33319 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33321__$1,inst_33319);
} else {
if((state_val_33322 === (12))){
var state_33321__$1 = state_33321;
var statearr_33329_34839 = state_33321__$1;
(statearr_33329_34839[(2)] = null);

(statearr_33329_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (2))){
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33321__$1,(4),from);
} else {
if((state_val_33322 === (11))){
var inst_33310 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
if(cljs.core.truth_(inst_33310)){
var statearr_33330_34840 = state_33321__$1;
(statearr_33330_34840[(1)] = (12));

} else {
var statearr_33331_34841 = state_33321__$1;
(statearr_33331_34841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (9))){
var state_33321__$1 = state_33321;
var statearr_33332_34842 = state_33321__$1;
(statearr_33332_34842[(2)] = null);

(statearr_33332_34842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (5))){
var state_33321__$1 = state_33321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33333_34843 = state_33321__$1;
(statearr_33333_34843[(1)] = (8));

} else {
var statearr_33334_34844 = state_33321__$1;
(statearr_33334_34844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (14))){
var inst_33315 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33335_34845 = state_33321__$1;
(statearr_33335_34845[(2)] = inst_33315);

(statearr_33335_34845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (10))){
var inst_33307 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33336_34846 = state_33321__$1;
(statearr_33336_34846[(2)] = inst_33307);

(statearr_33336_34846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (8))){
var inst_33304 = cljs.core.async.close_BANG_(to);
var state_33321__$1 = state_33321;
var statearr_33337_34847 = state_33321__$1;
(statearr_33337_34847[(2)] = inst_33304);

(statearr_33337_34847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_33338 = [null,null,null,null,null,null,null,null];
(statearr_33338[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_33338[(1)] = (1));

return statearr_33338;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_33321){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33321);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33339){var ex__33178__auto__ = e33339;
var statearr_33340_34848 = state_33321;
(statearr_33340_34848[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33321[(4)]))){
var statearr_33341_34851 = state_33321;
(statearr_33341_34851[(1)] = cljs.core.first((state_33321[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34852 = state_33321;
state_33321 = G__34852;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_33321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_33321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33342 = f__33211__auto__();
(statearr_33342[(6)] = c__33210__auto___34833);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33343){
var vec__33344 = p__33343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(1),null);
var job = vec__33344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33210__auto___34857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33351){
var state_val_33352 = (state_33351[(1)]);
if((state_val_33352 === (1))){
var state_33351__$1 = state_33351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33351__$1,(2),res,v);
} else {
if((state_val_33352 === (2))){
var inst_33348 = (state_33351[(2)]);
var inst_33349 = cljs.core.async.close_BANG_(res);
var state_33351__$1 = (function (){var statearr_33353 = state_33351;
(statearr_33353[(7)] = inst_33348);

return statearr_33353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33351__$1,inst_33349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_33354 = [null,null,null,null,null,null,null,null];
(statearr_33354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__);

(statearr_33354[(1)] = (1));

return statearr_33354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1 = (function (state_33351){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33351);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33355){var ex__33178__auto__ = e33355;
var statearr_33356_34859 = state_33351;
(statearr_33356_34859[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33351[(4)]))){
var statearr_33357_34860 = state_33351;
(statearr_33357_34860[(1)] = cljs.core.first((state_33351[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_33351;
state_33351 = G__34862;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = function(state_33351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1.call(this,state_33351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33358 = f__33211__auto__();
(statearr_33358[(6)] = c__33210__auto___34857);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33359){
var vec__33360 = p__33359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(1),null);
var job = vec__33360;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34864 = n;
var __34865 = (0);
while(true){
if((__34865 < n__4613__auto___34864)){
var G__33363_34866 = type;
var G__33363_34867__$1 = (((G__33363_34866 instanceof cljs.core.Keyword))?G__33363_34866.fqn:null);
switch (G__33363_34867__$1) {
case "compute":
var c__33210__auto___34869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34865,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = ((function (__34865,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function (state_33376){
var state_val_33377 = (state_33376[(1)]);
if((state_val_33377 === (1))){
var state_33376__$1 = state_33376;
var statearr_33378_34870 = state_33376__$1;
(statearr_33378_34870[(2)] = null);

(statearr_33378_34870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (2))){
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33376__$1,(4),jobs);
} else {
if((state_val_33377 === (3))){
var inst_33374 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33376__$1,inst_33374);
} else {
if((state_val_33377 === (4))){
var inst_33366 = (state_33376[(2)]);
var inst_33367 = process(inst_33366);
var state_33376__$1 = state_33376;
if(cljs.core.truth_(inst_33367)){
var statearr_33379_34875 = state_33376__$1;
(statearr_33379_34875[(1)] = (5));

} else {
var statearr_33380_34876 = state_33376__$1;
(statearr_33380_34876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (5))){
var state_33376__$1 = state_33376;
var statearr_33381_34877 = state_33376__$1;
(statearr_33381_34877[(2)] = null);

(statearr_33381_34877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (6))){
var state_33376__$1 = state_33376;
var statearr_33382_34880 = state_33376__$1;
(statearr_33382_34880[(2)] = null);

(statearr_33382_34880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (7))){
var inst_33372 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33383_34883 = state_33376__$1;
(statearr_33383_34883[(2)] = inst_33372);

(statearr_33383_34883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34865,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
;
return ((function (__34865,switch__33174__auto__,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_33384 = [null,null,null,null,null,null,null];
(statearr_33384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__);

(statearr_33384[(1)] = (1));

return statearr_33384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1 = (function (state_33376){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33376);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33385){var ex__33178__auto__ = e33385;
var statearr_33386_34886 = state_33376;
(statearr_33386_34886[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33376[(4)]))){
var statearr_33387_34887 = state_33376;
(statearr_33387_34887[(1)] = cljs.core.first((state_33376[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34888 = state_33376;
state_33376 = G__34888;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = function(state_33376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1.call(this,state_33376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__;
})()
;})(__34865,switch__33174__auto__,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
})();
var state__33212__auto__ = (function (){var statearr_33388 = f__33211__auto__();
(statearr_33388[(6)] = c__33210__auto___34869);

return statearr_33388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
});})(__34865,c__33210__auto___34869,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
);


break;
case "async":
var c__33210__auto___34890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34865,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = ((function (__34865,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function (state_33401){
var state_val_33402 = (state_33401[(1)]);
if((state_val_33402 === (1))){
var state_33401__$1 = state_33401;
var statearr_33403_34892 = state_33401__$1;
(statearr_33403_34892[(2)] = null);

(statearr_33403_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (2))){
var state_33401__$1 = state_33401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33401__$1,(4),jobs);
} else {
if((state_val_33402 === (3))){
var inst_33399 = (state_33401[(2)]);
var state_33401__$1 = state_33401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33401__$1,inst_33399);
} else {
if((state_val_33402 === (4))){
var inst_33391 = (state_33401[(2)]);
var inst_33392 = async(inst_33391);
var state_33401__$1 = state_33401;
if(cljs.core.truth_(inst_33392)){
var statearr_33404_34893 = state_33401__$1;
(statearr_33404_34893[(1)] = (5));

} else {
var statearr_33405_34894 = state_33401__$1;
(statearr_33405_34894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (5))){
var state_33401__$1 = state_33401;
var statearr_33406_34895 = state_33401__$1;
(statearr_33406_34895[(2)] = null);

(statearr_33406_34895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (6))){
var state_33401__$1 = state_33401;
var statearr_33407_34897 = state_33401__$1;
(statearr_33407_34897[(2)] = null);

(statearr_33407_34897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33402 === (7))){
var inst_33397 = (state_33401[(2)]);
var state_33401__$1 = state_33401;
var statearr_33408_34899 = state_33401__$1;
(statearr_33408_34899[(2)] = inst_33397);

(statearr_33408_34899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34865,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
;
return ((function (__34865,switch__33174__auto__,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null];
(statearr_33409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1 = (function (state_33401){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33401);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33410){var ex__33178__auto__ = e33410;
var statearr_33411_34900 = state_33401;
(statearr_33411_34900[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33401[(4)]))){
var statearr_33412_34902 = state_33401;
(statearr_33412_34902[(1)] = cljs.core.first((state_33401[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_33401;
state_33401 = G__34904;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = function(state_33401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1.call(this,state_33401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__;
})()
;})(__34865,switch__33174__auto__,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
})();
var state__33212__auto__ = (function (){var statearr_33413 = f__33211__auto__();
(statearr_33413[(6)] = c__33210__auto___34890);

return statearr_33413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
});})(__34865,c__33210__auto___34890,G__33363_34866,G__33363_34867__$1,n__4613__auto___34864,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33363_34867__$1)].join('')));

}

var G__34905 = (__34865 + (1));
__34865 = G__34905;
continue;
} else {
}
break;
}

var c__33210__auto___34906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33435){
var state_val_33436 = (state_33435[(1)]);
if((state_val_33436 === (7))){
var inst_33431 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
var statearr_33437_34907 = state_33435__$1;
(statearr_33437_34907[(2)] = inst_33431);

(statearr_33437_34907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (1))){
var state_33435__$1 = state_33435;
var statearr_33438_34908 = state_33435__$1;
(statearr_33438_34908[(2)] = null);

(statearr_33438_34908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (4))){
var inst_33416 = (state_33435[(7)]);
var inst_33416__$1 = (state_33435[(2)]);
var inst_33417 = (inst_33416__$1 == null);
var state_33435__$1 = (function (){var statearr_33439 = state_33435;
(statearr_33439[(7)] = inst_33416__$1);

return statearr_33439;
})();
if(cljs.core.truth_(inst_33417)){
var statearr_33440_34909 = state_33435__$1;
(statearr_33440_34909[(1)] = (5));

} else {
var statearr_33441_34910 = state_33435__$1;
(statearr_33441_34910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (6))){
var inst_33421 = (state_33435[(8)]);
var inst_33416 = (state_33435[(7)]);
var inst_33421__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33423 = [inst_33416,inst_33421__$1];
var inst_33424 = (new cljs.core.PersistentVector(null,2,(5),inst_33422,inst_33423,null));
var state_33435__$1 = (function (){var statearr_33442 = state_33435;
(statearr_33442[(8)] = inst_33421__$1);

return statearr_33442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33435__$1,(8),jobs,inst_33424);
} else {
if((state_val_33436 === (3))){
var inst_33433 = (state_33435[(2)]);
var state_33435__$1 = state_33435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33435__$1,inst_33433);
} else {
if((state_val_33436 === (2))){
var state_33435__$1 = state_33435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33435__$1,(4),from);
} else {
if((state_val_33436 === (9))){
var inst_33428 = (state_33435[(2)]);
var state_33435__$1 = (function (){var statearr_33443 = state_33435;
(statearr_33443[(9)] = inst_33428);

return statearr_33443;
})();
var statearr_33444_34913 = state_33435__$1;
(statearr_33444_34913[(2)] = null);

(statearr_33444_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (5))){
var inst_33419 = cljs.core.async.close_BANG_(jobs);
var state_33435__$1 = state_33435;
var statearr_33445_34914 = state_33435__$1;
(statearr_33445_34914[(2)] = inst_33419);

(statearr_33445_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33436 === (8))){
var inst_33421 = (state_33435[(8)]);
var inst_33426 = (state_33435[(2)]);
var state_33435__$1 = (function (){var statearr_33446 = state_33435;
(statearr_33446[(10)] = inst_33426);

return statearr_33446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33435__$1,(9),results,inst_33421);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_33447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__);

(statearr_33447[(1)] = (1));

return statearr_33447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1 = (function (state_33435){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33435);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33448){var ex__33178__auto__ = e33448;
var statearr_33449_34915 = state_33435;
(statearr_33449_34915[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33435[(4)]))){
var statearr_33450_34916 = state_33435;
(statearr_33450_34916[(1)] = cljs.core.first((state_33435[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34917 = state_33435;
state_33435 = G__34917;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = function(state_33435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1.call(this,state_33435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33451 = f__33211__auto__();
(statearr_33451[(6)] = c__33210__auto___34906);

return statearr_33451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


var c__33210__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33489){
var state_val_33490 = (state_33489[(1)]);
if((state_val_33490 === (7))){
var inst_33485 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33491_34918 = state_33489__$1;
(statearr_33491_34918[(2)] = inst_33485);

(statearr_33491_34918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (20))){
var state_33489__$1 = state_33489;
var statearr_33492_34919 = state_33489__$1;
(statearr_33492_34919[(2)] = null);

(statearr_33492_34919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (1))){
var state_33489__$1 = state_33489;
var statearr_33493_34921 = state_33489__$1;
(statearr_33493_34921[(2)] = null);

(statearr_33493_34921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (4))){
var inst_33454 = (state_33489[(7)]);
var inst_33454__$1 = (state_33489[(2)]);
var inst_33455 = (inst_33454__$1 == null);
var state_33489__$1 = (function (){var statearr_33494 = state_33489;
(statearr_33494[(7)] = inst_33454__$1);

return statearr_33494;
})();
if(cljs.core.truth_(inst_33455)){
var statearr_33495_34923 = state_33489__$1;
(statearr_33495_34923[(1)] = (5));

} else {
var statearr_33496_34924 = state_33489__$1;
(statearr_33496_34924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (15))){
var inst_33467 = (state_33489[(8)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33489__$1,(18),to,inst_33467);
} else {
if((state_val_33490 === (21))){
var inst_33480 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33497_34925 = state_33489__$1;
(statearr_33497_34925[(2)] = inst_33480);

(statearr_33497_34925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (13))){
var inst_33482 = (state_33489[(2)]);
var state_33489__$1 = (function (){var statearr_33498 = state_33489;
(statearr_33498[(9)] = inst_33482);

return statearr_33498;
})();
var statearr_33499_34926 = state_33489__$1;
(statearr_33499_34926[(2)] = null);

(statearr_33499_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (6))){
var inst_33454 = (state_33489[(7)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33489__$1,(11),inst_33454);
} else {
if((state_val_33490 === (17))){
var inst_33475 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
if(cljs.core.truth_(inst_33475)){
var statearr_33500_34927 = state_33489__$1;
(statearr_33500_34927[(1)] = (19));

} else {
var statearr_33501_34928 = state_33489__$1;
(statearr_33501_34928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (3))){
var inst_33487 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33489__$1,inst_33487);
} else {
if((state_val_33490 === (12))){
var inst_33464 = (state_33489[(10)]);
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33489__$1,(14),inst_33464);
} else {
if((state_val_33490 === (2))){
var state_33489__$1 = state_33489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33489__$1,(4),results);
} else {
if((state_val_33490 === (19))){
var state_33489__$1 = state_33489;
var statearr_33502_34929 = state_33489__$1;
(statearr_33502_34929[(2)] = null);

(statearr_33502_34929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (11))){
var inst_33464 = (state_33489[(2)]);
var state_33489__$1 = (function (){var statearr_33503 = state_33489;
(statearr_33503[(10)] = inst_33464);

return statearr_33503;
})();
var statearr_33504_34931 = state_33489__$1;
(statearr_33504_34931[(2)] = null);

(statearr_33504_34931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (9))){
var state_33489__$1 = state_33489;
var statearr_33505_34932 = state_33489__$1;
(statearr_33505_34932[(2)] = null);

(statearr_33505_34932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (5))){
var state_33489__$1 = state_33489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33506_34933 = state_33489__$1;
(statearr_33506_34933[(1)] = (8));

} else {
var statearr_33507_34934 = state_33489__$1;
(statearr_33507_34934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (14))){
var inst_33467 = (state_33489[(8)]);
var inst_33467__$1 = (state_33489[(2)]);
var inst_33468 = (inst_33467__$1 == null);
var inst_33469 = cljs.core.not(inst_33468);
var state_33489__$1 = (function (){var statearr_33508 = state_33489;
(statearr_33508[(8)] = inst_33467__$1);

return statearr_33508;
})();
if(inst_33469){
var statearr_33509_34935 = state_33489__$1;
(statearr_33509_34935[(1)] = (15));

} else {
var statearr_33510_34936 = state_33489__$1;
(statearr_33510_34936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (16))){
var state_33489__$1 = state_33489;
var statearr_33511_34941 = state_33489__$1;
(statearr_33511_34941[(2)] = false);

(statearr_33511_34941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (10))){
var inst_33461 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33512_34942 = state_33489__$1;
(statearr_33512_34942[(2)] = inst_33461);

(statearr_33512_34942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (18))){
var inst_33472 = (state_33489[(2)]);
var state_33489__$1 = state_33489;
var statearr_33513_34943 = state_33489__$1;
(statearr_33513_34943[(2)] = inst_33472);

(statearr_33513_34943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33490 === (8))){
var inst_33458 = cljs.core.async.close_BANG_(to);
var state_33489__$1 = state_33489;
var statearr_33514_34944 = state_33489__$1;
(statearr_33514_34944[(2)] = inst_33458);

(statearr_33514_34944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_33515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__);

(statearr_33515[(1)] = (1));

return statearr_33515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1 = (function (state_33489){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33489);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33516){var ex__33178__auto__ = e33516;
var statearr_33517_34945 = state_33489;
(statearr_33517_34945[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33489[(4)]))){
var statearr_33518_34946 = state_33489;
(statearr_33518_34946[(1)] = cljs.core.first((state_33489[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34947 = state_33489;
state_33489 = G__34947;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__ = function(state_33489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1.call(this,state_33489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33519 = f__33211__auto__();
(statearr_33519[(6)] = c__33210__auto__);

return statearr_33519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

return c__33210__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33521 = arguments.length;
switch (G__33521) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33523 = arguments.length;
switch (G__33523) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33525 = arguments.length;
switch (G__33525) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33210__auto___34957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33551){
var state_val_33552 = (state_33551[(1)]);
if((state_val_33552 === (7))){
var inst_33547 = (state_33551[(2)]);
var state_33551__$1 = state_33551;
var statearr_33553_34961 = state_33551__$1;
(statearr_33553_34961[(2)] = inst_33547);

(statearr_33553_34961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (1))){
var state_33551__$1 = state_33551;
var statearr_33554_34962 = state_33551__$1;
(statearr_33554_34962[(2)] = null);

(statearr_33554_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (4))){
var inst_33528 = (state_33551[(7)]);
var inst_33528__$1 = (state_33551[(2)]);
var inst_33529 = (inst_33528__$1 == null);
var state_33551__$1 = (function (){var statearr_33555 = state_33551;
(statearr_33555[(7)] = inst_33528__$1);

return statearr_33555;
})();
if(cljs.core.truth_(inst_33529)){
var statearr_33556_34966 = state_33551__$1;
(statearr_33556_34966[(1)] = (5));

} else {
var statearr_33557_34967 = state_33551__$1;
(statearr_33557_34967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (13))){
var state_33551__$1 = state_33551;
var statearr_33558_34968 = state_33551__$1;
(statearr_33558_34968[(2)] = null);

(statearr_33558_34968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (6))){
var inst_33528 = (state_33551[(7)]);
var inst_33534 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33528) : p.call(null,inst_33528));
var state_33551__$1 = state_33551;
if(cljs.core.truth_(inst_33534)){
var statearr_33559_34972 = state_33551__$1;
(statearr_33559_34972[(1)] = (9));

} else {
var statearr_33560_34973 = state_33551__$1;
(statearr_33560_34973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (3))){
var inst_33549 = (state_33551[(2)]);
var state_33551__$1 = state_33551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33551__$1,inst_33549);
} else {
if((state_val_33552 === (12))){
var state_33551__$1 = state_33551;
var statearr_33561_34974 = state_33551__$1;
(statearr_33561_34974[(2)] = null);

(statearr_33561_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (2))){
var state_33551__$1 = state_33551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33551__$1,(4),ch);
} else {
if((state_val_33552 === (11))){
var inst_33528 = (state_33551[(7)]);
var inst_33538 = (state_33551[(2)]);
var state_33551__$1 = state_33551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33551__$1,(8),inst_33538,inst_33528);
} else {
if((state_val_33552 === (9))){
var state_33551__$1 = state_33551;
var statearr_33562_34978 = state_33551__$1;
(statearr_33562_34978[(2)] = tc);

(statearr_33562_34978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (5))){
var inst_33531 = cljs.core.async.close_BANG_(tc);
var inst_33532 = cljs.core.async.close_BANG_(fc);
var state_33551__$1 = (function (){var statearr_33563 = state_33551;
(statearr_33563[(8)] = inst_33531);

return statearr_33563;
})();
var statearr_33564_34983 = state_33551__$1;
(statearr_33564_34983[(2)] = inst_33532);

(statearr_33564_34983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (14))){
var inst_33545 = (state_33551[(2)]);
var state_33551__$1 = state_33551;
var statearr_33565_34987 = state_33551__$1;
(statearr_33565_34987[(2)] = inst_33545);

(statearr_33565_34987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (10))){
var state_33551__$1 = state_33551;
var statearr_33566_34988 = state_33551__$1;
(statearr_33566_34988[(2)] = fc);

(statearr_33566_34988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33552 === (8))){
var inst_33540 = (state_33551[(2)]);
var state_33551__$1 = state_33551;
if(cljs.core.truth_(inst_33540)){
var statearr_33567_34989 = state_33551__$1;
(statearr_33567_34989[(1)] = (12));

} else {
var statearr_33568_34990 = state_33551__$1;
(statearr_33568_34990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null,null,null];
(statearr_33569[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_33551){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33551);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33570){var ex__33178__auto__ = e33570;
var statearr_33571_34994 = state_33551;
(statearr_33571_34994[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33551[(4)]))){
var statearr_33572_34995 = state_33551;
(statearr_33572_34995[(1)] = cljs.core.first((state_33551[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_33551;
state_33551 = G__34996;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_33551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_33551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33573 = f__33211__auto__();
(statearr_33573[(6)] = c__33210__auto___34957);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33210__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33595){
var state_val_33596 = (state_33595[(1)]);
if((state_val_33596 === (7))){
var inst_33591 = (state_33595[(2)]);
var state_33595__$1 = state_33595;
var statearr_33597_35000 = state_33595__$1;
(statearr_33597_35000[(2)] = inst_33591);

(statearr_33597_35000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (1))){
var inst_33574 = init;
var inst_33575 = inst_33574;
var state_33595__$1 = (function (){var statearr_33598 = state_33595;
(statearr_33598[(7)] = inst_33575);

return statearr_33598;
})();
var statearr_33599_35004 = state_33595__$1;
(statearr_33599_35004[(2)] = null);

(statearr_33599_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (4))){
var inst_33578 = (state_33595[(8)]);
var inst_33578__$1 = (state_33595[(2)]);
var inst_33579 = (inst_33578__$1 == null);
var state_33595__$1 = (function (){var statearr_33600 = state_33595;
(statearr_33600[(8)] = inst_33578__$1);

return statearr_33600;
})();
if(cljs.core.truth_(inst_33579)){
var statearr_33601_35005 = state_33595__$1;
(statearr_33601_35005[(1)] = (5));

} else {
var statearr_33602_35006 = state_33595__$1;
(statearr_33602_35006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (6))){
var inst_33578 = (state_33595[(8)]);
var inst_33582 = (state_33595[(9)]);
var inst_33575 = (state_33595[(7)]);
var inst_33582__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33575,inst_33578) : f.call(null,inst_33575,inst_33578));
var inst_33583 = cljs.core.reduced_QMARK_(inst_33582__$1);
var state_33595__$1 = (function (){var statearr_33603 = state_33595;
(statearr_33603[(9)] = inst_33582__$1);

return statearr_33603;
})();
if(inst_33583){
var statearr_33604_35008 = state_33595__$1;
(statearr_33604_35008[(1)] = (8));

} else {
var statearr_33605_35009 = state_33595__$1;
(statearr_33605_35009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (3))){
var inst_33593 = (state_33595[(2)]);
var state_33595__$1 = state_33595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33595__$1,inst_33593);
} else {
if((state_val_33596 === (2))){
var state_33595__$1 = state_33595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33595__$1,(4),ch);
} else {
if((state_val_33596 === (9))){
var inst_33582 = (state_33595[(9)]);
var inst_33575 = inst_33582;
var state_33595__$1 = (function (){var statearr_33606 = state_33595;
(statearr_33606[(7)] = inst_33575);

return statearr_33606;
})();
var statearr_33607_35010 = state_33595__$1;
(statearr_33607_35010[(2)] = null);

(statearr_33607_35010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (5))){
var inst_33575 = (state_33595[(7)]);
var state_33595__$1 = state_33595;
var statearr_33608_35011 = state_33595__$1;
(statearr_33608_35011[(2)] = inst_33575);

(statearr_33608_35011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (10))){
var inst_33589 = (state_33595[(2)]);
var state_33595__$1 = state_33595;
var statearr_33609_35012 = state_33595__$1;
(statearr_33609_35012[(2)] = inst_33589);

(statearr_33609_35012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33596 === (8))){
var inst_33582 = (state_33595[(9)]);
var inst_33585 = cljs.core.deref(inst_33582);
var state_33595__$1 = state_33595;
var statearr_33610_35013 = state_33595__$1;
(statearr_33610_35013[(2)] = inst_33585);

(statearr_33610_35013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33175__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33175__auto____0 = (function (){
var statearr_33611 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33611[(0)] = cljs$core$async$reduce_$_state_machine__33175__auto__);

(statearr_33611[(1)] = (1));

return statearr_33611;
});
var cljs$core$async$reduce_$_state_machine__33175__auto____1 = (function (state_33595){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33595);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33612){var ex__33178__auto__ = e33612;
var statearr_33613_35014 = state_33595;
(statearr_33613_35014[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33595[(4)]))){
var statearr_33614_35015 = state_33595;
(statearr_33614_35015[(1)] = cljs.core.first((state_33595[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35016 = state_33595;
state_33595 = G__35016;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33175__auto__ = function(state_33595){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33175__auto____1.call(this,state_33595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33175__auto____0;
cljs$core$async$reduce_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33175__auto____1;
return cljs$core$async$reduce_$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33615 = f__33211__auto__();
(statearr_33615[(6)] = c__33210__auto__);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

return c__33210__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33210__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33621){
var state_val_33622 = (state_33621[(1)]);
if((state_val_33622 === (1))){
var inst_33616 = cljs.core.async.reduce(f__$1,init,ch);
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33621__$1,(2),inst_33616);
} else {
if((state_val_33622 === (2))){
var inst_33618 = (state_33621[(2)]);
var inst_33619 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33618) : f__$1.call(null,inst_33618));
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33621__$1,inst_33619);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33175__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33175__auto____0 = (function (){
var statearr_33623 = [null,null,null,null,null,null,null];
(statearr_33623[(0)] = cljs$core$async$transduce_$_state_machine__33175__auto__);

(statearr_33623[(1)] = (1));

return statearr_33623;
});
var cljs$core$async$transduce_$_state_machine__33175__auto____1 = (function (state_33621){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33621);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33624){var ex__33178__auto__ = e33624;
var statearr_33625_35017 = state_33621;
(statearr_33625_35017[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33621[(4)]))){
var statearr_33626_35018 = state_33621;
(statearr_33626_35018[(1)] = cljs.core.first((state_33621[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_33621;
state_33621 = G__35019;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33175__auto__ = function(state_33621){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33175__auto____1.call(this,state_33621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33175__auto____0;
cljs$core$async$transduce_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33175__auto____1;
return cljs$core$async$transduce_$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33627 = f__33211__auto__();
(statearr_33627[(6)] = c__33210__auto__);

return statearr_33627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

return c__33210__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33629 = arguments.length;
switch (G__33629) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33210__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33654){
var state_val_33655 = (state_33654[(1)]);
if((state_val_33655 === (7))){
var inst_33636 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33656_35022 = state_33654__$1;
(statearr_33656_35022[(2)] = inst_33636);

(statearr_33656_35022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (1))){
var inst_33630 = cljs.core.seq(coll);
var inst_33631 = inst_33630;
var state_33654__$1 = (function (){var statearr_33657 = state_33654;
(statearr_33657[(7)] = inst_33631);

return statearr_33657;
})();
var statearr_33658_35025 = state_33654__$1;
(statearr_33658_35025[(2)] = null);

(statearr_33658_35025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (4))){
var inst_33631 = (state_33654[(7)]);
var inst_33634 = cljs.core.first(inst_33631);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33654__$1,(7),ch,inst_33634);
} else {
if((state_val_33655 === (13))){
var inst_33648 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33659_35030 = state_33654__$1;
(statearr_33659_35030[(2)] = inst_33648);

(statearr_33659_35030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (6))){
var inst_33639 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
if(cljs.core.truth_(inst_33639)){
var statearr_33660_35031 = state_33654__$1;
(statearr_33660_35031[(1)] = (8));

} else {
var statearr_33661_35032 = state_33654__$1;
(statearr_33661_35032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (3))){
var inst_33652 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33654__$1,inst_33652);
} else {
if((state_val_33655 === (12))){
var state_33654__$1 = state_33654;
var statearr_33662_35034 = state_33654__$1;
(statearr_33662_35034[(2)] = null);

(statearr_33662_35034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (2))){
var inst_33631 = (state_33654[(7)]);
var state_33654__$1 = state_33654;
if(cljs.core.truth_(inst_33631)){
var statearr_33663_35036 = state_33654__$1;
(statearr_33663_35036[(1)] = (4));

} else {
var statearr_33664_35037 = state_33654__$1;
(statearr_33664_35037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (11))){
var inst_33645 = cljs.core.async.close_BANG_(ch);
var state_33654__$1 = state_33654;
var statearr_33665_35038 = state_33654__$1;
(statearr_33665_35038[(2)] = inst_33645);

(statearr_33665_35038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (9))){
var state_33654__$1 = state_33654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33666_35039 = state_33654__$1;
(statearr_33666_35039[(1)] = (11));

} else {
var statearr_33667_35040 = state_33654__$1;
(statearr_33667_35040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (5))){
var inst_33631 = (state_33654[(7)]);
var state_33654__$1 = state_33654;
var statearr_33668_35041 = state_33654__$1;
(statearr_33668_35041[(2)] = inst_33631);

(statearr_33668_35041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (10))){
var inst_33650 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33669_35042 = state_33654__$1;
(statearr_33669_35042[(2)] = inst_33650);

(statearr_33669_35042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (8))){
var inst_33631 = (state_33654[(7)]);
var inst_33641 = cljs.core.next(inst_33631);
var inst_33631__$1 = inst_33641;
var state_33654__$1 = (function (){var statearr_33670 = state_33654;
(statearr_33670[(7)] = inst_33631__$1);

return statearr_33670;
})();
var statearr_33671_35043 = state_33654__$1;
(statearr_33671_35043[(2)] = null);

(statearr_33671_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_33672 = [null,null,null,null,null,null,null,null];
(statearr_33672[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_33672[(1)] = (1));

return statearr_33672;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_33654){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33654);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33673){var ex__33178__auto__ = e33673;
var statearr_33674_35048 = state_33654;
(statearr_33674_35048[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33654[(4)]))){
var statearr_33675_35049 = state_33654;
(statearr_33675_35049[(1)] = cljs.core.first((state_33654[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35050 = state_33654;
state_33654 = G__35050;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_33654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_33654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33676 = f__33211__auto__();
(statearr_33676[(6)] = c__33210__auto__);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

return c__33210__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35059 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35059(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35070 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35070(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35071 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35071(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35072 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35072(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33679 = (function (ch,cs,meta33680){
this.ch = ch;
this.cs = cs;
this.meta33680 = meta33680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33681,meta33680__$1){
var self__ = this;
var _33681__$1 = this;
return (new cljs.core.async.t_cljs$core$async33679(self__.ch,self__.cs,meta33680__$1));
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33681){
var self__ = this;
var _33681__$1 = this;
return self__.meta33680;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33680","meta33680",-1267985446,null)], null);
}));

(cljs.core.async.t_cljs$core$async33679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33679");

(cljs.core.async.t_cljs$core$async33679.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33679.
 */
cljs.core.async.__GT_t_cljs$core$async33679 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33679(ch__$1,cs__$1,meta33680){
return (new cljs.core.async.t_cljs$core$async33679(ch__$1,cs__$1,meta33680));
});

}

return (new cljs.core.async.t_cljs$core$async33679(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33210__auto___35079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_33814){
var state_val_33815 = (state_33814[(1)]);
if((state_val_33815 === (7))){
var inst_33810 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33816_35080 = state_33814__$1;
(statearr_33816_35080[(2)] = inst_33810);

(statearr_33816_35080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (20))){
var inst_33715 = (state_33814[(7)]);
var inst_33727 = cljs.core.first(inst_33715);
var inst_33728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33727,(0),null);
var inst_33729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33727,(1),null);
var state_33814__$1 = (function (){var statearr_33817 = state_33814;
(statearr_33817[(8)] = inst_33728);

return statearr_33817;
})();
if(cljs.core.truth_(inst_33729)){
var statearr_33818_35081 = state_33814__$1;
(statearr_33818_35081[(1)] = (22));

} else {
var statearr_33819_35082 = state_33814__$1;
(statearr_33819_35082[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (27))){
var inst_33757 = (state_33814[(9)]);
var inst_33764 = (state_33814[(10)]);
var inst_33759 = (state_33814[(11)]);
var inst_33684 = (state_33814[(12)]);
var inst_33764__$1 = cljs.core._nth(inst_33757,inst_33759);
var inst_33765 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33764__$1,inst_33684,done);
var state_33814__$1 = (function (){var statearr_33820 = state_33814;
(statearr_33820[(10)] = inst_33764__$1);

return statearr_33820;
})();
if(cljs.core.truth_(inst_33765)){
var statearr_33821_35089 = state_33814__$1;
(statearr_33821_35089[(1)] = (30));

} else {
var statearr_33822_35090 = state_33814__$1;
(statearr_33822_35090[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (1))){
var state_33814__$1 = state_33814;
var statearr_33823_35091 = state_33814__$1;
(statearr_33823_35091[(2)] = null);

(statearr_33823_35091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (24))){
var inst_33715 = (state_33814[(7)]);
var inst_33734 = (state_33814[(2)]);
var inst_33735 = cljs.core.next(inst_33715);
var inst_33693 = inst_33735;
var inst_33694 = null;
var inst_33695 = (0);
var inst_33696 = (0);
var state_33814__$1 = (function (){var statearr_33824 = state_33814;
(statearr_33824[(13)] = inst_33693);

(statearr_33824[(14)] = inst_33734);

(statearr_33824[(15)] = inst_33695);

(statearr_33824[(16)] = inst_33696);

(statearr_33824[(17)] = inst_33694);

return statearr_33824;
})();
var statearr_33825_35092 = state_33814__$1;
(statearr_33825_35092[(2)] = null);

(statearr_33825_35092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (39))){
var state_33814__$1 = state_33814;
var statearr_33829_35093 = state_33814__$1;
(statearr_33829_35093[(2)] = null);

(statearr_33829_35093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (4))){
var inst_33684 = (state_33814[(12)]);
var inst_33684__$1 = (state_33814[(2)]);
var inst_33685 = (inst_33684__$1 == null);
var state_33814__$1 = (function (){var statearr_33830 = state_33814;
(statearr_33830[(12)] = inst_33684__$1);

return statearr_33830;
})();
if(cljs.core.truth_(inst_33685)){
var statearr_33831_35094 = state_33814__$1;
(statearr_33831_35094[(1)] = (5));

} else {
var statearr_33832_35095 = state_33814__$1;
(statearr_33832_35095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (15))){
var inst_33693 = (state_33814[(13)]);
var inst_33695 = (state_33814[(15)]);
var inst_33696 = (state_33814[(16)]);
var inst_33694 = (state_33814[(17)]);
var inst_33711 = (state_33814[(2)]);
var inst_33712 = (inst_33696 + (1));
var tmp33826 = inst_33693;
var tmp33827 = inst_33695;
var tmp33828 = inst_33694;
var inst_33693__$1 = tmp33826;
var inst_33694__$1 = tmp33828;
var inst_33695__$1 = tmp33827;
var inst_33696__$1 = inst_33712;
var state_33814__$1 = (function (){var statearr_33833 = state_33814;
(statearr_33833[(13)] = inst_33693__$1);

(statearr_33833[(15)] = inst_33695__$1);

(statearr_33833[(16)] = inst_33696__$1);

(statearr_33833[(18)] = inst_33711);

(statearr_33833[(17)] = inst_33694__$1);

return statearr_33833;
})();
var statearr_33834_35096 = state_33814__$1;
(statearr_33834_35096[(2)] = null);

(statearr_33834_35096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (21))){
var inst_33738 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33838_35097 = state_33814__$1;
(statearr_33838_35097[(2)] = inst_33738);

(statearr_33838_35097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (31))){
var inst_33764 = (state_33814[(10)]);
var inst_33768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33764);
var state_33814__$1 = state_33814;
var statearr_33839_35098 = state_33814__$1;
(statearr_33839_35098[(2)] = inst_33768);

(statearr_33839_35098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (32))){
var inst_33756 = (state_33814[(19)]);
var inst_33758 = (state_33814[(20)]);
var inst_33757 = (state_33814[(9)]);
var inst_33759 = (state_33814[(11)]);
var inst_33770 = (state_33814[(2)]);
var inst_33771 = (inst_33759 + (1));
var tmp33835 = inst_33756;
var tmp33836 = inst_33758;
var tmp33837 = inst_33757;
var inst_33756__$1 = tmp33835;
var inst_33757__$1 = tmp33837;
var inst_33758__$1 = tmp33836;
var inst_33759__$1 = inst_33771;
var state_33814__$1 = (function (){var statearr_33840 = state_33814;
(statearr_33840[(21)] = inst_33770);

(statearr_33840[(19)] = inst_33756__$1);

(statearr_33840[(20)] = inst_33758__$1);

(statearr_33840[(9)] = inst_33757__$1);

(statearr_33840[(11)] = inst_33759__$1);

return statearr_33840;
})();
var statearr_33841_35105 = state_33814__$1;
(statearr_33841_35105[(2)] = null);

(statearr_33841_35105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (40))){
var inst_33783 = (state_33814[(22)]);
var inst_33787 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33783);
var state_33814__$1 = state_33814;
var statearr_33842_35106 = state_33814__$1;
(statearr_33842_35106[(2)] = inst_33787);

(statearr_33842_35106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (33))){
var inst_33774 = (state_33814[(23)]);
var inst_33776 = cljs.core.chunked_seq_QMARK_(inst_33774);
var state_33814__$1 = state_33814;
if(inst_33776){
var statearr_33843_35107 = state_33814__$1;
(statearr_33843_35107[(1)] = (36));

} else {
var statearr_33844_35108 = state_33814__$1;
(statearr_33844_35108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (13))){
var inst_33705 = (state_33814[(24)]);
var inst_33708 = cljs.core.async.close_BANG_(inst_33705);
var state_33814__$1 = state_33814;
var statearr_33845_35109 = state_33814__$1;
(statearr_33845_35109[(2)] = inst_33708);

(statearr_33845_35109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (22))){
var inst_33728 = (state_33814[(8)]);
var inst_33731 = cljs.core.async.close_BANG_(inst_33728);
var state_33814__$1 = state_33814;
var statearr_33846_35110 = state_33814__$1;
(statearr_33846_35110[(2)] = inst_33731);

(statearr_33846_35110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (36))){
var inst_33774 = (state_33814[(23)]);
var inst_33778 = cljs.core.chunk_first(inst_33774);
var inst_33779 = cljs.core.chunk_rest(inst_33774);
var inst_33780 = cljs.core.count(inst_33778);
var inst_33756 = inst_33779;
var inst_33757 = inst_33778;
var inst_33758 = inst_33780;
var inst_33759 = (0);
var state_33814__$1 = (function (){var statearr_33847 = state_33814;
(statearr_33847[(19)] = inst_33756);

(statearr_33847[(20)] = inst_33758);

(statearr_33847[(9)] = inst_33757);

(statearr_33847[(11)] = inst_33759);

return statearr_33847;
})();
var statearr_33848_35111 = state_33814__$1;
(statearr_33848_35111[(2)] = null);

(statearr_33848_35111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (41))){
var inst_33774 = (state_33814[(23)]);
var inst_33789 = (state_33814[(2)]);
var inst_33790 = cljs.core.next(inst_33774);
var inst_33756 = inst_33790;
var inst_33757 = null;
var inst_33758 = (0);
var inst_33759 = (0);
var state_33814__$1 = (function (){var statearr_33849 = state_33814;
(statearr_33849[(19)] = inst_33756);

(statearr_33849[(20)] = inst_33758);

(statearr_33849[(9)] = inst_33757);

(statearr_33849[(11)] = inst_33759);

(statearr_33849[(25)] = inst_33789);

return statearr_33849;
})();
var statearr_33850_35112 = state_33814__$1;
(statearr_33850_35112[(2)] = null);

(statearr_33850_35112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (43))){
var state_33814__$1 = state_33814;
var statearr_33851_35113 = state_33814__$1;
(statearr_33851_35113[(2)] = null);

(statearr_33851_35113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (29))){
var inst_33798 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33852_35114 = state_33814__$1;
(statearr_33852_35114[(2)] = inst_33798);

(statearr_33852_35114[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (44))){
var inst_33807 = (state_33814[(2)]);
var state_33814__$1 = (function (){var statearr_33853 = state_33814;
(statearr_33853[(26)] = inst_33807);

return statearr_33853;
})();
var statearr_33854_35115 = state_33814__$1;
(statearr_33854_35115[(2)] = null);

(statearr_33854_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (6))){
var inst_33748 = (state_33814[(27)]);
var inst_33747 = cljs.core.deref(cs);
var inst_33748__$1 = cljs.core.keys(inst_33747);
var inst_33749 = cljs.core.count(inst_33748__$1);
var inst_33750 = cljs.core.reset_BANG_(dctr,inst_33749);
var inst_33755 = cljs.core.seq(inst_33748__$1);
var inst_33756 = inst_33755;
var inst_33757 = null;
var inst_33758 = (0);
var inst_33759 = (0);
var state_33814__$1 = (function (){var statearr_33855 = state_33814;
(statearr_33855[(19)] = inst_33756);

(statearr_33855[(27)] = inst_33748__$1);

(statearr_33855[(28)] = inst_33750);

(statearr_33855[(20)] = inst_33758);

(statearr_33855[(9)] = inst_33757);

(statearr_33855[(11)] = inst_33759);

return statearr_33855;
})();
var statearr_33856_35116 = state_33814__$1;
(statearr_33856_35116[(2)] = null);

(statearr_33856_35116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (28))){
var inst_33756 = (state_33814[(19)]);
var inst_33774 = (state_33814[(23)]);
var inst_33774__$1 = cljs.core.seq(inst_33756);
var state_33814__$1 = (function (){var statearr_33857 = state_33814;
(statearr_33857[(23)] = inst_33774__$1);

return statearr_33857;
})();
if(inst_33774__$1){
var statearr_33858_35117 = state_33814__$1;
(statearr_33858_35117[(1)] = (33));

} else {
var statearr_33859_35118 = state_33814__$1;
(statearr_33859_35118[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (25))){
var inst_33758 = (state_33814[(20)]);
var inst_33759 = (state_33814[(11)]);
var inst_33761 = (inst_33759 < inst_33758);
var inst_33762 = inst_33761;
var state_33814__$1 = state_33814;
if(cljs.core.truth_(inst_33762)){
var statearr_33860_35119 = state_33814__$1;
(statearr_33860_35119[(1)] = (27));

} else {
var statearr_33861_35120 = state_33814__$1;
(statearr_33861_35120[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (34))){
var state_33814__$1 = state_33814;
var statearr_33862_35121 = state_33814__$1;
(statearr_33862_35121[(2)] = null);

(statearr_33862_35121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (17))){
var state_33814__$1 = state_33814;
var statearr_33863_35123 = state_33814__$1;
(statearr_33863_35123[(2)] = null);

(statearr_33863_35123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (3))){
var inst_33812 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33814__$1,inst_33812);
} else {
if((state_val_33815 === (12))){
var inst_33743 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33864_35128 = state_33814__$1;
(statearr_33864_35128[(2)] = inst_33743);

(statearr_33864_35128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (2))){
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33814__$1,(4),ch);
} else {
if((state_val_33815 === (23))){
var state_33814__$1 = state_33814;
var statearr_33865_35129 = state_33814__$1;
(statearr_33865_35129[(2)] = null);

(statearr_33865_35129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (35))){
var inst_33796 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33866_35130 = state_33814__$1;
(statearr_33866_35130[(2)] = inst_33796);

(statearr_33866_35130[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (19))){
var inst_33715 = (state_33814[(7)]);
var inst_33719 = cljs.core.chunk_first(inst_33715);
var inst_33720 = cljs.core.chunk_rest(inst_33715);
var inst_33721 = cljs.core.count(inst_33719);
var inst_33693 = inst_33720;
var inst_33694 = inst_33719;
var inst_33695 = inst_33721;
var inst_33696 = (0);
var state_33814__$1 = (function (){var statearr_33867 = state_33814;
(statearr_33867[(13)] = inst_33693);

(statearr_33867[(15)] = inst_33695);

(statearr_33867[(16)] = inst_33696);

(statearr_33867[(17)] = inst_33694);

return statearr_33867;
})();
var statearr_33868_35131 = state_33814__$1;
(statearr_33868_35131[(2)] = null);

(statearr_33868_35131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (11))){
var inst_33715 = (state_33814[(7)]);
var inst_33693 = (state_33814[(13)]);
var inst_33715__$1 = cljs.core.seq(inst_33693);
var state_33814__$1 = (function (){var statearr_33869 = state_33814;
(statearr_33869[(7)] = inst_33715__$1);

return statearr_33869;
})();
if(inst_33715__$1){
var statearr_33870_35132 = state_33814__$1;
(statearr_33870_35132[(1)] = (16));

} else {
var statearr_33871_35133 = state_33814__$1;
(statearr_33871_35133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (9))){
var inst_33745 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33872_35134 = state_33814__$1;
(statearr_33872_35134[(2)] = inst_33745);

(statearr_33872_35134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (5))){
var inst_33691 = cljs.core.deref(cs);
var inst_33692 = cljs.core.seq(inst_33691);
var inst_33693 = inst_33692;
var inst_33694 = null;
var inst_33695 = (0);
var inst_33696 = (0);
var state_33814__$1 = (function (){var statearr_33873 = state_33814;
(statearr_33873[(13)] = inst_33693);

(statearr_33873[(15)] = inst_33695);

(statearr_33873[(16)] = inst_33696);

(statearr_33873[(17)] = inst_33694);

return statearr_33873;
})();
var statearr_33874_35135 = state_33814__$1;
(statearr_33874_35135[(2)] = null);

(statearr_33874_35135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (14))){
var state_33814__$1 = state_33814;
var statearr_33875_35136 = state_33814__$1;
(statearr_33875_35136[(2)] = null);

(statearr_33875_35136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (45))){
var inst_33804 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33876_35137 = state_33814__$1;
(statearr_33876_35137[(2)] = inst_33804);

(statearr_33876_35137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (26))){
var inst_33748 = (state_33814[(27)]);
var inst_33800 = (state_33814[(2)]);
var inst_33801 = cljs.core.seq(inst_33748);
var state_33814__$1 = (function (){var statearr_33877 = state_33814;
(statearr_33877[(29)] = inst_33800);

return statearr_33877;
})();
if(inst_33801){
var statearr_33878_35140 = state_33814__$1;
(statearr_33878_35140[(1)] = (42));

} else {
var statearr_33879_35141 = state_33814__$1;
(statearr_33879_35141[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (16))){
var inst_33715 = (state_33814[(7)]);
var inst_33717 = cljs.core.chunked_seq_QMARK_(inst_33715);
var state_33814__$1 = state_33814;
if(inst_33717){
var statearr_33880_35142 = state_33814__$1;
(statearr_33880_35142[(1)] = (19));

} else {
var statearr_33881_35143 = state_33814__$1;
(statearr_33881_35143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (38))){
var inst_33793 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33882_35144 = state_33814__$1;
(statearr_33882_35144[(2)] = inst_33793);

(statearr_33882_35144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (30))){
var state_33814__$1 = state_33814;
var statearr_33883_35145 = state_33814__$1;
(statearr_33883_35145[(2)] = null);

(statearr_33883_35145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (10))){
var inst_33696 = (state_33814[(16)]);
var inst_33694 = (state_33814[(17)]);
var inst_33704 = cljs.core._nth(inst_33694,inst_33696);
var inst_33705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704,(0),null);
var inst_33706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33704,(1),null);
var state_33814__$1 = (function (){var statearr_33884 = state_33814;
(statearr_33884[(24)] = inst_33705);

return statearr_33884;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33885_35146 = state_33814__$1;
(statearr_33885_35146[(1)] = (13));

} else {
var statearr_33886_35147 = state_33814__$1;
(statearr_33886_35147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (18))){
var inst_33741 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33887_35148 = state_33814__$1;
(statearr_33887_35148[(2)] = inst_33741);

(statearr_33887_35148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (42))){
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33814__$1,(45),dchan);
} else {
if((state_val_33815 === (37))){
var inst_33783 = (state_33814[(22)]);
var inst_33774 = (state_33814[(23)]);
var inst_33684 = (state_33814[(12)]);
var inst_33783__$1 = cljs.core.first(inst_33774);
var inst_33784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33783__$1,inst_33684,done);
var state_33814__$1 = (function (){var statearr_33888 = state_33814;
(statearr_33888[(22)] = inst_33783__$1);

return statearr_33888;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33889_35151 = state_33814__$1;
(statearr_33889_35151[(1)] = (39));

} else {
var statearr_33890_35152 = state_33814__$1;
(statearr_33890_35152[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (8))){
var inst_33695 = (state_33814[(15)]);
var inst_33696 = (state_33814[(16)]);
var inst_33698 = (inst_33696 < inst_33695);
var inst_33699 = inst_33698;
var state_33814__$1 = state_33814;
if(cljs.core.truth_(inst_33699)){
var statearr_33891_35153 = state_33814__$1;
(statearr_33891_35153[(1)] = (10));

} else {
var statearr_33892_35154 = state_33814__$1;
(statearr_33892_35154[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33175__auto__ = null;
var cljs$core$async$mult_$_state_machine__33175__auto____0 = (function (){
var statearr_33893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = cljs$core$async$mult_$_state_machine__33175__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var cljs$core$async$mult_$_state_machine__33175__auto____1 = (function (state_33814){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_33814);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e33894){var ex__33178__auto__ = e33894;
var statearr_33895_35155 = state_33814;
(statearr_33895_35155[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_33814[(4)]))){
var statearr_33896_35156 = state_33814;
(statearr_33896_35156[(1)] = cljs.core.first((state_33814[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35157 = state_33814;
state_33814 = G__35157;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33175__auto__ = function(state_33814){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33175__auto____1.call(this,state_33814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33175__auto____0;
cljs$core$async$mult_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33175__auto____1;
return cljs$core$async$mult_$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_33897 = f__33211__auto__();
(statearr_33897[(6)] = c__33210__auto___35079);

return statearr_33897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33899 = arguments.length;
switch (G__33899) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35159 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35159(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35162 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35162(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35163 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35163(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35164 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35164(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35165 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35165(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35166 = arguments.length;
var i__4737__auto___35167 = (0);
while(true){
if((i__4737__auto___35167 < len__4736__auto___35166)){
args__4742__auto__.push((arguments[i__4737__auto___35167]));

var G__35168 = (i__4737__auto___35167 + (1));
i__4737__auto___35167 = G__35168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33904){
var map__33905 = p__33904;
var map__33905__$1 = (((((!((map__33905 == null))))?(((((map__33905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33905):map__33905);
var opts = map__33905__$1;
var statearr_33907_35170 = state;
(statearr_33907_35170[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33908_35175 = state;
(statearr_33908_35175[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33909_35176 = state;
(statearr_33909_35176[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33900){
var G__33901 = cljs.core.first(seq33900);
var seq33900__$1 = cljs.core.next(seq33900);
var G__33902 = cljs.core.first(seq33900__$1);
var seq33900__$2 = cljs.core.next(seq33900__$1);
var G__33903 = cljs.core.first(seq33900__$2);
var seq33900__$3 = cljs.core.next(seq33900__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33901,G__33902,G__33903,seq33900__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33910 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33911){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33911 = meta33911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33912,meta33911__$1){
var self__ = this;
var _33912__$1 = this;
return (new cljs.core.async.t_cljs$core$async33910(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33911__$1));
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33912){
var self__ = this;
var _33912__$1 = this;
return self__.meta33911;
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33910.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33911","meta33911",1405842406,null)], null);
}));

(cljs.core.async.t_cljs$core$async33910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33910");

(cljs.core.async.t_cljs$core$async33910.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33910.
 */
cljs.core.async.__GT_t_cljs$core$async33910 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33910(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33911){
return (new cljs.core.async.t_cljs$core$async33910(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33911));
});

}

return (new cljs.core.async.t_cljs$core$async33910(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33210__auto___35197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34014){
var state_val_34015 = (state_34014[(1)]);
if((state_val_34015 === (7))){
var inst_33929 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34016_35198 = state_34014__$1;
(statearr_34016_35198[(2)] = inst_33929);

(statearr_34016_35198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (20))){
var inst_33941 = (state_34014[(7)]);
var state_34014__$1 = state_34014;
var statearr_34017_35199 = state_34014__$1;
(statearr_34017_35199[(2)] = inst_33941);

(statearr_34017_35199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (27))){
var state_34014__$1 = state_34014;
var statearr_34018_35200 = state_34014__$1;
(statearr_34018_35200[(2)] = null);

(statearr_34018_35200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (1))){
var inst_33916 = (state_34014[(8)]);
var inst_33916__$1 = calc_state();
var inst_33918 = (inst_33916__$1 == null);
var inst_33919 = cljs.core.not(inst_33918);
var state_34014__$1 = (function (){var statearr_34019 = state_34014;
(statearr_34019[(8)] = inst_33916__$1);

return statearr_34019;
})();
if(inst_33919){
var statearr_34020_35201 = state_34014__$1;
(statearr_34020_35201[(1)] = (2));

} else {
var statearr_34021_35202 = state_34014__$1;
(statearr_34021_35202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (24))){
var inst_33988 = (state_34014[(9)]);
var inst_33974 = (state_34014[(10)]);
var inst_33965 = (state_34014[(11)]);
var inst_33988__$1 = (inst_33965.cljs$core$IFn$_invoke$arity$1 ? inst_33965.cljs$core$IFn$_invoke$arity$1(inst_33974) : inst_33965.call(null,inst_33974));
var state_34014__$1 = (function (){var statearr_34022 = state_34014;
(statearr_34022[(9)] = inst_33988__$1);

return statearr_34022;
})();
if(cljs.core.truth_(inst_33988__$1)){
var statearr_34023_35204 = state_34014__$1;
(statearr_34023_35204[(1)] = (29));

} else {
var statearr_34024_35205 = state_34014__$1;
(statearr_34024_35205[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (4))){
var inst_33932 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33932)){
var statearr_34025_35207 = state_34014__$1;
(statearr_34025_35207[(1)] = (8));

} else {
var statearr_34026_35208 = state_34014__$1;
(statearr_34026_35208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (15))){
var inst_33959 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33959)){
var statearr_34027_35209 = state_34014__$1;
(statearr_34027_35209[(1)] = (19));

} else {
var statearr_34028_35210 = state_34014__$1;
(statearr_34028_35210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (21))){
var inst_33964 = (state_34014[(12)]);
var inst_33964__$1 = (state_34014[(2)]);
var inst_33965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34014__$1 = (function (){var statearr_34029 = state_34014;
(statearr_34029[(11)] = inst_33965);

(statearr_34029[(12)] = inst_33964__$1);

(statearr_34029[(13)] = inst_33966);

return statearr_34029;
})();
return cljs.core.async.ioc_alts_BANG_(state_34014__$1,(22),inst_33967);
} else {
if((state_val_34015 === (31))){
var inst_33996 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33996)){
var statearr_34030_35211 = state_34014__$1;
(statearr_34030_35211[(1)] = (32));

} else {
var statearr_34031_35212 = state_34014__$1;
(statearr_34031_35212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (32))){
var inst_33973 = (state_34014[(14)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34014__$1,(35),out,inst_33973);
} else {
if((state_val_34015 === (33))){
var inst_33964 = (state_34014[(12)]);
var inst_33941 = inst_33964;
var state_34014__$1 = (function (){var statearr_34032 = state_34014;
(statearr_34032[(7)] = inst_33941);

return statearr_34032;
})();
var statearr_34033_35213 = state_34014__$1;
(statearr_34033_35213[(2)] = null);

(statearr_34033_35213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (13))){
var inst_33941 = (state_34014[(7)]);
var inst_33948 = inst_33941.cljs$lang$protocol_mask$partition0$;
var inst_33949 = (inst_33948 & (64));
var inst_33950 = inst_33941.cljs$core$ISeq$;
var inst_33951 = (cljs.core.PROTOCOL_SENTINEL === inst_33950);
var inst_33952 = ((inst_33949) || (inst_33951));
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33952)){
var statearr_34034_35214 = state_34014__$1;
(statearr_34034_35214[(1)] = (16));

} else {
var statearr_34035_35215 = state_34014__$1;
(statearr_34035_35215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (22))){
var inst_33973 = (state_34014[(14)]);
var inst_33974 = (state_34014[(10)]);
var inst_33972 = (state_34014[(2)]);
var inst_33973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33972,(0),null);
var inst_33974__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33972,(1),null);
var inst_33975 = (inst_33973__$1 == null);
var inst_33976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33974__$1,change);
var inst_33977 = ((inst_33975) || (inst_33976));
var state_34014__$1 = (function (){var statearr_34036 = state_34014;
(statearr_34036[(14)] = inst_33973__$1);

(statearr_34036[(10)] = inst_33974__$1);

return statearr_34036;
})();
if(cljs.core.truth_(inst_33977)){
var statearr_34037_35216 = state_34014__$1;
(statearr_34037_35216[(1)] = (23));

} else {
var statearr_34038_35217 = state_34014__$1;
(statearr_34038_35217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (36))){
var inst_33964 = (state_34014[(12)]);
var inst_33941 = inst_33964;
var state_34014__$1 = (function (){var statearr_34039 = state_34014;
(statearr_34039[(7)] = inst_33941);

return statearr_34039;
})();
var statearr_34040_35218 = state_34014__$1;
(statearr_34040_35218[(2)] = null);

(statearr_34040_35218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (29))){
var inst_33988 = (state_34014[(9)]);
var state_34014__$1 = state_34014;
var statearr_34041_35219 = state_34014__$1;
(statearr_34041_35219[(2)] = inst_33988);

(statearr_34041_35219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (6))){
var state_34014__$1 = state_34014;
var statearr_34042_35220 = state_34014__$1;
(statearr_34042_35220[(2)] = false);

(statearr_34042_35220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (28))){
var inst_33984 = (state_34014[(2)]);
var inst_33985 = calc_state();
var inst_33941 = inst_33985;
var state_34014__$1 = (function (){var statearr_34043 = state_34014;
(statearr_34043[(7)] = inst_33941);

(statearr_34043[(15)] = inst_33984);

return statearr_34043;
})();
var statearr_34044_35221 = state_34014__$1;
(statearr_34044_35221[(2)] = null);

(statearr_34044_35221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (25))){
var inst_34010 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34045_35222 = state_34014__$1;
(statearr_34045_35222[(2)] = inst_34010);

(statearr_34045_35222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (34))){
var inst_34008 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34046_35223 = state_34014__$1;
(statearr_34046_35223[(2)] = inst_34008);

(statearr_34046_35223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (17))){
var state_34014__$1 = state_34014;
var statearr_34047_35224 = state_34014__$1;
(statearr_34047_35224[(2)] = false);

(statearr_34047_35224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (3))){
var state_34014__$1 = state_34014;
var statearr_34048_35225 = state_34014__$1;
(statearr_34048_35225[(2)] = false);

(statearr_34048_35225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (12))){
var inst_34012 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34014__$1,inst_34012);
} else {
if((state_val_34015 === (2))){
var inst_33916 = (state_34014[(8)]);
var inst_33921 = inst_33916.cljs$lang$protocol_mask$partition0$;
var inst_33922 = (inst_33921 & (64));
var inst_33923 = inst_33916.cljs$core$ISeq$;
var inst_33924 = (cljs.core.PROTOCOL_SENTINEL === inst_33923);
var inst_33925 = ((inst_33922) || (inst_33924));
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33925)){
var statearr_34049_35226 = state_34014__$1;
(statearr_34049_35226[(1)] = (5));

} else {
var statearr_34050_35227 = state_34014__$1;
(statearr_34050_35227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (23))){
var inst_33973 = (state_34014[(14)]);
var inst_33979 = (inst_33973 == null);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33979)){
var statearr_34051_35232 = state_34014__$1;
(statearr_34051_35232[(1)] = (26));

} else {
var statearr_34052_35233 = state_34014__$1;
(statearr_34052_35233[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (35))){
var inst_33999 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
if(cljs.core.truth_(inst_33999)){
var statearr_34053_35234 = state_34014__$1;
(statearr_34053_35234[(1)] = (36));

} else {
var statearr_34054_35235 = state_34014__$1;
(statearr_34054_35235[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (19))){
var inst_33941 = (state_34014[(7)]);
var inst_33961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33941);
var state_34014__$1 = state_34014;
var statearr_34055_35236 = state_34014__$1;
(statearr_34055_35236[(2)] = inst_33961);

(statearr_34055_35236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (11))){
var inst_33941 = (state_34014[(7)]);
var inst_33945 = (inst_33941 == null);
var inst_33946 = cljs.core.not(inst_33945);
var state_34014__$1 = state_34014;
if(inst_33946){
var statearr_34056_35237 = state_34014__$1;
(statearr_34056_35237[(1)] = (13));

} else {
var statearr_34057_35238 = state_34014__$1;
(statearr_34057_35238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (9))){
var inst_33916 = (state_34014[(8)]);
var state_34014__$1 = state_34014;
var statearr_34058_35239 = state_34014__$1;
(statearr_34058_35239[(2)] = inst_33916);

(statearr_34058_35239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (5))){
var state_34014__$1 = state_34014;
var statearr_34059_35240 = state_34014__$1;
(statearr_34059_35240[(2)] = true);

(statearr_34059_35240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (14))){
var state_34014__$1 = state_34014;
var statearr_34060_35241 = state_34014__$1;
(statearr_34060_35241[(2)] = false);

(statearr_34060_35241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (26))){
var inst_33974 = (state_34014[(10)]);
var inst_33981 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33974);
var state_34014__$1 = state_34014;
var statearr_34061_35242 = state_34014__$1;
(statearr_34061_35242[(2)] = inst_33981);

(statearr_34061_35242[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (16))){
var state_34014__$1 = state_34014;
var statearr_34062_35247 = state_34014__$1;
(statearr_34062_35247[(2)] = true);

(statearr_34062_35247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (38))){
var inst_34004 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34063_35249 = state_34014__$1;
(statearr_34063_35249[(2)] = inst_34004);

(statearr_34063_35249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (30))){
var inst_33974 = (state_34014[(10)]);
var inst_33965 = (state_34014[(11)]);
var inst_33966 = (state_34014[(13)]);
var inst_33991 = cljs.core.empty_QMARK_(inst_33965);
var inst_33992 = (inst_33966.cljs$core$IFn$_invoke$arity$1 ? inst_33966.cljs$core$IFn$_invoke$arity$1(inst_33974) : inst_33966.call(null,inst_33974));
var inst_33993 = cljs.core.not(inst_33992);
var inst_33994 = ((inst_33991) && (inst_33993));
var state_34014__$1 = state_34014;
var statearr_34064_35250 = state_34014__$1;
(statearr_34064_35250[(2)] = inst_33994);

(statearr_34064_35250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (10))){
var inst_33916 = (state_34014[(8)]);
var inst_33937 = (state_34014[(2)]);
var inst_33938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33937,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33937,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33937,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33941 = inst_33916;
var state_34014__$1 = (function (){var statearr_34065 = state_34014;
(statearr_34065[(16)] = inst_33938);

(statearr_34065[(7)] = inst_33941);

(statearr_34065[(17)] = inst_33940);

(statearr_34065[(18)] = inst_33939);

return statearr_34065;
})();
var statearr_34066_35252 = state_34014__$1;
(statearr_34066_35252[(2)] = null);

(statearr_34066_35252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (18))){
var inst_33956 = (state_34014[(2)]);
var state_34014__$1 = state_34014;
var statearr_34067_35254 = state_34014__$1;
(statearr_34067_35254[(2)] = inst_33956);

(statearr_34067_35254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (37))){
var state_34014__$1 = state_34014;
var statearr_34068_35258 = state_34014__$1;
(statearr_34068_35258[(2)] = null);

(statearr_34068_35258[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34015 === (8))){
var inst_33916 = (state_34014[(8)]);
var inst_33934 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33916);
var state_34014__$1 = state_34014;
var statearr_34069_35259 = state_34014__$1;
(statearr_34069_35259[(2)] = inst_33934);

(statearr_34069_35259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33175__auto__ = null;
var cljs$core$async$mix_$_state_machine__33175__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$mix_$_state_machine__33175__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$mix_$_state_machine__33175__auto____1 = (function (state_34014){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34014);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34071){var ex__33178__auto__ = e34071;
var statearr_34072_35260 = state_34014;
(statearr_34072_35260[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34014[(4)]))){
var statearr_34073_35261 = state_34014;
(statearr_34073_35261[(1)] = cljs.core.first((state_34014[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35262 = state_34014;
state_34014 = G__35262;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33175__auto__ = function(state_34014){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33175__auto____1.call(this,state_34014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33175__auto____0;
cljs$core$async$mix_$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33175__auto____1;
return cljs$core$async$mix_$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34074 = f__33211__auto__();
(statearr_34074[(6)] = c__33210__auto___35197);

return statearr_34074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35263 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35263(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35264 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35264(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35265 = (function() {
var G__35266 = null;
var G__35266__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35266__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35266 = function(p,v){
switch(arguments.length){
case 1:
return G__35266__1.call(this,p);
case 2:
return G__35266__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35266.cljs$core$IFn$_invoke$arity$1 = G__35266__1;
G__35266.cljs$core$IFn$_invoke$arity$2 = G__35266__2;
return G__35266;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35265(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35265(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34079 = arguments.length;
switch (G__34079) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34077_SHARP_){
if(cljs.core.truth_((p1__34077_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34077_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34077_SHARP_.call(null,topic)))){
return p1__34077_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34077_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34080 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34081){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34081 = meta34081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34082,meta34081__$1){
var self__ = this;
var _34082__$1 = this;
return (new cljs.core.async.t_cljs$core$async34080(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34081__$1));
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34082){
var self__ = this;
var _34082__$1 = this;
return self__.meta34081;
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34081","meta34081",-2084072717,null)], null);
}));

(cljs.core.async.t_cljs$core$async34080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34080");

(cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34080.
 */
cljs.core.async.__GT_t_cljs$core$async34080 = (function cljs$core$async$__GT_t_cljs$core$async34080(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34081){
return (new cljs.core.async.t_cljs$core$async34080(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34081));
});

}

return (new cljs.core.async.t_cljs$core$async34080(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33210__auto___35272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34154){
var state_val_34155 = (state_34154[(1)]);
if((state_val_34155 === (7))){
var inst_34150 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34156_35273 = state_34154__$1;
(statearr_34156_35273[(2)] = inst_34150);

(statearr_34156_35273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (20))){
var state_34154__$1 = state_34154;
var statearr_34157_35274 = state_34154__$1;
(statearr_34157_35274[(2)] = null);

(statearr_34157_35274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (1))){
var state_34154__$1 = state_34154;
var statearr_34158_35276 = state_34154__$1;
(statearr_34158_35276[(2)] = null);

(statearr_34158_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (24))){
var inst_34133 = (state_34154[(7)]);
var inst_34142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34133);
var state_34154__$1 = state_34154;
var statearr_34159_35277 = state_34154__$1;
(statearr_34159_35277[(2)] = inst_34142);

(statearr_34159_35277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (4))){
var inst_34085 = (state_34154[(8)]);
var inst_34085__$1 = (state_34154[(2)]);
var inst_34086 = (inst_34085__$1 == null);
var state_34154__$1 = (function (){var statearr_34160 = state_34154;
(statearr_34160[(8)] = inst_34085__$1);

return statearr_34160;
})();
if(cljs.core.truth_(inst_34086)){
var statearr_34161_35278 = state_34154__$1;
(statearr_34161_35278[(1)] = (5));

} else {
var statearr_34162_35279 = state_34154__$1;
(statearr_34162_35279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (15))){
var inst_34127 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34163_35280 = state_34154__$1;
(statearr_34163_35280[(2)] = inst_34127);

(statearr_34163_35280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (21))){
var inst_34147 = (state_34154[(2)]);
var state_34154__$1 = (function (){var statearr_34164 = state_34154;
(statearr_34164[(9)] = inst_34147);

return statearr_34164;
})();
var statearr_34165_35281 = state_34154__$1;
(statearr_34165_35281[(2)] = null);

(statearr_34165_35281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (13))){
var inst_34109 = (state_34154[(10)]);
var inst_34111 = cljs.core.chunked_seq_QMARK_(inst_34109);
var state_34154__$1 = state_34154;
if(inst_34111){
var statearr_34166_35282 = state_34154__$1;
(statearr_34166_35282[(1)] = (16));

} else {
var statearr_34167_35283 = state_34154__$1;
(statearr_34167_35283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (22))){
var inst_34139 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34139)){
var statearr_34168_35284 = state_34154__$1;
(statearr_34168_35284[(1)] = (23));

} else {
var statearr_34169_35285 = state_34154__$1;
(statearr_34169_35285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (6))){
var inst_34135 = (state_34154[(11)]);
var inst_34085 = (state_34154[(8)]);
var inst_34133 = (state_34154[(7)]);
var inst_34133__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34085) : topic_fn.call(null,inst_34085));
var inst_34134 = cljs.core.deref(mults);
var inst_34135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34134,inst_34133__$1);
var state_34154__$1 = (function (){var statearr_34170 = state_34154;
(statearr_34170[(11)] = inst_34135__$1);

(statearr_34170[(7)] = inst_34133__$1);

return statearr_34170;
})();
if(cljs.core.truth_(inst_34135__$1)){
var statearr_34171_35286 = state_34154__$1;
(statearr_34171_35286[(1)] = (19));

} else {
var statearr_34172_35287 = state_34154__$1;
(statearr_34172_35287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (25))){
var inst_34144 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34173_35288 = state_34154__$1;
(statearr_34173_35288[(2)] = inst_34144);

(statearr_34173_35288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (17))){
var inst_34109 = (state_34154[(10)]);
var inst_34118 = cljs.core.first(inst_34109);
var inst_34119 = cljs.core.async.muxch_STAR_(inst_34118);
var inst_34120 = cljs.core.async.close_BANG_(inst_34119);
var inst_34121 = cljs.core.next(inst_34109);
var inst_34095 = inst_34121;
var inst_34096 = null;
var inst_34097 = (0);
var inst_34098 = (0);
var state_34154__$1 = (function (){var statearr_34174 = state_34154;
(statearr_34174[(12)] = inst_34098);

(statearr_34174[(13)] = inst_34095);

(statearr_34174[(14)] = inst_34097);

(statearr_34174[(15)] = inst_34096);

(statearr_34174[(16)] = inst_34120);

return statearr_34174;
})();
var statearr_34175_35294 = state_34154__$1;
(statearr_34175_35294[(2)] = null);

(statearr_34175_35294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (3))){
var inst_34152 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34154__$1,inst_34152);
} else {
if((state_val_34155 === (12))){
var inst_34129 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34176_35295 = state_34154__$1;
(statearr_34176_35295[(2)] = inst_34129);

(statearr_34176_35295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (2))){
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34154__$1,(4),ch);
} else {
if((state_val_34155 === (23))){
var state_34154__$1 = state_34154;
var statearr_34177_35296 = state_34154__$1;
(statearr_34177_35296[(2)] = null);

(statearr_34177_35296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (19))){
var inst_34135 = (state_34154[(11)]);
var inst_34085 = (state_34154[(8)]);
var inst_34137 = cljs.core.async.muxch_STAR_(inst_34135);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34154__$1,(22),inst_34137,inst_34085);
} else {
if((state_val_34155 === (11))){
var inst_34095 = (state_34154[(13)]);
var inst_34109 = (state_34154[(10)]);
var inst_34109__$1 = cljs.core.seq(inst_34095);
var state_34154__$1 = (function (){var statearr_34178 = state_34154;
(statearr_34178[(10)] = inst_34109__$1);

return statearr_34178;
})();
if(inst_34109__$1){
var statearr_34179_35298 = state_34154__$1;
(statearr_34179_35298[(1)] = (13));

} else {
var statearr_34180_35300 = state_34154__$1;
(statearr_34180_35300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (9))){
var inst_34131 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34181_35304 = state_34154__$1;
(statearr_34181_35304[(2)] = inst_34131);

(statearr_34181_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (5))){
var inst_34092 = cljs.core.deref(mults);
var inst_34093 = cljs.core.vals(inst_34092);
var inst_34094 = cljs.core.seq(inst_34093);
var inst_34095 = inst_34094;
var inst_34096 = null;
var inst_34097 = (0);
var inst_34098 = (0);
var state_34154__$1 = (function (){var statearr_34182 = state_34154;
(statearr_34182[(12)] = inst_34098);

(statearr_34182[(13)] = inst_34095);

(statearr_34182[(14)] = inst_34097);

(statearr_34182[(15)] = inst_34096);

return statearr_34182;
})();
var statearr_34183_35305 = state_34154__$1;
(statearr_34183_35305[(2)] = null);

(statearr_34183_35305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (14))){
var state_34154__$1 = state_34154;
var statearr_34187_35306 = state_34154__$1;
(statearr_34187_35306[(2)] = null);

(statearr_34187_35306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (16))){
var inst_34109 = (state_34154[(10)]);
var inst_34113 = cljs.core.chunk_first(inst_34109);
var inst_34114 = cljs.core.chunk_rest(inst_34109);
var inst_34115 = cljs.core.count(inst_34113);
var inst_34095 = inst_34114;
var inst_34096 = inst_34113;
var inst_34097 = inst_34115;
var inst_34098 = (0);
var state_34154__$1 = (function (){var statearr_34188 = state_34154;
(statearr_34188[(12)] = inst_34098);

(statearr_34188[(13)] = inst_34095);

(statearr_34188[(14)] = inst_34097);

(statearr_34188[(15)] = inst_34096);

return statearr_34188;
})();
var statearr_34189_35307 = state_34154__$1;
(statearr_34189_35307[(2)] = null);

(statearr_34189_35307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (10))){
var inst_34098 = (state_34154[(12)]);
var inst_34095 = (state_34154[(13)]);
var inst_34097 = (state_34154[(14)]);
var inst_34096 = (state_34154[(15)]);
var inst_34103 = cljs.core._nth(inst_34096,inst_34098);
var inst_34104 = cljs.core.async.muxch_STAR_(inst_34103);
var inst_34105 = cljs.core.async.close_BANG_(inst_34104);
var inst_34106 = (inst_34098 + (1));
var tmp34184 = inst_34095;
var tmp34185 = inst_34097;
var tmp34186 = inst_34096;
var inst_34095__$1 = tmp34184;
var inst_34096__$1 = tmp34186;
var inst_34097__$1 = tmp34185;
var inst_34098__$1 = inst_34106;
var state_34154__$1 = (function (){var statearr_34190 = state_34154;
(statearr_34190[(12)] = inst_34098__$1);

(statearr_34190[(13)] = inst_34095__$1);

(statearr_34190[(14)] = inst_34097__$1);

(statearr_34190[(15)] = inst_34096__$1);

(statearr_34190[(17)] = inst_34105);

return statearr_34190;
})();
var statearr_34191_35308 = state_34154__$1;
(statearr_34191_35308[(2)] = null);

(statearr_34191_35308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (18))){
var inst_34124 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34192_35309 = state_34154__$1;
(statearr_34192_35309[(2)] = inst_34124);

(statearr_34192_35309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (8))){
var inst_34098 = (state_34154[(12)]);
var inst_34097 = (state_34154[(14)]);
var inst_34100 = (inst_34098 < inst_34097);
var inst_34101 = inst_34100;
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34101)){
var statearr_34193_35313 = state_34154__$1;
(statearr_34193_35313[(1)] = (10));

} else {
var statearr_34194_35314 = state_34154__$1;
(statearr_34194_35314[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34195[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34195[(1)] = (1));

return statearr_34195;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34154){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34154);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34196){var ex__33178__auto__ = e34196;
var statearr_34197_35315 = state_34154;
(statearr_34197_35315[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34154[(4)]))){
var statearr_34198_35316 = state_34154;
(statearr_34198_35316[(1)] = cljs.core.first((state_34154[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_34154;
state_34154 = G__35317;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34199 = f__33211__auto__();
(statearr_34199[(6)] = c__33210__auto___35272);

return statearr_34199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34201 = arguments.length;
switch (G__34201) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34203 = arguments.length;
switch (G__34203) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34205 = arguments.length;
switch (G__34205) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33210__auto___35322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34248){
var state_val_34249 = (state_34248[(1)]);
if((state_val_34249 === (7))){
var state_34248__$1 = state_34248;
var statearr_34250_35323 = state_34248__$1;
(statearr_34250_35323[(2)] = null);

(statearr_34250_35323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (1))){
var state_34248__$1 = state_34248;
var statearr_34251_35324 = state_34248__$1;
(statearr_34251_35324[(2)] = null);

(statearr_34251_35324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (4))){
var inst_34208 = (state_34248[(7)]);
var inst_34209 = (state_34248[(8)]);
var inst_34211 = (inst_34209 < inst_34208);
var state_34248__$1 = state_34248;
if(cljs.core.truth_(inst_34211)){
var statearr_34252_35326 = state_34248__$1;
(statearr_34252_35326[(1)] = (6));

} else {
var statearr_34253_35330 = state_34248__$1;
(statearr_34253_35330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (15))){
var inst_34234 = (state_34248[(9)]);
var inst_34239 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34234);
var state_34248__$1 = state_34248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34248__$1,(17),out,inst_34239);
} else {
if((state_val_34249 === (13))){
var inst_34234 = (state_34248[(9)]);
var inst_34234__$1 = (state_34248[(2)]);
var inst_34235 = cljs.core.some(cljs.core.nil_QMARK_,inst_34234__$1);
var state_34248__$1 = (function (){var statearr_34254 = state_34248;
(statearr_34254[(9)] = inst_34234__$1);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34235)){
var statearr_34255_35335 = state_34248__$1;
(statearr_34255_35335[(1)] = (14));

} else {
var statearr_34256_35336 = state_34248__$1;
(statearr_34256_35336[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (6))){
var state_34248__$1 = state_34248;
var statearr_34257_35337 = state_34248__$1;
(statearr_34257_35337[(2)] = null);

(statearr_34257_35337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (17))){
var inst_34241 = (state_34248[(2)]);
var state_34248__$1 = (function (){var statearr_34259 = state_34248;
(statearr_34259[(10)] = inst_34241);

return statearr_34259;
})();
var statearr_34260_35340 = state_34248__$1;
(statearr_34260_35340[(2)] = null);

(statearr_34260_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (3))){
var inst_34246 = (state_34248[(2)]);
var state_34248__$1 = state_34248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34248__$1,inst_34246);
} else {
if((state_val_34249 === (12))){
var _ = (function (){var statearr_34261 = state_34248;
(statearr_34261[(4)] = cljs.core.rest((state_34248[(4)])));

return statearr_34261;
})();
var state_34248__$1 = state_34248;
var ex34258 = (state_34248__$1[(2)]);
var statearr_34262_35341 = state_34248__$1;
(statearr_34262_35341[(5)] = ex34258);


if((ex34258 instanceof Object)){
var statearr_34263_35342 = state_34248__$1;
(statearr_34263_35342[(1)] = (11));

(statearr_34263_35342[(5)] = null);

} else {
throw ex34258;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (2))){
var inst_34207 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34208 = cnt;
var inst_34209 = (0);
var state_34248__$1 = (function (){var statearr_34264 = state_34248;
(statearr_34264[(11)] = inst_34207);

(statearr_34264[(7)] = inst_34208);

(statearr_34264[(8)] = inst_34209);

return statearr_34264;
})();
var statearr_34265_35343 = state_34248__$1;
(statearr_34265_35343[(2)] = null);

(statearr_34265_35343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (11))){
var inst_34213 = (state_34248[(2)]);
var inst_34214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34248__$1 = (function (){var statearr_34266 = state_34248;
(statearr_34266[(12)] = inst_34213);

return statearr_34266;
})();
var statearr_34267_35344 = state_34248__$1;
(statearr_34267_35344[(2)] = inst_34214);

(statearr_34267_35344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (9))){
var inst_34209 = (state_34248[(8)]);
var _ = (function (){var statearr_34268 = state_34248;
(statearr_34268[(4)] = cljs.core.cons((12),(state_34248[(4)])));

return statearr_34268;
})();
var inst_34220 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34209) : chs__$1.call(null,inst_34209));
var inst_34221 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34209) : done.call(null,inst_34209));
var inst_34222 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34220,inst_34221);
var ___$1 = (function (){var statearr_34269 = state_34248;
(statearr_34269[(4)] = cljs.core.rest((state_34248[(4)])));

return statearr_34269;
})();
var state_34248__$1 = state_34248;
var statearr_34270_35345 = state_34248__$1;
(statearr_34270_35345[(2)] = inst_34222);

(statearr_34270_35345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (5))){
var inst_34232 = (state_34248[(2)]);
var state_34248__$1 = (function (){var statearr_34271 = state_34248;
(statearr_34271[(13)] = inst_34232);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34248__$1,(13),dchan);
} else {
if((state_val_34249 === (14))){
var inst_34237 = cljs.core.async.close_BANG_(out);
var state_34248__$1 = state_34248;
var statearr_34272_35346 = state_34248__$1;
(statearr_34272_35346[(2)] = inst_34237);

(statearr_34272_35346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (16))){
var inst_34244 = (state_34248[(2)]);
var state_34248__$1 = state_34248;
var statearr_34273_35347 = state_34248__$1;
(statearr_34273_35347[(2)] = inst_34244);

(statearr_34273_35347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (10))){
var inst_34209 = (state_34248[(8)]);
var inst_34225 = (state_34248[(2)]);
var inst_34226 = (inst_34209 + (1));
var inst_34209__$1 = inst_34226;
var state_34248__$1 = (function (){var statearr_34274 = state_34248;
(statearr_34274[(14)] = inst_34225);

(statearr_34274[(8)] = inst_34209__$1);

return statearr_34274;
})();
var statearr_34275_35348 = state_34248__$1;
(statearr_34275_35348[(2)] = null);

(statearr_34275_35348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34249 === (8))){
var inst_34230 = (state_34248[(2)]);
var state_34248__$1 = state_34248;
var statearr_34276_35349 = state_34248__$1;
(statearr_34276_35349[(2)] = inst_34230);

(statearr_34276_35349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34248){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34248);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34278){var ex__33178__auto__ = e34278;
var statearr_34279_35350 = state_34248;
(statearr_34279_35350[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34248[(4)]))){
var statearr_34280_35351 = state_34248;
(statearr_34280_35351[(1)] = cljs.core.first((state_34248[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35352 = state_34248;
state_34248 = G__35352;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34281 = f__33211__auto__();
(statearr_34281[(6)] = c__33210__auto___35322);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34284 = arguments.length;
switch (G__34284) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34316){
var state_val_34317 = (state_34316[(1)]);
if((state_val_34317 === (7))){
var inst_34296 = (state_34316[(7)]);
var inst_34295 = (state_34316[(8)]);
var inst_34295__$1 = (state_34316[(2)]);
var inst_34296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34295__$1,(0),null);
var inst_34297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34295__$1,(1),null);
var inst_34298 = (inst_34296__$1 == null);
var state_34316__$1 = (function (){var statearr_34318 = state_34316;
(statearr_34318[(9)] = inst_34297);

(statearr_34318[(7)] = inst_34296__$1);

(statearr_34318[(8)] = inst_34295__$1);

return statearr_34318;
})();
if(cljs.core.truth_(inst_34298)){
var statearr_34319_35365 = state_34316__$1;
(statearr_34319_35365[(1)] = (8));

} else {
var statearr_34320_35366 = state_34316__$1;
(statearr_34320_35366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (1))){
var inst_34285 = cljs.core.vec(chs);
var inst_34286 = inst_34285;
var state_34316__$1 = (function (){var statearr_34321 = state_34316;
(statearr_34321[(10)] = inst_34286);

return statearr_34321;
})();
var statearr_34322_35367 = state_34316__$1;
(statearr_34322_35367[(2)] = null);

(statearr_34322_35367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (4))){
var inst_34286 = (state_34316[(10)]);
var state_34316__$1 = state_34316;
return cljs.core.async.ioc_alts_BANG_(state_34316__$1,(7),inst_34286);
} else {
if((state_val_34317 === (6))){
var inst_34312 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
var statearr_34323_35371 = state_34316__$1;
(statearr_34323_35371[(2)] = inst_34312);

(statearr_34323_35371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (3))){
var inst_34314 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34316__$1,inst_34314);
} else {
if((state_val_34317 === (2))){
var inst_34286 = (state_34316[(10)]);
var inst_34288 = cljs.core.count(inst_34286);
var inst_34289 = (inst_34288 > (0));
var state_34316__$1 = state_34316;
if(cljs.core.truth_(inst_34289)){
var statearr_34325_35372 = state_34316__$1;
(statearr_34325_35372[(1)] = (4));

} else {
var statearr_34326_35376 = state_34316__$1;
(statearr_34326_35376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (11))){
var inst_34286 = (state_34316[(10)]);
var inst_34305 = (state_34316[(2)]);
var tmp34324 = inst_34286;
var inst_34286__$1 = tmp34324;
var state_34316__$1 = (function (){var statearr_34327 = state_34316;
(statearr_34327[(11)] = inst_34305);

(statearr_34327[(10)] = inst_34286__$1);

return statearr_34327;
})();
var statearr_34328_35377 = state_34316__$1;
(statearr_34328_35377[(2)] = null);

(statearr_34328_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (9))){
var inst_34296 = (state_34316[(7)]);
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34316__$1,(11),out,inst_34296);
} else {
if((state_val_34317 === (5))){
var inst_34310 = cljs.core.async.close_BANG_(out);
var state_34316__$1 = state_34316;
var statearr_34329_35381 = state_34316__$1;
(statearr_34329_35381[(2)] = inst_34310);

(statearr_34329_35381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (10))){
var inst_34308 = (state_34316[(2)]);
var state_34316__$1 = state_34316;
var statearr_34330_35382 = state_34316__$1;
(statearr_34330_35382[(2)] = inst_34308);

(statearr_34330_35382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34317 === (8))){
var inst_34297 = (state_34316[(9)]);
var inst_34286 = (state_34316[(10)]);
var inst_34296 = (state_34316[(7)]);
var inst_34295 = (state_34316[(8)]);
var inst_34300 = (function (){var cs = inst_34286;
var vec__34291 = inst_34295;
var v = inst_34296;
var c = inst_34297;
return (function (p1__34282_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34282_SHARP_);
});
})();
var inst_34301 = cljs.core.filterv(inst_34300,inst_34286);
var inst_34286__$1 = inst_34301;
var state_34316__$1 = (function (){var statearr_34331 = state_34316;
(statearr_34331[(10)] = inst_34286__$1);

return statearr_34331;
})();
var statearr_34332_35384 = state_34316__$1;
(statearr_34332_35384[(2)] = null);

(statearr_34332_35384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34333[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34333[(1)] = (1));

return statearr_34333;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34316){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34316);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34334){var ex__33178__auto__ = e34334;
var statearr_34335_35385 = state_34316;
(statearr_34335_35385[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34316[(4)]))){
var statearr_34336_35386 = state_34316;
(statearr_34336_35386[(1)] = cljs.core.first((state_34316[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35387 = state_34316;
state_34316 = G__35387;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34337 = f__33211__auto__();
(statearr_34337[(6)] = c__33210__auto___35357);

return statearr_34337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34339 = arguments.length;
switch (G__34339) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34363){
var state_val_34364 = (state_34363[(1)]);
if((state_val_34364 === (7))){
var inst_34345 = (state_34363[(7)]);
var inst_34345__$1 = (state_34363[(2)]);
var inst_34346 = (inst_34345__$1 == null);
var inst_34347 = cljs.core.not(inst_34346);
var state_34363__$1 = (function (){var statearr_34365 = state_34363;
(statearr_34365[(7)] = inst_34345__$1);

return statearr_34365;
})();
if(inst_34347){
var statearr_34366_35405 = state_34363__$1;
(statearr_34366_35405[(1)] = (8));

} else {
var statearr_34367_35406 = state_34363__$1;
(statearr_34367_35406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (1))){
var inst_34340 = (0);
var state_34363__$1 = (function (){var statearr_34368 = state_34363;
(statearr_34368[(8)] = inst_34340);

return statearr_34368;
})();
var statearr_34369_35407 = state_34363__$1;
(statearr_34369_35407[(2)] = null);

(statearr_34369_35407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (4))){
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34363__$1,(7),ch);
} else {
if((state_val_34364 === (6))){
var inst_34358 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34370_35408 = state_34363__$1;
(statearr_34370_35408[(2)] = inst_34358);

(statearr_34370_35408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (3))){
var inst_34360 = (state_34363[(2)]);
var inst_34361 = cljs.core.async.close_BANG_(out);
var state_34363__$1 = (function (){var statearr_34371 = state_34363;
(statearr_34371[(9)] = inst_34360);

return statearr_34371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34363__$1,inst_34361);
} else {
if((state_val_34364 === (2))){
var inst_34340 = (state_34363[(8)]);
var inst_34342 = (inst_34340 < n);
var state_34363__$1 = state_34363;
if(cljs.core.truth_(inst_34342)){
var statearr_34372_35409 = state_34363__$1;
(statearr_34372_35409[(1)] = (4));

} else {
var statearr_34373_35410 = state_34363__$1;
(statearr_34373_35410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (11))){
var inst_34340 = (state_34363[(8)]);
var inst_34350 = (state_34363[(2)]);
var inst_34351 = (inst_34340 + (1));
var inst_34340__$1 = inst_34351;
var state_34363__$1 = (function (){var statearr_34374 = state_34363;
(statearr_34374[(8)] = inst_34340__$1);

(statearr_34374[(10)] = inst_34350);

return statearr_34374;
})();
var statearr_34375_35411 = state_34363__$1;
(statearr_34375_35411[(2)] = null);

(statearr_34375_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (9))){
var state_34363__$1 = state_34363;
var statearr_34376_35412 = state_34363__$1;
(statearr_34376_35412[(2)] = null);

(statearr_34376_35412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (5))){
var state_34363__$1 = state_34363;
var statearr_34377_35413 = state_34363__$1;
(statearr_34377_35413[(2)] = null);

(statearr_34377_35413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (10))){
var inst_34355 = (state_34363[(2)]);
var state_34363__$1 = state_34363;
var statearr_34378_35420 = state_34363__$1;
(statearr_34378_35420[(2)] = inst_34355);

(statearr_34378_35420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34364 === (8))){
var inst_34345 = (state_34363[(7)]);
var state_34363__$1 = state_34363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34363__$1,(11),out,inst_34345);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34363){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34363);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34380){var ex__33178__auto__ = e34380;
var statearr_34381_35421 = state_34363;
(statearr_34381_35421[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34363[(4)]))){
var statearr_34382_35422 = state_34363;
(statearr_34382_35422[(1)] = cljs.core.first((state_34363[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35423 = state_34363;
state_34363 = G__35423;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34383 = f__33211__auto__();
(statearr_34383[(6)] = c__33210__auto___35404);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34385 = (function (f,ch,meta34386){
this.f = f;
this.ch = ch;
this.meta34386 = meta34386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34387,meta34386__$1){
var self__ = this;
var _34387__$1 = this;
return (new cljs.core.async.t_cljs$core$async34385(self__.f,self__.ch,meta34386__$1));
}));

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34387){
var self__ = this;
var _34387__$1 = this;
return self__.meta34386;
}));

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34388 = (function (f,ch,meta34386,_,fn1,meta34389){
this.f = f;
this.ch = ch;
this.meta34386 = meta34386;
this._ = _;
this.fn1 = fn1;
this.meta34389 = meta34389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34390,meta34389__$1){
var self__ = this;
var _34390__$1 = this;
return (new cljs.core.async.t_cljs$core$async34388(self__.f,self__.ch,self__.meta34386,self__._,self__.fn1,meta34389__$1));
}));

(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34390){
var self__ = this;
var _34390__$1 = this;
return self__.meta34389;
}));

(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34384_SHARP_){
var G__34391 = (((p1__34384_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34384_SHARP_) : self__.f.call(null,p1__34384_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34391) : f1.call(null,G__34391));
});
}));

(cljs.core.async.t_cljs$core$async34388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34386","meta34386",-1998832075,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34385","cljs.core.async/t_cljs$core$async34385",198070007,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34389","meta34389",-161992131,null)], null);
}));

(cljs.core.async.t_cljs$core$async34388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34388");

(cljs.core.async.t_cljs$core$async34388.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34388.
 */
cljs.core.async.__GT_t_cljs$core$async34388 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34388(f__$1,ch__$1,meta34386__$1,___$2,fn1__$1,meta34389){
return (new cljs.core.async.t_cljs$core$async34388(f__$1,ch__$1,meta34386__$1,___$2,fn1__$1,meta34389));
});

}

return (new cljs.core.async.t_cljs$core$async34388(self__.f,self__.ch,self__.meta34386,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34392 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34392) : self__.f.call(null,G__34392));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34386","meta34386",-1998832075,null)], null);
}));

(cljs.core.async.t_cljs$core$async34385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34385");

(cljs.core.async.t_cljs$core$async34385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34385.
 */
cljs.core.async.__GT_t_cljs$core$async34385 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34385(f__$1,ch__$1,meta34386){
return (new cljs.core.async.t_cljs$core$async34385(f__$1,ch__$1,meta34386));
});

}

return (new cljs.core.async.t_cljs$core$async34385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34393 = (function (f,ch,meta34394){
this.f = f;
this.ch = ch;
this.meta34394 = meta34394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34395,meta34394__$1){
var self__ = this;
var _34395__$1 = this;
return (new cljs.core.async.t_cljs$core$async34393(self__.f,self__.ch,meta34394__$1));
}));

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34395){
var self__ = this;
var _34395__$1 = this;
return self__.meta34394;
}));

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34394","meta34394",1775188063,null)], null);
}));

(cljs.core.async.t_cljs$core$async34393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34393");

(cljs.core.async.t_cljs$core$async34393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34393.
 */
cljs.core.async.__GT_t_cljs$core$async34393 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34393(f__$1,ch__$1,meta34394){
return (new cljs.core.async.t_cljs$core$async34393(f__$1,ch__$1,meta34394));
});

}

return (new cljs.core.async.t_cljs$core$async34393(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34396 = (function (p,ch,meta34397){
this.p = p;
this.ch = ch;
this.meta34397 = meta34397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34398,meta34397__$1){
var self__ = this;
var _34398__$1 = this;
return (new cljs.core.async.t_cljs$core$async34396(self__.p,self__.ch,meta34397__$1));
}));

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34398){
var self__ = this;
var _34398__$1 = this;
return self__.meta34397;
}));

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34397","meta34397",-1610854817,null)], null);
}));

(cljs.core.async.t_cljs$core$async34396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34396");

(cljs.core.async.t_cljs$core$async34396.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34396.
 */
cljs.core.async.__GT_t_cljs$core$async34396 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34396(p__$1,ch__$1,meta34397){
return (new cljs.core.async.t_cljs$core$async34396(p__$1,ch__$1,meta34397));
});

}

return (new cljs.core.async.t_cljs$core$async34396(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34400 = arguments.length;
switch (G__34400) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34421){
var state_val_34422 = (state_34421[(1)]);
if((state_val_34422 === (7))){
var inst_34417 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34423_35442 = state_34421__$1;
(statearr_34423_35442[(2)] = inst_34417);

(statearr_34423_35442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (1))){
var state_34421__$1 = state_34421;
var statearr_34424_35443 = state_34421__$1;
(statearr_34424_35443[(2)] = null);

(statearr_34424_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (4))){
var inst_34403 = (state_34421[(7)]);
var inst_34403__$1 = (state_34421[(2)]);
var inst_34404 = (inst_34403__$1 == null);
var state_34421__$1 = (function (){var statearr_34425 = state_34421;
(statearr_34425[(7)] = inst_34403__$1);

return statearr_34425;
})();
if(cljs.core.truth_(inst_34404)){
var statearr_34426_35444 = state_34421__$1;
(statearr_34426_35444[(1)] = (5));

} else {
var statearr_34427_35445 = state_34421__$1;
(statearr_34427_35445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (6))){
var inst_34403 = (state_34421[(7)]);
var inst_34408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34403) : p.call(null,inst_34403));
var state_34421__$1 = state_34421;
if(cljs.core.truth_(inst_34408)){
var statearr_34428_35446 = state_34421__$1;
(statearr_34428_35446[(1)] = (8));

} else {
var statearr_34429_35447 = state_34421__$1;
(statearr_34429_35447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (3))){
var inst_34419 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34421__$1,inst_34419);
} else {
if((state_val_34422 === (2))){
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34421__$1,(4),ch);
} else {
if((state_val_34422 === (11))){
var inst_34411 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34430_35448 = state_34421__$1;
(statearr_34430_35448[(2)] = inst_34411);

(statearr_34430_35448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (9))){
var state_34421__$1 = state_34421;
var statearr_34431_35449 = state_34421__$1;
(statearr_34431_35449[(2)] = null);

(statearr_34431_35449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (5))){
var inst_34406 = cljs.core.async.close_BANG_(out);
var state_34421__$1 = state_34421;
var statearr_34432_35450 = state_34421__$1;
(statearr_34432_35450[(2)] = inst_34406);

(statearr_34432_35450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (10))){
var inst_34414 = (state_34421[(2)]);
var state_34421__$1 = (function (){var statearr_34433 = state_34421;
(statearr_34433[(8)] = inst_34414);

return statearr_34433;
})();
var statearr_34434_35453 = state_34421__$1;
(statearr_34434_35453[(2)] = null);

(statearr_34434_35453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (8))){
var inst_34403 = (state_34421[(7)]);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34421__$1,(11),out,inst_34403);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null,null,null];
(statearr_34435[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34421){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34421);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34436){var ex__33178__auto__ = e34436;
var statearr_34437_35459 = state_34421;
(statearr_34437_35459[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34421[(4)]))){
var statearr_34438_35460 = state_34421;
(statearr_34438_35460[(1)] = cljs.core.first((state_34421[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_34421;
state_34421 = G__35462;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34439 = f__33211__auto__();
(statearr_34439[(6)] = c__33210__auto___35441);

return statearr_34439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34441 = arguments.length;
switch (G__34441) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33210__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34503){
var state_val_34504 = (state_34503[(1)]);
if((state_val_34504 === (7))){
var inst_34499 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
var statearr_34505_35468 = state_34503__$1;
(statearr_34505_35468[(2)] = inst_34499);

(statearr_34505_35468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (20))){
var inst_34469 = (state_34503[(7)]);
var inst_34480 = (state_34503[(2)]);
var inst_34481 = cljs.core.next(inst_34469);
var inst_34455 = inst_34481;
var inst_34456 = null;
var inst_34457 = (0);
var inst_34458 = (0);
var state_34503__$1 = (function (){var statearr_34506 = state_34503;
(statearr_34506[(8)] = inst_34457);

(statearr_34506[(9)] = inst_34455);

(statearr_34506[(10)] = inst_34456);

(statearr_34506[(11)] = inst_34458);

(statearr_34506[(12)] = inst_34480);

return statearr_34506;
})();
var statearr_34507_35469 = state_34503__$1;
(statearr_34507_35469[(2)] = null);

(statearr_34507_35469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (1))){
var state_34503__$1 = state_34503;
var statearr_34508_35470 = state_34503__$1;
(statearr_34508_35470[(2)] = null);

(statearr_34508_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (4))){
var inst_34444 = (state_34503[(13)]);
var inst_34444__$1 = (state_34503[(2)]);
var inst_34445 = (inst_34444__$1 == null);
var state_34503__$1 = (function (){var statearr_34509 = state_34503;
(statearr_34509[(13)] = inst_34444__$1);

return statearr_34509;
})();
if(cljs.core.truth_(inst_34445)){
var statearr_34510_35472 = state_34503__$1;
(statearr_34510_35472[(1)] = (5));

} else {
var statearr_34511_35473 = state_34503__$1;
(statearr_34511_35473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (15))){
var state_34503__$1 = state_34503;
var statearr_34515_35474 = state_34503__$1;
(statearr_34515_35474[(2)] = null);

(statearr_34515_35474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (21))){
var state_34503__$1 = state_34503;
var statearr_34516_35476 = state_34503__$1;
(statearr_34516_35476[(2)] = null);

(statearr_34516_35476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (13))){
var inst_34457 = (state_34503[(8)]);
var inst_34455 = (state_34503[(9)]);
var inst_34456 = (state_34503[(10)]);
var inst_34458 = (state_34503[(11)]);
var inst_34465 = (state_34503[(2)]);
var inst_34466 = (inst_34458 + (1));
var tmp34512 = inst_34457;
var tmp34513 = inst_34455;
var tmp34514 = inst_34456;
var inst_34455__$1 = tmp34513;
var inst_34456__$1 = tmp34514;
var inst_34457__$1 = tmp34512;
var inst_34458__$1 = inst_34466;
var state_34503__$1 = (function (){var statearr_34517 = state_34503;
(statearr_34517[(8)] = inst_34457__$1);

(statearr_34517[(9)] = inst_34455__$1);

(statearr_34517[(10)] = inst_34456__$1);

(statearr_34517[(11)] = inst_34458__$1);

(statearr_34517[(14)] = inst_34465);

return statearr_34517;
})();
var statearr_34518_35477 = state_34503__$1;
(statearr_34518_35477[(2)] = null);

(statearr_34518_35477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (22))){
var state_34503__$1 = state_34503;
var statearr_34519_35478 = state_34503__$1;
(statearr_34519_35478[(2)] = null);

(statearr_34519_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (6))){
var inst_34444 = (state_34503[(13)]);
var inst_34453 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34444) : f.call(null,inst_34444));
var inst_34454 = cljs.core.seq(inst_34453);
var inst_34455 = inst_34454;
var inst_34456 = null;
var inst_34457 = (0);
var inst_34458 = (0);
var state_34503__$1 = (function (){var statearr_34520 = state_34503;
(statearr_34520[(8)] = inst_34457);

(statearr_34520[(9)] = inst_34455);

(statearr_34520[(10)] = inst_34456);

(statearr_34520[(11)] = inst_34458);

return statearr_34520;
})();
var statearr_34521_35479 = state_34503__$1;
(statearr_34521_35479[(2)] = null);

(statearr_34521_35479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (17))){
var inst_34469 = (state_34503[(7)]);
var inst_34473 = cljs.core.chunk_first(inst_34469);
var inst_34474 = cljs.core.chunk_rest(inst_34469);
var inst_34475 = cljs.core.count(inst_34473);
var inst_34455 = inst_34474;
var inst_34456 = inst_34473;
var inst_34457 = inst_34475;
var inst_34458 = (0);
var state_34503__$1 = (function (){var statearr_34522 = state_34503;
(statearr_34522[(8)] = inst_34457);

(statearr_34522[(9)] = inst_34455);

(statearr_34522[(10)] = inst_34456);

(statearr_34522[(11)] = inst_34458);

return statearr_34522;
})();
var statearr_34523_35482 = state_34503__$1;
(statearr_34523_35482[(2)] = null);

(statearr_34523_35482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (3))){
var inst_34501 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34503__$1,inst_34501);
} else {
if((state_val_34504 === (12))){
var inst_34489 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
var statearr_34524_35483 = state_34503__$1;
(statearr_34524_35483[(2)] = inst_34489);

(statearr_34524_35483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (2))){
var state_34503__$1 = state_34503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34503__$1,(4),in$);
} else {
if((state_val_34504 === (23))){
var inst_34497 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
var statearr_34525_35485 = state_34503__$1;
(statearr_34525_35485[(2)] = inst_34497);

(statearr_34525_35485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (19))){
var inst_34484 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
var statearr_34526_35486 = state_34503__$1;
(statearr_34526_35486[(2)] = inst_34484);

(statearr_34526_35486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (11))){
var inst_34455 = (state_34503[(9)]);
var inst_34469 = (state_34503[(7)]);
var inst_34469__$1 = cljs.core.seq(inst_34455);
var state_34503__$1 = (function (){var statearr_34527 = state_34503;
(statearr_34527[(7)] = inst_34469__$1);

return statearr_34527;
})();
if(inst_34469__$1){
var statearr_34528_35488 = state_34503__$1;
(statearr_34528_35488[(1)] = (14));

} else {
var statearr_34529_35489 = state_34503__$1;
(statearr_34529_35489[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (9))){
var inst_34491 = (state_34503[(2)]);
var inst_34492 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34503__$1 = (function (){var statearr_34530 = state_34503;
(statearr_34530[(15)] = inst_34491);

return statearr_34530;
})();
if(cljs.core.truth_(inst_34492)){
var statearr_34531_35490 = state_34503__$1;
(statearr_34531_35490[(1)] = (21));

} else {
var statearr_34532_35492 = state_34503__$1;
(statearr_34532_35492[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (5))){
var inst_34447 = cljs.core.async.close_BANG_(out);
var state_34503__$1 = state_34503;
var statearr_34533_35493 = state_34503__$1;
(statearr_34533_35493[(2)] = inst_34447);

(statearr_34533_35493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (14))){
var inst_34469 = (state_34503[(7)]);
var inst_34471 = cljs.core.chunked_seq_QMARK_(inst_34469);
var state_34503__$1 = state_34503;
if(inst_34471){
var statearr_34534_35494 = state_34503__$1;
(statearr_34534_35494[(1)] = (17));

} else {
var statearr_34535_35495 = state_34503__$1;
(statearr_34535_35495[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (16))){
var inst_34487 = (state_34503[(2)]);
var state_34503__$1 = state_34503;
var statearr_34536_35497 = state_34503__$1;
(statearr_34536_35497[(2)] = inst_34487);

(statearr_34536_35497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34504 === (10))){
var inst_34456 = (state_34503[(10)]);
var inst_34458 = (state_34503[(11)]);
var inst_34463 = cljs.core._nth(inst_34456,inst_34458);
var state_34503__$1 = state_34503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34503__$1,(13),out,inst_34463);
} else {
if((state_val_34504 === (18))){
var inst_34469 = (state_34503[(7)]);
var inst_34478 = cljs.core.first(inst_34469);
var state_34503__$1 = state_34503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34503__$1,(20),out,inst_34478);
} else {
if((state_val_34504 === (8))){
var inst_34457 = (state_34503[(8)]);
var inst_34458 = (state_34503[(11)]);
var inst_34460 = (inst_34458 < inst_34457);
var inst_34461 = inst_34460;
var state_34503__$1 = state_34503;
if(cljs.core.truth_(inst_34461)){
var statearr_34537_35498 = state_34503__$1;
(statearr_34537_35498[(1)] = (10));

} else {
var statearr_34538_35499 = state_34503__$1;
(statearr_34538_35499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____0 = (function (){
var statearr_34539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34539[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__);

(statearr_34539[(1)] = (1));

return statearr_34539;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____1 = (function (state_34503){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34503);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34540){var ex__33178__auto__ = e34540;
var statearr_34541_35500 = state_34503;
(statearr_34541_35500[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34503[(4)]))){
var statearr_34542_35502 = state_34503;
(statearr_34542_35502[(1)] = cljs.core.first((state_34503[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35507 = state_34503;
state_34503 = G__35507;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__ = function(state_34503){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____1.call(this,state_34503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33175__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34543 = f__33211__auto__();
(statearr_34543[(6)] = c__33210__auto__);

return statearr_34543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));

return c__33210__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34545 = arguments.length;
switch (G__34545) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34547 = arguments.length;
switch (G__34547) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34549 = arguments.length;
switch (G__34549) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34573){
var state_val_34574 = (state_34573[(1)]);
if((state_val_34574 === (7))){
var inst_34568 = (state_34573[(2)]);
var state_34573__$1 = state_34573;
var statearr_34575_35538 = state_34573__$1;
(statearr_34575_35538[(2)] = inst_34568);

(statearr_34575_35538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (1))){
var inst_34550 = null;
var state_34573__$1 = (function (){var statearr_34576 = state_34573;
(statearr_34576[(7)] = inst_34550);

return statearr_34576;
})();
var statearr_34577_35543 = state_34573__$1;
(statearr_34577_35543[(2)] = null);

(statearr_34577_35543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (4))){
var inst_34553 = (state_34573[(8)]);
var inst_34553__$1 = (state_34573[(2)]);
var inst_34554 = (inst_34553__$1 == null);
var inst_34555 = cljs.core.not(inst_34554);
var state_34573__$1 = (function (){var statearr_34578 = state_34573;
(statearr_34578[(8)] = inst_34553__$1);

return statearr_34578;
})();
if(inst_34555){
var statearr_34579_35550 = state_34573__$1;
(statearr_34579_35550[(1)] = (5));

} else {
var statearr_34580_35551 = state_34573__$1;
(statearr_34580_35551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (6))){
var state_34573__$1 = state_34573;
var statearr_34581_35554 = state_34573__$1;
(statearr_34581_35554[(2)] = null);

(statearr_34581_35554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (3))){
var inst_34570 = (state_34573[(2)]);
var inst_34571 = cljs.core.async.close_BANG_(out);
var state_34573__$1 = (function (){var statearr_34582 = state_34573;
(statearr_34582[(9)] = inst_34570);

return statearr_34582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34573__$1,inst_34571);
} else {
if((state_val_34574 === (2))){
var state_34573__$1 = state_34573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34573__$1,(4),ch);
} else {
if((state_val_34574 === (11))){
var inst_34553 = (state_34573[(8)]);
var inst_34562 = (state_34573[(2)]);
var inst_34550 = inst_34553;
var state_34573__$1 = (function (){var statearr_34583 = state_34573;
(statearr_34583[(7)] = inst_34550);

(statearr_34583[(10)] = inst_34562);

return statearr_34583;
})();
var statearr_34584_35556 = state_34573__$1;
(statearr_34584_35556[(2)] = null);

(statearr_34584_35556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (9))){
var inst_34553 = (state_34573[(8)]);
var state_34573__$1 = state_34573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34573__$1,(11),out,inst_34553);
} else {
if((state_val_34574 === (5))){
var inst_34550 = (state_34573[(7)]);
var inst_34553 = (state_34573[(8)]);
var inst_34557 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34553,inst_34550);
var state_34573__$1 = state_34573;
if(inst_34557){
var statearr_34586_35558 = state_34573__$1;
(statearr_34586_35558[(1)] = (8));

} else {
var statearr_34587_35559 = state_34573__$1;
(statearr_34587_35559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (10))){
var inst_34565 = (state_34573[(2)]);
var state_34573__$1 = state_34573;
var statearr_34588_35560 = state_34573__$1;
(statearr_34588_35560[(2)] = inst_34565);

(statearr_34588_35560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34574 === (8))){
var inst_34550 = (state_34573[(7)]);
var tmp34585 = inst_34550;
var inst_34550__$1 = tmp34585;
var state_34573__$1 = (function (){var statearr_34589 = state_34573;
(statearr_34589[(7)] = inst_34550__$1);

return statearr_34589;
})();
var statearr_34590_35561 = state_34573__$1;
(statearr_34590_35561[(2)] = null);

(statearr_34590_35561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34591[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34573){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34573);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34592){var ex__33178__auto__ = e34592;
var statearr_34593_35562 = state_34573;
(statearr_34593_35562[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34573[(4)]))){
var statearr_34594_35564 = state_34573;
(statearr_34594_35564[(1)] = cljs.core.first((state_34573[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_34573;
state_34573 = G__35565;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34595 = f__33211__auto__();
(statearr_34595[(6)] = c__33210__auto___35533);

return statearr_34595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34635){
var state_val_34636 = (state_34635[(1)]);
if((state_val_34636 === (7))){
var inst_34631 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34637_35572 = state_34635__$1;
(statearr_34637_35572[(2)] = inst_34631);

(statearr_34637_35572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (1))){
var inst_34598 = (new Array(n));
var inst_34599 = inst_34598;
var inst_34600 = (0);
var state_34635__$1 = (function (){var statearr_34638 = state_34635;
(statearr_34638[(7)] = inst_34599);

(statearr_34638[(8)] = inst_34600);

return statearr_34638;
})();
var statearr_34639_35573 = state_34635__$1;
(statearr_34639_35573[(2)] = null);

(statearr_34639_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (4))){
var inst_34603 = (state_34635[(9)]);
var inst_34603__$1 = (state_34635[(2)]);
var inst_34604 = (inst_34603__$1 == null);
var inst_34605 = cljs.core.not(inst_34604);
var state_34635__$1 = (function (){var statearr_34640 = state_34635;
(statearr_34640[(9)] = inst_34603__$1);

return statearr_34640;
})();
if(inst_34605){
var statearr_34641_35574 = state_34635__$1;
(statearr_34641_35574[(1)] = (5));

} else {
var statearr_34642_35575 = state_34635__$1;
(statearr_34642_35575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (15))){
var inst_34625 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34643_35576 = state_34635__$1;
(statearr_34643_35576[(2)] = inst_34625);

(statearr_34643_35576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (13))){
var state_34635__$1 = state_34635;
var statearr_34644_35581 = state_34635__$1;
(statearr_34644_35581[(2)] = null);

(statearr_34644_35581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (6))){
var inst_34600 = (state_34635[(8)]);
var inst_34621 = (inst_34600 > (0));
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34621)){
var statearr_34645_35588 = state_34635__$1;
(statearr_34645_35588[(1)] = (12));

} else {
var statearr_34646_35589 = state_34635__$1;
(statearr_34646_35589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (3))){
var inst_34633 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34635__$1,inst_34633);
} else {
if((state_val_34636 === (12))){
var inst_34599 = (state_34635[(7)]);
var inst_34623 = cljs.core.vec(inst_34599);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34635__$1,(15),out,inst_34623);
} else {
if((state_val_34636 === (2))){
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34635__$1,(4),ch);
} else {
if((state_val_34636 === (11))){
var inst_34615 = (state_34635[(2)]);
var inst_34616 = (new Array(n));
var inst_34599 = inst_34616;
var inst_34600 = (0);
var state_34635__$1 = (function (){var statearr_34647 = state_34635;
(statearr_34647[(7)] = inst_34599);

(statearr_34647[(8)] = inst_34600);

(statearr_34647[(10)] = inst_34615);

return statearr_34647;
})();
var statearr_34648_35608 = state_34635__$1;
(statearr_34648_35608[(2)] = null);

(statearr_34648_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (9))){
var inst_34599 = (state_34635[(7)]);
var inst_34613 = cljs.core.vec(inst_34599);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34635__$1,(11),out,inst_34613);
} else {
if((state_val_34636 === (5))){
var inst_34599 = (state_34635[(7)]);
var inst_34603 = (state_34635[(9)]);
var inst_34608 = (state_34635[(11)]);
var inst_34600 = (state_34635[(8)]);
var inst_34607 = (inst_34599[inst_34600] = inst_34603);
var inst_34608__$1 = (inst_34600 + (1));
var inst_34609 = (inst_34608__$1 < n);
var state_34635__$1 = (function (){var statearr_34649 = state_34635;
(statearr_34649[(12)] = inst_34607);

(statearr_34649[(11)] = inst_34608__$1);

return statearr_34649;
})();
if(cljs.core.truth_(inst_34609)){
var statearr_34650_35626 = state_34635__$1;
(statearr_34650_35626[(1)] = (8));

} else {
var statearr_34651_35631 = state_34635__$1;
(statearr_34651_35631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (14))){
var inst_34628 = (state_34635[(2)]);
var inst_34629 = cljs.core.async.close_BANG_(out);
var state_34635__$1 = (function (){var statearr_34653 = state_34635;
(statearr_34653[(13)] = inst_34628);

return statearr_34653;
})();
var statearr_34654_35634 = state_34635__$1;
(statearr_34654_35634[(2)] = inst_34629);

(statearr_34654_35634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (10))){
var inst_34619 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34655_35639 = state_34635__$1;
(statearr_34655_35639[(2)] = inst_34619);

(statearr_34655_35639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (8))){
var inst_34599 = (state_34635[(7)]);
var inst_34608 = (state_34635[(11)]);
var tmp34652 = inst_34599;
var inst_34599__$1 = tmp34652;
var inst_34600 = inst_34608;
var state_34635__$1 = (function (){var statearr_34656 = state_34635;
(statearr_34656[(7)] = inst_34599__$1);

(statearr_34656[(8)] = inst_34600);

return statearr_34656;
})();
var statearr_34657_35649 = state_34635__$1;
(statearr_34657_35649[(2)] = null);

(statearr_34657_35649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34658[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34658[(1)] = (1));

return statearr_34658;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34635){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34635);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34659){var ex__33178__auto__ = e34659;
var statearr_34660_35667 = state_34635;
(statearr_34660_35667[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34635[(4)]))){
var statearr_34661_35672 = state_34635;
(statearr_34661_35672[(1)] = cljs.core.first((state_34635[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35673 = state_34635;
state_34635 = G__35673;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34662 = f__33211__auto__();
(statearr_34662[(6)] = c__33210__auto___35570);

return statearr_34662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34664 = arguments.length;
switch (G__34664) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33210__auto___35678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33211__auto__ = (function (){var switch__33174__auto__ = (function (state_34706){
var state_val_34707 = (state_34706[(1)]);
if((state_val_34707 === (7))){
var inst_34702 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34708_35681 = state_34706__$1;
(statearr_34708_35681[(2)] = inst_34702);

(statearr_34708_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (1))){
var inst_34665 = [];
var inst_34666 = inst_34665;
var inst_34667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34706__$1 = (function (){var statearr_34709 = state_34706;
(statearr_34709[(7)] = inst_34666);

(statearr_34709[(8)] = inst_34667);

return statearr_34709;
})();
var statearr_34710_35691 = state_34706__$1;
(statearr_34710_35691[(2)] = null);

(statearr_34710_35691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (4))){
var inst_34670 = (state_34706[(9)]);
var inst_34670__$1 = (state_34706[(2)]);
var inst_34671 = (inst_34670__$1 == null);
var inst_34672 = cljs.core.not(inst_34671);
var state_34706__$1 = (function (){var statearr_34711 = state_34706;
(statearr_34711[(9)] = inst_34670__$1);

return statearr_34711;
})();
if(inst_34672){
var statearr_34712_35696 = state_34706__$1;
(statearr_34712_35696[(1)] = (5));

} else {
var statearr_34713_35697 = state_34706__$1;
(statearr_34713_35697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (15))){
var inst_34696 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34714_35699 = state_34706__$1;
(statearr_34714_35699[(2)] = inst_34696);

(statearr_34714_35699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (13))){
var state_34706__$1 = state_34706;
var statearr_34715_35700 = state_34706__$1;
(statearr_34715_35700[(2)] = null);

(statearr_34715_35700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (6))){
var inst_34666 = (state_34706[(7)]);
var inst_34691 = inst_34666.length;
var inst_34692 = (inst_34691 > (0));
var state_34706__$1 = state_34706;
if(cljs.core.truth_(inst_34692)){
var statearr_34716_35702 = state_34706__$1;
(statearr_34716_35702[(1)] = (12));

} else {
var statearr_34717_35703 = state_34706__$1;
(statearr_34717_35703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (3))){
var inst_34704 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34706__$1,inst_34704);
} else {
if((state_val_34707 === (12))){
var inst_34666 = (state_34706[(7)]);
var inst_34694 = cljs.core.vec(inst_34666);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34706__$1,(15),out,inst_34694);
} else {
if((state_val_34707 === (2))){
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34706__$1,(4),ch);
} else {
if((state_val_34707 === (11))){
var inst_34674 = (state_34706[(10)]);
var inst_34670 = (state_34706[(9)]);
var inst_34684 = (state_34706[(2)]);
var inst_34685 = [];
var inst_34686 = inst_34685.push(inst_34670);
var inst_34666 = inst_34685;
var inst_34667 = inst_34674;
var state_34706__$1 = (function (){var statearr_34718 = state_34706;
(statearr_34718[(11)] = inst_34684);

(statearr_34718[(7)] = inst_34666);

(statearr_34718[(8)] = inst_34667);

(statearr_34718[(12)] = inst_34686);

return statearr_34718;
})();
var statearr_34719_35708 = state_34706__$1;
(statearr_34719_35708[(2)] = null);

(statearr_34719_35708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (9))){
var inst_34666 = (state_34706[(7)]);
var inst_34682 = cljs.core.vec(inst_34666);
var state_34706__$1 = state_34706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34706__$1,(11),out,inst_34682);
} else {
if((state_val_34707 === (5))){
var inst_34674 = (state_34706[(10)]);
var inst_34667 = (state_34706[(8)]);
var inst_34670 = (state_34706[(9)]);
var inst_34674__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34670) : f.call(null,inst_34670));
var inst_34675 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34674__$1,inst_34667);
var inst_34676 = cljs.core.keyword_identical_QMARK_(inst_34667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34677 = ((inst_34675) || (inst_34676));
var state_34706__$1 = (function (){var statearr_34720 = state_34706;
(statearr_34720[(10)] = inst_34674__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34677)){
var statearr_34721_35713 = state_34706__$1;
(statearr_34721_35713[(1)] = (8));

} else {
var statearr_34722_35714 = state_34706__$1;
(statearr_34722_35714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (14))){
var inst_34699 = (state_34706[(2)]);
var inst_34700 = cljs.core.async.close_BANG_(out);
var state_34706__$1 = (function (){var statearr_34724 = state_34706;
(statearr_34724[(13)] = inst_34699);

return statearr_34724;
})();
var statearr_34725_35718 = state_34706__$1;
(statearr_34725_35718[(2)] = inst_34700);

(statearr_34725_35718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (10))){
var inst_34689 = (state_34706[(2)]);
var state_34706__$1 = state_34706;
var statearr_34726_35719 = state_34706__$1;
(statearr_34726_35719[(2)] = inst_34689);

(statearr_34726_35719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34707 === (8))){
var inst_34674 = (state_34706[(10)]);
var inst_34666 = (state_34706[(7)]);
var inst_34670 = (state_34706[(9)]);
var inst_34679 = inst_34666.push(inst_34670);
var tmp34723 = inst_34666;
var inst_34666__$1 = tmp34723;
var inst_34667 = inst_34674;
var state_34706__$1 = (function (){var statearr_34727 = state_34706;
(statearr_34727[(14)] = inst_34679);

(statearr_34727[(7)] = inst_34666__$1);

(statearr_34727[(8)] = inst_34667);

return statearr_34727;
})();
var statearr_34728_35729 = state_34706__$1;
(statearr_34728_35729[(2)] = null);

(statearr_34728_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33175__auto__ = null;
var cljs$core$async$state_machine__33175__auto____0 = (function (){
var statearr_34729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34729[(0)] = cljs$core$async$state_machine__33175__auto__);

(statearr_34729[(1)] = (1));

return statearr_34729;
});
var cljs$core$async$state_machine__33175__auto____1 = (function (state_34706){
while(true){
var ret_value__33176__auto__ = (function (){try{while(true){
var result__33177__auto__ = switch__33174__auto__(state_34706);
if(cljs.core.keyword_identical_QMARK_(result__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33177__auto__;
}
break;
}
}catch (e34730){var ex__33178__auto__ = e34730;
var statearr_34731_35742 = state_34706;
(statearr_34731_35742[(2)] = ex__33178__auto__);


if(cljs.core.seq((state_34706[(4)]))){
var statearr_34732_35743 = state_34706;
(statearr_34732_35743[(1)] = cljs.core.first((state_34706[(4)])));

} else {
throw ex__33178__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35752 = state_34706;
state_34706 = G__35752;
continue;
} else {
return ret_value__33176__auto__;
}
break;
}
});
cljs$core$async$state_machine__33175__auto__ = function(state_34706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33175__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33175__auto____1.call(this,state_34706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33175__auto____0;
cljs$core$async$state_machine__33175__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33175__auto____1;
return cljs$core$async$state_machine__33175__auto__;
})()
})();
var state__33212__auto__ = (function (){var statearr_34733 = f__33211__auto__();
(statearr_34733[(6)] = c__33210__auto___35678);

return statearr_34733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33212__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
