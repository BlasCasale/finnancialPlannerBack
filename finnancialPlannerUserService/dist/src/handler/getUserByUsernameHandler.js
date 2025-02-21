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
exports.getUserByUsernameHandler = void 0;
const getUserByUsername_1 = require("../controller/getUserByUsername");
const getUserByUsernameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.query.username;
        const password = req.query.password;
        const user = yield (0, getUserByUsername_1.getUserByUsername)(username, password);
        res.json(user);
    }
    catch (error) {
        if (error instanceof Error)
            res.json({ error: error.message });
        else
            console.log('Ocurrió un error inesperado');
    }
});
exports.getUserByUsernameHandler = getUserByUsernameHandler;
