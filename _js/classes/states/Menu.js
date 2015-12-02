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

    	this.uitleg = this.game.add.group();

    	this.space = this.game.add.sprite(10,45,'keyboardspace');
    	this.uitleg.add(this.space,true);

    	this.up = this.game.add.sprite(115, 10,'keyboardmovement');
    	this.uitleg.add(this.up,true);
    	

    	this.specialbtn = this.game.add.sprite(10, 10,'keyboardbutton');
    	this.uitleg.add(this.specialbtn,true);

    	this.uitleg.y = 500;

    	this.moveText = this.game.add.bitmapText(135, 70, 'gem',"MOVEMENT", 16);
		this.uitleg.add(this.moveText, true);
		this.spaceText = this.game.add.bitmapText(35, 48, 'gem',"SPACE", 16);
		this.uitleg.add(this.spaceText, true);
		this.shootText = this.game.add.bitmapText(35, 70, 'gem',"SHOOT", 16);
		this.uitleg.add(this.shootText, true);
		this.specialTextlang = this.game.add.bitmapText(40, 16, 'gem',"SPECIAL", 16);
		this.uitleg.add(this.specialTextlang, true);
		this.specialTextlang = this.game.add.bitmapText(20, 15, 'gem',"S", 16);
		this.uitleg.add(this.specialTextlang, true);
	}

	startClick(){
		this.game.state.start('Play');
	}

}
