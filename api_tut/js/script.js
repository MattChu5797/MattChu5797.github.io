$(document).ready(function() {
  var key = "f6b3bb146ca24b2d9fa24542171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=Ecuador";
  var counter = 0;
setInterval (function(){ 
	counter++;
$.getJSON(url, function(data) {
		console.log(data["location"]["name"]);

		if (counter===1){
			$("#weather").html(data["location"] ["name"])
		}
		if (counter===2){
			console.log(data["location"]["localtime"]);
		$("#weather").html(data["location"] ["localtime"])
		}
		if (counter===3){
			if (data["current"] ["temp_f"] < 45) {
				$("#weather").html(data["current"] ["temp_f"] + "<br> It's Brick!");

			} else {
				$("#weather").html(data["current"] ["temp_f"] + "<br> Warm af.");
			}
		counter = 0;	
		}
		
		
	
	});

},1000);
});
			// $("location").addClass("time");
			// }, 10);
			// $("time").addClass("weather");
			// }, 10);
			// $("weather").addClass("location");
			// }, 10);

	// $.getJSON(url, function(data) {
	// 	console.log(data["location"]["name"]);
	// 	$("#location").html(data["location"] ["name"])
		
	
	// 	console.log(data["location"]["localtime"]);
	// 	$("#time").html(data["location"] ["localtime"])


	// 	if (data["current"] ["temp_f"] < 45) {
	// 		$("#weather").html(data["current"] ["temp_f"] + "<br> It's Brick!");

	// 	} else {
	// 		$("#weather").html(data["current"] ["temp_f"] + "<br> Warm af.");
	// 	}
		


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/