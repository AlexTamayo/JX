$(() => {
  const $item_description = $(`
<article class="item-container">
  <div class="item-img"></div>

  <div class="item-info">
    <div class="name">Dyson V8 Total Clean</div>
    <div class="price">$80.00</div>
    <div class="chat">Start the chat</div>
    <div class="description">Description: Our Dyson V8 Total Clean we purcahsed from Costco has been great to us, but recently the battery finally shut itself off.</div>
    <div class="category">
      <p><strong>Category</strong>&nbsp;&nbsp;&nbsp;&nbsp;Appliances</p>
    </div>
    <div class="condition">
      <p><strong>Condition</strong>&nbsp;&nbsp;&nbsp;&nbsp;Used - good</p>
    </div>
    <div class="location">
      <p><strong>Location</strong>&nbsp;&nbsp;&nbsp;&nbsp;North Vancouver, BC</p>
    </div>
    <div class="footer">
      <div class="post-date">15d ago</div>
      <div class="seller_id">Buyer A</div>
    </div>
  </div>
</article>


`);


  function fetchItemInfo() {
    return $.ajax({
      url: "db/seeds/03_2_messages.sql",
      method: "GET",
    });
  }

  // function updateUserStatus(status) {}
  // function updateTimestamp(time) {}

  function handleFormSubmit(event) {
    event.preventDefault();

    const replyInput = $convo_form.find(".replyInput");
    const reply = replyInput.val().trim();

    if (reply !== "") {
      const newMessage = { user: "User1", text: reply }; // replace User1
      message.push(newMessage);
    }
  }

  // Bind form submit event
  $("#message").on("submit", handleFormSubmit);

  fetchMessage()
    .then((dbMessages) => {
      displayMessages(dbMessages);
    })
    .catch((error) => {
      console.error("Error fetching messages", error);
    });

  window.$convo_form = $convo_form;

  $convo_form.on("submit", function (event) {
    event.preventDefault();

    const data = $(this).serialize();
    signUp(data)
      .then(getMyDetails)
      .then((json) => {
        header.update(json.user);
        views_manager.show("messages");
      });
  });

  $("body").on("click", "#sign-up-form__cancel", function () {
    views_manager.show("listings");
    return false;
  });
});
