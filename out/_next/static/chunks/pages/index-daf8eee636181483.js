(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(4957),c=t(9898),i=t(639);var f={};function l(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var n=u.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?u.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,g=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,m=i.useIntersection({rootMargin:"200px"}),E=r(m,2),L=E[0],w=E[1],M=a.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);a.default.useEffect((function(){var e=w&&t&&u.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=f[d+"%"+p+(n?"%"+n:"")];e&&!r&&l(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var k={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,h,g,b,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&l(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof y?y:o&&o.locale,I=o&&o.isLocaleDomain&&u.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);k.href=I||u.addBasePath(u.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,f=e.disabled||!u,l=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(n?n.current:null),g=r(h,2),b=g[0],y=g[1],_=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),f||p||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=c.get(r):(n=c.get(t),i.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var n=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&i.splice(n,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:t}))}),[f,b,t,p]);return o.useEffect((function(){if(!u&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){n&&y(n.current)}),[n]),[_,p]};var o=t(7294),a=t(6286),u="undefined"!==typeof IntersectionObserver;var c=new Map,i=[]},2748:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(1664),o=t(5893);function a(){return(0,o.jsxs)("div",{children:["Hello World."," ",(0,o.jsx)(r.default,{href:"/about",as:"/360/about",children:(0,o.jsx)("a",{children:"About"})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2748)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);