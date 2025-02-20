import * as nodemailer from 'nodemailer'
import { validationMail } from '../utils/templates'
import dotenv from 'dotenv'

dotenv.config()

const variables = {
  mail: process.env.MAIL_ACCOUNT,
  pass: process.env.MAIL_PASS,
  host: process.env.MAIL_HOST
}

console.log(variables)

const transporter = nodemailer.createTransport({
  host: variables.host,
  port: 587,
  secure: false,
  auth: {
    user: variables.mail,
    pass: variables.pass
  }
})

export const sendMail = (id: string, mail: string): void => {
  const template = validationMail(id)

  transporter.sendMail({
    from: variables.mail,
    to: mail,
    subject: 'Validación de cuenta para tu gestor de finanzas',
    html: template
  })
}
