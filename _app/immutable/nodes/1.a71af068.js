import{S as O,i as S,s as H,k as f,q as b,a as k,l as y,m as E,r as m,h as g,c as C,n as D,b as I,O as n,u as q,R as x,N}from"../chunks/index.27678611.js";import{d as R}from"../chunks/singletons.d9bd768f.js";const V=()=>{const s=R;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return V().page.subscribe(s)}};function w(s){var $;let e,r,i,c,o,l=s[0].status+"",d,v,u=(($=s[0].error)==null?void 0:$.message)+"",h;return{c(){e=f("div"),r=f("h1"),i=b("Oops, you did a bad thing..."),c=k(),o=f("h1"),d=b(l),v=b(": "),h=b(u),this.h()},l(a){e=y(a,"DIV",{class:!0});var t=E(e);r=y(t,"H1",{});var p=E(r);i=m(p,"Oops, you did a bad thing..."),p.forEach(g),c=C(t),o=y(t,"H1",{});var _=E(o);d=m(_,l),v=m(_,": "),h=m(_,u),_.forEach(g),t.forEach(g),this.h()},h(){D(e,"class","error svelte-1ooxq19")},m(a,t){I(a,e,t),n(e,r),n(r,i),n(e,c),n(e,o),n(o,d),n(o,v),n(o,h)},p(a,[t]){var p;t&1&&l!==(l=a[0].status+"")&&q(d,l),t&1&&u!==(u=((p=a[0].error)==null?void 0:p.message)+"")&&q(h,u)},i:x,o:x,d(a){a&&g(e)}}}function z(s,e,r){let i;return N(s,j,c=>r(0,i=c)),[i]}let F=class extends O{constructor(e){super(),S(this,e,z,w,H,{})}};export{F as component};