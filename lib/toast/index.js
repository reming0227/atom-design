"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ToastClass=_vue.default.extend(require("./toast.js").default);function toast(t){var e=new ToastClass({el:document.createElement("div")});e.config(t),document.body.appendChild(e.$el);var o=setTimeout(function(){e.show(),clearTimeout(o)},20),i=setTimeout(function(){e.hidden(),clearTimeout(i)},e.duration)}ToastClass.prototype.removeDom=function(){event.target.parentNode.removeChild(event.target)},ToastClass.prototype.config=function(t){null!==t&&"object"===_typeof(t)?(this.message=t.message,this.duration=t.duration||1e3,this.position=t.position||"middle"):(this.message=t,this.duration=1e3,this.position="middle")},ToastClass.prototype.show=function(){this.isActive=!0},ToastClass.prototype.hidden=function(){this.isActive=!1,this.$el.addEventListener("transitionend",this.removeDom,{capture:!1,once:!0})};var _default=toast;exports.default=_default;