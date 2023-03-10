import mongoose from "mongoose";

const adminSchmea = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export const Admin = mongoose.model("Admin", adminSchmea);
