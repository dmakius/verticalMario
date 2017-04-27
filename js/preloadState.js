var VerticalMario = VerticalMario || {};

VerticalMario.PreloadState = {
  preload: function(){
    console.log("preloadlad state: Preload");
    this.game.load.spritesheet('mario', 'assets/mario_small_frame.png', 32, 32, 12);
    this.game.load.spritesheet('goomba', 'assets/goombas.jpg', 31, 32);
    this.game.load.image('brick', 'assets/block.png', 32, 32);
    this.game.load.bitmapFont('newFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');

  },

  create: function(){
    this.game.state.start('MenuState');

  }
}
