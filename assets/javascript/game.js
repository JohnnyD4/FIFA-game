$(document).ready(function(){ 
	console.log("USA");
	
	 $("#playButton").hide();

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
			'div': '#monacoPick'
		},
		athletico = {
			'name': 'athletico',
			'image': '<a href="#"><img src="assets/images/atletico.png" width=180px/></a>',
			'div': '#athleticoPick'
		},
		juventus = {
			'name': 'juventus',
			'image': '<a href="#"><img src="assets/images/juventus.png" width=180px/></a>',
			'div': '#juventusPick'
		},


	]

	for (var i = 0; i < teams.length; i++) {


		$(teams[i].div).append(teams[i].image)
		// console.log(teams[i].name)
	}


	var userTeam = "";
	var pickMadrid = $("#madridPick");
	var pickMonaco = $("#monacoPick");
	var pickJuventus = $("#juventusPick");
	var pickAthletico = $("#athleticoPick");
	var goalsMadrid = Math.floor(Math.random() * 5) + 2;
	var goalsMonaco = Math.floor(Math.random() * 4) + 1;
	var goalsAthletico = Math.floor(Math.random() * 4) + 2;
	var goalsJuventus = Math.floor(Math.random() * 5) + 2;
	var finalsTeam1;
	var finalsTeam2;
	
	

	$("#madridPick").on("click", function() {
		
		 userTeam = $(this).attr("data-name");
		console.log("You picked " + "Real Madrid");
		// (userTeam).append(pickMadrid);
		console.log(userTeam);
		
		// pickMadrid = $("#madridPick");
		$("#21").append(pickMadrid);
		$("#25").append(pickMonaco);
		$("#22").append(pickAthletico);
		$("#26").append(pickJuventus);
		
		// console.log("Real Madrid scored " + goalsMadrid + " goals");
		// console.log("Athletico Madrid scored " + goalsAthletico + " goals");
	})

	$("#monacoPick").on("click", function() {
		
		userTeam = $(this).attr("name");
		console.log("You picked " + "Monaco");

		
		// pickMonaco = $("#monacoPick");
		$("#21").append(pickMonaco);
		$("#26").append(pickMadrid);
		$("#25").append(pickAthletico);
		$("#22").append(pickJuventus);

		// console.log("Monaco scored " + goalsMonaco + " goals");
		// console.log("Juventus scored " + goalsJuventus + " goals");

	})

	$("#athleticoPick").on("click", function() {
		
		userTeam = $(this).attr("name");
		console.log("You picked " + "Athletico Madrid");

		
		// pickAthletico = $("#athleticoPick");
		$("#21").append(pickAthletico);
		$("#22").append(pickMadrid);
		$("#25").append(pickMonaco);
		$("#26").append(pickJuventus);
	})

	$("#juventusPick").on("click", function() {
		
		userTeam = $(this).attr("name");
		console.log("You picked " + "Juventus");

		
		// pickJuventus = $("#juventusPick");
		$("#21").append(pickJuventus);
		$("#25").append(pickMadrid);
		$("#22").append(pickAthletico);
		$("#26").append(pickMonaco);
	})

	$("#playButton").on("click", function() {
		console.log("Real Madrid scored " + goalsMadrid + " goals");
		console.log("Athletico Madrid scored " + goalsAthletico + " goals");

		console.log("Monaco scored " + goalsMonaco + " goals");
		console.log("Juventus scored " + goalsJuventus + " goals");
	
	if (goalsMadrid > goalsAthletico) {
		$(".madWin").append("Real Madrid wins!");
		console.log("Real Madrid wins!");
		// (finalsTeam1).append(pickMadrid);
		// $("#33").append(finalsTeam1);

	} else {
		console.log("Athletico Madrid wins!");
		// (finalsTeam1).append(pickAthletico);
		// $("#33").append(finalsTeam1);
	}

	if (goalsMonaco > goalsJuventus) {
		console.log("Monaco wins!");
		// (finalsTeam2).append(pickMonaco);
	} else {
		console.log("Juventus wins!");
		// (finalsTeam2).append(pickJuventus);
	}

	})

	$(".teams").on("click", function() {
		$("#pickTeam").hide();
		$("#playButton").show();

	})



});








