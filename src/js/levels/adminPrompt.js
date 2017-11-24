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
				game.display.message("ACCESS DENIED");

				return false;
			}
		}
	]
}