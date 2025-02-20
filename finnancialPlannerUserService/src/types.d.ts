export interface UserType {
  id: string
  username: string
  mail: string
  password: string
  isVerified: boolean
  verificationToken?: string
}
