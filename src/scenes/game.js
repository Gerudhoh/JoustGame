//Creates phaser class for the scene
class GameScreen extends Phaser.Scene {

	constructor(data) {
		//the key that references this class, which is used by other functions
		super('GameScreen')
	}

	//This is for passing in the user's choice of what class they want to play as
	init(data)
	{
	    console.log(data);
	}

	preload() {
	  	
	}

	create() {
	  	let titleText = this.add.text(100, 400, "Now Playing Game");
	}
}

//exports the scene so config can load it
export default GameScreen;