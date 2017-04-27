var VerticalMario = VerticalMario || {}

VerticalMario.Goomba = function(game, x, y){
  Phaser.Sprite.call(this, game, x, y, 'goomba');
  this.game.physics.arcade.enable(this);
  this.body.velocity.x = 40;
  this.body.gravity.y  = 30;
  this.body.collideWorldBounds = true;
  this.anchor.setTo(0.5);
  this.animations.add();
  this.animations.add('walking', [0,1], 10, true);
  this.animations.add('dead', [2], 10, true);
  this.animations.play('walking');

}

VerticalMario.Goomba.prototype = Object.create(Phaser.Sprite.prototype);
VerticalMario.Goomba.prototype.constructor = VerticalMario.Goomba;
