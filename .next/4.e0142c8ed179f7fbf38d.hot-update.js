webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withData__ = __webpack_require__("./withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__("./node_modules/next/node_modules/uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
var _jsxFileName = "/Users/dabit/appsync/appsync-next/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  query listTodos {\n    listTodos {\n      items {\n        id\n        name\n        completed\n      }\n    }\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation createTodo($id: ID!, $name: String!, $completed: Boolean!) {\n    createTodo(input: {\n      id: $id,\n      name: $name,\n      completed: $completed\n    }) {\n      id\n      name\n      completed\n    }\n  }\n"]);



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var query = __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject);
var mutation = __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(_templateObject2);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        todo: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "createTodo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var todo = {
          name: _this.state.todo,
          id: __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()(),
          completed: false
        };

        _this.props.createTodo(todo);

        _this.setState({
          todo: ''
        });
      }
    }), _temp));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('props: ', this.props);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Hello World"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.todo,
        onChange: function onChange(e) {
          return _this2.setState({
            todo: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.createTodo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), this.props.todos.map(function (todo, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, todo.name);
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var AppWithTodos = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(mutation, {
  props: function props(_props) {
    return {
      createTodo: function createTodo(todo) {
        _props.mutate({
          variables: todo
        });
      }
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(query, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: function props(_props2) {
    return {
      todos: _props2.data.listTodos ? _props2.data.listTodos.items : []
    };
  }
}))(App);

var _default = Object(__WEBPACK_IMPORTED_MODULE_3__withData__["a" /* default */])(AppWithTodos);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "/Users/dabit/appsync/appsync-next/pages/index.js");
  reactHotLoader.register(mutation, "mutation", "/Users/dabit/appsync/appsync-next/pages/index.js");
  reactHotLoader.register(App, "App", "/Users/dabit/appsync/appsync-next/pages/index.js");
  reactHotLoader.register(AppWithTodos, "AppWithTodos", "/Users/dabit/appsync/appsync-next/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/dabit/appsync/appsync-next/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e0142c8ed179f7fbf38d.hot-update.js.map