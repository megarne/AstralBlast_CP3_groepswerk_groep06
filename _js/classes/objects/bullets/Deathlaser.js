export default class Deathlaser extends Phaser.TileSprite {
	constructor(game, x, y, width, height) {
		super(game, x, y, width, height, 'deathlaser');
		this.autoScroll(-400,0);
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
