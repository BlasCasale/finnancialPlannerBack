import { Request, Response } from 'express'
import { getUserByUsername } from '../controller/getUserByUsername'
import { AuthResponse } from '../types'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const getUserByUsernameHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password }: { username: string, password: string } = req.body
    const user = await getUserByUsername(username, password)

    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'

    const token = jwt.sign({ id: user.id, mail: user.mail }, SECRET_TOKEN, { expiresIn: '1h' })

    const responseUser: AuthResponse = {
      user: {
        id: user.id,
        username: user.username,
        mail: user.mail
      },
      token
    }

    res.json(responseUser)
  } catch (error) {
    if (error instanceof Error) res.json({ error: error.message })
  }
}
