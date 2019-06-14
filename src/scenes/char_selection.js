//Import statements
import lance2Portrait from "../assets/lance2Portrait.png";
import sword2Portrait from "../assets/sword2Portrait.png";
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
		this.load.image("button1", lance2Portrait);
		this.load.image("button2", sword2Portrait);
		this.load.image("startButton", startButton);
	}

	create() {
		var selectedClass = this.add.text(300, 300, 'No class selected');
		//custom buttons for character classes are here
		let portrait1 = new Button(this, 100, 100, 100, 100, "button1", this.buttonCallback);
		let portrait2 = new Button(this, 210, 100, 100, 100, "button2", this.buttonCallback);
		let playButton = new Button(this, 300, 400, 200, 50, "startButton", this.buttonCallback);

		//Event listeners for when the specific character portraits are clicked.
		//Update the text stating which character is currently selected
		portrait1.on('pointerup', function (event) {
			selectedClass.setText('Selected Eliwood');
		});
		portrait2.on('pointerup', function (event) {
			selectedClass.setText('Selected Forde');
		});

		//Swap to the actual game
		playButton.on('pointerup', function (event) {
		  this.scene.start("GameScreen");
		}, this);
	}


}

export default SelectionScreen;