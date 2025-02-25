export const validationMail = (token: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Usuario</title>
  </head>
  <body>
    <h1>Bienvenido a tu gestor de stock</h1>
    <div>
      <p>Para confirmar tu usuario, haz clic en el siguiente enlace:</p>
      <a target="_blank" href="http://localhost:3001/validateUser?token=${token}">Confirmar</a>
    </div>
  </body>
  </html>
  `
}

export const welcomeToApp = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Bienvenido a tu gestor de stock</h1>
      <div>
        <p>Usuario validado con exito.</p>
      </div>
    </body>
    </html>
  `
}
