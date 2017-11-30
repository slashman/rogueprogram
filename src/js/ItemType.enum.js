var Tiles = require('./Tiles.enum');
var Random = require('./Random');

module.exports = {
	KEY: {
		name: 'Key',
		targetted: true,
		useFunction: function(game, item, dx, dy){
			const player = game.player;
			const cell = game.world.level.getCellAt(player.x + dx, player.y+dy);
			if (cell.locked){
				game.display.message("You unlock the logical gate using the Primary Key.");
				game.world.level.setCellAt(player.x + dx, player.y+dy, Tiles.UNLOCKED_GATE);
				return true;
			} else {
				game.display.message("Nothing happens.");
				return false;
			}
		}
	},
	CHARACTER: {
		name: 'Character',
		useFunction: function(game){
			game.display.message("Nothing happens.");
			return false;
		}
	},
	POTION: {
		name: 'Potion',
		useFunction: function(game, item){
			const recovery = Random.n(25, 45)
			game.display.message(`You quaff the potion. You recover ${recovery} hit points.`);
			game.player.recover(recovery);
			return true;
		}
	},
	WAND: {
		name: 'Wand',
		targetted: true,
		useFunction: function(game, item, dx, dy){
			const player = game.player;
			for (let i = 1; i < 7; i++){
				const monster = game.world.level.getBeingAt(player.x + dx * i, player.y + dy * i);
				if (monster && monster.name){
					game.display.message(`The ${monster.name} is engulfed in flames! The wand cracks apart.`);
					monster.damage(50);
					return true;
				}
			}
			game.display.message("Nothing happens.");
			return false;
		}
	},
}