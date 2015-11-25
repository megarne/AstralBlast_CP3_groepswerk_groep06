export default class Bullet extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'bullet', frame);

    this.animations.add('vuur');
    this.animations.play('vuur', 12, true);

    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);

    this.body.velocity.y = -300;

    
    
  }

  reset(x,y){
  	console.log('test');
		//this.reset(0, 0);
		this.body.velocity.y = -300;
		this.x = 0;
		this.y = 0;
		this.exists = true;
		this.hasScored = false;
	}

	update(){
		if(!this.inWorld) { 
			this.exists = false;
		}
	}

}
