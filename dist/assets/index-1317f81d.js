(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,st=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),dt=new WeakMap;let $t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&dt.set(e,t))}return t}toString(){return this.cssText}};const Ct=o=>new $t(typeof o=="string"?o:o+"",void 0,at),z=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new $t(e,o,at)},St=(o,t)=>{if(st)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=F.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},ht=st?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ct(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tt,defineProperty:Pt,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:zt,getOwnPropertySymbols:Ot,getPrototypeOf:Dt}=Object,b=globalThis,ut=b.trustedTypes,Mt=ut?ut.emptyScript:"",et=b.reactiveElementPolyfillSupport,I=(o,t)=>o,G={toAttribute(o,t){switch(t){case Boolean:o=o?Mt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nt=(o,t)=>!Tt(o,t),pt={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Pt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=Lt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const l=r==null?void 0:r.call(this);s==null||s.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,i=[...zt(e),...Ot(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(ht(r))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:G).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var s,a;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:G;this._$Em=r;const d=n.fromAttribute(e,l.type);this[r]=d??((a=this._$Ej)==null?void 0:a.get(r))??d,this._$Em=null}}requestUpdate(t,e,i){var r;if(t!==void 0){const s=this.constructor,a=this[t];if(i??(i=s.getPropertyOptions(t)),!((i.hasChanged??nt)(a,e)||i.useDefault&&i.reflect&&a===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r){const{wrapped:l}=a,n=this[s];l!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[I("elementProperties")]=new Map,S[I("finalized")]=new Map,et==null||et({ReactiveElement:S}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,J=j.trustedTypes,gt=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,xt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+_,Ut=`<${At}>`,C=document,R=()=>C.createComment(""),B=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,Ht=o=>lt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,A=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,_t=/"/g,kt=/^(?:script|style|textarea|title)$/i,Nt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=Nt(1),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,k=C.createTreeWalker(C,129);function Et(o,t){if(!lt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}const It=(o,t)=>{const e=o.length-1,i=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=N;for(let l=0;l<e;l++){const n=o[l];let d,h,c=-1,g=0;for(;g<n.length&&(a.lastIndex=g,h=a.exec(n),h!==null);)g=a.lastIndex,a===N?h[1]==="!--"?a=ft:h[1]!==void 0?a=mt:h[2]!==void 0?(kt.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=A):h[3]!==void 0&&(a=A):a===A?h[0]===">"?(a=r??N,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?A:h[3]==='"'?_t:vt):a===_t||a===vt?a=A:a===ft||a===mt?a=N:(a=A,r=void 0);const m=a===A&&o[l+1].startsWith("/>")?" ":"";s+=a===N?n+Ut:c>=0?(i.push(d),n.slice(0,c)+xt+n.slice(c)+_+m):n+_+(c===-2?l:m)}return[Et(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class W{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,a=0;const l=t.length-1,n=this.parts,[d,h]=It(t,e);if(this.el=W.createElement(d,i),k.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=k.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(xt)){const g=h[a++],m=r.getAttribute(c).split(_),q=/([.?@])?(.*)/.exec(g);n.push({type:1,index:s,name:q[2],strings:m,ctor:q[1]==="."?Rt:q[1]==="?"?Bt:q[1]==="@"?Wt:Z}),r.removeAttribute(c)}else c.startsWith(_)&&(n.push({type:6,index:s}),r.removeAttribute(c));if(kt.test(r.tagName)){const c=r.textContent.split(_),g=c.length-1;if(g>0){r.textContent=J?J.emptyScript:"";for(let m=0;m<g;m++)r.append(c[m],R()),k.nextNode(),n.push({type:2,index:++s});r.append(c[g],R())}}}else if(r.nodeType===8)if(r.data===At)n.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)n.push({type:7,index:s}),c+=_.length-1}s++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function P(o,t,e=o,i){var a,l;if(t===T)return t;let r=i!==void 0?(a=e._$Co)==null?void 0:a[i]:e._$Cl;const s=B(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=P(o,r._$AS(o,t.values),r,i)),t}class jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??C).importNode(e,!0);k.currentNode=r;let s=k.nextNode(),a=0,l=0,n=i[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new K(s,s.nextSibling,this,t):n.type===1?d=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(d=new Vt(s,this,t)),this._$AV.push(d),n=i[++l]}a!==(n==null?void 0:n.index)&&(s=k.nextNode(),a++)}return k.currentNode=C,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),B(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Et(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const a=new jt(r,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new W(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new K(this.O(R()),this.O(R()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,r){const s=this.strings;let a=!1;if(s===void 0)t=P(this,t,e,0),a=!B(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const l=t;let n,d;for(t=s[0],n=0;n<s.length-1;n++)d=P(this,l[i+n],e,n),d===T&&(d=this._$AH[n]),a||(a=!B(d)||d!==this._$AH[n]),d===p?t=p:t!==p&&(t+=(d??"")+s[n+1]),this._$AH[n]=d}a&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Bt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Wt extends Z{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??p)===T)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const it=j.litHtmlPolyfillSupport;it==null||it(W,K),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.1");const Kt=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new K(t.insertBefore(R(),s),s,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class v extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}}var wt;v._$litElement$=!0,v.finalized=!0,(wt=E.litElementHydrateSupport)==null||wt.call(E,{LitElement:v});const rt=E.litElementPolyfillSupport;rt==null||rt({LitElement:v});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:nt},Ft=(o=qt,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),i==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,o)},init(l){return l!==void 0&&this.C(a,void 0,o,l),l}}}if(i==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,o)}}throw Error("Unsupported decorator location: "+i)};function u(o){return(t,e)=>typeof e=="object"?Ft(o,t,e):((i,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(r,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(o){return u({...o,state:!0,attribute:!1})}const yt=new Map,Yt=5*60*1e3;function Y(){const o="startViewTransition"in document,t=window.matchMedia("(min-width: 768px)").matches;return o&&t}async function Q(o,t={}){const{direction:e="right"}=t,i=window.location.pathname,r=new URL(o,window.location.origin).pathname;if(i===r){console.log(`🚫 Already on page: ${r}, skipping navigation`);return}if(!Y()){console.log("🔄 View Transition API not supported or mobile device, using regular navigation"),window.location.href=o;return}console.log(`🎬 Starting view transition to: ${o} (direction: ${e})`),document.body.classList.add("view-transition-loading");const s=document.startViewTransition(async()=>{await Gt(o)});try{await s.ready,document.documentElement.classList.add(`transition-${e}`),console.log(`✨ View transition ready, applied class: transition-${e}`),s.finished.finally(()=>{document.documentElement.classList.remove(`transition-${e}`),document.body.classList.remove("view-transition-loading"),console.log("🎯 View transition completed and cleaned up")})}catch(a){console.warn("View transition failed:",a),document.body.classList.remove("view-transition-loading"),window.location.href=o}}async function Gt(o){try{const t=yt.get(o),e=Date.now();let i,r;if(t&&e-t.timestamp<Yt)console.log(`📄 Using cached version of: ${o}`),i=t.html,r=t.title;else{console.log(`🌐 Fetching fresh content for: ${o}`);const d=await fetch(o);if(!d.ok)throw new Error(`Failed to load page: ${d.status}`);i=await d.text(),r=new DOMParser().parseFromString(i,"text/html").title,yt.set(o,{html:i,title:r,timestamp:e})}const a=new DOMParser().parseFromString(i,"text/html");document.title=r,Qt(a);const l=document.body,n=a.body;if(n){Array.from(n.attributes).forEach(c=>{l.setAttribute(c.name,c.value)});const d=l.querySelector("astro-layout"),h=n.querySelector("astro-layout");if(d&&h){const c=d.querySelector(".page-content"),g=h.querySelector(".page-content");if(c&&g){console.log("View Transition: Updating main content from",c.innerHTML.length,"to",g.innerHTML.length,"characters"),c.innerHTML=g.innerHTML;const m=h.getAttribute("page-title");m&&(d.setAttribute("page-title",m),console.log("View Transition: Updated page title to",m))}else console.warn("View Transition: Could not find .page-content elements",{currentMain:c,newMain:g}),d.innerHTML=h.innerHTML}else console.warn("View Transition: Could not find astro-layout elements",{currentLayout:d,newLayout:h}),l.innerHTML=n.innerHTML;await Zt()}window.history.pushState({},"",o),console.log("View Transition: URL updated to",o,"actual pathname is now",window.location.pathname),setTimeout(()=>{Jt(o)},5)}catch(t){throw console.error("Error loading page:",t),t}}function Jt(o){const t=document.querySelector("astro-navigation");if(t){const e=new URL(o,window.location.origin).pathname;console.log("View Transition: dispatching transition-complete event for",e),t.dispatchEvent(new CustomEvent("transition-complete",{detail:{pathname:e}}))}}function Qt(o){["description","keywords","og:title","og:description","og:url","twitter:title","twitter:description"].forEach(e=>{const i=document.querySelector(`meta[name="${e}"], meta[property="${e}"]`),r=o.querySelector(`meta[name="${e}"], meta[property="${e}"]`);if(i&&r){const s=r.getAttribute("content");s&&i.setAttribute("content",s)}})}async function Zt(){await Promise.all([customElements.whenDefined("astro-layout"),customElements.whenDefined("astro-navigation"),customElements.whenDefined("astro-button"),customElements.whenDefined("astro-card")]);const o=new CustomEvent("page-loaded",{bubbles:!0,detail:{timestamp:Date.now()}});document.dispatchEvent(o)}function Xt(){console.log("🚀 Setting up View Transitions"),console.log(`📱 View Transition API supported: ${Y()}`),window.matchMedia("(min-width: 768px)").addListener(()=>{console.log(`📱 Viewport changed, View Transitions ${Y()?"enabled":"disabled"}`)}),window.addEventListener("popstate",()=>{Y()&&Q(window.location.href,{direction:"left"})}),document.addEventListener("click",t=>{const i=t.target.closest("a[href]");if(!i)return;const r=i.getAttribute("href");r&&(r.startsWith("http")||r.startsWith("mailto:")||r.startsWith("tel:")||r.startsWith("#")||i.target==="_blank"||i.hasAttribute("download")||i.hasAttribute("data-no-transition")||(t.preventDefault(),Q(r,{direction:"right"})))})}var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,D=(o,t,e,i)=>{for(var r=i>1?void 0:i?ee(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&te(t,e,r),r};let y=class extends v{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.type="button",this.href=""}render(){const o=["button",`button--${this.variant}`,`button--${this.size}`].join(" ");return this.href&&!this.disabled?f`
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
      `:f`
      <button
        type=${this.type}
        class=${o}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `}_handleClick(o){if(this.disabled){o.preventDefault(),o.stopPropagation();return}if(this.href&&!this.href.startsWith("http")&&!this.href.startsWith("#")){o.preventDefault(),console.log("Button: starting transition to",this.href),this._navigateWithTransition(this.href);return}this.dispatchEvent(new CustomEvent("astro-click",{detail:{variant:this.variant,size:this.size},bubbles:!0}))}async _navigateWithTransition(o){try{await Q(o,{direction:"right"})}catch(t){console.warn("Button navigation transition failed, using fallback:",t),window.location.href=o}}_handleKeyDown(o){this.href&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),!this.href.startsWith("http")&&!this.href.startsWith("#")?(console.log("Button keyboard: starting transition to",this.href),this._navigateWithTransition(this.href)):window.location.href=this.href)}};y.styles=z`
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
  `;D([u({type:String})],y.prototype,"variant",2);D([u({type:String})],y.prototype,"size",2);D([u({type:Boolean,reflect:!0})],y.prototype,"disabled",2);D([u({type:String})],y.prototype,"type",2);D([u({type:String})],y.prototype,"href",2);y=D([O("astro-button")],y);var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,M=(o,t,e,i)=>{for(var r=i>1?void 0:i?ie(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&oe(t,e,r),r};let w=class extends v{constructor(){super(...arguments),this.title="",this.subtitle="",this.variant="default",this.interactive=!1,this.href=""}render(){const o=["card",`card--${this.variant}`,this.interactive?"card--interactive":""].filter(Boolean).join(" "),t=f`
      <div class=${o} @click=${this._handleClick} @keydown=${this._handleKeyDown} tabindex=${this.interactive?"0":"-1"}>
        <slot name="image"></slot>
        
        ${this.title||this.subtitle?f`
          <div class="card__header">
            ${this.title?f`<h3 class="card__title">${this.title}</h3>`:""}
            ${this.subtitle?f`<p class="card__subtitle">${this.subtitle}</p>`:""}
          </div>
        `:""}

        <div class="card__content">
          <slot></slot>
        </div>

        <slot name="actions" class="card__actions"></slot>
      </div>
    `;return this.href&&this.interactive?f`
        <a href=${this.href} style="text-decoration: none; color: inherit;">
          ${t}
        </a>
      `:t}_handleClick(o){this.interactive&&this.dispatchEvent(new CustomEvent("astro-card-click",{detail:{title:this.title,variant:this.variant},bubbles:!0}))}_handleKeyDown(o){this.interactive&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._handleClick(o))}};w.styles=z`
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
  `;M([u({type:String})],w.prototype,"title",2);M([u({type:String})],w.prototype,"subtitle",2);M([u({type:String})],w.prototype,"variant",2);M([u({type:Boolean,reflect:!0})],w.prototype,"interactive",2);M([u({type:String})],w.prototype,"href",2);w=M([O("astro-card")],w);var re=Object.defineProperty,se=Object.getOwnPropertyDescriptor,U=(o,t,e,i)=>{for(var r=i>1?void 0:i?se(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&re(t,e,r),r};let $=class extends v{constructor(){super(...arguments),this.defaultLanguage="de",this.currentLanguage="de",this.disabled=!1,this._isOpen=!1,this._focusedIndex=-1,this._languages=[{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇺🇸"}],this._handleDocumentClick=o=>{this.contains(o.target)||this._closeDropdown()},this._handleDocumentKeydown=o=>{o.key==="Escape"&&this._isOpen&&(this._closeDropdown(),this._focusButton())}}connectedCallback(){super.connectedCallback(),this.currentLanguage=this._getInitialLanguage(),document.addEventListener("click",this._handleDocumentClick),document.addEventListener("keydown",this._handleDocumentKeydown)}_getInitialLanguage(){const o="preferred-language",t=["de","en"];if(this.currentLanguage&&t.includes(this.currentLanguage))return this.currentLanguage;try{const i=localStorage.getItem(o);if(i&&t.includes(i))return i}catch(i){console.warn("LocalStorage not available:",i)}const e=navigator.languages||[navigator.language];for(const i of e){const r=i.toLowerCase().split("-")[0];if(t.includes(r))return r}return this.defaultLanguage}_saveLanguagePreference(o){const t="preferred-language";try{localStorage.setItem(t,o)}catch(e){console.warn("Could not save language preference:",e)}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick),document.removeEventListener("keydown",this._handleDocumentKeydown)}_handleButtonClick(o){o.preventDefault(),o.stopPropagation(),this._toggleDropdown()}_toggleDropdown(){if(!this.disabled){if(this._isOpen=!this._isOpen,this._focusedIndex=-1,this._isOpen){const o=this._languages.findIndex(t=>t.code===this.currentLanguage);this._focusedIndex=o>=0?o:0}this.requestUpdate()}}_closeDropdown(){this._isOpen=!1,this._focusedIndex=-1}_selectLanguage(o){if(o!==this.currentLanguage){const t=this.currentLanguage;this.currentLanguage=o,this._saveLanguagePreference(o),this.dispatchEvent(new CustomEvent("language-change",{detail:{oldLanguage:t,newLanguage:o,language:this._languages.find(e=>e.code===o)},bubbles:!0,composed:!0})),this._navigateToLanguage(o)}this._closeDropdown()}_navigateToLanguage(o){const t=window.location.pathname,e=this._getCurrentLanguageFromPath();let i;e?i=t.replace(`/${e}/`,`/${o}/`):i=`/${o}/`,"startViewTransition"in document?document.startViewTransition(()=>{window.location.href=i}):window.location.href=i}_getCurrentLanguageFromPath(){var i;const e=(((i=window.location)==null?void 0:i.pathname)||"/").split("/").filter(Boolean)[0];return this._languages.some(r=>r.code===e)?e:null}_handleKeyDown(o){if(!this.disabled)switch(o.key){case"Enter":case" ":o.preventDefault(),this._isOpen?this._focusedIndex>=0&&this._selectLanguage(this._languages[this._focusedIndex].code):this._toggleDropdown();break;case"ArrowDown":o.preventDefault(),this._isOpen?this._focusedIndex=Math.min(this._focusedIndex+1,this._languages.length-1):this._toggleDropdown();break;case"ArrowUp":o.preventDefault(),this._isOpen&&(this._focusedIndex=Math.max(this._focusedIndex-1,0));break;case"Escape":o.preventDefault(),this._closeDropdown();break;case"Tab":this._closeDropdown();break}}_handleOptionClick(o){this._selectLanguage(o),this._focusButton()}_focusButton(){var t;const o=(t=this.shadowRoot)==null?void 0:t.querySelector(".selector-button");o==null||o.focus()}_getCurrentLanguage(){return this._languages.find(o=>o.code===this.currentLanguage)||this._languages[0]}render(){const o=this._getCurrentLanguage();return f`
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
          ${this._languages.map((t,e)=>f`
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
    `}};$.styles=z`
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
      z-index: 99999; /* Much higher than navigation */
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
  `;U([u({type:String,attribute:"default-language"})],$.prototype,"defaultLanguage",2);U([u({type:String,attribute:"current-language"})],$.prototype,"currentLanguage",2);U([u({type:Boolean,reflect:!0})],$.prototype,"disabled",2);U([X()],$.prototype,"_isOpen",2);U([X()],$.prototype,"_focusedIndex",2);$=U([O("astro-language-selector")],$);var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,H=(o,t,e,i)=>{for(var r=i>1?void 0:i?ne(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&ae(t,e,r),r};let x=class extends v{constructor(){super(...arguments),this.defaultTheme="light",this.disabled=!1,this.size="md",this._currentTheme="light",this._isAnimating=!1,this._storageKey="astro-club-theme"}connectedCallback(){super.connectedCallback(),this._loadThemeFromStorage(),this._applyTheme()}_loadThemeFromStorage(){try{const o=localStorage.getItem(this._storageKey);if(o&&(o==="light"||o==="dark"))this._currentTheme=o;else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches;this._currentTheme=t?"dark":this.defaultTheme}}catch(o){console.warn("Failed to load theme from localStorage:",o),this._currentTheme=this.defaultTheme}}_saveThemeToStorage(){try{localStorage.setItem(this._storageKey,this._currentTheme)}catch(o){console.warn("Failed to save theme to localStorage:",o)}}_applyTheme(){document.documentElement.setAttribute("data-theme",this._currentTheme),document.documentElement.classList.toggle("dark-theme",this._currentTheme==="dark"),this.classList.toggle("dark-theme",this._currentTheme==="dark"),this.dispatchEvent(new CustomEvent("theme-change",{detail:{theme:this._currentTheme,isDark:this._currentTheme==="dark"},bubbles:!0,composed:!0}))}_toggleTheme(){this.disabled||this._isAnimating||(this._isAnimating=!0,this._currentTheme=this._currentTheme==="light"?"dark":"light",this._saveThemeToStorage(),this._applyTheme(),setTimeout(()=>{this._isAnimating=!1},600))}_handleKeyDown(o){this.disabled||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._toggleTheme())}_handleClick(){this._toggleTheme()}render(){const o=this._currentTheme==="dark",t=o?"Switch to light mode":"Switch to dark mode";return f`
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
    `}};x.styles=z`
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
  `;H([u({type:String,attribute:"default-theme"})],x.prototype,"defaultTheme",2);H([u({type:Boolean,reflect:!0})],x.prototype,"disabled",2);H([u({type:String})],x.prototype,"size",2);H([X()],x.prototype,"_currentTheme",2);H([X()],x.prototype,"_isAnimating",2);x=H([O("astro-theme-toggle")],x);var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,tt=(o,t,e,i)=>{for(var r=i>1?void 0:i?ce(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&le(t,e,r),r};let L=class extends v{constructor(){super(...arguments),this.open=!1,this.currentPath="",this.currentLanguage="de",this._justToggled=!1}render(){const o=this.open?"nav__menu nav__menu--open":"nav__menu",t=this.currentLanguage==="de",e=t?"":"/en";return f`
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
    `}_handleLanguageChange(o){const{newLanguage:t}=o.detail;this.currentLanguage=t;const e=window.location.pathname;let i="";t==="de"?e.startsWith("/en/")?i=e.replace("/en/","/"):e.startsWith("/de/")?i=e.replace("/de/","/"):i=e:e.startsWith("/en/")?i=e:e.startsWith("/de/")?i=e.replace("/de/","/en/"):i="/en"+e,i&&i!==e&&(window.location.href=i),this.dispatchEvent(new CustomEvent("astro-nav-language-change",{detail:{language:t,oldPath:e,newPath:i},bubbles:!0,composed:!0}))}_handleThemeChange(o){this.dispatchEvent(new CustomEvent("astro-nav-theme-change",{detail:o.detail,bubbles:!0,composed:!0}))}_toggleMenu(o){o.stopPropagation(),this._justToggled=!0,this.open=!this.open,this.requestUpdate(),setTimeout(()=>{this._justToggled=!1},10),this.dispatchEvent(new CustomEvent("astro-nav-toggle",{detail:{open:this.open},bubbles:!0}))}_handleMenuClick(o){const t=o.target;if(t.tagName==="A"){const i=t.getAttribute("href");i&&!i.startsWith("http")&&!i.startsWith("#")&&(o.preventDefault(),o.stopPropagation(),console.log("Navigation: starting transition to",i),this.currentPath=new URL(i,window.location.origin).pathname,console.log("Navigation: immediately set currentPath to",this.currentPath),this.requestUpdate(),this._navigateWithTransition(i)),this.open=!1}}async _navigateWithTransition(o){try{await Q(o,{direction:"right"})}catch(t){console.warn("Navigation transition failed, using fallback:",t),window.location.href=o}}_isActive(o){const t=this.currentPath||window.location.pathname;if(console.log("Navigation: checking if",o,"is active against currentPage:",t,"(this.currentPath =",this.currentPath,")"),o==="/"){const r=t==="/"||t==="/index.html"||t==="/en/"||t==="/en/index.html";return console.log("Navigation: root path check result:",r),r}const e=o.includes(".html")?o:`${o}.html`,i=o.replace(".html","");return t===o||t===e||t===i?(console.log("Navigation: exact match found for",o),!0):t===`/en${o}`||t===`/en${e}`||t===`/en${i}`?(console.log("Navigation: English path match found for",o),!0):t.startsWith(o+"/")||t.startsWith(`/en${o}/`)}connectedCallback(){super.connectedCallback();const o=window.location.pathname;this.currentPath||(this.currentPath=o),o.startsWith("/en/")?this.currentLanguage="en":this.currentLanguage="de",document.addEventListener("click",this._handleDocumentClick.bind(this)),document.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("transition-complete",t=>{console.log("Navigation: received transition-complete event",t.detail)})}updated(o){super.updated(o),o.has("currentPath")&&(console.log("Navigation: currentPath property changed from",o.get("currentPath"),"to",this.currentPath),console.log("Navigation: component will re-render with new currentPath"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick.bind(this)),document.removeEventListener("keydown",this._handleKeyDown.bind(this))}_handleDocumentClick(o){if(this._justToggled)return;const t=o.target;!this.contains(t)&&this.open&&(this.open=!1,this.requestUpdate())}_handleKeyDown(o){o.key==="Escape"&&this.open&&(this.open=!1)}};L.styles=z`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 9999;
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
      transform: none !important; /* Prevent any transforms during view transitions */
      will-change: auto; /* Prevent GPU layering issues */
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
      position: relative;
      z-index: 9999;
      box-shadow: var(--astro-shadow-sm);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
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
        z-index: 99999; /* Same as language selector */
        overflow-x: hidden; /* Prevent horizontal overflow */
      }

      :host .nav__menu--open {
        display: flex !important;
      }

      .nav__toggle {
        display: block;
      }

      .nav__item {
        width: 100%;
        box-sizing: border-box;
      }

      .nav__link {
        width: 100%;
        max-width: 100%;
        text-align: center;
        padding: var(--astro-spacing-md);
        border-radius: var(--astro-border-radius-md);
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    /* Focus management */
    .nav__link:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }
  `;tt([u({type:Boolean,reflect:!0})],L.prototype,"open",2);tt([u({type:String,attribute:"current-path"})],L.prototype,"currentPath",2);tt([u({type:String,attribute:"current-language"})],L.prototype,"currentLanguage",2);L=tt([O("astro-navigation")],L);var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ct=(o,t,e,i)=>{for(var r=i>1?void 0:i?he(t,e):t,s=o.length-1,a;s>=0;s--)(a=o[s])&&(r=(i?a(t,e,r):a(r))||r);return i&&r&&de(t,e,r),r};let V=class extends v{constructor(){super(...arguments),this.pageTitle="",this.currentPath=""}render(){return f`
      <div class="layout">
        <astro-navigation .currentPath=${this.currentPath}></astro-navigation>
        
        <main class="layout__main page-content" role="main">
          <div class="layout__content">
            ${this.pageTitle?f`<h1 class="page-title">${this.pageTitle}</h1>`:""}
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
    `}updated(o){super.updated(o),o.has("pageTitle")&&this.pageTitle&&(document.title=`${this.pageTitle} | Olli's Astro Club`)}};V.styles=z`
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
  `;ct([u({type:String})],V.prototype,"pageTitle",2);ct([u({type:String})],V.prototype,"currentPath",2);V=ct([O("astro-layout")],V);console.log("🌟 Olli's Astro Club components loaded successfully!");Xt();document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.body.classList.add("loaded")},100)});
