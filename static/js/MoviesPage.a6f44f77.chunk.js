(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{56:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return b})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return h}));var n=a(57),c=a.n(n),r=a(59),o="https://api.themoviedb.org/3";function i(){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(c.a.mark((function e(){var t,a,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,a);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return i("".concat(o,"/trending/movie/day?api_key=d9642dccb373084b38b1ae3b08bc851f&page=").concat(e))}function b(e,t){return i("".concat(o,"/search/movie?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"))}function m(e){return i("".concat(o,"/movie/").concat(e,"?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US"))}function l(e){return i("".concat(o,"/movie/").concat(e,"/credits?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US"))}function h(e){return i("".concat(o,"/movie/").concat(e,"/reviews?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&page=1"))}},60:function(e,t,a){"use strict";t.a=a.p+"static/media/keep-calm-poster-not-found.f755b781.png"},61:function(e,t,a){e.exports={MovieList:"MovieList_MovieList__2uXh-",MovieListItem:"MovieList_MovieListItem__3_b3r",MovieListItemOverlay:"MovieList_MovieListItemOverlay__39pZv",MovieListItemImage:"MovieList_MovieListItemImage__1BeSL",MovieListItemImageWrapper:"MovieList_MovieListItemImageWrapper__2RRlQ",MovieListItemOverlayDescription:"MovieList_MovieListItemOverlayDescription__3yybI"}},62:function(e,t,a){e.exports={ButtonLoadMore:"ButtonLoadMore_ButtonLoadMore__2ZTsa"}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),c=a(1),r=a(61),o=a.n(r),i=a(60),s=a(2),u=function(e){var t=e.movies,a=Object(c.g)();return Object(s.jsx)("ul",{className:o.a.MovieList,children:t.map((function(e){return Object(s.jsx)("li",{className:o.a.MovieListItem,children:Object(s.jsx)(n.b,{to:{pathname:"/movies/".concat(e.id),state:{from:a}},id:e.id,className:o.a.MovieListItemUrl,children:Object(s.jsxs)("div",{className:o.a.MovieListItemImageWrapper,children:[e.poster_path?Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,className:o.a.MovieListItemImage}):Object(s.jsx)("img",{src:i.a,alt:e.name}),Object(s.jsx)("div",{className:o.a.MovieListItemOverlay,children:Object(s.jsx)("p",{className:o.a.MovieListItemOverlayDescription,children:e.title})})]})})},e.id)}))})}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var n=a(62),c=a.n(n),r=a(2),o=function(e){var t=e.onClick;return Object(r.jsx)("button",{className:c.a.ButtonLoadMore,onClick:t,children:"Load more"})}},67:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},74:function(e,t,a){"use strict";a.r(t);var n=a(63),c=a(53),r=a(0),o=a(1),i=a(66),s=a(67),u=a.n(s),b=a(2),m=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(c.a)(a,2),o=n[0],s=n[1];return Object(b.jsx)("div",{className:u.a.Searchbar,children:Object(b.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return i.b.error("Please do not use empty string, you have to write something");t(o),s("")},children:[Object(b.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(b.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(e){s(e.currentTarget.value)}})]})})},l=a(64),h=a(65),f=a(56);t.default=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],u=Object(r.useState)([]),v=Object(c.a)(u,2),d=v[0],p=v[1],j=Object(r.useState)(1),_=Object(c.a)(j,2),O=_[0],g=_[1],S=Object(o.f)();return Object(r.useEffect)((function(){""===a?s(S.location.search.slice(7,S.location.search.length)):Object(f.d)(a,O).then((function(e){if(0===e.total_results)throw new Error("Nothing with name ".concat(a," was not found"));p((function(t){return[].concat(Object(n.a)(t),Object(n.a)(e.results))})),S.push("?query=".concat(a))}))}),[O,S,a]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{onSubmit:function(e){s((function(t){if(t!==e)return p([]),g(1),e}))}}),0===d.length?Object(b.jsx)("h1",{children:"Start to search"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{movies:d}),Object(b.jsx)(h.a,{onClick:function(){return g((function(e){return e+1}))}})]}),Object(b.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=MoviesPage.a6f44f77.chunk.js.map