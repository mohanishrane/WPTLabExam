const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { select, insert } = require("./user.js");

app.get("/msgs", async (req, res) => {
  let list = await select();
  res.json({ list });
  //res.json({ msg: "From Get" });
});

app.post("/addmsg", async (req, res) => {
  let obj = req.body;
  await insert(obj);
  res.json({ msg: "Message added successfully!" });
});

app.listen(4000, () => console.log("Server Started"));
