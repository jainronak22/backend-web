
import express from "express";

import {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

// CREATE
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

// READ
router.get("/", getAllUsers);
router.get("/:id", getUserById);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

export default router;
