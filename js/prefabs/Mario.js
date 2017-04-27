var VerticalMario = VerticalMario || {};

VerticalMario.Mario = function(game, x, y){
   Phaser.Sprite.call(this, game, x, y, 'mario');
   this.anchor.setTo(0.5);
   this.scale.setTo(0.75);
   this.animations.add('standright', [6], 10, true);
   this.animations.play('standright');
}

VerticalMario.Mario.prototype = Object.create(Phaser.Sprite.prototype);
VerticalMario.Mario.prototype.constructor = VerticalMario.Mario;

VerticalMario.Mario.prototype.moveLeft = function(){
  console.log("moving left");
  // this.velocity.x = -100;
};
VerticalMario.Mario.prototype.moveRight = function(){
  console.log("moving right");
  // this.velocity.x = 100;
};
