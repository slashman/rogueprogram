var ItemType = require('./ItemType.enum')

const c = require('./constants').color

const ITEM_TYPES = {
	PRIMARY_KEY: {
		type: ItemType.KEY,
		name: 'Primary Key',
		tile: new ut.Tile('%', c.r, c.g, c.b),
	},
	POTION: {
		type: ItemType.POTION,
		name: 'Potion',
		tile: new ut.Tile('!', c.r, c.g, c.b),
	},
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
chars.split('').forEach(character=>{
	ITEM_TYPES[character+'_CHARACTER'] = {
		type: ItemType.CHARACTER,
		name: character+' Character',
		tile: new ut.Tile(character, c.r, c.g, c.b),
		charValue: character
	}
})

module.exports = ITEM_TYPES;