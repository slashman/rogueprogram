var Random = require('./Random');
var Geo = require('./Geo');

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
		}
	},
	actRandom: function(){
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
		if (Geo.distance(this, this.game.player) > 5)
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
	}
}

module.exports = Being;