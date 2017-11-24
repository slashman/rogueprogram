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
	dbStructure: require('./levels/dbStructure')
} 

module.exports = {
	generateLevel: function(level, defId){
		const def = LEVEL_DEFS[defId];
		const map = def.baseMap;
		for (var y = 0; y < map.length; y++){
			for (var x = 0; x < map[0].length; x++){
				if (!level.map[x]){
					level.map[x] = [];
				}
				level.map[x][y] = Tiles[map[y].charAt(x)];
			}
		}
		def.exits.forEach(e=>{
			level.addExit(e.on.x, e.on.y, e.to, Tiles.PORTAL);
		});
		if (def.items) def.items.forEach(e=>{
			level.addItem(e.on.x, e.on.y, new Item(Items[e.id]));
		});
	}
}