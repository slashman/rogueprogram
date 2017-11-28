module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Alameda Video Rental System                            ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    ADMINMENU                                                   ",
		"                                                                                ",
		"                                                                                ",
		"                   ┌─────────────┐                                              ",
		"                   │DBStructure  │                        %                     ",
		"                                 │                                              ",
		"                   └─────────────┘                                              ",
		"                   ┌─────────────┐                                              ",
		"                   │ProcessMan                              %                   ",
		"                   │             │                                              ",
		"                   └─────────────┘                                              ",
		"                                                                                ",
		"                                                                                ",
		" ╔═══════════════════════════ ═╦═ ════════════════════════╗                     ",
		" ║   MENU 2  GAMES             ║  MENU 1   Main Menu      ║                     ",
		" ║                             ║                          ║                     ",
		" ╚═════════════════════════════╩══════════════════════════╝                     ",
		"                                                                                "
	],
	exits: [
		{
			to: "mainMenu",
			on: {
				x: 35,
				y: 21
			}
		},
		{
			to: "dbStructure",
			on: {
				x: 30,
				y: 10
			}
		},
		{
			to: "adminPrompt",
			on: {
				x: 30,
				y: 14
			}
		},
	],
	hints: [
		"@root installed this system on March 4, 1981",
		"The Processman has the power to kill any program, but it is dangerous."
	]
}