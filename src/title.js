import jousterImg from "./assets/jouster.png";

class TitleScreen extends Phaser.Scene {
	constructor() {
		super('TitleScreen')
	}

	preload() {
	  this.load.spritesheet("jouster", jousterImg, {frameWidth: 60, frameHeight: 74});
	}

	create() {
	 	let jouster = this.add.sprite(300, 200, "jouster", 0);
	  	this.anims.create({
	 	key: 'running',
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('jouster', {start: 1, end: 4})
	  	});
	  	this.anims.create({
		  	key: 'attacking',
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('jouster', {start: 10, end: 19})
	  	});

	  	jouster.play('attacking');
	  	let jouster2 = this.add.sprite(500, 200, "jouster", 0);
	  	jouster2.play('running');

	  	let titleText = this.add.text(200, 400, "Jousting Game, left click to play game");
	  	this.input.on('pointerdown', () => this.scene.start('GameScreen'))
	}
}

export default TitleScreen;