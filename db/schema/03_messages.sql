-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  join_date TIMESTAMP NOT NULL,
  rating INTEGER,
  username VARCHAR(255) NOT NULL,
  profile_image VARCHAR(255)
);

DROP TABLE IF EXISTS message_chains CASCADE;
CREATE TABLE message_chains (
  id SERIAL PRIMARY KEY NOT NULL,
  reciever_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE
);