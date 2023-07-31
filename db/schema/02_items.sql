-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL, 
  description VARCHAR(255),
  price INTEGER NOT NULL,
  condition INTEGER NOT NULL,
  list_date TIMESTAMP NOT NULL,
  category INTEGER NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE
);

DROP TABLE IF EXISTS items_images CASCADE;
CREATE TABLE items_images (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  image_1 VARCHAR(255),
  image_2 VARCHAR(255),
  image_3 VARCHAR(255),
  image_4 VARCHAR(255),
  image_5 VARCHAR(255),
  image_6 VARCHAR(255)
);

