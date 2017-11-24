module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Cybertroniks GlobalNet 3.2                             ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    ADMINMENU                                                   ",
		"                                                                                ",
		"                                                                                ",
		"                   ┌─────────────┐                                              ",
		"                   │DBStructure  │                                              ",
		"                                 │                                              ",
		"                   └─────────────┘                                              ",
		"                                                                                ",
		" ╔═════════════════════════════╦══════════════════════════╗                     ",
		" ║  This operation requires elevation. Please enter root  ║                     ",
		" ║                                                        ║                     ",
		" ║                [    ]                                  ║                     ",
		" ║                                                        ║                     ",
		" ║       Ok                         Cancel                ║                     ",
		" ╚═════════════════════════════╩══════════════════════════╝                     ",
		"                                                                                "
	],
	exits: [
		{
			to: "adminMenu",
			on: {
				x: 35,
				y: 19
			}
		},
		{
			to: "processMan",
			on: {
				x: 5,
				y: 19
			},
			validator: function(game){
				const password = "abXY";
				const enteredPassword = game.world.level.getPassword();
				if (password !== enteredPassword){
					game.display.message("ACCESS DENIED");
					return false;
				} else {
					return true;
				}
			}
		}
	],
	items: [
		{
			id: 'a_CHARACTER',
			on: {
				x: 20,
				y: 18
			}
		},
		{
			id: 'b_CHARACTER',
			on: {
				x: 21,
				y: 18
			}
		},
		{
			id: 'X_CHARACTER',
			on: {
				x: 22,
				y: 18
			}
		},
		{
			id: 'Y_CHARACTER',
			on: {
				x: 23,
				y: 18
			}
		},
		{
			id: 'c_CHARACTER',
			on: {
				x: 24,
				y: 18
			}
		},
	]
}