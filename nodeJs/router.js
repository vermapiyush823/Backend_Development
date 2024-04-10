const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`
  <h1>IPL</h1>
  <form action="/ipl" method="post">
    <label for="name">Tap the button to get the image</label>
    <button type="submit">Submit</button>
    </form>
  `);
});
router.post("/ipl", (req, res, next) => {
  res.send(
    `
    <h1>Indian Premier League</h1>
    <img src="https://i.pinimg.com/originals/dd/e6/e4/dde6e45888eef295dd2b0a71c7bbab7b.jpg" alt="img" />
    `
  );
});

// router.post("/ipl", (req, res, next) => {
//   res.send("IPL POST");
// });
module.exports = router;
