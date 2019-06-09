import TitleScreen from "./title.js"
import GameScreen from "./game.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [TitleScreen, GameScreen],
    physics: {
    	 default: "arcade",
    	 arcade: {
    		gravity: {y: 0},
    		debug: true
    	},
    }
};

export {config};
