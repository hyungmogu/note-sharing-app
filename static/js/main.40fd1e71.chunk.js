(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},40:function(e,t){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),o=(a(32),a(8)),i=a(15),s=a(3),m=a(4),u=a(6),p=a(5),b=a(7),h=a(9),E=a(10),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.pathname.match(/\/login/)||e.pathname.match(/\/signup/)?null:c.a.createElement("header",{className:"header--navigation-primary"},c.a.createElement("nav",{className:"nav--type-desktop"},c.a.createElement("section",null,c.a.createElement("button",{className:"button button--type-add"},c.a.createElement(h.a,{icon:E.f}))),c.a.createElement("section",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/physics"},"Physics")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/social_studies"},"Social Studies")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/biology"},"Biology")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/english"},"English")),c.a.createElement("li",null,c.a.createElement("form",{className:"form--type-header"},c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("button",{className:"button button--type-check",type:"submit"},c.a.createElement(h.a,{icon:E.b})),c.a.createElement("button",{className:"button button--type-cancel"},c.a.createElement(h.a,{icon:E.g}))))))))}}]),t}(n.Component),y=Object(i.g)(d),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.pathname.match(/\/login/)||e.pathname.match(/\/signup/)?null:c.a.createElement("header",{className:"header--navigation-mobile"},c.a.createElement("button",{className:"button button--type-menu"},c.a.createElement(h.a,{icon:E.a})),c.a.createElement("section",null,c.a.createElement("strong",null,"Note Sharing Application")))}}]),t}(n.Component),O=Object(i.g)(j),g=a(16),f=(a(40),function(e){var t=e.component,a=Object(g.a)(e,["component"]);return c.a.createElement(i.b,Object.assign({},a,{render:function(e){return c.a.createElement(t,e)}}))}),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"noteFolder"},c.a.createElement("section",{class:"icon"},c.a.createElement(h.a,{icon:E.e})),c.a.createElement("section",null,c.a.createElement("span",null,this.props.name)))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"secondaryHeader"},c.a.createElement("h3",null,"Physics"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{className:"button button--type-uploadFile"},c.a.createElement(h.a,{icon:E.c}),"Download File")),c.a.createElement("li",null,c.a.createElement("button",{className:"button button--type-uploadFile"},c.a.createElement(h.a,{icon:E.d}),"Upload File")),c.a.createElement("li",null,c.a.createElement("button",{className:"button button--type-addUser"},c.a.createElement(h.a,{icon:E.i}),"Add User")),c.a.createElement("li",null,c.a.createElement("button",{className:"button button--type-user"},c.a.createElement(h.a,{icon:E.h})))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={items:[{pk:1,name:"Page 1",url:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",url:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",url:"https://via.placeholder.com/200"}]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-directory"},c.a.createElement(N,null),c.a.createElement("main",{className:"main--type-content"},c.a.createElement("section",{className:"section--items"},this.state.items.map((function(e){var t=e.pk,a=Object(g.a)(e,["pk"]);return c.a.createElement(v,Object.assign({key:t},a))})))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"noteImage"},c.a.createElement("img",{src:this.props.url}),c.a.createElement("section",null,c.a.createElement("span",null,this.props.name)))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={items:[{pk:1,name:"Page 1",url:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",url:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",url:"https://via.placeholder.com/200"}]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-home"},c.a.createElement("main",{className:"main--type-content"},c.a.createElement("h3",null,"Recently Added Notes"),c.a.createElement("section",{className:"section--items"},this.state.items.map((function(e){var t=e.pk,a=Object(g.a)(e,["pk"]);return c.a.createElement(w,Object.assign({key:t},a))})))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(){a.props.history.push("/home")},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-loginSignup"},c.a.createElement("form",{className:"form--type-loginSignup",onSubmit:this.handleSubmit},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("button",{className:"button button--type-primary",type:"submit"},"Login"),c.a.createElement(o.b,{to:"/signup",className:"button button--type-secondary"},"Sign up")))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-loginSignup"},c.a.createElement("form",{className:"form--type-loginSignup"},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("input",{type:"password",placeholder:"Password Confirm"}),c.a.createElement("button",{className:"button button--type-primary",type:"submit"},"Login"),c.a.createElement(o.b,{exact:!0,to:"/login",className:"button button--type-secondary"},"Back")))}}]),t}(n.Component);a(41);var A=function(){return c.a.createElement(o.a,{basename:"note-sharing-app"},c.a.createElement("div",{className:"App"},c.a.createElement(O,null),c.a.createElement(y,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/login",component:P}),c.a.createElement(i.b,{exact:!0,path:"/signup",component:C}),c.a.createElement(f,{exact:!0,path:"/home",component:S}),c.a.createElement(f,{path:"/notes/:note",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.40fd1e71.chunk.js.map