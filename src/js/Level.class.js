var Level = function(game, id){
	this.init(game, id);
}

Level.prototype = {
	init: function(game, id){
		this.map = [];
		this.beings = [];
		this.beingsList = [];
		this.exits = [];
		this.exitPositions = [];
		this.items = [];

		this.game = game;
		this.id = id;
		this.player = game.player;
	},
	getCellAt(x, y){
		return this.map[x][y];
	},
	setCellAt(x, y, tile){
		this.map[x][y] = tile;
	},
	beingsTurn: function(){
		for (var i = 0; i < this.beingsList.length; i++){
			this.beingsList[i].act();
		}
		this.game.display.refresh();
		this.game.input.inputEnabled = true;
	},
	addBeing: function(being, x, y){
		this.beingsList.push(being);
		if (!this.beings[x])
			this.beings[x] = [];
		being.x = x;
		being.y = y;
		this.beings[x][y] = being;
	},
	canWalkTo: function(x, y){
		try {
			if (this.map[x][y].solid){
				return false;
			}
		} catch (e){
			// Catch OOB
			return false;
		}
		if (this.beings[x] && this.beings[x][y]){
			return false;
		}
		if (this.player && this.player.x === x && this.player.y === y)
			return false;
		return true;
	},
	addExit: function(x,y, levelId, tile, validator){
		if (!this.map[x])
			this.map[x] = [];
		this.map[x][y] = tile;
		if (!this.exits[x])
			this.exits[x] = [];
		const exit = {levelId, x, y, validator};
		this.exits[x][y] = exit
		this.exitPositions[levelId] = exit
	},
	getExitTo: function(levelId) {
		return this.exitPositions[levelId];
	},
	addItem: function(x, y, item){
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = item;
	},
	getItem: function(x, y){
		if (!this.items[x])
			return false;
		return this.items[x][y];
	},
	removeItem: function(x, y){
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = false;
	},
	getPassword: function(){
		const passwordLocation = {x: 19, y:17};
		let password = "";
		for (let i = 0; i < 4; i++){
			const item = this.getItem(passwordLocation.x+i, passwordLocation.y);
			if (item && item.def.charValue)
				password += item.def.charValue;
		}
		return password;
	}
}

module.exports = Level;