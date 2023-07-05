import app from "./app";
import mongoose from "mongoose";
import DB_HOST from "./config";
mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Server running. Use our API on port 3000");
    })
  )
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
