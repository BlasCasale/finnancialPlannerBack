import { server } from './src/server'
import { db } from './src/db/db'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

server.listen(PORT, async () => {
  try {
    await db.sync({ alter: true })
    console.log(`Escuchando en el puerto http://localhost:${PORT}, servidor de usuarios`)
  } catch (error) {
    console.log(error)
  }
})
