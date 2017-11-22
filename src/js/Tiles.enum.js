const tiles = {
	PORTAL: {
		tile: new ut.Tile('*', 255, 0, 0),
		solid: false
	},
	' ': {
		tile: new ut.Tile(' ', 0, 128, 0),
		solid: false
	}
};

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*-│┤╣║╗╝┐└┴┬├─┼╚╔╩╦╠═╬┘┌░▒▓"

chars.split('').forEach(c=>{
	tiles[c] = {
		tile: new ut.Tile(c, 255, 255, 255),
		solid: true
	}
});

module.exports = tiles;