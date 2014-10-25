$( document ).ready( function() {

  // Create product variable
  var product;
  
  // Get JSON response
  var response = $.getJSON( "items.json", function ( json ) {});

  response.complete( function() {

    // Populate our product array
    product = response.responseJSON;

    // Call the function to populate our item list with products
    populateList();

  });

  // Create a function to populate our item list with products
  function populateList() {

    // Iterate over product to add the item list HTML 
    for ( var i in product ) {
      $( ".items" ).append("<div class='list-item'><div class='list-item-image'><img src='img/" + product[i].image + "' alt=''></div><div class='list-item-header'><span class='list-item-name'>" + product[i].name + "</span><span class='list-item-price'>" + product[i].price + "</span></div><div class='list-item-add'><a href='#' class='button' id='"+ i +"'>Add to cart</a></div></div>");
    };

  };

  // Create a function to update our cart total
  function updateTotal( operation , price ) {

    // Get the current cart total
    var total = parseInt( $( '#cart-total' ).text().slice( 1 ) );
    var price = parseInt( price.slice( 1 ) )

    // Recalculate the cart total  
    if ( operation == 'add' ){
      total += price;
    }else{
      total -= price;
    };

    // Update the cart total HTML
    $( '#cart-total' ).empty().append( '$' + total );

  };

  // attach an event listener to all `.buttons` in the `.list-item`s to detect clicks
    // when clicked, add the item to the table in `#cart` using the template in index.html
    // run the function you created to update the total

  $('#items_container').on('click', '.button', function(e) {
    e.preventDefault();

    // Get the product id from the button
    var id = $( this ).attr( 'id' );
    
    // Populate the cart with the cart item using product array
    $('#cart').find('tbody').append("<tr class='cart-item'><td class='cart-item-name'>" + product[id].name + "</td><td class='cart-item-price'>" + product[id].price + "</td><td class='cart-item-remove'><a href='#' class='button' id='" + id + "'>Remove</a></td></tr>");

    // Call a function to update the cart total
    updateTotal( 'add' , product[id].price );

  });

  // attach an event listener to all `.buttons` in the `.cart-item`s to detect clicks
    // when clicked, remove the item from the table in `#cart`
    // run the function you created to update the total

  $('#cart').on('click', '.button', function(e) {

    // Get the product id from the button
    var id = $( this ).attr( 'id' );

    // Remove the item from the cart
    $( this ).closest('.cart-item').remove();

    // Call a function to update the cart total
    updateTotal( 'remove' , product[id].price );

  });

});

