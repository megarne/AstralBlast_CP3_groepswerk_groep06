export default class BigEnemie extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'bigenemie', frame);

		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);
		this.anchor.setTo(1, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.lives = 10;
		this.speedy = 20;
		this.speedx = 30;
		this.points = 15;
		this.deathSound = this.game.add.audio('bigdeathSound');
	}
	reset(x,y){
		this.body.velocity.y = this.speedy;
		this.body.velocity.x = this.speedx;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}

	kill(){
		this.body.velocity.y = this.speedy;
		this.body.velocity.x = this.speedx;
		this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {
			this.deathSound.play();
			this.destroy();
		}
	}

	killWithLaser(){
		this.body.velocity.y = this.speedy;
		this.body.velocity.x = this.speedx;
		this.alpha = 0;
		this.lives-3;
		if (this.lives == 0) {
			this.destroy();
		}
	}

	update(){
		if (this.alpha < 1) {
			this.alpha = this.alpha + 0.05;
		}
		
		if(!this.inWorld) { 
			this.exists = false;
			this.destroy();
		}

		if (this.body) {
			if (this.body.x >= 700) {
				this.speedx = -this.speedx;
				this.body.velocity.x = this.speedx;
			}

			if(this.body.x <= 0){
				this.speedx = -this.speedx;
				this.body.velocity.x = this.speedx;
			}
		}
	}
}
