var playState = {
	preload: function(){
		if(game.global.choose === "bgnight"){
			game.load.spritesheet('player', 'static/js/game/assets/ninjanight.png', 72, 72);
		}
	},
	create : function(){
		this.bgChoose = game.global.choose || "sky";
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
			{positionX: 500, positionY: 0, gravity: 500, velocityX: 50, bounceY: 1, direction: "right"},
			{positionX: 0, positionX: 0, positionY: 0, gravity: 500, velocityX: 50, bounceY: 1, direction: "left"},
			{positionX: 250, positionY: 0, gravity: 500, velocityX: 100, bounceY: 0, direction: "left"}, 
			{positionX: 237, positionY: 0, gravity: 700, velocityX: 150, bounceY: 1, direction: "left"},
			{positionX: 300, positionY: 0, gravity: 1000, velocityX: 70, bounceY: 1, direction: "right"},
			{positionX: 280, positionY: 0, gravity: 700, velocityX: 90, bounceY: 0, direction: "right"},
			{positionX: 40, positionY: 0, gravity: 1000, velocityX: 100, bounceY: 0, direction: "left"}
		]

		this.comboPhrase.NICE.volume = 20;
		this.comboPhrase.SWEET.volume = 20;
		this.comboPhrase.IMPRESIVE.volume = 20;
		this.comboPhrase.SMILE.volume = 20;
		this.comboPhrase.SHURIKEN.volume = 0.3;

		this.bulletTime = 0;
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

		this.playerdead = game.add.sprite(game.world.centerX, game.world.centerY, 'playerdead');
		this.playerdead.anchor.setTo(0.5,0.5);
		this.playerdead.scale.setTo(0.5,0.5);
		game.physics.arcade.enable(this.playerdead);

		this.playerdead.animations.add('dead', [0,1,2,3,4,5,6,7], 10, false);
		
		this.playerdead.alpha = 0;

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
		this.playerdead.body.gravity.y = 500;
		//this.shuriken.body.gravity.y = 500;
		this.scoreLabel = game.add.text(30,30,'Kills : 0', {font : '18px Shojumaru', fill: '#ffffff'});
		this.comboLabel = game.add.text(-30,60,'Combos : 0X', {font : '25px Shojumaru', fill: '#760606'});
		this.comboLabel.alpha = 0;
		

		//this.score = 0;
		game.global.score = 0;


		this.shurikens = game.add.group();
		this.shurikens.enableBody = true;
		this.shurikens.physicsBodyType = Phaser.Physics.ARCADE;

		this.shurikens.createMultiple(50, 'shuriken');
   		this.shurikens.setAll('checkWorldBounds', true);
    	this.shurikens.setAll('outOfBoundsKill', true);

		this.player.animations.add('right', [1,2], 8, true);
		this.player.animations.add('left', [3,4], 8, true);


		
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D),
			bar: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
		};


		if(!game.device.desktop){
			this.addMobileInputs();
		}

		this.emitter = game.add.emitter(0, 0, 52);

		this.createWorld();

		this.createEnemy();

		//game.time.events.loop(2200, this.addEnemy, this);
		
		this.nextEnemy = 0;

		this.elixirTime = game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createElixir, this);
	},
	update : function(){
		//this.player.angle += 1;

        
        // some simple colour changing to make it look like a health bar        

		game.physics.arcade.collide(this.player, this.layer);
		game.physics.arcade.collide(this.playerdead, this.layer);
		game.physics.arcade.collide(this.shuriken, this.layer);


		//game.physics.arcade.collide(this.player, this.gem);

		game.physics.arcade.overlap(this.player, this.gem, this.getLife, null, this);

		//this.walls.setAll('body.immovable', false)
		this.movePlayer();
		
		if(!this.player.inWorld){
			this.playerDie();
		}

		//console.log(this.enemiesInGame.length);
		for(var i = 0; i < this.enemiesInGame.length; i++){			
			if(this.enemiesInGame[i].alive){
			 	this.enemiesAlive++;
			 	console.log(game.global.flagEnemyFly);
			 	if(!game.global.flagEnemyFly){
			 		game.physics.arcade.collide(this.layer, this.enemiesInGame[i]);
			 	}
			 	//game.physics.arcade.collide(this.player, this.enemiesInGame[i]);			 	
			 	game.physics.arcade.overlap(this.shurikens, this.enemiesInGame[i], this.enemyDie, null, this);
			 	game.physics.arcade.overlap(this.enemiesInGame[i], this.player, this.playerDie, null, this);			 	
			}
		}

		//this.shootShuriken();


		

		if(this.nextEnemy < game.time.now){

			var start = 1000, end = 500, score = 2;

			var delay = Math.max(start - (start-end)*game.global.score/score, end);

			var newPositionEnemyBehavior = this.randomPositionEnemy[game.rnd.integerInRange(0, this.randomPositionEnemy.length-1)];

			this.addEnemy(newPositionEnemyBehavior);

			this.nextEnemy = game.time.now + delay;
		}

		this.checkBoundaries();
		
			
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

	    	if(this.facing === 'right'){
	    		this.comboPhrase.SHURIKEN.play();
	    		shuriken = this.shurikens.create(this.player.body.x + this.player.width / 2 + 20, this.player.body.y + this.player.height / 2 - 4, 'shuriken');
	    		//console.log("disparo a la derecha");
	    	}else{
	    		this.comboPhrase.SHURIKEN.play();
	    		shuriken = this.shurikens.create(this.player.body.x + this.player.width / 2 + 20, this.player.body.y + this.player.height / 2 - 4, 'shuriken');
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

		this.combo = 0;

		this.playerLife--;		
    	
    	this.lifebar.width = this.playerLife;


    	if(this.playerLife === 20){
    		this.comboPhrase.SMILE.play();

    	}

		if(this.playerLife == 0){
			game.input.keyboard.removeKey(Phaser.Keyboard.W);
			game.input.keyboard.removeKey(Phaser.Keyboard.A);
			game.input.keyboard.removeKey(Phaser.Keyboard.D);
			game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
			this.comboPhrase.SMILE.stop();
						
			if(!this.player.alive){
				return
			}
			this.playerdead.position.x = this.player.x;
			this.playerdead.position.y = this.player.y;
			this.player.kill();
			this.playerdead.alpha = 1;
			this.playerdead.animations.play('dead');			
			this.music.stop();
			this.removeElements();
			game.time.events.add(3000, this.startMenu, this);
		}		
		
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


		if(this.combo == 15){
			this.showComboText('Combo: '+this.combo+"X");			
			this.niceText = game.add.text(game.world.centerX, 100,'Nice!!!', {font : '18px Arial', fill: '#ffffff'});
			this.niceText.anchor.setTo(0.5, 0.5);		
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeNiceText, this);	
			this.comboPhrase.NICE.play();
		}
		
		if(this.combo == 25){
			this.showComboText('Combo: '+this.combo+"X");
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeSweetText, this);
			this.sweetText = game.add.text(game.world.centerX,100,'Sweet!!!', {font : '18px Arial', fill: '#ffffff'});
			this.sweetText.anchor.setTo(0.5, 0.5);			
			this.comboPhrase.SWEET.play();
		}

		if(this.combo == 40){
			this.showComboText('Combo: '+this.combo+"X");
			this.cronos = game.time.events.add(Phaser.Timer.SECOND * 1, this.removeImpresiveText, this);
			this.impresiveText = game.add.text(game.world.centerX,100,'Impresive!!!', {font : '18px Arial', fill: '#ffffff'});
			this.impresiveText.anchor.setTo(0.5, 0.5);
			this.comboPhrase.IMPRESIVE.play();
		}
		

		this.deadEnemies.push(enemy);
		game.global.score = this.deadEnemies.length; 



		this.scoreLabel.text = 'Kills '+game.global.score;
		enemy.alive = true;

		this.deadSound.play();

		shuriken.kill();
		
	},

	startMenu : function(){
		game.state.start('menu');
	},

	addEnemy : function(objBehaviorEnemy){
		var enemy = this.enemies.getFirstDead();		
		if (!enemy) {
			return;
		}

		//console.log("STATE fly:"+objBehaviorEnemy.fly)

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
		if(this.player.body.onFloor()){
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
		this.enemies.destroy();
		this.shurikens.destroy();
		if(this.emitter && this.emitter.alive){
			this.emitter.destroy();
		}		
		this.gem.kill();
		game.sound.remove(this.elixir);
		game.time.events.remove(this.elixirTime);		
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
			game.input.keyboard.removeKey(Phaser.Keyboard.W);
			game.input.keyboard.removeKey(Phaser.Keyboard.A);
			game.input.keyboard.removeKey(Phaser.Keyboard.D);
			game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
		}

		if(!this.player.alive){
			this.playerLife = 0;	
			this.lifebar.width = 0;
			this.removeElements();
						
		}	
	},

	removeElixir: function(){		
		if(this.gem.alive){
			game.add.tween(this.gem).to({alpha: 0}, 100, Phaser.Easing.Linear.None, true, 0);
			this.emitter.destroy();
			this.gem.kill();
		}			
	}

}