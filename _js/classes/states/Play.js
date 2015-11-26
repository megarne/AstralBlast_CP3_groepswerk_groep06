import Player from '../objects/Player';
import Space from '../objects/Space';
import Bullet from '../objects/Bullet';
import Enemie from '../objects/Enemie';
import Explosie from '../objects/Explosie';

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
		this.game.time.events.loop(Phaser.Timer.SECOND * 1,
			this.secondLoop, this); 
		this.enemieGenerator.timer.start();

		this.score = 0;
		this.scoreText = this.game.add.bitmapText(this.game.width-20, 50, 'gem',"score: "+this.score.toString(), 30);
		this.scoreText.anchor.setTo(1,1);

		console.log('Play State');
	}


	secondLoop(){
		this.generateEnemies();

		this.updateScore(10);
		
	}

	updateScore(value){
		this.score = this.score + value;
		this.scoreText.text = "score: "+this.score.toString();
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
		
		if(this.player.body){
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

			this.enemies.forEach(enemiestest => { 

				this.game.physics.arcade.collide(enemiestest, this.player,
					this.hitplayer, null, this); 
			});
		};

	}

	hitenemie(a, b){
		this.updateScore(5);
		this.makeExplosion(a.x,a.y);
		a.destroy();
		b.destroy();

	}

	hitplayer(a, b){
		this.makeExplosion(a.x,a.y);
		this.makeExplosion(b.x,b.y);
		a.destroy();
		b.destroy();
	}

	makeExplosion(x,y){


		var explosie = new Explosie(this.game, x, y); 
		this.game.add.existing(explosie);


	}

}
