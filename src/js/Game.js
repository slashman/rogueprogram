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
		Display.textBox.setText("You enter the Main Menu. Move around using the arrow keys. Follow the * to move between programs");
		Player.addItem(new Item(Items.PRIMARY_KEY));
	}
}

window.Game = Game;

module.exports = Game;