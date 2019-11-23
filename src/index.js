import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);
var logo;
let player;
var cursors;
var sheetpic = '../src/assets/spritesheet.png';
var sheetpic2 = '../src/assets/candleman2.png';
var flipFlop;
// var timedEvent;
// var text;




function preload() {
  this.load.spritesheet('player', sheetpic , { frameWidth: 100, frameHeight: 100 });
  this.load.image("background", "../src/assets/water.png");
  this.load.bitmapFont("pixelFont","../src/assets/font/font.png","../src/assets/font/font.xml");
  this.load.audio("bgmusic","../src/assets/Race_Car.mp3");
  this.load.audio("bgex","../src/assets/Big_Explosion_Cut_off.mp3");


}

function create() {
  //sound
  let bgsound = this.sound.add("bgmusic");
  let bgexx = this.sound.add("bgex")
  bgsound.play();
  //Background
  this.add.image(600, 300, "background");
  // this.add.image(400, 300, 'player');
  player = this.physics.add.sprite(400, 450, 'player');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  // const camera = this.cameras.main
  // camera.startFollow(player)
  // camera.setBounds(0, 0, map.widthInPixels,map.heightInPixels)
  
  const anims = this.anims;
  anims.create({
    key: "left",
    frames: anims.generateFrameNames("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "right",
    frames: anims.generateFrameNames("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "front",
    frames: anims.generateFrameNames("player", { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({ key: "back",
  frames: anims.generateFrameNames("player", { start: 10, end: 17 }),
  frameRate: 10,
  repeat: -1
});

anims.create({
  key: "end",
  frames: anims.generateFrameNames("player", { start: 6, end: 8 }),
  frameRate: 10,
  repeat: -1
});

this.score = 0;
this.scoreLabel = this.add.bitmapText(350, 300, "pixelFont", "Score: ", 20);

this.point = 0;

// function hitEnemy(player, enemiesGroup) {
//   this.scene.restart()
//   }

}

function update() {

  // this.text.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4));

  // cursors = this.input.keyboard.createCurserKeys();
  cursors = this.input.keyboard.createCursorKeys();

  player.body.setVelocity(0)

  // if (cursors.left.isDown) {
  //   player.body.setVelocityX(-100);
  // } else if (cursors.right.isDown) {
  //   player.body.setVelocityX(100);
  // } else if (cursors.up.isDown) {
  //   player.body.setVelocityY(-100);
  // } else if (cursors.down.isDown) {
  //   player.body.setVelocityY(100);
  // } 


//   if (cursors.left.isDown) {
//     player.anims.play("left", true);
//     this.score += 15;
//     this.point += 1
//     this.scoreLabel.text = "SCORE: " + this.score;
//   } else if (cursors.right.isDown) {
//     player.anims.play("right", true);
//     this.score += 15;
//     this.scoreLabel.text = "SCORE: " + this.score;
//   } else if (cursors.up.isDown) {
//     player.anims.play("back", true);
//     this.score += 15;
//     this.scoreLabel.text = "SCORE: " + this.score;
//   } else if (cursors.down.isDown) {
//     player.anims.play("front", true);
//     this.score += 15;
//     this.scoreLabel.text = "SCORE: " + this.score;
//   } else {
//     player.anims.play("fronend", true);
//     player.anims.stop();
//     this.score -= 35;
//     this.scoreLabel.text = "SCORE: " + this.score;
// }


if (cursors.space.isDown){
  if (!flipFlop) {
    if(this.score <= 1000){
    player.anims.play("left", true);
    this.score += 60;
    this.point += 1
    this.scoreLabel.text = "SCORE: " + this.score;
    flipFlop = true;}
    else{


    }
  }
  // else {
  //       player.anims.stop();
  //       this.score -= 5;
  //       this.scoreLabel.text = "SCORE: " + this.score;
  //   }
}

if (cursors.space.isUp) {
  if(this.score <= 1000){
  flipFlop = false;
  // player.anims.stop();
        this.score -= 8;
        this.scoreLabel.text = "SCORE: " + this.score;}
        else{
          this.scoreLabel.text = "You have killed the Candleman !!!!!!!";
          player.anims.play("end", true);
          var sheetpic = '../src/assets/killend.png';
          this.load.spritesheet('player', sheetpic , { frameWidth: 100, frameHeight: 100 });


        }

}




}





