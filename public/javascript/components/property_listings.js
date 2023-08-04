$(() => {
  const $propertyListings = $(`
  <section class="property-listings" id="property-listings">
    <p>Loading...</p>
  </section>
  `);

  window.$propertyListings = $propertyListings;
  window.propertyListings = {};

  function addListing(listing) {
    $propertyListings.append(listing);
  }

  function clearListings() {
    $propertyListings.empty();
  }

  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isFavourite = false) {
    clearListings();

    getMyDetails()
      .then(function (json) {
        const currentUser = json.user;
        const ownerId = currentUser.id;

        for (const propertyId in properties) {
          const item = properties[propertyId];

          const listing = propertyListing.createListing(item, isFavourite, ownerId);

          addListing(listing);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  window.propertyListings.addProperties = addProperties;
});