import Usuario from "../models/Usuario.js";

export const registrar = async (req, res) => {
  const nuevo = await Usuario.create(req.body);
  res.json(nuevo);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email, password });

  if (!usuario) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  res.json(usuario);
};

export const getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};
