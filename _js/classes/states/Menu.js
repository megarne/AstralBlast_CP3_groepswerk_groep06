export default class Menu extends Phaser.State{
	create(){
		console.log('Menu State');
		

		this.logo = this.game.add.sprite(150,100,'logo');
		this.logo.scale.setTo(.5);
		this.logo.anchor.setTo(.5,.5);

		this.start = this.game.add.button(150,300,'start', this.startClick, this);
		this.start.scale.setTo(.5);
		this.start.anchor.setTo(.5,.5);

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.key1.onDown.add(this.startClick, this);
	}

	startClick(){
		this.game.state.start('Play');
	}

}
