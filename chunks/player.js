var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["player"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/player.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3sowo {\n    background-color: hsla(0, 100%, 100%, 1);\n    width: calc(480px + 1rem);\n}\n\n.player_stage-header_122HM {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    margin: auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-justify-content: space-between;\n}\n\nbody{\n    margin-top: 0px !important;\n    background-color: white;\n}\n\ncanvas {\n    width: 461px !important;\n    height: 346px !important;\n}\n\n.player_stage-wrapper_3S-WN {\n    position: fixed;\n    top: 2.75rem;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5000;\n    background-color: hsla(0, 100%, 100%, 1);\n    padding: 0.1875rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.player_stage-only_3sowo button{\n    display: none;\n}\n\n.player_stage_3xRzh {\n    border: 0.1875rem solid rgb(126, 133, 151);\n    border-radius: 0.5rem;\n}\n\n.player_editor_pHkoy {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3sowo * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3sowo",
	"stageOnly": "player_stage-only_3sowo",
	"stage-header": "player_stage-header_122HM",
	"stageHeader": "player_stage-header_122HM",
	"stage-wrapper": "player_stage-wrapper_3S-WN",
	"stageWrapper": "player_stage-wrapper_3S-WN",
	"stage": "player_stage_3xRzh",
	"editor": "player_editor_pHkoy"
};

/***/ }),

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./player.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/mode */ "./src/reducers/mode.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













if (false) {}



var Player = function Player(_ref) {
  var isPlayerOnly = _ref.isPlayerOnly,
      onSeeInside = _ref.onSeeInside,
      projectId = _ref.projectId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isPlayerOnly ? _player_css__WEBPACK_IMPORTED_MODULE_11___default.a.stageOnly : _player_css__WEBPACK_IMPORTED_MODULE_11___default.a.editor)
  }, isPlayerOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    canEditTitle: true,
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};

Player.propTypes = {
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSeeInside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSeeInside: function onSeeInside() {
      return dispatch(Object(_reducers_mode__WEBPACK_IMPORTED_MODULE_10__["setPlayer"])(false));
    }
  };
};

var ConnectedPlayer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Player); // note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.

var WrappedPlayer = Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(ConnectedPlayer);
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget); //Customizer

function isValidColor(str) {
  return str.match(/[a-f0-9]{6}$/i) !== null;
}

function trueFalse(str) {
  if (str === "True") {
    return true;
  }

  return false;
}

var params = new URLSearchParams(window.location.search);
var pid = window.location.hash.substring(1); //Get DOM elements

var playerDiv = document.querySelectorAll("[class^=player]");
var headerDiv = document.querySelectorAll("[class^=stage-header]");
var menuDiv = document.querySelectorAll("[class*=stage-menu-wrapper]");
var sizeDiv = document.querySelectorAll("[class*=stage-size]");
var borderDiv = document.querySelectorAll("[class*=stage_stage_]");
var greenflagDiv = document.querySelectorAll("[class*=green-flag-overlay]");
document.body.style.marginLeft = "6px";
sizeDiv[0].style.display = "none";
headerDiv[0].style.width = "461px";
borderDiv[0].style.width = "461px";
borderDiv[0].style.height = "346px";
borderDiv[0].style.border = "0.1875rem solid rgb(126, 133, 151)";
greenflagDiv[0].style.width = "463px";
greenflagDiv[0].style.height = "348px"; //Logo

if (trueFalse(params.get('logo'))) {
  var myDiv = document.createElement("div");
  var myLink = document.createElement("a");
  var myLogo = document.createElement("img");
  myLink.setAttribute("href", "https://scratch.mit.edu/projects/" + pid + "/");
  myLink.setAttribute("target", "_blank");
  myLogo.src = "https://raw.githubusercontent.com/downthecrop/scratch-gui/develop/src/components/menu-bar/scratch-logo.svg";
  myLogo.style.height = "1.6rem";
  myLogo.style.opacity = "0.7";
  myLink.appendChild(myLogo);
  myDiv.appendChild(myLink);
  menuDiv[0].appendChild(myDiv);
} //Background color


var bg = params.get('bg');

if (bg && isValidColor(bg)) {
  playerDiv[0].style.backgroundColor = "#" + bg;
  document.body.style.backgroundColor = "#" + bg;
} else if (bg) {
  playerDiv[0].style.backgroundColor = bg;
  document.body.style.backgroundColor = bg;
} //Paddings


var padding = params.get('padding');

if (padding) {
  playerDiv[0].style.padding = padding;
} else {
  playerDiv[0].style.padding = "0.1875rem";
} //Header display


if (!trueFalse(params.get('header'))) {
  headerDiv[0].style.display = "none";
}

/***/ })

},[["./src/playground/player.jsx","lib.min"]]]);
//# sourceMappingURL=player.js.map