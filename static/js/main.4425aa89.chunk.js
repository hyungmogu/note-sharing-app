(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},40:function(e,t){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),o=(a(32),a(8)),i=a(13),s=a(3),m=a(4),u=a(6),p=a(5),h=a(7),b=a(15),E=a(16),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.pathname.match(/\/login/)||e.pathname.match(/\/signup/)?null:c.a.createElement("header",{className:"header--navigation-primary"},c.a.createElement("nav",{className:"nav--type-desktop"},c.a.createElement("section",null,c.a.createElement("button",{className:"button button--type-add"},c.a.createElement(b.a,{icon:E.c}))),c.a.createElement("section",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/physics"},"Physics")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/social_studies"},"Social Studies")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/biology"},"Biology")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/notes/english"},"English")),c.a.createElement("li",null,c.a.createElement("form",{className:"form--type-header"},c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("button",{className:"button button--type-check",type:"submit"},c.a.createElement(b.a,{icon:E.b})),c.a.createElement("button",{className:"button button--type-cancel"},c.a.createElement(b.a,{icon:E.d}))))))))}}]),t}(n.Component),d=Object(i.g)(y),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.pathname.match(/\/login/)||e.pathname.match(/\/signup/)?null:c.a.createElement("header",{className:"header--navigation-mobile"},c.a.createElement("button",{className:"button button--type-menu"},c.a.createElement(b.a,{icon:E.a})),c.a.createElement("section",null,c.a.createElement("strong",null,"Note Sharing Application")))}}]),t}(n.Component),f=Object(i.g)(g),j=a(14),O=(a(40),function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(i.b,Object.assign({},a,{render:function(e){return c.a.createElement(t,e)}}))}),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"div--type-imageFile"},c.a.createElement("img",{src:this.props.url}),c.a.createElement("section",null,c.a.createElement("span",null,this.props.name)))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={items:[{pk:1,name:"Page 1",url:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",url:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",url:"https://via.placeholder.com/200"}]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-directory"},c.a.createElement("main",{className:"main--type-content"},c.a.createElement("section",{className:"section--items"},this.state.items.map((function(e){var t=e.pk,a=Object(j.a)(e,["pk"]);return c.a.createElement(v,Object.assign({key:t},a))})))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={items:[{pk:1,name:"Page 1",url:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",url:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",url:"https://via.placeholder.com/200"}]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-home"},c.a.createElement("main",{className:"main--type-content"},c.a.createElement("h3",null,"Recently Added Notes"),c.a.createElement("section",{className:"section--items"},this.state.items.map((function(e){var t=e.pk,a=Object(j.a)(e,["pk"]);return c.a.createElement(v,Object.assign({key:t},a))})))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(){a.props.history.push("/home")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-loginSignup"},c.a.createElement("form",{className:"form--type-loginSignup",onSubmit:this.handleSubmit},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("button",{className:"button button--type-primary",type:"submit"},"Login"),c.a.createElement(o.b,{to:"/signup",className:"button button--type-secondary"},"Sign up")))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section--screen section--screen-loginSignup"},c.a.createElement("form",{className:"form--type-loginSignup"},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("input",{type:"password",placeholder:"Password Confirm"}),c.a.createElement("button",{className:"button button--type-primary",type:"submit"},"Login"),c.a.createElement(o.b,{exact:!0,to:"/login",className:"button button--type-secondary"},"Back")))}}]),t}(n.Component);a(41);var P=function(){return c.a.createElement(o.a,{basename:"note-sharing-app"},c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(d,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/login",component:w}),c.a.createElement(i.b,{exact:!0,path:"/signup",component:S}),c.a.createElement(O,{exact:!0,path:"/home",component:k}),c.a.createElement(O,{path:"/notes/:note",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4425aa89.chunk.js.map