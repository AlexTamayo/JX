$(() => {

  const $newPropertyForm = $(`
  <form action="/api/items" method="post" id="new-property-form" class="new-property-form">
      <div class="new-property-form__field-wrapper">
        <label for="new-property-form__title">Title</label>
        <input type="text" name="title" placeholder="Title" id="new-property-form__title">
      </div>

      <div class="new-property-form__field-wrapper">
        <label for="new-property-form__description">Description</label>
        <textarea placeholder="Description" name="description" id="property-form__description" cols="30" rows="10"></textarea>
      </div>

      <!-- <div class="new-property-form__field-wrapper">
          <label for="new-property-form__type">Type</label>
          <select id="new-property-form__type" name="type">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
          </select>
        </div> -->

      <div class="new-property-form__field-wrapper">
        <label for="new-property-form__price">Price</label>
        <input placeholder="Price " type="number" name="price" id="new-property-form__price">

        <label for="new-property-form__condition">Condition</label>
        <select id="new-property-form__condition" name="condition" data-condition-selected="">
            <option value=""> - </option>
            <option value="0">New</option>
            <option value="1">Like New</option>
            <option value="2">Excellent</option>
            <option value="3">Good</option>
            <option value="4">Fair</option>
            <option value="5">Salvage</option>
        </select>

      </div>

      <div class="new-property-form__field-wrapper">
        <label for="new-property-form__city">City/Town</label>
        <input placeholder="City/Town" type="text" name="city" id="new-property-form__city">

        <label for="new-property-form__province">Province</label>
        <select id="new-property-form__province" name="province" data-province-selected="">
            <option value=""> - </option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
        </select>

        <label for="new-property-form__postal_code">Postal Code</label>
        <input placeholder="Postal Code" type="text" name="postal_code" id="new-property-form__postal_code">
      </div>

      <div class="new-property-form__field-wrapper">

        <label for="new-property-form__image_1">Image 1</label>
        <input placeholder="Image 1" type="text" name="image_1" id="new-property-form__image_1">

        <label for="new-property-form__image_2">Image 2</label>
        <input placeholder="Image 2" type="text" name="image_2" id="new-property-form__image_2">

        <label for="new-property-form__image_3">Image 3</label>
        <input placeholder="Image 3" type="text" name="image_3" id="new-property-form__image_3">

      </div>

      <div class="new-property-form__field-wrapper">

      <label for="new-property-form__image_4">Image 4</label>
      <input placeholder="Image 4" type="text" name="image_4" id="new-property-form__image_4">

      <label for="new-property-form__image_5">Image 5</label>
      <input placeholder="Image 5" type="text" name="image_5" id="new-property-form__image_5">

      <label for="new-property-form__image_6">Image 6</label>
      <input placeholder="Image 6" type="text" name="image_6" id="new-property-form__image_6">

    </div>

      <hr>

        <div class="new-property-form__field-wrapper">
            <button>Create</button>
            <a id="property-form__cancel" href="#">Cancel</a>
        </div>

    </form>
  `);

  window.$newPropertyForm = $newPropertyForm;

  $newPropertyForm.addressfield({
    json: 'javascript/libraries/addressfield/addressfield.min.json',
    fields: {
      country: '#new-property-form__country',
      locality: '#new-property-form__locality-fields',
      localityname: '#new-property-form__city',
      administrativearea: '#new-property-form__state',
      postalcode: '#new-property-form__zip'
    }
  });

  $newPropertyForm.on('submit', function (event) {
    event.preventDefault();

    views_manager.show('none');

    const data = $(this).serialize();
    submitProperty(data)
    .then(() => {
      views_manager.show('listings');
    })
    .catch((error) => {
      console.error(error);
      views_manager.show('listings');
    })
  });

  $('body').on('click', '#property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });

});
