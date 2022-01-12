"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./router/index.js"));

var _index2 = _interopRequireDefault(require("./store/index.js"));

require("amfe-flexible");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _vue["default"]({
  router: _index["default"],
  store: _index2["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");