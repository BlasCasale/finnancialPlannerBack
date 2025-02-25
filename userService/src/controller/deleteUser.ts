import { User } from '../db/modeling'
import { UserType } from '../types'

export const deleteUser = async (id: string): Promise<string> => {
  const user = await User.findByPk(id) as unknown as UserType

  if (!user) throw new Error(`No se ha encontrado un usuario con el ID ${id}`)

  try {
    await user.destroy()
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }

  return `Usuario con ID ${id} eliminado exitosamente`
}
