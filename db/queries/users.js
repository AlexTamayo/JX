const { db } = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// const fetchMessage = () => {
//   return db.query('SELECT * FROM messages')
//     .then(result => result.rows)
//     .catch(error => {
//       console.error('Error', error);
//     })
// }

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


module.exports = { 
  getUsers,
  getUserWithEmail,
  getUserWithId,
  addUser
 };
