"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: ", ";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tpadding: 0 !important;\n"])), function (props) {
  return props.displayIt === true ? "block" : "none";
});
var Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 8px;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tmargin-top: 1rem;\n\tborder-color: ", ";\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tcursor: pointer;\n"])), function (props) {
  return props.bgColour;
}, function (props) {
  return props.bgColour;
}, function (props) {
  return props.Colour;
});
var Overlay = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #333333d3;\n"])));
var ModalInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n\tdisplay: block;\n\twidth: 95%;\n\theight: auto;\n\tmax-width: 500px;\n\tmin-width: 300px;\n\tpadding: 30px;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tposition: absolute;\n\ttop: 40%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n"])));
var Message = _styledComponents.default.p(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n\tmargin-bottom: 10px;\n\tfont-family: Montserrat, sans-serif;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\ttext-align: center;\n\tbackground-color: #fbfbfb;\n\ttext-align: center;\n"])));

/**
 * Modal is a React Component that takes in four props, and returns a div popping up on the screen with a message,
 * and a button to close the popup and revert to a given link if any.
 *
 * @prop {Boolean} display to display or not the popup
 * @prop {function} setDisplay to toggle the display
 * @prop {String} message message to display
 * @prop {Object} params { bgColor, Color, link }
 *
 * @returns A React component.
 */
function Modal(_ref) {
  var display = _ref.display,
    setDisplay = _ref.setDisplay,
    message = _ref.message,
    params = _ref.params;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var toggleModal = function toggleModal() {
    setDisplay(!display);
    if (params.link) navigate(params.link);
  };
  return /*#__PURE__*/_react.default.createElement(ModalContainer, {
    displayIt: display
  }, /*#__PURE__*/_react.default.createElement(Overlay, null), /*#__PURE__*/_react.default.createElement(ModalInfo, null, /*#__PURE__*/_react.default.createElement(Message, null, message), /*#__PURE__*/_react.default.createElement(Button, {
    bgColour: params.bgColor,
    Colour: params.Color,
    onClick: toggleModal
  }, "OK")));
}
var _default = Modal;
exports.default = _default;