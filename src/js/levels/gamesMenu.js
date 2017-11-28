module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Cybertroniks GlobalNet 3.2                             ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    GAMES MENU                                                  ",
		"                                                                                ",
		"                    Battleship                                                  ",
		"                   ┌─────────────┐                                              ",
		"       %           │Hangman      │               %                              ",
		"                                 │                                              ",
		"                   └─────────────┘                                              ",
		"                   ┌─────────────┐                                              ",
		"                   │Rogue                                                       ",
		"                   │             │                %                             ",
		"                   └─────────────┘                                              ",
		"                                                                                ",
		"                                                                                ",
		" ╔═══════════════════════════ ═╦═ ════════════════════════╗                     ",
		" ║   MENU 1  MAINS             ║  MENU 3   Admin Tools    ║                     ",
		" ║                             ║                          ║                     ",
		" ╚═════════════════════════════╩══════════════════════════╝                     ",
		"                                                                                "
	],
	exits: [
		{
			to: "mainMenu",
			on: {
				x: 5,
				y: 21
			}
		},
		{
			to: "battleship",
			on: {
				x: 30,
				y: 8
			}
		},
		{
			to: "hangman",
			on: {
				x: 30,
				y: 10
			}
		},
		{
			to: "rogue",
			on: {
				x: 30,
				y: 14
			}
		},
	],
	hints: [
		"@root used to enjoy playing these games",
 		"Hints to the root password can be found within the games.",
 		"The first two characters of the root password are @root's favorite Dungeons and Dragons class"
	]
}