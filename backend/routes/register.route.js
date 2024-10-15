//acá definimos todas las rutas para /register. Por cada verbo http, asignamos un controller.
import express from "express";
import createUser from '../controllers/register.controller.js'

const router = express.Router();

router.post("/", createUser);

export default router;