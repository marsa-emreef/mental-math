(this["webpackJsonpmental-math"]=this["webpackJsonpmental-math"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"App_button__3Wu2Q",buttonNavigator:"App_buttonNavigator__3DrKD",main:"App_main__3g0VX",input:"App_input__coDI0",questionTitle:"App_questionTitle__1GdSl",questionDescription:"App_questionDescription__1lfpj"}},200:function(e,t,n){e.exports=n(387)},387:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(10),i=n.n(u),o=n(14),l=n(11),c=n.n(l),s=n(176),m=n(105),f=n.n(m),d=n(161),p=n(37),g=Object(a.createContext)(null);function b(e){var t=e.children,n=Object(a.useState)((function(){var e=localStorage.getItem("config");return e&&e.length>0?JSON.parse(e):{studentName:"RAOUL ARDY",totalSums:200,totalQuestions:6,pauseBetweenQuestionInMs:1e3}})),u=Object(o.a)(n,2),i=u[0],l=u[1],c=Object(a.useState)(0),s=Object(o.a)(c,2),m=s[0],f=s[1];function d(){var e=localStorage.getItem("sessions");return e=e&&e.length>0?JSON.parse(e):[]}Object(a.useEffect)((function(){var e=localStorage.getItem("config");e&&e.length>0?(l(JSON.parse(e)),f(1)):f(0)}),[]);var b=Object(a.useRef)();return r.a.createElement(g.Provider,{value:{setPage:f,setConfig:l,config:i,saveSettings:function(){localStorage.setItem("config",JSON.stringify(i)),window.location.reload()},saveSession:function(e,t){var n=(new Date).getTime()-b.current,a=t.map((function(t,n){return Object(p.a)({},t,{questions:e[n]})})),r={date:new Date,sums:a,duration:n},u=d();u.push(r),localStorage.setItem("sessions",JSON.stringify(u))},getSession:d,markSessionBegin:function(){b.current=(new Date).getTime()},sessionTimer:b}},t(m))}function v(){return Object(a.useContext)(g)}var E=Object(a.createContext)(null),h={"-9":0,"-8":1,"-7":2,"-6":3,"-5":4,"-4":5,"-3":6,"-2":7,"-1":8,1:9,2:10,3:11,4:12,5:13,6:14,7:15,8:16,9:17};function S(e){var t=e.children,n=Object(a.useRef)(),u=v().config;function i(e,t){return new Promise((function(a){var r=h[e.toString()];n.current.currentTime=r,n.current.play(),n.current.ontimeupdate=function(){var e=t>1e3,u=n.current.currentTime>17.4,i=n.current.currentTime>r+.9;if(u||i)if(n.current.pause(),n.current.ontimeupdate=null,e){var o=1e3*(n.current.currentTime-r);setTimeout(a,t-o,!0)}else a(!0)}}))}return Object(a.useEffect)((function(){n.current.load(),n.current.pause()}),[]),r.a.createElement(E.Provider,{value:{playSounds:function(e){var t=u.pauseBetweenQuestionInMs;null!==e&&void 0!==e&&0!==e.length&&Object(d.a)(f.a.mark((function n(){var a,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=0;case 1:if(!(a<e.length)){n.next=8;break}return r=e[a],n.next=5,i(r,t);case 5:a++,n.next=1;break;case 8:case"end":return n.stop()}}),n)})))()}}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",position:"absolute",textAlign:"center",paddingTop:"1rem"}},r.a.createElement("audio",{ref:n,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("","/audio/mental-math-v2.mp3"),type:"audio/mpeg"}))),t)}function y(){return{playSounds:Object(a.useContext)(E).playSounds}}var w=n(21),x=n(75),O=n.n(x);function j(e){var t=e.reduce((function(e,t){return e+t}),0),n=Math.random()<=.3,a=(Math.floor(9*Math.random())+1)*(n?-1:1);return t+a>0&&Math.abs(e[e.length-1])!==Math.abs(a)?a:j(e)}function C(e){for(var t=[];t.length<e;)t.push(j(t));return t}function T(e){var t=e.studentName,n=e.setSessionRunning,a=e.numbers,u=v().markSessionBegin,i=y().playSounds;return r.a.createElement("div",{style:{display:"inline-block",margin:"auto",marginTop:"2rem",padding:"1rem",background:"rgba(0,0,0,0.5)"}},r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"5rem"}},t),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("button",{className:c.a.button,onClick:function(){u(),n(!0),i(a)}},"Click Here To Begin Session")))}function N(e){var t=e.setTimerRunning,n=e.setCurrentQuestion,u=e.setCurrentSum,i=e.setAnswers,o=e.isTrial,l=e.currentSum,m=e.questionSet,f=Object(a.useRef)(null),d=Object(a.useRef)(null),p=y().playSounds;return Object(a.useEffect)((function(){d.current=(new Date).getTime(),f.current.focus()}),[]),r.a.createElement("form",{style:{width:"100%",display:"flex",flexDirection:"column"},action:"",onSubmit:function(e){e.preventDefault();var a=parseInt(e.target.elements.answer.value);a>=0&&(!function(e){var t=e.answer,n=e.setTimerRunning,a=e.setCurrentSum,r=e.setCurrentQuestion,u=e.setAnswers,i=e.timeLogger;n(!1),a((function(e){return e+1})),r(-1);var o=(new Date).getTime()-i.current;u((function(e){return[].concat(Object(s.a)(e),[{answer:t,time:o}])}))}({answer:a,setTimerRunning:t,setCurrentQuestion:n,setCurrentSum:u,setAnswers:i,timeLogger:d}),p(m[l+1]))}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement("div",{style:{textAlign:"left",fontSize:"2rem"}},"Answer :"),r.a.createElement("div",{style:{flexGrow:"1"}}),!o&&r.a.createElement("button",{className:c.a.button,type:"submit"},"Enter")),r.a.createElement("input",{ref:f,className:c.a.input,type:"number",style:{marginBottom:"2rem",fontSize:"8rem"},name:"answer"}))}function k(e){var t=e.questionSets,n=e.currentSum,a=e.currentQuestion;return r.a.createElement("div",{style:{fontSize:"18rem",position:"relative",margin:"auto",maxWidth:"18rem",height:"18rem"}},r.a.createElement("div",{style:{background:"rgba(0,0,0,0.5)",boxShadow:"0px 0px 80px 10px rgba(0,0,0,1)",borderRadius:"20rem",position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),r.a.createElement("div",{style:{position:"relative",top:"-4rem",width:"100%",textAlign:"center"}},t[n][a]))}var D=["rgba(255,255,255,1)","rgba(255,255,255,0.5)"];function I(e){return parseInt(e.toString())<=9?"0"+e:e}function M(e){var t=e.isTrial,n=v(),u=n.config,i=n.saveSession,l=n.setPage,c=n.sessionTimer,s=u.studentName,m=u.totalSums,f=u.totalQuestions,d=u.pauseBetweenQuestionInMs,p=Object(a.useState)(function(e,t){for(var n=[],a=0;a<t;a++)n.push(C(e));return n}(f,m)),g=Object(o.a)(p,1)[0],b=Object(a.useState)(!1),E=Object(o.a)(b,2),h=E[0],S=E[1],y=Object(a.useState)(!1),x=Object(o.a)(y,2),j=x[0],M=x[1],R=Object(a.useState)(0),A=Object(o.a)(R,2),Q=A[0],_=A[1],q=Object(a.useState)(-1),B=Object(o.a)(q,2),z=B[0],J=B[1],P=Object(a.useState)([]),V=Object(o.a)(P,2),Y=V[0],F=V[1];Object(a.useEffect)((function(){var e=null;return j&&(h?e=setInterval((function(){J((function(e){return e<f?e+1:e}))}),d):S(!0)),function(){e&&clearInterval(e)}}),[h,j,d,f]),Object(a.useEffect)((function(){Q===m&&(M(!1),S(!1),J(-1),_(0),t||(i(g,Y),l(2)),F([]))}),[Q,m,Y,g,i,l,t]);var G=z===f,H=Q*f+(-1===z?0:z),K=m*f,L=Math.round(H/K*100),W=[{name:"complete",value:L},{name:"incomplete",value:100-L}],U=Object(a.useState)(""),X=Object(o.a)(U,2),Z=X[0],$=X[1],ee=c.current;return Object(a.useEffect)((function(){var e=setInterval((function(){if(ee){var e=(new Date).getTime()-ee,t=O.a.duration(e);$("".concat(t.hours(),":").concat(I(t.minutes()),":").concat(I(t.seconds())))}}),1e3);return function(){clearInterval(e)}}),[ee]),r.a.createElement("div",{style:{maxWidth:"100%",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flexGrow:"1"}}),r.a.createElement("div",{style:{position:"relative",marginTop:"-1rem",marginRight:"-1rem"}},r.a.createElement(w.f,{width:100,height:100},r.a.createElement(w.e,{animationDuration:100,data:W,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:40,outerRadius:50,fill:"#82ca9d"},W.map((function(e,t){return r.a.createElement(w.d,{key:"cell-".concat(t),fill:D[t],stroke:"none"})})))),r.a.createElement("div",{style:{position:"absolute",top:40,width:"100%",textAlign:"center"}},Z))),!j&&r.a.createElement(T,{studentName:s,setSessionRunning:M,numbers:g[0]}),j&&Q<m&&r.a.createElement("div",{style:{textAlign:"center"}},h&&r.a.createElement("div",null,-1===z&&r.a.createElement("h1",{style:{fontSize:"4rem"}},"Ready !"),z>=0&&!G&&r.a.createElement(k,{questionSets:g,currentSum:Q,currentQuestion:z}),G&&r.a.createElement(N,{setTimerRunning:S,setCurrentQuestion:J,setCurrentSum:_,setAnswers:F,isTrial:t,currentSum:Q,questionSet:g}))))}function R(){return r.a.createElement("div",{style:{padding:"2rem",width:"100%"}},r.a.createElement(M,{isTrial:!1}))}function A(e){var t=e.label,n=e.description,a=e.type,u=e.value,i=e.onValueChange;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("p",{className:c.a.questionTitle},t),r.a.createElement("input",{type:a,className:c.a.input,value:u,onChange:function(e){return i(e.target.value.toUpperCase())}}),r.a.createElement("p",{className:c.a.questionDescription},n))}function Q(){var e=v().config,t=e.studentName,n=e.totalSums,u=e.totalQuestions,i=e.pauseBetweenQuestionInMs,l=Object(a.useState)(0),s=Object(o.a)(l,2),m=s[0],f=s[1],d=v(),g=d.setConfig,b=d.saveSettings;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{display:"flex",position:"fixed",bottom:0,width:"100vw",backgroundColor:"rgba(0,0,0,0.3)"}},m>0&&r.a.createElement("button",{className:c.a.buttonNavigator,onClick:function(){return f((function(e){return e-1}))}},"Back"),r.a.createElement("div",{style:{flexGrow:"1"}}),m<5&&r.a.createElement("button",{className:c.a.buttonNavigator,onClick:function(){return f((function(e){return e+1}))}},"Next"),5===m&&r.a.createElement("button",{className:c.a.buttonNavigator,onClick:function(){g({studentName:t,totalSums:n,totalQuestions:u,pauseBetweenQuestionInMs:i}),b()}},"Save Changes")),r.a.createElement("div",{style:{padding:"2rem",width:"100%",background:"rgba(0,0,0,0.5)",boxShadow:"0px 30px 80px 10px rgba(0,0,0,0.7)"}},0===m&&r.a.createElement("h1",null,"Mental Math Exercise"),1===m&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f((function(e){return e+1}))}},r.a.createElement(A,{label:"Student name ?",type:"text",value:t,onValueChange:function(e){return g((function(t){return Object(p.a)({},t,{studentName:e})}))},description:"Your name will be recorded and your historical session will be kept in the device"})),2===m&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f((function(e){return e+1}))}},r.a.createElement(A,{label:"Total sums in each session ?",type:"number",value:n,onValueChange:function(e){return g((function(t){return Object(p.a)({},t,{totalSums:parseInt(e)})}))},description:"For competition practice, total sums in a session usually `200`"})),3===m&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f((function(e){return e+1}))}},r.a.createElement(A,{label:"Total questions in each sums ?",type:"number",value:u,onValueChange:function(e){return g((function(t){return Object(p.a)({},t,{totalQuestions:parseInt(e)})}))},description:"For competition practice, recommended total questions in a sum is `6`"})),4===m&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f((function(e){return e+1}))}},r.a.createElement(A,{label:"Pause between question  ?",type:"number",value:i,onValueChange:function(e){return g((function(t){return Object(p.a)({},t,{pauseBetweenQuestionInMs:parseInt(e)})}))},description:"For competition practice, recommended pause is `1000` milliseconds (1 second)"})),5===m&&r.a.createElement(M,{isTrial:!0})))}function _(){var e=v().getSession,t=Object(a.useRef)(e());if(!(t.current&&t.current.length>0))return r.a.createElement("div",{style:{marginTop:"5rem"}},"No Report Yet");var n=t.current[t.current.length-1],u=n.sums.reduce((function(e,t){var n=t.questions.reduce((function(e,t){return e+t}),0);return t.answer===n?++e:e}),0),i=Math.round(u/n.sums.length*100),o=n.duration,l=Math.round(o/1e3),c=Math.floor(l/60),s=l%60;return r.a.createElement("div",{style:{fontSize:"1.5rem",width:"100%",padding:"1rem",paddingTop:"3rem",background:"rgba(0,0,0,0.4)",boxShadow:"0px 30px 30px 0px rgba(0,0,0,0.5)"}},r.a.createElement("table",{style:{fontSize:"1rem"}},r.a.createElement("tr",null,r.a.createElement("td",null,"Date"),r.a.createElement("td",null,O()(new Date(n.date)).format("DD MMM YYYY HH:mm:ss"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Sums"),r.a.createElement("td",null,n.sums.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Questions"),r.a.createElement("td",null,n.sums.length*n.sums[0].questions.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Score"),r.a.createElement("td",null,i," %")),r.a.createElement("tr",null,r.a.createElement("td",null,"Completion time"),r.a.createElement("td",null,c," Min : ",s<9?"0".concat(s):s," Sec"))),r.a.createElement("div",{style:{width:"100%",height:300}},r.a.createElement(w.g,null,r.a.createElement(w.b,{data:n.sums,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(w.c,{strokeDasharray:"3 3"}),r.a.createElement(w.h,null),r.a.createElement(w.a,{dataKey:"time",fill:"rgba(255,255,255,0.9)"})))))}var q=n(412),B=n(175),z=n.n(B),J=n(413);function P(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],u=t[1],i=v().setPage,l=Object(a.useRef)(function(){var e=localStorage.getItem("config");return!!(e&&e.length>0)}());return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{anchor:"left",open:n,onClose:function(){return u(!1)}},r.a.createElement("div",{style:{padding:"1rem",backgroundColor:"rgba(0,0,0,1)",height:"100%"}},r.a.createElement("div",{className:c.a.button,onClick:function(){i(1),u(!1)}},"Home"),r.a.createElement("div",{className:c.a.button,style:{marginTop:"2rem"},onClick:function(){i(0),u(!1)}},"Change Settings"),r.a.createElement("div",{className:c.a.button,style:{marginTop:"2rem"},onClick:function(){i(2),u(!1)}},"View Report"))),l.current&&r.a.createElement("div",{style:{position:"absolute",top:"0",left:0}},r.a.createElement(J.a,{onClick:function(){return u(!0)}},r.a.createElement(z.a,{style:{color:"white",fontSize:"2rem"}}))))}function V(){return r.a.createElement(b,null,(function(e){return r.a.createElement(S,null,r.a.createElement("div",{className:c.a.main},0===e&&r.a.createElement(Q,null),1===e&&r.a.createElement(R,null),2===e&&r.a.createElement(_,null),r.a.createElement(P,null)))}))}i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.d3f962ad.chunk.js.map