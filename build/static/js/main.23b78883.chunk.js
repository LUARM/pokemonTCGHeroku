(this["webpackJsonppokemon-react-app"]=this["webpackJsonppokemon-react-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),o=(n(11),n(3)),i=n.n(o),u=n(5),p=n(6),l=(n.p,n(13),n(14),n(0));var d=function(){return Object(l.jsx)("div",{className:"Title",children:Object(l.jsx)("h1",{children:"Geng\u0101 TCG "})})};var h=function(){var e=s.a.useState(null),t=Object(p.a)(e,2),n=t[0],a=t[1];function r(){return(r=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/load_cards/?card_type=fairy",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});case 3:if(t=e.sent,console.log("status: "+t.status),200!=t.status){e.next=11;break}return e.next=8,t.json();case 8:n=e.sent,a(n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("fetch error is: "+e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)("header",{className:"App-header",children:n&&Object(l.jsxs)("h1",{children:["results: ",JSON.stringify(n.cards[0].name)]})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.23b78883.chunk.js.map