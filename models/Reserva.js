import mongoose from "mongoose";

const ReservaSchema = new mongoose.Schema({
  usuarioId: String,
  pelicula: String,
  cine: String,
  fecha: String,
  formato: String,
  hora: String,
  asientos: [{
    fila: String,
    columna: String,
    tipo: String,
    precio: Number
  }],
  estado: { type: String, enum: ["reservada", "pagada"], default: "reservada" },
  fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model("Reserva", ReservaSchema);
