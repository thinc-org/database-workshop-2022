import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { courseRouter } from "./routes/course.route";
import { studentRouter } from "./routes/student.route";

dotenv.config();

const app = express();

const port = Number.parseInt(process.env.PORT ?? "3000");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());


app.use('/course', courseRouter)
app.use('/student', studentRouter)


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
