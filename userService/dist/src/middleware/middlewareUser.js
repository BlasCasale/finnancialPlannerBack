"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMailBody = exports.validateMailQuery = exports.validatePasswordBody = exports.validatePasswordQuery = exports.validateUserNameBody = exports.validateUserNameQuery = exports.validateId = void 0;
const regExp_1 = require("../utils/regExp");
const validateId = (req, _res, next) => {
    const { id } = req.body;
    if (!id)
        throw new Error('Se debe enviar un ID para continuar.');
    if (typeof id !== 'string')
        throw new Error('Se debe enviar un dato de tipo string en el ID para poder continuar.');
    if (!regExp_1.uuidRegex.test(id))
        throw new Error('El ID enviado no cumple con el formato UUID.');
    next();
};
exports.validateId = validateId;
const validateUserNameQuery = (req, _res, next) => {
    const { username } = req.query;
    if (!username)
        throw new Error('Por favor envie el nombre de usuario para continuar.');
    if (typeof username !== 'string')
        throw new Error('Se debe enviar un tipo string en el nombre de usuario para paoder continuar.');
    if (!regExp_1.nameRegex.test(username))
        throw new Error('El formato del nombre de usuario es una letra al comienzo y luego solo letras y/o números');
    next();
};
exports.validateUserNameQuery = validateUserNameQuery;
const validateUserNameBody = (req, _res, next) => {
    const { username } = req.body;
    if (!username)
        throw new Error('Por favor envie el nombre de usuario para continuar.');
    if (typeof username !== 'string')
        throw new Error('Se debe enviar un tipo string en el nombre de usuario para poder continuar.');
    if (!regExp_1.nameRegex.test(username))
        throw new Error('El formato del nombre de usuario es una letra al comienzo y luego solo letras y/o números');
    next();
};
exports.validateUserNameBody = validateUserNameBody;
const validatePasswordQuery = (req, _res, next) => {
    const { password } = req.query;
    if (!password)
        throw new Error('Por favor envie la contraseña para continuar.');
    if (typeof password !== 'string')
        throw new Error('Se debe enviar un tipo string en la contraseña para poder continuar.');
    if (!regExp_1.passRegex.test(password))
        throw new Error('Se debe enviar una contraseña que comience con una letra, contenga al menos un número y un caracter especial.');
    next();
};
exports.validatePasswordQuery = validatePasswordQuery;
const validatePasswordBody = (req, _res, next) => {
    const { password } = req.body;
    if (!password)
        throw new Error('Por favor envie la contraseña para continuar.');
    if (typeof password !== 'string')
        throw new Error('Se debe enviar un tipo string en la contraseña para poder continuar.');
    if (!regExp_1.passRegex.test(password))
        throw new Error('Se debe enviar una contraseña que comience con una letra, contenga al menos un número y un caracter especial.');
    next();
};
exports.validatePasswordBody = validatePasswordBody;
const validateMailQuery = (req, _res, next) => {
    const { mail } = req.query;
    if (!mail)
        throw new Error('Por favor envie el mail para continuar.');
    if (typeof mail !== 'string')
        throw new Error('Se debe enviar un tipo string en el mail para poder continuar.');
    if (!regExp_1.mailRegex.test(mail))
        throw new Error('Se debe enviar un mail en el formato estipulado para los mismos.');
    next();
};
exports.validateMailQuery = validateMailQuery;
const validateMailBody = (req, _res, next) => {
    const { mail } = req.body;
    if (!mail)
        throw new Error('Por favor envie el mail para continuar.');
    if (typeof mail !== 'string')
        throw new Error('Se debe enviar un tipo string en el mail para poder continuar.');
    if (!regExp_1.mailRegex.test(mail))
        throw new Error('Se debe enviar un mail en el formato estipulado para los mismos.');
    next();
};
exports.validateMailBody = validateMailBody;
