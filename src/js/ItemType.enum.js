var Tiles = require('./Tiles.enum');

module.exports = {
	KEY: {
		name: 'Key',
		targetted: true,
		useFunction: function(game, item, dx, dy){
			const player = game.player;
			const cell = game.world.level.getCellAt(player.x + dx, player.y+dy);
			if (cell.locked){
				game.display.message("You unlock the logical gate using the Primary Key");
				game.world.level.setCellAt(player.x + dx, player.y+dy, Tiles.UNLOCKED_GATE);
			} else {
				game.display.message("Nothing happens");
			}
		}
	},
	WEAPON: {
		name: 'Weapon',
		useFunction: function(game, item){
			game.display.message("You wield the "+item.def.name);
		}
	},
	BOOK: {
		name: 'Book',
		useFunction: function(game, item){
			game.display.message("You read the "+item.def.name);
		}
	},
	SPELL: {
		name: 'Spell',
		targetted: true,
		useFunction: function(game, item, dx, dy){
			game.display.message("You cast the "+item.def.name+" in direction x "+dx+" y "+dy);
		}
	}
}