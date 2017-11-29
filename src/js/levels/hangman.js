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
	],
	welcomeMessage: "The Hanged Man is a depiction of the Norse god Odin, who suspended himself from a tree in order to gain knowledge."
}