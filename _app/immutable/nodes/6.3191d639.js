import{S as Ae,i as ke,s as je,k as d,l as u,m as h,h as o,n as i,p as ut,b as _,R as I,q as v,r as g,O as s,V as ne,a as y,y as R,U as jt,c as w,z as M,A as B,g as G,d as P,B as C}from"../chunks/index.012e952f.js";import{I as At}from"../chunks/ImageCarousel.2a08d85c.js";import{G as Ee}from"../chunks/Grid.fc7cc0a0.js";const Dt=!0,ta=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dt},Symbol.toStringTag,{value:"Module"}));function Vt(l){let e,n;return{c(){e=d("p"),n=v("Invalid video URL")},l(t){e=u(t,"P",{});var a=h(e);n=g(a,"Invalid video URL"),a.forEach(o)},m(t,a){_(t,e,a),s(e,n)},p:I,d(t){t&&o(e)}}}function St(l){let e,n;return{c(){e=d("iframe"),this.h()},l(t){e=u(t,"IFRAME",{class:!0,title:!0,width:!0,height:!0,src:!0,frameborder:!0}),h(e).forEach(o),this.h()},h(){i(e,"class","responsive-iframe svelte-6dcjme"),i(e,"title",l[0]),i(e,"width","640"),i(e,"height","360"),ne(e.src,n=`https://www.youtube.com/embed/${l[1]}${l[2]?`?start=${kt(l[2])}`:""}`)||i(e,"src",n),i(e,"frameborder","0"),e.allowFullscreen=!0},m(t,a){_(t,e,a)},p(t,a){a&1&&i(e,"title",t[0]),a&6&&!ne(e.src,n=`https://www.youtube.com/embed/${t[1]}${t[2]?`?start=${kt(t[2])}`:""}`)&&i(e,"src",n)},d(t){t&&o(e)}}}function Tt(l){let e;function n(r,c){return r[1]?St:Vt}let t=n(l),a=t(l);return{c(){e=d("div"),a.c(),this.h()},l(r){e=u(r,"DIV",{class:!0,style:!0});var c=h(e);a.l(c),c.forEach(o),this.h()},h(){i(e,"class","container svelte-6dcjme"),ut(e,"--aspect-ratio","16/9")},m(r,c){_(r,e,c),a.m(e,null)},p(r,[c]){t===(t=n(r))&&a?a.p(r,c):(a.d(1),a=t(r),a&&(a.c(),a.m(e,null)))},i:I,o:I,d(r){r&&o(e),a.d()}}}function kt(l){let e=0;const n=/(\d+)(h|m|s)/g;let t;for(;(t=n.exec(l))!==null;){const a=parseInt(t[1]);switch(t[2]){case"h":e+=a*3600;break;case"m":e+=a*60;break;case"s":e+=a;break}}return e}function Rt(l,e,n){let{src:t=""}=e,{video_title:a}=e,r="",c="";function D(p){const L=p.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^?&"'>]+)/);if(L){n(1,r=L[1]);const F=p.match(/[?&]t=([0-9hms]+)/);F&&n(2,c=F[1])}}return l.$$set=p=>{"src"in p&&n(3,t=p.src),"video_title"in p&&n(0,a=p.video_title)},l.$$.update=()=>{l.$$.dirty&8&&D(t)},[a,r,c,t]}class Mt extends Ae{constructor(e){super(),ke(this,e,Rt,Tt,je,{src:3,video_title:0})}}function Bt(l){let e,n;return{c(){e=d("p"),n=v("Invalid playlist URL")},l(t){e=u(t,"P",{});var a=h(e);n=g(a,"Invalid playlist URL"),a.forEach(o)},m(t,a){_(t,e,a),s(e,n)},p:I,d(t){t&&o(e)}}}function Gt(l){let e,n;return{c(){e=d("iframe"),this.h()},l(t){e=u(t,"IFRAME",{class:!0,title:!0,width:!0,height:!0,src:!0,frameborder:!0}),h(e).forEach(o),this.h()},h(){i(e,"class","responsive-iframe svelte-6dcjme"),i(e,"title",l[0]),i(e,"width","640"),i(e,"height","360"),ne(e.src,n=`https://www.youtube.com/embed/videoseries?list=${l[1]}`)||i(e,"src",n),i(e,"frameborder","0"),e.allowFullscreen=!0},m(t,a){_(t,e,a)},p(t,a){a&1&&i(e,"title",t[0]),a&2&&!ne(e.src,n=`https://www.youtube.com/embed/videoseries?list=${t[1]}`)&&i(e,"src",n)},d(t){t&&o(e)}}}function Pt(l){let e;function n(r,c){return r[1]?Gt:Bt}let t=n(l),a=t(l);return{c(){e=d("div"),a.c(),this.h()},l(r){e=u(r,"DIV",{class:!0,style:!0});var c=h(e);a.l(c),c.forEach(o),this.h()},h(){i(e,"class","container svelte-6dcjme"),ut(e,"--aspect-ratio","16/9")},m(r,c){_(r,e,c),a.m(e,null)},p(r,[c]){t===(t=n(r))&&a?a.p(r,c):(a.d(1),a=t(r),a&&(a.c(),a.m(e,null)))},i:I,o:I,d(r){r&&o(e),a.d()}}}function Ct(l){const e=l.match(/\?list=([A-Za-z0-9_-]+)/);return e?e[1]:null}function Lt(l,e,n){let{playlistSrc:t=""}=e,{playlist_title:a}=e,r="";return l.$$set=c=>{"playlistSrc"in c&&n(2,t=c.playlistSrc),"playlist_title"in c&&n(0,a=c.playlist_title)},l.$$.update=()=>{l.$$.dirty&4&&n(1,r=Ct(t))},[a,r,t]}class Ft extends Ae{constructor(e){super(),ke(this,e,Lt,Pt,je,{playlistSrc:2,playlist_title:0})}}function Ut(l){let e,n;return{c(){e=d("p"),n=v("Invalid Vimeo video URL")},l(t){e=u(t,"P",{});var a=h(e);n=g(a,"Invalid Vimeo video URL"),a.forEach(o)},m(t,a){_(t,e,a),s(e,n)},p:I,d(t){t&&o(e)}}}function Nt(l){let e,n;return{c(){e=d("iframe"),this.h()},l(t){e=u(t,"IFRAME",{class:!0,title:!0,width:!0,height:!0,src:!0,frameborder:!0}),h(e).forEach(o),this.h()},h(){i(e,"class","responsive-iframe svelte-6dcjme"),i(e,"title",l[0]),i(e,"width","640"),i(e,"height","360"),ne(e.src,n=`https://player.vimeo.com/video/${l[1]}`)||i(e,"src",n),i(e,"frameborder","0"),e.allowFullscreen=!0},m(t,a){_(t,e,a)},p(t,a){a&1&&i(e,"title",t[0]),a&2&&!ne(e.src,n=`https://player.vimeo.com/video/${t[1]}`)&&i(e,"src",n)},d(t){t&&o(e)}}}function Jt(l){let e;function n(r,c){return r[1]?Nt:Ut}let t=n(l),a=t(l);return{c(){e=d("div"),a.c(),this.h()},l(r){e=u(r,"DIV",{class:!0,style:!0});var c=h(e);a.l(c),c.forEach(o),this.h()},h(){i(e,"class","container svelte-6dcjme"),ut(e,"--aspect-ratio","16/9")},m(r,c){_(r,e,c),a.m(e,null)},p(r,[c]){t===(t=n(r))&&a?a.p(r,c):(a.d(1),a=t(r),a&&(a.c(),a.m(e,null)))},i:I,o:I,d(r){r&&o(e),a.d()}}}function Ot(l){const e=l.match(/vimeo\.com\/(?:video\/|)(\d+)/);return e?e[1]:null}function Yt(l,e,n){let{src:t=""}=e,{video_title:a}=e,r="";return l.$$set=c=>{"src"in c&&n(2,t=c.src),"video_title"in c&&n(0,a=c.video_title)},l.$$.update=()=>{l.$$.dirty&4&&n(1,r=Ot(t))},[a,r,t]}class Ht extends Ae{constructor(e){super(),ke(this,e,Yt,Jt,je,{src:2,video_title:0})}}function qt(l){let e,n;return e=new Ht({props:{src:"https://vimeo.com/836601829",video_title:"DataForum 2023 - short version"}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){B(e,t,a),n=!0},p:I,i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function zt(l){let e,n;return e=new Mt({props:{src:"https://www.youtube.com/watch?v=CWaalYJR8qI&t=10486s",video_title:"DataForum conference June 2023"}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){B(e,t,a),n=!0},p:I,i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Kt(l){let e,n,t,a;return e=new Ee({props:{xs:2,lg:1,$$slots:{default:[qt]},$$scope:{ctx:l}}}),t=new Ee({props:{xs:2,lg:1,$$slots:{default:[zt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment),n=y(),R(t.$$.fragment)},l(r){M(e.$$.fragment,r),n=w(r),M(t.$$.fragment,r)},m(r,c){B(e,r,c),_(r,n,c),B(t,r,c),a=!0},p(r,c){const D={};c&4&&(D.$$scope={dirty:c,ctx:r}),e.$set(D);const p={};c&4&&(p.$$scope={dirty:c,ctx:r}),t.$set(p)},i(r){a||(G(e.$$.fragment,r),G(t.$$.fragment,r),a=!0)},o(r){P(e.$$.fragment,r),P(t.$$.fragment,r),a=!1},d(r){C(e,r),r&&o(n),C(t,r)}}}function Wt(l){let e,n;return e=new Ft({props:{playlistSrc:"https://youtube.com/playlist?list=PLfcYOdV5W3jCNdvrpBgk-OL3uaIhDUQfA&si=j2isE1i7TNSXEy3a",playlist_title:"DEADPROGRAM Twitch streamings"}}),{c(){R(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,a){B(e,t,a),n=!0},p:I,i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Qt(l){let e,n,t,a,r,c,D,p,L,F,De,Ve,Q,Se,Te,de,E,U,re,Re,Me,X,Be,Ge,Pe,Z,N,ue,A,x,O,Ce,V,se,Le,Fe,Y,Ue,H,Ne,Je,fe,k,S,ie,Oe,Ye,ee,He,qe,ze,te,q,he,j,T,oe,Ke,We,b,Qe,Xe,z,Ze,xe,le,et,tt,at,nt,rt,K,st,it,ot,ae,J,me;return N=new Ee({props:{container:!0,gutter:40,columns:2,$$slots:{default:[Kt]},$$scope:{ctx:l}}}),O=new At({props:{images:l[0],particlesShown:2,particlesScrolled:1}}),q=new At({props:{images:l[1],particlesShown:2,particlesScrolled:1}}),J=new Ee({props:{container:!0,$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){e=d("meta"),n=d("meta"),t=d("meta"),a=d("meta"),r=d("meta"),c=d("meta"),D=y(),p=d("div"),L=d("h1"),F=d("b"),De=v("Talks, conferences and content"),Ve=y(),Q=d("p"),Se=d("br"),Te=v(`I have participated in multiple university talks and conferences where
    I have had the opportunity to share my knowledge and experiences around data
    with both technical and young people interested in getting into the field of
    Data Science, as well as non-technical people that are trying to understand
    what data entails and how it will impact them (this goes doublefold for
    businesses trying to become data-driven).`),de=y(),E=d("div"),U=d("div"),re=d("h2"),Re=v("DATAfórum 2023"),Me=y(),X=d("p"),Be=d("br"),Ge=v(`I had the pleasure of attending the DataForum event organised by the
      Spanish Ministry of Justice on June, where I presented a short masterclass
      on AI for people in the government and legal space. Although we know not
      everything is ChatGPT, in the end we are still talking about it all the
      time...`),Pe=y(),Z=d("div"),R(N.$$.fragment),ue=y(),A=d("div"),x=d("div"),R(O.$$.fragment),Ce=y(),V=d("div"),se=d("h2"),Le=v("ANBAN conference"),Fe=y(),Y=d("p"),Ue=d("br"),H=d("a"),Ne=v("ANBAN"),Je=v(` (Asociación nacional Big Data y Analytics) is a non-for-profit association
      focused on promoting data related knowledge and activities. I was invited as
      part of a group of proffesionals in the sector to discuss how I use data in
      my day-to-day job to solve real-world problems.`),fe=y(),k=d("div"),S=d("div"),ie=d("h2"),Oe=v("Collaborations with University of Oviedo"),Ye=y(),ee=d("p"),He=d("br"),qe=v(`As a former alumni of the Faculty of Sciencies, I keep a strong
      relationship with the University up to this day. During these past years I
      have attended several events and chats with current students to discuss
      the future of data, cloud services, projects I have worked on, and overall
      guidance into what they can expect of the sector if they so choose to
      pursue this path.`),ze=y(),te=d("div"),R(q.$$.fragment),he=y(),j=d("div"),T=d("div"),oe=d("h2"),Ke=v("TinyGo streamings"),We=y(),b=d("p"),Qe=d("br"),Xe=v(`I have also had the pleasure to collaborate with Ron Evans (AKA
      `),z=d("a"),Ze=v("@deadprogram"),xe=v(`), Go guru, technologist for hire, influencer and overall amazing person!
      In the following Youtube playlist where the Twitch streamings are
      recorded, I was leveraging the Go implementation of OpenCV named
      `),le=d("b"),et=v("GoCV"),tt=v(` to interface an object detection model to detect... cows
      (don't ask about that, we're a bit weird in Asturias 😅). `),at=d("br"),nt=d("br"),rt=v(`
      I have also learned a lot about Go, TinyGo and microdevices (check out the
      `),K=d("a"),st=v("LED dashboard project"),it=v(" I developed if you are interested!)."),ot=y(),ae=d("div"),R(J.$$.fragment),this.h()},l(f){const m=jt("svelte-1uqgshc",document.head);e=u(m,"META",{charset:!0}),n=u(m,"META",{name:!0,content:!0}),t=u(m,"META",{name:!0,content:!0}),a=u(m,"META",{name:!0,content:!0}),r=u(m,"META",{property:!0,content:!0}),c=u(m,"META",{property:!0,content:!0}),m.forEach(o),D=w(f),p=u(f,"DIV",{align:!0,class:!0});var W=h(p);L=u(W,"H1",{});var ce=h(L);F=u(ce,"B",{});var ft=h(F);De=g(ft,"Talks, conferences and content"),ft.forEach(o),ce.forEach(o),Ve=w(W),Q=u(W,"P",{});var lt=h(Q);Se=u(lt,"BR",{}),Te=g(lt,`I have participated in multiple university talks and conferences where
    I have had the opportunity to share my knowledge and experiences around data
    with both technical and young people interested in getting into the field of
    Data Science, as well as non-technical people that are trying to understand
    what data entails and how it will impact them (this goes doublefold for
    businesses trying to become data-driven).`),lt.forEach(o),W.forEach(o),de=w(f),E=u(f,"DIV",{class:!0,align:!0});var pe=h(E);U=u(pe,"DIV",{class:!0});var ve=h(U);re=u(ve,"H2",{});var ht=h(re);Re=g(ht,"DATAfórum 2023"),ht.forEach(o),Me=w(ve),X=u(ve,"P",{});var ct=h(X);Be=u(ct,"BR",{}),Ge=g(ct,`I had the pleasure of attending the DataForum event organised by the
      Spanish Ministry of Justice on June, where I presented a short masterclass
      on AI for people in the government and legal space. Although we know not
      everything is ChatGPT, in the end we are still talking about it all the
      time...`),ct.forEach(o),ve.forEach(o),Pe=w(pe),Z=u(pe,"DIV",{class:!0});var mt=h(Z);M(N.$$.fragment,mt),mt.forEach(o),pe.forEach(o),ue=w(f),A=u(f,"DIV",{align:!0,class:!0});var ge=h(A);x=u(ge,"DIV",{class:!0});var pt=h(x);M(O.$$.fragment,pt),pt.forEach(o),Ce=w(ge),V=u(ge,"DIV",{align:!0,class:!0});var _e=h(V);se=u(_e,"H2",{});var vt=h(se);Le=g(vt,"ANBAN conference"),vt.forEach(o),Fe=w(_e),Y=u(_e,"P",{});var be=h(Y);Ue=u(be,"BR",{}),H=u(be,"A",{href:!0,title:!0});var gt=h(H);Ne=g(gt,"ANBAN"),gt.forEach(o),Je=g(be,` (Asociación nacional Big Data y Analytics) is a non-for-profit association
      focused on promoting data related knowledge and activities. I was invited as
      part of a group of proffesionals in the sector to discuss how I use data in
      my day-to-day job to solve real-world problems.`),be.forEach(o),_e.forEach(o),ge.forEach(o),fe=w(f),k=u(f,"DIV",{align:!0,class:!0});var ye=h(k);S=u(ye,"DIV",{align:!0,class:!0});var we=h(S);ie=u(we,"H2",{});var _t=h(ie);Oe=g(_t,"Collaborations with University of Oviedo"),_t.forEach(o),Ye=w(we),ee=u(we,"P",{});var dt=h(ee);He=u(dt,"BR",{}),qe=g(dt,`As a former alumni of the Faculty of Sciencies, I keep a strong
      relationship with the University up to this day. During these past years I
      have attended several events and chats with current students to discuss
      the future of data, cloud services, projects I have worked on, and overall
      guidance into what they can expect of the sector if they so choose to
      pursue this path.`),dt.forEach(o),we.forEach(o),ze=w(ye),te=u(ye,"DIV",{class:!0});var bt=h(te);M(q.$$.fragment,bt),bt.forEach(o),ye.forEach(o),he=w(f),j=u(f,"DIV",{align:!0,class:!0});var $e=h(j);T=u($e,"DIV",{align:!0,class:!0});var Ie=h(T);oe=u(Ie,"H2",{});var yt=h(oe);Ke=g(yt,"TinyGo streamings"),yt.forEach(o),We=w(Ie),b=u(Ie,"P",{});var $=h(b);Qe=u($,"BR",{}),Xe=g($,`I have also had the pleasure to collaborate with Ron Evans (AKA
      `),z=u($,"A",{href:!0,title:!0});var wt=h(z);Ze=g(wt,"@deadprogram"),wt.forEach(o),xe=g($,`), Go guru, technologist for hire, influencer and overall amazing person!
      In the following Youtube playlist where the Twitch streamings are
      recorded, I was leveraging the Go implementation of OpenCV named
      `),le=u($,"B",{});var $t=h(le);et=g($t,"GoCV"),$t.forEach(o),tt=g($,` to interface an object detection model to detect... cows
      (don't ask about that, we're a bit weird in Asturias 😅). `),at=u($,"BR",{}),nt=u($,"BR",{}),rt=g($,`
      I have also learned a lot about Go, TinyGo and microdevices (check out the
      `),K=u($,"A",{href:!0,title:!0});var It=h(K);st=g(It,"LED dashboard project"),It.forEach(o),it=g($," I developed if you are interested!)."),$.forEach(o),Ie.forEach(o),ot=w($e),ae=u($e,"DIV",{class:!0});var Et=h(ae);M(J.$$.fragment,Et),Et.forEach(o),$e.forEach(o),this.h()},h(){document.title="Conferences - Manuel Souto Juan",i(e,"charset","UTF-8"),i(n,"name","description"),i(n,"content","Conferences and public talks by Manuel Souto Juan"),i(t,"name","keywords"),i(t,"content","Data Science, AI, Machine Learning, Technology"),i(a,"name","author"),i(a,"content","Manuel Souto Juan"),i(r,"property","og:type"),i(r,"content","video"),i(c,"property","og:title"),i(c,"content","Conferences - Manuel Souto Juan"),i(p,"align","center"),i(p,"class","landing_title svelte-pv0nj"),i(U,"class","prose"),i(Z,"class","video_grid svelte-pv0nj"),i(E,"class","centered_grid svelte-pv0nj"),i(E,"align","center"),i(x,"class","image_carousel svelte-pv0nj"),i(H,"href","https://www.linkedin.com/company/big-data-asociacion"),i(H,"title","ANBAN LinkedIn profile"),i(V,"align","left"),i(V,"class","prose svelte-pv0nj"),i(A,"align","center"),i(A,"class","half_text svelte-pv0nj"),i(S,"align","left"),i(S,"class","prose svelte-pv0nj"),i(te,"class","image_carousel svelte-pv0nj"),i(k,"align","center"),i(k,"class","half_text svelte-pv0nj"),i(z,"href","https://github.com/deadprogram"),i(z,"title","@deadprogram"),i(K,"href","https://github.com/frisuelu/physical-LED-dashboard"),i(K,"title","GitHub repo for LED dashboard"),i(T,"align","left"),i(T,"class","prose svelte-pv0nj"),i(ae,"class","individual_video svelte-pv0nj"),i(j,"align","center"),i(j,"class","half_text svelte-pv0nj")},m(f,m){s(document.head,e),s(document.head,n),s(document.head,t),s(document.head,a),s(document.head,r),s(document.head,c),_(f,D,m),_(f,p,m),s(p,L),s(L,F),s(F,De),s(p,Ve),s(p,Q),s(Q,Se),s(Q,Te),_(f,de,m),_(f,E,m),s(E,U),s(U,re),s(re,Re),s(U,Me),s(U,X),s(X,Be),s(X,Ge),s(E,Pe),s(E,Z),B(N,Z,null),_(f,ue,m),_(f,A,m),s(A,x),B(O,x,null),s(A,Ce),s(A,V),s(V,se),s(se,Le),s(V,Fe),s(V,Y),s(Y,Ue),s(Y,H),s(H,Ne),s(Y,Je),_(f,fe,m),_(f,k,m),s(k,S),s(S,ie),s(ie,Oe),s(S,Ye),s(S,ee),s(ee,He),s(ee,qe),s(k,ze),s(k,te),B(q,te,null),_(f,he,m),_(f,j,m),s(j,T),s(T,oe),s(oe,Ke),s(T,We),s(T,b),s(b,Qe),s(b,Xe),s(b,z),s(z,Ze),s(b,xe),s(b,le),s(le,et),s(b,tt),s(b,at),s(b,nt),s(b,rt),s(b,K),s(K,st),s(b,it),s(j,ot),s(j,ae),B(J,ae,null),me=!0},p(f,[m]){const W={};m&4&&(W.$$scope={dirty:m,ctx:f}),N.$set(W);const ce={};m&4&&(ce.$$scope={dirty:m,ctx:f}),J.$set(ce)},i(f){me||(G(N.$$.fragment,f),G(O.$$.fragment,f),G(q.$$.fragment,f),G(J.$$.fragment,f),me=!0)},o(f){P(N.$$.fragment,f),P(O.$$.fragment,f),P(q.$$.fragment,f),P(J.$$.fragment,f),me=!1},d(f){o(e),o(n),o(t),o(a),o(r),o(c),f&&o(D),f&&o(p),f&&o(de),f&&o(E),C(N),f&&o(ue),f&&o(A),C(O),f&&o(fe),f&&o(k),C(q),f&&o(he),f&&o(j),C(J)}}}function Xt(l){return[["images/conferences/anban_conference.jpg","images/conferences/anban_conference_2.jpg","images/conferences/anban_conference_3.jpg"],["images/conferences/university_1.jpg","images/conferences/university_2.jpg","images/conferences/university_3.jpg","images/conferences/university_4.jpg","images/conferences/university_5.jpg"]]}class aa extends Ae{constructor(e){super(),ke(this,e,Xt,Qt,je,{})}}export{aa as component,ta as universal};
