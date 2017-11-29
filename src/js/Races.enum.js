const c = require('./constants').color

const RACES = {
	NPC: {
		tile: new ut.Tile('☺', c.r, c.g, c.b)
	}
};

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
chars.split('').forEach(ch=>{
	RACES[ch] = {
		tile: new ut.Tile(ch, c.r, c.g, c.b)
	}
});

module.exports = RACES;