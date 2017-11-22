var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

const LEVEL_DEFS = {
	MainMenu: require('./levels/MainMenu')
}

module.exports = {
	generateLevel: function(level, defId, fromId){
		const def = LEVEL_DEFS[defId];
		for (var y = 0; y < def.length; y++){
			for (var x = 0; x < def[0].length; x++){
				if (!level.map[x]){
					level.map[x] = [];
				}
				level.map[x][y] = Tiles[def[y].charAt(x)];
			}
		}
		if (fromId){
			var xs = Random.n(0,79);
			var ys = Random.n(0,25);
			level.addExit(xs, ys, fromId, Tiles.PORTAL);
			level.player.x = xs;
			level.player.y = ys;
		}
		level.addExit(Random.n(0,79),Random.n(0,25),'test'+Random.n(0,1000), Tiles.PORTAL);
	}
}