(()=>{var J=Object.create;var S=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty;var ot=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),nt=(t,e)=>{for(var o in e)S(t,o,{get:e[o],enumerable:!0})},E=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W(e))!et.call(t,i)&&i!==o&&S(t,i,{get:()=>e[i],enumerable:!(s=Q(e,i))||s.enumerable});return t};var m=(t,e,o)=>(o=t!=null?J(tt(t)):{},E(e||!t||!t.__esModule?S(o,"default",{value:t,enumerable:!0}):o,t)),rt=t=>E(S({},"__esModule",{value:!0}),t);var p=ot((De,Y)=>{Y.exports=shelter.solidWeb});var ee={};nt(ee,{onLoad:()=>Wt,onUnload:()=>te,settings:()=>Jt});var{flux:st,patcher:it}=shelter,{stores:lt}=st,{instead:at}=it,{MaskedLinkStore:ct}=lt,x={title:"Always Trust",content:'Remove the "You are leaving Discord" popup.',start:()=>{at("isTrustedDomain",ct,()=>!0,!1)}};var{http:ut}=shelter,{intercept:dt}=ut,C={title:"Anti Track",content:"Stop some tracking, not all.",start:()=>{try{window.__SENTRY__.hub.getClient().getOptions().enabled=!1;for(let t of Object.keys(console))console[t]=console[t].__sentry_original__??console[t]}catch{}dt("post",/^\/science|^\/error-reporting-proxy/,()=>{})}};var R,g;window.webpackChunkdiscord_app.push([[Symbol()],{},t=>{R=t}]);window.webpackChunkdiscord_app.pop();g=R.c;var pt={byProps:(...t)=>e=>t.every(o=>e[o]!==void 0)};function N(t,...e){let o=`webpack.${t} found no module. Filter: ${e}`;return console.error(new Error(o)),{error:o}}function ft(t,{isIndirect:e=!1,isWaitFor:o=!1}={}){if(typeof t!="function")return N("find","Invalid filter function");for(let s in g){let i=g[s];if(!i.loaded||!i?.exports)continue;let a=i.exports;if(t(a))return o?[a,s]:a;if(a.default&&t(a.default)){let r=a.default;return o?[r,s]:r}if(typeof a=="object")for(let r in a){if(r.length>3)continue;let l=a[r];if(l&&t(l))return o?[l,s]:l}}return e?o?[null,null]:null:N("find",t)}function O(...t){let e=ft(pt.byProps(...t),{isIndirect:!0});return!e||e.error?N("findByProps",...t):e}{let s=function(r,...l){let c=`webpack.${r} found no module. Filter: ${l}`;return console.error(new Error(c)),{error:c}},i=function(r,{isIndirect:l=!1,isWaitFor:c=!1}={}){if(typeof r!="function")return s("find","Invalid filter function");for(let T in e){let h=e[T];if(!h.loaded||!h?.exports)continue;let u=h.exports;if(r(u))return c?[u,T]:u;if(u.default&&r(u.default)){let f=u.default;return c?[f,T]:f}if(typeof u=="object")for(let f in u){if(f.length>3)continue;let A=u[f];if(A&&r(A))return c?[A,T]:A}}return l?c?[null,null]:null:s("find",r)},a=function(...r){let l=i(o.byProps(...r),{isIndirect:!0});return!l||l.error?s("findByProps",...r):l},t,e;window.webpackChunkdiscord_app.push([[Symbol()],{},r=>{t=r}]),window.webpackChunkdiscord_app.pop(),e=t.c;let o={byProps:(...r)=>l=>r.every(c=>l[c]!==void 0)}}var{Masks:n}=O("Masks"),w=document.createElement("style");w.id="__eurotilities-moduleStyle_color-sighted";w.textContent='[mask="url(#svg-mask-status-online)"] { width: 10px; height: 10px; x: 22px; y: 22px; }';var k={title:"Color Sighted",content:"Remove the colorblind-friendly icons from statuses.",start:()=>{document.head.appendChild(w),n.STATUS_DND=n.STATUS_ONLINE,n.STATUS_IDLE=n.STATUS_ONLINE,n.STATUS_OFFLINE=n.STATUS_ONLINE,n.STATUS_STREAMING=n.STATUS_ONLINE,n.STATUS_ONLINE_MOBILE=n.STATUS_ONLINE,n.AVATAR_STATUS_MOBILE_16=n.AVATAR_STATUS_ROUND_16,n.AVATAR_STATUS_MOBILE_20=n.AVATAR_STATUS_ROUND_20,n.AVATAR_STATUS_MOBILE_24=n.AVATAR_STATUS_ROUND_24,n.AVATAR_STATUS_MOBILE_32=n.AVATAR_STATUS_ROUND_32,n.AVATAR_STATUS_MOBILE_40=n.AVATAR_STATUS_ROUND_40,n.AVATAR_STATUS_MOBILE_48=n.AVATAR_STATUS_ROUND_48,n.AVATAR_STATUS_MOBILE_56=n.AVATAR_STATUS_ROUND_56,n.AVATAR_STATUS_MOBILE_80=n.AVATAR_STATUS_ROUND_80,n.AVATAR_STATUS_MOBILE_100=n.AVATAR_STATUS_ROUND_100,n.AVATAR_STATUS_MOBILE_120=n.AVATAR_STATUS_ROUND_120}};var{flux:mt,http:_t}=shelter,{dispatcher:Tt}=mt,{patch:D}=_t,I={title:"Mute New Guilds",content:"Auto mute guilds on join.",start:()=>{Tt.subscribe("INVITE_ACCEPT_SUCCESS",({invite:{guild:{id:t}}})=>{D&&D({body:{muted:!0,suppress_everyone:!0,suppress_roles:!0},url:`/users/@me/guilds/${t}/settings`,oldFormErrors:!1})})}};var{flux:At}=shelter,{intercept:St,dispatcher:yt}=At,ht=["EMBEDDED_ACTIVITY_DISCONNECT","VOICE_STATE_UPDATES"],v={title:"No Call Idle",content:"Stay in VC forever.",start:()=>{St(({type:t})=>{if(ht.includes(t)){let e=yt._subscriptions[t]??[];for(let o of e)o.toString().includes("idleTimeout.start")&&e.delete(o)}})}};var L={},M={title:"No Console Spam",content:"Filter the console spam.",start:()=>{for(let t of Object.keys(console))L[t]=console[t],console[t]=(...e)=>{let o=e[0];typeof o=="string"&&(o.includes("%c[")||o.toLowerCase().includes("sentry"))||L[t].apply(console,e)}}};var V=window,B={title:"No Devtools Detection",content:"Prevent annoying devtools detection. (Desktop only)",start:()=>{V.DiscordNative&&V.DiscordNative.window.setDevtoolsCallbacks(()=>{},()=>{})}};var{flux:gt,util:Nt}=shelter,{awaitDispatch:wt}=Nt,{awaitStore:Ut}=gt,bt=async()=>{let t=await Ut("UserStore",!0),{getCurrentUser:e}=t,o=e();return o||(await wt("CONNECTION_OPEN"),o=e()),o},P={title:"No Nitro Upsell",content:"Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",start:async()=>{let t=await bt();t._eurotilities__premiumType=t.premiumType,t.premiumType=2}};var{flux:Et}=shelter,{intercept:xt}=Et,$={title:"No Reply Mention",content:"Disable replies by default.",start:()=>{xt(t=>{t.type==="CREATE_PENDING_REPLY"&&(t.shouldMention=!1)})}};var{http:Ct}=shelter,{intercept:Rt}=Ct,F={title:"No Typing",content:"Stop Discord from sending your typing status.",start:()=>{Rt("post",/.*typing$/,()=>{})}};var j={title:"No Typing Animation",content:"Disable the CPU-intensive typing dots animation.",start:()=>{document.hasFocus=()=>!1}};var{flux:Ot}=shelter,{dispatcher:kt}=Ot,Dt={online:"online",idle:"away",dnd:"away",invisible:"invisible"},It=({settings:t})=>{let e=t.proto.status,o=e.status.value,s=e.showCurrentGame.value,i=Dt[o];return open(s?`steam://friends/status/${i}`:"steam://friends/status/invisible")},G={title:"Steam Status Sync",content:"Sync your Steam Status to your Discord Status.",start:()=>{kt.subscribe("USER_SETTINGS_PROTO_UPDATE",It)}};var{flux:vt}=shelter,{intercept:Lt}=vt,q={title:"Timestamped Files",content:"Rename uploaded files to the current timestamp.",start:()=>{Lt(t=>{if(t?.type==="UPLOAD_ATTACHMENT_ADD_FILES"){for(let{file:e}of t?.files??[]){if(!e?.name)continue;let o=Date.now().toString();e.name.includes(".")&&(o+=e.name.slice(e.name.lastIndexOf("."))),Object.defineProperty(e,"name",{value:o})}return t}})}};var _={alwaysTrust:x,antiTrack:C,colorSighted:k,muteNewGuild:I,noCallIdle:v,noConsoleSpam:M,noDevtoolsDetection:B,noNitroUpsell:P,noReplyMention:$,noTyping:F,noTypingAnimation:j,steamStatusSync:G,timestampedFiles:q};var b=m(p(),1),U=m(p(),1),K=m(p(),1),y=m(p(),1),d=m(p(),1);var Mt=(0,b.template)("<br>",1),Vt=(0,b.template)("<div></div>",2),{plugin:{store:X},ui:{Divider:z,SwitchItem:Bt,openModal:Pt,ModalRoot:$t,ModalSizes:Ft,ModalHeader:jt,ModalBody:Gt,ModalConfirmFooter:qt,Button:Yt,ButtonLooks:zt,ButtonColors:Ht,ButtonSizes:Kt},React:ve}=shelter,Xt=(t,e)=>{X[t]=e},H=t=>t.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,o)=>o===0?e.toLowerCase():e.toUpperCase()).replace(/\s+/g,""),Zt=()=>{let t=Pt(()=>(0,d.createComponent)($t,{get size(){return Ft.SMALL},get children(){return[(0,d.createComponent)(jt,{close:()=>{t()},children:"\u20ACtilities Settings"}),(0,d.createComponent)(Gt,{get children(){return[(0,d.createComponent)(z,{mb:!0}),(0,y.memo)(()=>Object.keys(_).map(e=>{let o=_[e];return(()=>{let s=Vt.cloneNode(!0);return(0,K.setAttribute)(s,"key",e),(0,U.insert)(s,(0,d.createComponent)(Bt,{get value(){return X[H(e)]},onChange:i=>Xt(H(e),i),hideBorder:!0,get children(){return[(0,y.memo)(()=>o.title),Mt.cloneNode(!0),(0,y.memo)(()=>o.content)]}}),null),(0,U.insert)(s,(0,d.createComponent)(z,{mb:!0}),null),s})()}))]}}),(0,d.createComponent)(qt,{close:()=>{t()},cancelText:"Close",confirmText:"Apply",onConfirm:()=>{location.reload()}})]}}))},Jt=()=>(0,d.createComponent)(Yt,{get look(){return zt.FILLED},get color(){return Ht.BRAND},get size(){return Kt.XLARGE},onClick:()=>{document.querySelector('[aria-label="close modal"]')?.click(),document.querySelector('[class^="_mroot_"]')?.classList.add("_active_1dl10_1"),Zt()},style:{width:"100%",height:"100%"},children:"Open Settings"});var{plugin:{store:Z},ui:{showToast:Qt}}=shelter;function Wt(){for(let t of Object.keys(Z))Z[t]&&_[t].start()}function te(){Qt({title:"Restart Required",content:"\u20ACtilities requires a restart to disable.",onClick(){location.reload()},duration:Number.POSITIVE_INFINITY})}return rt(ee);})();
