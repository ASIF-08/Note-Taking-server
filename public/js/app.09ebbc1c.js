(function(){"use strict";var t={2775:function(t,e,a){var r=a(6369),o=a(3822),n=a(2631),i=a(8323),s=a.n(i),l=a(6681),c=a(9425);r["default"].use(o.ZP),r["default"].use(n.ZP),r["default"].use(l.XG7),r["default"].use(c.A7),r["default"].use(s());var u=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},m=[],d=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("b-navbar",{attrs:{type:"dark",variant:"dark"}},[e("b-navbar-nav",[e("b-nav-item",[e("b-icon-stack",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}]})],1),e("b-navbar-brand",{staticClass:"px-3",attrs:{to:"/"}},[t._v("NavBar")]),e("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("About")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Contact")])],1),e("b-navbar-nav",{staticClass:"ms-auto px-2"},[e("b-form-input",{staticClass:"my-1 mx-2",staticStyle:{width:"35em",height:"2em"},attrs:{placeholder:"Search"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),e("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],attrs:{to:"login"}},[t._v("Login")]),e("b-nav-item",{attrs:{to:"SignUp"}},[t._v("SignUp")])],1)],1)],1),e("div",[e("b-sidebar",{attrs:{id:"sidebar-backdrop","backdrop-variant":t.variant,backdrop:"",shadow:"","no-header":"","bg-variant":"dark","text-variant":"light"}},[e("div",[e("b-avatar",{staticStyle:{width:"100px",height:"100px","margin-left":"100px"}}),e("nav",{staticClass:"mb-3"},[e("b-nav",{attrs:{vertical:""}},[e("b-nav-item",{attrs:{active:"",to:"/"}},[t._v("Dashboard")]),e("b-nav-item",{attrs:{to:"ListAll"}},[t._v("View All")]),e("b-nav-item",{attrs:{href:"#link-2"}},[t._v("Favourite")])],1)],1)],1)])],1)])},p=[],f={name:"NavBar",methods:{search(){console.log(this.query),this.query=""}}},v=f,b=a(1001),h=(0,b.Z)(v,d,p,!1,null,null,null),g=h.exports,y={name:"App",components:{NavBar:g}},w=y,x=(0,b.Z)(w,u,m,!1,null,null,null),k=x.exports,_=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container pt-5"},[e("b-row",{staticClass:"py-5"},[e("b-col",{attrs:{cols:"3"}},[e("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",header:"Total Notes",align:"center"}},[e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v("5")]),e("b-icon",{attrs:{icon:"hand-thumbs-up-fill",scale:"2.5",title:"Totals"}})],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",header:"Pending Notes",align:"center"}},[e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v("12")]),e("b-icon",{attrs:{icon:"pen",scale:"2.5",animation:"throb",title:"Pending"}},[t._v("sdda")])],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",header:"Completed Notes",align:"center",cols:"5"}},[e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v("8")]),e("b-icon",{attrs:{icon:"list-check",scale:"2.5",animation:"pulse",title:"Completed"}})],1)],1),e("b-col",{attrs:{cols:"3"}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"ListAll"}},[e("b-card",{attrs:{path:"/detailedview","bg-variant":"dark","text-variant":"white",header:"View All","font-size":"80px",align:"center"}},[e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v("5")]),e("b-icon",{attrs:{to:"detailedView",icon:"card-list",scale:"2.5"}})],1)],1)],1)],1),e("div",{staticClass:"pt-5 mt-5"},[e("b-progress",{staticStyle:{width:"100%","border-style":"solid",color:"gray"},attrs:{max:t.max,height:"3rem",variant:"secondary"}},[e("b-progress-bar",{attrs:{value:t.value}},[e("span",[t._v("Progress: "),e("strong",[t._v(t._s(t.value.toFixed(2))+" / "+t._s(t.max))])])])],1)],1),e("div",{staticClass:"pt-5"},[e("b-button",{staticClass:"h1",staticStyle:{width:"100%",height:"6rem",text:"100px","font-size":"45px"},attrs:{block:"",variant:"dark",to:"AddNote"}},[t._v("Add Notes")])],1)],1)])},S=[],C={name:"HomePage",data(){return{value:25,max:50}}},N=C,I=(0,b.Z)(N,_,S,!1,null,null,null),P=I.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5"},[e("div",{staticClass:"container pt-5"},[e("h1",{attrs:{align:"center"}},[t._v("Sign In")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"}),e("div",{staticClass:"col-md-6"},[t.show?e("form",{attrs:{name:"from"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:t.onReset}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter Your E-mail ID",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter Your Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("div",{staticClass:"pt-2"},[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1):t._e()]),e("div",{staticClass:"col-md-3"})])])])},E=[],T=(a(7658),{name:"LogIn",data(){return{form:{email:"",password:""},show:!0}},methods:{onReset(t){t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((()=>{this.show=!0}))},async onSubmit(){this.$store.dispatch("login",this.form).then((()=>this.$router.push({name:"home"}))).catch((t=>{console.log("error --\x3e ",t)}))},shouldAppendValidClass(t){return!t.$invalid&&t.$model&&t.$dirty},shouldAppendErrorClass(t){return t.$error}}}),O=T,$=(0,b.Z)(O,A,E,!1,null,"099519c2",null),Z=$.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5"},[e("div",{staticClass:"container pt-5"},[e("h1",{attrs:{align:"center"}},[t._v("Sign Up")]),t.show?e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{id:"input-group-1",label:"First Name:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"firstname",placeholder:"Enter Your First Name:",required:""},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})],1)],1),e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Last Name:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"elastname",placeholder:"Enter Your Last Name:",required:""},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1)],1)],1),e("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter Your E-mail ID",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter Your Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("div",{staticClass:"pt-2"},[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Sign Up")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1):t._e()],1)])},L=[],D={name:"SignUp",data(){return{form:{email:"",password:""},show:!0}},methods:{onSubmit(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset(t){t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((()=>{this.show=!0}))}}},R=D,j=(0,b.Z)(R,q,L,!1,null,"31a91fee",null),z=j.exports,U=function(){var t=this,e=t._self._c;return e("h1",[t._v("lol")])},V=[],Y={name:"DetailedView"},F=Y,B=(0,b.Z)(F,U,V,!1,null,null,null),G=B.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("b-row",t._l(t.items,(function(a){return e("b-col",{key:a.title,attrs:{align:"center",cols:"4"}},[e("b-card",{staticClass:"my-4",staticStyle:{"max-width":"20rem"},attrs:{title:a.title,"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"},on:{click:function(e){return t.foo(a.title)}}},[e("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),e("b-row",{attrs:{align:"center"}},[e("b-col",[e("b-icon",{attrs:{to:"detailedview",icon:"star",scale:"1.25"}})],1),e("b-col",[e("b-icon",{attrs:{to:"detailedview",icon:"pencil",scale:"1.25"}})],1),e("b-col",[e("b-icon",{attrs:{icon:"trash-fill",scale:"1.25"},on:{click:t.remove}})],1)],1)],1)],1)})),1)],1)},J=[],M={name:"ListAll",data(){return{items:[{srno:1,title:"Dickerson"},{srno:2,title:"Larsen"},{srno:3,title:"Geneva"},{srno:4,title:"Jami"},{srno:1,title:"Dickerson"},{srno:2,title:"Larsen"},{srno:3,title:"Geneva"},{srno:4,title:"Jami"}]}},methods:{foo(t){console.log(t)}}},W=M,X=(0,b.Z)(W,H,J,!1,null,null,null),K=X.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container p-5"},[e("b-form-group",{staticClass:"p-1",staticStyle:{"font-family":"Times","font-size":"30px"},attrs:{label:"Title:","label-for":"input-formatter"}},[e("b-form-input",{staticStyle:{"font-family":"Times New Roman"},attrs:{id:"input-formatter",placeholder:"Enter your Title",formatter:t.formatter,type:"text","background-color:aqua":""},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1),e("ckeditor",{staticStyle:{"font-family":"Times New Roman"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("b-btn",{attrs:{variant:"dark"},on:{click:function(e){return t.foo()}}},[t._v("Submit")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)},tt=[],et={name:"AddNote",data(){return{content:""}},methods:{foo(){console.log(this.content)}}},at=et,rt=(0,b.Z)(at,Q,tt,!1,null,"afd4b192",null),ot=rt.exports;const nt=new n.ZP({mode:"history",routes:[{name:"HomePage",path:"/",component:P},{name:"LogIn",path:"/login",component:Z},{name:"SignUp",path:"/signup",component:z},{name:"DetailedView",path:"/detailedview",component:G},{name:"LsitAll",path:"/listall",component:K},{name:"AddNote",path:"/addnote",component:ot}]});var it=nt,st=a(6943);const lt=async t=>{console.log("hello",t);const e=await st.Z.post("http://localhost:3000/api/auth/login",t);return console.log("response --\x3e ",e.data),e.data.data},ct=async t=>{console.log("hello",t);const e=await st.Z.post("http://localhost:3000/api/auth/register",t);return console.log("response --\x3e ",e.data),e.data.data};var ut={login:lt,register:ct};const mt="token",dt="name",pt="email",ft="role",vt={state:{name:localStorage.getItem(dt)||"",token:localStorage.getItem(mt)||"",email:localStorage.getItem(pt)||"",role:localStorage.getItem(ft)||""},getters:{isAuthenticated(t){return!!t.token},isAdmin(t){return"admin"===t.role}},mutations:{setToken(t,e){t.token=e},setName(t,e){t.name=e},setEmail(t,e){t.email=e},setRole(t,e){t.role=e}},actions:{async login({commit:t},e){return console.log("store --\x3e "),ut.login(e).then((e=>{console.log("store --\x3e ",e);const{token:a,email:r,role:o,name:n}=e;return localStorage.setItem(dt,n),localStorage.setItem(mt,a),localStorage.setItem(pt,r),localStorage.setItem(ft,o),t("setToken",a),t("setName",n),t("setEmail",r),t("setRole",o),r}))},logout({commit:t}){return localStorage.removeItem(mt),localStorage.removeItem(dt),localStorage.removeItem(pt),localStorage.removeItem(ft),t("setToken",""),t("setName",""),t("setEmail",""),t("setRole",""),Promise.resolve()}}};var bt=vt;const ht=new o.ZP.Store({modules:{auth:bt}});var gt=ht;a(7024);r["default"].config.productionTip=!1,new r["default"]({store:gt,router:it,render:t=>t(k)}).$mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],n=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(e&&e(r);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2775)}));r=a.O(r)})();
//# sourceMappingURL=app.09ebbc1c.js.map