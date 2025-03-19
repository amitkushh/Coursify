import express from "express";
import {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourses,
  courseDetails,
  buyCourses,
} from "../controllers/course.controllers.js";

const courseRouter = express.Router();

courseRouter.post("/create", createCourse);
courseRouter.put("/update/:courseId", updateCourse);
courseRouter.delete("/delete/:courseId", deleteCourse);

courseRouter.get("/courses", getCourses);
courseRouter.get("/:courseId", courseDetails);

courseRouter.post("/buy/:courseId", buyCourses);

export default courseRouter;
