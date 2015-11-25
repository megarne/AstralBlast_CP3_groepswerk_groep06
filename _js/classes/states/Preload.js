export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);

		this.load.spritesheet('player', 'assets/player.png', 121, 110, 3);
		this.load.image('logo', 'assets/logo.png');
		this.load.image('start', 'assets/start.png');

	    // this.load.image('space', 'assets/space.png');
	    this.load.spritesheet('space', 'assets/space.png', 400, 400, 3);


		//this.game.state.start('Menu');

	}

	create(){
		//console.log('Preload State')
	}

	onLoadComplete(){
		console.log('load complete');
		this.game.state.start('Play');

	}


}
