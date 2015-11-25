import Player from '../objects/Player';
import Space from '../objects/Space';
import Bullet from '../objects/Bullet';
import EnemieGroup from '../objects/EnemieGroup';

export default class Play extends Phaser.State{
	create(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.space = new Space(this.game, -10, 0, this.game.width, this.game.height);
		this.game.add.existing(this.space);
		this.space.autoScroll(0, 200);

		this.player = new Player(this.game, this.game.width/2, this.game.height-100);
		this.game.add.existing(this.player);
		this.player.anchor.setTo(0.5, 0.5);
		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;


		this.enemies = this.game.add.group();
		this.playerbullets = this.game.add.group();
		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.key1.onDown.add(this.generatePlayerBullets, this);


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

		console.log(this.playerbullets.children);

		enemie.reset(enemieX, this.game.height);

		enemie.y = 0;
		enemie.x = enemieX;


	}

	generatePlayerBullets(){

		var bullet = this.playerbullets.getFirstExists(false);

		//var bullet = new Bullet(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y); 
		//this.game.add.existing(bullet);
		console.log('schot');

		if (!bullet){
			bullet = new Bullet(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y); 
			this.playerbullets.add(bullet,false);
			console.log('schot2');
		}


		bullet.reset(this.player.body.x+this.player.body.width/2, this.player.body.y);

		bullet.x = this.player.body.x+this.player.body.width/2;
		bullet.y = this.player.body.y;

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
