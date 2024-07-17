import express from "express";
import { test, getusers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/users", getusers);

export default router;
