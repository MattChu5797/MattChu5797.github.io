$(document).ready(function() {

// var myVariable;
// myVariable = 10;
// console.log (myVariable);
// var Variable
// myVariable= 2
// console.log (myVariable);
// myVariable= yourVariable +10;
// console.log (myVariable);

var popCount = 0;
var numbOfBalloons = 50;

for (var i=0; i<numbOfBalloons; i++) {
	$("#balloon-container").append("<div class='balloon'></div>");
	if (i % 2 === 0) {
	$(".balloon").last().addClass ("big")	
	}
}




$(".balloon").on("mouseover", function() {
	$(this) .addClass("popped");

	var audio= new Audio ("pop.m4a");
	$("balloon").on("mouseenter", function() {
		$(this) .addClass("popped");
	})
	popCount = popCount + 1;
	// console.log(popCount);
	$("#pop-target").html(popCount);

	if(/*all balloons are popped*/popCount === numbOfBalloons)
	 {/*display congrats message*/ 
	// 	$("#bar").html("Wow you are so talented. You can pop balloons");
	// }
		$("#bar").html("Wow you are so talented. You can pop balloons");
	}
	// else if (popCount === 25 ) {
	// 	alert ("Keep it up!");
	// }

	
});


});