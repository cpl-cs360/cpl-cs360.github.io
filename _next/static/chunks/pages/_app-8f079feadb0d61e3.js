(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7942:function(e,r,n){"use strict";var t=n(5696);r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(4957),c=n(9898),s=n(639);var l={};function u(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=i.resolveHref(o,e.href,!0),n=t(r,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,b=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var m=(r=a.default.Children.only(h))&&"object"===typeof r&&r.ref,_=s.useIntersection({rootMargin:"200px"}),y=t(_,2),x=y[0],O=y[1],w=a.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);a.default.useEffect((function(){var e=O&&n&&i.isLocalURL(p),r="undefined"!==typeof j?j:o&&o.locale,t=l[p+"%"+d+(r?"%"+r:"")];e&&!t&&u(o,p,d,{locale:r})}),[d,p,O,j,n,o]);var P={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,c,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),r[o?"replace":"push"](n,t,{shallow:a,locale:s,scroll:c}))}(e,o,p,d,v,b,g,j)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(p)&&u(o,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof j?j:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(d,E,o&&o.locales,o&&o.domainLocales);P.href=L||i.addBasePath(i.addLocale(d,E,o&&o.defaultLocale))}return a.default.cloneElement(r,P)};r.default=f},639:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,l=e.disabled||!i,u=o.useRef(),f=o.useState(!1),p=t(f,2),d=p[0],h=p[1],v=o.useState(r?r.current:null),b=t(v,2),g=b[0],j=b[1],m=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||d||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=c.get(t):(r=c.get(n),s.push(n));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(n,r={id:n,observer:a,elements:o}),r}(n),o=t.id,a=t.observer,i=t.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:n}))}),[l,g,n,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&j(r.current)}),[r]),[m,d]};var o=n(7294),a=n(6286),i="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},2855:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n.r(r),n.d(r,{default:function(){return p}});var o=n(621),a=n.n(o),i=n(1664),c=n(5893);function s(){return(0,c.jsx)("div",{className:a().topbar,children:(0,c.jsxs)("div",{className:a().wrapper,children:[(0,c.jsx)("div",{className:a().left,children:(0,c.jsx)(i.default,{href:"/#home",children:(0,c.jsx)("a",{className:a().logo,children:"cpl."})})}),(0,c.jsx)("div",{className:a().right,children:(0,c.jsxs)("ul",{children:[(0,c.jsx)(i.default,{href:"/#intro",children:(0,c.jsx)("a",{children:(0,c.jsxs)("li",{children:["01. ",(0,c.jsx)("span",{children:"Intro"})]})})}),(0,c.jsx)(i.default,{href:"/#assignments",children:(0,c.jsx)("a",{children:(0,c.jsxs)("li",{children:["02. ",(0,c.jsx)("span",{children:"Assignments"})]})})}),(0,c.jsx)(i.default,{href:"/sbmap/",children:(0,c.jsx)("a",{children:(0,c.jsxs)("li",{children:["03. ",(0,c.jsx)("span",{children:"The Final Project (SBMAP)"})]})})}),(0,c.jsx)("a",{href:"https://resume.io/r/fevBaW1OR",target:"_blank",className:a().button+" button",children:"Resume"})]})})]})})}var l=function(e){var r=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{}),r]})};n(4831);function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=function(e){var r=e.Component,n=e.pageProps;return(0,c.jsx)(l,{children:(0,c.jsx)(r,f({},n))})}},71:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2855)}])},621:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",topbar:"topbar_topbar__nvFAK",wrapper:"topbar_wrapper__vno0D",left:"topbar_left__hfuRs",logo:"topbar_logo__WS17b",right:"topbar_right__7_Phm",button:"topbar_button___ptIb"}},4831:function(){},1664:function(e,r,n){e.exports=n(7942)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(71),r(9898)}));var n=e.O();_N_E=n}]);