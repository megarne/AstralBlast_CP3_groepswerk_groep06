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
	
	var _classesStatesPlay = __webpack_require__(5);
	
	var _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);
	
	var _classesStatesGameover = __webpack_require__(20);
	
	var _classesStatesGameover2 = _interopRequireDefault(_classesStatesGameover);
	
	var game = undefined;
	
	var init = function init() {
	
		game = new Phaser.Game(800, 600, Phaser.AUTO);
		game.state.add('Boot', _classesStatesBoot2['default'], true);
		game.state.add('Preload', _classesStatesPreload2['default'], false);
		game.state.add('Menu', _classesStatesMenu2['default'], false);
		game.state.add('Play', _classesStatesPlay2['default'], false);
		game.state.add('Gameover', _classesStatesGameover2['default'], false);
		// $(".hidden").hide();
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
				this.load.spritesheet('enemiebullet', 'assets/enemiebullet.png', 11, 20, 3);
				this.load.spritesheet('explosie', 'assets/boem.png', 100, 100, 8);
				this.load.spritesheet('bigenemie', 'assets/bigenemie.png', 100, 100, 3);
				this.load.spritesheet('space', 'assets/space.png', 160, 160, 3);
				this.load.spritesheet('spreadpower', 'assets/spreadpower.png', 30, 30, 3);
				this.load.spritesheet('deathlaser_power', 'assets/deathlaser_power.png', 58, 60, 3);
				this.load.spritesheet('soundmuter', 'assets/soundmuter.png', 50, 50, 2);
				this.load.spritesheet('loadingEvilLaser', 'assets/loadingevillaser.png', 210, 90, 4);
				this.load.spritesheet('meteor', 'assets/meteor.png', 445 / 3, 50, 3);
				this.load.spritesheet('thunder', 'assets/thunder.png', 126 / 3, 97, 3);
				this.load.spritesheet('pikachu', 'assets/pikachu.png', 542 / 6, 84, 6);
	
				this.load.bitmapFont('gem', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');
	
				this.load.image('logo', 'assets/logo.png');
				this.load.image('start', 'assets/start.png');
				this.load.image('menu', 'assets/menu.png');
				this.load.image('restartbtn', 'assets/restart.png');
				this.load.image('keyboardspace', 'assets/keyboard_space.png');
				this.load.image('keyboardbutton', 'assets/keyboard_button.png');
				this.load.image('keyboardmovement', 'assets/keyboard_movement.png');
				this.load.image('evilLaserPattern', 'assets/evillaserpattern.png');
	
				this.load.image('deathlaser', 'assets/laser.png');
	
				this.load.audio('bigdeathSound', 'assets/sounds/bigdeath.wav');
				this.load.audio('laserSound', 'assets/sounds/laser.wav');
				this.load.audio('musicSound', 'assets/sounds/music.wav');
				this.load.audio('powerupSound', 'assets/sounds/powerup.wav');
				this.load.audio('shootSound', 'assets/sounds/shoot.wav');
	
				this.load.audio('pikachuDeathSound', 'assets/sounds/pikadeath.wav');
				this.load.audio('pikachuSound', 'assets/sounds/pikachu.wav');
	
				this.load.audio('smalldeathSound', 'assets/sounds/smalldeath.wav');
				this.load.audio('evillaserSound', 'assets/sounds/evillaser.wav');
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
	
	var _objectsSpace = __webpack_require__(4);
	
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
	
				this.uitleg = this.game.add.group();
	
				this.space = this.game.add.sprite(10, 45, 'keyboardspace');
				this.uitleg.add(this.space, true);
	
				this.up = this.game.add.sprite(115, 10, 'keyboardmovement');
				this.uitleg.add(this.up, true);
	
				this.specialbtn = this.game.add.sprite(10, 10, 'keyboardbutton');
				this.uitleg.add(this.specialbtn, true);
	
				this.uitleg.y = 500;
	
				this.moveText = this.game.add.bitmapText(135, 70, 'gem', "MOVEMENT", 16);
				this.uitleg.add(this.moveText, true);
				this.spaceText = this.game.add.bitmapText(35, 48, 'gem', "SPACE", 16);
				this.uitleg.add(this.spaceText, true);
				this.shootText = this.game.add.bitmapText(35, 70, 'gem', "SHOOT", 16);
				this.uitleg.add(this.shootText, true);
				this.specialTextlang = this.game.add.bitmapText(40, 16, 'gem', "SPECIAL", 16);
				this.uitleg.add(this.specialTextlang, true);
				this.specialTextlang = this.game.add.bitmapText(20, 15, 'gem', "S", 16);
				this.uitleg.add(this.specialTextlang, true);
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
/* 5 */
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
	
	var _objectsPlayer = __webpack_require__(6);
	
	var _objectsPlayer2 = _interopRequireDefault(_objectsPlayer);
	
	var _objectsSpace = __webpack_require__(4);
	
	var _objectsSpace2 = _interopRequireDefault(_objectsSpace);
	
	var _objectsBulletsBullet = __webpack_require__(7);
	
	var _objectsBulletsBullet2 = _interopRequireDefault(_objectsBulletsBullet);
	
	var _objectsBulletsEnemieBullet = __webpack_require__(8);
	
	var _objectsBulletsEnemieBullet2 = _interopRequireDefault(_objectsBulletsEnemieBullet);
	
	var _objectsEnemiesEnemie = __webpack_require__(9);
	
	var _objectsEnemiesEnemie2 = _interopRequireDefault(_objectsEnemiesEnemie);
	
	var _objectsEnemiesBigEnemie = __webpack_require__(10);
	
	var _objectsEnemiesBigEnemie2 = _interopRequireDefault(_objectsEnemiesBigEnemie);
	
	var _objectsExplosie = __webpack_require__(11);
	
	var _objectsExplosie2 = _interopRequireDefault(_objectsExplosie);
	
	var _objectsPowerupSpreadpower = __webpack_require__(12);
	
	var _objectsPowerupSpreadpower2 = _interopRequireDefault(_objectsPowerupSpreadpower);
	
	var _objectsPowerupDeathlaser = __webpack_require__(13);
	
	var _objectsPowerupDeathlaser2 = _interopRequireDefault(_objectsPowerupDeathlaser);
	
	var _objectsBulletsDeathlaser = __webpack_require__(14);
	
	var _objectsBulletsDeathlaser2 = _interopRequireDefault(_objectsBulletsDeathlaser);
	
	var _objectsEnemiesEvilLaser = __webpack_require__(15);
	
	var _objectsEnemiesEvilLaser2 = _interopRequireDefault(_objectsEnemiesEvilLaser);
	
	var _objectsEnemiesMeteor = __webpack_require__(17);
	
	var _objectsEnemiesMeteor2 = _interopRequireDefault(_objectsEnemiesMeteor);
	
	var _objectsEnemiesPikachu = __webpack_require__(18);
	
	var _objectsEnemiesPikachu2 = _interopRequireDefault(_objectsEnemiesPikachu);
	
	var _objectsBulletsThunder = __webpack_require__(19);
	
	var _objectsBulletsThunder2 = _interopRequireDefault(_objectsBulletsThunder);
	
	var Play = (function (_Phaser$State) {
		_inherits(Play, _Phaser$State);
	
		function Play() {
			_classCallCheck(this, Play);
	
			_get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Play, [{
			key: 'create',
			value: function create() {
				var _this = this;
	
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
				this.space = new _objectsSpace2['default'](this.game, -10, 0, this.game.width, this.game.height);
				this.game.add.existing(this.space);
				this.space.autoScroll(0, 200);
	
				this.player = new _objectsPlayer2['default'](this.game, this.game.width / 2, this.game.height - 100);
				this.game.add.existing(this.player);
				this.player.anchor.setTo(0.5, 0.5);
				this.game.physics.arcade.enable(this.player);
				this.player.body.collideWorldBounds = true;
	
				this.speedPlayer = 300;
	
				this.muteSoundBtn = this.game.add.button(this.game.width - 30, this.game.height - 30, 'soundmuter', this.muteSPlayound, this);
				this.muteSoundBtn.alpha = 0.5;
				this.muteSoundBtn.scale.setTo(.5);
				//did op false zetten om alle geluid uit te zetten
				this.sound.mute = true;
				if (this.sound.mute) {
					this.muteSoundBtn.frame = 1;
				} else {
					this.muteSoundBtn.frame = 0;
				}
	
				this.gun = "spread";
				this.aantalshots = 3;
				this.spread = 10;
				this.aantalspecials = 0;
	
				this.enemies = this.game.add.group();
				this.lasers = this.game.add.group();
				this.playerbullets = this.game.add.group();
				this.playerlasers = this.game.add.group();
				this.spreadpowerups = this.game.add.group();
				this.enemiebullets = this.game.add.group();
				this.deathlaserpowerups = this.game.add.group();
				this.meteors = this.game.add.group();
	
				this.gameMusic = this.game.add.audio('musicSound');
				this.gameMusic.play();
				this.gameMusic.loopFull(1);
	
				this.shootSound = this.game.add.audio('shootSound');
				this.powerupSound = this.game.add.audio('powerupSound');
				this.laserSound = this.game.add.audio('laserSound');
				this.powerupSound = this.game.add.audio('powerupSound');
				//this.sound.mute = true;
	
				this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				this.special = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
	
				this.cursors = this.game.input.keyboard.createCursorKeys();
				this.key1.onDown.add(this.generatePlayerBullets, this);
	
				// this.cursors = this.game.input.keyboard.createCursorKeys();
				//this.special.onDown.add(this.launchLaser, this);
	
				this.enemieGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.secondLoop, this);
				this.enemieGenerator.timer.start();
	
				this.score = 0;
				this.scoreText = this.game.add.bitmapText(this.game.width - 20, 50, 'gem', "score: " + this.score.toString(), 30);
				this.scoreText.anchor.setTo(1, 1);
	
				this.lives = this.player.lives;
				this.livesText = this.game.add.bitmapText(20, 50, 'gem', "lives: " + this.lives.toString(), 30);
				this.livesText.anchor.setTo(0, 1);
	
				this.laserText = this.game.add.bitmapText(10, this.game.height - 20, 'gem', "NO SPECIAL", 20);
				this.laserText.anchor.setTo(0, 1);
	
				console.log('Play State');
	
				this.teller = 0;
	
				this.knopRechts = document.querySelector('.rechts');
				this.knopRechtsvalue = false;
				this.knopRechts.addEventListener('mousedown', function (e) {
	
					_this.knopRechtsvalue = true;
				});
				this.knopRechts.addEventListener('mouseup', function (e) {
					_this.knopRechtsvalue = false;
				});
	
				this.knopLinks = document.querySelector('.links');
				this.knopLinksvalue = false;
				this.knopLinks.addEventListener('mousedown', function (e) {
					_this.knopLinksvalue = true;
				});
				this.knopLinks.addEventListener('mouseup', function (e) {
					_this.knopLinksvalue = false;
				});
	
				this.knopBoven = document.querySelector('.boven');
				this.knopBovenvalue = false;
				this.knopBoven.addEventListener('mousedown', function (e) {
					_this.knopBovenvalue = true;
				});
				this.knopBoven.addEventListener('mouseup', function (e) {
					_this.knopBovenvalue = false;
				});
	
				this.knopOnder = document.querySelector('.onder');
				this.knopOndervalue = false;
				this.knopOnder.addEventListener('mousedown', function (e) {
					_this.knopOndervalue = true;
				});
				this.knopOnder.addEventListener('mouseup', function (e) {
					_this.knopOndervalue = false;
				});
	
				this.knopShoot = document.querySelector('.shoot');
				this.knopShoot.addEventListener('mousedown', function (e) {
	
					_this.generatePlayerBullets();
				});
	
				this.knopSpecial = document.querySelector('.special');
				this.knopSpecial.addEventListener('mousedown', function (e) {
	
					if (_this.aantalspecials > 0) {
						_this.launchLaser();
					}
				});
	
				//this.knopRechts.addEventListener('mousedown', this.beweegrechts(this.player));
			}
		}, {
			key: 'laserReady',
			value: function laserReady(a, b) {
				a.destroy();
				this.powerupSound.play();
				this.aantalspecials++;
				if (this.aantalspecials > 0) {
					this.special.onDown.add(this.launchLaser, this);
				}
				if (this.aantalspecials == 1) {
					this.laserText.text = this.aantalspecials + " DEATHLASER";
				} else if (this.aantalspecials > 1) {
					this.laserText.text = this.aantalspecials + " DEATHLASERS";
				}
			}
		}, {
			key: 'muteSPlayound',
			value: function muteSPlayound() {
				if (this.sound.mute) {
	
					this.sound.mute = false;
					this.muteSoundBtn.frame = 0;
				} else {
					this.sound.mute = true;
					this.muteSoundBtn.frame = 1;
				}
			}
		}, {
			key: 'launchLaser',
			value: function launchLaser() {
	
				if (this.aantalspecials == 0) {
					this.laserText.text = "NO SPECIAL";
				} else if (this.aantalspecials == 1) {
					this.laserSound.play();
	
					this.aantalspecials = 0;
					this.laserText.text = "NO SPECIAL";
					var laser = new _objectsBulletsDeathlaser2['default'](this.game, this.game.width / 2, this.player.body.y, 800, 6);
					this.playerlasers.add(laser, true);
					laser.body.immovable = true;
					laser.reset(this.game.width / 2, this.player.body.y);
					laser.body.velocity.y = -300;
				} else if (this.aantalspecials > 1) {
					this.laserSound.play();
					this.aantalspecials = this.aantalspecials - 1;
					this.laserText.text = this.aantalspecials + " DEATHLASERS";
	
					var laser = new _objectsBulletsDeathlaser2['default'](this.game, this.game.width / 2, this.player.body.y, 800, 6);
					this.playerlasers.add(laser, true);
					laser.body.immovable = true;
					laser.reset(this.game.width / 2, this.player.body.y);
					laser.body.velocity.y = -300;
				}
			}
		}, {
			key: 'secondLoop',
			value: function secondLoop() {
				this.teller++;
				this.generateEnemies();
	
				if (this.teller % 5 === 0 && this.aantalshots > 6) {
					this.generateBigEnemies();
				}
	
				if ((this.teller + 2) % 5 === 0 && this.aantalshots > 10) {
					this.createEvilLaser();
				}
	
				if (this.teller % 6 === 0 && this.score > 1000) {
					this.createMeteor();
				}
	
				if ((this.teller + 3) % 6 === 0 && this.score > 2000) {
					this.createPikachu();
				}
				this.updateScore(10);
				this.checkShoot();
			}
		}, {
			key: 'createPikachu',
			value: function createPikachu() {
				var enemieX = this.game.rnd.integerInRange(50, this.game.width - 50);
				var pikachu = new _objectsEnemiesPikachu2['default'](this.game, enemieX, 300);
				this.enemies.add(pikachu, true);
				pikachu.reset(enemieX, 0);
			}
		}, {
			key: 'createEvilLaser',
			value: function createEvilLaser() {
				this.evillaser = new _objectsEnemiesEvilLaser2['default'](this.game, this.lasers);
				this.evillaser.x = this.player.x;
			}
		}, {
			key: 'updateScore',
			value: function updateScore(value) {
				this.score = this.score + value;
				this.scoreText.text = "score: " + this.score.toString();
			}
		}, {
			key: 'createMeteor',
			value: function createMeteor() {
				var meteorY = this.game.rnd.integerInRange(100, this.game.height - 200);
				var meteor = new _objectsEnemiesMeteor2['default'](this.game, this.game.width, meteorY);
				meteor.body.velocity.x = -200;
				this.meteors.add(meteor, true);
	
				meteor.reset(this.game.width, meteorY);
			}
		}, {
			key: 'generateBigEnemies',
			value: function generateBigEnemies() {
	
				var enemieX = this.game.rnd.integerInRange(100, this.game.width - 100);
	
				var enemie = new _objectsEnemiesBigEnemie2['default'](this.game, enemieX, 0);
				this.enemies.add(enemie, true);
				enemie.reset(enemieX, 0);
			}
		}, {
			key: 'checkShoot',
			value: function checkShoot() {
				var _this2 = this;
	
				this.enemies.forEach(function (enemiestest) {
					if (enemiestest.key == "bigenemie") {
						_this2.enemieShoot(enemiestest.x - enemiestest.width, enemiestest.y);
						_this2.enemieShoot(enemiestest.x, enemiestest.y);
					}
					if (enemiestest.key == "pikachu") {
						//console.log(enemiestest.x,enemiestest.y);
						_this2.schootThunder(enemiestest.x, enemiestest.y);
					}
				});
			}
		}, {
			key: 'schootThunder',
			value: function schootThunder(x, y) {
				var bullet = new _objectsBulletsThunder2['default'](this.game, x, y);
				this.enemiebullets.add(bullet, true);
				bullet.reset(x, y);
				bullet.body.velocity.y = -(y - this.player.y) / 2;
				bullet.body.velocity.x = -(x - this.player.x) / 2;
	
				var angle = Math.atan2(bullet.body.velocity.y, bullet.body.velocity.x) - Math.PI / 2;
				console.log(angle);
				bullet.rotation = angle;
			}
		}, {
			key: 'enemieShoot',
			value: function enemieShoot(x, y) {
				var randomspread = this.game.rnd.realInRange(-this.spread, this.spread);
	
				var bullet = new _objectsBulletsEnemieBullet2['default'](this.game, x, y);
				this.enemiebullets.add(bullet, true);
				bullet.reset(x, y);
				bullet.body.velocity.y = 300;
				bullet.body.velocity.x = randomspread;
			}
		}, {
			key: 'generateEnemies',
			value: function generateEnemies() {
				var enemieX = this.game.rnd.integerInRange(38, this.game.width - 38);
	
				var enemie = new _objectsEnemiesEnemie2['default'](this.game, enemieX, 0);
				this.enemies.add(enemie, true);
				enemie.reset(enemieX, 0);
			}
		}, {
			key: 'generatePlayerBullets',
			value: function generatePlayerBullets() {
				switch (this.gun) {
					case "default":
						var bullet = new _objectsBulletsBullet2['default'](this.game, this.player.body.x + this.player.body.width / 2, this.player.body.y);
						this.playerbullets.add(bullet, true);
						bullet.reset(this.player.body.x + this.player.body.width / 2, this.player.body.y);
						bullet.body.velocity.y = -300;
						break;
	
					case "spread":
	
						for (var i = 0; i < this.aantalshots; i++) {
	
							var randomspread = this.game.rnd.realInRange(-this.spread, this.spread);
	
							var bullet = new _objectsBulletsBullet2['default'](this.game, this.player.body.x + this.player.body.width / 2, this.player.body.y);
							this.playerbullets.add(bullet, true);
							bullet.reset(this.player.body.x + this.player.body.width / 2, this.player.body.y);
							//bullet.body.velocity.y = -300+Math.abs(randomspread);
							//bullet.body.velocity.x = (i-(this.aantalshots/2-1))*25 + randomspread;
							//bullet.rotation = randomspread*360/Math.PI;
	
							bullet.body.velocity.y = -300 + Math.abs(i - (this.aantalshots / 2 - 1)) * 3;
							bullet.body.velocity.x = (i - (this.aantalshots / 2 - 1)) * 25 + randomspread;
						}
						this.shootSound.play();
						break;
	
				}
			}
		}, {
			key: 'beweegrechts',
			value: function beweegrechts(player) {
				player.body.velocity.x = this.speedPlayer;
			}
		}, {
			key: 'update',
			value: function update() {
				var _this3 = this;
	
				//console.log(this.knopRechtsvalue);
				if (this.player.body) {
					this.player.body.velocity.x = 0;
					this.player.body.velocity.y = 0;
	
					if (this.cursors.left.isDown || this.knopLinksvalue) {
						this.player.body.velocity.x = -this.speedPlayer;
						//this.player.rotation = Math.PI*1.5;
					}
	
					if (this.cursors.right.isDown || this.knopRechtsvalue) {
						this.player.body.velocity.x = this.speedPlayer;
						//this.player.rotation = Math.PI*0.5;
					}
	
					if (this.cursors.up.isDown || this.knopBovenvalue) {
						this.player.body.velocity.y = -this.speedPlayer;
						//this.player.rotation = Math.PI*0;
					}
	
					if (this.cursors.down.isDown || this.knopOndervalue) {
						this.player.body.velocity.y = this.speedPlayer;
						//this.player.rotation = Math.PI;
					}
	
					this.playerbullets.forEach(function (playerbulletstest) {
	
						_this3.enemies.forEach(function (enemiestest) {
	
							_this3.game.physics.arcade.collide(enemiestest, playerbulletstest, _this3.hitenemie, null, _this3);
						});
	
						_this3.meteors.forEach(function (meteortest) {
	
							_this3.game.physics.arcade.collide(meteortest, playerbulletstest, _this3.hitmeteor, null, _this3);
						});
					});
	
					this.playerlasers.forEach(function (playerlaserstest) {
	
						_this3.enemies.forEach(function (enemiestest) {
	
							_this3.game.physics.arcade.collide(enemiestest, playerlaserstest, _this3.hitenemiewithlaser, null, _this3);
						});
					});
	
					this.enemies.forEach(function (enemiestest) {
	
						_this3.game.physics.arcade.collide(enemiestest, _this3.player, _this3.hitplayer, null, _this3);
					});
	
					this.enemiebullets.forEach(function (bulletstest) {
	
						_this3.game.physics.arcade.collide(bulletstest, _this3.player, _this3.hitplayer, null, _this3);
					});
	
					this.spreadpowerups.forEach(function (powerup) {
	
						_this3.game.physics.arcade.collide(powerup, _this3.player, _this3.hitspreadpower, null, _this3);
					});
	
					this.deathlaserpowerups.forEach(function (powerup) {
	
						_this3.game.physics.arcade.collide(powerup, _this3.player, _this3.laserReady, null, _this3);
					});
	
					this.lasers.forEach(function (laser) {
	
						_this3.game.physics.arcade.collide(laser, _this3.player, _this3.laserkill, null, _this3);
					});
				};
			}
		}, {
			key: 'hitmeteor',
			value: function hitmeteor(a, b) {
				a.kill();
				b.kill();
			}
		}, {
			key: 'laserkill',
			value: function laserkill(a, b) {
				b.kill();
				if (this.player.alpha == 1) {
					a.kill();
	
					this.lives = this.player.lives;
					this.livesText.text = "lives: " + this.lives.toString();
					if (this.lives == 0) {
						this.playerDeath();
					}
				}
			}
		}, {
			key: 'hitenemie',
			value: function hitenemie(a, b) {
				this.updateScore(a.points);
	
				a.kill();
				b.kill();
	
				if (a.lives == 0) {
					this.makeExplosion(a.x, a.y);
					var chancepowerup = this.game.rnd.integerInRange(1, 10);
					if (chancepowerup == 1) {
						if (this.aantalshots <= 30) {
							this.powerupspreadcreate(a.x, a.y);
						};
					} else if (chancepowerup == 2) {
						this.poweruplasercreate(a.x, a.y);
					};
				}
			}
		}, {
			key: 'hitenemiewithlaser',
			value: function hitenemiewithlaser(a, b) {
				this.updateScore(5);
	
				a.kill();
	
				if (a.lives == 0) {
					this.makeExplosion(a.x, a.y);
					var chancepowerup = this.game.rnd.integerInRange(1, 10);
	
					if (chancepowerup == 1) {
						this.powerupspreadcreate(a.x, a.y);
					}
				}
			}
		}, {
			key: 'hitspreadpower',
			value: function hitspreadpower(a, b) {
				this.powerupSound.play();
				a.destroy();
				this.aantalshots = this.aantalshots + 2;
			}
		}, {
			key: 'powerupspreadcreate',
			value: function powerupspreadcreate(x, y) {
				var spreadpower = new _objectsPowerupSpreadpower2['default'](this.game, x, y);
				this.spreadpowerups.add(spreadpower, true);
				spreadpower.reset(x, y);
				spreadpower.body.velocity.y = 50;
			}
		}, {
			key: 'poweruplasercreate',
			value: function poweruplasercreate(x, y) {
				var deathlaser = new _objectsPowerupDeathlaser2['default'](this.game, x, y);
				this.deathlaserpowerups.add(deathlaser, true);
				deathlaser.reset(x, y);
				deathlaser.body.velocity.y = 50;
			}
		}, {
			key: 'hitplayer',
			value: function hitplayer(a, b) {
				this.makeExplosion(a.x, a.y);
	
				a.destroy();
	
				if (this.player.alpha == 1) {
					b.kill();
	
					this.lives = this.player.lives;
					this.livesText.text = "lives: " + this.lives.toString();
					if (this.lives == 0) {
						this.playerDeath();
					}
				}
			}
		}, {
			key: 'makeExplosion',
			value: function makeExplosion(x, y) {
	
				var explosie = new _objectsExplosie2['default'](this.game, x, y);
				this.game.add.existing(explosie);
			}
		}, {
			key: 'playerDeath',
			value: function playerDeath() {
				this.gameMusic.stop();
				this.enemies.destroy();
				this.playerbullets.destroy();
				this.meteors.destroy();
				this.playerlasers.destroy();
				this.enemiebullets.destroy();
				this.spreadpowerups.destroy();
				this.deathlaserpowerups.destroy();
				this.lasers.destroy();
				// this.enemieGenerator.timer.stop();
				this.special = this.game.input.keyboard.removeKey(Phaser.Keyboard.S);
				this.game.state.start('Gameover', false, false, this.score);
			}
		}]);
	
		return Play;
	})(Phaser.State);
	
	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
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
			this.lives = 3;
		}
	
		_createClass(Player, [{
			key: 'kill',
			value: function kill() {
	
				this.alpha = 0;
				this.lives--;
				if (this.lives == 0) {
					this.destroy();
				}
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.alpha < 1) {
					this.alpha = this.alpha + 0.025;
				} else {
					this.alpha = 1;
				}
			}
		}]);
	
		return Player;
	})(Phaser.Sprite);
	
	exports['default'] = Player;
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
			key: 'kill',
			value: function kill() {
				this.destroy();
			}
		}, {
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
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EnemieBullet = (function (_Phaser$Sprite) {
		_inherits(EnemieBullet, _Phaser$Sprite);
	
		function EnemieBullet(game, x, y, frame) {
			_classCallCheck(this, EnemieBullet);
	
			_get(Object.getPrototypeOf(EnemieBullet.prototype), 'constructor', this).call(this, game, x, y, 'enemiebullet', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(EnemieBullet, [{
			key: 'kill',
			value: function kill() {
				this.destroy();
			}
		}, {
			key: 'reset',
			value: function reset(x, y) {
	
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
	
		return EnemieBullet;
	})(Phaser.Sprite);
	
	exports['default'] = EnemieBullet;
	module.exports = exports['default'];

/***/ },
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
	
	var Enemie = (function (_Phaser$Sprite) {
		_inherits(Enemie, _Phaser$Sprite);
	
		function Enemie(game, x, y, frame) {
			_classCallCheck(this, Enemie);
	
			_get(Object.getPrototypeOf(Enemie.prototype), 'constructor', this).call(this, game, x, y, 'enemie', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
			this.alive = true;
			this.points = 5;
			this.lives = 3;
			this.deathSound = this.game.add.audio('smalldeathSound');
		}
	
		_createClass(Enemie, [{
			key: 'reset',
			value: function reset(x, y) {
	
				this.body.velocity.y = 100;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'kill',
			value: function kill() {
				this.body.velocity.y = 100;
				this.body.velocity.x = 0;
				this.alpha = 0;
				this.lives--;
				if (this.lives == 0) {
					this.deathSound.play();
					this.destroy();
				}
			}
		}, {
			key: 'killWithLaser',
			value: function killWithLaser() {
				this.body.velocity.y = 100;
				this.body.velocity.x = 0;
				this.alpha = 0;
				this.lives - 3;
				if (this.lives == 0) {
					this.destroy();
				}
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.alpha < 1) {
					this.alpha = this.alpha + 0.05;
				}
	
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
	
	var BigEnemie = (function (_Phaser$Sprite) {
		_inherits(BigEnemie, _Phaser$Sprite);
	
		function BigEnemie(game, x, y, frame) {
			_classCallCheck(this, BigEnemie);
	
			_get(Object.getPrototypeOf(BigEnemie.prototype), 'constructor', this).call(this, game, x, y, 'bigenemie', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(1, 0.5);
	
			this.game.physics.arcade.enableBody(this);
			this.alive = true;
			this.lives = 10;
	
			this.speedy = 20;
			this.speedx = 30;
			this.points = 15;
	
			this.deathSound = this.game.add.audio('bigdeathSound');
		}
	
		_createClass(BigEnemie, [{
			key: 'reset',
			value: function reset(x, y) {
	
				this.body.velocity.y = this.speedy;
				this.body.velocity.x = this.speedx;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'kill',
			value: function kill() {
				this.body.velocity.y = this.speedy;
				this.body.velocity.x = this.speedx;
				this.alpha = 0;
				this.lives--;
				if (this.lives == 0) {
					this.deathSound.play();
					this.destroy();
				}
			}
		}, {
			key: 'killWithLaser',
			value: function killWithLaser() {
				this.body.velocity.y = this.speedy;
				this.body.velocity.x = this.speedx;
				this.alpha = 0;
				this.lives - 3;
				if (this.lives == 0) {
					this.destroy();
				}
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.alpha < 1) {
					this.alpha = this.alpha + 0.05;
				}
	
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
	
				if (this.body) {
					if (this.body.x >= 700) {
						this.speedx = -this.speedx;
						this.body.velocity.x = this.speedx;
					}
	
					if (this.body.x <= 0) {
						this.speedx = -this.speedx;
						this.body.velocity.x = this.speedx;
					}
				}
			}
		}]);
	
		return BigEnemie;
	})(Phaser.Sprite);
	
	exports['default'] = BigEnemie;
	module.exports = exports['default'];

/***/ },
/* 11 */
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

/***/ },
/* 12 */
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
	
			_get(Object.getPrototypeOf(Explosie.prototype), 'constructor', this).call(this, game, x, y, 'spreadpower', frame);
	
			this.animations.add('flikker');
			this.animations.play('flikker', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(Explosie, [{
			key: 'reset',
			value: function reset(x, y) {
				this.body.velocity.y = 50;
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

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Deathlaser = (function (_Phaser$Sprite) {
		_inherits(Deathlaser, _Phaser$Sprite);
	
		function Deathlaser(game, x, y, frame) {
			_classCallCheck(this, Deathlaser);
	
			_get(Object.getPrototypeOf(Deathlaser.prototype), 'constructor', this).call(this, game, x, y, 'deathlaser_power', frame);
	
			this.animations.add('flikker');
			this.animations.play('flikker', 12, true);
			this.scale.setTo(.5);
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(Deathlaser, [{
			key: 'reset',
			value: function reset(x, y) {
				this.body.velocity.y = 50;
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
	
		return Deathlaser;
	})(Phaser.Sprite);
	
	exports['default'] = Deathlaser;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	// export default class Deathlaser extends Phaser.Sprite {
	// 	constructor(game, x, y, frame) {
	// 		super(game, x, y, 'deathlaser', frame);
	// 		// this.autoScroll(-200,0);
	
	// 		this.animations.add('flikker');
	// 		this.animations.play('flikker', 12, true);
	
	// 		this.anchor.setTo(0.5, 0.5);
	
	// 		this.game.physics.arcade.enableBody(this);
	
	// 	}
	// 	reset(x,y){
	// 		this.body.velocity.y = 50;
	// 		this.x = x;
	// 		this.y = y;
	// 		this.exists = true;
	// 		this.hasScored = false;
	// 	}
	
	// 	update(){
	// 		if(!this.inWorld) {
	// 			this.exists = false;
	// 			this.destroy();
	// 		}
	// 	}
	// }
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Deathlaser = (function (_Phaser$TileSprite) {
		_inherits(Deathlaser, _Phaser$TileSprite);
	
		function Deathlaser(game, x, y, width, height) {
			_classCallCheck(this, Deathlaser);
	
			_get(Object.getPrototypeOf(Deathlaser.prototype), 'constructor', this).call(this, game, x, y, width, height, 'deathlaser');
			this.autoScroll(-400, 0);
	
			// this.animations.add('flikker');
			// this.animations.play('flikker', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
		}
	
		_createClass(Deathlaser, [{
			key: 'reset',
			value: function reset(x, y) {
				this.body.velocity.y = 50;
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
	
		return Deathlaser;
	})(Phaser.TileSprite);
	
	exports['default'] = Deathlaser;
	module.exports = exports['default'];

/***/ },
/* 15 */
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
	
	var _evilsalerpartsLoadingEvilLaser = __webpack_require__(16);
	
	var _evilsalerpartsLoadingEvilLaser2 = _interopRequireDefault(_evilsalerpartsLoadingEvilLaser);
	
	var EvilLaser = (function (_Phaser$Group) {
		_inherits(EvilLaser, _Phaser$Group);
	
		function EvilLaser(game, parent) {
			_classCallCheck(this, EvilLaser);
	
			_get(Object.getPrototypeOf(EvilLaser.prototype), 'constructor', this).call(this, game, parent);
			//this.anchor.setTo(1, 0.5);
			this.loading = new _evilsalerpartsLoadingEvilLaser2['default'](this.game, 0, 0, 100);
			this.add(this.loading);
			this.teller = 0;
			this.game.physics.arcade.enableBody(this);
			this.evillaserSound = this.game.add.audio('evillaserSound');
		}
	
		_createClass(EvilLaser, [{
			key: 'kill',
			value: function kill() {
				this.destroy();
			}
		}, {
			key: 'update',
			value: function update() {
				this.teller++;
	
				if (this.teller < 299) {
					this.loading.scale.setTo(this.teller / 450, this.teller / 450);
				} else if (this.teller == 300) {
					this.evillaserSound.play();
					this.laser = this.game.add.tileSprite(0, -5000, 50, 5000, 'evilLaserPattern');
					this.add(this.laser, true);
					this.game.physics.arcade.enableBody(this.laser);
					this.laser.body.velocity.y = 2500;
					this.laser.autoScroll(0, -2200);
					this.laser.anchor.setTo(0.5, 0);
				} else if (this.teller < 399) {
					//this.destroy();
				} else if (this.teller == 400) {
						this.destroy();
					}
			}
		}]);
	
		return EvilLaser;
	})(Phaser.Group);
	
	exports['default'] = EvilLaser;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var loadingEvilLaser = (function (_Phaser$Sprite) {
		_inherits(loadingEvilLaser, _Phaser$Sprite);
	
		function loadingEvilLaser(game, x, y, frame) {
			_classCallCheck(this, loadingEvilLaser);
	
			_get(Object.getPrototypeOf(loadingEvilLaser.prototype), 'constructor', this).call(this, game, x, y, 'loadingEvilLaser', frame);
			this.anchor.setTo(0.5, 0);
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
			this.game.physics.arcade.enableBody(this);
		}
	
		return loadingEvilLaser;
	})(Phaser.Sprite);
	
	exports['default'] = loadingEvilLaser;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Meteor = (function (_Phaser$Sprite) {
		_inherits(Meteor, _Phaser$Sprite);
	
		function Meteor(game, x, y, frame) {
			_classCallCheck(this, Meteor);
	
			_get(Object.getPrototypeOf(Meteor.prototype), 'constructor', this).call(this, game, x, y, 'meteor', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
			this.alive = true;
			this.lives = 100000;
	
			this.body.immovable = true;
		}
	
		_createClass(Meteor, [{
			key: 'reset',
			value: function reset(x, y) {
				// this.body.velocity.x = -200;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'kill',
			value: function kill() {
				this.body.velocity.x = -200;
				this.body.velocity.y = 0;
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.alpha < 1) {
					this.alpha = this.alpha + 0.05;
				}
	
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
			}
		}]);
	
		return Meteor;
	})(Phaser.Sprite);
	
	exports['default'] = Meteor;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pikachu = (function (_Phaser$Sprite) {
		_inherits(Pikachu, _Phaser$Sprite);
	
		function Pikachu(game, x, y, frame) {
			_classCallCheck(this, Pikachu);
	
			_get(Object.getPrototypeOf(Pikachu.prototype), 'constructor', this).call(this, game, x, y, 'pikachu', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 4, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
			this.alive = true;
			this.points = 15;
			this.lives = 30;
			this.alpha = 0;
			this.deathSound = this.game.add.audio('pikachuDeathSound');
			this.sound = this.game.add.audio('pikachuSound');
			this.sound.play();
		}
	
		_createClass(Pikachu, [{
			key: 'reset',
			value: function reset(x, y) {
	
				this.body.velocity.y = 50;
				this.x = x;
				this.y = y;
				this.exists = true;
				this.hasScored = false;
			}
		}, {
			key: 'kill',
			value: function kill() {
				this.body.velocity.y = 50;
				this.body.velocity.x = 0;
				this.alpha = 0;
				this.lives--;
				if (this.lives == 0) {
					this.deathSound.play();
					this.destroy();
				}
			}
		}, {
			key: 'killWithLaser',
			value: function killWithLaser() {
				this.body.velocity.y = 100;
				this.body.velocity.x = 0;
				this.alpha = 0;
				this.lives - 3;
				if (this.lives == 0) {
					this.destroy();
				}
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.alpha < 1) {
					this.alpha = this.alpha + 0.05;
				}
	
				if (!this.inWorld) {
					this.exists = false;
					this.destroy();
				}
			}
		}]);
	
		return Pikachu;
	})(Phaser.Sprite);
	
	exports['default'] = Pikachu;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Thunder = (function (_Phaser$Sprite) {
		_inherits(Thunder, _Phaser$Sprite);
	
		function Thunder(game, x, y, frame) {
			_classCallCheck(this, Thunder);
	
			_get(Object.getPrototypeOf(Thunder.prototype), 'constructor', this).call(this, game, x, y, 'thunder', frame);
	
			this.animations.add('vuur');
			this.animations.play('vuur', 12, true);
	
			this.anchor.setTo(0.5, 0.5);
	
			this.game.physics.arcade.enableBody(this);
			this.scale.setTo(.5, -.5);
			//lives
	
			//this.body.velocity.y = -300;
		}
	
		_createClass(Thunder, [{
			key: 'kill',
			value: function kill() {
				this.destroy();
			}
		}, {
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
	
		return Thunder;
	})(Phaser.Sprite);
	
	exports['default'] = Thunder;
	module.exports = exports['default'];

/***/ },
/* 20 */
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
	
	var _objectsSpace = __webpack_require__(4);
	
	var _objectsSpace2 = _interopRequireDefault(_objectsSpace);
	
	var dataSend = false;
	
	var Gameover = (function (_Phaser$State) {
	    _inherits(Gameover, _Phaser$State);
	
	    function Gameover() {
	        _classCallCheck(this, Gameover);
	
	        _get(Object.getPrototypeOf(Gameover.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Gameover, [{
	        key: 'create',
	        value: function create() {
	            console.log('Gameover State');
	
	            this.space = new _objectsSpace2['default'](this.game, -10, 0, this.game.width, this.game.height);
	            this.game.add.existing(this.space);
	
	            this.start = this.game.add.button(this.game.width / 2 - 100, this.game.height / 2 + 200, 'restartbtn', this.startClick, this);
	            //this.start.scale.setTo(.7);
	            this.start.anchor.setTo(.5, .5);
	
	            this.menu = this.game.add.button(this.game.width / 2 + 100, this.game.height / 2 + 200, 'menu', this.menuClick, this);
	            //this.menu.scale.setTo(.7);
	            this.menu.anchor.setTo(.5, .5);
	
	            this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	            this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	            this.key2.onDown.add(this.upload, this);
	            this.gotData = false;
	            //this.getData();
	
	            var resultHTML = '<h1>Your score:</h1>';
	            resultHTML += '<ul>';
	
	            resultHTML += '<li class="inputList"><input type="text" class="inputVeld" maxlength="15" name="alias" placeholder="INSERT NAME"> --- ' + this.score + '</li>';
	
	            resultHTML += '</ul>';
	            document.getElementById('leader-result').innerHTML = resultHTML;
	
	            ///this.sendData();
	        }
	    }, {
	        key: 'init',
	        value: function init(score) {
	            this.score = score;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	
	            if (dataSend) {
	
	                this.key1.onDown.add(this.startClick, this);
	                dataSend = false;
	                this.getData();
	            }
	        }
	    }, {
	        key: 'upload',
	        value: function upload() {
	            if (document.querySelector('.inputVeld')) {
	                var inputVeld = document.querySelector('.inputVeld');
	                if (inputVeld.value != '') {
	                    var data = {};
	                    data.name = inputVeld.value;
	                    data.score = this.score;
	                    this.sendData(data);
	                }
	            }
	        }
	    }, {
	        key: 'startClick',
	        value: function startClick() {
	
	            document.getElementById('leader-result').innerHTML = '';
	            this.game.state.start('Play');
	        }
	    }, {
	        key: 'menuClick',
	        value: function menuClick() {
	            document.getElementById('leader-result').className += 'hidden';
	            this.game.state.start('Menu');
	        }
	    }, {
	        key: 'sendData',
	        value: function sendData(data) {
	
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', './api/astral');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	            xhr.onload = function () {
	                if (xhr.status === 200) {
	                    dataSend = true;
	                }
	            };
	            xhr.send(JSON.stringify(data));
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            document.getElementById('leader-result').className = '';
	            var xhr = new XMLHttpRequest();
	            xhr.open('GET', './api/astraltop10');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	            var varScore = this.score;
	            xhr.onload = function () {
	                if (xhr.status === 200) {
	
	                    var data = xhr.responseText;
	                    var json = JSON.parse(data);
	
	                    var itemsResultEl = document.getElementById('leader-result');
	
	                    var resultHTML = '<h1>LEADERBOARD</h1>';
	                    resultHTML += '<ol>';
	
	                    var teller = 0;
	                    var inputNotPlaced = true;
	
	                    for (var i = 0; i < json.length; i++) {
	
	                        resultHTML += '<li>' + json[teller]['name'] + ' --- ' + json[teller]['score'] + '</li>';
	
	                        teller++;
	                    };
	
	                    resultHTML += '</ol>';
	                    itemsResultEl.innerHTML = resultHTML;
	                }
	            };
	
	            xhr.send();
	        }
	    }]);
	
	    return Gameover;
	})(Phaser.State);
	
	exports['default'] = Gameover;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map