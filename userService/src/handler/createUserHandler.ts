import { Request, Response } from 'express'
import { createUser } from '../controller/createUser'
import { sendMail } from '../config/mailer'
import { validationMail } from '../utils/templates'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const SECRET_TOKEN = process.env.SECRET_TOKEN || 'defaultExpression'
    const { username, mail, password } = req.body
    const user = await createUser({ username, mail, password })
    const token = jwt.sign(user.id, SECRET_TOKEN)
    const template = validationMail(token)
    const subject = 'Validación de mail para tu gestor de stock'
    await sendMail(user, template, subject)
    res.send('Usuario creado exitosamente.')
  } catch (error) {
    if (error instanceof Error) res.json({ error: error.message })
  }
}
