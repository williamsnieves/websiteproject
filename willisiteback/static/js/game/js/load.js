var loadState = {
	preload : function(){		

		game.load.spritesheet('player', 'static/js/game/assets/ninjav5.png', 72, 72);
		game.load.spritesheet('playerdead', 'static/js/game/assets/ninjadeadv2.png', 72, 72);
		game.load.spritesheet('playerbleed', 'static/js/game/assets/ninjableed.png', 72, 72);
		game.load.spritesheet('blood', 'static/js/game/assets/blood2.png', 300, 338);
		game.load.image('shuriken', 'static/js/game/assets/shuriken.png');
		game.load.image('gem', 'static/js/game/assets/ruby.png');
		game.load.image('enemy', 'static/js/game/assets/enemy.png');
		game.load.image('tileset', 'static/js/game/assets/images.jpg');
		game.load.image('sky', 'static/js/game/assets/sky.gif');
		game.load.image('bgnight', 'static/js/game/assets/bgnight.png');
		game.load.image('bgday', 'static/js/game/assets/dayv1.png');
		game.load.audio('bgsound', ['static/js/game/assets/bgsound.mp3']);
		game.load.audio('dead', ['static/js/game/assets/kill.mp3']);
		game.load.audio('jump', ['static/js/game/assets/jumpv2.mp3']);
		game.load.audio('button', ['static/js/game/assets/buttons.mp3']);
		game.load.audio('nice', ['static/js/game/assets/nice.mp3']);
		game.load.audio('sweet', ['static/js/game/assets/sweet.mp3']);
		game.load.audio('thunder', ['static/js/game/assets/thunder.mp3']);
		game.load.audio('impresive', ['static/js/game/assets/impresive.mp3']);
		game.load.audio('shuriken', ['static/js/game/assets/shuriken.mp3']);
		game.load.audio('elixir', ['static/js/game/assets/elixir.mp3']);
		game.load.audio('power', ['static/js/game/assets/powerlife.mp3']);
		game.load.audio('smile', ['static/js/game/assets/smile.mp3']);
		game.load.tilemap('map', 'static/js/game/assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('lifebarbg', 'static/js/game/assets/lifebarbg.png');
		game.load.image('lifebar', 'static/js/game/assets/lifebar.png');
		game.load.image('hudninja', 'static/js/game/assets/hudninja.png');
		game.load.image('pixel', 'static/js/game/assets/pixel.png');
		game.load.image('btnconfig', 'static/js/game/assets/btnconfig.png');
		game.load.image('btnplay', 'static/js/game/assets/btnplay.png');
		game.load.image('btnback', 'static/js/game/assets/btnback.png');
		game.load.image('bgmenu', 'static/js/game/assets/bgmenu.jpg');
		game.load.image('btnday', 'static/js/game/assets/btnday.png');
		game.load.image('btnafternoon', 'static/js/game/assets/btnafternoon.png');
		game.load.image('btnnight', 'static/js/game/assets/btnnight.png');
		game.load.image('check', 'static/js/game/assets/check.png');
		game.load.image('star', 'static/js/game/assets/star_particle.png');
		

		
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