const express = require("express");
const app = express();
const db = require("./config/db");

const allRoutes = require("./routes");

const PORT = 8080;

db.then(() => {
  console.log("berhasil terhubung ke database !");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("Server berjalan pada port " + PORT);
});
