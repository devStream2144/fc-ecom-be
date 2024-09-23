const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const routers = require("./routers/routers");
const errorHandler = require("./middleware/errorHandler");
require("./statics/constants");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

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
const swaggerOptions = {
  swaggerDefinition: {
    myapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
