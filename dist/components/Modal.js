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
require("./Modal.css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
//border-color: rgb(147, 173, 24, 0.8);
//background-color: rgb(147, 173, 24, 0.8);

var Button = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\ndisplay: block;\nwidth: 100%;\npadding: 8px;\nfont-size: 1rem;\nfont-weight: bold;\nmargin-top: 1rem;\nborder-color: ", ";\nbackground-color: ", ";\ncolor: ", ";\ncursor: pointer;\n"])), function (props) {
  return props.bgColour;
}, function (props) {
  return props.bgColour;
}, function (props) {
  return props.Colour;
});
var Overlay = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\nposition: absolute;\nwidth: 100%;\nheight: 100%;\nbackground: #333333d3;\n"])));
var ModalInfo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\ndisplay: block;\nwidth: 95%;\nheight: auto;\nmax-width: 500px;\nmin-width: 300px;\npadding: 30px;\nbackground: #fff;\nborder-radius: 5px;\nposition: absolute;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n"])));
var Message = _styledComponents.default.p(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\nmargin-bottom: 10px;\nfont-family: Montserrat, sans-serif;\nfont-size: 1.5rem;\nfont-weight: 500;\ntext-align: center;\nbackground-color: #fbfbfb;\ntext-align: center;\n"])));

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
  console.log("Modal: ", display, message, params);
  var navigate = (0, _reactRouterDom.useNavigate)();
  var toggleModal = function toggleModal() {
    console.log("toggleModal: ", display);
    setDisplay(!display);
    console.log("toggleModal: ", display);
    if (params.link) navigate(params.link);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: display ? "modalContainer active" : "modalContainer"
  }, /*#__PURE__*/_react.default.createElement(Overlay, null), /*#__PURE__*/_react.default.createElement(ModalInfo, null, /*#__PURE__*/_react.default.createElement(Message, null, message), /*#__PURE__*/_react.default.createElement(Button, {
    bgColour: params.bgColor,
    Colour: params.Color,
    onClick: toggleModal
  }, "OK")));
}
var _default = Modal;
exports.default = _default;