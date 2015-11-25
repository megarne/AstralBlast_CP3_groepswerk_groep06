import Enemie from '../objects/Enemie.js';


export default class EnemieGroup extends Phaser.Group { 
	constructor(game, parent) {
		super(game, parent); 

		this.enemie = new Enemie(this.game, 0, 0); 
		this.add(this.enemie);

		this.enemie.body.velocity.y = 100;
		this.hasScored = false;
	}

	reset(x,y){

		this.enemie.reset(0, 0);
		this.x = x;
		this.y = y;
		this.setAll('body.velocity.y', 100);
		this.exists = true;
		this.hasScored = false;
	}

	update(){
		if(!this.enemie.inWorld) { 
			this.exists = false;
		}
	}
}