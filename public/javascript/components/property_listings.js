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

    // Retrieve the current user's information
    getMyDetails()
      .then(function (json) {
        const currentUser = json.user;
        const ownerId = currentUser.id;

        // Loop through the properties and create listings
        for (const propertyId in properties) {
          const item = properties[propertyId];

          // Pass the ownerId to the createListing function
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