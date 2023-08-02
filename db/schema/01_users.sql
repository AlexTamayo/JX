-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  join_date TIMESTAMP NOT NULL,
  rating INTEGER DEFAULT 0,
  username VARCHAR(255) NOT NULL,
  profile_image VARCHAR(255)
);

DROP TABLE IF EXISTS user_reviews CASCADE;
CREATE TABLE user_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id),
  item_id INTEGER REFERENCES items(id),
  rating INTEGER NOT NULL,
  description TEXT,
  date_created TIMESTAMP NOT NULL
);