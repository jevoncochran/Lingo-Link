// Endpoints for /api/auth

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const users = require("../users/user-model");

// User login
router.post("/login", (req, res) => {
  let { email, password } = req.body;

  users
    .findUserBy({ email })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          account: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMessage: "A server error has occurred" });
    });
});

module.exports = router;
