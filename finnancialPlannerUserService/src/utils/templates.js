"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMail = void 0;
var validationMail = function (id) {
    return "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <h1>Bienvenido a tu gestor financiero</h1>\n    <div>\n      <p>Para confirmar tu usuario por favor ingresa a este link para la confirmaci\u00F3n:</p>\n      <a target=\"_blank\" href=\"http://localhost:3001/validateUser?id=".concat(id, "\">Confirmar</a>\n    </div>\n  </body>\n  </html>\n  ");
};
exports.validationMail = validationMail;
