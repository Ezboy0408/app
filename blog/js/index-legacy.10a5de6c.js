(window.webpackJsonp=window.webpackJsonp||[]).push([["index"],{"1be0":function(t,e,n){},"335b":function(t,e,n){"use strict";n.r(e);n("e260");var o=n("2b0e"),r=(n("a4d3"),n("e01a"),n("d28b"),n("a9e3"),n("b8bf"),n("7a82"),n("3410"),n("131a"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("ddb0"),n("4795"),n("9ab4")),a=n("60a3");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=c(this,s(e).apply(this,arguments))).wheelStatus="stop",t.wheelResult=0,t.wheelStyle={},t}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"onRouteChanged",value:function(t,e){}},{key:"spinStoped",value:function(){this.wheelStyle={transform:"rotate(".concat(72*this.wheelResult,"deg)")},this.wheel.removeEventListener("animationEnd",this.spinStoped),this.wheelStatus="stop"}},{key:"calcAngleFromMatrix",value:function(){var t=getComputedStyle(this.wheel).transform,e=Number(t.split(",")[0].replace("matrix(",""));return 180*Math.asin(e)/Math.PI}},{key:"onSpin",value:function(){var t=this;"stop"==this.wheelStatus&&(this.wheelStatus="loading",setTimeout((function(){var e=Math.floor(4*Math.random());t.wheelResult=[0,1,2,3,4][e],t.wheelStatus="loaded",t.wheelStyle={transform:"rotate(".concat(t.calcAngleFromMatrix(),"deg)")},t.wheel.addEventListener("animationend",t.spinStoped)}),2e3))}},{key:"wheel",get:function(){return this.$refs.wheel}}])&&u(n.prototype,o),r&&u(n,r),e}(a.g);Object(r.a)([Object(a.h)("$route",{immediate:!0,deep:!0})],p.prototype,"onRouteChanged",null);var f=p=Object(r.a)([a.a],p),b=(n("be94"),n("2877")),d=Object(b.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("/")])],1),n("li",[n("router-link",{attrs:{to:"/hello/you"}},[t._v("/hello/you")])],1)]),n("div",{ref:"wheel",style:t.wheelStyle,attrs:{id:"wheel",status:t.wheelStatus,result:t.wheelResult}},[n("span",[t._v("1")]),n("span",[t._v("2")]),n("span",[t._v("3")]),n("span",[t._v("4")]),n("span",[t._v("5")])]),n("button",{on:{click:t.onSpin}},[t._v("Spin")]),n("router-view")],1)}),[],!1,null,null,null).exports,v=(n("e6cf"),n("8c4f")),m=(n("b0c0"),n("2638")),y=n.n(m),h=(n("4de4"),n("4160"),n("1d1c"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("bc1b"),n("b650")),O=n("4bb5");function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}a.g.use(h.a);var E=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=P(this,k(e).apply(this,arguments))).msg=123,t.helloMsg="Hello, "+t.propMessage,t}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,t),n=e,(o=[{key:"tellSuper",value:function(t){}},{key:"updateName",value:function(t){}},{key:"login",value:function(t){}},{key:"mounted",value:function(){}},{key:"greet",value:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.tellSuper(this.helloMsg),e.next=3,regeneratorRuntime.awrap(this.login(w({},{userName:"zrnokia5231",password:"12345678"})));case 3:t=e.sent,this.updateName(t+"");case 5:case"end":return e.stop()}}),null,this)}},{key:"methodTest",value:function(){}},{key:"computedMsg",get:function(){return"computed "+this.msg}}])&&S(n.prototype,o),r&&S(n,r),e}(a.g);Object(r.a)([Object(a.e)()],E.prototype,"propMessage",void 0),Object(r.a)([Object(a.b)()],E.prototype,"tellSuper",null),Object(r.a)([Object(O.c)("name")],E.prototype,"name",void 0),Object(r.a)([Object(O.b)("updateName")],E.prototype,"updateName",null),Object(r.a)([Object(O.a)("login")],E.prototype,"login",null);var F=E=Object(r.a)([Object(a.a)({components:{}})],E),M=Object(b.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Test:start\n  "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("p",[t._v("prop: "+t._s(t.propMessage))]),n("p",[t._v("msg: "+t._s(t.msg))]),n("p",[t._v("helloMsg: "+t._s(t.helloMsg))]),n("p",[t._v("computed msg: "+t._s(t.computedMsg))]),n("p",[t._v("state: "+t._s(t.name))]),n("button",{on:{click:function(e){return t.greet(t.msg+t.computedMsg)}}},[t._v("Greet")]),n("van-button",{attrs:{type:"default"}},[t._v("默认按钮")]),n("van-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),n("van-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),n("van-button",{attrs:{type:"danger"}},[t._v("危险按钮")]),n("br"),t._v("Test:end\n")],1)}),[],!1,null,null,null).exports;function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function $(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),$(this,C(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,t),n=e,(o=[{key:"mounted",value:function(){this.methodTest()}},{key:"methodTest",value:function(){}}])&&R(n.prototype,o),r&&R(n,r),e}(Object(a.d)(M));Object(r.a)([Object(a.e)()],D.prototype,"propMsg",void 0),Object(r.a)([Object(a.c)()],D.prototype,"provideFoo",void 0),Object(r.a)([Object(a.c)({default:{name:"zr",age:22}})],D.prototype,"provideObj",void 0);var z=D=Object(r.a)([a.a],D),A=(n("cb30"),Object(b.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  HelloWorld:start\n  "),e("br"),this._v("\n    provideFoo="+this._s(this.provideFoo)+"\n    provideObj="+this._s(this.provideObj)+"\n  "),e("br"),this._v("\n   HelloWorld:end\n")])}),[],!1,null,"e6c24dc2",null).exports);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function J(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=J(this,L(e).apply(this,arguments))).dataObj={name:"xxx",age:12,obj:{a:"a",b:"b"}},t.dataFoo="foo",t.msg={value:"lllll"},t.provideFoo=t.dataFoo,t.provideObj=t.dataObj,t}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,t),n=e,(o=[{key:"formChild",value:function(t){}},{key:"createDom",value:function(){var t=this,e=this.$createElement;return e("div",{class:"home"},["响应式测试：dataFoo",e("input",y()([{on:{input:function(e){e.target.composing||(t.dataFoo=e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataFoo}},{directives:[{name:"model",value:t.dataFoo,modifiers:{}}]}])),"响应式测试：dataObj.name",e("input",y()([{on:{input:function(e){e.target.composing||t.$set(t.dataObj,"name",e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataObj.name}},{directives:[{name:"model",value:t.dataObj.name,modifiers:{}}]}])),"响应式测试：dataObj.obj.a",e("input",y()([{on:{input:function(e){e.target.composing||t.$set(t.dataObj.obj,"a",e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataObj.obj.a}},{directives:[{name:"model",value:t.dataObj.obj.a,modifiers:{}}]}]))])}},{key:"createDom2",value:function(){var t=this,e=this.$createElement;return e("div",{class:"home"},["响应式测试：dataFoo",e("input",y()([{on:{input:function(e){e.target.composing||(t.dataFoo=e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataFoo}},{directives:[{name:"model",value:t.dataFoo,modifiers:{}}]}])),"响应式测试：dataObj.name",e("input",y()([{on:{input:function(e){e.target.composing||t.$set(t.dataObj,"name",e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataObj.name}},{directives:[{name:"model",value:t.dataObj.name,modifiers:{}}]}])),"响应式测试：dataObj.obj.a",e("input",y()([{on:{input:function(e){e.target.composing||t.$set(t.dataObj.obj,"a",e.target.value)}},attrs:{type:"text"},domProps:{value:t.dataObj.obj.a}},{directives:[{name:"model",value:t.dataObj.obj.a,modifiers:{}}]}]))])}},{key:"render",value:function(){var t=this,e=arguments[0];return e("div",{class:"ddddddddddddddd"},[this.createDom(),this.createDom2(),e("input",{ref:"input",attrs:{type:"text"},directives:[{name:"mymodel",value:this.msg}]}),e("p",{on:{click:function(){t.msg.value="ABC"}}},[this.msg.value])])}}])&&W(n.prototype,o),r&&W(n,r),e}(a.g);Object(r.a)([Object(a.f)()],G.prototype,"provideFoo",void 0),Object(r.a)([Object(a.f)()],G.prototype,"provideObj",void 0);var I=G=Object(r.a)([Object(a.a)({components:{HelloWorld:A,Test:A},directives:{mymodel:{bind:function(t,e){var n=e.value.value;t.value=n,t.oninput=function(t){e.value.value=t.target.value}}}},watch:{msg:{deep:!0,handler:function(t){this.$refs.input.value=t.value}}}})],G);o.a.use(v.a);var q=new v.a({mode:"hash",routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"c02e"))}},{path:"/hello/:propName",component:M}]}),K=n("2f62"),Q={name:"zrzrzr"},U={login:function(t,e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}))}};o.a.use(K.a);var V=new K.a.Store({state:Q,getters:{},actions:U,mutations:{updateName:function(t,e){t.name=e}}});o.a.config.productionTip=!1,new o.a({router:q,store:V,render:function(t){return t(d)}}).$mount("#app")},6169:function(t,e,n){},"757b":function(t,e,n){},be94:function(t,e,n){"use strict";var o=n("757b");n.n(o).a},cb30:function(t,e,n){"use strict";var o=n("6169");n.n(o).a},ffb4:function(t,e,n){"use strict";n.r(e);n("e260"),n("b429"),n("f5df1"),n("1be0");n("335b")}},[["ffb4","runtime","vueAll","vendors"]]]);