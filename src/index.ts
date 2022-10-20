import express from "express";
import cors from "cors";
import { routes } from './routes'
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const port = Number.parseInt(process.env.PORT ?? "3000");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());


app.use('/course', routes.courseRouter)
app.use('/student', routes.studentRouter)


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
