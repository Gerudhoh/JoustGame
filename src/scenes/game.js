import swordImg1 from "../assets/sword1.png";
import swordImg2 from "../assets/sword2.png";
import backgroundImg from "../assets/background.png";

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
		 
		jousterRight = this.add.sprite(700, 400, "sword1", 5);
		jousterLeft = this.add.sprite(100, 450, "sword2", 0);
		  let titleText = this.add.text(50, 550, "Now Playing Game");
		  this.add.image(400, 300, 'background');

		  this.anims.create({
			key: 'runningLeft',
			//repeat -1 means it loops
   
				 repeat: -1,
				 frameRate: 10,
				 frames: this.anims.generateFrameNames('sword1', {start: 0, end: 4})
			 });
			 jousterRight.play('runningLeft');
			
			 this.anims.create({
				key: 'runningRight',
				//repeat -1 means it loops
	   
					 repeat: -1,
					 frameRate: 10,
					 frames: this.anims.generateFrameNames('sword2', {start: 0, end: 4})
				 });
			  jousterLeft.play('runningRight');
			
	}

/*	update() {
	
		jousterLeft.body.velocity.x = 0;
		jousterRight.body.velocity.x = 0;
	
		if (cursors.left.isDown)
		{
			jousterRight.body.velocity.x = -150;
			jousterRight.play('runningLeft');
		}
		else
		{
			jousterRight.body.velocity.x = 0;
			jousterRight.animations.stop();

		}
	
	}*/
}

//exports the scene so config can load it
export default GameScreen;