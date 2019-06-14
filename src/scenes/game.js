import lanceImg1 from "../assets/lance1.png";
import lanceImg2 from "../assets/lance2.png";

//Creates phaser class for the scene
class GameScreen extends Phaser.Scene {

	constructor(data) {
		//the key that references this class, which is used by other functions
		super('GameScreen')
	}

	//Basically, this part gets the data from the character select screen
	init (data)
	{
		//This is the sprite object that is passed in
	    this.choiceLeft = data.playerLeftChoice;
	    this.choiceRight = data.playerRightChoice;
	    //This is the array for which frames to start and stop animation. [0] and [1] is for running, [2] and [3] is for attacking.
	    this.leftFrameArray = data.playerLeftFrames;
	    this.rightFrameArray = data.playerRightFrames;
	}
	preload() {

	}

	create() {
		//THIS WHOLE THING IS TESTING
		console.log(this.choiceLeft);

		//Because we get a spritesheet object from the character select screen, we need to create the sprite based off of that object.
		let jousterLeft = this.physics.add.sprite(this.choiceLeft.x, this.choiceLeft.y, this.choiceLeft.texture.key, this.choiceLeft.frame.name);
		jousterLeft.flipX = true;
		let jousterRight = this.physics.add.sprite(this.choiceRight.x, this.choiceRight.y, this.choiceRight.texture.key, this.choiceRight.frame.name);

		//This is an attempt to create a unified animation so we don't need spaghetti code
		this.anims.create({
		key: 'runningLeft',
		//repeat -1 means it loops

			 repeat: -1,
			 frameRate: 10,
			 //Basically you get the key of the certain texture, and using the array passed from the character selection, determine the beginning and end frames
			 frames: this.anims.generateFrameNames(this.choiceLeft.texture.key, {start: this.leftFrameArray[0], end: this.leftFrameArray[1]})
		 });

		this.anims.create({
		key: 'runningRight',
		//repeat -1 means it loops
			 repeat: -1,
			 frameRate: 10,
			 //Basically you get the key of the certain texture, and using the array passed from the character selection, determine the beginning and end frames
			 frames: this.anims.generateFrameNames(this.choiceRight.texture.key, {start: this.rightFrameArray[0], end: this.rightFrameArray[1]})
		 });

		this.anims.create({
		key: 'attackingLeft',
		//repeat -1 means it loops

			 repeat: -1,
			 frameRate: 10,
			 //Basically you get the key of the certain texture, and using the array passed from the character selection, determine the beginning and end frames
			 frames: this.anims.generateFrameNames(this.choiceLeft.texture.key, {start: this.leftFrameArray[2], end: this.leftFrameArray[3]})
		 });

		this.anims.create({
		key: 'attackingRight',
		//repeat -1 means it loops
			 repeat: -1,
			 frameRate: 10,
			 //Basically you get the key of the certain texture, and using the array passed from the character selection, determine the beginning and end frames
			 frames: this.anims.generateFrameNames(this.choiceRight.texture.key, {start: this.rightFrameArray[2], end: this.rightFrameArray[3]})
		 });



		jousterLeft.play('attackingLeft');
		jousterRight.play('attackingRight');

	  	let titleText = this.add.text(100, 400, "Now Playing Game");
	}
}

//exports the scene so config can load it
export default GameScreen;