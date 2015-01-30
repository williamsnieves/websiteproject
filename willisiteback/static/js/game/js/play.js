var playState = {
	create : function(){
		this.cursor = game.input.keyboard.createCursorKeys();

		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

		this.player.anchor.setTo(0.5,0.5);

		game.physics.arcade.enable(this.player);

		this.player.body.gravity.y = 500;

		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		// Create 10 enemies with the 'enemy' image in the group
		// The enemies are "dead" by default, so they are not visible in the game
		this.enemies.createMultiple(10, 'enemy');

		this.coin = game.add.sprite(60, 140, 'coin');

		game.physics.arcade.enable(this.coin);


		this.coin.anchor.setTo(0.5,0.5)


		this.scoreLabel = game.add.text(30,30,'Score : 0', {font : '18px Arial', fill: '#ffffff'});

		//this.score = 0;
		game.global.score = 0;


		this.jumpSound = game.add.audio('jump');
		this.coinSound = game.add.audio('coin');
		this.deadSound = game.add.audio('dead');

		this.music = game.add.audio('bgsound'); // Add the music
		this.music.loop = true; // Make it loop
		this.music.play(); // Start the music

		this.player.animations.add('right', [1, 2], 8, true);
		this.player.animations.add('left', [3, 4], 8, true);


		this.emitter = game.add.emitter(0, 0, 15);

		this.emitter.makeParticles('pixel');

		this.emitter.setYSpeed(-150, 150);

		this.emitter.setXSpeed(-150, 150);

		this.emitter.gravity = 0;

		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D)
		};


		if(!game.device.desktop){
			this.addMobileInputs();
		}


		this.createWorld();

		//game.time.events.loop(2200, this.addEnemy, this);
		
		this.nextEnemy = 0;
	},
	update : function(){
		//this.player.angle += 1;

		game.physics.arcade.collide(this.player, this.layer);
		//this.walls.setAll('body.immovable', false)
		this.movePlayer();

		if(!this.player.inWorld){
			this.playerDie();
		}

		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);

		game.physics.arcade.collide(this.enemies, this.layer);

		game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);

		if(this.nextEnemy < game.time.now){

			var start = 4000, end = 1000, score = 100;

			var delay = Math.max(start - (start-end)*game.global.score/score, end);

			this.addEnemy();

			this.nextEnemy = game.time.now + delay;
		}
			
	},

	movePlayer : function(){
		if(this.cursor.left.isDown || this.wasd.left.isDown || this.moveLeft){
			this.player.body.velocity.x = -200; 
			this.player.animations.play('left');
		}
		else if(this.cursor.right.isDown || this.wasd.right.isDown || this.moveRight)
		{
			this.player.body.velocity.x = 200; 
			this.player.animations.play('right');
		
}		else
		{
			this.player.body.velocity.x = 0;
			this.player.animations.stop();
			this.player.frame = 0;
		}

		//sin usar tiles
		/*if((this.cursor.up.isDown || this.wasd.up.isDown) && this.player.body.touching.down){
			this.jumpSound.play();
			this.player.body.velocity.y = -320;
		}*/

		if(this.cursor.up.isDown || this.wasd.up.isDown){
			this.jumpPlayer();
		}
	},

	createWorld : function(){
		/*this.walls = game.add.group();
		this.walls.enableBody = true;*/

		/*game.add.sprite(0, 0, 'wallV',0, this.walls);
		game.add.sprite(480, 0, 'wallV', 0, this.walls); // Right
		game.add.sprite(0, 0, 'wallH', 0, this.walls); // Top left
		game.add.sprite(300, 0, 'wallH', 0, this.walls); // Top right
		game.add.sprite(0, 320, 'wallH', 0, this.walls); // Bottom left
		game.add.sprite(300, 320, 'wallH', 0, this.walls); // Bottom right
		game.add.sprite(-100, 160, 'wallH', 0, this.walls); // Middle left
		game.add.sprite(400, 160, 'wallH', 0, this.walls); // Middle right

		var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls);
		middleTop.scale.setTo(1.5, 1);
		var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls);
		middleBottom.scale.setTo(1.5, 1);
		// Set all the walls to be immovable
		this.walls.setAll('body.immovable', true);*/


		this.map = game.add.tilemap('map');
		this.map.addTilesetImage('tileset');

		this.layer = this.map.createLayer('Tile Layer 1');

		this.layer.resizeWorld();

		this.map.setCollision(1);
	},

	playerDie : function(){

		if(!this.player.alive){
			return
		}

		this.player.kill();

		this.deadSound.play();
		this.music.stop(); 

		this.emitter.x = this.player.x;
		this.emitter.y = this.player.y;
		this.emitter.start(true, 600, null, 15);

		game.time.events.add(1000, this.startMenu, this);
		
	},

	startMenu : function(){
		game.state.start('menu');
	},

	takeCoin : function(player, coin){

		this.coinSound.play();
		this.coin.kill();

		game.global.score+=5;

		this.scoreLabel.text = 'Score '+game.global.score;

		this.coin.scale.setTo(0, 0);

		game.add.tween(this.coin.scale).to({x: 1, y: 1}, 300).start();
		this.updateCoinPosition();

		game.add.tween(this.player.scale).to({x: 1.3, y: 1.3}, 50).to({x: 1, y: 1}, 150).start();


	},

	updateCoinPosition: function(){
		var coinPosition = [
			{x: 140, y: 60}, {x: 360, y: 60}, // Top row
			{x: 60, y: 140}, {x: 440, y: 140}, // Middle row
			{x: 130, y: 300}, {x: 370, y: 300} // Bottom row
		];

		for(var i = 0; i < coinPosition.length; i++){
			if(coinPosition[i].x === this.coin.x){
				coinPosition.splice(i , 1);
			}
		}

		var newPosition = coinPosition[
			game.rnd.integerInRange(0, coinPosition.length-1)];

		this.coin.reset(newPosition.x, newPosition.y);
	},

	addEnemy : function(){
		var enemy = this.enemies.getFirstDead();
		if (!enemy) {
			return;
		}
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.world.centerX, 0);
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;

	},

	addMobileInputs : function(){
		this.jumpButton = game.add.sprite(350, 247, 'jumpButton');
		this.jumpButton.inputEnabled = true;
		this.jumpButton.alpha = 0.5;

		this.jumpButton.events.onInputDown.add(this.jumpPlayer, this);

		this.moveLeft = false;
		this.moveRight = false;

		this.leftButton = game.add.sprite(50, 247, 'leftButton');
		this.leftButton.inputEnabled = true;
		this.leftButton.events.onInputOver.add(function(){this.moveLeft=true;}, this);
		this.leftButton.events.onInputOut.add(function(){this.moveLeft=false;}, this);
		this.leftButton.events.onInputDown.add(function(){this.moveLeft=true;}, this);
		this.leftButton.events.onInputUp.add(function(){this.moveLeft=false;}, this);
		this.leftButton.alpha = 0.5;

		this.rightButton = game.add.sprite(130, 247, 'rightButton');
		this.rightButton.inputEnabled = true;
		this.rightButton.events.onInputOver.add(function(){this.moveRight=true;}, this);
		this.rightButton.events.onInputOut.add(function(){this.moveRight=false;}, this);
		this.rightButton.events.onInputDown.add(function(){this.moveRight=true;}, this);
		this.rightButton.events.onInputUp.add(function(){this.moveRight=false;}, this);
		this.rightButton.alpha = 0.5;


	},

	jumpPlayer : function(){
		if(this.player.body.onFloor()){
			this.player.body.velocity.y = -320;
			this.jumpSound.play();
		}
	}
}