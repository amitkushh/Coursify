import {
  signup,
  login,
  logout,
  purchases,
} from "../controllers/user.controllers.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/purchases", purchases);

export default userRouter;
