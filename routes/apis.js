const express = require("express");
const database = require("../db/queries/items");

const router = express.Router();

router.get("/items", (req, res) => {
  database
    .getAllItems(req.query, 370)
    .then((items) => {
      // console.log(items);
      res.send({ items })})
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});






router.get("/items/:id", (req, res) => {
  const id = req.params.id;

  database
    .getItemDescription(id)
    .then((items) => {
      res.send({ items })})
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.get("/:owner/:item", (req, res) => {
  // router.get("/", (req, res) => {
    const owner = req.params.owner;
    const item = req.params.item;
    console.log(owner);
    console.log(item);
    // database
    //   .getItemDescription(id)
    //   .then((items) => {
    //     res.send({ items })})
    //   .catch((e) => {
    //     console.error(e);
    //     res.send(e);
    //   });
    res.send("Request received successfully!");
  });

router.get("/favourited", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  database
    .getFavouritedItems(userId)
    .then((favourites) => res.send({ favourites }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


router.get("/items", (req, res) => {
  database
    .getAllItems(req.query, 370)
    .then((items) => {
      // console.log(items);
      res.send({ items })})
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.post("/items", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  const newItem = req.body;
  newItem.owner_id = userId;
  database
    .addItem(newItem)
    .then((item) => {
      res.send(item);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
