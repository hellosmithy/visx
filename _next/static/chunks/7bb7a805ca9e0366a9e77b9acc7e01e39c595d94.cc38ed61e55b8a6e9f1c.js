(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"3Ng6":function(e){e.exports=JSON.parse('{"name":"@visx/demo-annotation","description":"Standalone visx annotation demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/annotation":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.8.0","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","annotation"]}')},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("+wNj");function o(e,t){if(null==e)return{};var n,o,r=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},erk3:function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return P}));var a=n("HbGN"),o=n("ERkP"),r=n.n(o),i=n("/GET"),l=n("Xr0V"),s=n("amCE"),c=n("tNN4"),u=n("geX1"),d=n("zjfJ"),p=n("yFcC"),f=n.n(p),m=n("oT5u"),h=n.n(m),x=n("cjvV"),b=n("67po"),j=n("ue4z"),v=n("xH1m"),y=n("5srZ"),g=r.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=h.a.slice(-100),w=function(e){return new Date(e.date).valueOf()},C=function(e){return e.close},k=S[Math.floor(S.length/2)+4];function E(e){var t,n,a=e.width,i=e.height,l=e.compact,s=void 0!==l&&l,c=e.children,u=Object(o.useMemo)((function(){return Object(x.a)({domain:Object(j.b)(S,(function(e){return w(e)})),range:[0,a]})}),[a]),d=Object(o.useMemo)((function(){return Object(b.a)({domain:Object(j.b)(S,(function(e){return C(e)})),range:[i-100,100]})}),[i]),p=Object(o.useState)(!1),m=p[0],h=p[1],N=Object(o.useState)(!1),E=N[0],A=N[1],_=Object(o.useState)("Title"),T=_[0],P=_[1],z=Object(o.useState)(s?"Subtitle":"Subtitle with deets and deets and deets and deets"),V=z[0],D=z[1],L=Object(o.useState)("elbow"),q=L[0],R=L[1],I=Object(o.useState)("circle"),M=I[0],H=I[1],B=Object(o.useState)(!0),K=B[0],Y=B[1],J=Object(o.useState)("auto"),F=J[0],G=J[1],W=Object(o.useState)("auto"),X=W[0],Z=W[1],Q=Object(o.useState)(s?100:175)[0],U=Object(o.useState)({x:null!==(t=u(w(k)))&&void 0!==t?t:0,y:null!==(n=d(C(k)))&&void 0!==n?n:0,dx:s?-50:-100,dy:s?-30:-50}),$=U[0],ee=U[1];return Object(o.useEffect)((function(){ee((function(e){var t,n;return O(O({},e),{},{x:null!==(t=u(w(k)))&&void 0!==t?t:0,y:null!==(n=d(C(k)))&&void 0!==n?n:0})}))}),[u,d]),g(r.a.Fragment,null,c({AnnotationComponent:m||E?v.a:y.a,annotationPosition:$,approxTooltipHeight:70,connectorType:q,data:S,editLabelPosition:m,editSubjectPosition:E,getDate:w,getStockValue:C,horizontalAnchor:"auto"===X?void 0:X,labelWidth:Q,setAnnotationPosition:ee,showAnchorLine:K,subjectType:M,subtitle:V,title:T,verticalAnchor:"auto"===F?void 0:F,xScale:u,yScale:d}),!s&&g("div",{className:"jsx-272244364 controls"},g("div",{className:"jsx-272244364"},g("label",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Title"),"\xa0\xa0",g("input",{type:"text",onChange:function(e){return P(e.target.value)},value:T,className:"jsx-272244364"})),"\xa0\xa0\xa0",g("label",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Subtitle"),"\xa0\xa0",g("input",{type:"text",onChange:function(e){return D(e.target.value)},value:V,className:"jsx-272244364"})),"\xa0\xa0\xa0",g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return A(!E)},checked:E,className:"jsx-272244364"}),"Edit subject position"),"\xa0\xa0",g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return h(!m)},checked:m,className:"jsx-272244364"}),"Edit label position")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Connector type"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return R("elbow")},checked:"elbow"===q,className:"jsx-272244364"}),"Elbow"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return R("line")},checked:"line"===q,className:"jsx-272244364"}),"Straight line")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Subject type"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return H("circle")},checked:"circle"===M,className:"jsx-272244364"}),"Circle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return H("vertical-line")},checked:"vertical-line"===M,className:"jsx-272244364"}),"Vertical line"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return H("horizontal-line")},checked:"horizontal-line"===M,className:"jsx-272244364"}),"Horizontal line")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Horizontal label anchor"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("auto")},checked:"auto"===X,className:"jsx-272244364"}),"auto"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("start")},checked:"start"===X,className:"jsx-272244364"}),"left"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("middle")},checked:"middle"===X,className:"jsx-272244364"}),"middle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return Z("end")},checked:"end"===X,className:"jsx-272244364"}),"right")),g("div",{className:"jsx-272244364"},g("strong",{className:"jsx-272244364"},"Vertical label anchor"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return G("auto")},checked:"auto"===F,className:"jsx-272244364"}),"auto"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return G("start")},checked:"start"===F,className:"jsx-272244364"}),"top"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return G("middle")},checked:"middle"===F,className:"jsx-272244364"}),"middle"),g("label",{className:"jsx-272244364"},g("input",{type:"radio",onChange:function(){return G("end")},checked:"end"===F,className:"jsx-272244364"}),"bottom"),g("div",{className:"jsx-272244364"},g("label",{className:"jsx-272244364"},g("input",{type:"checkbox",onChange:function(){return Y(!K)},checked:K,className:"jsx-272244364"}),"Show anchor line")))),g(f.a,{id:"272244364"},[".controls.jsx-272244364{font-size:13px;line-height:1.5em;}",".controls.jsx-272244364>div.jsx-272244364{margin-bottom:4px;}"]))}try{E.displayName="ExampleControls",E.__docgenInfo={description:"",displayName:"ExampleControls",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"]={docgenInfo:E.__docgenInfo,name:"ExampleControls",path:"src/sandboxes/visx-annotation/ExampleControls.tsx#ExampleControls"})}catch(z){}function A(e){var t=e.value,n=e.scale,a=e.accessor,o=e.data,r=Object(j.a)(a).left,i=n.invert(t),l=r(o,i,1),s=o[l-1],c=o[l],u=s;return c&&a(c)&&(u=i-a(s)>a(c)-i?c:s),u}try{A.displayName="findNearestDatum",A.__docgenInfo={description:"",displayName:"findNearestDatum",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"ScaleLinear<unknown, unknown, never> | ScaleTime<unknown, unknown, never>"}},accessor:{defaultValue:null,description:"",name:"accessor",required:!0,type:{name:"(d: AppleStock) => number"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"]={docgenInfo:A.__docgenInfo,name:"findNearestDatum",path:"src/sandboxes/visx-annotation/findNearestDatum.ts#findNearestDatum"})}catch(z){}var _=r.a.createElement,T=["#ecf4f3","#68b0ab","#006a71"];function P(e){var t=e.width,n=e.height,o=e.compact;return _(E,{width:t,height:n,compact:void 0!==o&&o},(function(e){var o=e.AnnotationComponent,r=e.annotationPosition,d=e.approxTooltipHeight,p=e.connectorType,f=e.data,m=e.editLabelPosition,h=e.editSubjectPosition,x=e.getDate,b=e.getStockValue,j=e.horizontalAnchor,v=e.labelWidth,y=e.setAnnotationPosition,g=e.showAnchorLine,N=e.subjectType,O=e.subtitle,S=e.title,w=e.verticalAnchor,C=e.xScale,k=e.yScale;return _("svg",{width:t,height:n},_("rect",{width:t,height:n,fill:T[0]}),_(u.a,{stroke:T[2],strokeWidth:2,data:f,x:function(e){var t;return null!==(t=C(x(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=k(b(e)))&&void 0!==t?t:0}}),_(o,{width:t,height:n,x:r.x,y:r.y,dx:r.dx,dy:r.dy,canEditLabel:m,canEditSubject:h,onDragEnd:function(e){e.event;var o,r,i=Object(a.a)(e,["event"]),l=A({accessor:"horizontal-line"===N?b:x,data:f,scale:"horizontal-line"===N?k:C,value:"horizontal-line"===N?i.y:i.x}),s=null!==(o=C(x(l)))&&void 0!==o?o:0,c=null!==(r=k(b(l)))&&void 0!==r?r:0,u=i.dx>0&&s+i.dx+v>t||i.dx<0&&s+i.dx-v<=0,p=i.dy>0&&n-(c+i.dy)<d||i.dy<0&&c+i.dy-d<=0;y({x:s,y:c,dx:(u?-1:1)*i.dx,dy:(p?-1:1)*i.dy})}},_(i.a,{stroke:"#ff7e67",type:p}),_(l.a,{backgroundFill:"white",showAnchorLine:g,anchorLineStroke:T[2],backgroundProps:{stroke:T[1]},fontColor:T[2],horizontalAnchor:j,subtitle:O,title:S,verticalAnchor:w,width:v}),"circle"===N&&_(s.a,{stroke:"#ff7e67"}),"circle"!==N&&_(c.a,{orientation:"vertical-line"===N?"vertical":"horizontal",stroke:"#ff7e67",min:0,max:"vertical-line"===N?n:t})))}))}try{P.displayName="Example",P.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-annotation/Example.tsx#Example"]={docgenInfo:P.__docgenInfo,name:"Example",path:"src/sandboxes/visx-annotation/Example.tsx#Example"})}catch(z){}},ue4z:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d}));var a=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN},o=function(e){var t;return 1===e.length&&(t=e,e=function(e,n){return a(t(e),n)}),{left:function(t,n,a,o){for(null==a&&(a=0),null==o&&(o=t.length);a<o;){var r=a+o>>>1;e(t[r],n)<0?a=r+1:o=r}return a},right:function(t,n,a,o){for(null==a&&(a=0),null==o&&(o=t.length);a<o;){var r=a+o>>>1;e(t[r],n)>0?o=r:a=r+1}return a}}};var r=o(a);r.right,r.left;var i=function(e,t){var n,a,o,r=e.length,i=-1;if(null==t){for(;++i<r;)if(null!=(n=e[i])&&n>=n)for(a=o=n;++i<r;)null!=(n=e[i])&&(a>n&&(a=n),o<n&&(o=n))}else for(;++i<r;)if(null!=(n=t(e[i],i,e))&&n>=n)for(a=o=n;++i<r;)null!=(n=t(e[i],i,e))&&(a>n&&(a=n),o<n&&(o=n));return[a,o]},l=Array.prototype,s=(l.slice,l.map,function(e,t,n){e=+e,t=+t,n=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+n;for(var a=-1,o=0|Math.max(0,Math.ceil((t-e)/n)),r=new Array(o);++a<o;)r[a]=e+a*n;return r});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var c=function(e,t){var n,a,o=e.length,r=-1;if(null==t){for(;++r<o;)if(null!=(n=e[r])&&n>=n)for(a=n;++r<o;)null!=(n=e[r])&&n>a&&(a=n)}else for(;++r<o;)if(null!=(n=t(e[r],r,e))&&n>=n)for(a=n;++r<o;)null!=(n=t(e[r],r,e))&&n>a&&(a=n);return a},u=function(e){for(var t,n,a,o=e.length,r=-1,i=0;++r<o;)i+=e[r].length;for(n=new Array(i);--o>=0;)for(t=(a=e[o]).length;--t>=0;)n[--i]=a[t];return n},d=function(e){if(!(o=e.length))return[];for(var t=-1,n=function(e,t){var n,a,o=e.length,r=-1;if(null==t){for(;++r<o;)if(null!=(n=e[r])&&n>=n)for(a=n;++r<o;)null!=(n=e[r])&&a>n&&(a=n)}else for(;++r<o;)if(null!=(n=t(e[r],r,e))&&n>=n)for(a=n;++r<o;)null!=(n=t(e[r],r,e))&&a>n&&(a=n);return a}(e,p),a=new Array(n);++t<n;)for(var o,r=-1,i=a[t]=new Array(o);++r<o;)i[r]=e[r][t];return a};function p(e){return e.length}}}]);