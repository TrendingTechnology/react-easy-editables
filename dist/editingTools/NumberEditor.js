"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  }
};

var NumberEditor = function (_React$Component) {
  _inherits(NumberEditor, _React$Component);

  function NumberEditor(props) {
    _classCallCheck(this, NumberEditor);

    var _this = _possibleConstructorReturn(this, (NumberEditor.__proto__ || Object.getPrototypeOf(NumberEditor)).call(this, props));

    _this.state = { content: _this.props.content };
    _this.handleEditorChange = function (event) {
      return _this._handleEditorChange(event);
    };
    return _this;
  }

  _createClass(NumberEditor, [{
    key: "_handleEditorChange",
    value: function _handleEditorChange(event) {
      var number = event.currentTarget.value;
      this.setState({ content: { number: number } });
    }
  }, {
    key: "render",
    value: function render() {
      var number = Boolean(this.state.content) ? this.state.content.number : '';

      return _react2.default.createElement("input", {
        type: "number",
        style: styles.input,
        value: number,
        onChange: this.handleEditorChange
      });
    }
  }]);

  return NumberEditor;
}(_react2.default.Component);

NumberEditor.propTypes = {};
exports.default = NumberEditor;