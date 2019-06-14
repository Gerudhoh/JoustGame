//Import statements
import lance1Portrait from "../assets/lance1Portrait.png";
import lance2Portrait from "../assets/lance2Portrait.png";
import sword1Portrait from "../assets/sword1Portrait.png";
import sword2Portrait from "../assets/sword2Portrait.png";
import axe1Portrait from "../assets/axe1Portrait.png";
import axe2Portrait from "../assets/axe2Portrait.png";
import startButton from "../assets/startButton.jpg";

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
	}

	create() {
		let playerChoice = "no selection";
		let currentPlayer = "1";
		let player1Selected;
		let player2Selected;

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
			playerChoice = "Isadora";
			selectedClass.setText('Selected Isadora');
		});
		portrait2.on('pointerup', function (event) {
			playerChoice = "Forde";
			selectedClass.setText('Selected Forde');
		});
		portrait3.on('pointerup', function (event) {
			playerChoice = "Sain";
			selectedClass.setText('Selected Sain');
		});
		portrait4.on('pointerup', function (event) {
			playerChoice = "Eliwood";
			selectedClass.setText('Selected Eliwood');
		});
		portrait5.on('pointerup', function (event) {
			playerChoice = "Kent";
			selectedClass.setText('Selected Kent');
		});
		portrait6.on('pointerup', function (event) {
			playerChoice = "Marcus";
			selectedClass.setText('Selected Marcus');
		});

		//Swap to the actual game
		playButton.on('pointerup', function (event) {
			if ((currentPlayer ==  "1") && (playerChoice != "no selection")) {
				currentPlayer = "2";
				player1Selected = playerChoice;
				playerChoice = "no selection";
				selectedClass.setText('No class selected');
				currentPlayerText.setText('Player 2, please select your character.')
			}
			else if ((currentPlayer ==  "2") && (playerChoice != "no selection")){
				player2Selected = playerChoice;
				this.scene.start("GameScreen", {player1Choice: player1Selected, player2Choice: player2Selected});
			}
		}, this);
	}
}

export default SelectionScreen;
