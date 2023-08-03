const express = require("express");
const database = require("../db/connection");

const router = express.Router();

router.get("/items", (req, res) => {
  database
    .getAllItems(req.query, 350)
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
  console.log(id);

  // database
  //   .getAllItems(req.query, 350)
  //   .then((items) => {
  //     // console.log(items);
  //     res.send({ items })})
  //   .catch((e) => {
  //     console.error(e);
  //     res.send(e);
  //   });
});


router.get("/favourited", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  database
    .getFavouritedItems(userId)
    .then((reservations) => res.send({ reservations }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// router.post("/items", (req, res) => {
//   const userId = req.session.userId;
//   if (!userId) {
//     return res.send({ error: "error" });
//   }

//   const newProperty = req.body;
//   newProperty.owner_id = userId;
//   database
//     .addProperty(newProperty)
//     .then((property) => {
//       res.send(property);
//     })
//     .catch((e) => {
//       console.error(e);
//       res.send(e);
//     });
// });

router.post("/items", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  const newItem = req.body;
  newItem.owner_id = userId;
  database
    .addItem(newItem)
    .then((property) => {
      res.send(property);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
