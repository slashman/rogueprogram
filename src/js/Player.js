module.exports = {
	x: 15,
	y: 10,
	tile: new ut.Tile('@', 255, 255, 255),
	items: [],
	init: function(game){
		this.game = game;
	},
	tryMove: function(dir){
		if (!this.game.world.level.canWalkTo(this.x+dir.x, this.y+dir.y)){
			this.game.input.inputEnabled = true;
			return;
		}
		this.x += dir.x;
		this.y += dir.y;
		this.land();
	},
	land: function(){
		if (this.game.world.level.exits[this.x] && this.game.world.level.exits[this.x][this.y]){
			this.game.world.loadLevel(this.game.world.level.exits[this.x][this.y]);
		}
		this.endTurn();
	},
	endTurn: function(){
		this.game.display.refresh();
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
			this.game.world.level.addItem(item, this.x, this.y);
			this.removeItem(item);
			this.game.display.message("You drop the "+item.def.name+".");
		}
	},
	tryUse: function(item, dx, dy){
		item.def.type.useFunction(this.game, item, dx, dy);
	}
}