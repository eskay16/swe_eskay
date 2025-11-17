import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import cookieParser from "cookie-parser";
import corsOptions from './cors/cors.js';
import cors from "cors"

const app = express();

dotenv.config()

const portNum = process.env.PORT_NUMBER;

app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/user', userRoutes);
app.listen(portNum, (err) => {
  if (err) {
    console.log("Unable to listen: ", err.message);
  } else {
    console.log("server successfully  started");
  }
})