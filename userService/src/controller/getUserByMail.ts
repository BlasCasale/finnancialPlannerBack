import { User } from '../db/modeling'
import crypto from 'crypto'
import { UserType } from '../types'

export const getUserByMail = async (mail: string, password: string): Promise<UserType> => {
  const user = await User.findOne({ where: { mail } }) as unknown as UserType

  if (!user) throw new Error(`No se ha encontrado un usuario registrado con el mail ${mail}`)

  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

  const hashedPassDB = crypto.createHash('sha256').update(user.password).digest('hex')

  if (hashedPassDB !== hashedPassword) throw new Error('Las contraseñas no coinciden, verifique los datos ingresados.')

  return user
}
