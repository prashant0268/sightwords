webpackJsonp([0],{

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/Home/components/sightWordsList.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".flex-h,.flex-v{display:-ms-flexbox;display:flex}.flex-v{-ms-flex-direction:column;flex-direction:column}.flex-1{-ms-flex:1;flex:1}.word-lists{border-top:1px solid #d3d3d3}.word-lists .word-list{border-bottom:1px solid #d3d3d3;padding:10px;font-size:25px;color:#999}.word-container{position:relative}.word-container .blackboard{border:20px solid #856404;background:url(https://asdb.az.gov/wp-content/uploads/sites/5/2016/05/Green-Chalkboard-Texture.jpg);color:#fff;margin:0!important;background-repeat:no-repeat;position:relative;background-size:cover}.word-container .blackboard .header{position:absolute;top:10px;left:10px}.word-container .blackboard .teacher-img{position:absolute;bottom:0;left:0}.word-container .blackboard .sound-image-container{padding-left:150px}.word-container .blackboard .footer{display:-ms-flexbox;display:flex;font-size:20px;color:brown;border-top:1px solid #d3d3d3;padding-right:10px;margin-bottom:60px;padding-top:10px}.word-container .blackboard .footer .myButton{margin-left:30px}.myButton{box-shadow:inset 0 1px 0 0 #fff6af;background:linear-gradient(180deg,#ffec64 5%,#ffab23);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffec64\",endColorstr=\"#ffab23\",GradientType=0);background-color:#ffec64;border-radius:6px;border:1px solid #fa2;display:inline-block;cursor:pointer;color:#333;font-family:Arial;font-size:20px;font-weight:700;padding:2px 15px;text-decoration:none;text-shadow:0 1px 0 #fe6}.myButton:hover{background:linear-gradient(180deg,#ffab23 5%,#ffec64);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffab23\",endColorstr=\"#ffec64\",GradientType=0);background-color:#ffab23}.myButton:active{position:relative;top:1px}", "", {"version":3,"sources":["/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/routes/Home/components/src/routes/Home/components/sightWordsList.scss"],"names":[],"mappings":"AAGA,gBAFE,oBAAY,AAAZ,YAAY,CAKb,AAHD,QAEE,0BAAsB,AAAtB,qBAAsB,CACvB,AACD,QACE,WAAO,AAAP,MAAO,CACR,AACD,YACE,4BAA+B,CAOhC,AARD,uBAGI,gCAAkC,AAClC,aAAa,AACb,eAAe,AACf,UAAW,CACZ,AAEH,gBACE,iBAAkB,CAmCnB,AApCD,4BAGI,0BAA0B,AAC1B,oGAAoG,AACpG,WAAY,AACZ,mBAAsB,AACtB,4BAA4B,AAC5B,kBAAkB,AAClB,qBAAsB,CA0BzB,AAnCD,oCAWM,kBAAkB,AAClB,SAAS,AACT,SAAU,CACX,AAdL,yCAgBM,kBAAkB,AAClB,SAAW,AACX,MAAS,CACV,AAnBL,mDAqBM,kBAAmB,CACpB,AAtBL,oCAwBM,oBAAa,AAAb,aAAa,AACb,eAAe,AACf,YAAY,AACZ,6BAA+B,AAC/B,mBAAmB,AACnB,mBAAmB,AACnB,gBAAiB,CAIlB,AAlCL,8CAgCQ,gBAAiB,CAClB,AAIP,UAGC,mCAAwC,AAMxC,sDAA+D,AAC/D,gHAAgH,AAChH,yBAAwB,AAGxB,kBAAiB,AACjB,sBAAwB,AACxB,qBAAoB,AACpB,eAAc,AACd,WAAa,AACb,kBAAiB,AACjB,eAAc,AACd,gBAAgB,AAChB,iBAAgB,AAChB,qBAAoB,AACpB,wBAA+B,CAC/B,AACD,gBAMC,sDAA+D,AAC/D,gHAAgH,AAChH,wBAAwB,CACxB,AACD,iBACC,kBAAiB,AACjB,OAAO,CACP","file":"sightWordsList.scss","sourcesContent":[".flex-h{\n  display:flex;\n}\n.flex-v{\n  display:flex;\n  flex-direction: column;\n}\n.flex-1{\n  flex: 1;\n}\n.word-lists{\n  border-top: 1px solid lightgray;\n  .word-list{\n    border-bottom: 1px solid lightgray;\n    padding: 10px;\n    font-size: 25px;\n    color: #999;\n  }\n}\n.word-container{\n  position: relative;\n  .blackboard{\n    border: 20px solid #856404;\n    background: url(https://asdb.az.gov/wp-content/uploads/sites/5/2016/05/Green-Chalkboard-Texture.jpg);\n    color: white;\n    margin: 0px !important;\n    background-repeat: no-repeat;\n    position: relative;\n    background-size: cover;\n    .header{\n      position: absolute;\n      top: 10px;\n      left: 10px;\n    }\n    .teacher-img{\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n    }\n    .sound-image-container{\n      padding-left: 150px;\n    }\n    .footer{\n      display: flex;\n      font-size: 20px;\n      color: brown;\n      border-top: 1px solid lightgray;\n      padding-right: 10px;\n      margin-bottom: 60px;\n      padding-top: 10px;\n      .myButton{\n        margin-left: 30px;\n      }\n    }\n}\n}\n.myButton {\n\t-moz-box-shadow:inset 0px 1px 0px 0px #fff6af;\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #fff6af;\n\tbox-shadow:inset 0px 1px 0px 0px #fff6af;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffec64), color-stop(1, #ffab23));\n\tbackground:-moz-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-webkit-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-o-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-ms-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\n\tbackground-color:#ffec64;\n\t-moz-border-radius:6px;\n\t-webkit-border-radius:6px;\n\tborder-radius:6px;\n\tborder:1px solid #ffaa22;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#333333;\n\tfont-family:Arial;\n\tfont-size:20px;\n\tfont-weight:bold;\n\tpadding:2px 15px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffee66;\n}\n.myButton:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffab23), color-stop(1, #ffec64));\n\tbackground:-moz-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-webkit-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-o-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-ms-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\n\tbackground-color:#ffab23;\n}\n.myButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/SightWordslist/components/sightWordsList.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".flex-h,.flex-v{display:-ms-flexbox;display:flex}.flex-v{-ms-flex-direction:column;flex-direction:column}.flex-1{-ms-flex:1;flex:1}.word-lists{border-top:1px solid #d3d3d3}.word-lists .word-list{border-bottom:1px solid #d3d3d3;padding:10px;font-size:25px;color:#999}.word-container{position:relative}.word-container .blackboard{border:20px solid #856404;background:url(https://asdb.az.gov/wp-content/uploads/sites/5/2016/05/Green-Chalkboard-Texture.jpg);color:#fff;margin:0!important;background-repeat:no-repeat;position:relative;background-size:cover}.word-container .blackboard .header{position:absolute;top:10px;left:10px}.word-container .blackboard .teacher-img{position:absolute;bottom:0;left:0}.word-container .blackboard .sound-image-container{padding-left:150px}.word-container .blackboard .footer{display:-ms-flexbox;display:flex;font-size:20px;color:brown;border-top:1px solid #d3d3d3;padding-right:10px;margin-bottom:60px;padding-top:10px}.word-container .blackboard .footer .myButton{margin-left:30px}.myButton{box-shadow:inset 0 1px 0 0 #fff6af;background:linear-gradient(180deg,#ffec64 5%,#ffab23);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffec64\",endColorstr=\"#ffab23\",GradientType=0);background-color:#ffec64;border-radius:6px;border:1px solid #fa2;display:inline-block;cursor:pointer;color:#333;font-family:Arial;font-size:20px;font-weight:700;padding:2px 15px;text-decoration:none;text-shadow:0 1px 0 #fe6}.myButton:hover{background:linear-gradient(180deg,#ffab23 5%,#ffec64);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffab23\",endColorstr=\"#ffec64\",GradientType=0);background-color:#ffab23}.myButton:active{position:relative;top:1px}", "", {"version":3,"sources":["/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/routes/SightWordslist/components/src/routes/SightWordslist/components/sightWordsList.scss"],"names":[],"mappings":"AAGA,gBAFE,oBAAY,AAAZ,YAAY,CAKb,AAHD,QAEE,0BAAsB,AAAtB,qBAAsB,CACvB,AACD,QACE,WAAO,AAAP,MAAO,CACR,AACD,YACE,4BAA+B,CAOhC,AARD,uBAGI,gCAAkC,AAClC,aAAa,AACb,eAAe,AACf,UAAW,CACZ,AAEH,gBACE,iBAAkB,CAmCnB,AApCD,4BAGI,0BAA0B,AAC1B,oGAAoG,AACpG,WAAY,AACZ,mBAAsB,AACtB,4BAA4B,AAC5B,kBAAkB,AAClB,qBAAsB,CA0BzB,AAnCD,oCAWM,kBAAkB,AAClB,SAAS,AACT,SAAU,CACX,AAdL,yCAgBM,kBAAkB,AAClB,SAAW,AACX,MAAS,CACV,AAnBL,mDAqBM,kBAAmB,CACpB,AAtBL,oCAwBM,oBAAa,AAAb,aAAa,AACb,eAAe,AACf,YAAY,AACZ,6BAA+B,AAC/B,mBAAmB,AACnB,mBAAmB,AACnB,gBAAiB,CAIlB,AAlCL,8CAgCQ,gBAAiB,CAClB,AAIP,UAGC,mCAAwC,AAMxC,sDAA+D,AAC/D,gHAAgH,AAChH,yBAAwB,AAGxB,kBAAiB,AACjB,sBAAwB,AACxB,qBAAoB,AACpB,eAAc,AACd,WAAa,AACb,kBAAiB,AACjB,eAAc,AACd,gBAAgB,AAChB,iBAAgB,AAChB,qBAAoB,AACpB,wBAA+B,CAC/B,AACD,gBAMC,sDAA+D,AAC/D,gHAAgH,AAChH,wBAAwB,CACxB,AACD,iBACC,kBAAiB,AACjB,OAAO,CACP","file":"sightWordsList.scss","sourcesContent":[".flex-h{\n  display:flex;\n}\n.flex-v{\n  display:flex;\n  flex-direction: column;\n}\n.flex-1{\n  flex: 1;\n}\n.word-lists{\n  border-top: 1px solid lightgray;\n  .word-list{\n    border-bottom: 1px solid lightgray;\n    padding: 10px;\n    font-size: 25px;\n    color: #999;\n  }\n}\n.word-container{\n  position: relative;\n  .blackboard{\n    border: 20px solid #856404;\n    background: url(https://asdb.az.gov/wp-content/uploads/sites/5/2016/05/Green-Chalkboard-Texture.jpg);\n    color: white;\n    margin: 0px !important;\n    background-repeat: no-repeat;\n    position: relative;\n    background-size: cover;\n    .header{\n      position: absolute;\n      top: 10px;\n      left: 10px;\n    }\n    .teacher-img{\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n    }\n    .sound-image-container{\n      padding-left: 150px;\n    }\n    .footer{\n      display: flex;\n      font-size: 20px;\n      color: brown;\n      border-top: 1px solid lightgray;\n      padding-right: 10px;\n      margin-bottom: 60px;\n      padding-top: 10px;\n      .myButton{\n        margin-left: 30px;\n      }\n    }\n}\n}\n.myButton {\n\t-moz-box-shadow:inset 0px 1px 0px 0px #fff6af;\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #fff6af;\n\tbox-shadow:inset 0px 1px 0px 0px #fff6af;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffec64), color-stop(1, #ffab23));\n\tbackground:-moz-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-webkit-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-o-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:-ms-linear-gradient(top, #ffec64 5%, #ffab23 100%);\n\tbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffec64', endColorstr='#ffab23',GradientType=0);\n\tbackground-color:#ffec64;\n\t-moz-border-radius:6px;\n\t-webkit-border-radius:6px;\n\tborder-radius:6px;\n\tborder:1px solid #ffaa22;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#333333;\n\tfont-family:Arial;\n\tfont-size:20px;\n\tfont-weight:bold;\n\tpadding:2px 15px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffee66;\n}\n.myButton:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffab23), color-stop(1, #ffec64));\n\tbackground:-moz-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-webkit-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-o-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:-ms-linear-gradient(top, #ffab23 5%, #ffec64 100%);\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\n\tbackground-color:#ffab23;\n}\n.myButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./src/routes/Home/components/sightWordsList.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/Home/components/sightWordsList.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/Home/components/sightWordsList.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/Home/components/sightWordsList.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/Home/components/sightWordsListComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss__ = __webpack_require__("./src/routes/Home/components/sightWordsList.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss__);







var sightWordsListComponent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(sightWordsListComponent, _React$Component);

  function sightWordsListComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, sightWordsListComponent);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (sightWordsListComponent.__proto__ || Object.getPrototypeOf(sightWordsListComponent)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(sightWordsListComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { style: { "width": "100%", "height": "100%" } },
        this.props.sightwordslist.selectedSightWordList === undefined && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'word-lists' },
          this.props.sightwordslist.sightWordLists.map(function (swl, key) {
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: 'word-list', key: key, onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": swl });
                } },
              swl.name,
              ' - ',
              swl.words.length
            );
          })
        ),
        this.props.sightwordslist.selectedSightWordList !== undefined && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'word-container', style: { "width": "100%", "height": "100%" } },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'blackboard', style: { "width": "100%", "height": "100%" } },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: 'header myButton',
                onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": undefined });
                } },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-times', onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": undefined });
                } })
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { src: 'http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i23/ppg_mskeane_174x252.png', className: 'teacher-img' }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'h4',
              { style: { "position": "relative", "margin": "10px" } },
              this.props.sightwordslist.selectedSightWordList.name,
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { style: { "position": "absolute", "right": "0px", "fontSize": "20px" } },
                this.props.sightwordslist.currentWordIndex + 1,
                '\xA0\xA0of\xA0\xA0',
                this.props.sightwordslist.selectedSightWordList.words.length
              )
            ),
            this.props.sightwordslist.selectedSightWordList.words.map(function (sw, key) {
              if (key === _this2.props.sightwordslist.currentWordIndex) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'div',
                  { key: key, className: 'flex-v', style: { "height": "100%" } },
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    { style: { "fontSize": "100px", "fontFamily": 'Handlee' }, className: 'flex-1' },
                    sw.text
                  ),
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    { className: 'footer' },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'sound-image-container' },
                      sw.soundFile !== "" && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        'div',
                        { className: 'myButton', onClick: function onClick() {
                            return _this2.props.playSound(sw.soundFile);
                          } },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-volume-up' })
                      ),
                      sw.imagePath !== "" && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        'div',
                        { className: 'myButton' },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-picture-o' })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { style: { "flex": "1" } }),
                    _this2.props.sightwordslist.currentWordIndex !== 0 && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'myButton', onClick: function onClick() {
                          _this2.props.setAttribute({ "attribute": "currentWordIndex", "value": _this2.props.sightwordslist.currentWordIndex - 1 });
                        } },
                      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-arrow-left' })
                    ),
                    _this2.props.sightwordslist.currentWordIndex !== _this2.props.sightwordslist.selectedSightWordList.words.length - 1 && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'myButton', onClick: function onClick() {
                          _this2.props.setAttribute({ "attribute": "currentWordIndex", "value": _this2.props.sightwordslist.currentWordIndex + 1 });
                        } },
                      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-arrow-right' })
                    )
                  )
                );
              }
            })
          )
        )
      );
    }
  }]);

  return sightWordsListComponent;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (sightWordsListComponent);

