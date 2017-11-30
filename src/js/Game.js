var Display = require('./Display');
var World = require('./World');
var Player = require('./Player');
var Input = require('./Input');

// Remove after tests
var Item = require('./Item.class');
var Items = require('./Items.enum');

var Game = {
	start: function(){
		setTimeout(()=>this._start(), 1000);
	},
	_start: function(){
		document.getElementById("fontLoader").innerHTML = '';
		this.display = Display;
		this.world = World;
		this.player = Player;
		this.input = Input;
		Display.init(this);
		Player.init(this);
		World.init(this);
		Input.init(this);
		Display.refresh();
		Display.textBox.setText("Welcome to the Main Menu. Move around using the arrow keys. Step into the * to move between programs. Seek the ☺ characters for info.");
	}
}

window.Game = Game;

module.exports = Game;