export default class Explosie extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'explosie', frame);

		this.animations.add('boem');
		this.animations.play('boem', 12, false, true);
		this.anchor.setTo(0.5, 0.5);
	}
	
	reset(x,y){
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
