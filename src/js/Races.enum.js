const RACES = {
	NPC: {
		tile: new ut.Tile('t', 128, 128, 0)
	}
};

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
chars.split('').forEach(c=>{
	RACES[c] = {
		tile: new ut.Tile(c, 255, 255, 255)
	}
});

module.exports = RACES;