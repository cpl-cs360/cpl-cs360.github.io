(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8566:function(e,t,n){"use strict";var r=n(930),i=n(5696),o=n(7980);t.default=function(e){var t,n=e.src,a=e.sizes,f=e.unoptimized,y=void 0!==f&&f,j=e.priority,k=void 0!==j&&j,S=e.loading,A=e.lazyRoot,P=void 0===A?null:A,x=e.lazyBoundary,z=void 0===x?"200px":x,_=e.className,M=e.quality,E=e.width,C=e.height,R=e.objectFit,D=e.objectPosition,I=e.onLoadingComplete,q=e.loader,H=void 0===q?O:q,W=e.placeholder,L=void 0===W?"empty":W,N=e.blurDataURL,B=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=c.useRef(null),F=c.useContext(d.ImageConfigContext),T=c.useMemo((function(){var e=h||F||u.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[F]),G=B,J=a?"responsive":"intrinsic";"layout"in G&&(G.layout&&(J=G.layout),delete G.layout);var Q="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(n)){var V=v(n)?n.default:n;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(N=N||V.blurDataURL,Q=V.src,(!J||"fill"!==J)&&(C=C||V.height,E=E||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}n="string"===typeof n?n:Q;var $=w(E),K=w(C),X=w(M),Y=!k&&("lazy"===S||"undefined"===typeof S);(n.startsWith("data:")||n.startsWith("blob:"))&&(y=!0,Y=!1);g.has(n)&&(Y=!1);0;var Z,ee=l.useIntersection({rootRef:P,rootMargin:z,disabled:!Y}),te=i(ee,2),ne=te[0],re=te[1],ie=!Y||re,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:D},ue="blur"===L?{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(N,'")'),backgroundPosition:D||"0% 0%"}:{};if("fill"===J)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof K){var le=K/$,de=isNaN(le)?"100%":"".concat(100*le,"%");"responsive"===J?(oe.display="block",oe.position="relative",ce=!0,ae.paddingTop=de):"intrinsic"===J?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,ae.maxWidth="100%",Z="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===J&&(oe.display="inline-block",oe.position="relative",oe.width=$,oe.height=K)}else 0;var fe={src:m,srcSet:void 0,sizes:void 0};ie&&(fe=b({config:T,src:n,unoptimized:y,layout:J,width:$,quality:X,sizes:a,loader:H}));var pe=n;0;0;var he=(r(t={},"imagesrcset",fe.srcSet),r(t,"imagesizes",fe.sizes),t),ge=c.default.useLayoutEffect,me=c.useRef(I);return c.useEffect((function(){me.current=I}),[I]),ge((function(){ne(U.current)}),[ne]),c.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==m&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(g.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(U,pe,0,L,me)}),[pe,J,L,ie]),c.default.createElement("span",{style:oe},ce?c.default.createElement("span",{style:ae},Z?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Z}):null):null,c.default.createElement("img",Object.assign({},G,fe,{decoding:"async","data-nimg":J,className:_,ref:U,style:p({},se,ue)})),Y&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},G,b({config:T,src:n,unoptimized:y,layout:J,width:$,quality:X,sizes:a,loader:H}),{decoding:"async","data-nimg":J,style:se,className:_,loading:S||"lazy"}))),k?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+fe.src+fe.srcSet+fe.sizes,rel:"preload",as:"image",href:fe.srcSet?void 0:fe.src},he))):null)};var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(a=n(2717))&&a.__esModule?a:{default:a},u=n(5809),l=n(639),d=n(9239);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(j(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}function b(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,s=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,s=/(^|\s)(1?\d?\d)vw/g,u=[];c=s.exec(r);c)u.push(parseInt(c[2]));if(u.length){var l=.01*Math.min.apply(Math,u);return{widths:a.filter((function(e){return e>=i[0]*l})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,s),d=l.widths,f=l.kind,p=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,r){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:c,width:d[p]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=y.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e){return"/"===e[0]?e.slice(1):e}},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},2717:function(e,t,n){"use strict";var r=n(930);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(o=n(1585))&&o.__esModule?o:{default:o},s=n(8e3),u=n(5850),l=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=i.props[l],f=r[l]||new Set;"name"===l&&a||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,n=a.useContext(s.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=g},1585:function(e,t,n){"use strict";var r=n(7980),i=n(3227),o=n(8361),a=(n(2191),n(5971)),c=n(2715),s=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){a(n,e);var t=u(n);function n(e){var o;return i(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},5675:function(e,t,n){e.exports=n(8566)}}]);