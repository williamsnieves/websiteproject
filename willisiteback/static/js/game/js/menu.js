var menuState = {
	create : function(){
		game.add.image(0, 0, 'background');

		var nameLabel = game.add.text(game.world.centerX, 80, 'Super Coin Box', { font: '70px Geo', fill: '#ffffff' })

		nameLabel.anchor.setTo(0.5, 0.5);

		/*var tween = game.add.tween(nameLabel);

		tween.to({y: 80}, 1000);
		tween.easing(Phaser.Easing.Bounce.Out).start();*/

		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var text = 'score: ' + game.global.score + '\nbest score: ' + localStorage.getItem('bestScore');

		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, text, { font: '25px Arial', fill: '#ffffff', align: 'center'});
		scoreLabel.anchor.setTo(0.5, 0.5);

		
		if(!game.device.desktop){
			var text = 'touch the screen to start';
		}else{
			var text = 'press the up arrow key to start';
		}

		var startLabel = game.add.text(game.world.centerX, game.world.height-80, text, { font: '25px Arial', fill: '#ffffff' });

		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();

		var upKey  = game.input.keyboard.addKey(Phaser.Keyboard.UP);

		if(!localStorage.getItem('bestScore')){
			localStorage.setItem('bestScore', 0);
		}

		if(game.global.score > localStorage.getItem('bestScore')){
			localStorage.setItem('bestScore', game.global.score);
		}

		this.muteButtom = game.add.button(20, 20, 'mute', this.toogleSound, this);

		this.muteButtom.input.useHandCursor = true;

		if (game.sound.mute) {
		// Change the frame to display the speaker with no sound
			this.muteButtom.frame = 1;
		}

		upKey.onDown.addOnce(this.start, this);

		game.input.onDown.addOnce(this.start, this);

	},

	start : function(){
		game.state.start('play');
	},

	toogleSound : function(){
		game.sound.mute = !game.sound.mute;

		this.muteButtom.frame = game.sound.mute ? 1 : 0;
	}
}