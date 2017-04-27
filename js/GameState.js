var VerticalMario = VerticalMario || {};

VerticalMario.GameState = {
  preload: function(){

  },

  create: function(){
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.background = this.game.add.sprite(0,0, 'background');

    this.player = this.game.add.sprite(300,300,'mario');
    this.player.enableBody = true;
    this.game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 100;
    this.player.facingRight = true;
    this.player.jump = false;

    this.player.animations.add('standRight', [6], 1, true);
    this.player.animations.add('standLeft', [5], 1, true);
    this.player.animations.add('walkingLeft', [0,1,2], 10, true);
    this.player.animations.add('walkingRight', [9,10,11], 10, true);
    this.player.animations.add('jumpLeft', [4], 1, true);
    this.player.animations.add('jumpRight', [7], 1, true);
    this.player.animations.play('standRight');

    this.createInitialPlatform();
    this.createGoombas();
  },

  update: function(){
  this.game.physics.arcade.collide(this.player, this.initPlatforms, this.jumpReset);
  this.game.physics.arcade.collide(this.badGuys, this.initPlatforms);
  this.game.physics.arcade.collide(this.badGuys, this.player, this.playerCollision);

  if(this.cursors.up.isDown && this.player.body.wasTouching.down){
    this.player.body.velocity.y = -100;
  }else if(this.cursors.left.isDown){
    this.player.body.velocity.x = -100;
    this.player.facingRight = false;
    this.player.animations.play('walkingLeft');
  }else if(this.cursors.right.isDown){
    this.player.body.velocity.x = 100;
    this.player.facingRight = true;
    this.player.animations.play('walkingRight');
  }else if(this.player.facingRight){
    this.player.body.velocity.x = 0;
    this.player.animations.play('standRight');
  }else{
    this.player.body.velocity.x = 0;
    this.player.animations.play('standLeft');
  }

  //adding jumping frames
  if(this.player.body.touching.down == false){
      if(this.player.facingRight == true){
        this.player.animations.play("jumpRight");
      }else{
        this.player.animations.play("jumpLeft");
      }
  }
},

createGoombas:function(){
  this.badGuys = this.game.add.group();
  this.badGuys.enableBody = true;
  var goomba = new VerticalMario.Goomba(this.game, 100, 350);
  this.badGuys.add(goomba);
},

playerCollision: function(player, badGuy){
  if(badGuy.body.touching.up){
    console.log(badGuy);
    badGuy.animations.play('dead');

    // to do
    // add timer to kill badguy
    //

    player.body.velocity.y = -50;
  }
},

badGuyKilled: function(){
  console.log("badGuy DEAD");
},

resetJump: function(){
  this.player.jump = false;
  this.player.gravity = 0;
},

createInitialPlatform: function(){
  this.initPlatforms = this.game.add.group();

  for(var x = 0; x < 30; x++){
    var platform = new VerticalMario.InitPlatforms(this, 32*x,400);
    this.initPlatforms.add(platform);
  }
      // this.game.physics.arcade.enable(this.initPlatforms);
  }
}
