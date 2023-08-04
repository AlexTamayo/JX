const { db } = require('../connection');


/// Favourites

const getFavouritedItems = function(owner_id, limit = 10) {

  const queryStr = `
  SELECT
    items.id,
    owner_id,
    title,
    price,
    items.description,
    category,
    condition,
    city,
    province,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6
  FROM
    wishlists
  JOIN
    wishlist_contents ON wishlists.id = wishlist_id
  JOIN
    items ON wishlist_contents.item_id = items.id
  JOIN
    item_images ON item_images.item_id = items.id
  WHERE
    user_id = $1
  LIMIT
    $2;
  `;

  const values = [owner_id, limit];

  return db
    .query(queryStr, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));

};


/// Items

const getAllItems = (options, limit = 10) => {

  const queryParams = [];

  const whereClauses = [];

  let queryStr = `
  SELECT
    items.id,
    owner_id,
    title,
    price,
    description,
    category,
    condition,
    city,
    province,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6
  FROM
    items
  JOIN
    item_images ON item_id = items.id
  `;
  

  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    whereClauses.push(`items.owner_id = $${queryParams.length}`);
  }

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    whereClauses.push(`city LIKE $${queryParams.length}`);
  }

  if (options.minimum_price) {
    queryParams.push(`${options.minimum_price}`);
    whereClauses.push(`price >= $${queryParams.length}`);
  }

  if (options.maximum_price) {
    queryParams.push(`${options.maximum_price}`);
    whereClauses.push(`price <= $${queryParams.length}`);
  }

  if (whereClauses.length > 0) {
    queryStr += ' WHERE ' + whereClauses.join(' AND ');
  }

  queryParams.push(`${limit}`);
  queryStr += `
  ORDER BY
    items.id DESC
  LIMIT
    $${queryParams.length};
  `;

  return db
    .query(queryStr, queryParams)
    .then(result => {
      // console.log(queryStr);
      // console.log(result.rows);

      return result.rows})
    .catch(err => console.log(err.message));
};


const addItem = function(item) {

  console.log(item);

  const queryStr_item = `
  INSERT INTO
    items (owner_id,
           title,
           description,
           price,
           condition,
           city,
           province,
           postal_code)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
  `;

  
    const values_item = [
      item.owner_id,
      item.title,
      item.description,
      item.price,
      item.condition,
      item.city,
      item.province,
      item.postal_code
    ];


  const queryStr_item_images = `
    INSERT INTO
      item_images (item_id, image_1, image_2, image_3, image_4, image_5, image_6) 
    VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;

  return db
    .query(queryStr_item, values_item)
    .then(result => {
      console.log(result.rows);

      const values_item_images = [
        result.rows[0].id,
        item.image_1,
        item.image_2,
        item.image_3,
        item.image_4,
        item.image_5,
        item.image_6
      ];

      db.query(queryStr_item_images, values_item_images)
      return result.rows})
    .catch(err => console.log(err.message));
};


module.exports = {
  getFavouritedItems,
  getAllItems,
  addItem
};
