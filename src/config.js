//imports for scenes
import TitleScreen from "./scenes/title.js"
import GameScreen from "./scenes/game.js"
import SelectionScreen from "./scenes/char_selection.js"

//Creates the config for the game
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //Loads in all scenes for the game, first scene is the one that gets loaded by default
    scene: [TitleScreen, GameScreen, SelectionScreen],
    physics: {
    	 default: "arcade",
    	 arcade: {
    		gravity: {y: 0},
    		debug: true
    	},
    }
};

export {config};
