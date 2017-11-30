var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

const LEVEL_DEFS = {
	adminMenu: require('./levels/adminMenu'),
	adminPrompt: require('./levels/adminPrompt'),
	munchman: require('./levels/munchman'),
	dbStructure: require('./levels/dbStructure'),
	gamesMenu: require('./levels/gamesMenu'),
	hangman: require('./levels/hangman'),
	mainMenu: require('./levels/mainMenu'),
	news: require('./levels/news'),
	processMan: require('./levels/processMan'),
	rentMovie: require('./levels/rentMovie'),
	rogue: require('./levels/rogue'),
	wordProcessor: require('./levels/wordProcessor'),
	castle: require('./levels/castle'),
} 

module.exports = {
	generateLevel: function(game, level, defId){
		const def = LEVEL_DEFS[defId];
		const map = def.baseMap;
		let hintCounter = 0;
		let exitCounter = 0;
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
					monster.sightRange = 5;
					monster.intent = 'WAIT';
					level.addBeing(x, y, monster);
					level.map[x][y] = Tiles[' '];
				} else if (chara === '!') {
					level.addItem(x, y, new Item(Items.POTION));
					level.map[x][y] = Tiles[' '];
				} else if (chara === '$') {
					level.addItem(x, y, new Item(Items.PRIMARY_KEY));
					level.map[x][y] = Tiles[' '];
				} else if (chara === '/') {
					level.addItem(x, y, new Item(Items.MAGIC_WAND));
					level.map[x][y] = Tiles[' '];
				} else if (chara === '*') {
					level.map[x][y] = Tiles[' '];
					const exit = def.exits[exitCounter++];
					level.addExit(x, y, exit.to, Tiles.PORTAL, exit.validator);
				} else if (chara === '%') {
					const npc = new Being(game, level, Races.NPC);
					npc.hint = def.hints[hintCounter++];
					npc.friendly = true;
					if (npc.hint === 'processman'){
						npc.intent = 'PROCESSMAN';
						npc.sightRange = 15;
						npc.hp = 220;
						npc.quoteCounter = 0;
						npc.quotes = [
							"I am the processMan, I can kill programs as I please.",
							"This ROGUE program has caused enough havoc, it's time to banish it from memory.",
							"What... what's going on? I... I can't move!",
							"It's... too late! It's taking control of me!",
							"Run while you can! I... am too powerful for.... a lousy character like you...",
							"It's the end... the system is doomed to be corrupted!",
							"WAAAAAAARRRRRGHHH!!!!!"
						]
					} else {
						npc.intent = 'RANDOM';
						npc.sightRange = 5;
						npc.hp = 1;
					}
					level.addBeing(x, y, npc);
					level.map[x][y] = Tiles[' '];
				} else {
					level.map[x][y] = Tiles[chara];
				}
			}
		}
		if (def.items) def.items.forEach(e=>{
			level.addItem(e.on.x, e.on.y, new Item(Items[e.id]));
		});
		level.welcomeMessage = def.welcomeMessage;
	}
}