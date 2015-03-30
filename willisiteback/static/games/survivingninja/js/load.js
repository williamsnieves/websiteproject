var loadState = {
	preload : function(){
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Shojumaru', fill: '#ffffff' });

		loadingLabel.anchor.setTo(0.5,0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(progressBar);		

		game.load.spritesheet('blood', '../static/games/survivingninja/assets/blood2.png', 300, 338);
		game.load.image('shuriken', '../static/games/survivingninja/assets/shuriken.png');
		game.load.image('gem', '../static/games/survivingninja/assets/ruby.png');
		game.load.image('enemy', '../static/games/survivingninja/assets/enemy.png');
		game.load.image('tileset', '../static/games/survivingninja/assets/images.jpg');
		game.load.image('sky', '../static/games/survivingninja/assets/sky.gif');
		game.load.image('bgnight', '../static/games/survivingninja/assets/bgnight.png');
		game.load.image('bgday', '../static/games/survivingninja/assets/dayv1.png');
		game.load.audio('bgsound', ['../static/games/survivingninja/assets/bgsound.mp3']);
		game.load.audio('dead', ['../static/games/survivingninja/assets/kill.mp3']);
		game.load.audio('jump', ['../static/games/survivingninja/assets/jumpv2.mp3']);
		game.load.audio('button', ['../static/games/survivingninja/assets/buttons.mp3']);
		game.load.audio('nice', ['../static/games/survivingninja/assets/nice.mp3']);
		game.load.audio('sweet', ['../static/games/survivingninja/assets/sweet.mp3']);
		game.load.audio('thunder', ['../static/games/survivingninja/assets/thunder.mp3']);
		game.load.audio('impresive', ['../static/games/survivingninja/assets/impresive.mp3']);
		game.load.audio('shuriken', ['../static/games/survivingninja/assets/shuriken.mp3']);
		game.load.audio('elixir', ['../static/games/survivingninja/assets/elixir.mp3']);
		game.load.audio('power', ['../static/games/survivingninja/assets/powerlife.mp3']);
		game.load.audio('smile', ['../static/games/survivingninja/assets/smile.mp3']);
		game.load.tilemap('map', '../static/games/survivingninja/assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('lifebarbg', '../static/games/survivingninja/assets/lifebarbg.png');
		game.load.image('lifebar', '../static/games/survivingninja/assets/lifebar.png');
		game.load.image('hudninja', '../static/games/survivingninja/assets/hudninja.png');
		game.load.image('pixel', '../static/games/survivingninja/assets/pixel.png');
		game.load.image('btnconfig', '../static/games/survivingninja/assets/btnconfig.png');
		game.load.image('btnplay', '../static/games/survivingninja/assets/btnplay.png');
		game.load.image('btnback', '../static/games/survivingninja/assets/btnback.png');
		game.load.image('bgmenu', '../static/games/survivingninja/assets/bgmenu.jpg');
		game.load.image('btnday', '../static/games/survivingninja/assets/btnday.png');
		game.load.image('btnafternoon', '../static/games/survivingninja/assets/btnafternoon.png');
		game.load.image('btnnight', '../static/games/survivingninja/assets/btnnight.png');
		game.load.image('check', '../static/games/survivingninja/assets/check.png');
		game.load.image('star', '../static/games/survivingninja/assets/star_particle.png');
		game.load.image('scoreboard', '../static/games/survivingninja/assets/scoreboard.png');
		game.load.image('scoreboardwin', '../static/games/survivingninja/assets/scoreboardwin.png');
		game.load.image('twitter', '../static/games/survivingninja/assets/twitter.png');
		game.load.image('reload', '../static/games/survivingninja/assets/reload.png');
		game.load.image('comeback', '../static/games/survivingninja/assets/comeback.png');
		

		
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