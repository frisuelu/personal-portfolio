import{S as W,i as L,s as U,k as u,a as M,q as S,y as J,l as p,m as g,h as d,c as q,r as V,z as K,n as _,V as Z,b as H,O as s,A as Q,u as x,g as A,d as G,B as N,e as ee,v as oe,f as ne,W as ae}from"../chunks/index.012e952f.js";import{G as se}from"../chunks/github.c372c089.js";import{C as le}from"../chunks/Carousel.a2b17f66.js";const ie=async({fetch:i})=>{try{return{repos:await(await i("/personal-portfolio/api/github-repos")).json()}}catch(e){console.error(`Error fetching repo internal API : ${e}`)}},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));function ce(i){let e,a,t,r,n,o,c,l,b,B,O,j,I,k,P,T,D,w;return k=new se({}),{c(){e=u("div"),a=u("div"),t=u("img"),n=M(),o=u("div"),c=u("div"),l=u("div"),b=u("h3"),B=S(i[0]),O=M(),j=u("div"),I=u("a"),J(k.$$.fragment),P=M(),T=u("p"),D=S(i[2]),this.h()},l(h){e=p(h,"DIV",{});var m=g(e);a=p(m,"DIV",{});var F=g(a);t=p(F,"IMG",{class:!0,src:!0,alt:!0}),F.forEach(d),n=q(m),o=p(m,"DIV",{align:!0,class:!0});var R=g(o);c=p(R,"DIV",{class:!0});var $=g(c);l=p($,"DIV",{class:!0});var E=g(l);b=p(E,"H3",{class:!0});var z=g(b);B=V(z,i[0]),z.forEach(d),E.forEach(d),O=q($),j=p($,"DIV",{class:!0});var f=g(j);I=p(f,"A",{href:!0});var y=g(I);K(k.$$.fragment,y),y.forEach(d),f.forEach(d),$.forEach(d),P=q(R),T=p(R,"P",{class:!0});var C=g(T);D=V(C,i[2]),C.forEach(d),R.forEach(d),m.forEach(d),this.h()},h(){_(t,"class","thumbnail svelte-ppg080"),Z(t.src,r="images/repos/"+i[0]+".jpg")||_(t,"src",r),_(t,"alt","Thumbnail"),_(b,"class","svelte-ppg080"),_(l,"class","repo_title"),_(I,"href",i[1]),_(j,"class","github_link"),_(c,"class","repo_header svelte-ppg080"),_(T,"class","svelte-ppg080"),_(o,"align","center"),_(o,"class","prose svelte-ppg080")},m(h,m){H(h,e,m),s(e,a),s(a,t),s(e,n),s(e,o),s(o,c),s(c,l),s(l,b),s(b,B),s(c,O),s(c,j),s(j,I),Q(k,I,null),s(o,P),s(o,T),s(T,D),w=!0},p(h,[m]){(!w||m&1&&!Z(t.src,r="images/repos/"+h[0]+".jpg"))&&_(t,"src",r),(!w||m&1)&&x(B,h[0]),(!w||m&2)&&_(I,"href",h[1]),(!w||m&4)&&x(D,h[2])},i(h){w||(A(k.$$.fragment,h),w=!0)},o(h){G(k.$$.fragment,h),w=!1},d(h){h&&d(e),N(k)}}}function ue(i,e,a){let{repo_name:t}=e,{repo_url:r}=e,{repo_description:n}=e;return i.$$set=o=>{"repo_name"in o&&a(0,t=o.repo_name),"repo_url"in o&&a(1,r=o.repo_url),"repo_description"in o&&a(2,n=o.repo_description)},[t,r,n]}class pe extends W{constructor(e){super(),L(this,e,ue,ce,U,{repo_name:0,repo_url:1,repo_description:2})}}function te(i,e,a){const t=i.slice();return t[1]=e[a],t}function de(i){let e,a;return e=new le({props:{autoplay:!0,duration:1500,$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,r){Q(e,t,r),a=!0},p(t,r){const n={};r&17&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function re(i){let e,a;return e=new pe({props:{repo_name:i[1].name,repo_url:i[1].html_url,repo_description:i[1].description}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,r){Q(e,t,r),a=!0},p(t,r){const n={};r&1&&(n.repo_name=t[1].name),r&1&&(n.repo_url=t[1].html_url),r&1&&(n.repo_description=t[1].description),e.$set(n)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){N(e,t)}}}function fe(i){let e,a,t=i[0],r=[];for(let o=0;o<t.length;o+=1)r[o]=re(te(i,t,o));const n=o=>G(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ee()},l(o){for(let c=0;c<r.length;c+=1)r[c].l(o);e=ee()},m(o,c){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,c);H(o,e,c),a=!0},p(o,c){if(c&1){t=o[0];let l;for(l=0;l<t.length;l+=1){const b=te(o,t,l);r[l]?(r[l].p(b,c),A(r[l],1)):(r[l]=re(b),r[l].c(),A(r[l],1),r[l].m(e.parentNode,e))}for(oe(),l=t.length;l<r.length;l+=1)n(l);ne()}},i(o){if(!a){for(let c=0;c<t.length;c+=1)A(r[c]);a=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)G(r[c]);a=!1},d(o){ae(r,o),o&&d(e)}}}function he(i){let e,a,t=de(i);return{c(){e=u("div"),t&&t.c(),this.h()},l(r){e=p(r,"DIV",{class:!0});var n=g(e);t&&t.l(n),n.forEach(d),this.h()},h(){_(e,"class","box svelte-v7skig")},m(r,n){H(r,e,n),t&&t.m(e,null),a=!0},p(r,[n]){t.p(r,n)},i(r){a||(A(t),a=!0)},o(r){G(t),a=!1},d(r){r&&d(e),t&&t.d()}}}function _e(i,e,a){let{repositories:t}=e;return i.$$set=r=>{"repositories"in r&&a(0,t=r.repositories)},[t]}class ve extends W{constructor(e){super(),L(this,e,_e,he,U,{repositories:0})}}function me(i){let e,a,t,r,n,o,c,l,b,B,O,j,I,k,P,T,D,w,h,m,F,R,$,E,z;return E=new ve({props:{repositories:i[0].repos}}),{c(){e=u("div"),a=u("h1"),t=S("Some open-source projects I have worked on"),r=M(),n=u("p"),o=u("br"),c=S(`In the following cards you will see some of the things I have worked
    on during my free time or have been open sourced. These are the code
    endevours which are `),l=u("i"),b=S("cohesive"),B=S(` enough to be called a project and not a
    brainfart.`),O=u("br"),j=u("br"),I=S(` I am a curious person by nature, always trying to
    learn and attracted to new things. I believe learning is a never-ending
    wheel, especially in the current tech and data landscape. `),k=u("br"),P=M(),T=u("br"),D=S(`The projects listed below have allowed me to gain a deeper
    understanding of some transversal technologies that I do not get to employ
    in my day-to-day job. These "pet projects" range from web app development
    using Flask, to IoT services in Arduino and MQTT, to Javascript development
    to control a robot!
    `),w=u("br"),h=M(),m=u("br"),F=S(`
    Oh, and also this exact website you are visiting, built on top of Svelte and
    SvelteKit!`),R=M(),$=u("div"),J(E.$$.fragment),this.h()},l(f){e=p(f,"DIV",{align:!0,class:!0});var y=g(e);a=p(y,"H1",{});var C=g(a);t=V(C,"Some open-source projects I have worked on"),C.forEach(d),r=q(y),n=p(y,"P",{});var v=g(n);o=p(v,"BR",{}),c=V(v,`In the following cards you will see some of the things I have worked
    on during my free time or have been open sourced. These are the code
    endevours which are `),l=p(v,"I",{});var X=g(l);b=V(X,"cohesive"),X.forEach(d),B=V(v,` enough to be called a project and not a
    brainfart.`),O=p(v,"BR",{}),j=p(v,"BR",{}),I=V(v,` I am a curious person by nature, always trying to
    learn and attracted to new things. I believe learning is a never-ending
    wheel, especially in the current tech and data landscape. `),k=p(v,"BR",{}),P=q(v),T=p(v,"BR",{}),D=V(v,`The projects listed below have allowed me to gain a deeper
    understanding of some transversal technologies that I do not get to employ
    in my day-to-day job. These "pet projects" range from web app development
    using Flask, to IoT services in Arduino and MQTT, to Javascript development
    to control a robot!
    `),w=p(v,"BR",{}),h=q(v),m=p(v,"BR",{}),F=V(v,`
    Oh, and also this exact website you are visiting, built on top of Svelte and
    SvelteKit!`),v.forEach(d),y.forEach(d),R=q(f),$=p(f,"DIV",{class:!0});var Y=g($);K(E.$$.fragment,Y),Y.forEach(d),this.h()},h(){_(e,"align","center"),_(e,"class","landing_title svelte-1ko2y5z"),_($,"class","box svelte-1ko2y5z")},m(f,y){H(f,e,y),s(e,a),s(a,t),s(e,r),s(e,n),s(n,o),s(n,c),s(n,l),s(l,b),s(n,B),s(n,O),s(n,j),s(n,I),s(n,k),s(n,P),s(n,T),s(n,D),s(n,w),s(n,h),s(n,m),s(n,F),H(f,R,y),H(f,$,y),Q(E,$,null),z=!0},p(f,[y]){const C={};y&1&&(C.repositories=f[0].repos),E.$set(C)},i(f){z||(A(E.$$.fragment,f),z=!0)},o(f){G(E.$$.fragment,f),z=!1},d(f){f&&d(e),f&&d(R),f&&d($),N(E)}}}function ge(i,e,a){let{data:t}=e;return i.$$set=r=>{"data"in r&&a(0,t=r.data)},[t]}class Ie extends W{constructor(e){super(),L(this,e,ge,me,U,{data:0})}}export{Ie as component,$e as universal};
