import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Models
import Venta from "./models/Venta.js";
import Pelicula from "./models/Pelicula.js";

// Rutas
import peliculasRoutes from "./routes/peliculas.js";

dotenv.config();
const app = express();

// === CORS ===
app.use(cors({
  origin: "*",
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

// === Body parser ===
app.use(express.json());

// === Conexión MongoDB ===
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado ✔"))
.catch((err) => console.error("Error MongoDB ❌", err));

// === Ruta de prueba ===
app.get("/", (req, res) => {
  res.send("Backend CineMax funcionando ✔");
});

// === RUTA PARA GUARDAR VENTAS ===
app.post("/ventas", async (req, res) => {
  try {
    console.log("📩 Venta recibida:", req.body);
    const venta = new Venta(req.body);
    const saved = await venta.save();
    res.json(saved);
  } catch (error) {
    console.error("❌ Error al guardar venta:", error);
    res.status(500).json({ error: "Error al guardar venta" });
  }
});

// === RUTAS DE PELÍCULAS (CORRECTAS) ===
app.use("/peliculas", peliculasRoutes);

// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
