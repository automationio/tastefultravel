(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"OrderNumber":10001,"Restaurant":"KFC","Amount":25.9,"OrderDate":"04/04/2021","OrderStatus":"Delivered"},{"OrderNumber":10002,"Restaurant":"Hungry Jacks","Amount":20.99,"OrderDate":"04/05/2021","OrderStatus":"Delivered"}]')},27:function(e){e.exports=JSON.parse('[{"OrderNumber":10001,"Name":"MC Chickem","Amount":25.9,"Image":"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_McChicken-201904.png","OrderStatus":"Delivered"},{"OrderNumber":10002,"Name":"Parmi Burger","Image":"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Chicken-Parmi.png","Price":20.99,"OrderDate":"04/05/2021","OrderStatus":"Delivered"},{"OrderNumber":10002,"Name":"Spicy Burger","Image":"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Spicy-Clubhouse-Crispy.png","Price":20.99,"OrderDate":"04/05/2021","OrderStatus":"Delivered"},{"OrderNumber":10002,"Name":"Spicy Chicken","Image":"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Spicy-Clubhouse-Crispy.png","Price":20.99,"OrderDate":"04/05/2021","OrderStatus":"Delivered"},{"OrderNumber":10002,"Name":"Spicy Chicken","Image":"https://mcdonalds.com.au/sites/mcdonalds.com.au/files/Product_thumb_Spicy-Clubhouse-Crispy.png","Price":20.99,"OrderDate":"04/05/2021","OrderStatus":"Delivered"}]')},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c(26),s=c.n(a),i=c(2),o=c(5),d=function(){return Object(r.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(r.jsx)("div",{className:"logo"}),Object(r.jsxs)("p",{children:["ShopFood - By"," ",Object(r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"#",children:"Anoop Simon"})]})]})},l=c(14),u=c(31),j=c(27),b=function(){return Object(r.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:j.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)(l.a,{style:{width:"16rem",flex:2,margin:10},children:[Object(r.jsx)(l.a.Img,{variant:"top",src:e.Image}),Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)(l.a.Title,{children:e.Name}),Object(r.jsx)(l.a.Text,{children:"3000 Kcal"}),Object(r.jsx)(u.a,{variant:"primary",children:"Add To Cart"})]})]})]})}))})},m=function(){return Object(r.jsx)("div",{className:"spinner",children:Object(r.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},O=c(11),h=function(){return Object(r.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(r.jsx)(O.b,{to:"/home",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Food"}),Object(r.jsx)(O.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"My Account"}),Object(r.jsx)(O.b,{to:"/external-api",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Orders"})]})},x=function(){var e=Object(o.b)().loginWithRedirect;return Object(r.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return e()},children:"Log In"})},p=function(){var e=Object(o.b)().logout;return Object(r.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},v=function(){return Object(o.b)().isAuthenticated?Object(r.jsx)(p,{}):Object(r.jsx)(x,{})},f=function(){return Object(r.jsx)("div",{className:"navbar-nav ml-auto",children:Object(r.jsx)(v,{})})},N=function(){return Object(r.jsx)("div",{className:"nav-container mb-3",children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"navbar-brand logo"}),Object(r.jsx)(h,{}),Object(r.jsx)(f,{})]})})})},g=c(17),_=c.n(g),S=c(21),C=c(30),P=c(22),T=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),c=t[0],a=t[1],s=(Object({NODE_ENV:"production",PUBLIC_URL:"/tastefultravel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_CLIENT_ID:"O3sZHcMqp9FHVgvNfyqMFQ9rHPfdLPdN",REACT_APP_AUTH0_DOMAIN:"automationio.au.auth0.com"}).REACT_APP_SERVER_URL,Object(o.b)().getAccessTokenSilently,function(){var e=Object(S.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(P),a(P)}catch(t){a(t.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:"View My Orders"}),c.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["Order Number : ",e.OrderNumber," "]}),Object(r.jsxs)("p",{children:[" Restaurant ",e.Restaurant,"!"]}),Object(r.jsxs)("p",{children:[" Order Date :",e.Date,"!"]}),Object(r.jsxs)("p",{children:[" Order Status :",e.OrderStatus,"!"]}),Object(r.jsx)("hr",{})]})}))]})},A=function(){return Object(r.jsx)(n.Fragment,{children:Object(r.jsx)(b,{})})},y=function(){var e=Object(o.b)().user,t=e.name,c=e.picture,n=e.email;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(r.jsx)("div",{className:"col-md-2 mb-3",children:Object(r.jsx)("img",{src:c,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(r.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{className:"lead text-muted",children:n})]})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("pre",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(e,null,2)})})]})},D=c(32),E=c(29),k=function(e){var t=e.component,c=Object(E.a)(e,["component"]);return Object(r.jsx)(i.a,Object(D.a)({component:Object(o.c)(t,{onRedirecting:function(){return Object(r.jsx)(m,{})}})},c))},R=(c(25),c(50),function(){return Object(o.b)().isLoading?Object(r.jsx)(m,{}):Object(r.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(r.jsx)(N,{}),Object(r.jsx)("div",{className:"container flex-grow-1",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/home",exact:!0,component:A}),Object(r.jsx)(k,{path:"/profile",component:y}),Object(r.jsx)(k,{path:"/external-api",component:T})]})}),Object(r.jsx)(d,{})]})}),H=function(e){var t=e.children,c=Object(i.f)(),n=Object({NODE_ENV:"production",PUBLIC_URL:"/tastefultravel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_AUTH0_CLIENT_ID:"O3sZHcMqp9FHVgvNfyqMFQ9rHPfdLPdN",REACT_APP_AUTH0_DOMAIN:"automationio.au.auth0.com"}).REACT_APP_AUTH0_AUDIENCE;return Object(r.jsx)(o.a,{domain:"automationio.au.auth0.com",clientId:"O3sZHcMqp9FHVgvNfyqMFQ9rHPfdLPdN",redirectUri:window.location.origin,onRedirectCallback:function(e){c.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:n,children:t})};c(51);s.a.render(Object(r.jsx)(O.a,{children:Object(r.jsx)(H,{children:Object(r.jsx)(R,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.36782cc5.chunk.js.map