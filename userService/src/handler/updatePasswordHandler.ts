import { Request, Response } from 'express'
import { updatePassword } from '../controller/updatePassword'
import { ReponseUser } from '../types'

export const updatePasswordHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body
    const user = await updatePassword(data)
    const responseUser: ReponseUser = {
      id: user.id,
      mail: user.mail,
      username: user.username
    }
    res.json({ message: 'Usuario actualizado exitosamente', user: responseUser })
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
