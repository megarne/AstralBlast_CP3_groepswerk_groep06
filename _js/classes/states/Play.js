import Player from '../objects/Player';
import Space from '../objects/Space';

export default class Play extends Phaser.State{
	create(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.space = new Space(this.game, -10, 0, 400, 700);
		this.game.add.existing(this.space);
    	this.space.scale.setTo(.8);
    	this.space.autoScroll(0, 200);

    	this.player = new Player(this.game, 150, 400);
    	this.game.add.existing(this.player);
    	this.player.scale.setTo(.5);
    	this.game.physics.arcade.enable(this.player);
    	this.player.body.collideWorldBounds = true;

    	this.cursors = this.game.input.keyboard.createCursorKeys();


		console.log('Play State');
	}
	update(){
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
		if(this.cursors.left.isDown){
        	this.player.body.velocity.x = -200;
	 	}
    
	    if(this.cursors.right.isDown){
	        this.player.body.velocity.x = 200;
	    }

	    if(this.cursors.up.isDown){
	        this.player.body.velocity.y = -200;
	    }

	    if(this.cursors.down.isDown){
	        this.player.body.velocity.y = 200;
	    }
	}

}
