$(document).ready(function(){ 
	console.log("USA");


	//contrcutor functions

	// team(real, <img src="assets/images/real.png" width=180px/>, 23, 3, 4)
	// team(monaco, <img src="assets/images/monaco.png" width=180px/>, 24, 3, 4)
	// team(athletico, <img src="assets/images/atletico.png" width=180px/>, 24, 3, 4)
	// team(juventus, <img src="assets/images/juventus.png" width=180px/>, 24, 3, 4)

	// function team(){

	// 	this.name = name,
	// 	this.image = image,
	// 	this.div = div,
	// 	this.goal = goal,
	// 	this.scores = scores
	// }

	// console.log
	var teams = [

		real = {
			'name': 'real',
			'image': '<img src="assets/images/real.png" width=180px/>',
			'div': '#madridPick',
			'goal': '3',
			'scores': '4'
		},
		monaco = {
			'name': 'monaco',
			'image': '<a href="#"><img src="assets/images/monaco.png" width=180px/></a>',
			'div': '#24'
		},
		athletico = {
			'name': 'athletico',
			'image': '<a href="#"><img src="assets/images/atletico.png" width=180px/></a>',
			'div': '#34'
		},
		juventus = {
			'name': 'juventus',
			'image': '<a href="#"><img src="assets/images/juventus.png" width=180px/></a>',
			'div': '#33'
		},


	]

	for (var i = 0; i < teams.length; i++) {


		$(teams[i].div).append(teams[i].image)
		console.log(teams[i].name)
	}

// var sources = ["assets/images/real.png", "assets/images/monaco.png", "assets/images/atletico.png", "assets/images/juventus.png"];

// // function setUp(){}

// for (var i = 0; i < sources.length; i++) {

// 	var images = $("<img>");
// 	images.attr({

// 		"src": sources[i],
// 		"width": "180px",
		

// 	});

// 	$("#24").append(images[i]+1);
// 	$("#25").append(images[i]);

// }
	// $("#23").append(images[0]);
	// $("#24").append(images[1]);
	// $("#33").append(images[2]);
	// $("#34").append(images[3]);
	var userTeam = 0;

	$("#madridPick").on("click", function() {
		
		userTeam = $(this).attr("name");
		console.log("You picked " + "madrid");

		var pickMadrid = $("#madridPick");
		$("#21").append(pickMadrid);

	})


});








