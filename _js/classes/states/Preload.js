export default class Preload extends Phaser.State{

	preload(){
		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
	}

	onLoadComplete(){
		this.game.state.start('Play');

	}


}
