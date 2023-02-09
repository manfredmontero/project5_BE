/* Importing the express module and creating an instance of it. */
const express = require("express");
const app = express.Router();
const Producto = require("../models/Producto");

app.get("/obtenerproducto", async (req, res) => {
  try {
    const producto = await Producto.find({});
    res.json({ producto });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
    });
  }
});

app.post("/agregarproducto", async (req, res) => {
  const { nombre, descripcion, precio, url } = req.body;

  try {
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      url,
    });
    res.json(nuevoProducto);
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error guardando los datos",
    });
  }
});

app.put("/actualizarproducto", async (req, res) => {
  const { id, nombre, descripcion, precio, url } = req.body;

  try {
    const actualizacionProducto = await Producto.findByIdAndUpdate(
      id,
      { nombre, descripcion, precio, url },
      { new: true }
    );
    res.json(actualizacionProducto);
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error actualizando el Producto",
    });
  }
});

app.delete("/borrarproducto", async (req, res) => {
  const { id } = req.body;

  try {
    const ProductoBorrado = await Producto.findByIdAndRemove({ _id: id });

    res.json(ProductoBorrado);
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error borrando el dato especificado",
    });
  }
});

module.exports = app;
