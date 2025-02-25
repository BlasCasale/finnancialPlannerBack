import { UserType } from '../types'
import dotenv from 'dotenv'

dotenv.config()

const variables = {
  mail: process.env.MAIL_ACCOUNT,
  apiKey: process.env.API_KEY,
  pass: process.env.MAIL_PASS,
  mailHost: process.env.MAIL_HOST,
  secretToken: process.env.SECRET_TOKEN || 'defaultExpression'
}

const loadFetch = async () => {
  // Importa dinámicamente node-fetch
  const { default: fetch, Headers } = await import('node-fetch')
  return { fetch, Headers }
}

export const sendMail = async (user: UserType, template: string, subject: string) => {
  try {
    // Cargar fetch y Headers dinámicamente
    const { fetch, Headers } = await loadFetch()

    const headers = new Headers({
      Authorization: `Bearer ${variables.apiKey}`,
      'Content-Type': 'application/json'
    })

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [user.mail],
        subject,
        html: template
      })
    })

    if (!response.ok) {
      throw new Error(`Error sending mail: ${response.statusText}`)
    }
  } catch (error) {
    await user.destroy()
    console.error('Error sending mail:', error)
  }
}
