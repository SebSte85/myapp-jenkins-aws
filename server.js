const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("client/build"));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
