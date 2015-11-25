export default class Enemie extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'enemie', frame);

		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);

		this.anchor.setTo(0.5, 0.5);

		this.game.physics.arcade.enableBody(this);



	}
	eset(x,y){
		console.log('test');
		//this.reset(0, 0);
		this.body.velocity.y = 100;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}

	update(){
		if(!this.inWorld) { 
			this.exists = false;
			this.destroy();
		}
	}
}
