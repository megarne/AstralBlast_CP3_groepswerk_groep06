import Bird from '../../objects/Bird';

export default class Play extends Phaser.State{
	preload(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 500;

		this.background = this.game.add.sprite(0,0,'background');

		this.bird = new Bird(this.game,100, this.game.height/2);
		this.game.add.existing(this.bird);

	}

}
