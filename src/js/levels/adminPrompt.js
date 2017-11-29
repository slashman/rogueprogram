module.exports = {
	baseMap: [
"                                                                                ",
"                                                                                ",
"  ┌──[ Admin Toolkit ]────┐                                                     ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │                       │                                                     ",
"  │ * Database╔══════════════════════════════════════════════╗                  ",
"  │           ║                                              ║                  ",
"  │ * Process ║                                              ║                  ",
"  │           ║                                              ║                  ",
"  │           ║  The requested operation requires elevation  ║                  ",
"  │           ║                                              ║                  ",
"  │ * Back to ║  Please enter Root Password                  ║                  ",
"  │           ║                                              ║                  ",
"  └───────────║                                              ║                  ",
"              ║                 [      ]                     ║                  ",
"              ║                                              ║                  ",
"              ║                                              ║                  ",
"              ║        * Ok              * Cancel            ║                  ",
"              ║                                              ║                  ",
"              ╚══════════════════════════════════════════════╝                  ",
"                                                                                ",
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
		},
		{
			to: "processMan",
			validator: function(game){
				const password = "abXY";
				const enteredPassword = game.world.level.getPassword();
				if (password !== enteredPassword){
					game.display.message("ACCESS DENIED");
					return false;
				} else {
					return true;
				}
			}
		},
		{
			to: "adminMenu"
		}
	],
	welcomeMessage: "A pop up window appears."
}