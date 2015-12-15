import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';
import Gameover from './classes/states/Gameover';

let game;

const init = () => {	

	game = new Phaser.Game(800,600, Phaser.AUTO);
	game.state.add('Boot', Boot, true);
	game.state.add('Preload', Preload, false);
	game.state.add('Menu', Menu, false);
	game.state.add('Play', Play, false);
	game.state.add('Gameover', Gameover, false);

	// $(".hidden").hide();
};


init();