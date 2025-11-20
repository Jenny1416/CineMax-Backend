import Venta from "../models/Venta.js";

export const getVentas = async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
};

export const crearVenta = async (req, res) => {
  // Aquí guardamos TODO lo que venga en req.body
  const nueva = await Venta.create(req.body);
  res.json(nueva);
};
