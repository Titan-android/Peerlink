const express = require('express');
const User = require('../model/schema');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const contact = await User.find();
      res.status(200).json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;