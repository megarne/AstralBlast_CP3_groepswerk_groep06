import Player from '../objects/Player';
import Space from '../objects/Space';
import EnemieGroup from '../objects/EnemieGroup';

export default class Play extends Phaser.State{
	create(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.space = new Space(this.game, -10, 0, this.game.width, this.game.height);
		this.game.add.existing(this.space);
		this.space.autoScroll(0, 200);

		this.player = new Player(this.game, this.game.width/2, this.game.height-100);
		this.game.add.existing(this.player);
		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;


		this.enemies = this.game.add.group();

		this.cursors = this.game.input.keyboard.createCursorKeys();


		this.enemieGenerator = 
		this.game.time.events.loop(Phaser.Timer.SECOND * 1.25,
			this.generateEnemies, this); 
		this.enemieGenerator.timer.start();

		console.log('Play State');
	}


	generateEnemies() {
		var enemieX = this.game.rnd.integerInRange(0, this.game.width); 

		var enemie = this.enemies.getFirstExists(false);

		if (!enemie){
			enemie = new EnemieGroup(this.game, this.enemies); 
		}
		console.log('create old');


		enemie.reset(enemieX, this.game.height);

		enemie.y = 0;
		enemie.x = enemieX;


	}




	update(){
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
		if(this.cursors.left.isDown){
			this.player.body.velocity.x = -200;
		}

		if(this.cursors.right.isDown){
			this.player.body.velocity.x = 200;
		}

		if(this.cursors.up.isDown){
			this.player.body.velocity.y = -200;
		}

		if(this.cursors.down.isDown){
			this.player.body.velocity.y = 200;
		}
	}

}
