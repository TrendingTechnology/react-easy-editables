"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _PlainTextEditor = _interopRequireDefault(require("../editingTools/PlainTextEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableText = function EditableText(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["classes"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var text = props.content.text;
  var Component = props.component;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _PlainTextEditor["default"],
    handleSave: handleSave,
    content: {
      text: text
    }
  }, props), Component ? /*#__PURE__*/_react["default"].createElement(Component, null, text) : text);
};

EditableText.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object,
  placeholder: _propTypes["default"].string
};
EditableText.defaultProps = {
  content: {
    text: ''
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EditableText;
exports["default"] = _default;