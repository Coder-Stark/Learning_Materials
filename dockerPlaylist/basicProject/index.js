const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "raam",
      age: 28,
    },
    {
      id: 2,
      name: "sam",
      age: 29,
    },
    {
      id: 3,
      name: "cam",
      age: 30,
    },
  ])
});

app.listen(5000, () => {
  console.log("App is running on port : 5000");
})