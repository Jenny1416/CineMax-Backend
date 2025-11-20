import express from "express";
import { getVentas, crearVenta } from "../controllers/ventaController.js";

const router = express.Router();

router.get("/", getVentas);
router.post("/", crearVenta);

export default router;
