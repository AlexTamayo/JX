$(() => {
  window.itemDescription = {};
  
  function createDescription(data) {
    item = data.items[0];
    return `
    <article class="item-container">
      <div class="item-img">
        <img src="${item.image_1}" alt="${item.title} Image">
      </div>

      <div class="item-info">
        <div class="title">${item.title}</div>
        <div class="price">$${item.price}.00</div>
        <div class="chat">Start the chat</div>
        <div class="description">
          <div class= "description_title">
            <p><strong>Description</strong></p>
          </div>
          <div class= "description_contetnt">
            <p>${item.description}</p>
          </div>
        </div>
        <div class="location">
          <p><strong>Location</strong>&nbsp;&nbsp;&nbsp;&nbsp;${item.city}, ${item.province}</p>
        </div>
        <div class="footer">
          <div class="post-date">${item.list_date}</div>
          <div class="seller_id">@${item.username}</div>
        </div>
      </div>
    </article>
    `
  }

  window.itemDescription.createDescription = createDescription;
});
