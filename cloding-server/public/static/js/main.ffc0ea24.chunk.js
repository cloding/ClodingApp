(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(66)},37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),u=n.n(l),s=(n(37),n(3)),o=n(7),c=n(10),i=n(8),m=n(11),h=(n(38),n(13)),g=n(28),p=n(29),d=n.n(p),f=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n,a,r,l,u,s){return t.service.post("/signup",{username:e,password:n,mail:a,country:r,region:l,city:u,direction:s}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,n){return console.log(e,n),t.service.post("/login",{username:e,password:n}).then(function(e){console.log("hola")})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},this.service=d.a.create({baseURL:"https://cloding-app.herokuapp.com/api",withCredentials:!0})},b=n(9),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.user.username,a=n.state.user.password,r=n.state.user.mail,l=n.state.user.country,u=n.state.user.region,s=n.state.user.city,o=n.state.user.direction;n.service.signup(t,a,r,l,u,s,o).then(function(e){console.log(e),n.setState({username:"",password:"",mail:"",country:"",region:"",city:"",direction:""})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(g.a)({},n.state.user,Object(h.a)({},a,r))})},n.state={user:{username:"",password:"",mail:"",country:"",region:"",city:"",direction:""}},n.service=new f,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"mail",value:this.state.mail,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Coutry:"),r.a.createElement("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Region:"),r.a.createElement("input",{type:"text",name:"region",value:this.state.region,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"City:"),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"text",name:"direction",value:this.state.direction,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(b.b,{to:"/login"}," Login")))}}]),t}(a.Component),v=n(12),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({username:"",password:"",logged:!0},function(){return n.props.setUser(e)})}).catch(function(e){console.log(e),n.setState({error:e.response.data.message})})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.state={username:"",password:"",logged:!1,error:""},n.service=new f,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.logged?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(b.b,{to:"/signup"}," Signup")))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,{to:"/login"},"Login"),r.a.createElement(b.b,{to:"/signup"},"Sign up"),r.a.createElement("h1",null,"Home"))}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Private page"))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).fetchUser=function(){n.service.loggedin().then(function(e){console.log(e),n.setState({loggedInUser:e})}).catch(function(e){return n.setState({loggedInUser:!1})})},n.setTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new f,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"DioCane"),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/profile",component:C}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:j}),">",r.a.createElement(v.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(E,{setUser:e.setTheUser,userInSession:e.state.loggedInUser})}}),r.a.createElement(v.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(y,{setUser:e.setTheUser,userInSession:e.state.loggedInUser})}})))}}]),t}(a.Component);u.a.render(r.a.createElement(b.a,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ffc0ea24.chunk.js.map