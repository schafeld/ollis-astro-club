(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),st=new WeakMap;let vt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=st.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&st.set(e,t))}return t}toString(){return this.cssText}};const bt=i=>new vt(typeof i=="string"?i:i+"",void 0,Q),W=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new vt(e,i,Q)},yt=(i,t)=>{if(Z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=B.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},it=Z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return bt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:At,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:kt,getPrototypeOf:Et}=Object,m=globalThis,ot=m.trustedTypes,Ct=ot?ot.emptyScript:"",Y=m.reactiveElementPolyfillSupport,z=(i,t)=>i,I={toAttribute(i,t){switch(t){case Boolean:i=i?Ct:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},X=(i,t)=>!$t(i,t),at={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&At(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=xt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){const l=r==null?void 0:r.call(this);o==null||o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,s=[...wt(e),...kt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(it(r))}else t!==void 0&&e.push(it(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const a=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var o,a;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const l=s.getPropertyOptions(r),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:I;this._$Em=r;const h=n.fromAttribute(e,l.type);this[r]=h??((a=this._$Ej)==null?void 0:a.get(r))??h,this._$Em=null}}requestUpdate(t,e,s){var r;if(t!==void 0){const o=this.constructor,a=this[t];if(s??(s=o.getPropertyOptions(t)),!((s.hasChanged??X)(a,e)||s.useDefault&&s.reflect&&a===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:l}=a,n=this[o];l!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,a,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[z("elementProperties")]=new Map,E[z("finalized")]=new Map,Y==null||Y({ReactiveElement:E}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,K=U.trustedTypes,nt=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,gt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+f,St=`<${_t}>`,k=document,M=()=>k.createComment(""),D=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,Pt=i=>tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",F=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ct=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,dt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ot=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),v=Ot(1),C=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),pt=new WeakMap,x=k.createTreeWalker(k,129);function mt(i,t){if(!tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}const Tt=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",a=T;for(let l=0;l<e;l++){const n=i[l];let h,p,c=-1,g=0;for(;g<n.length&&(a.lastIndex=g,p=a.exec(n),p!==null);)g=a.lastIndex,a===T?p[1]==="!--"?a=lt:p[1]!==void 0?a=ct:p[2]!==void 0?(ft.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=A):p[3]!==void 0&&(a=A):a===A?p[0]===">"?(a=r??T,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?A:p[3]==='"'?dt:ht):a===dt||a===ht?a=A:a===lt||a===ct?a=T:(a=A,r=void 0);const _=a===A&&i[l+1].startsWith("/>")?" ":"";o+=a===T?n+St:c>=0?(s.push(h),n.slice(0,c)+gt+n.slice(c)+f+_):n+f+(c===-2?l:_)}return[mt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,a=0;const l=t.length-1,n=this.parts,[h,p]=Tt(t,e);if(this.el=H.createElement(h,s),x.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=x.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(gt)){const g=p[a++],_=r.getAttribute(c).split(f),R=/([.?@])?(.*)/.exec(g);n.push({type:1,index:o,name:R[2],strings:_,ctor:R[1]==="."?Ut:R[1]==="?"?Mt:R[1]==="@"?Dt:q}),r.removeAttribute(c)}else c.startsWith(f)&&(n.push({type:6,index:o}),r.removeAttribute(c));if(ft.test(r.tagName)){const c=r.textContent.split(f),g=c.length-1;if(g>0){r.textContent=K?K.emptyScript:"";for(let _=0;_<g;_++)r.append(c[_],M()),x.nextNode(),n.push({type:2,index:++o});r.append(c[g],M())}}}else if(r.nodeType===8)if(r.data===_t)n.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(f,c+1))!==-1;)n.push({type:7,index:o}),c+=f.length-1}o++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function S(i,t,e=i,s){var a,l;if(t===C)return t;let r=s!==void 0?(a=e._$Co)==null?void 0:a[s]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=S(i,r._$AS(i,t.values),r,s)),t}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??k).importNode(e,!0);x.currentNode=r;let o=x.nextNode(),a=0,l=0,n=s[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new j(o,o.nextSibling,this,t):n.type===1?h=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(h=new Ht(o,this,t)),this._$AV.push(h),n=s[++l]}a!==(n==null?void 0:n.index)&&(o=x.nextNode(),a++)}return x.currentNode=k,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class j{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),D(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(mt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const a=new zt(r,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new H(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new j(this.O(M()),this.O(M()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,r){const o=this.strings;let a=!1;if(o===void 0)t=S(this,t,e,0),a=!D(t)||t!==this._$AH&&t!==C,a&&(this._$AH=t);else{const l=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,l[s+n],e,n),h===C&&(h=this._$AH[n]),a||(a=!D(h)||h!==this._$AH[n]),h===d?t=d:t!==d&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}a&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Dt extends q{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??d)===C)return;const s=this._$AH,r=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const G=U.litHtmlPolyfillSupport;G==null||G(H,j),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");const Nt=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new j(t.insertBefore(M(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;class b extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}}var ut;b._$litElement$=!0,b.finalized=!0,(ut=w.litElementHydrateSupport)==null||ut.call(w,{LitElement:b});const J=w.litElementPolyfillSupport;J==null||J({LitElement:b});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:X},jt=(i=Lt,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,i)},init(l){return l!==void 0&&this.C(a,void 0,i,l),l}}}if(s==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,i)}}throw Error("Unsupported decorator location: "+s)};function u(i){return(t,e)=>typeof e=="object"?jt(i,t,e):((s,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}var Rt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,P=(i,t,e,s)=>{for(var r=s>1?void 0:s?Bt(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&Rt(t,e,r),r};let y=class extends b{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.type="button",this.href=""}render(){const i=["button",`button--${this.variant}`,`button--${this.size}`].join(" ");return this.href&&!this.disabled?v`
        <a
          href=${this.href}
          class=${i}
          role="button"
          tabindex="0"
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <slot name="icon"></slot>
          <slot></slot>
        </a>
      `:v`
      <button
        type=${this.type}
        class=${i}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `}_handleClick(i){if(this.disabled){i.preventDefault(),i.stopPropagation();return}this.dispatchEvent(new CustomEvent("astro-click",{detail:{variant:this.variant,size:this.size},bubbles:!0}))}_handleKeyDown(i){this.href&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._handleClick(i))}};y.styles=W`
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
  `;P([u({type:String})],y.prototype,"variant",2);P([u({type:String})],y.prototype,"size",2);P([u({type:Boolean,reflect:!0})],y.prototype,"disabled",2);P([u({type:String})],y.prototype,"type",2);P([u({type:String})],y.prototype,"href",2);y=P([V("astro-button")],y);var It=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,O=(i,t,e,s)=>{for(var r=s>1?void 0:s?Kt(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&It(t,e,r),r};let $=class extends b{constructor(){super(...arguments),this.title="",this.subtitle="",this.variant="default",this.interactive=!1,this.href=""}render(){const i=["card",`card--${this.variant}`,this.interactive?"card--interactive":""].filter(Boolean).join(" "),t=v`
      <div class=${i} @click=${this._handleClick} @keydown=${this._handleKeyDown} tabindex=${this.interactive?"0":"-1"}>
        <slot name="image"></slot>
        
        ${this.title||this.subtitle?v`
          <div class="card__header">
            ${this.title?v`<h3 class="card__title">${this.title}</h3>`:""}
            ${this.subtitle?v`<p class="card__subtitle">${this.subtitle}</p>`:""}
          </div>
        `:""}

        <div class="card__content">
          <slot></slot>
        </div>

        <slot name="actions" class="card__actions"></slot>
      </div>
    `;return this.href&&this.interactive?v`
        <a href=${this.href} style="text-decoration: none; color: inherit;">
          ${t}
        </a>
      `:t}_handleClick(i){this.interactive&&this.dispatchEvent(new CustomEvent("astro-card-click",{detail:{title:this.title,variant:this.variant},bubbles:!0}))}_handleKeyDown(i){this.interactive&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._handleClick(i))}};$.styles=W`
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
  `;O([u({type:String})],$.prototype,"title",2);O([u({type:String})],$.prototype,"subtitle",2);O([u({type:String})],$.prototype,"variant",2);O([u({type:Boolean,reflect:!0})],$.prototype,"interactive",2);O([u({type:String})],$.prototype,"href",2);$=O([V("astro-card")],$);var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,et=(i,t,e,s)=>{for(var r=s>1?void 0:s?qt(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&Wt(t,e,r),r};let N=class extends b{constructor(){super(...arguments),this.open=!1,this.currentPath=""}render(){const i=["nav__menu",this.open?"nav__menu--open":""].filter(Boolean).join(" ");return v`
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav__container">
          <a href="/" class="nav__logo" @click=${this._handleLogoClick}>
            <div class="nav__logo-icon">🌟</div>
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

          <ul class=${i} id="main-menu">
            <li class="nav__item">
              <a href="/" class="nav__link ${this._isActive("/")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="/club" class="nav__link ${this._isActive("/club")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Der Club
              </a>
            </li>
            <li class="nav__item">
              <a href="/meetings" class="nav__link ${this._isActive("/meetings")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Treffen
              </a>
            </li>
            <li class="nav__item">
              <a href="/observations" class="nav__link ${this._isActive("/observations")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Beobachtungen
              </a>
            </li>
            <li class="nav__item">
              <a href="/tutorials" class="nav__link ${this._isActive("/tutorials")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Tutorials
              </a>
            </li>
            <li class="nav__item">
              <a href="/contact" class="nav__link ${this._isActive("/contact")?"nav__link--active":""}" @click=${this._handleLinkClick}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `}_toggleMenu(){this.open=!this.open,this.dispatchEvent(new CustomEvent("astro-nav-toggle",{detail:{open:this.open},bubbles:!0}))}_handleLinkClick(i){this.open=!1;const t=i.target;this.currentPath=t.getAttribute("href")||"",this.dispatchEvent(new CustomEvent("astro-nav-navigate",{detail:{path:this.currentPath},bubbles:!0}))}_handleLogoClick(){this.open=!1,this.currentPath="/"}_isActive(i){return i==="/"?this.currentPath==="/"||this.currentPath==="":this.currentPath.startsWith(i)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClick.bind(this)),document.addEventListener("keydown",this._handleKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick.bind(this)),document.removeEventListener("keydown",this._handleKeyDown.bind(this))}_handleDocumentClick(i){const t=i.target;!this.contains(t)&&this.open&&(this.open=!1)}_handleKeyDown(i){i.key==="Escape"&&this.open&&(this.open=!1)}};N.styles=W`
    :host {
      display: block;
      position: relative;
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

    .nav__logo {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      text-decoration: none;
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-lg);
      font-weight: var(--astro-font-weight-bold);
    }

    .nav__logo:hover {
      color: var(--astro-primary-color);
    }

    .nav__logo-icon {
      width: 32px;
      height: 32px;
      background: var(--astro-primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: var(--astro-font-size-lg);
    }

    /* Desktop Navigation */
    .nav__menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: var(--astro-spacing-lg);
      align-items: center;
    }

    .nav__item {
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
      .nav__menu {
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
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--astro-transition-normal);
      }

      .nav__menu--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
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
  `;et([u({type:Boolean,reflect:!0})],N.prototype,"open",2);et([u({type:String})],N.prototype,"currentPath",2);N=et([V("astro-navigation")],N);var Vt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,rt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Yt(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&Vt(t,e,r),r};let L=class extends b{constructor(){super(...arguments),this.pageTitle="",this.currentPath=""}render(){return v`
      <div class="layout">
        <astro-navigation .currentPath=${this.currentPath}></astro-navigation>
        
        <main class="layout__main" role="main">
          <div class="layout__content">
            ${this.pageTitle?v`<h1 class="page-title">${this.pageTitle}</h1>`:""}
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
    `}updated(i){super.updated(i),i.has("pageTitle")&&this.pageTitle&&(document.title=`${this.pageTitle} | Olli's Astro Club`)}};L.styles=W`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
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
  `;rt([u({type:String})],L.prototype,"pageTitle",2);rt([u({type:String})],L.prototype,"currentPath",2);L=rt([V("astro-layout")],L);console.log("🌟 Olli's Astro Club components loaded successfully!");
