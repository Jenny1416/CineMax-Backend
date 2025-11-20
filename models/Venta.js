import mongoose from "mongoose";

// Guardamos lo que venga en el body, sin ponernos estrictos con la forma
const VentaSchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model("Venta", VentaSchema);
