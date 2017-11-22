var Display = require('./Display');
var World = require('./World');
var Player = require('./Player');
var Input = require('./Input');

// Remove after tests
var Item = require('./Item.class');
var Items = require('./Items.enum');

var Game = {
	start: function(){
		this.display = Display;
		this.world = World;
		this.player = Player;
		this.input = Input;
		Display.init(this);
		Player.init(this);
		World.init(this);
		Input.init(this);
		Display.refresh();
		Display.textBox.setText("You enter the Main Menu. Move around using the arrow keys.");
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.SPELL_OF_LOLZORS));
		Player.addItem(new Item(Items.BOOK_OF_AURORA));
	}
}

window.Game = Game;

module.exports = Game;