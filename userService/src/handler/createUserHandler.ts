import { Request, Response } from 'express'
import { createUser } from '../controller/createUser'
import { sendMail } from '../config/mailer'

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { username, mail, password } = req.body
    const user = await createUser({ username, mail, password })
    await sendMail(user)
    res.json({ message: 'Usuario creado existosamente', user })
  } catch (error) {
    if (error instanceof Error) res.json({ error: error.message })
  }
}
