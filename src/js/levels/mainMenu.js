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
"    █ █    █   █  %█ █     █   █  Rental System 3.2       │└───────────────┬┘   ",
"     █   █████ ████  █████  ███                           └────────────────┘    ",
"                                                                                ",
"  ╔═══════════════════════╦ ╦ ╦══════════════════════════╗                 %    ",
"  ║      MENU 2           ║+║-║        MENU 3            ║                      ",
"  ║                       ╝+║-╚                          ║   %                  ",
"  ║   *  omputer Games    ++║--    Admin Toolkit *       ║              %   %   ",
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
		"Use the I key to open your inventory once you have some items",
		"The Rogue program is corrupting the system, transforming characters into monsters.",
		"Please, find a way to stop the Rogue program before it's too late!.",
		"Be careful, some upper case characters have been transformed into monsters.",
		"To attack a monster, run into them, check you Hit Points in the Status Bar!.",
	],
	items: [
		{on: {x: 8, y: 20}, id: 'C_CHARACTER'},
		{on: {x: 69, y: 10}, id: 'L_CHARACTER'}
	],
	welcomeMessage: "You return to the main menu."
}