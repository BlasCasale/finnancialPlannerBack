import { User } from '../db/modeling'
import { UserType } from '../types'
import crypto from 'crypto'

export const createUser = async ({ mail, username, password }: { mail: string, username: string, password: string }): Promise<UserType> => {
  const findUsername = await User.findOne({ where: { username } }) as unknown as UserType

  if (findUsername) throw new Error(`Ya existe un usuario con este nombre de usuario ${username}`)

  const findMail = await User.findOne({ where: { mail } }) as unknown as UserType

  if (findMail) throw new Error(`Ya existe un usuario con este mail: ${mail}`)

  const hashedPass = crypto.createHash('sha256').update(password).digest('hex')

  const user = await User.create({ mail, username, password: hashedPass }) as unknown as UserType

  return user
}
