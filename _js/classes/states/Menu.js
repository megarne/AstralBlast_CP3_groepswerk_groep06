import Space from '../objects/Space';
export default class Menu extends Phaser.State{
	create(){
		console.log('Menu State');
		
		this.space = new Space(this.game, -10, 0, this.game.width, this.game.height);
		this.game.add.existing(this.space);

		this.logo = this.game.add.sprite(this.game.width/2,this.game.height/2,'logo');
		this.logo.scale.setTo(.8);
		this.logo.anchor.setTo(.5,.5);

		this.start = this.game.add.button(this.game.width/2,this.game.height/2+200,'start', this.startClick, this);
		this.start.scale.setTo(.7);
		this.start.anchor.setTo(.5,.5);

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.key1.onDown.add(this.startClick, this);
	}

	startClick(){
		this.game.state.start('Play');
	}

}
