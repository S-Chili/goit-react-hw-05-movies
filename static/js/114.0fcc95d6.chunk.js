"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{89:function(e,t,n){n.d(t,{Df:function(){return v},Qu:function(){return h},TP:function(){return m},q5:function(){return x},zv:function(){return d}});var r=n(861),c=n(757),a=n.n(c),u="https://api.themoviedb.org/3",s="765ba18e0dea441e3b70cde6d2dcbfe5",o="/trending/movie/week",i="/search/movie",f="/movie",p="/credits",l="/reviews",v=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u).concat(o,"?api_key=").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u).concat(i,"?api_key=").concat(s,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u).concat(f,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t).concat(p,"?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t).concat(l,"?api_key=").concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},402:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(87),c="MoviesList_sectionMain__w8-Jk",a="MoviesList_titleList__LGCiH",u="MoviesList_moviesItem__OeS7q",s=n(184);function o(e){var t=e.data,n=e.title,o=e.location;return(0,s.jsxs)("section",{className:c,children:[n&&(0,s.jsx)("h2",{className:a,children:n}),(0,s.jsx)("ul",{className:a,children:t.map((function(e){var t;return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:o},children:null!==(t=e.name)&&void 0!==t?t:e.title})},e.id)}))})]})}},114:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(433),c=n(861),a=n(439),u=n(757),s=n.n(u),o=n(791),i=n(87),f=n(689),p="SearchBar_searchForm__5RFvO",l="SearchBar_button__NBEGK",v="SearchBar_searchInput__hnbpG",h=n(184);function m(e){var t=e.query,n=(0,i.lr)(),r=(0,a.Z)(n,2),c=r[0],u=r[1];return(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.get("query").trim())return alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443!");t(c.get("query")),u({query:""})},className:p,children:[(0,h.jsx)("button",{type:"submit",className:l,children:(0,h.jsx)("span",{children:"Search"})}),(0,h.jsx)("input",{type:"text",name:"searchParams",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c.get("query")?c.get("query"):"",onChange:function(e){u({query:e.currentTarget.value.toLowerCase()})},className:v})]})}var d=n(402),x=n(89);var _=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,o.useState)([]),l=(0,a.Z)(p,2),v=l[0],_=l[1],y=(0,f.TH)(),k=(0,i.lr)(),w=(0,a.Z)(k,1)[0].get("query");return(0,o.useEffect)((function(){function e(){return(e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n||!w){e.next=7;break}return e.next=4,(0,x.Qu)(w);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,(0,x.Qu)(n);case 9:t=e.sent;case 10:_((0,r.Z)(t)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error data:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w,n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{query:function(e){u(e)}}),v.length?(0,h.jsx)(d.O,{data:v,location:y}):null]})}},861:function(e,t,n){function r(e,t,n,r,c,a,u){try{var s=e[a](u),o=s.value}catch(i){return void n(i)}s.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var u=e.apply(t,n);function s(e){r(u,c,a,s,o,"next",e)}function o(e){r(u,c,a,s,o,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=114.0fcc95d6.chunk.js.map