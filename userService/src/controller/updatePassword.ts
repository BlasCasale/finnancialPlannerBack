import { User } from '../db/modeling'
import { UserPasswordType, UserType } from '../types'
import crypto from 'crypto'

export const updatePassword = async (data: UserPasswordType): Promise<UserType> => {
  const user = await User.findByPk(data.id) as unknown as UserPasswordType

  if (!user) throw new Error(`No existe el usuario con ID ${data.id}`)

  const hashedPass = crypto.createHash('sha256').update(data.password).digest('hex')

  try {
    await user.update({ password: hashedPass })
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }

  const updatedUser = await User.findByPk(user.id) as unknown as UserType

  return updatedUser
}