/***/ }),

/***/ "./src/routes/Home/containers/sightWordslistContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__ = __webpack_require__("./src/routes/Home/modules/sightWordsListModule.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sightWordsListComponent__ = __webpack_require__("./src/routes/Home/components/sightWordsListComponent.js");




var mapDispatchToProps = {
  setAttribute: function setAttribute(payload) {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["a" /* setAttribute */](payload);
  },
  playSound: function playSound(payload) {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["b" /* playSound */](payload);
  },
  increment: function increment() {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["c" /* increment */](1);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sightwordslist: state.sightwordslist
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_sightWordsListComponent__["a" /* default */]));

/***/ }),

/***/ "./src/routes/Home/modules/sightWordsListModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COUNTER_INCREMENT */
/* unused harmony export COUNTER_DOUBLE_ASYNC */
/* unused harmony export SET_ATTRIBUTE */
/* unused harmony export PLAY_SOUND */
/* harmony export (immutable) */ __webpack_exports__["b"] = playSound;
/* harmony export (immutable) */ __webpack_exports__["c"] = increment;
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttribute;
/* unused harmony export doubleAsync */
/* unused harmony export actions */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);


var _ACTION_HANDLERS;

var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
var SET_ATTRIBUTE = 'SET_ATTRIBUTE';
var PLAY_SOUND = 'PLAY_SOUND';

