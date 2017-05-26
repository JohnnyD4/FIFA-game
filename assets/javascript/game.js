$(document).ready(function(){ 
console.log("USA");

var sources = ["assets/images/monaco.jpg", "assets/images/monaco.jpg"];

// function setUp(){}

for (var i = 0; i < sources.length; i++) {
var images = $("<img>");
	images.attr({

		"src": sources[i],
		"width": "300px",
		"padding": "10px"
	});

	$("#madridPick").append(images);

}

});