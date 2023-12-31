const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRoute = require("./routes/api/contactsApi");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json);

app.use("/api/contacts", contactsRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
module.exports = app;