function playSound(payload) {
  return {
    type: PLAY_SOUND,
    payload: payload
  };
}
function increment(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload: payload
  };
}
function setAttribute(payload) {
  return {
    type: SET_ATTRIBUTE,
    payload: payload
  };
}

var doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        });
        resolve();
      }, 200);
    });
  };
};

var actions = {
  increment: increment,
  doubleAsync: doubleAsync

  // ------------------------------------
  // Action Handlers
  // ------------------------------------
};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
  state.counter = state.counter + action.payload;
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, PLAY_SOUND, function (state, action) {
  var audio = new Audio(action.payload);
  audio.play();
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, SET_ATTRIBUTE, function (state, action) {
  if (action.payload.attribute.indexOf(".") !== -1) {
    state[action.payload.attribute.split(".")[0]][action.payload.attribute.split(".")[1]] = action.payload.value;
  } else {
    state[action.payload.attribute] = action.payload.value;
  }
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
  return state.counter * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  counter: 2,
  currentWordIndex: 0,
  selectedSightWordList: undefined,
  sightWordLists: [{
    name: "Dolch - Pre K",
    words: [{ text: "a", soundFile: "https://www.w3schools.com/tags/horse.mp3", imagePath: "" }, { text: "and", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/and.mp3?alt=media&token=3fe2124f-a1df-4ebe-9605-c52af9ca28bb", imagePath: "a" }, { text: "away", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/away.mp3?alt=media&token=e3b05663-20d5-445b-84ee-93d1bc06f2a4", imagePath: "a" }, { text: "big", soundFile: "", imagePath: "" }, { text: "blue", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/blue.mp3?alt=media&token=b4b1f5d4-a06c-456e-8e9a-e4c8d9aefbbd", imagePath: "" }, { text: "can", soundFile: "", imagePath: "" }, { text: "come", soundFile: "", imagePath: "" }, { text: "down", soundFile: "", imagePath: "" }, { text: "find", soundFile: "", imagePath: "" }, { text: "for", soundFile: "", imagePath: "" }, { text: "funny", soundFile: "", imagePath: "" }, { text: "go", soundFile: "", imagePath: "" }, { text: "help", soundFile: "", imagePath: "" }, { text: "here", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "in", soundFile: "", imagePath: "" }, { text: "is", soundFile: "", imagePath: "" }, { text: "it", soundFile: "", imagePath: "" }, { text: "jump", soundFile: "", imagePath: "" }, { text: "little", soundFile: "", imagePath: "" }, { text: "look", soundFile: "", imagePath: "" }, { text: "make", soundFile: "", imagePath: "" }, { text: "me", soundFile: "", imagePath: "" }, { text: "my", soundFile: "", imagePath: "" }, { text: "not", soundFile: "", imagePath: "" }, { text: "one", soundFile: "", imagePath: "" }, { text: "play", soundFile: "", imagePath: "" }, { text: "red", soundFile: "", imagePath: "" }, { text: "run", soundFile: "", imagePath: "" }, { text: "said", soundFile: "", imagePath: "" }, { text: "see", soundFile: "", imagePath: "" }, { text: "the", soundFile: "", imagePath: "" }, { text: "three", soundFile: "", imagePath: "" }, { text: "to", soundFile: "", imagePath: "" }, { text: "two", soundFile: "", imagePath: "" }, { text: "up", soundFile: "", imagePath: "" }, { text: "we", soundFile: "", imagePath: "" }, { text: "where", soundFile: "", imagePath: "" }, { text: "yellow", soundFile: "", imagePath: "" }, { text: "you", soundFile: "", imagePath: "" }],
    status: "Not Started",
    completedCount: 0
  }, {
    name: "Dolch - Kindergarten",
    words: [{ text: "all", soundFile: "", imagePath: "" }, { text: "am", soundFile: "", imagePath: "" }, { text: "are", soundFile: "", imagePath: "" }, { text: "at", soundFile: "", imagePath: "" }, { text: "ate", soundFile: "", imagePath: "" }, { text: "be", soundFile: "", imagePath: "" }, { text: "black", soundFile: "", imagePath: "" }, { text: "brown", soundFile: "", imagePath: "" }, { text: "but", soundFile: "", imagePath: "" }, { text: "came", soundFile: "", imagePath: "" }, { text: "did", soundFile: "", imagePath: "" }, { text: "do", soundFile: "", imagePath: "" }, { text: "eat", soundFile: "", imagePath: "" }, { text: "four", soundFile: "", imagePath: "" }, { text: "get", soundFile: "", imagePath: "" }, { text: "good", soundFile: "", imagePath: "" }, { text: "have", soundFile: "", imagePath: "" }, { text: "he", soundFile: "", imagePath: "" }, { text: "into", soundFile: "", imagePath: "" }, { text: "like", soundFile: "", imagePath: "" }, { text: "must", soundFile: "", imagePath: "" }, { text: "new", soundFile: "", imagePath: "" }, { text: "no", soundFile: "", imagePath: "" }, { text: "now", soundFile: "", imagePath: "" }, { text: "on", soundFile: "", imagePath: "" }, { text: "our", soundFile: "", imagePath: "" }, { text: "out", soundFile: "", imagePath: "" }, { text: "please", soundFile: "", imagePath: "" }, { text: "pretty", soundFile: "", imagePath: "" }, { text: "ran", soundFile: "", imagePath: "" }, { text: "ride", soundFile: "", imagePath: "" }, { text: "saw", soundFile: "", imagePath: "" }, { text: "say", soundFile: "", imagePath: "" }, { text: "she", soundFile: "", imagePath: "" }, { text: "so", soundFile: "", imagePath: "" }, { text: "soon", soundFile: "", imagePath: "" }, { text: "that", soundFile: "", imagePath: "" }, { text: "there", soundFile: "", imagePath: "" }, { text: "they", soundFile: "", imagePath: "" }, { text: "this", soundFile: "", imagePath: "" }, { text: "too", soundFile: "", imagePath: "" }, { text: "under", soundFile: "", imagePath: "" }, { text: "want", soundFile: "", imagePath: "" }, { text: "was", soundFile: "", imagePath: "" }, { text: "well", soundFile: "", imagePath: "" }, { text: "went", soundFile: "", imagePath: "" }, { text: "what", soundFile: "", imagePath: "" }, { text: "white", soundFile: "", imagePath: "" }, { text: "who", soundFile: "", imagePath: "" }, { text: "will", soundFile: "", imagePath: "" }, { text: "with", soundFile: "", imagePath: "" }, { text: "yes", soundFile: "", imagePath: "" }],
    status: "In Progress",
    completedCount: 2
  }, {
    name: "Third 5",
    words: [{ text: "CAN", soundFile: "", imagePath: "" }, { text: "WE", soundFile: "", imagePath: "" }, { text: "DO", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "ARE", soundFile: "", imagePath: "" }],
    status: "Completed",
    completedCount: 5
  }]
};

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./src/routes/Home/modules/sightWordslistModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_INCREMENT", function() { return COUNTER_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_DOUBLE_ASYNC", function() { return COUNTER_DOUBLE_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ATTRIBUTE", function() { return SET_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SOUND", function() { return PLAY_SOUND; });
/* harmony export (immutable) */ __webpack_exports__["playSound"] = playSound;
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;
/* harmony export (immutable) */ __webpack_exports__["setAttribute"] = setAttribute;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleAsync", function() { return doubleAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (immutable) */ __webpack_exports__["default"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);


var _ACTION_HANDLERS;

var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
var SET_ATTRIBUTE = 'SET_ATTRIBUTE';
var PLAY_SOUND = 'PLAY_SOUND';

function playSound(payload) {
  return {
    type: PLAY_SOUND,
    payload: payload
  };
}
function increment(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload: payload
  };
}
function setAttribute(payload) {
  return {
    type: SET_ATTRIBUTE,
    payload: payload
  };
}

var doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        });
        resolve();
      }, 200);
    });
  };
};

