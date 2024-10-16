import express from "express";
import handleUserLogin from '../controllers/login.controller.js'

const router = express.Router();

router.post("/", handleUserLogin);

export default router;