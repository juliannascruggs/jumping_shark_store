$( document ).ready( function(){

  // get the items out of the json file
  $.getJSON( "items.json", function ( json ) {
    // add the items from the json file to the DOM using the template in index.html
  	for ( var i in json ) {
	 	$( ".items" ).append("<div class='list-item'><div class='list-item-image'><img src='img/" + json[i].image + "' alt=''></div><div class='list-item-header'><span class='list-item-name'>" + json[i].name + "</span><span class='list-item-price'>" + json[i].price + "</span></div><div class='list-item-add'><a href='#' class='button'>Add to cart</a></div></div>");
	}
  }).fail( function() {
  	console.log( "Fail, noob." );
  });

// create a function for updating the cart total located at the bottom of `#cart` based on the items currently in the cart

function updateTotal( operation , price ) {

  console.log(price);
  // Get current total
  var total = $( '#cart-total' ).text().slice( 1 );
  total = parseInt( total );

  // Update cart total  
  if ( operation == 'add' ){
    total += price;
  }else{
    total -= price;
  }

  $( '#cart-total' ).empty().append( "$" + total );

};

  // attach an event listener to all `.buttons` in the `.list-item`s to detect clicks
    // when clicked, add the item to the table in `#cart` using the template in index.html
    // run the function you created to update the total

function getItem( button ){

  var item = {};

  // Recreate the item from the list or cart HTML
//  item['name'] = button.parents( 'div[class$=-item]' ).find( 'span[class$=-item-name]' ).text();
  item['name'] = button.prevAll( '.list-item-header' ).find( '.list-item-name' ).text();
  //.find( '.list-item-name' ).text();
  console.log(item['name']);

  item['price'] = button.prevAll( '.list-item-header' ).find( '.list-item-price' ).text().slice( 1 );
  item['price'] = parseInt(item['price']);

  return item;

};

$('#items_container').on('click', '.button', function(e){
  e.preventDefault();

  var item = getItem( $(this).parent() );

$('#cart').find('tbody').append("<tr class='cart-item'><td class='cart-item-name'>" + item['name'] + "</td><td class='cart-item-price'>$" + item['price'] + "</td><td class='cart-item-remove'><a href='#' class='button'>Remove</a></td></tr>"
);

  updateTotal( 'add' , item['price'] );

});

  // attach an event listener to all `.buttons` in the `.cart-item`s to detect clicks
    // when clicked, remove the item from the table in `#cart`
    // run the function you created to update the total
$('#cart').on('click', '.button', function(e){

  var item = getItem( $(this) );
  console.log(item)
  updateTotal( 'remove' , item['price'] );

  $(this).closest('.cart-item').remove();

});


});
