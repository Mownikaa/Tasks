import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRoute from "./routes/user";
import middleware from "./Midleware/middleware";

const MONGODB_uri = 
  "mongodb+srv://Mownika:6A2qMTS47t3C535Y@cluster0.2folnaw.mongodb.net/ecommerce?retryWrites=true&w=majority";

const app = express();
const port = 8000;
app.use(express.json());
dotenv.config();

app.use("/users", middleware, userRoute);


mongoose.connect(
  MONGODB_uri,
  {
    
  })
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch((err:Error) =>{
  console.log("MongoDB connection error" +err);
  process.exit(1)
});













