$(() => {
  window.propertyListing = {};
  
  function createListing(item, isFavourite) {
    return `
    <article class="property-listing" id="${item.id}" >
        <section class="property-listing__preview-image">
          <img src="${item.image_1}" alt="house">
        </section>
        <section class="property-listing__details">
          <div class="property-listing__details-container">
          <h3 class="property-listing__title">${item.title}</h3>
          <div class="property-listing__price">$${item.price}</div>
          ${isFavourite ? `<i class="fa-solid fa-heart"></i>`:`<i class="fa-regular fa-heart"></i>`}
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