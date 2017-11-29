module.exports = {
	baseMap: [
"                                                                                ",
"                                                                                ",
"  ┌──[ Admin Toolkit ]────┐                                                     ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │ * Database Structure  │                                                     ",
"  │                       │                                                     ",
"  │ * Process Manager     │   %                                                 ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │ * Back to Main Menu   │                                                     ",
"  │                       │                                                     ",
"  └───────────────────────┘                                                     ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                            %                                                   ",
"                                                                                ",
"                                                                                ",
"                                                                                "
	],
	exits: [
		{
			to: "dbStructure"
		},
		{
			to: "adminPrompt"
		},
		{
			to: "mainMenu"
		}
	],
	hints: [
		"@root installed this system on March 4, 1981",
		"The Processman has the power to kill any program, but it is dangerous."
	],
	welcomeMessage: "You enter the Administrator Menu."
}