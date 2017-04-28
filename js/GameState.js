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
    this.player.dead = false;

    this.player.animations.add('standRight', [0], 1, true);
    this.player.animations.add('standLeft', [14], 1, true);
    this.player.animations.add('walkingLeft', [15,16,17], 10, true);
    this.player.animations.add('walkingRight', [1,2,3], 10, true);
    this.player.animations.add('jumpLeft', [18], 1, true);
    this.player.animations.add('dead', [12] , 1, true);
    this.player.animations.add('jumpRight', [4], 1, true);
    this.player.animations.play('standRight');

    this.createInitialPlatform();
    this.createGoombas();
    this.timer = this.game.time.events.loop(6200, this.addRow, this);
  },

  update: function(){
  if(!this.player.dead){
        this.game.physics.arcade.collide(this.player, this.initPlatforms, this.brickCollision, null, this);
  }
  this.game.physics.arcade.collide(this.badGuys, this.initPlatforms);
  this.game.physics.arcade.collide(this.badGuys, this.player, this.playerCollision, null, this);

 if(this.player.dead == false){
   if(this.cursors.up.isDown && this.player.body.wasTouching.down){
     this.player.body.velocity.y = -150;
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
 }

//gameover
 if(this.player.body.y >= 600){
   this.game.state.start('MenuState');
 }
  this.initPlatforms.update();
},

addRow: function(){
  var gap = Math.floor(Math.random()*20);
  for(var x = 0; x < 24; x++){
    if(x <= gap || x >= gap + 4){
      var platform = new VerticalMario.InitPlatforms(this, 32*x,-25);
    }
    this.initPlatforms.add(platform);
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
    badGuy.animations.play('dead');
    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.killSprite, this, badGuy);
    player.body.velocity.y = -50;
  }else{
    console.log(player);
    this.player.animations.play('dead');
    this.player.dead = true;
    console.log('player dead');
    //player.body.velocity.y = -50;

  }
},

brickCollision: function(player, brick){
  if(brick.body.touching.down){
    console.log("brick hit");
    var brickBounce = this.game.add.tween(brick.body);
    brickBounce.to({x:brick.body.x, y:brick.body.y - 10}, 200, Phaser.Easing.Linear.None);
    brickBounce.onComplete.addOnce(function(){
      console.log("Brick needs to bounce back");
    });
    brickBounce.start();
    //brickRebounce.start();
  }
},

killSprite: function(badGuy){
   badGuy.kill();
},

createInitialPlatform: function(){
  this.initPlatforms = this.game.add.group();
  for(var y = 0; y < 5; y ++){
    var gap = Math.floor(Math.random()*20);
    for(var x = 0; x < 24; x++){
      if(x <= gap || x >= gap + 4){
        var platform = new VerticalMario.InitPlatforms(this, 32*x,125*y);
      }
      this.initPlatforms.add(platform);
    }
  }

  }
}
