export default class Deathlaser extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'deathlaser_power', frame);

		this.animations.add('flikker');
		this.animations.play('flikker', 12, true);
		this.scale.setTo(.5);
		this.anchor.setTo(0.5, 0.5);

		this.game.physics.arcade.enableBody(this);



	}
	reset(x,y){
		this.body.velocity.y = 50;
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