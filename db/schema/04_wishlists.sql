DROP TABLE IF EXISTS wishlists CASCADE;
DROP TABLE IF EXISTS wishlists_id_seq CASCADE;
CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

DROP TABLE IF EXISTS wishlist_contents CASCADE;
DROP TABLE IF EXISTS wishlist_contents_id_seq CASCADE;
CREATE TABLE wishlist_contents (
  id SERIAL PRIMARY KEY NOT NULL,
  wishlist_id INTEGER REFERENCES wishlists(id) ON DELETE CASCADE,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  date_added TIMESTAMP NOT NULL,
  sort_order INTEGER,
  availability INTEGER
);