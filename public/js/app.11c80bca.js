(function(){"use strict";var t={9101:function(t,e,a){var s=a(6369),o=a(3822),r=a(2631),i=a(8323),n=a.n(i),l=a(3811),c=a(9425);s["default"].use(o.ZP),s["default"].use(r.ZP),s["default"].use(l.XG7),s["default"].use(c.A7),s["default"].use(n());var d=a(6943),u={BASE_URL:"https://note-taking-app-g36h.onrender.com/"};const p=async t=>{const e=await d.Z.post(`${u.BASE_URL}/api/auth/login`,t);return e.data.data},m=async t=>{const e=await d.Z.post(`${u.BASE_URL}/api/auth/register`,t);return e.data.data};var v={login:p,register:m};const h="token",f="name",b="email",g="role",y={state:{name:localStorage.getItem(f)||"",token:localStorage.getItem(h)||"",email:localStorage.getItem(b)||"",role:localStorage.getItem(g)||""},getters:{isAuthenticated(t){return!!t.token},isAdmin(t){return"admin"===t.role},token(t){return t.token}},mutations:{setToken(t,e){t.token=e},setName(t,e){t.name=e},setEmail(t,e){t.email=e},setRole(t,e){t.role=e}},actions:{async login({commit:t},e){return console.log("store --\x3e "),v.login(e).then((e=>{console.log("store --\x3e ",e);const{token:a,email:s,role:o,name:r}=e;return localStorage.setItem(f,r),localStorage.setItem(h,a),localStorage.setItem(b,s),localStorage.setItem(g,o),t("setToken",a),t("setName",r),t("setEmail",s),t("setRole",o),s}))},logout({commit:t}){return localStorage.removeItem(h),localStorage.removeItem(f),localStorage.removeItem(b),localStorage.removeItem(g),t("setToken",""),t("setName",""),t("setEmail",""),t("setRole",""),Promise.resolve()}}};var _=y;const $=new o.ZP.Store({modules:{auth:_}});var w=$;d.Z.interceptors.request.use((t=>(t.url.includes("notes")&&(t.headers["Authorization"]=w.getters.token),t)),(t=>Promise.reject(t)));var C=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},k=[],S=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("b-navbar",{attrs:{type:"dark",variant:"dark"}},[e("b-navbar-nav",[e("b-nav-item",[e("b-icon-stack",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}]})],1),e("b-navbar-brand",{staticClass:"px-3",attrs:{to:"/"}},[t._v("NavBar")]),e("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("About")]),e("b-nav-item",{attrs:{href:"#"}},[t._v("Contact")])],1),e("b-navbar-nav",{staticClass:"ml-auto px-2"},[t.authenticated?t._e():e("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],attrs:{to:"login"}},[t._v("Login")]),t.authenticated?t._e():e("b-nav-item",{attrs:{to:"SignUp"}},[t._v("SignUp")]),t.authenticated?e("b-nav-item",{on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1),e("div",[e("b-sidebar",{attrs:{id:"sidebar-backdrop","backdrop-variant":"dark",backdrop:"",shadow:"","no-header":"","bg-variant":"dark","text-variant":"light"}},[e("div",[e("div",{staticClass:"d-flex"},[e("b-avatar",{staticClass:"mx-auto",staticStyle:{width:"8em",height:"8em"}})],1),e("nav",{staticClass:"mb-3"},[e("b-nav",{attrs:{vertical:""}},[e("b-nav-item",{attrs:{active:"",to:"/"}},[t._v("Dashboard")]),e("b-nav-item",{attrs:{to:"/listall"}},[t._v("View All")]),e("b-nav-item",{attrs:{to:"/favourite"}},[t._v("Favourite")])],1)],1)])])],1)])},x=[],N=(a(7658),{name:"NavBar",computed:{authenticated(){return this.$store.getters.isAuthenticated}},methods:{logout(){this.$store.dispatch("logout").then((()=>{this.$router.push("/"),this.$root.$bvToast.toast("Logout successful",{title:"Success",autoHideDelay:2e3,variant:"success",appendToast:!0})})).catch((t=>{this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger",appendToast:!0})}))}}}),D=N,T=a(1001),E=(0,T.Z)(D,S,x,!1,null,null,null),A=E.exports,L={name:"App",components:{NavBar:A}},I=L,P=(0,T.Z)(I,C,k,!1,null,null,null),Z=P.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("b-row",{staticClass:"py-5 align-self-stretch"},[e("b-col",{attrs:{cols:"3"}},[e("b-card",{staticClass:"h-100",attrs:{"bg-variant":"dark","text-variant":"white",align:"center"}},[e("b-card-title",[t._v("Total Notes")]),e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v(t._s(t.total))]),e("b-icon",{attrs:{icon:"hand-thumbs-up-fill",scale:"2.5",title:"Totals"}})],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-card",{staticClass:"h-100",attrs:{"bg-variant":"dark","text-variant":"white",align:"center"}},[e("b-card-title",[t._v("Pending Notes")]),e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v(t._s(t.pending))]),e("b-icon",{attrs:{icon:"pen",scale:"2.5",animation:"throb",title:"Pending"}},[t._v("sdda")])],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-card",{staticClass:"h-100",attrs:{"bg-variant":"dark","text-variant":"white",align:"center"}},[e("b-card-title",[t._v("Completed Notes")]),e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v(t._s(t.completed))]),e("b-icon",{attrs:{icon:"list-check",scale:"2.5",animation:"pulse",title:"Completed"}})],1)],1),e("b-col",{attrs:{cols:"3"}},[e("router-link",{staticClass:"decoration-none",attrs:{to:"ListAll"}},[e("b-card",{staticClass:"h-100",attrs:{path:"/detailedview","bg-variant":"dark","text-variant":"white","font-size":"80px",align:"center"}},[e("b-card-title",[t._v("View All")]),e("b-card-text",{staticStyle:{"font-size":"50px"}},[t._v(t._s(t.total))]),e("b-icon",{attrs:{to:"detailedView",icon:"card-list",scale:"2.5"}})],1)],1)],1)],1),e("div",{staticClass:"pt-5 mt-5"},[e("b-progress",{staticStyle:{width:"100%","border-style":"solid",color:"gray"},attrs:{max:"100",height:"3rem",variant:"secondary"}},[0===t.completed?e("span",{staticClass:"m-auto"},[t._v("Progress: "),e("strong",[t._v("0%")])]):e("b-progress-bar",{attrs:{value:t.completed/t.total*100}},[e("span",[t._v("Progress:"),e("strong",[t._v(t._s((t.completed/t.total*100).toFixed(2))+"%")])])])],1)],1),e("div",{staticClass:"pt-5"},[e("b-button",{staticClass:"h1",staticStyle:{width:"100%",height:"6rem",text:"100px","font-size":"45px"},attrs:{block:"",variant:"dark",to:"AddNote"}},[t._v("Add Notes")])],1)],1)])},R=[];const U=async t=>{const e=await d.Z.post(`${u.BASE_URL}/api/notes/createnote`,t);return e.data},B=async()=>{const t=await d.Z.get(`${u.BASE_URL}/api/notes/getnotes`);return t.data},O=async t=>{const e=await d.Z.get(`${u.BASE_URL}/api/notes/getnote/${t}`);return e.data},z=async t=>{await d.Z.patch(`${u.BASE_URL}/api/notes/starnote/${t}`)},j=async()=>{const t=await d.Z.get(`${u.BASE_URL}/api/notes/getstarednotes`);return t.data},Y=async t=>{await d.Z.patch(`${u.BASE_URL}/api/notes/updatenote/${t._id}`,t)},q=async t=>{await d.Z["delete"](`${u.BASE_URL}/api/notes/deletenote/${t}`)};var F={createNote:U,getNotes:B,getNoteById:O,starNote:z,getStaredNotes:j,updateNote:Y,deleteNote:q},V={name:"HomePage",data(){return{total:0,completed:0,pending:0}},watch:{"$store.getters.isAuthenticated":function(t){t||(this.total=0,this.completed=0,this.pending=0)}},async created(){if(this.$store.getters.isAuthenticated){const t=await F.getNotes();this.total=t.data.length,this.completed=t.data.filter((t=>!0===t.completed)).length,this.pending=this.total-this.completed}}},M=V,K=(0,T.Z)(M,H,R,!1,null,null,null),W=K.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5"},[e("div",{staticClass:"container pt-5"},[e("h1",{attrs:{align:"center"}},[t._v("Sign In")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"}),e("div",{staticClass:"col-md-6"},[t.show?e("form",{attrs:{name:"from"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:t.onReset}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter Your E-mail ID",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter Your Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("div",{staticClass:"pt-2"},[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1):t._e()]),e("div",{staticClass:"col-md-3"})])])])},X=[],J={name:"LogIn",data(){return{form:{email:"",password:""},show:!0}},methods:{onReset(t){t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((()=>{this.show=!0}))},async onSubmit(){this.$store.dispatch("login",this.form).then((()=>{this.$router.push("/"),this.$root.$bvToast.toast("Login successful",{title:"Success",autoHideDelay:2e3,variant:"success",appendToast:!0})})).catch((t=>{this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}))},shouldAppendValidClass(t){return!t.$invalid&&t.$model&&t.$dirty},shouldAppendErrorClass(t){return t.$error}}},Q=J,tt=(0,T.Z)(Q,G,X,!1,null,"09f654a9",null),et=tt.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5"},[e("div",{staticClass:"container pt-5"},[e("h1",{attrs:{align:"center"}},[t._v("Sign Up")]),t.show?e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{id:"input-group-1",label:"First Name:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter Your First Name:",required:""},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})],1)],1),e("b-col",{attrs:{cols:"6"}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Last Name:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter Your Last Name:",required:""},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1)],1)],1),e("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter Your E-mail ID",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter Your Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("div",{staticClass:"pt-2"},[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Sign Up")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1):t._e()],1)])},st=[],ot={name:"SignUp",data(){return{form:{firstname:"",lastname:"",email:"",password:""},show:!0}},methods:{async onSubmit(t){try{t.preventDefault(),await v.register(this.form),this.$router.push("/login"),this.$root.$bvToast.toast("Registration successful.",{title:"Success",autoHideDelay:2e3,variant:"success",appendToast:!0})}catch(e){this.$root.$bvToast.toast(e.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger",appendToast:!0})}},onReset(t){t.preventDefault(),this.from.firstname="",this.from.lastname="",this.form.email="",this.form.password="",this.show=!1,this.$nextTick((()=>{this.show=!0}))}}},rt=ot,it=(0,T.Z)(rt,at,st,!1,null,"ae62ccbc",null),nt=it.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-4"},[e("h2",[t._v(t._s(t.noteData.title))]),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex",staticStyle:{opacity:"0.6"}},[t.noteData.completed?e("p",[t._v("Complete")]):e("p",[t._v("Incomplete")]),t.noteData.edited?e("p",{staticClass:"px-2"},[e("i",[t._v("Edited")])]):t._e()]),e("div",{staticClass:"ml-auto",staticStyle:{cursor:"pointer"}},[t.noteData.stared?e("b-icon",{attrs:{icon:"star-fill",scale:"1.5",color:"rgb(255,140,0)"},on:{click:t.starNote}}):e("b-icon",{attrs:{icon:"star",scale:"1.5"},on:{click:t.starNote}}),e("b-icon",{staticClass:"px-5",attrs:{icon:"pencil",scale:"1.5"},on:{click:function(e){return t.$router.push({path:`/updatenote/${this.$route.params.id}`})}}})],1)]),e("p",{domProps:{innerHTML:t._s(t.noteData.body)}})])},ct=[],dt={name:"DetailedView",data(){return{noteData:{title:"",body:"",stared:!1}}},methods:{async starNote(){try{await F.starNote(this.$route.params.id),this.noteData.stared=!this.noteData.stared}catch(t){this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}}},async created(){try{const t=await F.getNoteById(this.$route.params.id);this.noteData=t.data}catch(t){this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}}},ut=dt,pt=(0,T.Z)(ut,lt,ct,!1,null,null,null),mt=pt.exports,vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",[t._v("Your notes")]),e("hr",{staticClass:"m-0"}),0===t.notes.length?e("div",{staticClass:"text-center pt-5"},[e("h4",[t._v("You don't have any note.")])]):t._e(),t._l(t.notes,(function(a,s){return e("b-row",{key:a._id,staticClass:"m-0"},[e("b-col",{staticClass:"h5 my-3",attrs:{align:"center",cols:"1"}},[t._v(t._s(s+1))]),e("b-col",{staticClass:"my-3 pointer-cursor d-flex",attrs:{cols:"7"},on:{click:function(e){return t.$router.push({path:`/note/${a._id}`})}}},[e("p",{staticClass:"h5 m-0"},[t._v(t._s(a.title))]),t._v("    "),a.edited?e("p",{staticClass:"m-0",staticStyle:{opacity:"0.6"}},[t._v("(edited)")]):t._e()]),e("b-col",{staticClass:"my-3",attrs:{align:"center",cols:"1"}},[a.stared?e("b-icon",{staticClass:"pointer-cursor",attrs:{icon:"star-fill",scale:"1.25",color:"rgb(255,140,0)"},on:{click:function(e){return t.starNote(a._id)}}}):e("b-icon",{staticClass:"pointer-cursor",attrs:{icon:"star",scale:"1.25"},on:{click:function(e){return t.starNote(a._id)}}})],1),e("b-col",{staticClass:"my-3",attrs:{align:"center",cols:"1"}},[e("b-icon",{staticClass:"pointer-cursor",attrs:{icon:"pencil",scale:"1.25"},on:{click:function(e){return t.updateNote(a._id)}}})],1),e("b-col",{staticClass:"my-3",attrs:{align:"center",cols:"1"}},[e("b-icon",{staticClass:"pointer-cursor",attrs:{icon:"trash-fill",scale:"1.25"},on:{click:function(e){return t.deleteNote(a._id)}}})],1),e("b-col",{staticClass:"my-3",attrs:{align:"center",cols:"1"}},[a.completed?e("b-icon",{attrs:{icon:"check-circle-fill",color:"green",scale:"1.25"}}):t._e()],1)],1)}))],2)},ht=[],ft={name:"ListAll",data(){return{notes:[]}},methods:{async getNotes(){try{if("ListAll"===this.$route.name){const t=await F.getNotes();this.notes=t.data}else if("FavouriteNotes"===this.$route.name){const t=await F.getStaredNotes();this.notes=t.data}}catch(t){this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}},async starNote(t){try{await F.starNote(t),this.getNotes()}catch(e){this.$root.$bvToast.toast(e.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}},updateNote(t){this.$router.push({name:"UpdateNote",params:{id:t}})},async deleteNote(t){try{await F.deleteNote(t),this.getNotes(),this.$root.$bvToast.toast("Deleted successfully",{title:"Success",autoHideDelay:2e3,variant:"success"})}catch(e){this.$root.$bvToast.toast(e.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}}},watch:{$route:{immediate:!0,handler(){this.getNotes()}}}},bt=ft,gt=(0,T.Z)(bt,vt,ht,!1,null,null,null),yt=gt.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container p-5"},[e("b-form-group",{staticClass:"p-1",staticStyle:{"font-family":"Times","font-size":"30px"},attrs:{label:"Title:","label-for":"input-formatter"}},[e("b-form-input",{staticStyle:{"font-family":"Times New Roman"},attrs:{id:"input-formatter",placeholder:"Title",formatter:t.formatter,type:"text"},model:{value:t.noteData.title,callback:function(e){t.$set(t.noteData,"title",e)},expression:"noteData.title"}})],1),e("ckeditor",{staticClass:"px-1",model:{value:t.noteData.body,callback:function(e){t.$set(t.noteData,"body",e)},expression:"noteData.body"}}),e("b-form-checkbox",{staticClass:"p-1",model:{value:t.noteData.completed,callback:function(e){t.$set(t.noteData,"completed",e)},expression:"noteData.completed"}},[t._v(" Complete ")]),e("div",{staticClass:"p-1"},[t._v(" Status: "),e("strong",[t._v(t._s(t.noteData.completed?"Completed":"Incomplete"))])]),e("b-btn",{staticClass:"m-1",attrs:{variant:"dark"},on:{click:function(e){return t.saveNote()}}},[t._v("Submit")]),e("b-button",{staticClass:"m-1",attrs:{variant:"danger"},on:{click:function(e){return t.$router.push("/listall")}}},[t._v("Cancel")])],1)},$t=[],wt={name:"AddNote",data(){return{noteData:{title:"",body:"",completed:!1}}},methods:{async saveNote(){try{this.noteData._id?await F.updateNote(this.noteData):await F.createNote(this.noteData),this.$router.push({path:"/listall"}),this.$root.$bvToast.toast("Saved successfully",{title:"Success",autoHideDelay:2e3,variant:"success",appendToast:!0})}catch(t){this.$root.$bvToast.toast(t.response.data.message,{title:"Error",autoHideDelay:2e3,variant:"danger"})}}},watch:{$route:{immediate:!0,async handler(){if("UpdateNote"===this.$route.name){const t=await F.getNoteById(this.$route.params.id);this.noteData=t.data}}}}},Ct=wt,kt=(0,T.Z)(Ct,_t,$t,!1,null,"bc047c92",null),St=kt.exports,xt=a(4427);const Nt={authorize:["admin","general"]},Dt=new r.ZP({mode:"history",routes:[{name:"HomePage",path:"/",component:W},{name:"LogIn",path:"/login",component:et},{name:"SignUp",path:"/signup",component:nt},{name:"DetailedView",path:"/note/:id",props:!0,component:mt,meta:Nt},{name:"ListAll",path:"/listall",component:yt,meta:Nt},{name:"AddNote",path:"/addnote",component:St,meta:Nt},{name:"UpdateNote",path:"/updatenote/:id",props:!0,component:St,meta:Nt},{name:"FavouriteNotes",path:"/favourite",component:yt,meta:Nt}]});Dt.beforeEach(((t,e,a)=>{const s=t.meta.authorize;return s&&!w.getters.isAuthenticated?((new xt.K).$root.$bvToast.toast("Please login first.",{title:"Error",autoHideDelay:2e3,variant:"danger",appendToast:!0}),a({path:"/login"})):s&&!s.includes(w.state.auth.role)?((new xt.K).$root.$bvToast.toast("You do not have sufficient access to this page.",{title:"Error",autoHideDelay:2e3,variant:"danger",appendToast:!0}),a({path:"/"})):void a()}));var Tt=Dt;a(7024);s["default"].config.productionTip=!1,new s["default"]({store:w,router:Tt,render:t=>t(Z)}).$mount("#app")}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,r){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],r=t[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var d=l(a)}for(e&&e(s);c<i.length;c++)r=i[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},s=self["webpackChunkapp"]=self["webpackChunkapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9101)}));s=a.O(s)})();
//# sourceMappingURL=app.11c80bca.js.map