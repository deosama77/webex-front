(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){e.exports=a(80)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),i=(a(45),a(2)),s=(a(46),a(3)),o=a(5),u=(a(47),a(48),Object(n.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}})),m=(a(49),function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(o.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)});var d=function(e){var t=Object(n.useContext)(u),a=Object(s.g)();return r.a.createElement("ul",{className:"main-navlink-list"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/"},"Home")),t.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(m,{onClick:function(){t.logout(),localStorage.removeItem("user_data"),a.push("/auth")}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/sign_up"},"SignUp"))))};var p=function(e){return r.a.createElement("div",{className:"main-navigation-container"},r.a.createElement("div",{className:"main-navigation-logo"},r.a.createElement("h3",null,"Logo")),r.a.createElement("nav",null,r.a.createElement(d,null)))},v=a(7),E=a.n(v),f=a(11),b=a(14),h=a(38),y=function(){return{type:"REQUIRE"}},g=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!0,l=Object(h.a)(t);try{for(l.s();!(a=l.n()).done;){var c=a.value;if("REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e)),"LOWER"===c.type&&(r=r&&e.match(/[a-z]/g)),"CAPITAL"===c.type&&(r=r&&e.match(/[A-Z]/g)),"NUMBER"===c.type&&(r=r&&e.match(/[0-9]/g)),"PASSWORD"===c.type){var i=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;r=r&&e.match(i)}"IS_MATCH"===c.type&&(r=r&&e.toString()===n.toString()),"NUMBER"===c.type&&(r=r&&/^\d*$/.test(e))}}catch(s){l.e(s)}finally{l.f()}return r},j=(a(56),function(e,t){switch(t.type){case"CHANGE":return Object(b.a)(Object(b.a)({},e),{},{value:t.val,isValid:g(t.val,t.validators,t.val2)});case"TOUCH":return Object(b.a)(Object(b.a)({},e),{},{isTouched:!0});default:return e}}),N=function(e){var t=Object(n.useReducer)(j,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=e.id,o=e.onInput,u=l.value,m=l.isValid;Object(n.useEffect)((function(){o(s,u,m)}),[s,u,m,o]);var d=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators,val2:e.valToMatch||""})},p=function(){c({type:"TOUCH"})},v="input"===e.element?r.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:p,value:l.value,className:e.inlineBlock?"inline-inputs":""}):r.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:p,value:l.value});return r.a.createElement("div",{className:"form-control ".concat(!l.isValid&&l.isTouched&&"form-control--invalid"," ").concat(e.half?"half-width":"")},!e.half&&r.a.createElement("label",{className:e.inlineBlock?"inline-inputs":"",htmlFor:e.id},e.label),v,!l.isValid&&l.isTouched&&r.a.createElement("p",null,e.errorText))},_=a(17),O=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(b.a)(Object(b.a)({},e),{},{inputs:Object(b.a)(Object(b.a)({},e.inputs),{},Object(_.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},V=function(e,t){var a=Object(n.useReducer)(O,{inputs:e,isValid:t}),r=Object(i.a)(a,2),l=r[0],c=r[1];return[l,Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},w=(a(27),a(18)),I=a.n(w),S=function(e){return I.a.create({baseURL:"https://young-beach-29268.herokuapp.com/projects",headers:{authorization:"Bearer ".concat(e)}})},x=function(){var e=Object(s.g)(),t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1],o=V({name:{value:"",isValid:!1},status_progress:{value:"",isValid:!1},status_provider:{value:"",isValid:!1},complicity:{value:"",isValid:!1},resources:{value:"",isValid:!1},price:{value:"",isValid:!1},start_date:{value:"",isValid:!1},end_date:{value:"",isValid:!1}},!1),u=Object(i.a)(o,2),d=u[0],p=u[1],v=localStorage.getItem("user_data"),b={};v&&(b=JSON.parse(v));var h=b,y=h.token,g=h.user,j=function(){var t=Object(f.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a={},d.inputs&&(a={name:d.inputs.name.value,status_progress:d.inputs.status_progress.value,status_provider:d.inputs.status_provider.value,resources:Number(d.inputs.resources.value),price:Number(d.inputs.price.value),provider:"Some one",complicity:Number(d.inputs.complicity.value),offers:Number(d.inputs.offers.value),start_date:d.inputs.start_date.value,end_date:d.inputs.end_date.value}),S(y).post("/".concat(g.id),a)&&e.push("/projects")}catch(n){c("Some thing wrong , didn't add any project"),console.log(n)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("form",{className:"project-form",onSubmit:function(e){e.preventDefault(),console.log("inputs: ",d.inputs),j()}},r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Add New Project Form")),l&&r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"red"}},l)),r.a.createElement("div",{className:"project-form-title"},r.a.createElement(N,{id:"name",element:"input",type:"text",label:"Project Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Name for project.",onInput:p,placeholder:"Project Name"})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"status_progress",element:"input",type:"text",label:"Status Progress",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid status progress.",onInput:p,placeholder:"Status Progress"}),r.a.createElement(N,{id:"status_provider",element:"input",type:"text",label:"status_provider",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid status provider.",onInput:p,placeholder:"Status Provider"})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"resources",element:"input",type:"number",label:"Resources",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:p,placeholder:"Resources"}),r.a.createElement(N,{id:"complicity",element:"input",type:"number",label:"complicity",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:p,placeholder:"Complicity"})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"price",element:"input",type:"number",label:"Price",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:p,placeholder:"Price"}),r.a.createElement(N,{id:"offers",element:"input",label:"Offers",type:"number",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:p,placeholder:"Offers"})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"start_date",type:"date",element:"input",label:"Start Date",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Start Date.",onInput:p,inlineBlock:!0}),r.a.createElement(N,{id:"end_date",element:"input",type:"date",label:"End Date",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid End date.",onInput:p})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(m,{type:"submit",disabled:!d.isValid},"ADD PROJECT")))},P=a(19),C=a(0);a(36),a(74);var T=function(e){return r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"status-item ".concat("my"===e.status?"red":"acquire"===e.status?"green":"blue")}))};var R=function(e){return r.a.createElement("div",{className:"search-container"},r.a.createElement(C.b.Provider,{value:{style:{fontSize:"30px",color:"rgb(0, 123, 255)"}}},r.a.createElement("div",{className:"search-input-container"},r.a.createElement("div",{className:"search-input-group"},r.a.createElement("div",{className:"search-input-icon"},r.a.createElement(P.b,null)),r.a.createElement("input",{type:"text",onChange:e.onChange})),r.a.createElement("div",{className:"search-input-button"},r.a.createElement(m,{onClick:e.onClick,inverse:!0},"Search")))),r.a.createElement("div",{className:"button-group"},r.a.createElement(m,{inverse:!0},"All"),r.a.createElement(m,{inverse:!0},r.a.createElement("div",{className:"search-button-status"},r.a.createElement(T,{status:"my"}),"My")),r.a.createElement(m,{inverse:!0},r.a.createElement("div",{className:"search-button-status"},r.a.createElement(T,{status:"acquire"}),"Acquired")),r.a.createElement(m,{inverse:!0},r.a.createElement("div",{className:"search-button-status"},r.a.createElement(T,{status:"save"}),"Saved"))))},k=(a(75),a(76),function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),M=a(82),U=(a(77),function(e){return c.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),A=(a(78),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(t,document.getElementById("modal-hook"))}),D=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(U,{onClick:e.onCancel}),r.a.createElement(M.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(A,e)))},L=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDay())};var B=function(e){var t=e.projects,a=e.valueSearch,l=Object(s.g)(),c=Object(n.useState)(),u=Object(i.a)(c,2),d=u[0],p=u[1],v=Object(n.useState)(),b=Object(i.a)(v,2),h=b[0],y=b[1],g=function(){var e=Object(s.g)();try{var t=localStorage.getItem("user_data"),a=JSON.parse(t),n=a.token,r=a.user;return n&&r||e.push("/"),[n,r]}catch(l){console.log("Error occurred : ",l),e.push("/")}}(),j=Object(i.a)(g,2),N=j[0],_=j[1],O=Object(n.useState)(!1),V=Object(i.a)(O,2),w=V[0],I=V[1],x=function(){I(!1)},C=function(e){p(""),y(e),I(!0)},R=function(){var t=Object(f.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(N).delete("/".concat(h,"/user/").concat(_.id));case 3:t.sent&&e.refreshProjects(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error : ",t.t0),p("Error, project was not deleted");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),M=t.filter((function(e){return!a||(!(!e.name.toLowerCase().includes(a.toLowerCase())&&!e.status_progress.toLowerCase().includes(a.toLowerCase())&&e.price.toString()!==a&&e.resources.toString()!==a&&e.complicity.toString()!==a)||void 0)})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("div",{className:"product-table-main-status"},r.a.createElement(T,{status:e.status_provider.toString().trim()})," ",e.status_progress)),r.a.createElement("td",null,e.resources),r.a.createElement("td",null,e.price," $"),r.a.createElement("td",null,e.complicity," %"),r.a.createElement("td",null,L(e.start_date)),r.a.createElement("td",null,L(e.end_date)),r.a.createElement("td",null,0===e.offers||null===e.offers?0:e.offers," %"),r.a.createElement("td",null,r.a.createElement("div",{className:"project-table-sub-menu"},r.a.createElement("div",{className:"project-table-sub-icon"},r.a.createElement(P.a,null)),r.a.createElement("div",{className:"project-table-sub-icon-content"},r.a.createElement(o.b,{to:"/update-project/".concat(e.id)},"Edit"),r.a.createElement("button",{onClick:function(){return C(e.id)}},"Delete")))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{show:w,onCancel:x,header:"Are you sure?",footerClass:"project-table__modal-actions",footer:r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{inverse:!0,onClick:x},"CANCEL"),r.a.createElement(m,{danger:!0,onClick:function(){I(!1),R()}},"DELETE"))},r.a.createElement("p",null,"Do you want to proceed and delete this project? Please note that it can't be undone thereafter.")),r.a.createElement("div",{className:"project-table-container"},r.a.createElement(k,null,r.a.createElement("div",{className:"project-table-card-header"},r.a.createElement("h4",null,"Projects"),d&&r.a.createElement("h5",{style:{color:"red"}},d),r.a.createElement("div",{className:"project-table-card-header-button"},r.a.createElement(m,{type:"button",size:"small",onClick:function(){return l.push("/new-project")}},"Create Project"))),r.a.createElement("div",{className:"project-table-main"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Resources"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Complicity"),r.a.createElement("th",null,"Start Date"),r.a.createElement("th",null,"End Date"),r.a.createElement("th",null,"Offers"))),r.a.createElement("tbody",null,M,r.a.createElement("tr",null,r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null))))))))};var F=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),d=m[0],p=m[1],v=Object(n.useContext)(u),b=v.logout,h=v.isLoggedIn,y=Object(s.g)(),g=localStorage.getItem("user_data"),j={};g&&h?j=JSON.parse(g):y.push("/login");var N=j,_=N.token,O=N.user,V=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(_).get("/".concat(O.id));case 3:t=e.sent,p(t.data.projects),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),b(),y.push("/"),localStorage.removeItem("user_data");case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){V()}),[]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){console.log("it works")},onChange:function(e){c(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(B,{refreshProjects:function(){V()},valueSearch:l,projects:d})))};var H=function(e){return r.a.createElement("div",null,"Home")},Q=(a(22),I.a.create({baseURL:"https://pure-chamber-23521.herokuapp.com/users"})),J=function(){var e=Object(s.g)(),t=Object(n.useContext)(u),a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],d=V({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),p=Object(i.a)(d,2),v=p[0],E=p[1];return r.a.createElement(k,{className:"authentication"},r.a.createElement("h2",null,"Login Required"),r.a.createElement("hr",null),c&&r.a.createElement("h4",{style:{marginTop:3,marginBottom:3,color:"red"}},c),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),o(""),console.log(v.inputs),Q.post("/login",{email:v.inputs.email.value,password:v.inputs.password.value}).then((function(a){var n=JSON.stringify({user:a.data.user,token:a.data.token});localStorage.setItem("user_data",n),t.login(),e.push("/"),o("")})).catch((function(e){o("Wrong email or password")}))}},r.a.createElement(N,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:E,placeholder:"E-Mail"}),r.a.createElement(N,{element:"input",id:"password",type:"password",label:"Password",validators:[y],errorText:"Password must minimum 8 characters",onInput:E,placeholder:"Password"}),r.a.createElement(m,{type:"submit",disabled:!v.isValid},"Login")),r.a.createElement(m,{inverse:!0,onClick:function(){e.push("/sign_up")}},"SWITCH TO Signup"))},z=function(){var e=Object(s.g)(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),d=u[0],p=u[1],v=V({email:{value:"",isValid:!1},password:{value:"",isValid:!1},first_name:{value:"",isValid:!1},last_name:{value:"",isValid:!1},date:{value:"",isValid:!1},c_password:{value:"",isValid:!1},c_email:{value:"",isValid:!1}},!1),b=Object(i.a)(v,2),h=b[0],y=b[1],g=function(){var t=Object(f.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,p(""),l){t.next=5;break}return alert("please accept the conditions"),t.abrupt("return");case 5:return a={first_name:h.inputs.first_name.value,last_name:h.inputs.last_name.value,email:h.inputs.email.value,password:h.inputs.password.value,is_terms:l,date_birth:h.inputs.date.value},t.next=8,Q.post("/sign_up",a);case 8:t.sent&&e.push("/login"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),p("Failed to sign up ");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(k,{className:"authentication"},r.a.createElement("h2",null,"Registration Required"),r.a.createElement("hr",null),d&&r.a.createElement("h4",{style:{marginTop:3,marginBottom:3,color:"red"}},d),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g()}},r.a.createElement("div",{className:"authentication-form-header"},r.a.createElement(N,{element:"input",id:"first_name",type:"text",label:"First Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a first name.",onInput:y,half:!0,placeholder:"First Name"}),r.a.createElement(N,{element:"input",id:"last_name",type:"text",label:"Last Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a last name.",onInput:y,half:!0,placeholder:"Last Name"})),r.a.createElement(N,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:y,placeholder:"E-Mail"}),r.a.createElement(N,{element:"input",id:"c_email",type:"email",label:"Confirm E-Mail",validators:[{type:"IS_MATCH"}],errorText:"Not Matched E-Mail",onInput:y,placeholder:"Confirm E-Mail",half:!0,valToMatch:h.inputs.email.value}),r.a.createElement(N,{element:"input",id:"password",type:"password",label:"Password",validators:[{type:"PASSWORD"}],errorText:"Error Password , please follow the rules",onInput:y,placeholder:"Password"}),r.a.createElement("div",{className:"authentication-password"},r.a.createElement("span",null,"one lower character"),r.a.createElement("span",null,"one special character")),r.a.createElement("div",{className:"authentication-password"},r.a.createElement("span",null,"one uppercase character"),r.a.createElement("span",null,"8 characters minimum")),r.a.createElement("div",{className:"authentication-password"},r.a.createElement("span",null,"one number")),r.a.createElement(N,{element:"input",id:"c_password",type:"password",label:"Confirm Password",validators:[{type:"IS_MATCH"}],errorText:"Not Matched Password",onInput:y,placeholder:"Confirm Password",half:!0,valToMatch:h.inputs.password.value}),r.a.createElement(N,{element:"input",id:"date",type:"date",label:"Date birth",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Date.",onInput:y,placeholder:"Date Birth"}),r.a.createElement("div",{className:"authentication-conditions"},r.a.createElement("input",{type:"checkbox",id:"condition",defaultChecked:l,onChange:function(e){c((function(e){return!e}))},name:"condition"}),r.a.createElement("label",{htmlFor:"condition"}," Accept conditions"),r.a.createElement("br",null)),r.a.createElement(m,{type:"submit",disabled:!h.isValid},"SIGNUP")),r.a.createElement(m,{inverse:!0,onClick:function(){p(""),e.push("/login")}},"SWITCH TO LOGIN"))},W=a(16),G=a.n(W),q=function(){var e=Object(s.g)(),t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!0),u=Object(i.a)(o,2),d=u[0],p=u[1],v=V({name:{value:"",isValid:!1},status_progress:{value:"",isValid:!1},status_provider:{value:"",isValid:!1},complicity:{value:"",isValid:!1},resources:{value:"",isValid:!1},price:{value:"",isValid:!1},start_date:{value:"",isValid:!1},end_date:{value:"",isValid:!1}},!1),b=Object(i.a)(v,3),h=b[0],y=b[1],g=b[2],j=Object(s.h)().id,_=localStorage.getItem("user_data"),O={};_&&(O=JSON.parse(_));var w=O,I=w.token,x=w.user,P=function(){var t=Object(f.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a={},h.inputs&&(a={name:h.inputs.name.value,status_progress:h.inputs.status_progress.value,status_provider:h.inputs.status_provider.value,resources:Number(h.inputs.resources.value),price:Number(h.inputs.price.value),provider:"Some one updated",complicity:Number(h.inputs.complicity.value),offers:Number(h.inputs.offers.value),start_date:h.inputs.start_date.value,end_date:h.inputs.end_date.value}),S(I).patch("/".concat(j,"/user/").concat(x.id),a)&&e.push("/projects")}catch(n){console.log(n),c("some thing wrong : not upadated")}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){C()}),[]);var C=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(I).get("/".concat(j,"/user/").concat(x.id));case 3:(t=e.sent).data&&t.data.projects&&t.data.projects.length>0&&g({name:{value:t.data.projects[0].name,isValid:!0},status_progress:{value:t.data.projects[0].status_progress,isValid:!0},status_provider:{value:t.data.projects[0].status_provider,isValid:!0},complicity:{value:t.data.projects[0].complicity.toString(),isValid:!0},resources:{value:t.data.projects[0].resources,isValid:!0},price:{value:t.data.projects[0].price,isValid:!0},offers:{value:t.data.projects[0].offers,isValid:!0},start_date:{value:G()(t.data.projects[0].start_date).format("yyyy-MM-D"),isValid:!0},end_date:{value:G()(t.data.projects[0].end_date).format("yyyy-MM-D"),isValid:!0}},!0),p(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c("Wrong to Fetch project data"),p(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return d?r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Loading")):l?r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,l)):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"project-form",onSubmit:function(e){e.preventDefault(),P()}},r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Update Project Form")),l&&r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"red"}},l)),r.a.createElement("div",{className:"project-form-title"},r.a.createElement(N,{id:"name",element:"input",type:"text",label:"Project Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Name for project.",onInput:y,placeholder:"Project Name",initialValue:h.inputs.name.value,initialValid:h.inputs.name.isValid})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"status_progress",element:"input",type:"text",label:"Status Progress",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid status progress.",onInput:y,placeholder:"Status Progress",initialValue:h.inputs.status_progress.value,initialValid:h.inputs.status_progress.isValid}),r.a.createElement(N,{id:"status_provider",element:"input",type:"text",label:"status_provider",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid status provider.",onInput:y,placeholder:"Status Provider",initialValue:h.inputs.status_provider.value,initialValid:h.inputs.status_provider.isValid})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"resources",element:"input",type:"number",label:"Resources",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:y,placeholder:"Resources",initialValue:h.inputs.resources.value,initialValid:h.inputs.resources.isValid}),r.a.createElement(N,{id:"complicity",element:"input",type:"number",label:"complicity",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:y,placeholder:"Complicity",initialValue:h.inputs.complicity.value,initialValid:h.inputs.complicity.isValid})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"price",element:"input",type:"number",label:"Price",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:y,placeholder:"Price",initialValue:h.inputs.price.value,initialValid:h.inputs.price.isValid}),r.a.createElement(N,{id:"offers",element:"input",label:"Offers",type:"number",validators:[{type:"NUMBER"}],errorText:"Please enter a valid number.",onInput:y,placeholder:"Offers",initialValue:h.inputs.offers.value,initialValid:h.inputs.offers.isValid})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(N,{id:"start_date",type:"date",element:"input",label:"Start Date",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid Start Date.",onInput:y,initialValue:G()(h.inputs.start_date.value).format("yyyy-MM-D"),initialValid:h.inputs.start_date.isValid}),r.a.createElement(N,{id:"end_date",element:"input",type:"date",label:"End Date",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid End date.",onInput:y,initialValue:G()(h.inputs.end_date.value).format("yyyy-MM-D"),initialValid:h.inputs.end_date.isValid})),r.a.createElement("div",{className:"project-form-row-inputs"},r.a.createElement(m,{type:"submit",disabled:!h.isValid},"UPDATE PROJECT"))))};var $=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){if(!a){var e=localStorage.getItem("user_data"),t=JSON.parse(e);t&&t.user&&t.token?l(!0):(l(!1),localStorage.removeItem("user_data"))}}),[]);var c,m=Object(n.useCallback)((function(){l(!0)}),[]),d=Object(n.useCallback)((function(){l(!1)}),[a]);return c=a?r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/new-project",exact:!0},r.a.createElement(x,null)),r.a.createElement(s.b,{path:"/projects",exact:!0},r.a.createElement(F,null)),r.a.createElement(s.b,{path:"/update-project/:id"},r.a.createElement(q,null)),r.a.createElement(s.b,{path:"/",exact:!0},r.a.createElement(H,null)),r.a.createElement(s.a,{to:"/"})):r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login",exact:!0},r.a.createElement(J,null)),r.a.createElement(s.b,{path:"/sign_up",exact:!0},r.a.createElement(z,null)),r.a.createElement(s.a,{to:"/"})),r.a.createElement(u.Provider,{value:{isLoggedIn:a,login:m,logout:d}},r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement("main",null,c)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.7064684e.chunk.js.map