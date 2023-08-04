$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = function (item, data) {
    $main.children().detach();

    switch (item) {
      case "listings":
        $propertyListings.appendTo($main);
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
