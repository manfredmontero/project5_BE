// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const ProductoSchema = mongoose.Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
			required: true,
		},
		precio: {
			type: String,
			required: true,
		},
        url: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
	}
)

// 3. MODELO
const Producto = mongoose.model('Producto', ProductoSchema)

// 4. EXPORTACIÓN
module.exports = Producto
