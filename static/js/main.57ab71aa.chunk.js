(this.webpackJsonpstorepage=this.webpackJsonpstorepage||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/1.697d2691.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/2.d282bc8b.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/3.be0e5527.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/4.b5e5b564.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/5.60766fe1.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/6.b461b11e.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/spinner.bc442313.gif"},34:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(12),i=a(9),u=a(10),s=a(26),m=a.n(s),E=a(27),d=a.n(E),f=a(28),p=a.n(f),b=a(29),h=a.n(b),g=a(30),v=a.n(g),O=a(31),C=a.n(O),y=function(){function e(){Object(i.a)(this,e),this.books=[{id:1,img:m.a,title:"Fairy Portraits",author:"Selina Fenech",price:"9.49$",rating:100},{id:2,img:d.a,title:"Five-minute Stories",author:"Cottage Door Press",price:"11.69$",rating:579},{id:3,img:p.a,title:"Tell Me a Story",author:"Louise deForest",price:"31.97$",rating:62},{id:4,img:h.a,title:"Fairy Dog Heaven",author:"Patrese Fischer",price:"17.99$",rating:37},{id:5,img:v.a,title:"A Witch's Guide",author:"Edain McCoy",price:"21.99$",rating:71},{id:6,img:C.a,title:"The Girl Who Drank the Moon",author:"Kelly Barnhill",price:"4.49$",rating:2522}]}return Object(u.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,a){setTimeout((function(){t(e.books)}),700)}))}}]),e}(),j=r.a.createContext(),k=j.Provider,I=j.Consumer,T=a(11),N=a(18),S=a(17),_=(a(43),function(){return r.a.createElement("div",null," Error ")}),F=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(u.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(_,null):this.props.children}}]),a}(n.Component),D=(a(44),a(2)),x=(a(45),function(e){var t=e.book,a=e.onClickAdd,n=e.items,c=t.img,o=t.author,l=t.title,i=t.id,u=t.price,s=t.rating;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:c,alt:c,className:"booksImage"}),r.a.createElement("div",null,r.a.createElement("span",{className:"author"},r.a.createElement("i",null,"author:")," ",r.a.createElement("b",null,o)," "),r.a.createElement("span",{className:"rating"},"Rating ",r.a.createElement("span",null,s))),r.a.createElement("h5",null,l),r.a.createElement("h3",null,"Price: ",u),r.a.createElement("div",{className:"btn btn-info",onClick:function(){var e=!1;n.forEach((function(t){t.id===i&&(e=!0)})),console.log(e),a(i)}},r.a.createElement("i",{className:"fas fa-plus"})," Add To Cart"))}),M=function(e,t){return function(){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return t(function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}}(e))}))}},A=a(32),B=a.n(A),w=(a(46),function(){return r.a.createElement("img",{src:B.a,className:"spinner"})}),R=(a(47),function(){return function(e){return function(t){return r.a.createElement(I,null,(function(a){return r.a.createElement(e,Object.assign({},t,{bookStoreService:a}))}))}}}),$=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.items,n=e.loading,c=e.error,o=e.addItemToCart;return c?r.a.createElement(_,null):n?r.a.createElement(w,null):r.a.createElement(H,{books:t,items:a,addItemToCart:o})}}]),a}(n.Component),H=function(e){var t=e.books,a=e.items,n=e.addItemToCart;console.log(a);var c=function(e){var r={};if(t.forEach((function(t){t.id===e&&(r.name=t.title,r.price=t.price.slice(0,-1),r.id=e)})),function(e,t){var a=!1;return t.forEach((function(t){t.id===e&&(console.log(1),a=!0)})),a}(e,a))return alert("item already added to cart");n(r)};return r.a.createElement("ul",{className:"mx-auto"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(x,{book:e,onClickAdd:c,items:a}))})))},K=R()(Object(l.b)((function(e){return{books:e.books,items:e.items,loading:e.loading,error:e.error}}),(function(e,t){var a=t.bookStoreService;return{fetchBooks:M(a,e),addItemToCart:function(t){e(function(e){return{type:"ADD_ITEM_TO_CART",payload:e}}(t))}}}))($)),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null))},U=(a(48),Object(l.b)((function(e){return{items:e.items,totalInCart:e.totalInCart}}),(function(e){return{onDecress:function(t){e(function(e){return{type:"ITEM_DECRESS",payload:e}}(t))},onIncress:function(t){e(function(e){return{type:"ITEM_INCRESS",payload:e}}(t))},onDelete:function(t){e(function(e){return{type:"ITEM_DELETE",payload:e}}(t))}}}))((function(e){var t=e.items,a=e.onDecress,n=e.onIncress,c=e.onDelete,o=e.totalInCart;return console.log({totalInCart:o}),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{style:{width:"40%"}},"Item Name"),r.a.createElement("th",{style:{width:"25%"}},"Count"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.map((function(e,t){var o=e.name,l=e.count,i=e.price,u=e.id;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement("h4",null,l)),r.a.createElement("td",null,Math.ceil(l*i*100)/100,"$"),r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("div",{onClick:function(){a(u)},className:"btn btn-outline-success"},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("div",{onClick:function(){n(u)},className:"btn btn-outline-warning"},r.a.createElement("i",{className:"fas fa-minus"})),r.a.createElement("div",{onClick:function(){c(u)},className:"btn btn-outline-danger"},r.a.createElement("i",{className:"fas fa-trash"})))))})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 text-right"},r.a.createElement("h4",{className:"float-right"},"Total ",o.toFixed(2),"$"))))}))),L=(a(49),function(e){var t=e.numItems,a=e.total,n=e.title;return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(T.b,{to:"/"},r.a.createElement("div",{className:"btn btn-default btn-sm"},r.a.createElement("i",{className:"fas fa-home"})," Home"))),r.a.createElement("div",{className:"col-sm-4 text-center headerTitle"},r.a.createElement("h2",null,n)),r.a.createElement(T.b,{to:"/cart",className:"col-sm-4 text-right cart"},r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),r.a.createElement("span",{className:"itemsInCart"},t," items"),r.a.createElement("span",{className:"total"},"(",a,")")))))}),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"My Book Store",numItems:3,total:"$250"}),r.a.createElement("main",{rol:"main",className:"container-fluid"},r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/",exact:!0,component:P}),r.a.createElement(D.a,{path:"/cart",component:U}))))},W=a(16),J=a(33),Q=a(3),q={books:[],loading:!0,error:null,items:[{id:6,name:"The Girl Who Drank the Moon",count:2,price:4.49},{id:5,name:"A Witch's Guide",count:3,price:21.99},{id:1,name:"Fairy Portraits",count:1,price:9.49}],totalInCart:80},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,a=e.totalInCart;switch(t.type){case"FETCH_BOOKS_REQUEST":return Object(Q.a)(Object(Q.a)({},e),{},{books:[],loading:!0,error:null});case"FETCH_BOOKS_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{books:t.payload,loading:!1,error:null});case"FETCH_BOOKS_FAILURE":return Object(Q.a)(Object(Q.a)({},e),{},{books:[],loading:!1,error:t.payload});case"ADD_ITEM_TO_CART":var n=t.payload,r=n.id,c=n.name,o=n.price,l={id:r,name:c,count:1,price:Number(o)},i=[l].concat(Object(J.a)(e.items));return a+=l.price,Object(Q.a)(Object(Q.a)({},e),{},{items:i,totalInCart:a});case"ITEM_DECRESS":var u=e.items.map((function(e){if(e.id===t.payload){var n=e.count+1;return a+=e.price,Object(Q.a)(Object(Q.a)({},e),{},{count:n})}return e}));return Object(Q.a)(Object(Q.a)({},e),{},{items:u,totalInCart:a});case"ITEM_INCRESS":var s=e.items.map((function(e){if(e.id===t.payload){var n=0;return e.count>0&&(n=e.count-1,a-=e.price),Object(Q.a)(Object(Q.a)({},e),{},{count:n})}return e}));return Object(Q.a)(Object(Q.a)({},e),{},{items:s,totalInCart:a});case"ITEM_DELETE":var m=e.items.filter((function(e){return e.id!==t.payload||(a-=e.price*e.count,!1)}));return Object(Q.a)(Object(Q.a)({},e),{},{items:m,totalInCart:a});default:return e}},V=Object(W.b)(z),X=new y;o.a.render(r.a.createElement(l.a,{store:V},r.a.createElement(F,null,r.a.createElement(k,{value:X},r.a.createElement(T.a,null,r.a.createElement(G,null))))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.57ab71aa.chunk.js.map