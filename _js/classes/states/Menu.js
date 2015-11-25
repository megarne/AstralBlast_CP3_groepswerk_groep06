export default class Menu extends Phaser.State{
	preload(){


	}

	create(){
		console.log('Menu State');

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.key1.onDown.add(this.startGame, this);
	}

	startGame(){
		this.game.state.start('Play');
	}

}
