$(() => {
  const $convo_form = $(`
  <article class="chat-container">
  
    <div class="chat__top">
      <div class="user">
        <img src="${escape(data.user.avatars)}" alt="avatar">
        <div class="name">${escape(data.user.name)}</div>
      </div>
      <div class="status">
        ${escape(data.user.onlineStatus)}
     </div>
   </div>

    <div class="conversation">${escape(data.content.text)}</div>

   <div class="chat__bottom">
      <div class="timestamp">${timeago.format(data.created_at)}</div>
      <div class="read-status">${escape(data.readStatus)}</div>
   </div>

  </article>
  `);
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
