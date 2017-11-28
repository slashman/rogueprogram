module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Alameda Video Rental System                            ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    MAIN MENU                                                   ",
		"                                                                                ",
		"                     News                                  %                    ",
		"                   ┌─────────────┐                                              ",
		"                   │Rent Movie   │                                              ",
		"              %                  │                                              ",
		"                   └─────────────┘                                              ",
		"                   ┌─────────────┐                                              ",
		"                   │Word process                                                ",
		"                   │             │                                              ",
		"                   └─────────────┘                                              ",
		"                                                                                ",
		"                                                                                ",
		" ╔═══════════════════════════/═╦═ ════════════════════════╗                     ",
		" ║   MENU 2  GAMES             ║  MENU 3   Admin Tools    ║                     ",
		" ║                             ║                          ║                     ",
		" ╚═════════════════════════════╩══════════════════════════╝                     ",
		"                                                                                "
	],
	exits: [
		{
			to: "gamesMenu",
			on: {
				x: 5,
				y: 21
			}
		},
		{
			to: "adminMenu",
			on: {
				x: 35,
				y: 21
			}
		},
		{
			to: "news",
			on: {
				x: 30,
				y: 8
			}
		},
		{
			to: "rentMovie",
			on: {
				x: 30,
				y: 10
			}
		},
		{
			to: "wordProcessor",
			on: {
				x: 30,
				y: 14
			}
		},
	],
	hints: [
		"Access to the games menu was locked by @root, to prevent productivity loss.",
		"The Rogue program is corrupting the system, transforming characters into monsters."
	]
}