(this["webpackJsonpAHS-Dashboard"]=this["webpackJsonpAHS-Dashboard"]||[]).push([[25],{624:function(e,a,t){"use strict";var l=function(){for(var e={},a=document.styleSheets,t="",l=a.length-1;l>-1;l--){for(var s=a[l].cssRules,r=s.length-1;r>-1;r--)if(".ie-custom-properties"===s[r].selectorText){t=s[r].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(a){if(a){var t=a.split(": ")[0],l=a.split(": ")[1];t&&l&&(e["--".concat(t.trim())]=l.trim())}})),e},s=function(){return Boolean(document.documentMode)&&document.documentMode>=10},r=function(e){return e.match(/^--.*/i)};a.a=function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(r(e)&&s()){var c=l();a=c[e]}else a=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return a}},675:function(e,a,t){"use strict";t.r(a);var l=t(1),s=t.n(l),r=t(613),c=t(617),n=t(619),m=t(624),o=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if("undefined"===typeof e)throw new TypeError("Hex color is not defined");var t,l,s,r=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!r)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),l=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),l=parseInt(e.slice(2,3),16),s=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(l,", ").concat(s,", ").concat(a/100,")")},i=Object(m.a)("success")||"#4dbd74",u=Object(m.a)("info")||"#20a8d8",d=Object(m.a)("danger")||"#f86c6b",E=function(e){var a=function(e,a){return Math.floor(Math.random()*(a-e+1)+e)},t=function(){for(var e=[],t=[],l=[],s=0;s<=27;s++)e.push(a(50,200)),t.push(a(80,100)),l.push(65);return[{label:"My First dataset",backgroundColor:o(u,10),borderColor:u,pointHoverBackgroundColor:u,borderWidth:2,data:e},{label:"My Second dataset",backgroundColor:"transparent",borderColor:i,pointHoverBackgroundColor:i,borderWidth:2,data:t},{label:"My Third dataset",backgroundColor:"transparent",borderColor:d,pointHoverBackgroundColor:d,borderWidth:1,borderDash:[8,5],data:l}]}(),l={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};return s.a.createElement(n.c,Object.assign({},e,{datasets:t,options:l,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}))},g=Object(l.lazy)((function(){return t.e(17).then(t.bind(null,632))})),p=Object(l.lazy)((function(){return t.e(22).then(t.bind(null,630))}));a.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g,null),s.a.createElement(r.j,null,s.a.createElement(r.k,null,s.a.createElement(r.wb,null,s.a.createElement(r.u,{sm:"5"},s.a.createElement("h4",{id:"traffic",className:"card-title mb-0"},"Traffic"),s.a.createElement("div",{className:"small text-muted"},"November 2017")),s.a.createElement(r.u,{sm:"7",className:"d-none d-md-block"},s.a.createElement(r.f,{color:"primary",className:"float-right"},s.a.createElement(c.a,{name:"cil-cloud-download"})),s.a.createElement(r.g,{className:"float-right mr-3"},["Day","Month","Year"].map((function(e){return s.a.createElement(r.f,{color:"outline-secondary",key:e,className:"mx-0",active:"Month"===e},e)}))))),s.a.createElement(E,{style:{height:"300px",marginTop:"40px"}})),s.a.createElement(r.l,null,s.a.createElement(r.wb,{className:"text-center"},s.a.createElement(r.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},s.a.createElement("div",{className:"text-muted"},"Visits"),s.a.createElement("strong",null,"29.703 Users (40%)"),s.a.createElement(r.ub,{className:"progress-xs mt-2",precision:1,color:"success",value:40})),s.a.createElement(r.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none"},s.a.createElement("div",{className:"text-muted"},"Unique"),s.a.createElement("strong",null,"24.093 Users (20%)"),s.a.createElement(r.ub,{className:"progress-xs mt-2",precision:1,color:"info",value:40})),s.a.createElement(r.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},s.a.createElement("div",{className:"text-muted"},"Pageviews"),s.a.createElement("strong",null,"78.706 Views (60%)"),s.a.createElement(r.ub,{className:"progress-xs mt-2",precision:1,color:"warning",value:40})),s.a.createElement(r.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},s.a.createElement("div",{className:"text-muted"},"New Users"),s.a.createElement("strong",null,"22.123 Users (80%)"),s.a.createElement(r.ub,{className:"progress-xs mt-2",precision:1,color:"danger",value:40})),s.a.createElement(r.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none"},s.a.createElement("div",{className:"text-muted"},"Bounce Rate"),s.a.createElement("strong",null,"Average Rate (40.15%)"),s.a.createElement(r.ub,{className:"progress-xs mt-2",precision:1,value:40}))))),s.a.createElement(p,{withCharts:!0}),s.a.createElement(r.wb,null,s.a.createElement(r.u,null,s.a.createElement(r.j,null,s.a.createElement(r.n,null,"Traffic "," & "," Sales"),s.a.createElement(r.k,null,s.a.createElement(r.wb,null,s.a.createElement(r.u,{xs:"12",md:"6",xl:"6"},s.a.createElement(r.wb,null,s.a.createElement(r.u,{sm:"6"},s.a.createElement(r.i,{color:"info"},s.a.createElement("small",{className:"text-muted"},"New Clients"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"9,123"))),s.a.createElement(r.u,{sm:"6"},s.a.createElement(r.i,{color:"danger"},s.a.createElement("small",{className:"text-muted"},"Recurring Clients"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"22,643")))),s.a.createElement("hr",{className:"mt-0"}),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Monday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"34"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"78"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Tuesday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"56"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"94"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Wednesday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"12"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"67"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Thursday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"43"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"91"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Friday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"22"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"73"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Saturday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"53"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"82"}))),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-prepend"},s.a.createElement("span",{className:"progress-group-text"},"Sunday")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"9"}),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"69"}))),s.a.createElement("div",{className:"legend text-center"},s.a.createElement("small",null,s.a.createElement("sup",{className:"px-1"},s.a.createElement(r.b,{shape:"pill",color:"info"},"\xa0")),"New clients \xa0",s.a.createElement("sup",{className:"px-1"},s.a.createElement(r.b,{shape:"pill",color:"danger"},"\xa0")),"Recurring clients"))),s.a.createElement(r.u,{xs:"12",md:"6",xl:"6"},s.a.createElement(r.wb,null,s.a.createElement(r.u,{sm:"6"},s.a.createElement(r.i,{color:"warning"},s.a.createElement("small",{className:"text-muted"},"Pageviews"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"78,623"))),s.a.createElement(r.u,{sm:"6"},s.a.createElement(r.i,{color:"success"},s.a.createElement("small",{className:"text-muted"},"Organic"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"49,123")))),s.a.createElement("hr",{className:"mt-0"}),s.a.createElement("div",{className:"progress-group mb-4"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{className:"progress-group-icon",name:"cil-user"}),s.a.createElement("span",{className:"title"},"Male"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"43%")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"warning",value:"43"}))),s.a.createElement("div",{className:"progress-group mb-5"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{className:"progress-group-icon",name:"cil-user-female"}),s.a.createElement("span",{className:"title"},"Female"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"37%")),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"warning",value:"37"}))),s.a.createElement("div",{className:"progress-group"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{className:"progress-group-icon",name:"cil-globe-alt"}),s.a.createElement("span",{className:"title"},"Organic Search"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",s.a.createElement("span",{className:"text-muted small"},"(56%)"))),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"56"}))),s.a.createElement("div",{className:"progress-group"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{name:"cib-facebook",className:"progress-group-icon"}),s.a.createElement("span",{className:"title"},"Facebook"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",s.a.createElement("span",{className:"text-muted small"},"(15%)"))),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"15"}))),s.a.createElement("div",{className:"progress-group"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{name:"cib-twitter",className:"progress-group-icon"}),s.a.createElement("span",{className:"title"},"Twitter"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",s.a.createElement("span",{className:"text-muted small"},"(11%)"))),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"11"}))),s.a.createElement("div",{className:"progress-group"},s.a.createElement("div",{className:"progress-group-header"},s.a.createElement(c.a,{name:"cib-linkedin",className:"progress-group-icon"}),s.a.createElement("span",{className:"title"},"LinkedIn"),s.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",s.a.createElement("span",{className:"text-muted small"},"(8%)"))),s.a.createElement("div",{className:"progress-group-bars"},s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"8"}))),s.a.createElement("div",{className:"divider text-center"},s.a.createElement(r.f,{color:"link",size:"sm",className:"text-muted"},s.a.createElement(c.a,{name:"cil-options"}))))),s.a.createElement("br",null),s.a.createElement("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},s.a.createElement(c.a,{name:"cil-people"})),s.a.createElement("th",null,"User"),s.a.createElement("th",{className:"text-center"},"Country"),s.a.createElement("th",null,"Usage"),s.a.createElement("th",{className:"text-center"},"Payment Method"),s.a.createElement("th",null,"Activity"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-success"}))),s.a.createElement("td",null,s.a.createElement("div",null,"Yiorgos Avraamu"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-us",title:"us",id:"us"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"50%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"50"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-cc-mastercard"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"10 sec ago"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-danger"}))),s.a.createElement("td",null,s.a.createElement("div",null,"Avram Tarasios"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"Recurring")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-br",title:"br",id:"br"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"10%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"10"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-cc-visa"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"5 minutes ago"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-warning"}))),s.a.createElement("td",null,s.a.createElement("div",null,"Quintin Ed"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-in",title:"in",id:"in"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"74%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"warning",value:"74"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-stripe"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"1 hour ago"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-secondary"}))),s.a.createElement("td",null,s.a.createElement("div",null,"En\xe9as Kwadwo"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"98%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"danger",value:"98"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-paypal"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"Last month"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-success"}))),s.a.createElement("td",null,s.a.createElement("div",null,"Agapetus Tade\xe1\u0161"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-es",title:"es",id:"es"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"22%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"info",value:"22"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-google-pay"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"Last week"))),s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"c-avatar"},s.a.createElement("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"c-avatar-status bg-danger"}))),s.a.createElement("td",null,s.a.createElement("div",null,"Friderik D\xe1vid"),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})),s.a.createElement("td",null,s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement("strong",null,"43%")),s.a.createElement("div",{className:"float-right"},s.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),s.a.createElement(r.ub,{className:"progress-xs",color:"success",value:"43"})),s.a.createElement("td",{className:"text-center"},s.a.createElement(c.a,{height:25,name:"cib-cc-amex"})),s.a.createElement("td",null,s.a.createElement("div",{className:"small text-muted"},"Last login"),s.a.createElement("strong",null,"Yesterday"))))))))))}}}]);
//# sourceMappingURL=25.07059042.chunk.js.map