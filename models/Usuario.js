import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  rol: { type: String, enum: ["admin", "cajero", "cliente"], default: "cliente" },
});

export default mongoose.model("Usuario", UsuarioSchema);
