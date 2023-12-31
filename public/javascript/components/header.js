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
         <li class="home_button">
            <div class="home-logo">
              <img src="../../images/JX_design_logo.png" alt="JX Home" width="5%" height="auto">
            </div>
          </li>
          <li class="search_bar">Search</li>
          <li class="joinLog">
            <li class="sign-up_button">Join now</li>
            <li>or</li>
            <li class="login_button">Login</li>
          </li>
        </ul>
      </nav>
      `;
    } else {
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
          <li class="home_button">
            <div class="home-logo">
              <img src="../../images/JX_design_logo.png" alt="JX Home" width="5%" height="auto">
            </div>
          </li>
          <li class="search_bar">Search</li>
          <li class="create_listing_button">Post+</li>
          <li class="favourites_button">Favourites</li>
          <li class="messages_button">Messages</li>
          <li class="my_listing_button">My Listings</li>
          <li>@${user.username}</li>
          <li class="user_button">
            <div class="user-logo">
              <img src="${user.profile_image}" alt="${user.name}" width="5%" height="auto">
            </div>
          </li>
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

  $("header").on("click", '.favourites_button', function() {
    propertyListings.clearListings();
    getFavouritedItems()
      .then(function(json) {
        // propertyListings.addProperties(json.reservations, true);
        propertyListings.addProperties(json.favourites, true);
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
    })
    .catch(error => console.error(error));
  });

  $("header").on("click", '.home_button', function() {
    propertyListings.clearListings();
    getAllListings()
      .then(function(json) {
        // propertyListings.addProperties(json.properties);
        propertyListings.addProperties(json.items);
        views_manager.show('listings');
    });
  });

  $("header").on("click", ".messages_button", function () {
    views_manager.show("messageInbox");
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
