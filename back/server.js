const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser");


require('./config')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());


app.get("/set", (req, res) => {
  res.cookie("username", "sg00");
  res.send("Cookie has been set");
});

app.get("/get", (req, res) => {
  const user = req.cookies.username;
  res.send("Username from cookie: " + user);
});

const PORT = process.env.PORT || 3112;


app.listen(PORT, () => console.log(`server running.... http://localhost:${PORT}`))