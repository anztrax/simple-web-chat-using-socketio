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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	var path = __webpack_require__(4);
	var http = __webpack_require__(5).Server(app);
	var io = __webpack_require__(6)(http);

	app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname, '../../public/view/index.html'));
	});
	app.use(_express2.default.static(process.cwd() + '/public'));

	io.on('connection', function (socket) {
	  console.log('a user connected');

	  //this command is broadcast (this is for certain people)
	  socket.broadcast.emit('hi');

	  socket.on('disconnect', function () {
	    console.log('user disconnected');
	  });

	  socket.on('chat message', function (payload) {
	    var user = payload.user;
	    var text = payload.text;

	    //io.emit is for everyome :)
	    io.emit('chat message', {
	      user: user,
	      text: text
	    });
	  });

	  socket.on('new joiner', function (msg) {
	    var finalMsg = msg + ' has join the conversation';
	    io.emit('new joiner', finalMsg);
	  });

	  socket.on('joiner leave', function (msg) {
	    var finalMsg = msg + ' has left the conversation';
	    io.emit('joiner leave', finalMsg);
	  });
	});

	http.listen(3000, function () {
	  console.log('listen on port : ' + 3000);
	});

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
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);