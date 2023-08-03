const db = require('../connection');

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

module.exports = { getUsers };
