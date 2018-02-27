var AM=function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};var r,n,o,i,s,a=(r={},n=void 0===n?window:n,o=r&&r.Promise||n.Promise,i=r&&r.XMLHttpRequest||n.XMLHttpRequest,s=n,function(){var t=Object.create(s,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},s=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};d.prototype.append=function(t,e){t=h(t),e=c(e);var r=this.map[t];this.map[t]=r?r+","+e:e},d.prototype.delete=function(t){delete this.map[h(t)]},d.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},d.prototype.set=function(t,e){this.map[h(t)]=c(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),l(t)},d.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),l(t)},d.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),l(t)},e.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype);var u=function(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)};v.call(u.prototype),u.prototype.clone=function(){return new u(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},u.error=function(){var t=new u(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];u.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new u(null,{status:e,headers:{location:t}})},t.Headers=d,t.Request=w,t.Response=u,t.fetch=function(t,r){return new o(function(n,o){var s=new w(t,r),a=new i;a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d({}),t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new u(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(s.method,s.url,!0),"include"===s.credentials&&(a.withCredentials=!0),"responseType"in a&&e.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===s._bodyInit?null:s._bodyInit)})},t.fetch.polyfill=!0}function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function d(t){this.map={},t instanceof d?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function p(t){if(t.bodyUsed)return o.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new o(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!s(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=m(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return o.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return o.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return o.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||o.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=p(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return o.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return o.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),a.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function A(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}}(void 0!==t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()).fetch,u=function t(r){var n=this,o=r.endpoint,i=r.options,s=r.body;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.prepareFetchOptions=function(){return n.body||"POST"!==n.options.method||(n.body=new FormData),n.body},this.send=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{async:!1}).async,r=e({},n.prepareFetchOptions(),n.options),o=a(n.endpoint,r);return t?o.then(function(t){return t.json()}):o},this.endpoint=o,this.options=i||t.defaultOptions,this.body=s};u.defaultOptions={method:"GET",headers:{Accept:"application/json"}};var f=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};var c=function(t){var e,r=(e=t,Array.isArray(e)?e:Array.from(e)),n=r[0],o=r.slice(1);return""+n.toUpperCase()+o.join("")};return t.Request=u,t.capitalize=function(t){return t.split(" ").map(function(t){return c(t)}).join(" ")},t.isElementInViewport=function(t){var e=t.element,r=t.elementDivisorSize,n=t.useBottomOffset,o={elementDivisorSize:1,useBottomOffset:!1},i=h({},o,{elementDivisorSize:Math.ceil(Math.abs(r||o.elementDivisorSize)),useBottomOffset:n||o.useBottomOffset}),s=i.elementDivisorSize,a=i.useBottomOffset,u=e.getBoundingClientRect(),f=u.top,c=u.bottom,l=u.height,d=(window.innerHeight||document.documentElement.clientHeight)-l/s;return c>=(a?l/s:0)&&f<=d},t.parseExternalMarkdownLinks=function(t){var e=/\[([^\]]+)\]\(([^)]+)\)/g;return t.search(e)>-1?t.replace(e,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'):t},t.parseURLParams=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search).split("?")[1].split("&").map(function(t){return t.split("=")}).reduce(function(t,e,r,n){var o=f(e,2),i=o[0],s=o[1];return t[i]=decodeURIComponent(s).replace(/\+/g," "),t},{})},t.scrollTo=function t(e,r,n){if(!(n<=0)){var o=(r-e.scrollTop)/n*10;setTimeout(function(){e.scrollTop=e.scrollTop+o,e.scrollTop!==r&&t(e,r,n-10)},10)}},t.select=function(t){return document.querySelector(t)},t.selectAll=function(t){return[].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(document.querySelectorAll(t)))},t.selectById=function(t){return document.getElementById(t)},t.slugify=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return t.replace(/(\!|#|\$|%|\*|\.|\/|\\|\(|\)|\+|\||\,|\:|\'|\")/g,"").replace(/(.)(\s|\_|\-)+(.)/g,"$1"+e+"$3").toLowerCase()},t.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},t.ucFirst=c,t}({});
