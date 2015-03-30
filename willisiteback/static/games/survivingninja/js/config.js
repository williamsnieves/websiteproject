var configurationState = {
	preload: function(){

	},
	create: function(){
		this.bg = game.add.sprite(0, 0, "bgmenu");

		this.titleGame = game.add.text(game.world.centerX - 220, game.world.centerY - 150, 'Choose Your Time', {font : '38px Shojumaru', fill: '#760606'});

		this.check = game.add.sprite(game.world.centerX + 100, game.world.centerY + 20, "check");
		this.check.alpha = 0;

		var that = this;
		
		this.btnday = game.add.button(game.world.centerX, 110, "btnday", this.chooseBackgroundDay, this);
		this.btnday.scale.setTo(0.5);
		this.btnday.anchor.setTo(0.5, 0.5);

		this.btnafternoon = game.add.button(game.world.centerX, 160, "btnafternoon", this.chooseBackgroundAfterNoon, this);
		this.btnafternoon.scale.setTo(0.5);
		this.btnafternoon.anchor.setTo(0.5, 0.5);

		this.btnnight = game.add.button(game.world.centerX, 210, "btnnight", this.chooseBackgroundNight, this);
		this.btnnight.scale.setTo(0.5);
		this.btnnight.anchor.setTo(0.5, 0.5);




		this.btnback = game.add.button(game.world.centerX, 300, "btnback", this.backGame, this);
		this.btnback.scale.setTo(0.5);
		this.btnback.anchor.setTo(0.5, 0.5);

		this.buttonSound = game.add.audio('button');

		if(localStorage.getItem("choose") === "bgday"){
			this.check.position.y = game.world.centerY - 80;
			this.check.alpha = 1;
		}

		if(localStorage.getItem("choose") === "sky"){
			this.check.position.y = game.world.centerY + 20;
			this.check.alpha = 1;
		}

		if(localStorage.getItem("choose") === "bgnight"){
			this.check.position.y = game.world.centerY + 20;
			this.check.alpha = 1;
		}

	},

	backGame: function(){
		this.buttonSound.play();
		game.state.start("menu");
	},

	chooseBackgroundDay: function(){
		this.buttonSound.play();
		game.global.choose = "bgday";
		localStorage.setItem("choose", game.global.choose);		

		this.check.position.y = game.world.centerY - 80;
		this.check.alpha = 1;
	},

	chooseBackgroundAfterNoon: function(){
		this.buttonSound.play();
		game.global.choose = "sky";
		localStorage.setItem("choose", game.global.choose);
		
		this.check.position.y = game.world.centerY - 30;
		this.check.alpha = 1;
	},
	chooseBackgroundNight: function(){
		this.buttonSound.play();
		game.global.choose = "bgnight";
		localStorage.setItem("choose", game.global.choose);
		
		this.check.position.y = game.world.centerY + 20;
		this.check.alpha = 1;
	}
	
}