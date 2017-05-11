var app = app || {};

app.main = (function() {

    var attachEvents = function() {
        $('#button').off('click').on('click', function(){
        });
    };


var loadData = function(subject){
    var searchURL = 'https://api.giphy.com/v1/gifs/search?q=' + "blood and gore" +  '&api_key=dc6zaTOxFJmzC';



    $.getJSON(searchURL, function(json){
        console.log('Data received');
        var results = json.data;
        console.log('Found ' + results.length + ' results');
        appendData(results);
    });
};

var appendData = 
function (data){
    console.log('append data');
    console.log(data);
    $('#gifresult').prepend('<img src="' + data[Math.floor(Math.random() * 98 - 1 + 1) + 1].images.fixed_height.url + '" class= "gifposition" />');

};



var init = function (){
    console.log('Initializing app.');
    attachEvents();
    window.setInterval(function() {
        loadData($('#box').val());
    }, 220);
};




return { init: init
};
})();
window.addEventListener('DOMContentLoaded', app.main.init);










