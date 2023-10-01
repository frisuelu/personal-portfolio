import{C as Ke,D as Ce,S as ie,i as fe,s as se,E as ce,y as q,z as J,A as K,F as ze,G as Ge,g as b,d as E,B as Q,H as _e,I as $e,J as ve,K as ge,L as pe,k as h,l as d,m as $,h as u,n as _,b as H,M as Qe,v as he,f as de,N as Ze,a as y,q as N,c as A,r as T,O as o,P as be,Q as Ee,R as ke,e as Ve,T as We}from"../chunks/index.012e952f.js";import{b as C}from"../chunks/paths.3efbf221.js";import{w as Xe}from"../chunks/index.15cf1bc6.js";import{I as He,G as Ye}from"../chunks/github.c372c089.js";import{L as xe,M as et}from"../chunks/mail.c27d4e4a.js";const tt=!0,lt=({url:c})=>({currentRoute:c.pathname}),Mt=Object.freeze(Object.defineProperty({__proto__:null,load:lt,prerender:tt},Symbol.toStringTag,{value:"Module"}));function rt(c){const e=c-1;return e*e*e+1}function De(c,{delay:e=0,duration:l=400,easing:t=Ke}={}){const r=+getComputedStyle(c).opacity;return{delay:e,duration:l,easing:t,css:s=>`opacity: ${s*r}`}}function qe(c,{delay:e=0,duration:l=400,easing:t=rt,x:r=0,y:s=0,opacity:n=0}={}){const f=getComputedStyle(c),a=+f.opacity,g=f.transform==="none"?"":f.transform,m=a*(1-n),[v,i]=Ce(r),[p,Z]=Ce(s);return{delay:e,duration:l,easing:t,css:(B,P)=>`
			transform: ${g} translate(${(1-B)*v}${i}, ${(1-B)*p}${Z});
			opacity: ${a-m*P}`}}function st(c){let e;const l=c[2].default,t=$e(l,c,c[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&ve(t,l,r,r[3],e?pe(l,r[3],s,null):ge(r[3]),null)},i(r){e||(b(t,r),e=!0)},o(r){E(t,r),e=!1},d(r){t&&t.d(r)}}}function nt(c){let e,l;const t=[{name:"moon"},c[1],{iconNode:c[0]}];let r={$$slots:{default:[st]},$$scope:{ctx:c}};for(let s=0;s<t.length;s+=1)r=ce(r,t[s]);return e=new He({props:r}),{c(){q(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,n){K(e,s,n),l=!0},p(s,[n]){const f=n&3?ze(t,[t[0],n&2&&Ge(s[1]),n&1&&{iconNode:s[0]}]):{};n&8&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){Q(e,s)}}}function at(c,e,l){let{$$slots:t={},$$scope:r}=e;const s=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return c.$$set=n=>{l(1,e=ce(ce({},e),_e(n))),"$$scope"in n&&l(3,r=n.$$scope)},e=_e(e),[s,e,t,r]}class ot extends ie{constructor(e){super(),fe(this,e,at,nt,se,{})}}const ct=ot;function it(c){let e;const l=c[2].default,t=$e(l,c,c[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&8)&&ve(t,l,r,r[3],e?pe(l,r[3],s,null):ge(r[3]),null)},i(r){e||(b(t,r),e=!0)},o(r){E(t,r),e=!1},d(r){t&&t.d(r)}}}function ft(c){let e,l;const t=[{name:"sun"},c[1],{iconNode:c[0]}];let r={$$slots:{default:[it]},$$scope:{ctx:c}};for(let s=0;s<t.length;s+=1)r=ce(r,t[s]);return e=new He({props:r}),{c(){q(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,n){K(e,s,n),l=!0},p(s,[n]){const f=n&3?ze(t,[t[0],n&2&&Ge(s[1]),n&1&&{iconNode:s[0]}]):{};n&8&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){Q(e,s)}}}function ut(c,e,l){let{$$slots:t={},$$scope:r}=e;const s=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return c.$$set=n=>{l(1,e=ce(ce({},e),_e(n))),"$$scope"in n&&l(3,r=n.$$scope)},e=_e(e),[s,e,t,r]}class mt extends ie{constructor(e){super(),fe(this,e,ut,ft,se,{})}}const _t=mt,ht=localStorage.getItem("color-scheme"),Je=Xe(ht??"dark");function dt(){Je.update(c=>{const e=c==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function $t(c){let e,l,t,r,s,n,f;return l=new ct({}),{c(){e=h("div"),q(l.$$.fragment),t=y(),r=h("span"),s=N("Dark"),this.h()},l(a){e=d(a,"DIV",{class:!0});var g=$(e);J(l.$$.fragment,g),t=A(g),r=d(g,"SPAN",{});var m=$(r);s=T(m,"Dark"),m.forEach(u),g.forEach(u),this.h()},h(){_(e,"class","svelte-stng2m")},m(a,g){H(a,e,g),K(l,e,null),o(e,t),o(e,r),o(r,s),f=!0},i(a){f||(b(l.$$.fragment,a),n||be(()=>{n=Ee(e,qe,{y:-10}),n.start()}),f=!0)},o(a){E(l.$$.fragment,a),f=!1},d(a){a&&u(e),Q(l)}}}function vt(c){let e,l,t,r,s,n,f;return l=new _t({}),{c(){e=h("div"),q(l.$$.fragment),t=y(),r=h("span"),s=N("Light"),this.h()},l(a){e=d(a,"DIV",{class:!0});var g=$(e);J(l.$$.fragment,g),t=A(g),r=d(g,"SPAN",{});var m=$(r);s=T(m,"Light"),m.forEach(u),g.forEach(u),this.h()},h(){_(e,"class","svelte-stng2m")},m(a,g){H(a,e,g),K(l,e,null),o(e,t),o(e,r),o(r,s),f=!0},i(a){f||(b(l.$$.fragment,a),n||be(()=>{n=Ee(e,qe,{y:10}),n.start()}),f=!0)},o(a){E(l.$$.fragment,a),f=!1},d(a){a&&u(e),Q(l)}}}function gt(c){let e,l,t,r,s,n;const f=[vt,$t],a=[];function g(m,v){return m[0]==="dark"?0:1}return l=g(c),t=a[l]=f[l](c),{c(){e=h("button"),t.c(),this.h()},l(m){e=d(m,"BUTTON",{"aria-label":!0,class:!0});var v=$(e);t.l(v),v.forEach(u),this.h()},h(){_(e,"aria-label","Toggle theme"),_(e,"class","svelte-stng2m")},m(m,v){H(m,e,v),a[l].m(e,null),r=!0,s||(n=Qe(e,"click",dt),s=!0)},p(m,[v]){let i=l;l=g(m),l!==i&&(he(),E(a[i],1,1,()=>{a[i]=null}),de(),t=a[l],t||(t=a[l]=f[l](m),t.c()),b(t,1),t.m(e,null))},i(m){r||(b(t),r=!0)},o(m){E(t),r=!1},d(m){m&&u(e),a[l].d(),s=!1,n()}}}function pt(c,e,l){let t;return Ze(c,Je,r=>l(0,t=r)),[t]}class bt extends ie{constructor(e){super(),fe(this,e,pt,gt,se,{})}}function Et(c){let e,l,t,r,s,n,f,a,g,m,v,i,p,Z,B,P,V,x,W,M,D,ee,X,j,O,te,U,S;return U=new bt({}),{c(){e=h("nav"),l=h("a"),t=h("b"),r=N("Personal Portfolio"),s=y(),n=h("ul"),f=h("li"),a=h("a"),g=N("Skillset"),m=y(),v=h("li"),i=h("a"),p=N("Projects"),Z=y(),B=h("li"),P=h("a"),V=N("Blog"),x=y(),W=h("li"),M=h("a"),D=N("Conferences"),ee=y(),X=h("li"),j=h("a"),O=N("About"),te=y(),q(U.$$.fragment),this.h()},l(I){e=d(I,"NAV",{class:!0});var L=$(e);l=d(L,"A",{href:!0,class:!0});var ne=$(l);t=d(ne,"B",{});var F=$(t);r=T(F,"Personal Portfolio"),F.forEach(u),ne.forEach(u),s=A(L),n=d(L,"UL",{class:!0});var k=$(n);f=d(k,"LI",{});var ae=$(f);a=d(ae,"A",{href:!0,class:!0});var z=$(a);g=T(z,"Skillset"),z.forEach(u),ae.forEach(u),m=A(k),v=d(k,"LI",{});var G=$(v);i=d(G,"A",{href:!0,class:!0});var le=$(i);p=T(le,"Projects"),le.forEach(u),G.forEach(u),Z=A(k),B=d(k,"LI",{});var w=$(B);P=d(w,"A",{href:!0,class:!0});var re=$(P);V=T(re,"Blog"),re.forEach(u),w.forEach(u),x=A(k),W=d(k,"LI",{});var Y=$(W);M=d(Y,"A",{href:!0,class:!0});var ue=$(M);D=T(ue,"Conferences"),ue.forEach(u),Y.forEach(u),ee=A(k),X=d(k,"LI",{});var me=$(X);j=d(me,"A",{href:!0,class:!0});var R=$(j);O=T(R,"About"),R.forEach(u),me.forEach(u),k.forEach(u),te=A(L),J(U.$$.fragment,L),L.forEach(u),this.h()},h(){_(l,"href",C+"/"),_(l,"class","title svelte-gy9bn7"),_(a,"href",C+"/skillset"),_(a,"class","svelte-gy9bn7"),_(i,"href",C+"/projects"),_(i,"class","svelte-gy9bn7"),_(P,"href",C+"/blog"),_(P,"class","svelte-gy9bn7"),_(M,"href",C+"/conferences"),_(M,"class","svelte-gy9bn7"),_(j,"href",C+"/about"),_(j,"class","svelte-gy9bn7"),_(n,"class","links svelte-gy9bn7"),_(e,"class","svelte-gy9bn7")},m(I,L){H(I,e,L),o(e,l),o(l,t),o(t,r),o(e,s),o(e,n),o(n,f),o(f,a),o(a,g),o(n,m),o(n,v),o(v,i),o(i,p),o(n,Z),o(n,B),o(B,P),o(P,V),o(n,x),o(n,W),o(W,M),o(M,D),o(n,ee),o(n,X),o(X,j),o(j,O),o(e,te),K(U,e,null),S=!0},p:ke,i(I){S||(b(U.$$.fragment,I),S=!0)},o(I){E(U.$$.fragment,I),S=!1},d(I){I&&u(e),Q(U)}}}class kt extends ie{constructor(e){super(),fe(this,e,null,Et,se,{})}}function yt(c){let e,l,t,r,s,n,f,a,g,m,v,i,p,Z,B,P,V,x,W,M,D,ee,X,j,O,te,U,S,I,L,ne,F,k,ae,z,G,le;return L=new xe({}),k=new Ye({}),G=new et({}),{c(){e=h("footer"),l=h("nav"),t=h("a"),r=h("b"),s=N("Personal Portfolio"),n=y(),f=h("ul"),a=h("li"),g=h("a"),m=N("Skillset"),v=y(),i=h("li"),p=h("a"),Z=N("Projects"),B=y(),P=h("li"),V=h("a"),x=N("Blog"),W=y(),M=h("li"),D=h("a"),ee=N("Conferences"),X=y(),j=h("li"),O=h("a"),te=N("About"),U=y(),S=h("div"),I=h("a"),q(L.$$.fragment),ne=y(),F=h("a"),q(k.$$.fragment),ae=y(),z=h("a"),q(G.$$.fragment),this.h()},l(w){e=d(w,"FOOTER",{class:!0});var re=$(e);l=d(re,"NAV",{class:!0});var Y=$(l);t=d(Y,"A",{href:!0,class:!0});var ue=$(t);r=d(ue,"B",{});var me=$(r);s=T(me,"Personal Portfolio"),me.forEach(u),ue.forEach(u),n=A(Y),f=d(Y,"UL",{class:!0});var R=$(f);a=d(R,"LI",{});var ye=$(a);g=d(ye,"A",{href:!0,class:!0});var Ae=$(g);m=T(Ae,"Skillset"),Ae.forEach(u),ye.forEach(u),v=A(R),i=d(R,"LI",{});var Ie=$(i);p=d(Ie,"A",{href:!0,class:!0});var Le=$(p);Z=T(Le,"Projects"),Le.forEach(u),Ie.forEach(u),B=A(R),P=d(R,"LI",{});var we=$(P);V=d(we,"A",{href:!0,class:!0});var Pe=$(V);x=T(Pe,"Blog"),Pe.forEach(u),we.forEach(u),W=A(R),M=d(R,"LI",{});var Se=$(M);D=d(Se,"A",{href:!0,class:!0});var Ne=$(D);ee=T(Ne,"Conferences"),Ne.forEach(u),Se.forEach(u),X=A(R),j=d(R,"LI",{});var Te=$(j);O=d(Te,"A",{href:!0,class:!0});var Me=$(O);te=T(Me,"About"),Me.forEach(u),Te.forEach(u),R.forEach(u),U=A(Y),S=d(Y,"DIV",{class:!0});var oe=$(S);I=d(oe,"A",{href:!0,class:!0});var je=$(I);J(L.$$.fragment,je),je.forEach(u),ne=A(oe),F=d(oe,"A",{href:!0,class:!0});var Re=$(F);J(k.$$.fragment,Re),Re.forEach(u),ae=A(oe),z=d(oe,"A",{href:!0,class:!0});var Be=$(z);J(G.$$.fragment,Be),Be.forEach(u),oe.forEach(u),Y.forEach(u),re.forEach(u),this.h()},h(){_(t,"href",C+"/"),_(t,"class","title svelte-i1r9nm"),_(g,"href",C+"/skillset"),_(g,"class","svelte-i1r9nm"),_(p,"href",C+"/projects"),_(p,"class","svelte-i1r9nm"),_(V,"href",C+"/blog"),_(V,"class","svelte-i1r9nm"),_(D,"href",C+"/conferences"),_(D,"class","svelte-i1r9nm"),_(O,"href",C+"/about"),_(O,"class","svelte-i1r9nm"),_(f,"class","links svelte-i1r9nm"),_(I,"href","https://www.linkedin.com/in/manuel-souto-juan/"),_(I,"class","svelte-i1r9nm"),_(F,"href","https://www.github.com/frisuelu"),_(F,"class","svelte-i1r9nm"),_(z,"href","mailto:manuelsoju@hotmail.com"),_(z,"class","svelte-i1r9nm"),_(S,"class","icons svelte-i1r9nm"),_(l,"class","svelte-i1r9nm"),_(e,"class","svelte-i1r9nm")},m(w,re){H(w,e,re),o(e,l),o(l,t),o(t,r),o(r,s),o(l,n),o(l,f),o(f,a),o(a,g),o(g,m),o(f,v),o(f,i),o(i,p),o(p,Z),o(f,B),o(f,P),o(P,V),o(V,x),o(f,W),o(f,M),o(M,D),o(D,ee),o(f,X),o(f,j),o(j,O),o(O,te),o(l,U),o(l,S),o(S,I),K(L,I,null),o(S,ne),o(S,F),K(k,F,null),o(S,ae),o(S,z),K(G,z,null),le=!0},p:ke,i(w){le||(b(L.$$.fragment,w),b(k.$$.fragment,w),b(G.$$.fragment,w),le=!0)},o(w){E(L.$$.fragment,w),E(k.$$.fragment,w),E(G.$$.fragment,w),le=!1},d(w){w&&u(e),Q(L),Q(k),Q(G)}}}class At extends ie{constructor(e){super(),fe(this,e,null,yt,se,{})}}function Oe(c){let e,l;return e=new kt({}),{c(){q(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Ue(c){let e,l;return e=new At({}),{c(){q(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,r){K(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){E(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Fe(c){let e,l,t,r,s,n,f,a=c[0].currentRoute!=="/"&&Oe();const g=c[2].default,m=$e(g,c,c[1],null);let v=c[0].currentRoute!=="/"&&Ue();return{c(){a&&a.c(),e=y(),l=h("main"),m&&m.c(),s=y(),v&&v.c(),n=Ve(),this.h()},l(i){a&&a.l(i),e=A(i),l=d(i,"MAIN",{class:!0});var p=$(l);m&&m.l(p),p.forEach(u),s=A(i),v&&v.l(i),n=Ve(),this.h()},h(){_(l,"class","svelte-15wrlg9")},m(i,p){a&&a.m(i,p),H(i,e,p),H(i,l,p),m&&m.m(l,null),H(i,s,p),v&&v.m(i,p),H(i,n,p),f=!0},p(i,p){i[0].currentRoute!=="/"?a?p&1&&b(a,1):(a=Oe(),a.c(),b(a,1),a.m(e.parentNode,e)):a&&(he(),E(a,1,1,()=>{a=null}),de()),m&&m.p&&(!f||p&2)&&ve(m,g,i,i[1],f?pe(g,i[1],p,null):ge(i[1]),null),i[0].currentRoute!=="/"?v?p&1&&b(v,1):(v=Ue(),v.c(),b(v,1),v.m(n.parentNode,n)):v&&(he(),E(v,1,1,()=>{v=null}),de())},i(i){f||(b(a),b(m,i),be(()=>{f&&(r&&r.end(1),t=Ee(l,De,{duration:500,delay:150}),t.start())}),b(v),f=!0)},o(i){E(a),E(m,i),t&&t.invalidate(),r=We(l,De,{duration:300}),E(v),f=!1},d(i){a&&a.d(i),i&&u(e),i&&u(l),m&&m.d(i),i&&r&&r.end(),i&&u(s),v&&v.d(i),i&&u(n)}}}function It(c){let e,l=c[0].currentRoute,t,r=Fe(c);return{c(){e=h("div"),r.c(),this.h()},l(s){e=d(s,"DIV",{class:!0});var n=$(e);r.l(n),n.forEach(u),this.h()},h(){_(e,"class","app svelte-15wrlg9")},m(s,n){H(s,e,n),r.m(e,null),t=!0},p(s,[n]){n&1&&se(l,l=s[0].currentRoute)?(he(),E(r,1,1,ke),de(),r=Fe(s),r.c(),b(r,1),r.m(e,null)):r.p(s,n)},i(s){t||(b(r),t=!0)},o(s){E(r),t=!1},d(s){s&&u(e),r.d(s)}}}function Lt(c,e,l){let{$$slots:t={},$$scope:r}=e,{data:s}=e;return c.$$set=n=>{"data"in n&&l(0,s=n.data),"$$scope"in n&&l(1,r=n.$$scope)},[s,r,t]}class jt extends ie{constructor(e){super(),fe(this,e,Lt,It,se,{data:0})}}export{jt as component,Mt as universal};