!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){var r,n,o,a=t.selector,u=t.targetDate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="refs",o={days:document.querySelector("[data-value=days]"),hours:document.querySelector("[data-value=hours]"),mins:document.querySelector("[data-value=mins]"),secs:document.querySelector("[data-value=secs]")},n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this.selector=a,this.targetDate=u}var t,r,o;return t=e,(r=[{key:"counter",value:function(){var e=this.targetDate-Date.now(),t=Math.floor(e%6e4/1e3),r=Math.floor(e%36e5/6e4),n=Math.floor(e%864e5/36e5),o=Math.floor(e/864e5);this.refs.days.textContent=o,this.refs.hours.textContent=n,this.refs.mins.textContent=r,this.refs.secs.textContent=t}}])&&n(t.prototype,r),o&&n(t,o),e}();setInterval((function(){new o({selector:"#timer-1",targetDate:new Date("Sep 17, 2024")}).counter()}),1e3)},function(e,t,r){}]);
//# sourceMappingURL=main.bundle.js.map