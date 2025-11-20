import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema(
  {
    compra: {
      type: Object,
      required: true
    },

    cliente: {
      nombre: { type: String, required: true },
      email: { type: String, required: true },
      telefono: { type: String, required: true }
    },

    tarjeta: {
      type: String, // solo los últimos 4 dígitos
      required: true
    },

    fechaCompra: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // crea createdAt y updatedAt automáticamente
  }
);

export default mongoose.model("Venta", ventaSchema);
