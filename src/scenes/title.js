import jousterImg from "../assets/jouster.png";
import swordImg from "../assets/sword1.png";

class TitleScreen extends Phaser.Scene {
	//the key that references this class, which is used by other functions
	constructor() {
		super('TitleScreen')
	}

	preload() {
		//load in the spritesheet for testing
	  	this.load.spritesheet("jouster", jousterImg, {frameWidth: 60, frameHeight: 74});
	  	this.load.spritesheet("sword1", swordImg, {frameWidth: 100, frameHeight: 100});
	}

	create() {
		//testing for sprites of players
	 	let jouster = this.add.sprite(300, 200, "sword1", 5);

	 	//running animation goes here
	  	this.anims.create({
	 	key: 'running',
	 	//repeat -1 means it loops

		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword1', {start: 0, end: 4})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'attacking',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword1', {start: 6, end: 24})
	  	});

	  	//play the 2 animations to test them
	  	jouster.play('attacking');
	  	let jouster2 = this.add.sprite(500, 200, "sword1", 0);
	  	jouster2.play('running');

	  	let titleText = this.add.text(200, 400, "Jousting Game, left click to play game");

	  	//Gets user input to change the scene to the game
	  	this.input.on('pointerdown', () => this.scene.start('GameScreen'))
	}
}

//Exports the scene so config can load it
export default TitleScreen;