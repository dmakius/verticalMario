var VerticalMario = VerticalMario || {}

VerticalMario.InitPlatforms  =  function(game, x , y){
  Phaser.Sprite.call(this, game, x, y, 'brick');
  this.anchor.setTo(0.5);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
  this.game.physics.arcade.enable(this);
  this.body.immovable = true;

}

VerticalMario.InitPlatforms.prototype = Object.create(Phaser.Sprite.prototype);
VerticalMario.InitPlatforms.prototype.constructor = VerticalMario.InitPlatforms;
