module.exports = {
	baseMap: [
"                                                                                ",
"                                                                                ",
"     Welcome to                                                                 ",
"                                                   %                            ",
"                                                                                ",
"   ████  █     ████  ██ ██ █████ ████  ████                                     ",
"   █   █ █     █   █ █ █ █ █     █   █ █   █               ┌────────────────┐   ",
"   █████ █     █████ █ █ █ ████  █   █ █████              ┌┤                │   ",
"   █   █ █     █   █ █   █ █     █   █ █   █              ││ * Catalog      │   ",
"   █   █ █████ █   █ █   █ █████ ████  █   █              ││                │   ",
"                                                          ││ * Write  etter │   ",
"   █   █ █████ ████  █████  ███                           ││                │   ",
"   █   █   █   █   █ █     █   █                          ││ * Daily News   │   ",
"   █   █   █   █   █ ████  █   █                          ││                │   ",
"    █ █    █   █   █ █     █   █  Rental System 3.2       │└───────────────┬┘   ",
"     █   █████ ████  █████  ███                           └────────────────┘    ",
"                                                                                ",
"  ╔═══════════════════════╦ ╦ ╦══════════════════════════╗                      ",
"  ║      MENU 2           ║+║-║        MENU 3            ║                      ",
"  ║                       ╝+║-╚                          ║                      ",
"  ║   *  omputer Games    ++║--    Admin Toolkit *       ║              %       ",
"  ╚═════════════════════════╩════════════════════════════╝                      "
	],
	exits: [
		{to: "rentMovie"},
		{to: "wordProcessor"},
		{to: "news"},
		{to: "gamesMenu"}, 
		{to: "adminMenu"}
	],
	hints: [
		"Access to the games menu was locked by @root, to prevent productivity loss.",
		"The Rogue program is corrupting the system, transforming characters into monsters."
	],
	items: [
		{on: {x: 8, y: 20}, id: 'C_CHARACTER'},
		{on: {x: 69, y: 10}, id: 'L_CHARACTER'}
	],
	welcomeMessage: "You return to the main menu."
}