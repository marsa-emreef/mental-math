(this["webpackJsonpmental-math"]=this["webpackJsonpmental-math"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"App_button__3Wu2Q",buttonNavigator:"App_buttonNavigator__3DrKD",main:"App_main__3g0VX",input:"App_input__coDI0",questionTitle:"App_questionTitle__1GdSl",questionDescription:"App_questionDescription__1lfpj"}},198:function(e,t,n){e.exports=n(384)},384:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),u=n.n(o),l=n(15),c=n(11),i=n.n(c),s=n(174);function m(e){var t=e.soundRef,n=Object(a.useRef)(null),o=Object(a.useRef)(null),u=Object(a.useRef)(null),l=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),s=Object(a.useRef)(null),m=Object(a.useRef)(null),d=Object(a.useRef)(null),p=Object(a.useRef)(null),f=Object(a.useRef)(null),g=Object(a.useRef)(null),E=Object(a.useRef)(null),b=Object(a.useRef)(null),h=Object(a.useRef)(null),v=Object(a.useRef)(null),y=Object(a.useRef)(null),S=Object(a.useRef)(null);return t.current={1:n,2:o,3:u,4:l,5:c,6:i,7:s,8:m,9:d,"-1":p,"-2":f,"-3":g,"-4":E,"-5":b,"-6":h,"-7":v,"-8":y,"-9":S},r.a.createElement("div",{style:{width:1,height:1,overflow:"hidden"}},r.a.createElement("audio",{ref:n,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-1.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:o,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-2.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:u,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-3.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:l,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-4.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:c,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-5.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:i,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-6.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:s,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-7.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:m,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-8.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:d,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/plus-9.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:p,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-1.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:f,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-2.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:g,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-3.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:E,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-4.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:b,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-5.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:h,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-6.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:v,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-7.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:y,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-8.mp3"),type:"audio/mpeg"})),r.a.createElement("audio",{ref:S,controls:!0,preload:"auto"},r.a.createElement("source",{src:"".concat("/mental-math","/audio/minus-9.mp3"),type:"audio/mpeg"})))}var d=n(37),p=Object(a.createContext)(null);function f(e){var t=e.children,n=Object(a.useState)((function(){var e=localStorage.getItem("config");return e&&e.length>0?JSON.parse(e):{studentName:"RAOUL ARDY",totalSums:200,totalQuestions:6,pauseBetweenQuestionInMs:1e3}})),o=Object(l.a)(n,2),u=o[0],c=o[1],i=Object(a.useState)(0),s=Object(l.a)(i,2),m=s[0],f=s[1];function g(){var e=localStorage.getItem("sessions");return e=e&&e.length>0?JSON.parse(e):[]}Object(a.useEffect)((function(){var e=localStorage.getItem("config");e&&e.length>0?(c(JSON.parse(e)),f(1)):f(0)}),[]);var E=Object(a.useRef)();return r.a.createElement(p.Provider,{value:{setPage:f,setConfig:c,config:u,saveSettings:function(){localStorage.setItem("config",JSON.stringify(u)),window.location.reload()},saveSession:function(e,t){var n=(new Date).getTime()-E.current,a=t.map((function(t,n){return Object(d.a)({},t,{questions:e[n]})})),r={date:new Date,sums:a,duration:n},o=g();o.push(r),localStorage.setItem("sessions",JSON.stringify(o))},getSession:g,markSessionBegin:function(){E.current=(new Date).getTime()}}},t(m))}function g(){return Object(a.useContext)(p)}var E=Object(a.createContext)(null);function b(e){var t=e.children,n=Object(a.useRef)(null),o=g().config;return r.a.createElement(E.Provider,{value:{playSounds:function(e){e.forEach((function(e,t){setTimeout((function(){n.current[e.toString()].current.play()}),(t+1)*o.pauseBetweenQuestionInMs)}))}}},r.a.createElement(m,{soundRef:n}),t)}function h(){return{playSounds:Object(a.useContext)(E).playSounds}}var v=n(21);function y(e){var t=e.reduce((function(e,t){return e+t}),0),n=Math.random()<=.3,a=(Math.floor(9*Math.random())+1)*(n?-1:1);return t+a>0&&Math.abs(e[e.length-1])!==Math.abs(a)?a:y(e)}function S(e){for(var t=[];t.length<e;)t.push(y(t));return t}function O(e){var t=e.studentName,n=e.setSessionRunning,a=e.numbers,o=g().markSessionBegin,u=h().playSounds;return r.a.createElement("div",{style:{display:"inline-block",margin:"auto",marginTop:"2rem",padding:"1rem",background:"rgba(0,0,0,0.5)"}},r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"5rem"}},t),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("button",{onClick:function(){u(a)}},"Test Sound 2"),r.a.createElement("br",null),r.a.createElement("button",{className:i.a.button,onClick:function(){o(),n(!0),u(a)}},"Click Here To Begin Session")))}function j(e){var t=e.setTimerRunning,n=e.setCurrentQuestion,o=e.setCurrentSum,u=e.setAnswers,l=e.isTrial,c=e.currentSum,m=e.questionSet,d=Object(a.useRef)(null),p=Object(a.useRef)(null),f=h().playSounds;return Object(a.useEffect)((function(){p.current=(new Date).getTime(),d.current.focus()}),[]),r.a.createElement("form",{style:{width:"100%",display:"flex",flexDirection:"column"},action:"",onSubmit:function(e){e.preventDefault();var a=parseInt(e.target.elements.answer.value);a>=0&&(!function(e){var t=e.answer,n=e.setTimerRunning,a=e.setCurrentSum,r=e.setCurrentQuestion,o=e.setAnswers,u=e.timeLogger;n(!1),a((function(e){return e+1})),r(-1);var l=(new Date).getTime()-u.current;o((function(e){return[].concat(Object(s.a)(e),[{answer:t,time:l}])}))}({answer:a,setTimerRunning:t,setCurrentQuestion:n,setCurrentSum:o,setAnswers:u,timeLogger:p}),f(m[c+1]))}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement("div",{style:{textAlign:"left",fontSize:"2rem"}},"Answer :"),r.a.createElement("div",{style:{flexGrow:"1"}}),!l&&r.a.createElement("button",{className:i.a.button,type:"submit"},"Enter")),r.a.createElement("input",{ref:d,className:i.a.input,type:"number",style:{marginBottom:"2rem",fontSize:"8rem"},name:"answer"}))}function w(e){var t=e.questionSets,n=e.currentSum,a=e.currentQuestion;return r.a.createElement("div",{style:{fontSize:"18rem",position:"relative",margin:"auto",maxWidth:"18rem",height:"18rem"}},r.a.createElement("div",{style:{background:"rgba(0,0,0,0.5)",boxShadow:"0px 0px 80px 10px rgba(0,0,0,1)",borderRadius:"20rem",position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),r.a.createElement("div",{style:{position:"relative",top:"-4rem",width:"100%",textAlign:"center"}},t[n][a]))}var x=["rgba(255,255,255,1)","rgba(255,255,255,0.5)"];function R(e){var t=e.isTrial,n=g(),o=n.config,u=n.saveSession,c=n.setPage,i=o.studentName,s=o.totalSums,m=o.totalQuestions,d=o.pauseBetweenQuestionInMs,p=Object(a.useState)(function(e,t){for(var n=[],a=0;a<t;a++)n.push(S(e));return n}(m,s)),f=Object(l.a)(p,1)[0],E=Object(a.useState)(!1),b=Object(l.a)(E,2),y=b[0],R=b[1],C=Object(a.useState)(!1),N=Object(l.a)(C,2),T=N[0],k=N[1],D=Object(a.useState)(0),I=Object(l.a)(D,2),M=I[0],Q=I[1],A=Object(a.useState)(-1),_=Object(l.a)(A,2),q=_[0],B=_[1],z=Object(a.useState)([]),J=Object(l.a)(z,2),P=J[0],V=J[1],Y=h().playSounds;Object(a.useEffect)((function(){var e=null;return T&&(y?e=setInterval((function(){B((function(e){return e<m?e+1:e}))}),d):R(!0)),function(){e&&clearInterval(e)}}),[y,T,d,m]),Object(a.useEffect)((function(){M===s&&(k(!1),R(!1),B(-1),Q(0),t||(u(f,P),c(2)),V([]))}),[M,s,P,f,u,c,t]);var F=q===m,G=M*m+(-1===q?0:q),H=s*m,K=Math.round(G/H*100),L=[{name:"complete",value:K},{name:"incomplete",value:100-K}];return r.a.createElement("div",{style:{maxWidth:"100%",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flexGrow:"1"}}),r.a.createElement(v.f,{width:100,height:100},r.a.createElement(v.e,{animationDuration:100,data:L,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:30,outerRadius:40,fill:"#82ca9d"},L.map((function(e,t){return r.a.createElement(v.d,{key:"cell-".concat(t),fill:x[t],stroke:"none"})}))))),r.a.createElement("button",{onClick:function(){return Y([3,5,2,3,5])}},"Play Sounds"),r.a.createElement("br",null),!T&&r.a.createElement(O,{studentName:i,setSessionRunning:k,numbers:f[0]}),T&&M<s&&r.a.createElement("div",{style:{textAlign:"center"}},y&&r.a.createElement("div",null,-1===q&&r.a.createElement("h1",{style:{fontSize:"4rem"}},"Ready !"),q>=0&&!F&&r.a.createElement(w,{questionSets:f,currentSum:M,currentQuestion:q}),F&&r.a.createElement(j,{setTimerRunning:R,setCurrentQuestion:B,setCurrentSum:Q,setAnswers:V,isTrial:t,currentSum:M,questionSet:f}))))}function C(){return r.a.createElement("div",{style:{padding:"2rem",width:"100%"}},r.a.createElement(R,{isTrial:!1}))}function N(e){var t=e.label,n=e.description,a=e.type,o=e.value,u=e.onValueChange;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("p",{className:i.a.questionTitle},t),r.a.createElement("input",{type:a,className:i.a.input,value:o,onChange:function(e){return u(e.target.value.toUpperCase())}}),r.a.createElement("p",{className:i.a.questionDescription},n))}function T(){var e=g().config,t=e.studentName,n=e.totalSums,o=e.totalQuestions,u=e.pauseBetweenQuestionInMs,c=Object(a.useState)(0),s=Object(l.a)(c,2),m=s[0],p=s[1],f=g(),E=f.setConfig,b=f.saveSettings;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{display:"flex",position:"fixed",bottom:0,width:"100vw",backgroundColor:"rgba(0,0,0,0.3)"}},m>0&&r.a.createElement("button",{className:i.a.buttonNavigator,onClick:function(){return p((function(e){return e-1}))}},"Back"),r.a.createElement("div",{style:{flexGrow:"1"}}),m<5&&r.a.createElement("button",{className:i.a.buttonNavigator,onClick:function(){return p((function(e){return e+1}))}},"Next"),5===m&&r.a.createElement("button",{className:i.a.buttonNavigator,onClick:function(){E({studentName:t,totalSums:n,totalQuestions:o,pauseBetweenQuestionInMs:u}),b()}},"Save Changes")),r.a.createElement("div",{style:{padding:"2rem",width:"100%",background:"rgba(0,0,0,0.5)",boxShadow:"0px 30px 80px 10px rgba(0,0,0,0.7)"}},0===m&&r.a.createElement("h1",null,"Mental Math Exercise"),1===m&&r.a.createElement(N,{label:"Student name ?",type:"text",value:t,onValueChange:function(e){return E((function(t){return Object(d.a)({},t,{studentName:e})}))},description:"Your name will be recorded and your historical session will be kept in the device"}),2===m&&r.a.createElement(N,{label:"Total sums in each session ?",type:"number",value:n,onValueChange:function(e){return E((function(t){return Object(d.a)({},t,{totalSums:parseInt(e)})}))},description:"For competition practice, total sums in a session usually `200`"}),3===m&&r.a.createElement(N,{label:"Total questions in each sums ?",type:"number",value:o,onValueChange:function(e){return E((function(t){return Object(d.a)({},t,{totalQuestions:parseInt(e)})}))},description:"For competition practice, recommended total questions in a sum is `6`"}),4===m&&r.a.createElement(N,{label:"Pause between question  ?",type:"number",value:u,onValueChange:function(e){return E((function(t){return Object(d.a)({},t,{pauseBetweenQuestionInMs:parseInt(e)})}))},description:"For competition practice, recommended pause is `1000` milliseconds (1 second)"}),5===m&&r.a.createElement(R,{isTrial:!0})))}var k=n(171),D=n.n(k);function I(){var e=g().getSession,t=Object(a.useRef)(e());if(!(t.current&&t.current.length>0))return r.a.createElement("div",{style:{marginTop:"5rem"}},"No Report Yet");var n=t.current[t.current.length-1],o=n.sums.reduce((function(e,t){var n=t.questions.reduce((function(e,t){return e+t}),0);return t.answer===n?++e:e}),0),u=Math.round(o/n.sums.length*100),l=n.duration,c=Math.round(l/1e3),i=Math.floor(c/60),s=c%60;return r.a.createElement("div",{style:{fontSize:"1.5rem",width:"100%",padding:"1rem",paddingTop:"3rem",background:"rgba(0,0,0,0.4)",boxShadow:"0px 30px 30px 0px rgba(0,0,0,0.5)"}},r.a.createElement("table",{style:{fontSize:"1rem"}},r.a.createElement("tr",null,r.a.createElement("td",null,"Date"),r.a.createElement("td",null,D()(new Date(n.date)).format("DD MMM YYYY HH:mm:ss"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Sums"),r.a.createElement("td",null,n.sums.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Questions"),r.a.createElement("td",null,n.sums.length*n.sums[0].questions.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Score"),r.a.createElement("td",null,u," %")),r.a.createElement("tr",null,r.a.createElement("td",null,"Completion time"),r.a.createElement("td",null,i," Min : ",s<9?"0".concat(s):s," Sec"))),r.a.createElement("div",{style:{width:"100%",height:300}},r.a.createElement(v.g,null,r.a.createElement(v.b,{data:n.sums,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(v.c,{strokeDasharray:"3 3"}),r.a.createElement(v.h,null),r.a.createElement(v.a,{dataKey:"time",fill:"rgba(255,255,255,0.9)"})))))}var M=n(409),Q=n(173),A=n.n(Q),_=n(410);function q(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],u=g().setPage,c=Object(a.useRef)(function(){var e=localStorage.getItem("config");return!!(e&&e.length>0)}());return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{anchor:"left",open:n,onClose:function(){return o(!1)}},r.a.createElement("div",{style:{padding:"1rem",backgroundColor:"rgba(0,0,0,1)",height:"100%"}},r.a.createElement("div",{className:i.a.button,onClick:function(){u(1),o(!1)}},"Home"),r.a.createElement("div",{className:i.a.button,style:{marginTop:"2rem"},onClick:function(){u(0),o(!1)}},"Change Settings"),r.a.createElement("div",{className:i.a.button,style:{marginTop:"2rem"},onClick:function(){u(2),o(!1)}},"View Report"))),c.current&&r.a.createElement("div",{style:{position:"absolute",top:"0",left:0}},r.a.createElement(_.a,{onClick:function(){return o(!0)}},r.a.createElement(A.a,{style:{color:"white",fontSize:"2rem"}}))))}function B(){return r.a.createElement(f,null,(function(e){return r.a.createElement(b,null,r.a.createElement("div",{className:i.a.main},0===e&&r.a.createElement(T,null),1===e&&r.a.createElement(C,null),2===e&&r.a.createElement(I,null),r.a.createElement(q,null)))}))}u.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.3cf46083.chunk.js.map