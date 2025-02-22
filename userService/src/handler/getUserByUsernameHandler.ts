import { Request, Response } from 'express'
import { getUserByUsername } from '../controller/getUserByUsername'

export const getUserByUsernameHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const username = req.query.username as string
    const password = req.query.password as string
    const user = await getUserByUsername(username, password)
    res.json(user)
  } catch (error) {
    if (error instanceof Error) res.json({ error: error.message })
    else console.log('Ocurrió un error inesperado')
  }
}
