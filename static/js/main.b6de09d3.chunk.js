(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),o=a(6),c=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:null===t||void 0===t?void 0:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t}));function f(e){return l.find((function(t){return t.name===e}))}var p=function(){var e=Object(c.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)("Choose a user"),o=Object(s.a)(i,2),d=o[0],u=o[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),p=b[0],v=b[1],x=Object(c.useState)(!1),S=Object(s.a)(x,2),y=S[0],N=S[1],C=Object(c.useState)(!1),I=Object(s.a)(C,2),g=I[0],_=I[1],k=Object(c.useState)(!1),D=Object(s.a)(k,2),T=D[0],w=D[1],M=Object(c.useState)(!1),B=Object(s.a)(M,2),L=B[0],P=B[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),function(){if(w(!y),P(!g),y&&g){var e,t={id:Math.max.apply(Math,Object(r.a)(O.map((function(e){return e.id}))))+1,userId:null===(e=f(d))||void 0===e?void 0:e.id,title:p,completed:!1,user:f(d)};O.push(t),n(O),v(""),u("Choose a user"),N(!1),_(!1),w(!1),P(!1)}}()},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",placeholder:"Enter a title",value:p,onChange:function(e){v(e.target.value),N(!0),w(!1)}}),T&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"title",value:d,onChange:function(e){u(e.target.value),_(!0),P(!1)},children:[Object(m.jsx)("option",{value:"",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),L&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6de09d3.chunk.js.map