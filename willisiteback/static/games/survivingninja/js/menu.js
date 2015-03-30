var menuState = {
	preload: function(){

	},
	create: function(){
		this.bg = game.add.sprite(0, 0, "bgmenu");

		this.titleGame = game.add.text(game.world.centerX - 245, game.world.centerY - 120, 'Surviving Ninja', {font : '48px Shojumaru', fill: '#760606'});
		//this.titleGame.scale.setTo(0.5, 0.5);

		this.btn_play = game.add.button(game.world.centerX, 180, "btnplay", this.startGame,this);
		this.btn_play.anchor.setTo(0.5, 0.5);
		this.btn_config = game.add.button(game.world.centerX, 260, "btnconfig", this.configGame,this);
		this.btn_config.anchor.setTo(0.5, 0.5);
		this.bgmusic = game.add.audio('thunder');
		this.bgmusic.loop = true;
		this.bgmusic.play();

		this.buttonSound = game.add.audio('button');

	},

	startGame: function(){
		this.buttonSound.play();
		this.bgmusic.stop();
		this.bgmusic.destroy();
		game.state.start("play");
	},
	configGame: function(){
		this.bgmusic.destroy();
		this.buttonSound.play();
		game.state.start("configuration");
	}
}