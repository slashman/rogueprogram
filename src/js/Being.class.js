var Random = require('./Random');
var Geo = require('./Geo');
const Item = require('./Item.class');
const Items = require('./Items.enum');
const color = require('./constants').color;
var Tiles = require('./Tiles.enum');

function Being(game, level, race){
	this.game = game;
	this.level = level;
	this.tile = race.tile;
	this.x = null;
	this.y = null;
	this.intent = 'CHASE';
}

Being.prototype = {
	act: function(){
		switch (this.intent){
			case 'RANDOM':
				this.actRandom();
				break;
			case 'WAIT':
				this.actWait();
				break;
			case 'PROCESSMAN':
				this.actProcessman();
				break;
		}
	},
	actProcessman: function(){
		if (Geo.distance(this, this.game.player) < 10){
			if (this.quoteCounter ===this.quotes.length){
				this.friendly = false;
				this.name = "Rogue Program";
				this.tile = new ut.Tile('@', color.r, color.g, color.b);
				this.intent = 'WAIT';
				this.level.removeExitTo('adminPrompt')
			} else {
				this.game.display.message(this.quotes[this.quoteCounter++], true);
			}
		}
	},
	actRandom: function(){
		if (Random.chance(70))
			return;
		var dx = Random.n(-1, 1);
		var dy = Random.n(-1, 1);
		if (!this.level.canWalkTo(this.x+dx,this.y+dy)){
			return;
		}
		this.moveTo(dx, dy);
	},
	actWait: function(){
		var nearestEnemy = this.getNearestEnemy();
		if (!nearestEnemy){
			return;
		}
		var dx = Math.sign(nearestEnemy.x - this.x);
		var dy = Math.sign(nearestEnemy.y - this.y);
		if (this.x+dx === this.game.player.x && this.y+dy === this.game.player.y){
			this.attackPlayer();
		} else if (this.level.canWalkTo(this.x+dx,this.y+dy)){
			this.moveTo(dx, dy);
		}
		
	},
	attackPlayer: function() {
		this.game.display.message(`The ${this.name} hits you.`);
		this.game.player.damage(Random.n(1,3));
	},
	getNearestEnemy: function(){
		if (Geo.distance(this, this.game.player) > this.sightRange)
			return false;
		if (this.game.player.dead)
			return false;
		return this.game.player;
	},
	moveTo: function(dx,dy){
		this.level.beings[this.x][this.y] = false;
		this.x = this.x + dx;
		this.y = this.y + dy;
		if (!this.level.beings[this.x])
			this.level.beings[this.x] = [];
		this.level.beings[this.x][this.y] = this;
	},
	damage: function(damage){
		this.hp -= damage;
		
		if (this.hp <= 0){
			this.game.display.message(`The ${this.name} dies!`);
			this.game.world.level.removeBeing(this);
			if (this.hint === 'processman'){
				this.game.display.message(`An invisible choir sings, and you are bathed in light!`);
				this.level.addExit(this.x, this.y, 'castle', Tiles.PORTAL);
			} else {
				this.game.world.level.addItem(this.x, this.y, new Item(Items[`${this.name}_CHARACTER`]));
			}
		}
	}
}

module.exports = Being;