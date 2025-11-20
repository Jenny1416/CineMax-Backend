import Reserva from "../models/Reserva.js";

export const getReservas = async (req, res) => {
  const reservas = await Reserva.find();
  res.json(reservas);
};

export const crearReserva = async (req, res) => {
  const nueva = await Reserva.create(req.body);
  res.json(nueva);
};

export const actualizarReserva = async (req, res) => {
  const editada = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(editada);
};
