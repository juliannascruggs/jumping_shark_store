$(document).ready(function(){

  // get the items out of the json file
  $.getJSON("items.json", function(json) {
  	for (var i in json) {
	 	$( ".items" ).append("<p>" + json[i] + "</p>");
	}
  }).fail(function() {
  	console.log( "Fail, noob." );
  });

    // add the items from the json file to the DOM using the template in index.html

  // create a function for updating the cart total located at the bottom of `#cart` based on the items currently in the cart

  // attach an event listener to all `.buttons` in the `.list-item`s to detect clicks
    // when clicked, add the item to the table in `#cart` using the template in index.html
    // run the function you created to update the total

  // attach an event listener to all `.buttons` in the `.cart-item`s to detect clicks
    // when clicked, remove the item from the table in `#cart`
    // run the function you created to update the total

});
