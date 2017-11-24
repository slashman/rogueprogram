var Level = require('./Level.class');
var LevelGenerator = require('./LevelGenerator');

var Random = require('./Random');

module.exports = {
	levels: {},
	init: function(game){
		this.game = game;
		this.player = game.player;
		this.loadLevel('mainMenu');
	},
	loadLevel: function(levelId){
		let previousLevelId = false;
		if (this.level){
			previousLevelId = this.level.id;
		}
		if (this.levels[levelId]){
			this.level = this.levels[levelId];
		} else {
			this.level = new Level(this.game, levelId);
			LevelGenerator.generateLevel(this.game, this.level, levelId);
			this.levels[levelId] = this.level;
		}
		if (previousLevelId) {
			const exit = this.level.getExitTo(previousLevelId);
			if (exit){
				this.player.x = exit.x;
				this.player.y = exit.y;
			}
		}
	}
}