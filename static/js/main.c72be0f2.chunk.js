(this.webpackJsonpexige=this.webpackJsonpexige||[]).push([[0],{192:function(e,t,a){e.exports=a(268)},197:function(e,t,a){},264:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r);a(197),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(326),c=a(325),u=a(83),s=a(20),d=a(313),m=a(314),g=a(70),f=a(303),v=a(31),h=a(305),p=a(307),b=a(308),E=a(309),y=a(310),x=a(311),C=a(312),w=a(162),O=a.n(w),j=a(164),M=a.n(j),k=a(163),I=a.n(k),S=a(165),N=a.n(S),D=Object(f.a)({drawer:{width:250}});var B=function(){var e=D(),t=l.a.useState(!1),a=Object(v.a)(t,2),n=a[0],r=a[1],o=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}};return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{color:"inherit","aria-label":"open-drawer",onClick:o(!0),edge:"start",style:{color:"#ffffff"}},l.a.createElement(O.a,null)),l.a.createElement(p.a,{anchor:"left",open:n,onClose:o(!1)},l.a.createElement("div",{role:"presentation",onClick:o(!1),onKeyDown:o(!1)},l.a.createElement("div",{className:e.drawer}),l.a.createElement("div",{style:{display:"flex",width:"100%",height:"100vh",flexDirection:"column"}},l.a.createElement("div",{style:{flexGrow:"1"}},l.a.createElement("center",null,l.a.createElement(g.a,{variant:"h4",style:{fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic",marginTop:"20px",marginBottom:"20px"}},"~/Exige")),l.a.createElement(b.a,null),l.a.createElement(E.a,null,l.a.createElement(y.a,{button:!0,component:u.b,to:"/"},l.a.createElement(x.a,null,l.a.createElement(I.a,null)),l.a.createElement(C.a,{primary:"Dashboard"})),l.a.createElement(y.a,{button:!0,component:u.b,to:"/inspector"},l.a.createElement(x.a,null,l.a.createElement(M.a,null)),l.a.createElement(C.a,{primary:"Inspector"}))),l.a.createElement(b.a,null)),l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("center",null,l.a.createElement(h.a,{"aria-label":"exige-github-link",component:"span",onClick:function(){var e=window.open();e.opener=null,e.location="https://github.com/arkits/exige"}},l.a.createElement(N.a,null))))))," ")))},L=Object(f.a)((function(e){return{titleText:{display:"flex",flexGrow:"1",fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic"},subtitleText:{fontFamily:"IBM Plex Mono"},appBar:{zIndex:e.zIndex.drawer+1}}}));var T=function(){var e=L();return l.a.createElement("div",null,l.a.createElement(d.a,{position:"fixed",className:e.appBar,color:"primary"},l.a.createElement(m.a,null,l.a.createElement(B,null),l.a.createElement(g.a,{className:e.titleText,variant:"h5",noWrap:!0},"~/Exige"))))},F=a(130),R=a(5),W=a(85),z=a(48),A=a(101),_=a(11),P=function e(){Object(A.a)(this,e),this.sio={status:"DISCONNECTED",isEnabled:!1},this.operations={"cc45e730-f464-465b-803f-30ca28751e04":{gufi:"cc45e730-f464-465b-803f-30ca28751e04",state:"ACTIVE",owner:"exige.xyz",exige:{hidden:!1,color:R.Color.GREEN.withAlpha(.5)},volumes:[{volume:{outline_polygon:{vertices:[{lng:-122.50682830810545,lat:37.77587088725018},{lng:-122.398681640625,lat:37.8065289741725},{lng:-122.35954284667967,lat:37.71859032558816},{lng:-122.48794555664061,lat:37.72320698914131}]},altitude_lower:{value:200,reference:"W84",units:"M"},altitude_upper:{value:500,reference:"W84",units:"M"}}}]},"921dceae-7ada-421b-a810-8ff193a144b5":{gufi:"921dceae-7ada-421b-a810-8ff193a144b5",state:"CONTINGENT",owner:"exige.xyz",exige:{hidden:!1,color:R.Color.RED.withAlpha(.5)},volumes:[{volume:{outline_polygon:{vertices:[{lng:-122.58613586425781,lat:37.62565281710451},{lng:-122.48176574707031,lat:37.623205521597406},{lng:-122.4872589111328,lat:37.59274354910639},{lng:-122.58991241455077,lat:37.601448242831204}]},altitude_lower:{value:200,reference:"W84",units:"M"},altitude_upper:{value:500,reference:"W84",units:"M"}}},{volume:{outline_polygon:{vertices:[{lng:-122.47970581054688,lat:37.612055711412815},{lng:-122.3818588256836,lat:37.63489742852906},{lng:-122.37018585205077,lat:37.60308025953392},{lng:-122.48451232910155,lat:37.57859625002284}]},altitude_lower:{value:200,reference:"W84",units:"M"},altitude_upper:{value:500,reference:"W84",units:"M"}}}]}},this.positions={},this.mouseLocation={},this.snackbar={message:null,isOpen:!1,type:null},this.elementsToggle={mouseLocation:!0,operationsTable:!0,positionsTable:!1},this.map={cameraCenter:{latitude:37.69,longitude:-122.44,altitude:5e4}},this.drawerOpen=!0};Object(_.decorate)(P,{sio:_.observable,operations:_.observable,positions:_.observable,mouseLocation:_.observable,snackbar:_.observable,elementsToggle:_.observable,map:_.observable});var J=Object(n.createContext)(new P),H=Object(z.a)((function(){var e=Object(n.useContext)(J),t=Object(n.useRef)(),a=e.map.cameraCenter,r=R.Cartesian3.fromDegrees(a.longitude,a.latitude,a.altitude);Object(n.useEffect)((function(){console.log("cameraDest got updated!",r)}),[r]);R.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDJkNjJkYy1iMTAxLTQ5NjktYThmNC0zN2YwNjUxYjBkYjUiLCJpZCI6MTk1NzQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzU4NDc3OTJ9.YIZUsKDifeCV1hoT4N1kNoASGQzM3yJoox_GLxdD2lo";var o=Object.values(e.operations);return l.a.createElement("div",null,l.a.createElement(W.d,{animation:!1,timeline:!1,fullscreenButton:!1,style:{height:"93vh"},ref:function(e){t=e?e.cesiumElement:null,null!=e&&(t.scene.debugShowFramesPerSecond=!0,t.scene.requestRenderMode=!0)},onMouseMove:function(a){var n=function(e){var a=0,n=0;if(!t)return{longitudeString:a,latitudeString:n};if(!t.scene)return{longitudeString:a,latitudeString:n};var l=t.scene.globe.ellipsoid,r=t.scene.camera.pickEllipsoid(e,l);if(!r)return{longitudeString:a,latitudeString:n};var o=l.cartesianToCartographic(r);return{longitudeString:a=R.Math.toDegrees(o.longitude).toFixed(15),latitudeString:n=R.Math.toDegrees(o.latitude).toFixed(15)}}(a.endPosition),l=n.longitudeString,r=n.latitudeString;e.mouseLocation.lng=parseFloat(l),e.mouseLocation.lat=parseFloat(r)}},l.a.createElement(W.a,{destination:r,duration:0}),o.map((function(e){var t;if(null===e||void 0===e||null===(t=e.exige)||void 0===t?void 0:t.hidden)return null;var a,n=[],r=1,o=Object(F.a)(e.volumes);try{for(o.s();!(a=o.n()).done;){var i,c=a.value,u=e.gufi+"_"+r;r++;var s=[],d=c.volume,m=null===d||void 0===d?void 0:d.outline_polygon;if(!m)return;var g,f=Object(F.a)(null===m||void 0===m?void 0:m.vertices);try{for(f.s();!(g=f.n()).done;){var v,h=g.value;s.push(null===h||void 0===h?void 0:h.lng),s.push(null===h||void 0===h?void 0:h.lat),s.push(null===d||void 0===d||null===(v=d.altitude_upper)||void 0===v?void 0:v.value)}}catch(b){f.e(b)}finally{f.f()}var p=R.Cartesian3.fromDegreesArrayHeights(s);n.push(l.a.createElement(W.b,{key:u,name:u},l.a.createElement(W.c,{name:u,extrudedHeight:null===(i=d.altitude_lower)||void 0===i?void 0:i.value,perPositionHeight:!0,hierarchy:p,material:e.exige.color,outlineColor:R.Color.BLACK,outline:!0})))}}catch(b){o.e(b)}finally{o.f()}return n}))))})),G=a(315),K=a(323),U=a(316),V=a(320),Y=a(318),Q=a(319),q=a(317);function X(){var e=l.a.useState(!1),t=Object(v.a)(e,2),a=t[0],n=t[1],r=function(){n(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{variant:"contained",onClick:function(){n(!0)},style:{backgroundColor:"#ff3d00",fontFamily:"IBM Plex Mono",color:"white",fontWeight:"bold",fontStyle:"italic",textTransform:"capitalize"}},"~/Exige by ArKits"),l.a.createElement(U.a,{fullWidth:!0,maxWidth:"sm",open:a,onClose:r,"aria-labelledby":"about-exige-dialog"},l.a.createElement(q.a,null,l.a.createElement(g.a,{style:{fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic",fontSize:"22px"}},"About ~/Exige")),l.a.createElement(Y.a,null,l.a.createElement(Q.a,null,"Exige is a proof-of-concept traffic visualizer for UAM / UTM data.")),l.a.createElement(V.a,null,l.a.createElement(G.a,{onClick:r,style:{color:"white"}},"Close"))))}var Z=a(84),$=a(270),ee=a(107),te=a(329),ae=a(324),ne=a(328),le=a(327),re=a(321),oe=a(322);function ie(e){var t,a,n,l,r={},o=null===e||void 0===e||null===(t=e.reference)||void 0===t?void 0:t.id,i=null===e||void 0===e||null===(a=e.reference)||void 0===a?void 0:a.owner;i=i.toLowerCase();var c=null===e||void 0===e||null===(n=e.details)||void 0===n?void 0:n.state;c=c.toUpperCase();var u=null===e||void 0===e||null===(l=e.details)||void 0===l?void 0:l.volumes;return r.gufi=o,r.owner=i,r.state=c,r.volumes=u,r.exige={hidden:!1,color:R.Color.BLUE.withAlpha(.5)},r}function ce(e){var t=e.formResponse;if(t.show){var a="#aa2e25";return"success"===t.type&&(a="#357a38"),l.a.createElement(l.a.Fragment,null,l.a.createElement(re.a,{style:{background:a}},l.a.createElement(oe.a,null,t.message)))}return null}var ue=Object(z.a)((function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],r=t[1],o=Object(n.useContext)(J),i=Object(n.useState)({show:!1,type:null,message:null}),c=Object(v.a)(i,2),u=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"h6"},"Add Data to Exige")," ",l.a.createElement("br",null),l.a.createElement(le.a,{label:"Load Data",multiline:!0,rows:"10",variant:"outlined",style:{width:"100%"},onChange:function(e){return r(e.target.value)},value:a}),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement(ce,{formResponse:u}),l.a.createElement("br",null),l.a.createElement(G.a,{variant:"contained",color:"primary",size:"large",endIcon:l.a.createElement(K.a,null,"add"),onClick:function(){console.log("Adding Operation to ExigeStore...");try{var e=JSON.parse(a);if(Array.isArray(e))e.forEach((function(e){var t=ie(e),a=t.gufi;o.operations[a]=t}));else{var t=ie(e),n=t.gufi;o.operations[n]=t}s({show:!0,type:"success",message:"Added Operation successfully!"})}catch(l){console.error("Caught error when parsing inputData - ",l),s({show:!0,type:"fail",message:"Caught error when parsing - "+l.message})}finally{r("")}}},"Add Data")))})),se=a(166),de=a(69),me=a(167),ge=a(175),fe=a(176),ve=a(2),he=a(6),pe=a(330),be=a(106);function Ee(e){var t=e.open,a=e.handleClose,n=e.detailsData;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{fullWidth:!0,maxWidth:"md",open:t,onClose:a,"aria-labelledby":"about-exige-dialog"},l.a.createElement(q.a,null,l.a.createElement(g.a,{style:{fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic",fontSize:"22px"}},"Operation Details")),l.a.createElement(Y.a,null,l.a.createElement("pre",null,JSON.stringify(n,null,4))),l.a.createElement(V.a,null,l.a.createElement(G.a,{onClick:a,style:{color:"white"}},"Close"))))}var ye=a(172),xe=a.n(ye),Ce=a(173),we=a.n(Ce),Oe=function(e){Object(fe.a)(a,e);var t=Object(ge.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getRowClassName=function(t){var a=t.index,n=e.props,l=n.classes,r=n.onRowClick;return Object(ve.a)(l.tableRow,l.flexContainer,Object(de.a)({},l.tableRowHover,-1!==a&&null!=r))},e.cellRenderer=function(t){var a=t.cellData,n=t.columnIndex,r=t.rowData,o=e.props,i=o.columns,c=o.classes,u=o.rowHeight,s=o.onRowClick,d=o.ViewDetailsButton,m=o.ViewOnMapButton;return 3===n?l.a.createElement(pe.a,{component:"div",className:Object(ve.a)(c.tableCell,c.flexContainer,Object(de.a)({},c.noClick,null==s)),variant:"body",style:{height:u},align:null!=n&&i[n].numeric?"right":"left"},l.a.createElement(m,{operation:r}),l.a.createElement(d,{operation:r})):l.a.createElement(pe.a,{component:"div",className:Object(ve.a)(c.tableCell,c.flexContainer,Object(de.a)({},c.noClick,null==s)),variant:"body",style:{height:u},align:null!=n&&i[n].numeric?"right":"left"},a)},e.headerRenderer=function(t){var a=t.label,n=t.columnIndex,r=e.props,o=r.headerHeight,i=r.columns,c=r.classes;return l.a.createElement(pe.a,{component:"div",className:Object(ve.a)(c.tableCell,c.flexContainer,c.noClick),variant:"head",style:{height:o,backgroundColor:"#212121"},align:i[n].numeric?"right":"left"},l.a.createElement("span",null,a))},e}return Object(me.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.columns,r=t.rowHeight,o=t.headerHeight,i=Object(Z.a)(t,["classes","columns","rowHeight","headerHeight"]);return l.a.createElement(be.a,null,(function(t){var c=t.height,u=t.width;return l.a.createElement(be.c,Object.assign({height:c,width:u,rowHeight:r,gridStyle:{direction:"inherit"},headerHeight:o,className:a.table},i,{rowClassName:e.getRowClassName}),n.map((function(t,n){var r=t.dataKey,o=Object(Z.a)(t,["dataKey"]);return l.a.createElement(be.b,Object.assign({key:r,headerRenderer:function(t){return e.headerRenderer(Object(se.a)({},t,{columnIndex:n}))},className:a.flexContainer,cellRenderer:e.cellRenderer,dataKey:r},o))})))}))}}]),a}(l.a.PureComponent);Oe.defaultProps={headerHeight:48,rowHeight:48};var je=Object(he.a)((function(e){return{flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box"},table:{"& .ReactVirtualized__Table__headerRow":{flip:!1,paddingRight:"rtl"===e.direction?"0 !important":void 0}},tableRow:{cursor:"pointer"},tableCell:{flex:1},noClick:{cursor:"initial"}}}))(Oe),Me=Object(z.a)((function(e){var t=e.handleDialogClose,a=Object(n.useContext)(J),r=a.operations,o=Object.values(r),i=l.a.useState(!1),c=Object(v.a)(i,2),u=c[0],s=c[1],d=l.a.useState(!1),m=Object(v.a)(d,2),g=m[0],f=m[1];return l.a.createElement(ee.a,{style:{height:500,width:"100%",backgroundColor:"#263238"}},l.a.createElement(je,{rowCount:o.length,rowGetter:function(e){var t=e.index;return o[t]},columns:[{width:350,label:"GUFI",dataKey:"gufi"},{width:180,label:"State",dataKey:"state"},{width:120,label:"Owner",dataKey:"owner"},{width:220,label:"Actions",dataKey:"actions"}],ViewDetailsButton:function(e){var t=e.operation;return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{variant:"contained",size:"small",startIcon:l.a.createElement(we.a,null),onClick:function(){var e;e=t,s(!0),f(e)}},"Details"))},ViewOnMapButton:function(e){var n=e.operation;return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{variant:"contained",size:"small",onClick:function(){var e,l,r,o;a.map.cameraCenter.latitude=null===n||void 0===n||null===(e=n.volumes[0].volume)||void 0===e||null===(l=e.outline_polygon)||void 0===l?void 0:l.vertices[0].lat,a.map.cameraCenter.longitude=null===n||void 0===n||null===(r=n.volumes[0].volume)||void 0===r||null===(o=r.outline_polygon)||void 0===o?void 0:o.vertices[0].lng,t()},startIcon:l.a.createElement(xe.a,null),style:{marginRight:"10px"}},"Map"))}}),l.a.createElement(Ee,{open:u,handleClose:function(){s(!1)},detailsData:g}))})),ke=l.a.forwardRef((function(e,t){return l.a.createElement($.a,Object.assign({direction:"up",ref:t},e))}));function Ie(e){var t=e.children,a=e.value,n=e.index,r=Object(Z.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),a===n&&l.a.createElement(ne.a,{p:3},t))}function Se(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ne=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],r=t[1],o=function(){r(!1)},i=l.a.useState(0),c=Object(v.a)(i,2),u=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{variant:"contained",onClick:function(){r(!0)},style:{marginLeft:"10px",backgroundColor:"#2e7d32",fontFamily:"IBM Plex Mono",color:"white",fontWeight:"bold"},endIcon:l.a.createElement(K.a,null,"add")},"Manage Data"),l.a.createElement(U.a,{open:a,TransitionComponent:ke,keepMounted:!0,onClose:o,"aria-label":"manage-exige-data-dialog",maxWidth:"md",fullWidth:!0},l.a.createElement(q.a,null,l.a.createElement("div",{style:{fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic"}},"Manage Exige Data")),l.a.createElement(Y.a,null,l.a.createElement(ee.a,{elevation:0,style:{backgroundColor:"#212121"}},l.a.createElement(te.a,{centered:!0,value:u,onChange:function(e,t){s(t)},indicatorColor:"primary","aria-label":"manage-exige-data-tabs"},l.a.createElement(ae.a,Object.assign({label:"List"},Se(0))),l.a.createElement(ae.a,Object.assign({label:"Add"},Se(1))))),l.a.createElement(Ie,{value:u,index:0},l.a.createElement(Me,{handleDialogClose:o})),l.a.createElement(Ie,{value:u,index:1},l.a.createElement(ue,{handleDialogClose:o}))),l.a.createElement(V.a,null,l.a.createElement(G.a,{onClick:o},"Close"))))};var De=function(){return l.a.createElement("div",{className:"OptionsBar"},l.a.createElement("div",{style:{flexGrow:1}},l.a.createElement(G.a,{variant:"contained",color:"primary",style:{marginLeft:"10px",fontFamily:"IBM Plex Mono",color:"white",fontWeight:"bold"},endIcon:l.a.createElement(K.a,null,"settings")},"Options"),l.a.createElement(Ne,null)),l.a.createElement(X,null))},Be=(a(264),Object(z.a)((function(){var e=Object(n.useContext)(J);return l.a.createElement("div",{className:"MouseLocationPanel"},l.a.createElement("div",{style:{fontFamily:"IBM Plex Mono",fontWeight:"bold",fontStyle:"italic"}},"Mouse Location"),l.a.createElement("pre",{style:{fontFamily:"IBM Plex Mono",fontSize:"11px"}},JSON.stringify(function(){var t=e.mouseLocation,a=Math.PI*(t.lat/180),n=Math.pow(2,10),l=Math.trunc((t.lng+180)/360*n),r=Math.trunc((1-Math.log(Math.tan(a)+1/Math.cos(a))/Math.PI)/2*n);return t.x=l,t.y=r,t.zoomLevel=parseInt(10),t}(),null,2)))})));var Le=function(){return l.a.createElement("div",null,l.a.createElement(H,null),l.a.createElement(De,null),l.a.createElement(Be,null))},Te=Object(f.a)((function(e){return{root:{display:"flex",height:"100%"},content:{flex:"1",height:"100vh",display:"flex",paddingTop:e.spacing(8)},mainContent:{height:"100%",width:"100%"}}}));function Fe(){return l.a.createElement("h2",null,"Inspector")}var Re=function(e){var t=e.hideLoader,a=Te();return Object(n.useEffect)(t,[]),l.a.createElement("div",null,l.a.createElement(u.a,{basename:"/exige"},l.a.createElement(T,null),l.a.createElement("main",{className:a.content},l.a.createElement("div",{className:a.mainContent},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/inspector"},l.a.createElement(Fe,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement(Le,null)))))))},We=a(105),ze=a(174),Ae=Object(ze.a)({palette:{type:"dark",primary:{main:We.a[500]},secondary:{main:"#f44336"}}}),_e=(a(265),document.querySelector(".loader"));o.a.render(l.a.createElement(c.a,{theme:Ae},l.a.createElement(i.a,null),l.a.createElement(Re,{hideLoader:function(){return _e.classList.add("loader--hide")},showLoader:function(){return _e.classList.remove("loader--hide")}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t){e.exports=Cesium}},[[192,1,2]]]);
//# sourceMappingURL=main.c72be0f2.chunk.js.map