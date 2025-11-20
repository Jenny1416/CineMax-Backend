import express from "express";
import Pelicula from "../models/Pelicula.js";

const router = express.Router();

// GET todas las películas
router.get("/", async (req, res) => {
  try {
    const pelis = await Pelicula.find();
    res.json(pelis);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo películas", details: err });
  }
});

// POST agregar una película
router.post("/", async (req, res) => {
  try {
    const nueva = new Pelicula(req.body);
    const guardada = await nueva.save();
    res.json(guardada);
  } catch (err) {
    res.status(400).json({ error: "Error guardando película", details: err });
  }
});

export default router;
