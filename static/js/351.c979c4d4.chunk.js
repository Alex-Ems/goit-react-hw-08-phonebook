"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[351],{2351:function(e,t,a){a.r(t);var n=a(885),r=a(2791),o=a(9434),s=a(5984),l=a(8174),i=a(7485),c=a(1347),u=a(6504),m=a(1093),d=a(3329);t.default=function(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),a=t[0],p=t[1],f=(0,r.useState)(""),_=(0,n.Z)(f,2),b=_[0],h=_[1],y=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":p(n);break;case"password":h(n);break;default:p(""),h("")}},S=(0,o.I0)(),v=(0,o.v9)(i.v).isLoading,w=(0,r.useMemo)((function(){return(0,s.x0)()}),[]),g=(0,r.useMemo)((function(){return(0,s.x0)()}),[]);return(0,d.jsx)("div",{className:u.Z.container,children:(0,d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p()&&h()!==r.useState)return l.Am.error("Please, enter correct Email or Password");S((0,c.pH)({email:a,password:b})),p(""),h("")},className:u.Z.formStyles,children:[(0,d.jsx)("label",{className:u.Z.labelStyles,htmlFor:w,children:"Email"}),(0,d.jsx)("input",{id:w,type:"email",name:"email",value:a,onChange:y,required:!0,placeholder:"mail@mail.com",className:u.Z.inputStyles}),(0,d.jsx)("label",{className:u.Z.labelStyles,htmlFor:g,children:"Password"}),(0,d.jsx)("input",{id:g,type:"password",name:"password",value:b,onChange:y,required:!0,placeholder:"your password",className:u.Z.inputStyles}),v?(0,d.jsx)(m.a,{}):(0,d.jsx)("button",{type:"submit",className:u.Z.btnLog,children:"Log In"})]})})}},6504:function(e,t){t.Z={container:"ContactForm_container__UPfjb",formStyles:"ContactForm_formStyles__YRsb1",labelStyles:"ContactForm_labelStyles__Ghfrx",inputStyles:"ContactForm_inputStyles__DHTkv",btnAdd:"ContactForm_btnAdd__NdJTh",btnLog:"ContactForm_btnLog__MVjy5"}},5984:function(e,t,a){a.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=351.c979c4d4.chunk.js.map