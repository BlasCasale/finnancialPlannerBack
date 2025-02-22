import { User } from '../db/modeling'
import { UserType } from '../types'
import crypto from 'crypto'

export const getUserByUsername = async (username: string, password: string): Promise<UserType> => {
  const user = await User.findOne({ where: { username } }) as unknown as UserType

  if (!user) throw new Error(`No se ha encontrado el nombre de usuario ${username}`)

  if (crypto.createHash('sha256').update(password).digest('hex') !== user.password) throw new Error('La contraseña enviada no coincide.')

  return user
}
