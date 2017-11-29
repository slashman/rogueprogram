var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

const LEVEL_DEFS = {
	adminMenu: require('./levels/adminMenu'),
	adminPrompt: require('./levels/adminPrompt'),
	battleship: require('./levels/battleship'),
	dbStructure: require('./levels/dbStructure'),
	gamesMenu: require('./levels/gamesMenu'),
	hangman: require('./levels/hangman'),
	mainMenu: require('./levels/mainMenu'),
	news: require('./levels/news'),
	processMan: require('./levels/processMan'),
	rentMovie: require('./levels/rentMovie'),
	rogue: require('./levels/rogue'),
	wordProcessor: require('./levels/wordProcessor'),
} 

module.exports = {
	generateLevel: function(game, level, defId){
		const def = LEVEL_DEFS[defId];
		const map = def.baseMap;
		let hintCounter = 0;
		let exitCounter = 0;
		for (var y = 0; y < map.length; y++){
			for (var x = 0; x < map[0].length; x++){
				if (!level.map[x]){
					level.map[x] = [];
				}
				const chara = map[y].charAt(x);
				if (/[A-Z]/.test(chara) && Random.chance(20)){
					const monster = new Being(game, level, Races[chara]);
					monster.friendly = false;
					monster.name = chara;
					monster.hp = Random.n(3,10);
					monster.intent = 'WAIT';
					level.addBeing(x, y, monster);
					level.map[x][y] = Tiles[' '];
				} else if (chara === '!') {
					level.addItem(x, y, new Item(Items.POTION));
					level.map[x][y] = Tiles[' '];
				} else if (chara === '$') {
					level.addItem(x, y, new Item(Items.PRIMARY_KEY));
					level.map[x][y] = Tiles[' '];
				} else if (chara === '*') {
					level.map[x][y] = Tiles[' '];
					const exit = def.exits[exitCounter++];
					level.addExit(x, y, exit.to, Tiles.PORTAL, exit.validator);
				} else if (chara === '%') {
					const npc = new Being(game, level, Races.NPC);
					npc.hint = def.hints[hintCounter++];
					npc.friendly = true;
					npc.intent = 'RANDOM';
					level.addBeing(x, y, npc);
					level.map[x][y] = Tiles[' '];
				} else {
					level.map[x][y] = Tiles[chara];
				}
			}
		}
		if (def.items) def.items.forEach(e=>{
			level.addItem(e.on.x, e.on.y, new Item(Items[e.id]));
		});
	}
}