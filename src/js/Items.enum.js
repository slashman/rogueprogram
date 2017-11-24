var ItemType = require('./ItemType.enum')

const ITEM_TYPES = {
	PRIMARY_KEY: {
		type: ItemType.KEY,
		name: 'Primary Key',
		tile: new ut.Tile('%', 128, 255, 255)
	},
	IRON_SWORD: {
		type: ItemType.WEAPON,
		name: 'Iron Sword',
		tile: new ut.Tile('/', 128, 128, 128)
	},
	BOOK_OF_MIRDAS: {
		type: ItemType.BOOK,
		name: 'Book of Mirdas',
		tile: new ut.Tile('B', 255, 0, 0)
	},
	BOOK_OF_AURORA: {
		type: ItemType.BOOK,
		name: 'Book of Aurora',
		tile: new ut.Tile('B', 0, 0, 255),
		targetted: true
	},
	SPELL_OF_LOLZORS: {
		type: ItemType.SPELL,
		name: 'Spell of Lolzors',
		tile: new ut.Tile('S', 0, 255, 0)	
	}
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
chars.split('').forEach(character=>{
	ITEM_TYPES[character+'_CHARACTER'] = {
		type: ItemType.CHARACTER,
		name: character+' Character',
		tile: new ut.Tile(character, 0, 0, 255),
		charValue: character
	}
})

module.exports = ITEM_TYPES;