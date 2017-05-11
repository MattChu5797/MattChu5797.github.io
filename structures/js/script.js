$(document).ready(function() {
	var wordCounter = 0;
	var quoteCounter = 0;


	setInterval(function() {
		$("#word-target").html(words[wordCounter]);

		$("#quote-target").html(quotes[quoteCounter]["quote"]);
		$("#source-target").html(quotes[quoteCounter]["source"]);
		$("#year-target").html(quotes[quoteCounter]["year"]);
	
		wordCounter++;
		quoteCounter++;

		if (wordCounter === words.length) {
		 wordCounter = 0;
		}
		if (quoteCounter === quotes.length) {
		quoteCounter = 0;
		}

	 }, 1000);
	

	// $("#quote-target").html(singleQuote["quote"]);
	// $("#source-target").html(singleQuote["source"]);
	// $("#year-target").html(singleQuote["year"]);

	
});