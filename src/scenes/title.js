import jousterImg from "../assets/jouster.png";
import swordImg from "../assets/sword1.png";
import swordImg2 from "../assets/sword2.png";
import lanceImg from "../assets/lance1.png";
import lanceImg2 from "../assets/lance2.png";

class TitleScreen extends Phaser.Scene {
	//the key that references this class, which is used by other functions
	constructor() {
		super('TitleScreen')
	}

	preload() {
		//load in the spritesheet for testing
	  	this.load.spritesheet("jouster", jousterImg, {frameWidth: 60, frameHeight: 74});
	  	this.load.spritesheet("sword1", swordImg, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("sword2", swordImg2, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("lance1", lanceImg, {frameWidth: 100, frameHeight: 100});
	  	this.load.spritesheet("lance2", lanceImg2, {frameWidth: 100, frameHeight: 100});
	}

	create() {
	 	//running animation goes here
	  	this.anims.create({
	 	key: 'swordRunning',
	 	//repeat -1 means it loops

		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword1', {start: 0, end: 4})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'swordAttacking',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword1', {start: 6, end: 24})
	  	});

	  	//running animation goes here
	  	this.anims.create({
	 	key: 'sword2Running',
	 	//repeat -1 means it loops

		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword2', {start: 0, end: 4})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'sword2Attacking',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('sword2', {start: 6, end: 24})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'lanceAttacking',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('lance1', {start: 6, end: 27})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'lanceRunning',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('lance1', {start: 0, end: 4})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'lance2Running',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('lance2', {start: 0, end: 2})
	  	});

	  	//atacking animation goes here
	  	this.anims.create({
		  	key: 'lance2Attacking',
		  	//repeat -1 means it loops
		  	repeat: -1,
		  	frameRate: 10,
		  	frames: this.anims.generateFrameNames('lance2', {start: 4, end: 20})
	  	});

	  	//testing for sprites of players
	 	let jouster = this.add.sprite(300, 200, "sword1", 5);
	  	//play the 2 animations to test them
	  	jouster.play('swordAttacking');
	  	let jouster2 = this.add.sprite(500, 200, "sword1", 0);
	  	jouster2.play('swordRunning');

	  	let l1 = this.add.sprite(500, 300, "lance1", 5);
	  	l1.play('lanceRunning');

	  	let l2 = this.add.sprite(500, 400, "lance1", 5);
	  	l2.play('lanceAttacking');

	  	let l3 = this.add.sprite(200, 300, "lance2", 3);
	  	l3.play('lance2Running');

	  	let l4 = this.add.sprite(200, 400, "lance2", 3);
	  	l4.play('lance2Attacking');

	  	let l5 = this.add.sprite(300, 400, "lance2", 3);
	  	l5.play('sword2Attacking');

	  	let l6 = this.add.sprite(300, 300, "lance2", 3);
	  	l6.play('sword2Running');

	  	let titleText = this.add.text(200, 400, "Jousting Game, left click to play game");



	  	//Gets user input to change the scene to the game
	  	this.input.on('pointerdown', () => this.scene.start('GameScreen'))
	}
}

//Exports the scene so config can load it
export default TitleScreen;