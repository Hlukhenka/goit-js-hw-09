function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=u);var i=u("7Y9D8");const l={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submit:document.querySelector("button[type=submit]")};function r(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.submit.addEventListener("click",(function(t){t.preventDefault();let n=l.delay.value;const o=l.step.value,u=l.amount.value;l.delay.value=l.step.value=l.amount.value="",n=+n;for(let t=0;t<u;t+=1){r(t+1,n).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),n=+o}}));
//# sourceMappingURL=03-promises.91fa94d0.js.map
