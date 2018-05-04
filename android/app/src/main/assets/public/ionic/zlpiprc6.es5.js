/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Ionic.loadBundle("zlpiprc6",["exports"],function(t){window.Ionic.h;var e=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0;o<n.length;o++){var i=n[o];if(t[i]!==e[i])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),n=function(){function t(){this.from=""}return t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUpdate=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from"},to:{type:String,attr:"to"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),r=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function o(t){if(t)return t.matches(r)?t:t.querySelector(r)||void 0}function i(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}function a(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function u(t,e){for(var n=new c(t),r=!1,o=void 0,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])r=!0;else{for(var u=0,h=a;u<h.length;u++){var l=h[u],f=n.next();if(":"===l[0]){if(""===f)return null;((o=o||[])[i]||(o[i]={}))[l.slice(1)]=f}else if(f!==l)return null}r=!1}}return r&&r!==(""===n.next())?null:o?e.map(function(t,e){return{id:t.id,path:t.path,params:s(t.params,o[e])}}):e}function s(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function h(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}var c=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function l(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function f(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}function p(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=m(t,"to");return{from:f(m(t,"from")),to:null==e?void 0:f(e)}})}function d(t,e){return void 0===e&&(e=t),Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var n=m(e,"component");if(!n)throw new Error("component missing in ion-route");return{path:f(m(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:d(t,e)}})}function m(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function g(t){for(var e=[],n=0,r=t;n<r.length;n++)v([],e,r[n]);return e}function v(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)v(r,e,i[o]);else e.push(r)}var b=function(){function t(){this.routes=[],this.previousPath=null,this.redirects=[],this.busy=!1,this.init=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,(n=this.win,o(n.document.body)?Promise.resolve():new Promise(function(t){n.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return e.sent(),t=d(this.el),this.routes=g(t),this.redirects=p(this.el),[4,this.writeNavStateRoot(this.getPath(),0)];case 2:return e.sent()||console.error("[ion-router] did not change on will load"),[2]}var n})})},t.prototype.componentDidLoad=function(){this.init=!0},t.prototype.onRedirectChanged=function(t){this.init&&(t.target,this.redirects=p(this.el))},t.prototype.onRoutesChanged=function(t){var e=this;this.init&&(t.target,t.detail,this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.timer=setTimeout(function(){var t=d(e.el);e.routes=g(t),e.writeNavStateRoot(e.getPath(),0),e.timer=void 0},100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.historyDirection=function(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));var t=this.win.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0},t.prototype.navChanged=function(t){return __awaiter(this,void 0,void 0,function(){var e,n,r,i,u;return __generator(this,function(h){switch(h.label){case 0:return this.busy?[2,!1]:(e=function(t){for(var e,n=[],r=t;e=o(r);){var i=e.getRouteId();if(!i)break;r=i.element,i.element=void 0,n.push(i)}return{ids:n,outlet:e}}(this.win.document.body),n=e.ids,r=e.outlet,(i=function(t,e){for(var n=null,r=0,o=t.map(function(t){return t.id}),i=0,u=e;i<u.length;i++){var h=u[i],c=a(o,h);c>r&&(n=h,r=c)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:s(e.params,t[n]&&t[n].params)}}):null}(n,this.routes))?(u=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=o.params&&o.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(i))?(this.setPath(u,t),[4,this.writeNavState(r,i,0,u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]));case 1:return h.sent(),[2,!0]}})})},t.prototype.push=function(t,e){void 0===e&&(e=1);var n=f(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.writeNavStateRoot=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,r,o;return __generator(this,function(a){return this.busy?[2,!1]:t?(n=function(t,e){for(var n=0,r=e;n<r.length;n++){var o=r[n];if(i(t,o))return o}return null}(t,this.redirects),r=null,n&&(this.setPath(n.to,e),r=n.from,t=n.to),(o=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=u(t,i[o]);if(null!==a){var s=h(a);s>r&&(r=s,n=a)}}return n}(t,this.routes))?[2,this.writeNavState(this.win.document.body,o,e,t,r)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.writeNavState=function(t,e,n,r,i,a){return void 0===a&&(a=0),__awaiter(this,void 0,void 0,function(){var u,s;return __generator(this,function(h){switch(h.label){case 0:return this.busy?[2,!1]:(this.busy=!0,u=this.routeChangeEvent(r,i),this.ionRouteWillChange.emit(u),[4,function t(e,n,r,i,a){return void 0===a&&(a=!1),__awaiter(this,void 0,void 0,function(){var u,s,h,c;return __generator(this,function(l){switch(l.label){case 0:return l.trys.push([0,6,,7]),u=o(e),i>=n.length||!u?[2,a]:[4,u.componentOnReady()];case 1:return l.sent(),s=n[i],[4,u.setRouteId(s.id,s.params,r)];case 2:return(h=l.sent()).changed&&(r=0,a=!0),[4,t(h.element,n,r,i+1,a)];case 3:return a=l.sent(),h.markVisible?[4,h.markVisible()]:[3,5];case 4:l.sent(),l.label=5;case 5:return[2,a];case 6:return c=l.sent(),console.error(c),[2,!1];case 7:return[2]}})})}(t,e,n,a)]);case 1:return s=h.sent(),this.busy=!1,this.emitRouteDidChange(u,s),[2,s]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,r,o,i){var a=l(f(e).concat(r));n&&(a="#"+a),1===o?t.pushState(i,"",a):t.replaceState(i,"",a)}(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(f(e),f(r))}(this.win.location,this.root,this.useHash)},t.prototype.emitRouteDidChange=function(t,e){t.to,this.previousPath=t.to,this.ionRouteDidChange.emit(Object.assign({},t,{changed:e}))},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=l(t);return{from:n,redirectedFrom:e?l(e):null,to:r}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionRouteRedirectChanged",method:"onRedirectChanged"},{name:"ionRouteDataChanged",method:"onRoutesChanged"},{name:"window:popstate",method:"onPopState"}]},enumerable:!0,configurable:!0}),t}();t.IonRoute=e,t.IonRouteRedirect=n,t.IonRouter=b,Object.defineProperty(t,"__esModule",{value:!0})});