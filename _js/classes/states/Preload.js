export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);

		this.load.spritesheet('player', 'assets/player.png', 182/3, 56, 3);
		this.load.spritesheet('enemie', 'assets/enemie.png', 125/3, 37, 3);
		this.load.spritesheet('bullet', 'assets/bullet.png', 11, 20, 3);
		this.load.spritesheet('enemiebullet', 'assets/enemiebullet.png', 11, 20, 3);
		this.load.spritesheet('explosie', 'assets/boem.png', 100, 100, 8);
		this.load.spritesheet('bigenemie', 'assets/bigenemie.png', 100, 100, 3);
		this.load.spritesheet('space', 'assets/space.png', 160, 160, 3);
		this.load.spritesheet('spreadpower', 'assets/spreadpower.png', 30, 30, 3);
		this.load.spritesheet('deathlaser_power', 'assets/deathlaser_power.png', 58, 60, 3);
		this.load.spritesheet('soundmuter', 'assets/soundmuter.png', 50, 50, 2);
		this.load.spritesheet('loadingEvilLaser', 'assets/loadingevillaser.png', 210, 90, 4);
		this.load.spritesheet('meteor', 'assets/meteor.png', 445/3, 50, 3);
		this.load.spritesheet('thunder', 'assets/thunder.png', 126/3, 97, 3);
		this.load.spritesheet('pikachu', 'assets/pikachu.png', 542/6, 84, 6);

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
		this.load.audio('smalldeathSound', 'assets/sounds/smalldeath.wav');
				this.load.audio('evillaserSound', 'assets/sounds/evillaser.wav');

	}

	create(){

	}

	onLoadComplete(){

		console.log('load complete');
		this.game.state.start('Menu');

	}


}
