export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);

		this.load.spritesheet('player', 'assets/player.png', 182/3, 56, 3);
		this.load.spritesheet('enemie', 'assets/enemie.png', 125/3, 37, 3);
		this.load.spritesheet('bullet', 'assets/bullet.png', 11, 20, 3);
		this.load.image('logo', 'assets/logo.png');
		this.load.image('start', 'assets/start.png');
	    this.load.spritesheet('space', 'assets/space.png', 320, 320, 3);


	}

	create(){

	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Menu');

	}


}
