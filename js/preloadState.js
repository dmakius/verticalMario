var VerticalMario = VerticalMario || {};

VerticalMario.PreloadState = {
  preload: function(){
    this.background = this.game.add.sprite(0,0, 'background');
    this.preloadText = this.game.add.bitmapText(this.game.world.centerX -  150, 130, "gameFont", "LOADING..." , 48);
    this.preloadText.anchor.setTo(0.5);
    this.preloadBar = this.game.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
    this.preloadBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.game.load.spritesheet('mario', 'assets/mario_small.png', 32, 32);
    this.game.load.image('coin', 'assets/coin.png');
    this.game.load.spritesheet('goomba', 'assets/goomba.png', 32, 32);
    this.game.load.image('brick', 'assets/block.png', 32, 32);
    this.game.load.image('main_title', 'assets/main_title.gif');


    //SOUNDS
    this.game.load.audio('getCoin', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/smb_coin.wav');
  	this.game.load.audio('jump', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/smb_jump-small.wav');
  	this.game.load.audio('dead', 'https://s3-us-west-2.amazonaws.com/makoverwebsite/platformerGame/assets/sounds/dead.mp3');
    this.game.load.audio('hitHead' , '/assets/sounds/hit_head.mp3');
    this.game.load.audio('squishEnemy', '/assets/sounds/squish_enemy.mp3');
  },

  create: function(){
    this.game.state.start('MenuState');

  }
}
