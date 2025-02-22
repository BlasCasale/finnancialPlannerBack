import { User } from '../db/modeling'
import { UserType } from '../types'

export const validateUser = async (id: string): Promise<string> => {
  const user = await User.findByPk(id) as unknown as UserType
  if (!user) throw new Error(`No se ha encontra el usuario con id ${id}`)
  await user.update({ isVerified: true }, {
    where: { id }
  })

  return 'Usuario verificado con exito.'
}
