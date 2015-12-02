import Space from '../objects/Space';
export default class Gameover extends Phaser.State{
	create(){
		console.log('Gameover State');
		
		this.space = new Space(this.game, -10, 0, this.game.width, this.game.height);
		this.game.add.existing(this.space);

		this.start = this.game.add.button(this.game.width/2 - 100,this.game.height/2+200,'restartbtn', this.startClick, this);
		//this.start.scale.setTo(.7);
		this.start.anchor.setTo(.5,.5);

		this.menu = this.game.add.button(this.game.width/2 + 100,this.game.height/2+200,'menu', this.menuClick, this);
		//this.menu.scale.setTo(.7);
		this.menu.anchor.setTo(.5,.5);

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.key1.onDown.add(this.startClick, this);
	}

	startClick(){
		this.game.state.start('Play');
	}

	menuClick(){
		this.game.state.start('Menu');
	}

}
