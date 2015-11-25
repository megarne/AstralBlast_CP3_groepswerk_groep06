export default class Preload extends Phaser.State{

	preload(){
		// this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
		this.game.state.start('Menu');
	}

	create(){
		console.log('Preload State')
	}

	onLoadComplete(){

		// this.game.state.start('Menu');

	}


}
