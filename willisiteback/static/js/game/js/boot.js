var bootState = {

	preload : function(){
		game.load.image('progressBar' , '../static/js/game/assets/progressBar.png');
	},
	create : function(){
		game.stage.backgroundColor = '#00000';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
}