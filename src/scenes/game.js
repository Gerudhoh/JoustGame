import swordImg1 from "../assets/sword1.png";
import swordImg2 from "../assets/sword2.png";
import backgroundImg from "../assets/background.png";

var jousterLeft;
var jousterRight;
var cursors;
var rightButton;
//Creates phaser class for the scene
class GameScreen extends Phaser.Scene {

	constructor() {
		//the key that references this class, which is used by other functions
		super('GameScreen')
	}

	preload() {
		this.load.spritesheet("sword1", swordImg1, {frameWidth: 100, frameHeight: 100});
		this.load.spritesheet("sword2", swordImg2, {frameWidth: 100, frameHeight: 100});
		this.load.image('background', backgroundImg, {frameWidth: 500, frameHeight: 500});
	}

	create() {
	 	
		let titleText = this.add.text(50, 550, "Now Playing Game");
		this.add.image(400, 300, 'background');
		  
		jousterRight = this.physics.add.sprite(700, 400, "sword1", 5);
		jousterLeft = this.physics.add.sprite(100, 450, "sword2", 1);

		  this.anims.create({
			key: 'runningLeft',
			//repeat -1 means it loops
   
				 repeat: -1,
				 frameRate: 10,
				 frames: this.anims.generateFrameNames('sword1', {start: 0, end: 4})
			 });

			 this.anims.create({
				key: 'runningRight',
				//repeat -1 means it loops
	   
					 repeat: -1,
					 frameRate: 10,
					 frames: this.anims.generateFrameNames('sword2', {start: 0, end: 4})
				 });

			   //  Input Events
			  cursors = this.input.keyboard.createCursorKeys();
			  rightButton = this.input.keyboard.addKey('D');
			
	}
	update(){

		if(jousterRight.x < 0 || jousterLeft.x > 1000){
			this.scene.restart();
		}

		if (cursors.left.isDown)	
		{
    		jousterRight.body.setVelocityX(-160);
			jousterRight.play('runningLeft', true);
		}
		else
		{
    		jousterRight.setVelocityX(0);
		}

	if (rightButton.isDown)	
		{
    		jousterLeft.body.setVelocityX(160);
			jousterLeft.play('runningRight', true);
		}
		else
		{
    		jousterLeft.setVelocityX(0);
		}

	}
}

//exports the scene so config can load it
export default GameScreen;