var actions = {
  increment: increment,
  doubleAsync: doubleAsync

  // ------------------------------------
  // Action Handlers
  // ------------------------------------
};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
  state.counter = state.counter + action.payload;
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, PLAY_SOUND, function (state, action) {
  var audio = new Audio(action.payload);
  audio.play();
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, SET_ATTRIBUTE, function (state, action) {
  if (action.payload.attribute.indexOf(".") !== -1) {
    state[action.payload.attribute.split(".")[0]][action.payload.attribute.split(".")[1]] = action.payload.value;
  } else {
    state[action.payload.attribute] = action.payload.value;
  }
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
  return state.counter * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  counter: 2,
  currentWordIndex: 0,
  selectedSightWordList: undefined,
  sightWordLists: [{
    name: "Dolch - Pre K",
    words: [{ text: "a", soundFile: "https://www.w3schools.com/tags/horse.mp3", imagePath: "" }, { text: "and", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/and.mp3?alt=media&token=3fe2124f-a1df-4ebe-9605-c52af9ca28bb", imagePath: "a" }, { text: "away", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/away.mp3?alt=media&token=e3b05663-20d5-445b-84ee-93d1bc06f2a4", imagePath: "a" }, { text: "big", soundFile: "", imagePath: "" }, { text: "blue", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/blue.mp3?alt=media&token=b4b1f5d4-a06c-456e-8e9a-e4c8d9aefbbd", imagePath: "" }, { text: "can", soundFile: "", imagePath: "" }, { text: "come", soundFile: "", imagePath: "" }, { text: "down", soundFile: "", imagePath: "" }, { text: "find", soundFile: "", imagePath: "" }, { text: "for", soundFile: "", imagePath: "" }, { text: "funny", soundFile: "", imagePath: "" }, { text: "go", soundFile: "", imagePath: "" }, { text: "help", soundFile: "", imagePath: "" }, { text: "here", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "in", soundFile: "", imagePath: "" }, { text: "is", soundFile: "", imagePath: "" }, { text: "it", soundFile: "", imagePath: "" }, { text: "jump", soundFile: "", imagePath: "" }, { text: "little", soundFile: "", imagePath: "" }, { text: "look", soundFile: "", imagePath: "" }, { text: "make", soundFile: "", imagePath: "" }, { text: "me", soundFile: "", imagePath: "" }, { text: "my", soundFile: "", imagePath: "" }, { text: "not", soundFile: "", imagePath: "" }, { text: "one", soundFile: "", imagePath: "" }, { text: "play", soundFile: "", imagePath: "" }, { text: "red", soundFile: "", imagePath: "" }, { text: "run", soundFile: "", imagePath: "" }, { text: "said", soundFile: "", imagePath: "" }, { text: "see", soundFile: "", imagePath: "" }, { text: "the", soundFile: "", imagePath: "" }, { text: "three", soundFile: "", imagePath: "" }, { text: "to", soundFile: "", imagePath: "" }, { text: "two", soundFile: "", imagePath: "" }, { text: "up", soundFile: "", imagePath: "" }, { text: "we", soundFile: "", imagePath: "" }, { text: "where", soundFile: "", imagePath: "" }, { text: "yellow", soundFile: "", imagePath: "" }, { text: "you", soundFile: "", imagePath: "" }],
    status: "Not Started",
    completedCount: 0
  }, {
    name: "Dolch - Kindergarten",
    words: [{ text: "all", soundFile: "", imagePath: "" }, { text: "am", soundFile: "", imagePath: "" }, { text: "are", soundFile: "", imagePath: "" }, { text: "at", soundFile: "", imagePath: "" }, { text: "ate", soundFile: "", imagePath: "" }, { text: "be", soundFile: "", imagePath: "" }, { text: "black", soundFile: "", imagePath: "" }, { text: "brown", soundFile: "", imagePath: "" }, { text: "but", soundFile: "", imagePath: "" }, { text: "came", soundFile: "", imagePath: "" }, { text: "did", soundFile: "", imagePath: "" }, { text: "do", soundFile: "", imagePath: "" }, { text: "eat", soundFile: "", imagePath: "" }, { text: "four", soundFile: "", imagePath: "" }, { text: "get", soundFile: "", imagePath: "" }, { text: "good", soundFile: "", imagePath: "" }, { text: "have", soundFile: "", imagePath: "" }, { text: "he", soundFile: "", imagePath: "" }, { text: "into", soundFile: "", imagePath: "" }, { text: "like", soundFile: "", imagePath: "" }, { text: "must", soundFile: "", imagePath: "" }, { text: "new", soundFile: "", imagePath: "" }, { text: "no", soundFile: "", imagePath: "" }, { text: "now", soundFile: "", imagePath: "" }, { text: "on", soundFile: "", imagePath: "" }, { text: "our", soundFile: "", imagePath: "" }, { text: "out", soundFile: "", imagePath: "" }, { text: "please", soundFile: "", imagePath: "" }, { text: "pretty", soundFile: "", imagePath: "" }, { text: "ran", soundFile: "", imagePath: "" }, { text: "ride", soundFile: "", imagePath: "" }, { text: "saw", soundFile: "", imagePath: "" }, { text: "say", soundFile: "", imagePath: "" }, { text: "she", soundFile: "", imagePath: "" }, { text: "so", soundFile: "", imagePath: "" }, { text: "soon", soundFile: "", imagePath: "" }, { text: "that", soundFile: "", imagePath: "" }, { text: "there", soundFile: "", imagePath: "" }, { text: "they", soundFile: "", imagePath: "" }, { text: "this", soundFile: "", imagePath: "" }, { text: "too", soundFile: "", imagePath: "" }, { text: "under", soundFile: "", imagePath: "" }, { text: "want", soundFile: "", imagePath: "" }, { text: "was", soundFile: "", imagePath: "" }, { text: "well", soundFile: "", imagePath: "" }, { text: "went", soundFile: "", imagePath: "" }, { text: "what", soundFile: "", imagePath: "" }, { text: "white", soundFile: "", imagePath: "" }, { text: "who", soundFile: "", imagePath: "" }, { text: "will", soundFile: "", imagePath: "" }, { text: "with", soundFile: "", imagePath: "" }, { text: "yes", soundFile: "", imagePath: "" }],
    status: "In Progress",
    completedCount: 2
  }, {
    name: "Third 5",
    words: [{ text: "CAN", soundFile: "", imagePath: "" }, { text: "WE", soundFile: "", imagePath: "" }, { text: "DO", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "ARE", soundFile: "", imagePath: "" }],
    status: "Completed",
    completedCount: 5
  }]
};

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./src/routes/SightWordslist/components/sightWordsList.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/SightWordslist/components/sightWordsList.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/SightWordslist/components/sightWordsList.scss", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":{\"autoprefixer\":{\"add\":true,\"remove\":true,\"browsers\":[\"last 2 versions\"]},\"discardComments\":{\"removeAll\":true},\"discardUnused\":false,\"mergeIdents\":false,\"reduceIdents\":false,\"safe\":true,\"sourcemap\":true}}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"includePaths\":[\"/Users/prashantsapkal/Projects/SightWords/React/SightWords/src/styles\"]}!./src/routes/SightWordslist/components/sightWordsList.scss");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/routes/SightWordslist/components/sightWordsListComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss__ = __webpack_require__("./src/routes/SightWordslist/components/sightWordsList.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sightWordsList_scss__);







var sightWordsListComponent = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(sightWordsListComponent, _React$Component);

  function sightWordsListComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, sightWordsListComponent);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (sightWordsListComponent.__proto__ || Object.getPrototypeOf(sightWordsListComponent)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(sightWordsListComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { style: { "width": "100%", "height": "100%" } },
        this.props.sightwordslist.selectedSightWordList === undefined && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'word-lists' },
          this.props.sightwordslist.sightWordLists.map(function (swl, key) {
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: 'word-list', key: key, onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": swl });
                } },
              swl.name,
              ' - ',
              swl.words.length
            );
          })
        ),
        this.props.sightwordslist.selectedSightWordList !== undefined && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'word-container', style: { "width": "100%", "height": "100%" } },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: 'blackboard', style: { "width": "100%", "height": "100%" } },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: 'header myButton',
                onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": undefined });
                } },
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-times', onClick: function onClick() {
                  _this2.props.setAttribute({ "attribute": "selectedSightWordList", "value": undefined });
                } })
            ),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', { src: 'http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i23/ppg_mskeane_174x252.png', className: 'teacher-img' }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'h4',
              { style: { "position": "relative", "margin": "10px" } },
              this.props.sightwordslist.selectedSightWordList.name,
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'span',
                { style: { "position": "absolute", "right": "0px", "fontSize": "20px" } },
                this.props.sightwordslist.currentWordIndex + 1,
                '\xA0\xA0of\xA0\xA0',
                this.props.sightwordslist.selectedSightWordList.words.length
              )
            ),
            this.props.sightwordslist.selectedSightWordList.words.map(function (sw, key) {
              if (key === _this2.props.sightwordslist.currentWordIndex) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'div',
                  { key: key, className: 'flex-v', style: { "height": "100%" } },
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    { style: { "fontSize": "100px", "fontFamily": 'Handlee' }, className: 'flex-1' },
                    sw.text
                  ),
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    { className: 'footer' },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'sound-image-container' },
                      sw.soundFile !== "" && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        'div',
                        { className: 'myButton', onClick: function onClick() {
                            return _this2.props.playSound(sw.soundFile);
                          } },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-volume-up' })
                      ),
                      sw.imagePath !== "" && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        'div',
                        { className: 'myButton' },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-picture-o' })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', { style: { "flex": "1" } }),
                    _this2.props.sightwordslist.currentWordIndex !== 0 && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'myButton', onClick: function onClick() {
                          _this2.props.setAttribute({ "attribute": "currentWordIndex", "value": _this2.props.sightwordslist.currentWordIndex - 1 });
                        } },
                      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-arrow-left' })
                    ),
                    _this2.props.sightwordslist.currentWordIndex !== _this2.props.sightwordslist.selectedSightWordList.words.length - 1 && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                      'div',
                      { className: 'myButton', onClick: function onClick() {
                          _this2.props.setAttribute({ "attribute": "currentWordIndex", "value": _this2.props.sightwordslist.currentWordIndex + 1 });
                        } },
                      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: 'fa fa-arrow-right' })
                    )
                  )
                );
              }
            })
          )
        )
      );
    }
  }]);

  return sightWordsListComponent;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (sightWordsListComponent);

