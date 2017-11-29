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
"                                                          ││ * Write Letter │   ",
"   █   █ █████ ████  █████  ███                           ││                │   ",
"   █   █   █   █   █ █     █   █                          ││ * Daily News   │   ",
"   █   █   █   █   █ ████  █   █                          ││                │   ",
"    █ █    █   █   █ █     █   █  Rental System 3.2       │└───────────────┬┘   ",
"     █   █████ ████  █████  ███                           └────────────────┘    ",
"                                                                                ",
"  ╔═══════════════════════╦ ╦ ╦══════════════════════════╗                      ",
"  ║      MENU 2           ║+║-║        MENU 3            ║                      ",
"  ║                       ╝+║-╚                          ║                      ",
"  ║   * Computer Games    ++║--    Admin Toolkit *       ║              %       ",
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
	welcomeMessage: "You return to the main menu."
}