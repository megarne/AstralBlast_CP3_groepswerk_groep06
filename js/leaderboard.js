  (function(){


  	function init(){

  		document.getElementById('leader-result-full').innerHTML = '';
  		var xhr = new XMLHttpRequest();
  		xhr.open('GET', './api/astral');
  		xhr.setRequestHeader('Content-Type', 'application/json');
  		var varScore = this.score;
  		xhr.onload = function() {
  			if (xhr.status === 200) {


  				var data = xhr.responseText;
  				var json = JSON.parse(data);

  				var itemsResultEl = document.getElementById('leader-result');


  				var resultHTML = '<h1>LEADERBOARD</h1>';
  				resultHTML += '<ol>';

  				var teller = 0;
  				var inputNotPlaced = true;

  				for (var i = 0; i < json.length; i++) {


  					resultHTML += `<li>${json[teller]['name']} --- ${json[teller]['score']}</li>`


  					teller++;
  				};




  				resultHTML += '</ol>';
  				document.getElementById('leader-result-full').innerHTML = resultHTML;
  			}

  		};

  		xhr.send();


  	}


  	init();

  })();








