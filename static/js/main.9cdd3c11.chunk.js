(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},41:function(e,t){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),o=(a(33),a(27)),s=a(2),i=a(3),m=a(5),u=a(4),p=a(6),h=a(7),b=a(12),d=c.a.createContext(),E=d.Provider,f=d.Consumer,g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.b,{to:"/notes/".concat(this.props.path),className:"noteImage"},c.a.createElement("img",{src:this.props.image}),c.a.createElement("section",null,c.a.createElement("span",null,this.props.name)))}}]),t}(n.Component),j=Object(b.g)(g),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location,t=this.props.appContext.pages.items;if(e.pathname.match(/\/login/)||e.pathname.match(/\/signup/))return null;var a=Object(b.f)(this.props.history.location.pathname,{path:"/notes/:note/:folder/:page/",exact:!0,strict:!1});if(!a||!a.params||!a.params.note||!a.params.folder||!a.params.page)return null;var n=a.params.note,r=a.params.folder;return c.a.createElement("header",{class:"noteViewHeader"},t.map((function(e){return c.a.createElement(j,Object.assign({key:e.pk,note:n,folder:r},e))})))}}]),t}(n.Component),y=Object(b.g)(O),v=c.a.forwardRef((function(e,t){return c.a.createElement(f,null,(function(a){return c.a.createElement(y,Object.assign({},e,{appContext:a,ref:t}))}))})),N=a(9),k=a(10),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={addNew:!1},a.handleAddNewTopic=function(){a.setState((function(e){return{addNew:!e.addNew}}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location;if(e.pathname.match(/\/login/)||e.pathname.match(/\/signup/))return null;var t=Object(b.f)(this.props.history.location.pathname,{path:"/notes/:note/:folder/:page/",exact:!0,strict:!1});return t&&t.params&&t.params.note&&t.params.folder&&t.params.page?null:c.a.createElement("header",{className:"primaryHeader"},c.a.createElement("nav",null,c.a.createElement("section",null,c.a.createElement("button",{onClick:this.handleAddNewTopic,className:"button button--add"},c.a.createElement(N.a,{icon:k.f}))),c.a.createElement("section",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(h.b,{to:"/notes/physics"},"Physics")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/notes/social_studies"},"Social Studies")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/notes/biology"},"Biology")),c.a.createElement("li",null,c.a.createElement(h.b,{to:"/notes/english"},"English")),this.state.addNew?c.a.createElement("li",null,c.a.createElement("form",{className:"form--header"},c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("button",{className:"button button--check",type:"submit"},c.a.createElement(N.a,{icon:k.b})),c.a.createElement("button",{className:"button button--cancel"},c.a.createElement(N.a,{icon:k.g})))):""))))}}]),t}(n.Component),w=Object(b.g)(C),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).navRef=c.a.createRef(),a.state={addNew:!1},a.handleAddNewTopic=function(){a.setState((function(e){return{addNew:!e.addNew}}))},a.handleMobileMenuClick=function(){a.navRef.current.classList.contains("open")?a.navRef.current.classList.remove("open"):a.navRef.current.classList.add("open")},a.handleCloseMenu=function(){a.navRef.current.classList.remove("open")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.pathname.match(/\/login/)||e.pathname.match(/\/signup/)?null:c.a.createElement("header",{className:"primaryHeaderMobile"},c.a.createElement("section",{className:"primaryHeaderMobile--header"},c.a.createElement("button",{className:"button button--menu",onClick:this.handleMobileMenuClick},c.a.createElement(N.a,{icon:k.a})),c.a.createElement("section",{className:"primaryHeaderMobile--title"},c.a.createElement(h.b,{onClick:this.handleCloseMenu,exact:!0,to:"/home"},c.a.createElement("strong",null,"Note Sharing Application")))),c.a.createElement("nav",{ref:this.navRef,className:"primaryHeaderMobile--navigation"},c.a.createElement("section",null,c.a.createElement("button",{onClick:this.handleAddNewTopic,className:"button button--add"},c.a.createElement(N.a,{icon:k.f}))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(h.b,{onClick:this.handleCloseMenu,to:"/notes/physics"},"Physics")),c.a.createElement("li",null,c.a.createElement(h.b,{onClick:this.handleCloseMenu,to:"/notes/social_studies"},"Social Studies")),c.a.createElement("li",null,c.a.createElement(h.b,{onClick:this.handleCloseMenu,to:"/notes/biology"},"Biology")),c.a.createElement("li",null,c.a.createElement(h.b,{onClick:this.handleCloseMenu,to:"/notes/english"},"English")),this.state.addNew?c.a.createElement("li",null,c.a.createElement("form",{className:"form--header"},c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("button",{className:"button button--check",type:"submit"},c.a.createElement(N.a,{icon:k.b})),c.a.createElement("button",{className:"button button--cancel"},c.a.createElement(N.a,{icon:k.g})))):"")))}}]),t}(n.Component),P=Object(b.g)(x),M=a(17),S=(a(41),function(e){var t=e.component,a=Object(M.a)(e,["component"]);return c.a.createElement(b.b,Object.assign({},a,{render:function(e){return c.a.createElement(t,e)}}))}),A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"userMenu"},c.a.createElement("button",{className:"button button--user"},c.a.createElement(N.a,{icon:k.h})),c.a.createElement("nav",{className:"userMenu--navigation"},c.a.createElement("ul",null,c.a.createElement("li",{className:"userMenu--item"},c.a.createElement(h.b,{to:"/logout"},"Logout"))))))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"secondaryHeader"},c.a.createElement("h3",null,"Physics"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{className:"button button--uploadFile"},c.a.createElement(N.a,{icon:k.c}),"Download File")),c.a.createElement("li",null,c.a.createElement("button",{className:"button button--uploadFile"},c.a.createElement(N.a,{icon:k.d}),"Upload File")),c.a.createElement("li",null,c.a.createElement("button",{className:"button button--addUser"},c.a.createElement(N.a,{icon:k.i}),"Add User")),c.a.createElement("li",null,c.a.createElement(A,null))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handlePrev=function(){var e=a.props.appContext.pages.items.findIndex((function(e){return e.path===a.props.path}));a.props.appContext.actions.updateView(e+1)},a.handleNext=function(){var e=a.props.appContext.pages.items.findIndex((function(e){return e.path===a.props.path}));a.props.appContext.actions.updateView(e-1)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"noteView"},c.a.createElement("img",{src:"https://via.placeholder.com/750x1000"}),c.a.createElement("section",{className:"navigation"},c.a.createElement("button",{onClick:this.handlePrev},"< Back"),c.a.createElement("span",null,"Page 1"),c.a.createElement("button",{onClick:this.handleNext},"Next >")))}}]),t}(n.Component),H=c.a.forwardRef((function(e,t){return c.a.createElement(f,null,(function(a){return c.a.createElement(L,Object.assign({},e,{appContext:a,ref:t}))}))})),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"screen screen--view"},c.a.createElement(R,null),c.a.createElement("main",{className:"main"},c.a.createElement("section",null,c.a.createElement(H,this.props))))}}]),t}(n.Component),B=Object(b.g)(I),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.b,{to:"/notes/".concat(this.props.path),className:"noteFolder"},c.a.createElement("section",{className:"icon"},c.a.createElement(N.a,{icon:k.e})),c.a.createElement("section",null,c.a.createElement("span",null,this.props.name)))}}]),t}(n.Component),T=Object(b.g)(F),V=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.note,t=!this.props.match.params.folder,a=this.props.appContext.folders.items,n=this.props.appContext.pages.items;return c.a.createElement("section",{className:"screen"},c.a.createElement(R,null),c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"items"},t?a.map((function(t){return c.a.createElement(T,Object.assign({key:t.pk,note:e},t))})):n.map((function(e){return c.a.createElement(j,Object.assign({key:e.pk},e))})))))}}]),t}(n.Component),U=Object(b.g)(V),J=c.a.forwardRef((function(e,t){return c.a.createElement(f,null,(function(a){return c.a.createElement(U,Object.assign({},e,{appContext:a,ref:t}))}))})),W=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.appContext.recentItems;return c.a.createElement("section",{className:"screen screen--home"},c.a.createElement("main",{className:"main"},c.a.createElement("h3",null,"Recently Added Notes"),c.a.createElement("section",{className:"items"},e.map((function(e){var t=e.pk,a=Object(M.a)(e,["pk"]);return c.a.createElement(j,Object.assign({key:t},a))})))))}}]),t}(n.Component),_=c.a.forwardRef((function(e,t){return c.a.createElement(f,null,(function(a){return c.a.createElement(W,Object.assign({},e,{appContext:a,ref:t}))}))})),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(){a.props.history.push("/home")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"screen screen--loginSignup"},c.a.createElement("form",{className:"form--loginSignup",onSubmit:this.handleSubmit},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("button",{className:"button button--primary",type:"submit"},"Login"),c.a.createElement(h.b,{to:"/signup",className:"button button--secondary"},"Sign up")))}}]),t}(n.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"screen screen--loginSignup"},c.a.createElement("form",{className:"form--loginSignup"},c.a.createElement("h3",null,"Note Sharing Application"),c.a.createElement("input",{type:"text",placeholder:"Name"}),c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("input",{type:"password",placeholder:"Password"}),c.a.createElement("input",{type:"password",placeholder:"Password Confirm"}),c.a.createElement("button",{className:"button button--primary",type:"submit"},"Login"),c.a.createElement(h.b,{exact:!0,to:"/login",className:"button button--secondary"},"Back")))}}]),t}(n.Component),q=(a(42),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:{name:null,email:null,authToken:null},recentItems:[{pk:1,name:"Page 1",path:"physics/lecture1/page1",image:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",path:"physics/lecture1/page2",image:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",path:"physics/lecture1/page3",image:"https://via.placeholder.com/200"}],notes:{slug:null,imported:!1,items:[]},folders:{info:{slug:"physics",name:"Physics",path:"physics/"},items:[{pk:1,path:"physics/lecture1",name:"Lecture 1"},{pk:2,path:"physics/lecture2",name:"Lecture 2"},{pk:3,path:"physics/lecture3",name:"Lecture 3"}]},pages:{info:{slug:"lecture1",name:"Lecture 1",path:"physics/lecture1/"},currentIndex:null,items:[{pk:1,name:"Page 1",path:"physics/lecture1/page1",image:"https://via.placeholder.com/200"},{pk:2,name:"Page 2",path:"physics/lecture1/page2",image:"https://via.placeholder.com/200"},{pk:3,name:"Page 3",path:"physics/lecture1/page3",image:"https://via.placeholder.com/200"},{pk:4,name:"Page 4",path:"physics/lecture1/page4",image:"https://via.placeholder.com/200"},{pk:5,name:"Page 5",path:"physics/lecture1/page5",image:"https://via.placeholder.com/200"}]}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(E,{value:Object(o.a)({},this.state)},c.a.createElement(h.a,{basename:"note-sharing-app"},c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(P,null),c.a.createElement(w,null),c.a.createElement(b.d,null,c.a.createElement(b.b,{path:"/login",component:D}),c.a.createElement(b.b,{path:"/signup",component:$}),c.a.createElement(S,{path:"/home",component:_}),c.a.createElement(S,{path:"/notes/:note/:folder/:page",component:B}),c.a.createElement(S,{path:"/notes/:note/:folder",component:J}),c.a.createElement(S,{path:"/notes/:note",component:J})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9cdd3c11.chunk.js.map