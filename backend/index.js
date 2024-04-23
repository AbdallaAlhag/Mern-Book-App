// Youtube videeo 25:35, backend configured!
import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/bookRoutes.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body
// Option 1: Allow All origins with Default of cors(*)
app.use(express.json());
// Option 2: Allow Customs origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (req, res) => {
  // console.log(req)
  return res.status(234).send("Weclome to the MERN Stack Tutorial");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database!");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
