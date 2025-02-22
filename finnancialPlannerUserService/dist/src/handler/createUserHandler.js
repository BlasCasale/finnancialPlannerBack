"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const createUser_1 = require("../controller/createUser");
const mailer_1 = require("../config/mailer");
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, mail, password } = req.body;
        const user = yield (0, createUser_1.createUser)({ username, mail, password });
        yield (0, mailer_1.sendMail)(user.id, user.mail);
        res.json({ message: 'Usuario creado existosamente', user });
    }
    catch (error) {
        if (error instanceof Error)
            res.json({ error: error.message });
    }
});
exports.createUserHandler = createUserHandler;
