export default class Preload extends Phaser.State{

	preload(){
		this.asset = this.add.sprite(this.game.width/2,this.game.height/2,'preloader');
		this.asset.anchor.setTo(0.5,0.5);

		this.load.image('background', 'assets/background.png');
		this.load.image('ground', 'assets/ground.png');
		this.load.image('title', 'assets/title.png');
		this.load.image('startButton', 'assets/start-button.png');
		this.load.image('bird', 'assets/bird.png');

		this.load.onLoadComplete.addOnce(this.onLoadComplete,this);
	}

	onLoadComplete(){
		console.log('images loaded');
		this.game.state.start('Play');

	}


}
