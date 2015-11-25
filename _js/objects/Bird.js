export default class Bird extends Phaser.Sprite{
	constructor(game,x,y,frame){
		super(game,x,y,'bird',frame);

		this.anchor.setTo(.5,.5);
		this.animations.add('flap');
		this.animations.play('flap', 12, true);
	}
}