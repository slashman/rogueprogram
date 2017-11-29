module.exports = {
	baseMap: [
"                                                                                ",
"    ╔════════════╗                                  ╔═════════════╗             ",
"    ║   MOVIES   ║                                  ║   CLIENTS   ║             ",
"    ╠════════════╣                                  ╠═════════════╣             ",
"    ║            ║######                      ######║             ║             ",
"    ║ $id         ────┐#                      #┌────   $id        ║             ",
"    ║            ║####│#                      #│####║             ║             ",
"    ║  name      ║   #│#  ╔══════════════╗    #│#   ║   name      ║             ",
"    ║            ║   #│#  ║   RENTALS    ║    #│#   ║             ║             ",
"    ║  category  ║   #│#  ╠══════════════╣    #│#   ║   address   ║             ",
"    ║            ║   #│#  ║            % ║    #│#   ║             ║             ",
"    ║  status    ║   #│#  ║  movieId     ║    #│#   ║   phone     ║             ",
"    ║            ║   #│###║              ║    #│#   ║            *║             ",
"    ║  type      ║   #└───   clientId    ║#####│#   ╚═════════════╝             ",
"    ║           %║   #####║               ─────┘#                               ",
"    ╚════════════╝        ║  rentDate    ║#######                               ",
"                          ║              ║                                      ",
"                          ║  expireDate  ║                                      ",
"                          ║              ║                                      ",
"                          ║  status      ║                                      ",
"                          ║              ║                                      ",
"                          ╚══════════════╝                                      ",
	],
	exits: [
		{
			to: "adminMenu"
		}
	],
	hints: [
		"This program controls the organization of data across the system",
 		"Once secretary Andropov commanded the nuclear strikes to start, long distance communications were shut down."
	]
}