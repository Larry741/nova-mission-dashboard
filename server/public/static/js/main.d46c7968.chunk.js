(this["webpackJsonpnasa-fe"]=this["webpackJsonpnasa-fe"]||[]).push([[0],{210:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(32),s=n.n(c),r=n(20),i=n(3),l=n(21),o=n(6),u=n(14),d=n(7),h=n.n(d),j="v1";function m(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/planets"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("couldn't load planets");case 6:return e.next=8,t.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function p(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("couldn't load launches");case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n.sort((function(e,t){return e.flightNumber-t.flightNumber})));case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/launches/").concat(t),{method:"delete",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useCallback)(Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){s()}),[s]),n};var v=function(e,t,n){var c=Object(a.useState)([]),s=Object(l.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(!1),d=Object(l.a)(o,2),j=d[0],m=d[1],b=Object(a.useCallback)(Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[]);Object(a.useEffect)((function(){b()}),[b]);var x=Object(a.useCallback)(function(){var t=Object(u.a)(h.a.mark((function t(a){var c,s,r,i,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),m(!0),c=new FormData(a.target),s=new Date(c.get("launch-day")),r=c.get("mission-name"),i=c.get("rocket-name"),l=c.get("planets-selector"),t.next=9,f({launchDate:s,mission:r,rocket:i,target:l});case 9:t.sent.ok?(b(),setTimeout((function(){e(),m(!1)}),800)):(n(),m(!1));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[b,e,n]),O=Object(a.useCallback)(function(){var e=Object(u.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a);case 2:e.sent.ok?(b(),t()):n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,t,n]);return{launches:r,isPendingLaunch:j,submitLaunch:x,abortLaunch:O}},k=n(17),S=n(18),N=n(0),z=["classes","className","children"],L=Object(i.withStyles)((function(){return{root:{margin:"0 auto",maxWidth:800},"@media (max-width: 800px)":{root:{margin:"0 12px","@media (max-width: 305px)":{margin:"0 5px"}}}}}))((function(e){var t=e.classes,n=e.className,a=e.children,c=Object(S.a)(e,z);return Object(N.jsx)("div",Object(k.a)(Object(k.a)({className:"".concat(t.root," ").concat(n)},c),{},{children:a}))})),C=["children","sounds","onClick"],D=Object(i.withSounds)()((function(e){var t=e.children,n=e.sounds,a=e.onClick,c=Object(S.a)(e,C);return Object(N.jsx)("span",Object(k.a)(Object(k.a)({},c),{},{onClick:function(e){n.click&&n.click.play(),a&&a(e)},children:t}))})),T=["classes","onNav"],A=Object(i.withStyles)((function(e){return{root:{display:"flex",flexDirection:"row",height:"80px",alignItems:"center"},logo:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},nav:{display:"inherit","@media (max-width: 800px)":{width:"100%",display:"flex",padding:"0 0 0 10px",gap:"10px"},"@media (max-width: 353px)":{padding:"0 0 0 5px",gap:"5px"},"@media (max-width: 305px)":{padding:"0 0 0 0px",gap:"0px"}},banner:{display:"inherit",fontWeight:"bold",marginLeft:"10px",marginRight:"15px",fontSize:28},clickable:{fontSize:21,"& i":{marginRight:e.padding/2,fontSize:24,"@media (max-width: 353px)":{marginRight:"3px",fontSize:22}}},link:{color:e.color.content,textDecoration:"none",display:"flex",alignItems:"center","@media (max-width: 430px)":{flexDirection:"column",justifyContent:"center"}},button:{padding:[0,e.padding/2]},"@media (max-width: 800px)":{logo:{},img:{display:"none"},banner:{display:"none"},button:{padding:[0,8]},clickable:{fontSize:16}}}}))((function(e){var t=e.classes,n=e.onNav,a=Object(S.a)(e,T);return Object(N.jsx)(i.Header,{animate:!0,children:Object(N.jsxs)(L,Object(k.a)(Object(k.a)({className:t.root},a),{},{children:[Object(N.jsx)("img",{src:"/favicon.png",alt:"",className:t.img,style:{margin:"15px 10px 15px 0",height:"50px",width:"auto"}}),Object(N.jsx)(i.Logo,{animate:!0,size:50,className:t.logo,layer:"header"}),Object(N.jsx)(i.Words,{animate:!0,className:t.banner,children:"NOVA Mission Control"}),Object(N.jsxs)("nav",{className:"".concat(t.nav),children:[Object(N.jsx)(D,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(r.b,{className:t.link,to:"/launch",children:[Object(N.jsx)("i",{className:"material-icons",children:"check_circle_outline"}),"Launch"]})})}),Object(N.jsx)(D,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(r.b,{className:t.link,to:"/upcoming",children:[Object(N.jsx)("i",{className:"material-icons",children:"update"}),"Upcoming"]})})}),Object(N.jsx)(D,{className:t.clickable,onClick:n,children:Object(N.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(N.jsxs)(r.b,{className:t.link,to:"/history",children:[Object(N.jsx)("i",{className:"material-icons",children:"history"}),"History"]})})})]})]}))})})),P=function(){return Object(N.jsx)(i.Footer,{animate:!0,children:Object(N.jsx)(L,{children:Object(N.jsx)(i.Paragraph,{style:{fontSize:14,margin:"10px 0"},children:"This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."})})})},F=["classes","onNav"],E=Object(i.withStyles)((function(e){return{fontSize:{fontSize:"21px","@media (max-width: 800px)":{fontSize:"19px"},"@media (max-width: 480px)":{fontSize:"18px"}},nav:{display:"inherit","@media (max-width: 800px)":{width:"100%",display:"flex",justifyContent:"center"},"@media (max-width: 353px)":{width:"90vw",margin:"0 auto",justifyContent:"space-around"}}}}))((function(e){var t=e.classes,n=(e.onNav,Object(S.a)(e,F),Object(a.useMemo)((function(){var t;return e.planets?null===(t=e.planets)||void 0===t?void 0:t.map((function(e){return Object(N.jsx)("option",{value:e.kepler_name,children:e.kepler_name},e.kepler_name)})):Object(N.jsx)(N.Fragment,{})}),[e.planets])),c=(new Date).toISOString().split("T")[0];return Object(N.jsxs)(i.Appear,{id:"launch",animate:!0,show:e.entered,children:[Object(N.jsx)(i.Paragraph,{className:t.fontSize,children:"Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets."}),Object(N.jsx)(i.Paragraph,{className:t.fontSize,children:"Only confirmed planets matching the following criteria are available for the earliest scheduled missions:"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{className:t.fontSize,children:"Planetary radius < 1.6 times Earth's radius"}),Object(N.jsx)("li",{className:t.fontSize,children:"Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value"})]}),Object(N.jsxs)("form",{onSubmit:e.submitLaunch,style:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"10px 20px"},children:[Object(N.jsx)("label",{className:t.fontSize,htmlFor:"launch-day",children:"Launch Date"}),Object(N.jsx)("input",{type:"date",id:"launch-day",name:"launch-day",min:c,max:"2040-12-31",defaultValue:c}),Object(N.jsx)("label",{className:t.fontSize,htmlFor:"mission-name",children:"Mission Name"}),Object(N.jsx)("input",{type:"text",id:"mission-name",name:"mission-name"}),Object(N.jsx)("label",{className:t.fontSize,htmlFor:"rocket-name",children:"Rocket Type"}),Object(N.jsx)("input",{type:"text",id:"rocket-name",name:"rocket-name",defaultValue:"Explorer IS1"}),Object(N.jsx)("label",{className:t.fontSize,htmlFor:"planets-selector",children:"Destination Exoplanet"}),Object(N.jsx)("select",{id:"planets-selector",name:"planets-selector",children:n}),Object(N.jsx)(D,{children:Object(N.jsx)(i.Button,{animate:!0,show:e.entered,type:"submit",layer:"success",disabled:e.isPendingLaunch,children:"Launch Mission \u2714"})}),e.isPendingLaunch&&Object(N.jsx)(i.Loading,{animate:!0,small:!0})]})]})})),M=n(74),H=Object(i.withStyles)((function(){return{fontSize:{fontSize:"21px","@media (max-width: 800px)":{fontSize:"19px"},"@media (max-width: 480px)":{fontSize:"18px"}}}}))((function(e){e.entered,e.launches;var t=e.classes,n=(e.abortLaunch,Object(a.useMemo)((function(){return e.launches?Object(M.a)(e.launches).reverse().filter((function(e){return!e.upcoming})).map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)("span",{style:{color:e.success?"greenyellow":"red"},children:"\u2588"})}),Object(N.jsx)("td",{children:e.flightNumber}),Object(N.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(N.jsx)("td",{children:e.mission}),Object(N.jsx)("td",{children:e.rocketName}),Object(N.jsx)("td",{children:e.customers?e.customers.join(", "):null})]},String(e.flightNumber))})):Object(N.jsx)(N.Fragment,{})}),[e.launches]));return Object(N.jsx)("article",{id:"history",children:Object(N.jsxs)(i.Appear,{animate:!0,show:e.entered,children:[Object(N.jsx)(i.Paragraph,{className:t.fontSize,children:"History of mission launches including SpaceX launches starting from the year 2006."}),Object(N.jsx)(i.Table,{animate:!0,children:Object(N.jsxs)("table",{style:{tableLayout:"fixed",width:"100%"},children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:{width:"2rem"}}),Object(N.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(N.jsx)("th",{style:{width:"9rem"},children:"Date"}),Object(N.jsx)("th",{style:{width:"9rem"},children:"Mission"}),Object(N.jsx)("th",{style:{width:"7rem"},children:"Rocket"}),Object(N.jsx)("th",{style:{width:"9rem"},children:"Customers"})]})}),Object(N.jsx)("tbody",{children:n})]})})]})})})),I=Object(i.withStyles)((function(){return{link:{color:"red",textDecoration:"none"},fontSize:{fontSize:"21px","@media (max-width: 800px)":{fontSize:"19px"},"@media (max-width: 480px)":{fontSize:"18px"}}}}))((function(e){var t=e.entered,n=e.launches,c=e.classes,s=e.abortLaunch,r=Object(a.useMemo)((function(){return n?null===n||void 0===n?void 0:n.filter((function(e){return e.upcoming})).map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:Object(N.jsx)(D,{style:{color:"red"},children:Object(N.jsx)(i.Link,{className:c.link,onClick:function(){return s(e.flightNumber)},children:"\u2716"})})}),Object(N.jsx)("td",{children:e.flightNumber}),Object(N.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(N.jsx)("td",{children:e.mission}),Object(N.jsx)("td",{children:e.rocketName}),Object(N.jsx)("td",{children:e.target})]},String(e.flightNumber))})):Object(N.jsx)(N.Fragment,{})}),[n,s,c.link]);return Object(N.jsxs)(i.Appear,{id:"upcoming",animate:!0,show:t,children:[Object(N.jsx)(i.Paragraph,{className:c.fontSize,children:"Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets."}),Object(N.jsx)(i.Words,{className:c.fontSize,animate:!0,children:"Warning! Clicking on the \u2716 aborts the mission."}),Object(N.jsx)(i.Table,{animate:!0,show:t,children:Object(N.jsxs)("table",{style:{tableLayout:"fixed",width:"100%"},children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:{width:"3rem"}}),Object(N.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(N.jsx)("th",{style:{width:"10rem"},children:"Date"}),Object(N.jsx)("th",{style:{width:"10rem"},children:"Mission"}),Object(N.jsx)("th",{style:{width:"10rem"},children:"Rocket"}),Object(N.jsx)("th",{style:{width:"10rem"},children:"Destination"})]})}),Object(N.jsx)("tbody",{children:r})]})})]})})),R=Object(i.withSounds)()(Object(i.withStyles)((function(){return{content:{display:"flex",flexDirection:"column",height:"100vh",margin:"auto"},centered:{flex:1,paddingTop:"20px",paddingBottom:"10px"}}}))((function(e){var t=e.sounds,n=e.classes,c=Object(a.useState)(!0),s=Object(l.a)(c,2),r=s[0],u=s[1],d=v((function(){return t.success&&t.success.play()}),(function(){return t.abort&&t.abort.play()}),(function(){return t.warning&&t.warning.play()})),h=d.launches,j=d.isPendingLaunch,m=d.submitLaunch,b=d.abortLaunch,p=w();return Object(N.jsxs)("div",{className:n.content,children:[Object(N.jsx)(A,{onNav:function(){u(!1),setTimeout((function(){u(!0)}),600)}}),Object(N.jsx)(L,{className:n.centered,children:Object(N.jsx)(i.Frame,{animate:!0,show:r,corners:4,style:{visibility:r?"visible":"hidden"},children:function(e){return Object(N.jsx)("div",{style:{padding:"20px",overflowX:"scroll"},children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",children:Object(N.jsx)(E,{entered:e.entered,planets:p,submitLaunch:m,isPendingLaunch:j})}),Object(N.jsx)(o.a,{exact:!0,path:"/launch",children:Object(N.jsx)(E,{entered:e.entered,planets:p,submitLaunch:m,isPendingLaunch:j})}),Object(N.jsx)(o.a,{exact:!0,path:"/upcoming",children:Object(N.jsx)(I,{entered:e.entered,launches:h,abortLaunch:b})}),Object(N.jsx)(o.a,{exact:!0,path:"/history",children:Object(N.jsx)(H,{entered:e.entered,launches:h})})]})})}})}),Object(N.jsx)(P,{})]})}))),W={small:"/img/background-small.jpg",medium:"/img/background-medium.jpg",large:"/img/background-large.jpg"},_="/img/glow.png",X={shared:{volume:.5},players:{click:{sound:{src:["/sound/click.mp3"]},settings:{oneAtATime:!0}},typing:{sound:{src:["/sound/typing.mp3"]},settings:{oneAtATime:!0}},deploy:{sound:{src:["/sound/deploy.mp3"]},settings:{oneAtATime:!0}},success:{sound:{src:["/sound/success.mp3"],volume:.2},settings:{oneAtATime:!0}},abort:{sound:{src:["/sound/abort.mp3"]},settings:{oneAtATime:!0}},warning:{sound:{src:["/sound/warning.mp3"]},settings:{oneAtATime:!0}}}},B={color:{content:"#a1ecfb"},padding:20,responsive:{small:600,medium:800,large:1200},typography:{headerFontFamily:'"Titillium Web", "sans-serif"'}},J=function(){return Object(N.jsx)(i.ThemeProvider,{theme:Object(i.createTheme)(B),children:Object(N.jsx)(i.SoundsProvider,{sounds:Object(i.createSounds)(X),children:Object(N.jsx)(i.Arwes,{animate:!0,background:W.large,pattern:_,children:function(e){return Object(N.jsx)(r.a,{children:Object(N.jsx)(R,{show:e.entered})})}})})})};s.a.render(Object(N.jsx)(J,{}),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.d46c7968.chunk.js.map