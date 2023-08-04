$(() => {
  window.itemDescription = {};
  
  function createDescription(data) {
    item = data.items[0];
    // console.log(item);
    return `
    <article class="item-container">
      <div class="item-img"></div>

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
        <div class="category">
          <p><strong>Category</strong>&nbsp;&nbsp;&nbsp;&nbsp;${item.category}</p>
        </div>
        <div class="condition">
          <p><strong>Condition</strong>&nbsp;&nbsp;&nbsp;&nbsp;${item.condition}</p>
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
