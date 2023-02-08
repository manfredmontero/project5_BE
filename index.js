const express = require('express')
const app = express()
const userRoutes = require('./routes/users')
const balanceRoutes = require('./routes/balance')
const productoRoutes = require('./routes/producto')
const cors = require('cors')
const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json())

//3. Rutas
app.use('/balance', balanceRoutes)
app.use('/usuario', userRoutes)
app.use('/producto', productoRoutes)
app.get('/', (req, res) => res.send('UCAMP API'))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log('El servidor está corriendo en 4000')
})
