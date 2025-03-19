import userModel from "../models/user.models.js";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    await userModel.create({});
  } catch (error) {
    console.log("something went wrong to create user", error);
    res.status(400).json({ message: "error to create user" });
  }
};

export const login = async (req, res) => {
  res.send("hello login");
};

export const logout = (req, res) => {
  res.send("hello logout");
};

export const purchases = async (req, res) => {
  res.send("hello ");
};
