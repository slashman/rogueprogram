const tiles = {
	PORTAL: {
		tile: new ut.Tile('*', 255, 0, 0),
		solid: false
	},
	LOCKED_GATE: {
		tile: new ut.Tile('/', 255, 0, 0),
		solid: true,
		locked: true
	},
	UNLOCKED_GATE: {
		tile: new ut.Tile(' ', 255, 0, 0),
		solid: false
	},
	' ': {
		tile: new ut.Tile(' ', 0, 128, 0),
		solid: false
	}
};

tiles['/'] = tiles.LOCKED_GATE;
tiles[' '] = tiles[' '];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-│┤╣║╗╝┐└┴┬├─┼╚╔╩╦╠═╬┘┌░▒▓[]"

chars.split('').forEach(c=>{
	tiles[c] = {
		tile: new ut.Tile(c, 255, 255, 255),
		solid: true
	}
});

module.exports = tiles;