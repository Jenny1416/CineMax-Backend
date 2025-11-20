import Pelicula from "../models/Pelicula.js";

export const getPeliculas = async (req, res) => {
  const peliculas = await Pelicula.find();
  res.json(peliculas);
};

export const crearPelicula = async (req, res) => {
  const nueva = await Pelicula.create(req.body);
  res.json(nueva);
};

export const borrarPelicula = async (req, res) => {
  await Pelicula.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Película eliminada" });
};

export const actualizarPelicula = async (req, res) => {
  const editada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(editada);
};
