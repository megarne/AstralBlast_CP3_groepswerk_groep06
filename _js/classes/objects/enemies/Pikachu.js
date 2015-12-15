export default class Pikachu extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'pikachu', frame);
		this.animations.add('vuur');
		this.animations.play('vuur', 4, true);
		this.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enableBody(this);
		this.alive = true;
		this.points = 15;
		this.lives = 30;
		this.alpha = 0;
		this.deathSound = this.game.add.audio('pikachuDeathSound');
		this.sound = this.game.add.audio('pikachuSound');
		this.sound.play();
	}
	reset(x,y){
		this.body.velocity.y = 50;
		this.x = x;
		this.y = y;
		this.exists = true;
		this.hasScored = false;
	}

	kill(){
		this.body.velocity.y = 50;
		this.body.velocity.x = 0;
		this.alpha = 0;
		this.lives--;
		if (this.lives == 0) {
			this.deathSound.play();
			this.destroy();
		}
	}

	killWithLaser(){
		this.body.velocity.y = 100;
		this.body.velocity.x = 0;
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
	}
}
