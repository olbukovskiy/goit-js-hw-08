var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t={feedbackForm:document.querySelector(".feedback-form"),emailField:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};var n={},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(w,t),l?y(e):a}function k(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function w(){var e=g();if(k(e))return j(e);f=setTimeout(w,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function x(){var e=g(),n=k(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(d)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},x.flush=function(){return void 0===f?a:j(g())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let y={};t.feedbackForm.addEventListener("input",n((function(e){y[e.target.name]=e.target.value;let t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500)),window.addEventListener("load",(function(){if(!localStorage.getItem("feedback-form-state"))return;let e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(y.email=e.email,t.emailField.value=e.email);e.message&&(y.message=e.message,t.textarea.value=e.message)})),t.feedbackForm.addEventListener("submit",(function(e){e.preventDefault();let t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&console.log(t);e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}}));
//# sourceMappingURL=03-feedback.3765d0c3.js.map