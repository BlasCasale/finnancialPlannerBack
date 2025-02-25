import { Request, Response } from 'express'
import { validateUser } from '../controller/validateUser'
import { sendMail } from '../config/mailer'
import { welcomeToApp } from '../utils/templates'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export const validateUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'
    const token = req.query.token as string
    const decoded = jwt.verify(token, SECRET_TOKEN) as string
    const user = await validateUser(decoded)
    const template = welcomeToApp()
    const subject = `Bienvenido ${user.username}`
    await sendMail(user, template, subject)
    res.send('Usuario validado exitosamente')
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message })
  }
}
