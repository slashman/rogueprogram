module.exports = {
	baseMap: [
"                                                                                ",
"         ╔═════════════════════════════════════════════════════╗                ",
" ☻  ♠    ║                                                     ║                ",
"         ║                                                     ║   ♥   ☺        ",
"      ♥  ║     ┌┐                                              ║            ♥   ",
"  ♣      ║     │☻                █████▀▀▀              ☻       ║                ",
"         ║     │               ▐███████▀              [▼/      ║                ",
"         ║    ╔╧═╗              █████▀                / \\      ║   ☺            ",
"         ║                                                     ║                ",
"     ♠   ║   HANGMAN           BATTLESHIP            ROGUE     ║                ",
"         ║                                     %               ║                ",
"  ☺    ♠ ║      *                  *                   *       ║          ☻     ",
"         ║                %                                    ║                ",
"         ║                           %                         ║     ♠          ",
"         ║                                                     ║                ",
"         ║                ┌───────────────────┐                ║                ",
"  ♠   ♥  ║                │                   │                ║       ♣        ",
"         ║♣               │ Back to Main Menu │               ♣║                ",
"         ║♣♣              │                   │              ♣♣║            ☻   ",
"         ║♣♣♣             │        *          │             ♣♣♣║                ",
"         ╚════════════════╧═══════════════════╧════════════════╝   ☺            ",
                                                                                
                                                                                
	],
	exits: [
		{
			to: "hangman"
		},
		{
			to: "battleship"
		},
		{
			to: "rogue"
		},
		{
			to: "mainMenu"
		},
	],
	hints: [
		"@root used to enjoy playing these games",
 		"Hints to the root password can be found within the games.",
 		"The first two characters of the root password are @root's favorite Dungeons and Dragons class"
	]
}