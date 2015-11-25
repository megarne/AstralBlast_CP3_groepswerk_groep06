import Player from '../objects/Player';
import Space from '../objects/Space';
import Bullet from '../objects/Bullet';
import Enemie from '../objects/Enemie';

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


		var	enemie = new Enemie(this.game, enemieX, 0); 
		this.enemies.add(enemie,true);
		enemie.reset(enemieX, 0);
		enemie.body.velocity.y = 100;
		//console.log(this.playerbullets.children);

		
		

		//enemie.y = 0;
		//enemie.x = enemieX;


	}

	generatePlayerBullets(){

		var bullet = new Bullet(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y); 
		bullet.body.velocity.y = -300;
		this.playerbullets.add(bullet,true);



		bullet.reset(this.player.body.x+this.player.body.width/2, this.player.body.y);

		bullet.body.velocity.y = -300;



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

		this.playerbullets.forEach(playerbulletstest => { 
			
			this.enemies.forEach(enemiestest => { 

				this.game.physics.arcade.collide(enemiestest, playerbulletstest,
					this.hitenemie, null, this); 
			});
		});

	}

	hitenemie(a, b){
		a.destroy();
		b.destroy();
		//test.children[0].kill();
	}

}
