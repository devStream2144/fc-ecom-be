// swagger.js (or add to app.js/server.js directly)
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0", // You can use 'swagger: "2.0"' if using older Swagger version
  info: {
    title: "Express API with Swagger",
    version: "1.0.0",
    description: "A simple API documentation for Express API using Swagger",
  },
  servers: [
    {
      url: "http://localhost:8000", // Replace with your server's URL
      description: "Development server",
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to your API routes files (adjust according to your folder structure)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
