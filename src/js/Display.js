var TextBox = require('./ui/TextBox.class');
var Box = require('./ui/Box.class');
const col = require('./constants').color

module.exports = {
	BLANK_TILE: new ut.Tile(' ', 255, 255, 255),
	CURSOR_TILE: new ut.Tile('*', col.r, col.g, col.b),
	init: function(game, config){
		this.game = game;
		this.term = new ut.Viewport(document.getElementById("game"), 80, 25);
		this.eng = new ut.Engine(this.term, this.getDisplayedTile.bind(this), 80, 25);
		this.textBox = new TextBox(this.term, 2, 80, {x:0, y:0}, this, col);
		this.inventoryBox = new Box(this.term, 15, 40, {x:19, y:4});
		this.centered = config && config.centered;
	},
	getDisplayedTile: function(x,y){
		var level = this.game.world.level;
		if (x === level.player.x && y === level.player.y){
			return level.player.tile;
		}
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.beings[x] && level.beings[x][y]){
			return level.beings[x][y].tile;
		} else if (level.items[x] && level.items[x][y]){
			return level.items[x][y].def.tile;
		} else if (level.map[x] && level.map[x][y]){
			return level.map[x][y].tile;
		} else {
			return ut.NULLTILE;
		}
	},
	refresh: function(){
		if (this.centered) {
			this.eng.update(this.game.player.x, this.game.player.y);
		} else {
			this.eng.update(40, 10);
		}
		this.textBox.draw();
		this.term.putString("  HP: "+this.game.player.hp+"  ", 0, 24, 0, 0, 0, col.r, col.g, col.b);
		this.term.render();
	},
	showInventory: function(){
		this.inventoryBox.draw();
		var xBase = 20;
		var yBase = 5;
		this.term.putString("Inventory", xBase, yBase, col.r, col.g, col.b);
		for (var i = 0; i < this.game.player.items.length; i++){
			var item = this.game.player.items[i];
			if (item == this.game.input.selectedItem){
				this.term.put(this.CURSOR_TILE, xBase, yBase+1+i);
			} else {
				this.term.put(this.BLANK_TILE, xBase, yBase+1+i);
			}
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.putString(item.def.name, xBase + 4, yBase+1+i, col.r, col.g, col.b);
		}
		this.term.render();
	},
	hideInventory: function(){
		this.term.clear();
		this.refresh();		
	},
	message: function(str, deleteNext){
		if (this.deleteNext){
			this.textBox.setText(str);
		} else {
			this.textBox.addText(str);
		}
		this.textBox.draw();
		this.term.render();
		this.deleteNext = deleteNext;
	}
}
