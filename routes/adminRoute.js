import express from "express";
import {
  // addAdmin, TO BE  REMOVED AFTER ADDING ADMIN
  getAllUser,
  deleteUser,
  putUser, 
  getUser,
  addUser,
} from "../controller/admin.js";

export const adminRouter = express.Router();

// adminRouter.route("/addadmin").get(addAdmin)  TO BE  REMOVED AFTER ADDING ADMIN
adminRouter.route("/adduser").get( addUser);
adminRouter.route("/getusers").get( getAllUser);
adminRouter.route("/getuser/:id").get( getUser);
adminRouter.route("/updateuser/:id").put( putUser);
adminRouter.route("/deleteuser/:id").delete( deleteUser);
