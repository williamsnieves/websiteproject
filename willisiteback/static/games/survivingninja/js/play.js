var playState = {
	preload: function(){
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Shojumaru', fill: '#ffffff' });

		loadingLabel.anchor.setTo(0.5,0.5);

		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5,0.5);
		game.load.setPreloadSprite(progressBar);

		if(localStorage.getItem("choose") === "bgnight"){
			//console.log(game.global.choose);
			game.load.spritesheet('player', '../static/games/survivingninja/assets/ninjanight.png', 72, 72);
			game.load.spritesheet('playerdead', '../static/games/survivingninja/assets/ninjabluedeadv2.png', 72, 72);
		}else{
			//console.log(game.global.choose);
			game.load.spritesheet('player', '../static/games/survivingninja/assets/ninjav5.png', 72, 72);
			game.load.spritesheet('playerdead', '../static/games/survivingninja/assets/ninjadeadv2.png', 72, 72);
			game.load.spritesheet('playerbleed', '../static/games/survivingninja/assets/ninjableed.png', 72, 72);
			game.load.spritesheet('playercrazy', '../static/games/survivingninja/assets/ninjav5crazy.png', 72, 72);
		}
	},
	create : function(){

		if(localStorage.getItem("choose")){
			var bgOption = localStorage.getItem("choose");
			this.bgChoose = bgOption;
		}else{
			this.bgChoose = "sky"
		}
		//this.bgChoose = game.global.choose || "sky";
		this.bg = game.add.sprite(0, 0, this.bgChoose);
		this.cursor = game.input.keyboard.createCursorKeys();

		game.global.flagEnemyFly = false;
		this.comboPhrase = {
			NICE : game.add.audio('nice'),
			SWEET: game.add.audio('sweet'),
			IMPRESIVE: game.add.audio('impresive'),
			SMILE: game.add.audio('smile'),
			SHURIKEN: game.add.audio('shuriken')			
		}

		this.randomPositionEnemy = [
			{positionX: 500, positionY: 0, gravity: 500, velocityX: 50, bounceY: 1, direction: "right", power: 0},
			{positionX: 0, positionY: 0, gravity: 500, velocityX: 50, bounceY: 1, direction: "left", power: 0},
			{positionX: 250, positionY: 0, gravity: 500, velocityX: 100, bounceY: 0, direction: "left", power: 0}, 
			{positionX: 237, positionY: 0, gravity: 700, velocityX: 150, bounceY: 1, direction: "left", power: 50},
			{positionX: 300, positionY: 0, gravity: 1000, velocityX: 70, bounceY: 1, direction: "right", power: 0},
			{positionX: 280, positionY: 0, gravity: 700, velocityX: 90, bounceY: 0, direction: "right", power: 0},
			{positionX: 120, positionY: 0, gravity: 2000, velocityX: 100, bounceY: 0, direction: "left", power: 50},
			{positionX: 335, positionY: 0, gravity: 700, velocityX: 150, bounceY: 1, direction: "left", power: 0},
			{positionX: 410, positionY: 0, gravity: 1000, velocityX: 70, bounceY: 1, direction: "right", power: 0},
			{positionX: 154, positionY: 0, gravity: 700, velocityX: 90, bounceY: 0, direction: "right", power: 0},
			{positionX: 25, positionY: 0, gravity: 1000, velocityX: 100, bounceY: 0, direction: "left", power: 0}
		]

		this.tweenHelper;
		this.comboPhrase.NICE.volume = 20;
		this.comboPhrase.SWEET.volume = 20;
		this.comboPhrase.IMPRESIVE.volume = 20;
		this.comboPhrase.SMILE.volume = 20;
		this.comboPhrase.SHURIKEN.volume = 0.3;

		this.bulletTime = 0
		this.gameWon = false;
		this.playerDeadOut = false;
		this.countPressX = 0;
		this.isCrazy = false;
		this.tmpKill = false;		
		this.enemiesAlive = 0;
		this.nextFire = 0;
		this.playerLife = 100;
		this.fireRate = 100;
		this.combo = 0;
		this.deadEnemies = [];
		this.enemies = [];
		this.enemiesInGame = [];
		this.facing = '';
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5,0.5);
		this.player.scale.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);

		this.player.outOfBoundsKill = true;

		this.player.outOfBoundsKill = true;

		this.playerdead = game.add.sprite(game.world.centerX, game.world.centerY, 'playerdead');
		this.playerdead.anchor.setTo(0.5,0.5);
		this.playerdead.scale.setTo(0.5,0.5);
		game.physics.arcade.enable(this.playerdead);

		this.playercrazy = game.add.sprite(game.world.centerX, game.world.centerY, 'playercrazy');
		this.playercrazy.anchor.setTo(0.5,0.5);
		this.playercrazy.scale.setTo(0.5,0.5);
		game.physics.arcade.enable(this.playercrazy);

		this.playerdead.animations.add('dead', [0,1,2,3,4,5,6,7], 10, false);		
		this.playerdead.alpha = 0;

		this.playercrazy.animations.add('crazy', [0,1,2,3,4,5], 8, true);
		this.playercrazy.alpha = 0;
		this.playercrazy.kill();
		this.playerCrazyDead = false;
		

		this.blood = game.add.sprite(0, 0, 'blood');
		this.blood.scale.setTo(0.5, 0.5);
		this.blood.anchor.setTo(0.5,0.5);
		this.blood.alpha = 0;

		this.blood.animations.add('explosion', [0,1,2,3,4,5,6,7], 18, false);		

		this.music = game.add.audio('bgsound'); // Add the music
		this.lifebarbg = game.add.sprite(game.world.centerX + 30, 30,'lifebarbg');
		this.lifebar = game.add.sprite(game.world.centerX + 32.5, 32,'lifebar');				

		this.ninjaClone = game.add.sprite(game.world.centerX + 5, 30, 'hudninja');
		
		this.ninjaClone.scale.setTo(0.5, 0.5);

		this.music.loop = true; // Make it loop
		this.music.play(); // Start the music

		this.deadSound = game.add.audio('dead');
		this.elixir = game.add.audio('elixir');
		this.jump = game.add.audio('jump');


		this.powerup = game.add.audio('power');

		this.gem = game.add.sprite(30, 100, 'gem');
		game.physics.arcade.enable(this.gem);
		this.gem.alpha = 0;
		this.gem.kill();
		
		

		this.player.body.gravity.y = 500;		
		this.playercrazy.body.gravity.y = 500;
		this.playerdead.body.gravity.y = 500;
		//this.shuriken.body.gravity.y = 500;
		this.scoreLabel = game.add.text(30,30,'Kills : 0', {font : '18px Shojumaru', fill: '#ffffff'});
		this.comboLabel = game.add.text(-30,60,'Combos : 0X', {font : '25px Shojumaru', fill: '#760606'});
		this.comboLabel.alpha = 0;


		this.helperText = game.add.text(game.world.centerX,100,'Press X quickly!!!', {font : '25px Shojumaru', fill: '#760606'});
		this.helperText.anchor.setTo(0.5, 0.5);
		this.helperText.alpha = 0;		
		

		this.score = 0;
		localStorage.setItem("score", 0);
		this.bestScore = 0;
		this.enemyKills = 0;


		this.createShurikens();		

		this.player.animations.add('right', [1,2], 8, true);
		this.player.animations.add('left', [3,4], 8, true);

		
		this.setKeys();


		if(!game.device.desktop){
			this.addMobileInputs();
		}

		this.emitter = game.add.emitter(0, 0, 52);

		this.createWorld();

		this.createEnemy();

		this.wasd.letterX.onDown.add(this.countButtonToWakeUpPlayer, this)

		//game.time.events.loop(2200, this.addEnemy, this);
		
		this.nextEnemy = 0;

		this.elixirTime = game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createElixir, this);
	},
	update : function(){
		//this.player.angle += 1;
		//this.player.bringToTop();
        
        // some simple colour changing to make it look like a health bar        

		game.physics.arcade.collide(this.player, this.layer);
		game.physics.arcade.collide(this.playercrazy, this.layer);
		game.physics.arcade.collide(this.playerdead, this.layer);
		game.physics.arcade.collide(this.shuriken, this.layer);


		//game.physics.arcade.collide(this.player, this.gem);

		game.physics.arcade.overlap(this.player, this.gem, this.getLife, null, this);

		//this.walls.setAll('body.immovable', false)
		this.movePlayer();
		//console.log("WORLD",this.player.inWorld);
		
		/*if(!this.player.inWorld){	
			console.log(this.player.inWorld);		
			this.playerDie();
		}*/

		//console.log(this.enemiesInGame.length);
		for(var i = 0; i < this.enemiesInGame.length; i++){			
			if(this.enemiesInGame[i].alive){
			 	this.enemiesAlive++;
			 	//console.log(game.global.flagEnemyFly);
			 	if(!game.global.flagEnemyFly){
			 		game.physics.arcade.collide(this.layer, this.enemiesInGame[i]);
			 	}
			 	//game.physics.arcade.collide(this.player, this.enemiesInGame[i]);			 	
			 	game.physics.arcade.overlap(this.shurikens, this.enemiesInGame[i], this.enemyDie, null, this);
			 	game.physics.arcade.overlap(this.enemiesInGame[i], this.player, this.playerDie, null, this);
			 	game.physics.arcade.overlap(this.enemiesInGame[i], this.playercrazy, this.playerCrazyDie, null, this);			 	
			}
		}

		//this.shootShuriken();


		

		if(this.nextEnemy < game.time.now){

			var start = 1000, end = 500, score = 8;

			var delay = Math.max(start - (start-end)*this.enemyKills/score, end);

			var newPositionEnemyBehavior = this.randomPositionEnemy[game.rnd.integerInRange(0, this.randomPositionEnemy.length-1)];


			/*if(newPositionEnemyBehavior.power === 50){
				console.log("estoy acaaaa y crazy es true",this.isCrazy);		
    			this.isCrazy = true;    			
    		}	*/	

			this.addEnemy(newPositionEnemyBehavior);

			this.nextEnemy = game.time.now + delay;
		}

		/*if(!this.isCrazy && !this.playercrazy.alive){			
    		this.playercrazy.revive();
    	}*/
		
		this.checkBoundaries();
		
			
	},

	setKeys: function(){
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D),
			bar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
			letterX: game.input.keyboard.addKey(Phaser.Keyboard.X)
		};
	},

	stopKeys: function(){
		game.input.keyboard.removeKey(Phaser.Keyboard.W);
		game.input.keyboard.removeKey(Phaser.Keyboard.W);
		game.input.keyboard.removeKey(Phaser.Keyboard.A);
		game.input.keyboard.removeKey(Phaser.Keyboard.D);
		game.input.keyboard.removeKey(this.cursor.left);
		game.input.keyboard.removeKey(this.cursor.right);
		game.input.keyboard.removeKey(this.cursor.up);
		game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
	},

	createShurikens: function(){
		this.shurikens = game.add.group();
		this.shurikens.enableBody = true;
		this.shurikens.physicsBodyType = Phaser.Physics.ARCADE;

		this.shurikens.createMultiple(50, 'shuriken');
   		this.shurikens.setAll('checkWorldBounds', true);
    	this.shurikens.setAll('outOfBoundsKill', true);
	},

	createEnemy: function(){
		this.enemies = game.add.group();
		this.enemies.enableBody = true;
		// Create 10 enemies with the 'enemy' image in the group
		// The enemies are "dead" by default, so they are not visible in the game
		this.enemies.createMultiple(50, 'enemy');
	},

	shootShuriken : function(){
		if (game.time.now > this.bulletTime)
	    {
	    	this.bulletTime = game.time.now + 150;

	    	var shuriken;
	    	//console.log(this.shurikens.exists);

	    	if(this.shurikens.exists){	    		
		    	if(this.facing === 'right'){
		    		this.comboPhrase.SHURIKEN.play();
		    		shuriken = this.shurikens.create(this.player.body.x + this.player.width / 2 + 20, this.player.body.y + this.player.height / 2 - 4, 'shuriken');
		    		//console.log("disparo a la derecha");
		    	}else{
		    		this.comboPhrase.SHURIKEN.play();
		    		shuriken = this.shurikens.create(this.player.body.x + this.player.width / 2 + 20, this.player.body.y + this.player.height / 2 - 4, 'shuriken');
		    	}
	    	}else{
	    		return;
	    	}


	    	game.physics.enable(shuriken, Phaser.Physics.ARCADE);
	    	shuriken.outOfBoundsKill = true;
	    	shuriken.anchor.setTo(0.5, 0.5);
	    	shuriken.scale.setTo(0.5, 0.5);
	    	shuriken.body.velocity.y = 0;


	    	if(this.facing === 'right'){
	    		shuriken.body.velocity.x = 800;
	    		game.add.tween(shuriken).to({angle: 360}, 500, Phaser.Easing.Linear.None, true, true);
	    	}else{
	    		shuriken.body.velocity.x = -800;
	    		game.add.tween(shuriken).to({angle: 360}, 500, Phaser.Easing.Linear.None, true, true);
	    	}
	        
	    }

	},

	movePlayer : function(){
		if(this.cursor.left.isDown || this.wasd.left.isDown || this.moveLeft){
			this.player.body.velocity.x = -200; 
			this.player.animations.play('left');
			this.facing = 'left';
			if(this.wasd.bar.isDown)
				this.shootShuriken();
		}
		else if(this.cursor.right.isDown || this.wasd.right.isDown || this.moveRight)
		{
			this.player.body.velocity.x = 200; 
			this.player.animations.play('right');
			this.facing = 'right';
			if(this.wasd.bar.isDown)
				this.shootShuriken();
		}
		else if(this.wasd.bar.isDown){
			//this.createShiruken();
			this.shootShuriken();
			//console.log("disparo estrella");
		}
		else
		{
			this.player.body.velocity.x = 0;
			this.player.animations.stop();
			if(this.facing === 'right')
				this.player.frame = 0;

			if(this.facing === 'left')
				this.player.frame = 5;
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
		
		this.map = game.add.tilemap('map');
		this.map.addTilesetImage('images', 'tileset');

		this.layer = this.map.createLayer('Tile Layer 1');

		this.layer.resizeWorld();

		this.map.setCollision([21,22,23,24,25]);
	},

	playerDie : function(){

		//this.player.bringToTop();
		this.combo = 0;

		this.playerLife--;		
    	
    	this.lifebar.width = this.playerLife;
    	
    	if(this.isCrazy && !this.playercrazy.alive){

    		
    		//this.helperText.alpha = 1;
    		//this.cronosHelper = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeHelper, this);	

    		this.tweenHelper = game.add.tween(this.helperText).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 500, true);

		    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
		    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
		    this.tweenHelper.yoyo(true);
			/*var tween = game.add.tween(this.comboLabel).to( { alpha: 1 }, 2000, "Linear", true, 0, -1);
			tween.yoyo(true, 3000);*/

			/*var comboTween = game.add.tween(this.helperText);
			comboTween.to({ alpha: 1 }, 2000, "Linear", true, 0, -1);		
			comboTween.onComplete.add(this.removeHelper, this);		
			comboTween.start();*/

    		this.shurikens.destroy();
    		this.playercrazy.revive();
    		this.playercrazy.position.x = this.player.x;
			this.playercrazy.position.y = this.player.y;
    		this.playercrazy.alpha = 1;
    		this.playercrazy.animations.play('crazy');    		
    		this.player.kill();
    		this.stopKeys();    		
    		
    	}

    	if(this.playerLife === 40){
    		
    		this.comboPhrase.SMILE.play();

    	}/*else{
    		this.playercrazy.animations.stop('crazy');
    		this.playercrazy.alpha = 0;
    	}*/

		if(this.playerLife == 0){
			this.tmpKill = true;
			this.stopKeys();
			this.comboPhrase.SMILE.stop();
						
			if(!this.player.alive && this.tmpKill){
				this.stopKeys();
				return
			}			
			
			this.playerdead.position.x = this.player.x;
			this.playerdead.position.y = this.player.y;
			this.player.kill();
			//this.player.destroy();
			this.playerdead.alpha = 1;
			this.playerdead.animations.play('dead');			
			this.music.stop();
			this.removeElements();

			

			if(!localStorage.getItem("bestScore")){
				localStorage.setItem("bestScore", 0);
			}

			if(this.score > localStorage.getItem('bestScore')){
				localStorage.setItem('bestScore', this.score);
			}
			game.time.events.add(3000, this.gameOver, this);
		}		
		
	},

	playerCrazyDie: function(){
		this.playerLife--;
		this.lifebar.width = this.playerLife;

		if(this.playerLife == 0){
			this.tmpKill = true;
			this.stopKeys();
			this.comboPhrase.SMILE.stop();
						
			if(!this.playercrazy.alive && this.tmpKill){
				this.stopKeys();
				return
			}			
			
			this.playercrazy.kill();
			this.playerdead.position.x = this.player.x;
			this.playerdead.position.y = this.player.y;
			this.player.kill();
			this.playerdead.alpha = 1;
			this.playerdead.animations.play('dead');			
			this.music.stop();
			this.removeElements();

			

			if(!localStorage.getItem("bestScore")){
				localStorage.setItem("bestScore", 0);
			}

			if(this.score > localStorage.getItem('bestScore')){
				localStorage.setItem('bestScore', this.score);
			}
			game.time.events.add(3000, this.gameOver, this);
		}
	},

	playerDieOutOfWorld: function(){
		if(!this.player.alive){
			return
		}
		this.playerLife = 0;
		this.lifebar.width = this.playerLife;
		this.player.kill();
		this.music.stop();
		this.removeElements();
		this.gameOver();
	},

	enemyDie : function(shuriken, enemy){

		if(!enemy.alive){
			return
		}

		this.combo++;

		this.blood.alpha = 1;
		this.blood.animations.play('explosion');
		this.blood.killOnComplete = true;
		
		this.blood.position.x = enemy.x;
		this.blood.position.y = enemy.y;

		this.score+=5;


		if(this.combo == 15){
			this.showComboText('Combo: '+this.combo+"X");
			this.score+=10;			
			this.niceText = game.add.text(game.world.centerX, 100,'Nice!!!', {font : '18px Arial', fill: '#ffffff'});
			this.niceText.anchor.setTo(0.5, 0.5);		
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeNiceText, this);	
			this.comboPhrase.NICE.play();
		}
		
		if(this.combo == 25){
			this.showComboText('Combo: '+this.combo+"X");
			this.score+=15;
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeSweetText, this);
			this.sweetText = game.add.text(game.world.centerX,100,'Sweet!!!', {font : '18px Arial', fill: '#ffffff'});
			this.sweetText.anchor.setTo(0.5, 0.5);			
			this.comboPhrase.SWEET.play();
		}

		if(this.combo == 40){
			this.showComboText('Combo: '+this.combo+"X");
			this.score+=25;
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeImpresiveText, this);
			this.impresiveText = game.add.text(game.world.centerX,100,'Impresive!!!', {font : '18px Arial', fill: '#ffffff'});
			this.impresiveText.anchor.setTo(0.5, 0.5);
			this.comboPhrase.IMPRESIVE.play();
		}

		if(this.score === 250){
			this.gameWon = true;			
			this.checkGameWon();			
			return;
		}
		

		this.deadEnemies.push(enemy);
		this.enemyKills = this.deadEnemies.length; 



		this.scoreLabel.text = 'Kills '+this.enemyKills;
		localStorage.setItem("score", this.score);
		enemy.alive = true;

		this.deadSound.play();
		

		shuriken.kill();
		
	},

	startMenu : function(){
		game.state.start('menu');
	},

	addEnemy : function(objBehaviorEnemy){
		//console.log("this.isCrazy",this.isCrazy);
		var enemy = this.enemies.getFirstDead();		
		if (!enemy) {
			return;
		}

		if(objBehaviorEnemy.power === 50){					
			this.isCrazy = true;
    	}
		
		
		if(objBehaviorEnemy.fly){
			game.global.flagEnemyFly = objBehaviorEnemy.fly;
		}

		this.enemiesInGame.push(enemy);
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(objBehaviorEnemy.positionX , objBehaviorEnemy.positionY);		
		enemy.body.gravity.y = objBehaviorEnemy.gravity;
		enemy.body.velocity.x =  objBehaviorEnemy.velocityX * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.body.bounce.y = objBehaviorEnemy.bounceY;		
		/*enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();*/
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
		if(this.player.body.onFloor() && this.player.alive){
			this.player.body.velocity.y = -320;
			this.jump.play();
		}
	},

	removeNiceText: function(){
		game.add.tween(this.niceText).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0);
	},
	removeSweetText: function(){
		game.add.tween(this.sweetText).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0);
	},
	removeImpresiveText: function(){
		game.add.tween(this.impresiveText).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0);
	},

	removeElements: function(){
		game.input.keyboard.removeKey(Phaser.Keyboard.W);
		game.input.keyboard.removeKey(Phaser.Keyboard.A);
		game.input.keyboard.removeKey(Phaser.Keyboard.D);		
		game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
		this.enemies.destroy();		
		this.shurikens.destroy();
		if(this.emitter && this.emitter.alive){
			this.emitter.destroy();
		}		
		this.gem.kill();
		game.sound.remove(this.elixir);
		game.sound.remove(this.jump);
		game.time.events.remove(this.elixirTime);
		this.music.stop();
		
		//this.player.destroy();	
		
		//game.gamePaused();			
	},

	showComboText: function(string){
		//this.comboLabel.alpha = 1;
		this.comboLabel.setText(string);
		//game.add.tween(this.comboLabel).to({alpha:1, x: 30}, 1000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
		var comboTween = game.add.tween(this.comboLabel);
		comboTween.to({alpha:1, x: 30}, 100, Phaser.Easing.Linear.None);		
		comboTween.onComplete.add(this.removeCombo, this);		
		comboTween.start();
	},

	removeCombo: function(){
		game.time.events.add(2000, function() {
	    	e = game.add.tween(this.comboLabel);    
		    e.to({alpha:0,  x: -30 }, 100, Phaser.Easing.Linear.None);
		    e.start();
  		}, this);
		
	},

	removeHelper: function(){
		var tween = game.add.tween(this.helperText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, -1);

	    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
	    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
	    tween.yoyo(true, 3000);
	    console.log()
	    //game.add.tween(this.helperText).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0, -1).yoyo();
		//game.add.tween(this.helperText).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0).yoyo();
		
	},

	createElixir: function(){
		if(!this.gem.alive){
			this.gem.revive();
			this.gem.alpha = 0;
			game.add.tween(this.gem).to({alpha: 1}, 500, Phaser.Easing.Linear.None, true, 0);
			game.time.events.add(Phaser.Timer.SECOND * 2, this.removeElixir, this);			
		}else{
			this.gem.alpha = 1;			
			game.time.events.add(Phaser.Timer.SECOND * 2, this.removeElixir, this);					
		}
		this.elixir.play();

		var gemPosition = [
			{x: 140, y: 60}, {x: 360, y: 60}, // Top row
			{x: 60, y: 140}, {x: 240, y: 140}, // Middle row
			{x: 130, y: 200}, {x: 370, y: 200} // Bottom row
		]

		for(var i=0; i<gemPosition.length; i++){
			if(gemPosition[i].x === this.gem.x){
				gemPosition.splice(i , 1);
			}
		}

		var newPosition = gemPosition[game.rnd.integerInRange(0, gemPosition.length-1)];

		this.emitter = game.add.emitter(newPosition.x + 10, newPosition.y + 10, 52);

		this.emitter.makeParticles('star');

		this.emitter.start(false, 500, 15);

		this.gem.reset(newPosition.x, newPosition.y);
		this.gem.bringToTop();
	},

	getLife: function(){
		//alert("algo");
		if(!this.gem.alive){
			return			
		}
		
		this.powerup.play();
		this.emitter.destroy();
		this.gem.kill();

		var totalWidthBar =195;

		if(this.playerLife < 100){			
			var currentWidthBar = this.lifebar.width;
			var resultWidth = totalWidthBar - currentWidthBar;									
			if(this.lifebar.width < 195){
				this.lifebar.width+=resultWidth;
				this.playerLife = 100;
			}else{				
				this.lifebar.width = 195;
				this.playerLife = 100;
			} 
			
		}	

	},

	checkBoundaries: function(){

						
		
		if(!this.player.inWorld){			
			this.playerLife = 0;
			this.playerDieOutOfWorld();
		}else{	
			return;	
		}
		
	},

	removeElixir: function(){		
		if(this.gem.alive){
			game.add.tween(this.gem).to({alpha: 0}, 100, Phaser.Easing.Linear.None, true, 0);
			this.emitter.destroy();
			this.gem.kill();
		}			
	},

	gameOver: function(){		
		this.helperText.alpha = 0;   		
    	game.tweens.remove(this.tweenHelper);
		this.showRestartScoreBoardGameOver();


	},

	showRestartScoreBoardGameOver : function(){




        this.scoreboardGroup = this.game.add.group();

        this.scoreboardGroup.position.y = this.game.height;
        this.scoreboardGroup.position.x = 0;

        var bestScoreFinal = localStorage.getItem("bestScore") || 0;
        var scoreFinal = localStorage.getItem("score") || 0;     

       

        this.scoreboard = this.scoreboardGroup.create(this.game.width / 2, 150, 'scoreboard');
        this.scoreboard.anchor.setTo(0.5, 0.5);        

        this.bestScoreText = this.game.add.text((this.scoreboard.width / 2) + 70, 110,'Best Score:',{ font: 'bold 15px Shojumaru', fill: '#4b0303'});
        this.scoreboardGroup.add(this.bestScoreText);


        this.scoreText = this.game.add.text((this.scoreboard.width / 2) + 70,125,'Score:',{ font: 'bold 15px Shojumaru', fill: '#4b0303'})        
        this.scoreboardGroup.add(this.scoreText);

        this.bestScoreResultText = this.game.add.text((this.scoreboard.width / 2) + 190,110,bestScoreFinal,{ font: 'bold 15px Shojumaru', fill: '#4b0303'});

        this.scoreboardGroup.add(this.bestScoreResultText);


        this.scoreResultText = this.game.add.text((this.scoreboard.width / 2) + 190,125,scoreFinal,{ font: 'bold 15px Shojumaru', fill: '#4b0303'})        
        this.scoreboardGroup.add(this.scoreResultText);

        this.twitterButton = this.game.add.button((this.scoreboard.width / 2) + 72, 195, 'twitter', this.twitterShare, this);
        this.twitterButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.twitterButton);

        this.reloadButton = this.game.add.button((this.scoreboard.width / 2) + 112, 195, 'reload', this.reloadGame, this);
        this.reloadButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.reloadButton);

        this.reloadButton = this.game.add.button((this.scoreboard.width / 2) + 152, 195, 'comeback', this.startMenu, this);
        this.reloadButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.reloadButton);

        
        this.game.add.tween(this.scoreboardGroup.position).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
    },

    showRestartScoreBoardGameWon : function(){


        this.scoreboardGroup = this.game.add.group();

        this.scoreboardGroup.position.y = this.game.height;
        this.scoreboardGroup.position.x = 0;

        var bestScoreFinal = localStorage.getItem("bestScore") || 0;
        var scoreFinal = localStorage.getItem("score") || 0;     

       

        this.scoreboard = this.scoreboardGroup.create(this.game.width / 2, 150, 'scoreboardwin');
        this.scoreboard.anchor.setTo(0.5, 0.5);        

        this.bestScoreText = this.game.add.text((this.scoreboard.width / 2) , 120,'You have been Survived!!!',{ font: 'bold 14px Shojumaru', fill: '#4b0303'});
        this.scoreboardGroup.add(this.bestScoreText);       


        this.scoreText = this.game.add.text((this.scoreboard.width / 2) + 70,135,'Best Score:',{ font: 'bold 14px Shojumaru', fill: '#4b0303'})        
        this.scoreboardGroup.add(this.scoreText);      


        this.scoreResultText = this.game.add.text((this.scoreboard.width / 2) + 190,135,bestScoreFinal,{ font: 'bold 14px Shojumaru', fill: '#4b0303'})        
        this.scoreboardGroup.add(this.scoreResultText);

        this.twitterButton = this.game.add.button((this.scoreboard.width / 2) + 72, 195, 'twitter', this.twitterShare, this);
        this.twitterButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.twitterButton);

        this.reloadButton = this.game.add.button((this.scoreboard.width / 2) + 112, 195, 'reload', this.reloadGame, this);
        this.reloadButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.reloadButton);

        this.reloadButton = this.game.add.button((this.scoreboard.width / 2) + 152, 195, 'comeback', this.startMenu, this);
        this.reloadButton.anchor.setTo(0.5,0.5);
        
        this.scoreboardGroup.add(this.reloadButton);

        
        this.game.add.tween(this.scoreboardGroup.position).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
    },

    twitterShare: function(){
    	if(!this.gameWon){
    		var tweetbegin = 'http://twitter.com/home?status=';
	        var tweettxt = 'I scored '+localStorage.getItem("bestScore")+' points at this game -' + window.location.href + ' try you too if you can survive. #survivingNinja';
	        var finaltweet = tweetbegin +encodeURIComponent(tweettxt);
	        window.open(finaltweet,'_blank');
    	}else{	    	
	    	var tweetbegin = 'http://twitter.com/home?status=';
	        var tweettxt = 'I won this game at -' + window.location.href + ' try you too if you can survive. #IsurvivedInSurvivingNinjaGame';
	        var finaltweet = tweetbegin +encodeURIComponent(tweettxt);
	        window.open(finaltweet,'_blank');
	    	
    	}
    	
    },

    reloadGame: function(){
    	game.state.start('play');
    },

    startMenu: function(){
    	game.state.start('menu');
    },

    countButtonToWakeUpPlayer: function(){    	
    	

    	this.countPressX++;

    	if(this.countPressX === 10){
    		//this.shurikens.visible = true;
    		//console.log(this.tweenHelper); 
    		this.helperText.alpha = 0;   		
    		game.tweens.remove(this.tweenHelper);
    		this.createShurikens();    		
    		this.countPressX = 0;
    		this.playercrazy.kill();
    		this.wakeUpPlayer();
    		this.isCrazy = false;
    		this.setKeys();    		    		
    	}

    		
    },

    wakeUpPlayer: function(){
    	this.player.position.x = this.playercrazy.position.x;	
    	this.player.position.y = this.playercrazy.position.y;
    	this.player.revive();
    },

    checkGameWon: function(){
    	if(!this.gameWon){
    		return;
    	}else{	    	
	    	this.showRestartScoreBoardGameWon();	    	
	    	this.removeElements();	    	
	    	
    	}
    }



}