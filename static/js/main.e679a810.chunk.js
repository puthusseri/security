(this.webpackJsonpsecurity=this.webpackJsonpsecurity||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),i=n(12),s=n.n(i),a=(n(17),n(18),n(19),n(1));function r(){new Promise((function(e,t){var n=window.open("https://accounts.zoho.com/oauth/v2/auth?response_type=token&client_id=1000.C8VR4MF2K7S7CXJFZD6FQW6HYY1X4U&scope=ZohoMail.accounts.READ&redirect_uri=https://puthusseri.github.io/security/","_blank");setInterval((function(){try{var t=n.location.hash;t&&(console.log("hash data = "+t),n.close(),e(t))}catch(c){console.log(c)}}),1e3),setTimeout((function(){t("failed"),n.close()}),5e4)})).then((function(e){var t="token="+e.match("[#&]access_token=*[^&]*")[0].split("=")[1];document.cookie=t,console.log("Do the call to get the home page")})).catch((function(e){console.log("Inside the failed function"+e)}))}var l=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"NavBar",children:[Object(a.jsx)("h1",{className:"Heading",children:"Security Training"}),Object(a.jsx)("input",{type:"button",className:"loginButton",value:"Login",onClick:r})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{style:{marginTop:"400px"},children:"This is a part of Desk Security Training"})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e679a810.chunk.js.map