/***/ }),

/***/ "./src/routes/SightWordslist/containers/sightWordslistContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__ = __webpack_require__("./src/routes/SightWordslist/modules/sightWordsListModule.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sightWordsListComponent__ = __webpack_require__("./src/routes/SightWordslist/components/sightWordsListComponent.js");




var mapDispatchToProps = {
  setAttribute: function setAttribute(payload) {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["a" /* setAttribute */](payload);
  },
  playSound: function playSound(payload) {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["b" /* playSound */](payload);
  },
  increment: function increment() {
    return __WEBPACK_IMPORTED_MODULE_1__modules_sightWordsListModule__["c" /* increment */](1);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sightwordslist: state.sightwordslist
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_sightWordsListComponent__["a" /* default */]));

/***/ }),

/***/ "./src/routes/SightWordslist/modules/sightWordsListModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COUNTER_INCREMENT */
/* unused harmony export COUNTER_DOUBLE_ASYNC */
/* unused harmony export SET_ATTRIBUTE */
/* unused harmony export PLAY_SOUND */
/* harmony export (immutable) */ __webpack_exports__["b"] = playSound;
/* harmony export (immutable) */ __webpack_exports__["c"] = increment;
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttribute;
/* unused harmony export doubleAsync */
/* unused harmony export actions */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);


