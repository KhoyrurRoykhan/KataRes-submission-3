/*! For license information please see app~ca0940c6.bundle.js.LICENSE.txt */
(self.webpackChunkkatares_submission_3=self.webpackChunkkatares_submission_3||[]).push([[268],{899:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(219),o=n(508),i=n(705);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(){a=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",f=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,u=Object.create(i.prototype),a=new M(r||[]);return o(u,"_invoke",{value:k(t,n,a)}),u}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",v="suspendedYield",d="executing",b="completed",m={};function w(){}function g(){}function x(){}var j={};s(j,c,(function(){return this}));var O=Object.getPrototypeOf,_=O&&O(O(C([])));_&&_!==n&&r.call(_,c)&&(j=_);var E=x.prototype=w.prototype=Object.create(j);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(o,i,a,c){var f=h(t[o],t,i);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==u(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(f.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,n,r){var o=y;return function(i,u){if(o===d)throw new Error("Generator is already running");if(o===b){if("throw"===i)throw u;return{value:t,done:!0}}for(r.method=i,r.arg=u;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var f=h(e,n,r);if("normal"===f.type){if(o=r.done?b:v,f.arg===m)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=b,r.method="throw",r.arg=f.arg)}}}function L(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var u=i.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return g.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(P.prototype),s(P.prototype,f,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var u=new P(p(t,n,r,o),i);return e.isGeneratorFunction(n)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},S(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=r.call(u,"catchLoc"),f=r.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function c(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}const l=function(){function t(e){var n=e.button,r=e.drawer,o=e.content;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._button=n,this._drawer=r,this._content=o,this._initialAppShell()}var e,n,u,l;return e=t,n=[{key:"_initialAppShell",value:function(){r.Z.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(u=a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.Z.parseActiveUrlWithCombiner(),n=i.Z[e],t.next=4,n.render();case 4:return this._content.innerHTML=t.sent,t.next=7,n.afterRender();case 7:document.querySelector(".skip-link").addEventListener("click",(function(t){t.preventDefault(),document.querySelector("#mainContent").focus()}));case 9:case"end":return t.stop()}}),t,this)})),l=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=u.apply(t,e);function i(t){c(o,n,r,i,a,"next",t)}function a(t){c(o,n,r,i,a,"throw",t)}i(void 0)}))},function(){return l.apply(this,arguments)})}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},152:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,u(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},n(t)}function r(t,e,n){return r=o()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var a=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(s,n);var r,a,c,f,l=(c=s,f=o(),function(){var e,n=u(c);if(f){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(this,e)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=s,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n            <style>\n                .footer {\n                    background-color: #0F2C59;\n                    color: white;\n                    padding: 10px;\n                    text-align: center;\n                    max-width: 100%;\n                    bottom: 0;\n                }\n            </style>\n            <div class="footer">\n                <p tabindex="0">&copy; '.concat((new Date).getFullYear()," - KataRes App</p>\n            </div>\n        ")}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),s}(n(HTMLElement));customElements.define("app-footer",a)},684:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return r(t,arguments,u(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},n(t)}function r(t,e,n){return r=o()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var a=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(s,n);var r,a,c,f,l=(c=s,f=o(),function(){var e,n=u(c);if(f){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(this,e)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=s,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n        .jumbotron {\n            background-image: url('./heros/hero-image_1-large.jpg');\n            background-size: cover;\n            background-position: center;\n            color: #fff;\n            text-align: center;\n            padding: 100px;\n            box-sizing: border-box;\n            margin-top: 0;\n          }\n\n          .jumbotron h1 {\n            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n          }\n          \n          .jumbotron p {\n            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n          }\n        \n          \n          @media (min-width: 1200px) {\n            .jumbotron {\n              width: 1000px;\n              margin: 0 auto;\n            }\n          }\n          \n          @media (max-width: 1199px) {\n            .jumbotron {\n              width: 100%;\n            }\n          }\n          \n          @media (max-width: 600px) {\n            .jumbotron {\n              background-image: url('./heros/hero-image_1-small.jpg');\n            }\n          }\n        </style>\n  \n        <div class=\"jumbotron\">\n            <h1>Welcome to the KataRes Website</h1>\n            <p>Come on, find a list of restaurants you want to visit</p>\n        </div>\n      "}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),s}(n(HTMLElement));customElements.define("hero-bar",a)}}]);
//# sourceMappingURL=app~ca0940c6.bundle.js.map