import express from "express";
import { getPeliculas, crearPelicula, borrarPelicula, actualizarPelicula } from "../controllers/peliculaController.js";

const router = express.Router();

router.get("/", getPeliculas);
router.post("/", crearPelicula);
router.delete("/:id", borrarPelicula);
router.put("/:id", actualizarPelicula);

export default router;
