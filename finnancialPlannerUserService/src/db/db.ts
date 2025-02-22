import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const DB_DATA = process.env.DB_DATA

export const db = new Sequelize(
  `${DB_DATA}`,
  { logging: false }
)

const connectToDatabase = async () => {
  let tries = 5
  while (tries !== 0) {
    try {
      await db.authenticate()
      console.log('BDD conectada')
      tries = 0
    } catch (error) {
      tries--
      console.log(`Quedan ${tries} para la BDD`)
      console.log(error)
    }
  }
}

connectToDatabase()
