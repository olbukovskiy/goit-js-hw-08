!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t={feedbackForm:document.querySelector(".feedback-form"),emailField:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};var n={},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function S(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,f=setTimeout(j,t),d?S(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=g();if(O(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?v(n,a-(e-c)):n}(e))}function x(e){return f=void 0,p&&r?S(e):(r=o=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(j,t),S(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=y(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:x(g())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const S="feedback-form-state";let w={};t.emailField.addEventListener("input",n((function(e){w.email=e.target.value;let t=JSON.stringify(w);localStorage.setItem(S,t)}),500)),t.textarea.addEventListener("input",n((function(e){w.message=e.target.value;let t=JSON.stringify(w);localStorage.setItem(S,t)}),500)),window.addEventListener("load",(function(){let e=JSON.parse(localStorage.getItem(S));(null==e?void 0:e.email)&&(t.emailField.value=e.email);(null==e?void 0:e.message)&&(t.textarea.value=e.message)})),t.feedbackForm.addEventListener("submit",(function(e){e.preventDefault();let t=JSON.parse(localStorage.getItem(S));t&&console.log(t);e.currentTarget.reset(),localStorage.removeItem(S),w={}}))}();
//# sourceMappingURL=03-feedback.3ec2c67c.js.map