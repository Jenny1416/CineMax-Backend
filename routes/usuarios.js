import express from "express";
import { registrar, login, getUsuarios } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/registrar", registrar);
router.post("/login", login);
router.get("/", getUsuarios);

export default router;
