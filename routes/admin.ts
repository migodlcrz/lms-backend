import express from "express";
import requireAuth from "../middleware/requireAuth";
import {
  registerAdmin,
  loginAdmin,
  deleteAdmin,
  getAdmins,
  updateAdmin,
  googleLoginAdmin,
} from "../controllers/adminControllers";

const admin = express.Router();

admin.get("/", getAdmins);

admin.post("/register", registerAdmin);

admin.post("/login", loginAdmin);

admin.post("/login/google", googleLoginAdmin);

admin.patch("/update/:id", updateAdmin);

admin.delete("/delete/:id", deleteAdmin);

export default admin;
