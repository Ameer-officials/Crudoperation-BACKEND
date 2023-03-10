import express from "express";
import {getAllUser, updateUser} from "../controller/user.js";

export const userRouter = express.Router();

userRouter.route("/getusers").get( getAllUser);
userRouter.route("/updateuser/:id").put( updateUser);
