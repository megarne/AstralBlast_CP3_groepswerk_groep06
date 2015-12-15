export default class Meteor extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'meteor', frame);
		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);
		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.lives = 100000;
		this.body.immovable = true;

	}

	reset(x,y){
		// this.body.velocity.x = -200;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}
	
	kill(){
		this.body.velocity.x = -200;
		this.body.velocity.y = 0;
	}

	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}
		
		if(!this.inWorld) { 
			this.exists = false;
			this.destroy();
		}
	}
}
