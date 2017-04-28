var VerticalMario = VerticalMario || {};

VerticalMario.Mario = function(game, x, y){
   Phaser.Sprite.call(this, game, x, y, 'mario');
   this.anchor.setTo(0.5);
   this.scale.setTo(1.25);
   this.game.physics.arcade.enable(this);
   this.body.collideWorldBounds = true;
   this.body.gravity.y = 100;
   this.facingRight = true;

   this.animations.add('standRight', [6], 1, true);
   this.animations.add('standLeft', [5], 1, true);
   this.animations.add('walkingLeft', [0,1,2], 10, true);
   this.animations.add('walkingRight', [9,10,11], 10, true);
   this.animations.add('jumpLeft', [4], 1, true);
   this.animations.add('jumpRight', [7], 1, true);
   this.animations.play('standRight');

   this.cursors = game.input.keyboard.createCursorKeys();
}

VerticalMario.Mario.prototype = Object.create(Phaser.Sprite.prototype);
VerticalMario.Mario.prototype.constructor = VerticalMario.Mario;

VerticalMario.Mario.prototype.update = function(){
  if(this.cursors.up.isDown && this.body.touching.down){
    this.body.velocity.y = -100;
  }
  else if(this.cursors.left.isDown){
    this.body.velocity.x = -100;
    this.facingRight = false;
    this.animations.play('walkingLeft')
  }else if(this.cursors.right.isDown){
    this.body.velocity.x = 100;
    this.facingRight = true;
    this.animations.play('walkingRight')
  }else{
    this.body.velocity.x = 0;
    if(this.facingRight){
        this.animations.play('standRight');
    }else{
      this.animations.play('standLeft');
    }
  }

  if(!this.body.wasTouching.down){
    if(this.facingRight){
      this.animations.play('jumpRight');
    }else{
      this.animations.play('jumpLeft');
    }
  }

};
