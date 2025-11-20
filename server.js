import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexion a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado ✔"))
  .catch(err => console.error("Error MongoDB ❌", err));

app.get("/", (req, res) => {
  res.send("Backend CineMax funcionando ✔");
});

import peliculaRoutes from "./routes/peliculas.js";
import usuarioRoutes from "./routes/usuarios.js";
import reservaRoutes from "./routes/reservas.js";
import ventaRoutes from "./routes/ventas.js";

app.use("/peliculas", peliculaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/reservas", reservaRoutes);
app.use("/ventas", ventaRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

import Venta from "./models/Venta.js";

app.post("/ventas", async (req, res) => {
  try {
    const venta = new Venta(req.body);
    const saved = await venta.save();
    res.json(saved);
  } catch (error) {
    console.error("Error al guardar venta:", error);
    res.status(500).json({ error: "Error al guardar venta" });
  }
});
