(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-c259bd06"],{"0111":function(e,t,a){"use strict";t["a"]={time:{month:["January","February","March","April","May","June","July","August","September","October","November","December"],monthAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayOfWeekAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},legend:{selector:{all:"All",inverse:"Inv"}},toolbox:{brush:{title:{rect:"Box Select",polygon:"Lasso Select",lineX:"Horizontally Select",lineY:"Vertically Select",keep:"Keep Selections",clear:"Clear Selections"}},dataView:{title:"Data View",lang:["Data View","Close","Refresh"]},dataZoom:{title:{zoom:"Zoom",back:"Zoom Reset"}},magicType:{title:{line:"Switch to Line Chart",bar:"Switch to Bar Chart",stack:"Stack",tiled:"Tile"}},restore:{title:"Restore"},saveAsImage:{title:"Save as Image",lang:["Right Click to Save Image"]}},series:{typeNames:{pie:"Pie chart",bar:"Bar chart",line:"Line chart",scatter:"Scatter plot",effectScatter:"Ripple scatter plot",radar:"Radar chart",tree:"Tree",treemap:"Treemap",boxplot:"Boxplot",candlestick:"Candlestick",k:"K line chart",heatmap:"Heat map",map:"Map",parallel:"Parallel coordinate map",lines:"Line graph",graph:"Relationship graph",sankey:"Sankey diagram",funnel:"Funnel chart",gauge:"Gauge",pictorialBar:"Pictorial bar",themeRiver:"Theme River Map",sunburst:"Sunburst",custom:"Custom chart",chart:"Chart"}},aria:{general:{withTitle:'This is a chart about "{title}"',withoutTitle:"This is a chart"},series:{single:{prefix:"",withName:" with type {seriesType} named {seriesName}.",withoutName:" with type {seriesType}."},multiple:{prefix:". It consists of {seriesCount} series count.",withName:" The {seriesId} series is a {seriesType} representing {seriesName}.",withoutName:" The {seriesId} series is a {seriesType}.",separator:{middle:"",end:""}}},data:{allData:"The data is as follows: ",partialData:"The first {displayCnt} items are: ",withName:"the data for {name} is {value}",withoutName:"{value}",separator:{middle:", ",end:". "}}}}},"1e32":function(e,t,a){"use strict";var r=a("6d8b"),n=a("3842"),i=a("ee1a");function o(e){return e.get("stack")||"__ec_stack_"+e.seriesIndex}function l(e,t){return t.dim+e.model.componentIndex}function s(e,t,a){var n={},s=c(r["n"](t.getSeriesByType(e),(function(e){return!t.isSeriesFiltered(e)&&e.coordinateSystem&&"polar"===e.coordinateSystem.type})));t.eachSeriesByType(e,(function(e){if("polar"===e.coordinateSystem.type){var t=e.getData(),a=e.coordinateSystem,r=a.getBaseAxis(),c=l(a,r),d=o(e),u=s[c][d],h=u.offset,f=u.width,g=a.getOtherAxis(r),b=e.coordinateSystem.cx,v=e.coordinateSystem.cy,p=e.get("barMinHeight")||0,y=e.get("barMinAngle")||0;n[d]=n[d]||[];for(var m=t.mapDimension(g.dim),x=t.mapDimension(r.dim),w=Object(i["c"])(t,m),O="radius"!==r.dim||!e.get("roundCap",!0),M=g.dataToCoord(0),S=0,T=t.count();S<T;S++){var j=t.get(m,S),A=t.get(x,S),k=j>=0?"p":"n",L=M;w&&(n[d][A]||(n[d][A]={p:M,n:M}),L=n[d][A][k]);var C=void 0,I=void 0,W=void 0,P=void 0;if("radius"===g.dim){var D=g.dataToCoord(j)-M,B=r.dataToCoord(A);Math.abs(D)<p&&(D=(D<0?-1:1)*p),C=L,I=L+D,W=B-h,P=W-f,w&&(n[d][A][k]=I)}else{var _=g.dataToCoord(j,O)-M,G=r.dataToCoord(A);Math.abs(_)<y&&(_=(_<0?-1:1)*y),C=G+h,I=C+f,W=L,P=L+_,w&&(n[d][A][k]=P)}t.setItemLayout(S,{cx:b,cy:v,r0:C,r:I,startAngle:-W*Math.PI/180,endAngle:-P*Math.PI/180,clockwise:W>=P})}}}))}function c(e){var t={};r["k"](e,(function(e,a){var r=e.getData(),i=e.coordinateSystem,s=i.getBaseAxis(),c=l(i,s),d=s.getExtent(),u="category"===s.type?s.getBandWidth():Math.abs(d[1]-d[0])/r.count(),h=t[c]||{bandWidth:u,remainedWidth:u,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},f=h.stacks;t[c]=h;var g=o(e);f[g]||h.autoWidthCount++,f[g]=f[g]||{width:0,maxWidth:0};var b=Object(n["o"])(e.get("barWidth"),u),v=Object(n["o"])(e.get("barMaxWidth"),u),p=e.get("barGap"),y=e.get("barCategoryGap");b&&!f[g].width&&(b=Math.min(h.remainedWidth,b),f[g].width=b,h.remainedWidth-=b),v&&(f[g].maxWidth=v),null!=p&&(h.gap=p),null!=y&&(h.categoryGap=y)}));var a={};return r["k"](t,(function(e,t){a[t]={};var i=e.stacks,o=e.bandWidth,l=Object(n["o"])(e.categoryGap,o),s=Object(n["o"])(e.gap,1),c=e.remainedWidth,d=e.autoWidthCount,u=(c-l)/(d+(d-1)*s);u=Math.max(u,0),r["k"](i,(function(e,t){var a=e.maxWidth;a&&a<u&&(a=Math.min(a,c),e.width&&(a=Math.min(a,e.width)),c-=a,e.width=a,d--)})),u=(c-l)/(d+(d-1)*s),u=Math.max(u,0);var h,f=0;r["k"](i,(function(e,t){e.width||(e.width=u),h=e,f+=e.width*(1+s)})),h&&(f-=h.width*s);var g=-f/2;r["k"](i,(function(e,r){a[t][r]=a[t][r]||{offset:g,width:e.width},g+=e.width*(1+s)}))})),a}t["a"]=s},2355:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return c}));var r=a("ca80"),n=a("9850");function i(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];if(!n.defaultAttr.ignore){var i=n.label,o=i.getComputedTransform(),l=i.getBoundingRect(),s=!o||o[1]<1e-5&&o[2]<1e-5,c=i.style.margin||0,d=l.clone();d.applyTransform(o),d.x-=c/2,d.y-=c/2,d.width+=c,d.height+=c;var u=s?new r["a"](l,o):null;t.push({label:i,labelLine:n.labelLine,rect:d,localRect:l,obb:u,priority:n.priority,defaultAttr:n.defaultAttr,layoutOption:n.computedLayoutOption,axisAligned:s,transform:o})}}return t}function o(e,t,a,r,n,i){var o=e.length;if(!(o<2)){e.sort((function(e,a){return e.rect[t]-a.rect[t]}));for(var l,s=0,c=!1,d=[],u=0,h=0;h<o;h++){var f=e[h],g=f.rect;l=g[t]-s,l<0&&(g[t]-=l,f.label[t]-=l,c=!0);var b=Math.max(-l,0);d.push(b),u+=b,s=g[t]+g[a]}u>0&&i&&O(-u/o,0,o);var v,p,y=e[0],m=e[o-1];return x(),v<0&&M(-v,.8),p<0&&M(p,.8),x(),w(v,p,1),w(p,v,-1),x(),v<0&&S(-v),p<0&&S(p),c}function x(){v=y.rect[t]-r,p=n-m.rect[t]-m.rect[a]}function w(e,t,a){if(e<0){var r=Math.min(t,-e);if(r>0){O(r*a,0,o);var n=r+e;n<0&&M(-n*a,1)}else M(-e*a,1)}}function O(a,r,n){0!==a&&(c=!0);for(var i=r;i<n;i++){var o=e[i],l=o.rect;l[t]+=a,o.label[t]+=a}}function M(r,n){for(var i=[],l=0,s=1;s<o;s++){var c=e[s-1].rect,d=Math.max(e[s].rect[t]-c[t]-c[a],0);i.push(d),l+=d}if(l){var u=Math.min(Math.abs(r)/l,n);if(r>0)for(s=0;s<o-1;s++){var h=i[s]*u;O(h,0,s+1)}else for(s=o-1;s>0;s--){h=i[s-1]*u;O(-h,s,o)}}}function S(e){var t=e<0?-1:1;e=Math.abs(e);for(var a=Math.ceil(e/(o-1)),r=0;r<o-1;r++)if(t>0?O(a,0,r+1):O(-a,o-r-1,o),e-=a,e<=0)return}}function l(e,t,a,r){return o(e,"x","width",t,a,r)}function s(e,t,a,r){return o(e,"y","height",t,a,r)}function c(e){var t=[];e.sort((function(e,t){return t.priority-e.priority}));var a=new n["a"](0,0,0,0);function i(e){if(!e.ignore){var t=e.ensureState("emphasis");null==t.ignore&&(t.ignore=!1)}e.ignore=!0}for(var o=0;o<e.length;o++){var l=e[o],s=l.axisAligned,c=l.localRect,d=l.transform,u=l.label,h=l.labelLine;a.copy(l.rect),a.width-=.1,a.height-=.1,a.x+=.05,a.y+=.05;for(var f=l.obb,g=!1,b=0;b<t.length;b++){var v=t[b];if(a.intersect(v.rect)){if(s&&v.axisAligned){g=!0;break}if(v.obb||(v.obb=new r["a"](v.localRect,v.transform)),f||(f=new r["a"](c,d)),f.intersect(v.obb)){g=!0;break}}}g?(i(u),h&&i(h)):(u.attr("ignore",l.defaultAttr.ignore),h&&h.attr("ignore",l.defaultAttr.labelGuideIgnore),t.push(l))}}},7837:function(e,t,a){"use strict";a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return g})),a.d(t,"d",(function(){return w})),a.d(t,"f",(function(){return O})),a.d(t,"h",(function(){return M})),a.d(t,"a",(function(){return S}));var r=a("76a5"),n=a("6d8b"),i=a("7d6c"),o=a("e0d3"),l=a("deca"),s={};function c(e,t){for(var a=0;a<i["g"].length;a++){var r=i["g"][a],n=t[r],o=e.ensureState(r);o.style=o.style||{},o.style.text=n}var l=e.currentStates.slice();e.clearStates(!0),e.setStyle({text:t.normal}),e.useStates(l,!0)}function d(e,t,a){var r,o=e.labelFetcher,l=e.labelDataIndex,s=e.labelDimIndex,c=t.normal;o&&(r=o.getFormattedLabel(l,"normal",null,s,c&&c.get("formatter"),null!=a?{interpolatedValue:a}:null)),null==r&&(r=Object(n["w"])(e.defaultText)?e.defaultText(l,e,a):e.defaultText);for(var d={normal:r},u=0;u<i["g"].length;u++){var h=i["g"][u],f=t[h];d[h]=Object(n["P"])(o?o.getFormattedLabel(l,h,null,s,f&&f.get("formatter")):null,r)}return d}function u(e,t,a,o){a=a||s;for(var l=e instanceof r["a"],u=!1,h=0;h<i["a"].length;h++){var b=t[i["a"][h]];if(b&&b.getShallow("show")){u=!0;break}}var v=l?e:e.getTextContent();if(u){l||(v||(v=new r["a"],e.setTextContent(v)),e.stateProxy&&(v.stateProxy=e.stateProxy));var p=d(a,t),y=t.normal,m=!!y.getShallow("show"),x=f(y,o&&o.normal,a,!1,!l);x.text=p.normal,l||e.setTextConfig(g(y,a,!1));for(h=0;h<i["g"].length;h++){var w=i["g"][h];b=t[w];if(b){var M=v.ensureState(w),S=!!Object(n["P"])(b.getShallow("show"),m);if(S!==m&&(M.ignore=!S),M.style=f(b,o&&o[w],a,!0,!l),M.style.text=p[w],!l){var T=e.ensureState(w);T.textConfig=g(b,a,!0)}}}v.silent=!!y.getShallow("silent"),null!=v.style.x&&(x.x=v.style.x),null!=v.style.y&&(x.y=v.style.y),v.ignore=!m,v.useStyle(x),v.dirty(),a.enableTextSetter&&(O(v).setLabelText=function(e){var r=d(a,t,e);c(v,r)})}else v&&(v.ignore=!0);e.dirty()}function h(e,t){t=t||"label";for(var a={normal:e.getModel(t)},r=0;r<i["g"].length;r++){var n=i["g"][r];a[n]=e.getModel([n,t])}return a}function f(e,t,a,r,i){var o={};return b(o,e,a,r,i),t&&Object(n["m"])(o,t),o}function g(e,t,a){t=t||{};var r,i={},o=e.getShallow("rotate"),l=Object(n["P"])(e.getShallow("distance"),a?null:5),s=e.getShallow("offset");return r=e.getShallow("position")||(a?null:"inside"),"outside"===r&&(r=t.defaultOutsidePosition||"top"),null!=r&&(i.position=r),null!=s&&(i.offset=s),null!=o&&(o*=Math.PI/180,i.rotation=o),null!=l&&(i.distance=l),i.outsideFill="inherit"===e.get("color")?t.inheritColor||null:"auto",i}function b(e,t,a,r,n){a=a||s;var i,o=t.ecModel,l=o&&o.option.textStyle,c=v(t);if(c)for(var d in i={},c)if(c.hasOwnProperty(d)){var u=t.getModel(["rich",d]);x(i[d]={},u,l,a,r,n,!1,!0)}i&&(e.rich=i);var h=t.get("overflow");h&&(e.overflow=h);var f=t.get("minMargin");null!=f&&(e.margin=f),x(e,t,l,a,r,n,!0,!1)}function v(e){var t;while(e&&e!==e.ecModel){var a=(e.option||s).rich;if(a){t=t||{};for(var r=Object(n["F"])(a),i=0;i<r.length;i++){var o=r[i];t[o]=1}}e=e.parentModel}return t}var p=["fontStyle","fontWeight","fontSize","fontFamily","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY"],y=["align","lineHeight","width","height","tag","verticalAlign","ellipsis"],m=["padding","borderWidth","borderRadius","borderDashOffset","backgroundColor","borderColor","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function x(e,t,a,r,i,o,l,c){a=!i&&a||s;var d=r&&r.inheritColor,u=t.getShallow("color"),h=t.getShallow("textBorderColor"),f=Object(n["P"])(t.getShallow("opacity"),a.opacity);"inherit"!==u&&"auto"!==u||(u=d||null),"inherit"!==h&&"auto"!==h||(h=d||null),o||(u=u||a.color,h=h||a.textBorderColor),null!=u&&(e.fill=u),null!=h&&(e.stroke=h);var g=Object(n["P"])(t.getShallow("textBorderWidth"),a.textBorderWidth);null!=g&&(e.lineWidth=g);var b=Object(n["P"])(t.getShallow("textBorderType"),a.textBorderType);null!=b&&(e.lineDash=b);var v=Object(n["P"])(t.getShallow("textBorderDashOffset"),a.textBorderDashOffset);null!=v&&(e.lineDashOffset=v),i||null!=f||c||(f=r&&r.defaultOpacity),null!=f&&(e.opacity=f),i||o||null==e.fill&&r.inheritColor&&(e.fill=r.inheritColor);for(var x=0;x<p.length;x++){var w=p[x],O=Object(n["P"])(t.getShallow(w),a[w]);null!=O&&(e[w]=O)}for(x=0;x<y.length;x++){w=y[x],O=t.getShallow(w);null!=O&&(e[w]=O)}if(null==e.verticalAlign){var M=t.getShallow("baseline");null!=M&&(e.verticalAlign=M)}if(!l||!r.disableBox){for(x=0;x<m.length;x++){w=m[x],O=t.getShallow(w);null!=O&&(e[w]=O)}var S=t.getShallow("borderType");null!=S&&(e.borderDash=S),"auto"!==e.backgroundColor&&"inherit"!==e.backgroundColor||!d||(e.backgroundColor=d),"auto"!==e.borderColor&&"inherit"!==e.borderColor||!d||(e.borderColor=d)}}function w(e,t){var a=t&&t.getModel("textStyle");return Object(n["T"])([e.fontStyle||a&&a.getShallow("fontStyle")||"",e.fontWeight||a&&a.getShallow("fontWeight")||"",(e.fontSize||a&&a.getShallow("fontSize")||12)+"px",e.fontFamily||a&&a.getShallow("fontFamily")||"sans-serif"].join(" "))}var O=Object(o["o"])();function M(e,t,a,r){if(e){var n=O(e);n.prevValue=n.value,n.value=a;var i=t.normal;n.valueAnimation=i.get("valueAnimation"),n.valueAnimation&&(n.precision=i.get("precision"),n.defaultInterpolatedText=r,n.statesModels=t)}}function S(e,t,a,r,i){var s=O(e);if(s.valueAnimation&&s.prevValue!==s.value){var u=s.defaultInterpolatedText,h=Object(n["P"])(s.interpolatedValue,s.prevValue),f=s.value;e.percent=0,(null==s.prevValue?l["c"]:l["h"])(e,{percent:1},r,t,null,g)}function g(r){var n=Object(o["k"])(a,s.precision,h,f,r);s.interpolatedValue=1===r?null:n;var l=d({labelDataIndex:t,labelFetcher:i,defaultText:u?u(n):n+""},s.statesModels,n);c(e,l)}}},"87c3":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("6d8b"),n=a("cccd"),i=a("ee1a"),o=a("f658");function l(e,t){return{seriesType:e,plan:Object(n["a"])(),reset:function(e){var a=e.getData(),n=e.coordinateSystem,l=e.pipelineContext,s=t||l.large;if(n){var c=Object(r["H"])(n.dimensions,(function(e){return a.mapDimension(e)})).slice(0,2),d=c.length,u=a.getCalculationInfo("stackResultDimension");Object(i["c"])(a,c[0])&&(c[0]=u),Object(i["c"])(a,c[1])&&(c[1]=u);var h=a.getStore(),f=a.getDimensionIndex(c[0]),g=a.getDimensionIndex(c[1]);return d&&{progress:function(e,t){for(var a=e.end-e.start,r=s&&Object(o["a"])(a*d),i=[],l=[],c=e.start,u=0;c<e.end;c++){var b=void 0;if(1===d){var v=h.get(f,c);b=n.dataToPoint(v,null,l)}else i[0]=h.get(f,c),i[1]=h.get(g,c),b=n.dataToPoint(i,null,l);s?(r[u++]=b[0],r[u++]=b[1]):t.setItemLayout(c,b.slice())}s&&t.setLayout("points",r)}}}}}}},"89b6":function(e,t,a){"use strict";a.d(t,"e",(function(){return k})),a.d(t,"c",(function(){return I})),a.d(t,"b",(function(){return W})),a.d(t,"d",(function(){return B})),a.d(t,"a",(function(){return _}));var r=a("dce8"),n=a("cbe5"),i=a("d498"),o=a("20c8"),l=a("857d"),s=a("4a3f"),c=a("6d8b"),d=a("1687"),u=a("401b"),h=a("7d6c"),f=2*Math.PI,g=o["a"].CMD,b=["top","right","bottom","left"];function v(e,t,a,r,n){var i=a.width,o=a.height;switch(e){case"top":r.set(a.x+i/2,a.y-t),n.set(0,-1);break;case"bottom":r.set(a.x+i/2,a.y+o+t),n.set(0,1);break;case"left":r.set(a.x-t,a.y+o/2),n.set(-1,0);break;case"right":r.set(a.x+i+t,a.y+o/2),n.set(1,0);break}}function p(e,t,a,r,n,i,o,s,c){o-=e,s-=t;var d=Math.sqrt(o*o+s*s);o/=d,s/=d;var u=o*a+e,h=s*a+t;if(Math.abs(r-n)%f<1e-4)return c[0]=u,c[1]=h,d-a;if(i){var g=r;r=Object(l["a"])(n),n=Object(l["a"])(g)}else r=Object(l["a"])(r),n=Object(l["a"])(n);r>n&&(n+=f);var b=Math.atan2(s,o);if(b<0&&(b+=f),b>=r&&b<=n||b+f>=r&&b+f<=n)return c[0]=u,c[1]=h,d-a;var v=a*Math.cos(r)+e,p=a*Math.sin(r)+t,y=a*Math.cos(n)+e,m=a*Math.sin(n)+t,x=(v-o)*(v-o)+(p-s)*(p-s),w=(y-o)*(y-o)+(m-s)*(m-s);return x<w?(c[0]=v,c[1]=p,Math.sqrt(x)):(c[0]=y,c[1]=m,Math.sqrt(w))}function y(e,t,a,r,n,i,o,l){var s=n-e,c=i-t,d=a-e,u=r-t,h=Math.sqrt(d*d+u*u);d/=h,u/=h;var f=s*d+c*u,g=f/h;l&&(g=Math.min(Math.max(g,0),1)),g*=h;var b=o[0]=e+g*d,v=o[1]=t+g*u;return Math.sqrt((b-n)*(b-n)+(v-i)*(v-i))}function m(e,t,a,r,n,i,o){a<0&&(e+=a,a=-a),r<0&&(t+=r,r=-r);var l=e+a,s=t+r,c=o[0]=Math.min(Math.max(n,e),l),d=o[1]=Math.min(Math.max(i,t),s);return Math.sqrt((c-n)*(c-n)+(d-i)*(d-i))}var x=[];function w(e,t,a){var r=m(t.x,t.y,t.width,t.height,e.x,e.y,x);return a.set(x[0],x[1]),r}function O(e,t,a){for(var r,n,i=0,o=0,l=0,c=0,d=1/0,u=t.data,h=e.x,f=e.y,b=0;b<u.length;){var v=u[b++];1===b&&(i=u[b],o=u[b+1],l=i,c=o);var w=d;switch(v){case g.M:l=u[b++],c=u[b++],i=l,o=c;break;case g.L:w=y(i,o,u[b],u[b+1],h,f,x,!0),i=u[b++],o=u[b++];break;case g.C:w=Object(s["e"])(i,o,u[b++],u[b++],u[b++],u[b++],u[b],u[b+1],h,f,x),i=u[b++],o=u[b++];break;case g.Q:w=Object(s["l"])(i,o,u[b++],u[b++],u[b],u[b+1],h,f,x),i=u[b++],o=u[b++];break;case g.A:var O=u[b++],M=u[b++],S=u[b++],T=u[b++],j=u[b++],A=u[b++];b+=1;var k=!!(1-u[b++]);r=Math.cos(j)*S+O,n=Math.sin(j)*T+M,b<=1&&(l=r,c=n);var L=(h-O)*T/S+O;w=p(O,M,T,j,j+A,k,L,f,x),i=Math.cos(j+A)*S+O,o=Math.sin(j+A)*T+M;break;case g.R:l=i=u[b++],c=o=u[b++];var C=u[b++],I=u[b++];w=m(l,c,C,I,h,f,x);break;case g.Z:w=y(i,o,l,c,h,f,x,!0),i=l,o=c;break}w<d&&(d=w,a.set(x[0],x[1]))}return d}var M=new r["a"],S=new r["a"],T=new r["a"],j=new r["a"],A=new r["a"];function k(e,t){if(e){var a=e.getTextGuideLine(),i=e.getTextContent();if(i&&a){var o=e.textGuideLineConfig||{},l=[[0,0],[0,0],[0,0]],s=o.candidates||b,c=i.getBoundingRect().clone();c.applyTransform(i.getComputedTransform());var u=1/0,h=o.anchor,f=e.getComputedTransform(),g=f&&Object(d["e"])([],f),p=t.get("length2")||0;h&&T.copy(h);for(var y=0;y<s.length;y++){var m=s[y];v(m,0,c,M,j),r["a"].scaleAndAdd(S,M,j,p),S.transform(g);var x=e.getBoundingRect(),A=h?h.distance(S):e instanceof n["b"]?O(S,e.path,T):w(S,x,T);A<u&&(u=A,S.transform(f),T.transform(f),T.toArray(l[0]),S.toArray(l[1]),M.toArray(l[2]))}I(l,t.get("minTurnAngle")),a.setShape({points:l})}}}var L=[],C=new r["a"];function I(e,t){if(t<=180&&t>0){t=t/180*Math.PI,M.fromArray(e[0]),S.fromArray(e[1]),T.fromArray(e[2]),r["a"].sub(j,M,S),r["a"].sub(A,T,S);var a=j.len(),n=A.len();if(!(a<.001||n<.001)){j.scale(1/a),A.scale(1/n);var i=j.dot(A),o=Math.cos(t);if(o<i){var l=y(S.x,S.y,T.x,T.y,M.x,M.y,L,!1);C.fromArray(L),C.scaleAndAdd(A,l/Math.tan(Math.PI-t));var s=T.x!==S.x?(C.x-S.x)/(T.x-S.x):(C.y-S.y)/(T.y-S.y);if(isNaN(s))return;s<0?r["a"].copy(C,S):s>1&&r["a"].copy(C,T),C.toArray(e[1])}}}}function W(e,t,a){if(a<=180&&a>0){a=a/180*Math.PI,M.fromArray(e[0]),S.fromArray(e[1]),T.fromArray(e[2]),r["a"].sub(j,S,M),r["a"].sub(A,T,S);var n=j.len(),i=A.len();if(!(n<.001||i<.001)){j.scale(1/n),A.scale(1/i);var o=j.dot(t),l=Math.cos(a);if(o<l){var s=y(S.x,S.y,T.x,T.y,M.x,M.y,L,!1);C.fromArray(L);var c=Math.PI/2,d=Math.acos(A.dot(t)),u=c+d-a;if(u>=c)r["a"].copy(C,T);else{C.scaleAndAdd(A,s/Math.tan(Math.PI/2-u));var h=T.x!==S.x?(C.x-S.x)/(T.x-S.x):(C.y-S.y)/(T.y-S.y);if(isNaN(h))return;h<0?r["a"].copy(C,S):h>1&&r["a"].copy(C,T)}C.toArray(e[1])}}}}function P(e,t,a,r){var n="normal"===a,i=n?e:e.ensureState(a);i.ignore=t;var o=r.get("smooth");o&&!0===o&&(o=.3),i.shape=i.shape||{},o>0&&(i.shape.smooth=o);var l=r.getModel("lineStyle").getLineStyle();n?e.useStyle(l):i.style=l}function D(e,t){var a=t.smooth,r=t.points;if(r)if(e.moveTo(r[0][0],r[0][1]),a>0&&r.length>=3){var n=u["f"](r[0],r[1]),i=u["f"](r[1],r[2]);if(!n||!i)return e.lineTo(r[1][0],r[1][1]),void e.lineTo(r[2][0],r[2][1]);var o=Math.min(n,i)*a,l=u["j"]([],r[1],r[0],o/n),s=u["j"]([],r[1],r[2],o/i),c=u["j"]([],l,s,.5);e.bezierCurveTo(l[0],l[1],l[0],l[1],c[0],c[1]),e.bezierCurveTo(s[0],s[1],s[0],s[1],r[2][0],r[2][1])}else for(var d=1;d<r.length;d++)e.lineTo(r[d][0],r[d][1])}function B(e,t,a){var r=e.getTextGuideLine(),n=e.getTextContent();if(n){for(var o=t.normal,l=o.get("show"),s=n.ignore,d=0;d<h["a"].length;d++){var u=h["a"][d],f=t[u],g="normal"===u;if(f){var b=f.get("show"),v=g?s:Object(c["P"])(n.states[u]&&n.states[u].ignore,s);if(v||!Object(c["P"])(b,l)){var p=g?r:r&&r.states[u];p&&(p.ignore=!0),r&&P(r,!0,u,f);continue}r||(r=new i["a"],e.setTextGuideLine(r),g||!s&&l||P(r,!0,"normal",t.normal),e.stateProxy&&(r.stateProxy=e.stateProxy)),P(r,!1,u,f)}}if(r){Object(c["i"])(r.style,a),r.style.fill=null;var y=o.get("showAbove"),m=e.textGuideLineConfig=e.textGuideLineConfig||{};m.showAbove=y||!1,r.buildPath=D}}else r&&e.removeTextGuideLine()}function _(e,t){t=t||"labelLine";for(var a={normal:e.getModel(t)},r=0;r<h["g"].length;r++){var n=h["g"][r];a[n]=e.getModel([n,t])}return a}},"9d57":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return h})),a.d(t,"d",(function(){return g})),a.d(t,"f",(function(){return v})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return y}));var r=a("6d8b"),n=a("3842"),i=a("ee1a"),o=a("cccd"),l=a("f658"),s="__ec_stack_";function c(e){return e.get("stack")||s+e.seriesIndex}function d(e){return e.dim+e.index}function u(e){var t=[],a=e.axis,n="axis0";if("category"===a.type){for(var i=a.getBandWidth(),o=0;o<e.count;o++)t.push(Object(r["i"])({bandWidth:i,axisKey:n,stackId:s+o},e));var l=b(t),c=[];for(o=0;o<e.count;o++){var d=l[n][s+o];d.offsetCenter=d.offset+d.width/2,c.push(d)}return c}}function h(e,t){var a=[];return t.eachSeriesByType(e,(function(e){m(e)&&a.push(e)})),a}function f(e){var t={};Object(r["k"])(e,(function(e){var a=e.coordinateSystem,r=a.getBaseAxis();if("time"===r.type||"value"===r.type)for(var n=e.getData(),i=r.dim+"_"+r.index,o=n.getDimensionIndex(n.mapDimension(r.dim)),l=n.getStore(),s=0,c=l.count();s<c;++s){var d=l.get(o,s);t[i]?t[i].push(d):t[i]=[d]}}));var a={};for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];if(i){i.sort((function(e,t){return e-t}));for(var o=null,l=1;l<i.length;++l){var s=i[l]-i[l-1];s>0&&(o=null===o?s:Math.min(o,s))}a[n]=o}}return a}function g(e){var t=f(e),a=[];return Object(r["k"])(e,(function(e){var r,i=e.coordinateSystem,o=i.getBaseAxis(),l=o.getExtent();if("category"===o.type)r=o.getBandWidth();else if("value"===o.type||"time"===o.type){var s=o.dim+"_"+o.index,u=t[s],h=Math.abs(l[1]-l[0]),f=o.scale.getExtent(),g=Math.abs(f[1]-f[0]);r=u?h/g*u:h}else{var b=e.getData();r=Math.abs(l[1]-l[0])/b.count()}var v=Object(n["o"])(e.get("barWidth"),r),p=Object(n["o"])(e.get("barMaxWidth"),r),y=Object(n["o"])(e.get("barMinWidth")||(x(e)?.5:1),r),m=e.get("barGap"),w=e.get("barCategoryGap");a.push({bandWidth:r,barWidth:v,barMaxWidth:p,barMinWidth:y,barGap:m,barCategoryGap:w,axisKey:d(o),stackId:c(e)})})),b(a)}function b(e){var t={};Object(r["k"])(e,(function(e,a){var r=e.axisKey,n=e.bandWidth,i=t[r]||{bandWidth:n,remainedWidth:n,autoWidthCount:0,categoryGap:null,gap:"20%",stacks:{}},o=i.stacks;t[r]=i;var l=e.stackId;o[l]||i.autoWidthCount++,o[l]=o[l]||{width:0,maxWidth:0};var s=e.barWidth;s&&!o[l].width&&(o[l].width=s,s=Math.min(i.remainedWidth,s),i.remainedWidth-=s);var c=e.barMaxWidth;c&&(o[l].maxWidth=c);var d=e.barMinWidth;d&&(o[l].minWidth=d);var u=e.barGap;null!=u&&(i.gap=u);var h=e.barCategoryGap;null!=h&&(i.categoryGap=h)}));var a={};return Object(r["k"])(t,(function(e,t){a[t]={};var i=e.stacks,o=e.bandWidth,l=e.categoryGap;if(null==l){var s=Object(r["F"])(i).length;l=Math.max(35-4*s,15)+"%"}var c=Object(n["o"])(l,o),d=Object(n["o"])(e.gap,1),u=e.remainedWidth,h=e.autoWidthCount,f=(u-c)/(h+(h-1)*d);f=Math.max(f,0),Object(r["k"])(i,(function(e){var t=e.maxWidth,a=e.minWidth;if(e.width){r=e.width;t&&(r=Math.min(r,t)),a&&(r=Math.max(r,a)),e.width=r,u-=r+d*r,h--}else{var r=f;t&&t<r&&(r=Math.min(t,u)),a&&a>r&&(r=a),r!==f&&(e.width=r,u-=r+d*r,h--)}})),f=(u-c)/(h+(h-1)*d),f=Math.max(f,0);var g,b=0;Object(r["k"])(i,(function(e,t){e.width||(e.width=f),g=e,b+=e.width*(1+d)})),g&&(b-=g.width*d);var v=-b/2;Object(r["k"])(i,(function(e,r){a[t][r]=a[t][r]||{bandWidth:o,offset:v,width:e.width},v+=e.width*(1+d)}))})),a}function v(e,t,a){if(e&&t){var r=e[d(t)];return null!=r&&null!=a?r[c(a)]:r}}function p(e,t){var a=h(e,t),n=g(a);Object(r["k"])(a,(function(e){var t=e.getData(),a=e.coordinateSystem,r=a.getBaseAxis(),i=c(e),o=n[d(r)][i],l=o.offset,s=o.width;t.setLayout({bandWidth:o.bandWidth,offset:l,size:s})}))}function y(e){return{seriesType:e,plan:Object(o["a"])(),reset:function(e){if(m(e)){var t=e.getData(),a=e.coordinateSystem,r=a.getBaseAxis(),n=a.getOtherAxis(r),o=t.getDimensionIndex(t.mapDimension(n.dim)),s=t.getDimensionIndex(t.mapDimension(r.dim)),c=e.get("showBackground",!0),d=t.mapDimension(n.dim),u=t.getCalculationInfo("stackResultDimension"),h=Object(i["c"])(t,d)&&!!t.getCalculationInfo("stackedOnSeries"),f=n.isHorizontal(),g=w(r,n),b=x(e),v=e.get("barMinHeight")||0,p=u&&t.getDimensionIndex(u),y=t.getLayout("size"),O=t.getLayout("offset");return{progress:function(e,t){var r,n=e.count,i=b&&Object(l["a"])(3*n),d=b&&c&&Object(l["a"])(3*n),u=b&&Object(l["a"])(n),m=a.master.getRect(),x=f?m.width:m.height,w=t.getStore(),M=0;while(null!=(r=e.next())){var S=w.get(h?p:o,r),T=w.get(s,r),j=g,A=void 0;h&&(A=+S-w.get(o,r));var k=void 0,L=void 0,C=void 0,I=void 0;if(f){var W=a.dataToPoint([S,T]);if(h){var P=a.dataToPoint([A,T]);j=P[0]}k=j,L=W[1]+O,C=W[0]-j,I=y,Math.abs(C)<v&&(C=(C<0?-1:1)*v)}else{W=a.dataToPoint([T,S]);if(h){P=a.dataToPoint([T,A]);j=P[1]}k=W[0]+O,L=j,C=y,I=W[1]-j,Math.abs(I)<v&&(I=(I<=0?-1:1)*v)}b?(i[M]=k,i[M+1]=L,i[M+2]=f?C:I,d&&(d[M]=f?m.x:k,d[M+1]=f?L:m.y,d[M+2]=x),u[r]=r):t.setItemLayout(r,{x:k,y:L,width:C,height:I}),M+=3}b&&t.setLayout({largePoints:i,largeDataIndices:u,largeBackgroundPoints:d,valueAxisHorizontal:f})}}}}}}function m(e){return e.coordinateSystem&&"cartesian2d"===e.coordinateSystem.type}function x(e){return e.pipelineContext&&e.pipelineContext.large}function w(e,t){return t.toGlobalCoord(t.dataToCoord("log"===t.type?1:0))}},cd07:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var r=a("e86a"),n=a("6d8b");function i(e,t){t=t||{};var a=t.isRoundCap;return function(t,n,i){var o=n.position;if(!o||o instanceof Array)return Object(r["c"])(t,n,i);var c=e(o),d=null!=n.distance?n.distance:5,u=this.shape,h=u.cx,f=u.cy,g=u.r,b=u.r0,v=(g+b)/2,p=u.startAngle,y=u.endAngle,m=(p+y)/2,x=a?Math.abs(g-b)/2:0,w=Math.cos,O=Math.sin,M=h+g*w(p),S=f+g*O(p),T="left",j="top";switch(c){case"startArc":M=h+(b-d)*w(m),S=f+(b-d)*O(m),T="center",j="top";break;case"insideStartArc":M=h+(b+d)*w(m),S=f+(b+d)*O(m),T="center",j="bottom";break;case"startAngle":M=h+v*w(p)+l(p,d+x,!1),S=f+v*O(p)+s(p,d+x,!1),T="right",j="middle";break;case"insideStartAngle":M=h+v*w(p)+l(p,-d+x,!1),S=f+v*O(p)+s(p,-d+x,!1),T="left",j="middle";break;case"middle":M=h+v*w(m),S=f+v*O(m),T="center",j="middle";break;case"endArc":M=h+(g+d)*w(m),S=f+(g+d)*O(m),T="center",j="bottom";break;case"insideEndArc":M=h+(g-d)*w(m),S=f+(g-d)*O(m),T="center",j="top";break;case"endAngle":M=h+v*w(y)+l(y,d+x,!0),S=f+v*O(y)+s(y,d+x,!0),T="left",j="middle";break;case"insideEndAngle":M=h+v*w(y)+l(y,-d+x,!0),S=f+v*O(y)+s(y,-d+x,!0),T="right",j="middle";break;default:return Object(r["c"])(t,n,i)}return t=t||{},t.x=M,t.y=S,t.align=T,t.verticalAlign=j,t}}function o(e,t,a,r){if(Object(n["z"])(r))e.setTextConfig({rotation:r});else if(Object(n["t"])(t))e.setTextConfig({rotation:0});else{var i,o=e.shape,l=o.clockwise?o.startAngle:o.endAngle,s=o.clockwise?o.endAngle:o.startAngle,c=(l+s)/2,d=a(t);switch(d){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":i=c;break;case"startAngle":case"insideStartAngle":i=l;break;case"endAngle":case"insideEndAngle":i=s;break;default:return void e.setTextConfig({rotation:0})}var u=1.5*Math.PI-i;"middle"===d&&u>Math.PI/2&&u<1.5*Math.PI&&(u-=Math.PI),e.setTextConfig({rotation:u})}}function l(e,t,a){return t*Math.sin(e)*(a?-1:1)}function s(e,t,a){return t*Math.cos(e)*(a?1:-1)}},ee29:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var r=a("e0d3"),n=a("9850"),i=a("deca"),o=a("861c"),l=a("3842"),s=a("8582"),c=a("89b6"),d=a("6d8b"),u=a("2355"),h=a("7837"),f=a("857d");function g(e){if(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a].slice());return t}}function b(e,t){var a=e.label,r=t&&t.getTextGuideLine();return{dataIndex:e.dataIndex,dataType:e.dataType,seriesIndex:e.seriesModel.seriesIndex,text:e.label.style.text,rect:e.hostRect,labelRect:e.rect,align:a.style.align,verticalAlign:a.style.verticalAlign,labelLinePoints:g(r&&r.shape.points)}}var v=["align","verticalAlign","width","height","fontSize"],p=new s["c"],y=Object(r["o"])(),m=Object(r["o"])();function x(e,t,a){for(var r=0;r<a.length;r++){var n=a[r];null!=t[n]&&(e[n]=t[n])}}var w=["x","y","rotation"],O=function(){function e(){this._labelList=[],this._chartViewList=[]}return e.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},e.prototype._addLabel=function(e,t,a,r,i){var o=r.style,l=r.__hostTarget,s=l.textConfig||{},c=r.getComputedTransform(),d=r.getBoundingRect().plain();n["a"].applyTransform(d,d,c),c?p.setLocalTransform(c):(p.x=p.y=p.rotation=p.originX=p.originY=0,p.scaleX=p.scaleY=1),p.rotation=Object(f["a"])(p.rotation);var u,h=r.__hostTarget;if(h){u=h.getBoundingRect().plain();var g=h.getComputedTransform();n["a"].applyTransform(u,u,g)}var b=u&&h.getTextGuideLine();this._labelList.push({label:r,labelLine:b,seriesModel:a,dataIndex:e,dataType:t,layoutOption:i,computedLayoutOption:null,rect:d,hostRect:u,priority:u?u.width*u.height:0,defaultAttr:{ignore:r.ignore,labelGuideIgnore:b&&b.ignore,x:p.x,y:p.y,scaleX:p.scaleX,scaleY:p.scaleY,rotation:p.rotation,style:{x:o.x,y:o.y,align:o.align,verticalAlign:o.verticalAlign,width:o.width,height:o.height,fontSize:o.fontSize},cursor:r.cursor,attachedPos:s.position,attachedRot:s.rotation}})},e.prototype.addLabelsOfSeries=function(e){var t=this;this._chartViewList.push(e);var a=e.__model,r=a.get("labelLayout");(Object(d["w"])(r)||Object(d["F"])(r).length)&&e.group.traverse((function(e){if(e.ignore)return!0;var n=e.getTextContent(),i=Object(o["a"])(e);n&&!n.disableLabelLayout&&t._addLabel(i.dataIndex,i.dataType,a,n,r)}))},e.prototype.updateLayoutConfig=function(e){var t=e.getWidth(),a=e.getHeight();function r(e,t){return function(){Object(c["e"])(e,t)}}for(var n=0;n<this._labelList.length;n++){var i=this._labelList[n],o=i.label,s=o.__hostTarget,u=i.defaultAttr,h=void 0;h=Object(d["w"])(i.layoutOption)?i.layoutOption(b(i,s)):i.layoutOption,h=h||{},i.computedLayoutOption=h;var f=Math.PI/180;s&&s.setTextConfig({local:!1,position:null!=h.x||null!=h.y?null:u.attachedPos,rotation:null!=h.rotate?h.rotate*f:u.attachedRot,offset:[h.dx||0,h.dy||0]});var g=!1;if(null!=h.x?(o.x=Object(l["o"])(h.x,t),o.setStyle("x",0),g=!0):(o.x=u.x,o.setStyle("x",u.style.x)),null!=h.y?(o.y=Object(l["o"])(h.y,a),o.setStyle("y",0),g=!0):(o.y=u.y,o.setStyle("y",u.style.y)),h.labelLinePoints){var p=s.getTextGuideLine();p&&(p.setShape({points:h.labelLinePoints}),g=!1)}var m=y(o);m.needsUpdateLabelLine=g,o.rotation=null!=h.rotate?h.rotate*f:u.rotation,o.scaleX=u.scaleX,o.scaleY=u.scaleY;for(var x=0;x<v.length;x++){var w=v[x];o.setStyle(w,null!=h[w]?h[w]:u.style[w])}if(h.draggable){if(o.draggable=!0,o.cursor="move",s){var O=i.seriesModel;if(null!=i.dataIndex){var M=i.seriesModel.getData(i.dataType);O=M.getItemModel(i.dataIndex)}o.on("drag",r(s,O.getModel("labelLine")))}}else o.off("drag"),o.cursor=u.cursor}},e.prototype.layout=function(e){var t=e.getWidth(),a=e.getHeight(),r=Object(u["b"])(this._labelList),n=Object(d["n"])(r,(function(e){return"shiftX"===e.layoutOption.moveOverlap})),i=Object(d["n"])(r,(function(e){return"shiftY"===e.layoutOption.moveOverlap}));Object(u["c"])(n,0,t),Object(u["d"])(i,0,a);var o=Object(d["n"])(r,(function(e){return e.layoutOption.hideOverlap}));Object(u["a"])(o)},e.prototype.processLabelsOverall=function(){var e=this;Object(d["k"])(this._chartViewList,(function(t){var a=t.__model,r=t.ignoreLabelLineUpdate,n=a.isAnimationEnabled();t.group.traverse((function(t){if(t.ignore&&!t.forceLabelAnimation)return!0;var i=!r,o=t.getTextContent();!i&&o&&(i=y(o).needsUpdateLabelLine),i&&e._updateLabelLine(t,a),n&&e._animateLabels(t,a)}))}))},e.prototype._updateLabelLine=function(e,t){var a=e.getTextContent(),r=Object(o["a"])(e),n=r.dataIndex;if(a&&null!=n){var i=t.getData(r.dataType),l=i.getItemModel(n),s={},d=i.getItemVisual(n,"style");if(d){var u=i.getVisual("drawType");s.stroke=d[u]}var h=l.getModel("labelLine");Object(c["d"])(e,Object(c["a"])(l),s),Object(c["e"])(e,h)}},e.prototype._animateLabels=function(e,t){var a=e.getTextContent(),r=e.getTextGuideLine();if(a&&(e.forceLabelAnimation||!a.ignore&&!a.invisible&&!e.disableLabelAnimation&&!Object(i["d"])(e))){var n=y(a),l=n.oldLayout,s=Object(o["a"])(e),c=s.dataIndex,u={x:a.x,y:a.y,rotation:a.rotation},f=t.getData(s.dataType);if(l){a.attr(l);var g=e.prevStates;g&&(Object(d["r"])(g,"select")>=0&&a.attr(n.oldLayoutSelect),Object(d["r"])(g,"emphasis")>=0&&a.attr(n.oldLayoutEmphasis)),Object(i["h"])(a,u,t,c)}else if(a.attr(u),!Object(h["f"])(a).valueAnimation){var b=Object(d["P"])(a.style.opacity,1);a.style.opacity=0,Object(i["c"])(a,{style:{opacity:b}},t,c)}if(n.oldLayout=u,a.states.select){var v=n.oldLayoutSelect={};x(v,u,w),x(v,a.states.select,w)}if(a.states.emphasis){var p=n.oldLayoutEmphasis={};x(p,u,w),x(p,a.states.emphasis,w)}Object(h["a"])(a,c,f,t,t)}if(r&&!r.ignore&&!r.invisible){n=m(r),l=n.oldLayout;var O={points:r.shape.points};l?(r.attr({shape:l}),Object(i["h"])(r,{shape:O},t)):(r.setShape(O),r.style.strokePercent=0,Object(i["c"])(r,{style:{strokePercent:1}},t)),n.oldLayout=O}},e}(),M=O,S=Object(r["o"])();function T(e){e.registerUpdateLifecycle("series:beforeupdate",(function(e,t,a){var r=S(t).labelManager;r||(r=S(t).labelManager=new M),r.clearLabels()})),e.registerUpdateLifecycle("series:layoutlabels",(function(e,t,a){var r=S(t).labelManager;a.updatedSeries.forEach((function(e){r.addLabelsOfSeries(t.getViewOfSeriesModel(e))})),r.updateLayoutConfig(t),r.layout(t),r.processLabelsOverall()}))}},eed6:function(e,t,a){"use strict";t["a"]={time:{month:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthAbbr:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayOfWeekAbbr:["日","一","二","三","四","五","六"]},legend:{selector:{all:"全选",inverse:"反选"}},toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图",custom:"自定义图表",chart:"图表"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}}}}]);