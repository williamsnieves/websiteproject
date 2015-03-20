var loadState = {
	preload : function(){		

		game.load.spritesheet('player', 'assets/ninjav5.png', 72, 72);
		game.load.spritesheet('playerdead', 'assets/ninjadeadv2.png', 72, 72);
		game.load.spritesheet('playerbleed', 'assets/ninjableed.png', 72, 72);
		game.load.spritesheet('blood', 'assets/blood2.png', 300, 338);
		game.load.image('shuriken', 'assets/shuriken.png');
		game.load.image('gem', 'assets/ruby.png');
		game.load.image('enemy', 'assets/enemy.png');
		game.load.image('tileset', 'assets/images.jpg');
		game.load.image('sky', 'assets/sky.gif');
		game.load.image('bgnight', 'assets/bgnight.png');
		game.load.image('bgday', 'assets/dayv1.png');
		game.load.audio('bgsound', ['assets/bgsound.mp3']);
		game.load.audio('dead', ['assets/kill.mp3']);
		game.load.audio('jump', ['assets/jumpv2.mp3']);
		game.load.audio('button', ['assets/buttons.mp3']);
		game.load.audio('nice', ['assets/nice.mp3']);
		game.load.audio('sweet', ['assets/sweet.mp3']);
		game.load.audio('thunder', ['assets/thunder.mp3']);
		game.load.audio('impresive', ['assets/impresive.mp3']);
		game.load.audio('shuriken', ['assets/shuriken.mp3']);
		game.load.audio('elixir', ['assets/elixir.mp3']);
		game.load.audio('power', ['assets/powerlife.mp3']);
		game.load.audio('smile', ['assets/smile.mp3']);
		game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('lifebarbg', 'assets/lifebarbg.png');
		game.load.image('lifebar', 'assets/lifebar.png');
		game.load.image('hudninja', 'assets/hudninja.png');
		game.load.image('pixel', 'assets/pixel.png');
		game.load.image('btnconfig', 'assets/btnconfig.png');
		game.load.image('btnplay', 'assets/btnplay.png');
		game.load.image('btnback', 'assets/btnback.png');
		game.load.image('bgmenu', 'assets/bgmenu.jpg');
		game.load.image('btnday', 'assets/btnday.png');
		game.load.image('btnafternoon', 'assets/btnafternoon.png');
		game.load.image('btnnight', 'assets/btnnight.png');
		game.load.image('check', 'assets/check.png');
		game.load.image('star', 'assets/star_particle.png');
		

		
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