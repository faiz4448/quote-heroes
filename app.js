const express = require("express");
const app = express();
const port = 3000;

// serve folder "public"
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});

