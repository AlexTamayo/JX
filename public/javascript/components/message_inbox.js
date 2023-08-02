$(() => {
  const $message_inbox = $(`
  <article>
    <header>
      <h1>My Inbox</h1>
      <input type="text" id="searchInput" placeholder="Search conversations...">
    </header>

    <div id="conversationList">
      <!-- Conversations will be dynamically generated here -->
      <!-- Each conversation could be represented as a list item or a card -->
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
