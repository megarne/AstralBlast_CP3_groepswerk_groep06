import Space from '../objects/Space';
export default class Gameover extends Phaser.State{
	create(){
		console.log('Gameover State');
		
		this.space = new Space(this.game, -10, 0, this.game.width, this.game.height);
		this.game.add.existing(this.space);

		this.start = this.game.add.button(this.game.width/2 - 100,this.game.height/2+200,'restartbtn', this.startClick, this);
		//this.start.scale.setTo(.7);
		this.start.anchor.setTo(.5,.5);

		this.menu = this.game.add.button(this.game.width/2 + 100,this.game.height/2+200,'menu', this.menuClick, this);
		//this.menu.scale.setTo(.7);
		this.menu.anchor.setTo(.5,.5);

		this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.key1.onDown.add(this.startClick, this);

    	this.getData();
	}

	startClick(){
		this.game.state.start('Play');
	}

	menuClick(){
		this.game.state.start('Menu');
	}


	getData(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', './api/astraltop10');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if (xhr.status === 200) {
				var data = xhr.responseText;
				var json = JSON.parse(data);

				let itemsResultEl = document.getElementById('leader-result');
				
				let resultHTML = '<h1>LEADERBOARD</h1>';
				resultHTML += '<ol>';

				json.forEach(item => {
					console.log(item["name"]);
					console.log(item["score"]);
					resultHTML += `<li>${item['name']} --- ${item['score']}</li>`
				});

				resultHTML += '</ol>';
      			itemsResultEl.innerHTML = resultHTML;
				//console.log(xhr.responseText);
				//var data = ;
				// var json = JSON.parse(xhr.responseText);
				// var data = json.Data;
				// console.log(data);
				// xhr.responseText.forEach(item => {
			        //resultHTML += `<li><a href="index.php?page=item-detail&amp;id=${item.id}">${item.title}</a></li>`;
			        // console.log(item);
			      // });
			}

		};

		xhr.send();
	}
}
