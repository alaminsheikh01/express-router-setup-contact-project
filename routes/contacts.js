const express = require("express");
const { route } = require("./users");
const router = express.Router();

//route    GET api/contacts
//desc     get all users contacts
//access   private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

//route    POST api/contacts
//desc     add new contacts
//access   private
router.post("/", (req, res) => {
  res.send("add new contacts");
});

//route    PUT api/contacts/:id
//desc     updated conatct
//access   private
router.put("/:id", (req, res) => {
  res.send("updated contacts");
});

//route   DELETE api/contacts/:id
//desc    delete contacts
//access  private
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
