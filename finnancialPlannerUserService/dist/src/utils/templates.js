"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMail = void 0;
const validationMail = (id) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Bienvenido a tu gestor financiero</h1>
    <div>
      <p>Para confirmar tu usuario por favor ingresa a este link para la confirmación:</p>
      <a target="_blank" href="http://localhost:3001/validateUser?id=${id}">Confirmar</a>
    </div>
  </body>
  </html>
  `;
};
exports.validationMail = validationMail;
