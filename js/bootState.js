var VerticalMario = VerticalMario || {};

VerticalMario.BootState = {
  init: function(){
    console.log("Boostate init");
  },

  preload: function(){
    this.game.load.image('background','/assets/bg.png');
  },

  create: function(){
    this.game.state.start('PreloadState');
  }
}
