const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const routers = require("./routers/routers");
const categoryR = require("./routers/product.route.js");
const errorHandler = require("./middleware/errorHandler");
require("./statics/constants");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const fs = require("fs");

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
    openapi: "3.0.0",
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
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization", // Use "Authorization" as the header key
          description: "Enter your JWT token here",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: [
    "./routers/product.route.js",
    "./routers/order.route.js",
    "./routers/productLikes.route.js",
    "./routers/user.route.js",
    "./routers/cart.route.js",
    "./routers/category.route.js",
    "./routers/order.route.js",
    "./routers/userProfile.route.js",
  ], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const swaggerUiOptions = {
  swaggerOptions: {
    persistAuthorization: true, // Enable token persistence
  },
};
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, swaggerUiOptions)
);

app.listen(port, async () => {
  console.log(
    `Server is running on port ${port} \nAccess Swagger: http://localhost:8000/api-docs`
  );
  try {
    if (!fs.existsSync("./temp/openUrl.txt")) return;
    const swaggerUrl = fs.readFileSync("./temp/openUrl.txt", "utf8");
    const { default: open } = await import("open");
    const isSwaggerOpened = await open(`${swaggerUrl}`);
    if (isSwaggerOpened) {
      fs.unlinkSync("./temp/openUrl.txt", (err) => {
        if (err) {
          console.error("Error removing the file:", err);
        }
      });
    }
  } catch (err) {
    console.error("Error reading the file:", err);
  }
});

const createTerminationFile = () => {
  try {
    fs.writeFileSync(
      "./temp/openUrl.txt",
      "http://localhost:8000/api-docs",
      (err) => {
        if (err) {
          console.error("Error writing to the file:", err);
        } else {
          console.log(`File created and content written successfully`);
        }
      }
    );
  } catch (e) {
    console.log("Something went wrong : ", e);
  }
};

// Create a listener for termination signals
process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing the server...");
  createTerminationFile();
  process.exit(0); // Ensure the process exits after handling the signal
});

// Handle other termination events if needed
process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
  createTerminationFile();
});
