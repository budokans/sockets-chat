import express from "express";
const app = express();

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
