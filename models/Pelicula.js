import mongoose from "mongoose";

const PeliculaSchema = new mongoose.Schema({
  // Para lista de cartelera
  titulo: String,       // "Dracula: A Love Tale"
  poster: String,       // "/src/assets/img/posterX.jpg"
  genero: String,       // "Acción, Terror"
  duracion: String,     // "120min"

  // Para detalle
  title: String,        // título principal
  subtitle: String,
  genres: String,
  rating: String,
  desc: String,
  original: String,
  director: String,
  actors: String,
  img: String,
  banner: String,

  // Otros campos útiles
  edad: String,
  horarios: [String],
  precio: Number
});

export default mongoose.model("Pelicula", PeliculaSchema);
