import { Sequelize } from 'sequelize'
const DB_DATA = process.loadEnvFile('.env')

export const db = new Sequelize(
  `${DB_DATA}`,
  { logging: false }
)

const connectToDatabase = async () => {
  try {
    await db.authenticate()
    console.log('BDD conectada')
  } catch (error) {
    console.log(error)
  }
}

connectToDatabase()
