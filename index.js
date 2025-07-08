const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json()); // for parsing application/json

// GET /
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the root route!" });
});

// GET /hello/:name
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

// POST /items
app.post("/items", (req, res) => {
  const item = req.body;
  res.json({ received: item });
});

// POST /products
app.post("/products", (req, res) => {
  const product = req.body;
  res.json({ received: product });
});

// Export the handler
module.exports.handler = serverless(app);
