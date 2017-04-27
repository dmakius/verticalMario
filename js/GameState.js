var VerticalMario = VerticalMario || {};

VerticalMario.GameState = {
  preload: function(){

  },

  create: function(){
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.background = this.game.add.sprite(0,0, 'background');


    this.player = this.game.add.group();
    var mario = new VerticalMario.Mario(this.game, 300, 200);
    this.player.add(mario);

    this.createInitialPlatform();
    this.createGoombas();
  },

  update: function(){
  this.game.physics.arcade.collide(this.player, this.initPlatforms);
  this.game.physics.arcade.collide(this.badGuys, this.initPlatforms);
  // this.game.physics.arcade.collide(this.badGuys, this.player, this.playerCollision);

  this.player.update();
  this.badGuys.update(this.player, this.badGuys);
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

createInitialPlatform: function(){
  this.initPlatforms = this.game.add.group();

  for(var x = 0; x < 30; x++){
    var platform = new VerticalMario.InitPlatforms(this, 32*x,400);
    this.initPlatforms.add(platform);
  }
}

}
