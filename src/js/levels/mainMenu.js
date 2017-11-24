module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Cybertroniks GlobalNet 3.2                             ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    MAIN MENU                                                   ",
		"                                                                                ",
		"                                                                                ",
		"                   ┌─────────────┐                                              ",
		"                   │Quotes       │                                              ",
		"                                 │                                              ",
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
			to: "quotes",
			on: {
				x: 30,
				y: 10
			}
		},
		{
			to: "wordProcess",
			on: {
				x: 30,
				y: 14
			}
		},
	],
	npcs: [
		{
			hint: "Access to the games menu was locked by @root, to prevent productivity loss.",
			on: {
				x: 6,
				y: 6
			}
		}

	]
}