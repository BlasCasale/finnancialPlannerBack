import { server } from './src/server'
import { db } from './src/db/db'
const PORT = process.loadEnvFile('.env')

server.listen(PORT, async () => {
  try {
    await db.sync({ alter: true })
    console.log(`Escuchando en el puerto ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})
