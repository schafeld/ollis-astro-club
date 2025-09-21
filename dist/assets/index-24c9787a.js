(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,it=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),dt=new WeakMap;let $t=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(it&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&dt.set(e,t))}return t}toString(){return this.cssText}};const Ct=o=>new $t(typeof o=="string"?o:o+"",void 0,at),O=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new $t(e,o,at)},St=(o,t)=>{if(it)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=Y.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},ht=it?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Ct(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tt,defineProperty:Pt,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Dt,getPrototypeOf:Mt}=Object,b=globalThis,pt=b.trustedTypes,Lt=pt?pt.emptyScript:"",et=b.reactiveElementPolyfillSupport,j=(o,t)=>o,G={toAttribute(o,t){switch(t){case Boolean:o=o?Lt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nt=(o,t)=>!Tt(o,t),ut={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=zt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const l=s==null?void 0:s.call(this);i==null||i.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const e=this.properties,r=[...Ot(e),...Dt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(ht(s))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:G).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var i,a;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=r.getPropertyOptions(s),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:G;this._$Em=s;const c=n.fromAttribute(e,l.type);this[s]=c??((a=this._$Ej)==null?void 0:a.get(s))??c,this._$Em=null}}requestUpdate(t,e,r){var s;if(t!==void 0){const i=this.constructor,a=this[t];if(r??(r=i.getPropertyOptions(t)),!((r.hasChanged??nt)(a,e)||r.useDefault&&r.reflect&&a===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:l}=a,n=this[i];l!==!0||this._$AL.has(i)||n===void 0||this.C(i,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[j("elementProperties")]=new Map,S[j("finalized")]=new Map,et==null||et({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,J=N.trustedTypes,gt=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,xt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+_,Ut=`<${kt}>`,C=document,R=()=>C.createComment(""),B=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,It=o=>lt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,k=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,_t=/"/g,At=/^(?:script|style|textarea|title)$/i,Ht=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=Ht(1),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,A=C.createTreeWalker(C,129);function Et(o,t){if(!lt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}const jt=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",a=H;for(let l=0;l<e;l++){const n=o[l];let c,u,d=-1,m=0;for(;m<n.length&&(a.lastIndex=m,u=a.exec(n),u!==null);)m=a.lastIndex,a===H?u[1]==="!--"?a=ft:u[1]!==void 0?a=mt:u[2]!==void 0?(At.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=k):u[3]!==void 0&&(a=k):a===k?u[0]===">"?(a=s??H,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?k:u[3]==='"'?_t:vt):a===_t||a===vt?a=k:a===ft||a===mt?a=H:(a=k,s=void 0);const v=a===k&&o[l+1].startsWith("/>")?" ":"";i+=a===H?n+Ut:d>=0?(r.push(c),n.slice(0,d)+xt+n.slice(d)+_+v):n+_+(d===-2?l:v)}return[Et(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class W{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,a=0;const l=t.length-1,n=this.parts,[c,u]=jt(t,e);if(this.el=W.createElement(c,r),A.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=A.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(xt)){const m=u[a++],v=s.getAttribute(d).split(_),q=/([.?@])?(.*)/.exec(m);n.push({type:1,index:i,name:q[2],strings:v,ctor:q[1]==="."?Rt:q[1]==="?"?Bt:q[1]==="@"?Wt:Z}),s.removeAttribute(d)}else d.startsWith(_)&&(n.push({type:6,index:i}),s.removeAttribute(d));if(At.test(s.tagName)){const d=s.textContent.split(_),m=d.length-1;if(m>0){s.textContent=J?J.emptyScript:"";for(let v=0;v<m;v++)s.append(d[v],R()),A.nextNode(),n.push({type:2,index:++i});s.append(d[m],R())}}}else if(s.nodeType===8)if(s.data===kt)n.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(_,d+1))!==-1;)n.push({type:7,index:i}),d+=_.length-1}i++}}static createElement(t,e){const r=C.createElement("template");return r.innerHTML=t,r}}function P(o,t,e=o,r){var a,l;if(t===T)return t;let s=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const i=B(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=P(o,s._$AS(o,t.values),s,r)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??C).importNode(e,!0);A.currentNode=s;let i=A.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new K(i,i.nextSibling,this,t):n.type===1?c=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(c=new Vt(i,this,t)),this._$AV.push(c),n=r[++l]}a!==(n==null?void 0:n.index)&&(i=A.nextNode(),a++)}return A.currentNode=C,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class K{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),B(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):It(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=W.createElement(Et(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const a=new Nt(s,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new W(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new K(this.O(R()),this.O(R()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){const i=this.strings;let a=!1;if(i===void 0)t=P(this,t,e,0),a=!B(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const l=t;let n,c;for(t=i[0],n=0;n<i.length-1;n++)c=P(this,l[r+n],e,n),c===T&&(c=this._$AH[n]),a||(a=!B(c)||c!==this._$AH[n]),c===p?t=p:t!==p&&(t+=(c??"")+i[n+1]),this._$AH[n]=c}a&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Bt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Wt extends Z{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??p)===T)return;const r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const st=N.litHtmlPolyfillSupport;st==null||st(W,K),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.1");const Kt=(o,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new K(t.insertBefore(R(),i),i,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class f extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}}var wt;f._$litElement$=!0,f.finalized=!0,(wt=E.litElementHydrateSupport)==null||wt.call(E,{LitElement:f});const rt=E.litElementPolyfillSupport;rt==null||rt({LitElement:f});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:nt},Yt=(o=qt,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,o)},init(l){return l!==void 0&&this.C(a,void 0,o,l),l}}}if(r==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,o)}}throw Error("Unsupported decorator location: "+r)};function h(o){return(t,e)=>typeof e=="object"?Yt(o,t,e):((r,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(o){return h({...o,state:!0,attribute:!1})}const yt=new Map,Ft=5*60*1e3;function F(){const o="startViewTransition"in document,t=window.matchMedia("(min-width: 768px)").matches;return o&&t}async function Q(o,t={}){const{direction:e="right"}=t,r=window.location.pathname,s=new URL(o,window.location.origin).pathname;if(r===s){console.log(`🚫 Already on page: ${s}, skipping navigation`);return}if(!F()){console.log("🔄 View Transition API not supported or mobile device, using regular navigation"),window.location.href=o;return}console.log(`🎬 Starting view transition to: ${o} (direction: ${e})`),document.body.classList.add("view-transition-loading");const i=document.startViewTransition(async()=>{await Gt(o)});try{await i.ready,document.documentElement.classList.add(`transition-${e}`),console.log(`✨ View transition ready, applied class: transition-${e}`),i.finished.finally(()=>{document.documentElement.classList.remove(`transition-${e}`),document.body.classList.remove("view-transition-loading"),console.log("🎯 View transition completed and cleaned up")})}catch(a){console.warn("View transition failed:",a),document.body.classList.remove("view-transition-loading"),window.location.href=o}}async function Gt(o){try{const t=yt.get(o),e=Date.now();let r,s;if(t&&e-t.timestamp<Ft)console.log(`📄 Using cached version of: ${o}`),r=t.html,s=t.title;else{console.log(`🌐 Fetching fresh content for: ${o}`);const c=await fetch(o);if(!c.ok)throw new Error(`Failed to load page: ${c.status}`);r=await c.text(),s=new DOMParser().parseFromString(r,"text/html").title,yt.set(o,{html:r,title:s,timestamp:e})}const a=new DOMParser().parseFromString(r,"text/html");document.title=s,Jt(a);const l=document.body,n=a.body;n&&(Array.from(n.attributes).forEach(c=>{l.setAttribute(c.name,c.value)}),l.innerHTML=n.innerHTML,await Qt()),window.history.pushState({},"",o)}catch(t){throw console.error("Error loading page:",t),t}}function Jt(o){["description","keywords","og:title","og:description","og:url","twitter:title","twitter:description"].forEach(e=>{const r=document.querySelector(`meta[name="${e}"], meta[property="${e}"]`),s=o.querySelector(`meta[name="${e}"], meta[property="${e}"]`);if(r&&s){const i=s.getAttribute("content");i&&r.setAttribute("content",i)}})}async function Qt(){await Promise.all([customElements.whenDefined("astro-layout"),customElements.whenDefined("astro-navigation"),customElements.whenDefined("astro-button"),customElements.whenDefined("astro-card")]);const o=new CustomEvent("page-loaded",{bubbles:!0,detail:{timestamp:Date.now()}});document.dispatchEvent(o)}function Zt(){console.log("🚀 Setting up View Transitions"),console.log(`📱 View Transition API supported: ${F()}`),window.matchMedia("(min-width: 768px)").addListener(()=>{console.log(`📱 Viewport changed, View Transitions ${F()?"enabled":"disabled"}`)}),window.addEventListener("popstate",()=>{F()&&Q(window.location.href,{direction:"left"})}),document.addEventListener("click",t=>{const r=t.target.closest("a[href]");if(!r)return;const s=r.getAttribute("href");s&&(s.startsWith("http")||s.startsWith("mailto:")||s.startsWith("tel:")||s.startsWith("#")||r.target==="_blank"||r.hasAttribute("download")||r.hasAttribute("data-no-transition")||(t.preventDefault(),Q(s,{direction:"right"})))})}var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,M=(o,t,e,r)=>{for(var s=r>1?void 0:r?te(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&Xt(t,e,s),s};let y=class extends f{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.type="button",this.href=""}render(){const o=["button",`button--${this.variant}`,`button--${this.size}`].join(" ");return this.href&&!this.disabled?g`
        <a
          href=${this.href}
          class=${o}
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
        class=${o}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `}_handleClick(o){if(this.disabled){o.preventDefault(),o.stopPropagation();return}if(this.href&&!this.href.startsWith("http")&&!this.href.startsWith("#")){o.preventDefault(),this._navigateWithTransition(this.href);return}this.dispatchEvent(new CustomEvent("astro-click",{detail:{variant:this.variant,size:this.size},bubbles:!0}))}async _navigateWithTransition(o){try{await Q(o,{direction:"right"})}catch(t){console.warn("Button navigation transition failed, using fallback:",t),window.location.href=o}}_handleKeyDown(o){this.href&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),!this.href.startsWith("http")&&!this.href.startsWith("#")?this._navigateWithTransition(this.href):window.location.href=this.href)}};y.styles=O`
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
  `;M([h({type:String})],y.prototype,"variant",2);M([h({type:String})],y.prototype,"size",2);M([h({type:Boolean,reflect:!0})],y.prototype,"disabled",2);M([h({type:String})],y.prototype,"type",2);M([h({type:String})],y.prototype,"href",2);y=M([D("astro-button")],y);var ee=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,L=(o,t,e,r)=>{for(var s=r>1?void 0:r?oe(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&ee(t,e,s),s};let w=class extends f{constructor(){super(...arguments),this.title="",this.subtitle="",this.variant="default",this.interactive=!1,this.href=""}render(){const o=["card",`card--${this.variant}`,this.interactive?"card--interactive":""].filter(Boolean).join(" "),t=g`
      <div class=${o} @click=${this._handleClick} @keydown=${this._handleKeyDown} tabindex=${this.interactive?"0":"-1"}>
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
      `:t}_handleClick(o){this.interactive&&this.dispatchEvent(new CustomEvent("astro-card-click",{detail:{title:this.title,variant:this.variant},bubbles:!0}))}_handleKeyDown(o){this.interactive&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._handleClick(o))}};w.styles=O`
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
  `;L([h({type:String})],w.prototype,"title",2);L([h({type:String})],w.prototype,"subtitle",2);L([h({type:String})],w.prototype,"variant",2);L([h({type:Boolean,reflect:!0})],w.prototype,"interactive",2);L([h({type:String})],w.prototype,"href",2);w=L([D("astro-card")],w);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,U=(o,t,e,r)=>{for(var s=r>1?void 0:r?re(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&se(t,e,s),s};let $=class extends f{constructor(){super(...arguments),this.defaultLanguage="de",this.currentLanguage="de",this.disabled=!1,this._isOpen=!1,this._focusedIndex=-1,this._languages=[{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇺🇸"}],this._handleDocumentClick=o=>{this.contains(o.target)||this._closeDropdown()},this._handleDocumentKeydown=o=>{o.key==="Escape"&&this._isOpen&&(this._closeDropdown(),this._focusButton())}}connectedCallback(){super.connectedCallback(),this.currentLanguage||(this.currentLanguage=this.defaultLanguage),document.addEventListener("click",this._handleDocumentClick),document.addEventListener("keydown",this._handleDocumentKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick),document.removeEventListener("keydown",this._handleDocumentKeydown)}_handleButtonClick(o){o.preventDefault(),o.stopPropagation(),this._toggleDropdown()}_toggleDropdown(){if(!this.disabled){if(this._isOpen=!this._isOpen,this._focusedIndex=-1,this._isOpen){const o=this._languages.findIndex(t=>t.code===this.currentLanguage);this._focusedIndex=o>=0?o:0}this.requestUpdate()}}_closeDropdown(){this._isOpen=!1,this._focusedIndex=-1}_selectLanguage(o){if(o!==this.currentLanguage){const t=this.currentLanguage;this.currentLanguage=o,this.dispatchEvent(new CustomEvent("language-change",{detail:{oldLanguage:t,newLanguage:o,language:this._languages.find(e=>e.code===o)},bubbles:!0,composed:!0}))}this._closeDropdown()}_handleKeyDown(o){if(!this.disabled)switch(o.key){case"Enter":case" ":o.preventDefault(),this._isOpen?this._focusedIndex>=0&&this._selectLanguage(this._languages[this._focusedIndex].code):this._toggleDropdown();break;case"ArrowDown":o.preventDefault(),this._isOpen?this._focusedIndex=Math.min(this._focusedIndex+1,this._languages.length-1):this._toggleDropdown();break;case"ArrowUp":o.preventDefault(),this._isOpen&&(this._focusedIndex=Math.max(this._focusedIndex-1,0));break;case"Escape":o.preventDefault(),this._closeDropdown();break;case"Tab":this._closeDropdown();break}}_handleOptionClick(o){this._selectLanguage(o),this._focusButton()}_focusButton(){var t;const o=(t=this.shadowRoot)==null?void 0:t.querySelector(".selector-button");o==null||o.focus()}_getCurrentLanguage(){return this._languages.find(o=>o.code===this.currentLanguage)||this._languages[0]}render(){const o=this._getCurrentLanguage();return g`
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
            <span class="flag">${o.flag}</span>
            <span class="language-name">${o.name}</span>
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
    `}};$.styles=O`
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
  `;U([h({type:String,attribute:"default-language"})],$.prototype,"defaultLanguage",2);U([h({type:String,attribute:"current-language"})],$.prototype,"currentLanguage",2);U([h({type:Boolean,reflect:!0})],$.prototype,"disabled",2);U([X()],$.prototype,"_isOpen",2);U([X()],$.prototype,"_focusedIndex",2);$=U([D("astro-language-selector")],$);var ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,I=(o,t,e,r)=>{for(var s=r>1?void 0:r?ae(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&ie(t,e,s),s};let x=class extends f{constructor(){super(...arguments),this.defaultTheme="light",this.disabled=!1,this.size="md",this._currentTheme="light",this._isAnimating=!1,this._storageKey="astro-club-theme"}connectedCallback(){super.connectedCallback(),this._loadThemeFromStorage(),this._applyTheme()}_loadThemeFromStorage(){try{const o=localStorage.getItem(this._storageKey);if(o&&(o==="light"||o==="dark"))this._currentTheme=o;else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;this._currentTheme=t?"dark":this.defaultTheme}}catch(o){console.warn("Failed to load theme from localStorage:",o),this._currentTheme=this.defaultTheme}}_saveThemeToStorage(){try{localStorage.setItem(this._storageKey,this._currentTheme)}catch(o){console.warn("Failed to save theme to localStorage:",o)}}_applyTheme(){document.documentElement.setAttribute("data-theme",this._currentTheme),document.documentElement.classList.toggle("dark-theme",this._currentTheme==="dark"),this.classList.toggle("dark-theme",this._currentTheme==="dark"),this.dispatchEvent(new CustomEvent("theme-change",{detail:{theme:this._currentTheme,isDark:this._currentTheme==="dark"},bubbles:!0,composed:!0}))}_toggleTheme(){this.disabled||this._isAnimating||(this._isAnimating=!0,this._currentTheme=this._currentTheme==="light"?"dark":"light",this._saveThemeToStorage(),this._applyTheme(),setTimeout(()=>{this._isAnimating=!1},600))}_handleKeyDown(o){this.disabled||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._toggleTheme())}_handleClick(){this._toggleTheme()}render(){const o=this._currentTheme==="dark",t=o?"Switch to light mode":"Switch to dark mode";return g`
      <div class="theme-toggle">
        <div class="toggle-wrapper">
          <button
            class="toggle-switch ${o?"dark":"light"} ${this._isAnimating?"animating":""} ${this.disabled?"disabled":""}"
            @click=${this._handleClick}
            @keydown=${this._handleKeyDown}
            ?disabled=${this.disabled}
            aria-label=${t}
            aria-pressed=${o}
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
              <svg class="icon ${o?"hidden":""}" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg class="icon ${o?"":"hidden"}" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <span class="sr-only">${t}</span>
          </button>
        </div>
      </div>
    `}};x.styles=O`
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
      margin-top: var(--astro-spacing-xs);
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
      display: none;
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
  `;I([h({type:String,attribute:"default-theme"})],x.prototype,"defaultTheme",2);I([h({type:Boolean,reflect:!0})],x.prototype,"disabled",2);I([h({type:String})],x.prototype,"size",2);I([X()],x.prototype,"_currentTheme",2);I([X()],x.prototype,"_isAnimating",2);x=I([D("astro-theme-toggle")],x);var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,tt=(o,t,e,r)=>{for(var s=r>1?void 0:r?le(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&ne(t,e,s),s};let z=class extends f{constructor(){super(...arguments),this.open=!1,this.currentPath="",this.currentLanguage="de",this._justToggled=!1}render(){const o=this.open?"nav__menu nav__menu--open":"nav__menu",t=this.currentLanguage==="de",e=t?"":"/en";return g`
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

            <ul class=${o} id="main-menu" @click=${this._handleMenuClick}>
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
    `}_handleLanguageChange(o){const{newLanguage:t}=o.detail;this.currentLanguage=t;const e=window.location.pathname;let r="";t==="de"?e.startsWith("/en/")?r=e.replace("/en/","/"):e.startsWith("/de/")?r=e.replace("/de/","/"):r=e:e.startsWith("/en/")?r=e:e.startsWith("/de/")?r=e.replace("/de/","/en/"):r="/en"+e,r&&r!==e&&this._navigateWithTransition(r),this.dispatchEvent(new CustomEvent("astro-nav-language-change",{detail:{language:t,oldPath:e,newPath:r},bubbles:!0,composed:!0}))}_handleThemeChange(o){this.dispatchEvent(new CustomEvent("astro-nav-theme-change",{detail:o.detail,bubbles:!0,composed:!0}))}_toggleMenu(o){o.stopPropagation(),this._justToggled=!0,this.open=!this.open,this.requestUpdate(),setTimeout(()=>{this._justToggled=!1},10),this.dispatchEvent(new CustomEvent("astro-nav-toggle",{detail:{open:this.open},bubbles:!0}))}_handleMenuClick(o){const t=o.target;if(t.tagName==="A"){const r=t.getAttribute("href");r&&!r.startsWith("http")&&!r.startsWith("#")&&(o.preventDefault(),this._navigateWithTransition(r)),this.open=!1}}async _navigateWithTransition(o){try{await Q(o,{direction:"right"})}catch(t){console.warn("Navigation transition failed, using fallback:",t),window.location.href=o}}_isActive(o){const t=this.currentPath||window.location.pathname;if(o==="/")return t==="/"||t==="/index.html"||t==="/en/"||t==="/en/index.html";const e=o.includes(".html")?o:`${o}.html`;return t===o||t===e||t===`/en${o}`||t===`/en${e}`?!0:t.startsWith(o+"/")||t.startsWith(`/en${o}/`)}connectedCallback(){super.connectedCallback(),window.location.pathname.startsWith("/en/")?this.currentLanguage="en":this.currentLanguage="de",document.addEventListener("click",this._handleDocumentClick.bind(this)),document.addEventListener("keydown",this._handleKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick.bind(this)),document.removeEventListener("keydown",this._handleKeyDown.bind(this))}_handleDocumentClick(o){if(this._justToggled)return;const t=o.target;!this.contains(t)&&this.open&&(this.open=!1,this.requestUpdate())}_handleKeyDown(o){o.key==="Escape"&&this.open&&(this.open=!1)}};z.styles=O`
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
      z-index: 1000;
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
      /* color: var(--astro-primary-color); */
      text-decoration: underline;
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
  `;tt([h({type:Boolean,reflect:!0})],z.prototype,"open",2);tt([h({type:String,attribute:"current-path"})],z.prototype,"currentPath",2);tt([h({type:String,attribute:"current-language"})],z.prototype,"currentLanguage",2);z=tt([D("astro-navigation")],z);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,ct=(o,t,e,r)=>{for(var s=r>1?void 0:r?de(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&ce(t,e,s),s};let V=class extends f{constructor(){super(...arguments),this.pageTitle="",this.currentPath=""}render(){return g`
      <div class="layout">
        <astro-navigation .currentPath=${this.currentPath}></astro-navigation>
        
        <main class="layout__main main-content" role="main">
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
    `}updated(o){super.updated(o),o.has("pageTitle")&&this.pageTitle&&(document.title=`${this.pageTitle} | Olli's Astro Club`)}};V.styles=O`
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
      position: relative;
      z-index: 1;
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
  `;ct([h({type:String})],V.prototype,"pageTitle",2);ct([h({type:String})],V.prototype,"currentPath",2);V=ct([D("astro-layout")],V);console.log("🌟 Olli's Astro Club components loaded successfully!");Zt();document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.body.classList.add("loaded")},100)});
