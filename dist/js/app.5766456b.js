(function(){"use strict";var e={5825:function(e,n,t){var a=t(9242),r=t(3396),u=t(7139);const s={key:0,class:"view Login"},o={class:"form-inner"},i=(0,r._)("h1",null,"Login to Chat",-1),c=(0,r._)("label",{for:"username"},"Username",-1),l=(0,r._)("input",{type:"submit",value:"Login"},null,-1),m={key:1,class:"view chat"},f={class:"chat-box"},p={class:"message-inner"},v={class:"username"},d={class:"content"},g=(0,r._)("input",{type:"submit",value:"Send"},null,-1);function h(e,n,t,h,b,w){return""===h.state.username||null===h.state.username?((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("form",{class:"Login-form",onSubmit:n[1]||(n[1]=(0,a.iM)((e=>h.Login()),["prevent"]))},[(0,r._)("div",o,[i,c,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>h.inputUserName=e),type:"text",id:"username",placeholder:"please enter your username"},null,512),[[a.nr,h.inputUserName]]),l])],32)])):((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("header",null,[(0,r._)("button",{class:"logout",onClick:n[2]||(n[2]=(...e)=>h.Logout&&h.Logout(...e))},"Logout"),(0,r._)("h1",null,"Welcome, "+(0,u.zw)(h.state.username),1)]),(0,r._)("section",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.state.messages,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.key,class:(0,u.C_)(e.username==h.state.username?"message current-user":"message")},[(0,r._)("div",p,[(0,r._)("div",v,(0,u.zw)(e.username),1),(0,r._)("div",d,(0,u.zw)(e.content),1)])],2)))),128))]),(0,r._)("footer",null,[(0,r._)("form",{onSubmit:n[4]||(n[4]=(0,a.iM)(((...e)=>h.SendMessage&&h.SendMessage(...e)),["prevent"]))},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>h.inputMessage=e),type:"text",placeholder:"write a message"},null,512),[[a.nr,h.inputMessage]]),g],32)])]))}var b=t(4870),w=t(4275),y=t(1178),_={setup(){const e={databaseURL:"https://chat-vue-39eec-default-rtdb.firebaseio.com",apiKey:"AIzaSyAt1tDZQ9Q7-61AOFaW5wVrjxcK600Wu4o",authDomain:"chat-vue-39eec.firebaseapp.com",projectId:"chat-vue-39eec",storageBucket:"chat-vue-39eec.appspot.com",messagingSenderId:"317479173943",appId:"1:317479173943:web:aed9357f915777c47164b2",measurementId:"G-Y5JCVW7EH3"},n=(0,w.ZF)(e),t=(0,y.N8)(n);function a(e,n,a){(0,y.t8)((0,y.iH)(t,"messages/"+a),{username:e,content:n,time:a})}const u=(0,b.iH)(""),s=(0,b.iH)(""),o=(0,b.qj)({username:"",messages:[]}),i=()=>{""===u.value&&null===u.value||(o.username=u.value,u.value="")},c=()=>{o.username=""},l=()=>{if(""===s.value||null===s.value)return;const e=(new Date).getTime();a(o.username,s.value,e),s.value=""};return(0,r.bv)((()=>{const e=(0,y.iH)(t,"messages/");(0,y.jM)(e,(e=>{const n=e.val();let t=[];Object.keys(n).forEach((e=>{t.push({id:e,username:n[e].username,content:n[e].content})})),o.messages=t,o.messages.sort(((e,n)=>e.id-n.id))}))})),{inputUserName:u,Login:i,state:o,SendMessage:l,inputMessage:s,Logout:c}}},O=t(89);const k=(0,O.Z)(_,[["render",h]]);var j=k;(0,a.ri)(j).mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var u=n[a]={exports:{}};return e[a](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,u){if(!a){var s=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],u=e[l][2];for(var o=!0,i=0;i<a.length;i++)(!1&u||s>=u)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(o=!1,u<s&&(s=u));if(o){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[a,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,u,s=a[0],o=a[1],i=a[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(r in o)t.o(o,r)&&(t.m[r]=o[r]);if(i)var l=i(t)}for(n&&n(a);c<s.length;c++)u=s[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},a=self["webpackChunkchat_vue"]=self["webpackChunkchat_vue"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(5825)}));a=t.O(a)})();
//# sourceMappingURL=app.5766456b.js.map