(this["webpackJsonpAHS-Dashboard"]=this["webpackJsonpAHS-Dashboard"]||[]).push([[23],{627:function(e,a,t){"use strict";var n=t(1),l=t.n(n),r=l.a.lazy((function(){return t.e(20).then(t.bind(null,674))})),s=l.a.lazy((function(){return t.e(24).then(t.bind(null,641))})),m=l.a.lazy((function(){return t.e(28).then(t.bind(null,642))})),c=l.a.lazy((function(){return t.e(9).then(t.bind(null,643))})),o=l.a.lazy((function(){return t.e(10).then(t.bind(null,644))})),i=l.a.lazy((function(){return t.e(11).then(t.bind(null,645))})),d=l.a.lazy((function(){return t.e(12).then(t.bind(null,646))})),u=l.a.lazy((function(){return t.e(29).then(t.bind(null,647))})),b=l.a.lazy((function(){return t.e(13).then(t.bind(null,648))})),p=l.a.lazy((function(){return t.e(14).then(t.bind(null,649))})),E=l.a.lazy((function(){return t.e(30).then(t.bind(null,650))})),N=l.a.lazy((function(){return t.e(15).then(t.bind(null,651))})),g=l.a.lazy((function(){return t.e(31).then(t.bind(null,652))})),h=l.a.lazy((function(){return t.e(32).then(t.bind(null,653))})),v=l.a.lazy((function(){return t.e(33).then(t.bind(null,654))})),f=l.a.lazy((function(){return t.e(16).then(t.bind(null,655))})),C=l.a.lazy((function(){return t.e(34).then(t.bind(null,656))})),S=l.a.lazy((function(){return t.e(35).then(t.bind(null,657))})),x=l.a.lazy((function(){return t.e(36).then(t.bind(null,658))})),_=l.a.lazy((function(){return t.e(37).then(t.bind(null,659))})),y=l.a.lazy((function(){return t.e(38).then(t.bind(null,660))})),w=l.a.lazy((function(){return Promise.all([t.e(1),t.e(39)]).then(t.bind(null,661))})),I=l.a.lazy((function(){return Promise.all([t.e(1),t.e(25)]).then(t.bind(null,675))})),z=l.a.lazy((function(){return Promise.all([t.e(2),t.e(48),t.e(26)]).then(t.bind(null,665))})),k=l.a.lazy((function(){return Promise.all([t.e(2),t.e(47),t.e(27)]).then(t.bind(null,666))})),D=l.a.lazy((function(){return Promise.all([t.e(2),t.e(40)]).then(t.bind(null,622))})),B=l.a.lazy((function(){return t.e(18).then(t.bind(null,667))})),P=l.a.lazy((function(){return t.e(41).then(t.bind(null,668))})),L=l.a.lazy((function(){return t.e(19).then(t.bind(null,669))})),T=l.a.lazy((function(){return t.e(21).then(t.bind(null,676))})),U=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:I},{path:"/theme",name:"Theme",component:T,exact:!0},{path:"/theme/colors",name:"Colors",component:T},{path:"/theme/typography",name:"Typography",component:l.a.lazy((function(){return t.e(46).then(t.bind(null,670))}))},{path:"/base",name:"Base",component:c,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:m},{path:"/base/cards",name:"Cards",component:c},{path:"/base/carousels",name:"Carousel",component:o},{path:"/base/collapses",name:"Collapse",component:i},{path:"/base/forms",name:"Forms",component:d},{path:"/base/jumbotrons",name:"Jumbotrons",component:u},{path:"/base/list-groups",name:"List Groups",component:b},{path:"/base/navbars",name:"Navbars",component:p},{path:"/base/navs",name:"Navs",component:E},{path:"/base/paginations",name:"Paginations",component:N},{path:"/base/popovers",name:"Popovers",component:g},{path:"/base/progress-bar",name:"Progress Bar",component:h},{path:"/base/switches",name:"Switches",component:v},{path:"/base/tables",name:"Tables",component:s},{path:"/base/tabs",name:"Tabs",component:f},{path:"/base/tooltips",name:"Tooltips",component:C},{path:"/buttons",name:"Buttons",component:y,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:y},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:x},{path:"/buttons/button-groups",name:"Button Groups",component:_},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:S},{path:"/charts",name:"Charts",component:w},{path:"/icons",exact:!0,name:"Icons",component:z},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:z},{path:"/icons/flags",name:"Flags",component:k},{path:"/icons/brands",name:"Brands",component:D},{path:"/notifications",name:"Notifications",component:B,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:B},{path:"/notifications/badges",name:"Badges",component:P},{path:"/notifications/modals",name:"Modals",component:L},{path:"/notifications/toaster",name:"Toaster",component:r},{path:"/widgets",name:"Widgets",component:l.a.lazy((function(){return Promise.all([t.e(1),t.e(6)]).then(t.bind(null,671))}))},{path:"/users",exact:!0,name:"Users",component:l.a.lazy((function(){return t.e(8).then(t.bind(null,672))}))},{path:"/users/:id",exact:!0,name:"User Details",component:l.a.lazy((function(){return t.e(7).then(t.bind(null,673))}))}];a.a=U},687:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(19),s=t(613),m=t(627),c=l.a.createElement("div",{className:"pt-3 text-center"},l.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),o=l.a.memo((function(){return l.a.createElement("main",{className:"c-main"},l.a.createElement(s.w,{fluid:!0},l.a.createElement(n.Suspense,{fallback:c},l.a.createElement(r.d,null,m.a.map((function(e,a){return e.component&&l.a.createElement(r.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return l.a.createElement(s.H,null,l.a.createElement(e.component,a))}})})),l.a.createElement(r.a,{from:"/",to:"/dashboard"})))))})),i=l.a.memo((function(){return l.a.createElement(s.I,{fixed:!1},l.a.createElement("div",null,l.a.createElement("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer"},"CoreUI"),l.a.createElement("span",{className:"ml-1"},"\xa9 2020 creativeLabs.")),l.a.createElement("div",{className:"mfs-auto"},l.a.createElement("span",{className:"mr-1"},"Powered by"),l.a.createElement("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer"},"CoreUI for React")))})),d=t(159),u=t(617),b=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.sidebarShow}));return l.a.createElement(s.M,{withSubheader:!0},l.a.createElement(s.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:t})}}),l.a.createElement(s.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:t})}}),l.a.createElement(s.N,{className:"mx-auto d-lg-none",to:"/"},l.a.createElement(u.a,{name:"logo",height:"48",alt:"Logo"})),l.a.createElement(s.O,{className:"d-md-down-none mr-auto"},l.a.createElement(s.P,{className:"px-3"},l.a.createElement(s.Q,{to:"/dashboard"},"Dashboard")),l.a.createElement(s.P,{className:"px-3"},l.a.createElement(s.Q,{to:"/users"},"Users")),l.a.createElement(s.P,{className:"px-3"},l.a.createElement(s.Q,null,"Settings"))),l.a.createElement(s.O,{className:"px-3"},l.a.createElement(N,null),l.a.createElement(g,null),l.a.createElement(E,null),l.a.createElement(p,null)),l.a.createElement(s.Gb,{className:"px-3 justify-content-between"},l.a.createElement(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:m.a}),l.a.createElement("div",{className:"d-md-down-none mfe-2 c-subheader-nav"},l.a.createElement(s.db,{className:"c-subheader-nav-link",href:"#"},l.a.createElement(u.a,{name:"cil-speech",alt:"Settings"})),l.a.createElement(s.db,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard"},l.a.createElement(u.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"),l.a.createElement(s.db,{className:"c-subheader-nav-link",href:"#"},l.a.createElement(u.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"))))},p=function(){return l.a.createElement(s.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},l.a.createElement(s.E,{className:"c-header-nav-link",caret:!1},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))),l.a.createElement(s.D,{className:"pt-0",placement:"bottom-end"},l.a.createElement(s.C,{header:!0,tag:"div",color:"light",className:"text-center"},l.a.createElement("strong",null,"Account")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-bell",className:"mfe-2"}),"Updates",l.a.createElement(s.b,{color:"info",className:"mfs-auto"},"42")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-envelope-open",className:"mfe-2"}),"Messages",l.a.createElement(s.b,{color:"success",className:"mfs-auto"},"42")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-task",className:"mfe-2"}),"Tasks",l.a.createElement(s.b,{color:"danger",className:"mfs-auto"},"42")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-comment-square",className:"mfe-2"}),"Comments",l.a.createElement(s.b,{color:"warning",className:"mfs-auto"},"42")),l.a.createElement(s.C,{header:!0,tag:"div",color:"light",className:"text-center"},l.a.createElement("strong",null,"Settings")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-user",className:"mfe-2"}),"Profile"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-settings",className:"mfe-2"}),"Settings"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-credit-card",className:"mfe-2"}),"Payments",l.a.createElement(s.b,{color:"secondary",className:"mfs-auto"},"42")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-file",className:"mfe-2"}),"Projects",l.a.createElement(s.b,{color:"primary",className:"mfs-auto"},"42")),l.a.createElement(s.C,{divider:!0}),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account")))},E=function(){return l.a.createElement(s.z,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down"},l.a.createElement(s.E,{className:"c-header-nav-link",caret:!1},l.a.createElement(u.a,{name:"cil-envelope-open"}),l.a.createElement(s.b,{shape:"pill",color:"info"},4)),l.a.createElement(s.D,{className:"pt-0",placement:"bottom-end"},l.a.createElement(s.C,{header:!0,tag:"div",color:"light"},l.a.createElement("strong",null,"You have ",4," messages")),l.a.createElement(s.C,{href:"#"},l.a.createElement("div",{className:"message"},l.a.createElement("div",{className:"pt-3 mr-3 float-left"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-success"}))),l.a.createElement("div",null,l.a.createElement("small",{className:"text-muted"},"John Doe"),l.a.createElement("small",{className:"text-muted float-right mt-1"},"Just now")),l.a.createElement("div",{className:"text-truncate font-weight-bold"},l.a.createElement("span",{className:"fa fa-exclamation text-danger"})," Important message"),l.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),l.a.createElement(s.C,{href:"#"},l.a.createElement("div",{className:"message"},l.a.createElement("div",{className:"pt-3 mr-3 float-left"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-warning"}))),l.a.createElement("div",null,l.a.createElement("small",{className:"text-muted"},"Jane Dovve"),l.a.createElement("small",{className:"text-muted float-right mt-1"},"5 minutes ago")),l.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),l.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),l.a.createElement(s.C,{href:"#"},l.a.createElement("div",{className:"message"},l.a.createElement("div",{className:"pt-3 mr-3 float-left"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-danger"}))),l.a.createElement("div",null,l.a.createElement("small",{className:"text-muted"},"Janet Doe"),l.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),l.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),l.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),l.a.createElement(s.C,{href:"#"},l.a.createElement("div",{className:"message"},l.a.createElement("div",{className:"pt-3 mr-3 float-left"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-info"}))),l.a.createElement("div",null,l.a.createElement("small",{className:"text-muted"},"Joe Doe"),l.a.createElement("small",{className:"text-muted float-right mt-1"},"4:03 AM")),l.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),l.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),l.a.createElement(s.C,{href:"#",className:"text-center border-top"},l.a.createElement("strong",null,"View all messages"))))},N=function(){return l.a.createElement(s.z,{inNav:!0,className:"c-header-nav-item mx-2"},l.a.createElement(s.E,{className:"c-header-nav-link",caret:!1},l.a.createElement(u.a,{name:"cil-bell"}),l.a.createElement(s.b,{shape:"pill",color:"danger"},5)),l.a.createElement(s.D,{placement:"bottom-end",className:"pt-0"},l.a.createElement(s.C,{header:!0,tag:"div",className:"text-center",color:"light"},l.a.createElement("strong",null,"You have ",5," notifications")),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"),l.a.createElement(s.C,null,l.a.createElement(u.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"),l.a.createElement(s.C,{header:!0,tag:"div",color:"light"},l.a.createElement("strong",null,"Server")),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"text-uppercase mb-1"},l.a.createElement("small",null,l.a.createElement("b",null,"CPU Usage"))),l.a.createElement(s.ub,{size:"xs",color:"info",value:25}),l.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores.")),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"text-uppercase mb-1"},l.a.createElement("small",null,l.a.createElement("b",null,"Memory Usage"))),l.a.createElement(s.ub,{size:"xs",color:"warning",value:70}),l.a.createElement("small",{className:"text-muted"},"11444GB/16384MB")),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"text-uppercase mb-1"},l.a.createElement("small",null,l.a.createElement("b",null,"SSD 1 Usage"))),l.a.createElement(s.ub,{size:"xs",color:"danger",value:90}),l.a.createElement("small",{className:"text-muted"},"243GB/256GB"))))},g=function(){return l.a.createElement(s.z,{inNav:!0,className:"c-header-nav-item mx-2"},l.a.createElement(s.E,{className:"c-header-nav-link",caret:!1},l.a.createElement(u.a,{name:"cil-list"}),l.a.createElement(s.b,{shape:"pill",color:"warning"},5)),l.a.createElement(s.D,{placement:"bottom-end",className:"pt-0"},l.a.createElement(s.C,{header:!0,tag:"div",className:"text-center",color:"light"},l.a.createElement("strong",null,"You have ",5," pending tasks")),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"small mb-1"},"Upgrade NPM & Bower ",l.a.createElement("span",{className:"float-right"},l.a.createElement("strong",null,"0%"))),l.a.createElement(s.ub,{size:"xs",color:"info",value:0})),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"small mb-1"},"ReactJS Version ",l.a.createElement("span",{className:"float-right"},l.a.createElement("strong",null,"25%"))),l.a.createElement(s.ub,{size:"xs",color:"danger",value:25})),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"small mb-1"},"VueJS Version ",l.a.createElement("span",{className:"float-right"},l.a.createElement("strong",null,"50%"))),l.a.createElement(s.ub,{size:"xs",color:"warning",value:50})),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"small mb-1"},"Add new layouts ",l.a.createElement("span",{className:"float-right"},l.a.createElement("strong",null,"75%"))),l.a.createElement(s.ub,{size:"xs",color:"info",value:75})),l.a.createElement(s.C,{className:"d-block"},l.a.createElement("div",{className:"small mb-1"},"Angular 2 Cli Version ",l.a.createElement("span",{className:"float-right"},l.a.createElement("strong",null,"100%"))),l.a.createElement(s.ub,{size:"xs",color:"success",value:100})),l.a.createElement(s.C,{className:"text-center border-top"},l.a.createElement("strong",null,"View all tasks"))))},h=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"info",text:"NEW"}},{_tag:"CSidebarNavTitle",_children:["Theme"]},{_tag:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_tag:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_tag:"CSidebarNavTitle",_children:["Components"]},{_tag:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Breadcrumb",to:"/base/breadcrumbs"},{_tag:"CSidebarNavItem",name:"Cards",to:"/base/cards"},{_tag:"CSidebarNavItem",name:"Carousel",to:"/base/carousels"},{_tag:"CSidebarNavItem",name:"Collapse",to:"/base/collapses"},{_tag:"CSidebarNavItem",name:"Forms",to:"/base/forms"},{_tag:"CSidebarNavItem",name:"Jumbotron",to:"/base/jumbotrons"},{_tag:"CSidebarNavItem",name:"List group",to:"/base/list-groups"},{_tag:"CSidebarNavItem",name:"Navs",to:"/base/navs"},{_tag:"CSidebarNavItem",name:"Navbars",to:"/base/navbars"},{_tag:"CSidebarNavItem",name:"Pagination",to:"/base/paginations"},{_tag:"CSidebarNavItem",name:"Popovers",to:"/base/popovers"},{_tag:"CSidebarNavItem",name:"Progress",to:"/base/progress-bar"},{_tag:"CSidebarNavItem",name:"Switches",to:"/base/switches"},{_tag:"CSidebarNavItem",name:"Tables",to:"/base/tables"},{_tag:"CSidebarNavItem",name:"Tabs",to:"/base/tabs"},{_tag:"CSidebarNavItem",name:"Tooltips",to:"/base/tooltips"}]},{_tag:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",_children:[{_tag:"CSidebarNavItem",name:"Buttons",to:"/buttons/buttons"},{_tag:"CSidebarNavItem",name:"Brand buttons",to:"/buttons/brand-buttons"},{_tag:"CSidebarNavItem",name:"Buttons groups",to:"/buttons/button-groups"},{_tag:"CSidebarNavItem",name:"Dropdowns",to:"/buttons/button-dropdowns"}]},{_tag:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_tag:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"CoreUI Free",to:"/icons/coreui-icons",badge:{color:"success",text:"NEW"}},{_tag:"CSidebarNavItem",name:"CoreUI Flags",to:"/icons/flags"},{_tag:"CSidebarNavItem",name:"CoreUI Brands",to:"/icons/brands"}]},{_tag:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",_children:[{_tag:"CSidebarNavItem",name:"Alerts",to:"/notifications/alerts"},{_tag:"CSidebarNavItem",name:"Badges",to:"/notifications/badges"},{_tag:"CSidebarNavItem",name:"Modal",to:"/notifications/modals"},{_tag:"CSidebarNavItem",name:"Toaster",to:"/notifications/toaster"}]},{_tag:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"info",text:"NEW"}},{_tag:"CSidebarNavDivider"},{_tag:"CSidebarNavTitle",_children:["Extras"]},{_tag:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Login",to:"/login"},{_tag:"CSidebarNavItem",name:"Register",to:"/register"},{_tag:"CSidebarNavItem",name:"Error 404",to:"/404"},{_tag:"CSidebarNavItem",name:"Error 500",to:"/500"}]},{_tag:"CSidebarNavItem",name:"Disabled",icon:"cil-ban",badge:{color:"secondary",text:"NEW"},addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-2"},{_tag:"CSidebarNavTitle",_children:["Labels"]},{_tag:"CSidebarNavItem",name:"Label danger",to:"",icon:{name:"cil-star",className:"text-danger"},label:!0},{_tag:"CSidebarNavItem",name:"Label info",to:"",icon:{name:"cil-star",className:"text-info"},label:!0},{_tag:"CSidebarNavItem",name:"Label warning",to:"",icon:{name:"cil-star",className:"text-warning"},label:!0},{_tag:"CSidebarNavDivider",className:"m-2"}],v=l.a.memo((function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.sidebarShow}));return l.a.createElement(s.yb,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})}},l.a.createElement(s.zb,{className:"d-md-down-none",to:"/"},l.a.createElement(u.a,{className:"c-sidebar-brand-full",name:"logo-negative",height:35}),l.a.createElement(u.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})),l.a.createElement(s.Bb,null,l.a.createElement(s.x,{items:h,components:{CSidebarNavDivider:s.Cb,CSidebarNavDropdown:s.Db,CSidebarNavItem:s.Eb,CSidebarNavTitle:s.Fb}})),l.a.createElement(s.Ab,{className:"c-d-md-down-none"}))}));a.default=function(){return l.a.createElement("div",{className:"c-app c-default-layout"},l.a.createElement(v,null),l.a.createElement("div",{className:"c-wrapper"},l.a.createElement(b,null),l.a.createElement("div",{className:"c-body"},l.a.createElement(o,null)),l.a.createElement(i,null)))}}}]);
//# sourceMappingURL=23.786f906d.chunk.js.map