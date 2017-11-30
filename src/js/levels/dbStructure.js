module.exports = {
	baseMap: [
"                                                                                ",
"    ╔════════════╗                                  ╔═════════════╗             ",
"    ║   MOVIES   ║                                  ║   CLIENTS   ║             ",
"    ╠════════════╣                                  ╠═════════════╣             ",
"    ║            ║######                      ######║          %  ║             ",
"    ║ $Id         ────┐#                      #┌────   $Id        ║             ",
"    ║            ║####│#                      #│####║             ║             ",
"    ║  Name      ║   #│#  ╔══════════════╗    #│#   ║   Name      ║             ",
"    ║            ║   #│#  ║   RENTALS    ║    #│#   ║             ║             ",
"    ║  Category  ║   #│#  ╠══════════════╣    #│#   ║   Address   ║             ",
"    ║            ║   #│#  ║            % ║    #│#   ║             ║             ",
"    ║  Status    ║   #│#  ║  MovieId     ║    #│#   ║   Phone     ║             ",
"    ║            ║   #│###║              ║    #│#   ║            *║             ",
"    ║  Type      ║   #└───   ClientId    ║#####│#   ╚═════════════╝             ",
"    ║           %║   #####║               ─────┘#                               ",
"    ╚════════════╝        ║  RentDate    ║#######                               ",
"                          ║              ║                                      ",
"                          ║   xpireDate  ║                                      ",
"                          ║              ║                                      ",
"                          ║  Status      ║                                      ",
"                          ║              ║                                      ",
"                          ╚══════════════╝                                      ",
	],
	exits: [
		{
			to: "adminMenu"
		}
	],
	hints: [
		"To pick up items, use the comma key while standing on them",
		"This program controls the organization of data across the system",
 		"Once secretary Andropov commanded the nuclear strikes to start, long distance communications were shut down.",
	],
	welcomeMessage: "You are now inspecting the database structure.",
	items: [
		{on: {x: 29, y: 17}, id: 'E_CHARACTER'}
	]
}