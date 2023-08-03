const express = require("express");
const database = require("../db/connection");

const router = express.Router();

router.get("/items", (req, res) => {
  database
    .getAllItems(req.query, 20)
    .then((items) => res.send({ items }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});


router.get("/reservations", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ error: "error" });
  }

  database
    .getAllReservations(userId)
    .then((reservations) => res.send({ reservations }))
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// router.post("/properties", (req, res) => {
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

  const newProperty = req.body;
  newProperty.owner_id = userId;
  database
    .addProperty(newProperty)
    .then((property) => {
      res.send(property);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
