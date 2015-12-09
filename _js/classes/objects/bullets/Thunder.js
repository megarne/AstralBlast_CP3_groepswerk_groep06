export default class Thunder extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'thunder', frame);

		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);

		this.anchor.setTo(0.5, 0.5);

		this.game.physics.arcade.enableBody(this);
		this.scale.setTo(.5,-.5);
		//lives

    //this.body.velocity.y = -300;

    
    
}

kill(){
	this.destroy();
}

reset(x,y){
		//this.reset(0, 0);
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
