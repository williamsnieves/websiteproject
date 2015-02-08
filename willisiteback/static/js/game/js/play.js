var playState = {
	create : function(){


		this.createWorld();


	},
	update : function(){

			
	},

	movePlayer : function(){

	},

	createWorld : function(){


		this.map = game.add.tilemap('map');
		this.map.addTilesetImage('titles');

		this.layer = this.map.createLayer('Tile Layer 1');

		this.layer.resizeWorld();

		this.map.setCollision(1);
	},

	playerDie : function(){

		
	},

	startMenu : function(){

	},

	takeCoin : function(player, coin){




	},

	updateCoinPosition: function(){

	},

	addEnemy : function(){


	},

	addMobileInputs : function(){



	},

	jumpPlayer : function(){

	}
}