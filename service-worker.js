if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const t=e=>i(e,o),m={module:{uri:o},exports:a,require:t};s[o]=Promise.all(r.map((e=>m[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"makemake"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/makemake/css/app.c9feaa7b.css",revision:null},{url:"/makemake/img/sharing.png",revision:"1fcab35d2dace9320e485df747ed7f95"},{url:"/makemake/index.html",revision:"715b61a620efa0defce1f3960338105d"},{url:"/makemake/js/app.536dd7df.js",revision:null},{url:"/makemake/js/chunk-vendors.7c1c4423.js",revision:null},{url:"/makemake/manifest.json",revision:"3898e679f41de9a0f078845b98040077"},{url:"/makemake/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