var _ACTION_HANDLERS;

var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
var SET_ATTRIBUTE = 'SET_ATTRIBUTE';
var PLAY_SOUND = 'PLAY_SOUND';

function playSound(payload) {
  return {
    type: PLAY_SOUND,
    payload: payload
  };
}
function increment(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload: payload
  };
}
function setAttribute(payload) {
  return {
    type: SET_ATTRIBUTE,
    payload: payload
  };
}

var doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        });
        resolve();
      }, 200);
    });
  };
};

var actions = {
  increment: increment,
  doubleAsync: doubleAsync

  // ------------------------------------
  // Action Handlers
  // ------------------------------------
};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
  state.counter = state.counter + action.payload;
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, PLAY_SOUND, function (state, action) {
  var audio = new Audio(action.payload);
  audio.play();
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, SET_ATTRIBUTE, function (state, action) {
  if (action.payload.attribute.indexOf(".") !== -1) {
    state[action.payload.attribute.split(".")[0]][action.payload.attribute.split(".")[1]] = action.payload.value;
  } else {
    state[action.payload.attribute] = action.payload.value;
  }
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
  return state.counter * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  counter: 2,
  currentWordIndex: 0,
  selectedSightWordList: undefined,
  sightWordLists: [{
    name: "Dolch - Pre K",
    words: [{ text: "a", soundFile: "https://www.w3schools.com/tags/horse.mp3", imagePath: "" }, { text: "and", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/and.mp3?alt=media&token=3fe2124f-a1df-4ebe-9605-c52af9ca28bb", imagePath: "a" }, { text: "away", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/away.mp3?alt=media&token=e3b05663-20d5-445b-84ee-93d1bc06f2a4", imagePath: "a" }, { text: "big", soundFile: "", imagePath: "" }, { text: "blue", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/blue.mp3?alt=media&token=b4b1f5d4-a06c-456e-8e9a-e4c8d9aefbbd", imagePath: "" }, { text: "can", soundFile: "", imagePath: "" }, { text: "come", soundFile: "", imagePath: "" }, { text: "down", soundFile: "", imagePath: "" }, { text: "find", soundFile: "", imagePath: "" }, { text: "for", soundFile: "", imagePath: "" }, { text: "funny", soundFile: "", imagePath: "" }, { text: "go", soundFile: "", imagePath: "" }, { text: "help", soundFile: "", imagePath: "" }, { text: "here", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "in", soundFile: "", imagePath: "" }, { text: "is", soundFile: "", imagePath: "" }, { text: "it", soundFile: "", imagePath: "" }, { text: "jump", soundFile: "", imagePath: "" }, { text: "little", soundFile: "", imagePath: "" }, { text: "look", soundFile: "", imagePath: "" }, { text: "make", soundFile: "", imagePath: "" }, { text: "me", soundFile: "", imagePath: "" }, { text: "my", soundFile: "", imagePath: "" }, { text: "not", soundFile: "", imagePath: "" }, { text: "one", soundFile: "", imagePath: "" }, { text: "play", soundFile: "", imagePath: "" }, { text: "red", soundFile: "", imagePath: "" }, { text: "run", soundFile: "", imagePath: "" }, { text: "said", soundFile: "", imagePath: "" }, { text: "see", soundFile: "", imagePath: "" }, { text: "the", soundFile: "", imagePath: "" }, { text: "three", soundFile: "", imagePath: "" }, { text: "to", soundFile: "", imagePath: "" }, { text: "two", soundFile: "", imagePath: "" }, { text: "up", soundFile: "", imagePath: "" }, { text: "we", soundFile: "", imagePath: "" }, { text: "where", soundFile: "", imagePath: "" }, { text: "yellow", soundFile: "", imagePath: "" }, { text: "you", soundFile: "", imagePath: "" }],
    status: "Not Started",
    completedCount: 0
  }, {
    name: "Dolch - Kindergarten",
    words: [{ text: "all", soundFile: "", imagePath: "" }, { text: "am", soundFile: "", imagePath: "" }, { text: "are", soundFile: "", imagePath: "" }, { text: "at", soundFile: "", imagePath: "" }, { text: "ate", soundFile: "", imagePath: "" }, { text: "be", soundFile: "", imagePath: "" }, { text: "black", soundFile: "", imagePath: "" }, { text: "brown", soundFile: "", imagePath: "" }, { text: "but", soundFile: "", imagePath: "" }, { text: "came", soundFile: "", imagePath: "" }, { text: "did", soundFile: "", imagePath: "" }, { text: "do", soundFile: "", imagePath: "" }, { text: "eat", soundFile: "", imagePath: "" }, { text: "four", soundFile: "", imagePath: "" }, { text: "get", soundFile: "", imagePath: "" }, { text: "good", soundFile: "", imagePath: "" }, { text: "have", soundFile: "", imagePath: "" }, { text: "he", soundFile: "", imagePath: "" }, { text: "into", soundFile: "", imagePath: "" }, { text: "like", soundFile: "", imagePath: "" }, { text: "must", soundFile: "", imagePath: "" }, { text: "new", soundFile: "", imagePath: "" }, { text: "no", soundFile: "", imagePath: "" }, { text: "now", soundFile: "", imagePath: "" }, { text: "on", soundFile: "", imagePath: "" }, { text: "our", soundFile: "", imagePath: "" }, { text: "out", soundFile: "", imagePath: "" }, { text: "please", soundFile: "", imagePath: "" }, { text: "pretty", soundFile: "", imagePath: "" }, { text: "ran", soundFile: "", imagePath: "" }, { text: "ride", soundFile: "", imagePath: "" }, { text: "saw", soundFile: "", imagePath: "" }, { text: "say", soundFile: "", imagePath: "" }, { text: "she", soundFile: "", imagePath: "" }, { text: "so", soundFile: "", imagePath: "" }, { text: "soon", soundFile: "", imagePath: "" }, { text: "that", soundFile: "", imagePath: "" }, { text: "there", soundFile: "", imagePath: "" }, { text: "they", soundFile: "", imagePath: "" }, { text: "this", soundFile: "", imagePath: "" }, { text: "too", soundFile: "", imagePath: "" }, { text: "under", soundFile: "", imagePath: "" }, { text: "want", soundFile: "", imagePath: "" }, { text: "was", soundFile: "", imagePath: "" }, { text: "well", soundFile: "", imagePath: "" }, { text: "went", soundFile: "", imagePath: "" }, { text: "what", soundFile: "", imagePath: "" }, { text: "white", soundFile: "", imagePath: "" }, { text: "who", soundFile: "", imagePath: "" }, { text: "will", soundFile: "", imagePath: "" }, { text: "with", soundFile: "", imagePath: "" }, { text: "yes", soundFile: "", imagePath: "" }],
    status: "In Progress",
    completedCount: 2
  }, {
    name: "Third 5",
    words: [{ text: "CAN", soundFile: "", imagePath: "" }, { text: "WE", soundFile: "", imagePath: "" }, { text: "DO", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "ARE", soundFile: "", imagePath: "" }],
    status: "Completed",
    completedCount: 5
  }]
};

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }),

/***/ "./src/routes/SightWordslist/modules/sightWordslistModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_INCREMENT", function() { return COUNTER_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_DOUBLE_ASYNC", function() { return COUNTER_DOUBLE_ASYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ATTRIBUTE", function() { return SET_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SOUND", function() { return PLAY_SOUND; });
/* harmony export (immutable) */ __webpack_exports__["playSound"] = playSound;
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;
/* harmony export (immutable) */ __webpack_exports__["setAttribute"] = setAttribute;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleAsync", function() { return doubleAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (immutable) */ __webpack_exports__["default"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);


var _ACTION_HANDLERS;

var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
var SET_ATTRIBUTE = 'SET_ATTRIBUTE';
var PLAY_SOUND = 'PLAY_SOUND';

function playSound(payload) {
  return {
    type: PLAY_SOUND,
    payload: payload
  };
}
function increment(payload) {
  return {
    type: COUNTER_INCREMENT,
    payload: payload
  };
}
function setAttribute(payload) {
  return {
    type: SET_ATTRIBUTE,
    payload: payload
  };
}

var doubleAsync = function doubleAsync() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: getState().counter
        });
        resolve();
      }, 200);
    });
  };
};

