$(() => {
  const $convo_form = $(`
  <article>
    <header>
      <h1>Conversation with User.Id</h1>
    </header>
    <div id="chatContainer">
      <div class="convoContainer">
        <div class="convoTop">
          <div class="senderId">Josh</div>
          <div class="onlineStatus">Offline</div>
        </div>
        <div class="convoMain">
          I'll sell it for 6 bills, cool?
        </div>
        <div class="convoBottom">
          <div class="timeago">Sent at (timeago)</div>
          <div class="readStatus">Read</div>
        </div>
      </div>
      <div class="convoContainer">
        <div class="convoTop">
          <div class="senderId">Alex</div>
          <div class="onlineStatus">Online</div>
        </div>
        <div class="convoMain">
          I'll buy it!
        </div>
        <div class="convoBottom">
          <div class="timeago">Sent at (timeago)</div>
          <div class="readStatus">Read</div>
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
