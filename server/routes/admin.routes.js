import express from "express";
import { signup, login, logout } from "../controllers/admin.controllers.js";

const adminRouter = express.Router();

adminRouter.post("/signup", signup);
adminRouter.post("/login", login);
adminRouter.get("/logout", logout);

export default adminRouter;
