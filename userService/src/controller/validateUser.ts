import { User } from '../db/modeling'
import { UserType } from '../types'

export const validateUser = async (id: string): Promise<UserType> => {
  const user = await User.findByPk(id) as unknown as UserType
  if (!user) throw new Error(`No se ha encontra el usuario con id ${id}`)
  await user.update({ isVerified: true })

  return user
}
