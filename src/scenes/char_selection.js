//Import statements
import lance1Portrait from "../assets/lance1Portrait.png";
import lance2Portrait from "../assets/lance2Portrait.png";
import sword1Portrait from "../assets/sword1Portrait.png";
import sword2Portrait from "../assets/sword2Portrait.png";
import axe1Portrait from "../assets/axe1Portrait.png";
import axe2Portrait from "../assets/axe2Portrait.png";
import startButton from "../assets/startButton.jpg";

import lanceImg1 from "../assets/lance1.png";
import lanceImg2 from "../assets/lance2.png";
import swordImg1 from "../assets/sword2.png";
import swordImg2 from "../assets/sword1.png";
import axeImg1 from "../assets/axe1.png";
import axeImg2 from "../assets/axe2.png";

//Custom Button class for Phaser 3
class Button extends Phaser.GameObjects.Image { 
	//When creating a new custom button, follow the format below:
		//let variableName = new Button(this, X position, Y position, Width of button, Height of button, Custom button image, this.buttonCallback);

	//Constructor for the button
    constructor(context, xPosition, yPosition, width, height, image, callback) {
        super(context, xPosition, yPosition, image);
        //Set width and height
       	this.displayWidth = width;
        this.displayHeight = height;

        //Set callback and scope
        this.myCallback = callback;
        this.myScope = context; // scope
 
 		//Create event listeners for the button
        this.setInteractive();

        //When the mouse is hovered over, enlarge the image by 10x10 pixels
        this.on('pointerover', function (event) {
			this.displayWidth = width + 10;
            this.displayHeight = height + 10;
			
		});

        //When the mouse is no longer hovering over the image, reset it to the default width and height
		this.on('pointerout', function (event) {
			this.displayWidth = width;
            this.displayHeight = height;
			
		});

		//Add the button to the scene
        context.add.existing(this);
    }

}

//The scene is here
class SelectionScreen extends Phaser.Scene {
	//the key that references this class, which is used by other functions
	constructor() {
		super('SelectionScreen')
	}

	preload() {
		this.load.image("button1", sword1Portrait);
		this.load.image("button2", sword2Portrait);
		this.load.image("button3", lance1Portrait);
		this.load.image("button4", lance2Portrait);
		this.load.image("button5", axe1Portrait);
		this.load.image("button6", axe2Portrait);
		this.load.image("startButton", startButton);

		this.load.spritesheet("Sain", lanceImg1, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("Eliwood", lanceImg2, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("Isadora", swordImg2, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("Forde", swordImg1, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("Kent", axeImg1, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("Marcus", axeImg2, {frameWidth: 100, frameHeight: 100});
	}

	create() {

		let playerChoice = null;
		let currentPlayer = "1";
		//Variables for where the sprite's location is
		let xPos = 100;
		let yPos = 450;

		//Temporary variables for passing in values to game.js
		let player1Selected;
		let player2Selected;
		let player1Frames;
		let player2Frames;
		let choiceFrames;

		//Text goes here
		var selectedClass = this.add.text(350, 450, 'No class selected');
		var currentPlayerText = this.add.text(250, 0, 'Player 1, please select your character.');

		//custom buttons for character classes are here
		let portrait1 = new Button(this, 200, 100, 150, 150, "button1", this.buttonCallback);
		let portrait2 = new Button(this, 360, 100, 150, 150, "button2", this.buttonCallback);
		let portrait3 = new Button(this, 520, 100, 150, 150, "button3", this.buttonCallback);
		let portrait4 = new Button(this, 200, 260, 150, 150, "button4", this.buttonCallback);
		let portrait5 = new Button(this, 360, 260, 150, 150, "button5", this.buttonCallback);
		let portrait6 = new Button(this, 520, 260, 150, 150, "button6", this.buttonCallback);
		let playButton = new Button(this, 400, 500, 200, 50, "startButton", this.buttonCallback);

		//Event listeners for when the specific character portraits are clicked.
		//Update the text stating which character is currently selected
		portrait1.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Isadora", 5);
			choiceFrames = [0, 4, 6, 24];
			selectedClass.setText('Selected Isadora');
		}, this);

		portrait2.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Forde", 5);
			choiceFrames = [0, 4, 6, 24];
			selectedClass.setText('Selected Forde');
		}, this);

		portrait3.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Sain", 5);
			choiceFrames = [0, 4, 6, 27];
			selectedClass.setText('Selected Sain');
		}, this);

		portrait4.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Eliwood", 3);
			choiceFrames = [0, 2, 4, 20];
			selectedClass.setText('Selected Eliwood');
		}, this);

		portrait5.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Kent", 5);
			choiceFrames = [0, 4, 6, 25];
			selectedClass.setText('Selected Kent');
		}, this);
		
		portrait6.on('pointerup', function (event) {
			playerChoice = this.physics.add.sprite(xPos, yPos, "Marcus", 5);
			choiceFrames = [0, 4, 6, 25];
			selectedClass.setText('Selected Marcus');
		}, this);

		//Swap to the actual game
		playButton.on('pointerup', function (event) {
			if ((currentPlayer ==  "1") && (playerChoice != null)) {
				currentPlayer = "2";
				player1Selected = playerChoice;
				player1Frames = choiceFrames;
				xPos = 700;
				playerChoice = null;
				selectedClass.setText('No class selected');
				currentPlayerText.setText('Player 2, please select your character.')
			}
			else if ((currentPlayer ==  "2") && (playerChoice != null)){
				player2Selected = playerChoice;
				player2Frames = choiceFrames;
				this.scene.start("GameScreen", {playerLeftChoice: player1Selected, playerRightChoice: player2Selected, playerLeftFrames: player1Frames, playerRightFrames: player2Frames});
			}
		}, this);
	}
}

export default SelectionScreen;
