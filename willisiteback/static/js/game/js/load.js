var loadState = {
	preload : function(){
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });

		loadingLabel.anchor.setTo(0.5,0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(progressBar);

		game.load.spritesheet('player', '../static/js/game/assets/player2.png', 20, 20);
		//game.load.image('wallV', 'assets/wallVertical.png');
		//game.load.image('wallH', 'assets/wallHorizontal.png');
		game.load.image('coin', '../static/js/game/assets/coin.png');
		game.load.image('enemy', '../static/js/game/assets/enemy.png');

		game.load.image('background', '../static/js/game/assets/background.png');

		game.load.audio('jump', ['../static/js/game/assets/jump.ogg', '../static/js/game/assets/jump.mp3']);

		game.load.audio('coin', ['../static/js/game/assets/coin.ogg', '../static/js/game/assets/coin.mp3']);

		game.load.audio('dead', ['../static/js/game/assets/dead.ogg', '../static/js/game/assets/dead.mp3']);

		game.load.audio('bgsound', ['../static/js/game/assets/bgsound.mp3']);

		game.load.image('pixel', '../static/js/game/assets/pixel.png');

		game.load.spritesheet('mute', '../static/js/game/assets/muteButton.png', 28, 22);

		game.load.image('tileset', '../static/js/game/assets/tileset.png');
		game.load.tilemap('map', '../static/js/game/assets/tiles.json', null, Phaser.Tilemap.TILED_JSON);

		game.load.image('jumpButton', '../static/js/game/assets/jumpButton.png');
		game.load.image('rightButton', '../static/js/game/assets/rightButton.png');
		game.load.image('leftButton', '../static/js/game/assets/leftButton.png');
	},

	create : function(){

		if(!game.device.desktop){
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

			document.body.style.backgroundColor = '#3498db';

			game.scale.minWidth = 250;
			game.scale.minHeight = 170;
			game.scale.maxWidth = 1000;
			game.scale.maxHeight = 680;

			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;

			game.scale.setScreenSize(true)

		}

		game.state.start('menu');
	}
}