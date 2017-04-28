var VerticalMario = VerticalMario || {};

VerticalMario.PreloadState = {
  preload: function(){
    console.log("preloadlad state: Preload");
    this.game.load.spritesheet('mario', 'assets/mario_small_frame.png', 32, 32, 12);
    this.game.load.spritesheet('goomba', 'assets/goomba.png', 32, 32);
    this.game.load.image('brick', 'assets/block.png', 32, 32);
    this.game.load.image('main_title', 'assets/main_title.gif');
    this.game.load.bitmapFont('gameFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    this.game.load.bitmapFont('marioFont', 'assets/fonts/mario20_0.png', 'assets/fonts/mario20.fnt');
  },

  create: function(){
    this.game.state.start('MenuState');

  }
}
