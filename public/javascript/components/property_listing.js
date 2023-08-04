$(() => {
  window.propertyListing = {};

  function createListing(item, isFavourite, ownerId) {
    let buttonsHTML = '';

    if (ownerId === item.owner_id) {
      buttonsHTML = `
        <div class="property-listing__buttons-container">
          <button class="delete-button">Delete</button>
          <button class="mark-sold-button">Mark as Sold</button>
        </div>
      `;
    }

    return `
      <article class="property-listing" id="${item.id}">
        <section class="property-listing__preview-image">
          <img src="${item.image_1}" alt="${item.title} Image">
        </section>
        <section class="property-listing__details">
          <div class="property-listing__details-container">
            <h3 class="property-listing__title">${item.title}</h3>
            <div class="property-listing__price">$${item.price}</div>
            ${isFavourite ? `<i class="fa-solid fa-heart"></i>` : `<i class="fa-regular fa-heart"></i>`}
            <footer class="property-listing__footer">
              <div class="property-listing__location">${item.city}, ${item.province}</div>
            </footer>
          </div>
        </section>
        ${buttonsHTML}
      </article>
    `;
  }

  window.propertyListing.createListing = createListing;


  $(document).on('click', '.property-listing', function() {
    const itemId = $(this).attr('id');
    $.get("/api/items/" + itemId)
      .done(function(data) {
        // console.log("This is from click event", data);
        // console.log(data);
        views_manager.show("itemDescription", data);
        // views_manager.show("itemDescription")
      });
  });


});