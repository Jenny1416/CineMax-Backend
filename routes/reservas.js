import express from "express";
import { getReservas, crearReserva, actualizarReserva } from "../controllers/reservaController.js";

const router = express.Router();

router.get("/", getReservas);
router.post("/", crearReserva);
router.put("/:id", actualizarReserva);

export default router;
