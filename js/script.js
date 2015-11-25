/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _classesStatesBoot = __webpack_require__(1);
	
	var _classesStatesBoot2 = _interopRequireDefault(_classesStatesBoot);
	
	var _classesStatesPreload = __webpack_require__(2);
	
	var _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);
	
	var _classesStatesMenu = __webpack_require__(3);
	
	var _classesStatesMenu2 = _interopRequireDefault(_classesStatesMenu);
	
	var _classesStatesPlay = __webpack_require__(4);
	
	var _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);
	
	var game = undefined;
	
	var init = function init() {
		game = new Phaser.Game(300, 500, Phaser.AUTO);
		game.state.add('Boot', _classesStatesBoot2['default'], true);
		game.state.add('Preload', _classesStatesPreload2['default'], false);
		game.state.add('Menu', _classesStatesMenu2['default'], false);
		game.state.add('Play', _classesStatesPlay2['default'], false);
	};
	
	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Boot = (function (_Phaser$State) {
		_inherits(Boot, _Phaser$State);
	
		function Boot() {
			_classCallCheck(this, Boot);
	
			_get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Boot, [{
			key: 'preload',
			value: function preload() {
				//this.load.image('preloader', 'assets/preloader.gif');
				console.log('booting');
			}
		}, {
			key: 'create',
			value: function create() {
				//console.log('Boot State');
				this.game.state.start('Preload');
			}
		}]);
	
		return Boot;
	})(Phaser.State);
	
	exports['default'] = Boot;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);
	
		function Preload() {
			_classCallCheck(this, Preload);
	
			_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Preload, [{
			key: 'preload',
			value: function preload() {
				this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	
				this.load.spritesheet('player', 'assets/player.png', 121, 110, 3);
				this.load.image('logo', 'assets/logo.png');
				this.load.image('start', 'assets/start.png');
	
				// this.load.image('space', 'assets/space.png');
				this.load.spritesheet('space', 'assets/space.png', 400, 400, 3);
	
				//this.game.state.start('Menu');
			}
		}, {
			key: 'create',
			value: function create() {
				//console.log('Preload State')
			}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				console.log('load complete');
				this.game.state.start('Play');
			}
		}]);
	
		return Preload;
	})(Phaser.State);
	
	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Menu = (function (_Phaser$State) {
		_inherits(Menu, _Phaser$State);
	
		function Menu() {
			_classCallCheck(this, Menu);
	
			_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Menu, [{
			key: 'create',
			value: function create() {
				console.log('Menu State');
	
				this.logo = this.game.add.sprite(150, 100, 'logo');
				this.logo.scale.setTo(.5);
				this.logo.anchor.setTo(.5, .5);
	
				this.start = this.game.add.button(150, 300, 'start', this.startClick, this);
				this.start.scale.setTo(.5);
				this.start.anchor.setTo(.5, .5);
	
				this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				this.key1.onDown.add(this.startClick, this);
			}
		}, {
			key: 'startClick',
			value: function startClick() {
				this.game.state.start('Play');
			}
		}]);
	
		return Menu;
	})(Phaser.State);
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _objectsPlayer = __webpack_require__(5);
	
	var _objectsPlayer2 = _interopRequireDefault(_objectsPlayer);
	
	var _objectsSpace = __webpack_require__(6);
	
	var _objectsSpace2 = _interopRequireDefault(_objectsSpace);
	
	var Play = (function (_Phaser$State) {
		_inherits(Play, _Phaser$State);
	
		function Play() {
			_classCallCheck(this, Play);
	
			_get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Play, [{
			key: 'create',
			value: function create() {
	
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
				this.space = new _objectsSpace2['default'](this.game, -10, 0, 400, 700);
				this.game.add.existing(this.space);
				this.space.scale.setTo(.8);
				this.space.autoScroll(0, 200);
	
				this.player = new _objectsPlayer2['default'](this.game, 150, 400);
				this.game.add.existing(this.player);
				this.player.scale.setTo(.5);
				this.game.physics.arcade.enable(this.player);
				this.player.body.collideWorldBounds = true;
	
				this.cursors = this.game.input.keyboard.createCursorKeys();
	
				console.log('Play State');
			}
		}, {
			key: 'update',
			value: function update() {
				this.player.body.velocity.x = 0;
				this.player.body.velocity.y = 0;
				if (this.cursors.left.isDown) {
					this.player.body.velocity.x = -200;
				}
	
				if (this.cursors.right.isDown) {
					this.player.body.velocity.x = 200;
				}
	
				if (this.cursors.up.isDown) {
					this.player.body.velocity.y = -200;
				}
	
				if (this.cursors.down.isDown) {
					this.player.body.velocity.y = 200;
				}
			}
		}]);
	
		return Play;
	})(Phaser.State);
	
	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = (function (_Phaser$Sprite) {
	  _inherits(Player, _Phaser$Sprite);
	
	  function Player(game, x, y, frame) {
	    _classCallCheck(this, Player);
	
	    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, x, y, 'player', frame);
	
	    this.animations.add('vuur');
	    this.animations.play('vuur', 12, true);
	
	    this.anchor.setTo(0.5, 0.5);
	
	    this.game.physics.arcade.enableBody(this);
	  }
	
	  return Player;
	})(Phaser.Sprite);
	
	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Space = (function (_Phaser$TileSprite) {
	  _inherits(Space, _Phaser$TileSprite);
	
	  function Space(game, x, y, width, height) {
	    _classCallCheck(this, Space);
	
	    _get(Object.getPrototypeOf(Space.prototype), 'constructor', this).call(this, game, x, y, width, height, 'space');
	    this.autoScroll(0, 200);
	    this.game.physics.arcade.enableBody(this);
	
	    this.body.allowGravity = false;
	    this.body.immovable = true;
	  }
	
	  return Space;
	})(Phaser.TileSprite);
	
	exports['default'] = Space;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map