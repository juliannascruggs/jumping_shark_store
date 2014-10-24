$(document).ready(function(){

  // get the items out of the json file
  $.getJSON("items.json", function(json) {
    // add the items from the json file to the DOM using the template in index.html
  	for (var i in json) {
	 	$( ".items" ).append("<div class='list-item'><div class='list-item-image'><img src='img/" + json[i].image + "' alt=''></div><div class='list-item-header'><span class='list-item-name'>" + json[i].name + "</span><span class='list-item-price'>" + json[i].price + "</span></div><div class='list-item-add'><a href='#' class='button'>Add to cart</a></div></div>");
	}
  }).fail(function() {
  	console.log( "Fail, noob." );
  });

// create a function for updating the cart total located at the bottom of `#cart` based on the items currently in the cart

function updateTotal(cost){
  console.log(cost);
  var total = $('#cart-total').text().slice(1);
  total = parseInt(total);
  total += cost;
  console.log(total);
  $('#cart-total').empty().append("$" + total);
};

  // attach an event listener to all `.buttons` in the `.list-item`s to detect clicks
    // when clicked, add the item to the table in `#cart` using the template in index.html
    // run the function you created to update the total

$('#items_container').on('click', '.button', function(e){
  e.preventDefault();

  var itemName = $(this).parents('.list-item').find('.list-item-name').text();

  var itemPrice = $(this).parents('.list-item').find('.list-item-price').text().slice(1);
  itemPrice = parseInt(itemPrice);

$('#cart').find('tbody').append("<tr class='cart-item'><td class='cart-item-name'>" + itemName + "</td><td class='cart-item-price'>$" + itemPrice + "</td><td class='cart-item-remove'><a href='#' class='button'>Remove</a></td></tr>"
);
  updateTotal(itemPrice);
});

function getPrice(){};

  // attach an event listener to all `.buttons` in the `.cart-item`s to detect clicks
    // when clicked, remove the item from the table in `#cart`
    // run the function you created to update the total
$('#cart').on('click', '.button', function(e){

  $(this).closest('.cart-item').remove();


});


});
