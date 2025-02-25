import { Request, Response } from 'express'
import { getUserByMail } from '../controller/getUserByMail'
import { AuthResponse } from '../types'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const getUserByMailHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { mail, password }: { mail: string, password: string } = req.body
    const user = await getUserByMail(mail, password)

    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_TOKEN, { expiresIn: '1h' })

    const responseUser: AuthResponse = {
      user: {
        id: user.id,
        mail: user.mail,
        username: user.username
      },
      token
    }

    res.json(responseUser)
  } catch (error) {
    if (error instanceof Error) res.send(error.message)
  }
}
