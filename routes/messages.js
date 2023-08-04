const express = require("express");
const database = require("../db/queries/messages");

const router = express.Router();



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


// $.get(`/messages/${item.owner_id}/${item.id}`)

// router.get("/items/:id", (req, res) => {
//   const id = req.params.id;



module.exports = router;