var actions = {
  increment: increment,
  doubleAsync: doubleAsync

  // ------------------------------------
  // Action Handlers
  // ------------------------------------
};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
  state.counter = state.counter + action.payload;
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, PLAY_SOUND, function (state, action) {
  var audio = new Audio(action.payload);
  audio.play();
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, SET_ATTRIBUTE, function (state, action) {
  if (action.payload.attribute.indexOf(".") !== -1) {
    state[action.payload.attribute.split(".")[0]][action.payload.attribute.split(".")[1]] = action.payload.value;
  } else {
    state[action.payload.attribute] = action.payload.value;
  }
  return Object.assign({}, state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
  return state.counter * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
  counter: 2,
  currentWordIndex: 0,
  selectedSightWordList: undefined,
  sightWordLists: [{
    name: "Dolch - Pre K",
    words: [{ text: "a", soundFile: "https://www.w3schools.com/tags/horse.mp3", imagePath: "" }, { text: "and", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/and.mp3?alt=media&token=3fe2124f-a1df-4ebe-9605-c52af9ca28bb", imagePath: "a" }, { text: "away", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/away.mp3?alt=media&token=e3b05663-20d5-445b-84ee-93d1bc06f2a4", imagePath: "a" }, { text: "big", soundFile: "", imagePath: "" }, { text: "blue", soundFile: "https://firebasestorage.googleapis.com/v0/b/sightwords-d05ac.appspot.com/o/blue.mp3?alt=media&token=b4b1f5d4-a06c-456e-8e9a-e4c8d9aefbbd", imagePath: "" }, { text: "can", soundFile: "", imagePath: "" }, { text: "come", soundFile: "", imagePath: "" }, { text: "down", soundFile: "", imagePath: "" }, { text: "find", soundFile: "", imagePath: "" }, { text: "for", soundFile: "", imagePath: "" }, { text: "funny", soundFile: "", imagePath: "" }, { text: "go", soundFile: "", imagePath: "" }, { text: "help", soundFile: "", imagePath: "" }, { text: "here", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "in", soundFile: "", imagePath: "" }, { text: "is", soundFile: "", imagePath: "" }, { text: "it", soundFile: "", imagePath: "" }, { text: "jump", soundFile: "", imagePath: "" }, { text: "little", soundFile: "", imagePath: "" }, { text: "look", soundFile: "", imagePath: "" }, { text: "make", soundFile: "", imagePath: "" }, { text: "me", soundFile: "", imagePath: "" }, { text: "my", soundFile: "", imagePath: "" }, { text: "not", soundFile: "", imagePath: "" }, { text: "one", soundFile: "", imagePath: "" }, { text: "play", soundFile: "", imagePath: "" }, { text: "red", soundFile: "", imagePath: "" }, { text: "run", soundFile: "", imagePath: "" }, { text: "said", soundFile: "", imagePath: "" }, { text: "see", soundFile: "", imagePath: "" }, { text: "the", soundFile: "", imagePath: "" }, { text: "three", soundFile: "", imagePath: "" }, { text: "to", soundFile: "", imagePath: "" }, { text: "two", soundFile: "", imagePath: "" }, { text: "up", soundFile: "", imagePath: "" }, { text: "we", soundFile: "", imagePath: "" }, { text: "where", soundFile: "", imagePath: "" }, { text: "yellow", soundFile: "", imagePath: "" }, { text: "you", soundFile: "", imagePath: "" }],
    status: "Not Started",
    completedCount: 0
  }, {
    name: "Dolch - Kindergarten",
    words: [{ text: "all", soundFile: "", imagePath: "" }, { text: "am", soundFile: "", imagePath: "" }, { text: "are", soundFile: "", imagePath: "" }, { text: "at", soundFile: "", imagePath: "" }, { text: "ate", soundFile: "", imagePath: "" }, { text: "be", soundFile: "", imagePath: "" }, { text: "black", soundFile: "", imagePath: "" }, { text: "brown", soundFile: "", imagePath: "" }, { text: "but", soundFile: "", imagePath: "" }, { text: "came", soundFile: "", imagePath: "" }, { text: "did", soundFile: "", imagePath: "" }, { text: "do", soundFile: "", imagePath: "" }, { text: "eat", soundFile: "", imagePath: "" }, { text: "four", soundFile: "", imagePath: "" }, { text: "get", soundFile: "", imagePath: "" }, { text: "good", soundFile: "", imagePath: "" }, { text: "have", soundFile: "", imagePath: "" }, { text: "he", soundFile: "", imagePath: "" }, { text: "into", soundFile: "", imagePath: "" }, { text: "like", soundFile: "", imagePath: "" }, { text: "must", soundFile: "", imagePath: "" }, { text: "new", soundFile: "", imagePath: "" }, { text: "no", soundFile: "", imagePath: "" }, { text: "now", soundFile: "", imagePath: "" }, { text: "on", soundFile: "", imagePath: "" }, { text: "our", soundFile: "", imagePath: "" }, { text: "out", soundFile: "", imagePath: "" }, { text: "please", soundFile: "", imagePath: "" }, { text: "pretty", soundFile: "", imagePath: "" }, { text: "ran", soundFile: "", imagePath: "" }, { text: "ride", soundFile: "", imagePath: "" }, { text: "saw", soundFile: "", imagePath: "" }, { text: "say", soundFile: "", imagePath: "" }, { text: "she", soundFile: "", imagePath: "" }, { text: "so", soundFile: "", imagePath: "" }, { text: "soon", soundFile: "", imagePath: "" }, { text: "that", soundFile: "", imagePath: "" }, { text: "there", soundFile: "", imagePath: "" }, { text: "they", soundFile: "", imagePath: "" }, { text: "this", soundFile: "", imagePath: "" }, { text: "too", soundFile: "", imagePath: "" }, { text: "under", soundFile: "", imagePath: "" }, { text: "want", soundFile: "", imagePath: "" }, { text: "was", soundFile: "", imagePath: "" }, { text: "well", soundFile: "", imagePath: "" }, { text: "went", soundFile: "", imagePath: "" }, { text: "what", soundFile: "", imagePath: "" }, { text: "white", soundFile: "", imagePath: "" }, { text: "who", soundFile: "", imagePath: "" }, { text: "will", soundFile: "", imagePath: "" }, { text: "with", soundFile: "", imagePath: "" }, { text: "yes", soundFile: "", imagePath: "" }],
    status: "In Progress",
    completedCount: 2
  }, {
    name: "Third 5",
    words: [{ text: "CAN", soundFile: "", imagePath: "" }, { text: "WE", soundFile: "", imagePath: "" }, { text: "DO", soundFile: "", imagePath: "" }, { text: "I", soundFile: "", imagePath: "" }, { text: "ARE", soundFile: "", imagePath: "" }],
    status: "Completed",
    completedCount: 5
  }]
};

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ })

});
//# sourceMappingURL=0.js.map