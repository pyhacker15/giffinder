// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/* global $ */

$(document).ready(function(){
    
$("#submit").click(function(){
    var userInput = $('#srch-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
             for( var i = 0; i < response.data.length; i++) { 
                 $('body').append('<img src=' + response.data[i].images.fixed_width.url + '>');
             } 
        },
    }); 
});

});