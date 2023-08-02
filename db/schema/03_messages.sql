-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS message_chains CASCADE;
CREATE TABLE message_chains (
  id SERIAL PRIMARY KEY NOT NULL,
  reciever_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  chain_id INTEGER REFERENCES message_chains(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message_text TEXT NOT NULL,
  message_received BOOLEAN DEFAULT FALSE,
  message_read BOOLEAN DEFAULT FALSE,
  message_timestamp TIMESTAMP NOT NULL
);

