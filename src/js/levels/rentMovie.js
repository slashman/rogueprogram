module.exports = {
	baseMap: [
"  ╔══════════════════════════════════════════════════════════════════════════╗  ",
"  ║                                                                          ║  ",
"  ║                  MOVIES AND SERIES CATALOG                               ║  ",
"  ║                                                                          ║  ",
"  ╚══════════════════════════════════════════════════════════════════════════╝  ",
"                                                                            %   ",
"   Search:                                                                      ",
"  ┌──────────────────────────────────────────────────────────────────────────┐  ",
"  │Title                  Type        Cat              Sta          Cust     │  ",
"  │Robotech               Series      Japanimation     AVAILABLE             │  ",
"  │G.I. Joe               Series      Cartoon          RENTED       MTOY     │  ",
"  │Thundercats            Series      Cartoon          RENTED       GWICH    │  ",
"  │Star Trek              Series      Science Fiction  AVAILABLE             │  ",
"  │Star Wars              Movie       Science Fiction  RENTED       MADMAX   │  ",
"  │Karate Kid             Movie       Action           AVAILABLE             │  ",
"  │Back to the Future     Movie       Science Fiction  RENTED       SLASH    │  ",
"  │Indiana Jones 2        Movie       Action           AVAILABLE             │  ",
"  └──────────────────────────────────────────────────────────────────────────┘  ",
" ┌───────────────────┐                            %                             ",
" │* Back to Main Menu│        %                                                 ",
" └───────────────────┘                                                          ",
"                                                                                ",
	],
	exits: [{to: "mainMenu"}],
	hints: [
		"Certain characters, like the !, can be used to recover health",
		"The only way to access the games menu now is using the Primary Keys.",
		"This system replaced the index cards to control VHS tape rentals"
	]
}