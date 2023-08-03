$(() => {
  const $message_inbox = $(`
  <article>
    <header>
      <h1>My Inbox</h1>
      <input type="text" id="searchInput" placeholder="Search conversations...">
    </header>

    <div id="conversationList">
      <div class="convoContainer">
        <div class="convoTop">
          <div class="senderId">Josh</div>
          <div class="onlineStatus">Online</div>
        </div>
        <div class="convoMain">
          I'm interested in your vacuum! HMU
        </div>
        <div class="convoBottom">
          <div class="timeago">Sent at (timeago)</div>
          <div class="reply-form__field-wrapper">
          <button>Reply</button></div>
        </div>
      </div>
      <div class="convoContainer">
        <div class="convoTop">
          <div class="senderId">Alex 2</div>
          <div class="onlineStatus">Offline</div>
        </div>
        <div class="convoMain">
          I'd like to purchase some of your swag, how much?
        </div>
        <div class="convoBottom">
          <div class="timeago">Sent at (timeago)</div>
          <div class="reply-form__field-wrapper">
          <button>Reply</button></div>
        </div>
      </div>

    </div>

  </article>
  `);
  window.$message_inbox = $message_inbox;

  $message_inbox.on("submit", function (event) {
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
