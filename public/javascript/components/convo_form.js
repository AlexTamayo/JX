// const users = require('../../../db/queries/users')

$(() => {
  const $convoForm = $(`
<article class="chat-container">
  <div class="chat__top">
    <div class="user">
      <div class="name">User Name</div>
    </div>
    <div class="status">Online</div>
  </div>

  <div class="messageThread">
      <div class="message sender">
      <div class="message-content">Hello there!</div>
      <div class="message-timestamp">2 minutes ago</div>
    </div>
    <div class="message recipient">
      <div class="message-content">Hey! How are you?</div>
      <div class="message-timestamp">1 minute ago</div>
    </div>
  </div>

  <div class="send-new-message">
    <input type="text" id="messageInput" placeholder="Type your message...">
    <button id="sendButton">Send</button>
  </div>

  <div class="chat__bottom">
    <div class="timestamp">2 hours ago</div>
    <div class="read-status">Read</div>
  </div>
</article>

`);

  // function displayMessages(messages) {
  //   const convoContainer = $convoForm.find(".chat-container .messageThread");
  //   convoContainer.empty();

  //   messages.forEach((message) => {
  //     const messageElement = $("<div>").addClass("message");
  //     messageElement.text(`${escape(message.message_text)}`);
  //     convoContainer.append(messageElement);
  //   });
  // }

  function fetchMessage() {
    return $.ajax({
      // url: "db/seeds/03_2_messages.sql",
      method: "GET",
    });
  }

  // function updateUserStatus(status) {}
  // function updateTimestamp(time) {}

  function handleFormSubmit(event) {
    event.preventDefault();

    const replyInput = $convoForm.find(".replyInput");
    const reply = replyInput.val().trim();

    if (reply !== "") {
      const newMessage = { user: "User1", text: reply }; // replace User1
      message.push(newMessage);
    }
  }

  // Bind form submit event
  $("#message").on("submit", handleFormSubmit);

  // fetchMessage()
  //   .then((dbMessages) => {
  //     displayMessages(dbMessages);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching messages", error);
  //   });

  window.$convoForm = $convoForm;

  $convoForm.on("submit", function (event) {
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
