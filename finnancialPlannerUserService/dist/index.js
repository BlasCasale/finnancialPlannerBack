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
const server_1 = require("./src/server");
const db_1 = require("./src/db/db");
const PORT = process.loadEnvFile('.env');
server_1.server.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.db.sync({ alter: true });
        console.log(`Escuchando en el puerto ${PORT}`);
    }
    catch (error) {
        console.log(error);
    }
}));
