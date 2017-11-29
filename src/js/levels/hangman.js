module.exports = {
	baseMap: [
"                                                                                ",
"                           HANGMAN                                              ",
"              %                                                                 ",
"                                                       ┌─────┐                  ",
"                                                       │     │                  ",
"    Used Letters               Secret Word             │ O O │                  ",
"                                                       │     │                  ",
"                                                       └┐ O ┌┘                  ",
"     I X Y                      R A - E -               └┐ ┌┘                   ",
"                                                         ├─┤                    ",
"                                                       /─┤ │                    ",
"                                                       │ │ │                    ",
"                                                       │ └─┘                    ",
"                                                %      │                        ",
"                      Guess a letter                                            ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                               *                                                ",
"                                                                                ",
"                                                                                ",
	],
	exits: [
		{
			to: "gamesMenu"
		}
	],
	hints: [
		"Everything we know about @root comes from examining his journal archive",
 		"The third, and final part of the root password are the last letters of his long dead friend"
	]
}