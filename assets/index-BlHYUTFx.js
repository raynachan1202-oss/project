(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Nw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dm={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function Dw(){if(kv)return wu;kv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:a,key:c,ref:o!==void 0?o:null,props:u}}return wu.Fragment=e,wu.jsx=t,wu.jsxs=t,wu}var Pv;function Ow(){return Pv||(Pv=1,Dm.exports=Dw()),Dm.exports}var E=Ow(),Om={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function Mw(){if(Lv)return Oe;Lv=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function V(O,re,le){this.props=O,this.context=re,this.refs=$,this.updater=le||C}V.prototype.isReactComponent={},V.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},V.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=V.prototype;function Y(O,re,le){this.props=O,this.context=re,this.refs=$,this.updater=le||C}var W=Y.prototype=new X;W.constructor=Y,U(W,V.prototype),W.isPureReactComponent=!0;var fe=Array.isArray,te={H:null,A:null,T:null,S:null,V:null},he=Object.prototype.hasOwnProperty;function I(O,re,le,ue,me,De){return le=De.ref,{$$typeof:n,type:O,key:re,ref:le!==void 0?le:null,props:De}}function x(O,re){return I(O.type,re,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return re[le]})}var M=/\/+/g;function j(O,re){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):re.toString(36)}function D(){}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function it(O,re,le,ue,me){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(De){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case n:case e:be=!0;break;case v:return be=O._init,it(be(O._payload),re,le,ue,me)}}if(be)return me=me(O),be=ue===""?"."+j(O,0):ue,fe(me)?(le="",be!=null&&(le=be.replace(M,"$&/")+"/"),it(me,re,le,"",function(Mt){return Mt})):me!=null&&(R(me)&&(me=x(me,le+(me.key==null||O&&O.key===me.key?"":(""+me.key).replace(M,"$&/")+"/")+be)),re.push(me)),1;be=0;var vt=ue===""?".":ue+":";if(fe(O))for(var He=0;He<O.length;He++)ue=O[He],De=vt+j(ue,He),be+=it(ue,re,le,De,me);else if(He=A(O),typeof He=="function")for(O=He.call(O),He=0;!(ue=O.next()).done;)ue=ue.value,De=vt+j(ue,He++),be+=it(ue,re,le,De,me);else if(De==="object"){if(typeof O.then=="function")return it(ft(O),re,le,ue,me);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return be}function Z(O,re,le){if(O==null)return O;var ue=[],me=0;return it(O,ue,"","",function(De){return re.call(le,De,me++)}),ue}function ce(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var ge=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ne(){}return Oe.Children={map:Z,forEach:function(O,re,le){Z(O,function(){re.apply(this,arguments)},le)},count:function(O){var re=0;return Z(O,function(){re++}),re},toArray:function(O){return Z(O,function(re){return re})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Oe.Component=V,Oe.Fragment=t,Oe.Profiler=o,Oe.PureComponent=Y,Oe.StrictMode=a,Oe.Suspense=m,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return te.H.useMemoCache(O)}},Oe.cache=function(O){return function(){return O.apply(null,arguments)}},Oe.cloneElement=function(O,re,le){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ue=U({},O.props),me=O.key,De=void 0;if(re!=null)for(be in re.ref!==void 0&&(De=void 0),re.key!==void 0&&(me=""+re.key),re)!he.call(re,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&re.ref===void 0||(ue[be]=re[be]);var be=arguments.length-2;if(be===1)ue.children=le;else if(1<be){for(var vt=Array(be),He=0;He<be;He++)vt[He]=arguments[He+2];ue.children=vt}return I(O.type,me,void 0,void 0,De,ue)},Oe.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Oe.createElement=function(O,re,le){var ue,me={},De=null;if(re!=null)for(ue in re.key!==void 0&&(De=""+re.key),re)he.call(re,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(me[ue]=re[ue]);var be=arguments.length-2;if(be===1)me.children=le;else if(1<be){for(var vt=Array(be),He=0;He<be;He++)vt[He]=arguments[He+2];me.children=vt}if(O&&O.defaultProps)for(ue in be=O.defaultProps,be)me[ue]===void 0&&(me[ue]=be[ue]);return I(O,De,void 0,void 0,null,me)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(O){return{$$typeof:p,render:O}},Oe.isValidElement=R,Oe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ce}},Oe.memo=function(O,re){return{$$typeof:g,type:O,compare:re===void 0?null:re}},Oe.startTransition=function(O){var re=te.T,le={};te.T=le;try{var ue=O(),me=te.S;me!==null&&me(le,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(Ne,ge)}catch(De){ge(De)}finally{te.T=re}},Oe.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Oe.use=function(O){return te.H.use(O)},Oe.useActionState=function(O,re,le){return te.H.useActionState(O,re,le)},Oe.useCallback=function(O,re){return te.H.useCallback(O,re)},Oe.useContext=function(O){return te.H.useContext(O)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(O,re){return te.H.useDeferredValue(O,re)},Oe.useEffect=function(O,re,le){var ue=te.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ue.useEffect(O,re)},Oe.useId=function(){return te.H.useId()},Oe.useImperativeHandle=function(O,re,le){return te.H.useImperativeHandle(O,re,le)},Oe.useInsertionEffect=function(O,re){return te.H.useInsertionEffect(O,re)},Oe.useLayoutEffect=function(O,re){return te.H.useLayoutEffect(O,re)},Oe.useMemo=function(O,re){return te.H.useMemo(O,re)},Oe.useOptimistic=function(O,re){return te.H.useOptimistic(O,re)},Oe.useReducer=function(O,re,le){return te.H.useReducer(O,re,le)},Oe.useRef=function(O){return te.H.useRef(O)},Oe.useState=function(O){return te.H.useState(O)},Oe.useSyncExternalStore=function(O,re,le){return te.H.useSyncExternalStore(O,re,le)},Oe.useTransition=function(){return te.H.useTransition()},Oe.version="19.1.1",Oe}var Vv;function o1(){return Vv||(Vv=1,Om.exports=Mw()),Om.exports}var Q=o1();const Ds=Nw(Q);var Mm={exports:{}},Au={},km={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function kw(){return jv||(jv=1,(function(n){function e(Z,ce){var ge=Z.length;Z.push(ce);e:for(;0<ge;){var Ne=ge-1>>>1,O=Z[Ne];if(0<o(O,ce))Z[Ne]=ce,Z[ge]=O,ge=Ne;else break e}}function t(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var ce=Z[0],ge=Z.pop();if(ge!==ce){Z[0]=ge;e:for(var Ne=0,O=Z.length,re=O>>>1;Ne<re;){var le=2*(Ne+1)-1,ue=Z[le],me=le+1,De=Z[me];if(0>o(ue,ge))me<O&&0>o(De,ue)?(Z[Ne]=De,Z[me]=ge,Ne=me):(Z[Ne]=ue,Z[le]=ge,Ne=le);else if(me<O&&0>o(De,ge))Z[Ne]=De,Z[me]=ge,Ne=me;else break e}}return ce}function o(Z,ce){var ge=Z.sortIndex-ce.sortIndex;return ge!==0?ge:Z.id-ce.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var c=Date,p=c.now();n.unstable_now=function(){return c.now()-p}}var m=[],g=[],v=1,T=null,A=3,C=!1,U=!1,$=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function fe(Z){for(var ce=t(g);ce!==null;){if(ce.callback===null)a(g);else if(ce.startTime<=Z)a(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function te(Z){if($=!1,fe(Z),!U)if(t(m)!==null)U=!0,he||(he=!0,j());else{var ce=t(g);ce!==null&&it(te,ce.startTime-Z)}}var he=!1,I=-1,x=5,R=-1;function P(){return V?!0:!(n.unstable_now()-R<x)}function M(){if(V=!1,he){var Z=n.unstable_now();R=Z;var ce=!0;try{e:{U=!1,$&&($=!1,Y(I),I=-1),C=!0;var ge=A;try{t:{for(fe(Z),T=t(m);T!==null&&!(T.expirationTime>Z&&P());){var Ne=T.callback;if(typeof Ne=="function"){T.callback=null,A=T.priorityLevel;var O=Ne(T.expirationTime<=Z);if(Z=n.unstable_now(),typeof O=="function"){T.callback=O,fe(Z),ce=!0;break t}T===t(m)&&a(m),fe(Z)}else a(m);T=t(m)}if(T!==null)ce=!0;else{var re=t(g);re!==null&&it(te,re.startTime-Z),ce=!1}}break e}finally{T=null,A=ge,C=!1}ce=void 0}}finally{ce?j():he=!1}}}var j;if(typeof W=="function")j=function(){W(M)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,ft=D.port2;D.port1.onmessage=M,j=function(){ft.postMessage(null)}}else j=function(){X(M,0)};function it(Z,ce){I=X(function(){Z(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(Z){switch(A){case 1:case 2:case 3:var ce=3;break;default:ce=A}var ge=A;A=ce;try{return Z()}finally{A=ge}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ge=A;A=Z;try{return ce()}finally{A=ge}},n.unstable_scheduleCallback=function(Z,ce,ge){var Ne=n.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Ne+ge:Ne):ge=Ne,Z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ge+O,Z={id:v++,callback:ce,priorityLevel:Z,startTime:ge,expirationTime:O,sortIndex:-1},ge>Ne?(Z.sortIndex=ge,e(g,Z),t(m)===null&&Z===t(g)&&($?(Y(I),I=-1):$=!0,it(te,ge-Ne))):(Z.sortIndex=O,e(m,Z),U||C||(U=!0,he||(he=!0,j()))),Z},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(Z){var ce=A;return function(){var ge=A;A=ce;try{return Z.apply(this,arguments)}finally{A=ge}}}})(Pm)),Pm}var zv;function Pw(){return zv||(zv=1,km.exports=kw()),km.exports}var Lm={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function Lw(){if(Uv)return on;Uv=1;var n=o1();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:m,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,on.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,v)},on.flushSync=function(m){var g=c.T,v=a.p;try{if(c.T=null,a.p=2,m)return m()}finally{c.T=g,a.p=v,a.d.f()}},on.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(m,g))},on.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},on.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,T=p(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:C}):v==="script"&&a.d.X(m,{crossOrigin:T,integrity:A,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},on.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(m)},on.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=p(v,g.crossOrigin);a.d.L(m,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},on.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);a.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(m)},on.requestFormReset=function(m){a.d.r(m)},on.unstable_batchedUpdates=function(m,g){return m(g)},on.useFormState=function(m,g,v){return c.H.useFormState(m,g,v)},on.useFormStatus=function(){return c.H.useHostTransitionStatus()},on.version="19.1.1",on}var Bv;function Vw(){if(Bv)return Lm.exports;Bv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Lm.exports=Lw(),Lm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function jw(){if(Fv)return Au;Fv=1;var n=Pw(),e=o1(),t=Vw();function a(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function u(r){var i=r,s=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(s=i.return),r=i.return;while(r)}return i.tag===3?s:null}function c(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function p(r){if(u(r)!==r)throw Error(a(188))}function m(r){var i=r.alternate;if(!i){if(i=u(r),i===null)throw Error(a(188));return i!==r?null:r}for(var s=r,l=i;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return p(h),r;if(d===l)return p(h),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var b=!1,S=h.child;S;){if(S===s){b=!0,s=h,l=d;break}if(S===l){b=!0,l=h,s=d;break}S=S.sibling}if(!b){for(S=d.child;S;){if(S===s){b=!0,s=d,l=h;break}if(S===l){b=!0,l=d,s=h;break}S=S.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?r:i}function g(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=g(r),i!==null)return i;r=r.sibling}return null}var v=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),W=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function j(r){return r===null||typeof r!="object"?null:(r=M&&r[M]||r["@@iterator"],typeof r=="function"?r:null)}var D=Symbol.for("react.client.reference");function ft(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===D?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case U:return"Fragment";case V:return"Profiler";case $:return"StrictMode";case te:return"Suspense";case he:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case W:return(r.displayName||"Context")+".Provider";case Y:return(r._context.displayName||"Context")+".Consumer";case fe:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case I:return i=r.displayName||null,i!==null?i:ft(r.type)||"Memo";case x:i=r._payload,r=r._init;try{return ft(r(i))}catch{}}return null}var it=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},Ne=[],O=-1;function re(r){return{current:r}}function le(r){0>O||(r.current=Ne[O],Ne[O]=null,O--)}function ue(r,i){O++,Ne[O]=r.current,r.current=i}var me=re(null),De=re(null),be=re(null),vt=re(null);function He(r,i){switch(ue(be,i),ue(De,r),ue(me,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?lv(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=lv(i),r=uv(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(me),ue(me,r)}function Mt(){le(me),le(De),le(be)}function Qr(r){r.memoizedState!==null&&ue(vt,r);var i=me.current,s=uv(i,r.type);i!==s&&(ue(De,r),ue(me,s))}function Jn(r){De.current===r&&(le(me),le(De)),vt.current===r&&(le(vt),_u._currentValue=ge)}var hn=Object.prototype.hasOwnProperty,za=n.unstable_scheduleCallback,$s=n.unstable_cancelCallback,Od=n.unstable_shouldYield,_l=n.unstable_requestPaint,vn=n.unstable_now,Tc=n.unstable_getCurrentPriorityLevel,kt=n.unstable_ImmediatePriority,Ut=n.unstable_UserBlockingPriority,Xr=n.unstable_NormalPriority,Md=n.unstable_LowPriority,bl=n.unstable_IdlePriority,kd=n.log,Ua=n.unstable_setDisableYieldValue,Pi=null,rn=null;function Vn(r){if(typeof kd=="function"&&Ua(r),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Pi,r)}catch{}}var dn=Math.clz32?Math.clz32:wc,Pd=Math.log,Sc=Math.LN2;function wc(r){return r>>>=0,r===0?32:31-(Pd(r)/Sc|0)|0}var yr=256,Li=4194304;function er(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function jn(r,i,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,d=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?h=er(l):(b&=S,b!==0?h=er(b):s||(s=S&~r,s!==0&&(h=er(s))))):(S=l&~d,S!==0?h=er(S):b!==0?h=er(b):s||(s=l&~r,s!==0&&(h=er(s)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:h}function Vi(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function qs(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(){var r=yr;return yr<<=1,(yr&4194048)===0&&(yr=256),r}function ji(){var r=Li;return Li<<=1,(Li&62914560)===0&&(Li=4194304),r}function Gs(r){for(var i=[],s=0;31>s;s++)i.push(r);return i}function Et(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ac(r,i,s,l,h,d){var b=r.pendingLanes;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=s,r.entangledLanes&=s,r.errorRecoveryDisabledLanes&=s,r.shellSuspendCounter=0;var S=r.entanglements,N=r.expirationTimes,H=r.hiddenUpdates;for(s=b&~s;0<s;){var J=31-dn(s),ne=1<<J;S[J]=0,N[J]=-1;var q=H[J];if(q!==null)for(H[J]=null,J=0;J<q.length;J++){var G=q[J];G!==null&&(G.lane&=-536870913)}s&=~ne}l!==0&&zi(r,l,0),d!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=d&~(b&~i))}function zi(r,i,s){r.pendingLanes|=i,r.suspendedLanes&=~i;var l=31-dn(i);r.entangledLanes|=i,r.entanglements[l]=r.entanglements[l]|1073741824|s&4194090}function Ui(r,i){var s=r.entangledLanes|=i;for(r=r.entanglements;s;){var l=31-dn(s),h=1<<l;h&i|r[l]&i&&(r[l]|=i),s&=~h}}function Tl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Sl(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Wr(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:Cv(r.type))}function Ld(r,i){var s=ce.p;try{return ce.p=r,i()}finally{ce.p=s}}var vr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+vr,Qt="__reactProps$"+vr,Zr="__reactContainer$"+vr,Ba="__reactEvents$"+vr,Fa="__reactListeners$"+vr,Vd="__reactHandles$"+vr,tr="__reactResources$"+vr,Bi="__reactMarker$"+vr;function Ys(r){delete r[Tt],delete r[Qt],delete r[Ba],delete r[Fa],delete r[Vd]}function _r(r){var i=r[Tt];if(i)return i;for(var s=r.parentNode;s;){if(i=s[Zr]||s[Tt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(r=dv(r);r!==null;){if(s=r[Tt])return s;r=dv(r)}return i}r=s,s=r.parentNode}return null}function br(r){if(r=r[Tt]||r[Zr]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function Fi(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(a(33))}function Hi(r){var i=r[tr];return i||(i=r[tr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function St(r){r[Bi]=!0}var xc=new Set,Ha={};function Er(r,i){Tr(r,i),Tr(r+"Capture",i)}function Tr(r,i){for(Ha[r]=i,r=0;r<i.length;r++)xc.add(i[r])}var $a=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sr={},Ks={};function jd(r){return hn.call(Ks,r)?!0:hn.call(Sr,r)?!1:$a.test(r)?Ks[r]=!0:(Sr[r]=!0,!1)}function qa(r,i,s){if(jd(i))if(s===null)r.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+s)}}function Ga(r,i,s){if(s===null)r.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+s)}}function zn(r,i,s,l){if(l===null)r.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttributeNS(i,s,""+l)}}var Ya,Qs;function Jr(r){if(Ya===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ya=i&&i[1]||"",Qs=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ya+r+Qs}var Xs=!1;function Ws(r,i){if(!r||Xs)return"";Xs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(G){var q=G}Reflect.construct(r,[],ne)}else{try{ne.call()}catch(G){q=G}r.call(ne.prototype)}}else{try{throw Error()}catch(G){q=G}(ne=r())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(G){if(G&&q&&typeof G.stack=="string")return[G.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),b=d[0],S=d[1];if(b&&S){var N=b.split(`
`),H=S.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<H.length&&!H[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===H.length)for(l=N.length-1,h=H.length-1;1<=l&&0<=h&&N[l]!==H[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==H[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==H[h]){var J=`
`+N[l].replace(" at new "," at ");return r.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",r.displayName)),J}while(1<=l&&0<=h);break}}}finally{Xs=!1,Error.prepareStackTrace=s}return(s=r?r.displayName||r.name:"")?Jr(s):""}function zd(r){switch(r.tag){case 26:case 27:case 5:return Jr(r.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 15:return Ws(r.type,!1);case 11:return Ws(r.type.render,!1);case 1:return Ws(r.type,!0);case 31:return Jr("Activity");default:return""}}function nr(r){try{var i="";do i+=zd(r),r=r.return;while(r);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function dt(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $i(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ka(r){var i=$i(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),l=""+r[i];if(!r.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){l=""+b,d.call(this,b)}}),Object.defineProperty(r,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function qi(r){r._valueTracker||(r._valueTracker=Ka(r))}function Je(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return r&&(l=$i(r)?r.checked?"true":"false":r.value),r=l,r!==s?(i.setValue(r),!0):!1}function ei(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Qa=/[\n"\\]/g;function Bt(r){return r.replace(Qa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function wl(r,i,s,l,h,d,b,S){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),i!=null?b==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+dt(i)):r.value!==""+dt(i)&&(r.value=""+dt(i)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),i!=null?xl(r,b,dt(i)):s!=null?xl(r,b,dt(s)):l!=null&&r.removeAttribute("value"),h==null&&d!=null&&(r.defaultChecked=!!d),h!=null&&(r.checked=h&&typeof h!="function"&&typeof h!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+dt(S):r.removeAttribute("name")}function Al(r,i,s,l,h,d,b,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(r.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+dt(s):"",i=i!=null?""+dt(i):s,S||i===r.value||(r.value=i),r.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,r.checked=S?r.checked:!!l,r.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function xl(r,i,s){i==="number"&&ei(r.ownerDocument)===r||r.defaultValue===""+s||(r.defaultValue=""+s)}function Gi(r,i,s,l){if(r=r.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<r.length;s++)h=i.hasOwnProperty("$"+r[s].value),r[s].selected!==h&&(r[s].selected=h),h&&l&&(r[s].defaultSelected=!0)}else{for(s=""+dt(s),i=null,h=0;h<r.length;h++){if(r[h].value===s){r[h].selected=!0,l&&(r[h].defaultSelected=!0);return}i!==null||r[h].disabled||(i=r[h])}i!==null&&(i.selected=!0)}}function Rc(r,i,s){if(i!=null&&(i=""+dt(i),i!==r.value&&(r.value=i),s==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=s!=null?""+dt(s):""}function Cc(r,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(it(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=dt(i),r.defaultValue=s,l=r.textContent,l===s&&l!==""&&l!==null&&(r.value=l)}function Un(r,i){if(i){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=i;return}}r.textContent=i}var ti=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rl(r,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":l?r.setProperty(i,s):typeof s!="number"||s===0||ti.has(i)?i==="float"?r.cssFloat=s:r[i]=(""+s).trim():r[i]=s+"px"}function Cl(r,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(r=r.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?r.setProperty(l,""):l==="float"?r.cssFloat="":r[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&Rl(r,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Rl(r,d,i[d])}function Zs(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rr(r){return Nc.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Il=null;function Nl(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Yi=null,pn=null;function Dc(r){var i=br(r);if(i&&(r=i.stateNode)){var s=r[Qt]||null;e:switch(r=i.stateNode,i.type){case"input":if(wl(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==r&&l.form===r.form){var h=l[Qt]||null;if(!h)throw Error(a(90));wl(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===r.form&&Je(l)}break e;case"textarea":Rc(r,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Gi(r,!!s.multiple,i,!1)}}}var Xa=!1;function Wa(r,i,s){if(Xa)return r(i,s);Xa=!0;try{var l=r(i);return l}finally{if(Xa=!1,(Yi!==null||pn!==null)&&(Ef(),Yi&&(i=Yi,r=pn,pn=Yi=null,Dc(i),r)))for(i=0;i<r.length;i++)Dc(r[i])}}function Ki(r,i){var s=r.stateNode;if(s===null)return null;var l=s[Qt]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(mn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ni=!1}var Bn=null,at=null,Js=null;function Oc(){if(Js)return Js;var r,i=at,s=i.length,l,h="value"in Bn?Bn.value:Bn.textContent,d=h.length;for(r=0;r<s&&i[r]===h[r];r++);var b=s-r;for(l=1;l<=b&&i[s-l]===h[d-l];l++);return Js=h.slice(r,1<l?1-l:void 0)}function Za(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Ja(){return!0}function Dl(){return!1}function Pt(r){function i(s,l,h,d,b){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(s=r[S],this[S]=s?s(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ja:Dl,this.isPropagationStopped=Dl,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),i}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Pt(an),ts=v({},an,{view:0,detail:0}),ns=Pt(ts),eo,rs,wr,is=v({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==wr&&(wr&&r.type==="mousemove"?(eo=r.screenX-wr.screenX,rs=r.screenY-wr.screenY):rs=eo=0,wr=r),eo)},movementY:function(r){return"movementY"in r?r.movementY:rs}}),as=Pt(is),Ud=v({},is,{dataTransfer:0}),Mc=Pt(Ud),ss=v({},ts,{relatedTarget:0}),to=Pt(ss),kc=v({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),Ol=Pt(kc),Ml=v({},an,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Pc=Pt(Ml),no=v({},an,{data:0}),kl=Pt(no),Lc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ri={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jc(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Vc[r])?!!i[r]:!1}function ro(){return jc}var zc=v({},ts,{key:function(r){if(r.key){var i=Lc[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Za(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ri[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(r){return r.type==="keypress"?Za(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Za(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),io=Pt(zc),gn=v({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=Pt(gn),Uc=v({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Xi=Pt(Uc),f=v({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),y=Pt(f),_=v({},is,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),w=Pt(_),F=v({},an,{newState:0,oldState:0}),K=Pt(F),oe=[9,13,27,32],Ce=mn&&"CompositionEvent"in window,ot=null;mn&&"documentMode"in document&&(ot=document.documentMode);var Xe=mn&&"TextEvent"in window&&!ot,wt=mn&&(!Ce||ot&&8<ot&&11>=ot),xn=" ",Ar=!1;function ir(r,i){switch(r){case"keyup":return oe.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ar(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var sr=!1;function Ll(r,i){switch(r){case"compositionend":return ar(i);case"keypress":return i.which!==32?null:(Ar=!0,xn);case"textInput":return r=i.data,r===xn&&Ar?null:r;default:return null}}function rS(r,i){if(sr)return r==="compositionend"||!Ce&&ir(r,i)?(r=Oc(),Js=at=Bn=null,sr=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wt&&i.locale!=="ko"?null:i.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!iS[r.type]:i==="textarea"}function S0(r,i,s,l){Yi?pn?pn.push(l):pn=[l]:Yi=l,i=Rf(i,"onChange"),0<i.length&&(s=new es("onChange","change",null,s,l),r.push({event:s,listeners:i}))}var Vl=null,jl=null;function aS(r){rv(r,0)}function Bc(r){var i=Fi(r);if(Je(i))return r}function w0(r,i){if(r==="change")return i}var A0=!1;if(mn){var Bd;if(mn){var Fd="oninput"in document;if(!Fd){var x0=document.createElement("div");x0.setAttribute("oninput","return;"),Fd=typeof x0.oninput=="function"}Bd=Fd}else Bd=!1;A0=Bd&&(!document.documentMode||9<document.documentMode)}function R0(){Vl&&(Vl.detachEvent("onpropertychange",C0),jl=Vl=null)}function C0(r){if(r.propertyName==="value"&&Bc(jl)){var i=[];S0(i,jl,r,Nl(r)),Wa(aS,i)}}function sS(r,i,s){r==="focusin"?(R0(),Vl=i,jl=s,Vl.attachEvent("onpropertychange",C0)):r==="focusout"&&R0()}function oS(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Bc(jl)}function lS(r,i){if(r==="click")return Bc(i)}function uS(r,i){if(r==="input"||r==="change")return Bc(i)}function cS(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Rn=typeof Object.is=="function"?Object.is:cS;function zl(r,i){if(Rn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var s=Object.keys(r),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!hn.call(i,h)||!Rn(r[h],i[h]))return!1}return!0}function I0(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function N0(r,i){var s=I0(r);r=0;for(var l;s;){if(s.nodeType===3){if(l=r+s.textContent.length,r<=i&&l>=i)return{node:s,offset:i-r};r=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=I0(s)}}function D0(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?D0(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function O0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=ei(r.document);i instanceof r.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)r=i.contentWindow;else break;i=ei(r.document)}return i}function Hd(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var fS=mn&&"documentMode"in document&&11>=document.documentMode,ao=null,$d=null,Ul=null,qd=!1;function M0(r,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qd||ao==null||ao!==ei(l)||(l=ao,"selectionStart"in l&&Hd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ul&&zl(Ul,l)||(Ul=l,l=Rf($d,"onSelect"),0<l.length&&(i=new es("onSelect","select",null,i,s),r.push({event:i,listeners:l}),i.target=ao)))}function os(r,i){var s={};return s[r.toLowerCase()]=i.toLowerCase(),s["Webkit"+r]="webkit"+i,s["Moz"+r]="moz"+i,s}var so={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Gd={},k0={};mn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function ls(r){if(Gd[r])return Gd[r];if(!so[r])return r;var i=so[r],s;for(s in i)if(i.hasOwnProperty(s)&&s in k0)return Gd[r]=i[s];return r}var P0=ls("animationend"),L0=ls("animationiteration"),V0=ls("animationstart"),hS=ls("transitionrun"),dS=ls("transitionstart"),pS=ls("transitioncancel"),j0=ls("transitionend"),z0=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yd.push("scrollEnd");function or(r,i){z0.set(r,i),Er(i,[r])}var U0=new WeakMap;function Fn(r,i){if(typeof r=="object"&&r!==null){var s=U0.get(r);return s!==void 0?s:(i={value:r,source:i,stack:nr(i)},U0.set(r,i),i)}return{value:r,source:i,stack:nr(i)}}var Hn=[],oo=0,Kd=0;function Fc(){for(var r=oo,i=Kd=oo=0;i<r;){var s=Hn[i];Hn[i++]=null;var l=Hn[i];Hn[i++]=null;var h=Hn[i];Hn[i++]=null;var d=Hn[i];if(Hn[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}d!==0&&B0(s,h,d)}}function Hc(r,i,s,l){Hn[oo++]=r,Hn[oo++]=i,Hn[oo++]=s,Hn[oo++]=l,Kd|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function Qd(r,i,s,l){return Hc(r,i,s,l),$c(r)}function lo(r,i){return Hc(r,null,null,i),$c(r)}function B0(r,i,s){r.lanes|=s;var l=r.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=r.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(r=d.stateNode,r===null||r._visibility&1||(h=!0)),r=d,d=d.return;return r.tag===3?(d=r.stateNode,h&&i!==null&&(h=31-dn(s),r=d.hiddenUpdates,l=r[h],l===null?r[h]=[i]:l.push(i),i.lane=s|536870912),d):null}function $c(r){if(50<fu)throw fu=0,tm=null,Error(a(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var uo={};function mS(r,i,s,l){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(r,i,s,l){return new mS(r,i,s,l)}function Xd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ii(r,i){var s=r.alternate;return s===null?(s=Cn(r.tag,i,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=i,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&65011712,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,i=r.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s.refCleanup=r.refCleanup,s}function F0(r,i){r.flags&=65011714;var s=r.alternate;return s===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,i=s.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function qc(r,i,s,l,h,d){var b=0;if(l=r,typeof r=="function")Xd(r)&&(b=1);else if(typeof r=="string")b=yw(r,s,me.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=Cn(31,s,i,h),r.elementType=R,r.lanes=d,r;case U:return us(s.children,h,d,i);case $:b=8,h|=24;break;case V:return r=Cn(12,s,i,h|2),r.elementType=V,r.lanes=d,r;case te:return r=Cn(13,s,i,h),r.elementType=te,r.lanes=d,r;case he:return r=Cn(19,s,i,h),r.elementType=he,r.lanes=d,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case X:case W:b=10;break e;case Y:b=9;break e;case fe:b=11;break e;case I:b=14;break e;case x:b=16,l=null;break e}b=29,s=Error(a(130,r===null?"null":typeof r,"")),l=null}return i=Cn(b,s,i,h),i.elementType=r,i.type=l,i.lanes=d,i}function us(r,i,s,l){return r=Cn(7,r,l,i),r.lanes=s,r}function Wd(r,i,s){return r=Cn(6,r,null,i),r.lanes=s,r}function Zd(r,i,s){return i=Cn(4,r.children!==null?r.children:[],r.key,i),i.lanes=s,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var co=[],fo=0,Gc=null,Yc=0,$n=[],qn=0,cs=null,ai=1,si="";function fs(r,i){co[fo++]=Yc,co[fo++]=Gc,Gc=r,Yc=i}function H0(r,i,s){$n[qn++]=ai,$n[qn++]=si,$n[qn++]=cs,cs=r;var l=ai;r=si;var h=32-dn(l)-1;l&=~(1<<h),s+=1;var d=32-dn(i)+h;if(30<d){var b=h-h%5;d=(l&(1<<b)-1).toString(32),l>>=b,h-=b,ai=1<<32-dn(i)+h|s<<h|l,si=d+r}else ai=1<<d|s<<h|l,si=r}function Jd(r){r.return!==null&&(fs(r,1),H0(r,1,0))}function ep(r){for(;r===Gc;)Gc=co[--fo],co[fo]=null,Yc=co[--fo],co[fo]=null;for(;r===cs;)cs=$n[--qn],$n[qn]=null,si=$n[--qn],$n[qn]=null,ai=$n[--qn],$n[qn]=null}var yn=null,_t=null,Ye=!1,hs=null,xr=!1,tp=Error(a(519));function ds(r){var i=Error(a(418,""));throw Hl(Fn(i,r)),tp}function $0(r){var i=r.stateNode,s=r.type,l=r.memoizedProps;switch(i[Tt]=r,i[Qt]=l,s){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(s=0;s<du.length;s++)Ve(du[s],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),Al(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),qi(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Cc(i,l.value,l.defaultValue,l.children),qi(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||ov(i.textContent,s)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=Cf),i=!0):i=!1,i||ds(r)}function q0(r){for(yn=r.return;yn;)switch(yn.tag){case 5:case 13:xr=!1;return;case 27:case 3:xr=!0;return;default:yn=yn.return}}function Bl(r){if(r!==yn)return!1;if(!Ye)return q0(r),Ye=!0,!1;var i=r.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=r.type,s=!(s!=="form"&&s!=="button")||ym(r.type,r.memoizedProps)),s=!s),s&&_t&&ds(r),q0(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(s=r.data,s==="/$"){if(i===0){_t=ur(r.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;r=r.nextSibling}_t=null}}else i===27?(i=_t,ha(r.type)?(r=Em,Em=null,_t=r):_t=i):_t=yn?ur(r.stateNode.nextSibling):null;return!0}function Fl(){_t=yn=null,Ye=!1}function G0(){var r=hs;return r!==null&&(En===null?En=r:En.push.apply(En,r),hs=null),r}function Hl(r){hs===null?hs=[r]:hs.push(r)}var np=re(null),ps=null,oi=null;function Wi(r,i,s){ue(np,i._currentValue),i._currentValue=s}function li(r){r._currentValue=np.current,le(np)}function rp(r,i,s){for(;r!==null;){var l=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),r===s)break;r=r.return}}function ip(r,i,s,l){var h=r.child;for(h!==null&&(h.return=r);h!==null;){var d=h.dependencies;if(d!==null){var b=h.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=h;for(var N=0;N<i.length;N++)if(S.context===i[N]){d.lanes|=s,S=d.alternate,S!==null&&(S.lanes|=s),rp(d.return,s,r),l||(b=null);break e}d=S.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,d=b.alternate,d!==null&&(d.lanes|=s),rp(b,s,r),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===r){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function $l(r,i,s,l){r=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var S=h.type;Rn(h.pendingProps.value,b.value)||(r!==null?r.push(S):r=[S])}}else if(h===vt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push(_u):r=[_u])}h=h.return}r!==null&&ip(i,r,s,l),i.flags|=262144}function Kc(r){for(r=r.firstContext;r!==null;){if(!Rn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function ms(r){ps=r,oi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function sn(r){return Y0(ps,r)}function Qc(r,i){return ps===null&&ms(r),Y0(r,i)}function Y0(r,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},oi===null){if(r===null)throw Error(a(308));oi=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else oi=oi.next=i;return s}var gS=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(s,l){r.push(l)}};this.abort=function(){i.aborted=!0,r.forEach(function(s){return s()})}},yS=n.unstable_scheduleCallback,vS=n.unstable_NormalPriority,Lt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ap(){return{controller:new gS,data:new Map,refCount:0}}function ql(r){r.refCount--,r.refCount===0&&yS(vS,function(){r.controller.abort()})}var Gl=null,sp=0,ho=0,po=null;function _S(r,i){if(Gl===null){var s=Gl=[];sp=0,ho=lm(),po={status:"pending",value:void 0,then:function(l){s.push(l)}}}return sp++,i.then(K0,K0),i}function K0(){if(--sp===0&&Gl!==null){po!==null&&(po.status="fulfilled");var r=Gl;Gl=null,ho=0,po=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function bS(r,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return r.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Q0=Z.S;Z.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&_S(r,i),Q0!==null&&Q0(r,i)};var gs=re(null);function op(){var r=gs.current;return r!==null?r:st.pooledCache}function Xc(r,i){i===null?ue(gs,gs.current):ue(gs,i.pool)}function X0(){var r=op();return r===null?null:{parent:Lt._currentValue,pool:r}}var Yl=Error(a(460)),W0=Error(a(474)),Wc=Error(a(542)),lp={then:function(){}};function Z0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Zc(){}function J0(r,i,s){switch(s=r[s],s===void 0?r.push(i):s!==i&&(i.then(Zc,Zc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,ty(r),r;default:if(typeof i.status=="string")i.then(Zc,Zc);else{if(r=st,r!==null&&100<r.shellSuspendCounter)throw Error(a(482));r=i,r.status="pending",r.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,ty(r),r}throw Kl=i,Yl}}var Kl=null;function ey(){if(Kl===null)throw Error(a(459));var r=Kl;return Kl=null,r}function ty(r){if(r===Yl||r===Wc)throw Error(a(483))}var Zi=!1;function up(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ji(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ea(r,i,s){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=$c(r),B0(r,null,s),i}return Hc(r,l,i,s),$c(r)}function Ql(r,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=r.pendingLanes,s|=l,i.lanes=s,Ui(r,s)}}function fp(r,i){var s=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=b:d=d.next=b,s=s.next}while(s!==null);d===null?h=d=i:d=d.next=i}else h=d=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=i:r.next=i,s.lastBaseUpdate=i}var hp=!1;function Xl(){if(hp){var r=po;if(r!==null)throw r}}function Wl(r,i,s,l){hp=!1;var h=r.updateQueue;Zi=!1;var d=h.firstBaseUpdate,b=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var N=S,H=N.next;N.next=null,b===null?d=H:b.next=H,b=N;var J=r.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==b&&(S===null?J.firstBaseUpdate=H:S.next=H,J.lastBaseUpdate=N))}if(d!==null){var ne=h.baseState;b=0,J=H=N=null,S=d;do{var q=S.lane&-536870913,G=q!==S.lane;if(G?($e&q)===q:(l&q)===q){q!==0&&q===ho&&(hp=!0),J!==null&&(J=J.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ae=r,Te=S;q=i;var nt=s;switch(Te.tag){case 1:if(Ae=Te.payload,typeof Ae=="function"){ne=Ae.call(nt,ne,q);break e}ne=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Te.payload,q=typeof Ae=="function"?Ae.call(nt,ne,q):Ae,q==null)break e;ne=v({},ne,q);break e;case 2:Zi=!0}}q=S.callback,q!==null&&(r.flags|=64,G&&(r.flags|=8192),G=h.callbacks,G===null?h.callbacks=[q]:G.push(q))}else G={lane:q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(H=J=G,N=ne):J=J.next=G,b|=q;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;G=S,S=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);J===null&&(N=ne),h.baseState=N,h.firstBaseUpdate=H,h.lastBaseUpdate=J,d===null&&(h.shared.lanes=0),la|=b,r.lanes=b,r.memoizedState=ne}}function ny(r,i){if(typeof r!="function")throw Error(a(191,r));r.call(i)}function ry(r,i){var s=r.callbacks;if(s!==null)for(r.callbacks=null,r=0;r<s.length;r++)ny(s[r],i)}var mo=re(null),Jc=re(0);function iy(r,i){r=mi,ue(Jc,r),ue(mo,i),mi=r|i.baseLanes}function dp(){ue(Jc,mi),ue(mo,mo.current)}function pp(){mi=Jc.current,le(mo),le(Jc)}var ta=0,ke=null,et=null,Ct=null,ef=!1,go=!1,ys=!1,tf=0,Zl=0,yo=null,ES=0;function At(){throw Error(a(321))}function mp(r,i){if(i===null)return!1;for(var s=0;s<i.length&&s<r.length;s++)if(!Rn(r[s],i[s]))return!1;return!0}function gp(r,i,s,l,h,d){return ta=d,ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Z.H=r===null||r.memoizedState===null?By:Fy,ys=!1,d=s(l,h),ys=!1,go&&(d=sy(i,s,l,h)),ay(r),d}function ay(r){Z.H=lf;var i=et!==null&&et.next!==null;if(ta=0,Ct=et=ke=null,ef=!1,Zl=0,yo=null,i)throw Error(a(300));r===null||Ft||(r=r.dependencies,r!==null&&Kc(r)&&(Ft=!0))}function sy(r,i,s,l){ke=r;var h=0;do{if(go&&(yo=null),Zl=0,go=!1,25<=h)throw Error(a(301));if(h+=1,Ct=et=null,r.updateQueue!=null){var d=r.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Z.H=CS,d=i(s,l)}while(go);return d}function TS(){var r=Z.H,i=r.useState()[0];return i=typeof i.then=="function"?Jl(i):i,r=r.useState()[0],(et!==null?et.memoizedState:null)!==r&&(ke.flags|=1024),i}function yp(){var r=tf!==0;return tf=0,r}function vp(r,i,s){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~s}function _p(r){if(ef){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ef=!1}ta=0,Ct=et=ke=null,go=!1,Zl=tf=0,yo=null}function _n(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ke.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function It(){if(et===null){var r=ke.alternate;r=r!==null?r.memoizedState:null}else r=et.next;var i=Ct===null?ke.memoizedState:Ct.next;if(i!==null)Ct=i,et=r;else{if(r===null)throw ke.alternate===null?Error(a(467)):Error(a(310));et=r,r={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Ct===null?ke.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function bp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(r){var i=Zl;return Zl+=1,yo===null&&(yo=[]),r=J0(yo,r,i),i=ke,(Ct===null?i.memoizedState:Ct.next)===null&&(i=i.alternate,Z.H=i===null||i.memoizedState===null?By:Fy),r}function nf(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Jl(r);if(r.$$typeof===W)return sn(r)}throw Error(a(438,String(r)))}function Ep(r){var i=null,s=ke.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=bp(),ke.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(r),l=0;l<r;l++)s[l]=P;return i.index++,s}function ui(r,i){return typeof i=="function"?i(r):i}function rf(r){var i=It();return Tp(i,et,r)}function Tp(r,i,s){var l=r.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=r.baseQueue,d=l.pending;if(d!==null){if(h!==null){var b=h.next;h.next=d.next,d.next=b}i.baseQueue=h=d,l.pending=null}if(d=r.baseState,h===null)r.memoizedState=d;else{i=h.next;var S=b=null,N=null,H=i,J=!1;do{var ne=H.lane&-536870913;if(ne!==H.lane?($e&ne)===ne:(ta&ne)===ne){var q=H.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ne===ho&&(J=!0);else if((ta&q)===q){H=H.next,q===ho&&(J=!0);continue}else ne={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(S=N=ne,b=d):N=N.next=ne,ke.lanes|=q,la|=q;ne=H.action,ys&&s(d,ne),d=H.hasEagerState?H.eagerState:s(d,ne)}else q={lane:ne,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(S=N=q,b=d):N=N.next=q,ke.lanes|=ne,la|=ne;H=H.next}while(H!==null&&H!==i);if(N===null?b=d:N.next=S,!Rn(d,r.memoizedState)&&(Ft=!0,J&&(s=po,s!==null)))throw s;r.memoizedState=d,r.baseState=b,r.baseQueue=N,l.lastRenderedState=d}return h===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Sp(r){var i=It(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=r;var l=s.dispatch,h=s.pending,d=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do d=r(d,b.action),b=b.next;while(b!==h);Rn(d,i.memoizedState)||(Ft=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function oy(r,i,s){var l=ke,h=It(),d=Ye;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!Rn((et||h).memoizedState,s);b&&(h.memoizedState=s,Ft=!0),h=h.queue;var S=cy.bind(null,l,h,r);if(eu(2048,8,S,[r]),h.getSnapshot!==i||b||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,vo(9,af(),uy.bind(null,l,h,s,i),null),st===null)throw Error(a(349));d||(ta&124)!==0||ly(l,i,s)}return s}function ly(r,i,s){r.flags|=16384,r={getSnapshot:i,value:s},i=ke.updateQueue,i===null?(i=bp(),ke.updateQueue=i,i.stores=[r]):(s=i.stores,s===null?i.stores=[r]:s.push(r))}function uy(r,i,s,l){i.value=s,i.getSnapshot=l,fy(i)&&hy(r)}function cy(r,i,s){return s(function(){fy(i)&&hy(r)})}function fy(r){var i=r.getSnapshot;r=r.value;try{var s=i();return!Rn(r,s)}catch{return!0}}function hy(r){var i=lo(r,2);i!==null&&Mn(i,r,2)}function wp(r){var i=_n();if(typeof r=="function"){var s=r;if(r=s(),ys){Vn(!0);try{s()}finally{Vn(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:r},i}function dy(r,i,s,l){return r.baseState=s,Tp(r,et,typeof l=="function"?l:ui)}function SS(r,i,s,l,h){if(of(r))throw Error(a(485));if(r=i.action,r!==null){var d={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};Z.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,py(i,d)):(d.next=s.next,i.pending=s.next=d)}}function py(r,i){var s=i.action,l=i.payload,h=r.state;if(i.isTransition){var d=Z.T,b={};Z.T=b;try{var S=s(h,l),N=Z.S;N!==null&&N(b,S),my(r,i,S)}catch(H){Ap(r,i,H)}finally{Z.T=d}}else try{d=s(h,l),my(r,i,d)}catch(H){Ap(r,i,H)}}function my(r,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gy(r,i,l)},function(l){return Ap(r,i,l)}):gy(r,i,s)}function gy(r,i,s){i.status="fulfilled",i.value=s,yy(i),r.state=s,i=r.pending,i!==null&&(s=i.next,s===i?r.pending=null:(s=s.next,i.next=s,py(r,s)))}function Ap(r,i,s){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,yy(i),i=i.next;while(i!==l)}r.action=null}function yy(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function vy(r,i){return i}function _y(r,i){if(Ye){var s=st.formState;if(s!==null){e:{var l=ke;if(Ye){if(_t){t:{for(var h=_t,d=xr;h.nodeType!==8;){if(!d){h=null;break t}if(h=ur(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){_t=ur(h.nextSibling),l=h.data==="F!";break e}}ds(l)}l=!1}l&&(i=s[0])}}return s=_n(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vy,lastRenderedState:i},s.queue=l,s=jy.bind(null,ke,l),l.dispatch=s,l=wp(!1),d=Np.bind(null,ke,!1,l.queue),l=_n(),h={state:i,dispatch:null,action:r,pending:null},l.queue=h,s=SS.bind(null,ke,h,d,s),h.dispatch=s,l.memoizedState=r,[i,s,!1]}function by(r){var i=It();return Ey(i,et,r)}function Ey(r,i,s){if(i=Tp(r,i,vy)[0],r=rf(ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Jl(i)}catch(b){throw b===Yl?Wc:b}else l=i;i=It();var h=i.queue,d=h.dispatch;return s!==i.memoizedState&&(ke.flags|=2048,vo(9,af(),wS.bind(null,h,s),null)),[l,d,r]}function wS(r,i){r.action=i}function Ty(r){var i=It(),s=et;if(s!==null)return Ey(i,s,r);It(),i=i.memoizedState,s=It();var l=s.queue.dispatch;return s.memoizedState=r,[i,l,!1]}function vo(r,i,s,l){return r={tag:r,create:s,deps:l,inst:i,next:null},i=ke.updateQueue,i===null&&(i=bp(),ke.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=r.next=r:(l=s.next,s.next=r,r.next=l,i.lastEffect=r),r}function af(){return{destroy:void 0,resource:void 0}}function Sy(){return It().memoizedState}function sf(r,i,s,l){var h=_n();l=l===void 0?null:l,ke.flags|=r,h.memoizedState=vo(1|i,af(),s,l)}function eu(r,i,s,l){var h=It();l=l===void 0?null:l;var d=h.memoizedState.inst;et!==null&&l!==null&&mp(l,et.memoizedState.deps)?h.memoizedState=vo(i,d,s,l):(ke.flags|=r,h.memoizedState=vo(1|i,d,s,l))}function wy(r,i){sf(8390656,8,r,i)}function Ay(r,i){eu(2048,8,r,i)}function xy(r,i){return eu(4,2,r,i)}function Ry(r,i){return eu(4,4,r,i)}function Cy(r,i){if(typeof i=="function"){r=r();var s=i(r);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Iy(r,i,s){s=s!=null?s.concat([r]):null,eu(4,4,Cy.bind(null,i,r),s)}function xp(){}function Ny(r,i){var s=It();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&mp(i,l[1])?l[0]:(s.memoizedState=[r,i],r)}function Dy(r,i){var s=It();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&mp(i,l[1]))return l[0];if(l=r(),ys){Vn(!0);try{r()}finally{Vn(!1)}}return s.memoizedState=[l,i],l}function Rp(r,i,s){return s===void 0||(ta&1073741824)!==0?r.memoizedState=i:(r.memoizedState=s,r=k2(),ke.lanes|=r,la|=r,s)}function Oy(r,i,s,l){return Rn(s,i)?s:mo.current!==null?(r=Rp(r,s,l),Rn(r,i)||(Ft=!0),r):(ta&42)===0?(Ft=!0,r.memoizedState=s):(r=k2(),ke.lanes|=r,la|=r,i)}function My(r,i,s,l,h){var d=ce.p;ce.p=d!==0&&8>d?d:8;var b=Z.T,S={};Z.T=S,Np(r,!1,i,s);try{var N=h(),H=Z.S;if(H!==null&&H(S,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var J=bS(N,l);tu(r,i,J,On(r))}else tu(r,i,l,On(r))}catch(ne){tu(r,i,{then:function(){},status:"rejected",reason:ne},On())}finally{ce.p=d,Z.T=b}}function AS(){}function Cp(r,i,s,l){if(r.tag!==5)throw Error(a(476));var h=ky(r).queue;My(r,h,i,ge,s===null?AS:function(){return Py(r),s(l)})}function ky(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:ge},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:s},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function Py(r){var i=ky(r).next.queue;tu(r,i,{},On())}function Ip(){return sn(_u)}function Ly(){return It().memoizedState}function Vy(){return It().memoizedState}function xS(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var s=On();r=Ji(s);var l=ea(i,r,s);l!==null&&(Mn(l,i,s),Ql(l,i,s)),i={cache:ap()},r.payload=i;return}i=i.return}}function RS(r,i,s){var l=On();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},of(r)?zy(i,s):(s=Qd(r,i,s,l),s!==null&&(Mn(s,r,l),Uy(s,i,l)))}function jy(r,i,s){var l=On();tu(r,i,s,l)}function tu(r,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(of(r))zy(i,h);else{var d=r.alternate;if(r.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var b=i.lastRenderedState,S=d(b,s);if(h.hasEagerState=!0,h.eagerState=S,Rn(S,b))return Hc(r,i,h,0),st===null&&Fc(),!1}catch{}finally{}if(s=Qd(r,i,h,l),s!==null)return Mn(s,r,l),Uy(s,i,l),!0}return!1}function Np(r,i,s,l){if(l={lane:2,revertLane:lm(),action:l,hasEagerState:!1,eagerState:null,next:null},of(r)){if(i)throw Error(a(479))}else i=Qd(r,s,l,2),i!==null&&Mn(i,r,2)}function of(r){var i=r.alternate;return r===ke||i!==null&&i===ke}function zy(r,i){go=ef=!0;var s=r.pending;s===null?i.next=i:(i.next=s.next,s.next=i),r.pending=i}function Uy(r,i,s){if((s&4194048)!==0){var l=i.lanes;l&=r.pendingLanes,s|=l,i.lanes=s,Ui(r,s)}}var lf={readContext:sn,use:nf,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},By={readContext:sn,use:nf,useCallback:function(r,i){return _n().memoizedState=[r,i===void 0?null:i],r},useContext:sn,useEffect:wy,useImperativeHandle:function(r,i,s){s=s!=null?s.concat([r]):null,sf(4194308,4,Cy.bind(null,i,r),s)},useLayoutEffect:function(r,i){return sf(4194308,4,r,i)},useInsertionEffect:function(r,i){sf(4,2,r,i)},useMemo:function(r,i){var s=_n();i=i===void 0?null:i;var l=r();if(ys){Vn(!0);try{r()}finally{Vn(!1)}}return s.memoizedState=[l,i],l},useReducer:function(r,i,s){var l=_n();if(s!==void 0){var h=s(i);if(ys){Vn(!0);try{s(i)}finally{Vn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},l.queue=r,r=r.dispatch=RS.bind(null,ke,r),[l.memoizedState,r]},useRef:function(r){var i=_n();return r={current:r},i.memoizedState=r},useState:function(r){r=wp(r);var i=r.queue,s=jy.bind(null,ke,i);return i.dispatch=s,[r.memoizedState,s]},useDebugValue:xp,useDeferredValue:function(r,i){var s=_n();return Rp(s,r,i)},useTransition:function(){var r=wp(!1);return r=My.bind(null,ke,r.queue,!0,!1),_n().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,s){var l=ke,h=_n();if(Ye){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),st===null)throw Error(a(349));($e&124)!==0||ly(l,i,s)}h.memoizedState=s;var d={value:s,getSnapshot:i};return h.queue=d,wy(cy.bind(null,l,d,r),[r]),l.flags|=2048,vo(9,af(),uy.bind(null,l,d,s,i),null),s},useId:function(){var r=_n(),i=st.identifierPrefix;if(Ye){var s=si,l=ai;s=(l&~(1<<32-dn(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=tf++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=ES++,i="«"+i+"r"+s.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:Ip,useFormState:_y,useActionState:_y,useOptimistic:function(r){var i=_n();i.memoizedState=i.baseState=r;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Np.bind(null,ke,!0,s),s.dispatch=i,[r,i]},useMemoCache:Ep,useCacheRefresh:function(){return _n().memoizedState=xS.bind(null,ke)}},Fy={readContext:sn,use:nf,useCallback:Ny,useContext:sn,useEffect:Ay,useImperativeHandle:Iy,useInsertionEffect:xy,useLayoutEffect:Ry,useMemo:Dy,useReducer:rf,useRef:Sy,useState:function(){return rf(ui)},useDebugValue:xp,useDeferredValue:function(r,i){var s=It();return Oy(s,et.memoizedState,r,i)},useTransition:function(){var r=rf(ui)[0],i=It().memoizedState;return[typeof r=="boolean"?r:Jl(r),i]},useSyncExternalStore:oy,useId:Ly,useHostTransitionStatus:Ip,useFormState:by,useActionState:by,useOptimistic:function(r,i){var s=It();return dy(s,et,r,i)},useMemoCache:Ep,useCacheRefresh:Vy},CS={readContext:sn,use:nf,useCallback:Ny,useContext:sn,useEffect:Ay,useImperativeHandle:Iy,useInsertionEffect:xy,useLayoutEffect:Ry,useMemo:Dy,useReducer:Sp,useRef:Sy,useState:function(){return Sp(ui)},useDebugValue:xp,useDeferredValue:function(r,i){var s=It();return et===null?Rp(s,r,i):Oy(s,et.memoizedState,r,i)},useTransition:function(){var r=Sp(ui)[0],i=It().memoizedState;return[typeof r=="boolean"?r:Jl(r),i]},useSyncExternalStore:oy,useId:Ly,useHostTransitionStatus:Ip,useFormState:Ty,useActionState:Ty,useOptimistic:function(r,i){var s=It();return et!==null?dy(s,et,r,i):(s.baseState=r,[r,s.queue.dispatch])},useMemoCache:Ep,useCacheRefresh:Vy},_o=null,nu=0;function uf(r){var i=nu;return nu+=1,_o===null&&(_o=[]),J0(_o,r,i)}function ru(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function cf(r,i){throw i.$$typeof===T?Error(a(525)):(r=Object.prototype.toString.call(i),Error(a(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function Hy(r){var i=r._init;return i(r._payload)}function $y(r){function i(L,k){if(r){var B=L.deletions;B===null?(L.deletions=[k],L.flags|=16):B.push(k)}}function s(L,k){if(!r)return null;for(;k!==null;)i(L,k),k=k.sibling;return null}function l(L){for(var k=new Map;L!==null;)L.key!==null?k.set(L.key,L):k.set(L.index,L),L=L.sibling;return k}function h(L,k){return L=ii(L,k),L.index=0,L.sibling=null,L}function d(L,k,B){return L.index=B,r?(B=L.alternate,B!==null?(B=B.index,B<k?(L.flags|=67108866,k):B):(L.flags|=67108866,k)):(L.flags|=1048576,k)}function b(L){return r&&L.alternate===null&&(L.flags|=67108866),L}function S(L,k,B,ee){return k===null||k.tag!==6?(k=Wd(B,L.mode,ee),k.return=L,k):(k=h(k,B),k.return=L,k)}function N(L,k,B,ee){var pe=B.type;return pe===U?J(L,k,B.props.children,ee,B.key):k!==null&&(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&Hy(pe)===k.type)?(k=h(k,B.props),ru(k,B),k.return=L,k):(k=qc(B.type,B.key,B.props,null,L.mode,ee),ru(k,B),k.return=L,k)}function H(L,k,B,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=Zd(B,L.mode,ee),k.return=L,k):(k=h(k,B.children||[]),k.return=L,k)}function J(L,k,B,ee,pe){return k===null||k.tag!==7?(k=us(B,L.mode,ee,pe),k.return=L,k):(k=h(k,B),k.return=L,k)}function ne(L,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Wd(""+k,L.mode,B),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case A:return B=qc(k.type,k.key,k.props,null,L.mode,B),ru(B,k),B.return=L,B;case C:return k=Zd(k,L.mode,B),k.return=L,k;case x:var ee=k._init;return k=ee(k._payload),ne(L,k,B)}if(it(k)||j(k))return k=us(k,L.mode,B,null),k.return=L,k;if(typeof k.then=="function")return ne(L,uf(k),B);if(k.$$typeof===W)return ne(L,Qc(L,k),B);cf(L,k)}return null}function q(L,k,B,ee){var pe=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:S(L,k,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case A:return B.key===pe?N(L,k,B,ee):null;case C:return B.key===pe?H(L,k,B,ee):null;case x:return pe=B._init,B=pe(B._payload),q(L,k,B,ee)}if(it(B)||j(B))return pe!==null?null:J(L,k,B,ee,null);if(typeof B.then=="function")return q(L,k,uf(B),ee);if(B.$$typeof===W)return q(L,k,Qc(L,B),ee);cf(L,B)}return null}function G(L,k,B,ee,pe){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return L=L.get(B)||null,S(k,L,""+ee,pe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case A:return L=L.get(ee.key===null?B:ee.key)||null,N(k,L,ee,pe);case C:return L=L.get(ee.key===null?B:ee.key)||null,H(k,L,ee,pe);case x:var Pe=ee._init;return ee=Pe(ee._payload),G(L,k,B,ee,pe)}if(it(ee)||j(ee))return L=L.get(B)||null,J(k,L,ee,pe,null);if(typeof ee.then=="function")return G(L,k,B,uf(ee),pe);if(ee.$$typeof===W)return G(L,k,B,Qc(k,ee),pe);cf(k,ee)}return null}function Ae(L,k,B,ee){for(var pe=null,Pe=null,ye=k,Se=k=0,$t=null;ye!==null&&Se<B.length;Se++){ye.index>Se?($t=ye,ye=null):$t=ye.sibling;var Ge=q(L,ye,B[Se],ee);if(Ge===null){ye===null&&(ye=$t);break}r&&ye&&Ge.alternate===null&&i(L,ye),k=d(Ge,k,Se),Pe===null?pe=Ge:Pe.sibling=Ge,Pe=Ge,ye=$t}if(Se===B.length)return s(L,ye),Ye&&fs(L,Se),pe;if(ye===null){for(;Se<B.length;Se++)ye=ne(L,B[Se],ee),ye!==null&&(k=d(ye,k,Se),Pe===null?pe=ye:Pe.sibling=ye,Pe=ye);return Ye&&fs(L,Se),pe}for(ye=l(ye);Se<B.length;Se++)$t=G(ye,L,Se,B[Se],ee),$t!==null&&(r&&$t.alternate!==null&&ye.delete($t.key===null?Se:$t.key),k=d($t,k,Se),Pe===null?pe=$t:Pe.sibling=$t,Pe=$t);return r&&ye.forEach(function(ya){return i(L,ya)}),Ye&&fs(L,Se),pe}function Te(L,k,B,ee){if(B==null)throw Error(a(151));for(var pe=null,Pe=null,ye=k,Se=k=0,$t=null,Ge=B.next();ye!==null&&!Ge.done;Se++,Ge=B.next()){ye.index>Se?($t=ye,ye=null):$t=ye.sibling;var ya=q(L,ye,Ge.value,ee);if(ya===null){ye===null&&(ye=$t);break}r&&ye&&ya.alternate===null&&i(L,ye),k=d(ya,k,Se),Pe===null?pe=ya:Pe.sibling=ya,Pe=ya,ye=$t}if(Ge.done)return s(L,ye),Ye&&fs(L,Se),pe;if(ye===null){for(;!Ge.done;Se++,Ge=B.next())Ge=ne(L,Ge.value,ee),Ge!==null&&(k=d(Ge,k,Se),Pe===null?pe=Ge:Pe.sibling=Ge,Pe=Ge);return Ye&&fs(L,Se),pe}for(ye=l(ye);!Ge.done;Se++,Ge=B.next())Ge=G(ye,L,Se,Ge.value,ee),Ge!==null&&(r&&Ge.alternate!==null&&ye.delete(Ge.key===null?Se:Ge.key),k=d(Ge,k,Se),Pe===null?pe=Ge:Pe.sibling=Ge,Pe=Ge);return r&&ye.forEach(function(Iw){return i(L,Iw)}),Ye&&fs(L,Se),pe}function nt(L,k,B,ee){if(typeof B=="object"&&B!==null&&B.type===U&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case A:e:{for(var pe=B.key;k!==null;){if(k.key===pe){if(pe=B.type,pe===U){if(k.tag===7){s(L,k.sibling),ee=h(k,B.props.children),ee.return=L,L=ee;break e}}else if(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&Hy(pe)===k.type){s(L,k.sibling),ee=h(k,B.props),ru(ee,B),ee.return=L,L=ee;break e}s(L,k);break}else i(L,k);k=k.sibling}B.type===U?(ee=us(B.props.children,L.mode,ee,B.key),ee.return=L,L=ee):(ee=qc(B.type,B.key,B.props,null,L.mode,ee),ru(ee,B),ee.return=L,L=ee)}return b(L);case C:e:{for(pe=B.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){s(L,k.sibling),ee=h(k,B.children||[]),ee.return=L,L=ee;break e}else{s(L,k);break}else i(L,k);k=k.sibling}ee=Zd(B,L.mode,ee),ee.return=L,L=ee}return b(L);case x:return pe=B._init,B=pe(B._payload),nt(L,k,B,ee)}if(it(B))return Ae(L,k,B,ee);if(j(B)){if(pe=j(B),typeof pe!="function")throw Error(a(150));return B=pe.call(B),Te(L,k,B,ee)}if(typeof B.then=="function")return nt(L,k,uf(B),ee);if(B.$$typeof===W)return nt(L,k,Qc(L,B),ee);cf(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(s(L,k.sibling),ee=h(k,B),ee.return=L,L=ee):(s(L,k),ee=Wd(B,L.mode,ee),ee.return=L,L=ee),b(L)):s(L,k)}return function(L,k,B,ee){try{nu=0;var pe=nt(L,k,B,ee);return _o=null,pe}catch(ye){if(ye===Yl||ye===Wc)throw ye;var Pe=Cn(29,ye,null,L.mode);return Pe.lanes=ee,Pe.return=L,Pe}finally{}}}var bo=$y(!0),qy=$y(!1),Gn=re(null),Rr=null;function na(r){var i=r.alternate;ue(Vt,Vt.current&1),ue(Gn,r),Rr===null&&(i===null||mo.current!==null||i.memoizedState!==null)&&(Rr=r)}function Gy(r){if(r.tag===22){if(ue(Vt,Vt.current),ue(Gn,r),Rr===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(Rr=r)}}else ra()}function ra(){ue(Vt,Vt.current),ue(Gn,Gn.current)}function ci(r){le(Gn),Rr===r&&(Rr=null),le(Vt)}var Vt=re(0);function ff(r){for(var i=r;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||bm(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Dp(r,i,s,l){i=r.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var Op={enqueueSetState:function(r,i,s){r=r._reactInternals;var l=On(),h=Ji(l);h.payload=i,s!=null&&(h.callback=s),i=ea(r,h,l),i!==null&&(Mn(i,r,l),Ql(i,r,l))},enqueueReplaceState:function(r,i,s){r=r._reactInternals;var l=On(),h=Ji(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ea(r,h,l),i!==null&&(Mn(i,r,l),Ql(i,r,l))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var s=On(),l=Ji(s);l.tag=2,i!=null&&(l.callback=i),i=ea(r,l,s),i!==null&&(Mn(i,r,s),Ql(i,r,s))}};function Yy(r,i,s,l,h,d,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,d,b):i.prototype&&i.prototype.isPureReactComponent?!zl(s,l)||!zl(h,d):!0}function Ky(r,i,s,l){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==r&&Op.enqueueReplaceState(i,i.state,null)}function vs(r,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(r=r.defaultProps){s===i&&(s=v({},s));for(var h in r)s[h]===void 0&&(s[h]=r[h])}return s}var hf=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Qy(r){hf(r)}function Xy(r){console.error(r)}function Wy(r){hf(r)}function df(r,i){try{var s=r.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Zy(r,i,s){try{var l=r.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mp(r,i,s){return s=Ji(s),s.tag=3,s.payload={element:null},s.callback=function(){df(r,i)},s}function Jy(r){return r=Ji(r),r.tag=3,r}function e2(r,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;r.payload=function(){return h(d)},r.callback=function(){Zy(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){Zy(i,s,l),typeof h!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function IS(r,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&$l(i,s,h,!0),s=Gn.current,s!==null){switch(s.tag){case 13:return Rr===null?rm():s.alternate===null&&bt===0&&(bt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===lp?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),am(r,l,h)),!1;case 22:return s.flags|=65536,l===lp?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),am(r,l,h)),!1}throw Error(a(435,s.tag))}return am(r,l,h),rm(),!1}if(Ye)return i=Gn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==tp&&(r=Error(a(422),{cause:l}),Hl(Fn(r,s)))):(l!==tp&&(i=Error(a(423),{cause:l}),Hl(Fn(i,s))),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,l=Fn(l,s),h=Mp(r.stateNode,l,h),fp(r,h),bt!==4&&(bt=2)),!1;var d=Error(a(520),{cause:l});if(d=Fn(d,s),cu===null?cu=[d]:cu.push(d),bt!==4&&(bt=2),i===null)return!0;l=Fn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,r=h&-h,s.lanes|=r,r=Mp(s.stateNode,l,r),fp(s,r),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ua===null||!ua.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Jy(h),e2(h,r,s,l),fp(s,h),!1}s=s.return}while(s!==null);return!1}var t2=Error(a(461)),Ft=!1;function Xt(r,i,s,l){i.child=r===null?qy(i,null,s,l):bo(i,r.child,s,l)}function n2(r,i,s,l,h){s=s.render;var d=i.ref;if("ref"in l){var b={};for(var S in l)S!=="ref"&&(b[S]=l[S])}else b=l;return ms(i),l=gp(r,i,s,b,d,h),S=yp(),r!==null&&!Ft?(vp(r,i,h),fi(r,i,h)):(Ye&&S&&Jd(i),i.flags|=1,Xt(r,i,l,h),i.child)}function r2(r,i,s,l,h){if(r===null){var d=s.type;return typeof d=="function"&&!Xd(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,i2(r,i,d,l,h)):(r=qc(s.type,null,l,i,i.mode,h),r.ref=i.ref,r.return=i,i.child=r)}if(d=r.child,!Bp(r,h)){var b=d.memoizedProps;if(s=s.compare,s=s!==null?s:zl,s(b,l)&&r.ref===i.ref)return fi(r,i,h)}return i.flags|=1,r=ii(d,l),r.ref=i.ref,r.return=i,i.child=r}function i2(r,i,s,l,h){if(r!==null){var d=r.memoizedProps;if(zl(d,l)&&r.ref===i.ref)if(Ft=!1,i.pendingProps=l=d,Bp(r,h))(r.flags&131072)!==0&&(Ft=!0);else return i.lanes=r.lanes,fi(r,i,h)}return kp(r,i,s,l,h)}function a2(r,i,s){var l=i.pendingProps,h=l.children,d=r!==null?r.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,r!==null){for(h=i.child=r.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return s2(r,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&Xc(i,d!==null?d.cachePool:null),d!==null?iy(i,d):dp(),Gy(i);else return i.lanes=i.childLanes=536870912,s2(r,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Xc(i,d.cachePool),iy(i,d),ra(),i.memoizedState=null):(r!==null&&Xc(i,null),dp(),ra());return Xt(r,i,h,s),i.child}function s2(r,i,s,l){var h=op();return h=h===null?null:{parent:Lt._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},r!==null&&Xc(i,null),dp(),Gy(i),r!==null&&$l(r,i,l,!0),null}function pf(r,i){var s=i.ref;if(s===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(r===null||r.ref!==s)&&(i.flags|=4194816)}}function kp(r,i,s,l,h){return ms(i),s=gp(r,i,s,l,void 0,h),l=yp(),r!==null&&!Ft?(vp(r,i,h),fi(r,i,h)):(Ye&&l&&Jd(i),i.flags|=1,Xt(r,i,s,h),i.child)}function o2(r,i,s,l,h,d){return ms(i),i.updateQueue=null,s=sy(i,l,s,h),ay(r),l=yp(),r!==null&&!Ft?(vp(r,i,d),fi(r,i,d)):(Ye&&l&&Jd(i),i.flags|=1,Xt(r,i,s,d),i.child)}function l2(r,i,s,l,h){if(ms(i),i.stateNode===null){var d=uo,b=s.contextType;typeof b=="object"&&b!==null&&(d=sn(b)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Op,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},up(i),b=s.contextType,d.context=typeof b=="object"&&b!==null?sn(b):uo,d.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Dp(i,s,b,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Op.enqueueReplaceState(d,d.state,null),Wl(i,l,d,h),Xl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(r===null){d=i.stateNode;var S=i.memoizedProps,N=vs(s,S);d.props=N;var H=d.context,J=s.contextType;b=uo,typeof J=="object"&&J!==null&&(b=sn(J));var ne=s.getDerivedStateFromProps;J=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,J||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||H!==b)&&Ky(i,d,l,b),Zi=!1;var q=i.memoizedState;d.state=q,Wl(i,l,d,h),Xl(),H=i.memoizedState,S||q!==H||Zi?(typeof ne=="function"&&(Dp(i,s,ne,l),H=i.memoizedState),(N=Zi||Yy(i,s,N,l,q,H,b))?(J||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=b,l=N):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,cp(r,i),b=i.memoizedProps,J=vs(s,b),d.props=J,ne=i.pendingProps,q=d.context,H=s.contextType,N=uo,typeof H=="object"&&H!==null&&(N=sn(H)),S=s.getDerivedStateFromProps,(H=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==ne||q!==N)&&Ky(i,d,l,N),Zi=!1,q=i.memoizedState,d.state=q,Wl(i,l,d,h),Xl();var G=i.memoizedState;b!==ne||q!==G||Zi||r!==null&&r.dependencies!==null&&Kc(r.dependencies)?(typeof S=="function"&&(Dp(i,s,S,l),G=i.memoizedState),(J=Zi||Yy(i,s,J,l,q,G,N)||r!==null&&r.dependencies!==null&&Kc(r.dependencies))?(H||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,N),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,N)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=N,l=J):(typeof d.componentDidUpdate!="function"||b===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),l=!1)}return d=l,pf(r,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,r!==null&&l?(i.child=bo(i,r.child,null,h),i.child=bo(i,null,s,h)):Xt(r,i,s,h),i.memoizedState=d.state,r=i.child):r=fi(r,i,h),r}function u2(r,i,s,l){return Fl(),i.flags|=256,Xt(r,i,s,l),i.child}var Pp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lp(r){return{baseLanes:r,cachePool:X0()}}function Vp(r,i,s){return r=r!==null?r.childLanes&~s:0,i&&(r|=Yn),r}function c2(r,i,s){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,b;if((b=d)||(b=r!==null&&r.memoizedState===null?!1:(Vt.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,r===null){if(Ye){if(h?na(i):ra(),Ye){var S=_t,N;if(N=S){e:{for(N=S,S=xr;N.nodeType!==8;){if(!S){S=null;break e}if(N=ur(N.nextSibling),N===null){S=null;break e}}S=N}S!==null?(i.memoizedState={dehydrated:S,treeContext:cs!==null?{id:ai,overflow:si}:null,retryLane:536870912,hydrationErrors:null},N=Cn(18,null,null,0),N.stateNode=S,N.return=i,i.child=N,yn=i,_t=null,N=!0):N=!1}N||ds(i)}if(S=i.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return bm(S)?i.lanes=32:i.lanes=536870912,null;ci(i)}return S=l.children,l=l.fallback,h?(ra(),h=i.mode,S=mf({mode:"hidden",children:S},h),l=us(l,h,s,null),S.return=i,l.return=i,S.sibling=l,i.child=S,h=i.child,h.memoizedState=Lp(s),h.childLanes=Vp(r,b,s),i.memoizedState=Pp,l):(na(i),jp(i,S))}if(N=r.memoizedState,N!==null&&(S=N.dehydrated,S!==null)){if(d)i.flags&256?(na(i),i.flags&=-257,i=zp(r,i,s)):i.memoizedState!==null?(ra(),i.child=r.child,i.flags|=128,i=null):(ra(),h=l.fallback,S=i.mode,l=mf({mode:"visible",children:l.children},S),h=us(h,S,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,bo(i,r.child,null,s),l=i.child,l.memoizedState=Lp(s),l.childLanes=Vp(r,b,s),i.memoizedState=Pp,i=h);else if(na(i),bm(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var H=b.dgst;b=H,l=Error(a(419)),l.stack="",l.digest=b,Hl({value:l,source:null,stack:null}),i=zp(r,i,s)}else if(Ft||$l(r,i,s,!1),b=(s&r.childLanes)!==0,Ft||b){if(b=st,b!==null&&(l=s&-s,l=(l&42)!==0?1:Tl(l),l=(l&(b.suspendedLanes|s))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,lo(r,l),Mn(b,r,l),t2;S.data==="$?"||rm(),i=zp(r,i,s)}else S.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=N.treeContext,_t=ur(S.nextSibling),yn=i,Ye=!0,hs=null,xr=!1,r!==null&&($n[qn++]=ai,$n[qn++]=si,$n[qn++]=cs,ai=r.id,si=r.overflow,cs=i),i=jp(i,l.children),i.flags|=4096);return i}return h?(ra(),h=l.fallback,S=i.mode,N=r.child,H=N.sibling,l=ii(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,H!==null?h=ii(H,h):(h=us(h,S,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,S=r.child.memoizedState,S===null?S=Lp(s):(N=S.cachePool,N!==null?(H=Lt._currentValue,N=N.parent!==H?{parent:H,pool:H}:N):N=X0(),S={baseLanes:S.baseLanes|s,cachePool:N}),h.memoizedState=S,h.childLanes=Vp(r,b,s),i.memoizedState=Pp,l):(na(i),s=r.child,r=s.sibling,s=ii(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,r!==null&&(b=i.deletions,b===null?(i.deletions=[r],i.flags|=16):b.push(r)),i.child=s,i.memoizedState=null,s)}function jp(r,i){return i=mf({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function mf(r,i){return r=Cn(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function zp(r,i,s){return bo(i,r.child,null,s),r=jp(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function f2(r,i,s){r.lanes|=i;var l=r.alternate;l!==null&&(l.lanes|=i),rp(r.return,i,s)}function Up(r,i,s,l,h){var d=r.memoizedState;d===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function h2(r,i,s){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Xt(r,i,l.children,s),l=Vt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&f2(r,s,i);else if(r.tag===19)f2(r,s,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}switch(ue(Vt,l),h){case"forwards":for(s=i.child,h=null;s!==null;)r=s.alternate,r!==null&&ff(r)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Up(i,!1,h,s,d);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(r=h.alternate,r!==null&&ff(r)===null){i.child=h;break}r=h.sibling,h.sibling=s,s=h,h=r}Up(i,!0,s,null,d);break;case"together":Up(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fi(r,i,s){if(r!==null&&(i.dependencies=r.dependencies),la|=i.lanes,(s&i.childLanes)===0)if(r!==null){if($l(r,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(a(153));if(i.child!==null){for(r=i.child,s=ii(r,r.pendingProps),i.child=s,s.return=i;r.sibling!==null;)r=r.sibling,s=s.sibling=ii(r,r.pendingProps),s.return=i;s.sibling=null}return i.child}function Bp(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&Kc(r)))}function NS(r,i,s){switch(i.tag){case 3:He(i,i.stateNode.containerInfo),Wi(i,Lt,r.memoizedState.cache),Fl();break;case 27:case 5:Qr(i);break;case 4:He(i,i.stateNode.containerInfo);break;case 10:Wi(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(na(i),i.flags|=128,null):(s&i.child.childLanes)!==0?c2(r,i,s):(na(i),r=fi(r,i,s),r!==null?r.sibling:null);na(i);break;case 19:var h=(r.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||($l(r,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return h2(r,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ue(Vt,Vt.current),l)break;return null;case 22:case 23:return i.lanes=0,a2(r,i,s);case 24:Wi(i,Lt,r.memoizedState.cache)}return fi(r,i,s)}function d2(r,i,s){if(r!==null)if(r.memoizedProps!==i.pendingProps)Ft=!0;else{if(!Bp(r,s)&&(i.flags&128)===0)return Ft=!1,NS(r,i,s);Ft=(r.flags&131072)!==0}else Ft=!1,Ye&&(i.flags&1048576)!==0&&H0(i,Yc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Xd(l)?(r=vs(l,r),i.tag=1,i=l2(null,i,l,r,s)):(i.tag=0,i=kp(null,i,l,r,s));else{if(l!=null){if(h=l.$$typeof,h===fe){i.tag=11,i=n2(null,i,l,r,s);break e}else if(h===I){i.tag=14,i=r2(null,i,l,r,s);break e}}throw i=ft(l)||l,Error(a(306,i,""))}}return i;case 0:return kp(r,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=vs(l,i.pendingProps),l2(r,i,l,h,s);case 3:e:{if(He(i,i.stateNode.containerInfo),r===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,cp(r,i),Wl(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Wi(i,Lt,l),l!==d.cache&&ip(i,[Lt],s,!0),Xl(),l=b.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=u2(r,i,l,s);break e}else if(l!==h){h=Fn(Error(a(424)),i),Hl(h),i=u2(r,i,l,s);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(_t=ur(r.firstChild),yn=i,Ye=!0,hs=null,xr=!0,s=qy(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fl(),l===h){i=fi(r,i,s);break e}Xt(r,i,l,s)}i=i.child}return i;case 26:return pf(r,i),r===null?(s=yv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ye||(s=i.type,r=i.pendingProps,l=If(be.current).createElement(s),l[Tt]=i,l[Qt]=r,Zt(l,s,r),St(l),i.stateNode=l):i.memoizedState=yv(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return Qr(i),r===null&&Ye&&(l=i.stateNode=pv(i.type,i.pendingProps,be.current),yn=i,xr=!0,h=_t,ha(i.type)?(Em=h,_t=ur(l.firstChild)):_t=h),Xt(r,i,i.pendingProps.children,s),pf(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&Ye&&((h=l=_t)&&(l=iw(l,i.type,i.pendingProps,xr),l!==null?(i.stateNode=l,yn=i,_t=ur(l.firstChild),xr=!1,h=!0):h=!1),h||ds(i)),Qr(i),h=i.type,d=i.pendingProps,b=r!==null?r.memoizedProps:null,l=d.children,ym(h,d)?l=null:b!==null&&ym(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=gp(r,i,TS,null,null,s),_u._currentValue=h),pf(r,i),Xt(r,i,l,s),i.child;case 6:return r===null&&Ye&&((r=s=_t)&&(s=aw(s,i.pendingProps,xr),s!==null?(i.stateNode=s,yn=i,_t=null,r=!0):r=!1),r||ds(i)),null;case 13:return c2(r,i,s);case 4:return He(i,i.stateNode.containerInfo),l=i.pendingProps,r===null?i.child=bo(i,null,l,s):Xt(r,i,l,s),i.child;case 11:return n2(r,i,i.type,i.pendingProps,s);case 7:return Xt(r,i,i.pendingProps,s),i.child;case 8:return Xt(r,i,i.pendingProps.children,s),i.child;case 12:return Xt(r,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Wi(i,i.type,l.value),Xt(r,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ms(i),h=sn(h),l=l(h),i.flags|=1,Xt(r,i,l,s),i.child;case 14:return r2(r,i,i.type,i.pendingProps,s);case 15:return i2(r,i,i.type,i.pendingProps,s);case 19:return h2(r,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},r===null?(s=mf(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ii(r.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return a2(r,i,s);case 24:return ms(i),l=sn(Lt),r===null?(h=op(),h===null&&(h=st,d=ap(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),i.memoizedState={parent:l,cache:h},up(i),Wi(i,Lt,h)):((r.lanes&s)!==0&&(cp(r,i),Wl(i,null,null,s),Xl()),h=r.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Wi(i,Lt,l)):(l=d.cache,Wi(i,Lt,l),l!==h.cache&&ip(i,[Lt],s,!0))),Xt(r,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function hi(r){r.flags|=4}function p2(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Tv(i)){if(i=Gn.current,i!==null&&(($e&4194048)===$e?Rr!==null:($e&62914560)!==$e&&($e&536870912)===0||i!==Rr))throw Kl=lp,W0;r.flags|=8192}}function gf(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?ji():536870912,r.lanes|=i,wo|=i)}function iu(r,i){if(!Ye)switch(r.tailMode){case"hidden":i=r.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function pt(r){var i=r.alternate!==null&&r.alternate.child===r.child,s=0,l=0;if(i)for(var h=r.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=l,r.childLanes=s,i}function DS(r,i,s){var l=i.pendingProps;switch(ep(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(i),null;case 1:return pt(i),null;case 3:return s=i.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),li(Lt),Mt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(r===null||r.child===null)&&(Bl(i)?hi(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,G0())),pt(i),null;case 26:return s=i.memoizedState,r===null?(hi(i),s!==null?(pt(i),p2(i,s)):(pt(i),i.flags&=-16777217)):s?s!==r.memoizedState?(hi(i),pt(i),p2(i,s)):(pt(i),i.flags&=-16777217):(r.memoizedProps!==l&&hi(i),pt(i),i.flags&=-16777217),null;case 27:Jn(i),s=be.current;var h=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return pt(i),null}r=me.current,Bl(i)?$0(i):(r=pv(h,l,s),i.stateNode=r,hi(i))}return pt(i),null;case 5:if(Jn(i),s=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return pt(i),null}if(r=me.current,Bl(i))$0(i);else{switch(h=If(be.current),r){case 1:r=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=h.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}r[Tt]=i,r[Qt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)r.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=r;e:switch(Zt(r,s,l),s){case"button":case"input":case"select":case"textarea":r=!!l.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&hi(i)}}return pt(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==l&&hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(r=be.current,Bl(i)){if(r=i.stateNode,s=i.memoizedProps,l=null,h=yn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}r[Tt]=i,r=!!(r.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||ov(r.nodeValue,s)),r||ds(i)}else r=If(r).createTextNode(l),r[Tt]=i,i.stateNode=r}return pt(i),null;case 13:if(l=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=Bl(i),l!==null&&l.dehydrated!==null){if(r===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Tt]=i}else Fl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pt(i),h=!1}else h=G0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ci(i),i):(ci(i),null)}if(ci(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,r=r!==null&&r.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==r&&s&&(i.child.flags|=8192),gf(i,i.updateQueue),pt(i),null;case 4:return Mt(),r===null&&hm(i.stateNode.containerInfo),pt(i),null;case 10:return li(i.type),pt(i),null;case 19:if(le(Vt),h=i.memoizedState,h===null)return pt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)iu(h,!1);else{if(bt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(d=ff(r),d!==null){for(i.flags|=128,iu(h,!1),r=d.updateQueue,i.updateQueue=r,gf(i,r),i.subtreeFlags=0,r=s,s=i.child;s!==null;)F0(s,r),s=s.sibling;return ue(Vt,Vt.current&1|2),i.child}r=r.sibling}h.tail!==null&&vn()>_f&&(i.flags|=128,l=!0,iu(h,!1),i.lanes=4194304)}else{if(!l)if(r=ff(d),r!==null){if(i.flags|=128,l=!0,r=r.updateQueue,i.updateQueue=r,gf(i,r),iu(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ye)return pt(i),null}else 2*vn()-h.renderingStartTime>_f&&s!==536870912&&(i.flags|=128,l=!0,iu(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(r=h.last,r!==null?r.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=vn(),i.sibling=null,r=Vt.current,ue(Vt,l?r&1|2:r&1),i):(pt(i),null);case 22:case 23:return ci(i),pp(),l=i.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(pt(i),i.subtreeFlags&6&&(i.flags|=8192)):pt(i),s=i.updateQueue,s!==null&&gf(i,s.retryQueue),s=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),r!==null&&le(gs),null;case 24:return s=null,r!==null&&(s=r.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),li(Lt),pt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function OS(r,i){switch(ep(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return li(Lt),Mt(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return Jn(i),null;case 13:if(ci(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fl()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return le(Vt),null;case 4:return Mt(),null;case 10:return li(i.type),null;case 22:case 23:return ci(i),pp(),r!==null&&le(gs),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return li(Lt),null;case 25:return null;default:return null}}function m2(r,i){switch(ep(i),i.tag){case 3:li(Lt),Mt();break;case 26:case 27:case 5:Jn(i);break;case 4:Mt();break;case 13:ci(i);break;case 19:le(Vt);break;case 10:li(i.type);break;case 22:case 23:ci(i),pp(),r!==null&&le(gs);break;case 24:li(Lt)}}function au(r,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&r)===r){l=void 0;var d=s.create,b=s.inst;l=d(),b.destroy=l}s=s.next}while(s!==h)}}catch(S){rt(i,i.return,S)}}function ia(r,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&r)===r){var b=l.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,h=i;var N=s,H=S;try{H()}catch(J){rt(h,N,J)}}}l=l.next}while(l!==d)}}catch(J){rt(i,i.return,J)}}function g2(r){var i=r.updateQueue;if(i!==null){var s=r.stateNode;try{ry(i,s)}catch(l){rt(r,r.return,l)}}}function y2(r,i,s){s.props=vs(r.type,r.memoizedProps),s.state=r.memoizedState;try{s.componentWillUnmount()}catch(l){rt(r,i,l)}}function su(r,i){try{var s=r.ref;if(s!==null){switch(r.tag){case 26:case 27:case 5:var l=r.stateNode;break;case 30:l=r.stateNode;break;default:l=r.stateNode}typeof s=="function"?r.refCleanup=s(l):s.current=l}}catch(h){rt(r,i,h)}}function Cr(r,i){var s=r.ref,l=r.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){rt(r,i,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){rt(r,i,h)}else s.current=null}function v2(r){var i=r.type,s=r.memoizedProps,l=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){rt(r,r.return,h)}}function Fp(r,i,s){try{var l=r.stateNode;JS(l,r.type,s,i),l[Qt]=i}catch(h){rt(r,r.return,h)}}function _2(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ha(r.type)||r.tag===4}function Hp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||_2(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ha(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function $p(r,i,s){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(r,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(r),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Cf));else if(l!==4&&(l===27&&ha(r.type)&&(s=r.stateNode,i=null),r=r.child,r!==null))for($p(r,i,s),r=r.sibling;r!==null;)$p(r,i,s),r=r.sibling}function yf(r,i,s){var l=r.tag;if(l===5||l===6)r=r.stateNode,i?s.insertBefore(r,i):s.appendChild(r);else if(l!==4&&(l===27&&ha(r.type)&&(s=r.stateNode),r=r.child,r!==null))for(yf(r,i,s),r=r.sibling;r!==null;)yf(r,i,s),r=r.sibling}function b2(r){var i=r.stateNode,s=r.memoizedProps;try{for(var l=r.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Zt(i,l,s),i[Tt]=r,i[Qt]=s}catch(d){rt(r,r.return,d)}}var di=!1,xt=!1,qp=!1,E2=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function MS(r,i){if(r=r.containerInfo,mm=Pf,r=O0(r),Hd(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var b=0,S=-1,N=-1,H=0,J=0,ne=r,q=null;t:for(;;){for(var G;ne!==s||h!==0&&ne.nodeType!==3||(S=b+h),ne!==d||l!==0&&ne.nodeType!==3||(N=b+l),ne.nodeType===3&&(b+=ne.nodeValue.length),(G=ne.firstChild)!==null;)q=ne,ne=G;for(;;){if(ne===r)break t;if(q===s&&++H===h&&(S=b),q===d&&++J===l&&(N=b),(G=ne.nextSibling)!==null)break;ne=q,q=ne.parentNode}ne=G}s=S===-1||N===-1?null:{start:S,end:N}}else s=null}s=s||{start:0,end:0}}else s=null;for(gm={focusedElem:r,selectionRange:s},Pf=!1,Ht=i;Ht!==null;)if(i=Ht,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,Ht=r;else for(;Ht!==null;){switch(i=Ht,d=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&d!==null){r=void 0,s=i,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ae=vs(s.type,h,s.elementType===s.type);r=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=r}catch(Te){rt(s,s.return,Te)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,s=r.nodeType,s===9)_m(r);else if(s===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":_m(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(a(163))}if(r=i.sibling,r!==null){r.return=i.return,Ht=r;break}Ht=i.return}}function T2(r,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:aa(r,s),l&4&&au(5,s);break;case 1:if(aa(r,s),l&4)if(r=s.stateNode,i===null)try{r.componentDidMount()}catch(b){rt(s,s.return,b)}else{var h=vs(s.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(h,i,r.__reactInternalSnapshotBeforeUpdate)}catch(b){rt(s,s.return,b)}}l&64&&g2(s),l&512&&su(s,s.return);break;case 3:if(aa(r,s),l&64&&(r=s.updateQueue,r!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ry(r,i)}catch(b){rt(s,s.return,b)}}break;case 27:i===null&&l&4&&b2(s);case 26:case 5:aa(r,s),i===null&&l&4&&v2(s),l&512&&su(s,s.return);break;case 12:aa(r,s);break;case 13:aa(r,s),l&4&&A2(r,s),l&64&&(r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(s=FS.bind(null,s),sw(r,s))));break;case 22:if(l=s.memoizedState!==null||di,!l){i=i!==null&&i.memoizedState!==null||xt,h=di;var d=xt;di=l,(xt=i)&&!d?sa(r,s,(s.subtreeFlags&8772)!==0):aa(r,s),di=h,xt=d}break;case 30:break;default:aa(r,s)}}function S2(r){var i=r.alternate;i!==null&&(r.alternate=null,S2(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&Ys(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ht=null,bn=!1;function pi(r,i,s){for(s=s.child;s!==null;)w2(r,i,s),s=s.sibling}function w2(r,i,s){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Pi,s)}catch{}switch(s.tag){case 26:xt||Cr(s,i),pi(r,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xt||Cr(s,i);var l=ht,h=bn;ha(s.type)&&(ht=s.stateNode,bn=!1),pi(r,i,s),mu(s.stateNode),ht=l,bn=h;break;case 5:xt||Cr(s,i);case 6:if(l=ht,h=bn,ht=null,pi(r,i,s),ht=l,bn=h,ht!==null)if(bn)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(s.stateNode)}catch(d){rt(s,i,d)}else try{ht.removeChild(s.stateNode)}catch(d){rt(s,i,d)}break;case 18:ht!==null&&(bn?(r=ht,hv(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,s.stateNode),Su(r)):hv(ht,s.stateNode));break;case 4:l=ht,h=bn,ht=s.stateNode.containerInfo,bn=!0,pi(r,i,s),ht=l,bn=h;break;case 0:case 11:case 14:case 15:xt||ia(2,s,i),xt||ia(4,s,i),pi(r,i,s);break;case 1:xt||(Cr(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&y2(s,i,l)),pi(r,i,s);break;case 21:pi(r,i,s);break;case 22:xt=(l=xt)||s.memoizedState!==null,pi(r,i,s),xt=l;break;default:pi(r,i,s)}}function A2(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Su(r)}catch(s){rt(i,i.return,s)}}function kS(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new E2),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new E2),i;default:throw Error(a(435,r.tag))}}function Gp(r,i){var s=kS(r);i.forEach(function(l){var h=HS.bind(null,r,l);s.has(l)||(s.add(l),l.then(h,h))})}function In(r,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=r,b=i,S=b;e:for(;S!==null;){switch(S.tag){case 27:if(ha(S.type)){ht=S.stateNode,bn=!1;break e}break;case 5:ht=S.stateNode,bn=!1;break e;case 3:case 4:ht=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(ht===null)throw Error(a(160));w2(d,b,h),ht=null,bn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)x2(i,r),i=i.sibling}var lr=null;function x2(r,i){var s=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:In(i,r),Nn(r),l&4&&(ia(3,r,r.return),au(3,r),ia(5,r,r.return));break;case 1:In(i,r),Nn(r),l&512&&(xt||s===null||Cr(s,s.return)),l&64&&di&&(r=r.updateQueue,r!==null&&(l=r.callbacks,l!==null&&(s=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=lr;if(In(i,r),Nn(r),l&512&&(xt||s===null||Cr(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=r.memoizedState,s===null)if(l===null)if(r.stateNode===null){e:{l=r.type,s=r.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Bi]||d[Tt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Zt(d,l,s),d[Tt]=r,St(d),l=d;break e;case"link":var b=bv("link","href",h).get(l+(s.href||""));if(b){for(var S=0;S<b.length;S++)if(d=b[S],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(S,1);break t}}d=h.createElement(l),Zt(d,l,s),h.head.appendChild(d);break;case"meta":if(b=bv("meta","content",h).get(l+(s.content||""))){for(S=0;S<b.length;S++)if(d=b[S],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(S,1);break t}}d=h.createElement(l),Zt(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[Tt]=r,St(d),l=d}r.stateNode=l}else Ev(h,r.type,r.stateNode);else r.stateNode=_v(h,l,r.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Ev(h,r.type,r.stateNode):_v(h,l,r.memoizedProps)):l===null&&r.stateNode!==null&&Fp(r,r.memoizedProps,s.memoizedProps)}break;case 27:In(i,r),Nn(r),l&512&&(xt||s===null||Cr(s,s.return)),s!==null&&l&4&&Fp(r,r.memoizedProps,s.memoizedProps);break;case 5:if(In(i,r),Nn(r),l&512&&(xt||s===null||Cr(s,s.return)),r.flags&32){h=r.stateNode;try{Un(h,"")}catch(G){rt(r,r.return,G)}}l&4&&r.stateNode!=null&&(h=r.memoizedProps,Fp(r,h,s!==null?s.memoizedProps:h)),l&1024&&(qp=!0);break;case 6:if(In(i,r),Nn(r),l&4){if(r.stateNode===null)throw Error(a(162));l=r.memoizedProps,s=r.stateNode;try{s.nodeValue=l}catch(G){rt(r,r.return,G)}}break;case 3:if(Of=null,h=lr,lr=Nf(i.containerInfo),In(i,r),lr=h,Nn(r),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Su(i.containerInfo)}catch(G){rt(r,r.return,G)}qp&&(qp=!1,R2(r));break;case 4:l=lr,lr=Nf(r.stateNode.containerInfo),In(i,r),Nn(r),lr=l;break;case 12:In(i,r),Nn(r);break;case 13:In(i,r),Nn(r),r.child.flags&8192&&r.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zp=vn()),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,Gp(r,l)));break;case 22:h=r.memoizedState!==null;var N=s!==null&&s.memoizedState!==null,H=di,J=xt;if(di=H||h,xt=J||N,In(i,r),xt=J,di=H,Nn(r),l&8192)e:for(i=r.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||N||di||xt||_s(r)),s=null,i=r;;){if(i.tag===5||i.tag===26){if(s===null){N=s=i;try{if(d=N.stateNode,h)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=N.stateNode;var ne=N.memoizedProps.style,q=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;S.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(G){rt(N,N.return,G)}}}else if(i.tag===6){if(s===null){N=i;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(G){rt(N,N.return,G)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=r.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Gp(r,s))));break;case 19:In(i,r),Nn(r),l&4&&(l=r.updateQueue,l!==null&&(r.updateQueue=null,Gp(r,l)));break;case 30:break;case 21:break;default:In(i,r),Nn(r)}}function Nn(r){var i=r.flags;if(i&2){try{for(var s,l=r.return;l!==null;){if(_2(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=Hp(r);yf(r,d,h);break;case 5:var b=s.stateNode;s.flags&32&&(Un(b,""),s.flags&=-33);var S=Hp(r);yf(r,S,b);break;case 3:case 4:var N=s.stateNode.containerInfo,H=Hp(r);$p(r,H,N);break;default:throw Error(a(161))}}catch(J){rt(r,r.return,J)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function R2(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;R2(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function aa(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)T2(r,i.alternate,i),i=i.sibling}function _s(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:ia(4,i,i.return),_s(i);break;case 1:Cr(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&y2(i,i.return,s),_s(i);break;case 27:mu(i.stateNode);case 26:case 5:Cr(i,i.return),_s(i);break;case 22:i.memoizedState===null&&_s(i);break;case 30:_s(i);break;default:_s(i)}r=r.sibling}}function sa(r,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=r,d=i,b=d.flags;switch(d.tag){case 0:case 11:case 15:sa(h,d,s),au(4,d);break;case 1:if(sa(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(H){rt(l,l.return,H)}if(l=d,h=l.updateQueue,h!==null){var S=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)ny(N[h],S)}catch(H){rt(l,l.return,H)}}s&&b&64&&g2(d),su(d,d.return);break;case 27:b2(d);case 26:case 5:sa(h,d,s),s&&l===null&&b&4&&v2(d),su(d,d.return);break;case 12:sa(h,d,s);break;case 13:sa(h,d,s),s&&b&4&&A2(h,d);break;case 22:d.memoizedState===null&&sa(h,d,s),su(d,d.return);break;case 30:break;default:sa(h,d,s)}i=i.sibling}}function Yp(r,i){var s=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(r!=null&&r.refCount++,s!=null&&ql(s))}function Kp(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&ql(r))}function Ir(r,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)C2(r,i,s,l),i=i.sibling}function C2(r,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ir(r,i,s,l),h&2048&&au(9,i);break;case 1:Ir(r,i,s,l);break;case 3:Ir(r,i,s,l),h&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&ql(r)));break;case 12:if(h&2048){Ir(r,i,s,l),r=i.stateNode;try{var d=i.memoizedProps,b=d.id,S=d.onPostCommit;typeof S=="function"&&S(b,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(N){rt(i,i.return,N)}}else Ir(r,i,s,l);break;case 13:Ir(r,i,s,l);break;case 23:break;case 22:d=i.stateNode,b=i.alternate,i.memoizedState!==null?d._visibility&2?Ir(r,i,s,l):ou(r,i):d._visibility&2?Ir(r,i,s,l):(d._visibility|=2,Eo(r,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&Yp(b,i);break;case 24:Ir(r,i,s,l),h&2048&&Kp(i.alternate,i);break;default:Ir(r,i,s,l)}}function Eo(r,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=r,b=i,S=s,N=l,H=b.flags;switch(b.tag){case 0:case 11:case 15:Eo(d,b,S,N,h),au(8,b);break;case 23:break;case 22:var J=b.stateNode;b.memoizedState!==null?J._visibility&2?Eo(d,b,S,N,h):ou(d,b):(J._visibility|=2,Eo(d,b,S,N,h)),h&&H&2048&&Yp(b.alternate,b);break;case 24:Eo(d,b,S,N,h),h&&H&2048&&Kp(b.alternate,b);break;default:Eo(d,b,S,N,h)}i=i.sibling}}function ou(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=r,l=i,h=l.flags;switch(l.tag){case 22:ou(s,l),h&2048&&Yp(l.alternate,l);break;case 24:ou(s,l),h&2048&&Kp(l.alternate,l);break;default:ou(s,l)}i=i.sibling}}var lu=8192;function To(r){if(r.subtreeFlags&lu)for(r=r.child;r!==null;)I2(r),r=r.sibling}function I2(r){switch(r.tag){case 26:To(r),r.flags&lu&&r.memoizedState!==null&&_w(lr,r.memoizedState,r.memoizedProps);break;case 5:To(r);break;case 3:case 4:var i=lr;lr=Nf(r.stateNode.containerInfo),To(r),lr=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=lu,lu=16777216,To(r),lu=i):To(r));break;default:To(r)}}function N2(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function uu(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ht=l,O2(l,r)}N2(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)D2(r),r=r.sibling}function D2(r){switch(r.tag){case 0:case 11:case 15:uu(r),r.flags&2048&&ia(9,r,r.return);break;case 3:uu(r);break;case 12:uu(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,vf(r)):uu(r);break;default:uu(r)}}function vf(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ht=l,O2(l,r)}N2(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:ia(8,i,i.return),vf(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,vf(i));break;default:vf(i)}r=r.sibling}}function O2(r,i){for(;Ht!==null;){var s=Ht;switch(s.tag){case 0:case 11:case 15:ia(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ql(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ht=l;else e:for(s=r;Ht!==null;){l=Ht;var h=l.sibling,d=l.return;if(S2(l),l===s){Ht=null;break e}if(h!==null){h.return=d,Ht=h;break e}Ht=d}}}var PS={getCacheForType:function(r){var i=sn(Lt),s=i.data.get(r);return s===void 0&&(s=r(),i.data.set(r,s)),s}},LS=typeof WeakMap=="function"?WeakMap:Map,We=0,st=null,Le=null,$e=0,Ze=0,Dn=null,oa=!1,So=!1,Qp=!1,mi=0,bt=0,la=0,bs=0,Xp=0,Yn=0,wo=0,cu=null,En=null,Wp=!1,Zp=0,_f=1/0,bf=null,ua=null,Wt=0,ca=null,Ao=null,xo=0,Jp=0,em=null,M2=null,fu=0,tm=null;function On(){if((We&2)!==0&&$e!==0)return $e&-$e;if(Z.T!==null){var r=ho;return r!==0?r:lm()}return Wr()}function k2(){Yn===0&&(Yn=($e&536870912)===0||Ye?El():536870912);var r=Gn.current;return r!==null&&(r.flags|=32),Yn}function Mn(r,i,s){(r===st&&(Ze===2||Ze===9)||r.cancelPendingCommit!==null)&&(Ro(r,0),fa(r,$e,Yn,!1)),Et(r,s),((We&2)===0||r!==st)&&(r===st&&((We&2)===0&&(bs|=s),bt===4&&fa(r,$e,Yn,!1)),Nr(r))}function P2(r,i,s){if((We&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&r.expiredLanes)===0||Vi(r,i),h=l?zS(r,i):im(r,i,!0),d=l;do{if(h===0){So&&!l&&fa(r,i,0,!1);break}else{if(s=r.current.alternate,d&&!VS(s)){h=im(r,i,!1),d=!1;continue}if(h===2){if(d=i,r.errorRecoveryDisabledLanes&d)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var S=r;h=cu;var N=S.current.memoizedState.isDehydrated;if(N&&(Ro(S,b).flags|=256),b=im(S,b,!1),b!==2){if(Qp&&!N){S.errorRecoveryDisabledLanes|=d,bs|=d,h=4;break e}d=En,En=h,d!==null&&(En===null?En=d:En.push.apply(En,d))}h=b}if(d=!1,h!==2)continue}}if(h===1){Ro(r,0),fa(r,i,0,!0);break}e:{switch(l=r,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:fa(l,i,Yn,!oa);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Zp+300-vn(),10<h)){if(fa(l,i,Yn,!oa),jn(l,0,!0)!==0)break e;l.timeoutHandle=cv(L2.bind(null,l,s,En,bf,Wp,i,Yn,bs,wo,oa,d,2,-0,0),h);break e}L2(l,s,En,bf,Wp,i,Yn,bs,wo,oa,d,0,-0,0)}}break}while(!0);Nr(r)}function L2(r,i,s,l,h,d,b,S,N,H,J,ne,q,G){if(r.timeoutHandle=-1,ne=i.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(vu={stylesheets:null,count:0,unsuspend:vw},I2(i),ne=bw(),ne!==null)){r.cancelPendingCommit=ne(H2.bind(null,r,i,d,s,l,h,b,S,N,J,1,q,G)),fa(r,d,b,!H);return}H2(r,i,d,s,l,h,b,S,N)}function VS(r){for(var i=r;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!Rn(d(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fa(r,i,s,l){i&=~Xp,i&=~bs,r.suspendedLanes|=i,r.pingedLanes&=~i,l&&(r.warmLanes|=i),l=r.expirationTimes;for(var h=i;0<h;){var d=31-dn(h),b=1<<d;l[d]=-1,h&=~b}s!==0&&zi(r,s,i)}function Ef(){return(We&6)===0?(hu(0),!1):!0}function nm(){if(Le!==null){if(Ze===0)var r=Le.return;else r=Le,oi=ps=null,_p(r),_o=null,nu=0,r=Le;for(;r!==null;)m2(r.alternate,r),r=r.return;Le=null}}function Ro(r,i){var s=r.timeoutHandle;s!==-1&&(r.timeoutHandle=-1,tw(s)),s=r.cancelPendingCommit,s!==null&&(r.cancelPendingCommit=null,s()),nm(),st=r,Le=s=ii(r.current,null),$e=i,Ze=0,Dn=null,oa=!1,So=Vi(r,i),Qp=!1,wo=Yn=Xp=bs=la=bt=0,En=cu=null,Wp=!1,(i&8)!==0&&(i|=i&32);var l=r.entangledLanes;if(l!==0)for(r=r.entanglements,l&=i;0<l;){var h=31-dn(l),d=1<<h;i|=r[h],l&=~d}return mi=i,Fc(),s}function V2(r,i){ke=null,Z.H=lf,i===Yl||i===Wc?(i=ey(),Ze=3):i===W0?(i=ey(),Ze=4):Ze=i===t2?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Dn=i,Le===null&&(bt=1,df(r,Fn(i,r.current)))}function j2(){var r=Z.H;return Z.H=lf,r===null?lf:r}function z2(){var r=Z.A;return Z.A=PS,r}function rm(){bt=4,oa||($e&4194048)!==$e&&Gn.current!==null||(So=!0),(la&134217727)===0&&(bs&134217727)===0||st===null||fa(st,$e,Yn,!1)}function im(r,i,s){var l=We;We|=2;var h=j2(),d=z2();(st!==r||$e!==i)&&(bf=null,Ro(r,i)),i=!1;var b=bt;e:do try{if(Ze!==0&&Le!==null){var S=Le,N=Dn;switch(Ze){case 8:nm(),b=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(i=!0);var H=Ze;if(Ze=0,Dn=null,Co(r,S,N,H),s&&So){b=0;break e}break;default:H=Ze,Ze=0,Dn=null,Co(r,S,N,H)}}jS(),b=bt;break}catch(J){V2(r,J)}while(!0);return i&&r.shellSuspendCounter++,oi=ps=null,We=l,Z.H=h,Z.A=d,Le===null&&(st=null,$e=0,Fc()),b}function jS(){for(;Le!==null;)U2(Le)}function zS(r,i){var s=We;We|=2;var l=j2(),h=z2();st!==r||$e!==i?(bf=null,_f=vn()+500,Ro(r,i)):So=Vi(r,i);e:do try{if(Ze!==0&&Le!==null){i=Le;var d=Dn;t:switch(Ze){case 1:Ze=0,Dn=null,Co(r,i,d,1);break;case 2:case 9:if(Z0(d)){Ze=0,Dn=null,B2(i);break}i=function(){Ze!==2&&Ze!==9||st!==r||(Ze=7),Nr(r)},d.then(i,i);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:Z0(d)?(Ze=0,Dn=null,B2(i)):(Ze=0,Dn=null,Co(r,i,d,7));break;case 5:var b=null;switch(Le.tag){case 26:b=Le.memoizedState;case 5:case 27:var S=Le;if(!b||Tv(b)){Ze=0,Dn=null;var N=S.sibling;if(N!==null)Le=N;else{var H=S.return;H!==null?(Le=H,Tf(H)):Le=null}break t}}Ze=0,Dn=null,Co(r,i,d,5);break;case 6:Ze=0,Dn=null,Co(r,i,d,6);break;case 8:nm(),bt=6;break e;default:throw Error(a(462))}}US();break}catch(J){V2(r,J)}while(!0);return oi=ps=null,Z.H=l,Z.A=h,We=s,Le!==null?0:(st=null,$e=0,Fc(),bt)}function US(){for(;Le!==null&&!Od();)U2(Le)}function U2(r){var i=d2(r.alternate,r,mi);r.memoizedProps=r.pendingProps,i===null?Tf(r):Le=i}function B2(r){var i=r,s=i.alternate;switch(i.tag){case 15:case 0:i=o2(s,i,i.pendingProps,i.type,void 0,$e);break;case 11:i=o2(s,i,i.pendingProps,i.type.render,i.ref,$e);break;case 5:_p(i);default:m2(s,i),i=Le=F0(i,mi),i=d2(s,i,mi)}r.memoizedProps=r.pendingProps,i===null?Tf(r):Le=i}function Co(r,i,s,l){oi=ps=null,_p(i),_o=null,nu=0;var h=i.return;try{if(IS(r,h,i,s,$e)){bt=1,df(r,Fn(s,r.current)),Le=null;return}}catch(d){if(h!==null)throw Le=h,d;bt=1,df(r,Fn(s,r.current)),Le=null;return}i.flags&32768?(Ye||l===1?r=!0:So||($e&536870912)!==0?r=!1:(oa=r=!0,(l===2||l===9||l===3||l===6)&&(l=Gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),F2(i,r)):Tf(i)}function Tf(r){var i=r;do{if((i.flags&32768)!==0){F2(i,oa);return}r=i.return;var s=DS(i.alternate,i,mi);if(s!==null){Le=s;return}if(i=i.sibling,i!==null){Le=i;return}Le=i=r}while(i!==null);bt===0&&(bt=5)}function F2(r,i){do{var s=OS(r.alternate,r);if(s!==null){s.flags&=32767,Le=s;return}if(s=r.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(r=r.sibling,r!==null)){Le=r;return}Le=r=s}while(r!==null);bt=6,Le=null}function H2(r,i,s,l,h,d,b,S,N){r.cancelPendingCommit=null;do Sf();while(Wt!==0);if((We&6)!==0)throw Error(a(327));if(i!==null){if(i===r.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Kd,Ac(r,s,d,b,S,N),r===st&&(Le=st=null,$e=0),Ao=i,ca=r,xo=s,Jp=d,em=h,M2=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,$S(Xr,function(){return K2(),null})):(r.callbackNode=null,r.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,h=ce.p,ce.p=2,b=We,We|=4;try{MS(r,i,s)}finally{We=b,ce.p=h,Z.T=l}}Wt=1,$2(),q2(),G2()}}function $2(){if(Wt===1){Wt=0;var r=ca,i=Ao,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=Z.T,Z.T=null;var l=ce.p;ce.p=2;var h=We;We|=4;try{x2(i,r);var d=gm,b=O0(r.containerInfo),S=d.focusedElem,N=d.selectionRange;if(b!==S&&S&&S.ownerDocument&&D0(S.ownerDocument.documentElement,S)){if(N!==null&&Hd(S)){var H=N.start,J=N.end;if(J===void 0&&(J=H),"selectionStart"in S)S.selectionStart=H,S.selectionEnd=Math.min(J,S.value.length);else{var ne=S.ownerDocument||document,q=ne&&ne.defaultView||window;if(q.getSelection){var G=q.getSelection(),Ae=S.textContent.length,Te=Math.min(N.start,Ae),nt=N.end===void 0?Te:Math.min(N.end,Ae);!G.extend&&Te>nt&&(b=nt,nt=Te,Te=b);var L=N0(S,Te),k=N0(S,nt);if(L&&k&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var B=ne.createRange();B.setStart(L.node,L.offset),G.removeAllRanges(),Te>nt?(G.addRange(B),G.extend(k.node,k.offset)):(B.setEnd(k.node,k.offset),G.addRange(B))}}}}for(ne=[],G=S;G=G.parentNode;)G.nodeType===1&&ne.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ne.length;S++){var ee=ne[S];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Pf=!!mm,gm=mm=null}finally{We=h,ce.p=l,Z.T=s}}r.current=i,Wt=2}}function q2(){if(Wt===2){Wt=0;var r=ca,i=Ao,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=Z.T,Z.T=null;var l=ce.p;ce.p=2;var h=We;We|=4;try{T2(r,i.alternate,i)}finally{We=h,ce.p=l,Z.T=s}}Wt=3}}function G2(){if(Wt===4||Wt===3){Wt=0,_l();var r=ca,i=Ao,s=xo,l=M2;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Wt=5:(Wt=0,Ao=ca=null,Y2(r,r.pendingLanes));var h=r.pendingLanes;if(h===0&&(ua=null),Sl(s),i=i.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Pi,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Z.T,h=ce.p,ce.p=2,Z.T=null;try{for(var d=r.onRecoverableError,b=0;b<l.length;b++){var S=l[b];d(S.value,{componentStack:S.stack})}}finally{Z.T=i,ce.p=h}}(xo&3)!==0&&Sf(),Nr(r),h=r.pendingLanes,(s&4194090)!==0&&(h&42)!==0?r===tm?fu++:(fu=0,tm=r):fu=0,hu(0)}}function Y2(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,ql(i)))}function Sf(r){return $2(),q2(),G2(),K2()}function K2(){if(Wt!==5)return!1;var r=ca,i=Jp;Jp=0;var s=Sl(xo),l=Z.T,h=ce.p;try{ce.p=32>s?32:s,Z.T=null,s=em,em=null;var d=ca,b=xo;if(Wt=0,Ao=ca=null,xo=0,(We&6)!==0)throw Error(a(331));var S=We;if(We|=4,D2(d.current),C2(d,d.current,b,s),We=S,hu(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Pi,d)}catch{}return!0}finally{ce.p=h,Z.T=l,Y2(r,i)}}function Q2(r,i,s){i=Fn(s,i),i=Mp(r.stateNode,i,2),r=ea(r,i,2),r!==null&&(Et(r,2),Nr(r))}function rt(r,i,s){if(r.tag===3)Q2(r,r,s);else for(;i!==null;){if(i.tag===3){Q2(i,r,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ua===null||!ua.has(l))){r=Fn(s,r),s=Jy(2),l=ea(i,s,2),l!==null&&(e2(s,l,i,r),Et(l,2),Nr(l));break}}i=i.return}}function am(r,i,s){var l=r.pingCache;if(l===null){l=r.pingCache=new LS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(Qp=!0,h.add(s),r=BS.bind(null,r,i,s),i.then(r,r))}function BS(r,i,s){var l=r.pingCache;l!==null&&l.delete(i),r.pingedLanes|=r.suspendedLanes&s,r.warmLanes&=~s,st===r&&($e&s)===s&&(bt===4||bt===3&&($e&62914560)===$e&&300>vn()-Zp?(We&2)===0&&Ro(r,0):Xp|=s,wo===$e&&(wo=0)),Nr(r)}function X2(r,i){i===0&&(i=ji()),r=lo(r,i),r!==null&&(Et(r,i),Nr(r))}function FS(r){var i=r.memoizedState,s=0;i!==null&&(s=i.retryLane),X2(r,s)}function HS(r,i){var s=0;switch(r.tag){case 13:var l=r.stateNode,h=r.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),X2(r,s)}function $S(r,i){return za(r,i)}var wf=null,Io=null,sm=!1,Af=!1,om=!1,Es=0;function Nr(r){r!==Io&&r.next===null&&(Io===null?wf=Io=r:Io=Io.next=r),Af=!0,sm||(sm=!0,GS())}function hu(r,i){if(!om&&Af){om=!0;do for(var s=!1,l=wf;l!==null;){if(r!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var b=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-dn(42|r)+1)-1,d&=h&~(b&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,ev(l,d))}else d=$e,d=jn(l,l===st?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Vi(l,d)||(s=!0,ev(l,d));l=l.next}while(s);om=!1}}function qS(){W2()}function W2(){Af=sm=!1;var r=0;Es!==0&&(ew()&&(r=Es),Es=0);for(var i=vn(),s=null,l=wf;l!==null;){var h=l.next,d=Z2(l,i);d===0?(l.next=null,s===null?wf=h:s.next=h,h===null&&(Io=s)):(s=l,(r!==0||(d&3)!==0)&&(Af=!0)),l=h}hu(r)}function Z2(r,i){for(var s=r.suspendedLanes,l=r.pingedLanes,h=r.expirationTimes,d=r.pendingLanes&-62914561;0<d;){var b=31-dn(d),S=1<<b,N=h[b];N===-1?((S&s)===0||(S&l)!==0)&&(h[b]=qs(S,i)):N<=i&&(r.expiredLanes|=S),d&=~S}if(i=st,s=$e,s=jn(r,r===i?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l=r.callbackNode,s===0||r===i&&(Ze===2||Ze===9)||r.cancelPendingCommit!==null)return l!==null&&l!==null&&$s(l),r.callbackNode=null,r.callbackPriority=0;if((s&3)===0||Vi(r,s)){if(i=s&-s,i===r.callbackPriority)return i;switch(l!==null&&$s(l),Sl(s)){case 2:case 8:s=Ut;break;case 32:s=Xr;break;case 268435456:s=bl;break;default:s=Xr}return l=J2.bind(null,r),s=za(s,l),r.callbackPriority=i,r.callbackNode=s,i}return l!==null&&l!==null&&$s(l),r.callbackPriority=2,r.callbackNode=null,2}function J2(r,i){if(Wt!==0&&Wt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var s=r.callbackNode;if(Sf()&&r.callbackNode!==s)return null;var l=$e;return l=jn(r,r===st?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),l===0?null:(P2(r,l,i),Z2(r,vn()),r.callbackNode!=null&&r.callbackNode===s?J2.bind(null,r):null)}function ev(r,i){if(Sf())return null;P2(r,i,!0)}function GS(){nw(function(){(We&6)!==0?za(kt,qS):W2()})}function lm(){return Es===0&&(Es=El()),Es}function tv(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:rr(""+r)}function nv(r,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,r.id&&s.setAttribute("form",r.id),i.parentNode.insertBefore(s,i),r=new FormData(r),s.parentNode.removeChild(s),r}function YS(r,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var d=tv((h[Qt]||null).action),b=l.submitter;b&&(i=(i=b[Qt]||null)?tv(i.formAction):b.getAttribute("formAction"),i!==null&&(d=i,b=null));var S=new es("action","action",null,l,h);r.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Es!==0){var N=b?nv(h,b):new FormData(h);Cp(s,{pending:!0,data:N,method:h.method,action:d},null,N)}}else typeof d=="function"&&(S.preventDefault(),N=b?nv(h,b):new FormData(h),Cp(s,{pending:!0,data:N,method:h.method,action:d},d,N))},currentTarget:h}]})}}for(var um=0;um<Yd.length;um++){var cm=Yd[um],KS=cm.toLowerCase(),QS=cm[0].toUpperCase()+cm.slice(1);or(KS,"on"+QS)}or(P0,"onAnimationEnd"),or(L0,"onAnimationIteration"),or(V0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(hS,"onTransitionRun"),or(dS,"onTransitionStart"),or(pS,"onTransitionCancel"),or(j0,"onTransitionEnd"),Tr("onMouseEnter",["mouseout","mouseover"]),Tr("onMouseLeave",["mouseout","mouseover"]),Tr("onPointerEnter",["pointerout","pointerover"]),Tr("onPointerLeave",["pointerout","pointerover"]),Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Er("onBeforeInput",["compositionend","keypress","textInput","paste"]),Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function rv(r,i){i=(i&4)!==0;for(var s=0;s<r.length;s++){var l=r[s],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var b=l.length-1;0<=b;b--){var S=l[b],N=S.instance,H=S.currentTarget;if(S=S.listener,N!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=H;try{d(h)}catch(J){hf(J)}h.currentTarget=null,d=N}else for(b=0;b<l.length;b++){if(S=l[b],N=S.instance,H=S.currentTarget,S=S.listener,N!==d&&h.isPropagationStopped())break e;d=S,h.currentTarget=H;try{d(h)}catch(J){hf(J)}h.currentTarget=null,d=N}}}}function Ve(r,i){var s=i[Ba];s===void 0&&(s=i[Ba]=new Set);var l=r+"__bubble";s.has(l)||(iv(i,r,2,!1),s.add(l))}function fm(r,i,s){var l=0;i&&(l|=4),iv(s,r,l,i)}var xf="_reactListening"+Math.random().toString(36).slice(2);function hm(r){if(!r[xf]){r[xf]=!0,xc.forEach(function(s){s!=="selectionchange"&&(XS.has(s)||fm(s,!1,r),fm(s,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[xf]||(i[xf]=!0,fm("selectionchange",!1,i))}}function iv(r,i,s,l){switch(Cv(i)){case 2:var h=Sw;break;case 8:h=ww;break;default:h=xm}s=h.bind(null,i,s,r),h=void 0,!ni||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?r.addEventListener(i,s,{capture:!0,passive:h}):r.addEventListener(i,s,!0):h!==void 0?r.addEventListener(i,s,{passive:h}):r.addEventListener(i,s,!1)}function dm(r,i,s,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var S=l.stateNode.containerInfo;if(S===h)break;if(b===4)for(b=l.return;b!==null;){var N=b.tag;if((N===3||N===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;S!==null;){if(b=_r(S),b===null)return;if(N=b.tag,N===5||N===6||N===26||N===27){l=d=b;continue e}S=S.parentNode}}l=l.return}Wa(function(){var H=d,J=Nl(s),ne=[];e:{var q=z0.get(r);if(q!==void 0){var G=es,Ae=r;switch(r){case"keypress":if(Za(s)===0)break e;case"keydown":case"keyup":G=io;break;case"focusin":Ae="focus",G=to;break;case"focusout":Ae="blur",G=to;break;case"beforeblur":case"afterblur":G=to;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Xi;break;case P0:case L0:case V0:G=Ol;break;case j0:G=y;break;case"scroll":case"scrollend":G=ns;break;case"wheel":G=w;break;case"copy":case"cut":case"paste":G=Pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Pl;break;case"toggle":case"beforetoggle":G=K}var Te=(i&4)!==0,nt=!Te&&(r==="scroll"||r==="scrollend"),L=Te?q!==null?q+"Capture":null:q;Te=[];for(var k=H,B;k!==null;){var ee=k;if(B=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||B===null||L===null||(ee=Ki(k,L),ee!=null&&Te.push(pu(k,ee,B))),nt)break;k=k.return}0<Te.length&&(q=new G(q,Ae,null,s,J),ne.push({event:q,listeners:Te}))}}if((i&7)===0){e:{if(q=r==="mouseover"||r==="pointerover",G=r==="mouseout"||r==="pointerout",q&&s!==Il&&(Ae=s.relatedTarget||s.fromElement)&&(_r(Ae)||Ae[Zr]))break e;if((G||q)&&(q=J.window===J?J:(q=J.ownerDocument)?q.defaultView||q.parentWindow:window,G?(Ae=s.relatedTarget||s.toElement,G=H,Ae=Ae?_r(Ae):null,Ae!==null&&(nt=u(Ae),Te=Ae.tag,Ae!==nt||Te!==5&&Te!==27&&Te!==6)&&(Ae=null)):(G=null,Ae=H),G!==Ae)){if(Te=as,ee="onMouseLeave",L="onMouseEnter",k="mouse",(r==="pointerout"||r==="pointerover")&&(Te=Pl,ee="onPointerLeave",L="onPointerEnter",k="pointer"),nt=G==null?q:Fi(G),B=Ae==null?q:Fi(Ae),q=new Te(ee,k+"leave",G,s,J),q.target=nt,q.relatedTarget=B,ee=null,_r(J)===H&&(Te=new Te(L,k+"enter",Ae,s,J),Te.target=B,Te.relatedTarget=nt,ee=Te),nt=ee,G&&Ae)t:{for(Te=G,L=Ae,k=0,B=Te;B;B=No(B))k++;for(B=0,ee=L;ee;ee=No(ee))B++;for(;0<k-B;)Te=No(Te),k--;for(;0<B-k;)L=No(L),B--;for(;k--;){if(Te===L||L!==null&&Te===L.alternate)break t;Te=No(Te),L=No(L)}Te=null}else Te=null;G!==null&&av(ne,q,G,Te,!1),Ae!==null&&nt!==null&&av(ne,nt,Ae,Te,!0)}}e:{if(q=H?Fi(H):window,G=q.nodeName&&q.nodeName.toLowerCase(),G==="select"||G==="input"&&q.type==="file")var pe=w0;else if(T0(q))if(A0)pe=uS;else{pe=oS;var Pe=sS}else G=q.nodeName,!G||G.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?H&&Zs(H.elementType)&&(pe=w0):pe=lS;if(pe&&(pe=pe(r,H))){S0(ne,pe,s,J);break e}Pe&&Pe(r,q,H),r==="focusout"&&H&&q.type==="number"&&H.memoizedProps.value!=null&&xl(q,"number",q.value)}switch(Pe=H?Fi(H):window,r){case"focusin":(T0(Pe)||Pe.contentEditable==="true")&&(ao=Pe,$d=H,Ul=null);break;case"focusout":Ul=$d=ao=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,M0(ne,s,J);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":M0(ne,s,J)}var ye;if(Ce)e:{switch(r){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else sr?ir(r,s)&&(Se="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(Se="onCompositionStart");Se&&(wt&&s.locale!=="ko"&&(sr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&sr&&(ye=Oc()):(Bn=J,at="value"in Bn?Bn.value:Bn.textContent,sr=!0)),Pe=Rf(H,Se),0<Pe.length&&(Se=new kl(Se,r,null,s,J),ne.push({event:Se,listeners:Pe}),ye?Se.data=ye:(ye=ar(s),ye!==null&&(Se.data=ye)))),(ye=Xe?Ll(r,s):rS(r,s))&&(Se=Rf(H,"onBeforeInput"),0<Se.length&&(Pe=new kl("onBeforeInput","beforeinput",null,s,J),ne.push({event:Pe,listeners:Se}),Pe.data=ye)),YS(ne,r,H,s,J)}rv(ne,i)})}function pu(r,i,s){return{instance:r,listener:i,currentTarget:s}}function Rf(r,i){for(var s=i+"Capture",l=[];r!==null;){var h=r,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ki(r,s),h!=null&&l.unshift(pu(r,h,d)),h=Ki(r,i),h!=null&&l.push(pu(r,h,d))),r.tag===3)return l;r=r.return}return[]}function No(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function av(r,i,s,l,h){for(var d=i._reactName,b=[];s!==null&&s!==l;){var S=s,N=S.alternate,H=S.stateNode;if(S=S.tag,N!==null&&N===l)break;S!==5&&S!==26&&S!==27||H===null||(N=H,h?(H=Ki(s,d),H!=null&&b.unshift(pu(s,H,N))):h||(H=Ki(s,d),H!=null&&b.push(pu(s,H,N)))),s=s.return}b.length!==0&&r.push({event:i,listeners:b})}var WS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function sv(r){return(typeof r=="string"?r:""+r).replace(WS,`
`).replace(ZS,"")}function ov(r,i){return i=sv(i),sv(r)===i}function Cf(){}function tt(r,i,s,l,h,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Un(r,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Un(r,""+l);break;case"className":Ga(r,"class",l);break;case"tabIndex":Ga(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ga(r,s,l);break;case"style":Cl(r,l,d);break;case"data":if(i!=="object"){Ga(r,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){r.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(s);break}l=rr(""+l),r.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){r.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&tt(r,i,"name",h.name,h,null),tt(r,i,"formEncType",h.formEncType,h,null),tt(r,i,"formMethod",h.formMethod,h,null),tt(r,i,"formTarget",h.formTarget,h,null)):(tt(r,i,"encType",h.encType,h,null),tt(r,i,"method",h.method,h,null),tt(r,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){r.removeAttribute(s);break}l=rr(""+l),r.setAttribute(s,l);break;case"onClick":l!=null&&(r.onclick=Cf);break;case"onScroll":l!=null&&Ve("scroll",r);break;case"onScrollEnd":l!=null&&Ve("scrollend",r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));r.innerHTML=s}}break;case"multiple":r.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":r.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){r.removeAttribute("xlink:href");break}s=rr(""+l),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(s,""+l):r.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(s,""):r.removeAttribute(s);break;case"capture":case"download":l===!0?r.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?r.setAttribute(s,l):r.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?r.setAttribute(s,l):r.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?r.removeAttribute(s):r.setAttribute(s,l);break;case"popover":Ve("beforetoggle",r),Ve("toggle",r),qa(r,"popover",l);break;case"xlinkActuate":zn(r,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":zn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":zn(r,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":zn(r,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":zn(r,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":zn(r,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":zn(r,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":zn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":zn(r,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qa(r,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ic.get(s)||s,qa(r,s,l))}}function pm(r,i,s,l,h,d){switch(s){case"style":Cl(r,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));r.innerHTML=s}}break;case"children":typeof l=="string"?Un(r,l):(typeof l=="number"||typeof l=="bigint")&&Un(r,""+l);break;case"onScroll":l!=null&&Ve("scroll",r);break;case"onScrollEnd":l!=null&&Ve("scrollend",r);break;case"onClick":l!=null&&(r.onclick=Cf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ha.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),d=r[Qt]||null,d=d!=null?d[s]:null,typeof d=="function"&&r.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in r?r[s]=null:r.hasAttribute(s)&&r.removeAttribute(s)),r.addEventListener(i,l,h);break e}s in r?r[s]=l:l===!0?r.setAttribute(s,""):qa(r,s,l)}}}function Zt(r,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",r),Ve("load",r);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var b=s[d];if(b!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(r,i,d,b,s,null)}}h&&tt(r,i,"srcSet",s.srcSet,s,null),l&&tt(r,i,"src",s.src,s,null);return;case"input":Ve("invalid",r);var S=d=b=h=null,N=null,H=null;for(l in s)if(s.hasOwnProperty(l)){var J=s[l];if(J!=null)switch(l){case"name":h=J;break;case"type":b=J;break;case"checked":N=J;break;case"defaultChecked":H=J;break;case"value":d=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(a(137,i));break;default:tt(r,i,l,J,s,null)}}Al(r,d,S,N,H,b,h,!1),qi(r);return;case"select":Ve("invalid",r),l=b=d=null;for(h in s)if(s.hasOwnProperty(h)&&(S=s[h],S!=null))switch(h){case"value":d=S;break;case"defaultValue":b=S;break;case"multiple":l=S;default:tt(r,i,h,S,s,null)}i=d,s=b,r.multiple=!!l,i!=null?Gi(r,!!l,i,!1):s!=null&&Gi(r,!!l,s,!0);return;case"textarea":Ve("invalid",r),d=h=l=null;for(b in s)if(s.hasOwnProperty(b)&&(S=s[b],S!=null))switch(b){case"value":l=S;break;case"defaultValue":h=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(a(91));break;default:tt(r,i,b,S,s,null)}Cc(r,l,h,d),qi(r);return;case"option":for(N in s)if(s.hasOwnProperty(N)&&(l=s[N],l!=null))switch(N){case"selected":r.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(r,i,N,l,s,null)}return;case"dialog":Ve("beforetoggle",r),Ve("toggle",r),Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":Ve("load",r);break;case"video":case"audio":for(l=0;l<du.length;l++)Ve(du[l],r);break;case"image":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"embed":case"source":case"link":Ve("error",r),Ve("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(r,i,H,l,s,null)}return;default:if(Zs(i)){for(J in s)s.hasOwnProperty(J)&&(l=s[J],l!==void 0&&pm(r,i,J,l,s,void 0));return}}for(S in s)s.hasOwnProperty(S)&&(l=s[S],l!=null&&tt(r,i,S,l,s,null))}function JS(r,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,b=null,S=null,N=null,H=null,J=null;for(G in s){var ne=s[G];if(s.hasOwnProperty(G)&&ne!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=ne;default:l.hasOwnProperty(G)||tt(r,i,G,null,l,ne)}}for(var q in l){var G=l[q];if(ne=s[q],l.hasOwnProperty(q)&&(G!=null||ne!=null))switch(q){case"type":d=G;break;case"name":h=G;break;case"checked":H=G;break;case"defaultChecked":J=G;break;case"value":b=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:G!==ne&&tt(r,i,q,G,l,ne)}}wl(r,b,S,N,H,J,d,h);return;case"select":G=b=S=q=null;for(d in s)if(N=s[d],s.hasOwnProperty(d)&&N!=null)switch(d){case"value":break;case"multiple":G=N;default:l.hasOwnProperty(d)||tt(r,i,d,null,l,N)}for(h in l)if(d=l[h],N=s[h],l.hasOwnProperty(h)&&(d!=null||N!=null))switch(h){case"value":q=d;break;case"defaultValue":S=d;break;case"multiple":b=d;default:d!==N&&tt(r,i,h,d,l,N)}i=S,s=b,l=G,q!=null?Gi(r,!!s,q,!1):!!l!=!!s&&(i!=null?Gi(r,!!s,i,!0):Gi(r,!!s,s?[]:"",!1));return;case"textarea":G=q=null;for(S in s)if(h=s[S],s.hasOwnProperty(S)&&h!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:tt(r,i,S,null,l,h)}for(b in l)if(h=l[b],d=s[b],l.hasOwnProperty(b)&&(h!=null||d!=null))switch(b){case"value":q=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&tt(r,i,b,h,l,d)}Rc(r,q,G);return;case"option":for(var Ae in s)if(q=s[Ae],s.hasOwnProperty(Ae)&&q!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:tt(r,i,Ae,null,l,q)}for(N in l)if(q=l[N],G=s[N],l.hasOwnProperty(N)&&q!==G&&(q!=null||G!=null))switch(N){case"selected":r.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(r,i,N,q,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in s)q=s[Te],s.hasOwnProperty(Te)&&q!=null&&!l.hasOwnProperty(Te)&&tt(r,i,Te,null,l,q);for(H in l)if(q=l[H],G=s[H],l.hasOwnProperty(H)&&q!==G&&(q!=null||G!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:tt(r,i,H,q,l,G)}return;default:if(Zs(i)){for(var nt in s)q=s[nt],s.hasOwnProperty(nt)&&q!==void 0&&!l.hasOwnProperty(nt)&&pm(r,i,nt,void 0,l,q);for(J in l)q=l[J],G=s[J],!l.hasOwnProperty(J)||q===G||q===void 0&&G===void 0||pm(r,i,J,q,l,G);return}}for(var L in s)q=s[L],s.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&tt(r,i,L,null,l,q);for(ne in l)q=l[ne],G=s[ne],!l.hasOwnProperty(ne)||q===G||q==null&&G==null||tt(r,i,ne,q,l,G)}var mm=null,gm=null;function If(r){return r.nodeType===9?r:r.ownerDocument}function lv(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uv(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function ym(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vm=null;function ew(){var r=window.event;return r&&r.type==="popstate"?r===vm?!1:(vm=r,!0):(vm=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,tw=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,nw=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(r){return fv.resolve(null).then(r).catch(rw)}:cv;function rw(r){setTimeout(function(){throw r})}function ha(r){return r==="head"}function hv(r,i){var s=i,l=0,h=0;do{var d=s.nextSibling;if(r.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var b=r.ownerDocument;if(s&1&&mu(b.documentElement),s&2&&mu(b.body),s&4)for(s=b.head,mu(s),b=s.firstChild;b;){var S=b.nextSibling,N=b.nodeName;b[Bi]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=S}}if(h===0){r.removeChild(d),Su(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Su(i)}function _m(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":_m(s),Ys(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}r.removeChild(s)}}function iw(r,i,s,l){for(;r.nodeType===1;){var h=s;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(l){if(!r[Bi])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(d=r.getAttribute("rel"),d==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(d!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(d=r.getAttribute("src"),(d!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===d)return r}else return r;if(r=ur(r.nextSibling),r===null)break}return null}function aw(r,i,s){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!s||(r=ur(r.nextSibling),r===null))return null;return r}function bm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function sw(r,i){var s=r.ownerDocument;if(r.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function ur(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var Em=null;function dv(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return r;i--}else s==="/$"&&i++}r=r.previousSibling}return null}function pv(r,i,s){switch(i=If(s),r){case"html":if(r=i.documentElement,!r)throw Error(a(452));return r;case"head":if(r=i.head,!r)throw Error(a(453));return r;case"body":if(r=i.body,!r)throw Error(a(454));return r;default:throw Error(a(451))}}function mu(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Ys(r)}var Kn=new Map,mv=new Set;function Nf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var gi=ce.d;ce.d={f:ow,r:lw,D:uw,C:cw,L:fw,m:hw,X:pw,S:dw,M:mw};function ow(){var r=gi.f(),i=Ef();return r||i}function lw(r){var i=br(r);i!==null&&i.tag===5&&i.type==="form"?Py(i):gi.r(r)}var Do=typeof document>"u"?null:document;function gv(r,i,s){var l=Do;if(l&&typeof i=="string"&&i){var h=Bt(i);h='link[rel="'+r+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),mv.has(h)||(mv.add(h),r={rel:r,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Zt(i,"link",r),St(i),l.head.appendChild(i)))}}function uw(r){gi.D(r),gv("dns-prefetch",r,null)}function cw(r,i){gi.C(r,i),gv("preconnect",r,i)}function fw(r,i,s){gi.L(r,i,s);var l=Do;if(l&&r&&i){var h='link[rel="preload"][as="'+Bt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Bt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Bt(s.imageSizes)+'"]')):h+='[href="'+Bt(r)+'"]';var d=h;switch(i){case"style":d=Oo(r);break;case"script":d=Mo(r)}Kn.has(d)||(r=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:r,as:i},s),Kn.set(d,r),l.querySelector(h)!==null||i==="style"&&l.querySelector(gu(d))||i==="script"&&l.querySelector(yu(d))||(i=l.createElement("link"),Zt(i,"link",r),St(i),l.head.appendChild(i)))}}function hw(r,i){gi.m(r,i);var s=Do;if(s&&r){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Bt(l)+'"][href="'+Bt(r)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Mo(r)}if(!Kn.has(d)&&(r=v({rel:"modulepreload",href:r},i),Kn.set(d,r),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(yu(d)))return}l=s.createElement("link"),Zt(l,"link",r),St(l),s.head.appendChild(l)}}}function dw(r,i,s){gi.S(r,i,s);var l=Do;if(l&&r){var h=Hi(l).hoistableStyles,d=Oo(r);i=i||"default";var b=h.get(d);if(!b){var S={loading:0,preload:null};if(b=l.querySelector(gu(d)))S.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":i},s),(s=Kn.get(d))&&Tm(r,s);var N=b=l.createElement("link");St(N),Zt(N,"link",r),N._p=new Promise(function(H,J){N.onload=H,N.onerror=J}),N.addEventListener("load",function(){S.loading|=1}),N.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Df(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:S},h.set(d,b)}}}function pw(r,i){gi.X(r,i);var s=Do;if(s&&r){var l=Hi(s).hoistableScripts,h=Mo(r),d=l.get(h);d||(d=s.querySelector(yu(h)),d||(r=v({src:r,async:!0},i),(i=Kn.get(h))&&Sm(r,i),d=s.createElement("script"),St(d),Zt(d,"link",r),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function mw(r,i){gi.M(r,i);var s=Do;if(s&&r){var l=Hi(s).hoistableScripts,h=Mo(r),d=l.get(h);d||(d=s.querySelector(yu(h)),d||(r=v({src:r,async:!0,type:"module"},i),(i=Kn.get(h))&&Sm(r,i),d=s.createElement("script"),St(d),Zt(d,"link",r),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yv(r,i,s,l){var h=(h=be.current)?Nf(h):null;if(!h)throw Error(a(446));switch(r){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Oo(s.href),s=Hi(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){r=Oo(s.href);var d=Hi(h).hoistableStyles,b=d.get(r);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(r,b),(d=h.querySelector(gu(r)))&&!d._p&&(b.instance=d,b.state.loading=5),Kn.has(r)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Kn.set(r,s),d||gw(h,r,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Mo(s),s=Hi(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,r))}}function Oo(r){return'href="'+Bt(r)+'"'}function gu(r){return'link[rel="stylesheet"]['+r+"]"}function vv(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function gw(r,i,s,l){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=r.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Zt(i,"link",s),St(i),r.head.appendChild(i))}function Mo(r){return'[src="'+Bt(r)+'"]'}function yu(r){return"script[async]"+r}function _v(r,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=r.querySelector('style[data-href~="'+Bt(s.href)+'"]');if(l)return i.instance=l,St(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),St(l),Zt(l,"style",h),Df(l,s.precedence,r),i.instance=l;case"stylesheet":h=Oo(s.href);var d=r.querySelector(gu(h));if(d)return i.state.loading|=4,i.instance=d,St(d),d;l=vv(s),(h=Kn.get(h))&&Tm(l,h),d=(r.ownerDocument||r).createElement("link"),St(d);var b=d;return b._p=new Promise(function(S,N){b.onload=S,b.onerror=N}),Zt(d,"link",l),i.state.loading|=4,Df(d,s.precedence,r),i.instance=d;case"script":return d=Mo(s.src),(h=r.querySelector(yu(d)))?(i.instance=h,St(h),h):(l=s,(h=Kn.get(d))&&(l=v({},s),Sm(l,h)),r=r.ownerDocument||r,h=r.createElement("script"),St(h),Zt(h,"link",l),r.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Df(l,s.precedence,r));return i.instance}function Df(r,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,b=0;b<l.length;b++){var S=l[b];if(S.dataset.precedence===i)d=S;else if(d!==h)break}d?d.parentNode.insertBefore(r,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(r,i.firstChild))}function Tm(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function Sm(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Of=null;function bv(r,i,s){if(Of===null){var l=new Map,h=Of=new Map;h.set(s,l)}else h=Of,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(r))return l;for(l.set(r,null),s=s.getElementsByTagName(r),h=0;h<s.length;h++){var d=s[h];if(!(d[Bi]||d[Tt]||r==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(i)||"";b=r+b;var S=l.get(b);S?S.push(d):l.set(b,[d])}}return l}function Ev(r,i,s){r=r.ownerDocument||r,r.head.insertBefore(s,i==="title"?r.querySelector("head > title"):null)}function yw(r,i,s){if(s===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Tv(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var vu=null;function vw(){}function _w(r,i,s){if(vu===null)throw Error(a(475));var l=vu;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Oo(s.href),d=r.querySelector(gu(h));if(d){r=d._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(l.count++,l=Mf.bind(l),r.then(l,l)),i.state.loading|=4,i.instance=d,St(d);return}d=r.ownerDocument||r,s=vv(s),(h=Kn.get(h))&&Tm(s,h),d=d.createElement("link"),St(d);var b=d;b._p=new Promise(function(S,N){b.onload=S,b.onerror=N}),Zt(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Mf.bind(l),r.addEventListener("load",i),r.addEventListener("error",i))}}function bw(){if(vu===null)throw Error(a(475));var r=vu;return r.stylesheets&&r.count===0&&wm(r,r.stylesheets),0<r.count?function(i){var s=setTimeout(function(){if(r.stylesheets&&wm(r,r.stylesheets),r.unsuspend){var l=r.unsuspend;r.unsuspend=null,l()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(s)}}:null}function Mf(){if(this.count--,this.count===0){if(this.stylesheets)wm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var kf=null;function wm(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,kf=new Map,i.forEach(Ew,r),kf=null,Mf.call(r))}function Ew(r,i){if(!(i.state.loading&4)){var s=kf.get(r);if(s)var l=s.get(null);else{s=new Map,kf.set(r,s);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var b=h[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),d=s.get(b)||l,d===l&&s.set(null,h),s.set(b,h),this.count++,l=Mf.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),i.state.loading|=4}}var _u={$$typeof:W,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function Tw(r,i,s,l,h,d,b,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.hiddenUpdates=Gs(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Sv(r,i,s,l,h,d,b,S,N,H,J,ne){return r=new Tw(r,i,s,b,S,N,H,ne),i=1,d===!0&&(i|=24),d=Cn(3,null,null,i),r.current=d,d.stateNode=r,i=ap(),i.refCount++,r.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},up(d),r}function wv(r){return r?(r=uo,r):uo}function Av(r,i,s,l,h,d){h=wv(h),l.context===null?l.context=h:l.pendingContext=h,l=Ji(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=ea(r,l,i),s!==null&&(Mn(s,r,i),Ql(s,r,i))}function xv(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<i?s:i}}function Am(r,i){xv(r,i),(r=r.alternate)&&xv(r,i)}function Rv(r){if(r.tag===13){var i=lo(r,67108864);i!==null&&Mn(i,r,67108864),Am(r,67108864)}}var Pf=!0;function Sw(r,i,s,l){var h=Z.T;Z.T=null;var d=ce.p;try{ce.p=2,xm(r,i,s,l)}finally{ce.p=d,Z.T=h}}function ww(r,i,s,l){var h=Z.T;Z.T=null;var d=ce.p;try{ce.p=8,xm(r,i,s,l)}finally{ce.p=d,Z.T=h}}function xm(r,i,s,l){if(Pf){var h=Rm(l);if(h===null)dm(r,i,l,Lf,s),Iv(r,l);else if(xw(h,r,i,s,l))l.stopPropagation();else if(Iv(r,l),i&4&&-1<Aw.indexOf(r)){for(;h!==null;){var d=br(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=er(d.pendingLanes);if(b!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var N=1<<31-dn(b);S.entanglements[1]|=N,b&=~N}Nr(d),(We&6)===0&&(_f=vn()+500,hu(0))}}break;case 13:S=lo(d,2),S!==null&&Mn(S,d,2),Ef(),Am(d,2)}if(d=Rm(l),d===null&&dm(r,i,l,Lf,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else dm(r,i,l,null,s)}}function Rm(r){return r=Nl(r),Cm(r)}var Lf=null;function Cm(r){if(Lf=null,r=_r(r),r!==null){var i=u(r);if(i===null)r=null;else{var s=i.tag;if(s===13){if(r=c(i),r!==null)return r;r=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return Lf=r,null}function Cv(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tc()){case kt:return 2;case Ut:return 8;case Xr:case Md:return 32;case bl:return 268435456;default:return 32}default:return 32}}var Im=!1,da=null,pa=null,ma=null,bu=new Map,Eu=new Map,ga=[],Aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iv(r,i){switch(r){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":bu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(i.pointerId)}}function Tu(r,i,s,l,h,d){return r===null||r.nativeEvent!==d?(r={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=br(i),i!==null&&Rv(i)),r):(r.eventSystemFlags|=l,i=r.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),r)}function xw(r,i,s,l,h){switch(i){case"focusin":return da=Tu(da,r,i,s,l,h),!0;case"dragenter":return pa=Tu(pa,r,i,s,l,h),!0;case"mouseover":return ma=Tu(ma,r,i,s,l,h),!0;case"pointerover":var d=h.pointerId;return bu.set(d,Tu(bu.get(d)||null,r,i,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Eu.set(d,Tu(Eu.get(d)||null,r,i,s,l,h)),!0}return!1}function Nv(r){var i=_r(r.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){r.blockedOn=i,Ld(r.priority,function(){if(s.tag===13){var l=On();l=Tl(l);var h=lo(s,l);h!==null&&Mn(h,s,l),Am(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Vf(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var s=Rm(r.nativeEvent);if(s===null){s=r.nativeEvent;var l=new s.constructor(s.type,s);Il=l,s.target.dispatchEvent(l),Il=null}else return i=br(s),i!==null&&Rv(i),r.blockedOn=s,!1;i.shift()}return!0}function Dv(r,i,s){Vf(r)&&s.delete(i)}function Rw(){Im=!1,da!==null&&Vf(da)&&(da=null),pa!==null&&Vf(pa)&&(pa=null),ma!==null&&Vf(ma)&&(ma=null),bu.forEach(Dv),Eu.forEach(Dv)}function jf(r,i){r.blockedOn===i&&(r.blockedOn=null,Im||(Im=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Rw)))}var zf=null;function Ov(r){zf!==r&&(zf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){zf===r&&(zf=null);for(var i=0;i<r.length;i+=3){var s=r[i],l=r[i+1],h=r[i+2];if(typeof l!="function"){if(Cm(l||s)===null)continue;break}var d=br(s);d!==null&&(r.splice(i,3),i-=3,Cp(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Su(r){function i(N){return jf(N,r)}da!==null&&jf(da,r),pa!==null&&jf(pa,r),ma!==null&&jf(ma,r),bu.forEach(i),Eu.forEach(i);for(var s=0;s<ga.length;s++){var l=ga[s];l.blockedOn===r&&(l.blockedOn=null)}for(;0<ga.length&&(s=ga[0],s.blockedOn===null);)Nv(s),s.blockedOn===null&&ga.shift();if(s=(r.ownerDocument||r).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],b=h[Qt]||null;if(typeof d=="function")b||Ov(s);else if(b){var S=null;if(d&&d.hasAttribute("formAction")){if(h=d,b=d[Qt]||null)S=b.formAction;else if(Cm(h)!==null)continue}else S=b.action;typeof S=="function"?s[l+1]=S:(s.splice(l,3),l-=3),Ov(s)}}}function Nm(r){this._internalRoot=r}Uf.prototype.render=Nm.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=On();Av(s,l,r,i,null,null)},Uf.prototype.unmount=Nm.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Av(r.current,2,null,r,null,null),Ef(),i[Zr]=null}};function Uf(r){this._internalRoot=r}Uf.prototype.unstable_scheduleHydration=function(r){if(r){var i=Wr();r={blockedOn:null,target:r,priority:i};for(var s=0;s<ga.length&&i!==0&&i<ga[s].priority;s++);ga.splice(s,0,r),s===0&&Nv(r)}};var Mv=e.version;if(Mv!=="19.1.1")throw Error(a(527,Mv,"19.1.1"));ce.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(a(188)):(r=Object.keys(r).join(","),Error(a(268,r)));return r=m(i),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var Cw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bf.isDisabled&&Bf.supportsFiber)try{Pi=Bf.inject(Cw),rn=Bf}catch{}}return Au.createRoot=function(r,i){if(!o(r))throw Error(a(299));var s=!1,l="",h=Qy,d=Xy,b=Wy,S=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks)),i=Sv(r,1,!1,null,null,s,l,h,d,b,S,null),r[Zr]=i.current,hm(r),new Nm(i)},Au.hydrateRoot=function(r,i,s){if(!o(r))throw Error(a(299));var l=!1,h="",d=Qy,b=Xy,S=Wy,N=null,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(N=s.unstable_transitionCallbacks),s.formState!==void 0&&(H=s.formState)),i=Sv(r,1,!0,i,s??null,l,h,d,b,S,N,H),i.context=wv(null),s=i.current,l=On(),l=Tl(l),h=Ji(l),h.callback=null,ea(s,h,l),s=l,i.current.lanes=s,Et(i,s),Nr(i),r[Zr]=i.current,hm(r),new Uf(i)},Au.version="19.1.1",Au}var Hv;function zw(){if(Hv)return Mm.exports;Hv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mm.exports=jw(),Mm.exports}var Uw=zw();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $v="popstate";function Bw(n={}){function e(a,o){let{pathname:u,search:c,hash:p}=a.location;return fg("",{pathname:u,search:c,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(a,o){return typeof o=="string"?o:Gu(o)}return Hw(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fw(){return Math.random().toString(36).substring(2,10)}function qv(n,e){return{usr:n.state,key:n.key,idx:e}}function fg(n,e,t=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ll(e):e,state:t,key:e&&e.key||a||Fw()}}function Gu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ll(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let a=n.indexOf("?");a>=0&&(e.search=n.substring(a),n=n.substring(0,a)),n&&(e.pathname=n)}return e}function Hw(n,e,t,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,p="POP",m=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function T(){p="POP";let V=v(),X=V==null?null:V-g;g=V,m&&m({action:p,location:$.location,delta:X})}function A(V,X){p="PUSH";let Y=fg($.location,V,X);g=v()+1;let W=qv(Y,g),fe=$.createHref(Y);try{c.pushState(W,"",fe)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;o.location.assign(fe)}u&&m&&m({action:p,location:$.location,delta:1})}function C(V,X){p="REPLACE";let Y=fg($.location,V,X);g=v();let W=qv(Y,g),fe=$.createHref(Y);c.replaceState(W,"",fe),u&&m&&m({action:p,location:$.location,delta:0})}function U(V){return $w(V)}let $={get action(){return p},get location(){return n(o,c)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener($v,T),m=V,()=>{o.removeEventListener($v,T),m=null}},createHref(V){return e(o,V)},createURL:U,encodeLocation(V){let X=U(V);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:A,replace:C,go(V){return c.go(V)}};return $}function $w(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),gt(t,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Gu(n);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=t+a),new URL(a,t)}function Ab(n,e,t="/"){return qw(n,e,t,!1)}function qw(n,e,t,a){let o=typeof e=="string"?ll(e):e,u=Ai(o.pathname||"/",t);if(u==null)return null;let c=xb(n);Gw(c);let p=null;for(let m=0;p==null&&m<c.length;++m){let g=rA(u);p=tA(c[m],g,a)}return p}function xb(n,e=[],t=[],a="",o=!1){let u=(c,p,m=o,g)=>{let v={relativePath:g===void 0?c.path||"":g,caseSensitive:c.caseSensitive===!0,childrenIndex:p,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&m)return;gt(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let T=Si([a,v.relativePath]),A=t.concat(v);c.children&&c.children.length>0&&(gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),xb(c.children,e,A,T,m)),!(c.path==null&&!c.index)&&e.push({path:T,score:Jw(T,c.index),routesMeta:A})};return n.forEach((c,p)=>{if(c.path===""||!c.path?.includes("?"))u(c,p);else for(let m of Rb(c.path))u(c,p,!0,m)}),e}function Rb(n){let e=n.split("/");if(e.length===0)return[];let[t,...a]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=Rb(a.join("/")),p=[];return p.push(...c.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...c),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function Gw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:eA(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var Yw=/^:[\w-]+$/,Kw=3,Qw=2,Xw=1,Ww=10,Zw=-2,Gv=n=>n==="*";function Jw(n,e){let t=n.split("/"),a=t.length;return t.some(Gv)&&(a+=Zw),e&&(a+=Qw),t.filter(o=>!Gv(o)).reduce((o,u)=>o+(Yw.test(u)?Kw:u===""?Xw:Ww),a)}function eA(n,e){return n.length===e.length&&n.slice(0,-1).every((a,o)=>a===e[o])?n[n.length-1]-e[e.length-1]:0}function tA(n,e,t=!1){let{routesMeta:a}=n,o={},u="/",c=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,v=u==="/"?e:e.slice(u.length)||"/",T=Ah({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),A=m.route;if(!T&&g&&t&&!a[a.length-1].route.index&&(T=Ah({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Si([u,T.pathname]),pathnameBase:oA(Si([u,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(u=Si([u,T.pathnameBase]))}return c}function Ah(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,a]=nA(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:a.reduce((g,{paramName:v,isOptional:T},A)=>{if(v==="*"){let U=p[A]||"";c=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const C=p[A];return T&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:c,pattern:n}}function nA(n,e=!1,t=!0){Fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function rA(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ai(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=n.charAt(t);return a&&a!=="/"?null:n.slice(t)||"/"}function iA(n,e="/"){let{pathname:t,search:a="",hash:o=""}=typeof n=="string"?ll(n):n;return{pathname:t?t.startsWith("/")?t:aA(t,e):e,search:lA(a),hash:uA(o)}}function aA(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Vm(n,e,t,a){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sA(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Cb(n){let e=sA(n);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function Ib(n,e,t,a=!1){let o;typeof n=="string"?o=ll(n):(o={...n},gt(!o.pathname||!o.pathname.includes("?"),Vm("?","pathname","search",o)),gt(!o.pathname||!o.pathname.includes("#"),Vm("#","pathname","hash",o)),gt(!o.search||!o.search.includes("#"),Vm("#","search","hash",o)));let u=n===""||o.pathname==="",c=u?"/":o.pathname,p;if(c==null)p=t;else{let T=e.length-1;if(!a&&c.startsWith("..")){let A=c.split("/");for(;A[0]==="..";)A.shift(),T-=1;o.pathname=A.join("/")}p=T>=0?e[T]:"/"}let m=iA(o,p),g=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var Si=n=>n.join("/").replace(/\/\/+/g,"/"),oA=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),lA=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,uA=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function cA(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Nb=["POST","PUT","PATCH","DELETE"];new Set(Nb);var fA=["GET",...Nb];new Set(fA);var ul=Q.createContext(null);ul.displayName="DataRouter";var ed=Q.createContext(null);ed.displayName="DataRouterState";Q.createContext(!1);var Db=Q.createContext({isTransitioning:!1});Db.displayName="ViewTransition";var hA=Q.createContext(new Map);hA.displayName="Fetchers";var dA=Q.createContext(null);dA.displayName="Await";var Gr=Q.createContext(null);Gr.displayName="Navigation";var ac=Q.createContext(null);ac.displayName="Location";var Yr=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Yr.displayName="Route";var l1=Q.createContext(null);l1.displayName="RouteError";function pA(n,{relative:e}={}){gt(sc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=Q.useContext(Gr),{hash:o,pathname:u,search:c}=oc(n,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:Si([t,u])),a.createHref({pathname:p,search:c,hash:o})}function sc(){return Q.useContext(ac)!=null}function Oi(){return gt(sc(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(ac).location}var Ob="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mb(n){Q.useContext(Gr).static||Q.useLayoutEffect(n)}function td(){let{isDataRoute:n}=Q.useContext(Yr);return n?CA():mA()}function mA(){gt(sc(),"useNavigate() may be used only in the context of a <Router> component.");let n=Q.useContext(ul),{basename:e,navigator:t}=Q.useContext(Gr),{matches:a}=Q.useContext(Yr),{pathname:o}=Oi(),u=JSON.stringify(Cb(a)),c=Q.useRef(!1);return Mb(()=>{c.current=!0}),Q.useCallback((m,g={})=>{if(Fr(c.current,Ob),!c.current)return;if(typeof m=="number"){t.go(m);return}let v=Ib(m,JSON.parse(u),o,g.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Si([e,v.pathname])),(g.replace?t.replace:t.push)(v,g.state,g)},[e,t,u,o,n])}Q.createContext(null);function gA(){let{matches:n}=Q.useContext(Yr),e=n[n.length-1];return e?e.params:{}}function oc(n,{relative:e}={}){let{matches:t}=Q.useContext(Yr),{pathname:a}=Oi(),o=JSON.stringify(Cb(t));return Q.useMemo(()=>Ib(n,JSON.parse(o),a,e==="path"),[n,o,a,e])}function yA(n,e){return kb(n,e)}function kb(n,e,t,a,o){gt(sc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=Q.useContext(Gr),{matches:c}=Q.useContext(Yr),p=c[c.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",T=p&&p.route;{let Y=T&&T.path||"";Pb(g,!T||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let A=Oi(),C;if(e){let Y=typeof e=="string"?ll(e):e;gt(v==="/"||Y.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),C=Y}else C=A;let U=C.pathname||"/",$=U;if(v!=="/"){let Y=v.replace(/^\//,"").split("/");$="/"+U.replace(/^\//,"").split("/").slice(Y.length).join("/")}let V=Ab(n,{pathname:$});Fr(T||V!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Fr(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=TA(V&&V.map(Y=>Object.assign({},Y,{params:Object.assign({},m,Y.params),pathname:Si([v,u.encodeLocation?u.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?v:Si([v,u.encodeLocation?u.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),c,t,a,o);return e&&X?Q.createElement(ac.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},X):X}function vA(){let n=RA(),e=cA(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:u},"ErrorBoundary")," or"," ",Q.createElement("code",{style:u},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,c)}var _A=Q.createElement(vA,null),bA=class extends Q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?Q.createElement(Yr.Provider,{value:this.props.routeContext},Q.createElement(l1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function EA({routeContext:n,match:e,children:t}){let a=Q.useContext(ul);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Yr.Provider,{value:n},t)}function TA(n,e=[],t=null,a=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,c=t?.errors;if(c!=null){let g=u.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);gt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(t)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:T,errors:A}=t,C=v.route.loader&&!T.hasOwnProperty(v.route.id)&&(!A||A[v.route.id]===void 0);if(v.route.lazy||C){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,v,T)=>{let A,C=!1,U=null,$=null;t&&(A=c&&v.route.id?c[v.route.id]:void 0,U=v.route.errorElement||_A,p&&(m<0&&T===0?(Pb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,$=null):m===T&&(C=!0,$=v.route.hydrateFallbackElement||null)));let V=e.concat(u.slice(0,T+1)),X=()=>{let Y;return A?Y=U:C?Y=$:v.route.Component?Y=Q.createElement(v.route.Component,null):v.route.element?Y=v.route.element:Y=g,Q.createElement(EA,{match:v,routeContext:{outlet:g,matches:V,isDataRoute:t!=null},children:Y})};return t&&(v.route.ErrorBoundary||v.route.errorElement||T===0)?Q.createElement(bA,{location:t.location,revalidation:t.revalidation,component:U,error:A,children:X(),routeContext:{outlet:null,matches:V,isDataRoute:!0},unstable_onError:a}):X()},null)}function u1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SA(n){let e=Q.useContext(ul);return gt(e,u1(n)),e}function wA(n){let e=Q.useContext(ed);return gt(e,u1(n)),e}function AA(n){let e=Q.useContext(Yr);return gt(e,u1(n)),e}function c1(n){let e=AA(n),t=e.matches[e.matches.length-1];return gt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function xA(){return c1("useRouteId")}function RA(){let n=Q.useContext(l1),e=wA("useRouteError"),t=c1("useRouteError");return n!==void 0?n:e.errors?.[t]}function CA(){let{router:n}=SA("useNavigate"),e=c1("useNavigate"),t=Q.useRef(!1);return Mb(()=>{t.current=!0}),Q.useCallback(async(o,u={})=>{Fr(t.current,Ob),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var Yv={};function Pb(n,e,t){!e&&!Yv[n]&&(Yv[n]=!0,Fr(!1,t))}Q.memo(IA);function IA({routes:n,future:e,state:t,unstable_onError:a}){return kb(n,void 0,t,a,e)}function qt(n){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NA({basename:n="/",children:e=null,location:t,navigationType:a="POP",navigator:o,static:u=!1}){gt(!sc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),p=Q.useMemo(()=>({basename:c,navigator:o,static:u,future:{}}),[c,o,u]);typeof t=="string"&&(t=ll(t));let{pathname:m="/",search:g="",hash:v="",state:T=null,key:A="default"}=t,C=Q.useMemo(()=>{let U=Ai(m,c);return U==null?null:{location:{pathname:U,search:g,hash:v,state:T,key:A},navigationType:a}},[c,m,g,v,T,A,a]);return Fr(C!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:Q.createElement(Gr.Provider,{value:p},Q.createElement(ac.Provider,{children:e,value:C}))}function Lb({children:n,location:e}){return yA(hg(n),e)}function hg(n,e=[]){let t=[];return Q.Children.forEach(n,(a,o)=>{if(!Q.isValidElement(a))return;let u=[...e,o];if(a.type===Q.Fragment){t.push.apply(t,hg(a.props.children,u));return}gt(a.type===qt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=hg(a.props.children,u)),t.push(c)}),t}var rh="get",ih="application/x-www-form-urlencoded";function nd(n){return n!=null&&typeof n.tagName=="string"}function DA(n){return nd(n)&&n.tagName.toLowerCase()==="button"}function OA(n){return nd(n)&&n.tagName.toLowerCase()==="form"}function MA(n){return nd(n)&&n.tagName.toLowerCase()==="input"}function kA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function PA(n,e){return n.button===0&&(!e||e==="_self")&&!kA(n)}var Ff=null;function LA(){if(Ff===null)try{new FormData(document.createElement("form"),0),Ff=!1}catch{Ff=!0}return Ff}var VA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jm(n){return n!=null&&!VA.has(n)?(Fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ih}"`),null):n}function jA(n,e){let t,a,o,u,c;if(OA(n)){let p=n.getAttribute("action");a=p?Ai(p,e):null,t=n.getAttribute("method")||rh,o=jm(n.getAttribute("enctype"))||ih,u=new FormData(n)}else if(DA(n)||MA(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?Ai(m,e):null,t=n.getAttribute("formmethod")||p.getAttribute("method")||rh,o=jm(n.getAttribute("formenctype"))||jm(p.getAttribute("enctype"))||ih,u=new FormData(p,n),!LA()){let{name:g,type:v,value:T}=n;if(v==="image"){let A=g?`${g}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else g&&u.append(g,T)}}else{if(nd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=rh,a=null,o=ih,c=n}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:t.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function f1(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zA(n,e,t){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${t}`:e&&Ai(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${t}`,a}async function UA(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BA(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function FA(n,e,t){let a=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await UA(u,t);return c.links?c.links():[]}return[]}));return GA(a.flat(1).filter(BA).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Kv(n,e,t,a,o,u){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>t[g].pathname!==m.pathname||t[g].route.path?.endsWith("*")&&t[g].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,g)=>c(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(c(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let T=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function HA(n,e,{includeHydrateFallback:t}={}){return $A(n.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function $A(n){return[...new Set(n)]}function qA(n){let e={},t=Object.keys(n).sort();for(let a of t)e[a]=n[a];return e}function GA(n,e){let t=new Set;return new Set(e),n.reduce((a,o)=>{let u=JSON.stringify(qA(o));return t.has(u)||(t.add(u),a.push({key:u,link:o})),a},[])}function Vb(){let n=Q.useContext(ul);return f1(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function YA(){let n=Q.useContext(ed);return f1(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var h1=Q.createContext(void 0);h1.displayName="FrameworkContext";function jb(){let n=Q.useContext(h1);return f1(n,"You must render this element inside a <HydratedRouter> element"),n}function KA(n,e){let t=Q.useContext(h1),[a,o]=Q.useState(!1),[u,c]=Q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:T}=e,A=Q.useRef(null);Q.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let $=X=>{X.forEach(Y=>{c(Y.isIntersecting)})},V=new IntersectionObserver($,{threshold:.5});return A.current&&V.observe(A.current),()=>{V.disconnect()}}},[n]),Q.useEffect(()=>{if(a){let $=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout($)}}},[a]);let C=()=>{o(!0)},U=()=>{o(!1),c(!1)};return t?n!=="intent"?[u,A,{}]:[u,A,{onFocus:xu(p,C),onBlur:xu(m,U),onMouseEnter:xu(g,C),onMouseLeave:xu(v,U),onTouchStart:xu(T,C)}]:[!1,A,{}]}function xu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function QA({page:n,...e}){let{router:t}=Vb(),a=Q.useMemo(()=>Ab(t.routes,n,t.basename),[t.routes,n,t.basename]);return a?Q.createElement(WA,{page:n,matches:a,...e}):null}function XA(n){let{manifest:e,routeModules:t}=jb(),[a,o]=Q.useState([]);return Q.useEffect(()=>{let u=!1;return FA(n,e,t).then(c=>{u||o(c)}),()=>{u=!0}},[n,e,t]),a}function WA({page:n,matches:e,...t}){let a=Oi(),{manifest:o,routeModules:u}=jb(),{basename:c}=Vb(),{loaderData:p,matches:m}=YA(),g=Q.useMemo(()=>Kv(n,e,m,o,a,"data"),[n,e,m,o,a]),v=Q.useMemo(()=>Kv(n,e,m,o,a,"assets"),[n,e,m,o,a]),T=Q.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let U=new Set,$=!1;if(e.forEach(X=>{let Y=o.routes[X.route.id];!Y||!Y.hasLoader||(!g.some(W=>W.route.id===X.route.id)&&X.route.id in p&&u[X.route.id]?.shouldRevalidate||Y.hasClientLoader?$=!0:U.add(X.route.id))}),U.size===0)return[];let V=zA(n,c,"data");return $&&U.size>0&&V.searchParams.set("_routes",e.filter(X=>U.has(X.route.id)).map(X=>X.route.id).join(",")),[V.pathname+V.search]},[c,p,a,o,g,e,n,u]),A=Q.useMemo(()=>HA(v,o),[v,o]),C=XA(v);return Q.createElement(Q.Fragment,null,T.map(U=>Q.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...t})),A.map(U=>Q.createElement("link",{key:U,rel:"modulepreload",href:U,...t})),C.map(({key:U,link:$})=>Q.createElement("link",{key:U,nonce:t.nonce,...$})))}function ZA(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zb&&(window.__reactRouterVersion="7.8.2")}catch{}function JA({basename:n,children:e,window:t}){let a=Q.useRef();a.current==null&&(a.current=Bw({window:t,v5Compat:!0}));let o=a.current,[u,c]=Q.useState({action:o.action,location:o.location}),p=Q.useCallback(m=>{Q.startTransition(()=>c(m))},[c]);return Q.useLayoutEffect(()=>o.listen(p),[o,p]),Q.createElement(NA,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var Ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zs=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,state:p,target:m,to:g,preventScrollReset:v,viewTransition:T,...A},C){let{basename:U}=Q.useContext(Gr),$=typeof g=="string"&&Ub.test(g),V,X=!1;if(typeof g=="string"&&$&&(V=g,zb))try{let R=new URL(window.location.href),P=g.startsWith("//")?new URL(R.protocol+g):new URL(g),M=Ai(P.pathname,U);P.origin===R.origin&&M!=null?g=M+P.search+P.hash:X=!0}catch{Fr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=pA(g,{relative:o}),[W,fe,te]=KA(a,A),he=rx(g,{replace:c,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:T});function I(R){e&&e(R),R.defaultPrevented||he(R)}let x=Q.createElement("a",{...A,...te,href:V||Y,onClick:X||u?e:I,ref:ZA(C,fe),target:m,"data-discover":!$&&t==="render"?"true":void 0});return W&&!$?Q.createElement(Q.Fragment,null,x,Q.createElement(QA,{page:Y})):x});zs.displayName="Link";var ex=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:p,children:m,...g},v){let T=oc(c,{relative:g.relative}),A=Oi(),C=Q.useContext(ed),{navigator:U,basename:$}=Q.useContext(Gr),V=C!=null&&lx(T)&&p===!0,X=U.encodeLocation?U.encodeLocation(T).pathname:T.pathname,Y=A.pathname,W=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),W=W?W.toLowerCase():null,X=X.toLowerCase()),W&&$&&(W=Ai(W,$)||W);const fe=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let te=Y===X||!o&&Y.startsWith(X)&&Y.charAt(fe)==="/",he=W!=null&&(W===X||!o&&W.startsWith(X)&&W.charAt(X.length)==="/"),I={isActive:te,isPending:he,isTransitioning:V},x=te?e:void 0,R;typeof a=="function"?R=a(I):R=[a,te?"active":null,he?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let P=typeof u=="function"?u(I):u;return Q.createElement(zs,{...g,"aria-current":x,className:R,ref:v,style:P,to:c,viewTransition:p},typeof m=="function"?m(I):m)});ex.displayName="NavLink";var tx=Q.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:o,state:u,method:c=rh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:T,...A},C)=>{let U=sx(),$=ox(p,{relative:g}),V=c.toLowerCase()==="get"?"get":"post",X=typeof p=="string"&&Ub.test(p),Y=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let fe=W.nativeEvent.submitter,te=fe?.getAttribute("formmethod")||c;U(fe||W.currentTarget,{fetcherKey:e,method:te,navigate:t,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:T})};return Q.createElement("form",{ref:C,method:V,action:$,onSubmit:a?m:Y,...A,"data-discover":!X&&n==="render"?"true":void 0})});tx.displayName="Form";function nx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(n){let e=Q.useContext(ul);return gt(e,nx(n)),e}function rx(n,{target:e,replace:t,state:a,preventScrollReset:o,relative:u,viewTransition:c}={}){let p=td(),m=Oi(),g=oc(n,{relative:u});return Q.useCallback(v=>{if(PA(v,e)){v.preventDefault();let T=t!==void 0?t:Gu(m)===Gu(g);p(n,{replace:T,state:a,preventScrollReset:o,relative:u,viewTransition:c})}},[m,p,g,t,a,e,n,o,u,c])}var ix=0,ax=()=>`__${String(++ix)}__`;function sx(){let{router:n}=Bb("useSubmit"),{basename:e}=Q.useContext(Gr),t=xA();return Q.useCallback(async(a,o={})=>{let{action:u,method:c,encType:p,formData:m,body:g}=jA(a,e);if(o.navigate===!1){let v=o.fetcherKey||ax();await n.fetch(v,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||c,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||c,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function ox(n,{relative:e}={}){let{basename:t}=Q.useContext(Gr),a=Q.useContext(Yr);gt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...oc(n||".",{relative:e})},c=Oi();if(n==null){u.search=c.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(T=>T).forEach(T=>p.append("index",T));let v=p.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Si([t,u.pathname])),Gu(u)}function lx(n,{relative:e}={}){let t=Q.useContext(Db);gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Bb("useViewTransitionState"),o=oc(n,{relative:e});if(!t.isTransitioning)return!1;let u=Ai(t.currentLocation.pathname,a)||t.currentLocation.pathname,c=Ai(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Ah(o.pathname,c)!=null||Ah(o.pathname,u)!=null}/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function dg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function ux(n){if(Array.isArray(n))return n}function cx(n){if(Array.isArray(n))return dg(n)}function fx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function hx(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,Fb(a.key),a)}}function dx(n,e,t){return e&&hx(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function ah(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=d1(n))||e){t&&(n=t);var a=0,o=function(){};return{s:o,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,c=!0,p=!1;return{s:function(){t=t.call(n)},n:function(){var m=t.next();return c=m.done,m},e:function(m){p=!0,u=m},f:function(){try{c||t.return==null||t.return()}finally{if(p)throw u}}}}function Fe(n,e,t){return(e=Fb(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function px(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,o,u,c,p=[],m=!0,g=!1;try{if(u=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;m=!1}else for(;!(m=(a=u.call(t)).done)&&(p.push(a.value),p.length!==e);m=!0);}catch(v){g=!0,o=v}finally{try{if(!m&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(g)throw o}}return p}}function gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function se(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qv(Object(t),!0).forEach(function(a){Fe(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Qv(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function rd(n,e){return ux(n)||mx(n,e)||d1(n,e)||gx()}function gr(n){return cx(n)||px(n)||d1(n)||yx()}function vx(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Fb(n){var e=vx(n,"string");return typeof e=="symbol"?e:e+""}function xh(n){"@babel/helpers - typeof";return xh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xh(n)}function d1(n,e){if(n){if(typeof n=="string")return dg(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?dg(n,e):void 0}}var Xv=function(){},p1={},Hb={},$b=null,qb={mark:Xv,measure:Xv};try{typeof window<"u"&&(p1=window),typeof document<"u"&&(Hb=document),typeof MutationObserver<"u"&&($b=MutationObserver),typeof performance<"u"&&(qb=performance)}catch{}var _x=p1.navigator||{},Wv=_x.userAgent,Zv=Wv===void 0?"":Wv,Na=p1,ct=Hb,Jv=$b,Hf=qb;Na.document;var Mi=!!ct.documentElement&&!!ct.head&&typeof ct.addEventListener=="function"&&typeof ct.createElement=="function",Gb=~Zv.indexOf("MSIE")||~Zv.indexOf("Trident/"),zm,bx=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ex=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Yb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Tx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Kb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],tn="classic",lc="duotone",Qb="sharp",Xb="sharp-duotone",Wb="chisel",Zb="etch",Jb="jelly",e3="jelly-duo",t3="jelly-fill",n3="notdog",r3="notdog-duo",i3="slab",a3="slab-press",s3="thumbprint",o3="whiteboard",Sx="Classic",wx="Duotone",Ax="Sharp",xx="Sharp Duotone",Rx="Chisel",Cx="Etch",Ix="Jelly",Nx="Jelly Duo",Dx="Jelly Fill",Ox="Notdog",Mx="Notdog Duo",kx="Slab",Px="Slab Press",Lx="Thumbprint",Vx="Whiteboard",l3=[tn,lc,Qb,Xb,Wb,Zb,Jb,e3,t3,n3,r3,i3,a3,s3,o3];zm={},Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(zm,tn,Sx),lc,wx),Qb,Ax),Xb,xx),Wb,Rx),Zb,Cx),Jb,Ix),e3,Nx),t3,Dx),n3,Ox),Fe(Fe(Fe(Fe(Fe(zm,r3,Mx),i3,kx),a3,Px),s3,Lx),o3,Vx);var jx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},zx={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Ux=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Bx={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},u3=["fak","fa-kit","fakd","fa-kit-duotone"],e_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fx=["kit"],Hx="kit",$x="kit-duotone",qx="Kit",Gx="Kit Duotone";Fe(Fe({},Hx,qx),$x,Gx);var Yx={kit:{"fa-kit":"fak"}},Kx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qx={kit:{fak:"fa-kit"}},t_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Um,$f={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Wx="classic",Zx="duotone",Jx="sharp",e5="sharp-duotone",t5="chisel",n5="etch",r5="jelly",i5="jelly-duo",a5="jelly-fill",s5="notdog",o5="notdog-duo",l5="slab",u5="slab-press",c5="thumbprint",f5="whiteboard",h5="Classic",d5="Duotone",p5="Sharp",m5="Sharp Duotone",g5="Chisel",y5="Etch",v5="Jelly",_5="Jelly Duo",b5="Jelly Fill",E5="Notdog",T5="Notdog Duo",S5="Slab",w5="Slab Press",A5="Thumbprint",x5="Whiteboard";Um={},Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Fe(Um,Wx,h5),Zx,d5),Jx,p5),e5,m5),t5,g5),n5,y5),r5,v5),i5,_5),a5,b5),s5,E5),Fe(Fe(Fe(Fe(Fe(Um,o5,T5),l5,S5),u5,w5),c5,A5),f5,x5);var R5="kit",C5="kit-duotone",I5="Kit",N5="Kit Duotone";Fe(Fe({},R5,I5),C5,N5);var D5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},O5={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},pg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},M5=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],c3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Xx,M5),k5=["solid","regular","light","thin","duotone","brands","semibold"],f3=[1,2,3,4,5,6,7,8,9,10],P5=f3.concat([11,12,13,14,15,16,17,18,19,20]),L5=["aw","fw","pull-left","pull-right"],V5=[].concat(gr(Object.keys(O5)),k5,L5,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",$f.GROUP,$f.SWAP_OPACITY,$f.PRIMARY,$f.SECONDARY]).concat(f3.map(function(n){return"".concat(n,"x")})).concat(P5.map(function(n){return"w-".concat(n)})),j5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},xi="___FONT_AWESOME___",mg=16,h3="fa",d3="svg-inline--fa",Os="data-fa-i2svg",gg="data-fa-pseudo-element",z5="data-fa-pseudo-element-pending",m1="data-prefix",g1="data-icon",n_="fontawesome-i2svg",U5="async",B5=["HTML","HEAD","STYLE","SCRIPT"],p3=["::before","::after",":before",":after"],m3=(function(){try{return!0}catch{return!1}})();function uc(n){return new Proxy(n,{get:function(t,a){return a in t?t[a]:t[tn]}})}var g3=se({},Yb);g3[tn]=se(se(se(se({},{"fa-duotone":"duotone"}),Yb[tn]),e_.kit),e_["kit-duotone"]);var F5=uc(g3),yg=se({},Bx);yg[tn]=se(se(se(se({},{duotone:"fad"}),yg[tn]),t_.kit),t_["kit-duotone"]);var r_=uc(yg),vg=se({},pg);vg[tn]=se(se({},vg[tn]),Qx.kit);var y1=uc(vg),_g=se({},D5);_g[tn]=se(se({},_g[tn]),Yx.kit);uc(_g);var H5=bx,y3="fa-layers-text",$5=Ex,q5=se({},jx);uc(q5);var G5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bm=Tx,Y5=[].concat(gr(Fx),gr(V5)),Lu=Na.FontAwesomeConfig||{};function K5(n){var e=ct.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function Q5(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(ct&&typeof ct.querySelector=="function"){var X5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];X5.forEach(function(n){var e=rd(n,2),t=e[0],a=e[1],o=Q5(K5(t));o!=null&&(Lu[a]=o)})}var v3={styleDefault:"solid",familyDefault:tn,cssPrefix:h3,replacementClass:d3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Lu.familyPrefix&&(Lu.cssPrefix=Lu.familyPrefix);var Ko=se(se({},v3),Lu);Ko.autoReplaceSvg||(Ko.observeMutations=!1);var _e={};Object.keys(v3).forEach(function(n){Object.defineProperty(_e,n,{enumerable:!0,set:function(t){Ko[n]=t,Vu.forEach(function(a){return a(_e)})},get:function(){return Ko[n]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(e){Ko.cssPrefix=e,Vu.forEach(function(t){return t(_e)})},get:function(){return Ko.cssPrefix}});Na.FontAwesomeConfig=_e;var Vu=[];function W5(n){return Vu.push(n),function(){Vu.splice(Vu.indexOf(n),1)}}var ko=mg,Lr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z5(n){if(!(!n||!Mi)){var e=ct.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=ct.head.childNodes,a=null,o=t.length-1;o>-1;o--){var u=t[o],c=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(a=u)}return ct.head.insertBefore(e,a),n}}var J5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i_(){for(var n=12,e="";n-- >0;)e+=J5[Math.random()*62|0];return e}function cl(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function v1(n){return n.classList?cl(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _3(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eR(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(_3(n[t]),'" ')},"").trim()}function id(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function _1(n){return n.size!==Lr.size||n.x!==Lr.x||n.y!==Lr.y||n.rotate!==Lr.rotate||n.flipX||n.flipY}function tR(n){var e=n.transform,t=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(t/2," 256)")},u="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),p="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(u," ").concat(c," ").concat(p)},g={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:m,path:g}}function nR(n){var e=n.transform,t=n.width,a=t===void 0?mg:t,o=n.height,u=o===void 0?mg:o,c="";return Gb?c+="translate(".concat(e.x/ko-a/2,"em, ").concat(e.y/ko-u/2,"em) "):c+="translate(calc(-50% + ".concat(e.x/ko,"em), calc(-50% + ").concat(e.y/ko,"em)) "),c+="scale(".concat(e.size/ko*(e.flipX?-1:1),", ").concat(e.size/ko*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var rR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function b3(){var n=h3,e=d3,t=_e.cssPrefix,a=_e.replacementClass,o=rR;if(t!==n||a!==e){var u=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),p=new RegExp("\\.".concat(e),"g");o=o.replace(u,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(p,".".concat(a))}return o}var a_=!1;function Fm(){_e.autoAddCss&&!a_&&(Z5(b3()),a_=!0)}var iR={mixout:function(){return{dom:{css:b3,insertCss:Fm}}},hooks:function(){return{beforeDOMElementCreation:function(){Fm()},beforeI2svg:function(){Fm()}}}},Ri=Na||{};Ri[xi]||(Ri[xi]={});Ri[xi].styles||(Ri[xi].styles={});Ri[xi].hooks||(Ri[xi].hooks={});Ri[xi].shims||(Ri[xi].shims=[]);var fr=Ri[xi],E3=[],T3=function(){ct.removeEventListener("DOMContentLoaded",T3),Rh=1,E3.map(function(e){return e()})},Rh=!1;Mi&&(Rh=(ct.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ct.readyState),Rh||ct.addEventListener("DOMContentLoaded",T3));function aR(n){Mi&&(Rh?setTimeout(n,0):E3.push(n))}function cc(n){var e=n.tag,t=n.attributes,a=t===void 0?{}:t,o=n.children,u=o===void 0?[]:o;return typeof n=="string"?_3(n):"<".concat(e," ").concat(eR(a),">").concat(u.map(cc).join(""),"</").concat(e,">")}function s_(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Hm=function(e,t,a,o){var u=Object.keys(e),c=u.length,p=t,m,g,v;for(a===void 0?(m=1,v=e[u[0]]):(m=0,v=a);m<c;m++)g=u[m],v=p(v,e[g],g,e);return v};function S3(n){return gr(n).length!==1?null:n.codePointAt(0).toString(16)}function o_(n){return Object.keys(n).reduce(function(e,t){var a=n[t],o=!!a.icon;return o?e[a.iconName]=a.icon:e[t]=a,e},{})}function bg(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,o=a===void 0?!1:a,u=o_(e);typeof fr.hooks.addPack=="function"&&!o?fr.hooks.addPack(n,o_(e)):fr.styles[n]=se(se({},fr.styles[n]||{}),u),n==="fas"&&bg("fa",e)}var Yu=fr.styles,sR=fr.shims,w3=Object.keys(y1),oR=w3.reduce(function(n,e){return n[e]=Object.keys(y1[e]),n},{}),b1=null,A3={},x3={},R3={},C3={},I3={};function lR(n){return~Y5.indexOf(n)}function uR(n,e){var t=e.split("-"),a=t[0],o=t.slice(1).join("-");return a===n&&o!==""&&!lR(o)?o:null}var N3=function(){var e=function(u){return Hm(Yu,function(c,p,m){return c[m]=Hm(p,u,{}),c},{})};A3=e(function(o,u,c){if(u[3]&&(o[u[3]]=c),u[2]){var p=u[2].filter(function(m){return typeof m=="number"});p.forEach(function(m){o[m.toString(16)]=c})}return o}),x3=e(function(o,u,c){if(o[c]=c,u[2]){var p=u[2].filter(function(m){return typeof m=="string"});p.forEach(function(m){o[m]=c})}return o}),I3=e(function(o,u,c){var p=u[2];return o[c]=c,p.forEach(function(m){o[m]=c}),o});var t="far"in Yu||_e.autoFetchSvg,a=Hm(sR,function(o,u){var c=u[0],p=u[1],m=u[2];return p==="far"&&!t&&(p="fas"),typeof c=="string"&&(o.names[c]={prefix:p,iconName:m}),typeof c=="number"&&(o.unicodes[c.toString(16)]={prefix:p,iconName:m}),o},{names:{},unicodes:{}});R3=a.names,C3=a.unicodes,b1=ad(_e.styleDefault,{family:_e.familyDefault})};W5(function(n){b1=ad(n.styleDefault,{family:_e.familyDefault})});N3();function E1(n,e){return(A3[n]||{})[e]}function cR(n,e){return(x3[n]||{})[e]}function Ss(n,e){return(I3[n]||{})[e]}function D3(n){return R3[n]||{prefix:null,iconName:null}}function fR(n){var e=C3[n],t=E1("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Da(){return b1}var O3=function(){return{prefix:null,iconName:null,rest:[]}};function hR(n){var e=tn,t=w3.reduce(function(a,o){return a[o]="".concat(_e.cssPrefix,"-").concat(o),a},{});return l3.forEach(function(a){(n.includes(t[a])||n.some(function(o){return oR[a].includes(o)}))&&(e=a)}),e}function ad(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,a=t===void 0?tn:t,o=F5[a][n];if(a===lc&&!n)return"fad";var u=r_[a][n]||r_[a][o],c=n in fr.styles?n:null,p=u||c||null;return p}function dR(n){var e=[],t=null;return n.forEach(function(a){var o=uR(_e.cssPrefix,a);o?t=o:a&&e.push(a)}),{iconName:t,rest:e}}function l_(n){return n.sort().filter(function(e,t,a){return a.indexOf(e)===t})}var u_=c3.concat(u3);function sd(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,a=t===void 0?!1:t,o=null,u=l_(n.filter(function(C){return u_.includes(C)})),c=l_(n.filter(function(C){return!u_.includes(C)})),p=u.filter(function(C){return o=C,!Kb.includes(C)}),m=rd(p,1),g=m[0],v=g===void 0?null:g,T=hR(u),A=se(se({},dR(c)),{},{prefix:ad(v,{family:T})});return se(se(se({},A),yR({values:n,family:T,styles:Yu,config:_e,canonical:A,givenPrefix:o})),pR(a,o,A))}function pR(n,e,t){var a=t.prefix,o=t.iconName;if(n||!a||!o)return{prefix:a,iconName:o};var u=e==="fa"?D3(o):{},c=Ss(a,o);return o=u.iconName||c||o,a=u.prefix||a,a==="far"&&!Yu.far&&Yu.fas&&!_e.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}var mR=l3.filter(function(n){return n!==tn||n!==lc}),gR=Object.keys(pg).filter(function(n){return n!==tn}).map(function(n){return Object.keys(pg[n])}).flat();function yR(n){var e=n.values,t=n.family,a=n.canonical,o=n.givenPrefix,u=o===void 0?"":o,c=n.styles,p=c===void 0?{}:c,m=n.config,g=m===void 0?{}:m,v=t===lc,T=e.includes("fa-duotone")||e.includes("fad"),A=g.familyDefault==="duotone",C=a.prefix==="fad"||a.prefix==="fa-duotone";if(!v&&(T||A||C)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&mR.includes(t)){var U=Object.keys(p).find(function(V){return gR.includes(V)});if(U||g.autoFetchSvg){var $=Ux.get(t).defaultShortPrefixId;a.prefix=$,a.iconName=Ss(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||u==="fa")&&(a.prefix=Da()||"fas"),a}var vR=(function(){function n(){fx(this,n),this.definitions={}}return dx(n,[{key:"add",value:function(){for(var t=this,a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];var c=o.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(p){t.definitions[p]=se(se({},t.definitions[p]||{}),c[p]),bg(p,c[p]);var m=y1[tn][p];m&&bg(m,c[p]),N3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var o=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(o).map(function(u){var c=o[u],p=c.prefix,m=c.iconName,g=c.icon,v=g[2];t[p]||(t[p]={}),v.length>0&&v.forEach(function(T){typeof T=="string"&&(t[p][T]=g)}),t[p][m]=g}),t}}])})(),c_=[],Bo={},Ho={},_R=Object.keys(Ho);function bR(n,e){var t=e.mixoutsTo;return c_=n,Bo={},Object.keys(Ho).forEach(function(a){_R.indexOf(a)===-1&&delete Ho[a]}),c_.forEach(function(a){var o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(function(c){typeof o[c]=="function"&&(t[c]=o[c]),xh(o[c])==="object"&&Object.keys(o[c]).forEach(function(p){t[c]||(t[c]={}),t[c][p]=o[c][p]})}),a.hooks){var u=a.hooks();Object.keys(u).forEach(function(c){Bo[c]||(Bo[c]=[]),Bo[c].push(u[c])})}a.provides&&a.provides(Ho)}),t}function Eg(n,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];var u=Bo[n]||[];return u.forEach(function(c){e=c.apply(null,[e].concat(a))}),e}function Ms(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var o=Bo[n]||[];o.forEach(function(u){u.apply(null,t)})}function Oa(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ho[n]?Ho[n].apply(null,e):void 0}function Tg(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Da();if(e)return e=Ss(t,e)||e,s_(M3.definitions,t,e)||s_(fr.styles,t,e)}var M3=new vR,ER=function(){_e.autoReplaceSvg=!1,_e.observeMutations=!1,Ms("noAuto")},TR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Mi?(Ms("beforeI2svg",e),Oa("pseudoElements2svg",e),Oa("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,aR(function(){wR({autoReplaceSvgRoot:t}),Ms("watch",e)})}},SR={icon:function(e){if(e===null)return null;if(xh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ss(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ad(e[0]);return{prefix:a,iconName:Ss(a,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_e.cssPrefix,"-"))>-1||e.match(H5))){var o=sd(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Da(),iconName:Ss(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var u=Da();return{prefix:u,iconName:Ss(u,e)||e}}}},Ln={noAuto:ER,config:_e,dom:TR,parse:SR,library:M3,findIconDefinition:Tg,toHtml:cc},wR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,a=t===void 0?ct:t;(Object.keys(fr.styles).length>0||_e.autoFetchSvg)&&Mi&&_e.autoReplaceSvg&&Ln.dom.i2svg({node:a})};function od(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return cc(a)})}}),Object.defineProperty(n,"node",{get:function(){if(Mi){var a=ct.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function AR(n){var e=n.children,t=n.main,a=n.mask,o=n.attributes,u=n.styles,c=n.transform;if(_1(c)&&t.found&&!a.found){var p=t.width,m=t.height,g={x:p/m/2,y:.5};o.style=id(se(se({},u),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function xR(n){var e=n.prefix,t=n.iconName,a=n.children,o=n.attributes,u=n.symbol,c=u===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(t):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:se(se({},o),{},{id:c}),children:a}]}]}function RR(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in n})}function T1(n){var e=n.icons,t=e.main,a=e.mask,o=n.prefix,u=n.iconName,c=n.transform,p=n.symbol,m=n.maskId,g=n.extra,v=n.watchable,T=v===void 0?!1:v,A=a.found?a:t,C=A.width,U=A.height,$=[_e.replacementClass,u?"".concat(_e.cssPrefix,"-").concat(u):""].filter(function(te){return g.classes.indexOf(te)===-1}).filter(function(te){return te!==""||!!te}).concat(g.classes).join(" "),V={children:[],attributes:se(se({},g.attributes),{},{"data-prefix":o,"data-icon":u,class:$,role:g.attributes.role||"img",viewBox:"0 0 ".concat(C," ").concat(U)})};!RR(g.attributes)&&!g.attributes["aria-hidden"]&&(V.attributes["aria-hidden"]="true"),T&&(V.attributes[Os]="");var X=se(se({},V),{},{prefix:o,iconName:u,main:t,mask:a,maskId:m,transform:c,symbol:p,styles:se({},g.styles)}),Y=a.found&&t.found?Oa("generateAbstractMask",X)||{children:[],attributes:{}}:Oa("generateAbstractIcon",X)||{children:[],attributes:{}},W=Y.children,fe=Y.attributes;return X.children=W,X.attributes=fe,p?xR(X):AR(X)}function f_(n){var e=n.content,t=n.width,a=n.height,o=n.transform,u=n.extra,c=n.watchable,p=c===void 0?!1:c,m=se(se({},u.attributes),{},{class:u.classes.join(" ")});p&&(m[Os]="");var g=se({},u.styles);_1(o)&&(g.transform=nR({transform:o,width:t,height:a}),g["-webkit-transform"]=g.transform);var v=id(g);v.length>0&&(m.style=v);var T=[];return T.push({tag:"span",attributes:m,children:[e]}),T}function CR(n){var e=n.content,t=n.extra,a=se(se({},t.attributes),{},{class:t.classes.join(" ")}),o=id(t.styles);o.length>0&&(a.style=o);var u=[];return u.push({tag:"span",attributes:a,children:[e]}),u}var $m=fr.styles;function Sg(n){var e=n[0],t=n[1],a=n.slice(4),o=rd(a,1),u=o[0],c=null;return Array.isArray(u)?c={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Bm.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Bm.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Bm.PRIMARY),fill:"currentColor",d:u[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:e,height:t,icon:c}}var IR={found:!1,width:512,height:512};function NR(n,e){!m3&&!_e.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function wg(n,e){var t=e;return e==="fa"&&_e.styleDefault!==null&&(e=Da()),new Promise(function(a,o){if(t==="fa"){var u=D3(n)||{};n=u.iconName||n,e=u.prefix||e}if(n&&e&&$m[e]&&$m[e][n]){var c=$m[e][n];return a(Sg(c))}NR(n,e),a(se(se({},IR),{},{icon:_e.showMissingIcons&&n?Oa("missingIconAbstract")||{}:{}}))})}var h_=function(){},Ag=_e.measurePerformance&&Hf&&Hf.mark&&Hf.measure?Hf:{mark:h_,measure:h_},Nu='FA "7.0.1"',DR=function(e){return Ag.mark("".concat(Nu," ").concat(e," begins")),function(){return k3(e)}},k3=function(e){Ag.mark("".concat(Nu," ").concat(e," ends")),Ag.measure("".concat(Nu," ").concat(e),"".concat(Nu," ").concat(e," begins"),"".concat(Nu," ").concat(e," ends"))},S1={begin:DR,end:k3},sh=function(){};function d_(n){var e=n.getAttribute?n.getAttribute(Os):null;return typeof e=="string"}function OR(n){var e=n.getAttribute?n.getAttribute(m1):null,t=n.getAttribute?n.getAttribute(g1):null;return e&&t}function MR(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(_e.replacementClass)}function kR(){if(_e.autoReplaceSvg===!0)return oh.replace;var n=oh[_e.autoReplaceSvg];return n||oh.replace}function PR(n){return ct.createElementNS("http://www.w3.org/2000/svg",n)}function LR(n){return ct.createElement(n)}function P3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,a=t===void 0?n.tag==="svg"?PR:LR:t;if(typeof n=="string")return ct.createTextNode(n);var o=a(n.tag);Object.keys(n.attributes||[]).forEach(function(c){o.setAttribute(c,n.attributes[c])});var u=n.children||[];return u.forEach(function(c){o.appendChild(P3(c,{ceFn:a}))}),o}function VR(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var oh={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(o){t.parentNode.insertBefore(P3(o),t)}),t.getAttribute(Os)===null&&_e.keepOriginalSource){var a=ct.createComment(VR(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(e){var t=e[0],a=e[1];if(~v1(t).indexOf(_e.replacementClass))return oh.replace(e);var o=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var u=a[0].attributes.class.split(" ").reduce(function(p,m){return m===_e.replacementClass||m.match(o)?p.toSvg.push(m):p.toNode.push(m),p},{toNode:[],toSvg:[]});a[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",u.toNode.join(" "))}var c=a.map(function(p){return cc(p)}).join(`
`);t.setAttribute(Os,""),t.innerHTML=c}};function p_(n){n()}function L3(n,e){var t=typeof e=="function"?e:sh;if(n.length===0)t();else{var a=p_;_e.mutateApproach===U5&&(a=Na.requestAnimationFrame||p_),a(function(){var o=kR(),u=S1.begin("mutate");n.map(o),u(),t()})}}var w1=!1;function V3(){w1=!0}function xg(){w1=!1}var Ch=null;function m_(n){if(Jv&&_e.observeMutations){var e=n.treeCallback,t=e===void 0?sh:e,a=n.nodeCallback,o=a===void 0?sh:a,u=n.pseudoElementsCallback,c=u===void 0?sh:u,p=n.observeMutationsRoot,m=p===void 0?ct:p;Ch=new Jv(function(g){if(!w1){var v=Da();cl(g).forEach(function(T){if(T.type==="childList"&&T.addedNodes.length>0&&!d_(T.addedNodes[0])&&(_e.searchPseudoElements&&c(T.target),t(T.target)),T.type==="attributes"&&T.target.parentNode&&_e.searchPseudoElements&&c([T.target],!0),T.type==="attributes"&&d_(T.target)&&~G5.indexOf(T.attributeName))if(T.attributeName==="class"&&OR(T.target)){var A=sd(v1(T.target)),C=A.prefix,U=A.iconName;T.target.setAttribute(m1,C||v),U&&T.target.setAttribute(g1,U)}else MR(T.target)&&o(T.target)})}}),Mi&&Ch.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jR(){Ch&&Ch.disconnect()}function zR(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(a,o){var u=o.split(":"),c=u[0],p=u.slice(1);return c&&p.length>0&&(a[c]=p.join(":").trim()),a},{})),t}function UR(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",o=sd(v1(n));return o.prefix||(o.prefix=Da()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=cR(o.prefix,n.innerText)||E1(o.prefix,S3(n.innerText))),!o.iconName&&_e.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function BR(n){var e=cl(n.attributes).reduce(function(t,a){return t.name!=="class"&&t.name!=="style"&&(t[a.name]=a.value),t},{});return e}function FR(){return{iconName:null,prefix:null,transform:Lr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=UR(n),a=t.iconName,o=t.prefix,u=t.rest,c=BR(n),p=Eg("parseNodeAttributes",{},n),m=e.styleParser?zR(n):[];return se({iconName:a,prefix:o,transform:Lr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:c}},p)}var HR=fr.styles;function j3(n){var e=_e.autoReplaceSvg==="nest"?g_(n,{styleParser:!1}):g_(n);return~e.extra.classes.indexOf(y3)?Oa("generateLayersText",n,e):Oa("generateSvgReplacementMutation",n,e)}function $R(){return[].concat(gr(u3),gr(c3))}function y_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Mi)return Promise.resolve();var t=ct.documentElement.classList,a=function(T){return t.add("".concat(n_,"-").concat(T))},o=function(T){return t.remove("".concat(n_,"-").concat(T))},u=_e.autoFetchSvg?$R():Kb.concat(Object.keys(HR));u.includes("fa")||u.push("fa");var c=[".".concat(y3,":not([").concat(Os,"])")].concat(u.map(function(v){return".".concat(v,":not([").concat(Os,"])")})).join(", ");if(c.length===0)return Promise.resolve();var p=[];try{p=cl(n.querySelectorAll(c))}catch{}if(p.length>0)a("pending"),o("complete");else return Promise.resolve();var m=S1.begin("onTree"),g=p.reduce(function(v,T){try{var A=j3(T);A&&v.push(A)}catch(C){m3||C.name==="MissingIcon"&&console.error(C)}return v},[]);return new Promise(function(v,T){Promise.all(g).then(function(A){L3(A,function(){a("active"),a("complete"),o("pending"),typeof e=="function"&&e(),m(),v()})}).catch(function(A){m(),T(A)})})}function qR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;j3(n).then(function(t){t&&L3([t],e)})}function GR(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Tg(e||{}),o=t.mask;return o&&(o=(o||{}).icon?o:Tg(o||{})),n(a,se(se({},t),{},{mask:o}))}}var YR=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,o=a===void 0?Lr:a,u=t.symbol,c=u===void 0?!1:u,p=t.mask,m=p===void 0?null:p,g=t.maskId,v=g===void 0?null:g,T=t.classes,A=T===void 0?[]:T,C=t.attributes,U=C===void 0?{}:C,$=t.styles,V=$===void 0?{}:$;if(e){var X=e.prefix,Y=e.iconName,W=e.icon;return od(se({type:"icon"},e),function(){return Ms("beforeDOMElementCreation",{iconDefinition:e,params:t}),T1({icons:{main:Sg(W),mask:m?Sg(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:X,iconName:Y,transform:se(se({},Lr),o),symbol:c,maskId:v,extra:{attributes:U,styles:V,classes:A}})})}},KR={mixout:function(){return{icon:GR(YR)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=y_,t.nodeCallback=qR,t}}},provides:function(e){e.i2svg=function(t){var a=t.node,o=a===void 0?ct:a,u=t.callback,c=u===void 0?function(){}:u;return y_(o,c)},e.generateSvgReplacementMutation=function(t,a){var o=a.iconName,u=a.prefix,c=a.transform,p=a.symbol,m=a.mask,g=a.maskId,v=a.extra;return new Promise(function(T,A){Promise.all([wg(o,u),m.iconName?wg(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var U=rd(C,2),$=U[0],V=U[1];T([t,T1({icons:{main:$,mask:V},prefix:u,iconName:o,transform:c,symbol:p,maskId:g,extra:v,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(t){var a=t.children,o=t.attributes,u=t.main,c=t.transform,p=t.styles,m=id(p);m.length>0&&(o.style=m);var g;return _1(c)&&(g=Oa("generateAbstractTransformGrouping",{main:u,transform:c,containerWidth:u.width,iconWidth:u.width})),a.push(g||u.icon),{children:a,attributes:o}}}},QR={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.classes,u=o===void 0?[]:o;return od({type:"layer"},function(){Ms("beforeDOMElementCreation",{assembler:t,params:a});var c=[];return t(function(p){Array.isArray(p)?p.map(function(m){c=c.concat(m.abstract)}):c=c.concat(p.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers")].concat(gr(u)).join(" ")},children:c}]})}}}},XR={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var o=a.classes,u=o===void 0?[]:o,c=a.attributes,p=c===void 0?{}:c,m=a.styles,g=m===void 0?{}:m;return od({type:"counter",content:t},function(){return Ms("beforeDOMElementCreation",{content:t,params:a}),CR({content:t.toString(),extra:{attributes:p,styles:g,classes:["".concat(_e.cssPrefix,"-layers-counter")].concat(gr(u))}})})}}}},WR={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.transform,u=o===void 0?Lr:o,c=a.classes,p=c===void 0?[]:c,m=a.attributes,g=m===void 0?{}:m,v=a.styles,T=v===void 0?{}:v;return od({type:"text",content:t},function(){return Ms("beforeDOMElementCreation",{content:t,params:a}),f_({content:t,transform:se(se({},Lr),u),extra:{attributes:g,styles:T,classes:["".concat(_e.cssPrefix,"-layers-text")].concat(gr(p))}})})}}},provides:function(e){e.generateLayersText=function(t,a){var o=a.transform,u=a.extra,c=null,p=null;if(Gb){var m=parseInt(getComputedStyle(t).fontSize,10),g=t.getBoundingClientRect();c=g.width/m,p=g.height/m}return Promise.resolve([t,f_({content:t.innerHTML,width:c,height:p,transform:o,extra:u,watchable:!0})])}}},z3=new RegExp('"',"ug"),v_=[1105920,1112319],__=se(se(se(se({},{FontAwesome:{normal:"fas",400:"fas"}}),zx),j5),Kx),Rg=Object.keys(__).reduce(function(n,e){return n[e.toLowerCase()]=__[e],n},{}),ZR=Object.keys(Rg).reduce(function(n,e){var t=Rg[e];return n[e]=t[900]||gr(Object.entries(t))[0][1],n},{});function JR(n){var e=n.replace(z3,"");return S3(gr(e)[0]||"")}function eC(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),t=n.getPropertyValue("content"),a=t.replace(z3,""),o=a.codePointAt(0),u=o>=v_[0]&&o<=v_[1],c=a.length===2?a[0]===a[1]:!1;return u||c||e}function tC(n,e){var t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),o=isNaN(a)?"normal":a;return(Rg[t]||{})[o]||ZR[t]}function b_(n,e){var t="".concat(z5).concat(e.replace(":","-"));return new Promise(function(a,o){if(n.getAttribute(t)!==null)return a();var u=cl(n.children),c=u.filter(function(he){return he.getAttribute(gg)===e})[0],p=Na.getComputedStyle(n,e),m=p.getPropertyValue("font-family"),g=m.match($5),v=p.getPropertyValue("font-weight"),T=p.getPropertyValue("content");if(c&&!g)return n.removeChild(c),a();if(g&&T!=="none"&&T!==""){var A=p.getPropertyValue("content"),C=tC(m,v),U=JR(A),$=g[0].startsWith("FontAwesome"),V=eC(p),X=E1(C,U),Y=X;if($){var W=fR(U);W.iconName&&W.prefix&&(X=W.iconName,C=W.prefix)}if(X&&!V&&(!c||c.getAttribute(m1)!==C||c.getAttribute(g1)!==Y)){n.setAttribute(t,Y),c&&n.removeChild(c);var fe=FR(),te=fe.extra;te.attributes[gg]=e,wg(X,C).then(function(he){var I=T1(se(se({},fe),{},{icons:{main:he,mask:O3()},prefix:C,iconName:Y,extra:te,watchable:!0})),x=ct.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(x,n.firstChild):n.appendChild(x),x.outerHTML=I.map(function(R){return cc(R)}).join(`
`),n.removeAttribute(t),a()}).catch(o)}else a()}else a()})}function nC(n){return Promise.all([b_(n,"::before"),b_(n,"::after")])}function rC(n){return n.parentNode!==document.head&&!~B5.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(gg)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var iC=function(e){return!!e&&p3.some(function(t){return e.includes(t)})},aC=function(e){if(!e)return[];var t=new Set,a=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(g){return g.trim()})});var o=ah(a),u;try{for(o.s();!(u=o.n()).done;){var c=u.value;if(iC(c)){var p=p3.reduce(function(m,g){return m.replace(g,"")},c);p!==""&&p!=="*"&&t.add(p)}}}catch(m){o.e(m)}finally{o.f()}return t};function E_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Mi){var t;if(e)t=n;else if(_e.searchPseudoElementsFullScan)t=n.querySelectorAll("*");else{var a=new Set,o=ah(document.styleSheets),u;try{for(o.s();!(u=o.n()).done;){var c=u.value;try{var p=ah(c.cssRules),m;try{for(p.s();!(m=p.n()).done;){var g=m.value,v=aC(g.selectorText),T=ah(v),A;try{for(T.s();!(A=T.n()).done;){var C=A.value;a.add(C)}}catch($){T.e($)}finally{T.f()}}}catch($){p.e($)}finally{p.f()}}catch($){_e.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(c.href," (").concat($.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch($){o.e($)}finally{o.f()}if(!a.size)return;var U=Array.from(a).join(", ");try{t=n.querySelectorAll(U)}catch{}}return new Promise(function($,V){var X=cl(t).filter(rC).map(nC),Y=S1.begin("searchPseudoElements");V3(),Promise.all(X).then(function(){Y(),xg(),$()}).catch(function(){Y(),xg(),V()})})}}var sC={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=E_,t}}},provides:function(e){e.pseudoElements2svg=function(t){var a=t.node,o=a===void 0?ct:a;_e.searchPseudoElements&&E_(o)}}},T_=!1,oC={mixout:function(){return{dom:{unwatch:function(){V3(),T_=!0}}}},hooks:function(){return{bootstrap:function(){m_(Eg("mutationObserverCallbacks",{}))},noAuto:function(){jR()},watch:function(t){var a=t.observeMutationsRoot;T_?xg():m_(Eg("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},S_=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,o){var u=o.toLowerCase().split("-"),c=u[0],p=u.slice(1).join("-");if(c&&p==="h")return a.flipX=!0,a;if(c&&p==="v")return a.flipY=!0,a;if(p=parseFloat(p),isNaN(p))return a;switch(c){case"grow":a.size=a.size+p;break;case"shrink":a.size=a.size-p;break;case"left":a.x=a.x-p;break;case"right":a.x=a.x+p;break;case"up":a.y=a.y-p;break;case"down":a.y=a.y+p;break;case"rotate":a.rotate=a.rotate+p;break}return a},t)},lC={mixout:function(){return{parse:{transform:function(t){return S_(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-transform");return o&&(t.transform=S_(o)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var a=t.main,o=t.transform,u=t.containerWidth,c=t.iconWidth,p={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),g="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),v="rotate(".concat(o.rotate," 0 0)"),T={transform:"".concat(m," ").concat(g," ").concat(v)},A={transform:"translate(".concat(c/2*-1," -256)")},C={outer:p,inner:T,path:A};return{tag:"g",attributes:se({},C.outer),children:[{tag:"g",attributes:se({},C.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:se(se({},a.icon.attributes),C.path)}]}]}}}},qm={x:0,y:0,width:"100%",height:"100%"};function w_(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function uC(n){return n.tag==="g"?n.children:[n]}var cC={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-mask"),u=o?sd(o.split(" ").map(function(c){return c.trim()})):O3();return u.prefix||(u.prefix=Da()),t.mask=u,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var a=t.children,o=t.attributes,u=t.main,c=t.mask,p=t.maskId,m=t.transform,g=u.width,v=u.icon,T=c.width,A=c.icon,C=tR({transform:m,containerWidth:T,iconWidth:g}),U={tag:"rect",attributes:se(se({},qm),{},{fill:"white"})},$=v.children?{children:v.children.map(w_)}:{},V={tag:"g",attributes:se({},C.inner),children:[w_(se({tag:v.tag,attributes:se(se({},v.attributes),C.path)},$))]},X={tag:"g",attributes:se({},C.outer),children:[V]},Y="mask-".concat(p||i_()),W="clip-".concat(p||i_()),fe={tag:"mask",attributes:se(se({},qm),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[U,X]},te={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:uC(A)},fe]};return a.push(te,{tag:"rect",attributes:se({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat(Y,")")},qm)}),{children:a,attributes:o}}}},fC={provides:function(e){var t=!1;Na.matchMedia&&(t=Na.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],o={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:se(se({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=se(se({},u),{},{attributeName:"opacity"}),p={tag:"circle",attributes:se(se({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||p.children.push({tag:"animate",attributes:se(se({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:se(se({},c),{},{values:"1;0;1;1;0;1;"})}),a.push(p),a.push({tag:"path",attributes:se(se({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:se(se({},c),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:se(se({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:se(se({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},hC={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-symbol"),u=o===null?!1:o===""?!0:o;return t.symbol=u,t}}}},dC=[iR,KR,QR,XR,WR,sC,oC,lC,cC,fC,hC];bR(dC,{mixoutsTo:Ln});Ln.noAuto;var pC=Ln.config;Ln.library;Ln.dom;var U3=Ln.parse;Ln.findIconDefinition;Ln.toHtml;var mC=Ln.icon;Ln.layer;Ln.text;Ln.counter;function gC(n){return n=n-0,n===n}function B3(n){return gC(n)?n:(n=n.replaceAll(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}function yC(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Po=new Map,vC=1e3;function _C(n){if(Po.has(n))return Po.get(n);const e={};let t=0;const a=n.length;for(;t<a;){const o=n.indexOf(";",t),u=o===-1?a:o,c=n.slice(t,u).trim();if(c){const p=c.indexOf(":");if(p>0){const m=c.slice(0,p).trim(),g=c.slice(p+1).trim();if(m&&g){const v=B3(m);e[v.startsWith("webkit")?yC(v):v]=g}}}t=u+1}if(Po.size===vC){const o=Po.keys().next().value;o&&Po.delete(o)}return Po.set(n,e),e}function F3(n,e,t={}){if(typeof e=="string")return e;const a=(e.children||[]).map(g=>F3(n,g)),o=e.attributes||{},u={};for(const[g,v]of Object.entries(o))switch(!0){case g==="class":{u.className=v,delete o.class;break}case g==="style":{u.style=_C(String(v));break}case g.startsWith("aria-"):case g.startsWith("data-"):{u[g.toLowerCase()]=v;break}default:u[B3(g)]=v}const{style:c,"aria-label":p,...m}=t;return c&&(u.style=u.style?{...u.style,...c}:c),p&&(u["aria-label"]=p,u["aria-hidden"]="false"),n(e.tag,{...m,...u},...a)}var A_=(n,e)=>{const t=Q.useId();return n||(e?t:void 0)},bC=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},EC="searchPseudoElementsFullScan"in pC?"7.0.0":"6.0.0",TC=Number.parseInt(EC)>=7,yi={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},SC={left:"fa-pull-left",right:"fa-pull-right"},wC={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},AC={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},vi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function xC(n){const{beat:e,fade:t,beatFade:a,bounce:o,shake:u,spin:c,spinPulse:p,spinReverse:m,pulse:g,fixedWidth:v,inverse:T,border:A,flip:C,size:U,rotation:$,pull:V,swapOpacity:X,rotateBy:Y,widthAuto:W,className:fe}=n,te=[];return fe&&te.push(...fe.split(" ")),e&&te.push(yi.beat),t&&te.push(yi.fade),a&&te.push(yi.beatFade),o&&te.push(yi.bounce),u&&te.push(yi.shake),c&&te.push(yi.spin),m&&te.push(yi.spinReverse),p&&te.push(yi.spinPulse),g&&te.push(yi.pulse),v&&te.push(vi.fixedWidth),T&&te.push(vi.inverse),A&&te.push(vi.border),C===!0&&te.push(vi.flip),(C==="horizontal"||C==="both")&&te.push(vi.flipHorizontal),(C==="vertical"||C==="both")&&te.push(vi.flipVertical),U!=null&&te.push(AC[U]),$!=null&&$!==0&&te.push(wC[$]),V!=null&&te.push(SC[V]),X&&te.push(vi.swapOpacity),TC&&(Y&&te.push(vi.rotateBy),W&&te.push(vi.widthAuto)),te}var RC=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function x_(n){if(n)return RC(n)?n:U3.icon(n)}function CC(n){return Object.keys(n)}var R_=new bC("FontAwesomeIcon"),H3={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},IC=new Set(Object.keys(H3)),je=Ds.forwardRef((n,e)=>{const t={...H3,...n},{icon:a,mask:o,symbol:u,title:c,titleId:p,maskId:m,transform:g}=t,v=A_(m,!!o),T=A_(p,!!c),A=x_(a);if(!A)return R_.error("Icon lookup is undefined",a),null;const C=xC(t),U=typeof g=="string"?U3.transform(g):g,$=x_(o),V=mC(A,{...C.length>0&&{classes:C},...U&&{transform:U},...$&&{mask:$},symbol:u,title:c,titleId:T,maskId:v});if(!V)return R_.error("Could not find icon",A),null;const{abstract:X}=V,Y={ref:e};for(const W of CC(t))IC.has(W)||(Y[W]=t[W]);return NC(X[0],Y)});je.displayName="FontAwesomeIcon";var NC=F3.bind(null,Ds.createElement);const DC=()=>{};var C_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=function(n){const e=[];let t=0;for(let a=0;a<n.length;a++){let o=n.charCodeAt(a);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++a)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OC=function(n){const e=[];let t=0,a=0;for(;t<n.length;){const o=n[t++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[t++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[t++],c=n[t++],p=n[t++],m=((o&7)<<18|(u&63)<<12|(c&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const u=n[t++],c=n[t++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|c&63)}}return e.join("")},q3={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<n.length;o+=3){const u=n[o],c=o+1<n.length,p=c?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,v=u>>2,T=(u&3)<<4|p>>4;let A=(p&15)<<2|g>>6,C=g&63;m||(C=64,c||(A=64)),a.push(t[v],t[T],t[A],t[C])}return a.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($3(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<n.length;){const u=t[n.charAt(o++)],p=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||T==null)throw new MC;const A=u<<2|p>>4;if(a.push(A),g!==64){const C=p<<4&240|g>>2;if(a.push(C),T!==64){const U=g<<6&192|T;a.push(U)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kC=function(n){const e=$3(n);return q3.encodeByteArray(e,!0)},Ih=function(n){return kC(n).replace(/\./g,"")},G3=function(n){try{return q3.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=()=>PC().__FIREBASE_DEFAULTS__,VC=()=>{if(typeof process>"u"||typeof C_>"u")return;const n=C_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&G3(n[1]);return e&&JSON.parse(e)},ld=()=>{try{return DC()||LC()||VC()||jC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Y3=n=>ld()?.emulatorHosts?.[n],zC=n=>{const e=Y3(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},K3=()=>ld()?.config,Q3=n=>ld()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X3(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ih(JSON.stringify(t)),Ih(JSON.stringify(c)),""].join(".")}const ju={};function FC(){const n={prod:[],emulator:[]};for(const e of Object.keys(ju))ju[e]?n.emulator.push(e):n.prod.push(e);return n}function HC(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let I_=!1;function W3(n,e){if(typeof window>"u"||typeof document>"u"||!fl(window.location.host)||ju[n]===e||ju[n]||I_)return;ju[n]=e;function t(A){return`__firebase__banner__${A}`}const a="__firebase__banner",u=FC().prod.length>0;function c(){const A=document.getElementById(a);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,C){A.setAttribute("width","24"),A.setAttribute("id",C),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{I_=!0,c()},A}function v(A,C){A.setAttribute("id",C),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=HC(a),C=t("text"),U=document.getElementById(C)||document.createElement("span"),$=t("learnmore"),V=document.getElementById($)||document.createElement("a"),X=t("preprendIcon"),Y=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const W=A.element;p(W),v(V,$);const fe=g();m(Y,X),W.append(Y,U,V,fe),document.body.appendChild(W)}u?(U.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $C(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function qC(){const n=ld()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function KC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QC(){const n=fn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XC(){return!qC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WC(){try{return typeof indexedDB=="object"}catch{return!1}}function ZC(){return new Promise((n,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(a),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="FirebaseError";class ki extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=JC,Object.setPrototypeOf(this,ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],c=u?e8(u,a):"Error",p=`${this.serviceName}: ${c} (${o}).`;return new ki(o,p,a)}}function e8(n,e){return n.replace(t8,(t,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const t8=/\{\$([^}]+)}/g;function n8(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ks(n,e){if(n===e)return!0;const t=Object.keys(n),a=Object.keys(e);for(const o of t){if(!a.includes(o))return!1;const u=n[o],c=e[o];if(N_(u)&&N_(c)){if(!ks(u,c))return!1}else if(u!==c)return!1}for(const o of a)if(!t.includes(o))return!1;return!0}function N_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n){const e=[];for(const[t,a]of Object.entries(n))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function r8(n,e){const t=new i8(n,e);return t.subscribe.bind(t)}class i8{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let o;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");a8(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:a},o.next===void 0&&(o.next=Gm),o.error===void 0&&(o.error=Gm),o.complete===void 0&&(o.complete=Gm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a8(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n){return n&&n._delegate?n._delegate:n}class Ps{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new UC;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l8(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[u,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);a===p&&c.resolve(o)}return o}onInit(e,t){const a=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const o of a)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:o8(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o8(n){return n===Ts?void 0:n}function l8(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u8{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s8(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const c8={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},f8=ze.INFO,h8={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},d8=(n,e,...t)=>{if(e<n.logLevel)return;const a=new Date().toISOString(),o=h8[e];if(o)console[o](`[${a}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class A1{constructor(e){this.name=e,this._logLevel=f8,this._logHandler=d8,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c8[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const p8=(n,e)=>e.some(t=>n instanceof t);let D_,O_;function m8(){return D_||(D_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g8(){return O_||(O_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z3=new WeakMap,Cg=new WeakMap,J3=new WeakMap,Ym=new WeakMap,x1=new WeakMap;function y8(n){const e=new Promise((t,a)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",c)},u=()=>{t(Aa(n.result)),o()},c=()=>{a(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Z3.set(t,n)}).catch(()=>{}),x1.set(e,n),e}function v8(n){if(Cg.has(n))return;const e=new Promise((t,a)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",c),n.removeEventListener("abort",c)},u=()=>{t(),o()},c=()=>{a(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",c),n.addEventListener("abort",c)});Cg.set(n,e)}let Ig={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||J3.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Aa(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _8(n){Ig=n(Ig)}function b8(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=n.call(Km(this),e,...t);return J3.set(a,e.sort?e.sort():[e]),Aa(a)}:g8().includes(n)?function(...e){return n.apply(Km(this),e),Aa(Z3.get(this))}:function(...e){return Aa(n.apply(Km(this),e))}}function E8(n){return typeof n=="function"?b8(n):(n instanceof IDBTransaction&&v8(n),p8(n,m8())?new Proxy(n,Ig):n)}function Aa(n){if(n instanceof IDBRequest)return y8(n);if(Ym.has(n))return Ym.get(n);const e=E8(n);return e!==n&&(Ym.set(n,e),x1.set(e,n)),e}const Km=n=>x1.get(n);function T8(n,e,{blocked:t,upgrade:a,blocking:o,terminated:u}={}){const c=indexedDB.open(n,e),p=Aa(c);return a&&c.addEventListener("upgradeneeded",m=>{a(Aa(c.result),m.oldVersion,m.newVersion,Aa(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const S8=["get","getKey","getAll","getAllKeys","count"],w8=["put","add","delete","clear"],Qm=new Map;function M_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qm.get(e))return Qm.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,o=w8.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(o||S8.includes(t)))return;const u=async function(c,...p){const m=this.transaction(c,o?"readwrite":"readonly");let g=m.store;return a&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return Qm.set(e,u),u}_8(n=>({...n,get:(e,t,a)=>M_(e,t)||n.get(e,t,a),has:(e,t)=>!!M_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A8{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(x8(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function x8(n){return n.getComponent()?.type==="VERSION"}const Ng="@firebase/app",k_="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new A1("@firebase/app"),R8="@firebase/app-compat",C8="@firebase/analytics-compat",I8="@firebase/analytics",N8="@firebase/app-check-compat",D8="@firebase/app-check",O8="@firebase/auth",M8="@firebase/auth-compat",k8="@firebase/database",P8="@firebase/data-connect",L8="@firebase/database-compat",V8="@firebase/functions",j8="@firebase/functions-compat",z8="@firebase/installations",U8="@firebase/installations-compat",B8="@firebase/messaging",F8="@firebase/messaging-compat",H8="@firebase/performance",$8="@firebase/performance-compat",q8="@firebase/remote-config",G8="@firebase/remote-config-compat",Y8="@firebase/storage",K8="@firebase/storage-compat",Q8="@firebase/firestore",X8="@firebase/ai",W8="@firebase/firestore-compat",Z8="firebase",J8="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="[DEFAULT]",eI={[Ng]:"fire-core",[R8]:"fire-core-compat",[I8]:"fire-analytics",[C8]:"fire-analytics-compat",[D8]:"fire-app-check",[N8]:"fire-app-check-compat",[O8]:"fire-auth",[M8]:"fire-auth-compat",[k8]:"fire-rtdb",[P8]:"fire-data-connect",[L8]:"fire-rtdb-compat",[V8]:"fire-fn",[j8]:"fire-fn-compat",[z8]:"fire-iid",[U8]:"fire-iid-compat",[B8]:"fire-fcm",[F8]:"fire-fcm-compat",[H8]:"fire-perf",[$8]:"fire-perf-compat",[q8]:"fire-rc",[G8]:"fire-rc-compat",[Y8]:"fire-gcs",[K8]:"fire-gcs-compat",[Q8]:"fire-fst",[W8]:"fire-fst-compat",[X8]:"fire-vertex","fire-js":"fire-js",[Z8]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new Map,tI=new Map,Og=new Map;function P_(n,e){try{n.container.addComponent(e)}catch(t){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qo(n){const e=n.name;if(Og.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Og.set(e,n);for(const t of Nh.values())P_(t,n);for(const t of tI.values())P_(t,n);return!0}function R1(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function cr(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xa=new fc("app","Firebase",nI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,a){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=J8;function eE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const a={name:Dg,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw xa.create("bad-app-name",{appName:String(o)});if(t||(t=K3()),!t)throw xa.create("no-options");const u=Nh.get(o);if(u){if(ks(t,u.options)&&ks(a,u.config))return u;throw xa.create("duplicate-app",{appName:o})}const c=new u8(o);for(const m of Og.values())c.addComponent(m);const p=new rI(t,a,c);return Nh.set(o,p),p}function tE(n=Dg){const e=Nh.get(n);if(!e&&n===Dg&&K3())return eE();if(!e)throw xa.create("no-app",{appName:n});return e}function Ra(n,e,t){let a=eI[n]??n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const c=[`Unable to register library "${a}" with version "${e}":`];o&&c.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(c.join(" "));return}Qo(new Ps(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="firebase-heartbeat-database",aI=1,Ku="firebase-heartbeat-store";let Xm=null;function nE(){return Xm||(Xm=T8(iI,aI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ku)}catch(t){console.warn(t)}}}}).catch(n=>{throw xa.create("idb-open",{originalErrorMessage:n.message})})),Xm}async function sI(n){try{const t=(await nE()).transaction(Ku),a=await t.objectStore(Ku).get(rE(n));return await t.done,a}catch(e){if(e instanceof ki)Ci.warn(e.message);else{const t=xa.create("idb-get",{originalErrorMessage:e?.message});Ci.warn(t.message)}}}async function L_(n,e){try{const a=(await nE()).transaction(Ku,"readwrite");await a.objectStore(Ku).put(e,rE(n)),await a.done}catch(t){if(t instanceof ki)Ci.warn(t.message);else{const a=xa.create("idb-set",{originalErrorMessage:t?.message});Ci.warn(a.message)}}}function rE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=1024,lI=30;class uI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fI(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=V_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats.length>lI){const o=hI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ci.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=V_(),{heartbeatsToSend:t,unsentEntries:a}=cI(this._heartbeatsCache.heartbeats),o=Ih(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ci.warn(e),""}}}function V_(){return new Date().toISOString().substring(0,10)}function cI(n,e=oI){const t=[];let a=n.slice();for(const o of n){const u=t.find(c=>c.agent===o.agent);if(u){if(u.dates.push(o.date),j_(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),j_(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class fI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WC()?ZC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return L_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return L_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function j_(n){return Ih(JSON.stringify({version:2,heartbeats:n})).length}function hI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let a=1;a<n.length;a++)n[a].date<t&&(t=n[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n){Qo(new Ps("platform-logger",e=>new A8(e),"PRIVATE")),Qo(new Ps("heartbeat",e=>new uI(e),"PRIVATE")),Ra(Ng,k_,n),Ra(Ng,k_,"esm2020"),Ra("fire-js","")}dI("");var pI="firebase",mI="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra(pI,mI,"app");function iE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=iE,aE=new fc("auth","Firebase",iE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new A1("@firebase/auth");function yI(n,...e){Dh.logLevel<=ze.WARN&&Dh.warn(`Auth (${hl}): ${n}`,...e)}function lh(n,...e){Dh.logLevel<=ze.ERROR&&Dh.error(`Auth (${hl}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,...e){throw I1(n,...e)}function pr(n,...e){return I1(n,...e)}function C1(n,e,t){const a={...gI(),[e]:t};return new fc("auth","Firebase",a).create(e,{appName:n.name})}function Rs(n){return C1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vI(n,e,t){const a=t;if(!(e instanceof a))throw a.name!==e.constructor.name&&Hr(n,"argument-error"),C1(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I1(n,...e){if(typeof n!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=n.name),n._errorFactory.create(t,...a)}return aE.create(n,...e)}function xe(n,e,...t){if(!n)throw I1(e,...t)}function Ei(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lh(e),new Error(e)}function Ii(n,e){n||Ei(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){return typeof self<"u"&&self.location?.href||""}function _I(){return z_()==="http:"||z_()==="https:"}function z_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_I()||YC()||"connection"in navigator)?navigator.onLine:!0}function EI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ii(t>e,"Short delay should be less than long delay!"),this.isMobile=$C()||KC()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n,e){Ii(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sE=class{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ei("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ei("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ei("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wI=new dc(3e4,6e4);function D1(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dl(n,e,t,a,o={}){return oE(n,o,async()=>{let u={},c={};a&&(e==="GET"?c=a:u={body:JSON.stringify(a)});const p=hc({key:n.config.apiKey,...c}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:m,...u};return GC()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&fl(n.emulatorConfig.host)&&(g.credentials="include"),sE.fetch()(await lE(n,n.config.apiHost,t,p),g)})}async function oE(n,e,t){n._canInitEmulator=!1;const a={...TI,...e};try{const o=new xI(n),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw qf(n,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const p=u.ok?c.errorMessage:c.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw qf(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw qf(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw qf(n,"user-disabled",c);const v=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw C1(n,v,g);Hr(n,v)}}catch(o){if(o instanceof ki)throw o;Hr(n,"network-request-failed",{message:String(o)})}}async function AI(n,e,t,a,o={}){const u=await dl(n,e,t,a,o);return"mfaPendingCredential"in u&&Hr(n,"multi-factor-auth-required",{_serverResponse:u}),u}async function lE(n,e,t,a){const o=`${e}${t}?${a}`,u=n,c=u.config.emulator?N1(n.config,o):`${n.config.apiScheme}://${o}`;return SI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(c).toString():c}class xI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(pr(this.auth,"network-request-failed")),wI.get())})}}function qf(n,e,t){const a={appName:n.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const o=pr(n,e,a);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(n,e){return dl(n,"POST","/v1/accounts:delete",e)}async function Oh(n,e){return dl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CI(n,e=!1){const t=Wn(n),a=await t.getIdToken(e),o=O1(a);xe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,c=u?.sign_in_provider;return{claims:o,token:a,authTime:zu(Wm(o.auth_time)),issuedAtTime:zu(Wm(o.iat)),expirationTime:zu(Wm(o.exp)),signInProvider:c||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Wm(n){return Number(n)*1e3}function O1(n){const[e,t,a]=n.split(".");if(e===void 0||t===void 0||a===void 0)return lh("JWT malformed, contained fewer than 3 sections"),null;try{const o=G3(t);return o?JSON.parse(o):(lh("Failed to decode base64 JWT payload"),null)}catch(o){return lh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function U_(n){const e=O1(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(n,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof ki&&II(a)&&n.auth.currentUser===n&&await n.auth.signOut(),a}}function II({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zu(this.lastLoginAt),this.creationTime=zu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(n){const e=n.auth,t=await n.getIdToken(),a=await Qu(n,Oh(e,{idToken:t}));xe(a?.users.length,e,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=o.providerUserInfo?.length?uE(o.providerUserInfo):[],c=OI(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!c?.length,g=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new kg(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function DI(n){const e=Wn(n);await Mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OI(n,e){return[...n.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function uE(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(n,e){const t=await oE(n,{},async()=>{const a=hc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=n.config,c=await lE(n,o,"/v1/token",`key=${u}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:a};return n.emulatorConfig&&fl(n.emulatorConfig.host)&&(m.credentials="include"),sE.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kI(n,e){return dl(n,"POST","/v2/accounts:revokeToken",D1(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):U_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=U_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:o,expiresIn:u}=await MI(e,t);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:o,expirationTime:u}=t,c=new $o;return a&&(xe(typeof a=="string","internal-error",{appName:e}),c.refreshToken=a),o&&(xe(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),u&&(xe(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return Ei("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hr{constructor({uid:e,auth:t,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new NI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new kg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qu(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CI(this,e)}reload(){return DI(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await Mh(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(Rs(this.auth));const e=await this.getIdToken();return await Qu(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const a=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:C,providerData:U,stsTokenManager:$}=t;xe(T&&$,e,"internal-error");const V=$o.fromJSON(this.name,$);xe(typeof T=="string",e,"internal-error"),va(a,e.name),va(o,e.name),xe(typeof A=="boolean",e,"internal-error"),xe(typeof C=="boolean",e,"internal-error"),va(u,e.name),va(c,e.name),va(p,e.name),va(m,e.name),va(g,e.name),va(v,e.name);const X=new hr({uid:T,auth:e,email:o,emailVerified:A,displayName:a,isAnonymous:C,photoURL:c,phoneNumber:u,tenantId:p,stsTokenManager:V,createdAt:g,lastLoginAt:v});return U&&Array.isArray(U)&&(X.providerData=U.map(Y=>({...Y}))),m&&(X._redirectEventId=m),X}static async _fromIdTokenResponse(e,t,a=!1){const o=new $o;o.updateFromServerResponse(t);const u=new hr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Mh(u),u}static async _fromGetAccountInfoResponse(e,t,a){const o=t.users[0];xe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?uE(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!u?.length,p=new $o;p.updateFromIdToken(a);const m=new hr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new kg(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Map;function Ti(n){Ii(n instanceof Function,"Expected a class definition");let e=B_.get(n);return e?(Ii(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,B_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cE.type="NONE";const F_=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n,e,t){return`firebase:${n}:${e}:${t}`}class qo{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=uh(this.userKey,o.apiKey,u),this.fullPersistenceKey=uh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oh(this.auth,{idToken:e}).catch(()=>{});return t?hr._fromGetAccountInfoResponse(this.auth,t,e):null}return hr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new qo(Ti(F_),e,a);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Ti(F_);const c=uh(a,e.config.apiKey,e.name);let p=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const A=await Oh(e,{idToken:v}).catch(()=>{});if(!A)break;T=await hr._fromGetAccountInfoResponse(e,A,v)}else T=hr._fromJSON(e,v);g!==u&&(p=T),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new qo(u,e,a):(u=m[0],p&&await u._set(c,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(c)}catch{}})),new qo(u,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gE(e))return"Blackberry";if(yE(e))return"Webos";if(hE(e))return"Safari";if((e.includes("chrome/")||dE(e))&&!e.includes("edge/"))return"Chrome";if(mE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=n.match(t);if(a?.length===2)return a[1]}return"Other"}function fE(n=fn()){return/firefox\//i.test(n)}function hE(n=fn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dE(n=fn()){return/crios\//i.test(n)}function pE(n=fn()){return/iemobile/i.test(n)}function mE(n=fn()){return/android/i.test(n)}function gE(n=fn()){return/blackberry/i.test(n)}function yE(n=fn()){return/webos/i.test(n)}function M1(n=fn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function PI(n=fn()){return M1(n)&&!!window.navigator?.standalone}function LI(){return QC()&&document.documentMode===10}function vE(n=fn()){return M1(n)||mE(n)||yE(n)||gE(n)||/windows phone/i.test(n)||pE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n,e=[]){let t;switch(n){case"Browser":t=H_(fn());break;case"Worker":t=`${H_(fn())}-${n}`;break;default:t=n}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hl}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=u=>new Promise((c,p)=>{try{const m=e(u);c(m)}catch(m){p(m)}});a.onAbort=t,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(n,e={}){return dl(n,"GET","/v2/passwordPolicy",D1(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=6;class UI{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??zI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,a,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $_(this),this.idTokenSubscription=new $_(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ti(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oh(this,{idToken:e}),a=await hr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let a=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,c=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===c)&&p?.user&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(Rs(this));const t=e?Wn(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(Rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(Rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ti(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jI(this),t=new UI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await kI(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ti(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[Ti(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(p,this,"internal-error"),p.then(()=>{c||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,a,o);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(cr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&yI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ud(n){return Wn(n)}class $_{constructor(e){this.auth=e,this.observer=null,this.addObserver=r8(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k1={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(n){k1=n}function HI(n){return k1.loadJS(n)}function $I(){return k1.gapiScript}function qI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n,e){const t=R1(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ks(u,e??{}))return o;Hr(o,"already-initialized")}return t.initialize({options:e})}function YI(n,e){const t=e?.persistence||[],a=(Array.isArray(t)?t:[t]).map(Ti);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(a,e?.popupRedirectResolver)}function KI(n,e,t){const a=ud(n);xe(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,u=bE(e),{host:c,port:p}=QI(e),m=p===null?"":`:${p}`,g={url:`${u}//${c}${m}/`},v=Object.freeze({host:c,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){xe(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),xe(ks(g,a.config.emulator)&&ks(v,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=v,a.settings.appVerificationDisabledForTesting=!0,fl(c)?(X3(`${u}//${c}${m}`),W3("Auth",!0)):XI()}function bE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QI(n){const e=bE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:q_(a.substr(u.length+1))}}else{const[u,c]=a.split(":");return{host:u,port:q_(c)}}}function q_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function XI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ei("not implemented")}_getIdTokenResponse(e){return Ei("not implemented")}_linkToIdToken(e,t){return Ei("not implemented")}_getReauthenticationResolver(e){return Ei("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(n,e){return AI(n,"POST","/v1/accounts:signInWithIdp",D1(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="http://localhost";class Ls extends EE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...u}=t;if(!a||!o)return null;const c=new Ls(a,o);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Go(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,Go(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Go(e,t)}buildRequest(){const e={requestUri:WI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hc(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends P1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends pc{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:Ea.PROVIDER_ID,signInMethod:Ea.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ea.credentialFromTaggedObject(e)}static credentialFromError(e){return Ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ea.credential(e.oauthAccessToken)}catch{return null}}}Ea.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ea.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ls._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return bi.credential(t,a)}catch{return null}}}bi.GOOGLE_SIGN_IN_METHOD="google.com";bi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends pc{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:Ta.PROVIDER_ID,signInMethod:Ta.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ta.credentialFromTaggedObject(e)}static credentialFromError(e){return Ta.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ta.credential(e.oauthAccessToken)}catch{return null}}}Ta.GITHUB_SIGN_IN_METHOD="github.com";Ta.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends pc{constructor(){super("twitter.com")}static credential(e,t){return Ls._fromParams({providerId:Sa.PROVIDER_ID,signInMethod:Sa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sa.credentialFromTaggedObject(e)}static credentialFromError(e){return Sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Sa.credential(t,a)}catch{return null}}}Sa.TWITTER_SIGN_IN_METHOD="twitter.com";Sa.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,o=!1){const u=await hr._fromIdTokenResponse(e,a,o),c=G_(a);return new Xo({user:u,providerId:c,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const o=G_(a);return new Xo({user:e,providerId:o,_tokenResponse:a,operationType:t})}}function G_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends ki{constructor(e,t,a,o){super(t.code,t.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,kh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,o){return new kh(e,t,a,o)}}function TE(n,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?kh._fromErrorAndOperation(n,u,e,a):u})}async function ZI(n,e,t=!1){const a=await Qu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xo._forOperation(n,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e,t=!1){const{auth:a}=n;if(cr(a.app))return Promise.reject(Rs(a));const o="reauthenticate";try{const u=await Qu(n,TE(a,o,e,n),t);xe(u.idToken,a,"internal-error");const c=O1(u.idToken);xe(c,a,"internal-error");const{sub:p}=c;return xe(n.uid===p,a,"user-mismatch"),Xo._forOperation(n,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Hr(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e7(n,e,t=!1){if(cr(n.app))return Promise.reject(Rs(n));const a="signIn",o=await TE(n,a,e),u=await Xo._fromIdTokenResponse(n,a,o);return t||await n._updateCurrentUser(u.user),u}function t7(n,e,t,a){return Wn(n).onIdTokenChanged(e,t,a)}function n7(n,e,t){return Wn(n).beforeAuthStateChanged(e,t)}function r7(n,e,t,a){return Wn(n).onAuthStateChanged(e,t,a)}function i7(n){return Wn(n).signOut()}const Ph="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ph,"1"),this.storage.removeItem(Ph),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a7=1e3,s7=10;class wE extends SE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),o=this.localCache[t];a!==o&&e(t,o,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,m)=>{this.notifyListeners(c,m)});return}const a=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(a);!t&&this.localCache[a]===c||this.notifyListeners(a,c)},u=this.storage.getItem(a);LI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,s7):o()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},a7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const o7=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends SE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}AE.type="SESSION";const xE=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l7(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const a=new cd(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:o,data:u}=t.data,c=this.handlersMap[o];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const p=Array.from(c).map(async g=>g(t.origin,u)),m=await l7(p);t.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u7{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,c;return new Promise((p,m)=>{const g=L1("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},a);c={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(A.data.response);break;default:clearTimeout(v),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}function c7(n){Vr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof Vr().WorkerGlobalScope<"u"&&typeof Vr().importScripts=="function"}async function f7(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h7(){return navigator?.serviceWorker?.controller||null}function d7(){return RE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",p7=1,Lh="firebaseLocalStorage",IE="fbase_key";class mc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fd(n,e){return n.transaction([Lh],e?"readwrite":"readonly").objectStore(Lh)}function m7(){const n=indexedDB.deleteDatabase(CE);return new mc(n).toPromise()}function Pg(){const n=indexedDB.open(CE,p7);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const a=n.result;try{a.createObjectStore(Lh,{keyPath:IE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const a=n.result;a.objectStoreNames.contains(Lh)?e(a):(a.close(),await m7(),e(await Pg()))})})}async function Y_(n,e,t){const a=fd(n,!0).put({[IE]:e,value:t});return new mc(a).toPromise()}async function g7(n,e){const t=fd(n,!1).get(e),a=await new mc(t).toPromise();return a===void 0?null:a.value}function K_(n,e){const t=fd(n,!0).delete(e);return new mc(t).toPromise()}const y7=800,v7=3;class NE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>v7)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cd._getInstance(d7()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await f7(),!this.activeServiceWorker)return;this.sender=new u7(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pg();return await Y_(e,Ph,"1"),await K_(e,Ph),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>Y_(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>g7(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>K_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=fd(o,!1).getAll();return new mc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NE.type="LOCAL";const _7=NE;new dc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){return e?Ti(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends EE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function b7(n){return e7(n.auth,new V1(n),n.bypassAuthState)}function E7(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),JI(t,new V1(n),n.bypassAuthState)}async function T7(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),ZI(t,new V1(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:o,tenantId:u,error:c,type:p}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b7;case"linkViaPopup":case"linkViaRedirect":return T7;case"reauthViaPopup":case"reauthViaRedirect":return E7;default:Hr(this.auth,"internal-error")}}resolve(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S7=new dc(2e3,1e4);async function w7(n,e,t){if(cr(n.app))return Promise.reject(pr(n,"operation-not-supported-in-this-environment"));const a=ud(n);vI(n,e,P1);const o=DE(a,t);return new ws(a,"signInViaPopup",e,o).executeNotNull()}class ws extends OE{constructor(e,t,a,o,u){super(e,t,o,u),this.provider=a,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){Ii(this.filter.length===1,"Popup operations only handle one event");const e=L1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S7.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A7="pendingRedirect",ch=new Map;class x7 extends OE{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const a=await R7(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R7(n,e){const t=N7(e),a=I7(n);if(!await a._isAvailable())return!1;const o=await a._get(t)==="true";return await a._remove(t),o}function C7(n,e){ch.set(n._key(),e)}function I7(n){return Ti(n._redirectPersistence)}function N7(n){return uh(A7,n.config.apiKey,n.name)}async function D7(n,e,t=!1){if(cr(n.app))return Promise.reject(Rs(n));const a=ud(n),o=DE(a,e),c=await new x7(a,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await a._persistUserIfCurrent(c.user),await a._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O7=600*1e3;class M7{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k7(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ME(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";t.onError(pr(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O7&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q_(e))}saveEventToCache(e){this.cachedEventUids.add(Q_(e)),this.lastProcessedEventTime=Date.now()}}function Q_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ME({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function k7(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ME(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P7(n,e={}){return dl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V7=/^https?/;async function j7(n){if(n.config.emulator)return;const{authorizedDomains:e}=await P7(n);for(const t of e)try{if(z7(t))return}catch{}Hr(n,"unauthorized-domain")}function z7(n){const e=Mg(),{protocol:t,hostname:a}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&a===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===a}if(!V7.test(t))return!1;if(L7.test(n))return a===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U7=new dc(3e4,6e4);function X_(){const n=Vr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function B7(n){return new Promise((e,t)=>{function a(){X_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X_(),t(pr(n,"network-request-failed"))},timeout:U7.get()})}if(Vr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Vr().gapi?.load)a();else{const o=qI("iframefcb");return Vr()[o]=()=>{gapi.load?a():t(pr(n,"network-request-failed"))},HI(`${$I()}?onload=${o}`).catch(u=>t(u))}}).catch(e=>{throw fh=null,e})}let fh=null;function F7(n){return fh=fh||B7(n),fh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H7=new dc(5e3,15e3),$7="__/auth/iframe",q7="emulator/auth/iframe",G7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K7(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?N1(e,q7):`https://${n.config.authDomain}/${$7}`,a={apiKey:e.apiKey,appName:n.name,v:hl},o=Y7.get(n.config.apiHost);o&&(a.eid=o);const u=n._getFrameworks();return u.length&&(a.fw=u.join(",")),`${t}?${hc(a).slice(1)}`}async function Q7(n){const e=await F7(n),t=Vr().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:K7(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G7,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const c=pr(n,"network-request-failed"),p=Vr().setTimeout(()=>{u(c)},H7.get());function m(){Vr().clearTimeout(p),o(a)}a.ping(m).then(m,()=>{u(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W7=500,Z7=600,J7="_blank",e9="http://localhost";class W_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t9(n,e,t,a=W7,o=Z7){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const m={...X7,width:a.toString(),height:o.toString(),top:u,left:c},g=fn().toLowerCase();t&&(p=dE(g)?J7:t),fE(g)&&(e=e||e9,m.scrollbars="yes");const v=Object.entries(m).reduce((A,[C,U])=>`${A}${C}=${U},`,"");if(PI(g)&&p!=="_self")return n9(e||"",p),new W_(null);const T=window.open(e||"",p,v);xe(T,n,"popup-blocked");try{T.focus()}catch{}return new W_(T)}function n9(n,e){const t=document.createElement("a");t.href=n,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r9="__/auth/handler",i9="emulator/auth/handler",a9=encodeURIComponent("fac");async function Z_(n,e,t,a,o,u){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:a,v:hl,eventId:o};if(e instanceof P1){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",n8(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof pc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const m=await n._getAppCheckToken(),g=m?`#${a9}=${encodeURIComponent(m)}`:"";return`${s9(n)}?${hc(p).slice(1)}${g}`}function s9({config:n}){return n.emulator?N1(n,i9):`https://${n.authDomain}/${r9}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="webStorageSupport";class o9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xE,this._completeRedirectFn=D7,this._overrideRedirectResult=C7}async _openPopup(e,t,a,o){Ii(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Z_(e,t,a,Mg(),o);return t9(e,u,L1())}async _openRedirect(e,t,a,o){await this._originValidation(e);const u=await Z_(e,t,a,Mg(),o);return c7(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ii(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await Q7(e),a=new M7(e);return t.register("authEvent",o=>(xe(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zm,{type:Zm},o=>{const u=o?.[0]?.[Zm];u!==void 0&&t(!!u),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=j7(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vE()||hE()||M1()}}const l9=o9;var J_="@firebase/auth",e4="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c9(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f9(n){Qo(new Ps("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=a.options;xe(c&&!c.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_E(n)},g=new BI(a,o,u,m);return YI(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),Qo(new Ps("auth-internal",e=>{const t=ud(e.getProvider("auth").getImmediate());return(a=>new u9(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ra(J_,e4,c9(n)),Ra(J_,e4,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h9=300,d9=Q3("authIdTokenMaxAge")||h9;let t4=null;const p9=n=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>d9)return;const o=t?.token;t4!==o&&(t4=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function m9(n=tE()){const e=R1(n,"auth");if(e.isInitialized())return e.getImmediate();const t=GI(n,{popupRedirectResolver:l9,persistence:[_7,o7,xE]}),a=Q3("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const c=p9(u.toString());n7(t,c,()=>c(t.currentUser)),t7(t,p=>c(p))}}const o=Y3("auth");return o&&KI(t,`http://${o}`),t}function g9(){return document.getElementsByTagName("head")?.[0]??document}FI({loadJS(n){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",n),a.onload=e,a.onerror=o=>{const u=pr("internal-error");u.customData=o,t(u)},a.type="text/javascript",a.charset="UTF-8",g9().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f9("Browser");var n4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ca,kE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,x){function R(){}R.prototype=x.prototype,I.F=x.prototype,I.prototype=new R,I.prototype.constructor=I,I.D=function(P,M,j){for(var D=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)D[ft-2]=arguments[ft];return x.prototype[M].apply(P,D)}}function t(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(a,t),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,x,R){R||(R=0);const P=Array(16);if(typeof x=="string")for(var M=0;M<16;++M)P[M]=x.charCodeAt(R++)|x.charCodeAt(R++)<<8|x.charCodeAt(R++)<<16|x.charCodeAt(R++)<<24;else for(M=0;M<16;++M)P[M]=x[R++]|x[R++]<<8|x[R++]<<16|x[R++]<<24;x=I.g[0],R=I.g[1],M=I.g[2];let j=I.g[3],D;D=x+(j^R&(M^j))+P[0]+3614090360&4294967295,x=R+(D<<7&4294967295|D>>>25),D=j+(M^x&(R^M))+P[1]+3905402710&4294967295,j=x+(D<<12&4294967295|D>>>20),D=M+(R^j&(x^R))+P[2]+606105819&4294967295,M=j+(D<<17&4294967295|D>>>15),D=R+(x^M&(j^x))+P[3]+3250441966&4294967295,R=M+(D<<22&4294967295|D>>>10),D=x+(j^R&(M^j))+P[4]+4118548399&4294967295,x=R+(D<<7&4294967295|D>>>25),D=j+(M^x&(R^M))+P[5]+1200080426&4294967295,j=x+(D<<12&4294967295|D>>>20),D=M+(R^j&(x^R))+P[6]+2821735955&4294967295,M=j+(D<<17&4294967295|D>>>15),D=R+(x^M&(j^x))+P[7]+4249261313&4294967295,R=M+(D<<22&4294967295|D>>>10),D=x+(j^R&(M^j))+P[8]+1770035416&4294967295,x=R+(D<<7&4294967295|D>>>25),D=j+(M^x&(R^M))+P[9]+2336552879&4294967295,j=x+(D<<12&4294967295|D>>>20),D=M+(R^j&(x^R))+P[10]+4294925233&4294967295,M=j+(D<<17&4294967295|D>>>15),D=R+(x^M&(j^x))+P[11]+2304563134&4294967295,R=M+(D<<22&4294967295|D>>>10),D=x+(j^R&(M^j))+P[12]+1804603682&4294967295,x=R+(D<<7&4294967295|D>>>25),D=j+(M^x&(R^M))+P[13]+4254626195&4294967295,j=x+(D<<12&4294967295|D>>>20),D=M+(R^j&(x^R))+P[14]+2792965006&4294967295,M=j+(D<<17&4294967295|D>>>15),D=R+(x^M&(j^x))+P[15]+1236535329&4294967295,R=M+(D<<22&4294967295|D>>>10),D=x+(M^j&(R^M))+P[1]+4129170786&4294967295,x=R+(D<<5&4294967295|D>>>27),D=j+(R^M&(x^R))+P[6]+3225465664&4294967295,j=x+(D<<9&4294967295|D>>>23),D=M+(x^R&(j^x))+P[11]+643717713&4294967295,M=j+(D<<14&4294967295|D>>>18),D=R+(j^x&(M^j))+P[0]+3921069994&4294967295,R=M+(D<<20&4294967295|D>>>12),D=x+(M^j&(R^M))+P[5]+3593408605&4294967295,x=R+(D<<5&4294967295|D>>>27),D=j+(R^M&(x^R))+P[10]+38016083&4294967295,j=x+(D<<9&4294967295|D>>>23),D=M+(x^R&(j^x))+P[15]+3634488961&4294967295,M=j+(D<<14&4294967295|D>>>18),D=R+(j^x&(M^j))+P[4]+3889429448&4294967295,R=M+(D<<20&4294967295|D>>>12),D=x+(M^j&(R^M))+P[9]+568446438&4294967295,x=R+(D<<5&4294967295|D>>>27),D=j+(R^M&(x^R))+P[14]+3275163606&4294967295,j=x+(D<<9&4294967295|D>>>23),D=M+(x^R&(j^x))+P[3]+4107603335&4294967295,M=j+(D<<14&4294967295|D>>>18),D=R+(j^x&(M^j))+P[8]+1163531501&4294967295,R=M+(D<<20&4294967295|D>>>12),D=x+(M^j&(R^M))+P[13]+2850285829&4294967295,x=R+(D<<5&4294967295|D>>>27),D=j+(R^M&(x^R))+P[2]+4243563512&4294967295,j=x+(D<<9&4294967295|D>>>23),D=M+(x^R&(j^x))+P[7]+1735328473&4294967295,M=j+(D<<14&4294967295|D>>>18),D=R+(j^x&(M^j))+P[12]+2368359562&4294967295,R=M+(D<<20&4294967295|D>>>12),D=x+(R^M^j)+P[5]+4294588738&4294967295,x=R+(D<<4&4294967295|D>>>28),D=j+(x^R^M)+P[8]+2272392833&4294967295,j=x+(D<<11&4294967295|D>>>21),D=M+(j^x^R)+P[11]+1839030562&4294967295,M=j+(D<<16&4294967295|D>>>16),D=R+(M^j^x)+P[14]+4259657740&4294967295,R=M+(D<<23&4294967295|D>>>9),D=x+(R^M^j)+P[1]+2763975236&4294967295,x=R+(D<<4&4294967295|D>>>28),D=j+(x^R^M)+P[4]+1272893353&4294967295,j=x+(D<<11&4294967295|D>>>21),D=M+(j^x^R)+P[7]+4139469664&4294967295,M=j+(D<<16&4294967295|D>>>16),D=R+(M^j^x)+P[10]+3200236656&4294967295,R=M+(D<<23&4294967295|D>>>9),D=x+(R^M^j)+P[13]+681279174&4294967295,x=R+(D<<4&4294967295|D>>>28),D=j+(x^R^M)+P[0]+3936430074&4294967295,j=x+(D<<11&4294967295|D>>>21),D=M+(j^x^R)+P[3]+3572445317&4294967295,M=j+(D<<16&4294967295|D>>>16),D=R+(M^j^x)+P[6]+76029189&4294967295,R=M+(D<<23&4294967295|D>>>9),D=x+(R^M^j)+P[9]+3654602809&4294967295,x=R+(D<<4&4294967295|D>>>28),D=j+(x^R^M)+P[12]+3873151461&4294967295,j=x+(D<<11&4294967295|D>>>21),D=M+(j^x^R)+P[15]+530742520&4294967295,M=j+(D<<16&4294967295|D>>>16),D=R+(M^j^x)+P[2]+3299628645&4294967295,R=M+(D<<23&4294967295|D>>>9),D=x+(M^(R|~j))+P[0]+4096336452&4294967295,x=R+(D<<6&4294967295|D>>>26),D=j+(R^(x|~M))+P[7]+1126891415&4294967295,j=x+(D<<10&4294967295|D>>>22),D=M+(x^(j|~R))+P[14]+2878612391&4294967295,M=j+(D<<15&4294967295|D>>>17),D=R+(j^(M|~x))+P[5]+4237533241&4294967295,R=M+(D<<21&4294967295|D>>>11),D=x+(M^(R|~j))+P[12]+1700485571&4294967295,x=R+(D<<6&4294967295|D>>>26),D=j+(R^(x|~M))+P[3]+2399980690&4294967295,j=x+(D<<10&4294967295|D>>>22),D=M+(x^(j|~R))+P[10]+4293915773&4294967295,M=j+(D<<15&4294967295|D>>>17),D=R+(j^(M|~x))+P[1]+2240044497&4294967295,R=M+(D<<21&4294967295|D>>>11),D=x+(M^(R|~j))+P[8]+1873313359&4294967295,x=R+(D<<6&4294967295|D>>>26),D=j+(R^(x|~M))+P[15]+4264355552&4294967295,j=x+(D<<10&4294967295|D>>>22),D=M+(x^(j|~R))+P[6]+2734768916&4294967295,M=j+(D<<15&4294967295|D>>>17),D=R+(j^(M|~x))+P[13]+1309151649&4294967295,R=M+(D<<21&4294967295|D>>>11),D=x+(M^(R|~j))+P[4]+4149444226&4294967295,x=R+(D<<6&4294967295|D>>>26),D=j+(R^(x|~M))+P[11]+3174756917&4294967295,j=x+(D<<10&4294967295|D>>>22),D=M+(x^(j|~R))+P[2]+718787259&4294967295,M=j+(D<<15&4294967295|D>>>17),D=R+(j^(M|~x))+P[9]+3951481745&4294967295,I.g[0]=I.g[0]+x&4294967295,I.g[1]=I.g[1]+(M+(D<<21&4294967295|D>>>11))&4294967295,I.g[2]=I.g[2]+M&4294967295,I.g[3]=I.g[3]+j&4294967295}a.prototype.v=function(I,x){x===void 0&&(x=I.length);const R=x-this.blockSize,P=this.C;let M=this.h,j=0;for(;j<x;){if(M==0)for(;j<=R;)o(this,I,j),j+=this.blockSize;if(typeof I=="string"){for(;j<x;)if(P[M++]=I.charCodeAt(j++),M==this.blockSize){o(this,P),M=0;break}}else for(;j<x;)if(P[M++]=I[j++],M==this.blockSize){o(this,P),M=0;break}}this.h=M,this.o+=x},a.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var x=1;x<I.length-8;++x)I[x]=0;x=this.o*8;for(var R=I.length-8;R<I.length;++R)I[R]=x&255,x/=256;for(this.v(I),I=Array(16),x=0,R=0;R<4;++R)for(let P=0;P<32;P+=8)I[x++]=this.g[R]>>>P&255;return I};function u(I,x){var R=p;return Object.prototype.hasOwnProperty.call(R,I)?R[I]:R[I]=x(I)}function c(I,x){this.h=x;const R=[];let P=!0;for(let M=I.length-1;M>=0;M--){const j=I[M]|0;P&&j==x||(R[M]=j,P=!1)}this.g=R}var p={};function m(I){return-128<=I&&I<128?u(I,function(x){return new c([x|0],x<0?-1:0)}):new c([I|0],I<0?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return V(g(-I));const x=[];let R=1;for(let P=0;I>=R;P++)x[P]=I/R|0,R*=4294967296;return new c(x,0)}function v(I,x){if(I.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(I.charAt(0)=="-")return V(v(I.substring(1),x));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=g(Math.pow(x,8));let P=T;for(let j=0;j<I.length;j+=8){var M=Math.min(8,I.length-j);const D=parseInt(I.substring(j,j+M),x);M<8?(M=g(Math.pow(x,M)),P=P.j(M).add(g(D))):(P=P.j(R),P=P.add(g(D)))}return P}var T=m(0),A=m(1),C=m(16777216);n=c.prototype,n.m=function(){if($(this))return-V(this).m();let I=0,x=1;for(let R=0;R<this.g.length;R++){const P=this.i(R);I+=(P>=0?P:4294967296+P)*x,x*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(U(this))return"0";if($(this))return"-"+V(this).toString(I);const x=g(Math.pow(I,6));var R=this;let P="";for(;;){const M=fe(R,x).g;R=X(R,M.j(x));let j=((R.g.length>0?R.g[0]:R.h)>>>0).toString(I);if(R=M,U(R))return j+P;for(;j.length<6;)j="0"+j;P=j+P}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function U(I){if(I.h!=0)return!1;for(let x=0;x<I.g.length;x++)if(I.g[x]!=0)return!1;return!0}function $(I){return I.h==-1}n.l=function(I){return I=X(this,I),$(I)?-1:U(I)?0:1};function V(I){const x=I.g.length,R=[];for(let P=0;P<x;P++)R[P]=~I.g[P];return new c(R,~I.h).add(A)}n.abs=function(){return $(this)?V(this):this},n.add=function(I){const x=Math.max(this.g.length,I.g.length),R=[];let P=0;for(let M=0;M<=x;M++){let j=P+(this.i(M)&65535)+(I.i(M)&65535),D=(j>>>16)+(this.i(M)>>>16)+(I.i(M)>>>16);P=D>>>16,j&=65535,D&=65535,R[M]=D<<16|j}return new c(R,R[R.length-1]&-2147483648?-1:0)};function X(I,x){return I.add(V(x))}n.j=function(I){if(U(this)||U(I))return T;if($(this))return $(I)?V(this).j(V(I)):V(V(this).j(I));if($(I))return V(this.j(V(I)));if(this.l(C)<0&&I.l(C)<0)return g(this.m()*I.m());const x=this.g.length+I.g.length,R=[];for(var P=0;P<2*x;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(let M=0;M<I.g.length;M++){const j=this.i(P)>>>16,D=this.i(P)&65535,ft=I.i(M)>>>16,it=I.i(M)&65535;R[2*P+2*M]+=D*it,Y(R,2*P+2*M),R[2*P+2*M+1]+=j*it,Y(R,2*P+2*M+1),R[2*P+2*M+1]+=D*ft,Y(R,2*P+2*M+1),R[2*P+2*M+2]+=j*ft,Y(R,2*P+2*M+2)}for(I=0;I<x;I++)R[I]=R[2*I+1]<<16|R[2*I];for(I=x;I<2*x;I++)R[I]=0;return new c(R,0)};function Y(I,x){for(;(I[x]&65535)!=I[x];)I[x+1]+=I[x]>>>16,I[x]&=65535,x++}function W(I,x){this.g=I,this.h=x}function fe(I,x){if(U(x))throw Error("division by zero");if(U(I))return new W(T,T);if($(I))return x=fe(V(I),x),new W(V(x.g),V(x.h));if($(x))return x=fe(I,V(x)),new W(V(x.g),x.h);if(I.g.length>30){if($(I)||$(x))throw Error("slowDivide_ only works with positive integers.");for(var R=A,P=x;P.l(I)<=0;)R=te(R),P=te(P);var M=he(R,1),j=he(P,1);for(P=he(P,2),R=he(R,2);!U(P);){var D=j.add(P);D.l(I)<=0&&(M=M.add(R),j=D),P=he(P,1),R=he(R,1)}return x=X(I,M.j(x)),new W(M,x)}for(M=T;I.l(x)>=0;){for(R=Math.max(1,Math.floor(I.m()/x.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),j=g(R),D=j.j(x);$(D)||D.l(I)>0;)R-=P,j=g(R),D=j.j(x);U(j)&&(j=A),M=M.add(j),I=X(I,D)}return new W(M,I)}n.B=function(I){return fe(this,I).h},n.and=function(I){const x=Math.max(this.g.length,I.g.length),R=[];for(let P=0;P<x;P++)R[P]=this.i(P)&I.i(P);return new c(R,this.h&I.h)},n.or=function(I){const x=Math.max(this.g.length,I.g.length),R=[];for(let P=0;P<x;P++)R[P]=this.i(P)|I.i(P);return new c(R,this.h|I.h)},n.xor=function(I){const x=Math.max(this.g.length,I.g.length),R=[];for(let P=0;P<x;P++)R[P]=this.i(P)^I.i(P);return new c(R,this.h^I.h)};function te(I){const x=I.g.length+1,R=[];for(let P=0;P<x;P++)R[P]=I.i(P)<<1|I.i(P-1)>>>31;return new c(R,I.h)}function he(I,x){const R=x>>5;x%=32;const P=I.g.length-R,M=[];for(let j=0;j<P;j++)M[j]=x>0?I.i(j+R)>>>x|I.i(j+R+1)<<32-x:I.i(j+R);return new c(M,I.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,kE=a,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ca=c}).apply(typeof n4<"u"?n4:typeof self<"u"?self:typeof window<"u"?window:{});var Gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PE,Du,LE,hh,Lg,VE,jE,zE;(function(){var n,e=Object.defineProperty;function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gf=="object"&&Gf];for(var y=0;y<f.length;++y){var _=f[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var a=t(this);function o(f,y){if(y)e:{var _=a;f=f.split(".");for(var w=0;w<f.length-1;w++){var F=f[w];if(!(F in _))break e;_=_[F]}f=f[f.length-1],w=_[f],y=y(w),y!=w&&y!=null&&e(_,f,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(f){return f||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(f){return f||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(f){return f||function(y){var _=[],w;for(w in y)Object.prototype.hasOwnProperty.call(y,w)&&_.push([w,y[w]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function p(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function m(f,y,_){return f.call.apply(f.bind,arguments)}function g(f,y,_){return g=m,g.apply(null,arguments)}function v(f,y){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),f.apply(this,w)}}function T(f,y){function _(){}_.prototype=y.prototype,f.Z=y.prototype,f.prototype=new _,f.prototype.constructor=f,f.Ob=function(w,F,K){for(var oe=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)oe[Ce-2]=arguments[Ce];return y.prototype[F].apply(w,oe)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?f=>f&&AsyncContext.Snapshot.wrap(f):f=>f;function C(f){const y=f.length;if(y>0){const _=Array(y);for(let w=0;w<y;w++)_[w]=f[w];return _}return[]}function U(f,y){for(let w=1;w<arguments.length;w++){const F=arguments[w];var _=typeof F;if(_=_!="object"?_:F?Array.isArray(F)?"array":_:"null",_=="array"||_=="object"&&typeof F.length=="number"){_=f.length||0;const K=F.length||0;f.length=_+K;for(let oe=0;oe<K;oe++)f[_+oe]=F[oe]}else f.push(F)}}class ${constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function V(f){c.setTimeout(()=>{throw f},0)}function X(){var f=I;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class Y{constructor(){this.h=this.g=null}add(y,_){const w=W.get();w.set(y,_),this.h?this.h.next=w:this.g=w,this.h=w}}var W=new $(()=>new fe,f=>f.reset());class fe{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let te,he=!1,I=new Y,x=()=>{const f=Promise.resolve(void 0);te=()=>{f.then(R)}};function R(){for(var f;f=X();){try{f.h.call(f.g)}catch(_){V(_)}var y=W;y.j(f),y.h<100&&(y.h++,f.next=y.g,y.g=f)}he=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var j=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const _=()=>{};c.addEventListener("test",_,y),c.removeEventListener("test",_,y)}catch{}return f})();function D(f){return/^[\s\xa0]*$/.test(f)}function ft(f,y){M.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f&&this.init(f,y)}T(ft,M),ft.prototype.init=function(f,y){const _=this.type=f.type,w=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget,y||(_=="mouseover"?y=f.fromElement:_=="mouseout"&&(y=f.toElement)),this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=f.pointerType,this.state=f.state,this.i=f,f.defaultPrevented&&ft.Z.h.call(this)},ft.prototype.h=function(){ft.Z.h.call(this);const f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var it="closure_listenable_"+(Math.random()*1e6|0),Z=0;function ce(f,y,_,w,F){this.listener=f,this.proxy=null,this.src=y,this.type=_,this.capture=!!w,this.ha=F,this.key=++Z,this.da=this.fa=!1}function ge(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Ne(f,y,_){for(const w in f)y.call(_,f[w],w,f)}function O(f,y){for(const _ in f)y.call(void 0,f[_],_,f)}function re(f){const y={};for(const _ in f)y[_]=f[_];return y}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(f,y){let _,w;for(let F=1;F<arguments.length;F++){w=arguments[F];for(_ in w)f[_]=w[_];for(let K=0;K<le.length;K++)_=le[K],Object.prototype.hasOwnProperty.call(w,_)&&(f[_]=w[_])}}function me(f){this.src=f,this.g={},this.h=0}me.prototype.add=function(f,y,_,w,F){const K=f.toString();f=this.g[K],f||(f=this.g[K]=[],this.h++);const oe=be(f,y,w,F);return oe>-1?(y=f[oe],_||(y.fa=!1)):(y=new ce(y,this.src,K,!!w,F),y.fa=_,f.push(y)),y};function De(f,y){const _=y.type;if(_ in f.g){var w=f.g[_],F=Array.prototype.indexOf.call(w,y,void 0),K;(K=F>=0)&&Array.prototype.splice.call(w,F,1),K&&(ge(y),f.g[_].length==0&&(delete f.g[_],f.h--))}}function be(f,y,_,w){for(let F=0;F<f.length;++F){const K=f[F];if(!K.da&&K.listener==y&&K.capture==!!_&&K.ha==w)return F}return-1}var vt="closure_lm_"+(Math.random()*1e6|0),He={};function Mt(f,y,_,w,F){if(Array.isArray(y)){for(let K=0;K<y.length;K++)Mt(f,y[K],_,w,F);return null}return _=Tc(_),f&&f[it]?f.J(y,_,p(w)?!!w.capture:!1,F):Qr(f,y,_,!1,w,F)}function Qr(f,y,_,w,F,K){if(!y)throw Error("Invalid event type");const oe=p(F)?!!F.capture:!!F;let Ce=_l(f);if(Ce||(f[vt]=Ce=new me(f)),_=Ce.add(y,_,w,oe,K),_.proxy)return _;if(w=Jn(),_.proxy=w,w.src=f,w.listener=_,f.addEventListener)j||(F=oe),F===void 0&&(F=!1),f.addEventListener(y.toString(),w,F);else if(f.attachEvent)f.attachEvent($s(y.toString()),w);else if(f.addListener&&f.removeListener)f.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Jn(){function f(_){return y.call(f.src,f.listener,_)}const y=Od;return f}function hn(f,y,_,w,F){if(Array.isArray(y))for(var K=0;K<y.length;K++)hn(f,y[K],_,w,F);else w=p(w)?!!w.capture:!!w,_=Tc(_),f&&f[it]?(f=f.i,K=String(y).toString(),K in f.g&&(y=f.g[K],_=be(y,_,w,F),_>-1&&(ge(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete f.g[K],f.h--)))):f&&(f=_l(f))&&(y=f.g[y.toString()],f=-1,y&&(f=be(y,_,w,F)),(_=f>-1?y[f]:null)&&za(_))}function za(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[it])De(y.i,f);else{var _=f.type,w=f.proxy;y.removeEventListener?y.removeEventListener(_,w,f.capture):y.detachEvent?y.detachEvent($s(_),w):y.addListener&&y.removeListener&&y.removeListener(w),(_=_l(y))?(De(_,f),_.h==0&&(_.src=null,y[vt]=null)):ge(f)}}}function $s(f){return f in He?He[f]:He[f]="on"+f}function Od(f,y){if(f.da)f=!0;else{y=new ft(y,this);const _=f.listener,w=f.ha||f.src;f.fa&&za(f),f=_.call(w,y)}return f}function _l(f){return f=f[vt],f instanceof me?f:null}var vn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Tc(f){return typeof f=="function"?f:(f[vn]||(f[vn]=function(y){return f.handleEvent(y)}),f[vn])}function kt(){P.call(this),this.i=new me(this),this.M=this,this.G=null}T(kt,P),kt.prototype[it]=!0,kt.prototype.removeEventListener=function(f,y,_,w){hn(this,f,y,_,w)};function Ut(f,y){var _,w=f.G;if(w)for(_=[];w;w=w.G)_.push(w);if(f=f.M,w=y.type||y,typeof y=="string")y=new M(y,f);else if(y instanceof M)y.target=y.target||f;else{var F=y;y=new M(w,f),ue(y,F)}F=!0;let K,oe;if(_)for(oe=_.length-1;oe>=0;oe--)K=y.g=_[oe],F=Xr(K,w,!0,y)&&F;if(K=y.g=f,F=Xr(K,w,!0,y)&&F,F=Xr(K,w,!1,y)&&F,_)for(oe=0;oe<_.length;oe++)K=y.g=_[oe],F=Xr(K,w,!1,y)&&F}kt.prototype.N=function(){if(kt.Z.N.call(this),this.i){var f=this.i;for(const y in f.g){const _=f.g[y];for(let w=0;w<_.length;w++)ge(_[w]);delete f.g[y],f.h--}}this.G=null},kt.prototype.J=function(f,y,_,w){return this.i.add(String(f),y,!1,_,w)},kt.prototype.K=function(f,y,_,w){return this.i.add(String(f),y,!0,_,w)};function Xr(f,y,_,w){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();let F=!0;for(let K=0;K<y.length;++K){const oe=y[K];if(oe&&!oe.da&&oe.capture==_){const Ce=oe.listener,ot=oe.ha||oe.src;oe.fa&&De(f.i,oe),F=Ce.call(ot,w)!==!1&&F}}return F&&!w.defaultPrevented}function Md(f,y){if(typeof f!="function")if(f&&typeof f.handleEvent=="function")f=g(f.handleEvent,f);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:c.setTimeout(f,y||0)}function bl(f){f.g=Md(()=>{f.g=null,f.i&&(f.i=!1,bl(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class kd extends P{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:bl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ua(f){P.call(this),this.h=f,this.g={}}T(Ua,P);var Pi=[];function rn(f){Ne(f.g,function(y,_){this.g.hasOwnProperty(_)&&za(y)},f),f.g={}}Ua.prototype.N=function(){Ua.Z.N.call(this),rn(this)},Ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vn=c.JSON.stringify,dn=c.JSON.parse,Pd=class{stringify(f){return c.JSON.stringify(f,void 0)}parse(f){return c.JSON.parse(f,void 0)}};function Sc(){}function wc(){}var yr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Li(){M.call(this,"d")}T(Li,M);function er(){M.call(this,"c")}T(er,M);var jn={},Vi=null;function qs(){return Vi=Vi||new kt}jn.Ia="serverreachability";function El(f){M.call(this,jn.Ia,f)}T(El,M);function ji(f){const y=qs();Ut(y,new El(y))}jn.STAT_EVENT="statevent";function Gs(f,y){M.call(this,jn.STAT_EVENT,f),this.stat=y}T(Gs,M);function Et(f){const y=qs();Ut(y,new Gs(y,f))}jn.Ja="timingevent";function Ac(f,y){M.call(this,jn.Ja,f),this.size=y}T(Ac,M);function zi(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){f()},y)}function Ui(){this.g=!0}Ui.prototype.ua=function(){this.g=!1};function Tl(f,y,_,w,F,K){f.info(function(){if(f.g)if(K){var oe="",Ce=K.split("&");for(let Xe=0;Xe<Ce.length;Xe++){var ot=Ce[Xe].split("=");if(ot.length>1){const wt=ot[0];ot=ot[1];const xn=wt.split("_");oe=xn.length>=2&&xn[1]=="type"?oe+(wt+"="+ot+"&"):oe+(wt+"=redacted&")}}}else oe=null;else oe=K;return"XMLHTTP REQ ("+w+") [attempt "+F+"]: "+y+`
`+_+`
`+oe})}function Sl(f,y,_,w,F,K,oe){f.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+F+"]: "+y+`
`+_+`
`+K+" "+oe})}function Wr(f,y,_,w){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+vr(f,_)+(w?" "+w:"")})}function Ld(f,y){f.info(function(){return"TIMEOUT: "+y})}Ui.prototype.info=function(){};function vr(f,y){if(!f.g)return y;if(!y)return null;try{const K=JSON.parse(y);if(K){for(f=0;f<K.length;f++)if(Array.isArray(K[f])){var _=K[f];if(!(_.length<2)){var w=_[1];if(Array.isArray(w)&&!(w.length<1)){var F=w[0];if(F!="noop"&&F!="stop"&&F!="close")for(let oe=1;oe<w.length;oe++)w[oe]=""}}}}return Vn(K)}catch{return y}}var Tt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zr;function Ba(){}T(Ba,Sc),Ba.prototype.g=function(){return new XMLHttpRequest},Zr=new Ba;function Fa(f){return encodeURIComponent(String(f))}function Vd(f){var y=1;f=f.split(":");const _=[];for(;y>0&&f.length;)_.push(f.shift()),y--;return f.length&&_.push(f.join(":")),_}function tr(f,y,_,w){this.j=f,this.i=y,this.l=_,this.S=w||1,this.V=new Ua(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var Ys={},_r={};function br(f,y,_){f.M=1,f.A=ei(dt(y)),f.u=_,f.R=!0,Fi(f,null)}function Fi(f,y){f.F=Date.now(),Ha(f),f.B=dt(f.A);var _=f.B,w=f.S;Array.isArray(w)||(w=[String(w)]),Ic(_.i,"t",w),f.C=0,_=f.j.L,f.h=new Bi,f.g=ro(f.j,_?y:null,!f.u),f.P>0&&(f.O=new kd(g(f.Y,f,f.g),f.P)),y=f.V,_=f.g,w=f.ba;var F="readystatechange";Array.isArray(F)||(F&&(Pi[0]=F.toString()),F=Pi);for(let K=0;K<F.length;K++){const oe=Mt(_,F[K],w||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=f.J?re(f.J):{},f.u?(f.v||(f.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.B,f.v,f.u,y)):(f.v="GET",f.g.ea(f.B,f.v,null,y)),ji(),Tl(f.i,f.v,f.B,f.l,f.S,f.u)}tr.prototype.ba=function(f){f=f.target;const y=this.O;y&&an(f)==3?y.j():this.Y(f)},tr.prototype.Y=function(f){try{if(f==this.g)e:{const Ce=an(this.g),ot=this.g.ya(),Xe=this.g.ca();if(!(Ce<3)&&(Ce!=3||this.g&&(this.h.h||this.g.la()||es(this.g)))){this.K||Ce!=4||ot==7||(ot==8||Xe<=0?ji(3):ji(2)),Tr(this);var y=this.g.ca();this.X=y;var _=Hi(this);if(this.o=y==200,Sl(this.i,this.v,this.B,this.l,this.S,Ce,y),this.o){if(this.U&&!this.L){t:{if(this.g){var w,F=this.g;if((w=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(w)){var K=w;break t}}K=null}if(f=K)Wr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ks(this,f);else{this.o=!1,this.m=3,Et(12),Sr(this),$a(this);break e}}if(this.R){f=!0;let wt;for(;!this.K&&this.C<_.length;)if(wt=xc(this,_),wt==_r){Ce==4&&(this.m=4,Et(14),f=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Ys){this.m=4,Et(15),Wr(this.i,this.l,_,"[Invalid Chunk]"),f=!1;break}else Wr(this.i,this.l,wt,null),Ks(this,wt);if(St(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||_.length!=0||this.h.h||(this.m=1,Et(16),f=!1),this.o=this.o&&f,!f)Wr(this.i,this.l,_,"[Invalid Chunked Response]"),Sr(this),$a(this);else if(_.length>0&&!this.W){this.W=!0;var oe=this.j;oe.g==this&&oe.aa&&!oe.P&&(oe.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ml(oe),oe.P=!0,Et(11))}}else Wr(this.i,this.l,_,null),Ks(this,_);Ce==4&&Sr(this),this.o&&!this.K&&(Ce==4?kl(this.j,this):(this.o=!1,Ha(this)))}else ts(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),Sr(this),$a(this)}}}catch{}finally{}};function Hi(f){if(!St(f))return f.g.la();const y=es(f.g);if(y==="")return"";let _="";const w=y.length,F=an(f.g)==4;if(!f.h.i){if(typeof TextDecoder>"u")return Sr(f),$a(f),"";f.h.i=new c.TextDecoder}for(let K=0;K<w;K++)f.h.h=!0,_+=f.h.i.decode(y[K],{stream:!(F&&K==w-1)});return y.length=0,f.h.g+=_,f.C=0,f.h.g}function St(f){return f.g?f.v=="GET"&&f.M!=2&&f.j.Aa:!1}function xc(f,y){var _=f.C,w=y.indexOf(`
`,_);return w==-1?_r:(_=Number(y.substring(_,w)),isNaN(_)?Ys:(w+=1,w+_>y.length?_r:(y=y.slice(w,w+_),f.C=w+_,y)))}tr.prototype.cancel=function(){this.K=!0,Sr(this)};function Ha(f){f.T=Date.now()+f.H,Er(f,f.H)}function Er(f,y){if(f.D!=null)throw Error("WatchDog timer not null");f.D=zi(g(f.aa,f),y)}function Tr(f){f.D&&(c.clearTimeout(f.D),f.D=null)}tr.prototype.aa=function(){this.D=null;const f=Date.now();f-this.T>=0?(Ld(this.i,this.B),this.M!=2&&(ji(),Et(17)),Sr(this),this.m=2,$a(this)):Er(this,this.T-f)};function $a(f){f.j.I==0||f.K||kl(f.j,f)}function Sr(f){Tr(f);var y=f.O;y&&typeof y.dispose=="function"&&y.dispose(),f.O=null,rn(f.V),f.g&&(y=f.g,f.g=null,y.abort(),y.dispose())}function Ks(f,y){try{var _=f.j;if(_.I!=0&&(_.g==f||Ya(_.h,f))){if(!f.L&&Ya(_.h,f)&&_.I==3){try{var w=_.Ba.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var F=w;if(F[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<f.F)no(_),wr(_);else break e;Ol(_),Et(18)}}else _.xa=F[1],0<_.xa-_.K&&F[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=zi(g(_.Va,_),6e3));zn(_.h)<=1&&_.ta&&(_.ta=void 0)}else ri(_,11)}else if((f.L||_.g==f)&&no(_),!D(y))for(F=_.Ba.g.parse(y),y=0;y<F.length;y++){let Xe=F[y];const wt=Xe[0];if(!(wt<=_.K))if(_.K=wt,Xe=Xe[1],_.I==2)if(Xe[0]=="c"){_.M=Xe[1],_.ba=Xe[2];const xn=Xe[3];xn!=null&&(_.ka=xn,_.j.info("VER="+_.ka));const Ar=Xe[4];Ar!=null&&(_.za=Ar,_.j.info("SVER="+_.za));const ir=Xe[5];ir!=null&&typeof ir=="number"&&ir>0&&(w=1.5*ir,_.O=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const ar=f.g;if(ar){const sr=ar.g?ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sr){var K=w.h;K.g||sr.indexOf("spdy")==-1&&sr.indexOf("quic")==-1&&sr.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Qs(K,K.h),K.h=null))}if(w.G){const Ll=ar.g?ar.g.getResponseHeader("X-HTTP-Session-Id"):null;Ll&&(w.wa=Ll,Je(w.J,w.G,Ll))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-f.F,_.j.info("Handshake RTT: "+_.T+"ms")),w=_;var oe=f;if(w.na=jc(w,w.L?w.ba:null,w.W),oe.L){Jr(w.h,oe);var Ce=oe,ot=w.O;ot&&(Ce.H=ot),Ce.D&&(Tr(Ce),Ha(Ce)),w.g=oe}else kc(w);_.i.length>0&&as(_)}else Xe[0]!="stop"&&Xe[0]!="close"||ri(_,7);else _.I==3&&(Xe[0]=="stop"||Xe[0]=="close"?Xe[0]=="stop"?ri(_,7):rs(_):Xe[0]!="noop"&&_.l&&_.l.qa(Xe),_.A=0)}}ji(4)}catch{}}var jd=class{constructor(f,y){this.g=f,this.map=y}};function qa(f){this.l=f||10,c.PerformanceNavigationTiming?(f=c.performance.getEntriesByType("navigation"),f=f.length>0&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ga(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function zn(f){return f.h?1:f.g?f.g.size:0}function Ya(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function Qs(f,y){f.g?f.g.add(y):f.h=y}function Jr(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}qa.prototype.cancel=function(){if(this.i=Xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Xs(f){if(f.h!=null)return f.i.concat(f.h.G);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const _ of f.g.values())y=y.concat(_.G);return y}return C(f.i)}var Ws=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zd(f,y){if(f){f=f.split("&");for(let _=0;_<f.length;_++){const w=f[_].indexOf("=");let F,K=null;w>=0?(F=f[_].substring(0,w),K=f[_].substring(w+1)):F=f[_],y(F,K?decodeURIComponent(K.replace(/\+/g," ")):"")}}}function nr(f){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;f instanceof nr?(this.l=f.l,$i(this,f.j),this.o=f.o,this.g=f.g,Ka(this,f.u),this.h=f.h,qi(this,Nc(f.i)),this.m=f.m):f&&(y=String(f).match(Ws))?(this.l=!1,$i(this,y[1]||"",!0),this.o=Qa(y[2]||""),this.g=Qa(y[3]||"",!0),Ka(this,y[4]),this.h=Qa(y[5]||"",!0),qi(this,y[6]||"",!0),this.m=Qa(y[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}nr.prototype.toString=function(){const f=[];var y=this.j;y&&f.push(Bt(y,Al,!0),":");var _=this.g;return(_||y=="file")&&(f.push("//"),(y=this.o)&&f.push(Bt(y,Al,!0),"@"),f.push(Fa(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&f.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&f.push("/"),f.push(Bt(_,_.charAt(0)=="/"?Gi:xl,!0))),(_=this.i.toString())&&f.push("?",_),(_=this.m)&&f.push("#",Bt(_,Cc)),f.join("")},nr.prototype.resolve=function(f){const y=dt(this);let _=!!f.j;_?$i(y,f.j):_=!!f.o,_?y.o=f.o:_=!!f.g,_?y.g=f.g:_=f.u!=null;var w=f.h;if(_)Ka(y,f.u);else if(_=!!f.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var F=y.h.lastIndexOf("/");F!=-1&&(w=y.h.slice(0,F+1)+w)}if(F=w,F==".."||F==".")w="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){w=F.lastIndexOf("/",0)==0,F=F.split("/");const K=[];for(let oe=0;oe<F.length;){const Ce=F[oe++];Ce=="."?w&&oe==F.length&&K.push(""):Ce==".."?((K.length>1||K.length==1&&K[0]!="")&&K.pop(),w&&oe==F.length&&K.push("")):(K.push(Ce),w=!0)}w=K.join("/")}else w=F}return _?y.h=w:_=f.i.toString()!=="",_?qi(y,Nc(f.i)):_=!!f.m,_&&(y.m=f.m),y};function dt(f){return new nr(f)}function $i(f,y,_){f.j=_?Qa(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function Ka(f,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);f.u=y}else f.u=null}function qi(f,y,_){y instanceof Un?(f.i=y,Il(f.i,f.l)):(_||(y=Bt(y,Rc)),f.i=new Un(y,f.l))}function Je(f,y,_){f.i.set(y,_)}function ei(f){return Je(f,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),f}function Qa(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Bt(f,y,_){return typeof f=="string"?(f=encodeURI(f).replace(y,wl),_&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function wl(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Al=/[#\/\?@]/g,xl=/[#\?:]/g,Gi=/[#\?]/g,Rc=/[#\?@]/g,Cc=/#/g;function Un(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function ti(f){f.g||(f.g=new Map,f.h=0,f.i&&zd(f.i,function(y,_){f.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Un.prototype,n.add=function(f,y){ti(this),this.i=null,f=rr(this,f);let _=this.g.get(f);return _||this.g.set(f,_=[]),_.push(y),this.h+=1,this};function Rl(f,y){ti(f),y=rr(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function Cl(f,y){return ti(f),y=rr(f,y),f.g.has(y)}n.forEach=function(f,y){ti(this),this.g.forEach(function(_,w){_.forEach(function(F){f.call(y,F,w,this)},this)},this)};function Zs(f,y){ti(f);let _=[];if(typeof y=="string")Cl(f,y)&&(_=_.concat(f.g.get(rr(f,y))));else for(f=Array.from(f.g.values()),y=0;y<f.length;y++)_=_.concat(f[y]);return _}n.set=function(f,y){return ti(this),this.i=null,f=rr(this,f),Cl(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},n.get=function(f,y){return f?(f=Zs(this,f),f.length>0?String(f[0]):y):y};function Ic(f,y,_){Rl(f,y),_.length>0&&(f.i=null,f.g.set(rr(f,y),C(_)),f.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(let w=0;w<y.length;w++){var _=y[w];const F=Fa(_);_=Zs(this,_);for(let K=0;K<_.length;K++){let oe=F;_[K]!==""&&(oe+="="+Fa(_[K])),f.push(oe)}}return this.i=f.join("&")};function Nc(f){const y=new Un;return y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),y}function rr(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function Il(f,y){y&&!f.j&&(ti(f),f.i=null,f.g.forEach(function(_,w){const F=w.toLowerCase();w!=F&&(Rl(this,w),Ic(this,F,_))},f)),f.j=y}function Nl(f,y){const _=new Ui;if(c.Image){const w=new Image;w.onload=v(pn,_,"TestLoadImage: loaded",!0,y,w),w.onerror=v(pn,_,"TestLoadImage: error",!1,y,w),w.onabort=v(pn,_,"TestLoadImage: abort",!1,y,w),w.ontimeout=v(pn,_,"TestLoadImage: timeout",!1,y,w),c.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=f}else y(!1)}function Yi(f,y){const _=new Ui,w=new AbortController,F=setTimeout(()=>{w.abort(),pn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:w.signal}).then(K=>{clearTimeout(F),K.ok?pn(_,"TestPingServer: ok",!0,y):pn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),pn(_,"TestPingServer: error",!1,y)})}function pn(f,y,_,w,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),w(_)}catch{}}function Dc(){this.g=new Pd}function Xa(f){this.i=f.Sb||null,this.h=f.ab||!1}T(Xa,Sc),Xa.prototype.g=function(){return new Wa(this.i,this.h)};function Wa(f,y){kt.call(this),this.H=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Wa,kt),n=Wa.prototype,n.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=f,this.D=y,this.readyState=1,ni(this)},n.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};f&&(y.body=f),(this.H||c).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=0},n.Pa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ki(this)}else f.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ki(f){f.j.read().then(f.Ma.bind(f)).catch(f.ga.bind(f))}n.Ma=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?mn(this):ni(this),this.readyState==3&&Ki(this)}},n.Oa=function(f){this.g&&(this.response=this.responseText=f,mn(this))},n.Na=function(f){this.g&&(this.response=f,mn(this))},n.ga=function(){this.g&&mn(this)};function mn(f){f.readyState=4,f.l=null,f.j=null,f.B=null,ni(f)}n.setRequestHeader=function(f,y){this.A.append(f,y)},n.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,f.push(_[0]+": "+_[1]),_=y.next();return f.join(`\r
`)};function ni(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function Qi(f){let y="";return Ne(f,function(_,w){y+=w,y+=":",y+=_,y+=`\r
`}),y}function Bn(f,y,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Qi(_),typeof f=="string"?_!=null&&Fa(_):Je(f,y,_))}function at(f){kt.call(this),this.headers=new Map,this.L=f||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(at,kt);var Js=/^https?$/i,Oc=["POST","PUT"];n=at.prototype,n.Fa=function(f){this.H=f},n.ea=function(f,y,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zr.g(),this.g.onreadystatechange=A(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch(K){Za(this,K);return}if(f=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var F in w)_.set(F,w[F]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const K of w.keys())_.set(K,w.get(K));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),F=c.FormData&&f instanceof c.FormData,!(Array.prototype.indexOf.call(Oc,y,void 0)>=0)||w||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of _)this.g.setRequestHeader(K,oe);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(f),this.v=!1}catch(K){Za(this,K)}};function Za(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.o=5,Ja(f),Pt(f)}function Ja(f){f.A||(f.A=!0,Ut(f,"complete"),Ut(f,"error"))}n.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=f||7,Ut(this,"complete"),Ut(this,"abort"),Pt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pt(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Dl(this):this.Xa())},n.Xa=function(){Dl(this)};function Dl(f){if(f.h&&typeof u<"u"){if(f.v&&an(f)==4)setTimeout(f.Ca.bind(f),0);else if(Ut(f,"readystatechange"),an(f)==4){f.h=!1;try{const K=f.ca();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var w;if(w=K===0){let oe=String(f.D).match(Ws)[1]||null;!oe&&c.self&&c.self.location&&(oe=c.self.location.protocol.slice(0,-1)),w=!Js.test(oe?oe.toLowerCase():"")}_=w}if(_)Ut(f,"complete"),Ut(f,"success");else{f.o=6;try{var F=an(f)>2?f.g.statusText:""}catch{F=""}f.l=F+" ["+f.ca()+"]",Ja(f)}}finally{Pt(f)}}}}function Pt(f,y){if(f.g){f.m&&(clearTimeout(f.m),f.m=null);const _=f.g;f.g=null,y||Ut(f,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function an(f){return f.g?f.g.readyState:0}n.ca=function(){try{return an(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),dn(y)}};function es(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.F){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function ts(f){const y={};f=(f.g&&an(f)>=2&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<f.length;w++){if(D(f[w]))continue;var _=Vd(f[w]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=y[F]||[];y[F]=K,K.push(_)}O(y,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(f,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[f]||y}function eo(f){this.za=0,this.i=[],this.j=new Ui,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,f),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,f),this.Za=ns("retryDelaySeedMs",1e4,f),this.Ta=ns("forwardChannelMaxRetries",2,f),this.va=ns("forwardChannelRequestTimeoutMs",2e4,f),this.ma=f&&f.xmlHttpFactory||void 0,this.Ua=f&&f.Rb||void 0,this.Aa=f&&f.useFetchStreams||!1,this.O=void 0,this.L=f&&f.supportsCrossDomainXhr||!1,this.M="",this.h=new qa(f&&f.concurrentRequestLimit),this.Ba=new Dc,this.S=f&&f.fastHandshake||!1,this.R=f&&f.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=f&&f.Pb||!1,f&&f.ua&&this.j.ua(),f&&f.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&f&&f.detectBufferingProxy||!1,this.ia=void 0,f&&f.longPollingTimeout&&f.longPollingTimeout>0&&(this.ia=f.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=eo.prototype,n.ka=8,n.I=1,n.connect=function(f,y,_,w){Et(0),this.W=f,this.H=y||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.J=jc(this,null,this.W),as(this)};function rs(f){if(is(f),f.I==3){var y=f.V++,_=dt(f.J);if(Je(_,"SID",f.M),Je(_,"RID",y),Je(_,"TYPE","terminate"),ss(f,_),y=new tr(f,f.j,y),y.M=2,y.A=ei(dt(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&c.Image&&(new Image().src=y.A,_=!0),_||(y.g=ro(y.j,null),y.g.ea(y.A)),y.F=Date.now(),Ha(y)}Vc(f)}function wr(f){f.g&&(Ml(f),f.g.cancel(),f.g=null)}function is(f){wr(f),f.v&&(c.clearTimeout(f.v),f.v=null),no(f),f.h.cancel(),f.m&&(typeof f.m=="number"&&c.clearTimeout(f.m),f.m=null)}function as(f){if(!Ga(f.h)&&!f.m){f.m=!0;var y=f.Ea;te||x(),he||(te(),he=!0),I.add(y,f),f.D=0}}function Ud(f,y){return zn(f.h)>=f.h.j-(f.m?1:0)?!1:f.m?(f.i=y.G.concat(f.i),!0):f.I==1||f.I==2||f.D>=(f.Sa?0:f.Ta)?!1:(f.m=zi(g(f.Ea,f,y),Lc(f,f.D)),f.D++,!0)}n.Ea=function(f){if(this.m)if(this.m=null,this.I==1){if(!f){this.V=Math.floor(Math.random()*1e5),f=this.V++;const F=new tr(this,this.j,f);let K=this.o;if(this.U&&(K?(K=re(K),ue(K,this.U)):K=this.U),this.u!==null||this.R||(F.J=K,K=null),this.S)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(y+=w,y>4096){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=to(this,F,y),_=dt(this.J),Je(_,"RID",f),Je(_,"CVER",22),this.G&&Je(_,"X-HTTP-Session-Id",this.G),ss(this,_),K&&(this.R?y="headers="+Fa(Qi(K))+"&"+y:this.u&&Bn(_,this.u,K)),Qs(this.h,F),this.Ra&&Je(_,"TYPE","init"),this.S?(Je(_,"$req",y),Je(_,"SID","null"),F.U=!0,br(F,_,null)):br(F,_,y),this.I=2}}else this.I==3&&(f?Mc(this,f):this.i.length==0||Ga(this.h)||Mc(this))};function Mc(f,y){var _;y?_=y.l:_=f.V++;const w=dt(f.J);Je(w,"SID",f.M),Je(w,"RID",_),Je(w,"AID",f.K),ss(f,w),f.u&&f.o&&Bn(w,f.u,f.o),_=new tr(f,f.j,_,f.D+1),f.u===null&&(_.J=f.o),y&&(f.i=y.G.concat(f.i)),y=to(f,_,1e3),_.H=Math.round(f.va*.5)+Math.round(f.va*.5*Math.random()),Qs(f.h,_),br(_,w,y)}function ss(f,y){f.H&&Ne(f.H,function(_,w){Je(y,w,_)}),f.l&&Ne({},function(_,w){Je(y,w,_)})}function to(f,y,_){_=Math.min(f.i.length,_);const w=f.l?g(f.l.Ka,f.l,f):null;e:{var F=f.i;let Ce=-1;for(;;){const ot=["count="+_];Ce==-1?_>0?(Ce=F[0].g,ot.push("ofs="+Ce)):Ce=0:ot.push("ofs="+Ce);let Xe=!0;for(let wt=0;wt<_;wt++){var K=F[wt].g;const xn=F[wt].map;if(K-=Ce,K<0)Ce=Math.max(0,F[wt].g-100),Xe=!1;else try{K="req"+K+"_"||"";try{var oe=xn instanceof Map?xn:Object.entries(xn);for(const[Ar,ir]of oe){let ar=ir;p(ir)&&(ar=Vn(ir)),ot.push(K+Ar+"="+encodeURIComponent(ar))}}catch(Ar){throw ot.push(K+"type="+encodeURIComponent("_badmap")),Ar}}catch{w&&w(xn)}}if(Xe){oe=ot.join("&");break e}}oe=void 0}return f=f.i.splice(0,_),y.G=f,oe}function kc(f){if(!f.g&&!f.v){f.Y=1;var y=f.Da;te||x(),he||(te(),he=!0),I.add(y,f),f.A=0}}function Ol(f){return f.g||f.v||f.A>=3?!1:(f.Y++,f.v=zi(g(f.Da,f),Lc(f,f.A)),f.A++,!0)}n.Da=function(){if(this.v=null,Pc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var f=4*this.T;this.j.info("BP detection timer enabled: "+f),this.B=zi(g(this.Wa,this),f)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),wr(this),Pc(this))};function Ml(f){f.B!=null&&(c.clearTimeout(f.B),f.B=null)}function Pc(f){f.g=new tr(f,f.j,"rpc",f.Y),f.u===null&&(f.g.J=f.o),f.g.P=0;var y=dt(f.na);Je(y,"RID","rpc"),Je(y,"SID",f.M),Je(y,"AID",f.K),Je(y,"CI",f.F?"0":"1"),!f.F&&f.ia&&Je(y,"TO",f.ia),Je(y,"TYPE","xmlhttp"),ss(f,y),f.u&&f.o&&Bn(y,f.u,f.o),f.O&&(f.g.H=f.O);var _=f.g;f=f.ba,_.M=1,_.A=ei(dt(y)),_.u=null,_.R=!0,Fi(_,f)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),Ol(this),Et(19))};function no(f){f.C!=null&&(c.clearTimeout(f.C),f.C=null)}function kl(f,y){var _=null;if(f.g==y){no(f),Ml(f),f.g=null;var w=2}else if(Ya(f.h,y))_=y.G,Jr(f.h,y),w=1;else return;if(f.I!=0){if(y.o)if(w==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var F=f.D;w=qs(),Ut(w,new Ac(w,_)),as(f)}else kc(f);else if(F=y.m,F==3||F==0&&y.X>0||!(w==1&&Ud(f,y)||w==2&&Ol(f)))switch(_&&_.length>0&&(y=f.h,y.i=y.i.concat(_)),F){case 1:ri(f,5);break;case 4:ri(f,10);break;case 3:ri(f,6);break;default:ri(f,2)}}}function Lc(f,y){let _=f.Qa+Math.floor(Math.random()*f.Za);return f.isActive()||(_*=2),_*y}function ri(f,y){if(f.j.info("Error code "+y),y==2){var _=g(f.bb,f),w=f.Ua;const F=!w;w=new nr(w||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$i(w,"https"),ei(w),F?Nl(w.toString(),_):Yi(w.toString(),_)}else Et(2);f.I=0,f.l&&f.l.pa(y),Vc(f),is(f)}n.bb=function(f){f?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Vc(f){if(f.I=0,f.ja=[],f.l){const y=Xs(f.h);(y.length!=0||f.i.length!=0)&&(U(f.ja,y),U(f.ja,f.i),f.h.i.length=0,C(f.i),f.i.length=0),f.l.oa()}}function jc(f,y,_){var w=_ instanceof nr?dt(_):new nr(_);if(w.g!="")y&&(w.g=y+"."+w.g),Ka(w,w.u);else{var F=c.location;w=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;const K=new nr(null);w&&$i(K,w),y&&(K.g=y),F&&Ka(K,F),_&&(K.h=_),w=K}return _=f.G,y=f.wa,_&&y&&Je(w,_,y),Je(w,"VER",f.ka),ss(f,w),w}function ro(f,y,_){if(y&&!f.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Aa&&!f.ma?new at(new Xa({ab:_})):new at(f.ma),y.Fa(f.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zc(){}n=zc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function io(){}io.prototype.g=function(f,y){return new gn(f,y)};function gn(f,y){kt.call(this),this.g=new eo(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(f?f["X-WebChannel-Client-Profile"]=y.sa:f={"X-WebChannel-Client-Profile":y.sa}),this.g.U=f,(f=y&&y.Qb)&&!D(f)&&(this.g.u=f),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!D(y)&&(this.g.G=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new Xi(this)}T(gn,kt),gn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){rs(this.g)},gn.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var _={};_.__data__=f,f=_}else this.v&&(_={},_.__data__=Vn(f),f=_);y.i.push(new jd(y.Ya++,f)),y.I==3&&as(y)},gn.prototype.N=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,gn.Z.N.call(this)};function Pl(f){Li.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const _ in y){f=_;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}T(Pl,Li);function Uc(){er.call(this),this.status=1}T(Uc,er);function Xi(f){this.g=f}T(Xi,zc),Xi.prototype.ra=function(){Ut(this.g,"a")},Xi.prototype.qa=function(f){Ut(this.g,new Pl(f))},Xi.prototype.pa=function(f){Ut(this.g,new Uc)},Xi.prototype.oa=function(){Ut(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,zE=function(){return new io},jE=function(){return qs()},VE=jn,Lg={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,hh=Tt,Qt.COMPLETE="complete",LE=Qt,wc.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",kt.prototype.listen=kt.prototype.J,Du=wc,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,PE=at}).apply(typeof Gf<"u"?Gf:typeof self<"u"?self:typeof window<"u"?window:{});const r4="@firebase/firestore",i4="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new A1("@firebase/firestore");function Vo(){return Vs.logLevel}function de(n,...e){if(Vs.logLevel<=ze.DEBUG){const t=e.map(j1);Vs.debug(`Firestore (${pl}): ${n}`,...t)}}function Ni(n,...e){if(Vs.logLevel<=ze.ERROR){const t=e.map(j1);Vs.error(`Firestore (${pl}): ${n}`,...t)}}function Wo(n,...e){if(Vs.logLevel<=ze.WARN){const t=e.map(j1);Vs.warn(`Firestore (${pl}): ${n}`,...t)}}function j1(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,t){let a="Unexpected state";typeof e=="string"?a=e:t=e,UE(n,a,t)}function UE(n,e,t){let a=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{a+=" CONTEXT: "+JSON.stringify(t)}catch{a+=" CONTEXT: "+t}throw Ni(a),new Error(a)}function Qe(n,e,t,a){let o="Unexpected state";typeof t=="string"?o=t:a=t,n||UE(e,o,a)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(un.UNAUTHENTICATED)))}shutdown(){}}class v9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _9{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let a=this.i;const o=m=>this.i!==a?(a=this.i,t(m)):Promise.resolve();let u=new Ia;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ia,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const m=u;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ia)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((a=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Qe(typeof a.accessToken=="string",31837,{l:a}),new BE(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class b9{constructor(e,t,a){this.P=e,this.T=t,this.I=a,this.type="FirstParty",this.user=un.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E9{constructor(e,t,a){this.P=e,this.T=t,this.I=a}getToken(){return Promise.resolve(new b9(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class a4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T9{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const a=u=>{u.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const c=u.token!==this.m;return this.m=u.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>a(u)))};const o=u=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new a4(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new a4(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S9(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<n;a++)t[a]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=S9(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<t&&(a+=e.charAt(o[u]%62))}return a}}function Ue(n,e){return n<e?-1:n>e?1:0}function Vg(n,e){const t=Math.min(n.length,e.length);for(let a=0;a<t;a++){const o=n.charAt(a),u=e.charAt(a);if(o!==u)return Jm(o)===Jm(u)?Ue(o,u):Jm(o)?1:-1}return Ue(n.length,e.length)}const w9=55296,A9=57343;function Jm(n){const e=n.charCodeAt(0);return e>=w9&&e<=A9}function Zo(n,e,t){return n.length===e.length&&n.every(((a,o)=>t(a,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="__name__";class kr{constructor(e,t,a){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),a===void 0?a=e.length-t:a>e.length-t&&we(1746,{length:a,range:e.length-t}),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach((a=>{t.push(a)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let o=0;o<a;o++){const u=kr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ue(e.length,t.length)}static compareSegments(e,t){const a=kr.isNumericId(e),o=kr.isNumericId(t);return a&&!o?-1:!a&&o?1:a&&o?kr.extractNumericId(e).compare(kr.extractNumericId(t)):Vg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ca.fromString(e.substring(4,e.length-2))}}class mt extends kr{construct(e,t,a){return new mt(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new ve(ae.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter((o=>o.length>0)))}return new mt(t)}static emptyPath(){return new mt([])}}const x9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends kr{construct(e,t,a){return new en(e,t,a)}static isValidIdentifier(e){return x9.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===s4}static keyField(){return new en([s4])}static fromServerFormat(e){const t=[];let a="",o=0;const u=()=>{if(a.length===0)throw new ve(ae.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let c=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ve(ae.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ve(ae.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=m,o+=2}else p==="`"?(c=!c,o++):p!=="."||c?(a+=p,o++):(u(),o++)}if(u(),c)throw new ve(ae.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(mt.fromString(e))}static fromName(e){return new Ee(mt.fromString(e).popFirst(5))}static empty(){return new Ee(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return mt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new mt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R9(n,e,t){if(!t)throw new ve(ae.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function C9(n,e,t,a){if(e===!0&&a===!0)throw new ve(ae.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function o4(n){if(!Ee.isDocumentKey(n))throw new ve(ae.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function FE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function U1(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function Xu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=U1(n);throw new ve(ae.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e){const t={typeString:n};return e&&(t.value=e),t}function gc(n,e){if(!FE(n))throw new ve(ae.INVALID_ARGUMENT,"JSON must be an object");let t;for(const a in e)if(e[a]){const o=e[a].typeString,u="value"in e[a]?{value:e[a].value}:void 0;if(!(a in n)){t=`JSON missing required field: '${a}'`;break}const c=n[a];if(o&&typeof c!==o){t=`JSON field '${a}' must be a ${o}.`;break}if(u!==void 0&&c!==u.value){t=`Expected '${a}' field to equal '${u.value}'`;break}}if(t)throw new ve(ae.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=-62135596800,u4=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor((e-1e3*t)*u4);return new ut(t,a)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<l4)throw new ve(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/u4}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gc(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-l4;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:Ot("string",ut._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new ut(0,0))}static max(){return new Re(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=-1;function I9(n,e){const t=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(a===1e9?new ut(t+1,0):new ut(t,a));return new Ma(o,Ee.empty(),e)}function N9(n){return new Ma(n.readTime,n.key,Wu)}class Ma{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new Ma(Re.min(),Ee.empty(),Wu)}static max(){return new Ma(Re.max(),Ee.empty(),Wu)}}function D9(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n){if(n.code!==ae.FAILED_PRECONDITION||n.message!==O9)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie(((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(a,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.reject(t)}static resolve(e){return new ie(((t,a)=>{t(e)}))}static reject(e){return new ie(((t,a)=>{a(e)}))}static waitFor(e){return new ie(((t,a)=>{let o=0,u=0,c=!1;e.forEach((p=>{++o,p.next((()=>{++u,c&&u===o&&t()}),(m=>a(m)))})),c=!0,u===o&&t()}))}static or(e){let t=ie.resolve(!1);for(const a of e)t=t.next((o=>o?ie.resolve(o):a()));return t}static forEach(e,t){const a=[];return e.forEach(((o,u)=>{a.push(t.call(this,o,u))})),this.waitFor(a)}static mapArray(e,t){return new ie(((a,o)=>{const u=e.length,c=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next((v=>{c[g]=v,++p,p===u&&a(c)}),(v=>o(v)))}}))}static doWhile(e,t){return new ie(((a,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):a()};u()}))}}function k9(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>t.writeSequenceNumber(a))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=-1;function dd(n){return n==null}function Vh(n){return n===0&&1/n==-1/0}function P9(n){return typeof n=="number"&&Number.isInteger(n)&&!Vh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="";function L9(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=c4(e)),e=V9(n.get(t),e);return c4(e)}function V9(n,e){let t=e;const a=n.length;for(let o=0;o<a;o++){const u=n.charAt(o);switch(u){case"\0":t+="";break;case HE:t+="";break;default:t+=u}}return t}function c4(n){return n+HE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Us(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $E(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new yt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return t+a.left.size;o<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,a)=>(e(t,a),!1)))}toString(){const e=[];return this.inorderTraversal(((t,a)=>(e.push(`${t}:${a}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yf(this.root,e,this.comparator,!0)}}class Yf{constructor(e,t,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?a(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,a,o,u){this.key=e,this.value=t,this.color=a??Jt.RED,this.left=o??Jt.EMPTY,this.right=u??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,o,u){return new Jt(e??this.key,t??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let o=this;const u=a(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,a),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Jt.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,a,o,u){return this}insert(e,t,a){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,a)=>(e(t),!1)))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new h4(this.data.getIterator())}getIteratorFrom(e){return new h4(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((a=>{t=t.add(a)})),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class h4{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new dr([])}unionWith(e){let t=new zt(en.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new dr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zo(this.fields,e.fields,((t,a)=>t.isEqual(a)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new qE("Invalid base64 string: "+u):u}})(e);return new nn(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let c=0;c<o.length;++c)u+=String.fromCharCode(o[c]);return u})(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const a=new Uint8Array(t.length);for(let o=0;o<t.length;o++)a[o]=t.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const j9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ka(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const t=j9.exec(n);if(Qe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pa(n){return typeof n=="string"?nn.fromBase64String(n):nn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="server_timestamp",YE="__type__",KE="__previous_value__",QE="__local_write_time__";function F1(n){return(n?.mapValue?.fields||{})[YE]?.stringValue===GE}function pd(n){const e=n.mapValue.fields[KE];return F1(e)?pd(e):e}function Zu(n){const e=ka(n.mapValue.fields[QE].timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e,t,a,o,u,c,p,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const jh="(default)";class Ju{constructor(e,t){this.projectId=e,this.database=t||jh}static empty(){return new Ju("","")}get isDefaultDatabase(){return this.database===jh}isEqual(e){return e instanceof Ju&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="__type__",U9="__max__",Kf={mapValue:{}},WE="__vector__",zh="value";function La(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?F1(n)?4:F9(n)?9007199254740991:B9(n)?10:11:we(28295,{value:n})}function $r(n,e){if(n===e)return!0;const t=La(n);if(t!==La(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zu(n).isEqual(Zu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const c=ka(o.timestampValue),p=ka(u.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,u){return Pa(o.bytesValue).isEqual(Pa(u.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,u){return Rt(o.geoPointValue.latitude)===Rt(u.geoPointValue.latitude)&&Rt(o.geoPointValue.longitude)===Rt(u.geoPointValue.longitude)})(n,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Rt(o.integerValue)===Rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const c=Rt(o.doubleValue),p=Rt(u.doubleValue);return c===p?Vh(c)===Vh(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return Zo(n.arrayValue.values||[],e.arrayValue.values||[],$r);case 10:case 11:return(function(o,u){const c=o.mapValue.fields||{},p=u.mapValue.fields||{};if(f4(c)!==f4(p))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(p[m]===void 0||!$r(c[m],p[m])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function ec(n,e){return(n.values||[]).find((t=>$r(t,e)))!==void 0}function Jo(n,e){if(n===e)return 0;const t=La(n),a=La(e);if(t!==a)return Ue(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(u,c){const p=Rt(u.integerValue||u.doubleValue),m=Rt(c.integerValue||c.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,e);case 3:return d4(n.timestampValue,e.timestampValue);case 4:return d4(Zu(n),Zu(e));case 5:return Vg(n.stringValue,e.stringValue);case 6:return(function(u,c){const p=Pa(u),m=Pa(c);return p.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(u,c){const p=u.split("/"),m=c.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Ue(p[g],m[g]);if(v!==0)return v}return Ue(p.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(u,c){const p=Ue(Rt(u.latitude),Rt(c.latitude));return p!==0?p:Ue(Rt(u.longitude),Rt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return p4(n.arrayValue,e.arrayValue);case 10:return(function(u,c){const p=u.fields||{},m=c.fields||{},g=p[zh]?.arrayValue,v=m[zh]?.arrayValue,T=Ue(g?.values?.length||0,v?.values?.length||0);return T!==0?T:p4(g,v)})(n.mapValue,e.mapValue);case 11:return(function(u,c){if(u===Kf.mapValue&&c===Kf.mapValue)return 0;if(u===Kf.mapValue)return 1;if(c===Kf.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=c.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const A=Vg(m[T],v[T]);if(A!==0)return A;const C=Jo(p[m[T]],g[v[T]]);if(C!==0)return C}return Ue(m.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function d4(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=ka(n),a=ka(e),o=Ue(t.seconds,a.seconds);return o!==0?o:Ue(t.nanos,a.nanos)}function p4(n,e){const t=n.values||[],a=e.values||[];for(let o=0;o<t.length&&o<a.length;++o){const u=Jo(t[o],a[o]);if(u)return u}return Ue(t.length,a.length)}function el(n){return jg(n)}function jg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const a=ka(t);return`time(${a.seconds},${a.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Pa(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let a="[",o=!0;for(const u of t.values||[])o?o=!1:a+=",",a+=jg(u);return a+"]"})(n.arrayValue):"mapValue"in n?(function(t){const a=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const c of a)u?u=!1:o+=",",o+=`${c}:${jg(t.fields[c])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function dh(n){switch(La(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pd(n);return e?16+dh(e):16;case 5:return 2*n.stringValue.length;case 6:return Pa(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((o,u)=>o+dh(u)),0)})(n.arrayValue);case 10:case 11:return(function(a){let o=0;return Us(a.fields,((u,c)=>{o+=u.length+dh(c)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function zg(n){return!!n&&"integerValue"in n}function H1(n){return!!n&&"arrayValue"in n}function m4(n){return!!n&&"nullValue"in n}function g4(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ph(n){return!!n&&"mapValue"in n}function B9(n){return(n?.mapValue?.fields||{})[XE]?.stringValue===WE}function Uu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Us(n.mapValue.fields,((t,a)=>e.mapValue.fields[t]=Uu(a))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Uu(n.arrayValue.values[t]);return e}return{...n}}function F9(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===U9}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!ph(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uu(t)}setAll(e){let t=en.emptyPath(),a={},o=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,a,o),a={},o=[],t=p.popLast()}c?a[p.lastSegment()]=Uu(c):o.push(p.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,a,o)}delete(e){const t=this.field(e.popLast());ph(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $r(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=t.mapValue.fields[e.get(a)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,a){Us(t,((o,u)=>e[o]=u));for(const o of a)delete e[o]}clone(){return new Qn(Uu(this.value))}}function ZE(n){const e=[];return Us(n.fields,((t,a)=>{const o=new en([t]);if(ph(a)){const u=ZE(a.mapValue).fields;if(u.length===0)e.push(o);else for(const c of u)e.push(o.child(c))}else e.push(o)})),new dr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,a,o,u,c,p){this.key=e,this.documentType=t,this.version=a,this.readTime=o,this.createTime=u,this.data=c,this.documentState=p}static newInvalidDocument(e){return new cn(e,0,Re.min(),Re.min(),Re.min(),Qn.empty(),0)}static newFoundDocument(e,t,a,o){return new cn(e,1,t,Re.min(),a,o,0)}static newNoDocument(e,t){return new cn(e,2,t,Re.min(),Re.min(),Qn.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Re.min(),Re.min(),Qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.position=e,this.inclusive=t}}function y4(n,e,t){let a=0;for(let o=0;o<n.position.length;o++){const u=e[o],c=n.position[o];if(u.field.isKeyField()?a=Ee.comparator(Ee.fromName(c.referenceValue),t.key):a=Jo(c,t.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function v4(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$r(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t="asc"){this.field=e,this.dir=t}}function H9(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{}class jt extends JE{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new q9(e,t,a):t==="array-contains"?new K9(e,a):t==="in"?new Q9(e,a):t==="not-in"?new X9(e,a):t==="array-contains-any"?new W9(e,a):new jt(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new G9(e,a):new Y9(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jo(t,this.value)):t!==null&&La(this.value)===La(t)&&this.matchesComparison(Jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qr extends JE{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new qr(e,t)}matches(e){return e6(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function e6(n){return n.op==="and"}function t6(n){return $9(n)&&e6(n)}function $9(n){for(const e of n.filters)if(e instanceof qr)return!1;return!0}function Ug(n){if(n instanceof jt)return n.field.canonicalString()+n.op.toString()+el(n.value);if(t6(n))return n.filters.map((e=>Ug(e))).join(",");{const e=n.filters.map((t=>Ug(t))).join(",");return`${n.op}(${e})`}}function n6(n,e){return n instanceof jt?(function(a,o){return o instanceof jt&&a.op===o.op&&a.field.isEqual(o.field)&&$r(a.value,o.value)})(n,e):n instanceof qr?(function(a,o){return o instanceof qr&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce(((u,c,p)=>u&&n6(c,o.filters[p])),!0):!1})(n,e):void we(19439)}function r6(n){return n instanceof jt?(function(t){return`${t.field.canonicalString()} ${t.op} ${el(t.value)}`})(n):n instanceof qr?(function(t){return t.op.toString()+" {"+t.getFilters().map(r6).join(" ,")+"}"})(n):"Filter"}class q9 extends jt{constructor(e,t,a){super(e,t,a),this.key=Ee.fromName(a.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class G9 extends jt{constructor(e,t){super(e,"in",t),this.keys=i6("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Y9 extends jt{constructor(e,t){super(e,"not-in",t),this.keys=i6("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function i6(n,e){return(e.arrayValue?.values||[]).map((t=>Ee.fromName(t.referenceValue)))}class K9 extends jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return H1(t)&&ec(t.arrayValue,this.value)}}class Q9 extends jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ec(this.value.arrayValue,t)}}class X9 extends jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ec(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ec(this.value.arrayValue,t)}}class W9 extends jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!H1(t)||!t.arrayValue.values)&&t.arrayValue.values.some((a=>ec(this.value.arrayValue,a)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(e,t=null,a=[],o=[],u=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=c,this.endAt=p,this.Te=null}}function _4(n,e=null,t=[],a=[],o=null,u=null,c=null){return new Z9(n,e,t,a,o,u,c)}function $1(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((a=>Ug(a))).join(","),t+="|ob:",t+=e.orderBy.map((a=>(function(u){return u.field.canonicalString()+u.dir})(a))).join(","),dd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((a=>el(a))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((a=>el(a))).join(",")),e.Te=t}return e.Te}function q1(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!H9(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!n6(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!v4(n.startAt,e.startAt)&&v4(n.endAt,e.endAt)}function Bg(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t=null,a=[],o=[],u=null,c="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=c,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function J9(n,e,t,a,o,u,c,p){return new md(n,e,t,a,o,u,c,p)}function G1(n){return new md(n)}function b4(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eN(n){return n.collectionGroup!==null}function Bu(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new zt(en.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Bh(u,a))})),t.has(en.keyField().canonicalString())||e.Ie.push(new Bh(en.keyField(),a))}return e.Ie}function jr(n){const e=Ie(n);return e.Ee||(e.Ee=tN(e,Bu(n))),e.Ee}function tN(n,e){if(n.limitType==="F")return _4(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Bh(o.field,u)}));const t=n.endAt?new Uh(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new Uh(n.startAt.position,n.startAt.inclusive):null;return _4(n.path,n.collectionGroup,e,n.filters,n.limit,t,a)}}function Fg(n,e,t){return new md(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gd(n,e){return q1(jr(n),jr(e))&&n.limitType===e.limitType}function a6(n){return`${$1(jr(n))}|lt:${n.limitType}`}function jo(n){return`Query(target=${(function(t){let a=t.path.canonicalString();return t.collectionGroup!==null&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map((o=>r6(o))).join(", ")}]`),dd(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(a+=", startAt: ",a+=t.startAt.inclusive?"b:":"a:",a+=t.startAt.position.map((o=>el(o))).join(",")),t.endAt&&(a+=", endAt: ",a+=t.endAt.inclusive?"a:":"b:",a+=t.endAt.position.map((o=>el(o))).join(",")),`Target(${a})`})(jr(n))}; limitType=${n.limitType})`}function yd(n,e){return e.isFoundDocument()&&(function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):Ee.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)})(n,e)&&(function(a,o){for(const u of Bu(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(n,e)&&(function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0})(n,e)&&(function(a,o){return!(a.startAt&&!(function(c,p,m){const g=y4(c,p,m);return c.inclusive?g<=0:g<0})(a.startAt,Bu(a),o)||a.endAt&&!(function(c,p,m){const g=y4(c,p,m);return c.inclusive?g>=0:g>0})(a.endAt,Bu(a),o))})(n,e)}function nN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function s6(n){return(e,t)=>{let a=!1;for(const o of Bu(n)){const u=rN(o,e,t);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function rN(n,e,t){const a=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(u,c,p){const m=c.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Jo(m,g):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[t]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,((t,a)=>{for(const[o,u]of a)e(o,u)}))}isEmpty(){return $E(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new yt(Ee.comparator);function Di(){return iN}const o6=new yt(Ee.comparator);function Ou(...n){let e=o6;for(const t of n)e=e.insert(t.key,t);return e}function l6(n){let e=o6;return n.forEach(((t,a)=>e=e.insert(t,a.overlayedDocument))),e}function As(){return Fu()}function u6(){return Fu()}function Fu(){return new Bs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const aN=new yt(Ee.comparator),sN=new zt(Ee.comparator);function Be(...n){let e=sN;for(const t of n)e=e.add(t);return e}const oN=new zt(Ue);function lN(){return oN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vh(e)?"-0":e}}function c6(n){return{integerValue:""+n}}function uN(n,e){return P9(e)?c6(e):Y1(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this._=void 0}}function cN(n,e,t){return n instanceof Fh?(function(o,u){const c={fields:{[YE]:{stringValue:GE},[QE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&F1(u)&&(u=pd(u)),u&&(c.fields[KE]=u),{mapValue:c}})(t,e):n instanceof tc?h6(n,e):n instanceof nc?d6(n,e):(function(o,u){const c=f6(o,u),p=E4(c)+E4(o.Ae);return zg(c)&&zg(o.Ae)?c6(p):Y1(o.serializer,p)})(n,e)}function fN(n,e,t){return n instanceof tc?h6(n,e):n instanceof nc?d6(n,e):t}function f6(n,e){return n instanceof Hh?(function(a){return zg(a)||(function(u){return!!u&&"doubleValue"in u})(a)})(e)?e:{integerValue:0}:null}class Fh extends vd{}class tc extends vd{constructor(e){super(),this.elements=e}}function h6(n,e){const t=p6(e);for(const a of n.elements)t.some((o=>$r(o,a)))||t.push(a);return{arrayValue:{values:t}}}class nc extends vd{constructor(e){super(),this.elements=e}}function d6(n,e){let t=p6(e);for(const a of n.elements)t=t.filter((o=>!$r(o,a)));return{arrayValue:{values:t}}}class Hh extends vd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function E4(n){return Rt(n.integerValue||n.doubleValue)}function p6(n){return H1(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hN(n,e){return n.field.isEqual(e.field)&&(function(a,o){return a instanceof tc&&o instanceof tc||a instanceof nc&&o instanceof nc?Zo(a.elements,o.elements,$r):a instanceof Hh&&o instanceof Hh?$r(a.Ae,o.Ae):a instanceof Fh&&o instanceof Fh})(n.transform,e.transform)}class dN{constructor(e,t){this.version=e,this.transformResults=t}}class wi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wi}static exists(e){return new wi(void 0,e)}static updateTime(e){return new wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _d{}function m6(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new y6(n.key,wi.none()):new yc(n.key,n.data,wi.none());{const t=n.data,a=Qn.empty();let o=new zt(en.comparator);for(let u of e.fields)if(!o.has(u)){let c=t.field(u);c===null&&u.length>1&&(u=u.popLast(),c=t.field(u)),c===null?a.delete(u):a.set(u,c),o=o.add(u)}return new Fs(n.key,a,new dr(o.toArray()),wi.none())}}function pN(n,e,t){n instanceof yc?(function(o,u,c){const p=o.value.clone(),m=S4(o.fieldTransforms,u,c.transformResults);p.setAll(m),u.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Fs?(function(o,u,c){if(!mh(o.precondition,u))return void u.convertToUnknownDocument(c.version);const p=S4(o.fieldTransforms,u,c.transformResults),m=u.data;m.setAll(g6(o)),m.setAll(p),u.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(n,e,t):(function(o,u,c){u.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Hu(n,e,t,a){return n instanceof yc?(function(u,c,p,m){if(!mh(u.precondition,c))return p;const g=u.value.clone(),v=w4(u.fieldTransforms,m,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,a):n instanceof Fs?(function(u,c,p,m){if(!mh(u.precondition,c))return p;const g=w4(u.fieldTransforms,m,c),v=c.data;return v.setAll(g6(u)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(n,e,t,a):(function(u,c,p){return mh(u.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function mN(n,e){let t=null;for(const a of n.fieldTransforms){const o=e.data.field(a.field),u=f6(a.transform,o||null);u!=null&&(t===null&&(t=Qn.empty()),t.set(a.field,u))}return t||null}function T4(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&Zo(a,o,((u,c)=>hN(u,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yc extends _d{constructor(e,t,a,o=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fs extends _d{constructor(e,t,a,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function g6(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const a=n.data.field(t);e.set(t,a)}})),e}function S4(n,e,t){const a=new Map;Qe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const u=n[o],c=u.transform,p=e.data.field(u.field);a.set(u.field,fN(c,p,t[o]))}return a}function w4(n,e,t){const a=new Map;for(const o of n){const u=o.transform,c=t.data.field(o.field);a.set(o.field,cN(u,c,e))}return a}class y6 extends _d{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gN extends _d{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,a,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&pN(u,e,a[o])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=Hu(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=Hu(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=u6();return this.mutations.forEach((o=>{const u=e.get(o.key),c=u.overlayedDocument;let p=this.applyToLocalView(c,u.mutatedFields);p=t.has(o.key)?null:p;const m=m6(c,p);m!==null&&a.set(o.key,m),c.isValidDocument()||c.convertToNoDocument(Re.min())})),a}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&Zo(this.mutations,e.mutations,((t,a)=>T4(t,a)))&&Zo(this.baseMutations,e.baseMutations,((t,a)=>T4(t,a)))}}class K1{constructor(e,t,a,o){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=o}static from(e,t,a){Qe(e.mutations.length===a.length,58842,{me:e.mutations.length,fe:a.length});let o=(function(){return aN})();const u=e.mutations;for(let c=0;c<u.length;c++)o=o.insert(u[c].key,a[c].version);return new K1(e,t,a,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,qe;function bN(n){switch(n){case ae.OK:return we(64938);case ae.CANCELLED:case ae.UNKNOWN:case ae.DEADLINE_EXCEEDED:case ae.RESOURCE_EXHAUSTED:case ae.INTERNAL:case ae.UNAVAILABLE:case ae.UNAUTHENTICATED:return!1;case ae.INVALID_ARGUMENT:case ae.NOT_FOUND:case ae.ALREADY_EXISTS:case ae.PERMISSION_DENIED:case ae.FAILED_PRECONDITION:case ae.ABORTED:case ae.OUT_OF_RANGE:case ae.UNIMPLEMENTED:case ae.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function v6(n){if(n===void 0)return Ni("GRPC error has no .code"),ae.UNKNOWN;switch(n){case Nt.OK:return ae.OK;case Nt.CANCELLED:return ae.CANCELLED;case Nt.UNKNOWN:return ae.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return ae.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return ae.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return ae.INTERNAL;case Nt.UNAVAILABLE:return ae.UNAVAILABLE;case Nt.UNAUTHENTICATED:return ae.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return ae.INVALID_ARGUMENT;case Nt.NOT_FOUND:return ae.NOT_FOUND;case Nt.ALREADY_EXISTS:return ae.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return ae.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return ae.FAILED_PRECONDITION;case Nt.ABORTED:return ae.ABORTED;case Nt.OUT_OF_RANGE:return ae.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return ae.UNIMPLEMENTED;case Nt.DATA_LOSS:return ae.DATA_LOSS;default:return we(39323,{code:n})}}(qe=Nt||(Nt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=new Ca([4294967295,4294967295],0);function A4(n){const e=EN().encode(n),t=new kE;return t.update(e),new Uint8Array(t.digest())}function x4(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ca([t,a],0),new Ca([o,u],0)]}class Q1{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new Mu(`Invalid padding: ${t}`);if(a<0)throw new Mu(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new Mu(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new Mu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ca.fromNumber(this.ge)}ye(e,t,a){let o=e.add(t.multiply(Ca.fromNumber(a)));return o.compare(TN)===1&&(o=new Ca([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=A4(e),[a,o]=x4(t);for(let u=0;u<this.hashCount;u++){const c=this.ye(a,o,u);if(!this.we(c))return!1}return!0}static create(e,t,a){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),c=new Q1(u,o,t);return a.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=A4(e),[a,o]=x4(t);for(let u=0;u<this.hashCount;u++){const c=this.ye(a,o,u);this.Se(c)}}Se(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class Mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,a,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const o=new Map;return o.set(e,vc.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new bd(Re.min(),o,new yt(Ue),Di(),Be())}}class vc{constructor(e,t,a,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new vc(a,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t,a,o){this.be=e,this.removedTargetIds=t,this.key=a,this.De=o}}class _6{constructor(e,t){this.targetId=e,this.Ce=t}}class b6{constructor(e,t,a=nn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=o}}class R4{constructor(){this.ve=0,this.Fe=C4(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),t=Be(),a=Be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:a=a.add(o);break;default:we(38017,{changeType:u})}})),new vc(this.Me,this.xe,e,t,a)}qe(){this.Oe=!1,this.Fe=C4()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class SN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Di(),this.Je=Qf(),this.He=Qf(),this.Ye=new yt(Ue)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const a=this.nt(t);switch(e.state){case 0:this.rt(t)&&a.Le(e.resumeToken);break;case 1:a.Ke(),a.Ne||a.qe(),a.Le(e.resumeToken);break;case 2:a.Ke(),a.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(a.We(),a.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),a.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((a,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,a=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Bg(u))if(a===0){const c=new Ee(u.path);this.et(t,c,cn.newNoDocument(c,Re.min()))}else Qe(a===1,20013,{expectedCount:a});else{const c=this._t(t);if(c!==a){const p=this.ut(e),m=p?this.ct(p,e,c):1;if(m!==0){this.it(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=t;let c,p;try{c=Pa(a).toUint8Array()}catch(m){if(m instanceof qE)return Wo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Q1(c,o,u)}catch(m){return Wo(m instanceof Mu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,a){return t.Ce.count===a-this.Pt(e,t.targetId)?0:2}Pt(e,t){const a=this.Ge.getRemoteKeysForTarget(t);let o=0;return a.forEach((u=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,c)=>{const p=this.ot(c);if(p){if(u.current&&Bg(p.target)){const m=new Ee(p.target.path);this.It(m).has(c)||this.Et(c,m)||this.et(c,m,cn.newNoDocument(m,e))}u.Be&&(t.set(c,u.ke()),u.qe())}}));let a=Be();this.He.forEach(((u,c)=>{let p=!0;c.forEachWhile((m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(a=a.add(u))})),this.je.forEach(((u,c)=>c.setReadTime(e)));const o=new bd(e,t,this.Ye,this.je,a);return this.je=Di(),this.Je=Qf(),this.He=Qf(),this.Ye=new yt(Ue),o}Xe(e,t){if(!this.rt(e))return;const a=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,a),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,a){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),a&&(this.je=this.je.insert(t,a))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new R4,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new zt(Ue),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new zt(Ue),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new R4),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qf(){return new yt(Ee.comparator)}function C4(){return new yt(Ee.comparator)}const wN={asc:"ASCENDING",desc:"DESCENDING"},AN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xN={and:"AND",or:"OR"};class RN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hg(n,e){return n.useProto3Json||dd(e)?e:{value:e}}function $h(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E6(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function CN(n,e){return $h(n,e.toTimestamp())}function zr(n){return Qe(!!n,49232),Re.fromTimestamp((function(t){const a=ka(t);return new ut(a.seconds,a.nanos)})(n))}function X1(n,e){return $g(n,e).canonicalString()}function $g(n,e){const t=(function(o){return new mt(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function T6(n){const e=mt.fromString(n);return Qe(R6(e),10190,{key:e.toString()}),e}function qg(n,e){return X1(n.databaseId,e.path)}function eg(n,e){const t=T6(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(ae.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(ae.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(w6(t))}function S6(n,e){return X1(n.databaseId,e)}function IN(n){const e=T6(n);return e.length===4?mt.emptyPath():w6(e)}function Gg(n){return new mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function w6(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function I4(n,e,t){return{name:qg(n,e),fields:t.value.mapValue.fields}}function NN(n,e){let t;if("targetChange"in e){e.targetChange;const a=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(g,v){return g.useProto3Json?(Qe(v===void 0||typeof v=="string",58123),nn.fromBase64String(v||"")):(Qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),nn.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(g){const v=g.code===void 0?ae.UNKNOWN:v6(g.code);return new ve(v,g.message||"")})(c);t=new b6(a,o,u,p||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const o=eg(n,a.document.name),u=zr(a.document.updateTime),c=a.document.createTime?zr(a.document.createTime):Re.min(),p=new Qn({mapValue:{fields:a.document.fields}}),m=cn.newFoundDocument(o,u,c,p),g=a.targetIds||[],v=a.removedTargetIds||[];t=new gh(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const o=eg(n,a.document),u=a.readTime?zr(a.readTime):Re.min(),c=cn.newNoDocument(o,u),p=a.removedTargetIds||[];t=new gh([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const o=eg(n,a.document),u=a.removedTargetIds||[];t=new gh([],u,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const a=e.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,c=new _N(o,u),p=a.targetId;t=new _6(p,c)}}return t}function DN(n,e){let t;if(e instanceof yc)t={update:I4(n,e.key,e.value)};else if(e instanceof y6)t={delete:qg(n,e.key)};else if(e instanceof Fs)t={update:I4(n,e.key,e.data),updateMask:UN(e.fieldMask)};else{if(!(e instanceof gN))return we(16599,{Vt:e.type});t={verify:qg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((a=>(function(u,c){const p=c.transform;if(p instanceof Fh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof tc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof nc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Hh)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw we(20930,{transform:c.transform})})(0,a)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:CN(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:we(27497)})(n,e.precondition)),t}function ON(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map((t=>(function(o,u){let c=o.updateTime?zr(o.updateTime):zr(u);return c.isEqual(Re.min())&&(c=zr(u)),new dN(c,o.transformResults||[])})(t,e)))):[]}function MN(n,e){return{documents:[S6(n,e.path)]}}function kN(n,e){const t={structuredQuery:{}},a=e.path;let o;e.collectionGroup!==null?(o=a,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=a.popLast(),t.structuredQuery.from=[{collectionId:a.lastSegment()}]),t.parent=S6(n,o);const u=(function(g){if(g.length!==0)return x6(qr.create(g,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const c=(function(g){if(g.length!==0)return g.map((v=>(function(A){return{field:zo(A.field),direction:VN(A.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=Hg(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:o}}function PN(n){let e=IN(n.parent);const t=n.structuredQuery,a=t.from?t.from.length:0;let o=null;if(a>0){Qe(a===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=(function(T){const A=A6(T);return A instanceof qr&&t6(A)?A.getFilters():[A]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((A=>(function(U){return new Bh(Uo(U.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(A)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let A;return A=typeof T=="object"?T.value:T,dd(A)?null:A})(t.limit));let m=null;t.startAt&&(m=(function(T){const A=!!T.before,C=T.values||[];return new Uh(C,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const A=!T.before,C=T.values||[];return new Uh(C,A)})(t.endAt)),J9(e,o,c,u,p,"F",m,g)}function LN(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function A6(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const a=Uo(t.unaryFilter.field);return jt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Uo(t.unaryFilter.field);return jt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Uo(t.unaryFilter.field);return jt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Uo(t.unaryFilter.field);return jt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return jt.create(Uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return qr.create(t.compositeFilter.filters.map((a=>A6(a))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function VN(n){return wN[n]}function jN(n){return AN[n]}function zN(n){return xN[n]}function zo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return en.fromServerFormat(n.fieldPath)}function x6(n){return n instanceof jt?(function(t){if(t.op==="=="){if(g4(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NAN"}};if(m4(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(g4(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NAN"}};if(m4(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zo(t.field),op:jN(t.op),value:t.value}}})(n):n instanceof qr?(function(t){const a=t.getFilters().map((o=>x6(o)));return a.length===1?a[0]:{compositeFilter:{op:zN(t.op),filters:a}}})(n):we(54877,{filter:n})}function UN(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function R6(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,a,o,u=Re.min(),c=Re.min(),p=nn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new wa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.yt=e}}function FN(n){const e=PN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.Cn=new $N}addToCollectionParentIndex(e,t){return this.Cn.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(Ma.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(Ma.min())}updateCollectionGroup(e,t,a){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class $N{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t]||new zt(mt.comparator),u=!o.has(a);return this.index[t]=o.add(a),u}has(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t];return o&&o.has(a)}getEntries(e){return(this.index[e]||new zt(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C6=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(C6,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new tl(0)}static cr(){return new tl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4="LruGarbageCollector",qN=1048576;function O4([n,e],[t,a]){const o=Ue(n,t);return o===0?Ue(e,a):o}class GN{constructor(e){this.Ir=e,this.buffer=new zt(O4),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const a=this.buffer.last();O4(t,a)<0&&(this.buffer=this.buffer.delete(a).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YN{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(D4,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gl(t)?de(D4,"Ignoring IndexedDB error during garbage collection: ",t):await ml(t)}await this.Vr(3e5)}))}}class KN{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((a=>Math.floor(t/100*a)))}nthSequenceNumber(e,t){if(t===0)return ie.resolve(hd.ce);const a=new GN(t);return this.mr.forEachTarget(e,(o=>a.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>a.Ar(o))))).next((()=>a.maxValue))}removeTargets(e,t,a){return this.mr.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(N4)):this.getCacheSize(e).next((a=>a<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),N4):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let a,o,u,c,p,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(a=T,p=Date.now(),this.removeTargets(e,a,t)))).next((T=>(u=T,m=Date.now(),this.removeOrphanedDocuments(e,a)))).next((T=>(g=Date.now(),Vo()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(p-c)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function QN(n,e){return new KN(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.changes=new Bs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?ie.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,t,a,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(a=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(a!==null&&Hu(a.mutation,o,dr.empty(),ut.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((a=>this.getLocalViewOfDocuments(e,a,Be()).next((()=>a))))}getLocalViewOfDocuments(e,t,a=Be()){const o=As();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,a).next((u=>{let c=Ou();return u.forEach(((p,m)=>{c=c.insert(p,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const a=As();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,Be())))}populateOverlays(e,t,a){const o=[];return a.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,a,o){let u=Di();const c=Fu(),p=(function(){return Fu()})();return t.forEach(((m,g)=>{const v=a.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof Fs)?u=u.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Hu(v.mutation,g,v.mutation.getFieldMask(),ut.now())):c.set(g.key,dr.empty())})),this.recalculateAndSaveOverlays(e,u).next((m=>(m.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>p.set(g,new WN(v,c.get(g)??null)))),p)))}recalculateAndSaveOverlays(e,t){const a=Fu();let o=new yt(((c,p)=>c-p)),u=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let v=a.get(m)||dr.empty();v=p.applyToLocalView(g,v),a.set(m,v);const T=(o.get(p.batchId)||Be()).add(m);o=o.insert(p.batchId,T)}))})).next((()=>{const c=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,T=u6();v.forEach((A=>{if(!u.has(A)){const C=m6(t.get(A),a.get(A));C!==null&&T.set(A,C),u=u.add(A)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ie.waitFor(c)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((a=>this.recalculateAndSaveOverlays(e,a)))}getDocumentsMatchingQuery(e,t,a,o){return(function(c){return Ee.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eN(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,o):this.getDocumentsMatchingCollectionQuery(e,t,a,o)}getNextDocuments(e,t,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,o).next((u=>{const c=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,o-u.size):ie.resolve(As());let p=Wu,m=u;return c.next((g=>ie.forEach(g,((v,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),u.get(v)?ie.resolve():this.remoteDocumentCache.getEntry(e,v).next((A=>{m=m.insert(v,A)}))))).next((()=>this.populateOverlays(e,g,u))).next((()=>this.computeViews(e,m,g,Be()))).next((v=>({batchId:p,changes:l6(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((a=>{let o=Ou();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,a,o){const u=t.collectionGroup;let c=Ou();return this.indexManager.getCollectionParents(e,u).next((p=>ie.forEach(p,(m=>{const g=(function(T,A){return new md(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,a,o).next((v=>{v.forEach(((T,A)=>{c=c.insert(T,A)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next((c=>(u=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,u,o)))).next((c=>{u.forEach(((m,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,cn.newInvalidDocument(v)))}));let p=Ou();return c.forEach(((m,g)=>{const v=u.get(m);v!==void 0&&Hu(v.mutation,g,dr.empty(),ut.now()),yd(t,g)&&(p=p.insert(m,g))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ie.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:zr(o.createTime)}})(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:FN(o.bundledQuery),readTime:zr(o.readTime)}})(t)),ie.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.overlays=new yt(Ee.comparator),this.qr=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const a=As();return ie.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&a.set(o,u)})))).next((()=>a))}saveOverlays(e,t,a){return a.forEach(((o,u)=>{this.St(e,t,u)})),ie.resolve()}removeOverlaysForBatchId(e,t,a){const o=this.qr.get(a);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(a)),ie.resolve()}getOverlaysForCollection(e,t,a){const o=As(),u=t.length+1,c=new Ee(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>a&&o.set(m.getKey(),m)}return ie.resolve(o)}getOverlaysForCollectionGroup(e,t,a,o){let u=new yt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>a){let v=u.get(g.largestBatchId);v===null&&(v=As(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=As(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>p.set(g,v))),!(p.size()>=o)););return ie.resolve(p)}St(e,t,a){const o=this.overlays.get(a.key);if(o!==null){const c=this.qr.get(o.largestBatchId).delete(a.key);this.qr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(a.key,new vN(t,a));let u=this.qr.get(t);u===void 0&&(u=Be(),this.qr.set(t,u)),this.qr.set(t,u.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.Qr=new zt(Gt.$r),this.Ur=new zt(Gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const a=new Gt(e,t);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(e,t){e.forEach((a=>this.addReference(a,t)))}removeReference(e,t){this.Gr(new Gt(e,t))}zr(e,t){e.forEach((a=>this.removeReference(a,t)))}jr(e){const t=new Ee(new mt([])),a=new Gt(t,e),o=new Gt(t,e+1),u=[];return this.Ur.forEachInRange([a,o],(c=>{this.Gr(c),u.push(c.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Ee(new mt([])),a=new Gt(t,e),o=new Gt(t,e+1);let u=Be();return this.Ur.forEachInRange([a,o],(c=>{u=u.add(c.key)})),u}containsKey(e){const t=new Gt(e,0),a=this.Qr.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class Gt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Ee.comparator(e.key,t.key)||Ue(e.Yr,t.Yr)}static Kr(e,t){return Ue(e.Yr,t.Yr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new zt(Gt.$r)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new yN(u,t,a,o);this.mutationQueue.push(c);for(const p of o)this.Zr=this.Zr.add(new Gt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ie.resolve(c)}lookupMutationBatch(e,t){return ie.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,o=this.ei(a),u=o<0?0:o;return ie.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?B1:this.tr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new Gt(t,0),o=new Gt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([a,o],(c=>{const p=this.Xr(c.Yr);u.push(p)})),ie.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new zt(Ue);return t.forEach((o=>{const u=new Gt(o,0),c=new Gt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,c],(p=>{a=a.add(p.Yr)}))})),ie.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,o=a.length+1;let u=a;Ee.isDocumentKey(u)||(u=u.child(""));const c=new Gt(new Ee(u),0);let p=new zt(Ue);return this.Zr.forEachWhile((m=>{const g=m.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Yr)),!0)}),c),ie.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((a=>{const o=this.Xr(a);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Qe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return ie.forEach(t.mutations,(o=>{const u=new Gt(o.key,t.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=a}))}ir(e){}containsKey(e,t){const a=new Gt(t,0),o=this.Zr.firstAfterOrEqual(a);return ie.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.ri=e,this.docs=(function(){return new yt(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,o=this.docs.get(a),u=o?o.size:0,c=this.ri(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:c}),this.size+=c-u,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return ie.resolve(a?a.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let a=Di();return t.forEach((o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():cn.newInvalidDocument(o))})),ie.resolve(a)}getDocumentsMatchingQuery(e,t,a,o){let u=Di();const c=t.path,p=new Ee(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||D9(N9(v),a)<=0||(o.has(v.key)||yd(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return ie.resolve(u)}getAllFromCollectionGroup(e,t,a,o){we(9500)}ii(e,t){return ie.forEach(this.docs,(a=>t(a)))}newChangeBuffer(e){return new iD(this)}getSize(e){return ie.resolve(this.size)}}class iD extends XN{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((a,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(a)})),ie.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.persistence=e,this.si=new Bs((t=>$1(t)),q1),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new W1,this.targetCount=0,this.ai=tl.ur()}forEachTarget(e,t){return this.si.forEach(((a,o)=>t(o))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.oi&&(this.oi=t),ie.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new tl(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.Pr(t),ie.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,a){let o=0;const u=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&a.get(p.targetId)===null&&(this.si.delete(c),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),ie.waitFor(u).next((()=>o))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const a=this.si.get(t)||null;return ie.resolve(a)}addMatchingKeys(e,t,a){return this._i.Wr(t,a),ie.resolve()}removeMatchingKeys(e,t,a){this._i.zr(t,a);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((c=>{u.push(o.markPotentiallyOrphaned(e,c))})),ie.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const a=this._i.Hr(t);return ie.resolve(a)}containsKey(e,t){return ie.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(e,t){this.ui={},this.overlays={},this.ci=new hd(0),this.li=!1,this.li=!0,this.hi=new tD,this.referenceDelegate=e(this),this.Pi=new aD(this),this.indexManager=new HN,this.remoteDocumentCache=(function(o){return new rD(o)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new BN(t),this.Ii=new JN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.ui[e.toKey()];return a||(a=new nD(t,this.referenceDelegate),this.ui[e.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,a){de("MemoryPersistence","Starting transaction:",e);const o=new sD(this.ci.next());return this.referenceDelegate.Ei(),a(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return ie.or(Object.values(this.ui).map((a=>()=>a.containsKey(e,t))))}}class sD extends M9{constructor(e){super(),this.currentSequenceNumber=e}}class Z1{constructor(e){this.persistence=e,this.Ri=new W1,this.Vi=null}static mi(e){return new Z1(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,a){return this.Ri.addReference(a,t),this.fi.delete(a.toString()),ie.resolve()}removeReference(e,t,a){return this.Ri.removeReference(a,t),this.fi.add(a.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>a.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.fi,(a=>{const o=Ee.fromPath(a);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Re.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((a=>{a?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return ie.or([()=>ie.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class qh{constructor(e,t){this.persistence=e,this.pi=new Bs((a=>L9(a.path)),((a,o)=>a.isEqual(o))),this.garbageCollector=QN(this,t)}static mi(e,t){return new qh(e,t)}Ei(){}di(e){return ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((a=>t.next((o=>a+o))))}wr(e){let t=0;return this.pr(e,(a=>{t++})).next((()=>t))}pr(e,t){return ie.forEach(this.pi,((a,o)=>this.br(e,a,o).next((u=>u?ie.resolve():t(o)))))}removeTargets(e,t,a){return this.persistence.getTargetCache().removeTargets(e,t,a)}removeOrphanedDocuments(e,t){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(c=>this.br(e,c,t).next((p=>{p||(a++,u.removeEntry(c,Re.min()))})))).next((()=>u.apply(e))).next((()=>a))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ie.resolve()}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,t,a){return this.pi.set(a,e.currentSequenceNumber),ie.resolve()}removeReference(e,t,a){return this.pi.set(a,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ie.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=dh(e.data.value)),t}br(e,t,a){return ie.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ie.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t,a,o){this.targetId=e,this.fromCache=t,this.Es=a,this.ds=o}static As(e,t){let a=Be(),o=Be();for(const u of t.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new J1(e,t.fromCache,a,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return XC()?8:k9(fn())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,a,o){const u={result:null};return this.ys(e,t).next((c=>{u.result=c})).next((()=>{if(!u.result)return this.ws(e,t,o,a).next((c=>{u.result=c}))})).next((()=>{if(u.result)return;const c=new oD;return this.Ss(e,t,c).next((p=>{if(u.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>u.result))}bs(e,t,a,o){return a.documentReadCount<this.fs?(Vo()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",jo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ie.resolve()):(Vo()<=ze.DEBUG&&de("QueryEngine","Query:",jo(t),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.gs*o?(Vo()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",jo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jr(t))):ie.resolve())}ys(e,t){if(b4(t))return ie.resolve(null);let a=jr(t);return this.indexManager.getIndexType(e,a).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Fg(t,null,"F"),a=jr(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next((u=>{const c=Be(...u);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,a).next((m=>{const g=this.Ds(t,p);return this.Cs(t,g,c,m.readTime)?this.ys(e,Fg(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ws(e,t,a,o){return b4(t)||o.isEqual(Re.min())?ie.resolve(null):this.ps.getDocuments(e,a).next((u=>{const c=this.Ds(t,u);return this.Cs(t,c,a,o)?ie.resolve(null):(Vo()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),jo(t)),this.vs(e,c,t,I9(o,Wu)).next((p=>p)))}))}Ds(e,t){let a=new zt(s6(e));return t.forEach(((o,u)=>{yd(e,u)&&(a=a.add(u))})),a}Cs(e,t,a,o){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,a){return Vo()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",jo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ma.min(),a)}vs(e,t,a,o){return this.ps.getDocumentsMatchingQuery(e,a,o).next((u=>(t.forEach((c=>{u=u.insert(c.key,c)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="LocalStore",uD=3e8;class cD{constructor(e,t,a,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new yt(Ue),this.xs=new Bs((u=>$1(u)),q1),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(a)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function fD(n,e,t,a){return new cD(n,e,t,a)}async function N6(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(a=>{let o;return t.mutationQueue.getAllMutationBatches(a).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(a)))).next((u=>{const c=[],p=[];let m=Be();for(const g of o){c.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(a,m).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:p})))}))}))}function hD(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,g,v){const T=g.batch,A=T.keys();let C=ie.resolve();return A.forEach((U=>{C=C.next((()=>v.getEntry(m,U))).next(($=>{const V=g.docVersions.get(U);Qe(V!==null,48541),$.version.compareTo(V)<0&&(T.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),v.addEntry($)))}))})),C.next((()=>p.mutationQueue.removeMutationBatch(m,T)))})(t,a,e,u).next((()=>u.apply(a))).next((()=>t.mutationQueue.performConsistencyCheck(a))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let m=Be();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(a,o)))}))}function D6(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function dD(n,e){const t=Ie(n),a=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach(((v,T)=>{const A=o.get(T);if(!A)return;p.push(t.Pi.removeMatchingKeys(u,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(u,v.addedDocuments,T))));let C=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?C=C.withResumeToken(nn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,a)),o=o.insert(T,C),(function($,V,X){return $.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=uD?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(A,C,v)&&p.push(t.Pi.updateTargetData(u,C))}));let m=Di(),g=Be();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))})),p.push(pD(u,c,e.documentUpdates).next((v=>{m=v.ks,g=v.qs}))),!a.isEqual(Re.min())){const v=t.Pi.getLastRemoteSnapshotVersion(u).next((T=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,a)));p.push(v)}return ie.waitFor(p).next((()=>c.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,m,g))).next((()=>m))})).then((u=>(t.Ms=o,u)))}function pD(n,e,t){let a=Be(),o=Be();return t.forEach((u=>a=a.add(u))),e.getEntries(n,a).next((u=>{let c=Di();return t.forEach(((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Re.min())?(e.removeEntry(p,m.readTime),c=c.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(p,m)):de(e0,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)})),{ks:c,qs:o}}))}function mD(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(a=>(e===void 0&&(e=B1),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e))))}function gD(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(a=>{let o;return t.Pi.getTargetData(a,e).next((u=>u?(o=u,ie.resolve(o)):t.Pi.allocateTargetId(a).next((c=>(o=new wa(e,c,"TargetPurposeListen",a.currentSequenceNumber),t.Pi.addTargetData(a,o).next((()=>o)))))))})).then((a=>{const o=t.Ms.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(a.targetId,a),t.xs.set(e,a.targetId)),a}))}async function Yg(n,e,t){const a=Ie(n),o=a.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",u,(c=>a.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!gl(c))throw c;de(e0,`Failed to update sequence numbers for target ${e}: ${c}`)}a.Ms=a.Ms.remove(e),a.xs.delete(o.target)}function M4(n,e,t){const a=Ie(n);let o=Re.min(),u=Be();return a.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,v){const T=Ie(m),A=T.xs.get(v);return A!==void 0?ie.resolve(T.Ms.get(A)):T.Pi.getTargetData(g,v)})(a,c,jr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,a.Pi.getMatchingKeysForTargetId(c,p.targetId).next((m=>{u=m}))})).next((()=>a.Fs.getDocumentsMatchingQuery(c,e,t?o:Re.min(),t?u:Be()))).next((p=>(yD(a,nN(e),p),{documents:p,Qs:u})))))}function yD(n,e,t){let a=n.Os.get(e)||Re.min();t.forEach(((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)})),n.Os.set(e,a)}class k4{constructor(){this.activeTargetIds=lN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vD{constructor(){this.Mo=new k4,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,a){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new k4,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4="ConnectivityMonitor";class L4{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(P4,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(P4,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf=null;function Kg(){return Xf===null?Xf=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xf++,"0x"+Xf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="RestConnection",bD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ED{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${a}/databases/${o}`,this.Wo=this.databaseId.database===jh?`project_id=${a}`:`project_id=${a}&database_id=${o}`}Go(e,t,a,o,u){const c=Kg(),p=this.zo(e,t.toUriEncodedString());de(tg,`Sending RPC '${e}' ${c}:`,p,a);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,u);const{host:g}=new URL(p),v=fl(g);return this.Jo(e,p,m,a,v).then((T=>(de(tg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Wo(tg,`RPC '${e}' ${c} failed with error: `,T,"url: ",p,"request:",a),T}))}Ho(e,t,a,o,u,c){return this.Go(e,t,a,o,u)}jo(e,t,a){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),a&&a.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const a=bD[e];return`${this.Uo}/v1/${t}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="WebChannelConnection";class SD extends ED{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,a,o,u){const c=Kg();return new Promise(((p,m)=>{const g=new PE;g.setWithCredentials(!0),g.listenOnce(LE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case hh.NO_ERROR:const T=g.getResponseJson();de(ln,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),p(T);break;case hh.TIMEOUT:de(ln,`RPC '${e}' ${c} timed out`),m(new ve(ae.DEADLINE_EXCEEDED,"Request time out"));break;case hh.HTTP_ERROR:const A=g.getStatus();if(de(ln,`RPC '${e}' ${c} failed with status:`,A,"response text:",g.getResponseText()),A>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const U=C?.error;if(U&&U.status&&U.message){const $=(function(X){const Y=X.toLowerCase().replace(/_/g,"-");return Object.values(ae).indexOf(Y)>=0?Y:ae.UNKNOWN})(U.status);m(new ve($,U.message))}else m(new ve(ae.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ve(ae.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(ln,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(o);de(ln,`RPC '${e}' ${c} sending request:`,o),g.send(t,"POST",v,a,15)}))}T_(e,t,a){const o=Kg(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=zE(),p=jE(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,a),m.encodeInitMessageHeaders=!0;const v=u.join("");de(ln,`Creating RPC '${e}' stream ${o}: ${v}`,m);const T=c.createWebChannel(v,m);this.I_(T);let A=!1,C=!1;const U=new TD({Yo:V=>{C?de(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(A||(de(ln,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),de(ln,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Zo:()=>T.close()}),$=(V,X,Y)=>{V.listen(X,(W=>{try{Y(W)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return $(T,Du.EventType.OPEN,(()=>{C||(de(ln,`RPC '${e}' stream ${o} transport opened.`),U.o_())})),$(T,Du.EventType.CLOSE,(()=>{C||(C=!0,de(ln,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(T))})),$(T,Du.EventType.ERROR,(V=>{C||(C=!0,Wo(ln,`RPC '${e}' stream ${o} transport errored. Name:`,V.name,"Message:",V.message),U.a_(new ve(ae.UNAVAILABLE,"The operation could not be completed")))})),$(T,Du.EventType.MESSAGE,(V=>{if(!C){const X=V.data[0];Qe(!!X,16349);const Y=X,W=Y?.error||Y[0]?.error;if(W){de(ln,`RPC '${e}' stream ${o} received error:`,W);const fe=W.status;let te=(function(x){const R=Nt[x];if(R!==void 0)return v6(R)})(fe),he=W.message;te===void 0&&(te=ae.INTERNAL,he="Unknown error status: "+fe+" with message "+W.message),C=!0,U.a_(new ve(te,he)),T.close()}else de(ln,`RPC '${e}' stream ${o} received:`,X),U.u_(X)}})),$(p,VE.STAT_EVENT,(V=>{V.stat===Lg.PROXY?de(ln,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Lg.NOPROXY&&de(ln,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ng(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){return new RN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e,t,a=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=a,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-a);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4="PersistentStream";class M6{constructor(e,t,a,o,u,c,p,m){this.Mi=e,this.S_=a,this.b_=o,this.connection=u,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new O6(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ae.RESOURCE_EXHAUSTED?(Ni(t.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ae.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,o])=>{this.D_===t&&this.G_(a,o)}),(a=>{e((()=>{const o=new ve(ae.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(o)}))}))}G_(e,t){const a=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{a((()=>this.z_(o)))})),this.stream.onMessage((o=>{a((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return de(V4,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(de(V4,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wD extends M6{constructor(e,t,a,o,u,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,o,c),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=NN(this.serializer,e),a=(function(u){if(!("targetChange"in u))return Re.min();const c=u.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?zr(c.readTime):Re.min()})(e);return this.listener.H_(t,a)}Y_(e){const t={};t.database=Gg(this.serializer),t.addTarget=(function(u,c){let p;const m=c.target;if(p=Bg(m)?{documents:MN(u,m)}:{query:kN(u,m).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=E6(u,c.resumeToken);const g=Hg(u,c.expectedCount);g!==null&&(p.expectedCount=g)}else if(c.snapshotVersion.compareTo(Re.min())>0){p.readTime=$h(u,c.snapshotVersion.toTimestamp());const g=Hg(u,c.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,e);const a=LN(this.serializer,e);a&&(t.labels=a),this.q_(t)}Z_(e){const t={};t.database=Gg(this.serializer),t.removeTarget=e,this.q_(t)}}class AD extends M6{constructor(e,t,a,o,u,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,o,c),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ON(e.writeResults,e.commitTime),a=zr(e.commitTime);return this.listener.na(a,t)}ra(){const e={};e.database=Gg(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((a=>DN(this.serializer,a)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{}class RD extends xD{constructor(e,t,a,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ve(ae.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,a,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Go(e,$g(t,a),o,u,c))).catch((u=>{throw u.name==="FirebaseError"?(u.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ve(ae.UNKNOWN,u.toString())}))}Ho(e,t,a,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,$g(t,a),o,c,p,u))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(ae.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class CD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ni(t),this.aa=!1):de("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="RemoteStore";class ID{constructor(e,t,a,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((c=>{a.enqueueAndForget((async()=>{Hs(this)&&(de(js,"Restarting streams for network reachability change."),await(async function(m){const g=Ie(m);g.Ea.add(4),await _c(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Td(g)})(this))}))})),this.Ra=new CD(a,o)}}async function Td(n){if(Hs(n))for(const e of n.da)await e(!0)}async function _c(n){for(const e of n.da)await e(!1)}function k6(n,e){const t=Ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),i0(t)?r0(t):yl(t).O_()&&n0(t,e))}function t0(n,e){const t=Ie(n),a=yl(t);t.Ia.delete(e),a.O_()&&P6(t,e),t.Ia.size===0&&(a.O_()?a.L_():Hs(t)&&t.Ra.set("Unknown"))}function n0(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yl(n).Y_(e)}function P6(n,e){n.Va.Ue(e),yl(n).Z_(e)}function r0(n){n.Va=new SN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),yl(n).start(),n.Ra.ua()}function i0(n){return Hs(n)&&!yl(n).x_()&&n.Ia.size>0}function Hs(n){return Ie(n).Ea.size===0}function L6(n){n.Va=void 0}async function ND(n){n.Ra.set("Online")}async function DD(n){n.Ia.forEach(((e,t)=>{n0(n,e)}))}async function OD(n,e){L6(n),i0(n)?(n.Ra.ha(e),r0(n)):n.Ra.set("Unknown")}async function MD(n,e,t){if(n.Ra.set("Online"),e instanceof b6&&e.state===2&&e.cause)try{await(async function(o,u){const c=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,c),o.Ia.delete(p),o.Va.removeTarget(p))})(n,e)}catch(a){de(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Gh(n,a)}else if(e instanceof gh?n.Va.Ze(e):e instanceof _6?n.Va.st(e):n.Va.tt(e),!t.isEqual(Re.min()))try{const a=await D6(n.localStore);t.compareTo(a)>=0&&await(function(u,c){const p=u.Va.Tt(c);return p.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.Ia.get(g);v&&u.Ia.set(g,v.withResumeToken(m.resumeToken,c))}})),p.targetMismatches.forEach(((m,g)=>{const v=u.Ia.get(m);if(!v)return;u.Ia.set(m,v.withResumeToken(nn.EMPTY_BYTE_STRING,v.snapshotVersion)),P6(u,m);const T=new wa(v.target,m,g,v.sequenceNumber);n0(u,T)})),u.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(a){de(js,"Failed to raise snapshot:",a),await Gh(n,a)}}async function Gh(n,e,t){if(!gl(e))throw e;n.Ea.add(1),await _c(n),n.Ra.set("Offline"),t||(t=()=>D6(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(js,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Td(n)}))}function V6(n,e){return e().catch((t=>Gh(n,t,e)))}async function Sd(n){const e=Ie(n),t=Va(e);let a=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:B1;for(;kD(e);)try{const o=await mD(e.localStore,a);if(o===null){e.Ta.length===0&&t.L_();break}a=o.batchId,PD(e,o)}catch(o){await Gh(e,o)}j6(e)&&z6(e)}function kD(n){return Hs(n)&&n.Ta.length<10}function PD(n,e){n.Ta.push(e);const t=Va(n);t.O_()&&t.X_&&t.ea(e.mutations)}function j6(n){return Hs(n)&&!Va(n).x_()&&n.Ta.length>0}function z6(n){Va(n).start()}async function LD(n){Va(n).ra()}async function VD(n){const e=Va(n);for(const t of n.Ta)e.ea(t.mutations)}async function jD(n,e,t){const a=n.Ta.shift(),o=K1.from(a,e,t);await V6(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Sd(n)}async function zD(n,e){e&&Va(n).X_&&await(async function(a,o){if((function(c){return bN(c)&&c!==ae.ABORTED})(o.code)){const u=a.Ta.shift();Va(a).B_(),await V6(a,(()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Sd(a)}})(n,e),j6(n)&&z6(n)}async function j4(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),de(js,"RemoteStore received new credentials");const a=Hs(t);t.Ea.add(3),await _c(t),a&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Td(t)}async function UD(n,e){const t=Ie(n);e?(t.Ea.delete(2),await Td(t)):e||(t.Ea.add(2),await _c(t),t.Ra.set("Unknown"))}function yl(n){return n.ma||(n.ma=(function(t,a,o){const u=Ie(t);return u.sa(),new wD(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:ND.bind(null,n),t_:DD.bind(null,n),r_:OD.bind(null,n),H_:MD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),i0(n)?r0(n):n.Ra.set("Unknown")):(await n.ma.stop(),L6(n))}))),n.ma}function Va(n){return n.fa||(n.fa=(function(t,a,o){const u=Ie(t);return u.sa(),new AD(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:LD.bind(null,n),r_:zD.bind(null,n),ta:VD.bind(null,n),na:jD.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Sd(n)):(await n.fa.stop(),n.Ta.length>0&&(de(js,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,a,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new Ia,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,o,u){const c=Date.now()+a,p=new a0(e,t,c,o,u);return p.start(a),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ae.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s0(n,e){if(Ni("AsyncQueue",`${e}: ${n}`),gl(n))return new ve(ae.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,a)=>e(t,a)||Ee.comparator(t.key,a.key):(t,a)=>Ee.comparator(t.key,a.key),this.keyedMap=Ou(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,a)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new Yo;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(){this.ga=new yt(Ee.comparator)}track(e){const t=e.doc.key,a=this.ga.get(t);a?e.type!==0&&a.type===3?this.ga=this.ga.insert(t,e):e.type===3&&a.type!==1?this.ga=this.ga.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.ga=this.ga.remove(t):e.type===1&&a.type===2?this.ga=this.ga.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:a}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,a)=>{e.push(a)})),e}}class nl{constructor(e,t,a,o,u,c,p,m,g){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,a,o,u){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new nl(e,t,Yo.emptySet(t),c,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==a[o].type||!t[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class FD{constructor(){this.queries=U4(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,a){const o=Ie(t),u=o.queries;o.queries=U4(),u.forEach(((c,p)=>{for(const m of p.Sa)m.onError(a)}))})(this,new ve(ae.ABORTED,"Firestore shutting down"))}}function U4(){return new Bs((n=>a6(n)),gd)}async function HD(n,e){const t=Ie(n);let a=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(a=2):(u=new BD,a=e.Da()?0:1);try{switch(a){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const p=s0(c,`Initialization of query '${jo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&o0(t)}async function $D(n,e){const t=Ie(n),a=e.query;let o=3;const u=t.queries.get(a);if(u){const c=u.Sa.indexOf(e);c>=0&&(u.Sa.splice(c,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(a),t.onUnlisten(a,!0);case 1:return t.queries.delete(a),t.onUnlisten(a,!1);case 2:return t.onLastRemoteStoreUnlisten(a);default:return}}function qD(n,e){const t=Ie(n);let a=!1;for(const o of e){const u=o.query,c=t.queries.get(u);if(c){for(const p of c.Sa)p.Fa(o)&&(a=!0);c.wa=o}}a&&o0(t)}function GD(n,e,t){const a=Ie(n),o=a.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);a.queries.delete(e)}function o0(n){n.Ca.forEach((e=>{e.next()}))}var Qg,B4;(B4=Qg||(Qg={})).Ma="default",B4.Cache="cache";class YD{constructor(e,t,a){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=a||{}}Fa(e){if(!this.options.includeMetadataChanges){const a=[];for(const o of e.docChanges)o.type!==3&&a.push(o);e=new nl(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const a=t!=="Offline";return(!this.options.qa||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=nl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U6{constructor(e){this.key=e}}class B6{constructor(e){this.key=e}}class KD{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Be(),this.mutatedKeys=Be(),this.eu=s6(e),this.tu=new Yo(this.eu)}get nu(){return this.Ya}ru(e,t){const a=t?t.iu:new z4,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,c=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const A=o.get(v),C=yd(this.query,T)?T:null,U=!!A&&this.mutatedKeys.has(A.key),$=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;A&&C?A.data.isEqual(C.data)?U!==$&&(a.track({type:3,doc:C}),V=!0):this.su(A,C)||(a.track({type:2,doc:C}),V=!0,(m&&this.eu(C,m)>0||g&&this.eu(C,g)<0)&&(p=!0)):!A&&C?(a.track({type:0,doc:C}),V=!0):A&&!C&&(a.track({type:1,doc:A}),V=!0,(m||g)&&(p=!0)),V&&(C?(c=c.add(C),u=$?u.add(v):u.delete(v)):(c=c.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),u=u.delete(v.key),a.track({type:1,doc:v})}return{tu:c,iu:a,Cs:p,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(C,U){const $=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:V})}};return $(C)-$(U)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(a),o=o??!1;const p=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,g=m!==this.Za;return this.Za=m,c.length!==0||g?{snapshot:new nl(this.query,e.tu,u,c,e.mutatedKeys,m===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new z4,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Be(),this.tu.forEach((a=>{this.uu(a.key)&&(this.Xa=this.Xa.add(a.key))}));const t=[];return e.forEach((a=>{this.Xa.has(a)||t.push(new B6(a))})),this.Xa.forEach((a=>{e.has(a)||t.push(new U6(a))})),t}cu(e){this.Ya=e.Qs,this.Xa=Be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return nl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const l0="SyncEngine";class QD{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class XD{constructor(e){this.key=e,this.hu=!1}}class WD{constructor(e,t,a,o,u,c){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Bs((p=>a6(p)),gd),this.Iu=new Map,this.Eu=new Set,this.du=new yt(Ee.comparator),this.Au=new Map,this.Ru=new W1,this.Vu={},this.mu=new Map,this.fu=tl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ZD(n,e,t=!0){const a=Y6(n);let o;const u=a.Tu.get(e);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await F6(a,e,t,!0),o}async function JD(n,e){const t=Y6(n);await F6(t,e,!0,!1)}async function F6(n,e,t,a){const o=await gD(n.localStore,jr(e)),u=o.targetId,c=n.sharedClientState.addLocalQueryTarget(u,t);let p;return a&&(p=await eO(n,e,u,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&k6(n.remoteStore,o),p}async function eO(n,e,t,a,o){n.pu=(T,A,C)=>(async function($,V,X,Y){let W=V.view.ru(X);W.Cs&&(W=await M4($.localStore,V.query,!1).then((({documents:I})=>V.view.ru(I,W))));const fe=Y&&Y.targetChanges.get(V.targetId),te=Y&&Y.targetMismatches.get(V.targetId)!=null,he=V.view.applyChanges(W,$.isPrimaryClient,fe,te);return H4($,V.targetId,he.au),he.snapshot})(n,T,A,C);const u=await M4(n.localStore,e,!0),c=new KD(e,u.Qs),p=c.ru(u.documents),m=vc.createSynthesizedTargetChangeForCurrentChange(t,a&&n.onlineState!=="Offline",o),g=c.applyChanges(p,n.isPrimaryClient,m);H4(n,t,g.au);const v=new QD(e,t,c);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function tO(n,e,t){const a=Ie(n),o=a.Tu.get(e),u=a.Iu.get(o.targetId);if(u.length>1)return a.Iu.set(o.targetId,u.filter((c=>!gd(c,e)))),void a.Tu.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Yg(a.localStore,o.targetId,!1).then((()=>{a.sharedClientState.clearQueryState(o.targetId),t&&t0(a.remoteStore,o.targetId),Xg(a,o.targetId)})).catch(ml)):(Xg(a,o.targetId),await Yg(a.localStore,o.targetId,!0))}async function nO(n,e){const t=Ie(n),a=t.Tu.get(e),o=t.Iu.get(a.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(a.targetId),t0(t.remoteStore,a.targetId))}async function rO(n,e,t){const a=cO(n);try{const o=await(function(c,p){const m=Ie(c),g=ut.now(),v=p.reduce(((C,U)=>C.add(U.key)),Be());let T,A;return m.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let U=Di(),$=Be();return m.Ns.getEntries(C,v).next((V=>{U=V,U.forEach(((X,Y)=>{Y.isValidDocument()||($=$.add(X))}))})).next((()=>m.localDocuments.getOverlayedDocuments(C,U))).next((V=>{T=V;const X=[];for(const Y of p){const W=mN(Y,T.get(Y.key).overlayedDocument);W!=null&&X.push(new Fs(Y.key,W,ZE(W.value.mapValue),wi.exists(!0)))}return m.mutationQueue.addMutationBatch(C,g,X,p)})).next((V=>{A=V;const X=V.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(C,V.batchId,X)}))})).then((()=>({batchId:A.batchId,changes:l6(T)})))})(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),(function(c,p,m){let g=c.Vu[c.currentUser.toKey()];g||(g=new yt(Ue)),g=g.insert(p,m),c.Vu[c.currentUser.toKey()]=g})(a,o.batchId,t),await bc(a,o.changes),await Sd(a.remoteStore)}catch(o){const u=s0(o,"Failed to persist write");t.reject(u)}}async function H6(n,e){const t=Ie(n);try{const a=await dD(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const c=t.Au.get(u);c&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?Qe(c.hu,14607):o.removedDocuments.size>0&&(Qe(c.hu,42227),c.hu=!1))})),await bc(t,a,e)}catch(a){await ml(a)}}function F4(n,e,t){const a=Ie(n);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const o=[];a.Tu.forEach(((u,c)=>{const p=c.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(c,p){const m=Ie(c);m.onlineState=p;let g=!1;m.queries.forEach(((v,T)=>{for(const A of T.Sa)A.va(p)&&(g=!0)})),g&&o0(m)})(a.eventManager,e),o.length&&a.Pu.H_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function iO(n,e,t){const a=Ie(n);a.sharedClientState.updateQueryState(e,"rejected",t);const o=a.Au.get(e),u=o&&o.key;if(u){let c=new yt(Ee.comparator);c=c.insert(u,cn.newNoDocument(u,Re.min()));const p=Be().add(u),m=new bd(Re.min(),new Map,new yt(Ue),c,p);await H6(a,m),a.du=a.du.remove(u),a.Au.delete(e),u0(a)}else await Yg(a.localStore,e,!1).then((()=>Xg(a,e,t))).catch(ml)}async function aO(n,e){const t=Ie(n),a=e.batch.batchId;try{const o=await hD(t.localStore,e);q6(t,a,null),$6(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await bc(t,o)}catch(o){await ml(o)}}async function sO(n,e,t){const a=Ie(n);try{const o=await(function(c,p){const m=Ie(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next((T=>(Qe(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(a.localStore,e);q6(a,e,t),$6(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await bc(a,o)}catch(o){await ml(o)}}function $6(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function q6(n,e,t){const a=Ie(n);let o=a.Vu[a.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),a.Vu[a.currentUser.toKey()]=o}}function Xg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const a of n.Iu.get(e))n.Tu.delete(a),t&&n.Pu.yu(a,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((a=>{n.Ru.containsKey(a)||G6(n,a)}))}function G6(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(t0(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),u0(n))}function H4(n,e,t){for(const a of t)a instanceof U6?(n.Ru.addReference(a.key,e),oO(n,a)):a instanceof B6?(de(l0,"Document no longer in limbo: "+a.key),n.Ru.removeReference(a.key,e),n.Ru.containsKey(a.key)||G6(n,a.key)):we(19791,{wu:a})}function oO(n,e){const t=e.key,a=t.path.canonicalString();n.du.get(t)||n.Eu.has(a)||(de(l0,"New document in limbo: "+t),n.Eu.add(a),u0(n))}function u0(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Ee(mt.fromString(e)),a=n.fu.next();n.Au.set(a,new XD(t)),n.du=n.du.insert(t,a),k6(n.remoteStore,new wa(jr(G1(t.path)),a,"TargetPurposeLimboResolution",hd.ce))}}async function bc(n,e,t){const a=Ie(n),o=[],u=[],c=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,m)=>{c.push(a.pu(m,e,t).then((g=>{if((g||t)&&a.isPrimaryClient){const v=g?!g.fromCache:t?.targetChanges.get(m.targetId)?.current;a.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(g){o.push(g);const v=J1.As(m.targetId,g);u.push(v)}})))})),await Promise.all(c),a.Pu.H_(o),await(async function(m,g){const v=Ie(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>ie.forEach(g,(A=>ie.forEach(A.Es,(C=>v.persistence.referenceDelegate.addReference(T,A.targetId,C))).next((()=>ie.forEach(A.ds,(C=>v.persistence.referenceDelegate.removeReference(T,A.targetId,C)))))))))}catch(T){if(!gl(T))throw T;de(e0,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const C=v.Ms.get(A),U=C.snapshotVersion,$=C.withLastLimboFreeSnapshotVersion(U);v.Ms=v.Ms.insert(A,$)}}})(a.localStore,u))}async function lO(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){de(l0,"User change. New user:",e.toKey());const a=await N6(t.localStore,e);t.currentUser=e,(function(u,c){u.mu.forEach((p=>{p.forEach((m=>{m.reject(new ve(ae.CANCELLED,c))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await bc(t,a.Ls)}}function uO(n,e){const t=Ie(n),a=t.Au.get(e);if(a&&a.hu)return Be().add(a.key);{let o=Be();const u=t.Iu.get(e);if(!u)return o;for(const c of u){const p=t.Tu.get(c);o=o.unionWith(p.view.nu)}return o}}function Y6(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=H6.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iO.bind(null,e),e.Pu.H_=qD.bind(null,e.eventManager),e.Pu.yu=GD.bind(null,e.eventManager),e}function cO(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sO.bind(null,e),e}class Yh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ed(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return fD(this.persistence,new lD,e.initialUser,this.serializer)}Cu(e){return new I6(Z1.mi,this.serializer)}Du(e){return new vD}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yh.provider={build:()=>new Yh};class fO extends Yh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Qe(this.persistence.referenceDelegate instanceof qh,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new YN(a,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new I6((a=>qh.mi(a,t)),this.serializer)}}class Wg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>F4(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=lO.bind(null,this.syncEngine),await UD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FD})()}createDatastore(e){const t=Ed(e.databaseInfo.databaseId),a=(function(u){return new SD(u)})(e.databaseInfo);return(function(u,c,p,m){return new RD(u,c,p,m)})(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return(function(a,o,u,c,p){return new ID(a,o,u,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>F4(this.syncEngine,t,0)),(function(){return L4.v()?new L4:new _D})())}createSyncEngine(e,t){return(function(o,u,c,p,m,g,v){const T=new WD(o,u,c,p,m,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const a=Ie(t);de(js,"RemoteStore shutting down."),a.Ea.add(5),await _c(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Wg.provider={build:()=>new Wg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ni("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="FirestoreClient";class dO{constructor(e,t,a,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=o,this.user=un.UNAUTHENTICATED,this.clientId=z1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,(async c=>{de(ja,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(a,(c=>(de(ja,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ia;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=s0(t,"Failed to shutdown persistence");e.reject(a)}})),e.promise}}async function rg(n,e){n.asyncQueue.verifyOperationInProgress(),de(ja,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let a=t.initialUser;n.setCredentialChangeListener((async o=>{a.isEqual(o)||(await N6(e.localStore,o),a=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function $4(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pO(n);de(ja,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((a=>j4(e.remoteStore,a))),n.setAppCheckTokenChangeListener(((a,o)=>j4(e.remoteStore,o))),n._onlineComponents=e}async function pO(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(ja,"Using user provided OfflineComponentProvider");try{await rg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ae.FAILED_PRECONDITION||o.code===ae.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Wo("Error using user provided cache. Falling back to memory cache: "+t),await rg(n,new Yh)}}else de(ja,"Using default OfflineComponentProvider"),await rg(n,new fO(void 0));return n._offlineComponents}async function K6(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(ja,"Using user provided OnlineComponentProvider"),await $4(n,n._uninitializedComponentsProvider._online)):(de(ja,"Using default OnlineComponentProvider"),await $4(n,new Wg))),n._onlineComponents}function mO(n){return K6(n).then((e=>e.syncEngine))}async function gO(n){const e=await K6(n),t=e.eventManager;return t.onListen=ZD.bind(null,e.syncEngine),t.onUnlisten=tO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nO.bind(null,e.syncEngine),t}function yO(n,e,t={}){const a=new Ia;return n.asyncQueue.enqueueAndForget((async()=>(function(u,c,p,m,g){const v=new hO({next:A=>{v.Nu(),c.enqueueAndForget((()=>$D(u,T)));const C=A.docs.has(p);!C&&A.fromCache?g.reject(new ve(ae.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&A.fromCache&&m&&m.source==="server"?g.reject(new ve(ae.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new YD(G1(p.path),v,{includeMetadataChanges:!0,qa:!0});return HD(u,T)})(await gO(n),n.asyncQueue,e,t,a))),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X6="firestore.googleapis.com",G4=!0;class Y4{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X6,this.ssl=G4}else this.host=e.host,this.ssl=e.ssl??G4;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C6;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qN)throw new ve(ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q6(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ve(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ve(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ve(ae.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class c0{constructor(e,t,a,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Y4({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Y4(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new y9;switch(a.type){case"firstParty":return new E9(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ve(ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const a=q4.get(t);a&&(de("ComponentProvider","Removing Datastore"),q4.delete(t),a.terminate())})(this),Promise.resolve()}}function vO(n,e,t,a={}){n=Xu(n,c0);const o=fl(e),u=n._getSettings(),c={...u,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;o&&(X3(`https://${p}`),W3("Firestore",!0)),u.host!==X6&&u.host!==p&&Wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...u,host:p,ssl:o,emulatorOptions:a};if(!ks(m,c)&&(n._setSettings(m),a.mockUserToken)){let g,v;if(typeof a.mockUserToken=="string")g=a.mockUserToken,v=un.MOCK_USER;else{g=BC(a.mockUserToken,n._app?.options.projectId);const T=a.mockUserToken.sub||a.mockUserToken.user_id;if(!T)throw new ve(ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new un(T)}n._authCredentials=new v9(new BE(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new f0(this.firestore,e,this._query)}}class Kt{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}toJSON(){return{type:Kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,a){if(gc(t,Kt._jsonSchema))return new Kt(e,a||null,new Ee(mt.fromString(t.referencePath)))}}Kt._jsonSchemaVersion="firestore/documentReference/1.0",Kt._jsonSchema={type:Ot("string",Kt._jsonSchemaVersion),referencePath:Ot("string")};class rc extends f0{constructor(e,t,a){super(e,t,G1(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new Ee(e))}withConverter(e){return new rc(this.firestore,e,this._path)}}function _O(n,e,...t){if(n=Wn(n),arguments.length===1&&(e=z1.newId()),R9("doc","path",e),n instanceof c0){const a=mt.fromString(e,...t);return o4(a),new Kt(n,null,new Ee(a))}{if(!(n instanceof Kt||n instanceof rc))throw new ve(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(mt.fromString(e,...t));return o4(a),new Kt(n.firestore,n instanceof rc?n.converter:null,new Ee(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4="AsyncQueue";class Q4{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new O6(this,"async_queue_retry"),this._c=()=>{const a=ng();a&&de(K4,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const t=ng();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ng();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ia;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gl(e))throw e;de(K4,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,Ni("INTERNAL UNHANDLED ERROR: ",X4(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=t,t}enqueueAfterDelay(e,t,a){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=a0.createAndSchedule(this,e,t,a,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:X4(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,a)=>t.targetTimeMs-a.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function X4(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class h0 extends c0{constructor(e,t,a,o){super(e,t,a,o),this.type="firestore",this._queue=new Q4,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Q4(e),this._firestoreClient=void 0,await e}}}function bO(n,e){const t=typeof n=="object"?n:tE(),a=typeof n=="string"?n:jh,o=R1(t,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=zC("firestore");u&&vO(o,...u)}return o}function W6(n){if(n._terminated)throw new ve(ae.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EO(n),n._firestoreClient}function EO(n){const e=n._freezeSettings(),t=(function(o,u,c,p){return new z9(o,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Q6(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dO(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(nn.fromBase64String(e))}catch(t){throw new ve(ae.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gc(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Ot("string",Xn._jsonSchemaVersion),bytes:Ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(ae.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(ae.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(ae.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ur._jsonSchemaVersion}}static fromJSON(e){if(gc(e,Ur._jsonSchema))return new Ur(e.latitude,e.longitude)}}Ur._jsonSchemaVersion="firestore/geoPoint/1.0",Ur._jsonSchema={type:Ot("string",Ur._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Br._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gc(e,Br._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Br(e.vectorValues);throw new ve(ae.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Br._jsonSchemaVersion="firestore/vectorValue/1.0",Br._jsonSchema={type:Ot("string",Br._jsonSchemaVersion),vectorValues:Ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=/^__.*__$/;class SO{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new yc(e,this.data,t,this.fieldTransforms)}}function J6(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:n})}}class p0{constructor(e,t,a,o,u,c){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new p0({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),a=this.Vc({path:t,fc:!1});return a.gc(e),a}yc(e){const t=this.path?.child(e),a=this.Vc({path:t,fc:!1});return a.Rc(),a}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Kh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(J6(this.Ac)&&TO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class wO{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Ed(e)}Cc(e,t,a,o=!1){return new p0({Ac:e,methodName:t,Dc:a,path:en.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AO(n){const e=n._freezeSettings(),t=Ed(n._databaseId);return new wO(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xO(n,e,t,a,o,u={}){const c=n.Cc(u.merge||u.mergeFields?2:0,e,t,o);rT("Data must be an object, but it was:",c,a);const p=tT(a,c);let m,g;if(u.merge)m=new dr(c.fieldMask),g=c.fieldTransforms;else if(u.mergeFields){const v=[];for(const T of u.mergeFields){const A=RO(e,T,t);if(!c.contains(A))throw new ve(ae.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);IO(v,A)||v.push(A)}m=new dr(v),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new SO(new Qn(p),m,g)}function eT(n,e){if(nT(n=Wn(n)))return rT("Unsupported field value:",e,n),tT(n,e);if(n instanceof Z6)return(function(a,o){if(!J6(o.Ac))throw o.Sc(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(a,o){const u=[];let c=0;for(const p of a){let m=eT(p,o.wc(c));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),c++}return{arrayValue:{values:u}}})(n,e)}return(function(a,o){if((a=Wn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return uN(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=ut.fromDate(a);return{timestampValue:$h(o.serializer,u)}}if(a instanceof ut){const u=new ut(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:$h(o.serializer,u)}}if(a instanceof Ur)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Xn)return{bytesValue:E6(o.serializer,a._byteString)};if(a instanceof Kt){const u=o.databaseId,c=a.firestore._databaseId;if(!c.isEqual(u))throw o.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:X1(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Br)return(function(c,p){return{mapValue:{fields:{[XE]:{stringValue:WE},[zh]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw p.Sc("VectorValues must only contain numeric values.");return Y1(p.serializer,g)}))}}}}}})(a,o);throw o.Sc(`Unsupported field value: ${U1(a)}`)})(n,e)}function tT(n,e){const t={};return $E(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(n,((a,o)=>{const u=eT(o,e.mc(a));u!=null&&(t[a]=u)})),{mapValue:{fields:t}}}function nT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof Ur||n instanceof Xn||n instanceof Kt||n instanceof Z6||n instanceof Br)}function rT(n,e,t){if(!nT(t)||!FE(t)){const a=U1(t);throw a==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+a)}}function RO(n,e,t){if((e=Wn(e))instanceof d0)return e._internalPath;if(typeof e=="string")return iT(n,e);throw Kh("Field path arguments must be of type string or ",n,!1,void 0,t)}const CO=new RegExp("[~\\*/\\[\\]]");function iT(n,e,t){if(e.search(CO)>=0)throw Kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new d0(...e.split("."))._internalPath}catch{throw Kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Kh(n,e,t,a,o){const u=a&&!a.isEmpty(),c=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||c)&&(m+=" (found",u&&(m+=` in field ${a}`),c&&(m+=` in document ${o}`),m+=")"),new ve(ae.INVALID_ARGUMENT,p+n+m)}function IO(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,a,o,u){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sT("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NO extends aT{data(){return super.data()}}function sT(n,e){return typeof e=="string"?iT(n,e):e instanceof d0?e._internalPath:e._delegate._internalPath}class DO{convertValue(e,t="none"){switch(La(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return Us(e,((o,u)=>{a[o]=this.convertValue(u,t)})),a}convertVectorValue(e){const t=e.fields?.[zh].arrayValue?.values?.map((a=>Rt(a.doubleValue)));return new Br(t)}convertGeoPoint(e){return new Ur(Rt(e.latitude),Rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((a=>this.convertValue(a,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const a=pd(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(Zu(e));default:return null}}convertTimestamp(e){const t=ka(e);return new ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=mt.fromString(e);Qe(R6(a),9688,{name:e});const o=new Ju(a.get(1),a.get(3)),u=new Ee(a.popFirst(5));return o.isEqual(t)||Ni(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(n,e,t){let a;return a=n?n.toFirestore(e):e,a}class ku{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends aT{constructor(e,t,a,o,u,c){super(e,t,a,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(sT("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ae.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:Ot("string",Cs._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class yh extends Cs{data(e={}){return super.data(e)}}class $u{constructor(e,t,a,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ku(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((a=>{e.call(t,new yh(this._firestore,this._userDataWriter,a.key,a,new ku(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ve(ae.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((p=>{const m=new yh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ku(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const m=new yh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ku(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),v=c.indexOf(p.doc.key)),{type:MO(p.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ae.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$u._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=z1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],a=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),a.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MO(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(n){n=Xu(n,Kt);const e=Xu(n.firestore,h0);return yO(W6(e),n._key).then((t=>jO(e,n,t)))}$u._jsonSchemaVersion="firestore/querySnapshot/1.0",$u._jsonSchema={type:Ot("string",$u._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class PO extends DO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,t)}}function LO(n,e,t){n=Xu(n,Kt);const a=Xu(n.firestore,h0),o=OO(n.converter,e);return VO(a,[xO(AO(a),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,wi.none())])}function VO(n,e){return(function(a,o){const u=new Ia;return a.asyncQueue.enqueueAndForget((async()=>rO(await mO(a),o,u))),u.promise})(W6(n),e)}function jO(n,e,t){const a=t.docs.get(e._key),o=new PO(n);return new Cs(n,o,e._key,a,new ku(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){pl=o})(hl),Qo(new Ps("firestore",((a,{instanceIdentifier:o,options:u})=>{const c=a.getProvider("app").getImmediate(),p=new h0(new _9(a.getProvider("auth-internal")),new T9(c,a.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ve(ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ju(g.options.projectId,v)})(c,o),c);return u={useFetchStreams:t,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Ra(r4,i4,e),Ra(r4,i4,"esm2020")})();const zO={apiKey:"AIzaSyA_sGb70xjfwbFf6P0aS6D54jrn0Nj4lmY",authDomain:"practice-e1c27.firebaseapp.com",projectId:"practice-e1c27",storageBucket:"practice-e1c27.firebasestorage.app",messagingSenderId:"590787407251",appId:"1:590787407251:web:5ed9822d3b60b5bda1cc66"},oT=eE(zO),lT=new bi;lT.setCustomParameters({prompt:"select_account"});const Zg=m9(oT),UO=()=>w7(Zg,lT),BO=bO(oT),FO=async(n,e={})=>{if(!n)return;const t=_O(BO,"users",n.uid);if(!(await kO(t)).exists()){const{displayName:o,email:u}=n,c=new Date;try{await LO(t,{displayName:o,email:u,createdAt:c,...e})}catch(p){console.log("error creating the user",p.message)}}return t},uT=Q.createContext(),cT=()=>Q.useContext(uT),HO=({children:n})=>{const[e,t]=Q.useState(null),[a,o]=Q.useState(!0),u=async()=>{try{const m=await UO();console.log(m);const{user:g}=m;return{success:!0,userDocRef:await FO(g)}}catch(m){return console.error("Google 登入失敗:",m),{success:!1,error:m.message}}},c=async()=>{try{await i7(Zg)}catch(m){console.error("登出失敗",m)}};Q.useEffect(()=>{const m=r7(Zg,g=>{t(g),o(!1)});return()=>m()},[]);const p=!!e;return E.jsx(uT.Provider,{value:{isLoggedIn:p,user:e,signInWithGoogle:u,logout:c},children:!a&&n})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var $O={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z"]},qO={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},GO=qO,YO={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]},KO={prefix:"fas",iconName:"trophy",icon:[512,512,[127942],"f091","M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z"]},QO={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},XO={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},WO={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},fT={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z"]},m0=fT,ZO={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},JO={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"]},eM={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},tM={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z"]},hT={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z"]},dT={prefix:"fas",iconName:"thumbs-down",icon:[512,512,[128078,61576],"f165","M384 32c26.5 0 48 21.5 48 48 0 6.3-1.3 12.2-3.4 17.7 20.4 5.5 35.4 24.1 35.4 46.3 0 9.1-2.6 17.6-7 24.9 22.2 4.2 39 23.7 39 47.1 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 26.5-21.5 48-48 48l-160 0 28.2 70.4c2.5 6.3 3.8 13.1 3.8 19.9l0 4.2c0 27.3-22.1 49.4-49.4 49.4-18.7 0-35.8-10.6-44.2-27.3L170.1 356.3c-6.7-13.3-10.1-28-10.1-42.9l0-186.6c0-19.4 8.9-37.8 24-50l12.2-9.7C224.6 44.4 259.8 32 296.1 32L384 32zM80 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l48 0z"]},nM={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96l0 128c0 53 43 96 96 96s96-43 96-96l0-128c0-53-43-96-96-96zM48 184c0-13.3-10.7-24-24-24S0 170.7 0 184l0 40c0 97.9 73.3 178.7 168 190.5l0 49.5-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-49.5c94.7-11.8 168-92.6 168-190.5l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 79.5-64.5 144-144 144S48 303.5 48 224l0-40z"]},rM={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},Wf=rM,pT={prefix:"fas",iconName:"rectangle-list",icon:[512,512,["list-alt"],"f022","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm120-56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},mT={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M80 160c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 192c0-17.7 14.3-32 32-32l48 0zM270.6 16C297.9 16 320 38.1 320 65.4l0 4.2c0 6.8-1.3 13.6-3.8 19.9L288 160 448 160c26.5 0 48 21.5 48 48 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 23.4-16.8 42.9-39 47.1 4.4 7.3 7 15.8 7 24.9 0 22.2-15 40.8-35.4 46.3 2.2 5.5 3.4 11.5 3.4 17.7 0 26.5-21.5 48-48 48l-87.9 0c-36.3 0-71.6-12.4-99.9-35.1L184 435.2c-15.2-12.1-24-30.5-24-50l0-186.6c0-14.9 3.5-29.6 10.1-42.9L226.3 43.3C234.7 26.6 251.8 16 270.6 16z"]},iM={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},aM=iM,sM={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},oM=sM,gT={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},lM=gT,uM={prefix:"fas",iconName:"wrench",icon:[576,512,[128295],"f0ad","M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"]},cM={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM205.1 306.9c28.1 28.1 73.7 28.1 101.8 0 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-46.9 46.9-122.8 46.9-169.7 0s-46.9-122.8 0-169.7 122.8-46.9 169.7 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-28.1-28.1-73.7-28.1-101.8 0s-28.1 73.7 0 101.8z"]},fM={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},yT={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},hM={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},dM=hM,pM={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M502.6 150.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.9 352 224l0-64-320 0c-17.7 0-32-14.3-32-32S14.3 96 32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c9.2-9.2 22.9-11.9 34.9-6.9S160 275.1 160 288l0 64 320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9z"]},mM=pM,gM={prefix:"fas",iconName:"film",icon:[448,512,[127902,62368,"film-alt","film-simple"],"f008","M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM352 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z"]},yM={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},vM={prefix:"fas",iconName:"closed-captioning",icon:[512,512,[],"f20a","M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm152 80l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8zm168 8c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80z"]},_M={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"]},g0={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},bM=g0,vT={prefix:"fas",iconName:"clock-rotate-left",icon:[576,512,["history"],"f1da","M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z"]},_T={prefix:"fas",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M256 480c141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240c0 54.3 19.2 104.3 51.6 144.5L2.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7C183.7 472.6 218.9 480 256 480zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},bT={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},EM={prefix:"fas",iconName:"language",icon:[576,512,[],"f1ab","M160 0c17.7 0 32 14.3 32 32l0 32 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-9.6 0-8.4 23.1c-16.4 45.2-41.1 86.5-72.2 122 14.2 8.8 29 16.6 44.4 23.5l50.4 22.4 62.2-140c5.1-11.6 16.6-19 29.2-19s24.1 7.4 29.2 19l128 288c7.2 16.2-.1 35.1-16.2 42.2s-35.1-.1-42.2-16.2l-20-45-157.5 0-20 45c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l39.8-89.5-50.4-22.4c-23-10.2-45-22.4-65.8-36.4-21.3 17.2-44.6 32.2-69.5 44.7L78.3 380.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l34.5-17.3c16.3-8.2 31.8-17.7 46.4-28.3-13.8-12.7-26.8-26.4-38.9-40.9L81.6 224.7c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l10.2 12.2c11.5 13.9 24.1 26.8 37.4 38.7 27.5-30.4 49.2-66.1 63.5-105.4l.5-1.2-210.3 0C14.3 128 0 113.7 0 96S14.3 64 32 64l96 0 0-32c0-17.7 14.3-32 32-32zM416 270.8L365.7 384 466.3 384 416 270.8z"]},TM={prefix:"fas",iconName:"tower-broadcast",icon:[576,512,["broadcast-tower"],"f519","M87.9 11.5c-11.3-6.9-26.1-3.2-33 8.1-24.8 41-39 89.1-39 140.4s14.2 99.4 39 140.4c6.9 11.3 21.6 15 33 8.1s15-21.6 8.1-33C75.7 241.9 64 202.3 64 160S75.7 78.1 96.1 44.4c6.9-11.3 3.2-26.1-8.1-33zm400.1 0c-11.3 6.9-15 21.6-8.1 33 20.4 33.7 32.1 73.3 32.1 115.6s-11.7 81.9-32.1 115.6c-6.9 11.3-3.2 26.1 8.1 33s26.1 3.2 33-8.1c24.8-41 39-89.1 39-140.4S545.8 60.6 521 19.6c-6.9-11.3-21.6-15-33-8.1zM320 215.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.4 32 55.4L256 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-264.6zM180.2 91c7.2-11.2 3.9-26-7.2-33.2s-26-3.9-33.2 7.2c-17.6 27.4-27.8 60-27.8 95s10.2 67.6 27.8 95c7.2 11.2 22 14.4 33.2 7.2s14.4-22 7.2-33.2c-12.8-19.9-20.2-43.6-20.2-69s7.4-49.1 20.2-69zM436.2 65c-7.2-11.2-22-14.4-33.2-7.2s-14.4 22-7.2 33.2c12.8 19.9 20.2 43.6 20.2 69s-7.4 49.1-20.2 69c-7.2 11.2-3.9 26 7.2 33.2s26 3.9 33.2-7.2c17.6-27.4 27.8-60 27.8-95s-10.2-67.6-27.8-95z"]},SM={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]},wM={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},AM={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},xM={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM165.4 321.9c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 390 309.2 416 256 416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ET={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},RM={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM176 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},CM={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]},IM={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var NM={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},DM={prefix:"far",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM176 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},wd={prefix:"far",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6-35.6-37.3-57.5-87.9-57.5-143.6 0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"]},TT={prefix:"far",iconName:"rectangle-list",icon:[512,512,["list-alt"],"f022","M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM160 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm104-56l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},ST={prefix:"far",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z"]},OM={prefix:"far",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM334.7 384.6C319.7 369 293.6 352 256 352s-63.7 17-78.7 32.6c-9.2 9.6-24.4 9.9-33.9 .7s-9.9-24.4-.7-33.9c22.1-23 60-47.4 113.3-47.4s91.2 24.4 113.3 47.4c9.2 9.6 8.9 24.8-.7 33.9s-24.8 8.9-33.9-.7zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},MM={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 417.1c0 25.6-28.5 40.8-49.8 26.6L192 412.8 49.8 507.7C28.5 521.9 0 506.6 0 481.1L0 64zM64 48c-8.8 0-16 7.2-16 16l0 387.2 117.4-78.2c16.1-10.7 37.1-10.7 53.2 0L336 451.2 336 64c0-8.8-7.2-16-16-16L64 48z"]},kM={prefix:"far",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5S176 159.3 176 168l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88zM298 256l-74 45.2 0-90.4 74 45.2z"]},PM={prefix:"far",iconName:"flag",icon:[448,512,[127988,61725],"f024","M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4 44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0-35.1-17.6-75.4-22-113.5-12.5L48 52 48 24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8 54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4-48.2-24.1-103.3-30.1-155.6-17.1l-68.6 17.2 0-237z"]};const wT="/project/assets/YouTube_Logo_2017.svg-DDdiODe3.png";var An=function(){return An=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},An.apply(this,arguments)};function Qh(n,e,t){if(t||arguments.length===2)for(var a=0,o=e.length,u;a<o;a++)(u||!(a in e))&&(u||(u=Array.prototype.slice.call(e,0,a)),u[a]=e[a]);return n.concat(u||Array.prototype.slice.call(e))}var lt="-ms-",qu="-moz-",Ke="-webkit-",AT="comm",Ad="rule",y0="decl",LM="@import",xT="@keyframes",VM="@layer",RT=Math.abs,v0=String.fromCharCode,Jg=Object.assign;function jM(n,e){return Yt(n,0)^45?(((e<<2^Yt(n,0))<<2^Yt(n,1))<<2^Yt(n,2))<<2^Yt(n,3):0}function CT(n){return n.trim()}function _i(n,e){return(n=e.exec(n))?n[0]:n}function Me(n,e,t){return n.replace(e,t)}function vh(n,e,t){return n.indexOf(e,t)}function Yt(n,e){return n.charCodeAt(e)|0}function rl(n,e,t){return n.slice(e,t)}function Pr(n){return n.length}function IT(n){return n.length}function Pu(n,e){return e.push(n),n}function zM(n,e){return n.map(e).join("")}function W4(n,e){return n.filter(function(t){return!_i(t,e)})}var xd=1,il=1,NT=0,Zn=0,Dt=0,vl="";function Rd(n,e,t,a,o,u,c,p){return{value:n,root:e,parent:t,type:a,props:o,children:u,line:xd,column:il,length:c,return:"",siblings:p}}function ba(n,e){return Jg(Rd("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Lo(n){for(;n.root;)n=ba(n.root,{children:[n]});Pu(n,n.siblings)}function UM(){return Dt}function BM(){return Dt=Zn>0?Yt(vl,--Zn):0,il--,Dt===10&&(il=1,xd--),Dt}function mr(){return Dt=Zn<NT?Yt(vl,Zn++):0,il++,Dt===10&&(il=1,xd++),Dt}function Is(){return Yt(vl,Zn)}function _h(){return Zn}function Cd(n,e){return rl(vl,n,e)}function e1(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function FM(n){return xd=il=1,NT=Pr(vl=n),Zn=0,[]}function HM(n){return vl="",n}function ig(n){return CT(Cd(Zn-1,t1(n===91?n+2:n===40?n+1:n)))}function $M(n){for(;(Dt=Is())&&Dt<33;)mr();return e1(n)>2||e1(Dt)>3?"":" "}function qM(n,e){for(;--e&&mr()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return Cd(n,_h()+(e<6&&Is()==32&&mr()==32))}function t1(n){for(;mr();)switch(Dt){case n:return Zn;case 34:case 39:n!==34&&n!==39&&t1(Dt);break;case 40:n===41&&t1(n);break;case 92:mr();break}return Zn}function GM(n,e){for(;mr()&&n+Dt!==57;)if(n+Dt===84&&Is()===47)break;return"/*"+Cd(e,Zn-1)+"*"+v0(n===47?n:mr())}function YM(n){for(;!e1(Is());)mr();return Cd(n,Zn)}function KM(n){return HM(bh("",null,null,null,[""],n=FM(n),0,[0],n))}function bh(n,e,t,a,o,u,c,p,m){for(var g=0,v=0,T=c,A=0,C=0,U=0,$=1,V=1,X=1,Y=0,W="",fe=o,te=u,he=a,I=W;V;)switch(U=Y,Y=mr()){case 40:if(U!=108&&Yt(I,T-1)==58){vh(I+=Me(ig(Y),"&","&\f"),"&\f",RT(g?p[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:I+=ig(Y);break;case 9:case 10:case 13:case 32:I+=$M(U);break;case 92:I+=qM(_h()-1,7);continue;case 47:switch(Is()){case 42:case 47:Pu(QM(GM(mr(),_h()),e,t,m),m);break;default:I+="/"}break;case 123*$:p[g++]=Pr(I)*X;case 125*$:case 59:case 0:switch(Y){case 0:case 125:V=0;case 59+v:X==-1&&(I=Me(I,/\f/g,"")),C>0&&Pr(I)-T&&Pu(C>32?J4(I+";",a,t,T-1,m):J4(Me(I," ","")+";",a,t,T-2,m),m);break;case 59:I+=";";default:if(Pu(he=Z4(I,e,t,g,v,o,p,W,fe=[],te=[],T,u),u),Y===123)if(v===0)bh(I,e,he,he,fe,u,T,p,te);else switch(A===99&&Yt(I,3)===110?100:A){case 100:case 108:case 109:case 115:bh(n,he,he,a&&Pu(Z4(n,he,he,0,0,o,p,W,o,fe=[],T,te),te),o,te,T,p,a?fe:te);break;default:bh(I,he,he,he,[""],te,0,p,te)}}g=v=C=0,$=X=1,W=I="",T=c;break;case 58:T=1+Pr(I),C=U;default:if($<1){if(Y==123)--$;else if(Y==125&&$++==0&&BM()==125)continue}switch(I+=v0(Y),Y*$){case 38:X=v>0?1:(I+="\f",-1);break;case 44:p[g++]=(Pr(I)-1)*X,X=1;break;case 64:Is()===45&&(I+=ig(mr())),A=Is(),v=T=Pr(W=I+=YM(_h())),Y++;break;case 45:U===45&&Pr(I)==2&&($=0)}}return u}function Z4(n,e,t,a,o,u,c,p,m,g,v,T){for(var A=o-1,C=o===0?u:[""],U=IT(C),$=0,V=0,X=0;$<a;++$)for(var Y=0,W=rl(n,A+1,A=RT(V=c[$])),fe=n;Y<U;++Y)(fe=CT(V>0?C[Y]+" "+W:Me(W,/&\f/g,C[Y])))&&(m[X++]=fe);return Rd(n,e,t,o===0?Ad:p,m,g,v,T)}function QM(n,e,t,a){return Rd(n,e,t,AT,v0(UM()),rl(n,2,-2),0,a)}function J4(n,e,t,a,o){return Rd(n,e,t,y0,rl(n,0,a),rl(n,a+1,-1),a,o)}function DT(n,e,t){switch(jM(n,e)){case 5103:return Ke+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ke+n+n;case 4789:return qu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+n+qu+n+lt+n+n;case 5936:switch(Yt(n,e+11)){case 114:return Ke+n+lt+Me(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ke+n+lt+Me(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ke+n+lt+Me(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ke+n+lt+n+n;case 6165:return Ke+n+lt+"flex-"+n+n;case 5187:return Ke+n+Me(n,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+lt+"flex-$1$2")+n;case 5443:return Ke+n+lt+"flex-item-"+Me(n,/flex-|-self/g,"")+(_i(n,/flex-|baseline/)?"":lt+"grid-row-"+Me(n,/flex-|-self/g,""))+n;case 4675:return Ke+n+lt+"flex-line-pack"+Me(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ke+n+lt+Me(n,"shrink","negative")+n;case 5292:return Ke+n+lt+Me(n,"basis","preferred-size")+n;case 6060:return Ke+"box-"+Me(n,"-grow","")+Ke+n+lt+Me(n,"grow","positive")+n;case 4554:return Ke+Me(n,/([^-])(transform)/g,"$1"+Ke+"$2")+n;case 6187:return Me(Me(Me(n,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),n,"")+n;case 5495:case 3959:return Me(n,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return Me(Me(n,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ke+n+n;case 4200:if(!_i(n,/flex-|baseline/))return lt+"grid-column-align"+rl(n,e)+n;break;case 2592:case 3360:return lt+Me(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(a,o){return e=o,_i(a.props,/grid-\w+-end/)})?~vh(n+(t=t[e].value),"span",0)?n:lt+Me(n,"-start","")+n+lt+"grid-row-span:"+(~vh(t,"span",0)?_i(t,/\d+/):+_i(t,/\d+/)-+_i(n,/\d+/))+";":lt+Me(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(a){return _i(a.props,/grid-\w+-start/)})?n:lt+Me(Me(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Me(n,/(.+)-inline(.+)/,Ke+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pr(n)-1-e>6)switch(Yt(n,e+1)){case 109:if(Yt(n,e+4)!==45)break;case 102:return Me(n,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+qu+(Yt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~vh(n,"stretch",0)?DT(Me(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Me(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,u,c,p,m,g){return lt+o+":"+u+g+(c?lt+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(Yt(n,e+6)===121)return Me(n,":",":"+Ke)+n;break;case 6444:switch(Yt(n,Yt(n,14)===45?18:11)){case 120:return Me(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(Yt(n,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+lt+"$2box$3")+n;case 100:return Me(n,":",":"+lt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(n,"scroll-","scroll-snap-")+n}return n}function Xh(n,e){for(var t="",a=0;a<n.length;a++)t+=e(n[a],a,n,e)||"";return t}function XM(n,e,t,a){switch(n.type){case VM:if(n.children.length)break;case LM:case y0:return n.return=n.return||n.value;case AT:return"";case xT:return n.return=n.value+"{"+Xh(n.children,a)+"}";case Ad:if(!Pr(n.value=n.props.join(",")))return""}return Pr(t=Xh(n.children,a))?n.return=n.value+"{"+t+"}":""}function WM(n){var e=IT(n);return function(t,a,o,u){for(var c="",p=0;p<e;p++)c+=n[p](t,a,o,u)||"";return c}}function ZM(n){return function(e){e.root||(e=e.return)&&n(e)}}function JM(n,e,t,a){if(n.length>-1&&!n.return)switch(n.type){case y0:n.return=DT(n.value,n.length,t);return;case xT:return Xh([ba(n,{value:Me(n.value,"@","@"+Ke)})],a);case Ad:if(n.length)return zM(t=n.props,function(o){switch(_i(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lo(ba(n,{props:[Me(o,/:(read-\w+)/,":"+qu+"$1")]})),Lo(ba(n,{props:[o]})),Jg(n,{props:W4(t,a)});break;case"::placeholder":Lo(ba(n,{props:[Me(o,/:(plac\w+)/,":"+Ke+"input-$1")]})),Lo(ba(n,{props:[Me(o,/:(plac\w+)/,":"+qu+"$1")]})),Lo(ba(n,{props:[Me(o,/:(plac\w+)/,lt+"input-$1")]})),Lo(ba(n,{props:[o]})),Jg(n,{props:W4(t,a)});break}return""})}}var ek={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},al=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",OT="active",MT="data-styled-version",Id="6.1.19",_0=`/*!sc*/
`,Wh=typeof window<"u"&&typeof document<"u",tk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),Nd=Object.freeze([]),sl=Object.freeze({});function nk(n,e,t){return t===void 0&&(t=sl),n.theme!==t.theme&&n.theme||e||t.theme}var kT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ik=/(^-|-$)/g;function eb(n){return n.replace(rk,"-").replace(ik,"")}var ak=/(a)(d)/gi,Zf=52,tb=function(n){return String.fromCharCode(n+(n>25?39:97))};function n1(n){var e,t="";for(e=Math.abs(n);e>Zf;e=e/Zf|0)t=tb(e%Zf)+t;return(tb(e%Zf)+t).replace(ak,"$1-$2")}var ag,PT=5381,Fo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},LT=function(n){return Fo(PT,n)};function sk(n){return n1(LT(n)>>>0)}function ok(n){return n.displayName||n.name||"Component"}function sg(n){return typeof n=="string"&&!0}var VT=typeof Symbol=="function"&&Symbol.for,jT=VT?Symbol.for("react.memo"):60115,lk=VT?Symbol.for("react.forward_ref"):60112,uk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ck={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fk=((ag={})[lk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ag[jT]=zT,ag);function nb(n){return("type"in(e=n)&&e.type.$$typeof)===jT?zT:"$$typeof"in n?fk[n.$$typeof]:uk;var e}var hk=Object.defineProperty,dk=Object.getOwnPropertyNames,rb=Object.getOwnPropertySymbols,pk=Object.getOwnPropertyDescriptor,mk=Object.getPrototypeOf,ib=Object.prototype;function UT(n,e,t){if(typeof e!="string"){if(ib){var a=mk(e);a&&a!==ib&&UT(n,a,t)}var o=dk(e);rb&&(o=o.concat(rb(e)));for(var u=nb(n),c=nb(e),p=0;p<o.length;++p){var m=o[p];if(!(m in ck||t&&t[m]||c&&m in c||u&&m in u)){var g=pk(e,m);try{hk(n,m,g)}catch{}}}}return n}function ol(n){return typeof n=="function"}function b0(n){return typeof n=="object"&&"styledComponentId"in n}function xs(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function ab(n,e){if(n.length===0)return"";for(var t=n[0],a=1;a<n.length;a++)t+=n[a];return t}function ic(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function r1(n,e,t){if(t===void 0&&(t=!1),!t&&!ic(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)n[a]=r1(n[a],e[a]);else if(ic(e))for(var a in e)n[a]=r1(n[a],e[a]);return n}function E0(n,e){Object.defineProperty(n,"toString",{value:e})}function Ec(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var gk=(function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,a=0;a<e;a++)t+=this.groupSizes[a];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,u=o;e>=u;)if((u<<=1)<0)throw Ec(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(a),this.length=u;for(var c=o;c<u;c++)this.groupSizes[c]=0}for(var p=this.indexOfGroup(e+1),m=(c=0,t.length);c<m;c++)this.tag.insertRule(p,t[c])&&(this.groupSizes[e]++,p++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],a=this.indexOfGroup(e),o=a+t;this.groupSizes[e]=0;for(var u=a;u<o;u++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var a=this.groupSizes[e],o=this.indexOfGroup(e),u=o+a,c=o;c<u;c++)t+="".concat(this.tag.getRule(c)).concat(_0);return t},n})(),Eh=new Map,Zh=new Map,Th=1,Jf=function(n){if(Eh.has(n))return Eh.get(n);for(;Zh.has(Th);)Th++;var e=Th++;return Eh.set(n,e),Zh.set(e,n),e},yk=function(n,e){Th=e+1,Eh.set(n,e),Zh.set(e,n)},vk="style[".concat(al,"][").concat(MT,'="').concat(Id,'"]'),_k=new RegExp("^".concat(al,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bk=function(n,e,t){for(var a,o=t.split(","),u=0,c=o.length;u<c;u++)(a=o[u])&&n.registerName(e,a)},Ek=function(n,e){for(var t,a=((t=e.textContent)!==null&&t!==void 0?t:"").split(_0),o=[],u=0,c=a.length;u<c;u++){var p=a[u].trim();if(p){var m=p.match(_k);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(yk(v,g),bk(n,v,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},sb=function(n){for(var e=document.querySelectorAll(vk),t=0,a=e.length;t<a;t++){var o=e[t];o&&o.getAttribute(al)!==OT&&(Ek(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function Tk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var BT=function(n){var e=document.head,t=n||e,a=document.createElement("style"),o=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(al,"]")));return m[m.length-1]})(t),u=o!==void 0?o.nextSibling:null;a.setAttribute(al,OT),a.setAttribute(MT,Id);var c=Tk();return c&&a.setAttribute("nonce",c),t.insertBefore(a,u),a},Sk=(function(){function n(e){this.element=BT(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(t){if(t.sheet)return t.sheet;for(var a=document.styleSheets,o=0,u=a.length;o<u;o++){var c=a[o];if(c.ownerNode===t)return c}throw Ec(17)})(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n})(),wk=(function(){function n(e){this.element=BT(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n})(),Ak=(function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n})(),ob=Wh,xk={isServer:!Wh,useCSSOMInjection:!tk},FT=(function(){function n(e,t,a){e===void 0&&(e=sl),t===void 0&&(t={});var o=this;this.options=An(An({},xk),e),this.gs=t,this.names=new Map(a),this.server=!!e.isServer,!this.server&&Wh&&ob&&(ob=!1,sb(this)),E0(this,function(){return(function(u){for(var c=u.getTag(),p=c.length,m="",g=function(T){var A=(function(X){return Zh.get(X)})(T);if(A===void 0)return"continue";var C=u.names.get(A),U=c.getGroup(T);if(C===void 0||!C.size||U.length===0)return"continue";var $="".concat(al,".g").concat(T,'[id="').concat(A,'"]'),V="";C!==void 0&&C.forEach(function(X){X.length>0&&(V+="".concat(X,","))}),m+="".concat(U).concat($,'{content:"').concat(V,'"}').concat(_0)},v=0;v<p;v++)g(v);return m})(o)})}return n.registerId=function(e){return Jf(e)},n.prototype.rehydrate=function(){!this.server&&Wh&&sb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(An(An({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(t){var a=t.useCSSOMInjection,o=t.target;return t.isServer?new Ak(o):a?new Sk(o):new wk(o)})(this.options),new gk(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Jf(e),this.names.has(e))this.names.get(e).add(t);else{var a=new Set;a.add(t),this.names.set(e,a)}},n.prototype.insertRules=function(e,t,a){this.registerName(e,t),this.getTag().insertRules(Jf(e),a)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Jf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n})(),Rk=/&/g,Ck=/^\s*\/\/.*$/gm;function HT(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=HT(t.children,e)),t})}function Ik(n){var e,t,a,o=sl,u=o.options,c=u===void 0?sl:u,p=o.plugins,m=p===void 0?Nd:p,g=function(A,C,U){return U.startsWith(t)&&U.endsWith(t)&&U.replaceAll(t,"").length>0?".".concat(e):A},v=m.slice();v.push(function(A){A.type===Ad&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(Rk,t).replace(a,g))}),c.prefix&&v.push(JM),v.push(XM);var T=function(A,C,U,$){C===void 0&&(C=""),U===void 0&&(U=""),$===void 0&&($="&"),e=$,t=C,a=new RegExp("\\".concat(t,"\\b"),"g");var V=A.replace(Ck,""),X=KM(U||C?"".concat(U," ").concat(C," { ").concat(V," }"):V);c.namespace&&(X=HT(X,c.namespace));var Y=[];return Xh(X,WM(v.concat(ZM(function(W){return Y.push(W)})))),Y};return T.hash=m.length?m.reduce(function(A,C){return C.name||Ec(15),Fo(A,C.name)},PT).toString():"",T}var Nk=new FT,i1=Ik(),$T=Ds.createContext({shouldForwardProp:void 0,styleSheet:Nk,stylis:i1});$T.Consumer;Ds.createContext(void 0);function lb(){return Q.useContext($T)}var Dk=(function(){function n(e,t){var a=this;this.inject=function(o,u){u===void 0&&(u=i1);var c=a.name+u.hash;o.hasNameForId(a.id,c)||o.insertRules(a.id,c,u(a.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,E0(this,function(){throw Ec(12,String(a.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=i1),this.name+e.hash},n})(),Ok=function(n){return n>="A"&&n<="Z"};function ub(n){for(var e="",t=0;t<n.length;t++){var a=n[t];if(t===1&&a==="-"&&n[0]==="-")return n;Ok(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var qT=function(n){return n==null||n===!1||n===""},GT=function(n){var e,t,a=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!qT(u)&&(Array.isArray(u)&&u.isCss||ol(u)?a.push("".concat(ub(o),":"),u,";"):ic(u)?a.push.apply(a,Qh(Qh(["".concat(o," {")],GT(u),!1),["}"],!1)):a.push("".concat(ub(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in ek||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return a};function Ns(n,e,t,a){if(qT(n))return[];if(b0(n))return[".".concat(n.styledComponentId)];if(ol(n)){if(!ol(u=n)||u.prototype&&u.prototype.isReactComponent||!e)return[n];var o=n(e);return Ns(o,e,t,a)}var u;return n instanceof Dk?t?(n.inject(t,a),[n.getName(a)]):[n]:ic(n)?GT(n):Array.isArray(n)?Array.prototype.concat.apply(Nd,n.map(function(c){return Ns(c,e,t,a)})):[n.toString()]}function Mk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ol(t)&&!b0(t))return!1}return!0}var kk=LT(Id),Pk=(function(){function n(e,t,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Mk(e),this.componentId=t,this.baseHash=Fo(kk,t),this.baseStyle=a,FT.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=xs(o,this.staticRulesId);else{var u=ab(Ns(this.rules,e,t,a)),c=n1(Fo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,c)){var p=a(u,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,p)}o=xs(o,c),this.staticRulesId=c}else{for(var m=Fo(this.baseHash,a.hash),g="",v=0;v<this.rules.length;v++){var T=this.rules[v];if(typeof T=="string")g+=T;else if(T){var A=ab(Ns(T,e,t,a));m=Fo(m,A+v),g+=A}}if(g){var C=n1(m>>>0);t.hasNameForId(this.componentId,C)||t.insertRules(this.componentId,C,a(g,".".concat(C),void 0,this.componentId)),o=xs(o,C)}}return o},n})(),YT=Ds.createContext(void 0);YT.Consumer;var og={};function Lk(n,e,t){var a=b0(n),o=n,u=!sg(n),c=e.attrs,p=c===void 0?Nd:c,m=e.componentId,g=m===void 0?(function(fe,te){var he=typeof fe!="string"?"sc":eb(fe);og[he]=(og[he]||0)+1;var I="".concat(he,"-").concat(sk(Id+he+og[he]));return te?"".concat(te,"-").concat(I):I})(e.displayName,e.parentComponentId):m,v=e.displayName,T=v===void 0?(function(fe){return sg(fe)?"styled.".concat(fe):"Styled(".concat(ok(fe),")")})(n):v,A=e.displayName&&e.componentId?"".concat(eb(e.displayName),"-").concat(e.componentId):e.componentId||g,C=a&&o.attrs?o.attrs.concat(p).filter(Boolean):p,U=e.shouldForwardProp;if(a&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;U=function(fe,te){return $(fe,te)&&V(fe,te)}}else U=$}var X=new Pk(t,A,a?o.componentStyle:void 0);function Y(fe,te){return(function(he,I,x){var R=he.attrs,P=he.componentStyle,M=he.defaultProps,j=he.foldedComponentIds,D=he.styledComponentId,ft=he.target,it=Ds.useContext(YT),Z=lb(),ce=he.shouldForwardProp||Z.shouldForwardProp,ge=nk(I,it,M)||sl,Ne=(function(De,be,vt){for(var He,Mt=An(An({},be),{className:void 0,theme:vt}),Qr=0;Qr<De.length;Qr+=1){var Jn=ol(He=De[Qr])?He(Mt):He;for(var hn in Jn)Mt[hn]=hn==="className"?xs(Mt[hn],Jn[hn]):hn==="style"?An(An({},Mt[hn]),Jn[hn]):Jn[hn]}return be.className&&(Mt.className=xs(Mt.className,be.className)),Mt})(R,I,ge),O=Ne.as||ft,re={};for(var le in Ne)Ne[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&Ne.theme===ge||(le==="forwardedAs"?re.as=Ne.forwardedAs:ce&&!ce(le,O)||(re[le]=Ne[le]));var ue=(function(De,be){var vt=lb(),He=De.generateAndInjectStyles(be,vt.styleSheet,vt.stylis);return He})(P,Ne),me=xs(j,D);return ue&&(me+=" "+ue),Ne.className&&(me+=" "+Ne.className),re[sg(O)&&!kT.has(O)?"class":"className"]=me,x&&(re.ref=x),Q.createElement(O,re)})(W,fe,te)}Y.displayName=T;var W=Ds.forwardRef(Y);return W.attrs=C,W.componentStyle=X,W.displayName=T,W.shouldForwardProp=U,W.foldedComponentIds=a?xs(o.foldedComponentIds,o.styledComponentId):"",W.styledComponentId=A,W.target=a?o.target:n,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(fe){this._foldedDefaultProps=a?(function(te){for(var he=[],I=1;I<arguments.length;I++)he[I-1]=arguments[I];for(var x=0,R=he;x<R.length;x++)r1(te,R[x],!0);return te})({},o.defaultProps,fe):fe}}),E0(W,function(){return".".concat(W.styledComponentId)}),u&&UT(W,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function cb(n,e){for(var t=[n[0]],a=0,o=e.length;a<o;a+=1)t.push(e[a],n[a+1]);return t}var fb=function(n){return Object.assign(n,{isCss:!0})};function Vk(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ol(n)||ic(n))return fb(Ns(cb(Nd,Qh([n],e,!0))));var a=n;return e.length===0&&a.length===1&&typeof a[0]=="string"?Ns(a):fb(Ns(cb(a,e)))}function a1(n,e,t){if(t===void 0&&(t=sl),!e)throw Ec(1,e);var a=function(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return n(e,t,Vk.apply(void 0,Qh([o],u,!1)))};return a.attrs=function(o){return a1(n,e,An(An({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return a1(n,e,An(An({},t),o))},a}var KT=function(n){return a1(Lk,n)},z=KT;kT.forEach(function(n){z[n]=KT(n)});const jk=z.div`
  display: flex;
  flex-direction: column;

`,zk=z.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content:space-between;
  
  padding: 10px 15px;
  background-color: #ffffff;

  position: fixed;
  top: 0;
  z-index: 100;
`,Uk=z.div`
  display: flex;
  align-items: center;
`,Bk=z(je)`
  width: 24px;
  height: 24px;
  margin: 0 25px 0 10px;
  cursor: pointer;
`,Fk=z.img`
  width: 100px;
  cursor: pointer;
`,Hk=z.div`
  display: flex;
  max-width: 732px;
  width: 100%;
  margin: 0 90px;
  align-items: center;
`,$k=z.div`
  display: flex;
  width: 100%;
  height: 39px;
`,qk=z.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #d4d4d4;
  border-right: none;
  border-radius: 20px 0 0 20px;
  outline: none;
`,Gk=z.button`
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 20px 20px 0;
  background-color: #f8f8f8;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e5e5e5;
  }
`,Yk=z.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 40px;
  border-radius: 50px;
  background-color: #f8f8f8;
  cursor: pointer;
  
  &:hover {
    background-color: #e5e5e5;
  }
  `,Kk=z(je)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`,Qk=z.div`
  display: flex;
  align-items: center;
`,hb=z.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
    
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`,Sh=z(je)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`,Xk=z.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    
  /* 根據 $isLoggedIn 決定樣式 */
  ${n=>n.$isLoggedIn?`
    padding: 0;
    width: 40px; /* 略大於圖片的容器 */
    height: 40px;
    border: none;
    background: transparent;
    border-radius: 50%;
        
    /* 隱藏 LoginIcon 和 LoginText */
    ${QT}, ${XT} {
      display: none;
      }

  `:`
    /* *** 未登入狀態 *** */
    background-color: #fff;
    color: #065fd4;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    padding: 6px 16px;
    height: 39px;

    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
        
    &:hover {
      background-color: #e5e5e5; 
    }
  `}
`,Wk=z.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2; 
  border: none;
  border-radius: 20px; 
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  white-space: nowrap;

  color: #0f0f0f;
  font-size: 14px;
  font-weight: 500;
    
  /* 讓 + 號和文字靠近 */
  ${Sh} {
    width: 16px; 
    height: 16px;
    margin-right: 6px; 
  }
    
  &:hover {
    background-color: #e5e5e5;
  }
`,Zk=z.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
  
  object-fit: cover; 
`,QT=z(je)`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  ${n=>n.$isLoggedIn&&"display: none;"}
`,XT=z.span`
  font-size: 14px;
`,Jk=z.div`
  margin-top: 62px;
`;z.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  height: calc(100vh - 55px);
  width: ${({$collapse:n})=>n?"240px":"72px"}; 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

`;z(zs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  margin-top: 5px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.2s, border-radius 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
    border-radius: 10px;
  }
`;z(je)`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`;z.span`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;z.div`
  margin-left: 75px; 
  
  /* ExtendSidebar 展開時的狀態 */
  ${n=>n.$collapse&&`
    // margin-left: 240px; 
  `}
  
  /* WatchPage時的樣式 */
  ${n=>n.$isWatchPage&&`
    margin-left: 0; 
  `}
  
  @media (max-width: 792px) {
    margin: 0px;

  }
`;const eP=z.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - (16px * 2 / 3));

  @media (max-width: 931px) {
    width: calc(50% - (16px / 2));
  }
  
  @media (max-width: 552px) {
    width: 100%;
  }
`,tP=z(zs)`
  ${eP.componentStyle.rules}; //繼承樣式寫法
  text-decoration: none;
  color: inherit;

  position: relative; 
`,nP=z.div`
  display: flex;
  margin-top: 12px;
  position: relative;

`,rP=z.img`
  width: 100%; 
  height: 100%; 
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  
  border: 2px solid #fff;
`,iP=z.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 25px 0;
`,aP=z.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,db=z.p`
  font-size: 14px;
  color: #606060;
  margin: 4px 0 0;
`,pb=z.p`
  font-size: 14px;
  color: #606060;
  margin: 2px 0 0;
`,sP=z.div`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%); 
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: auto;
  padding: 0px 3px;
  
  background-color: #e1002d;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 4px;
  white-space: nowrap;
`,oP=z.div`
  position: relative;
  width: 40px; 
  height: 40px;
  aspect-ratio: 1 / 1;
  margin-right: 12px;
  cursor: pointer;
  
  /* 紅色外框 */
  ${n=>n.$isLive&&`
    border: 2px solid #e1002d;
    border-radius: 50%;
  `}
`,lP=z.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  border-radius: ${({$isHovered:n,$isSeries:e})=>e?"8px":n?"0px":"8px"};
  overflow: hidden; 
`,WT=z.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,s1=z.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
`,ZT=z.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: #e1002d; 
  color: #fff;
  padding: 3px 6px; 
  border-radius: 4px; 
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 10;
  
  display: flex;
  align-items: center;
  gap: 2px;
`,uP=z.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`,cP=z.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 16 / 9;

  &::before {  
    content:'';
    display: block;
    position: absolute;

    background-color: #b0adad;
    border: solid 1px #fff;

    transform: scale(92%) translateY(-22px); 
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  /* 第二層堆疊：::after */
  &::after{
    content: '';
    display: block;
    position: absolute;

    background-color: #6b6868;
    border: solid 1px #fff;

    transform: scale(96%) translateY(-11px);
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`,fP=z.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6); 
  color: #fff;
  padding: 2px 4px; 
  border-radius: 4px; 
  font-size: 12px;
`;function hP({video:n,isHovered:e,isSeries:t,isLive:a,videoUrl:o,countdownTime:u,formatTime:c}){const p=e&&!a&&!t&&u>=0?c(u):n.videoLength,m=!t&&e&&o;return E.jsxs(E.Fragment,{children:[t&&E.jsx(cP,{}),E.jsxs(lP,{$isHovered:e,$isSeries:t,children:[E.jsx(WT,{src:n.videoPicture,alt:n.title}),m&&E.jsx(uP,{src:o,autoPlay:!0,muted:!0,loop:!0}),a?E.jsxs(ZT,{children:[E.jsx(je,{icon:TM}),e?"直播中":"直播"]}):t?e?n.videoLength&&E.jsx(s1,{$isSeriesHover:!0,children:n.videoLength}):E.jsxs(fP,{children:[E.jsx(je,{icon:g0})," 合輯"]}):p&&E.jsx(s1,{children:p})]})]})}const dP=z.div`
  position: absolute;
  top: -6px;
  right: -6px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    background-color: #cccccc;
    border: solid 1px #b9b8b8;
    transform: scale(0.95);
  }
`,JT=z(je)`
  width: 19px;
  height: 19px;
  cursor: pointer;
  
`,pP=z.div`
  width: 250px; 
  position: absolute;
  top: 30px;
  right: -10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
`,_a=z.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  color: #030303;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f2f2f2;
  }

  & > svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
    color: #000000;
  }
`;function mP({isMenuOpen:n,handleMenuToggle:e,handleMenuClose:t}){const a=(o,u)=>{o.preventDefault(),o.stopPropagation(),t(),console.log(u)};return E.jsxs(E.Fragment,{children:[E.jsx(dP,{onClick:e,children:E.jsx(JT,{icon:m0})}),n&&E.jsxs(pP,{children:[E.jsxs(_a,{onClick:o=>a(o,"加入待播清單"),children:[E.jsx(je,{icon:gT})," 加入待播清單"]}),E.jsxs(_a,{onClick:o=>a(o,"儲存至稍後觀看"),children:[E.jsx(je,{icon:NM})," 儲存至「稍後觀看」清單"]}),E.jsxs(_a,{onClick:o=>a(o,"儲存至播放清單"),children:[E.jsx(je,{icon:MM})," 儲存至播放清單"]}),E.jsxs(_a,{onClick:o=>a(o,"下載"),children:[E.jsx(je,{icon:bT})," 下載"]}),E.jsxs(_a,{onClick:o=>a(o,"分享"),children:[E.jsx(je,{icon:hT})," 分享"]}),E.jsxs(_a,{onClick:o=>a(o,"不感興趣"),children:[E.jsx(je,{icon:DM})," 不感興趣"]}),E.jsxs(_a,{onClick:o=>a(o,"不要推薦這個頻道"),children:[E.jsx(je,{icon:OM})," 不要推薦這個頻道"]}),E.jsxs(_a,{onClick:o=>a(o,"檢舉"),children:[E.jsx(je,{icon:PM})," 檢舉"]})]})]})}const Dd=n=>{if(!n)return"未知時間";const e=new Date(n),a=new Date-e;if(a<0||isNaN(e.getTime()))return n;const o=Math.floor(a/1e3),u=Math.floor(o/60),c=Math.floor(u/60),p=Math.floor(c/24),m=Math.floor(p/7),g=Math.floor(p/30.44),v=Math.floor(p/365);return v>0?`${v} 年前`:g>0?`${g} 個月前`:m>0?`${m} 週前`:p>0?`${p} 天前`:c>0?`${c} 小時前`:u>0?`${u} 分鐘前`:"幾秒前"},Jh=n=>{const e=Number(n);return isNaN(e)||e<0?"0":e>=1e8?`${Math.floor(e/1e8*10)/10} 億`:e>=1e4?`${Math.floor(e/1e4*10)/10} 萬`:e>=1e3?e.toLocaleString("en-US"):String(e)},gP=n=>{if(typeof n!="number"||n<=0)return"0:00";const e=Math.floor(n/3600),t=Math.floor(n%3600/60),a=n%60,o=String(a).padStart(2,"0"),u=String(t).padStart(2,"0");return e>0?`${e}:${u}:${o}`:`${t}:${o}`};function yP({video:n}){const{isLive:e,videoUrl:t,isSeries:a,videoLengthInSeconds:o=0}=n,u=Number(o),[c,p]=Q.useState(!1),[m,g]=Q.useState(!1),v=Q.useRef(null),[T,A]=Q.useState(u),C=Dd(n.uploadedTime),U=Jh(n.views),$=()=>{p(!0),A(u),!(e||a||v.current||u===0)&&(v.current=setInterval(()=>{A(W=>W>1?W-1:(clearInterval(v.current),v.current=null,0))},1e3))},V=()=>{p(!1),v.current&&(clearInterval(v.current),v.current=null)};Q.useEffect(()=>()=>{v.current&&clearInterval(v.current)},[]);const X=W=>{W.stopPropagation(),W.preventDefault(),g(fe=>!fe)},Y=W=>{if(m){W.preventDefault();return}};return E.jsxs(tP,{to:`/watch/${n.id}`,onMouseEnter:$,onMouseLeave:V,onClick:Y,children:[E.jsx(hP,{video:n,isHovered:c,isSeries:a,isLive:e,videoUrl:t,countdownTime:T,formatTime:gP}),E.jsxs(nP,{children:[!a&&E.jsxs(oP,{$isLive:e,children:[E.jsx(rP,{src:n.channelUserPicture,alt:n.channelName}),e&&E.jsx(sP,{children:"直播"})]}),E.jsxs(iP,{$isSeries:a,children:[E.jsx(aP,{children:a?`合輯-${n.title}`:n.title}),a?E.jsxs(E.Fragment,{children:[E.jsx(db,{$isSeries:a,children:n.seriesName}),E.jsx(pb,{children:C})]}):E.jsxs(E.Fragment,{children:[E.jsxs(db,{children:[" ",n.channelName]}),E.jsxs(pb,{children:["觀看次數：",U," 次 • ",C]})]}),E.jsx(mP,{isMenuOpen:m,handleMenuToggle:X,handleMenuClose:()=>g(!1)})]})]})]})}const eS=Q.createContext({}),vP=({children:n})=>{const[e,t]=Q.useState(null),[a,o]=Q.useState(!0),[u,c]=Q.useState(null);return Q.useEffect(()=>{const p="https://script.google.com/macros/s/AKfycbweUdP_4aH8K5LstDtdUZGv0LhcktRIam2sl9W3mFHgV4KgrdomnMh5JoL79S7BApHByQ/exec";(async()=>{o(!0),c(null);try{const g=await fetch(p,{method:"GET"});if(!g.ok)throw new Error(`HTTP 錯誤! 狀態碼: ${g.status}`);const v=await g.json();t(v),console.log("數據載入成功:",v)}catch(g){console.error("API 錯誤:",g),c(g.message),t({eachVideos:[],Messages:[],relateTabs:[]})}finally{o(!1)}})()},[]),E.jsx(eS.Provider,{value:{data:e,isLoading:a,error:u},children:n})},tS=()=>Q.useContext(eS),lg=z.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 12px;
  gap: 16px;
  margin-left: 65px;
  @media (max-width: 792px) {
    margin: 0px;
    
  }
`,_P=()=>{const{data:n,isLoading:e,error:t}=tS();if(e||n===null)return E.jsx(lg,{children:E.jsx("div",{children:"Loading..."})});if(t)return E.jsx(lg,{children:E.jsxs("div",{children:["error無法載入",t]})});const a=n.eachVideos||[];return E.jsxs(lg,{children:[a.length===0&&E.jsx("div",{children:"目前沒有影片數據。"}),a.map(o=>E.jsx(yP,{video:o},o.id))]})},bP=z.div`
    padding-left: 75px;
    @media (max-width: 792px) {
    padding-left: 25px;

  }
`,EP=()=>E.jsxs(bP,{children:[E.jsx("h1",{children:"Shorts"}),E.jsx("p",{children:"Shorts的內容"})]}),TP=z.div`
    padding-left: 75px;
    @media (max-width: 792px) {
    padding-left: 25px;

  }
`,SP=()=>E.jsxs(TP,{children:[E.jsx("h1",{children:"SubscriptionsPage"}),E.jsx("p",{children:"SubscriptionsPage的內容"})]}),wP=z.div`
    padding-left: 75px;
    @media (max-width: 792px) {
    padding-left: 25px;

  }
`,AP=()=>E.jsxs(wP,{children:[E.jsx("h1",{children:"PersonalPage"}),E.jsx("p",{children:"PersonalPage的內容"})]}),xP=z.div`
    padding-left: 75px;
    @media (max-width: 792px) {
    padding-left: 25px;

  }
`,RP=()=>E.jsxs(xP,{children:[E.jsx("h1",{children:"HistoryPage"}),E.jsx("p",{children:"HistoryPage的內容"})]}),eh=z.div`
  display: flex;
  padding: 24px 20px 0 30px;

  @media (max-width: 1000px) {
    flex-direction: column; 
  }
`,CP=z.div`
  flex: 2.4;
  margin-right: 24px;

  @media (max-width: 1000px) {
  margin-right: 0px;

  }
`,IP=z.div`
  flex: 1;

  @media (max-width: 1000px) {
    flex: none; 
    width: 100%;
    margin-top: 24px;
  }
`,NP=z.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;


  @media (max-width: 1000px) {
    width: 100vw; 
    margin-left: -30px; 
  }
`,DP=z.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,OP=z.h2`
  color: white;
  padding: 10px;
  margin: 0; 
`,MP=z.div`
    width: 100%;
    padding-top: 20px;
`,kP=z.h1`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
`,PP=z.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e5e5e5; 
    padding-bottom: 16px;
`,LP=z.div`
    display: flex;
    align-items: center;
`,VP=z.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
`,jP=z.div`
    display: flex;
    flex-direction: column;
`,zP=z.p`
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`,UP=z.p`
    font-size: 12px;
    color: #606060;
    margin: 0;
`,BP=z.button`
    background-color: #000;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    height: 36px;
    white-space: nowrap; 
`,FP=z.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,HP=z.div`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`,wh=z.button`
    background-color: #f2f2f2;
    color: #000;
    padding: 8px 16px;
    border: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    height: 36px;
    white-space: nowrap;
    border-radius: 20px;


    &:hover {
        background-color: #e5e5e5;
    }
    ${n=>n.$isGrouped&&`
        border-radius: 0;
    `}
`,$P=z(wh)`
    border-right: 1px solid #e5e5e5; 
`,qP=z.div`
    background-color: #f2f2f2;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 36px;
    height: 36px;
    white-space: nowrap;
    border-radius: 50%;

  &:hover {
    background-color: #e5e5e5;
  }
`,GP=z.div`
    margin-top: 16px;
    background-color: #f2f2f2;
    padding: 12px;
    border-radius: 12px;
`,YP=z.p`
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 5px 0;
`,KP=z.p`
    font-size: 14px;
    line-height: 160%;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;

    ${n=>!n.$isExpanded&&`
        -webkit-line-clamp: 3; //只顯示3行
        white-space: pre-wrap; //保留換行效果
  `}

    ${n=>n.$isExpanded&&`
        -webkit-line-clamp: unset; //展開時顯示所有行數
        white-space: pre-wrap;
  `}
`,QP=z.span`
    font-weight: 500;
    color: #606060;
    cursor: pointer;
    display: block;
    margin-top:5px;
`,XP=({video:n})=>{const[e,t]=Q.useState(!1),a=()=>{t(!e)},o=Dd(n.uploadedTime),u=Jh(n.views),c=Jh(n.subscriberCount);return E.jsxs(MP,{children:[E.jsx(kP,{children:n.title}),E.jsxs(PP,{children:[E.jsxs(LP,{children:[E.jsx(VP,{src:n.channelUserPicture,alt:n.channelName}),E.jsxs(jP,{children:[E.jsx(zP,{children:n.channelName}),E.jsxs(UP,{children:[c,"位訂閱者"]})]}),E.jsx(BP,{children:"訂閱"})]}),E.jsxs(FP,{children:[E.jsxs(HP,{children:[E.jsxs($P,{$isGrouped:!0,children:[E.jsx(je,{icon:mT})," ",n.likeCount]}),E.jsx(wh,{$isGrouped:!0,children:E.jsx(je,{icon:dT})})]}),E.jsxs(wh,{children:[E.jsx(je,{icon:hT})," 分享"]}),E.jsxs(wh,{children:[E.jsx(je,{icon:bT})," 下載"]}),E.jsx(qP,{children:E.jsx(je,{icon:XO})})]})]}),E.jsxs(GP,{children:[E.jsxs(YP,{children:["觀看次數: ",u,"次 • ",o]}),E.jsx(KP,{$isExpanded:e,children:n.description}),E.jsx(QP,{onClick:a,children:e?"只顯示部分內容":"...更多內容"})]})]})},WP=z(zs)`
  display: flex;
  width: 100%;
  padding: 4px 0;
  text-decoration: none;
  color: #0f0f0f;
  cursor: pointer;
  position: relative;

  @media (max-width: 1000px){
    width: calc(33.333% - (16px * 2 / 3)); 
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 920px){
    width: calc(50% - (16px / 2));
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 620px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
  }
`,ZP=z.div`
  position: relative;
  width: 168px; 
  aspect-ratio: 16 / 9;
  flex-shrink: 0;
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`,JP=z.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  
`,mb=z.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  svg {
    font-size: 18px;
  }
`,eL=z.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;

  @media (max-width: 1000px) {
    padding: 12px 30px 12px 0;
    position: relative;
  }
`,tL=z.p`
  font-size: 14px;
  font-weight: 500; 
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  color: #0f0f0f;
`,nL=z.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`,rL=z.p`
  font-size: 12px;
  color: #606060;
  margin-top: 3px;
`,iL=z.div`
  position: absolute;
  top: -5px;
  right: -15px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  @media (max-width: 1000px) {
    top: 4px;
    right: -8px;
  }
`;function aL({video:n}){const{isLive:e}=n,[t,a]=Q.useState(!1),o=Dd(n.uploadedTime),u=Jh(n.views);return E.jsxs(WP,{to:`/watch/${n.id}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[E.jsxs(ZP,{children:[E.jsx(WT,{src:n.videoPicture,alt:n.title}),e?E.jsx(ZT,{children:"直播"}):t?E.jsxs(JP,{children:[E.jsx(mb,{title:"稍後觀看",children:E.jsx(je,{icon:ZO})}),E.jsx(mb,{title:"新增至播放清單",children:E.jsx(je,{icon:IM})})]}):n.videoLength&&E.jsx(s1,{children:n.videoLength})]}),E.jsxs(eL,{children:[E.jsx(tL,{children:n.title}),E.jsx(nL,{children:n.channelName}),E.jsxs(rL,{children:["觀看次數：",u," 次 • ",o]}),E.jsx(iL,{children:E.jsx(JT,{icon:m0})})]})]})}const ug=[{id:"all",Name:"全部",taglist:"all",isLiveValue:null},{id:"recommended",Name:"相關內容",taglist:"category",isLiveValue:null},{id:"uploaded",Name:"此頻道上傳",taglist:"channelName",isLiveValue:null},{id:"live",Name:"直播中",taglist:"isLive",isLiveValue:!0}],sL=z.div`
    display: flex;
    flex-direction: column;
    `,oL=z.div`
    display: flex;
    margin-bottom: 20px;
`,lL=z.button`
    border-radius: 8px;
    background: none;
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;

    background-color: ${n=>n.$active?"#000":"#f2f2f2"};
    color: ${n=>n.$active?"#ffffff":"#000000"};
  
`,uL=z.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 

    @media (max-width: 1000px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }
`,cL=({allVideos:n,relatedContext:e})=>{const[t,a]=Q.useState(ug[0].id),o=ug.find(c=>c.id===t);if(!o||!e||!n)var u=[];else var u=n.filter(p=>{if(p.id===e.currentVideoId)return!1;if(o.taglist==="all")return!0;if(o.taglist==="category")return p.category===e.currentCategory;if(o.taglist==="channelName")return p.channelName===e.currentChannelName;if(o.taglist==="isLive"){const m=typeof o.isLiveValue=="string"?o.isLiveValue.toUpperCase()==="TRUE":o.isLiveValue;return p.isLive===m}});return E.jsxs(sL,{children:[E.jsx(oL,{children:ug.map(c=>E.jsx(lL,{$active:t===c.id,onClick:()=>a(c.id),children:c.Name},c.id))}),E.jsx(uL,{children:u.map(c=>E.jsx(aL,{video:c},c.id))})]})},fL=z.div`
    margin-top: 24px;
    padding-top: 8px;
`,hL=z.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`,dL=z.h2`
    font-size: 20px;
    font-weight: 500;
    margin-right: 24px;
`,pL=z.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;

    svg{
        margin-right: 8px;
    }
`,mL=z.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`,gL=z.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
    font-size: 14px;

    &:focus {
        outline: none;
        border-bottom: 2px solid #0f0f0f;
        padding-bottom: 5px;
    }
    
`,yL=z.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
`,vL=z.span`
    margin-right: auto; 
    cursor: pointer;
    font-size: 20px;
    color: #606060;
`,gb=z.button`
    background-color: ${n=>n.$primary?"#0f0f0f":"transparent"};
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;

    ${n=>n.$primary&&`
        background-color: ${n.disabled?"#f2f2f2":"#1140e9ed"};
        color: ${n.disabled?"#909090":"#fff"};
    `}

    &:hover {
        background-color: #e5e5e5;
        ${n=>n.$primary&&`
            background-color: ${n.disabled?"#f2f2f2":"#1330af"};
        `}
    }
`,yb=z.div`
    width: ${n=>n.$size||"40px"};
    height: ${n=>n.$size||"40px"};
    border-radius: 50%;
    margin-right: 16px;
    flex-shrink: 0;
    
    background-image: url(${n=>n.$url});
    background-size: cover;
    background-position: center;

    background-color: #909090;
`,_L=z.div`
    width: 100%;
`,bL=z.div`
    display: flex;
    margin-bottom: 16px;
    padding: 4px 0;
    position: relative;
`,EL=z.div`
    width: 100%;
    padding-right: 30px;
`,TL=z.div`
    font-size: 13px;
    color: #606060;
    margin-bottom: 4px;
`,SL=z.span`
    font-weight: 500;
    color: #0f0f0f;
    margin-right: 8px;
`,wL=z.p`
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
`,AL=z.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`,vb=z.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px; 
    height: 32px;
    border-radius: 50%;
    color: #606060;

    &:hover {
        background-color: #f2f2f2;
    }

    svg {
        font-size: 15px;
    }
`,_b=z.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #606060;
    font-weight: 500;
    padding: 0;
    margin-right: 8px;
    margin-left: -8px;

    span {
        margin: 0 4px; 
        font-size: 12px; 
        color: #606060; 
        font-weight: 400;
    }
`,xL=z.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: #0f0f0f;
    
    padding: 7px 13px;
    border-radius: 20px;

    &:hover {
        background-color: #f2f2f2;
    }
`,RL=z.div`
    position: absolute;
    top: 4px;
    right: 0;
    color: #0f0f0f;
    padding: 4px; 
    
    &:hover {
        cursor: pointer;
    }
`,bb=({videoMessages:n=[],currentUserPhotoUrl:e})=>{const t=n.length,[a,o]=Q.useState(""),[u,c]=Q.useState(!1),m=e||"https://cdn.pixabay.com/photo/2025/02/21/10/33/cat-9421720_1280.jpg",g=u?"40px":"24px",v=()=>{o(""),c(!1)};return E.jsxs(fL,{children:[E.jsxs(hL,{children:[E.jsxs(dL,{children:[t," 則留言"]}),E.jsxs(pL,{children:[E.jsx(je,{icon:QO}),"排序依據"]})]}),E.jsxs(mL,{children:[E.jsx(yb,{$url:m,$size:g}),E.jsxs(_L,{children:[E.jsx(gL,{placeholder:u?"":"發表留言...",value:a,onChange:T=>o(T.target.value),onFocus:()=>c(!0)}),u&&E.jsxs(yL,{children:[E.jsx(vL,{children:E.jsx(je,{icon:xM})}),E.jsx(gb,{onClick:v,children:"取消"}),E.jsx(gb,{$primary:!0,disabled:!a.trim(),children:"留言"})]})]})]}),E.jsx(E.Fragment,{children:n.map(T=>{const A=Dd(T.time);return E.jsxs(bL,{children:[E.jsx(yb,{$url:T.authorPicture}),E.jsxs(EL,{children:[E.jsxs(TL,{children:[E.jsxs(SL,{children:["@",T.author]}),A]}),E.jsx(wL,{children:T.text}),E.jsxs(AL,{children:[E.jsxs(_b,{children:[E.jsx(vb,{children:E.jsx(je,{icon:mT})}),E.jsx("span",{children:T.likes>0?T.likes:""})]}),E.jsx(_b,{children:E.jsx(vb,{children:E.jsx(je,{icon:dT})})}),E.jsx(xL,{children:"回覆"})]})]}),E.jsx(RL,{children:E.jsx(je,{icon:fT})})]},T.id)})})]})},Eb=()=>{const n=window.innerWidth,e=window.innerHeight;return{width:n,height:e}};function CL(){const[n,e]=Q.useState(Eb());return Q.useEffect(()=>{function t(){e(Eb())}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),n}const IL=({currentUserPhotoUrl:n})=>{const{data:e,isLoading:t,error:a}=tS(),{videoId:o}=gA(),u=parseInt(o,10),c=CL(),{width:p}=c,m=p>=1e3;if(t||e===null)return E.jsx(eh,{children:"資料載入中..."});if(a)return E.jsxs(eh,{children:["載入錯誤：",a]});const g=e.eachVideos||[],v=e.Messages||[],T=g.find(U=>U.id===u);if(!T)return E.jsxs(eh,{children:["找不到此影片",u]});const A=v.filter(U=>U.videoId===u),C={currentVideoId:u,currentCategory:T.category,currentChannelName:T.channelName};return E.jsxs(eh,{children:[E.jsxs(CP,{children:[E.jsx(NP,{children:T&&T.videoUrl?E.jsx(DP,{src:T.videoUrl,controls:!0,autoPlay:!0,loop:!0}):E.jsx(OP,{children:"找不到影片網址"})}),E.jsx(XP,{video:T}),m&&E.jsx(bb,{videoMessages:A,currentUserPhotoUrl:n})]}),E.jsx(IP,{children:E.jsx(cL,{allVideos:g,relatedContext:C})}),!m&&E.jsx(bb,{videoMessages:A,currentUserPhotoUrl:n})]})},NL=z.nav`
  position: fixed;
  top: 62px;
  left: 0;
  bottom: 0;
  width: 72px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media (max-width: 792px) {
    visibility: ${({$collapse:n})=>n?"visible":"hidden"};
  }
`,Ru=z(zs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`,Cu=z(je)`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`,Iu=z.span`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;function DL({location:n}){return E.jsxs(NL,{children:[E.jsxs(Ru,{to:"/",children:[E.jsx(Cu,{icon:n.pathname==="/"?yT:ST}),E.jsx(Iu,{children:"首頁"})]}),E.jsxs(Ru,{to:"/shorts",children:[E.jsx(Cu,{icon:n.pathname==="/shorts"?g0:kM}),E.jsx(Iu,{children:"Shorts"})]}),E.jsxs(Ru,{to:"/subscriptions",children:[E.jsx(Cu,{icon:n.pathname==="/subscriptions"?pT:TT}),E.jsx(Iu,{children:"訂閱內容"})]}),E.jsxs(Ru,{to:"/history",children:[E.jsx(Cu,{icon:vT}),E.jsx(Iu,{children:"觀看紀錄"})]}),E.jsxs(Ru,{to:"/personal",children:[E.jsx(Cu,{icon:wd}),E.jsx(Iu,{children:"個人中心"})]})]})}const OL=z.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  background-color: ${({$collapse:n})=>n?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0)"};
  opacity: ${({$collapse:n})=>n?"1":"0"};
  visibility: ${({$collapse:n})=>n?"visible":"hidden"};
  transition: 
    background-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 101;
`,ML=z.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({$collapse:n})=>n?"translateX(0)":"translateX(-100%)"};
`,kL=z.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  height: 62px;
`,PL=z(je)`
  width: 24px;
  height: 24px;
  margin: 0 25px 0 10px;
  cursor: pointer;
`,LL=z.img`
  width: 100px;
  cursor: pointer;
`,Dr=z(zs)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 24px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`,Or=z(je)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`,Mr=z.span`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
`;function VL({collapse:n,setCollapse:e,location:t}){const a=td(),o=()=>{a("/")};return E.jsx(OL,{$collapse:n,onClick:()=>e(!1),children:E.jsxs(ML,{$collapse:n,onClick:u=>u.stopPropagation(),children:[E.jsxs(kL,{children:[E.jsx(PL,{icon:ET,onClick:()=>e(!1)}),E.jsx(LL,{src:wT,alt:"YouTube Logo",onClick:()=>{o(),e(!1)}})]}),E.jsxs(Dr,{to:"/",onClick:()=>e(!1),children:[E.jsx(Or,{icon:t.pathname==="/"?yT:ST}),E.jsx(Mr,{children:"首頁"})]}),E.jsxs(Dr,{to:"/subscriptions",onClick:()=>e(!1),children:[E.jsx(Or,{icon:t.pathname==="/subscriptions"?pT:TT}),E.jsx(Mr,{children:"訂閱內容"})]}),E.jsxs(Dr,{to:"/history",onClick:()=>e(!1),children:[E.jsx(Or,{icon:vT}),E.jsx(Mr,{children:"觀看紀錄"})]}),E.jsx("hr",{style:{width:"90%",border:"0.5px solid #ccc",margin:"10px 0"}}),E.jsxs(Dr,{to:"/trending",onClick:()=>e(!1),children:[E.jsx(Or,{icon:JO}),E.jsx(Mr,{children:"發燒影片"})]}),E.jsxs(Dr,{to:"/music",onClick:()=>e(!1),children:[E.jsx(Or,{icon:wM}),E.jsx(Mr,{children:"音樂"})]}),E.jsxs(Dr,{to:"/movies",onClick:()=>e(!1),children:[E.jsx(Or,{icon:gM}),E.jsx(Mr,{children:"電影"})]}),E.jsxs(Dr,{to:"/gaming",onClick:()=>e(!1),children:[E.jsx(Or,{icon:CM}),E.jsx(Mr,{children:"遊戲"})]}),E.jsxs(Dr,{to:"/news",onClick:()=>e(!1),children:[E.jsx(Or,{icon:tM}),E.jsx(Mr,{children:"新聞"})]}),E.jsxs(Dr,{to:"/sports",onClick:()=>e(!1),children:[E.jsx(Or,{icon:KO}),E.jsx(Mr,{children:"體育"})]}),E.jsx("hr",{style:{width:"90%",border:"0.5px solid #ccc",margin:"10px 0"}}),E.jsxs(Dr,{to:"/personal",onClick:()=>e(!1),children:[E.jsx(Or,{icon:wd}),E.jsx(Mr,{children:"個人中心"})]})]})})}const jL=z.div`
    display: flex;
    padding: 15px 12px;
    gap: 16px;
    justify-content: center;
`,zL=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 13px 150px;

    border-radius: 17px;
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);

`,UL=z.p`
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 900;
`,BL=z.p`
    font-size: 17px;
    margin-bottom: 10px;
    color: #606060;
`,FL=({onLoginClick:n})=>E.jsx(jL,{children:E.jsxs(zL,{children:[E.jsx(UL,{children:"輸入搜尋字詞，開始使用 YouTube"}),E.jsx(BL,{children:"開始觀看影片，我們就能在動態中顯示你感興趣的內容。"})]})});/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var HL={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]};const $L=z.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 300px;
    /* height: 100px; */
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    z-index: 1000;
    padding: 10px 0;
    font-size: 14px;
    color: #0f0f0f;
    overflow: hidden;
`,qL=z.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 8px;
`,GL=z.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
`,YL=z(je).attrs({icon:wd})`
    width: 40px;
    height: 40px;
    color: #606060;
    margin-right: 15px;
`,KL=z.div`
    display: flex;
    flex-direction: column;
`,QL=z.span`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 2px;
`,XL=z.span`
    color: #606060;
`,WL=z.a`
    color: #065fd4;
    font-weight: 500;
    margin-top: 8px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`,Tn=z.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    line-height: 1.5;

    &:hover {
        background-color: #f2f2f2;
    }
`,Sn=z(je)`
    width: 18px;
    margin-right: 15px;
    color: #606060;
`,th=z.hr`
    border: none;
    border-top: 1px solid #e5e5e5;
    margin: 8px 0;
`,kn=(n,e)=>{console.log(`執行動作: ${n}`),e()};function ZL({user:n,logout:e,closeMenu:t,goToStudio:a}){const o=()=>{e(),t()},u=n?.displayName||"未命名使用者",c=n?.email||"@無電子郵件";return E.jsxs($L,{onClick:p=>p.stopPropagation(),children:[E.jsxs(qL,{children:[n?.photoURL?E.jsx(GL,{src:n.photoURL,alt:"User Avatar"}):E.jsx(YL,{}),E.jsxs(KL,{children:[E.jsx(QL,{children:u}),E.jsxs(XL,{children:["@",c.split("@")[0]]}),E.jsx(WL,{href:"#",onClick:()=>kn("查看頻道",t),children:"查看頻道"})]})]}),E.jsxs(Tn,{onClick:()=>kn("Google 帳戶",t),children:[E.jsx(Sn,{icon:HL}),"Google 帳戶"]}),E.jsxs(Tn,{onClick:()=>kn("切換帳戶",t),children:[E.jsx(Sn,{icon:mM}),"切換帳戶"]}),E.jsxs(Tn,{onClick:o,children:[E.jsx(Sn,{icon:lM}),"登出"]}),E.jsx(th,{}),E.jsxs(Tn,{onClick:()=>{a(),t()},children:[E.jsx(Sn,{icon:Wf}),"YouTube 工作室"]}),E.jsxs(Tn,{onClick:()=>kn("購買內容與會籍",t),children:[E.jsx(Sn,{icon:Wf}),"購買內容與會籍"]}),E.jsx(th,{}),E.jsxs(Tn,{onClick:()=>kn("你在 YouTube 中的資料",t),children:[E.jsx(Sn,{icon:Wf}),"你在 YouTube 中的資料"]}),E.jsxs(Tn,{onClick:()=>kn("外觀：裝置主題",t),children:[E.jsx(Sn,{icon:yM}),"外觀：裝置主題"]}),E.jsxs(Tn,{onClick:()=>kn("顯示語言：中文 (台灣)",t),children:[E.jsx(Sn,{icon:EM}),"顯示語言：中文 (台灣)"]}),E.jsxs(Tn,{onClick:()=>kn("嚴格篩選模式：停用",t),children:[E.jsx(Sn,{icon:Wf}),"嚴格篩選模式：停用"]}),E.jsxs(Tn,{onClick:()=>kn("位置：澳洲",t),children:[E.jsx(Sn,{icon:SM}),"位置：澳洲"]}),E.jsxs(Tn,{onClick:()=>kn("鍵盤快速鍵",t),children:[E.jsx(Sn,{icon:RM}),"鍵盤快速鍵"]}),E.jsx(th,{}),E.jsxs(Tn,{onClick:()=>kn("設定",t),children:[E.jsx(Sn,{icon:GO}),"設定"]}),E.jsx(th,{}),E.jsxs(Tn,{onClick:()=>kn("說明",t),children:[E.jsx(Sn,{icon:oM}),"說明"]}),E.jsxs(Tn,{onClick:()=>kn("提供意見",t),children:[E.jsx(Sn,{icon:_T}),"提供意見"]})]})}const JL=z.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9f9f9;
`,eV=z.div`
    display: flex;
    flex-grow: 1;
`,tV=z.main`
    flex-grow: 1;
    padding: 20px;
    
    margin-left: 240px;

    @media (max-width: 950px) {
        margin-left: 72px;
    }
`,Kr=z.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
`,nV=z.div`
    display: flex; 
    /* flex-wrap: wrap;  */
    /* margin-top: 20px; */

`,rV=z.div`
    display: flex;
    font-size: 12px;
    color: #606060;
    margin-top: 40px;
    padding-left: 20px;
`,cg=z.a.attrs({href:"#"})`
    margin-right: 15px;
    color: #606060;
    text-decoration: none;
    cursor: pointer;
`,nS=z.div`
    width: 350px;
    height: 450px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 20px;
`,iV=z(nS)`
    margin-right: 20px;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,aV=z.div`
    text-align: center;
    max-width: 300px;
`,sV=z.div`
    width: 150px;
    height: 120px;
    background-color: #e8f0fe;
    margin: 0 auto 20px;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
`,oV=z(je).attrs({size:"3x",color:"#1a73e8"})`
    margin-top: 30px; 
`,lV=z.p`
    margin: 0;
    text-align: center;
`,uV=z.p`
    margin-bottom: 20px;
    text-align: center;
`,cV=z.button`
    background-color: #0f0f0f; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
`,fV=z(nS)`
    width: 350px;
`,hV=z.h4`
    margin: 0 0 10px 0;
`,dV=z.h1`
    font-size: 48px;
    margin: 10px 0;
`,pV=z.p`
    color: #606060;
    font-size: 12px;
    margin: 15px 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
`,mV=z.div`
    padding: 10px 0;
`,gV=z.p`
    color: #606060;
    margin: 0 0 5px 0;
`,Tb=z.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    
    &:nth-last-child(2) {
        border-bottom: 1px solid #eee;
    }
`,nh=z.span`
`,yV=z.h4`
    margin-top: 20px;
    margin-bottom: 10px;
`,vV=z.p`
    color: #606060;
    font-size: 12px;
    margin: 5px 0 15px 0;
`,_V=z.button`
    background-color: transparent; 
    color: #606060; 
    border: 1px solid #606060; 
    padding: 8px 15px; 
    border-radius: 50px; 
    cursor: pointer;
    font-weight: 500;
`,bV=z.nav`
    width: 240px; 
    background-color: white;
    padding-top: 10px;
    flex-shrink: 0;
    height: calc(100vh - 50px);
    position: fixed;
    top: 50px;
    left: 0;
    overflow-y: auto;
    border-right: 1px solid #e5e5e5;
    
    @media (max-width: 950px) {
        display: none; 
    }
`,EV=z.div`
    padding: 0 24px 10px; 
    margin-bottom: 10px;
    text-align: center;
`,Sb=z.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #5c6bc0;
    margin: 15px 0 0 0;

    &[as="img"] {
        object-fit: cover;
    }
`,TV=z.p`
    font-weight: bold;
    font-size: 14px;
    margin: 0 0 2px 0;
`,SV=z.p`
    color: #606060;
    font-size: 12px;
    margin: 0;
`,wV=z.nav`
    width: 72px; 
    background-color: white;
    padding-top: 10px;
    flex-shrink: 0;
    height: calc(100vh - 50px);
    position: fixed;
    top: 50px;
    left: 0;
    overflow-y: auto;
    border-right: 1px solid #e5e5e5;
    
    @media (min-width: 950px) {
        display: none; 
    }
`,AV=z.div`
    display: flex;
    align-items: center;
    padding: 10px 24px;
    cursor: pointer;
    color: #606060;
    text-decoration: none;
    
    &.active {
        background-color: #f2f2f2;
        color: black;
    }
    &:hover {
        background-color: #f2f2f2;
    }
`,xV=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    color: #606060;
    
    &.active {
        background-color: #f2f2f2;
        color: black;
    }
    &:hover {
        background-color: #f2f2f2;
    }
`,RV=z(je)`
    width: 24px;
    height: 24px;
    margin-right: ${({$isExpanded:n})=>n?"15px":"0"};
    margin-bottom: ${({$isExpanded:n})=>n?"0":"4px"};
`,CV=z.span`
    font-size: ${({$isExpanded:n})=>n?"14px":"10px"};
    white-space: nowrap;
`,wb=[{icon:dM,text:"資訊主頁",path:"dashboard"},{icon:bM,text:"內容",path:"content"},{icon:fM,text:"數據分析",path:"analytics"},{icon:eM,text:"社群",path:"community"},{icon:vM,text:"字幕",path:"subtitles"},{icon:cM,text:"內容偵測",path:"copyright"},{icon:$O,text:"營利",path:"monetization"},{icon:uM,text:"自訂",path:"customization"},{icon:aM,text:"設定",path:"settings"},{icon:_T,text:"提供意見",path:"feedback"}],IV=({activePath:n})=>{const{user:e,isLoggedIn:t}=cT(),a=td(),o=e?.displayName||"未登入使用者",u=`@${e?.email.split("@")[0]||"guest"}`,c=e?.photoURL,p=(m,g)=>{const v=g?AV:xV,T=m.path==="dashboard"?"/studio":`/studio/${m.path}`;return E.jsxs(v,{className:m.path===n?"active":"",onClick:()=>a(T),children:[E.jsx(RV,{icon:m.icon,$isExpanded:g,className:m.path===n?"active":""}),E.jsx(CV,{$isExpanded:g,children:m.text})]},m.path)};return E.jsxs(E.Fragment,{children:[E.jsxs(bV,{children:[E.jsxs(EV,{children:[t&&c?E.jsx(Sb,{as:"img",src:c,alt:o,style:{backgroundColor:"transparent"}}):E.jsx(Sb,{}),E.jsx(TV,{children:o}),E.jsx(SV,{children:u})]}),wb.map(m=>p(m,!0))]}),E.jsx(wV,{children:wb.map(m=>p(m,!1))})]})},NV=()=>E.jsx(Kr,{children:"內容管理頁面"}),DV=()=>E.jsx(Kr,{children:"數據分析頁面"}),OV=()=>E.jsx(Kr,{children:"社群頁面"}),MV=()=>E.jsx(Kr,{children:"字幕頁面"}),kV=()=>E.jsx(Kr,{children:"內容偵測頁面"}),PV=()=>E.jsx(Kr,{children:"營利頁面"}),LV=()=>E.jsx(Kr,{children:"自訂頁面"}),VV=()=>E.jsx(Kr,{children:"設定頁面"}),jV=()=>E.jsx(Kr,{children:"提供意見頁面"}),zV=()=>{const e=Oi().pathname.split("/")[2]||"dashboard",t=()=>E.jsx(iV,{children:E.jsxs(aV,{children:[E.jsx(sV,{children:E.jsx(oV,{icon:_M})}),E.jsx(lV,{children:"想要檢視近期影片的各項指標資訊嗎？"}),E.jsx(uV,{children:"上傳並發布影片後就立即開始！"}),E.jsx(cV,{children:"上傳影片"})]})}),a=()=>E.jsxs(fV,{children:[E.jsx(hV,{children:"頻道數據分析"}),E.jsx(dV,{children:"0"}),E.jsx(pV,{children:"摘要"}),E.jsxs(mV,{children:[E.jsx(gV,{children:"過去 28 天"}),E.jsxs(Tb,{children:[E.jsx(nh,{children:"觀看次數"}),E.jsx(nh,{children:"0"})]}),E.jsxs(Tb,{children:[E.jsx(nh,{children:"觀看時間 (小時)"}),E.jsx(nh,{children:"0.0"})]})]}),E.jsx(yV,{children:"熱門影片"}),E.jsx(vV,{children:"過去 48 小時，觀看次數"}),E.jsx(_V,{children:"前往頻道數據分析頁面"})]}),o=()=>E.jsxs(E.Fragment,{children:[E.jsx(Kr,{children:"頻道資訊主頁"}),E.jsxs(nV,{children:[t(),a()]}),E.jsxs(rV,{children:[E.jsx(cg,{href:"#",children:"使用條款"}),E.jsx(cg,{href:"#",children:"隱私權政策"}),E.jsx(cg,{href:"#",children:"政策與安全性"})]})]});return E.jsx(JL,{children:E.jsxs(eV,{children:[E.jsx(IV,{activePath:e}),E.jsx(tV,{children:E.jsxs(Lb,{children:[E.jsx(qt,{path:"/",element:E.jsx(o,{})}),E.jsx(qt,{path:"content",element:E.jsx(NV,{})}),E.jsx(qt,{path:"analytics",element:E.jsx(DV,{})}),E.jsx(qt,{path:"community",element:E.jsx(OV,{})}),E.jsx(qt,{path:"subtitles",element:E.jsx(MV,{})}),E.jsx(qt,{path:"copyright",element:E.jsx(kV,{})}),E.jsx(qt,{path:"monetization",element:E.jsx(PV,{})}),E.jsx(qt,{path:"customization",element:E.jsx(LV,{})}),E.jsx(qt,{path:"settings",element:E.jsx(VV,{})}),E.jsx(qt,{path:"feedback",element:E.jsx(jV,{})})]})})]})})};function UV(){const[n,e]=Q.useState(!1),[t,a]=Q.useState(!1),o=Oi(),u=td(),{isLoggedIn:c,logout:p,user:m,signInWithGoogle:g}=cT(),v=m?.photoURL,T=o.pathname.startsWith("/watch/"),A=o.pathname.startsWith("/studio"),C=!T&&!A;Q.useEffect(()=>{},[o.pathname]),Q.useEffect(()=>{c||A&&u("/")},[c,u,A]);const U=()=>{u("/")},$=()=>{u("/studio")},V=async()=>{c?a(!t):(await g()).success?console.log("Google 登入成功"):console.log("Google 登入失敗")};Q.useEffect(()=>{if(!t)return;const Y=fe=>{a(!1)},W=setTimeout(()=>{document.addEventListener("click",Y)},0);return()=>{clearTimeout(W),document.removeEventListener("click",Y)}},[t]);const X=c?E.jsx(_P,{}):E.jsx(FL,{});return E.jsxs(jk,{$collapse:n,$isWatchPage:T,children:[C&&E.jsx(DL,{location:o}),C&&E.jsx(VL,{collapse:n,setCollapse:e,location:o}),E.jsxs(zk,{children:[E.jsxs(Uk,{children:[E.jsx(Bk,{icon:ET,onClick:()=>e(!n)}),E.jsx(Fk,{src:wT,alt:"YouTube Logo",onClick:U})]}),E.jsxs(Hk,{children:[E.jsxs($k,{children:[E.jsx(qk,{placeholder:"搜尋"}),E.jsx(Gk,{children:E.jsx(je,{icon:WO})})]}),E.jsx(Yk,{children:E.jsx(Kk,{icon:nM})})]}),E.jsxs(Qk,{children:[c?E.jsxs(E.Fragment,{children:[E.jsxs(Wk,{children:[E.jsx(Sh,{icon:AM}),E.jsx("span",{children:"建立"})]}),E.jsx(hb,{children:E.jsx(Sh,{icon:YO})})]}):E.jsx(hb,{children:E.jsx(Sh,{icon:m0})}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx(Xk,{onClick:V,$isLoggedIn:c,children:c&&m&&m.photoURL?E.jsx(Zk,{src:m.photoURL}):E.jsxs(E.Fragment,{children:[E.jsx(QT,{icon:wd}),E.jsx(XT,{children:"登入"})]})}),c&&t&&E.jsx(ZL,{user:m,logout:p,closeMenu:()=>a(!1),goToStudio:$})]})]})]}),E.jsx(Jk,{children:E.jsxs(Lb,{children:[E.jsx(qt,{path:"/",element:X}),E.jsx(qt,{path:"/shorts",element:E.jsx(EP,{})}),E.jsx(qt,{path:"/subscriptions",element:E.jsx(SP,{})}),E.jsx(qt,{path:"/personal",element:E.jsx(AP,{})}),E.jsx(qt,{path:"/history",element:E.jsx(RP,{})}),E.jsx(qt,{path:"/studio/*",element:E.jsx(zV,{})}),E.jsx(qt,{path:"/watch/:videoId",element:E.jsx(IL,{currentUserPhotoUrl:v})})]})})]})}Uw.createRoot(document.getElementById("root")).render(E.jsx(Q.StrictMode,{children:E.jsx(JA,{children:E.jsx(HO,{children:E.jsx(vP,{children:E.jsx(UV,{})})})})}));
