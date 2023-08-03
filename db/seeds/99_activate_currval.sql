-- SELECT nextval('item_images_id_seq');
-- SELECT currval('item_images_id_seq');

SELECT setval(pg_get_serial_sequence('items', 'id'), (SELECT MAX(id) FROM items));
-- SELECT nextval('items_id_seq');
-- SELECT currval('items_id_seq');

-- SELECT nextval('message_chains_id_seq');
-- SELECT currval('message_chains_id_seq');

-- SELECT nextval('messages_id_seq');
-- SELECT currval('messages_id_seq');

-- SELECT nextval('user_reviews_id_seq');
-- SELECT currval('user_reviews_id_seq');

-- SELECT nextval('users_id_seq');
-- SELECT currval('users_id_seq');

-- SELECT nextval('widgets_id_seq');
-- SELECT currval('widgets_id_seq');

-- SELECT nextval('wishlist_contents_id_seq');
-- SELECT currval('wishlist_contents_id_seq');

-- SELECT nextval('wishlists_id_seq');
-- SELECT currval('wishlists_id_seq');


