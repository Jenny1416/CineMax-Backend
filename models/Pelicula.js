import mongoose from "mongoose";

const PeliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  poster: { type: String, required: true },
  genero: { type: String, required: true },
  duracion: { type: String, required: true },
  descripcion: { type: String },
  edad: { type: String } // solo si es recomendada
}, { timestamps: true });

export default mongoose.model("Pelicula", PeliculaSchema);
