// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();



/// Users

const getUserWithEmail = function(email) {
  const queryStr = `
  SELECT *
  FROM
    users
  WHERE
    email = $1;    
  `;

  const values = [email];

  return db
    .query(queryStr, values)
    .then(result => {
      if (!result.rows[0]) return null;
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};

const getUserWithId = function(id) {
  const queryStr = `
  SELECT *
  FROM
    users
  WHERE
    id = $1;    
  `;

  const values = [id];

  return db
    .query(queryStr, values)
    .then(result => {
      if (!result.rows[0]) return null;
      return result.rows[0];
    })
    .catch(err => console.log(err.message));
};

const addUser = function(user) {

  const queryStr = `
  INSERT INTO
    users (name, email, password)
  VALUES
    ($1, $2, $3)
  RETURNING *;
  `;

  const values = [user.name, user.email, user.password];

  return db
    .query(queryStr, values)
    .then(result => {
      console.log(result.rows[0]);
      result.rows[0]})
    .catch(err => console.log(err.message));
};

/// Reservations

const getAllReservations = function(guest_id, limit = 10) {

  const queryStr = `
  SELECT
    properties.*,
    avg(property_reviews.rating) as average_rating
  FROM
    reservations
  JOIN
    properties ON properties.id = reservations.property_id
  JOIN
    property_reviews ON properties.id = property_reviews.property_id
  WHERE
    reservations.guest_id = $1
  GROUP BY
    properties.id,
    reservations.start_date
  ORDER BY
    reservations.start_date
  LIMIT
  $2;
  `;

  const values = [850, limit];

  // const values = [guest_id, limit];

  return db
    .query(queryStr, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));

};

/// Properties


// const getAllProperties = (options, limit = 10) => {

//   const queryParams = [];

//   let queryStr = `
//   SELECT
//     properties.*,
//     avg(property_reviews.rating) as average_rating
//   FROM
//     properties
//   JOIN
//     property_reviews ON properties.id = property_id
//   `;

//   const whereClauses = [];

//   //  owner_id | number_of_listings 
//   // ----------+--------------------
//   //     850   |         5
//   //     818   |         5
//   //     654   |         5
//   //     617   |         5
//   //     401   |         5

//   if (options.owner_id) {
//     // queryParams.push(`${options.owner_id}`);
//     queryParams.push(850);
//     whereClauses.push(`properties.owner_id = $${queryParams.length}`);
//   }

//   if (options.city) {
//     queryParams.push(`%${options.city}%`);
//     whereClauses.push(`city LIKE $${queryParams.length}`);
//   }

//   if (options.minimum_price_per_night) {
//     queryParams.push(`${options.minimum_price_per_night * 100}`);
//     whereClauses.push(`cost_per_night >= $${queryParams.length}`);
//   }

//   if (options.maximum_price_per_night) {
//     queryParams.push(`${options.maximum_price_per_night * 100}`);
//     whereClauses.push(`cost_per_night <= $${queryParams.length}`);
//   }

//   if (whereClauses.length > 0) {
//     queryStr += ' WHERE ' + whereClauses.join(' AND ');
//   }

//   queryStr += `
//   GROUP BY
//     properties.id
//   `;

//   if (options.minimum_rating) {
//     queryParams.push(`${options.minimum_rating}`);
//     queryStr += `HAVING avg(property_reviews.rating) >= $${queryParams.length}`;

//   }

//   queryParams.push(`${limit}`);
//   queryStr += `
//   ORDER BY
//     cost_per_night
//   LIMIT
//     $${queryParams.length};
//   `;

//   return db
//     .query(queryStr, queryParams)
//     .then(result => result.rows)
//     .catch(err => console.log(err.message));
// };

const getAllProperties = (options, limit = 10) => {

  const queryParams = [];

  let queryStr = `
  SELECT *
  FROM
    items
  JOIN
    item_images ON item_id = items.id
  LIMIT
    10;
  `;

  return db
    .query(queryStr, queryParams)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};

const getAllItems = (options, limit = 10) => {

  const queryParams = [limit];

  let queryStr = `
  SELECT *
  FROM
    items
  JOIN
    item_images ON item_id = items.id
  LIMIT
    $1;
  `;

  return db
    .query(queryStr, queryParams)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};


const addProperty = function(property) {

  const queryStr = `
    INSERT INTO
      properties (owner_id,
                  title,
                  description,
                  thumbnail_photo_url,
                  cover_photo_url,
                  cost_per_night,
                  parking_spaces,
                  number_of_bathrooms,
                  number_of_bedrooms,
                  country,
                  street,
                  city,
                  province,
                  post_code,
                  active) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, true) 
    RETURNING *;
  `;

  const values = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night * 100,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms,
    property.country,
    property.street,
    property.city,
    property.province,
    property.post_code,
  ];

  return db
    .query(queryStr, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};


const addItem = function(property) {

  const queryStr = `
    INSERT INTO
      properties (owner_id,
                  title,
                  description,
                  thumbnail_photo_url,
                  cover_photo_url,
                  cost_per_night,
                  parking_spaces,
                  number_of_bathrooms,
                  number_of_bedrooms,
                  country,
                  street,
                  city,
                  province,
                  post_code,
                  active) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, true) 
    RETURNING *;
  `;

  const values = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night * 100,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms,
    property.country,
    property.street,
    property.city,
    property.province,
    property.post_code,
  ];

  return db
    .query(queryStr, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};

// module.exports = db;

// module.exports = {
//   getUserWithEmail,
//   getUserWithId,
//   addUser,
//   getAllReservations,
//   getAllProperties,
//   addProperty,
// };

module.exports = {
  db,
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
  getAllItems,
  addItem
};

