export default class loadingEvilLaser extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'loadingEvilLaser', frame);
		this.anchor.setTo(0.5, 0);
		this.animations.add('vuur');
		this.animations.play('vuur', 12, true);
		this.game.physics.arcade.enableBody(this);
	}
	
}
