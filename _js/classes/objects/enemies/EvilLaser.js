
import LoadingEvilLaser from './evilsalerparts/LoadingEvilLaser';
export default class EvilLaser extends Phaser.Group { 
	constructor(game, parent) {
		super(game, parent);
		//this.anchor.setTo(1, 0.5);
		this.loading = new LoadingEvilLaser(this.game, 0, 0, 100); 
		this.add(this.loading);
		this.teller = 0;
		this.game.physics.arcade.enableBody(this);


	}

	kill(){
		this.destroy();


	}

	update(){
		this.teller++;

		if (this.teller < 299) {
			this.loading.scale.setTo((this.teller/450), (this.teller/450));
		}else if (this.teller == 300) {

			this.laser = this.game.add.tileSprite(0,-5000,50,5000,'evilLaserPattern');
			this.add(this.laser,true);
			this.game.physics.arcade.enableBody(this.laser);
			this.laser.body.velocity.y = 2500;
			this.laser.autoScroll(0,-2200);
			this.laser.anchor.setTo(0.5, 0);
			

		}else if (this.teller < 399){
			//this.destroy();
		}else if (this.teller == 400){
			this.destroy();
		}
		
	}
}