import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/mongoose.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import courseRouter from "./routes/course.routes.js";
import orderRouter from "./routes/order.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());

// All Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/order", orderRouter);

app.get("/", (req, res) => {
  res.json({
    message: "welcome",
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
