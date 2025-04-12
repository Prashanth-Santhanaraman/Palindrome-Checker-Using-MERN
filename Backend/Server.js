const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Palindrome Server is working !");
});

app.post("/newPalindromeString", (req, res) => {
  const { palindromeText } = req.body;
  let palindromeCopy = palindromeText;
  const cleaned = palindromeCopy.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverse = "";
  for (i = cleaned.length - 1; i >= 0; i--) {
    reverse += cleaned[i];
  }
  if (cleaned === reverse) {
    res
      .status(200)
      .json({
        message: "It is palindrome text !",
        text: `${palindromeCopy}`,
        state: "true",
      });
  } else {
    res.json({
      message: "It is not palindrome text !",
      text: `${palindromeCopy}`,
      state: "false",
    });
  }
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening on port ${process.env.PORT}`);
});
