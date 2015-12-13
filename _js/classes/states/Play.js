import Player from '../objects/Player';
import Space from '../objects/Space';
import Bullet from '../objects/bullets/Bullet';
import EnemieBullet from '../objects/bullets/EnemieBullet';
import Enemie from '../objects/enemies/Enemie';
import BigEnemie from '../objects/enemies/BigEnemie';
import Explosie from '../objects/Explosie';
import Spreadpower from '../objects/powerup/Spreadpower';
import DeathlaserPowerup from '../objects/powerup/Deathlaser';
import Deathlaser from '../objects/bullets/Deathlaser';
import Evillaser from '../objects/enemies/EvilLaser';
import Meteor from '../objects/enemies/Meteor';
import Pikachu from '../objects/enemies/Pikachu';
import Thunder from '../objects/bullets/Thunder';

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

		this.speedPlayer = 300;

		this.muteSoundBtn = this.game.add.button(this.game.width - 30,this.game.height - 30,'soundmuter', this.muteSPlayound, this);
		this.muteSoundBtn.alpha = 0.5;
		this.muteSoundBtn.scale.setTo(.5);
		//did op false zetten om alle geluid uit te zetten
		this.sound.mute = true;
		if(this.sound.mute){
			this.muteSoundBtn.frame = 1;
		}else{
			this.muteSoundBtn.frame = 0;
		}

		this.gun = "spread"
		this.aantalshots = 3;
		this.spread = 10;
		this.aantalspecials = 0;

		this.enemies = this.game.add.group();
		this.lasers = this.game.add.group();
		this.playerbullets = this.game.add.group();
		this.playerlasers = this.game.add.group();
		this.spreadpowerups = this.game.add.group();
		this.enemiebullets = this.game.add.group();
		this.deathlaserpowerups = this.game.add.group();
		this.meteors = this.game.add.group();

		this.gameMusic = this.game.add.audio('musicSound');
		this.gameMusic.play();
		this.gameMusic.loopFull(1);

		this.shootSound = this.game.add.audio('shootSound');
		this.powerupSound = this.game.add.audio('powerupSound');
		this.laserSound = this.game.add.audio('laserSound');
		this.powerupSound = this.game.add.audio('powerupSound');
		//this.sound.mute = true;

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.special = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.key1.onDown.add(this.generatePlayerBullets, this);

		// this.cursors = this.game.input.keyboard.createCursorKeys();
		//this.special.onDown.add(this.launchLaser, this);

		this.enemieGenerator = 
		this.game.time.events.loop(Phaser.Timer.SECOND * 1,
			this.secondLoop, this); 
		this.enemieGenerator.timer.start();

		this.score = 0;
		this.scoreText = this.game.add.bitmapText(this.game.width-20, 50, 'gem',"score: "+this.score.toString(), 30);
		this.scoreText.anchor.setTo(1,1);

		this.lives = this.player.lives;
		this.livesText = this.game.add.bitmapText(20, 50, 'gem',"lives: "+this.lives.toString(), 30);
		this.livesText.anchor.setTo(0,1);


		this.laserText = this.game.add.bitmapText(10, this.game.height-20, 'gem',"NO SPECIAL", 20);
		this.laserText.anchor.setTo(0,1);

		console.log('Play State');

		this.teller = 0;

		this.knopRechts = document.querySelector('.rechts');
		this.knopRechtsvalue = false; 
		this.knopRechts.addEventListener('mousedown', e =>{

			this.knopRechtsvalue = true; 
		});
		this.knopRechts.addEventListener('mouseup', e=>{
			this.knopRechtsvalue = false; 
		});

		this.knopLinks = document.querySelector('.links');
		this.knopLinksvalue = false; 
		this.knopLinks.addEventListener('mousedown', e =>{
			this.knopLinksvalue = true; 
		});
		this.knopLinks.addEventListener('mouseup', e=>{
			this.knopLinksvalue = false; 
		});


				this.knopBoven = document.querySelector('.boven');
		this.knopBovenvalue = false; 
		this.knopBoven.addEventListener('mousedown', e =>{
			this.knopBovenvalue = true; 
		});
		this.knopBoven.addEventListener('mouseup', e=>{
			this.knopBovenvalue = false; 

		});

		this.knopOnder = document.querySelector('.onder');
		this.knopOndervalue = false; 
		this.knopOnder.addEventListener('mousedown', e =>{
			this.knopOndervalue = true; 
		});
		this.knopOnder.addEventListener('mouseup', e=>{
			this.knopOndervalue = false; 
		});

		this.knopShoot = document.querySelector('.shoot');
		this.knopShoot.addEventListener('mousedown', e =>{

			this.generatePlayerBullets();
		});

		this.knopSpecial = document.querySelector('.special');
		this.knopSpecial.addEventListener('mousedown', e =>{

			if (this.aantalspecials > 0) {
				this.launchLaser();
			}
		});


		//this.knopRechts.addEventListener('mousedown', this.beweegrechts(this.player));

	}

	laserReady(a,b){
		a.destroy();
		this.powerupSound.play();
		this.aantalspecials++;
		if(this.aantalspecials > 0){
			this.special.onDown.add(this.launchLaser, this);
		}
		if(this.aantalspecials == 1){
			this.laserText.text = this.aantalspecials + " DEATHLASER";
		}else if(this.aantalspecials > 1){
			this.laserText.text = this.aantalspecials + " DEATHLASERS";
		}
	}

	muteSPlayound(){
		if(this.sound.mute){
			
			this.sound.mute = false;
			this.muteSoundBtn.frame = 0;
		}else{
			this.sound.mute = true;
			this.muteSoundBtn.frame = 1;
			
		}
		
	}

	launchLaser(){
		
		
		if(this.aantalspecials == 0){
			this.laserText.text = "NO SPECIAL";
		}else if(this.aantalspecials == 1){
			this.laserSound.play();

			this.aantalspecials = 0;
			this.laserText.text = "NO SPECIAL";
			var laser = new Deathlaser(this.game, this.game.width/2, this.player.body.y, 800, 6); 
			this.playerlasers.add(laser,true);
			laser.body.immovable = true;
			laser.reset(this.game.width/2, this.player.body.y);
			laser.body.velocity.y = -300;

		}else if(this.aantalspecials > 1){
			this.laserSound.play();
			this.aantalspecials = this.aantalspecials-1;
			this.laserText.text = this.aantalspecials + " DEATHLASERS";
			
			var laser = new Deathlaser(this.game, this.game.width/2, this.player.body.y, 800, 6); 
			this.playerlasers.add(laser,true);
			laser.body.immovable = true;
			laser.reset(this.game.width/2, this.player.body.y);
			laser.body.velocity.y = -300;

		}
	}


	secondLoop(){
		this.teller++;
		this.generateEnemies();
		
		

		if (this.teller % 5 === 0 && this.aantalshots > 6) {
			this.generateBigEnemies();
		}

		if ((this.teller+2) % 5 === 0 && this.aantalshots > 10) {
			this.createEvilLaser();
		}

		if ((this.teller) % 6 === 0 && this.score > 1000) {
			this.createMeteor();
		}

		if ((this.teller + 3) % 6 === 0 && this.score > 2000) {
			this.createPikachu();
		}
		this.updateScore(10);
		this.checkShoot();
		
	}

	createPikachu(){
		var enemieX = this.game.rnd.integerInRange(50, this.game.width-50); 
		var pikachu =  new Pikachu(this.game, enemieX , 300);
		this.enemies.add(pikachu,true);
		pikachu.reset(enemieX, 0);

	}

	createEvilLaser(){
				this.evillaser = new Evillaser(this.game, this.lasers);
		this.evillaser.x = this.player.x;
	}

	updateScore(value){
		this.score = this.score + value;
		this.scoreText.text = "score: "+this.score.toString();
	}

	createMeteor(){
		var meteorY = this.game.rnd.integerInRange(100, this.game.height-200); 
		var	meteor = new Meteor(this.game, this.game.width, meteorY); 
		meteor.body.velocity.x = -200;
		this.meteors.add(meteor,true);
		
		meteor.reset(this.game.width, meteorY)
	}

	generateBigEnemies() {

		var enemieX = this.game.rnd.integerInRange(100, this.game.width-100); 

		var	enemie = new BigEnemie(this.game, enemieX, 0); 
		this.enemies.add(enemie,true);
		enemie.reset(enemieX, 0);
		

	}

	checkShoot(){
		this.enemies.forEach(enemiestest => { 
			if (enemiestest.key == "bigenemie") {
				this.enemieShoot(enemiestest.x-enemiestest.width,enemiestest.y);
				this.enemieShoot(enemiestest.x,enemiestest.y);
			}
			if (enemiestest.key =="pikachu"){
				//console.log(enemiestest.x,enemiestest.y);
				this.schootThunder(enemiestest.x,enemiestest.y);
			}
		});
	}

	schootThunder(x,y){
		var bullet = new Thunder(this.game, x,y); 
		this.enemiebullets.add(bullet,true);
				bullet.reset(x,y);
		bullet.body.velocity.y = -(y-this.player.y)/2;
		bullet.body.velocity.x = -(x-this.player.x)/2;

		var angle = Math.atan2(bullet.body.velocity.y, bullet.body.velocity.x) - Math.PI / 2;
		console.log(angle);
		bullet.rotation = angle;
	}


	enemieShoot(x,y){
		var randomspread = this.game.rnd.realInRange(-this.spread, this.spread);

		var bullet = new EnemieBullet(this.game, x,y); 
		this.enemiebullets.add(bullet,true);
		bullet.reset(x,y);
		bullet.body.velocity.y = 300;
		bullet.body.velocity.x = randomspread;
	}

	generateEnemies() {
		var enemieX = this.game.rnd.integerInRange(38, this.game.width-38); 

		var	enemie = new Enemie(this.game, enemieX, 0); 
		this.enemies.add(enemie,true);
		enemie.reset(enemieX, 0);
		
	}

	generatePlayerBullets(){
		switch(this.gun) {
			case "default":
			var bullet = new Bullet(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y); 
			this.playerbullets.add(bullet,true);
			bullet.reset(this.player.body.x+this.player.body.width/2, this.player.body.y);
			bullet.body.velocity.y = -300;
			break;

			case "spread":

			for (var i = 0; i < this.aantalshots; i++) {

				var randomspread = this.game.rnd.realInRange(-this.spread, this.spread);

				var bullet = new Bullet(this.game, this.player.body.x+this.player.body.width/2, this.player.body.y); 
				this.playerbullets.add(bullet,true);
				bullet.reset(this.player.body.x+this.player.body.width/2, this.player.body.y);
				//bullet.body.velocity.y = -300+Math.abs(randomspread);
				//bullet.body.velocity.x = (i-(this.aantalshots/2-1))*25 + randomspread;
				//bullet.rotation = randomspread*360/Math.PI;

				bullet.body.velocity.y = -300+(Math.abs(i-(this.aantalshots/2-1))*3);
				bullet.body.velocity.x = (i-(this.aantalshots/2-1))*25 + randomspread;

			}
			this.shootSound.play();
			break;
			
		}

	}

	beweegrechts(player){
		player.body.velocity.x = this.speedPlayer;
		
	}

	update(){
		//console.log(this.knopRechtsvalue);
		if(this.player.body){
			this.player.body.velocity.x = 0;
			this.player.body.velocity.y = 0;

			if(this.cursors.left.isDown || this.knopLinksvalue){
				this.player.body.velocity.x = -this.speedPlayer;
				//this.player.rotation = Math.PI*1.5;
			}

			if(this.cursors.right.isDown || this.knopRechtsvalue){
				this.player.body.velocity.x = this.speedPlayer;
				//this.player.rotation = Math.PI*0.5;
			}

			if(this.cursors.up.isDown || this.knopBovenvalue){
				this.player.body.velocity.y = -this.speedPlayer;
				//this.player.rotation = Math.PI*0;
			}

			if(this.cursors.down.isDown || this.knopOndervalue) {
				this.player.body.velocity.y = this.speedPlayer;
				//this.player.rotation = Math.PI;
			}

			this.playerbullets.forEach(playerbulletstest => { 

				this.enemies.forEach(enemiestest => { 

					this.game.physics.arcade.collide(enemiestest, playerbulletstest,
						this.hitenemie, null, this); 
				});

				this.meteors.forEach(meteortest => { 

					this.game.physics.arcade.collide(meteortest, playerbulletstest,
						this.hitmeteor, null, this); 
				});
			});

			this.playerlasers.forEach(playerlaserstest => { 

				this.enemies.forEach(enemiestest => { 

					this.game.physics.arcade.collide(enemiestest, playerlaserstest,
						this.hitenemiewithlaser, null, this); 
				});
			});

			this.enemies.forEach(enemiestest => { 

				this.game.physics.arcade.collide(enemiestest, this.player,
					this.hitplayer, null, this); 
			});

			this.enemiebullets.forEach(bulletstest => { 

				this.game.physics.arcade.collide(bulletstest, this.player,
					this.hitplayer, null, this);
				
			});

			this.spreadpowerups.forEach(powerup => { 

				this.game.physics.arcade.collide(powerup, this.player,
					this.hitspreadpower, null, this); 
			});

			this.deathlaserpowerups.forEach(powerup => { 

				this.game.physics.arcade.collide(powerup, this.player,
					this.laserReady, null, this); 
			});

			this.lasers.forEach(laser => { 

				this.game.physics.arcade.collide(laser, this.player,
					this.laserkill, null, this); 
			});
		};
	}

	hitmeteor(a,b){
		a.kill();
		b.kill();
	}

	laserkill(a,b){
		b.kill();
		if(this.player.alpha == 1){
			a.kill();

			this.lives = this.player.lives;
			this.livesText.text = "lives: "+this.lives.toString();
			if (this.lives == 0) {
				this.playerDeath();
			}
		}
	}

	hitenemie(a, b){
		this.updateScore(a.points);
	
		a.kill();
		b.kill();

		if (a.lives == 0) {
			this.makeExplosion(a.x,a.y);
			var chancepowerup = this.game.rnd.integerInRange(1, 10);
			if (chancepowerup == 1) {
				if (this.aantalshots <= 30) {
					this.powerupspreadcreate(a.x,a.y);
				};
				
			}else if(chancepowerup == 2){
				this.poweruplasercreate(a.x,a.y);
			};
		}

		
	}
	hitenemiewithlaser(a,b){
		this.updateScore(5);
		
		a.kill();

		if (a.lives == 0) {
			this.makeExplosion(a.x,a.y);
			var chancepowerup = this.game.rnd.integerInRange(1, 10);

			if (chancepowerup == 1) {
				this.powerupspreadcreate(a.x,a.y);
			}
		}
	}

	hitspreadpower(a, b){
		this.powerupSound.play();
		a.destroy();
		this.aantalshots = this.aantalshots + 2;
	}

	powerupspreadcreate(x, y){
		var spreadpower = new Spreadpower(this.game, x, y); 
		this.spreadpowerups.add(spreadpower,true);
		spreadpower.reset(x, y);
		spreadpower.body.velocity.y = 50;
	}
	poweruplasercreate(x,y){
		var deathlaser = new DeathlaserPowerup(this.game, x, y); 
		this.deathlaserpowerups.add(deathlaser,true);
		deathlaser.reset(x, y);
		deathlaser.body.velocity.y = 50;
	}

	hitplayer(a, b){
		this.makeExplosion(a.x,a.y);
		
		a.destroy();

		if(this.player.alpha == 1){
			b.kill();

			this.lives = this.player.lives;
			this.livesText.text = "lives: "+this.lives.toString();
			if (this.lives == 0) {
				this.playerDeath();
			}
		}
	}

	makeExplosion(x,y){

		var explosie = new Explosie(this.game, x, y); 
		this.game.add.existing(explosie);

	}

	playerDeath(){	
		this.gameMusic.stop();
		this.enemies.destroy();
		this.playerbullets.destroy();
		this.meteors.destroy();
		this.playerlasers.destroy();
		this.enemiebullets.destroy();
		this.spreadpowerups.destroy();
		this.deathlaserpowerups.destroy();
		this.lasers.destroy();
		// this.enemieGenerator.timer.stop();
				this.special = this.game.input.keyboard.removeKey(Phaser.Keyboard.S);
		this.game.state.start('Gameover', false,false, this.score);

	}

}
