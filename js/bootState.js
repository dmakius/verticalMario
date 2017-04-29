var VerticalMario = VerticalMario || {};

VerticalMario.BootState = {
  init: function(){
    console.log("Boostate init");
  },

  preload: function(){
    this.game.load.image('background','/assets/bg.png');
    this.game.load.image('preloader', '/assets/preloader.png');
    this.game.load.bitmapFont('gameFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    this.game.load.bitmapFont('marioFont', 'assets/fonts/mario20_0.png', 'assets/fonts/mario20.fnt');
  },

  create: function(){
    this.game.state.start('PreloadState');
  }
}
