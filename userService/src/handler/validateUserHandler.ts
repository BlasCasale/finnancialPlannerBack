import { Request, Response } from 'express'
import { validateUser } from '../controller/validateUser'

export const validateUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.query.id as string
    const response = await validateUser(id)
    res.send(response)
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message })
  }
}
