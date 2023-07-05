import app from "./app";
import mongoose from "mongoose";
const DB_HOST =
  "mongodb+srv://Kolya:123456789A@cluster0.vjpjfz5.mongodb.net/contacts_book?retryWrites=true&w=majority";
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
