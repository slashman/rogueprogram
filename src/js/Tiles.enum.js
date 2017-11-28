const c = require('./constants').color

const tiles = {
	PORTAL: {
		tile: new ut.Tile('*', c.r, c.g, c.b),
		solid: false
	},
	LOCKED_GATE: {
		tile: new ut.Tile('/', c.r, c.g, c.b),
		solid: true,
		locked: true
	},
	UNLOCKED_GATE: {
		tile: new ut.Tile(' ', c.r, c.g, c.b),
		solid: false
	},
	' ': {
		tile: new ut.Tile(' ', c.r, c.g, c.b),
		solid: false
	}
};

tiles['/'] = tiles.LOCKED_GATE;
tiles[' '] = tiles[' '];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-│┤╣║╗╝┐└┴┬├─┼╚╔╩╦╠═╬┘┌░▒▓[]"

chars.split('').forEach(ch=>{
	tiles[ch] = {
		tile: new ut.Tile(ch, c.r, c.g, c.b),
		solid: true
	}
});

module.exports = tiles;