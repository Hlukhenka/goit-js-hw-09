!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("6JpON"),a={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submit:document.querySelector("button[type=submit]")};function r(e,t){return new Promise((function(n,o){var u=Math.random()>.3;setTimeout((function(){u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}a.submit.addEventListener("click",(function(t){t.preventDefault();var n=a.delay.value,o=a.step.value,u=a.amount.value;a.delay.value=a.step.value=a.amount.value="",n=+n;for(var l=0;l<u;l+=1){r(l+1,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),n=+o}}))}();
//# sourceMappingURL=03-promises.4b780aa3.js.map
