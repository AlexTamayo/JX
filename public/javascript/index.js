$(() => {
  getAllListings().then(function( json ) {
    propertyListings.addProperties(json.items);
    views_manager.show('listings');
  });
});