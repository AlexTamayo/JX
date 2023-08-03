$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let userLinks;

    if (!user) {
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
        <!--  <li class="home-logo">
            <img src="../../images/JX_design_logo.png" alt="JX Home">
          </li> -->
          <li class="home">JX</li>
          <li class="search_bar">Search</li>
          <li class="sign-up_button">Join now</li>
          <li> or </li>
          <li class="login_button">Login</li>
        </ul>
      </nav>
      `;
    } else {
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
        <!--  <div class="home-logo">
            <img src="../../images/JX_design_logo.png" alt="JX Home" width="5%" height="auto">
          </div> -->
          <li class="home">JX</li>
          <li class="search_bar">Search</li>
          <li class="create_listing_button">Post+</li>
          <li class="favourites">Favourites</li>
          <li class="messages_button">Messages</li>
          <li>${user.name}</li>
          <li class="logout_button">Log Out</li>
        </ul>
      </nav>
      `;
    }

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  getMyDetails()
    .then(function( json ) {
    updateHeader(json.user);
  });

  $("header").on("click", '.favourites', function() {
    propertyListings.clearListings();
    getFavouritedItems()
      .then(function(json) {
        propertyListings.addProperties(json.reservations, true);
        views_manager.show('listings');
      })
      .catch(error => console.error(error));
  });
  $("header").on("click", '.my_listing_button', function() {
    propertyListings.clearListings();
    getAllListings(`owner_id=${currentUser.id}`)
      .then(function(json) {
        // propertyListings.addProperties(json.properties);
        propertyListings.addProperties(json.items);
        views_manager.show('listings');
    });
  });
 
  $("header").on("click", '.home', function() {
    propertyListings.clearListings();
    getAllListings()
      .then(function(json) {
        // propertyListings.addProperties(json.properties);
        propertyListings.addProperties(json.items);
        views_manager.show('listings');
    });
  });

  $("header").on("click", ".messages_button", function () {
    views_manager.show("message_inbox");
  });
  $('header').on('click', '.search_bar', function() {
    views_manager.show('searchProperty');
  });

  $("header").on('click', '.login_button', () => {
    views_manager.show('logIn');
  });
  $("header").on('click', '.sign-up_button', () => {
    views_manager.show('signUp');
  });
  $("header").on('click', '.logout_button', () => {
    logOut().then(() => {
      header.update(null);
    });
  });

  $('header').on('click', '.create_listing_button', function() {
    views_manager.show('newProperty');
  });
  $('.property-listings').click( function () {console.log('test');})

});
