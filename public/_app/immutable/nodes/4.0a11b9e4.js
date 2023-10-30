import{s as R,n as x,r as X,o as B}from"../chunks/scheduler.8bf5fc3d.js";import{S as z,i as F,g as v,m as N,s as P,h as b,j as E,n as V,f as g,c as W,k as T,a as O,z as c,B as U,H as C,o as Y,r as j,u as L,v as k,d as M,t as A,w as G}from"../chunks/index.141f7682.js";function J(s){let e,n,h,f,p,r,a,i,o,H,D,S,l,t,w;return{c(){e=v("div"),n=v("div"),h=v("h2"),f=N(s[0]),p=P(),r=v("p"),a=N(s[1]),i=P(),o=v("p"),H=N("X cord: "),D=N(s[3]),S=N(", Y cord: "),l=N(s[4]),this.h()},l(d){e=b(d,"DIV",{id:!0,role:!0,class:!0});var u=E(e);n=b(u,"DIV",{class:!0});var m=E(n);h=b(m,"H2",{class:!0});var _=E(h);f=V(_,s[0]),_.forEach(g),p=W(m),r=b(m,"P",{});var I=E(r);a=V(I,s[1]),I.forEach(g),i=W(m),o=b(m,"P",{});var y=E(o);H=V(y,"X cord: "),D=V(y,s[3]),S=V(y,", Y cord: "),l=V(y,s[4]),y.forEach(g),m.forEach(g),u.forEach(g),this.h()},h(){T(h,"class","card-title"),T(n,"class","card-body"),T(e,"id",s[2]),T(e,"role","presentation"),T(e,"class","card project-card w-96 card-bordered card-normal bg-secondary hover:bg-secondary-focus text-secondary-content hover:text-secondary-content-focus shadow-xl")},m(d,u){O(d,e,u),c(e,n),c(n,h),c(h,f),c(n,p),c(n,r),c(r,a),c(n,i),c(n,o),c(o,H),c(o,D),c(o,S),c(o,l),t||(w=[U(window,"resize",s[8]),U(e,"mousedown",C(s[5])),U(e,"mousemove",s[6]),U(e,"mouseup",s[7]),U(e,"mouseleave",s[7])],t=!0)},p(d,[u]){u&1&&Y(f,d[0]),u&2&&Y(a,d[1]),u&8&&Y(D,d[3]),u&16&&Y(l,d[4])},i:x,o:x,d(d){d&&g(e),t=!1,X(w)}}}function K(s,e,n){let{title:h}=e,{body:f}=e;const p=crypto.randomUUID();let r=0,a=0,i=!1;B(()=>{let l=document.getElementById(p);return l&&(n(3,r=l.clientLeft),n(4,a=l.clientTop)),()=>{n(3,r=0),n(4,a=0)}});async function o(l){l.currentTarget&&(i=!0)}async function H(l){var u,m;let t=l.currentTarget,w=l.movementX,d=l.movementY;if(t&&i){let _=((u=t.parentElement)==null?void 0:u.clientWidth)??Number.POSITIVE_INFINITY,I=((m=t.parentElement)==null?void 0:m.clientHeight)??Number.POSITIVE_INFINITY,y=r+w,q=a+d;n(3,r=y>=0?y+t.clientWidth<=_?y:_-t.clientWidth:0),n(4,a=q>=0?q+t.clientHeight<=I?q:I-t.clientHeight:0),t.style.top=a+"px",t.style.left=r+"px"}}async function D(l){let t=l.currentTarget;t&&(i=!1,t.style.top=a+"px",t.style.left=r+"px")}async function S(l){var w,d;let t=document.getElementById(p);if(t){let u=((w=t.parentElement)==null?void 0:w.clientWidth)??Number.POSITIVE_INFINITY,m=((d=t.parentElement)==null?void 0:d.clientHeight)??Number.POSITIVE_INFINITY,_=r,I=a;n(3,r=_>=0?_+t.clientWidth<=u?_:u-t.clientWidth:0),n(4,a=I>=0?I+t.clientHeight<=m?I:m-t.clientHeight:0),t.style.top=a+"px",t.style.left=r+"px"}}return s.$$set=l=>{"title"in l&&n(0,h=l.title),"body"in l&&n(1,f=l.body)},[h,f,p,r,a,o,H,D,S]}class Q extends z{constructor(e){super(),F(this,e,K,J,R,{title:0,body:1,UUID:2})}get UUID(){return this.$$.ctx[2]}}function Z(s){let e,n,h,f,p,r,a;return r=new Q({props:{title:"Title String",body:"This the cord's body text. The card's body text can be of a longer length and it will be handled appropriately. Does this card handle the body text well or not? Can you tell me?"}}),{c(){e=v("div"),n=v("div"),h=P(),f=v("div"),p=P(),j(r.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var o=E(e);n=b(o,"DIV",{class:!0}),E(n).forEach(g),h=W(o),f=b(o,"DIV",{class:!0}),E(f).forEach(g),p=W(o),L(r.$$.fragment,o),o.forEach(g),this.h()},h(){T(n,"class","axis top-1/2 h-0 w-full ring ring-1 ring-neutral absolute"),T(f,"class","axis left-1/2 h-full w-0 ring ring-1 ring-neutral absolute"),T(e,"class","board svelte-oz2cp0")},m(i,o){O(i,e,o),c(e,n),c(e,h),c(e,f),c(e,p),k(r,e,null),a=!0},p:x,i(i){a||(M(r.$$.fragment,i),a=!0)},o(i){A(r.$$.fragment,i),a=!1},d(i){i&&g(e),G(r)}}}class te extends z{constructor(e){super(),F(this,e,null,Z,R,{})}}export{te as component};