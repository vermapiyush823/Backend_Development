const express = require("express");
const users = require("./MOCK_DATA.json");
const PORT = 3000;
const app = express();
const fs = require("fs");
const Url = require("./models/Url");
const path = require("path");
const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");

// connection ------------------
connectMongoDb("mongodb://127.0.0.1:27017/piyushdb");
// -----------------------------

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware -----------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(middlewareM1)
// -----------------------------
app.get("/test", async (req, res) => {
  const allUrls = await Url.find({});
  res.render("home", { urls: allUrls });
});

// Routes --------------------
app.use("/users", userRouter);
// ------------------------------

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
