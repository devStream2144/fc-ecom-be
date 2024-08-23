const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const routers = require("./routers/routers");
const errorHandler = require("./middleware/errorHandler");
require("./statics/constants");

const app = express();
app.use(cors());
app.use(express.json());

require("./DB/DBConnection");

routers.map(({ path, route }) => {
  app.use(path, route);
});

app.use("/uploads", express.static("uploads"));

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
