$(() => {

  const $searchPropertyForm = $(`
  <form action="/items" method="get" id="search-property-form" class="search-property-form">
      <div class="search-property-form__field-wrapper">
        <label for="search-property-form__minimum-price">Minimum Cost</label>
        <input type="number" name="minimum_price" placeholder="Minimum Cost" id="search-property-form__minimum-price">
        <label for="search-property-form__maximum-price">Maximum Cost</label>
        <input type="number" name="maximum_price" placeholder="Maximum Cost" id="search-property-form__maximum-price">
      </div>

      <div class="search-property-form__field-wrapper">
          <button>Search</button>
          <a id="search-property-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `)
  window.$searchPropertyForm = $searchPropertyForm;

  $searchPropertyForm.on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize();

    getAllListings(data).then(function( json ) {
      // propertyListings.addProperties(json.properties);
      propertyListings.addProperties(json.items);
      views_manager.show('listings');
    });
  });

  $('body').on('click', '#search-property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });

});