(function(){var e={425:function(e){e.exports={functional:!0,render(e,r){const{_c:t,_v:n,data:a,children:o=[]}=r,{class:c,staticClass:l,style:s,staticStyle:i,attrs:u={},...f}=a;return t("svg",{class:[c,l],style:[s,i],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u),...f},o.concat([t("path",{attrs:{d:"M256.004 6.321C114.635 6.321 0 120.93 0 262.32c0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-.24-26.271-.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232C152.423 368.994 92.65 347.04 92.65 248.949c0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-.298 61.822-.298 70.254 0 6.814 4.611 14.797 17.586 12.283C438.74 471.316 512 375.391 512 262.32 512 120.93 397.383 6.321 256.004 6.321z"}})]))}}},697:function(e,r,t){"use strict";var n=t(144),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"frame"},[e._m(0),t("main",[t("AppCalculator")],1),t("footer",[t("a",{attrs:{href:e.$t("link.github.href"),title:e.$t("link.github.title"),target:"_blank",rel:"noopener noreferrer"}},[t("IconGitHub")],1),t("AppLanguage")],1)])},o=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("header",[t("h1",[e._v("makemake")])])}],c=t(425),l=t.n(c),s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("form",{staticClass:"calculator"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"brutto"}},[t("span",[t("toggle-button",{attrs:{labels:{checked:e.$t("calculator.grossWage"),unchecked:e.$t("calculator.hourlyWage")},width:100,color:{checked:"#282828",unchecked:"#282828"},"switch-color":"#fff"},on:{change:e.onChangeCalculationType},model:{value:e.form.calculationType,callback:function(r){e.$set(e.form,"calculationType",r)},expression:"form.calculationType"}}),e._v(" "+e._s(e.$t("calculator.typeInPeriod"))+" "),t("toggle-button",{attrs:{labels:{checked:e.$t("calculator.wagePerMonth"),unchecked:e.$t("calculator.wagePeryear")},width:70,color:{checked:"#282828",unchecked:"#282828"},"switch-color":"#fff"},on:{change:e.onChangePeriod},model:{value:e.form.period,callback:function(r){e.$set(e.form,"period",r)},expression:"form.period"}})],1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.brutto,expression:"form.brutto"}],attrs:{id:"brutto",type:"number",name:"brutto",min:"0",placeholder:e.form.calculationType?e.form.period?e.$t("calculator.placeholder.wagePerMonth"):e.$t("calculator.placeholder.wagePerYear"):e.$t("calculator.placeholder.wagePerHour")},domProps:{value:e.form.brutto},on:{input:function(r){r.target.composing||e.$set(e.form,"brutto",r.target.value)}}})])]),t("div",{staticClass:"form-field"},[t("label",[t("span",[e._v(e._s(e.$t("calculator.workingHours")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.hours,expression:"form.hours"}],attrs:{type:"number",name:"hours",min:"0",placeholder:e.$t("calculator.placeholder.workingHours")},domProps:{value:e.form.hours},on:{input:function(r){r.target.composing||e.$set(e.form,"hours",r.target.value)}}})])]),t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"increase"}},[t("span",[e._v(" "+e._s(e.$t("calculator.increase"))+" "),t("toggle-button",{attrs:{labels:{checked:e.$t("calculator.increaseInPercent"),unchecked:e.$t("calculator.increaseInValue")},color:{checked:"#282828",unchecked:"#282828"},"switch-color":"#fff"},on:{change:e.onChangeIncreaseType},model:{value:e.form.increaseType,callback:function(r){e.$set(e.form,"increaseType",r)},expression:"form.increaseType"}})],1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.increase,expression:"form.increase"}],attrs:{id:"increase",type:"number",name:"increase",min:"0",placeholder:e.form.increaseType?e.$t("calculator.placeholder.increaseInPercent"):e.$t("calculator.placeholder.increaseInValue")},domProps:{value:e.form.increase},on:{input:function(r){r.target.composing||e.$set(e.form,"increase",r.target.value)}}})])]),t("div",{staticClass:"result"},[e.form.calculationType?[e.salary?t("p",[t("strong",[e._v(" "+e._s(e.number(e.salary))+" "+e._s(e.$t("calculator.currency"))+" ")]),t("span",[e._v(" / "+e._s(e.$t("calculator.hour"))+" ")])]):e._e(),e.total?t("p",[t("strong",[e._v(" "+e._s(e.number(e.total))+" "+e._s(e.$t("calculator.currency"))+" ")]),t("span",[e._v(" / "+e._s(e.form.period?e.$t("calculator.month"):e.$t("calculator.year"))+" ")])]):e._e()]:[e.total?t("p",[t("strong",[e._v(" "+e._s(e.number(e.total))+" "+e._s(e.$t("calculator.currency"))+" ")]),t("span",[e._v(" / "+e._s(e.$t("calculator.hour"))+" ")])]):e._e(),e.salary?t("p",[t("strong",[e._v(" "+e._s(e.number(e.form.period?e.salary:12*e.salary))+" "+e._s(e.$t("calculator.currency"))+" ")]),t("span",[e._v(" / "+e._s(e.form.period?e.$t("calculator.month"):e.$t("calculator.year"))+" ")])]):e._e()]],2)])},i=[];function u(e,r){return 3*e/13/r}function f(e,r){return 13*r*e/3}function p(e,r=0){return e*(1+r/100)}function h(e,r){return(r-e)/e*100}function g(e){if(e){const r=e.toFixed(2);return r%1===0?parseFloat(r):r}}var m={name:"AppCalculator",data(){return{form:{brutto:"",hours:"",increase:"",period:!0,increaseType:!0,calculationType:!0}}},computed:{salary(){const{brutto:e,hours:r,period:t,calculationType:n}=this.form,a=this.total||e;return e&&r>0&&(n?u(t?a:a/12,r):f(a,r))},total(){const{brutto:e,increase:r,increaseType:t}=this.form;return e&&r&&this.getTotal(e,r,t)}},methods:{getTotal(e,r,t){return t?p(e,r):parseFloat(e)+parseFloat(r)},getIncrease(e,r,t){return t?g(h(r,e)):(e-parseFloat(r)).toFixed(2)},onChangeCalculationType(){const{brutto:e,calculationType:r,hours:t,period:n}=this.form;e&&(this.form.brutto=t?g(r?f(n?e:12*e,t):u(n?e:e/12,t)):"")},onChangeIncreaseType(){const{brutto:e,increase:r,increaseType:t}=this.form,n=this.getTotal(e,r,!t)||e;e&&r&&(this.form.increase=this.getIncrease(n,e,t))},onChangePeriod(){const{brutto:e,calculationType:r,increase:t,increaseType:n,period:a}=this.form;e&&r&&(this.form.brutto=g(a?e/12:12*e),t&&!n&&(this.form.increase=g(a?t/12:12*t)))},number:g}},d=m,v=t(1),b=(0,v.Z)(d,s,i,!1,null,null,null),y=b.exports,w=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"language"},[t("label",{attrs:{for:"language"}},[e._v(" "+e._s(e.$t("field.language.label"))+" ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],attrs:{id:"language"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.$i18n,"locale",r.target.multiple?t:t[0])}}},e._l(e.langs,(function(r,n){return t("option",{key:"Lang"+n,domProps:{value:r}},[e._v(" "+e._s(r)+" ")])})),0)])},_=[],k={name:"AppLanguage",data(){return{langs:["en","de"]}},mounted(){this.$watch("$i18n.locale",((e,r)=>{e!==r&&(document.documentElement.lang=e)}),{immediate:!0})}},$=k,P=(0,v.Z)($,w,_,!1,null,null,null),T=P.exports,C={name:"App",components:{IconGitHub:l(),AppCalculator:y,AppLanguage:T}},x=C,I=(0,v.Z)(x,a,o,!1,null,null,null),O=I.exports,H=t(205);(0,H.z)("/makemake/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var M=t(10),A=t.n(M),j=t(152);function E(){const e=t(973),r={};return e.keys().forEach((t=>{const n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){const a=n[1];r[a]=e(t)}})),r}n.Z.use(j.Z);var N=new j.Z({locale:(navigator.language||navigator.userLanguage).split("-")[0]||"en",fallbackLocale:"en",messages:E()});n.Z.use(A()),new n.Z({i18n:N,render:e=>e(O)}).$mount("#app")},973:function(e,r,t){var n={"./de.json":929,"./en.json":790};function a(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=973},929:function(e){"use strict";e.exports=JSON.parse('{"calculator":{"currency":"€","grossWage":"Bruttolohn","hour":"Stunde","hourlyWage":"Stundenlohn","increase":"Erhöhung in","increaseInPercent":"%","increaseInValue":"€","month":"Monat","placeholder":{"increaseInPercent":"z.B. 3 %","increaseInValue":"z.B. 75 €","wagePerHour":"z.B. 14 €","wagePerMonth":"z.B. 2500 €","wagePerYear":"z.B. 30000 €","workingHours":"z.B. 40"},"typeInPeriod":"im","wagePerMonth":"Monat","wagePeryear":"Jahr","workingHours":"Arbeits­stunden pro Woche","year":"Jahr"},"field":{"language":{"label":"Sprache"}},"link":{"github":{"href":"https://github.com/Schascha/makemake","title":"Mehr auf GitHub"}}}')},790:function(e){"use strict";e.exports=JSON.parse('{"calculator":{"currency":"$","grossWage":"Gross Wage","hour":"Hour","hourlyWage":"Hourly Wage","increase":"Increase","increaseInPercent":"%","increaseInValue":"$","month":"Month","placeholder":{"increaseInPercent":"e.g. 3 %","increaseInValue":"e.g. 75 $","wagePerHour":"e.g. 14 $","wagePerMonth":"e.g. 2500 $","wagePerYear":"e.g. 30000 $","workingHours":"e.g. 40"},"typeInPeriod":"in","wagePerMonth":"Month","wagePeryear":"Year","workingHours":"Working hours","year":"Year"},"field":{"language":{"label":"Language"}},"link":{"github":{"href":"https://github.com/Schascha/stechus-kaktus","title":"View on GitHub"}}}')}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,o){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<c&&(c=o));if(l){e.splice(u--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,o,c=n[0],l=n[1],s=n[2],i=0;if(c.some((function(r){return 0!==e[r]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var u=s(t)}for(r&&r(n);i<c.length;i++)o=c[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},n=self["webpackChunkmakemake"]=self["webpackChunkmakemake"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(697)}));n=t.O(n)})();
//# sourceMappingURL=app.536dd7df.js.map