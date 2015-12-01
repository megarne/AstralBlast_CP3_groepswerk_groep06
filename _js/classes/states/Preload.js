export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);

		this.load.spritesheet('player', 'assets/player.png', 182/3, 56, 3);
		this.load.spritesheet('enemie', 'assets/enemie.png', 125/3, 37, 3);
		this.load.spritesheet('bullet', 'assets/bullet.png', 11, 20, 3);
				this.load.spritesheet('enemiebullet', 'assets/enemiebullet.png', 11, 20, 3);
		this.load.spritesheet('explosie', 'assets/boem.png', 100, 100, 8);
		this.load.spritesheet('bigenemie', 'assets/bigenemie.png', 100, 100, 3);
		this.load.bitmapFont('gem', 'assets/fonts/gem.png', 'assets/fonts/gem.xml');
		this.load.image('logo', 'assets/logo.png');
		this.load.image('start', 'assets/start.png');
		this.load.spritesheet('space', 'assets/space.png', 160, 160, 3);
		this.load.spritesheet('spreadpower', 'assets/spreadpower.png', 30, 30, 3);
		this.load.spritesheet('deathlaser', 'assets/laser_test.png', 800, 10, 1);

	}

	create(){

	}

	onLoadComplete(){

		console.log('load complete');
		this.game.state.start('Menu');

	}


}
