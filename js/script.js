// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/* global $ */

$(document).ready(function(){

$('#submit').click(function() { 
     var input = $("#srch-term").val();
     console.log(input); 
     
  $.getJSON( 
     "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC",
      
     function(response) { 
         console.log(response); 
          $('body').append('<img src=' + response.data[0].images.fixed_width_downsampled.url + '>');
     });
   });
});


        // Below log the response object to the console
        //console.log(response);
        //Log the data array to the console
        //console.log(response.data);
        //Log the first gif object from the data array
        //console.log(response.data[0]);
        //Log the images array to the console
        //console.log(response.data[0].images);
        //Log the orignal image to the console
       //console.log(response.data[0].images.original);     
       //Log the url from the orignial gif to the console  
       //console.log(response.data[0].images.original.url);
      
  