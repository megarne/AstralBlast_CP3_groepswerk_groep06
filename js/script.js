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
		game = new Phaser.Game(800, 600, Phaser.AUTO);
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	
				this.load.spritesheet('player', 'assets/player.png', 182 / 3, 56, 3);
				this.load.spritesheet('enemie', 'assets/enemie.png', 125 / 3, 37, 3);
				this.load.spritesheet('bullet', 'assets/bullet.png', 11, 20, 3);
				this.load.spritesheet('explosie', 'assets/boem.png', 100, 100, 8);
				this.load.bitmapFont('gem', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');
				this.load.image('logo', 'assets/logo.png');
				this.load.image('start', 'assets/start.png');
				this.load.spritesheet('space', 'assets/space.png', 320, 320, 3);
			}
		}, {
			key: 'create',
			value: function create() {}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				console.log('load complete');
				this.game.state.start('Menu');
			}
		}]);
	
		return Preload;
	})(Phaser.State);
	
	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _objectsSpace = __webpack_require__(6);
	
	var _objectsSpace2 = _interopRequireDefault(_objectsSpace);
	
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
	
				this.space = new _objectsSpace2['default'](this.game, -10, 0, this.game.width, this.game.height);
				this.game.add.existing(this.space);
	
				this.logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
				this.logo.scale.setTo(.8);
				this.logo.anchor.setTo(.5, .5);
	
				this.start = this.game.add.button(this.game.width / 2, this.game.height / 2 + 200, 'start', this.startClick, this);
				this.start.scale.setTo(.7);
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _objectsPlayer = __webpack_require__(5);
	
	var _objectsPlayer2 = _interopRequireDefault(_objectsPlayer);
	
	var _objectsSpace = __webpack_require__(6);
	
	var _objectsSpace2 = _interopRequireDefault(_objectsSpace);
	
	var _objectsBullet = __webpack_require__(9);
	
	var _objectsBullet2 = _interopRequireDefault(_objectsBullet);
	
	var _objectsEnemie = __webpack_require__(7);
	
	var _objectsEnemie2 = _interopRequireDefault(_objectsEnemie);
	
	var _objectsExplosie = __webpack_require__(10);
	
	var _objectsExplosie2 = _interopRequireDefault(_objectsExplosie);
	
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
	
				this.space = new _objectsSpace2['default'](this.game, -10, 0, this.game.width, this.game.height);
				this.game.add.existing(this.space);
				this.space.autoScroll(0, 200);
	
				this.player = new _objectsPlayer2['default'](this.game, this.game.width / 2, this.game.height - 100);
				this.game.add.existing(this.player);
				this.player.anchor.setTo(0.5, 0.5);
				this.game.physics.arcade.enable(this.player);
				this.player.body.collideWorldBounds = true;
	
				this.enemies = this.game.add.group();
				this.playerbullets = this.game.add.group();
				this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
				this.cursors = this.game.input.keyboard.createCursorKeys();
				this.key1.onDown.add(this.generatePlayerBullets, this);
	
				this.enemieGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateEnemies, this);
				this.enemieGenerator.timer.start();
	
				console.log('Play State');
			}
		}, {
			key: 'generateEnemies',
			value: function generateEnemies() {
				var enemieX = this.game.rnd.integerInRange(0, this.game.width);
	
				var enemie = new _objectsEnemie2['default'](this.game, enemieX, 0);
				this.enemies.add(enemie, true);
				enemie.reset(enemieX, 0);
				enemie.body.velocity.y = 100;
				//console.log(this.playerbullets.children);
	
				//enemie.y = 0;
				//enemie.x = enemieX;
			}
		}, {
			key: 'generatePlayerBullets',
			value: function generatePlayerBullets() {
	
				var bullet = new _objectsBullet2['default'](this.game, this.player.body.x + this.player.body.width / 2, this.player.body.y);
				bullet.body.velocity.y = -300;
				this.playerbullets.add(bullet, true);
	
				bullet.reset(this.player.body.x + this.player.body.width / 2, this.player.body.y);
	
				bullet.body.velocity.y = -300;
			}
		}, {
			key: 'update',
			value: function update() {
				var _this = this;
	
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
	
				this.playerbullets.forEach(function (playerbulletstest) {
	
					_this.enemies.forEach(function (enemiestest) {
	
						_this.game.physics.arcade.collide(enemiestest, playerbulletstest, _this.hitenemie, null, _this);
					});
				});
			}
		}, {
			key: 'hitenemie',
			value: function hitenemie(a, b) {
				this.makeExplosion(a.x, a.y, a.body.velocity.x, a.body.velocity.y);
				a.destroy();
				b.destroy();
				//test.children[0].kill();
			}
		}, {
			key: 'makeExplosion',
			value: function makeExplosion(x, y, velox, veloy) {
				//console.log(x);
				//console.log(y);
				//console.log(velox);
				//console.log(veloy);
	
				var explosie = new _objectsExplosie2['default'](this.game, x, y);
				this.game.add.existing(explosie);
				//explosie.body.velocity.y = veloy;
				//explosie.body.velocity.x = velox;
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Space = (function (_Phaser$TileSprite) {
	  _inherits(Space, _Phaser$TileSprite);
	
	  function Space(game, x, y, width, height) {
	    _classCallCheck(this, Space);
	
	    _get(Object.getPrototypeOf(Space.prototype), 'constructor', this).call(this, game, x, y, width, height, 'space');
	
	    this.game.physics.arcade.enableBody(this);
	
	    this.animations.add('sparkle');
	    this.animations.play('sparkle', 1, true);
	
	    this.body.allowGravity = false;
	    this.body.immovable = true;
	  }
	
	  return Space;
	})(Phaser.TileSprite);
	
	exports['default'] = Space;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Enemie = (function (_Phaser$Sprite) {
		_inherits(Enemie, _Phaser$Sprite);
	
		function Enemie(game, x, y, frame) {
			_classCallCheck(this, Enemie);
	
			_get(Object.getPrototypeOf(Enemie.prototype), 'constructor', this).call(this, game, x, y, 'enemie', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(Enemie, [{
			key: 'reset',
			value: function reset(x, y) {
				console.log('test');
				//this.reset(0, 0);
				this.body.velocity.y = 100;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'kill',
			value: function kill() {
				//this.destroy();
	
			}
		}, {
			key: 'update',
			value: function update() {
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
			}
		}]);
	
		return Enemie;
	})(Phaser.Sprite);
	
	exports['default'] = Enemie;
	module.exports = exports['default'];

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bullet = (function (_Phaser$Sprite) {
		_inherits(Bullet, _Phaser$Sprite);
	
		function Bullet(game, x, y, frame) {
			_classCallCheck(this, Bullet);
	
			_get(Object.getPrototypeOf(Bullet.prototype), 'constructor', this).call(this, game, x, y, 'bullet', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
	
			//this.body.velocity.y = -300;
		}
	
		_createClass(Bullet, [{
			key: 'reset',
			value: function reset(x, y) {
				//this.reset(0, 0);
				this.body.velocity.y = -300;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'update',
			value: function update() {
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
			}
		}]);
	
		return Bullet;
	})(Phaser.Sprite);
	
	exports['default'] = Bullet;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Explosie = (function (_Phaser$Sprite) {
		_inherits(Explosie, _Phaser$Sprite);
	
		function Explosie(game, x, y, frame) {
			_classCallCheck(this, Explosie);
	
			_get(Object.getPrototypeOf(Explosie.prototype), 'constructor', this).call(this, game, x, y, 'explosie', frame);
	
			this.animations.add('boem');
			this.animations.play('boem', 12, false, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			//this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(Explosie, [{
			key: 'reset',
			value: function reset(x, y) {
				console.log('test');
				//this.reset(0, 0);
				this.body.velocity.y = 100;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'update',
			value: function update() {
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
			}
		}]);
	
		return Explosie;
	})(Phaser.Sprite);
	
	exports['default'] = Explosie;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map