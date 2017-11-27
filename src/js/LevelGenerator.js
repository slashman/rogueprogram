var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

const LEVEL_DEFS = {
	mainMenu: require('./levels/mainMenu'),
	gamesMenu: require('./levels/gamesMenu'),
	adminMenu: require('./levels/adminMenu'),
	dbStructure: require('./levels/dbStructure'),
	adminPrompt: require('./levels/adminPrompt'),
	processMan: require('./levels/processMan'),
} 

module.exports = {
	generateLevel: function(game, level, defId){
		const def = LEVEL_DEFS[defId];
		const map = def.baseMap;
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
				} else {
					level.map[x][y] = Tiles[chara];
				}
			}
		}
		def.exits.forEach(e=>{
			level.addExit(e.on.x, e.on.y, e.to, Tiles.PORTAL, e.validator);
		});
		if (def.items) def.items.forEach(e=>{
			level.addItem(e.on.x, e.on.y, new Item(Items[e.id]));
		});
		if (def.npcs) def.npcs.forEach(n=>{
			const npc = new Being(game, level, Races.NPC);
			npc.hint = n.hint;
			npc.friendly = true;
			npc.intent = 'RANDOM';
			level.addBeing(n.on.x, n.on.y, npc);
		});
	}
}