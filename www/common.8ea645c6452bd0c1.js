"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6022:(M,m,l)=>{l.d(m,{c:()=>i});var r=l(9816),u=l(7864),c=l(1898);const i=(n,o)=>{let e,t;const a=(h,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(h,w);E&&o(E)?E!==e&&(v(),d(E,p)):v()},d=(h,w)=>{e=h,t||(t=e);const p=e;(0,r.w)(()=>p.classList.add("ion-activated")),w()},v=(h=!1)=>{if(!e)return;const w=e;(0,r.w)(()=>w.classList.remove("ion-activated")),h&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>a(h.currentX,h.currentY,u.a),onMove:h=>a(h.currentX,h.currentY,u.b),onEnd:()=>{v(!0),(0,u.h)(),t=void 0}})}},2225:(M,m,l)=>{l.d(m,{g:()=>r});const r=(o,e,t,a,d)=>c(o[1],e[1],t[1],a[1],d).map(v=>u(o[0],e[0],t[0],a[0],v)),u=(o,e,t,a,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+a*d))-o*Math.pow(d-1,3),c=(o,e,t,a,d)=>n((a-=d)-3*(t-=d)+3*(e-=d)-(o-=d),3*t-6*e+3*o,3*e-3*o,o).filter(h=>h>=0&&h<=1),n=(o,e,t,a)=>{if(0===o)return((o,e,t)=>{const a=e*e-4*o*t;return a<0?[]:[(-e+Math.sqrt(a))/(2*o),(-e-Math.sqrt(a))/(2*o)]})(e,t,a);const d=(3*(t/=o)-(e/=o)*e)/3,v=(2*e*e*e-9*e*t+27*(a/=o))/27;if(0===d)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-d),-Math.sqrt(-d)];const h=Math.pow(v/2,2)+Math.pow(d/3,3);if(0===h)return[Math.pow(v/2,.5)-e/3];if(h>0)return[Math.pow(-v/2+Math.sqrt(h),1/3)-Math.pow(v/2+Math.sqrt(h),1/3)-e/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(M,m,l)=>{l.d(m,{i:()=>r});const r=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,m,l)=>{l.r(m),l.d(m,{startFocusVisible:()=>i});const r="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let o=[],e=!0;const t=n?n.shadowRoot:document,a=n||document.body,d=y=>{o.forEach(g=>g.classList.remove(r)),y.forEach(g=>g.classList.add(r)),o=y},v=()=>{e=!1,d([])},h=y=>{e=c.includes(y.key),e||d([])},w=y=>{if(e&&void 0!==y.composedPath){const g=y.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));d(g)}},p=()=>{t.activeElement===a&&d([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:d}}},2509:(M,m,l)=>{l.d(m,{c:()=>r});const r=n=>{const o=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const a=void 0!==o.label||u(o),d=o.hasAttribute("aria-label")||o.hasAttribute("aria-labelledby")&&null===o.shadowRoot;e=!0===o.legacy||!a&&!d}return e}}},u=n=>null!==n.shadowRoot&&!!(c.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||i.includes(n.tagName)&&""!==n.textContent),c=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,m,l)=>{l.d(m,{a:()=>i,b:()=>n,c:()=>c,d:()=>e,h:()=>o});const r={getEngine(){var t;const a=window;return a.TapticEngine||(null===(t=a.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var t;const a=window;return!!this.getEngine()&&("web"!==(null===(t=a.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;a.impact({style:d})},notification(t){const a=this.getEngine();if(!a)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;a.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},u=()=>r.available(),c=()=>{u()&&r.selection()},i=()=>{u()&&r.selectionStart()},n=()=>{u()&&r.selectionChanged()},o=()=>{u()&&r.selectionEnd()},e=t=>{u()&&r.impact(t)}},7366:(M,m,l)=>{l.d(m,{a:()=>r,b:()=>w,c:()=>e,d:()=>p,e:()=>x,f:()=>o,g:()=>E,h:()=>c,i:()=>u,j:()=>_,k:()=>C,l:()=>t,m:()=>v,n:()=>y,o:()=>d,p:()=>n,q:()=>i,r:()=>s,s:()=>O,t:()=>h,u:()=>g,v:()=>f,w:()=>a});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8986:(M,m,l)=>{l.d(m,{I:()=>o,a:()=>d,b:()=>n,c:()=>w,d:()=>E,f:()=>v,g:()=>a,i:()=>t,p:()=>p,r:()=>y,s:()=>h});var r=l(5861),u=l(9397),c=l(1178);const n="ion-content",o=".ion-content-scroll-host",e=`${n}, ${o}`,t=g=>"ION-CONTENT"===g.tagName,a=function(){var g=(0,r.Z)(function*(f){return t(f)?(yield new Promise(s=>(0,u.c)(f,s)),f.getScrollElement()):f});return function(s){return g.apply(this,arguments)}}(),d=g=>g.querySelector(o)||g.querySelector(e),v=g=>g.closest(e),h=(g,f)=>t(g)?g.scrollToTop(f):Promise.resolve(g.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),w=(g,f,s,_)=>t(g)?g.scrollByPoint(f,s,_):Promise.resolve(g.scrollBy({top:s,left:f,behavior:_>0?"smooth":"auto"})),p=g=>(0,c.b)(g,n),E=g=>{if(t(g)){const s=g.scrollY;return g.scrollY=!1,s}return g.style.setProperty("overflow","hidden"),!0},y=(g,f)=>{t(g)?g.scrollY=f:g.style.removeProperty("overflow")}},9240:(M,m,l)=>{l.d(m,{g:()=>u});var r=l(1178);const u=(i,n,o)=>{const e=null==i?0:i.toString().length,t=c(e,n);if(void 0===o)return t;try{return o(e,n)}catch(a){return(0,r.a)("Exception in provided `counterFormatter`.",a),t}},c=(i,n)=>`${i} / ${n}`},5234:(M,m,l)=>{l.r(m),l.d(m,{KEYBOARD_DID_CLOSE:()=>u,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>f,keyboardDidClose:()=>p,keyboardDidOpen:()=>h,keyboardDidResize:()=>w,resetKeyboardAssist:()=>e,setKeyboardClose:()=>v,setKeyboardOpen:()=>d,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const r="ionKeyboardDidShow",u="ionKeyboardDidHide";let i={},n={},o=!1;const e=()=>{i={},n={},o=!1},t=s=>{a(s),s.visualViewport&&(n=f(s.visualViewport),s.visualViewport.onresize=()=>{g(s),h()||w(s)?d(s):p(s)&&v(s)})},a=s=>{s.addEventListener("keyboardDidShow",_=>d(s,_)),s.addEventListener("keyboardDidHide",()=>v(s))},d=(s,_)=>{E(s,_),o=!0},v=s=>{y(s),o=!1},h=()=>!o&&i.width===n.width&&(i.height-n.height)*n.scale>150,w=s=>o&&!p(s),p=s=>o&&n.height===s.innerHeight,E=(s,_)=>{const O=new CustomEvent(r,{detail:{keyboardHeight:_?_.keyboardHeight:s.innerHeight-n.height}});s.dispatchEvent(O)},y=s=>{const _=new CustomEvent(u);s.dispatchEvent(_)},g=s=>{i=Object.assign({},n),n=f(s.visualViewport)},f=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},9852:(M,m,l)=>{l.d(m,{c:()=>u});var r=l(3457);const u=c=>{let i,n,o;const e=()=>{i=()=>{o=!0,c&&c(!0)},n=()=>{o=!1,c&&c(!1)},null==r.w||r.w.addEventListener("keyboardWillShow",i),null==r.w||r.w.addEventListener("keyboardWillHide",n)};return e(),{init:e,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",i),null==r.w||r.w.removeEventListener("keyboardWillHide",n),i=n=void 0},isKeyboardVisible:()=>o}}},7741:(M,m,l)=>{l.d(m,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(c,i,n)=>{const o=c*i/n-c+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,i,n)=>{const o=i/n,e=c*o-c+"ms",t=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})}}},7135:(M,m,l)=>{l.r(m),l.d(m,{createSwipeBackGesture:()=>n});var r=l(9397),u=l(5062),c=l(1898);l(4349);const n=(o,e,t,a,d)=>{const v=o.ownerDocument.defaultView;let h=(0,u.i)(o);const p=s=>h?-s.deltaX:s.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(h=(0,u.i)(o),(s=>{const{startX:C}=s;return h?C>=v.innerWidth-50:C<=50})(s)&&e()),onStart:t,onMove:s=>{const C=p(s)/v.innerWidth;a(C)},onEnd:s=>{const _=p(s),C=v.innerWidth,O=_/C,x=(s=>h?-s.velocityX:s.velocityX)(s),L=x>=0&&(x>.2||_>C/2),D=(L?1-O:O)*C;let k=0;if(D>5){const T=D/Math.abs(x);k=Math.min(T,540)}d(L,O<=0?.01:(0,r.l)(0,O,.9999),k)}})}},4762:(M,m,l)=>{l.d(m,{Z:()=>u});var r=l(8256);let u=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-explore-container"]],inputs:{name:"name"},standalone:!0,features:[r.jDz],decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(n,o){1&n&&(r.TgZ(0,"div",0)(1,"strong"),r._uU(2),r.qZA(),r.TgZ(3,"p"),r._uU(4," Explore "),r.TgZ(5,"a",1),r._uU(6,"UI Components"),r.qZA()()()),2&n&&(r.xp6(2),r.Oqu(o.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c})()},1188:(M,m,l)=>{l.d(m,{V:()=>i});var r=l(5861),u=l(8256),c=l(849);let i=(()=>{class n{constructor(e){this.storage=e,this.myGlobalVar=[{}],this.MoneySave=[{}]}setString(e,t){var a=this;return(0,r.Z)(function*(){yield a.storage.set(e,t)})()}getString(e){var t=this;return(0,r.Z)(function*(){return yield t.storage.get(e)})()}setObject(e,t){var a=this;return(0,r.Z)(function*(){yield a.storage.set(e,[t])})()}getObject(e){var t=this;return(0,r.Z)(function*(){const a=yield t.storage.get(e);return JSON.parse(a)})()}removeItem(e){var t=this;return(0,r.Z)(function*(){yield t.storage.remove(e)})()}clear(){var e=this;return(0,r.Z)(function*(){yield e.storage.clear()})()}}return n.\u0275fac=function(e){return new(e||n)(u.LFG(c.K))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);