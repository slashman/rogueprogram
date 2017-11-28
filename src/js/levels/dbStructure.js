module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              DBSTRUCTURE                                                       ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                   ┌─────────────┐               %                              ",
		"                   │DBStructure  │                                              ",
		"                                 │                                              ",
		"                   └─────────────┘                                              ",
		"                   ┌─────────────┐                %                             ",
		"                   │ProcessMan                                                  ",
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
			to: "adminMenu",
			on: {
				x: 30,
				y: 11
			}
		}
	],
	items: [
		{
			id: 'PRIMARY_KEY',
			on: {
				x: 10,
				y: 11
			}
		}
	],
	hints: [
		"This program controls the organization of data across the system",
 		"Once secretary Andropov commanded the nuclear strikes to start, long distance communications were shut down."
	]
}