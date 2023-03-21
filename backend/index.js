const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

app.use(express.urlencoded({ extended: false }));

require("dotenv").config();
require("./models/userDetails");

const User = mongoose.model("userDetails");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.post("/register", async (req, res) => {
  const { fullname, branch, email, password } = req.body;

  let encryptedPassword;
  try {
    encryptedPassword = await bcrypt.hash(
      password,
      Number(process.env.BCRYPT_NM)
    );
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ ok: false, Message: err.message || "Something went wrong!" });
  }
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname: fullname,
      bname: branch,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});