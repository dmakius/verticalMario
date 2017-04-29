var VerticalMario = VerticalMario || {}

VerticalMario.Goomba = function(game, x, y){
  Phaser.Sprite.call(this, game, x, y, 'goomba');
  this.game.physics.arcade.enable(this);
  this.body.velocity.x = 50;
  this.body.gravity.y  = 40;
  this.anchor.setTo(0.5);
  this.animations.add();
  this.animations.add('walking', [0,1], 10, true);
  this.animations.add('dead', [2], 10, true);
  this.animations.play('walking');
}

VerticalMario.Goomba.prototype = Object.create(Phaser.Sprite.prototype);
VerticalMario.Goomba.prototype.constructor = VerticalMario.Goomba;

VerticalMario.Goomba.prototype.update = function(){
  if(this.body.x >= this.game.world.width || this.body.x <= 0){
    this.body.velocity.x *= -1;
  }
  if(this.body.y >= this.game.world.height + 50){
    this.relocate();
  }

  if(this.body.velocity.x == 0){
    this.body.velocity.x = 50;
  }
}

VerticalMario.Goomba.prototype.relocate = function(){
  var ran = Math.random();
  this.animations.play('walking');
  this.y = -25;
   if(ran <= 0.5){
     this.x = 100;
    this.body.velocity.x = 50;
   }else{
     this.x = 600;
     this.body.velocity.x = -50;
   }
}
