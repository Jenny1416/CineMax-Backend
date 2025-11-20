import mongoose from "mongoose";
import Pelicula from "./models/Pelicula.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
  console.log("Conectado a MongoDB");

  const data = [
    // COPIA AQUÍ TODOS LOS OBJETOS QUE TE ARMÉ ARRIBA
  ];

  await Pelicula.insertMany(data);
  console.log("Películas insertadas");
  process.exit();
})
.catch(err => console.error(err));
