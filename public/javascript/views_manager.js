$(() => {
  const $main = $("#main-content");

  window.views_manager = {};
  const listing_select = () => {
    $('.property-listing').click(function() {
      const itemId = $(this).attr('id');
      // $(this).css('background-color', 'yellow')
      // console.log("Item ID: ", itemId);
      // views_manager.show('searchProperty')
      $.get("/api/items/" + itemId)
      .done(function(data) {
        // console.log("This is from click event", data);
        console.log(data);
        views_manager.show("itemDescription", data)
        // views_manager.show("itemDescription")
      })
  })
}

  window.views_manager.show = function (item, data) {
    $main.children().detach();
    // $newPropertyForm.detach();
    // $propertyListings.detach();
    // $searchPropertyForm.detach();
    // $logInForm.detach();
    // $signUpForm.detach();
    // $messageInbox.detach();
    // $convoForm.detach();
    // $itemDescription.detach();

    switch (item) {
      case "listings":
        $propertyListings.appendTo($main);
        listing_select();
        break;
      case "newProperty":
        $newPropertyForm.appendTo($main);
        break;
      case "searchProperty":
        $searchPropertyForm.appendTo($main);
        break;
      case "logIn":
        $logInForm.appendTo($main);
        break;
      case "signUp":
        $signUpForm.appendTo($main);
        break;
      case "messageInbox":
        $messageInbox.appendTo($main);
        break;
      case "convoForm":
        $convoForm.appendTo($main);
        break;
      case "itemDescription":
        const itemDescriptionHTML = itemDescription.createDescription(data);
        const $itemDescription = $(itemDescriptionHTML);
        // $main.append($itemDescription);
        // console.log(data);
        $itemDescription.appendTo($main);
        break;
      case "error": {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo("body");
        setTimeout(() => {
          $error.remove();
          views_manager.show("listings");
        }, 2000);

        break;
      }
    }
  };
});
