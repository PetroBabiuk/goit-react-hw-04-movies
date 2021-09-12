(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,c){e.exports={navigation:"Navigation_navigation__1VtLy",link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB"}},12:function(e,t,c){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},26:function(e,t,c){e.exports={ButtonLoadMore:"ButtonLoadMore_ButtonLoadMore__2ZTsa"}},39:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(15),r=c.n(i),s=c(8),o=c(11),j=c.n(o),b=c(1),l=function(){return Object(b.jsxs)("nav",{className:j.a.navigation,children:[Object(b.jsx)(s.c,{exact:!0,to:"/",className:j.a.link,activeClassName:j.a.activeLink,children:"Home"}),Object(b.jsx)(s.c,{to:"/movies",className:j.a.link,activeClassName:j.a.activeLink,children:"Movies"})]})},h=c(2),u=c(5),d=c(21),m=c.n(d),v=c(25),O="https://api.themoviedb.org/3";function x(){return p.apply(this,arguments)}function p(){return(p=Object(v.a)(m.a.mark((function e(){var t,c,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=c(9),g=c.n(f),_=function(e){var t=e.movies;return Object(b.jsx)("ul",{className:g.a.MovieList,children:t.map((function(e){return Object(b.jsx)("li",{className:g.a.MovieListItem,children:Object(b.jsx)(s.b,{to:"/movies/".concat(e.id),id:e.id,className:g.a.MovieListItemUrl,children:Object(b.jsxs)("div",{className:g.a.MovieListItemImageWrapper,children:[e.poster_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,className:g.a.MovieListItemImage}):Object(b.jsx)("img",{src:"http://placehold.it/432x648/000000/FFFFFF/?text=There+is+no+poster",alt:e.name}),Object(b.jsx)("div",{className:g.a.MovieListItemOverlay,children:Object(b.jsx)("p",{className:g.a.MovieListItemOverlayDescription,children:e.title})})]})})},e.id)}))})},S=c(26),L=c.n(S),F=function(e){var t=e.onClick;return Object(b.jsx)("button",{className:L.a.ButtonLoadMore,onClick:t,children:"Load more"})};var I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x("".concat(O,"/trending/movie/day?api_key=d9642dccb373084b38b1ae3b08bc851f")).then((function(e){return a(e.results)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Trending today"}),Object(b.jsx)(_,{movies:c}),Object(b.jsx)(F,{})]})},M=c(27),y=c(17),k=c(12),N=c.n(k),w=function(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(u.a)(c,2),i=a[0],r=a[1];return Object(b.jsx)("div",{className:N.a.Searchbar,children:Object(b.jsxs)("form",{className:N.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===i.trim())return y.b.error("Please do not use empty string, you have to write something");t(i),r("")},children:[Object(b.jsx)("button",{type:"submit",className:N.a.SearchFormButton,children:Object(b.jsx)("span",{className:N.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:N.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i,onChange:function(e){r(e.currentTarget.value)}})]})})};var B=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(u.a)(i,2),s=r[0],o=r[1],j=Object(h.f)();return Object(n.useEffect)((function(){""===c?a(j.location.search.slice(7,j.location.search.length)):function(e){return x("".concat(O,"/search/movie?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}(c).then((function(e){if(0===e.total_results)throw new Error("Nothing with name ".concat(c," was not found"));o(Object(M.a)(e.results)),j.push("?query=".concat(c))}))}),[j,c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{onSubmit:function(e){a(e)}}),0===s.length?Object(b.jsx)("h1",{children:"Start to search"}):Object(b.jsx)(_,{movies:s}),Object(b.jsx)(F,{}),Object(b.jsx)(y.a,{})]})};var C=function(e){var t=e.movieId,c=Object(n.useState)([]),a=Object(u.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){var e;(e=t,x("".concat(O,"/movie/").concat(e,"/credits?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US"))).then((function(e){return r(e.cast)}))}),[t]),Object(b.jsx)(b.Fragment,{children:0===i.length?Object(b.jsx)("p",{children:"We don't have any information about actors for this movie"}):Object(b.jsx)("ul",{children:i.map((function(e){return Object(b.jsxs)("li",{children:[e.profile_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}):Object(b.jsx)("img",{src:"http://placehold.it/200x300/000000/FFFFFF/?text=There+is+no+photo",alt:e.name}),Object(b.jsx)("p",{children:e.name})]},e.id)}))})})};var E=function(e){var t=e.movieId,c=Object(n.useState)([]),a=Object(u.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){var e;(e=t,x("".concat(O,"/movie/").concat(e,"/reviews?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US&page=1"))).then((function(e){e.results!==[]&&r(e.results)}))}),[t]),Object(b.jsx)(b.Fragment,{children:0===i.length?Object(b.jsx)("p",{children:"We don't have any reviews for this movie"}):Object(b.jsx)("ul",{children:i.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:e.author}),Object(b.jsx)("p",{children:e.content})]},e.id)}))})})},U=function(){var e=Object(h.f)();return Object(b.jsx)("button",{onClick:function(){return e.goBack()},children:"Go Back"})};var W=function(){var e=Object(h.g)().movieId,t=Object(h.h)().url,c=Object(n.useState)(null),a=Object(u.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){var t;(t=e,x("".concat(O,"/movie/").concat(t,"?api_key=d9642dccb373084b38b1ae3b08bc851f&language=en-US"))).then(r)}),[e]),Object(b.jsx)(b.Fragment,{children:i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:[i.title," (",i.release_date,")"]}),Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:i.title}),Object(b.jsxs)("p",{children:["Average ",i.vote_average]}),Object(b.jsx)("h3",{children:"Overview"}),Object(b.jsx)("p",{children:i.overview}),Object(b.jsx)("h3",{children:"Genres"}),Object(b.jsx)("p",{children:i.genres.map((function(e){return Object(b.jsx)("span",{children:e.name},e.id)}))})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Additional information"}),Object(b.jsx)("p",{children:Object(b.jsx)(s.c,{to:"".concat(t,"/cast"),children:"Cast"})}),Object(b.jsx)("p",{children:Object(b.jsx)(s.c,{to:"".concat(t,"/reviews"),children:"Reviews"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{path:"".concat(t,"/cast"),children:Object(b.jsx)(C,{movieId:e})}),Object(b.jsx)(h.a,{path:"".concat(t,"/reviews"),children:Object(b.jsx)(E,{movieId:e})})]})]})})};var D=function(){return Object(b.jsx)("h1",{children:"404 Page not found :("})},T=(c(39),function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(l,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/",children:Object(b.jsx)(I,{})}),Object(b.jsx)(h.a,{exact:!0,path:"/movies",children:Object(b.jsx)(B,{})}),Object(b.jsx)(h.a,{path:"/movies/:movieId",children:Object(b.jsx)(W,{})}),Object(b.jsx)(h.a,{children:Object(b.jsx)(D,{})})]})]})});c(40),c(41),c(42),c(43);r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(T,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={MovieList:"MovieList_MovieList__2uXh-",MovieListItem:"MovieList_MovieListItem__3_b3r",MovieListItemOverlay:"MovieList_MovieListItemOverlay__39pZv",MovieListItemImage:"MovieList_MovieListItemImage__1BeSL",MovieListItemImageWrapper:"MovieList_MovieListItemImageWrapper__2RRlQ",MovieListItemOverlayDescription:"MovieList_MovieListItemOverlayDescription__3yybI"}}},[[44,1,2]]]);
//# sourceMappingURL=main.193fb603.chunk.js.map