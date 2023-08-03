$(() => {
  const $convo_form = $(`
  <article class="chat-container">

    <div class="chat__top">
      <div class="user">
        <div class="name">${escape(data.sender_id)}</div>
      </div>
      <div class="status"></div>
   </div>

    <div class="messageThread">${escape(data.message_text)}</div>

   <div class="chat__bottom">
      <div class="timestamp">${timeago.format(data.message_timestamp)}</div>
      <div class="read-status"></div>
   </div>

  </article>
  `);

  function displayMessages(messages) {
    const convoContainer = $convo_form.find(".chat-container .messageThread");
    convoContainer.empty();

    messages.forEach((message) => {
      const messageElement = $("<div>").addClass("message");
      messageElement.text(`${escape(message.message_text)}`);
      convoContainer.append(messageElement);
    });
  }

  function fetchMessage() {
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
  $(".chat-container .reply").on("submit", handleFormSubmit);

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
