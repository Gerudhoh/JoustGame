import Phaser from "phaser";
import jousterImg from "./assets/jouster.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet("jouster", jousterImg, {frameWidth: 60, frameHeight: 74});
}

function create() {
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
}
