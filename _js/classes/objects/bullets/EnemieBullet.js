export default class EnemieBullet extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'enemiebullet', frame);

		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);
		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
	}

	kill(){
		this.destroy();
	}

	reset(x,y){
		this.body.velocity.y = -300;
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
