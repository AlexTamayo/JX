$(() => {
  window.propertyListing = {};
  
  function createListing(item, isReservation) {
    return `
    <article class="property-listing">
        <section class="property-listing__preview-image">
          <img src="${item.image_1}" alt="house">
        </section>
        <section class="property-listing__details">
          <div class="property-listing__details-container">
          <h3 class="property-listing__title">${item.title}</h3>
          <div class="property-listing__price">$${item.price}</div>
          <div class="property-listing__add-to-favourites">$${item.price}</div>
          ${isReservation ? 
            `<p>${moment(item.start_date).format('ll')} - ${moment(item.end_date).format('ll')}</p>` 
            : ``}
          <footer class="property-listing__footer">
            <div class="property-listing__location">${item.city}, ${item.province}</div>
          </footer>
          </div>
        </section>
      </article>
    `
  }

  window.propertyListing.createListing = createListing;

});