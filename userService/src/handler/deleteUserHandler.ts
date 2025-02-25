import { Request, Response } from 'express'
import { deleteUser } from '../controller/deleteUser'

export const deleteUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id }: { id: string } = req.body
    const response = await deleteUser(id)
    res.send(response)
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
