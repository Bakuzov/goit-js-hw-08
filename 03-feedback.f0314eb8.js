!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(T,t),d?g(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(T,t),g(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var S={},O="feedback-form-state",T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form textarea"),w=document.querySelector(".feedback-form input");T.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(S))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),w.value&&h.value?(console.log(S),e.currentTarget.reset(),localStorage.removeItem(O),S[w.name]="",S[h.name]=""):alert("Заполните все поля")})),function(){var e=localStorage.getItem(O),t=JSON.parse(e);if(!t)return;w.value=t.email,h.value=t.message}()}();
//# sourceMappingURL=03-feedback.f0314eb8.js.map
