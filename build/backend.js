require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	module.exports = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-register");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _http = __webpack_require__(5);

	var _http2 = _interopRequireDefault(_http);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	function initServer() {
	  var http = _http2.default.Server(app);

	  (0, _index2.default)(http);

	  app.use(_express2.default.static(process.cwd() + '/public'));
	  app.get('/', function (req, res) {
	    res.sendFile(_path2.default.join(__dirname, '../../public/view/index.html'));
	  });

	  http.listen(3000, function () {
	    console.log('listen on port : ' + 3000);
	  });
	}

	initServer();

	exports.default = app;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _socket = __webpack_require__(7);

	var _socket2 = _interopRequireDefault(_socket);

	var _Chat = __webpack_require__(8);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Disconnect = __webpack_require__(9);

	var _Disconnect2 = _interopRequireDefault(_Disconnect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = function init(io, emitToAll) {
	  io.on('connection', function (socket) {
	    new _Disconnect2.default(socket, emitToAll);
	    new _Chat2.default(socket, emitToAll);
	  });
	};

	exports.default = function (http) {
	  var io = (0, _socket2.default)(http);
	  var emitToAll = io.emit;
	  init(io, emitToAll);
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Chat = function () {
	  function Chat(socket, emitToAll) {
	    _classCallCheck(this, Chat);

	    this.socket = socket;
	    this.emitToAll = emitToAll;
	    this.doAction();
	  }

	  _createClass(Chat, [{
	    key: 'doAction',
	    value: function doAction() {
	      var _this = this;

	      this.socket.on('chat message', function (payload) {
	        var user = payload.user;
	        var text = payload.text;

	        //io.emit is for everyone :)
	        _this.emitToAll('chat message', {
	          user: user,
	          text: text
	        });
	      });

	      this.socket.on('new joiner', function (msg) {
	        var finalMsg = msg + ' has join the conversation';
	        _this.emitToAll('new joiner', finalMsg);
	      });

	      this.socket.on('joiner leave', function (msg) {
	        var finalMsg = msg + ' has left the conversation';
	        _this.emitToAll('joiner leave', finalMsg);
	      });
	    }
	  }]);

	  return Chat;
	}();

	exports.default = Chat;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Disconnect = function () {
	  function Disconnect(socket, emitToAll) {
	    _classCallCheck(this, Disconnect);

	    this.socket = socket;
	    this.emitToAll = emitToAll;
	    this.doAction();
	  }

	  _createClass(Disconnect, [{
	    key: 'doAction',
	    value: function doAction() {
	      this.socket.on('disconnect', function () {
	        console.log('user disconnected');
	      });
	    }
	  }]);

	  return Disconnect;
	}();

	exports.default = Disconnect;
	module.exports = exports['default'];

/***/ }
/******/ ]);