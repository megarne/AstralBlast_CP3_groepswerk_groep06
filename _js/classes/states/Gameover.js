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

        this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.key2.onDown.add(this.upload, this);
 this.gotData = false;
        this.getData();

       
    	///this.sendData();

    }
    init(score){
    	this.score = score;
    }

    upload(){
        if(document.querySelector('.inputVeld')){
            let inputVeld = document.querySelector('.inputVeld');
            if(inputVeld.value != ''){
                let data = {};
                data.name = inputVeld.value;
                data.score = this.score;
                this.sendData(data);
            }

        }

    }

    startClick(){
        console.log('tester' + this.gotData);
        if(!document.querySelector('.inputVeld') && this.gotData){
           document.getElementById('leader-result').className += 'hidden';
           this.game.state.start('Play');
       }
   }

   menuClick(){
       document.getElementById('leader-result').className += 'hidden';		
       this.game.state.start('Menu');
   }

   sendData(data){

    var xhr = new XMLHttpRequest();
    xhr.open('POST', './api/astral');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {

            let inputVeld = document.querySelector('.inputList');
            inputVeld.innerHTML = `${data.name} --- ${data.score}`;

        }
    };
    console.log(JSON.stringify(data));
    xhr.send(JSON.stringify(data));
    }



getData(){
   document.getElementById('leader-result').className = '';
   var xhr = new XMLHttpRequest();
   xhr.open('GET', './api/astraltop10');
   xhr.setRequestHeader('Content-Type', 'application/json');
   var varScore = this.score;
   xhr.onload = function() {
      if (xhr.status === 200) {


         var data = xhr.responseText;
         var json = JSON.parse(data);

         let itemsResultEl = document.getElementById('leader-result');


         let resultHTML = '<h1>LEADERBOARD</h1>';
         resultHTML += '<ol>';

         let teller = 0;
         let inputNotPlaced = true;

         for (var i = 0; i < json.length; i++) {


            if ( json[teller].score < varScore && inputNotPlaced ) {
               resultHTML += `<li class="inputList"><input type="text" class="inputVeld" maxlength="15" name="alias" placeholder="INSERT NAME"> --- ${varScore}</li>`
               inputNotPlaced = false;
               teller--;
           }else{
               resultHTML += `<li>${json[teller]['name']} --- ${json[teller]['score']}</li>`
           };


           teller++;
       };




       resultHTML += '</ol>';
       itemsResultEl.innerHTML = resultHTML;
   }
   
};

xhr.send();
this.gotData = true;



}
}
