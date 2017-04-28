var VerticalMario = VerticalMario || {};
VerticalMario.MenuState = {
  preload: function(){
    console.log("menu state: Preload");
  },

  create: function(){
    this.background = this.game.add.sprite(0,0, 'background');
    this.game.logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'main_title');
    this.game.logo.anchor.setTo(0.5);
    this.game.title = this.game.add.bitmapText(this.game.world.centerX, 375, "gameFont", "press spacebar to start" , 36);
    this.game.title.anchor.setTo(0.5);

    this.start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update:function(){
    if(this.start.isDown){
      this.game.state.start('GameState');
    }
  }
}
