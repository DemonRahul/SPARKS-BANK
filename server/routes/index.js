const express = require("express");

const User = require("../Models/user");
const config = require("../config");

const router = express.Router();

router.get("/", async (req, res) => {
  var users = await User.find();
  return res
    .status(200)
    .json(users.filter((u) => u.email !== config.email));
});

router.get("/me", async (req, res) => {
  var user = await User.findOne({ email: config.email });
  return res.status(200).json(user);
});

router.post("/transfer", async (req, res) => {
  var email = req.body.email;
  var balance = req.body.balance;
  await User.updateOne({email}, {"$inc": { balance }})
  await User.updateOne({ email: config.email }, {"$inc": { balance: -balance }});
  return res.status(200).send("Success");
});

// router.get("/set", async (req, res) => {
//   await User.insertMany(config.defaultUsers)
//   return res
//     .status(200)
//     .send("Success");
// });

module.exports = router;
