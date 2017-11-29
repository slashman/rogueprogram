const Random = require('./Random');
const Item = require('./Item.class');
const Items = require('./Items.enum');
const c = require('./constants').color

const MAX_HP = 60;

module.exports = {
	x: 65,
	y: 18,
	hp: MAX_HP,
	tile: new ut.Tile('☻', c.r, c.g, c.b),
	items: [],
	init: function(game){
		this.game = game;
	},
	attackMonster: function(m){
		const damage = Random.n(1,3);
		m.hp -= damage;
		this.game.display.message(`You hit the ${m.name}.`);
		if (m.hp <= 0){
			this.game.display.message(`The ${m.name} dies!`);
			this.game.world.level.removeBeing(m);
			this.game.world.level.addItem(m.x, m.y, new Item(Items[`${m.name}_CHARACTER`]));
		}
	},
	tryMove: function(dir){
		const level = this.game.world.level;
		const being = level.getBeingAt(this.x+dir.x, this.y+dir.y);
		if (being){
			if (being.friendly){
				if (being.hint){
					this.game.display.message(`${being.hint}`);
				}
			} else {
				//Attack!
				this.attackMonster(being);
			}
			this.game.input.inputEnabled = true;
			this.endTurn();
			return;
		}
		if (!level.canWalkTo(this.x+dir.x, this.y+dir.y)){
			this.game.input.inputEnabled = true;
			return;
		}
		this.x += dir.x;
		this.y += dir.y;
		this.land();
	},
	land: function(){
		if (this.game.world.level.exits[this.x] && this.game.world.level.exits[this.x][this.y]){
			const exit = this.game.world.level.exits[this.x][this.y];
			if ((exit.validator && exit.validator(this.game)) || !exit.validator){
				this.game.world.loadLevel(exit.levelId);
			}
		}
		this.endTurn();
	},
	endTurn: function(){
		this.game.display.refresh();
		if (this.dead){
			this.game.input.inputEnabled = false;
			return;
		}
		this.game.world.level.beingsTurn();
	},
	canPick: function(){
		return this.items.length < 24;
	},
	addItem: function(item){
		if (this.items.length === 24){
			return;
		}
		this.items.push(item);
		this.items.sort(this.itemSorter);
	},
	removeItem: function(item){
		this.items.splice(this.items.indexOf(item), 1);
		this.items.sort(this.itemSorter);	
	},
	itemSorter: function(a, b){
		if (a.def.type.name === b.def.type.name){
			return a.def.name > b.def.name ? 1 : -1;
		} else {
			return a.def.type.name > b.def.type.name ? 1 : -1;
		}
	},
	tryPickup: function(){
		var item = this.game.world.level.getItem(this.x, this.y);
		if (item){
			if (!this.canPick()){
				this.game.display.message("You can't pickup the "+item.def.name);
			} else {
				this.game.display.message("You pickup the "+item.def.name);
				this.game.world.level.removeItem(this.x, this.y);
				this.addItem(item);
			}
		}
	},
	tryDrop: function(item){
		var underItem = this.game.world.level.items[this.x] && this.game.world.level.items[this.x][this.y];
		if (underItem){
			this.game.display.message("Cannot drop the "+item.def.name+" here.");
		} else {
			this.game.world.level.addItem(this.x, this.y, item);
			this.removeItem(item);
			this.game.display.message("You drop the "+item.def.name+".");
		}
	},
	tryUse: function(item, dx, dy){
		const used = item.def.type.useFunction(this.game, item, dx, dy);
		if (used){
			this.removeItem(item);
		}
	},
	damage: function(damage){
		this.hp -= damage;
		if (this.hp <= 0){
			this.hp = 0;
			this.game.display.message("You have been destroyed.");
			this.dead = true;
		}
	},
	recover: function(recovery){
		this.hp += recovery;
		if (this.hp > MAX_HP)
			this.hp = MAX_HP;
	}
}