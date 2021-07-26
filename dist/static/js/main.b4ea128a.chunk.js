(this.webpackJsonpaccessibility=this.webpackJsonpaccessibility||[]).push([[0],{60:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r,i,a=n(0),c=n.n(a),s=n(11),o=n.n(s),l=(n(60),n(4)),d=n(107),j=n(28),u=n(19),b=n(15),h=n(27),x=n(1),f=x.d.div(r||(r=Object(h.a)(["\n  top: 4rem;\n  right: 1rem;\n  width: 20rem;\n  position: fixed;\n  z-index: 30000;\n\n  transition: all 250ms ease-in-out;\n\n  transform: translateX(150%);\n\n  ","\n"])),(function(e){return e.isDisplayed?"transform: translateX(0%);":null})),O=n(2),p=function(e){var t=e.content,n=e.isDisplayed;return Object(O.jsx)(f,{isDisplayed:n,children:Object(O.jsx)(l.c,{children:Object(O.jsx)(l.l,{px:"gutter",py:"small",children:Object(O.jsxs)(l.g,{alignY:"center",space:"small",children:[Object(O.jsx)(l.d,{children:Object(O.jsx)(l.n,{size:"4xl",as:"span",children:Object(O.jsx)("span",{role:"img","aria-label":"Alert",children:"\ud83d\udea8"})})}),Object(O.jsx)(l.d,{children:Object(O.jsx)(l.n,{size:"lg",color:"black",role:n?"alert":"",children:t})})]})})})})},m=Object(a.createContext)({}),v=function(e){var t=e.children,n=void 0===t?null:t,r=Object(a.useState)({isShown:!1,content:null}),i=Object(b.a)(r,2),c=i[0],s=i[1];return Object(a.useEffect)((function(){var e;return c.isShown&&(e=setTimeout((function(){s(Object(u.a)(Object(u.a)({},c),{},{isShown:!1}))}),3e3)),function(){e&&clearTimeout(e)}}),[c,s]),Object(O.jsxs)(m.Provider,{value:{showNotification:function(e){s({content:e,isShown:!0})}},children:[Object(O.jsx)(p,{content:c.content,isDisplayed:c.isShown}),n]})},g=function(){return Object(a.useContext)(m)},w=n(6),y=n.n(w),k=n(8),S=n(49),F=n.n(S),C=n(51),z=n(109),A=n(108),N=x.d.img(i||(i=Object(h.a)(["\n  width: 100%;\n  height: 8rem;\n  object-fit: cover;\n"]))),I=function(e){var t,n,r,i,a,c,s=e.kitty,o=e.onToggleFav,d=e.isFaved;return Object(O.jsxs)(l.c,{tabIndex:"0","aria-label":"This is a kitty with this identifier: ".concat(null!==(t=null===(n=s.image)||void 0===n?void 0:n.id)&&void 0!==t?t:s.id),children:[Object(O.jsx)(N,{src:null!==(r=null===(i=s.image)||void 0===i?void 0:i.url)&&void 0!==r?r:s.url,alt:"a very beautiful cat"}),Object(O.jsxs)(l.l,{p:"small",children:[Object(O.jsxs)(l.g,{children:[Object(O.jsx)(l.d,{width:"fluid",children:Object(O.jsx)(l.n,{children:"Kitty"})}),Object(O.jsx)(l.d,{width:"content",children:Object(O.jsx)(l.n,{id:"fav-container",onClick:o,onKeyDown:function(e){"Enter"===e.key&&o()},role:"button",tabIndex:"0","aria-label":d?"Remove kitty from favorites":"Add kitty to favorites",children:Object(O.jsx)("span",{role:"img","aria-label":"Star",children:"\u2b50\ufe0f"})})})]}),Object(O.jsx)(l.n,{size:"xs",color:"black300",children:null!==(a=null===(c=s.image)||void 0===c?void 0:c.id)&&void 0!==a?a:s.id})]})]})},L=n(50),T=n.n(L).a.create({baseURL:"https://api.thecatapi.com/v1",headers:{"x-api-key":"91d4d62a-9541-4704-a5b9-1c53fd698a4d"}}),E=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(new FormData).append("file",t.image),e.next=4,T.post("/images/upload");case 4:return e.abrupt("return",{headers:{"Content-Type":"multipart/form-data"}}.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/images/search");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("/favourites");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("/favourites",{image_id:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.delete("/favourites/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.b)(),t=g().showNotification,n=Object(z.a)((function(e){return R(e)}),{onSuccess:function(){e.invalidateQueries(["fav-kitties"])}}),r=n.mutateAsync,i=n.isLoading,a=function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:t("Cat was removed from favorites");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(A.a)(["fav-kitties"],(function(){return B()})),s=c.data,o=void 0===s?[]:s,d=c.isLoading,u=c.error;return d?Object(O.jsx)(l.l,{py:"large",children:Object(O.jsx)(l.i,{size:"large"})}):u?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.n,{children:"Bad Kitty!!!!"}),Object(O.jsx)(l.n,{children:u})]}):o.length<=0?Object(O.jsxs)(l.n,{color:"black400",tabIndex:"0",children:["You do not have any favorite kitties yet",Object(O.jsx)("span",{role:"img","aria-label":"Sad","aria-hidden":!0,children:"\ud83d\ude3f"})]}):Object(O.jsxs)(l.m,{children:[i&&Object(O.jsx)("div",{role:"alert","aria-label":"Removing cat from favorites"}),Object(O.jsx)(l.o,{columns:"5-col",space:"small",children:o.map((function(e){return Object(O.jsx)(I,{isFaved:!0,kitty:e,onToggleFav:function(){return a(e.id)}},e.id)}))})]})},P=function(){var e=Object(j.b)(),t=g().showNotification,n=Object(z.a)((function(e){return D(e)}),{onSuccess:function(){e.invalidateQueries(["fav-kitties"])}}),r=n.mutateAsync,i=n.isLoading,c=function(){var e=Object(k.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:t("Cat added to favorites \ud83d\ude3b");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=Object(A.a)(["kitties"],(function(){return K()}),{refetchOnWindowFocus:!1}),o=s.data,d=void 0===o?[]:o,u=s.isLoading,b=s.error,h=s.refetch;return u?Object(O.jsx)(l.l,{py:"large",children:Object(O.jsx)(l.i,{size:"large"})}):b?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.n,{children:"Bad Kitty!!!!"}),Object(O.jsx)(l.n,{children:b})]}):d.length<=0?Object(O.jsxs)(l.n,{children:["No kitties"," ",Object(O.jsx)("span",{role:"img","aria-label":"Sad",children:"\ud83d\ude3f \ud83d\ude3f \ud83d\ude3f"})," "]}):Object(O.jsxs)(l.m,{space:"small",children:[i&&Object(O.jsx)("div",{role:"alert","aria-label":"Adding cat to favorites"}),Object(O.jsx)(l.o,{columns:"5-col",children:d.map((function(e){return Object(O.jsx)(a.Fragment,{children:Object(O.jsx)("span",{role:"alert","aria-label":"New kitten displayed",children:Object(O.jsx)(I,{kitty:e,onToggleFav:function(){return c(e.id)}})})},e.id)}))}),Object(O.jsx)(l.g,{children:Object(O.jsx)(l.d,{width:"content",children:Object(O.jsx)(l.a,{onClick:h,children:"Show another cat"})})})]})},J=function(){var e,t,n,r,i,c,s,o,d,j=g().showNotification,h=Object(z.a)((function(e){return E(e)})),x=h.mutateAsync,f=h.error,p=Object(C.a)({defaultValues:{name:"",age:""}}),m=Object(a.useState)(!1),v=Object(b.a)(m,2),w=v[0],S=v[1],A=function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(Object(u.a)(Object(u.a)({},t),{},{image:null===(n=t.image)||void 0===n?void 0:n[0]}));case 3:S(!1),j("New kitten added to the repository! Nice!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j("Wah! Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(e){w&&"Escape"===e.key&&S(!1)};return window.addEventListener("keypress",e),function(){window.removeEventListener("keypress",e)}}),[w]),Object(O.jsxs)("main",{"aria-label":"Browse and favorite kittens",children:[Object(O.jsx)(F.a,{active:w,children:Object(O.jsx)("aside",{children:Object(O.jsx)(l.j,{render:w,onBackgroundClick:function(){return S(!1)},children:Object(O.jsxs)(l.b,{bordered:!0,children:[Object(O.jsx)(l.b.Header,{children:"New Kitty"}),Object(O.jsx)(l.b.Body,{children:Object(O.jsx)("form",{onSubmit:p.handleSubmit(A),children:Object(O.jsxs)(l.m,{space:"small",children:[Object(O.jsx)(l.n,{as:"label",htmlFor:"name",children:"Name"}),Object(O.jsx)(l.h,{name:"name",type:"text",ref:p.register({required:!0})}),(null===(e=p.errors)||void 0===e?void 0:e.name)&&Object(O.jsx)(l.n,{color:"cornershop",size:"xs",children:null===(t=p.errors)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.message}),Object(O.jsx)(l.n,{as:"label",htmlFor:"age",children:"Age"}),Object(O.jsx)(l.h,{name:"age",type:"number",ref:p.register({required:!0})}),(null===(r=p.errors)||void 0===r?void 0:r.age)&&Object(O.jsx)(l.n,{color:"cornershop",size:"xs",children:null===(i=p.errors)||void 0===i||null===(c=i.age)||void 0===c?void 0:c.message}),Object(O.jsx)(l.n,{as:"label",htmlFor:"image",children:"Image:"}),Object(O.jsx)(l.h,{name:"image",type:"file",ref:p.register({required:!0})}),(null===(s=p.errors)||void 0===s?void 0:s.file)&&Object(O.jsx)(l.n,{color:"cornershop",size:"xs",children:null===(o=p.errors)||void 0===o||null===(d=o.file)||void 0===d?void 0:d.message}),f&&Object(O.jsxs)(l.n,{size:"sm",color:"cornershop",weight:"medium",role:"alert",children:[Object(O.jsx)("span",{role:"img","aria-label":"Error",children:"\ud83d\udea8"})," ","Could not upload kitten"]}),Object(O.jsx)(l.g,{align:"right",children:Object(O.jsx)(l.d,{width:"content",children:Object(O.jsx)(l.a,{type:"submit","aria-label":"Submit the cat",children:"Send"})})})]})})})]})})})}),Object(O.jsx)(l.f,{appName:"Cat browser \ud83d\udc08"}),Object(O.jsx)(l.l,{p:"xxlarge",children:Object(O.jsxs)(l.m,{space:"large",children:[Object(O.jsx)(l.c,{as:"section",children:Object(O.jsxs)(l.l,{p:"large",children:[Object(O.jsx)(l.l,{pb:"small",children:Object(O.jsx)(l.n,{as:"h1",tabIndex:"0",color:"black",size:"lg",weight:"medium","aria-label":"Favorite Kitties. A list with the cats you have favorited  before",children:"Favorite Kitties"})}),Object(O.jsx)(q,{})]})}),Object(O.jsx)(l.c,{as:"section",tabIndex:"0",children:Object(O.jsxs)(l.l,{p:"large",children:[Object(O.jsx)(l.l,{pb:"small",children:Object(O.jsxs)(l.g,{children:[Object(O.jsx)(l.d,{width:"fluid",children:Object(O.jsx)(l.n,{as:"h1",tabIndex:"0",color:"black",size:"lg",weight:"medium","aria-label":"A random kitty is shown and you can add it to your favorites",children:"Random Kitty"})}),Object(O.jsx)(l.d,{width:"content",children:Object(O.jsx)(l.a,{variant:"secondary",size:"small",onClick:function(){return S(!0)},"aria-label":"Add new cat. Upload a new picture to make it available for everyone",children:"Add new cat"})})]})}),Object(O.jsx)(P,{})]})})]})})]})},Q=new d.a;var U=function(){return Object(O.jsxs)(l.e,{children:[Object(O.jsx)(l.k,{}),Object(O.jsx)(j.a,{client:Q,children:Object(O.jsx)(v,{children:Object(O.jsx)(J,{})})})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),W()}},[[99,1,2]]]);
//# sourceMappingURL=main.b4ea128a.chunk.js.map