import{s as U,n as z,f as V}from"../chunks/scheduler.8bf5fc3d.js";import{S as q,i as y,g as x,F as B,s as A,m as E,h as j,j as d,G as D,f as p,c as C,n as S,k as r,a as F,z as o,o as I}from"../chunks/index.141f7682.js";import{p as G}from"../chunks/stores.d610c1c4.js";function M(m){var $,b;let t,s,e,a,w,l,u=m[0].status+"",v,k,h=(((b=($=m[0])==null?void 0:$.error)==null?void 0:b.message)??"Unknown Error")+"",_;return{c(){t=x("div"),s=x("div"),e=B("svg"),a=B("path"),w=A(),l=x("span"),v=E(u),k=E(": "),_=E(h),this.h()},l(n){t=j(n,"DIV",{class:!0});var i=d(t);s=j(i,"DIV",{class:!0});var c=d(s);e=D(c,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0});var f=d(e);a=D(f,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(a).forEach(p),f.forEach(p),w=C(c),l=j(c,"SPAN",{});var g=d(l);v=S(g,u),k=S(g,": "),_=S(g,h),g.forEach(p),c.forEach(p),i.forEach(p),this.h()},h(){r(a,"stroke-linecap","round"),r(a,"stroke-linejoin","round"),r(a,"stroke-width","2"),r(a,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"class","stroke-current shrink-0 h-6 w-6"),r(e,"fill","none"),r(e,"viewBox","0 0 24 24"),r(s,"class","alert alert-error w-fit"),r(t,"class","h-full w-full flex flex-col place-content-center place-items-center")},m(n,i){F(n,t,i),o(t,s),o(s,e),o(e,a),o(s,w),o(s,l),o(l,v),o(l,k),o(l,_)},p(n,[i]){var c,f;i&1&&u!==(u=n[0].status+"")&&I(v,u),i&1&&h!==(h=(((f=(c=n[0])==null?void 0:c.error)==null?void 0:f.message)??"Unknown Error")+"")&&I(_,h)},i:z,o:z,d(n){n&&p(t)}}}function N(m,t,s){let e;return V(m,G,a=>s(0,e=a)),[e]}class K extends q{constructor(t){super(),y(this,t,N,M,U,{})}}export{K as component};
