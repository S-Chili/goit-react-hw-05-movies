"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{89:function(t,e,n){n.d(e,{Df:function(){return h},Qu:function(){return v},TP:function(){return d},q5:function(){return _},zv:function(){return m}});var r=n(861),c=n(757),a=n.n(c),s="https://api.themoviedb.org/3",u="765ba18e0dea441e3b70cde6d2dcbfe5",o="/trending/movie/week",i="/search/movie",p="/movie",f="/credits",l="/reviews",h=function(){var t=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(o,"?api_key=").concat(u));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(i,"?api_key=").concat(u,"&query=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(p,"/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(e).concat(f,"?api_key=").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"/movie/").concat(e).concat(l,"?api_key=").concat(u));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),c=n(439),a=n(757),s=n.n(a),u=n(689),o=n(791),i=n(89),p=n(639),f="Cast_loaderContainer__mzAkX",l="Cast_castList__ARoWn",h="Cast_castItem__-Jcfe",v="Cast_cast_image__iogqG",d="Cast_castName__-i08u",m=n(184);var _=function(){var t=(0,u.UO)().movieId,e=(0,o.useState)(null),n=(0,c.Z)(e,2),a=n[0],_=n[1],x=(0,o.useState)(!0),k=(0,c.Z)(x,2),w=k[0],b=k[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.zv)(t);case 3:n=e.sent,_(n),b(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching data:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("ul",{className:l,children:a?Object.values(a).map((function(t){var e=t.profile_path,n=t.name,r=t.character,c=t.id;return(0,m.jsxs)("li",{className:h,children:[(0,m.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200/".concat(e):"https://via.placeholder.com/200x300",alt:n,className:v}),(0,m.jsx)("p",{className:d,children:n}),(0,m.jsxs)("p",{children:["Character: ",(0,m.jsx)("br",{})," ",r]})]},c)})):null}),w&&(0,m.jsx)("div",{style:{position:"absolute",bottom:"-30px",left:"50%"},children:(0,m.jsx)(p.Z,{})})]})}},639:function(t,e,n){n.d(e,{Z:function(){return u}});n(791);var r="Loader_loader__+lRPl",c="Loader_loader_icon__R7TOB",a=n(828),s=n(184);function u(){return(0,s.jsx)("div",{className:r,children:(0,s.jsx)(a.Cd,{className:c,color:"tomato"})})}}}]);
//# sourceMappingURL=76.2d35fbc4.chunk.js.map