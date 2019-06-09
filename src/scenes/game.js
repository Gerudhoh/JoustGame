class GameScreen extends Phaser.Scene {
	constructor() {
		super('GameScreen')
	}
	preload() {
	  	
	}

	create() {
	 	
	  	let titleText = this.add.text(100, 400, "Now Playing Game");
	}
}

export default GameScreen;