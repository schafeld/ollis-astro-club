(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,rt=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),lt=new WeakMap;let bt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&lt.set(e,t))}return t}toString(){return this.cssText}};const kt=s=>new bt(typeof s=="string"?s:s+"",void 0,ot),T=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((o,r,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[i+1],s[0]);return new bt(e,s,ot)},At=(s,t)=>{if(rt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=Y.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,s.appendChild(o)}},ct=rt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return kt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:Ct,getOwnPropertyDescriptor:St,getOwnPropertyNames:zt,getOwnPropertySymbols:Pt,getPrototypeOf:Ot}=Object,b=globalThis,dt=b.trustedTypes,Tt=dt?dt.emptyScript:"",Q=b.reactiveElementPolyfillSupport,H=(s,t)=>s,F={toAttribute(s,t){switch(t){case Boolean:s=s?Tt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},it=(s,t)=>!Et(s,t),ht={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&Ct(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:i}=St(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const l=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,o=[...zt(e),...Pt(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(ct(r))}else t!==void 0&&e.push(ct(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){var i;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const a=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:F).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var i,a;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=o.getPropertyOptions(r),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:F;this._$Em=r;const h=n.fromAttribute(e,l.type);this[r]=h??((a=this._$Ej)==null?void 0:a.get(r))??h,this._$Em=null}}requestUpdate(t,e,o){var r;if(t!==void 0){const i=this.constructor,a=this[t];if(o??(o=i.getPropertyOptions(t)),!((o.hasChanged??it)(a,e)||o.useDefault&&o.reflect&&a===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:i},a){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:l}=a,n=this[i];l!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[H("elementProperties")]=new Map,S[H("finalized")]=new Map,Q==null||Q({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,G=N.trustedTypes,pt=G?G.createPolicy("lit-html",{createHTML:s=>s}):void 0,yt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+_,Dt=`<${$t}>`,C=document,R=()=>C.createComment(""),B=s=>s===null||typeof s!="object"&&typeof s!="function",at=Array.isArray,Mt=s=>at(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,gt=/>/g,k=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,vt=/"/g,wt=/^(?:script|style|textarea|title)$/i,Lt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),g=Lt(1),z=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),mt=new WeakMap,A=C.createTreeWalker(C,129);function xt(s,t){if(!at(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Ut=(s,t)=>{const e=s.length-1,o=[];let r,i=t===2?"<svg>":t===3?"<math>":"",a=I;for(let l=0;l<e;l++){const n=s[l];let h,u,c=-1,v=0;for(;v<n.length&&(a.lastIndex=v,u=a.exec(n),u!==null);)v=a.lastIndex,a===I?u[1]==="!--"?a=ut:u[1]!==void 0?a=gt:u[2]!==void 0?(wt.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=k):u[3]!==void 0&&(a=k):a===k?u[0]===">"?(a=r??I,c=-1):u[1]===void 0?c=-2:(c=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?k:u[3]==='"'?vt:ft):a===vt||a===ft?a=k:a===ut||a===gt?a=I:(a=k,r=void 0);const m=a===k&&s[l+1].startsWith("/>")?" ":"";i+=a===I?n+Dt:c>=0?(o.push(h),n.slice(0,c)+yt+n.slice(c)+_+m):n+_+(c===-2?l:m)}return[xt(s,i+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class K{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,a=0;const l=t.length-1,n=this.parts,[h,u]=Ut(t,e);if(this.el=K.createElement(h,o),A.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=A.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(yt)){const v=u[a++],m=r.getAttribute(c).split(_),V=/([.?@])?(.*)/.exec(v);n.push({type:1,index:i,name:V[2],strings:m,ctor:V[1]==="."?It:V[1]==="?"?Ht:V[1]==="@"?Nt:J}),r.removeAttribute(c)}else c.startsWith(_)&&(n.push({type:6,index:i}),r.removeAttribute(c));if(wt.test(r.tagName)){const c=r.textContent.split(_),v=c.length-1;if(v>0){r.textContent=G?G.emptyScript:"";for(let m=0;m<v;m++)r.append(c[m],R()),A.nextNode(),n.push({type:2,index:++i});r.append(c[v],R())}}}else if(r.nodeType===8)if(r.data===$t)n.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)n.push({type:7,index:i}),c+=_.length-1}i++}}static createElement(t,e){const o=C.createElement("template");return o.innerHTML=t,o}}function P(s,t,e=s,o){var a,l;if(t===z)return t;let r=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const i=B(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),i===void 0?r=void 0:(r=new i(s),r._$AT(s,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=P(s,r._$AS(s,t.values),r,o)),t}class jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??C).importNode(e,!0);A.currentNode=r;let i=A.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new q(i,i.nextSibling,this,t):n.type===1?h=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(h=new Rt(i,this,t)),this._$AV.push(h),n=o[++l]}a!==(n==null?void 0:n.index)&&(i=A.nextNode(),a++)}return A.currentNode=C,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class q{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),B(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=K.createElement(xt(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{const a=new jt(r,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new K(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new q(this.O(R()),this.O(R()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(t,e=this,o,r){const i=this.strings;let a=!1;if(i===void 0)t=P(this,t,e,0),a=!B(t)||t!==this._$AH&&t!==z,a&&(this._$AH=t);else{const l=t;let n,h;for(t=i[0],n=0;n<i.length-1;n++)h=P(this,l[o+n],e,n),h===z&&(h=this._$AH[n]),a||(a=!B(h)||h!==this._$AH[n]),h===p?t=p:t!==p&&(t+=(h??"")+i[n+1]),this._$AH[n]=h}a&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ht extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Nt extends J{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??p)===z)return;const o=this._$AH,r=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==p&&(o===p||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const et=N.litHtmlPolyfillSupport;et==null||et(K,q),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.1");const Bt=(s,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const i=(e==null?void 0:e.renderBefore)??null;o._$litPart$=r=new q(t.insertBefore(R(),i),i,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class f extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return z}}var _t;f._$litElement$=!0,f.finalized=!0,(_t=E.litElementHydrateSupport)==null||_t.call(E,{LitElement:f});const st=E.litElementPolyfillSupport;st==null||st({LitElement:f});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:it},Wt=(s=Kt,t,e)=>{const{kind:o,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(e.name,s),o==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,s)},init(l){return l!==void 0&&this.C(a,void 0,s,l),l}}}if(o==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,s)}}throw Error("Unsupported decorator location: "+o)};function d(s){return(t,e)=>typeof e=="object"?Wt(s,t,e):((o,r,i)=>{const a=r.hasOwnProperty(i);return r.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(r,i):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(s){return d({...s,state:!0,attribute:!1})}var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,M=(s,t,e,o)=>{for(var r=o>1?void 0:o?Vt(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&qt(t,e,r),r};let y=class extends f{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.type="button",this.href=""}render(){const s=["button",`button--${this.variant}`,`button--${this.size}`].join(" ");return this.href&&!this.disabled?g`
        <a
          href=${this.href}
          class=${s}
          role="button"
          tabindex="0"
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <slot name="icon"></slot>
          <slot></slot>
        </a>
      `:g`
      <button
        type=${this.type}
        class=${s}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `}_handleClick(s){if(this.disabled){s.preventDefault(),s.stopPropagation();return}this.dispatchEvent(new CustomEvent("astro-click",{detail:{variant:this.variant,size:this.size},bubbles:!0}))}_handleKeyDown(s){this.href&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._handleClick(s))}};y.styles=T`
    :host {
      display: inline-block;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--astro-spacing-sm);
      
      border: 2px solid transparent;
      border-radius: var(--astro-border-radius);
      font-family: var(--astro-font-family);
      font-weight: var(--astro-font-weight-medium);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--astro-transition-fast);
      
      /* Prevent text selection */
      user-select: none;
      -webkit-user-select: none;
    }

    /* Size variations */
    .button--sm {
      padding: var(--astro-spacing-xs) var(--astro-spacing-sm);
      font-size: var(--astro-font-size-sm);
      min-height: 32px;
    }

    .button--md {
      padding: var(--astro-spacing-sm) var(--astro-spacing-md);
      font-size: var(--astro-font-size-base);
      min-height: 40px;
    }

    .button--lg {
      padding: var(--astro-spacing-md) var(--astro-spacing-lg);
      font-size: var(--astro-font-size-lg);
      min-height: 48px;
    }

    /* Variant styles */
    .button--primary {
      background-color: var(--astro-primary-color);
      color: white;
      border-color: var(--astro-primary-color);
    }

    .button--primary:hover:not(:disabled) {
      background-color: var(--astro-primary-dark);
      border-color: var(--astro-primary-dark);
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--secondary {
      background-color: var(--astro-secondary-color);
      color: white;
      border-color: var(--astro-secondary-color);
    }

    .button--secondary:hover:not(:disabled) {
      background-color: var(--astro-secondary-dark);
      border-color: var(--astro-secondary-dark);
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--outline {
      background-color: transparent;
      color: var(--astro-primary-color);
      border-color: var(--astro-primary-color);
    }

    .button--outline:hover:not(:disabled) {
      background-color: var(--astro-primary-color);
      color: white;
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--ghost {
      background-color: transparent;
      color: var(--astro-primary-color);
      border-color: transparent;
    }

    .button--ghost:hover:not(:disabled) {
      background-color: rgba(30, 58, 138, 0.1);
      transform: translateY(-1px);
    }

    /* Disabled state */
    .button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    /* Focus styles */
    .button:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Icon slot styling */
    ::slotted([slot="icon"]) {
      width: 1em;
      height: 1em;
    }
  `;M([d({type:String})],y.prototype,"variant",2);M([d({type:String})],y.prototype,"size",2);M([d({type:Boolean,reflect:!0})],y.prototype,"disabled",2);M([d({type:String})],y.prototype,"type",2);M([d({type:String})],y.prototype,"href",2);y=M([D("astro-button")],y);var Yt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,L=(s,t,e,o)=>{for(var r=o>1?void 0:o?Ft(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Yt(t,e,r),r};let $=class extends f{constructor(){super(...arguments),this.title="",this.subtitle="",this.variant="default",this.interactive=!1,this.href=""}render(){const s=["card",`card--${this.variant}`,this.interactive?"card--interactive":""].filter(Boolean).join(" "),t=g`
      <div class=${s} @click=${this._handleClick} @keydown=${this._handleKeyDown} tabindex=${this.interactive?"0":"-1"}>
        <slot name="image"></slot>
        
        ${this.title||this.subtitle?g`
          <div class="card__header">
            ${this.title?g`<h3 class="card__title">${this.title}</h3>`:""}
            ${this.subtitle?g`<p class="card__subtitle">${this.subtitle}</p>`:""}
          </div>
        `:""}

        <div class="card__content">
          <slot></slot>
        </div>

        <slot name="actions" class="card__actions"></slot>
      </div>
    `;return this.href&&this.interactive?g`
        <a href=${this.href} style="text-decoration: none; color: inherit;">
          ${t}
        </a>
      `:t}_handleClick(s){this.interactive&&this.dispatchEvent(new CustomEvent("astro-card-click",{detail:{title:this.title,variant:this.variant},bubbles:!0}))}_handleKeyDown(s){this.interactive&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._handleClick(s))}};$.styles=T`
    :host {
      display: block;
    }

    .card {
      background-color: var(--astro-background-color);
      border-radius: var(--astro-border-radius-lg);
      overflow: hidden;
      transition: all var(--astro-transition-normal);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card--default {
      border: 1px solid var(--astro-border-color);
    }

    .card--elevated {
      box-shadow: var(--astro-shadow-md);
      border: 1px solid transparent;
    }

    .card--outlined {
      border: 2px solid var(--astro-primary-color);
      background-color: rgba(30, 58, 138, 0.02);
    }

    /* Interactive states */
    .card--interactive {
      cursor: pointer;
    }

    .card--interactive:hover {
      transform: translateY(-2px);
      box-shadow: var(--astro-shadow-lg);
    }

    .card--interactive:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Card sections */
    .card__header {
      padding: var(--astro-spacing-lg);
      padding-bottom: var(--astro-spacing-md);
    }

    .card__title {
      font-size: var(--astro-font-size-xl);
      font-weight: var(--astro-font-weight-bold);
      color: var(--astro-text-color);
      margin: 0 0 var(--astro-spacing-xs) 0;
      line-height: var(--astro-line-height-tight);
    }

    .card__subtitle {
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-light);
      margin: 0;
      line-height: var(--astro-line-height-normal);
    }

    .card__content {
      padding: 0 var(--astro-spacing-lg) var(--astro-spacing-lg);
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card__image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card__actions {
      padding: var(--astro-spacing-md) var(--astro-spacing-lg);
      border-top: 1px solid var(--astro-border-color);
      display: flex;
      gap: var(--astro-spacing-sm);
      justify-content: flex-end;
      align-items: center;
    }

    /* Image slot styling */
    ::slotted([slot="image"]) {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    /* Actions slot styling */
    ::slotted([slot="actions"]) {
      display: flex;
      gap: var(--astro-spacing-sm);
      align-items: center;
    }
  `;L([d({type:String})],$.prototype,"title",2);L([d({type:String})],$.prototype,"subtitle",2);L([d({type:String})],$.prototype,"variant",2);L([d({type:Boolean,reflect:!0})],$.prototype,"interactive",2);L([d({type:String})],$.prototype,"href",2);$=L([D("astro-card")],$);var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,U=(s,t,e,o)=>{for(var r=o>1?void 0:o?Jt(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Gt(t,e,r),r};let w=class extends f{constructor(){super(...arguments),this.defaultLanguage="de",this.currentLanguage="de",this.disabled=!1,this._isOpen=!1,this._focusedIndex=-1,this._languages=[{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇺🇸"}],this._handleDocumentClick=s=>{this.contains(s.target)||this._closeDropdown()},this._handleDocumentKeydown=s=>{s.key==="Escape"&&this._isOpen&&(this._closeDropdown(),this._focusButton())}}connectedCallback(){super.connectedCallback(),this.currentLanguage||(this.currentLanguage=this.defaultLanguage),document.addEventListener("click",this._handleDocumentClick),document.addEventListener("keydown",this._handleDocumentKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick),document.removeEventListener("keydown",this._handleDocumentKeydown)}_handleButtonClick(s){s.preventDefault(),s.stopPropagation(),this._toggleDropdown()}_toggleDropdown(){if(!this.disabled){if(this._isOpen=!this._isOpen,this._focusedIndex=-1,this._isOpen){const s=this._languages.findIndex(t=>t.code===this.currentLanguage);this._focusedIndex=s>=0?s:0}this.requestUpdate()}}_closeDropdown(){this._isOpen=!1,this._focusedIndex=-1}_selectLanguage(s){if(s!==this.currentLanguage){const t=this.currentLanguage;this.currentLanguage=s,this.dispatchEvent(new CustomEvent("language-change",{detail:{oldLanguage:t,newLanguage:s,language:this._languages.find(e=>e.code===s)},bubbles:!0,composed:!0}))}this._closeDropdown()}_handleKeyDown(s){if(!this.disabled)switch(s.key){case"Enter":case" ":s.preventDefault(),this._isOpen?this._focusedIndex>=0&&this._selectLanguage(this._languages[this._focusedIndex].code):this._toggleDropdown();break;case"ArrowDown":s.preventDefault(),this._isOpen?this._focusedIndex=Math.min(this._focusedIndex+1,this._languages.length-1):this._toggleDropdown();break;case"ArrowUp":s.preventDefault(),this._isOpen&&(this._focusedIndex=Math.max(this._focusedIndex-1,0));break;case"Escape":s.preventDefault(),this._closeDropdown();break;case"Tab":this._closeDropdown();break}}_handleOptionClick(s){this._selectLanguage(s),this._focusButton()}_focusButton(){var t;const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".selector-button");s==null||s.focus()}_getCurrentLanguage(){return this._languages.find(s=>s.code===this.currentLanguage)||this._languages[0]}render(){const s=this._getCurrentLanguage();return g`
      <div class="language-selector">
        <button
          class="selector-button"
          @click=${this._handleButtonClick}
          @keydown=${this._handleKeyDown}
          aria-expanded=${this._isOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
          ?disabled=${this.disabled}
        >
          <div class="current-language">
            <span class="flag">${s.flag}</span>
            <span class="language-name">${s.name}</span>
          </div>
          <svg class="chevron ${this._isOpen?"open":""}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div class="dropdown ${this._isOpen?"open":""}" role="listbox">
          ${this._languages.map((t,e)=>g`
            <button
              class="language-option ${t.code===this.currentLanguage?"selected":""} ${e===this._focusedIndex?"focused":""}"
              role="option"
              aria-selected=${t.code===this.currentLanguage}
              @click=${()=>this._handleOptionClick(t.code)}
              @mouseenter=${()=>{this._focusedIndex=e}}
            >
              <span class="flag">${t.flag}</span>
              <span class="language-name">${t.name}</span>
              <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          `)}
        </div>
      </div>
    `}};w.styles=T`
    :host {
      display: inline-flex;
      align-items: center; /* Ensure vertical centering */
      position: relative;
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .language-selector {
      position: relative;
      font-family: var(--astro-font-family);
    }

    .selector-button {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      padding: var(--astro-spacing-xs) var(--astro-spacing-sm);
      background: var(--astro-background-color);
      border: 1px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
      min-width: 100px;
      height: 28px; /* Match md theme toggle height */
      user-select: none;
    }

    .selector-button:hover:not(:disabled) {
      background: var(--astro-background-hover);
      border-color: var(--astro-primary-light);
      box-shadow: var(--astro-shadow-sm);
    }

    .selector-button:focus {
      outline: none;
      border-color: var(--astro-primary-color);
      box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
    }

    .selector-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .selector-button[aria-expanded="true"] {
      border-color: var(--astro-primary-color);
      box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
    }

    .current-language {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      flex: 1;
    }

    .flag {
      font-size: 1rem;
    }

    .chevron {
      width: 16px;
      height: 16px;
      transition: transform 0.2s ease;
      color: var(--astro-text-light);
    }

    .chevron.open {
      transform: rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--astro-background-color);
      border: 1px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      box-shadow: var(--astro-shadow-md);
      z-index: 9999; /* Increase z-index significantly */
      margin-top: 2px;
      overflow: hidden;
      transform: translateY(-4px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--astro-background-color);
      border: 1px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      box-shadow: var(--astro-shadow-md);
      z-index: 9999; /* Increase z-index significantly */
      margin-top: 2px;
      overflow: hidden;
      transform: translateY(-4px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
    }

    .dropdown.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .language-option {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      padding: var(--astro-spacing-sm);
      cursor: pointer;
      transition: background-color 0.2s ease;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      font-family: inherit;
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
    }

    .language-option:hover,
    .language-option:focus {
      background: var(--astro-background-hover);
      outline: none;
    }

    .language-option.focused {
      background: var(--astro-primary-light);
      color: white;
    }

    .language-option.selected {
      background: var(--astro-primary-color);
      color: white;
    }

    .language-option.selected:hover {
      background: var(--astro-primary-dark);
    }

    .checkmark {
      margin-left: auto;
      width: 16px;
      height: 16px;
      opacity: 0;
    }

    .language-option.selected .checkmark {
      opacity: 1;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .selector-button {
        min-width: 80px;
        padding: var(--astro-spacing-xs);
      }
      
      .language-name {
        display: none;
      }
    }
  `;U([d({type:String,attribute:"default-language"})],w.prototype,"defaultLanguage",2);U([d({type:String,attribute:"current-language"})],w.prototype,"currentLanguage",2);U([d({type:Boolean,reflect:!0})],w.prototype,"disabled",2);U([Z()],w.prototype,"_isOpen",2);U([Z()],w.prototype,"_focusedIndex",2);w=U([D("astro-language-selector")],w);var Zt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,j=(s,t,e,o)=>{for(var r=o>1?void 0:o?Xt(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Zt(t,e,r),r};let x=class extends f{constructor(){super(...arguments),this.defaultTheme="light",this.disabled=!1,this.size="md",this._currentTheme="light",this._isAnimating=!1,this._storageKey="astro-club-theme"}connectedCallback(){super.connectedCallback(),this._loadThemeFromStorage(),this._applyTheme()}_loadThemeFromStorage(){try{const s=localStorage.getItem(this._storageKey);if(s&&(s==="light"||s==="dark"))this._currentTheme=s;else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;this._currentTheme=t?"dark":this.defaultTheme}}catch(s){console.warn("Failed to load theme from localStorage:",s),this._currentTheme=this.defaultTheme}}_saveThemeToStorage(){try{localStorage.setItem(this._storageKey,this._currentTheme)}catch(s){console.warn("Failed to save theme to localStorage:",s)}}_applyTheme(){document.documentElement.setAttribute("data-theme",this._currentTheme),document.documentElement.classList.toggle("dark-theme",this._currentTheme==="dark"),this.classList.toggle("dark-theme",this._currentTheme==="dark"),this.dispatchEvent(new CustomEvent("theme-change",{detail:{theme:this._currentTheme,isDark:this._currentTheme==="dark"},bubbles:!0,composed:!0}))}_toggleTheme(){this.disabled||this._isAnimating||(this._isAnimating=!0,this._currentTheme=this._currentTheme==="light"?"dark":"light",this._saveThemeToStorage(),this._applyTheme(),setTimeout(()=>{this._isAnimating=!1},600))}_handleKeyDown(s){this.disabled||(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._toggleTheme())}_handleClick(){this._toggleTheme()}render(){const s=this._currentTheme==="dark",t=s?"Switch to light mode":"Switch to dark mode";return g`
      <div class="theme-toggle">
        <div class="toggle-wrapper">
          <button
            class="toggle-switch ${s?"dark":"light"} ${this._isAnimating?"animating":""} ${this.disabled?"disabled":""}"
            @click=${this._handleClick}
            @keydown=${this._handleKeyDown}
            ?disabled=${this.disabled}
            aria-label=${t}
            aria-pressed=${s}
            role="switch"
            tabindex="0"
          >
            <div class="background-icons">
              <svg class="bg-icon sun" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg class="bg-icon moon" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <div class="toggle-slider">
              <svg class="icon ${s?"hidden":""}" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg class="icon ${s?"":"hidden"}" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <span class="sr-only">${t}</span>
          </button>
        </div>
      </div>
    `}};x.styles=T`
    :host {
      display: inline-flex;
      align-items: center; /* Ensure vertical centering */
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .theme-toggle {
      font-family: var(--astro-font-family);
    }

    .toggle-wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
    }

    .toggle-label {
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-medium);
      user-select: none;
      cursor: pointer;
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: var(--switch-width);
      height: var(--switch-height);
      cursor: pointer;
      border-radius: var(--switch-radius);
      background: var(--switch-bg);
      border: 2px solid var(--switch-border);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    .toggle-switch:hover:not(.disabled) {
      box-shadow: 0 0 0 4px var(--switch-hover-shadow);
    }

    .toggle-switch:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--switch-focus-shadow);
    }

    .toggle-switch.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .toggle-switch.animating {
      transition-duration: 0.6s;
    }

    .toggle-slider {
      position: absolute;
      top: 2px;
      left: 2px;
      width: var(--slider-size);
      height: var(--slider-size);
      border-radius: 50%;
      background: var(--slider-bg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--slider-shadow);
      z-index: 2;
    }

    .toggle-switch.dark .toggle-slider {
      transform: translateX(var(--slider-offset));
      background: var(--slider-bg-dark);
    }

    .toggle-switch.animating .toggle-slider {
      transition-duration: 0.6s;
    }

    .icon {
      width: var(--icon-size);
      height: var(--icon-size);
      transition: all 0.3s ease;
      color: var(--icon-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon.hidden {
      opacity: 0;
      transform: scale(0.5) rotate(90deg);
    }

    .background-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .bg-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: var(--bg-icon-size);
      height: var(--bg-icon-size);
      opacity: 0.3;
      transition: all 0.3s ease;
    }

    .bg-icon.sun {
      left: 6px;
      color: #fbbf24;
    }

    .bg-icon.moon {
      right: 6px;
      color: #8b5cf6;
    }

    /* Size variants */
    :host([size="sm"]) {
      --switch-width: 44px;
      --switch-height: 24px;
      --switch-radius: 12px;
      --slider-size: 16px;
      --slider-offset: 16px;
      --icon-size: 10px;
      --bg-icon-size: 8px;
    }

    :host([size="md"]) {
      --switch-width: 52px;
      --switch-height: 28px;
      --switch-radius: 14px;
      --slider-size: 20px;
      --slider-offset: 20px;
      --icon-size: 12px;
      --bg-icon-size: 10px;
    }

    :host([size="lg"]) {
      --switch-width: 60px;
      --switch-height: 32px;
      --switch-radius: 16px;
      --slider-size: 24px;
      --slider-offset: 24px;
      --icon-size: 14px;
      --bg-icon-size: 12px;
    }

    /* Light theme colors */
    :host {
      --switch-bg: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%);
      --switch-border: #b3e5fc;
      --switch-hover-shadow: rgba(59, 130, 246, 0.1);
      --switch-focus-shadow: rgba(59, 130, 246, 0.2);
      --slider-bg: #ffffff;
      --slider-bg-dark: #1f2937;
      --slider-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      --icon-color: #f59e0b;
    }

    /* Dark theme updates */
    :host(.dark-theme) {
      --switch-bg: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      --switch-border: #475569;
      --switch-hover-shadow: rgba(139, 92, 246, 0.1);
      --switch-focus-shadow: rgba(139, 92, 246, 0.2);
      --slider-bg: #374151;
      --slider-bg-dark: #f8fafc;
      --slider-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      --icon-color: #8b5cf6;
    }

    /* Screen reader only text */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .toggle-switch,
      .toggle-slider,
      .icon,
      .bg-icon {
        transition: none;
      }
    }
  `;j([d({type:String,attribute:"default-theme"})],x.prototype,"defaultTheme",2);j([d({type:Boolean,reflect:!0})],x.prototype,"disabled",2);j([d({type:String})],x.prototype,"size",2);j([Z()],x.prototype,"_currentTheme",2);j([Z()],x.prototype,"_isAnimating",2);x=j([D("astro-theme-toggle")],x);var Qt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,X=(s,t,e,o)=>{for(var r=o>1?void 0:o?te(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&Qt(t,e,r),r};let O=class extends f{constructor(){super(...arguments),this.open=!1,this.currentPath="",this.currentLanguage="de",this._justToggled=!1}render(){const s=this.open?"nav__menu nav__menu--open":"nav__menu",t=this.currentLanguage==="de",e=t?"":"/en";return g`
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav__container">
          <div class="nav__main">
            <a href=${e+"/"} class="nav__logo">
              <div class="nav__logo-icon">
                <img src="/assets/logo-astro-club-300x300.png" alt="Olli's Astro Club Logo" />
              </div>
              <span>Olli's Astro Club</span>
            </a>

            <button 
              class="nav__toggle" 
              @click=${this._toggleMenu}
              aria-expanded=${this.open?"true":"false"}
              aria-controls="main-menu"
              aria-label="Toggle navigation menu"
            >
              ${this.open?"✕":"☰"}
            </button>

            <ul class=${s} id="main-menu" @click=${this._handleMenuClick}>
              <li class="nav__item">
                <a href=${e+"/"} class="nav__link ${this._isActive("/")?"nav__link--active":""}">
                  ${"Home"}
                </a>
              </li>
              <li class="nav__item">
                <a href=${e+"/club.html"} class="nav__link ${this._isActive("/club")?"nav__link--active":""}">
                  ${t?"Der Club":"The Club"}
                </a>
              </li>
              <li class="nav__item">
                <a href=${e+"/meetings.html"} class="nav__link ${this._isActive("/meetings")?"nav__link--active":""}">
                  ${t?"Treffen":"Events"}
                </a>
              </li>
              <li class="nav__item">
                <a href=${e+"/contact.html"} class="nav__link ${this._isActive("/contact")?"nav__link--active":""}">
                  ${t?"Kontakt":"Contact"}
                </a>
              </li>
            </ul>
          </div>

          <div class="nav__controls">
            <astro-language-selector
              default-language="de"
              current-language=${this.currentLanguage}
              @language-change=${this._handleLanguageChange}
            ></astro-language-selector>
            
            <div class="nav__controls-divider"></div>
            
            <astro-theme-toggle
              default-theme="light"
              size="md"
              @theme-change=${this._handleThemeChange}
            ></astro-theme-toggle>
          </div>
        </div>
      </nav>
    `}_handleLanguageChange(s){const{newLanguage:t}=s.detail;this.currentLanguage=t;const e=window.location.pathname;let o="";t==="de"?e.startsWith("/en/")?o=e.replace("/en/","/"):e.startsWith("/de/")?o=e.replace("/de/","/"):o=e:e.startsWith("/en/")?o=e:e.startsWith("/de/")?o=e.replace("/de/","/en/"):o="/en"+e,o&&o!==e&&(window.location.href=o),this.dispatchEvent(new CustomEvent("astro-nav-language-change",{detail:{language:t,oldPath:e,newPath:o},bubbles:!0,composed:!0}))}_handleThemeChange(s){this.dispatchEvent(new CustomEvent("astro-nav-theme-change",{detail:s.detail,bubbles:!0,composed:!0}))}_toggleMenu(s){s.stopPropagation(),this._justToggled=!0,this.open=!this.open,this.requestUpdate(),setTimeout(()=>{this._justToggled=!1},10),this.dispatchEvent(new CustomEvent("astro-nav-toggle",{detail:{open:this.open},bubbles:!0}))}_handleMenuClick(s){s.target.tagName==="A"&&(this.open=!1)}_isActive(s){const t=this.currentPath||window.location.pathname;if(s==="/")return t==="/"||t==="/index.html"||t==="/en/"||t==="/en/index.html";const e=s.includes(".html")?s:`${s}.html`;return t===s||t===e||t===`/en${s}`||t===`/en${e}`?!0:t.startsWith(s+"/")||t.startsWith(`/en${s}/`)}connectedCallback(){super.connectedCallback(),window.location.pathname.startsWith("/en/")?this.currentLanguage="en":this.currentLanguage="de",document.addEventListener("click",this._handleDocumentClick.bind(this)),document.addEventListener("keydown",this._handleKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick.bind(this)),document.removeEventListener("keydown",this._handleKeyDown.bind(this))}_handleDocumentClick(s){if(this._justToggled)return;const t=s.target;!this.contains(t)&&this.open&&(this.open=!1,this.requestUpdate())}_handleKeyDown(s){s.key==="Escape"&&this.open&&(this.open=!1)}};O.styles=T`
    :host {
      display: block;
      position: relative;
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .nav {
      background-color: var(--astro-background-color);
      border-bottom: 1px solid var(--astro-border-color);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--astro-shadow-sm);
    }

    .nav__container {
      max-width: var(--astro-max-width);
      margin: 0 auto;
      padding: 0 var(--astro-spacing-md);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 64px;
    }

    .nav__main {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xl);
      flex: 1;
    }

    .nav__controls {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-md);
      min-height: 28px; /* Ensure minimum height for alignment */
    }

    .nav__controls-divider {
      width: 1px;
      height: 20px; /* Reduce height slightly for better proportion */
      background-color: var(--astro-border-color);
      align-self: center; /* Ensure it's centered */
    }

    .nav__logo {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      text-decoration: none;
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-bold);
      font-size: var(--astro-font-size-lg);
      transition: color var(--astro-transition-normal);
    }

    .nav__logo:hover {
      color: var(--astro-primary-color);
    }

    .nav__logo-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--astro-border-radius-md);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav__logo-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .nav__menu {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-lg);
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
    }

    .nav__link {
      text-decoration: none;
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-medium);
      padding: var(--astro-spacing-sm) var(--astro-spacing-md);
      border-radius: var(--astro-border-radius-md);
      transition: all var(--astro-transition-normal);
      display: block;
    }

    .nav__link:hover {
      background-color: var(--astro-background-hover);
      color: var(--astro-primary-color);
    }

    .nav__link--active {
      background-color: var(--astro-primary-color);
      color: white;
    }

    .nav__link--active:hover {
      background-color: var(--astro-primary-dark);
    }

    /* Mobile Toggle */
    .nav__toggle {
      display: none;
      background: none;
      border: none;
      font-size: var(--astro-font-size-xl);
      color: var(--astro-text-color);
      cursor: pointer;
      padding: var(--astro-spacing-sm);
      border-radius: var(--astro-border-radius-md);
      transition: all var(--astro-transition-normal);
    }

    .nav__toggle:hover {
      background-color: var(--astro-background-hover);
      color: var(--astro-primary-color);
    }

    .nav__toggle:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .nav__controls {
        gap: var(--astro-spacing-sm);
      }

      .nav__controls-divider {
        display: none;
      }

      :host .nav__menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--astro-background-color);
        border-top: 1px solid var(--astro-border-color);
        box-shadow: var(--astro-shadow-lg);
        flex-direction: column;
        gap: 0;
        padding: var(--astro-spacing-md);
        display: none;
      }

      :host .nav__menu--open {
        display: flex !important;
      }

      .nav__toggle {
        display: block;
      }

      .nav__item {
        width: 100%;
      }

      .nav__link {
        width: 100%;
        text-align: center;
        padding: var(--astro-spacing-md);
        border-radius: var(--astro-border-radius-md);
      }
    }

    /* Focus management */
    .nav__link:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }
  `;X([d({type:Boolean,reflect:!0})],O.prototype,"open",2);X([d({type:String,attribute:"current-path"})],O.prototype,"currentPath",2);X([d({type:String,attribute:"current-language"})],O.prototype,"currentLanguage",2);O=X([D("astro-navigation")],O);var ee=Object.defineProperty,se=Object.getOwnPropertyDescriptor,nt=(s,t,e,o)=>{for(var r=o>1?void 0:o?se(t,e):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&ee(t,e,r),r};let W=class extends f{constructor(){super(...arguments),this.pageTitle="",this.currentPath=""}render(){return g`
      <div class="layout">
        <astro-navigation .currentPath=${this.currentPath}></astro-navigation>
        
        <main class="layout__main" role="main">
          <div class="layout__content">
            ${this.pageTitle?g`<h1 class="page-title">${this.pageTitle}</h1>`:""}
            <slot></slot>
          </div>
        </main>

        <footer class="layout__footer" role="contentinfo">
          <div class="footer__content">
            <div class="footer__section">
              <h3>Olli's Astro Club</h3>
              <p>
                Gemeinsam die Wunder des Universums entdecken. 
                Unser Astronomie-Club bietet spannende Beobachtungsabende, 
                lehrreiche Workshops und eine freundliche Gemeinschaft 
                für alle Sternenfreunde.
              </p>
            </div>
            
            <div class="footer__section">
              <h3>Navigation</h3>
              <ul class="footer__links">
                <li><a href="/">Home</a></li>
                <li><a href="/club">Der Club</a></li>
                <li><a href="/meetings">Treffen</a></li>
                <li><a href="/observations">Beobachtungen</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
                <li><a href="/contact">Kontakt</a></li>
              </ul>
            </div>
            
            <div class="footer__section">
              <h3>Ressourcen</h3>
              <ul class="footer__links">
                <li><a href="/tutorials/telescope-basics">Teleskop-Grundlagen</a></li>
                <li><a href="/tutorials/photography">Astrofotografie</a></li>
                <li><a href="/observations/calendar">Beobachtungskalender</a></li>
                <li><a href="/club/membership">Mitgliedschaft</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer__bottom">
            <p>&copy; 2024 Olli's Astro Club. Alle Rechte vorbehalten.</p>
            <p>Mit ❤️ für die Astronomie-Community erstellt.</p>
          </div>
        </footer>
      </div>
    `}updated(s){super.updated(s),s.has("pageTitle")&&this.pageTitle&&(document.title=`${this.pageTitle} | Olli's Astro Club`)}};W.styles=T`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      opacity: 0;
      animation: fadeIn 0.3s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .layout__main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .layout__content {
      flex: 1;
      max-width: var(--astro-max-width);
      margin: 0 auto;
      padding: var(--astro-spacing-xl) var(--astro-spacing-md);
      width: 100%;
      box-sizing: border-box;
    }

    .layout__footer {
      background-color: var(--astro-background-alt);
      border-top: 1px solid var(--astro-border-color);
      padding: var(--astro-spacing-xl) var(--astro-spacing-md);
      margin-top: auto;
    }

    .footer__content {
      max-width: var(--astro-max-width);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--astro-spacing-xl);
      text-align: center;
    }

    .footer__section h3 {
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-lg);
      font-weight: var(--astro-font-weight-bold);
      margin: 0 0 var(--astro-spacing-md) 0;
    }

    .footer__section p {
      color: var(--astro-text-light);
      margin: 0 0 var(--astro-spacing-sm) 0;
      line-height: var(--astro-line-height-relaxed);
    }

    .footer__links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer__links li {
      margin: 0 0 var(--astro-spacing-xs) 0;
    }

    .footer__links a {
      color: var(--astro-text-light);
      text-decoration: none;
      transition: color var(--astro-transition-normal);
    }

    .footer__links a:hover {
      color: var(--astro-primary-color);
    }

    .footer__bottom {
      border-top: 1px solid var(--astro-border-color);
      margin-top: var(--astro-spacing-xl);
      padding-top: var(--astro-spacing-lg);
      text-align: center;
      color: var(--astro-text-light);
      font-size: var(--astro-font-size-sm);
    }

    /* Page title styling */
    .page-title {
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-3xl);
      font-weight: var(--astro-font-weight-bold);
      margin: 0 0 var(--astro-spacing-xl) 0;
      text-align: center;
      line-height: var(--astro-line-height-tight);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .layout__content {
        padding: var(--astro-spacing-lg) var(--astro-spacing-md);
      }

      .page-title {
        font-size: var(--astro-font-size-2xl);
        margin-bottom: var(--astro-spacing-lg);
      }

      .footer__content {
        grid-template-columns: 1fr;
        gap: var(--astro-spacing-lg);
        text-align: left;
      }
    }
  `;nt([d({type:String})],W.prototype,"pageTitle",2);nt([d({type:String})],W.prototype,"currentPath",2);W=nt([D("astro-layout")],W);console.log("🌟 Olli's Astro Club components loaded successfully!");document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.body.classList.add("loaded")},100)});
