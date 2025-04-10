import express from "express";
import cors from "cors";
import connectDB from "./db/db";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 7000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://barborn-1.onrender.com",
      "https://barborn.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options('*', cors());

app.use(express.json());

connectDB();

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api/v1/`);
});

export default app;
