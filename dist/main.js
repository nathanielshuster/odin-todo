(()=>{var t={756:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(537),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([t.id,"body {\n    margin: auto;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: 'Palanquin', sans-serif;\n}\n\np, button {\n    font-family: 'Roboto', sans-serif;\n}\n\nheader, footer {\n    padding: 25px 50px;\n    background-color: #57C5B6;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B",sourcesContent:["body {\n    margin: auto;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: 'Palanquin', sans-serif;\n}\n\np, button {\n    font-family: 'Roboto', sans-serif;\n}\n\nheader, footer {\n    padding: 25px 50px;\n    background-color: #57C5B6;\n}"],sourceRoot:""}]);const c=a},898:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(537),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([t.id,".content {\n    padding: 75px 50px;\n}","",{version:3,sources:["webpack://./src/styles/projects.css"],names:[],mappings:"AAAA;IACI,kBAAkB;AACtB",sourcesContent:[".content {\n    padding: 75px 50px;\n}"],sourceRoot:""}]);const c=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},46:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});var r=n(379),o=n.n(r),s=n(795),a=n.n(s),c=n(569),i=n.n(c),u=n(565),d=n.n(u),l=n(216),p=n.n(l),f=n(589),m=n.n(f),v=n(756),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},788:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y});var r=n(379),o=n.n(r),s=n(795),a=n.n(s),c=n(569),i=n.n(c),u=n(565),d=n.n(u),l=n(216),p=n.n(l),f=n(589),m=n.n(f),v=n(898),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(v.Z,h);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},a=[],c=0;c<t.length;c++){var i=t[c],u=r.base?i[0]+r.base:i[0],d=s[u]||0,l="".concat(u," ").concat(d);s[u]=d+1;var p=n(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var c=n(s[a]);e[c].references--}for(var i=r(t,o),u=0;u<s.length;u++){var d=n(s[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=i}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},234:(t,e,n)=>{var r={"./main.css":46,"./projects.css":788};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=234}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";class t{static getProjects(){const t=localStorage.getItem("projects");return JSON.parse(t)}static addProject(e){const n=t.getProjects();if(n)n.push(e),localStorage.setItem("projects",JSON.stringify(n));else{const t=[e];localStorage.setItem("projects",JSON.stringify(t))}}}class e{static id=0;constructor(n){this.id=e.id,this.name=n,this.todos=[],e.id++,t.addProject(this)}}class r{static displayProjects(){r.clearProjects();const e=t.getProjects(),n=document.querySelector(".card-container"),o=document.querySelector(".title");e?(o.textContent="Projects",e.forEach((t=>{let e=document.createElement("div"),r=document.createElement("h3");r.textContent=t.name,e.appendChild(r),n.appendChild(e)}))):o.textContent="No Projects Found"}static clearProjects(){document.querySelector(".card-container").innerHTML=""}static mountProjectListener(){document.querySelector(".project-form").addEventListener("submit",r.addProject)}static addProject(t){t.preventDefault();const n=t.target.elements.name.value;new e(n),r.displayProjects()}}const o=n(234);o.keys().forEach(o),class{static dashboard(){r.displayProjects(),r.mountProjectListener()}}.dashboard()})()})();
//# sourceMappingURL=main.js.map